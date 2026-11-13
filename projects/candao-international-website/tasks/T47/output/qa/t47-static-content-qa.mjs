import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const [htmlPath, contractPath, outputPath] = process.argv.slice(2);

if (!htmlPath || !contractPath || !outputPath) {
  console.error("Usage: node t47-static-content-qa.mjs <html> <contract> <output>");
  process.exit(1);
}

const html = readFileSync(htmlPath, "utf8");
const contract = JSON.parse(readFileSync(contractPath, "utf8"));

function normalize(value) {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const visibleText = normalize(html);

const missing = contract.required_visible_text.filter((item) => !visibleText.includes(item));
const forbiddenVisible = contract.forbidden_visible_text.filter((item) => visibleText.includes(item));
const forbiddenRaw = contract.forbidden_visible_text
  .filter((item) => !["Candao", "CANDAO", "Can Dao"].includes(item))
  .filter((item) => html.includes(item));

const styleRisks = [];
if (/text-transform\s*:/i.test(html)) {
  styleRisks.push("text-transform");
}
if (/letter-spacing\s*:\s*-\d/i.test(html)) {
  styleRisks.push("negative-letter-spacing");
}

const report = {
  suite: "t47-static-content-qa",
  html: htmlPath,
  contract: contractPath,
  required_total: contract.required_visible_text.length,
  required_present: contract.required_visible_text.length - missing.length,
  missing,
  forbidden_visible: forbiddenVisible,
  forbidden_raw: forbiddenRaw,
  style_risks: styleRisks,
  status: missing.length === 0 && forbiddenVisible.length === 0 && forbiddenRaw.length === 0 && styleRisks.length === 0 ? "pass" : "fail"
};

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, JSON.stringify(report, null, 2), "utf8");
console.log(JSON.stringify(report, null, 2));
process.exit(report.status === "pass" ? 0 : 2);
