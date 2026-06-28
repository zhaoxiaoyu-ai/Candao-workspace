import type {
  ComponentLibrary,
  ConversionWarning,
  DesignTokenSet,
  FigmaContextSnapshot
} from "./types.js";

export interface FigmaPolicyResult {
  allowed: boolean;
  snapshot: FigmaContextSnapshot;
  warnings: ConversionWarning[];
}

export function buildFigmaContextSnapshot(
  library: ComponentLibrary | undefined,
  tokens: DesignTokenSet
): FigmaContextSnapshot {
  const variableEntries = library?.variables ? Object.values(library.variables) : [];
  const colorVariables = variableEntries.filter((variable) => variable.resolvedType === "COLOR");
  const floatVariables = variableEntries.filter((variable) => variable.resolvedType === "FLOAT");

  const normalizedColors = new Set(
    colorVariables.map((variable) => (typeof variable.value === "string" ? variable.value.toLowerCase() : String(variable.value)))
  );
  const normalizedFloats = new Set(floatVariables.map((variable) => variable.value));

  const colorCoverage = tokens.colors.filter((color) => normalizedColors.has(color.toLowerCase())).length;
  const spacingCoverage = tokens.spacing.filter((value) => normalizedFloats.has(value)).length;
  const radiusCoverage = tokens.radius.filter((value) => normalizedFloats.has(value)).length;

  return {
    componentCount: library?.entries ? Object.keys(library.entries).length : 0,
    variableCount: variableEntries.length,
    codeConnectCount: library?.codeConnect ? Object.keys(library.codeConnect).length : 0,
    variableCoverage: {
      colors: colorCoverage,
      spacing: spacingCoverage,
      radius: radiusCoverage
    }
  };
}

export function enforceFigmaPolicy(
  snapshot: FigmaContextSnapshot,
  tokens: DesignTokenSet
): FigmaPolicyResult {
  const warnings: ConversionWarning[] = [];

  if (snapshot.componentCount === 0) {
    warnings.push({
      code: "FIGMA_COMPONENT_CONTEXT_REQUIRED",
      message:
        "Figma component context is empty. Provide a library with at least one `entries` mapping before generation."
    });
  }

  if (snapshot.variableCount === 0) {
    warnings.push({
      code: "FIGMA_VARIABLE_CONTEXT_REQUIRED",
      message:
        "Figma variable context is empty. Provide a library with `variables` so styles can be bound instead of invented."
    });
  }

  if (snapshot.codeConnectCount === 0) {
    warnings.push({
      code: "FIGMA_CODE_CONNECT_CONTEXT_RECOMMENDED",
      message:
        "No Code Connect mappings were loaded. This is recommended when component resolution depends on code references."
    });
  }

  const hasTokens =
    tokens.colors.length > 0 ||
    tokens.typography.length > 0 ||
    tokens.spacing.length > 0 ||
    tokens.radius.length > 0 ||
    tokens.effects.length > 0;
  if (!hasTokens) {
    warnings.push({
      code: "TOKEN_COVERAGE_EMPTY",
      message: "No design tokens were extracted from the XD input. Final generation must not invent styles."
    });
  }

  const totalStyleTokens = tokens.colors.length + tokens.spacing.length + tokens.radius.length;
  if (totalStyleTokens > 0) {
    const coveredTokens =
      snapshot.variableCoverage.colors + snapshot.variableCoverage.spacing + snapshot.variableCoverage.radius;
    const coverageRatio = coveredTokens / totalStyleTokens;
    if (coverageRatio < 0.5) {
      warnings.push({
        code: "VARIABLE_COVERAGE_LOW",
        message:
          `Only ${coveredTokens}/${totalStyleTokens} style tokens matched a Figma variable. Expand the variable library to cover the XD palette.`
      });
    }
  }

  const blockingCodes = new Set([
    "FIGMA_COMPONENT_CONTEXT_REQUIRED",
    "FIGMA_VARIABLE_CONTEXT_REQUIRED",
    "TOKEN_COVERAGE_EMPTY"
  ]);

  return {
    allowed: warnings.every((warning) => !blockingCodes.has(warning.code)),
    snapshot,
    warnings
  };
}
