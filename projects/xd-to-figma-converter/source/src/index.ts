import { parseCliArgs } from "./cli.js";
import { createConverter } from "./core/converter.js";
import { logError, logInfo } from "./utils/logger.js";

async function main(): Promise<void> {
  const options = parseCliArgs(process.argv.slice(2));
  const converter = createConverter();

  logInfo("Starting XD to Figma conversion pipeline");
  logInfo(`Input: ${options.input}`);
  logInfo(`Output: ${options.output}`);
  if (options.library) {
    logInfo(`Library: ${options.library}`);
  }

  const result = await converter.convert(options);
  logInfo(`Status: ${result.status}`);
  logInfo(`Artifacts written: ${result.outputs.join(", ")}`);
  logInfo(`Warnings: ${result.report.summary.warnings}`);
  logInfo(`Matched components: ${result.report.summary.matchedComponents}`);
}

main().catch((error: unknown) => {
  logError(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
