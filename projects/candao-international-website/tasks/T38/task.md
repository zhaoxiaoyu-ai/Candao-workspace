# T38 - Resources 高保真 Stitch 单页生成

状态：blocked  
日期：2026-08-20

## 背景

长期目标要求以 Figma 首页 MCP 新版风格为基准，继续完成剩余一级页面的 Stitch 高保真输出。Home 与 Platform 已有正式高保真；Customers、Solutions、Integrations 当前因 Stitch 生成或写回问题未形成正式输出。本任务选择 `Resources / Desktop / TC` 作为下一页，原因是该页不依赖客户 Logo、客户照片或真实产品截图上传，可用支持路径、FAQ、查询入口和诚实空状态完成高保真结构表达。

## 输入

- `tasks/T35/output/figma-homepage-mcp-style-guide-2026-08-20.md`
- `tasks/T35/output/stitch-input/homepage-mcp-stitch-guardrails-2026-08-20.md`
- `tasks/T17/output/design-handoff/stitch/GLOBAL-CONTEXT.md`
- `tasks/T17/output/design-handoff/stitch/RESOURCES.md`
- `tasks/T17/output/design-handoff/.stitch/DESIGN.md`
- `tasks/T17/output/design-handoff/design-tokens.json`
- `tasks/T17/output/design-handoff/module-manifest.yaml`
- `tasks/T17/output/design-handoff/asset-manifest.yaml`
- `tasks/T17/output/design-handoff/references/reference-map.yaml`
- `tasks/T27/output/stitch-ready-low-fidelity/resources.html`
- `tasks/T27/output/stitch-ready-low-fidelity/stitch-ready-page-map.json`
- `tasks/T27/output/stitch-ready-low-fidelity/element-placement-map.json`
- `domain-copy/`

## 输出语言

内部记录使用简体中文；Stitch 目标页面为繁體中文单一 Locale，Header 可显示 `繁中 / EN`。

## 输出

- `tasks/T38/output/stitch-input/resources-hifi-generate-prompt-2026-08-20.md`
- `tasks/T38/output/stitch-session-log-2026-08-20.json`
- `tasks/T38/output/resources-hifi-stitch-run-report-2026-08-20.md`
- `tasks/T38/output/stitch-downloads/`
- `tasks/T38/output/screenshots/`
- `tasks/T38/output/qa/`

若通过 QA，正式输出还需写入：

- `tasks/T17/output/design-handoff/.stitch/designs/`
- `tasks/T17/output/design-handoff/.stitch/metadata.json`

## 验收

- Resources 页面只调用一次 `generate_screen_from_text`。
- 若结果存在硬性问题，只允许对同一 screen 调用一次 `edit_screens`。
- 正式输出只保留一个 HTML 和一张目标图。
- 输出前检查导航、文案、内部词、placeholder、假 Logo、假新闻、假日期、假作者、假下载资源、未授权数字和 `iDMS` / `SaaS` / `AMS / Connector` 大小写。
- 通过 domain-copy QA、静态 HTML 检查和截图视觉检查。

## 执行结果（2026-08-20）

已按单页单目标规则只调用一次 `generate_screen_from_text`：

- Project ID：`10888304674441209287`
- Design System：`assets/a99f770bf474445d98b287cf983bc147`
- Model：`GEMINI_3_PRO`
- Session ID：`15280406076998791054`
- Returned screen ID：无
- Output components：空

随后按 30 秒间隔轮询 `list_screens` 10 次，未发现新的 Resources screen。恢复后追加复核 Stitch 当前 screen 列表，仍只有历史 Resources screen：`d2b440264f1d435e99052f430177c868`、`068558a8cbbc4e85b368a7ae8d6f8225`、`efd66e8cb18442fb843910ab6ffb863f`。这些历史稿均不是 T38 输出，无法证明符合当前 T38 Prompt、T35 首页 MCP 风格和本轮内容约束。标题里的 `Candao` 是可修正命名问题，不是本任务阻塞的主因。

本任务未生成正式 HTML、目标图、QA 报告，也未更新 `tasks/T17/output/design-handoff/.stitch/metadata.json`。正式高保真范围仍只有 Home 与 Platform。证据见 `tasks/T38/output/resources-hifi-stitch-run-report-2026-08-20.md` 与 `tasks/T38/output/stitch-session-log-2026-08-20.json`。
