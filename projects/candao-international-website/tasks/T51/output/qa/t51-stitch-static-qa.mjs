import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const [
  htmlPath,
  screenshotPath,
  visibleTextPath,
  reportPath,
] = process.argv.slice(2);

if (!htmlPath || !screenshotPath || !visibleTextPath || !reportPath) {
  console.error(
    "Usage: node t51-stitch-static-qa.mjs <html> <screenshot> <visible-text> <report-json>",
  );
  process.exit(2);
}

const normalizeText = (value) => value.replace(/\s+/g, " ").trim();
const resolvedHtmlPath = resolve(htmlPath);
const resolvedScreenshotPath = resolve(screenshotPath);
const resolvedVisibleTextPath = resolve(visibleTextPath);
const resolvedReportPath = resolve(reportPath);

const requiredDefaultText = [
  "接入評估中心｜餐道",
  "先判斷現有系統如何接入",
  "再查看案例與資源",
  "選擇目前最需要處理的營運問題",
  "開始接入評估",
  "查看案例與資源",
  "接入評估工作台",
  "按問題整理系統來源、資料流、相似案例與演示重點",
  "核對系統來源",
  "確認處理模組",
  "帶入演示安排",
  "漏單與接單超時",
  "餐單同步",
  "配送超時",
  "對賬差異",
  "多品牌門店",
  "接入評估流程",
  "從營運問題到產品演示",
  "品牌可以先選擇營運問題",
  "接入評估以問題為起點",
  "選擇問題",
  "核對系統",
  "查看案例",
  "匹配資源",
  "形成演示摘要",
  "接入與資料流評估",
  "接入或產品關係",
  "相似案例",
  "資源下一步",
  "演示摘要",
  "案例與資源",
  "同一個問題下，查看案例、資源與支援",
  "選定問題後，可以直接查看相似案例、接入準備、營運 FAQ、支援查詢與產品演示分流。",
  "可按品牌、業態或履約類型查看 Pizza-Box、JIA Group、Jardine Group、甜品連鎖、火鍋連鎖、中餐連鎖、咖啡品牌、鮮食零售與配送密集品牌。",
  "案例",
  "資源",
  "支援",
  "演示",
  "服務規模",
  "用服務規模支持採購判斷",
  "品牌在評估接入方案時",
  "品牌數量",
  "5000+",
  "每日處理訂單",
  "500M+",
  "覆蓋城市",
  "400+",
  "門店數量",
  "200K+",
  "每月配送訂單交易額",
  "4.5B+",
  "客戶效率提升",
  "30%",
  "把選擇結果直接帶入產品演示",
  "提交前先確認需要處理的問題",
  "預約產品演示",
  "餐飲與零售 O2O 營運 SaaS",
  "接入評估與產品演示",
];

const requiredInteractionText = [
  "首頁",
  "解決方案",
  "平台",
  "整合能力",
  "客戶案例",
  "資源",
  "關於餐道",
  "繁中 / EN",
  "外賣平台",
  "自建點餐",
  "POS / KDS",
  "CRM / 會員",
  "支付 / ERP",
  "配送 API",
  "AMS / Connector",
  "OMS",
  "Menu Center",
  "DMS / iDMS",
  "財務對賬",
  "CDBI",
  "待映射",
  "同步中",
  "異常回傳",
  "校驗同步",
  "營運使用",
  "總部可見",
  "重新對賬",
  "多平台訂單、餐單更新、門店接單與漏單風險",
  "外賣平台、自建點餐與 POS / KDS 分散處理時，門店容易漏接訂單或延遲接單，需要先核對來源、狀態與異常回傳。",
  "核對渠道訂單與 OMS 訂單",
  "門店接單狀態",
  "退款未處理與取消未同步",
  "多渠道訂單隊列與異常回傳",
  "Pizza-Box",
  "Pizza-Box 使用 OMS 與自有點餐入口支援長期營運，適合用於多平台訂單與門店接單演示。",
  "餐單同步、庫存售罄與平台差異",
  "餐單、庫存、售罄與區域菜單在多平台重複維護時，容易出現餐單更新失敗、價格差異或門店不可售。",
  "更新平台餐單與區域菜單",
  "同步售罄與可售狀態",
  "餐單同步與門店營運狀態",
  "JIA Group",
  "JIA Group 適合作為多品牌餐單、門店營運與總部管理視角的演示參考。",
  "配送超時、派單規則、第三方配送狀態回傳",
  "配送高峰時，派單規則、騎手狀態和第三方配送狀態需要回到同一視圖，否則超時、轉派和異常處理都會分散。",
  "騎手 APP",
  "轉第三方",
  "配送派單、騎手追蹤與異常回流",
  "Jardine Group",
  "Jardine Group / KFC / Pizza Hut / PHD 線索可支援配送密集品牌的履約場景討論。",
  "平台訂單與 OMS 訂單金額、狀態與漏單差異",
  "平台訂單與 OMS 訂單在金額、狀態或漏單標記上不一致時，需要回到同一張對賬視圖追蹤來源和處理人。",
  "金額不一致",
  "狀態不一致",
  "平台訂單與 OMS 訂單對賬差異",
  "甜品連鎖",
  "甜品連鎖訂單量 100K、190K、1.01M；銷售額 6.6M、7.74M、54.42M；復購率 19.88%、19.95%、25.83%。",
  "多品牌、多區域、多門店的總部可見性",
  "多品牌、多區域和多門店營運需要把渠道、餐單、門店狀態、配送與數據回到總部視圖，否則問題會分散在不同團隊。",
  "會員",
  "品牌、區域與門店表現",
  "總部營運視圖與多品牌門店管理",
  "中餐連鎖",
  "中餐連鎖可展示訂單取消率改善、銷售增長與門店擴張率；咖啡品牌與鮮食零售可補充單店與線上訂單比例視角。",
  "從相似客戶案例看落地方式",
  "用當前問題匹配相似案例、使用產品和下一步演示方向。",
  "預約相似場景演示",
  "資源路由：按目前階段找到下一步",
  "把評估中、導入中、日常營運、技術查詢轉成具體資源入口。",
  "評估中",
  "導入中",
  "日常營運",
  "技術查詢",
  "接入準備清單",
  "營運 FAQ",
  "案例資源",
  "支援中心",
  "媒體與公司資料",
  "產品演示分流",
  "支援中心：把異常問題轉成查詢入口",
  "用支援中心承接營運、IT、門店、配送和財務團隊的具體問題。",
  "問題會回到訂單、餐單、門店、配送、對賬或會員資料狀態。",
  "支援查詢需要包含來源、狀態、影響和下一步操作。",
  "產品演示分流：把問題帶入演示模組",
  "根據目前問題安排 OMS、Menu Center、DMS / iDMS、財務對賬或 CDBI 的演示順序。",
  "演示從品牌已使用的系統與資料來源開始，先確認需要接入和回傳的對象。",
  "讓採購方看到總部、門店、配送或財務團隊如何使用結果。",
  "火鍋連鎖",
  "咖啡品牌",
  "鮮食零售",
  "配送密集品牌",
  "支援中心查詢：門店接單超時、退款未處理、取消未同步",
  "支援中心查詢：餐單更新失敗、庫存售罄未同步、門店狀態異常",
  "支援中心查詢：配送超時、缺少配送坐標、第三方轉派狀態中斷",
  "支援中心查詢：金額不一致、狀態不一致、漏單標記、退款未處理",
  "支援中心查詢：門店狀態異常、營業時間待同步、會員資料回流",
  "把目前選擇的問題、系統、案例與資源帶到產品演示。",
  "建議演示模組",
  "推薦資源",
  "重新選擇問題",
];

const forbiddenVisibleText = [
  "Finance Center",
  "Business Center",
  "Data Center",
  "Candao",
  "CANDAO",
  "Can Dao",
  "All Rights Reserved",
  "Material Symbols",
  "全球領先",
  "粵ICP",
  "24/7 SLA",
  "零延遲",
  "無縫",
  "无缝",
  "所有 POS 均可接入",
  "所有配送商均可接入",
  "100% 可用",
  "T49",
  "T50",
  "T51",
  "原型",
  "前端",
  "React",
  "Stepper",
  "Filter",
  "Summary Panel",
  "QA",
  "PPT",
  "Slide",
  "Stitch",
  "Figma",
  "高保真",
  "品牌顯示",
  "placeholder",
  "PLACEHOLDER",
  "lorem",
  "價格方案",
  "免費試用",
];

const rawOnlyRiskText = [
  "fonts.googleapis.com/css2?family=Material+Symbols",
  "material-symbols-outlined",
  ">arrow_forward<",
  ">play_circle<",
  ">schedule<",
  ">sync_alt<",
  ">inventory_2<",
  ">delivery_dining<",
  ">point_of_sale<",
  ">hub<",
  ">restaurant_menu<",
  ">support_agent<",
  ">analytics<",
];

const unsupportedMetricRiskText = [
  "成功整合 3 家",
  "0.01%",
  "漏單率降低至 0.01%",
  "漏單率降至 0.01%",
  "秒級菜單同步",
];

mkdirSync(dirname(resolvedScreenshotPath), { recursive: true });
mkdirSync(dirname(resolvedVisibleTextPath), { recursive: true });
mkdirSync(dirname(resolvedReportPath), { recursive: true });

const html = readFileSync(resolvedHtmlPath, "utf8");
const launchOptions = { headless: true };
if (process.env.CHROME_EXECUTABLE) {
  launchOptions.executablePath = process.env.CHROME_EXECUTABLE;
}

const browser = await chromium.launch(launchOptions);
const page = await browser.newPage({ viewport: { width: 1440, height: 1200 }, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(resolvedHtmlPath).href, { waitUntil: "networkidle", timeout: 45000 });
await page.waitForFunction(() => {
  const sizedIcon = document.querySelector("svg.w-5, svg.w-6, svg.w-8");
  if (!sizedIcon) return true;
  const style = window.getComputedStyle(sizedIcon);
  return style.width !== "300px" && style.height !== "150px";
}, { timeout: 15000 }).catch(() => {});
await page.evaluate(() => document.fonts?.ready).catch(() => {});
await page.waitForTimeout(500);

const renderState = await page.evaluate(() => {
  const images = [...document.images].map((img) => ({
    src: img.currentSrc || img.src,
    alt: img.alt || "",
    complete: img.complete,
    naturalWidth: img.naturalWidth,
    naturalHeight: img.naturalHeight,
  }));
  const negativeLetterSpacing = [...document.querySelectorAll("*")]
    .map((node) => {
      const style = window.getComputedStyle(node);
      const value = style.letterSpacing;
      return {
        text: (node.textContent || "").trim().slice(0, 60),
        value,
      };
    })
    .filter((item) => item.value && item.value !== "normal" && item.value.startsWith("-"));

  return {
    title: document.title,
    lang: document.documentElement.lang || "",
    bodyText: document.body.innerText || "",
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    scrollHeight: document.documentElement.scrollHeight,
    imageCount: images.length,
    brokenImages: images.filter((img) => img.complete && (img.naturalWidth === 0 || img.naturalHeight === 0)),
    negativeLetterSpacing,
  };
});

await page.screenshot({ path: resolvedScreenshotPath, fullPage: true });
await browser.close();

const visibleText = normalizeText(renderState.bodyText);
writeFileSync(resolvedVisibleTextPath, `${visibleText}\n`);

const missingDefaultText = requiredDefaultText.filter((term) => !visibleText.includes(term));
const missingInteractionText = requiredInteractionText.filter((term) => !visibleText.includes(term));
const forbiddenVisibleHits = forbiddenVisibleText.filter((term) => visibleText.includes(term));
const rawOnlyRiskHits = rawOnlyRiskText.filter((term) => html.includes(term));
const unsupportedMetricRiskHits = unsupportedMetricRiskText.filter((term) => visibleText.includes(term) || html.includes(term));
const horizontalOverflow = renderState.scrollWidth > renderState.clientWidth + 1;
const langMismatch = !["zh-Hant", "zh-TW", "zh-HK"].includes(renderState.lang);

const failures = [
  missingDefaultText.length && "missing_default_text",
  missingInteractionText.length && "missing_interaction_text",
  forbiddenVisibleHits.length && "forbidden_visible_text",
  rawOnlyRiskHits.length && "raw_icon_font_or_ligature_risk",
  unsupportedMetricRiskHits.length && "unsupported_metric_risk",
  horizontalOverflow && "horizontal_overflow",
  renderState.brokenImages.length && "broken_images",
  langMismatch && "lang_mismatch",
  renderState.negativeLetterSpacing.length && "negative_letter_spacing",
].filter(Boolean);

const report = {
  task: "T51",
  checked_at: new Date().toISOString(),
  htmlPath: resolvedHtmlPath,
  screenshotPath: resolvedScreenshotPath,
  visibleTextPath: resolvedVisibleTextPath,
  viewport: { width: 1440, height: 1200 },
  status: failures.length ? "fail" : "pass",
  failures,
  summary: {
    requiredDefaultTotal: requiredDefaultText.length,
    missingDefaultTotal: missingDefaultText.length,
    requiredInteractionTotal: requiredInteractionText.length,
    missingInteractionTotal: missingInteractionText.length,
    forbiddenVisibleTotal: forbiddenVisibleHits.length,
    rawOnlyRiskTotal: rawOnlyRiskHits.length,
    unsupportedMetricRiskTotal: unsupportedMetricRiskHits.length,
    scrollWidth: renderState.scrollWidth,
    clientWidth: renderState.clientWidth,
    scrollHeight: renderState.scrollHeight,
    imageCount: renderState.imageCount,
    brokenImageTotal: renderState.brokenImages.length,
    lang: renderState.lang,
    title: renderState.title,
  },
  missingDefaultText,
  missingInteractionText,
  forbiddenVisibleHits,
  rawOnlyRiskHits,
  unsupportedMetricRiskHits,
  renderState,
};

writeFileSync(resolvedReportPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report.summary, null, 2));
process.exit(failures.length ? 1 : 0);
