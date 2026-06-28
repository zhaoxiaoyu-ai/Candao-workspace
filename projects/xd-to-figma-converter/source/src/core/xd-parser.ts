import { promises as fs } from "node:fs";
import path from "node:path";
import type { ParsedXdDocument, XdLayout, XdNode, XdStyle } from "./types.js";
import {
  ValidationError,
  assertRecord,
  isRecord,
  optionalEnum,
  optionalNumber,
  optionalString,
  optionalStringArray
} from "./validation.js";

export class XdBinaryUnsupportedError extends Error {
  constructor(filePath: string) {
    super(
      `Binary .xd parsing is not implemented. Received ${path.basename(filePath)}. ` +
        `Export the document to JSON (see docs/xd-to-figma-playbook.md) or open an issue.`
    );
    this.name = "XdBinaryUnsupportedError";
  }
}

const LAYOUT_MODES = ["NONE", "HORIZONTAL", "VERTICAL"] as const;
const SIZING_MODES = ["FIXED", "HUG", "FILL"] as const;
const PRIMARY_ALIGN = ["MIN", "CENTER", "MAX", "SPACE_BETWEEN"] as const;
const COUNTER_ALIGN = ["MIN", "CENTER", "MAX", "BASELINE"] as const;

function normalizeStyles(value: unknown, path: string): XdStyle | undefined {
  if (value === undefined) return undefined;
  const source = assertRecord(value, path);
  const result: XdStyle = {
    fill: optionalString(source.fill, `${path}.fill`),
    strokes: optionalStringArray(source.strokes, `${path}.strokes`),
    textColor: optionalString(source.textColor, `${path}.textColor`),
    fontFamily: optionalString(source.fontFamily, `${path}.fontFamily`),
    fontWeight: optionalString(source.fontWeight, `${path}.fontWeight`),
    fontSize: optionalNumber(source.fontSize, `${path}.fontSize`),
    lineHeight: optionalNumber(source.lineHeight, `${path}.lineHeight`),
    letterSpacing: optionalNumber(source.letterSpacing, `${path}.letterSpacing`),
    cornerRadius: optionalNumber(source.cornerRadius, `${path}.cornerRadius`),
    opacity: optionalNumber(source.opacity, `${path}.opacity`),
    effects: optionalStringArray(source.effects, `${path}.effects`)
  };
  return result;
}

function normalizeLayout(value: unknown, path: string): XdLayout | undefined {
  if (value === undefined) return undefined;
  const source = assertRecord(value, path);
  return {
    layoutMode: optionalEnum(source.layoutMode, LAYOUT_MODES, `${path}.layoutMode`),
    sizingMode: optionalEnum(source.sizingMode, SIZING_MODES, `${path}.sizingMode`),
    primaryAxisSizingMode: optionalEnum(
      source.primaryAxisSizingMode,
      SIZING_MODES,
      `${path}.primaryAxisSizingMode`
    ),
    counterAxisSizingMode: optionalEnum(
      source.counterAxisSizingMode,
      SIZING_MODES,
      `${path}.counterAxisSizingMode`
    ),
    primaryAxisAlignItems: optionalEnum(
      source.primaryAxisAlignItems,
      PRIMARY_ALIGN,
      `${path}.primaryAxisAlignItems`
    ),
    counterAxisAlignItems: optionalEnum(
      source.counterAxisAlignItems,
      COUNTER_ALIGN,
      `${path}.counterAxisAlignItems`
    ),
    itemSpacing: optionalNumber(source.itemSpacing, `${path}.itemSpacing`),
    paddingTop: optionalNumber(source.paddingTop, `${path}.paddingTop`),
    paddingRight: optionalNumber(source.paddingRight, `${path}.paddingRight`),
    paddingBottom: optionalNumber(source.paddingBottom, `${path}.paddingBottom`),
    paddingLeft: optionalNumber(source.paddingLeft, `${path}.paddingLeft`),
    width: optionalNumber(source.width, `${path}.width`),
    height: optionalNumber(source.height, `${path}.height`),
    x: optionalNumber(source.x, `${path}.x`),
    y: optionalNumber(source.y, `${path}.y`)
  };
}

function normalizeConstraints(value: unknown, path: string): Record<string, string> | undefined {
  if (value === undefined) return undefined;
  const source = assertRecord(value, path);
  const result: Record<string, string> = {};
  for (const [key, entry] of Object.entries(source)) {
    if (typeof entry !== "string") {
      throw new ValidationError(`Expected string constraint value`, `${path}.${key}`);
    }
    result[key] = entry;
  }
  return result;
}

function normalizeNode(input: unknown, path: string, fallbackIndex = 0): XdNode {
  const source = assertRecord(input, path);
  const children = Array.isArray(source.children)
    ? source.children.map((child, childIndex) => normalizeNode(child, `${path}.children[${childIndex}]`, childIndex))
    : [];

  return {
    id: optionalString(source.id, `${path}.id`) ?? `node-${fallbackIndex}`,
    name: optionalString(source.name, `${path}.name`) ?? `Node ${fallbackIndex + 1}`,
    type: optionalString(source.type, `${path}.type`) ?? "GROUP",
    componentName: optionalString(source.componentName, `${path}.componentName`),
    children,
    styles: normalizeStyles(source.styles, `${path}.styles`),
    layout: normalizeLayout(source.layout, `${path}.layout`),
    constraints: normalizeConstraints(source.constraints, `${path}.constraints`),
    source: isRecord(source) ? source : undefined
  };
}

export async function parseXdFile(inputPath: string): Promise<ParsedXdDocument> {
  const stats = await fs.stat(inputPath);
  const fileType = path.extname(inputPath).toLowerCase();
  const warnings: ParsedXdDocument["warnings"] = [];

  if (fileType !== ".json") {
    throw new XdBinaryUnsupportedError(inputPath);
  }

  let raw: string;
  try {
    raw = await fs.readFile(inputPath, "utf8");
  } catch (error) {
    throw new Error(`Failed to read XD input "${inputPath}": ${(error as Error).message}`);
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(`Failed to parse XD JSON "${inputPath}": ${(error as Error).message}`);
  }

  const rootSource = isRecord(parsed) ? parsed.document ?? parsed.root ?? parsed : parsed;

  return {
    root: normalizeNode(rootSource, "$"),
    metadata: {
      inputPath,
      fileType,
      bytes: stats.size
    },
    warnings
  };
}
