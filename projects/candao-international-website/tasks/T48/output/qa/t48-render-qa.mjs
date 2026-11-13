import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const [htmlPath, screenshotPath, visibleTextPath, reportPath] = process.argv.slice(2);

if (!htmlPath || !screenshotPath || !visibleTextPath || !reportPath) {
  console.error("Usage: node t48-render-qa.mjs <html> <screenshot> <visible-text> <report>");
  process.exit(1);
}

const chromeExecutable = process.env.CHROME_EXECUTABLE || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const forbiddenVisible = [
  "Finance Center",
  "Business Center",
  "Data Center",
  "Candao",
  "CANDAO",
  "Can Dao",
  "arrow_forward",
  "Material Symbols",
  "粵ICP",
  "24/7 SLA",
  "零延遲",
  "無縫",
  "无缝",
  "所有 POS 均可接入",
  "所有配送商均可接入",
  "100% 可用"
];

mkdirSync(dirname(screenshotPath), { recursive: true });
mkdirSync(dirname(visibleTextPath), { recursive: true });
mkdirSync(dirname(reportPath), { recursive: true });

const browser = await chromium.launch({
  executablePath: chromeExecutable,
  headless: true,
});

const page = await browser.newPage({
  viewport: { width: 1440, height: 1200 },
  deviceScaleFactor: 1,
});

await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "load" });
await page.waitForTimeout(500);

const diagnostics = await page.evaluate((forbidden) => {
  const text = document.body.innerText.replace(/\s+/g, " ").trim();
  const images = Array.from(document.images).map((img) => ({
    src: img.currentSrc || img.src,
    complete: img.complete,
    naturalWidth: img.naturalWidth,
    naturalHeight: img.naturalHeight,
  }));
  const backgroundImages = Array.from(document.querySelectorAll("*"))
    .map((node) => getComputedStyle(node).backgroundImage)
    .filter((value) => value && value !== "none");
  return {
    title: document.title,
    lang: document.documentElement.lang,
    textLength: text.length,
    forbiddenVisible: forbidden.filter((term) => text.includes(term)),
    documentWidth: document.documentElement.scrollWidth,
    documentHeight: document.documentElement.scrollHeight,
    bodyWidth: document.body.scrollWidth,
    bodyHeight: document.body.scrollHeight,
    images,
    backgroundImageCount: backgroundImages.length,
  };
}, forbiddenVisible);

await page.screenshot({ path: screenshotPath, fullPage: true });
writeFileSync(visibleTextPath, await page.locator("body").innerText(), "utf8");
await browser.close();

const imageFailures = diagnostics.images.filter((image) => !image.complete || image.naturalWidth === 0 || image.naturalHeight === 0);
const failures = [];

if (diagnostics.lang !== "zh-Hant") failures.push(`lang=${diagnostics.lang}`);
if (diagnostics.documentWidth > 1440) failures.push(`horizontal-overflow=${diagnostics.documentWidth}`);
if (diagnostics.forbiddenVisible.length) failures.push(`forbidden-visible=${diagnostics.forbiddenVisible.join(",")}`);
if (imageFailures.length) failures.push(`image-failures=${imageFailures.length}`);
if (diagnostics.backgroundImageCount < 3) failures.push(`background-images=${diagnostics.backgroundImageCount}`);
if (diagnostics.textLength < 4000) failures.push(`text-too-short=${diagnostics.textLength}`);

const report = {
  suite: "t48-render-qa",
  html: htmlPath,
  screenshot: screenshotPath,
  visibleText: visibleTextPath,
  diagnostics,
  imageFailures,
  status: failures.length === 0 ? "pass" : "fail",
  failures,
};

writeFileSync(reportPath, JSON.stringify(report, null, 2), "utf8");
console.log(JSON.stringify(report, null, 2));
process.exit(report.status === "pass" ? 0 : 2);
