import { readFileSync, writeFileSync } from "node:fs";

const [htmlPath, contractPath, reportPath] = process.argv.slice(2);

if (!htmlPath || !contractPath || !reportPath) {
  console.error("Usage: node t52-stitch-variant-static-qa.mjs <html> <contract> <report>");
  process.exit(1);
}

const html = readFileSync(htmlPath, "utf8");
const contract = JSON.parse(readFileSync(contractPath, "utf8"));

function stripHtml(value) {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

const visibleText = stripHtml(html);
const missingDefault = contract.required_default_text.filter((item) => !visibleText.includes(item));
const missingInteraction = contract.required_interaction_text.filter((item) => !visibleText.includes(item));
const forbiddenVisible = contract.forbidden_visible_text.filter((term) => visibleText.includes(term));
const materialLigatureRisk = [
  "restaurant_menu",
  "integration_instructions",
  "hub",
  "shopping_bag",
  "storefront",
  "sync_alt",
  "menu"
].filter((term) => visibleText.includes(term) || html.includes(`>${term}<`));

const report = {
  suite: "t52-stitch-variant-static-qa",
  html: htmlPath,
  screen_id: "32612aab4ec048b1a9eed77868dfe803",
  required_default_total: contract.required_default_text.length,
  required_default_present: contract.required_default_text.length - missingDefault.length,
  required_interaction_total: contract.required_interaction_text.length,
  required_interaction_present: contract.required_interaction_text.length - missingInteraction.length,
  forbidden_visible_text: forbiddenVisible,
  material_ligature_risk: materialLigatureRisk,
  status: missingDefault.length === 0 && missingInteraction.length === 0 && forbiddenVisible.length === 0 && materialLigatureRisk.length === 0 ? "pass" : "fail",
  missing_default: missingDefault,
  missing_interaction: missingInteraction
};

writeFileSync(reportPath, JSON.stringify(report, null, 2), "utf8");
console.log(JSON.stringify(report, null, 2));
process.exit(report.status === "pass" ? 0 : 2);
