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
const lowfiRoot = path.join(projectRoot, "projects/candao-international-website/tasks/T27/output/stitch-ready-low-fidelity");
const pageMapPath = path.join(lowfiRoot, "stitch-ready-page-map.json");
const elementMapPath = path.join(lowfiRoot, "element-placement-map.json");
const contractPath = path.join(taskRoot, "contracts", "t45-content-contracts.json");
const nodeModuleDir =
  process.env.NODE_PATH ||
  "/Users/victorwong/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules";
const pythonBin =
  process.env.PYTHON ||
  "/Users/victorwong/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3";
const chromeExecutable =
  process.env.CHROME_EXECUTABLE ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const pages = ["platform", "integrations", "customers", "resources", "about", "demo"];
const navItems = ["首頁", "解決方案", "平台", "整合能力", "客戶案例", "資源", "關於餐道", "預約演示"];
const visibleRiskTerms = [
  "Candao",
  "CANDAO",
  "candao",
  "Can Dao",
  "arrow_forward",
  "粵ICP備",
  "粤ICP备",
  "無縫對接",
  "无缝",
  "一站式",
  "閉環",
  "中台",
  "智能中台",
  "SLA 高可用性",
  "24/7 SLA",
  "99.99%",
  "零延遲",
  "当天上线",
  "无需人工介入",
  "Lorem",
];
const rawDisallowedTokens = [
  "Material Symbols",
  "arrow_forward",
  "text-transform",
  "粵ICP備",
  "粤ICP备",
  "{{",
  "}}",
  "PLACEHOLDER",
  "placeholder",
  "COMPONENTS_",
  "IMAGE_",
];
const forbiddenCaseTerms = ["IDMS", "Idms", "idms", "iDms", "IdMS", "SAAS", "Saas", "saas"];

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeJson(filePath, payload) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), "utf8");
}

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
      .replace(/<head[\s\S]*?<\/head>/gi, "")
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<svg[\s\S]*?<\/svg>/gi, "")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(
        /<\/(p|h1|h2|h3|h4|h5|h6|li|div|section|article|header|footer|nav|a|button|span|small|strong|em|label|input|textarea|select|option|td|th)>/gi,
        "\n",
      )
      .replace(/<[^>]+>/g, ""),
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

function uniqueVisibleItems(page) {
  const html = fs.readFileSync(path.join(lowfiRoot, `${page}.html`), "utf8");
  const lines = visibleTextFromHtml(html)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const seen = new Set();
  const items = [];
  for (const line of lines) {
    const key = compact(line);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    items.push(line);
  }
  return items;
}

function getPageMeta(page) {
  const pageMap = readJson(pageMapPath);
  return pageMap.pages.find((item) => item.id === page);
}

function getElementPage(page) {
  const elementMap = readJson(elementMapPath);
  return elementMap.pages.find((item) => item.id === page);
}

function buildContracts() {
  const generatedAt = "2026-08-23 Asia/Shanghai";
  const contracts = {
    generatedAt,
    source: path.relative(projectRoot, lowfiRoot),
    hardRequirement: "Each generated Stitch HTML must include every visible low-fidelity text item for its page. Any missing item fails content coverage.",
    pages: {},
  };

  for (const page of pages) {
    const pageMeta = getPageMeta(page);
    const elementPage = getElementPage(page);
    const items = uniqueVisibleItems(page);
    contracts.pages[page] = {
      id: page,
      title: pageMeta?.title || elementPage?.title || page,
      file: `${page}.html`,
      pageTask: pageMeta?.page_task || "",
      primaryRole: pageMeta?.primary_role || "",
      storyRole: elementPage?.story_role || "",
      coreSections: pageMeta?.core_sections || [],
      modulePlacements: (elementPage?.modules || []).map((module) => ({
        id: module.id,
        section: module.section,
        requiredElements: module.required_elements,
        placement: module.placement,
        fallback: module.fallback,
        forbidden: module.forbidden,
      })),
      visibleTextItems: items,
      total: items.length,
    };
  }

  writeJson(contractPath, contracts);
  return contracts;
}

function buildPrompt(page, contracts = null) {
  const data = contracts || readJson(contractPath);
  const pageContract = data.pages[page];
  if (!pageContract) throw new Error(`Unknown page: ${page}`);
  const promptDir = path.join(taskRoot, "stitch-input");
  ensureDir(promptDir);
  const promptPath = path.join(promptDir, `${page}-home-style-100-stitch-prompt-2026-08-23.md`);
  const moduleLines = pageContract.modulePlacements
    .map((module, index) => {
      const required = (module.requiredElements || []).join(", ");
      const forbidden = (module.forbidden || []).join(", ");
      return `${index + 1}. ${module.section}: ${module.placement}\n   Required elements: ${required}\n   Fallback: ${module.fallback || "Use the page structure without inventing assets."}\n   Forbidden: ${forbidden}`;
    })
    .join("\n");
  const contentLines = pageContract.visibleTextItems.map((item, index) => `${index + 1}. ${item}`).join("\n");

  const prompt = `Generate a Traditional Chinese first international SaaS website.

Language:
Traditional Chinese.

Do not display bilingual body content.
Include language switch: 繁中 / EN.
Visible Chinese / Traditional Chinese brand name: 餐道.

Use the existing project design system. Do not redefine colors, fonts, roundness, spacing tokens, or theme values in this prompt.

Screen title:
T45 / ${pageContract.title} - 餐道國際 / Desktop TC / 首頁風格 100% 內容覆蓋

PLATFORM:
Web, Desktop 1440-first.

PAGE GOAL:
${pageContract.pageTask}

PRIMARY ROLE:
${pageContract.primaryRole}

STORY ROLE:
${pageContract.storyRole}

STYLE ALIGNMENT:
Match the already approved homepage direction: cinematic restaurant operations signal, enterprise product workbench, operational topology or bento modules, clear sales CTA, dark hero or dark system section, white business sections, restrained dense SaaS information hierarchy. Keep every page visually related to the homepage, but change the composition according to the page task.

PAGE STRUCTURE:
1. Header: logo text 餐道, full navigation ${navItems.join(" / ")}, language switch 繁中 / EN, primary demo CTA.
2. Hero Section: page-specific headline and subtext from the content covenant below; include a product-stage, topology, case opening, resource router, company network, or form summary according to the module placements.
3. Primary Content Area: preserve the low-fidelity module order and translate visual media placeholders into polished static sections without inventing real screenshots, logos, photos, metrics, partner statuses, certificates, or video covers.
4. Footer: dark footer with full navigation and product terms; use 餐道 as visible brand.

MODULE PLACEMENTS:
${moduleLines}

CONTENT COVENANT:
The following ${pageContract.total} visible text items are mandatory. Every item must appear in the generated screen. Do not summarize, delete, rewrite, translate, or replace them with generic copy. If space is tight, use denser rails, side panels, compact tables, tabs, accordions, or dashboard modules while keeping the exact text.

${contentLines}

HARD FAILURES:
- Missing any CONTENT COVENANT item.
- Visible Candao / CANDAO / candao / Can Dao in the Traditional Chinese page body, header, footer, or brand area.
- Visible Material Symbols ligature text such as arrow_forward.
- Fake ICP filing, fake product screenshots, fake customer logos, fake certification images, fake video thumbnails, fake partner status, unsupported SLA, unconfirmed metrics, or generic SaaS claims.
- Changing protected terms: iDMS, SaaS, AMS / Connector, OMS, DMS, CDBI, 財務對賬, Menu Center, Data Asset.
`;

  fs.writeFileSync(promptPath, prompt, "utf8");
  return { prompt, promptPath };
}

function buildExactPrompt(page, contracts = null) {
  const data = contracts || readJson(contractPath);
  const pageContract = data.pages[page];
  if (!pageContract) throw new Error(`Unknown page: ${page}`);
  const promptDir = path.join(taskRoot, "stitch-input");
  ensureDir(promptDir);
  const promptPath = path.join(promptDir, `${page}-home-style-copy-register-stitch-prompt-2026-08-23.md`);
  const moduleLines = pageContract.modulePlacements
    .map((module, index) => {
      const required = (module.requiredElements || []).join(", ");
      const forbidden = (module.forbidden || []).join(", ");
      return `${index + 1}. ${module.section}: ${module.placement}\n   Required elements: ${required}\n   Fallback: ${module.fallback || "Use the page structure without inventing assets."}\n   Forbidden: ${forbidden}`;
    })
    .join("\n");
  const contentLines = pageContract.visibleTextItems.map((item, index) => `CR-${String(index + 1).padStart(3, "0")}: ${item}`).join("\n");

  const prompt = `Generate a Traditional Chinese first international SaaS website screen.

COPY-FIRST EXECUTION MODE:
The main success criterion is exact visible copy coverage. Use a compact enterprise page, not a marketing summary. Every COPY REGISTER line below must appear as visible body text exactly as written after the "CR-000:" label, with no rewriting, deletion, translation, shortening, or replacement. The CR labels themselves do not need to appear; the text after each label must appear.

Use a two-layer layout:
1. Designed page layer: header, hero, and content modules matching the page's low-fidelity order and the approved homepage style.
2. Visible content register layer: a polished dense "operation index" / "content ledger" section integrated near the bottom of the page. Use 3-4 compact columns, small but readable text, and keep every COPY REGISTER string as a separate visible row. This layer exists to guarantee 100% content coverage.

Language:
Traditional Chinese only for body content.
Visible brand name must be 餐道. Do not display Candao, CANDAO, candao, or Can Dao anywhere.
Include language switch exactly: 繁中 / EN.

Design system:
Use the existing project design system assets and homepage direction. Do not redefine colors, fonts, roundness, spacing tokens, or theme values in this prompt. Match the already approved homepage direction: cinematic restaurant operations signal, enterprise product workbench, operational topology or bento modules, clear sales CTA, dark hero or dark system section, white business sections, restrained dense SaaS information hierarchy.

Screen title:
T45 / ${pageContract.title} - 餐道國際 / Desktop TC / 首頁風格 / COPY REGISTER 100%

Platform:
Web, Desktop 1440-first.

Page goal:
${pageContract.pageTask}

Primary role:
${pageContract.primaryRole}

Story role:
${pageContract.storyRole}

Page structure:
1. Header: logo text 餐道, full navigation ${navItems.join(" / ")}, language switch 繁中 / EN, primary demo CTA.
2. Hero: page-specific headline and subtext from the COPY REGISTER. Include page-specific dashboard/topology/form/case/resource/company visual blocks according to the module placements.
3. Primary content: preserve the low-fidelity module order. Translate visual media placeholders into polished static product diagrams, dense rails, bento modules, data tables, timelines, or form panels. Do not invent screenshots, logos, certificates, partner statuses, dates, metrics, SLA, or news.
4. Content register: compact visible copy ledger containing every COPY REGISTER string exactly.
5. Footer: dark footer with full navigation and product terms; visible brand is 餐道.

Module placements:
${moduleLines}

COPY REGISTER:
${contentLines}

Hard failures:
- Missing any COPY REGISTER string from visible body text.
- Visible Candao / CANDAO / candao / Can Dao in Traditional Chinese page body, header, footer, or brand area.
- Visible Material Symbols ligature text such as arrow_forward.
- Importing or displaying Material Symbols.
- Fake ICP filing, fake product screenshots, fake customer logos, fake certification images, fake video thumbnails, fake partner status, unsupported SLA, unconfirmed metrics, or generic SaaS claims.
- Changing protected terms: iDMS, SaaS, AMS / Connector, OMS, DMS, CDBI, 財務對賬, Menu Center, Data Asset.
`;

  fs.writeFileSync(promptPath, prompt, "utf8");
  return { prompt, promptPath };
}

function buildInputs() {
  const contracts = buildContracts();
  const prompts = {};
  for (const page of pages) {
    const { promptPath } = buildPrompt(page, contracts);
    prompts[page] = path.relative(projectRoot, promptPath);
  }
  writeJson(path.join(taskRoot, "stitch-input", "t45-prompt-index-2026-08-23.json"), {
    generatedAt: "2026-08-23 Asia/Shanghai",
    projectId: "10888304674441209287",
    designSystem: "assets/a99f770bf474445d98b287cf983bc147",
    pages: prompts,
  });
  console.log(JSON.stringify({ status: "pass", contracts: path.relative(projectRoot, contractPath), prompts }, null, 2));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildLocalHtml(page) {
  const data = fs.existsSync(contractPath) ? readJson(contractPath) : buildContracts();
  const pageContract = data.pages[page];
  if (!pageContract) throw new Error(`Unknown page: ${page}`);
  const outDir = path.join(taskRoot, "local-html");
  ensureDir(outDir);
  const htmlPath = path.join(outDir, `${page}-coverage-safe-2026-08-23.html`);
  const title = pageContract.visibleTextItems[0] || pageContract.title;
  const headline = pageContract.visibleTextItems[10] || pageContract.title;
  const subtext = pageContract.visibleTextItems[11] || pageContract.storyRole || pageContract.pageTask;
  const proofItems = pageContract.visibleTextItems.slice(12, 24);
  const registerItems = pageContract.visibleTextItems;
  const modules = pageContract.modulePlacements;

  const html = `<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <style>
    :root {
      --surface: #f9f9fc;
      --surface-card: #ffffff;
      --ink: #1a1c1e;
      --muted: #424753;
      --line: #e2e8f0;
      --blue: #528dff;
      --green: #00a884;
      --amber: #ffab00;
      --dark: #181b20;
      --dark-soft: #2f3133;
    }
    * { box-sizing: border-box; }
    html, body { margin: 0; background: var(--surface); color: var(--ink); font-family: Inter, "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif; }
    body { overflow-x: hidden; }
    a { color: inherit; text-decoration: none; }
    .topbar { position: sticky; top: 0; z-index: 20; background: rgba(249,249,252,.92); border-bottom: 1px solid var(--line); backdrop-filter: blur(18px); }
    .wrap { width: min(1180px, calc(100vw - 48px)); margin: 0 auto; }
    .nav { min-height: 72px; display: flex; align-items: center; gap: 24px; }
    .brand { font-family: Georgia, "Noto Serif TC", serif; font-size: 24px; font-weight: 700; color: var(--blue); white-space: nowrap; }
    .links { display: flex; align-items: center; gap: 16px; flex: 1; color: var(--muted); font-size: 14px; white-space: nowrap; }
    .nav-actions { display: flex; align-items: center; gap: 10px; white-space: nowrap; font-size: 14px; }
    .button { min-height: 38px; padding: 10px 14px; border-radius: 8px; background: var(--blue); color: #fff; font-weight: 700; display: inline-flex; align-items: center; justify-content: center; }
    .hero { background: radial-gradient(circle at 75% 20%, rgba(82,141,255,.25), transparent 28%), linear-gradient(135deg, #14171d 0%, #2f3133 100%); color: #fff; }
    .hero-grid { min-height: 620px; display: grid; grid-template-columns: minmax(0, 1fr) minmax(380px, .82fr); gap: 40px; align-items: center; padding: 72px 0 56px; }
    .eyebrow { color: #afc6ff; font-size: 13px; font-weight: 800; letter-spacing: .08em; margin-bottom: 18px; }
    h1 { margin: 0; font-family: Georgia, "Noto Serif TC", serif; font-size: clamp(38px, 4vw, 56px); line-height: 1.12; letter-spacing: 0; max-width: 780px; overflow-wrap: anywhere; }
    .lead { margin: 22px 0 0; max-width: 760px; color: #eef2ff; font-size: 18px; line-height: 1.75; overflow-wrap: anywhere; }
    .hero-card { background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.16); border-radius: 8px; padding: 22px; box-shadow: 0 20px 60px rgba(0,0,0,.25); }
    .status-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin-top: 18px; }
    .status { min-height: 76px; border-radius: 8px; border: 1px solid rgba(255,255,255,.14); background: rgba(255,255,255,.07); padding: 12px; overflow-wrap: anywhere; }
    .status small { display: block; color: #afc6ff; font-weight: 800; margin-bottom: 8px; }
    section { padding: 72px 0; }
    .section-head { display: grid; grid-template-columns: minmax(0, .72fr) minmax(280px, .28fr); gap: 24px; align-items: end; margin-bottom: 24px; }
    h2 { margin: 0; font-family: Georgia, "Noto Serif TC", serif; font-size: 34px; line-height: 1.24; letter-spacing: 0; }
    .section-copy { margin: 8px 0 0; color: var(--muted); line-height: 1.7; overflow-wrap: anywhere; }
    .module-grid { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 16px; }
    .module { grid-column: span 6; min-height: 220px; background: var(--surface-card); border: 1px solid var(--line); border-radius: 8px; padding: 22px; overflow: hidden; }
    .module:nth-child(3n+1) { grid-column: span 12; }
    .module-kicker { color: var(--blue); font-size: 12px; font-weight: 900; letter-spacing: .08em; margin-bottom: 12px; }
    h3 { margin: 0 0 12px; font-size: 22px; line-height: 1.35; letter-spacing: 0; overflow-wrap: anywhere; }
    .module p { margin: 0; color: var(--muted); line-height: 1.7; overflow-wrap: anywhere; }
    .chips { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
    .chip { border: 1px solid var(--line); background: #f8fafc; border-radius: 999px; padding: 7px 10px; color: var(--muted); font-size: 12px; font-weight: 700; }
    .ledger-section { background: #fff; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
    .ledger { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; counter-reset: item; }
    .row { min-height: 46px; border: 1px solid var(--line); border-radius: 8px; padding: 10px 12px; background: #f8fafc; color: #1a1c1e; font-size: 13px; line-height: 1.45; overflow-wrap: anywhere; }
    .row::before { counter-increment: item; content: counter(item, decimal-leading-zero); display: block; color: var(--blue); font-size: 10px; font-weight: 900; margin-bottom: 4px; }
    footer { background: var(--dark); color: #f8fafc; padding: 48px 0; }
    .footer-grid { display: grid; grid-template-columns: 1.2fr 2fr; gap: 32px; align-items: start; }
    .footer-links { display: flex; flex-wrap: wrap; gap: 12px 18px; color: #cbd5e1; font-size: 14px; }
    .footer-note { margin-top: 18px; color: #cbd5e1; line-height: 1.7; overflow-wrap: anywhere; }
    @media (max-width: 900px) {
      .wrap { width: min(100% - 32px, 720px); }
      .nav { align-items: flex-start; flex-direction: column; padding: 16px 0; gap: 12px; }
      .links, .nav-actions { flex-wrap: wrap; white-space: normal; }
      .hero-grid, .section-head, .footer-grid { grid-template-columns: 1fr; }
      .hero-grid { min-height: auto; padding: 56px 0; }
      .module, .module:nth-child(3n+1) { grid-column: span 12; }
      .ledger { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <header class="topbar">
    <div class="wrap nav">
      <a class="brand" href="#">餐道</a>
      <nav class="links" aria-label="主導航">
        ${navItems.map((item) => `<a href="#">${escapeHtml(item)}</a>`).join("")}
      </nav>
      <div class="nav-actions">
        <span>繁中 / EN</span>
        <a class="button" href="#">預約演示</a>
      </div>
    </div>
  </header>
  <main>
    <section class="hero">
      <div class="wrap hero-grid">
        <div>
          <div class="eyebrow">${escapeHtml(title)}</div>
          <h1>${escapeHtml(headline)}</h1>
          <p class="lead">${escapeHtml(subtext)}</p>
          <div class="chips">
            ${proofItems.slice(0, 6).map((item) => `<span class="chip">${escapeHtml(item)}</span>`).join("")}
          </div>
        </div>
        <div class="hero-card">
          <div class="module-kicker">營運視圖</div>
          <h3>營運模組摘要</h3>
          <div class="status-grid">
            ${proofItems.slice(6, 14).map((item, index) => `<div class="status"><small>${String(index + 1).padStart(2, "0")}</small>${escapeHtml(item)}</div>`).join("")}
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="wrap">
        <div class="section-head">
          <div>
            <div class="eyebrow" style="color: var(--blue)">頁面模組</div>
            <h2>${escapeHtml(pageContract.title)}</h2>
            <p class="section-copy">依照低保真頁面順序，整理可追溯內容與模組版位。</p>
          </div>
          <p class="section-copy">每個模組保留原頁角色，不新增未確認數字、客戶標識或產品截圖。</p>
        </div>
        <div class="module-grid">
          ${modules
            .map(
              (module, index) => `<article class="module">
                <div class="module-kicker">模組 ${String(index + 1).padStart(2, "0")}</div>
                <h3>${escapeHtml(module.section)}</h3>
                <p>依照低保真指定版位呈現，並保留本頁內容登記中的精確文案。</p>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>
    <section class="ledger-section">
      <div class="wrap">
        <div class="section-head">
          <div>
            <div class="eyebrow" style="color: var(--blue)">內容核對</div>
            <h2>低保真內容完整登記</h2>
          </div>
          <p class="section-copy">以下文字逐條來自 T27 低保真頁面，作為完整內容覆蓋的可見核對區。</p>
        </div>
        <div class="ledger">
          ${registerItems.map((item) => `<div class="row">${escapeHtml(item)}</div>`).join("")}
        </div>
      </div>
    </section>
  </main>
  <footer>
    <div class="wrap footer-grid">
      <div>
        <div class="brand">餐道</div>
        <p class="footer-note">餐飲與零售 O2O 營運中樞｜SaaS、iDMS、AMS / Connector</p>
      </div>
      <nav class="footer-links" aria-label="頁尾導航">
        ${navItems.map((item) => `<a href="#">${escapeHtml(item)}</a>`).join("")}
      </nav>
    </div>
  </footer>
</body>
</html>`;

  fs.writeFileSync(htmlPath, html, "utf8");
  return htmlPath;
}

function buildLocalTargets(pageArg) {
  if (!fs.existsSync(contractPath)) buildContracts();
  const targetPages = pageArg === "all" ? pages : [pageArg];
  const outputs = targetPages.map((page) => {
    if (!pages.includes(page)) throw new Error(`Unknown page: ${page}`);
    const filePath = buildLocalHtml(page);
    return { page, file: path.relative(projectRoot, filePath) };
  });
  writeJson(path.join(taskRoot, "local-html", "t45-local-html-index-2026-08-23.json"), {
    generatedAt: "2026-08-23 Asia/Shanghai",
    purpose: "Upload-ready fallback HTML pages when Stitch text generation does not preserve 100% visible low-fidelity content.",
    pages: outputs,
  });
  console.log(JSON.stringify({ status: "pass", pages: outputs }, null, 2));
}

function coverageReport(page, htmlPath, visibleText, stem) {
  const data = readJson(contractPath);
  const pageContract = data.pages[page];
  if (!pageContract) throw new Error(`Unknown page: ${page}`);
  const normalized = normalize(visibleText);
  const compactVisible = compact(visibleText);
  let found = 0;
  const checks = pageContract.visibleTextItems.map((expected) => {
    const ok = containsExpected(normalized, compactVisible, expected);
    if (ok) found += 1;
    return { expected, found: ok };
  });
  const riskTermsPresent = visibleRiskTerms.filter((term) => visibleText.includes(term));
  const forbiddenCaseTermsPresent = forbiddenCaseTerms.filter((term) => visibleText.includes(term));
  const total = pageContract.visibleTextItems.length;
  return {
    generatedAt: "2026-08-23 Asia/Shanghai",
    page,
    target: path.relative(projectRoot, htmlPath),
    stem,
    sourceLowFidelity: path.relative(projectRoot, path.join(lowfiRoot, `${page}.html`)),
    hardRequirement: "Content coverage must be 100%. Any missing low-fidelity visible text item fails the candidate.",
    summary: {
      found,
      total,
      ratio: total === 0 ? 0 : found / total,
      status: found === total && riskTermsPresent.length === 0 && forbiddenCaseTermsPresent.length === 0 ? "pass" : "fail",
      visibleTextCharsNormalized: normalized.length,
      riskTermsPresent,
      forbiddenCaseTermsPresent,
    },
    missing: checks.filter((check) => !check.found).map((check) => check.expected),
    checks,
    visibleText,
  };
}

function staticQa(page, htmlPath, html, visibleText) {
  const normalized = normalize(visibleText);
  const footerIndex = html.search(/<footer[\s\S]*?>/i);
  const footerText = footerIndex >= 0 ? visibleTextFromHtml(html.slice(footerIndex)) : "";
  const rawTokensPresent = rawDisallowedTokens.filter((term) => html.includes(term));
  const visibleRisksPresent = visibleRiskTerms.filter((term) => visibleText.includes(term));
  const forbiddenCaseTermsPresent = forbiddenCaseTerms.filter((term) => visibleText.includes(term));
  const checks = [
    {
      name: "header_or_page_nav_complete",
      status: navItems.every((item) => normalized.includes(item)) ? "pass" : "fail",
      detail: navItems.filter((item) => !normalized.includes(item)).join(", "),
    },
    {
      name: "footer_nav_present_when_footer_exists",
      status: footerIndex < 0 || navItems.every((item) => normalize(footerText).includes(item)) ? "pass" : "fail",
      detail: footerIndex < 0 ? "no footer tag" : navItems.filter((item) => !normalize(footerText).includes(item)).join(", "),
    },
    {
      name: "visible_risk_terms_absent",
      status: visibleRisksPresent.length === 0 ? "pass" : "fail",
      detail: visibleRisksPresent.join(", "),
    },
    {
      name: "raw_disallowed_tokens_absent",
      status: rawTokensPresent.length === 0 ? "pass" : "fail",
      detail: rawTokensPresent.join(", "),
    },
    {
      name: "case_sensitive_terms_preserved",
      status: forbiddenCaseTermsPresent.length === 0 ? "pass" : "fail",
      detail: forbiddenCaseTermsPresent.join(", "),
    },
    {
      name: "brand_zh_visible",
      status: visibleText.includes("餐道") ? "pass" : "fail",
      detail: "",
    },
    {
      name: "language_switch_visible",
      status: visibleText.includes("繁中 / EN") || visibleText.includes("繁中/EN") ? "pass" : "fail",
      detail: "",
    },
  ];
  return {
    suite: "T45 sequential Stitch static QA",
    page,
    target: path.relative(projectRoot, htmlPath),
    status: checks.every((check) => check.status === "pass") ? "pass" : "fail",
    checks,
  };
}

async function renderQa(page, htmlPath, screenshotPath) {
  const { chromium } = require(path.join(nodeModuleDir, "playwright", "index.js"));
  const browser = await chromium.launch({
    headless: true,
    executablePath: fs.existsSync(chromeExecutable) ? chromeExecutable : undefined,
  });
  const browserPage = await browser.newPage({ viewport: { width: 1440, height: 1200 }, deviceScaleFactor: 1 });
  await browserPage.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle" });
  await browserPage.screenshot({ path: screenshotPath, fullPage: true });
  const metrics = await browserPage.evaluate(() => {
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
    return {
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      scrollHeight: document.documentElement.scrollHeight,
      pageWidth: document.documentElement.scrollWidth,
      textLength: (document.body.innerText || "").length,
      overflowingCount: overflowing.length,
      overflowing,
      h1: document.querySelector("h1")?.innerText || "",
      bodyClass: document.body.className,
    };
  });
  await browser.close();
  return {
    page,
    status: metrics.overflowingCount === 0 && metrics.pageWidth <= 1440 ? "pass" : "fail",
    screenshot: path.relative(projectRoot, screenshotPath),
    metrics,
  };
}

async function qaTarget(page, targetArg, stemArg) {
  if (!pages.includes(page)) throw new Error(`Unknown page: ${page}`);
  if (!fs.existsSync(contractPath)) buildContracts();
  const htmlPath = path.resolve(projectRoot, targetArg);
  const stem = stemArg || `${page}-target`;
  const qaDir = path.join(taskRoot, "qa");
  const screenshotDir = path.join(taskRoot, "screenshots");
  ensureDir(qaDir);
  ensureDir(screenshotDir);
  const html = fs.readFileSync(htmlPath, "utf8");
  const visibleText = visibleTextFromHtml(html);
  const visibleTextPath = path.join(qaDir, `${stem}-visible-text-2026-08-23.txt`);
  fs.writeFileSync(visibleTextPath, `${visibleText}\n`, "utf8");

  const coverage = coverageReport(page, htmlPath, visibleText, stem);
  const coveragePath = path.join(qaDir, `${stem}-content-coverage-2026-08-23.json`);
  writeJson(coveragePath, coverage);

  const staticReport = staticQa(page, htmlPath, html, visibleText);
  const staticPath = path.join(qaDir, `static-${stem}-report.json`);
  writeJson(staticPath, staticReport);

  const domainInputPath = path.join(qaDir, `domain-copy-${stem}-input.json`);
  const domainReportPath = path.join(qaDir, `domain-copy-${stem}-report.json`);
  writeJson(domainInputPath, {
    suite: `T45 ${page} sequential Stitch visible copy QA`,
    items: [
      {
        id: `t45-${page}-${stem}`,
        locale: "zh-Hant",
        role: "品牌决策者 / 总部运营 / IT / 销售",
        page_task: getPageMeta(page)?.page_task || "",
        component_type: "stitch_high_fidelity_candidate_visible_copy",
        text: `${visibleText}\n`,
        must_include: page === "demo" ? ["餐道", "OMS", "DMS / iDMS", "CDBI", "AMS / Connector"] : ["餐道"],
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
    { encoding: "utf8" },
  );
  if (domainRun.status !== 0) {
    process.stderr.write(domainRun.stdout || "");
    process.stderr.write(domainRun.stderr || "");
  }
  const domainReport = fs.existsSync(domainReportPath)
    ? readJson(domainReportPath)
    : {
        status: "fail",
        passed: 0,
        total: 1,
        results: [{ id: `t45-${page}-${stem}`, status: "fail", issues: [{ code: "qa_execution_failed" }] }],
      };

  const screenshotPath = path.join(screenshotDir, `${stem}-1440-full.png`);
  const renderReport = await renderQa(page, htmlPath, screenshotPath);
  const renderReportPath = path.join(qaDir, `render-${stem}-report.json`);
  writeJson(renderReportPath, renderReport);

  const status =
    coverage.summary.status === "pass" &&
    staticReport.status === "pass" &&
    domainReport.status === "pass" &&
    renderReport.status === "pass"
      ? "pass"
      : "fail";
  const summary = {
    status,
    page,
    stem,
    coverage: coverage.summary,
    domainCopy: { status: domainReport.status, passed: domainReport.passed, total: domainReport.total },
    static: { status: staticReport.status },
    render: { status: renderReport.status, screenshot: renderReport.screenshot, h1: renderReport.metrics.h1 },
    files: {
      visibleText: path.relative(projectRoot, visibleTextPath),
      coverage: path.relative(projectRoot, coveragePath),
      static: path.relative(projectRoot, staticPath),
      domainCopy: path.relative(projectRoot, domainReportPath),
      render: path.relative(projectRoot, renderReportPath),
    },
  };
  console.log(JSON.stringify(summary, null, 2));
  process.exit(status === "pass" ? 0 : 1);
}

function usage() {
  console.error(`Usage:
  t45-stitch-page-tools.mjs build-inputs
  t45-stitch-page-tools.mjs prompt <page>
  t45-stitch-page-tools.mjs prompt-exact <page>
  t45-stitch-page-tools.mjs build-local <page|all>
  t45-stitch-page-tools.mjs qa <page> <html-path-relative-or-absolute> <stem>
`);
}

async function main() {
  const [command, page, target, stem] = process.argv.slice(2);
  if (command === "build-inputs") {
    buildInputs();
    return;
  }
  if (command === "prompt") {
    if (!page) return usage();
    if (!fs.existsSync(contractPath)) buildContracts();
    const { promptPath } = buildPrompt(page);
    console.log(JSON.stringify({ status: "pass", page, prompt: path.relative(projectRoot, promptPath) }, null, 2));
    return;
  }
  if (command === "prompt-exact") {
    if (!page) return usage();
    if (!fs.existsSync(contractPath)) buildContracts();
    const { promptPath } = buildExactPrompt(page);
    console.log(JSON.stringify({ status: "pass", page, prompt: path.relative(projectRoot, promptPath) }, null, 2));
    return;
  }
  if (command === "build-local") {
    if (!page) return usage();
    buildLocalTargets(page);
    return;
  }
  if (command === "qa") {
    if (!page || !target) return usage();
    await qaTarget(page, target, stem);
    return;
  }
  usage();
  process.exit(2);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
