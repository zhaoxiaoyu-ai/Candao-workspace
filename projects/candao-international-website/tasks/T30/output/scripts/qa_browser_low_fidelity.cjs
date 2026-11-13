#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");
const { chromium } = require("playwright");

const projectRoot = path.resolve(__dirname, "../../..");
const protoRoot = path.join(projectRoot, "T27/output/stitch-ready-low-fidelity");
const screenshotRoot = path.join(projectRoot, "T30/output/screenshots");
const reportPath = path.join(projectRoot, "T30/output/qa/browser-realized-low-fidelity-report.json");

const pages = {
  "index.html": [".page-preview.preview-home", ".page-preview.preview-demo"],
  "home.html": [".logo-strip", ".topology-map", ".product-snapshot", ".customer-name-wall"],
  "solutions.html": [".flow-board", ".problem-signal"],
  "platform.html": [".product-snapshot", ".video-entry-card"],
  "integrations.html": [".connector-flow", ".connection-tags", ".data-flow-section"],
  "customers.html": [".case-proof-card", ".customer-name-wall"],
  "resources.html": [".resource-router", ".resource-signal-row", ".access-board", ".ticket-board", ".routing-canvas"],
  "about.html": [".office-network", ".signal-strip", ".order-workbench", ".dispatch-map", ".trust-band"],
  "demo.html": [".demo-summary-card", ".demo-summary-grid", ".field-grid"],
};

const forbiddenText = [
  "元素配置",
  "應承載",
  "素材處理",
  "低保真階段",
  "高保真階段",
  "Case Evidence",
  "External Systems",
  "餐道 Platform",
  "Unified Operations",
  "OMS Workbench",
];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

async function assertVisible(page, selector, pageName) {
  const locator = page.locator(selector).first();
  const count = await page.locator(selector).count();
  if (count === 0) {
    throw new Error(`${pageName} missing selector ${selector}`);
  }
  await locator.waitFor({ state: "visible", timeout: 3000 });
}

async function assertContains(page, selector, expected, pageName) {
  const text = await page.locator(selector).first().innerText();
  if (!text.includes(expected)) {
    throw new Error(`${pageName} ${selector} expected text ${expected}, got ${text}`);
  }
}

async function runInteractions(page, pageName) {
  if (pageName === "home.html") {
    await page.locator('[data-home-capability="delivery"]').click();
    await assertContains(page, "#home-media-title", "配送", pageName);
  }
  if (pageName === "solutions.html") {
    await page.locator('[data-scenario="finance"]').click();
    await assertContains(page, "#scenario-title", "對賬", pageName);
  }
  if (pageName === "platform.html") {
    await page.locator('[data-capability="connector"]').click();
    await assertContains(page, "#cap-title", "Connector", pageName);
  }
  if (pageName === "integrations.html") {
    await page.locator('[data-integration="pos-kds"]').click();
    await assertContains(page, "#integration-title", "POS", pageName);
  }
  if (pageName === "customers.html") {
    await page.locator('[data-case="jia-group"]').click();
    await assertContains(page, "#case-title", "JIA Group", pageName);
  }
  if (pageName === "demo.html") {
    await page.locator('[data-intent="支援查詢"]').click();
    await assertContains(page, "#intent-summary", "支援查詢", pageName);
  }
}

async function checkPage(browser, pageName, viewport) {
  const page = await browser.newPage({ viewport });
  const filePath = path.join(protoRoot, pageName);
  const url = pathToFileURL(filePath).href;
  await page.goto(url, { waitUntil: "networkidle" });

  const bodyText = await page.locator("body").innerText();
  for (const token of forbiddenText) {
    if (bodyText.includes(token)) {
      throw new Error(`${pageName} contains forbidden visible text ${token}`);
    }
  }
  if (/\bIDMS\b|\bIdms\b|\bSAAS\b/.test(bodyText)) {
    throw new Error(`${pageName} contains forbidden case-sensitive term`);
  }

  for (const selector of pages[pageName]) {
    await assertVisible(page, selector, pageName);
  }

  await assertVisible(page, 'img[alt="餐道"]', pageName);
  await assertVisible(page, 'a[href="demo.html"]', pageName);

  if (viewport.width >= 1000) {
    await runInteractions(page, pageName);
  }

  const metrics = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    bodyHeight: document.body.getBoundingClientRect().height,
    blankPixelsRisk: document.body.innerText.trim().length,
  }));
  if (metrics.scrollWidth > metrics.clientWidth + 3) {
    throw new Error(`${pageName} horizontal overflow ${metrics.scrollWidth} > ${metrics.clientWidth}`);
  }
  if (metrics.bodyHeight < 600 || metrics.blankPixelsRisk < 100) {
    throw new Error(`${pageName} appears blank or too short`);
  }

  const shotName = `${pageName.replace(".html", "")}-${viewport.width}.png`;
  await page.screenshot({ path: path.join(screenshotRoot, shotName), fullPage: true });
  await page.close();

  return {
    page: pageName,
    viewport,
    screenshot: path.join(screenshotRoot, shotName),
    metrics,
    status: "pass",
  };
}

(async () => {
  ensureDir(screenshotRoot);
  ensureDir(path.dirname(reportPath));
  const browser = await chromium.launch({
    headless: true,
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });
  const results = [];
  try {
    for (const pageName of Object.keys(pages)) {
      results.push(await checkPage(browser, pageName, { width: 1440, height: 1200 }));
      results.push(await checkPage(browser, pageName, { width: 390, height: 1200, isMobile: true }));
    }
  } finally {
    await browser.close();
  }
  const report = {
    suite: "T30 realized low-fidelity browser QA",
    status: "pass",
    total: results.length,
    passed: results.length,
    failed: 0,
    results,
  };
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), "utf8");
  console.log(JSON.stringify(report, null, 2));
})().catch((error) => {
  ensureDir(path.dirname(reportPath));
  const report = {
    suite: "T30 realized low-fidelity browser QA",
    status: "fail",
    error: error.message,
  };
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), "utf8");
  console.error(error);
  process.exit(2);
});
