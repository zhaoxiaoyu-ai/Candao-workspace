import { strict as assert } from "node:assert";
import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { after, before, describe, it } from "node:test";
import { parseCliArgs } from "../src/cli.js";
import { createConverter, PolicyGateError } from "../src/core/converter.js";
import { buildFigmaContextSnapshot, enforceFigmaPolicy } from "../src/core/figma-policy.js";
import { loadComponentLibrary } from "../src/core/library-loader.js";
import { mapXdTreeToFigma } from "../src/core/figma-mapper.js";
import { extractDesignTokens } from "../src/core/token-extractor.js";
import { parseXdFile, XdBinaryUnsupportedError } from "../src/core/xd-parser.js";
import { ValidationError } from "../src/core/validation.js";

const projectRoot = path.resolve(new URL("..", import.meta.url).pathname);
const sampleXd = path.join(projectRoot, "assets/sample/sample-xd.json");
const sampleLibrary = path.join(projectRoot, "assets/sample/figma-library.json");

let tempRoot: string;

before(async () => {
  tempRoot = await fs.mkdtemp(path.join(os.tmpdir(), "xd-to-figma-"));
});

after(async () => {
  await fs.rm(tempRoot, { recursive: true, force: true });
});

describe("cli.parseCliArgs", () => {
  it("rejects unknown flags", () => {
    assert.throws(() => parseCliArgs(["--input", "a.json", "--weird", "1"]), /Unknown CLI argument/);
  });

  it("rejects missing value after flag", () => {
    assert.throws(() => parseCliArgs(["--input"]), /requires a value/);
  });

  it("rejects flag value that starts with another flag", () => {
    assert.throws(() => parseCliArgs(["--input", "--output"]), /requires a value/);
  });

  it("requires --input", () => {
    assert.throws(() => parseCliArgs([]), /Missing required argument/);
  });
});

describe("xd-parser", () => {
  it("throws XdBinaryUnsupportedError for .xd files", async () => {
    const fakeBinary = path.join(tempRoot, "fake.xd");
    await fs.writeFile(fakeBinary, Buffer.from([0, 1, 2, 3]));
    await assert.rejects(parseXdFile(fakeBinary), (err: unknown) => err instanceof XdBinaryUnsupportedError);
  });

  it("rejects malformed JSON with actionable error", async () => {
    const badJson = path.join(tempRoot, "bad.json");
    await fs.writeFile(badJson, "{not json}", "utf8");
    await assert.rejects(parseXdFile(badJson), /Failed to parse XD JSON/);
  });

  it("validates node schema and rejects wrong types", async () => {
    const bad = path.join(tempRoot, "schema.json");
    await fs.writeFile(
      bad,
      JSON.stringify({ document: { id: "root", layout: { itemSpacing: "twelve" }, children: [] } }),
      "utf8"
    );
    await assert.rejects(parseXdFile(bad), (err: unknown) => err instanceof ValidationError);
  });

  it("accepts valid sample", async () => {
    const result = await parseXdFile(sampleXd);
    assert.equal(result.root.id, "root");
    assert.equal(result.root.children.length, 2);
  });
});

describe("library-loader", () => {
  it("loads components, variables and codeConnect", async () => {
    const library = await loadComponentLibrary(sampleLibrary);
    assert.ok(library);
    assert.equal(Object.keys(library.entries).length, 2);
    assert.ok(library.variables && Object.keys(library.variables).length >= 8);
    assert.ok(library.codeConnect);
  });

  it("rejects missing entries field", async () => {
    const bad = path.join(tempRoot, "library-bad.json");
    await fs.writeFile(bad, JSON.stringify({}), "utf8");
    await assert.rejects(loadComponentLibrary(bad), /missing or non-object "entries"/);
  });

  it("rejects variable with wrong resolvedType", async () => {
    const bad = path.join(tempRoot, "library-bad-var.json");
    await fs.writeFile(
      bad,
      JSON.stringify({
        entries: { "A": { figmaComponentKey: "k", figmaComponentName: "A" } },
        variables: { "v": { id: "v1", name: "v", resolvedType: "ENUM", value: "x" } }
      }),
      "utf8"
    );
    await assert.rejects(loadComponentLibrary(bad), /resolvedType must be one of/);
  });
});

describe("figma-policy", () => {
  it("blocks when components are missing", () => {
    const tokens = extractDesignTokens({
      id: "r",
      name: "r",
      type: "DOCUMENT",
      children: [
        { id: "c", name: "c", type: "FRAME", children: [], styles: { fill: "#000000" } }
      ]
    });
    const snapshot = buildFigmaContextSnapshot(undefined, tokens);
    const result = enforceFigmaPolicy(snapshot, tokens);
    assert.equal(result.allowed, false);
    assert.ok(result.warnings.some((w) => w.code === "FIGMA_COMPONENT_CONTEXT_REQUIRED"));
    assert.ok(result.warnings.some((w) => w.code === "FIGMA_VARIABLE_CONTEXT_REQUIRED"));
  });

  it("does not allow a library with entries-only (variables still missing)", async () => {
    const onlyComponents = path.join(tempRoot, "only-components.json");
    await fs.writeFile(
      onlyComponents,
      JSON.stringify({ entries: { A: { figmaComponentKey: "k", figmaComponentName: "A" } } }),
      "utf8"
    );
    const library = await loadComponentLibrary(onlyComponents);
    const tokens = extractDesignTokens({
      id: "r",
      name: "r",
      type: "DOCUMENT",
      children: [{ id: "c", name: "c", type: "FRAME", children: [], styles: { fill: "#000" } }]
    });
    const snapshot = buildFigmaContextSnapshot(library, tokens);
    const policy = enforceFigmaPolicy(snapshot, tokens);
    assert.equal(policy.allowed, false);
    assert.ok(policy.warnings.some((w) => w.code === "FIGMA_VARIABLE_CONTEXT_REQUIRED"));
  });
});

describe("figma-mapper variable binding", () => {
  it("binds known colors and spacing to variables, warns on unknowns", async () => {
    const parsed = await parseXdFile(sampleXd);
    const library = await loadComponentLibrary(sampleLibrary);
    const tokens = extractDesignTokens(parsed.root);
    const mapping = mapXdTreeToFigma(parsed.root, tokens, library);

    assert.ok(mapping.boundVariables > 0, "expected at least one bound variable");
    assert.equal(mapping.matchedComponents, 2);
    assert.equal(mapping.unmatchedComponents, 0);

    const hero = mapping.document.children[0];
    assert.equal(hero.type, "INSTANCE");
    assert.equal(hero.boundComponentKey, "hero-banner-key");
    assert.ok(hero.fills?.[0].boundVariable, "hero fill should be bound to a variable");
    assert.equal(hero.fills?.[0].boundVariable?.variableName, "color/surface/cream");

    const cta = mapping.document.children[1];
    assert.equal(cta.boundVariables?.cornerRadius?.variableName, "radius/pill");
    assert.equal(cta.boundVariables?.paddingLeft?.variableName, "space/md");
    assert.equal(cta.boundVariables?.paddingTop?.variableName, "space/sm");
    assert.equal(cta.boundVariables?.itemSpacing?.variableName, "space/xs");
    // hero has cornerRadius=24; space/md=24 also exists, but cornerRadius must route to radius pool
    assert.equal(hero.boundVariables?.cornerRadius?.variableName, "radius/lg");
  });

  it("uses independent primary/counter axis sizing", async () => {
    const parsed = await parseXdFile(sampleXd);
    const tokens = extractDesignTokens(parsed.root);
    const library = await loadComponentLibrary(sampleLibrary);
    const mapping = mapXdTreeToFigma(parsed.root, tokens, library);
    const hero = mapping.document.children[0];
    // sample hero has sizingMode FILL → both axes AUTO
    assert.equal(hero.primaryAxisSizingMode, "AUTO");
    assert.equal(hero.counterAxisSizingMode, "AUTO");
  });

  it("does not fabricate layoutMode when XD did not provide one", () => {
    const tokens = extractDesignTokens({ id: "r", name: "r", type: "FRAME", children: [] });
    const library: Parameters<typeof mapXdTreeToFigma>[2] = {
      entries: { A: { figmaComponentKey: "k", figmaComponentName: "A" } },
      variables: { v: { id: "v", name: "v", resolvedType: "COLOR", value: "#000000" } }
    };
    const mapping = mapXdTreeToFigma(
      {
        id: "r",
        name: "r",
        type: "FRAME",
        children: [
          { id: "c1", name: "c1", type: "FRAME", children: [] },
          { id: "c2", name: "c2", type: "FRAME", children: [] }
        ]
      },
      tokens,
      library
    );
    assert.equal(mapping.document.layoutMode, undefined, "must not invent VERTICAL when XD gave no layoutMode");
  });
});

describe("converter end-to-end", () => {
  it("writes all artifacts and produces a non-empty report", async () => {
    const outputDir = path.join(tempRoot, "out-e2e");
    const result = await createConverter().convert({
      input: sampleXd,
      output: outputDir,
      library: sampleLibrary
    });
    assert.equal(result.status, "completed");
    for (const file of result.outputs) {
      const stat = await fs.stat(file);
      assert.ok(stat.size > 0, `${path.basename(file)} should be non-empty`);
    }
    assert.ok(result.report.summary.boundVariables > 0);
    assert.equal(result.report.policy.generationAllowed, true);
    assert.equal(result.report.policy.snapshot.codeConnectCount, 2);
  });

  it("rejects a library-less run with PolicyGateError", async () => {
    await assert.rejects(
      createConverter().convert({
        input: sampleXd,
        output: path.join(tempRoot, "out-blocked")
      }),
      (err: unknown) => err instanceof PolicyGateError
    );
  });
});
