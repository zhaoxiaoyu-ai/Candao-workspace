# Handoff

## Next Action

Continue T02 visual refinement with the new style-system-first workflow. Do not default to page-by-page reconstruction. First build the Tappo Phone App Style Kit from approved style anchors, then apply it to pages.

Latest support artifact: weekly report for 2026-05-29 created at `tasks/T02/output/weekly-report-2026-05-29.md`.
Additional support artifact: AI agent PM transition note created at `tasks/T02/output/ai-agent-pm-transition-2026-06-05.md`.
Deep support artifact: AI agent PM transition deep note created at `tasks/T02/output/ai-agent-pm-transition-deep-2026-06-05.md`.
New design planning artifact: `tasks/T02/output/tappo-phone-ui-visual-unification-plan-2026-06-05.md`.
Taste skill install note: `tasks/T02/output/taste-skill-install-note.md`; restart Codex to expose `design-taste-frontend`.
XHS Top10 skills install note: `tasks/T02/output/xhs-top10-skills-install-note-2026-06-05.md`; 9/10 mentioned skills installed, `frontend-skill` unavailable in current OpenAI skills source.
Latest App Figma implementation note: `tasks/T02/output/figma-app-ui-implementation-note-2026-06-05.md`.
Weekly report for 2026-06-05: `tasks/T02/output/weekly-report-2026-06-05.md`.
Latest local preview restart note: `tasks/T02/output/local-preview-restart-2026-06-08.md`.
Latest App style anchor brief: `tasks/T02/output/tappo-app-style-anchor-brief-2026-06-08.md`.
Latest module style classification: `tasks/T02/output/tappo-app-module-style-classification-2026-06-08.md`.
Latest intelligent visual anchor decision: `tasks/T02/output/tappo-app-intelligent-visual-anchor-decision-2026-06-08.md`.
Latest asset style boundaries: `tasks/T02/output/tappo-app-asset-style-boundaries-2026-06-08.md`.
Latest App Style Kit: `tasks/T02/output/tappo-app-style-kit-v0.1-2026-06-08.md`.
Latest first asset batch brief: `tasks/T02/output/tappo-app-first-asset-batch-brief-2026-06-08.md`.
Latest output language rule: `tasks/T02/output/output-language-rule-2026-06-08.md`.
Latest reviewable output rule: `tasks/T02/output/reviewable-output-rule-2026-06-08.md`.
Latest D01-D04 asset direction review: `tasks/T02/output/d01-d04-asset-direction-review-2026-06-08.md`.
Latest D01-D04 asset direction review v02: `tasks/T02/output/d01-d04-asset-direction-review-v02-2026-06-08.md`.
Latest D01-D04 asset direction review v03: `tasks/T02/output/d01-d04-asset-direction-review-v03-2026-06-08.md`.
Latest D01-D04 asset direction review v04: `tasks/T02/output/d01-d04-asset-direction-review-v04-2026-06-08.md`.
Latest D01-focused asset direction review v05: `tasks/T02/output/d01-d04-asset-direction-review-v05-2026-06-09.md`.
Latest D02-focused asset direction review v06: `tasks/T02/output/d01-d04-asset-direction-review-v06-2026-06-09.md`.
Latest first App icon and micro-illustration batch review v01: `tasks/T02/output/tappo-app-first-asset-batch-review-v01-2026-06-09.md`.
Latest I-series icon review v03: `tasks/T02/output/tappo-app-i-series-icon-review-v03-2026-06-09.md`.
Latest I-series icon review v04: `tasks/T02/output/tappo-app-i-series-icon-review-v04-2026-06-09.md`.
Latest review workflow cleanup: `tasks/T02/output/review-workflow-cleanup-2026-06-09.md`.
Latest clickable output link rule: `tasks/T02/output/clickable-output-link-rule-2026-06-09.md`.
Latest clickable preview link fix: `tasks/T02/output/clickable-preview-link-fix-2026-06-09.md`.
Latest output review and visualization long-term rule: `tasks/T02/output/output-review-visualization-long-term-rule-2026-06-09.md`.

## Required Context

Read these files first:

1. `PROJECT.md`
2. `RULES.md`
3. `STATE.md`
4. `TASKS.md`
5. `tasks/T01/task.md`

## Current Task

- ID: `T02`
- Path: `tasks/T02/task.md`
- Status: `in_progress`

## Notes For Next AI

- Current asset review target is `I01-I22 v04` I-series icons: prefer `tasks/T02/output/assets-review/current-review.html`, or open `tasks/T02/output/assets-review/current/index.html` / `tasks/T02/output/assets-review/current/preview.html`. `preview.png` remains available as a raw image backup. Older direction boards, `I01-I12 v01`, `I01-I22 v02`, and `I01-I22 v03` are retained only for comparison under `tasks/T02/output/assets-review/_archive/`. Do not migrate assets to `source/src/assets/generated/app-style-kit/` until the icon batch passes manual review.
- Start source inspection from `E:\Projects\Candao-workspace\projects\tappo-phone\source`.
- The Flutter bridge currently has a mock implementation in Web; replace it only when the shell contract is available.
- Keep PWA disabled by default until the user asks to ship standalone Web/PWA.
- Verified commands: `npm run typecheck`, `npm run build`.
- Local dev URL: `http://127.0.0.1:5177/`; if it becomes inaccessible, restart Vite from `projects/tappo-phone/source`.
- Visual smoke screenshots are in `tasks/T01/output/owner-dashboard-402.png` and `tasks/T01/output/ordering-flow-402.png`.
- Latest App page references: Figma file `nHamLH3qlZYFXVC0OVxNqc`, nodes `138:281` and `538:3555`.
- Latest App style anchors: `17:38` and `1:568`, plus user keywords `轻量、干净、智能感、运营感、可信赖`. Use these to build tokens, icon rules, illustration rules, and component specimens before page application. Keep Tappo orange as the primary brand/action color; use blue only as a secondary smart/system atmosphere.
- App intelligent tone tiers are now defined. Strong tone applies to cover, role selection, owner/staff home, data analysis, app management, and settings. Moderate assistance applies to login/setup/recharge/table/booking/payment settings. Restrained operation applies to POS ordering, checkout, payment success, transaction/detail, order detail, and form-heavy operation pages.
- Intelligent visual anchor decision: use a hybrid system. 小T is flexible, not a fixed mascot. Use 小T/assistant cues for cover/onboarding/home/help; use orange smart orb/system core for data/settings/system health/AI insights; use module-specific micro illustrations for device/payment/booking/app activation.
- Asset style boundary: target 2025-2026 clear soft-gradient mobile UI. Keep assets translucent, lightweight, rounded, comfortable, softly dimensional, and orange-led. Avoid traditional old UI, gray enterprise density, heavy skeuomorphism, dark cyber AI, generic clipart, blue-first rebrand, and low-contrast full-page neumorphism.
- App Style Kit v0.1 是页面重塑和资产生成前的当前设计源，已重写为简体中文主文档。内容包含 token、渐变、阴影、图标/插画规则、组件样张、页面矩阵、去 AI 味/去模板化检查和资产生产门槛。评审前不要生成完整资产库。
- App Style Kit v0.1 已纠正图标 tile 底色规则：底色不是固定几个颜色，渐变配方只是参考语法样例；真实资产可按模块语义变化，但必须保持橙色品牌主导关系、清透软渐变、低饱和、统一光源、统一材质和同屏一致性。
- App Style Kit v0.1 已纠正尺寸与字体规则：App UI 字体使用 `OPPO Sans 4.0`；当前设计宽度和评审宽度使用 `390px`，先忽略 `402px`；模块卡片圆角 `16px`，主视觉 `16px` 对齐，区块间距 `16px`，卡片内边距 `16-24px`，密集行内边距 `12-16px`，图标与文字间距 `8-12px`。
- 首批资产生产包已创建：`tasks/T02/output/tappo-app-first-asset-batch-brief-2026-06-08.md`。当前 `I01-I12 v01`、`I01-I22 v02` 与 `I01-I22 v03` 已作为对照，I 系列最新评审目标为 `I01-I22 v04`；先做人工评审，不直接迁移生产目录。
- 输出语言规则：后续 Tappo Phone 项目产出默认使用简体中文。仅在代码、文件路径、URL、Figma 节点、token、CSS 变量、命令、API、库/插件/技能名或必须保留的原型文案中保留英文或原文。
- 可评审产出规则：后续每次产出都必须清晰可见并可人工评审。必须提供评审入口、评审对象、通过标准和下一步动作；视觉、UI、Figma、图标、插画、资产类产出必须有可直接打开的截图、评审图、Figma 节点、本地预览页、`assets-review/` 索引或样张页。
- 资产评审目录规则：后续不要把多个版本继续平铺到 `assets-review/` 顶层。顶层只保留 `README.md`、`current-review.html`、`current/` 和 `_archive/`；新一轮开始前先把旧 `current/` 归档，再写入新的当前评审内容。
- 对话交付链接规则：后续视觉、UI、图标、插画或资产评审类最终回复必须直接给可点击 Markdown 文件链接，优先链接到 `assets-review/current-review.html`、`assets-review/current/index.html` 和 `assets-review/current/preview.html`；如果提供原始 PNG，只作为备用入口；同时保留可复制相对路径代码块。
- 用户产出审核要求：每次产出必须明确评审入口、评审对象、变更范围、通过标准和下一步动作。视觉资产默认使用 `current-review.html`、`current/index.html`、`current/preview.html`、`current/preview.png` 四件套；旧版本必须进入 `_archive/<date>-<reason>/`，不要让用户从平铺文件里猜当前版本。
- `D01-D04` 方向评审样张已生成。评审入口：`tasks/T02/output/assets-review/d01-d04-review-board.html`；静态图：`tasks/T02/output/assets-review/d01-d04-review-board.png`；说明：`tasks/T02/output/d01-d04-asset-direction-review-2026-06-08.md`。
- New hard constraints: preserve all prototype content unless user confirms removal; avoid tiny text; use generated raster assets for unified illustrations/icons where generic icons make the UI feel unfinished.
- 2026-05-19 correction: do not let Figma reference content replace prototype content. Use `tasks/T02/output/prototype-content-map.md` before implementing or revising pages.
- Current realigned pages: boss dashboard, staff app center, POS ordering, checkout, payment success.
- Latest owner dashboard adjustment: `消費場景` and `點餐方式` are now chart visualizations, not plain tables, but all prototype data is preserved. Removed forced non-prototype homepage blocks and changed owner bottom nav to `主頁 / 數據 / 設置`; `數據` and `設置` are disabled placeholders until their routes are implemented.
- Latest screenshot artifact: `tasks/T02/output/boss-dashboard-chart-content-402-mobile.png`.
- Latest visual revision: `TpSoftIcon` was added for deterministic centered SVG icons. Avoid using generated bitmap sheets via CSS cropping for production icon positions; if using generated bitmap icons later, export one centered asset per icon and validate in-container.
- Latest soft-icon screenshot artifacts: `tasks/T02/output/boss-dashboard-soft-icon-chart-402-mobile.png` and `tasks/T02/output/boss-dashboard-soft-icon-chart-402-full.png`.
- 2026-05-22 settings pass: Figma node `anMsqgZYi8ZqmJXZah78KI / 287:32144` was adapted into `source/src/pages/SettingsPage.vue`.
- Owner bottom-nav settings entry now routes to `/settings`.
- New project-bound generated raster asset: `source/src/assets/generated/tappo-settings-hero.png`.
- Latest settings screenshot artifact: `tasks/T02/output/settings-figma-inspired-402-mobile.png`.
- Output note: `tasks/T02/output/settings-figma-inspired-note.md`.
- Mobbin MCP was registered globally via `codex mcp add mobbin --url https://api.mobbin.com/mcp`, but current CLI reports auth as `Unsupported` and login timed out. See `tasks/T02/output/mobbin-mcp-setup-note.md`; restart Codex/IDE to rediscover tools, then verify whether Mobbin appears.
- Installed `dominikmartn/hue@hue` globally via Skills CLI at `C:\Users\Admin\.agents\skills\hue`; restart Codex before using it. See `tasks/T02/output/hue-skill-install-note.md`.
- Created reusable Tappo design language skill at `C:\Users\Admin\.agents\skills\tappo-design`; archived copy at `skills/tappo-design`. Use it when the user says `Tappo design`, `Tappo style`, or `/tappo-design`.
- Installed `Leonxlnx/taste-skill` at `C:\Users\Admin\.codex\skills\taste-skill`; after restart it should expose `design-taste-frontend`. Its stated scope is landing pages, portfolios, and redesigns, so for Tappo Phone use it as taste/audit support while keeping `tappo-design` as the primary product UI contract.
- Installed XHS-recommended frontend/product/UI support skills into `C:\Users\Admin\.codex\skills` and `C:\Users\Admin\.agents\skills`: `frontend-design`, `figma-implement-design`, `web-design-guidelines`, `vercel-react-best-practices`, `playwright`, `webapp-testing`, `canvas-design`, `brand-guidelines`, and `deploy-to-vercel`. `frontend-skill` from the article was unavailable in the current OpenAI source.
- Extracted project-facing single-file design contract at `projects/tappo-phone/tappo-design.md`; use it when a session needs Tappo rules without loading the full skill. Output note: `tasks/T02/output/tappo-design-md-extract-note.md`.
- Latest owner dashboard optimization used `tappo-design` and updated `source/src/pages/OwnerDashboard.vue`.
- Latest owner dashboard artifacts: `tasks/T02/output/owner-dashboard-before-tappo-design-402.png`, `tasks/T02/output/owner-dashboard-tappo-design-402-mobile.png`, `tasks/T02/output/owner-dashboard-tappo-design-402-tall.png`, and `tasks/T02/output/owner-dashboard-tappo-design-note.md`.
- Screenshot capture note: use Chrome headless with `--virtual-time-budget=5000`; without the wait budget, lazy route rendering can be captured as blank main content.
- Weekly report for 2026-05-22 now has two parts: (1) project title, hours, requirement ID summary; (2) bullet-point work description and next-week plan. The DingTalk simple version is plain text, not Markdown. Requirement IDs are marked as `待补充`, and hours are estimated as 8h / 24h / 8h based on the user's day-by-day timeline.
- Weekly report for 2026-05-29 is available at `tasks/T02/output/weekly-report-2026-05-29.md`. It is structured as two sections only: `本周执行内容` and `下周计划`, with both sections organized by timeline.
- Weekly report for 2026-06-05 is available at `tasks/T02/output/weekly-report-2026-06-05.md`. It is structured as `本周执行内容` and `下周计划`, organized by timeline. It records Tappo App product/ops optimizations, Tappo Phone PD review optimizations, owner recharge/app-opening full-flow page supplements, staff order/payment flow pages, omitted pages, and next-week owner/staff login flow plus visual optimization work.
- Verified after latest pass: `npm run typecheck`, `npm run build`.
- Verified after latest App Figma pass: `npm run typecheck`, `npm run build`.
- Local dev URL after latest pass: `http://127.0.0.1:5177/`; transaction page is `http://127.0.0.1:5177/transactions`. Older ports may still be occupied.
- 2026-06-08 preview check: `5174`-`5178` were initially unreachable, then Vite was restarted on `5177`; `/` and `/transactions` both returned HTTP 200. Logs are `tasks/T02/output/vite-preview-2026-06-08-5177.log` and `tasks/T02/output/vite-preview-2026-06-08-5177.err.log`.
- 2026-06-08 style direction change: user does not want page-by-page reconstruction first. Next input to request is the owner/staff module and page-type list, including which screens are daily operations, AI/insight surfaces, and restrained detail flows.
- 2026-06-08 module input resolved: user confirmed stronger intelligent tone for cover, role selection, owner/staff home, data analysis, and settings, while detail/operation pages should be restrained.
- 2026-06-08 visual anchor resolved: hybrid anchor, but 小T is not fixed.
- 2026-06-08 asset style input resolved: user wants 2025-2026 current clear soft-gradient UI, not old/traditional UI.
- 2026-06-08 App Style Kit v0.1 created. Next recommended step: review the Style Kit; if approved, generate the limited first asset batch only: 1 assistant direction, 1 orange smart orb/system core, 8-12 module icon tiles, and 3 micro illustrations.
- 2026-06-08 output language rule added: future project outputs should be in Simplified Chinese by default.
- 2026-06-08 App Style Kit v0.1 已重新调整：主语言改为简体中文，并强化橙色主导、简约清晰、统一用色、去 AI 味和去模板化规则。
- 2026-06-08 图标底色纠正：模块图标 tile 可以扩展为多种低饱和浅色渐变，不按固定色板套色；同屏建议控制在 3-4 个主要底色色系。
- 2026-06-08 尺寸/字体纠正：`OPPO Sans 4.0` 为 App UI 字体；当前 Style Kit 阶段只按 `390px` 宽度做设计验收，不再把 `402px` 作为必检尺寸。
- 2026-06-08 已推进到首批资产生产准备：先按 `D01-D04` 做方向评审，资产提示词和命名规则见 `tappo-app-first-asset-batch-brief-2026-06-08.md`。
- 2026-06-08 已写入长期可评审产出约束：任何产出不能只有内部说明或提示词，必须提供可人工打开和判断的评审入口。
- 2026-06-09 已按新关键词重绘 `I01-I22 v04`：宫格插画风、柔和渐变、干净白色背景、轻 3D 渲染感、减少细节、独立 SVG、闭合填充/布尔图形、无 `stroke` 线框。下一步等人工判断是否通过。
