export class ValidationError extends Error {
  constructor(message: string, public readonly path: string) {
    super(`${message} (at ${path})`);
    this.name = "ValidationError";
  }
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function assertRecord(value: unknown, path: string): Record<string, unknown> {
  if (!isRecord(value)) {
    throw new ValidationError(`Expected object, received ${describe(value)}`, path);
  }
  return value;
}

export function optionalString(value: unknown, path: string): string | undefined {
  if (value === undefined) return undefined;
  if (typeof value !== "string") {
    throw new ValidationError(`Expected string, received ${describe(value)}`, path);
  }
  return value;
}

export function optionalNumber(value: unknown, path: string): number | undefined {
  if (value === undefined) return undefined;
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new ValidationError(`Expected finite number, received ${describe(value)}`, path);
  }
  return value;
}

export function optionalStringArray(value: unknown, path: string): string[] | undefined {
  if (value === undefined) return undefined;
  if (!Array.isArray(value)) {
    throw new ValidationError(`Expected string[], received ${describe(value)}`, path);
  }
  return value.map((item, index) => {
    if (typeof item !== "string") {
      throw new ValidationError(`Expected string, received ${describe(item)}`, `${path}[${index}]`);
    }
    return item;
  });
}

export function optionalEnum<T extends string>(value: unknown, allowed: readonly T[], path: string): T | undefined {
  if (value === undefined) return undefined;
  if (typeof value !== "string" || !allowed.includes(value as T)) {
    throw new ValidationError(`Expected one of ${allowed.join("|")}, received ${describe(value)}`, path);
  }
  return value as T;
}

function describe(value: unknown): string {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  return typeof value;
}
