import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const workspaceRoot = "/Users/victorwong/Documents/Codex/Candao-workspace";
const projectRoot = path.join(workspaceRoot, "projects/candao-international-website");
const taskRoot = path.join(projectRoot, "tasks");
const outputDir = path.join(projectRoot, "tasks/T53/output");
const previewDir = path.join(outputDir, "preview");
const workbookPath = path.join(outputDir, "candao-international-website-daily-summary-2026-08-28.xlsx");
const today = "2026-08-28";

const readSources = [
  "AGENTS.md",
  "projects/candao-international-website/PROJECT.md",
  "projects/candao-international-website/RULES.md",
  "projects/candao-international-website/STATE.md",
  "projects/candao-international-website/HANDOFF.md",
  "projects/candao-international-website/TASKS.md",
  "projects/candao-international-website/AGENTS.md",
  "projects/candao-international-website/tasks/T01/output/candao-international-website-input-document-2026-08-02.md",
  "projects/candao-international-website/tasks/T02/output/website-strategy-analysis-2026-08-02.md",
  "projects/candao-international-website/tasks/T03/output/candao-international-website-strategy-v1.0-2026-08-02.md",
  "projects/candao-international-website/tasks/T14/output/business-specific-content-regeneration-brief-2026-08-14.md",
  "projects/candao-international-website/tasks/T15/output/old-website-ppt-to-page-module-evidence-matrix-v1.0-2026-08-14.md",
  "projects/candao-international-website/tasks/T16/output/core-pages-tc-content-skeleton-v1.0-2026-08-14.md",
  "projects/candao-international-website/tasks/Fix-00/task.md",
  "projects/candao-international-website/tasks/Fix-00/output/Production Rule Update Report.md",
  "projects/candao-international-website/tasks/T11.6/output/react-next-capability-prototype-delivery-2026-08-11.md",
  "projects/candao-international-website/tasks/T52/output/t52-visual-polish-run-report-2026-08-27.md",
  "projects/candao-international-website/tasks/T53/output/figma-version-history-screenshots/figma-version-history-01.png",
  "projects/candao-international-website/tasks/T53/output/figma-version-history-screenshots/figma-version-history-02.png",
  "projects/candao-international-website/tasks/T53/output/figma-version-history-screenshots/figma-version-history-03.png",
  "projects/candao-international-website/tasks/T53/output/figma-version-history-screenshots/figma-version-history-04.png",
  "projects/candao-international-website/tasks/T53/output/figma-version-history-screenshots/figma-version-history-05.png",
  "projects/candao-international-website/tasks/T53/output/figma-version-history-screenshots/figma-version-history-06.png",
  "projects/candao-international-website/tasks/T53/output/figma-version-history-screenshots/figma-version-history-07.png",
];

const figmaVersionRows = [
  ["2026-08-03", "3:27 PM, 4:07 PM, 6:25 PM", 3, "Figma 初始视觉原型 / TC 生产修正相关执行", "截图 01"],
  ["2026-08-05", "11:54 AM, 2:53 PM", 2, "Figma 高保真执行、Image2 视觉资产补入、视觉审查相关执行", "截图 01"],
  ["2026-08-08", "2:32 PM", 1, "C v2 一级目录主页相关 Figma / 视觉同步记录", "截图 01"],
  ["2026-08-11", "3:57 PM, 4:38 PM, 5:27 PM, 11:53 PM", 4, "C v3 一级页面与 React / Aceternity 原型相关执行", "截图 01"],
  ["2026-08-12", "12:28 AM, 10:08 AM, 10:20 AM, 11:49 AM, 12:54 PM, 3:12 PM, 3:48 PM, 4:33 PM, 5:02 PM, 5:39 PM, 6:19 PM", 11, "Figma 页面叙事审计、Aceternity 替换规划、首页样例相关执行", "截图 01/02"],
  ["2026-08-13", "9:13 AM, 10:08 AM, 10:45 AM, 11:44 AM, 11:56 AM, 2:04 PM, 11:57 PM", 7, "Hero 动效、QA4、Stitch C v4 首页候选相关执行", "截图 02/03"],
  ["2026-08-14", "12:28 AM, 12:40 AM, 10:03 AM, 10:11 AM, 3:29 PM, 4:07 PM, 5:38 PM, 7:28 PM", 8, "Evidence-first 规则、旧官网/PPT 证据补强、核心页面内容骨架相关执行", "截图 03"],
  ["2026-08-15", "10:52 PM", 1, "低保真、品牌显示与人工确认规则相关 Figma / 视觉记录", "截图 03"],
  ["2026-08-16", "2:47 PM, 10:21 PM, 10:35 PM", 3, "低保真叙事重构与设计输入层相关执行", "截图 03"],
  ["2026-08-17", "3:31 PM, 4:12 PM, 10:39 PM, 11:57 PM", 4, "设计输入层补强、Home / Platform 高保真收口相关执行", "截图 04"],
  ["2026-08-18", "9:22 AM, 9:38 AM, 10:21 AM, 5:52 PM, 9:12 PM, 10:43 PM, 11:22 PM, 11:56 PM", 8, "Stitch-ready 低保真到视觉/元素层过渡相关执行记录", "截图 04"],
  ["2026-08-19", "9:35 AM, 3:50 PM, 4:45 PM, 5:45 PM, 6:33 PM, 7:28 PM, 10:47 PM, 11:18 PM, 11:38 PM", 9, "Stitch-ready 输入包、元素还原、视觉媒体层和截图导出相关执行", "截图 04/05"],
  ["2026-08-20", "12:08 AM, 1:28 AM, 9:24 AM, 10:03 AM", 4, "Figma 首页风格提取、Web Desktop 范围重置、Stitch 重跑相关执行", "截图 05"],
  ["2026-08-23", "2:49 PM, 10:21 PM, 10:32 PM, 11:33 PM, 11:51 PM", 5, "Solutions 100% 覆盖、本地高保真和剩余页面 Stitch 执行相关记录", "截图 05/06"],
  ["2026-08-24", "12:39 AM, 9:34 AM, 10:53 AM, 2:34 PM, 3:20 PM, 4:58 PM, 5:09 PM, 9:38 PM", 8, "延续 8 月 23 日高保真与 Figma / 页面调校记录", "截图 06"],
  ["2026-08-25", "10:00 AM, 4:42 PM, 5:27 PM, 11:03 PM, 11:16 PM", 5, "Finance Center 术语修正与三合一原型相关执行", "截图 06/07"],
  ["2026-08-26", "12:11 AM, 12:18 AM, 4:44 PM, 4:50 PM", 4, "T48 高保真前置重构相关执行", "截图 07"],
  ["2026-08-27", "2:48 PM, 6:07 PM, 9:30 PM", 3, "T49/T50/T51/T52 互动原型、Stitch 和本地视觉基准相关执行", "截图 07"],
];

const dailyRows = [
  ["2026-08-02", "T00-T05", "资料整理、竞品调研、策略分析、战略冻结、IA / Sitemap 初稿", "Input Document、Strategy Analysis、Strategy V1.0、IA、Sitemap", "", "完成；客户授权、数字、认证待确认"],
  ["2026-08-03", "T05-T11, T11.5, TFIX", "Sitemap 定稿、双语 Copy、UX、视觉规格、Figma 初稿、Locale 规则", "Copy Document、Final Copy、UX Spec、Prototype Validation、Visual Direction、High Fidelity Visual Design、Figma Visual Prototype、Localization Guideline", "3 次可见版本：3:27 PM、4:07 PM、6:25 PM", "完成；早期 Figma 稿后来被 T39 覆盖"],
  ["2026-08-04", "T11.5-C", "Stitch 连通并生成首批 Desktop / TC 页面", "Stitch Project、Design System、Home、Platform v2、Order、Delivery v2 HTML/PNG", "", "有条件通过"],
  ["2026-08-05", "T11.5-A/A2/B", "Figma 高保真执行、Image2 资产补入、视觉总监审查、本地交互原型", "设计 Skill、Image2 资产、视觉审查报告、stitch-interactive-prototype", "2 次可见版本：11:54 AM、2:53 PM", "完成；仍非最终上线稿"],
  ["2026-08-07", "Fix-00, T11.5", "生产规则修正、IA / Locale / 生成器边界", "Website Production Guideline、Production Rule Update Report、T05-T11.5 Addendum、确认矩阵 v0.1", "", "完成"],
  ["2026-08-08", "T11.5", "C v2 一级目录主页与本地可交互原型", "7 个一级主页、Image2 资产、C v2 本地原型与截图", "1 次可见版本：2:32 PM", "完成"],
  ["2026-08-10", "T11.5", "Stitch 项目清理、目录缺口补齐、Solutions / Platform 边界修正", "cleanup report、目录补齐 v0.2、文案交互矩阵 v0.2/v0.3、差异化 v0.3", "", "完成"],
  ["2026-08-11", "T11.5, T11.6", "C v3 一级页面、React / Next 能力全景原型、Aceternity / shadcn 接入", "C v3 输出报告、React 原型、截图、工作流记忆", "4 次可见版本：3:57 PM、4:38 PM、5:27 PM、11:53 PM", "React lint / TS / build / Playwright 通过"],
  ["2026-08-12", "T11.5", "Figma 页面叙事审计、Aceternity 替换规划、首页反馈优化", "8 页审计截图、叙事审计、section audit、首页优化计划、替换样例", "11 次可见版本", "完成；需回到业务深度"],
  ["2026-08-13", "T11.5", "Hero QA4 动效、快捷语、Stitch C v4 首页候选", "QA4 示例、Hero 动效记录、design-qa、C v4 首页报告与截图", "7 次可见版本", "design-qa blocked"],
  ["2026-08-14", "T11.5, T14-T16", "Evidence-first 规则、旧官网/PPT 证据矩阵、核心页面繁中内容骨架", "Evidence-first rule、业务再生成 Brief、证据矩阵、Home/Solutions/Platform/Integrations 骨架", "8 次可见版本", "完成；前期分析调研重新校准"],
  ["2026-08-15", "T17-T24", "低保真 HTML、Customers/About 补齐、domain-copy、人工关卡、品牌与术语 QA", "低保真原型、截图、domain-copy、人工决策、品牌规则、Resources/Demo、逐页文案审计、大小写规则", "1 次可见版本：10:52 PM", "多轮 QA 通过；H3 部分待确认"],
  ["2026-08-16", "T25-T26", "低保真叙事局部重构、设计输入包启动", "T25 重构报告、T26 design-handoff、requirement audit、external readiness", "3 次可见版本：2:47 PM、10:21 PM、10:35 PM", "QA 通过；素材仍缺"],
  ["2026-08-17", "T17, T26", "47 模块 manifest 补强、Home / Platform Stitch 单页收口", "manifest QA、final verification、objective audit、Stitch 单页收口报告", "4 次可见版本：3:31 PM、4:12 PM、10:39 PM、11:57 PM", "完成"],
  ["2026-08-18", "Figma 版本历史", "Figma / 页面调校延续记录", "截图可见版本历史", "8 次可见版本", "纳入 Figma 执行记录"],
  ["2026-08-19", "T27-T34", "Stitch-ready 输入包、元素层、真实内容还原、视觉媒体层、PNG 导出、Customers Stitch 失败记录", "T27-T31 报告与 QA、T32 blocked 报告、T33/T34 完整 PNG", "9 次可见版本", "T32 blocked"],
  ["2026-08-20", "T34-T42", "Figma 首页风格提取、Web Desktop 范围重置、Stitch 批量/单页尝试、提示词复盘", "T35 style guide、T39 reset、T40/T42 QA、T41 prompt plan", "4 次可见版本", "T36-T38 blocked；T40/T42 不登记正式稿"],
  ["2026-08-23", "T43-T45", "Stitch 内容还原诊断、Solutions 100% 覆盖、本地高保真、其余 6 页执行", "T43 诊断、T44 本地高保真基准、T45 本地 upload-ready HTML 与 QA", "5 次可见版本", "T45 blocked，待上传审批"],
  ["2026-08-24", "Figma 版本历史", "Figma / 页面调校延续记录", "截图可见版本历史", "8 次可见版本", "纳入 Figma 执行记录"],
  ["2026-08-25", "T46-T47", "Finance Center 术语修正、三合一原型", "术语规则补丁、domain-copy 回归、T47 HTML/截图/合同/Stitch prompt", "5 次可见版本", "完成"],
  ["2026-08-26", "T48", "接入评估中心高保真前置重构", "T48 HTML、截图、审计、蓝图、合同、Stitch v3 prompt、QA", "4 次可见版本", "完成；未上传 Stitch"],
  ["2026-08-27", "T49-T52", "互动工作台、对外清理、Stitch 高保真阻塞、本地视觉基准", "T49/T50/T52 HTML/截图/合同/QA、T51 Stitch 输出与报告", "3 次可见版本", "T52 本地版为当前视觉基准；T51 blocked"],
  ["2026-08-28", "T53", "导出全任务时间节点和日报 Excel", "本 Excel、导出记录、预览图与检查文件", "", "完成"],
];

const phaseRows = [
  ["前期调研", "2026-08-02", "T00-T03", "资料、竞品、菜单、PPT、策略分析", "完成策略基线"],
  ["架构与内容", "2026-08-02 至 2026-08-03", "T04-T11, TFIX", "IA、Sitemap、Copy、UX、视觉规格、Locale 规则", "完成第一轮规划链路"],
  ["Figma / Stitch 探索", "2026-08-03 至 2026-08-13", "T11.5, T11.6, Fix-00", "Figma、Image2、Stitch、React、视觉审查", "验证能力，暴露质量和边界问题"],
  ["证据重校准", "2026-08-14", "T14-T16", "旧官网/PPT 证据、业务专属性、内容骨架", "完成前期调研再校准"],
  ["低保真与设计输入", "2026-08-15 至 2026-08-17", "T17-T26", "低保真、QA、人工关卡、设计 handoff", "完成外部输入基础"],
  ["Stitch-ready 与渲染", "2026-08-19", "T27-T34", "外部输入包、元素层、视觉媒体、PNG", "输入包成熟，Customers blocked"],
  ["Web Desktop 重置", "2026-08-20 至 2026-08-23", "T35-T45", "Figma 风格提取、范围重置、Stitch 失败复盘、100% 覆盖本地基准", "确认本地可控路径更可靠"],
  ["最新视觉基准", "2026-08-25 至 2026-08-27", "T46-T52", "术语规则、三合一、互动工作台、Stitch 阻塞、本地视觉基准", "T52 为当前基准"],
  ["导出", "2026-08-28", "T53", "日报与时间线 Excel", "完成"],
];

const blockers = [
  ["业务事实批准", "open", "客户 Logo、案例、规模数字、认证、SLA、集成状态仍需人工确认"],
  ["Web Desktop 基本稿", "open", "T39 后当前只推进 Web Desktop 1440，尚未最终人工验收"],
  ["T32", "blocked", "Customers Stitch 生成偏 Home，edit 未写回"],
  ["T36", "blocked", "Solutions Stitch 旧稿 QA fail，edit 未写回"],
  ["T37", "blocked", "Integrations Stitch session 未落地新 screen"],
  ["T38", "blocked", "Resources Stitch session 未落地新 screen"],
  ["T45", "blocked", "6 页原生 Stitch 未达 100%，等待本地 HTML 上传审批"],
  ["T51", "blocked", "Stitch 高保真候选内容覆盖不足"],
  ["素材缺口", "open", "真实产品截图、产品视频、客户 Logo、案例图片、公司图片仍缺"],
];

const summaries = new Map([
  ["T00", "初始化项目结构和语言规则"],
  ["T01", "整理输入资料、竞品、菜单和 PPT"],
  ["T02", "官网策略分析"],
  ["T03", "官网战略冻结"],
  ["T04", "信息架构规划"],
  ["T05", "正式 Sitemap 和页面清单"],
  ["T06", "官网双语内容库"],
  ["T07", "最终 Copy 优化"],
  ["T08", "UX 规格"],
  ["T09", "原型验证规划"],
  ["T10", "视觉方向"],
  ["T11", "高保真视觉规格"],
  ["T11.5", "Figma、Stitch、Image2、视觉审查与生产规则复合执行"],
  ["T11.6", "React / Next 能力全景原型"],
  ["TFIX-LOCALIZATION", "生产 Locale 规则修正"],
  ["Fix-00", "Website Production Guideline v1.0"],
  ["T12", "待执行审核报告"],
  ["T13", "待执行最终蓝图"],
  ["T14", "业务专属性再生成 Brief"],
  ["T15", "旧官网/PPT 证据矩阵"],
  ["T16", "核心页面繁中内容骨架"],
  ["T17", "低保真 HTML 与 Home/Platform Stitch 收口"],
  ["T18", "Customers/About 补齐"],
  ["T19", "domain-copy 能力与 QA"],
  ["T20", "人工确认机制"],
  ["T21", "品牌显示规则与 Logo"],
  ["T22", "Resources/Demo 补齐"],
  ["T23", "逐页文案收紧"],
  ["T24", "产品名大小写规则"],
  ["T25", "低保真叙事重构"],
  ["T26", "设计输入包与 47 模块 manifest"],
  ["T27", "Stitch-ready 外部输入包"],
  ["T28", "元素放置层"],
  ["T29", "元素内嵌"],
  ["T30", "真实内容还原"],
  ["T31", "视觉媒体层"],
  ["T32", "Customers Stitch 失败记录"],
  ["T33", "Home/Platform PNG 导出"],
  ["T34", "T27 入口和 8 页 PNG 导出"],
  ["T35", "Figma 首页风格提取"],
  ["T36", "Solutions Stitch 阻塞"],
  ["T37", "Integrations Stitch 阻塞"],
  ["T38", "Resources Stitch 阻塞"],
  ["T39", "Figma Web Desktop 范围重置"],
  ["T40", "7 页批量送 Stitch"],
  ["T41", "Stitch 提示词学习和复盘"],
  ["T42", "Solutions Prompt v2 重试"],
  ["T43", "Stitch 内容还原诊断"],
  ["T44", "Solutions 100% 本地高保真"],
  ["T45", "其余 6 页 Stitch 与本地兜底"],
  ["T46", "Finance Center 中文化规则"],
  ["T47", "整合/案例/资源三合一原型"],
  ["T48", "接入评估中心高保真前置"],
  ["T49", "Interactive Workbench"],
  ["T50", "对外可落地文案清理"],
  ["T51", "T50 送 Stitch，高保真候选阻塞"],
  ["T52", "本地高保真视觉基准"],
  ["T53", "全任务日报 Excel 导出"],
]);

function rel(absPath) {
  return absPath.startsWith(`${workspaceRoot}/`) ? absPath.replace(`${workspaceRoot}/`, "") : absPath;
}

function toDate(value) {
  const [y, m, d] = value.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}

function colName(index) {
  let n = index;
  let out = "";
  while (n > 0) {
    const r = (n - 1) % 26;
    out = String.fromCharCode(65 + r) + out;
    n = Math.floor((n - 1) / 26);
  }
  return out;
}

function addr(row1, col1, row2, col2) {
  return `${colName(col1)}${row1}:${colName(col2)}${row2}`;
}

function clean(value) {
  return value === null || value === undefined ? "" : String(value).replace(/\r/g, "").trim();
}

async function walk(dir) {
  const out = [];
  for (const item of await fs.readdir(dir, { withFileTypes: true })) {
    if (item.name === ".DS_Store" || item.name === "node_modules") continue;
    const full = path.join(dir, item.name);
    if (item.isDirectory()) out.push(...await walk(full));
    if (item.isFile()) out.push(full);
  }
  return out;
}

function parseTaskMap(text) {
  const rows = [];
  for (const raw of text.split("\n")) {
    const line = raw.trim();
    if (!line.startsWith("|") || line.includes("---")) continue;
    const parts = line.split("|").slice(1, -1).map((p) => p.trim());
    if (parts[0] === "ID" || parts.length < 5) continue;
    rows.push({
      id: parts[0],
      status: parts[1],
      goal: parts[2].replace(/`/g, ""),
      taskPath: parts[3].replace(/`/g, ""),
      updated: parts[4],
    });
  }
  return rows;
}

function statusLabel(status) {
  if (status === "done") return "已完成";
  if (status === "blocked") return "阻塞";
  if (status === "todo") return "待办";
  if (status === "in_progress") return "进行中";
  return status;
}

function classify(id) {
  if (["T01", "T02", "T03", "T14", "T15", "T16", "T41", "T43"].includes(id)) return "分析调研";
  if (["T04", "T05"].includes(id)) return "IA / Sitemap";
  if (["T06", "T07"].includes(id)) return "Copy";
  if (["T08", "T09"].includes(id)) return "UX / 原型规划";
  if (["T10", "T11"].includes(id)) return "视觉规格";
  if (["T11.5", "T11.6"].includes(id)) return "Figma / Stitch / React";
  if (["TFIX-LOCALIZATION", "Fix-00", "T19", "T20", "T21", "T24", "T46"].includes(id)) return "规则 / QA";
  const n = Number((id.match(/\d+(\.\d+)?/) || ["0"])[0]);
  if (n >= 17 && n <= 26) return "低保真 / 设计输入";
  if (n >= 27 && n <= 34) return "Stitch-ready / 渲染";
  if (n >= 35 && n <= 45) return "Stitch / Figma 试点";
  if (n >= 47 && n <= 52) return "最新高保真收口";
  if (id === "T53") return "导出";
  if (["T12", "T13"].includes(id)) return "待办";
  return "项目治理";
}

function outputSummary(files) {
  if (!files.length) return "";
  const preferred = files
    .filter((file) => /\.(md|json|html|xlsx|png)$/i.test(file))
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 4)
    .map(rel);
  return `${files.length} 个文件；例：${preferred.join("；")}`;
}

function writeTable(sheet, rows) {
  const range = sheet.getRangeByIndexes(0, 0, rows.length, rows[0].length);
  range.values = rows;
  return range;
}

function style(sheet, rows, widths, headerFill = "#174A7C", rowHeight = 42) {
  sheet.showGridLines = false;
  const cols = rows[0].length;
  const used = sheet.getRange(addr(1, 1, rows.length, cols));
  used.format.wrapText = true;
  used.format.verticalAlignment = "Top";
  used.format.borders = { preset: "inside", style: "thin", color: "#E5E7EB" };
  const header = sheet.getRange(addr(1, 1, 1, cols));
  header.format.fill.color = headerFill;
  header.format.font.color = "#FFFFFF";
  header.format.font.bold = true;
  header.format.horizontalAlignment = "Center";
  header.format.verticalAlignment = "Center";
  header.format.rowHeight = 32;
  if (rows.length > 1) {
    sheet.getRange(addr(2, 1, rows.length, cols)).format.rowHeight = rowHeight;
  }
  widths.forEach((w, i) => {
    sheet.getRange(`${colName(i + 1)}:${colName(i + 1)}`).format.columnWidth = w;
  });
  try { sheet.freezePanes.freezeRows(1); } catch {}
}

function colorStatus(sheet, col, lastRow) {
  for (let row = 2; row <= lastRow; row += 1) {
    const value = clean(sheet.getRange(`${colName(col)}${row}`).values?.[0]?.[0]);
    const cell = sheet.getRange(`${colName(col)}${row}`);
    if (value.includes("完成") || value === "done") {
      cell.format.fill.color = "#E7F6EC";
      cell.format.font.color = "#166534";
      cell.format.font.bold = true;
    } else if (value.includes("阻塞") || value === "blocked") {
      cell.format.fill.color = "#FDECEC";
      cell.format.font.color = "#B42318";
      cell.format.font.bold = true;
    } else if (value.includes("待办") || value === "todo" || value === "open") {
      cell.format.fill.color = "#FFF7E6";
      cell.format.font.color = "#92400E";
      cell.format.font.bold = true;
    }
  }
}

async function main() {
  await fs.mkdir(previewDir, { recursive: true });
  const taskMapText = await fs.readFile(path.join(projectRoot, "TASKS.md"), "utf8");
  const parsedTasks = parseTaskMap(taskMapText);
  const ids = new Set(parsedTasks.map((row) => row.id));
  const allTasks = [
    ...parsedTasks,
    ...(ids.has("Fix-00") ? [] : [{ id: "Fix-00", status: "done", goal: "建立 Website Production Guideline v1.0", taskPath: "tasks/Fix-00/task.md", updated: "2026-08-07" }]),
    ...(ids.has("T53") ? [] : [{ id: "T53", status: "done", goal: "导出餐道国际官网改造全任务时间节点与日报 Excel", taskPath: "tasks/T53/task.md", updated: today }]),
  ];

  const outputFiles = await walk(taskRoot);
  const filesByTask = new Map();
  for (const file of outputFiles) {
    const id = (file.match(/\/tasks\/([^/]+)\//) || [null, ""])[1];
    if (!id) continue;
    if (!filesByTask.has(id)) filesByTask.set(id, []);
    filesByTask.get(id).push(file);
  }

  const taskTable = [
    ["序号", "任务 ID", "状态", "日期", "类型", "重点任务", "产出内容"],
    ...allTasks.map((task, index) => [
      index + 1,
      task.id,
      statusLabel(task.status),
      task.updated ? toDate(task.updated) : "",
      classify(task.id),
      summaries.get(task.id) || task.goal,
      outputSummary((filesByTask.get(task.id) || []).sort()),
    ]),
  ];

  const dailyTable = [
    ["日期", "涉及任务", "重点执行任务", "产出内容", "Figma 执行记录", "状态 / 结论"],
    ...dailyRows.map((row) => [toDate(row[0]), row[1], row[2], row[3], row[4], row[5]]),
  ];

  const figmaTable = [
    ["日期", "截图可见版本时间", "可见次数", "关联执行", "来源"],
    ...figmaVersionRows.map((row) => [toDate(row[0]), row[1], row[2], row[3], row[4]]),
  ];

  const phaseTable = [
    ["阶段", "日期", "涉及任务", "重点执行", "阶段产出 / 结论"],
    ...phaseRows,
  ];

  const blockerTable = [
    ["事项", "状态", "说明"],
    ...blockers,
  ];

  const evidenceRows = [
    ["序号", "类型", "路径 / 来源", "说明"],
    ...readSources.map((source, index) => [index + 1, "本轮读取 / 附件截图", source, "用于日报口径"]),
  ];

  const workbook = Workbook.create();
  const overview = workbook.worksheets.add("项目总览");
  const daily = workbook.worksheets.add("日报总表");
  const tasks = workbook.worksheets.add("任务明细");
  const figma = workbook.worksheets.add("Figma执行记录");
  const phases = workbook.worksheets.add("阶段汇总");
  const blockersSheet = workbook.worksheets.add("阻塞待确认");
  const evidence = workbook.worksheets.add("证据索引");

  const overviewRows = [
    ["餐道国际官网改造日报导出", "", "", ""],
    ["导出日期", toDate(today), "当前基准", "T52 本地高保真视觉基准"],
    ["覆盖任务", "T00-T53、T11.6、TFIX-LOCALIZATION、Fix-00、T12/T13 待办", "Figma 记录", "已并入截图可见版本历史"],
    ["任务总数", allTasks.length, "日报天数", dailyRows.length],
    ["已完成", "", "阻塞", ""],
    ["待办", "", "说明", "只记录重点执行任务和产出内容，不重新生成官网文案或批准人工关卡"],
  ];
  writeTable(overview, overviewRows);
  overview.getRange("B5").formulas = [[`=COUNTIF('任务明细'!C2:C${taskTable.length},"已完成")`]];
  overview.getRange("D5").formulas = [[`=COUNTIF('任务明细'!C2:C${taskTable.length},"阻塞")`]];
  overview.getRange("B6").formulas = [[`=COUNTIF('任务明细'!C2:C${taskTable.length},"待办")`]];
  overview.getRange("A1:D1").merge();
  overview.getRange("A1:D1").format.fill.color = "#0B1220";
  overview.getRange("A1:D1").format.font.color = "#FFFFFF";
  overview.getRange("A1:D1").format.font.bold = true;
  overview.getRange("A1:D1").format.font.size = 16;
  overview.getRange("A1:D1").format.horizontalAlignment = "Center";
  overview.getRange("A2:D6").format.wrapText = true;
  overview.getRange("A2:D6").format.borders = { preset: "all", style: "thin", color: "#D8DEE8" };
  ["A", "C"].forEach((col) => {
    overview.getRange(`${col}2:${col}6`).format.fill.color = "#F1F5F9";
    overview.getRange(`${col}2:${col}6`).format.font.bold = true;
  });
  [18, 42, 18, 50].forEach((w, i) => {
    overview.getRange(`${colName(i + 1)}:${colName(i + 1)}`).format.columnWidth = w;
  });
  overview.getRange("B2").format.numberFormat = [["yyyy-mm-dd"]];

  writeTable(daily, dailyTable);
  style(daily, dailyTable, [13, 24, 48, 62, 48, 36], "#174A7C", 52);
  daily.getRange(`A2:A${dailyTable.length}`).format.numberFormat = [["yyyy-mm-dd"]];
  colorStatus(daily, 6, dailyTable.length);

  writeTable(tasks, taskTable);
  style(tasks, taskTable, [8, 12, 12, 13, 24, 44, 78], "#285A8E", 44);
  tasks.getRange(`D2:D${taskTable.length}`).format.numberFormat = [["yyyy-mm-dd"]];
  colorStatus(tasks, 3, taskTable.length);
  try { tasks.freezePanes.freezeColumns(2); } catch {}

  writeTable(figma, figmaTable);
  style(figma, figmaTable, [13, 56, 12, 58, 20], "#4B5563", 44);
  figma.getRange(`A2:A${figmaTable.length}`).format.numberFormat = [["yyyy-mm-dd"]];

  writeTable(phases, phaseTable);
  style(phases, phaseTable, [20, 24, 26, 58, 48], "#37656B", 44);

  writeTable(blockersSheet, blockerTable);
  style(blockersSheet, blockerTable, [26, 14, 78], "#8A4B17", 42);
  colorStatus(blockersSheet, 2, blockerTable.length);

  writeTable(evidence, evidenceRows);
  style(evidence, evidenceRows, [8, 24, 92, 34], "#52525B", 36);

  const previews = new Map([
    ["项目总览", "A1:D6"],
    ["日报总表", "A1:F24"],
    ["任务明细", "A1:G56"],
    ["Figma执行记录", "A1:E19"],
    ["阶段汇总", "A1:E10"],
    ["阻塞待确认", "A1:C10"],
    ["证据索引", "A1:D25"],
  ]);
  for (const [sheetName, range] of previews) {
    const image = await workbook.render({ sheetName, range, scale: 1, format: "png" });
    await fs.writeFile(path.join(previewDir, `${sheetName}.png`), new Uint8Array(await image.arrayBuffer()));
  }

  const inspectDaily = await workbook.inspect({
    kind: "table",
    range: "日报总表!A1:F24",
    include: "values,formulas",
    tableMaxRows: 24,
    tableMaxCols: 6,
    maxChars: 9000,
  });
  const inspectFigma = await workbook.inspect({
    kind: "table",
    range: "Figma执行记录!A1:E19",
    include: "values,formulas",
    tableMaxRows: 20,
    tableMaxCols: 5,
    maxChars: 7000,
  });
  const errors = await workbook.inspect({
    kind: "match",
    searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
    options: { useRegex: true, maxResults: 300 },
    summary: "final formula error scan",
  });
  await fs.writeFile(path.join(outputDir, "t53-workbook-inspect-daily.ndjson"), inspectDaily.ndjson || "");
  await fs.writeFile(path.join(outputDir, "t53-workbook-inspect-figma.ndjson"), inspectFigma.ndjson || "");
  await fs.writeFile(path.join(outputDir, "t53-workbook-error-scan.ndjson"), errors.ndjson || "");

  const xlsx = await SpreadsheetFile.exportXlsx(workbook);
  await xlsx.save(workbookPath);

  const note = `# T53 Excel 导出记录

日期：2026-08-28  
状态：done

已生成：

\`${rel(workbookPath)}\`

工作簿包括：

- 项目总览
- 日报总表
- 任务明细
- Figma执行记录
- 阶段汇总
- 阻塞待确认
- 证据索引

口径：

- 已覆盖 T00 至 T53、T11.6、TFIX-LOCALIZATION、Fix-00，以及 T12 / T13 待办。
- 已包含前期分析调研：T01、T02、T03、T14、T15、T16。
- 已根据用户提供的 7 张 Figma 版本历史截图补入截图可见的 Figma 执行记录。
- 截图显示 Figma 当前版本下有 \`88 autosave versions\`；本表记录的是附件截图中可见且可读的时间点汇总。

验证：

- 已 inspect 日报总表与 Figma执行记录。
- 已执行公式错误扫描。
- 已渲染所有工作表预览图到 \`output/preview/\`。

边界：

- 本次导出只汇总重点执行任务和产出内容，不重新生成官网展示文案，不新增业务事实，不批准人工关卡。
`;
  await fs.writeFile(path.join(outputDir, "t53-excel-export-note-2026-08-28.md"), note, "utf8");

  console.log(JSON.stringify({
    workbookPath,
    dailyRows: dailyRows.length,
    taskRows: taskTable.length - 1,
    figmaRows: figmaTable.length - 1,
    previewDir,
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
