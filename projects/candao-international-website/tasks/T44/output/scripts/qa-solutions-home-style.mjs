#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);
const projectRoot = path.resolve(__dirname, "../../../../../..");
const taskRoot = path.resolve(__dirname, "..");

const isCustomTarget = Boolean(process.env.TARGET_HTML_PATH || process.env.QA_STEM);
const qaStem = process.env.QA_STEM || "solutions-home-style-100";
const htmlPath = process.env.TARGET_HTML_PATH
  ? path.resolve(projectRoot, process.env.TARGET_HTML_PATH)
  : path.join(taskRoot, "html", "solutions-home-style-100-coverage.html");
const qaDir = path.join(taskRoot, "qa");
const screenshotDir = path.join(taskRoot, "screenshots");
const screenshotPath = isCustomTarget
  ? path.join(screenshotDir, `${qaStem}-1440-full.png`)
  : path.join(screenshotDir, "solutions-home-style-100-coverage-1440-full.png");
const visibleTextPath = isCustomTarget
  ? path.join(qaDir, `${qaStem}-visible-text-2026-08-23.txt`)
  : path.join(qaDir, "solutions-home-style-100-visible-text-2026-08-23.txt");
const coveragePath = isCustomTarget
  ? path.join(qaDir, `${qaStem}-content-coverage-2026-08-23.json`)
  : path.join(qaDir, "solutions-home-style-100-content-coverage-2026-08-23.json");
const staticPath = isCustomTarget
  ? path.join(qaDir, `static-${qaStem}-report.json`)
  : path.join(qaDir, "static-t44-solutions-home-style-report.json");
const domainInputPath = isCustomTarget
  ? path.join(qaDir, `domain-copy-${qaStem}-input.json`)
  : path.join(qaDir, "domain-copy-t44-solutions-input.json");
const domainReportPath = isCustomTarget
  ? path.join(qaDir, `domain-copy-${qaStem}-report.json`)
  : path.join(qaDir, "domain-copy-t44-solutions-report.json");
const renderReportPath = isCustomTarget
  ? path.join(qaDir, `render-${qaStem}-report.json`)
  : path.join(qaDir, "render-t44-solutions-home-style-report.json");

const nodeModuleDir =
  process.env.NODE_PATH ||
  "/Users/victorwong/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules";
const pythonBin =
  process.env.PYTHON ||
  "/Users/victorwong/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3";
const chromeExecutable =
  process.env.CHROME_EXECUTABLE ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const contract = {
  header_navigation: [
    "首頁",
    "解決方案",
    "平台",
    "整合能力",
    "客戶案例",
    "資源",
    "關於餐道",
    "預約演示",
  ],
  hero_positioning: [
    "營運場景",
    "按餐飲 O2O 營運問題，找到可落地的解決方案",
    "外賣平台、自有點餐、門店接單、配送和對賬分散",
    "預約相似場景演示",
    "查看平台能力",
  ],
  hero_scenario_map: [
    "場景鏈路",
    "外賣平台",
    "門店接單",
    "餐道 OMS",
    "配送履約",
    "對賬分析",
    "多入口產生訂單",
    "OMS 統一處理",
    "履約與對賬回流",
  ],
  common_operational_problems: [
    "常見營運問題",
    "每一類問題都對應一條可追蹤的營運鏈路",
    "多平台訂單履約",
    "集中處理外賣平台與自有入口訂單",
    "門店接單、打印、退款、取消和異常提醒回到 OMS",
    "門店與餐單營運",
    "總部可維護門店資料、營業時間、餐單、售罄和區域菜單",
    "配送營運與對賬",
    "DMS / iDMS 承接自有騎手、第三方配送、派單、超時和狀態回傳",
    "財務對賬追蹤差異",
  ],
  scenario_explorer_shell: [
    "場景導覽",
    "選擇最接近你現況的營運場景",
    "多平台外賣訂單",
    "堂食掃碼與自有點餐",
    "配送營運與履約",
    "財務對賬與報表",
    "會員與營運數據",
    "門店與餐單管理",
  ],
  scenario_detail_panel: [
    "讓多平台外賣訂單回到同一條處理鏈路",
    "集中查看外賣平台訂單",
    "門店接單、打印、退款、取消、配送狀態和財務對賬進入統一流程",
    "高峰訂單處理鏈路",
    "場景拆解",
    "漏單與重複維護",
    "OMS / DMS 承接",
    "總部追蹤狀態",
    "訂單高峰",
    "OMS + DMS",
    "數據回流",
  ],
  capability_and_next_step: [
    "承接能力：OMS、Menu Center、DMS / iDMS、財務對賬。",
    "下一步：查看平台能力或預約相似場景演示。",
    "查看客戶案例",
  ],
  footer: [
    "餐飲與零售 O2O 營運中樞｜SaaS、iDMS、AMS / Connector",
    "首頁",
    "解決方案",
    "平台",
    "整合能力",
    "客戶案例",
    "資源",
    "關於餐道",
    "預約演示",
  ],
  protected_product_terms: [
    "OMS",
    "Menu Center",
    "DMS / iDMS",
    "財務對賬",
    "SaaS",
    "AMS / Connector",
  ],
};

const visibleRiskTerms = [
  "Candao",
  "CANDAO",
  "candao",
  "Can Dao",
  "arrow_forward",
  "粵ICP備12345678號",
  "超過 500 名",
  "SLA 高可用性",
  "無縫對接",
  "中台",
  "一站式",
  "閉環",
];

const rawDisallowedTokens = [
  "Material Symbols",
  "arrow_forward",
  "粵ICP備12345678號",
  "超過 500 名",
  "SLA 高可用性",
  "無縫對接",
  "text-transform",
  "placeholder",
];

const simplifiedVisibleWords = [
  "确定",
  "输出",
  "页面",
  "现有",
  "当前",
  "指标",
  "导览",
  "对账",
  "门店",
  "处理",
  "后台",
  "数据",
];

function decodeEntities(text) {
  return text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function visibleTextFromHtml(html) {
  return decodeEntities(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<svg[\s\S]*?<\/svg>/gi, "")
      .replace(/<\/(p|h1|h2|h3|h4|h5|h6|li|div|section|article|header|footer|nav|a|button|span)>/gi, "\n")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<[^>]+>/g, "")
  )
    .split("\n")
    .map((line) => line.replace(/[ \t]+/g, " ").trim())
    .filter(Boolean)
    .join("\n");
}

function normalize(text) {
  return text.replace(/\s+/g, " ").trim();
}

function compact(text) {
  return text.replace(/\s+/g, "");
}

function containsExpected(normalizedText, compactText, expected) {
  return normalizedText.includes(normalize(expected)) || compactText.includes(compact(expected));
}

function buildCoverageReport(visibleText) {
  const normalized = normalize(visibleText);
  const compactVisible = compact(visibleText);
  const modules = {};
  let found = 0;
  let total = 0;

  for (const [name, expectedItems] of Object.entries(contract)) {
    const checks = expectedItems.map((expected) => {
      const ok = containsExpected(normalized, compactVisible, expected);
      if (ok) found += 1;
      total += 1;
      return { expected, found: ok };
    });
    const moduleFound = checks.filter((check) => check.found).length;
    modules[name] = {
      status: moduleFound === checks.length ? "pass" : "fail",
      found: moduleFound,
      total: checks.length,
      ratio: moduleFound / checks.length,
      missing: checks.filter((check) => !check.found).map((check) => check.expected),
      checks,
    };
  }

  const riskTermsPresent = visibleRiskTerms.filter((term) => visibleText.includes(term));
  modules.known_risk_terms_absent = {
    status: riskTermsPresent.length === 0 ? "pass" : "fail",
    present: riskTermsPresent,
  };

  return {
    generatedAt: "2026-08-23 Asia/Shanghai",
    target: path.relative(projectRoot, htmlPath),
    hardRequirement: "Content contract coverage must be 100%. Any missing item fails the candidate.",
    summary: {
      found,
      total,
      ratio: found / total,
      status: found === total && riskTermsPresent.length === 0 ? "pass" : "fail",
      visibleTextCharsNormalized: normalized.length,
      riskTermsPresent,
    },
    modules,
    scopedText: {
      body: visibleText,
      headerLike: visibleText.split("\n").slice(0, 10).join("\n"),
      footerLike: visibleText.split("\n").slice(-9).join("\n"),
    },
  };
}

function staticQa(html, visibleText) {
  const normalizedVisible = normalize(visibleText);
  const compactVisible = compact(visibleText);
  const h1Index = html.search(/<h1[\s\S]*?>/i);
  const beforeH1 = h1Index >= 0 ? visibleTextFromHtml(html.slice(0, h1Index)) : "";
  const footerIndex = html.search(/<footer[\s\S]*?>/i);
  const footerText = footerIndex >= 0 ? visibleTextFromHtml(html.slice(footerIndex)) : "";
  const requiredNav = ["首頁", "解決方案", "平台", "整合能力", "客戶案例", "資源", "關於餐道", "預約演示"];
  const checks = [
    {
      name: "visible_risk_terms_absent",
      status: visibleRiskTerms.filter((term) => visibleText.includes(term)).length === 0 ? "pass" : "fail",
      detail: visibleRiskTerms.filter((term) => visibleText.includes(term)).join(", "),
    },
    {
      name: "raw_disallowed_tokens_absent",
      status: rawDisallowedTokens.filter((term) => html.includes(term)).length === 0 ? "pass" : "fail",
      detail: rawDisallowedTokens.filter((term) => html.includes(term)).join(", "),
    },
    {
      name: "no_obvious_simplified_visible_text",
      status: simplifiedVisibleWords.filter((term) => visibleText.includes(term)).length === 0 ? "pass" : "fail",
      detail: simplifiedVisibleWords.filter((term) => visibleText.includes(term)).join(", "),
    },
    { name: "primary_color_528dff", status: html.includes("#528dff") ? "pass" : "fail", detail: "" },
    { name: "hero_dark_base_0f172a", status: html.includes("#0f172a") ? "pass" : "fail", detail: "" },
    { name: "platform_dark_base_000d2b", status: html.includes("#000d2b") ? "pass" : "fail", detail: "" },
    { name: "product_panel_141e30", status: html.includes("#141e30") ? "pass" : "fail", detail: "" },
    { name: "button_radius_8px", status: /border-radius:\s*8px/.test(html) ? "pass" : "fail", detail: "" },
    { name: "white_problem_section", status: html.includes(".problem-grid") && html.includes("background: #fff") ? "pass" : "fail", detail: "" },
    { name: "dark_scenario_section", status: html.includes(".section.dark") && html.includes("var(--navy-deep)") ? "pass" : "fail", detail: "" },
    { name: "workbench_pattern", status: html.includes(".workbench") && html.includes(".detail-panel") ? "pass" : "fail", detail: "" },
    { name: "footer_dark", status: html.includes(".footer") && html.includes("background: #141414") ? "pass" : "fail", detail: "" },
    {
      name: "header_nav_complete_before_h1",
      status: requiredNav.every((item) => normalize(beforeH1).includes(item)) ? "pass" : "fail",
      detail: requiredNav.filter((item) => !normalize(beforeH1).includes(item)).join(", "),
    },
    {
      name: "footer_nav_complete",
      status: requiredNav.every((item) => normalize(footerText).includes(item)) ? "pass" : "fail",
      detail: requiredNav.filter((item) => !normalize(footerText).includes(item)).join(", "),
    },
    {
      name: "h1_content_present",
      status: containsExpected(normalizedVisible, compactVisible, "按餐飲 O2O 營運問題，找到可落地的解決方案") ? "pass" : "fail",
      detail: "",
    },
  ];

  return {
    suite: "T44 Solutions home-style static QA",
    target: path.relative(projectRoot, htmlPath),
    status: checks.every((check) => check.status === "pass") ? "pass" : "fail",
    checks,
  };
}

async function renderQa() {
  const { chromium } = require(path.join(nodeModuleDir, "playwright", "index.js"));
  const browser = await chromium.launch({
    headless: true,
    executablePath: fs.existsSync(chromeExecutable) ? chromeExecutable : undefined,
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1200 }, deviceScaleFactor: 1 });
  await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle" });
  await page.screenshot({ path: screenshotPath, fullPage: true });
  const metrics = await page.evaluate(() => {
    const elements = Array.from(document.querySelectorAll("body *"));
    const overflowing = [];
    for (const element of elements) {
      const rect = element.getBoundingClientRect();
      const style = window.getComputedStyle(element);
      if (style.display === "none" || style.visibility === "hidden" || rect.width === 0 || rect.height === 0) continue;
      const hasHorizontalOverflow = element.scrollWidth > element.clientWidth + 1;
      const spillsViewport = rect.left < -1 || rect.right > window.innerWidth + 1;
      if (hasHorizontalOverflow || spillsViewport) {
        overflowing.push({
          tag: element.tagName.toLowerCase(),
          className: String(element.className || ""),
          text: (element.textContent || "").trim().slice(0, 120),
          rect: { left: Math.round(rect.left), right: Math.round(rect.right), width: Math.round(rect.width) },
          scrollWidth: element.scrollWidth,
          clientWidth: element.clientWidth,
        });
      }
    }
    const hero = document.querySelector(".hero");
    const footer = document.querySelector(".footer");
    return {
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      scrollHeight: document.documentElement.scrollHeight,
      pageWidth: document.documentElement.scrollWidth,
      heroHeight: hero ? Math.round(hero.getBoundingClientRect().height) : null,
      footerTop: footer ? Math.round(footer.getBoundingClientRect().top + window.scrollY) : null,
      textLength: (document.body.innerText || "").length,
      overflowingCount: overflowing.length,
      overflowing,
      h1: document.querySelector("h1")?.innerText || "",
    };
  });
  await browser.close();
  return {
    status: metrics.overflowingCount === 0 && metrics.pageWidth <= 1440 ? "pass" : "fail",
    screenshot: path.relative(projectRoot, screenshotPath),
    metrics,
  };
}

function writeJson(filePath, payload) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), "utf8");
}

async function main() {
  fs.mkdirSync(qaDir, { recursive: true });
  fs.mkdirSync(screenshotDir, { recursive: true });
  const html = fs.readFileSync(htmlPath, "utf8");
  const visibleText = visibleTextFromHtml(html);

  fs.writeFileSync(visibleTextPath, `${visibleText}\n`, "utf8");
  writeJson(coveragePath, buildCoverageReport(visibleText));
  writeJson(staticPath, staticQa(html, visibleText));
  writeJson(domainInputPath, {
    suite: "T44 Solutions home-style 100 coverage visible copy QA",
    items: [
      {
        id: "t44-solutions-home-style-100",
        locale: "zh-Hant",
        role: "总部运营",
        page_task: "按业务问题确认解決方案场景并导向平台能力、客户案例或演示",
        component_type: "high_fidelity_candidate_visible_copy",
        text: `${visibleText}\n`,
        must_include: ["餐道", "OMS", "Menu Center", "DMS / iDMS", "財務對賬", "SaaS", "AMS / Connector"],
      },
    ],
  });

  const domainRun = spawnSync(
    pythonBin,
    [
      path.join(projectRoot, "projects/candao-international-website/domain-copy/scripts/domain_copy_qa.py"),
      "--context",
      path.join(projectRoot, "projects/candao-international-website/domain-copy"),
      "--input",
      domainInputPath,
      "--output",
      domainReportPath,
    ],
    { encoding: "utf8" }
  );
  if (domainRun.status !== 0) {
    process.stderr.write(domainRun.stdout || "");
    process.stderr.write(domainRun.stderr || "");
    process.exit(domainRun.status || 1);
  }

  const renderReport = await renderQa();
  writeJson(renderReportPath, renderReport);

  const coverage = JSON.parse(fs.readFileSync(coveragePath, "utf8"));
  const staticReport = JSON.parse(fs.readFileSync(staticPath, "utf8"));
  const domainReport = JSON.parse(fs.readFileSync(domainReportPath, "utf8"));
  const status =
    coverage.summary.status === "pass" &&
    staticReport.status === "pass" &&
    domainReport.status === "pass" &&
    renderReport.status === "pass"
      ? "pass"
      : "fail";

  console.log(
    JSON.stringify(
      {
        status,
        coverage: coverage.summary,
        domainCopy: { status: domainReport.status, passed: domainReport.passed, total: domainReport.total },
        static: { status: staticReport.status },
        render: { status: renderReport.status, screenshot: renderReport.screenshot, h1: renderReport.metrics.h1 },
      },
      null,
      2
    )
  );
  process.exit(status === "pass" ? 0 : 1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
