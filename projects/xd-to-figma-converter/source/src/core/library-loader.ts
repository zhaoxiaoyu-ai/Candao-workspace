import { promises as fs } from "node:fs";
import type {
  CodeConnectMapping,
  ComponentLibrary,
  ComponentLibraryEntry,
  FigmaVariable,
  FigmaVariableType
} from "./types.js";
import { ValidationError, assertRecord, isRecord, optionalString } from "./validation.js";

const VARIABLE_TYPES: readonly FigmaVariableType[] = ["COLOR", "FLOAT", "STRING", "BOOLEAN"];

function parseComponentEntry(value: unknown, path: string): ComponentLibraryEntry {
  const source = assertRecord(value, path);
  const figmaComponentKey = optionalString(source.figmaComponentKey, `${path}.figmaComponentKey`);
  const figmaComponentName = optionalString(source.figmaComponentName, `${path}.figmaComponentName`);
  if (!figmaComponentKey) {
    throw new ValidationError(`Missing required field figmaComponentKey`, path);
  }
  if (!figmaComponentName) {
    throw new ValidationError(`Missing required field figmaComponentName`, path);
  }
  return {
    figmaComponentKey,
    figmaComponentName,
    signature: optionalString(source.signature, `${path}.signature`)
  };
}

function parseVariable(value: unknown, path: string): FigmaVariable {
  const source = assertRecord(value, path);
  const id = optionalString(source.id, `${path}.id`);
  const name = optionalString(source.name, `${path}.name`);
  const resolvedType = optionalString(source.resolvedType, `${path}.resolvedType`);
  if (!id) throw new ValidationError(`Missing required field id`, path);
  if (!name) throw new ValidationError(`Missing required field name`, path);
  if (!resolvedType || !VARIABLE_TYPES.includes(resolvedType as FigmaVariableType)) {
    throw new ValidationError(`resolvedType must be one of ${VARIABLE_TYPES.join("|")}`, `${path}.resolvedType`);
  }
  const rawValue = source.value;
  if (typeof rawValue !== "string" && typeof rawValue !== "number" && typeof rawValue !== "boolean") {
    throw new ValidationError(`value must be string | number | boolean`, `${path}.value`);
  }
  return {
    id,
    name,
    resolvedType: resolvedType as FigmaVariableType,
    value: rawValue
  };
}

function parseCodeConnect(value: unknown, path: string): CodeConnectMapping {
  const source = assertRecord(value, path);
  const componentName = optionalString(source.componentName, `${path}.componentName`);
  const codeSymbol = optionalString(source.codeSymbol, `${path}.codeSymbol`);
  if (!componentName) throw new ValidationError(`Missing componentName`, path);
  if (!codeSymbol) throw new ValidationError(`Missing codeSymbol`, path);
  return {
    componentName,
    codeSymbol,
    source: optionalString(source.source, `${path}.source`)
  };
}

export async function loadComponentLibrary(libraryPath?: string): Promise<ComponentLibrary | undefined> {
  if (!libraryPath) {
    return undefined;
  }

  let raw: string;
  try {
    raw = await fs.readFile(libraryPath, "utf8");
  } catch (error) {
    throw new Error(`Failed to read Figma library "${libraryPath}": ${(error as Error).message}`);
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(`Failed to parse Figma library JSON "${libraryPath}": ${(error as Error).message}`);
  }

  if (!isRecord(parsed)) {
    throw new Error(`Invalid Figma library "${libraryPath}": root must be an object`);
  }

  const entriesSource = parsed.entries;
  if (!isRecord(entriesSource)) {
    throw new Error(`Invalid Figma library "${libraryPath}": missing or non-object "entries"`);
  }

  const entries: Record<string, ComponentLibraryEntry> = {};
  for (const [key, value] of Object.entries(entriesSource)) {
    entries[key] = parseComponentEntry(value, `entries["${key}"]`);
  }

  let variables: Record<string, FigmaVariable> | undefined;
  if (parsed.variables !== undefined) {
    if (!isRecord(parsed.variables)) {
      throw new Error(`Invalid Figma library "${libraryPath}": "variables" must be an object`);
    }
    variables = {};
    for (const [key, value] of Object.entries(parsed.variables)) {
      variables[key] = parseVariable(value, `variables["${key}"]`);
    }
  }

  let codeConnect: Record<string, CodeConnectMapping> | undefined;
  if (parsed.codeConnect !== undefined) {
    if (!isRecord(parsed.codeConnect)) {
      throw new Error(`Invalid Figma library "${libraryPath}": "codeConnect" must be an object`);
    }
    codeConnect = {};
    for (const [key, value] of Object.entries(parsed.codeConnect)) {
      codeConnect[key] = parseCodeConnect(value, `codeConnect["${key}"]`);
    }
  }

  return { entries, variables, codeConnect };
}
