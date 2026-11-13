import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const [htmlPath, contractPath, screenshotPath, visibleUnionPath, reportPath] = process.argv.slice(2);

if (!htmlPath || !contractPath || !screenshotPath || !visibleUnionPath || !reportPath) {
  console.error("Usage: node t52-public-hifi-qa.mjs <html> <contract> <screenshot> <visible-union> <report>");
  process.exit(1);
}

const html = readFileSync(htmlPath, "utf8");
const contract = JSON.parse(readFileSync(contractPath, "utf8"));
const chromeExecutable = process.env.CHROME_EXECUTABLE || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

mkdirSync(dirname(screenshotPath), { recursive: true });
mkdirSync(dirname(visibleUnionPath), { recursive: true });
mkdirSync(dirname(reportPath), { recursive: true });

function normalize(value) {
  return value.replace(/\s+/g, " ").trim();
}

async function collectState(page, label) {
  const diagnostics = await page.evaluate((forbidden) => {
    const text = document.body.innerText.replace(/\s+/g, " ").trim();
    return {
      label: "",
      text,
      textLength: text.length,
      forbiddenVisible: forbidden.filter((term) => text.includes(term)),
      documentWidth: document.documentElement.scrollWidth,
      documentHeight: document.documentElement.scrollHeight,
      bodyWidth: document.body.scrollWidth,
      bodyHeight: document.body.scrollHeight
    };
  }, contract.forbidden_visible_text);
  diagnostics.label = label;
  return diagnostics;
}

const browser = await chromium.launch({
  executablePath: chromeExecutable,
  headless: true
});

const page = await browser.newPage({
  viewport: { width: 1440, height: 1200 },
  deviceScaleFactor: 1
});

await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "load" });
await page.waitForTimeout(400);

const states = [];
states.push(await collectState(page, "initial"));
const defaultText = states[0].text;

const stepKeys = await page.locator(".step-button").evaluateAll((nodes) => nodes.map((node) => node.dataset.step));
for (const step of stepKeys) {
  await page.locator(`.step-button[data-step="${step}"]`).click();
  await page.waitForTimeout(80);
  states.push(await collectState(page, `step:${step}`));
}

const scenarioKeys = ["orders", "menu", "delivery", "reconcile", "multiBrand"];
const viewKeys = ["case", "resource", "support", "demo"];

for (const scenario of scenarioKeys) {
  await page.locator(`.scenario-button[data-scenario="${scenario}"]`).click();
  await page.waitForTimeout(80);
  states.push(await collectState(page, `scenario:${scenario}`));

  for (const view of viewKeys) {
    await page.locator(`.view-tab[data-view="${view}"]`).click();
    await page.waitForTimeout(80);
    states.push(await collectState(page, `scenario:${scenario}:view:${view}`));
  }
}

await page.locator('.scenario-button[data-scenario="orders"]').click();
await page.locator('.view-tab[data-view="case"]').click();
await page.locator('.step-button[data-step="problem"]').click();
await page.waitForTimeout(250);
await page.screenshot({ path: screenshotPath, fullPage: true });

const renderDiagnostics = await page.evaluate((selectors) => {
  const images = Array.from(document.images).map((img) => ({
    src: img.currentSrc || img.src,
    complete: img.complete,
    naturalWidth: img.naturalWidth,
    naturalHeight: img.naturalHeight
  }));
  const backgroundImages = Array.from(document.querySelectorAll("*"))
    .map((node) => getComputedStyle(node).backgroundImage)
    .filter((value) => value && value !== "none");

  return {
    title: document.title,
    lang: document.documentElement.lang,
    documentWidth: document.documentElement.scrollWidth,
    documentHeight: document.documentElement.scrollHeight,
    imageCount: images.length,
    images,
    backgroundImageCount: backgroundImages.length,
    moduleSelectorCounts: selectors.map((selector) => ({
      selector,
      count: document.querySelectorAll(selector).length
    })),
    controls: {
      scenarios: document.querySelectorAll(".scenario-button").length,
      heroChoices: document.querySelectorAll(".hero-choice").length,
      steps: document.querySelectorAll(".step-button").length,
      views: document.querySelectorAll(".view-tab").length
    }
  };
}, contract.module_selectors);

await browser.close();

const unionText = normalize(states.map((state) => state.text).join(" "));
writeFileSync(visibleUnionPath, unionText, "utf8");

const missingDefault = contract.required_default_text.filter((item) => !defaultText.includes(item));
const missingInteraction = contract.required_interaction_text.filter((item) => !unionText.includes(item));
const forbiddenByState = states
  .filter((state) => state.forbiddenVisible.length)
  .map((state) => ({ label: state.label, forbiddenVisible: state.forbiddenVisible }));
const overflowStates = states
  .filter((state) => state.documentWidth > 1440 || state.bodyWidth > 1440)
  .map((state) => ({
    label: state.label,
    documentWidth: state.documentWidth,
    bodyWidth: state.bodyWidth
  }));
const imageFailures = renderDiagnostics.images.filter((image) => !image.complete || image.naturalWidth === 0 || image.naturalHeight === 0);
const missingModules = renderDiagnostics.moduleSelectorCounts.filter((item) => item.count === 0);
const styleRisks = [];

if (/text-transform\s*:/i.test(html)) {
  styleRisks.push("text-transform");
}
if (/letter-spacing\s*:\s*-\d/i.test(html)) {
  styleRisks.push("negative-letter-spacing");
}

const failures = [];
if (renderDiagnostics.lang !== "zh-Hant") failures.push(`lang=${renderDiagnostics.lang}`);
if (missingDefault.length) failures.push(`missing-default=${missingDefault.length}`);
if (missingInteraction.length) failures.push(`missing-interaction=${missingInteraction.length}`);
if (forbiddenByState.length) failures.push(`forbidden-states=${forbiddenByState.length}`);
if (overflowStates.length) failures.push(`overflow-states=${overflowStates.length}`);
if (imageFailures.length) failures.push(`image-failures=${imageFailures.length}`);
if (missingModules.length) failures.push(`missing-modules=${missingModules.length}`);
if (styleRisks.length) failures.push(`style-risks=${styleRisks.join(",")}`);
if (renderDiagnostics.backgroundImageCount < 4) failures.push(`background-images=${renderDiagnostics.backgroundImageCount}`);
if (renderDiagnostics.controls.scenarios !== 5) failures.push(`scenario-controls=${renderDiagnostics.controls.scenarios}`);
if (renderDiagnostics.controls.heroChoices !== 5) failures.push(`hero-choice-controls=${renderDiagnostics.controls.heroChoices}`);
if (renderDiagnostics.controls.steps !== 5) failures.push(`step-controls=${renderDiagnostics.controls.steps}`);
if (renderDiagnostics.controls.views !== 4) failures.push(`view-controls=${renderDiagnostics.controls.views}`);

const report = {
  suite: "t52-visual-polish-qa",
  html: htmlPath,
  contract: contractPath,
  screenshot: screenshotPath,
  visibleUnion: visibleUnionPath,
  states_checked: states.length,
  required_default_total: contract.required_default_text.length,
  required_default_present: contract.required_default_text.length - missingDefault.length,
  required_interaction_total: contract.required_interaction_text.length,
  required_interaction_present: contract.required_interaction_text.length - missingInteraction.length,
  missing_default: missingDefault,
  missing_interaction: missingInteraction,
  forbidden_by_state: forbiddenByState,
  overflow_states: overflowStates,
  image_failures: imageFailures,
  missing_modules: missingModules,
  style_risks: styleRisks,
  render_diagnostics: renderDiagnostics,
  status: failures.length === 0 ? "pass" : "fail",
  failures
};

writeFileSync(reportPath, JSON.stringify(report, null, 2), "utf8");
console.log(JSON.stringify(report, null, 2));
process.exit(report.status === "pass" ? 0 : 2);
