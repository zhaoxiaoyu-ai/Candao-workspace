import path from "node:path";

export interface CliOptions {
  input: string;
  output: string;
  library?: string;
}

const KNOWN_FLAGS = new Set(["--input", "--output", "--library"]);

function requireValue(flag: string, next: string | undefined): string {
  if (next === undefined || next.startsWith("--")) {
    throw new Error(`Flag ${flag} requires a value.`);
  }
  return next;
}

export function parseCliArgs(args: string[]): CliOptions {
  const options: CliOptions = {
    input: "",
    output: path.resolve(process.cwd(), "dist", "output")
  };

  for (let index = 0; index < args.length; index += 1) {
    const current = args[index];
    const next = args[index + 1];

    if (!KNOWN_FLAGS.has(current)) {
      throw new Error(`Unknown CLI argument: ${current}. Expected one of ${[...KNOWN_FLAGS].join(", ")}.`);
    }

    const value = requireValue(current, next);
    index += 1;

    if (current === "--input") {
      options.input = path.resolve(process.cwd(), value);
    } else if (current === "--output") {
      options.output = path.resolve(process.cwd(), value);
    } else if (current === "--library") {
      options.library = path.resolve(process.cwd(), value);
    }
  }

  if (!options.input) {
    throw new Error("Missing required argument: --input <path-to-xd-file>");
  }

  return options;
}
