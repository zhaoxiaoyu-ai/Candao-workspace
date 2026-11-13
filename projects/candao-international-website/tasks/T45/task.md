# T45 - 剩余一级页面按 100% 内容覆盖与首页风格依次执行到 Stitch

## Status

blocked

## Goal

按用户追加要求，将 `Platform / Integrations / Customers / Resources / About / Demo` 六个一级页面依次重新执行到 Stitch。每页必须以 T27 低保真内容为 source of truth，以 T35 首页 MCP 风格为视觉基准，并以内容覆盖率 100% 作为硬门槛。

## Scope

- 首页不重跑，仅作为风格母版。
- `Solutions / 解決方案` 沿用 T44 本地基准和 Stitch 结果，不在本任务重复生成。
- 依次处理：
  1. `Platform / 平台`
  2. `Integrations / 整合能力`
  3. `Customers / 客戶案例`
  4. `Resources / 資源`
  5. `About / 關於餐道`
  6. `Demo / 預約產品演示`
- 为每页生成内容契约、Stitch prompt、Stitch screen、下载 HTML / screenshot、本地 1440 渲染截图和 QA 报告。

## Hard Requirements

- 内容覆盖率必须达到 100%，不得以“基本覆盖”通过。
- 每页必须贴合 T35 首页风格：暗色餐饮营运场景 / 系统段、企业级产品工作台或拓扑、白底业务内容段、清晰 CTA、`#528dff` 关键强调、8px 默认按钮。
- Header 必须包含 `首頁 / 解決方案 / 平台 / 整合能力 / 客戶案例 / 資源 / 關於餐道 / 預約演示`。
- 页面正文为繁體中文单一 Locale；Header 可显示 `繁中 / EN`。
- 中文 / 繁體中文默认品牌必须显示「餐道」。
- 必须保留 `iDMS`、`SaaS`、`AMS / Connector`、`OMS`、`DMS`、`CDBI`、`Finance Center` 等术语大小写。
- 不得出现 `Candao`、假备案、Material Symbols ligature 可见文本、未确认数字、未授权 Logo、假产品截图、假视频封面、假认证或无来源 SLA。

## Out of Scope

- 不上传本地 HTML、PNG 或 Markdown 到 Stitch，除非用户明确批准上传清单。
- 不推进 Mobile、390 视口、Responsive Rules 或动效实现。
- 不把任一 Stitch 下载件登记为正式高保真，除非该页 QA 通过且后续人工确认。

## Required Output

- `output/contracts/t45-content-contracts.json`
- `output/stitch-input/<page>-home-style-100-stitch-prompt-2026-08-23.md`
- `output/stitch-output/<page>-*.html`
- `output/stitch-output/<page>-*.png`
- `output/screenshots/<page>-*-1440-full.png`
- `output/qa/<page>-*-content-coverage-2026-08-23.json`
- `output/qa/domain-copy-<page>-*-report.json`
- `output/qa/render-<page>-*-report.json`
- `output/t45-sequential-stitch-execution-report-2026-08-23.md`

## Result

2026-08-23 已完成六页顺序执行到 Stitch，并保存下载件与 QA。Stitch 原生下载版全部未达到 100% 内容覆盖，因此不能登记为正式高保真：Platform `56/76`、Integrations `48/59`、Customers 原版 `36/90`、Customers copy-register 重试 `40/90`、Resources `32/112`、About `31/100`、Demo `67/75`。Demo 已做一次精准 edit，但 `get_screen` / 下载 URL 仍返回原 HTML。

已生成 6 个本地 upload-ready HTML 兜底候选，均通过内容覆盖、domain-copy、静态风险和 1440 渲染 QA：Platform `76/76`、Integrations `59/59`、Customers `90/90`、Resources `112/112`、About `100/100`、Demo `75/75`。上传清单为 `output/stitch-input/t45-upload-approval-request-2026-08-23.md`；按 `stitch::upload-to-stitch` 技能要求，上传前必须等待用户明确批准，本轮未上传。
