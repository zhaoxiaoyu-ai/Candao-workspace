import { promises as fs } from "node:fs";
import path from "node:path";
import type { CliOptions } from "../cli.js";
import { buildFigmaContextSnapshot, enforceFigmaPolicy } from "./figma-policy.js";
import { loadComponentLibrary } from "./library-loader.js";
import type {
  ConversionArtifacts,
  ConversionReport,
  ConversionResult,
  ConversionWarning,
  FigmaNode,
  XdNode
} from "./types.js";
import { mapXdTreeToFigma } from "./figma-mapper.js";
import { extractDesignTokens } from "./token-extractor.js";
import { parseXdFile } from "./xd-parser.js";

export interface Converter {
  convert(options: CliOptions): Promise<ConversionResult>;
}

export class PolicyGateError extends Error {
  constructor(public readonly warnings: ConversionWarning[]) {
    const blocking = warnings
      .filter((warning) =>
        ["FIGMA_COMPONENT_CONTEXT_REQUIRED", "FIGMA_VARIABLE_CONTEXT_REQUIRED", "TOKEN_COVERAGE_EMPTY"].includes(
          warning.code
        )
      )
      .map((warning) => `- [${warning.code}] ${warning.message}`)
      .join("\n");
    super(`Figma policy check failed:\n${blocking}`);
    this.name = "PolicyGateError";
  }
}

function countXdNodes(node: XdNode): number {
  return 1 + node.children.reduce((sum, child) => sum + countXdNodes(child), 0);
}

function countFigmaNodes(node: FigmaNode): number {
  return 1 + node.children.reduce((sum, child) => sum + countFigmaNodes(child), 0);
}

function toArtifacts(outputDir: string): ConversionArtifacts {
  return {
    figmaDocumentPath: path.join(outputDir, "figma-document.json"),
    designTokensPath: path.join(outputDir, "design-tokens.json"),
    conversionReportPath: path.join(outputDir, "conversion-report.json")
  };
}

async function writeJsonFile(filePath: string, data: unknown): Promise<void> {
  await fs.writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

export function createConverter(): Converter {
  return {
    async convert(options) {
      const parsed = await parseXdFile(options.input);
      const library = await loadComponentLibrary(options.library);
      const tokens = extractDesignTokens(parsed.root);

      const snapshot = buildFigmaContextSnapshot(library, tokens);
      const policy = enforceFigmaPolicy(snapshot, tokens);

      if (!policy.allowed) {
        throw new PolicyGateError(policy.warnings);
      }

      const mapping = mapXdTreeToFigma(parsed.root, tokens, library);

      await fs.mkdir(options.output, { recursive: true });

      const artifacts = toArtifacts(options.output);
      const report: ConversionReport = {
        input: {
          path: parsed.metadata.inputPath,
          fileType: parsed.metadata.fileType,
          bytes: parsed.metadata.bytes
        },
        policy: {
          figmaContextQueried: Boolean(library),
          componentsLoaded: snapshot.componentCount > 0,
          variablesLoaded: snapshot.variableCount > 0,
          codeConnectLoaded: snapshot.codeConnectCount > 0,
          generationAllowed: policy.allowed,
          snapshot
        },
        summary: {
          xdNodeCount: countXdNodes(parsed.root),
          figmaNodeCount: countFigmaNodes(mapping.document),
          matchedComponents: mapping.matchedComponents,
          unmatchedComponents: mapping.unmatchedComponents,
          boundVariables: mapping.boundVariables,
          unboundLiterals: mapping.unboundLiterals,
          warnings: parsed.warnings.length + policy.warnings.length + mapping.warnings.length
        },
        warnings: [...parsed.warnings, ...policy.warnings, ...mapping.warnings]
      };

      await Promise.all([
        writeJsonFile(artifacts.figmaDocumentPath, mapping.document),
        writeJsonFile(artifacts.designTokensPath, tokens),
        writeJsonFile(artifacts.conversionReportPath, report)
      ]);

      return {
        status: "completed",
        outputs: [artifacts.figmaDocumentPath, artifacts.designTokensPath, artifacts.conversionReportPath],
        report
      };
    }
  };
}
