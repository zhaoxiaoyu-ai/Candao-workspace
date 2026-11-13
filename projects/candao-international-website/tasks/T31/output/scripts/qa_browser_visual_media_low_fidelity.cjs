#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");
const { chromium } = require("playwright");

const projectRoot = path.resolve(__dirname, "../../..");
const protoRoot = path.join(projectRoot, "T27/output/stitch-ready-low-fidelity");
const screenshotRoot = path.join(projectRoot, "T31/output/screenshots");
const reportPath = path.join(projectRoot, "T31/output/qa/browser-visual-media-low-fidelity-report.json");

const pages = {
  "index.html": [".stage-motion", ".page-preview"],
  "home.html": [".stage-motion", ".product-shot-frame", ".photo-scene", ".motion-strip"],
  "solutions.html": [".concept-illustration", ".motion-strip", ".flow-board"],
  "platform.html": [".product-shot-frame", ".video-thumb", ".stage-motion"],
  "integrations.html": [".concept-illustration", ".motion-strip", ".connector-flow"],
  "customers.html": [".photo-scene", ".product-shot-frame", ".motion-strip", ".metric-chart"],
  "resources.html": [".motion-strip", ".photo-scene", ".product-shot-frame", ".route-media-grid"],
  "about.html": [".photo-scene", ".cert-tile", ".office-network"],
  "demo.html": [".product-shot-frame", ".motion-strip", ".demo-summary-card"],
};

const forbiddenText = [
  "元素配置",
  "應承載",
  "素材處理",
  "低保真階段",
  "高保真階段",
  "placeholder",
  "Lorem",
  "Candao",
  "CANDAO",
  "IDMS",
  "SAAS",
];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

async function assertVisibleWithArea(page, selector, pageName) {
  const locator = page.locator(selector).first();
  const count = await page.locator(selector).count();
  if (count === 0) {
    throw new Error(`${pageName} missing selector ${selector}`);
  }
  await locator.waitFor({ state: "visible", timeout: 3000 });
  const box = await locator.boundingBox();
  if (!box || box.width < 24 || box.height < 24) {
    throw new Error(`${pageName} selector ${selector} has insufficient visual area`);
  }
  return { selector, box };
}

async function assertContains(page, selector, expected, pageName) {
  const text = await page.locator(selector).first().innerText();
  if (!text.includes(expected)) {
    throw new Error(`${pageName} ${selector} expected ${expected}, got ${text}`);
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
  await page.goto(pathToFileURL(filePath).href, { waitUntil: "networkidle" });

  const bodyText = await page.locator("body").innerText();
  for (const token of forbiddenText) {
    if (bodyText.includes(token)) {
      throw new Error(`${pageName} contains forbidden visible text ${token}`);
    }
  }
  if (/\bIDMS\b|\bIdms\b|\bSAAS\b|\bSaas\b|\bsaas\b/.test(bodyText)) {
    throw new Error(`${pageName} contains malformed case-sensitive term`);
  }

  const boxes = [];
  for (const selector of pages[pageName]) {
    const result = await assertVisibleWithArea(page, selector, pageName);
    if (viewport.width >= 1000 && pageName === "platform.html" && selector === ".video-thumb" && result.box.width < 160) {
      throw new Error(`${pageName} video thumbnail is too narrow for desktop: ${result.box.width}`);
    }
    boxes.push(result);
  }

  await assertVisibleWithArea(page, 'img[alt="餐道"]', pageName);
  await assertVisibleWithArea(page, 'a[href="demo.html"]', pageName);

  if (viewport.width >= 1000) {
    await runInteractions(page, pageName);
  }

  const metrics = await page.evaluate(() => {
    const html = document.documentElement;
    const body = document.body;
    const visualCount = document.querySelectorAll(".photo-scene, .product-shot-frame, .concept-illustration, .motion-strip, .video-thumb, .metric-chart, .route-media-grid, .cert-tile").length;
    return {
      scrollWidth: html.scrollWidth,
      clientWidth: html.clientWidth,
      bodyHeight: body.getBoundingClientRect().height,
      textLength: body.innerText.trim().length,
      visualCount,
    };
  });

  if (metrics.scrollWidth > metrics.clientWidth + 3) {
    throw new Error(`${pageName} horizontal overflow ${metrics.scrollWidth} > ${metrics.clientWidth}`);
  }
  if (metrics.bodyHeight < 650 || metrics.textLength < 120 || metrics.visualCount < 1) {
    throw new Error(`${pageName} appears incomplete`);
  }

  const shotName = `${pageName.replace(".html", "")}-${viewport.width}.png`;
  const screenshot = path.join(screenshotRoot, shotName);
  await page.screenshot({ path: screenshot, fullPage: true });
  await page.close();

  return {
    page: pageName,
    viewport,
    screenshot,
    metrics,
    boxes,
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
    suite: "T31 visual media low-fidelity browser QA",
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
    suite: "T31 visual media low-fidelity browser QA",
    status: "fail",
    error: error.message,
  };
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), "utf8");
  console.error(error);
  process.exit(2);
});
