# T37 - Integrations 高保真 Stitch 单页生成

状态：blocked  
日期：2026-08-20

## 背景

长期目标要求以 Figma 首页 MCP 新版风格为基准，继续完成剩余一级页面的 Stitch 高保真输出。Solutions 在 T36 中因 Stitch 未写回暂时阻塞；本任务继续推进下一页 `Integrations / Desktop / TC`。

## 输入

- `tasks/T35/output/figma-homepage-mcp-style-guide-2026-08-20.md`
- `tasks/T35/output/stitch-input/homepage-mcp-stitch-guardrails-2026-08-20.md`
- `tasks/T17/output/design-handoff/stitch/GLOBAL-CONTEXT.md`
- `tasks/T17/output/design-handoff/stitch/INTEGRATIONS.md`
- `tasks/T17/output/design-handoff/.stitch/DESIGN.md`
- `tasks/T27/output/stitch-ready-low-fidelity/integrations.html`
- `tasks/T27/output/stitch-ready-low-fidelity/element-placement-map.json`
- `domain-copy/`

## 输出语言

内部记录使用简体中文；Stitch 目标页面为繁體中文单一 Locale，Header 可显示 `繁中 / EN`。

## 输出

- `tasks/T37/output/stitch-input/integrations-hifi-generate-prompt-2026-08-20.md`
- `tasks/T37/output/stitch-session-log-2026-08-20.json`
- `tasks/T37/output/stitch-downloads/`
- `tasks/T37/output/screenshots/`
- `tasks/T37/output/qa/`

若通过 QA，正式输出还需写入：

- `tasks/T17/output/design-handoff/.stitch/designs/`
- `tasks/T17/output/design-handoff/.stitch/metadata.json`

## 验收

- Integrations 页面只调用一次 `generate_screen_from_text`。
- 若结果存在硬性问题，只允许对同一 screen 调用一次 `edit_screens`。
- 正式输出只保留一个 HTML 和一张目标图。
- 输出前检查导航、文案、内部词、placeholder、假 Logo、假图片、未授权数字、未确认合作状态和 `iDMS` / `SaaS` / `AMS / Connector` 大小写。
- 通过 domain-copy QA、静态 HTML 检查和截图视觉检查。

## 2026-08-20 执行结果

已按单页单目标规则对 `Integrations / Desktop / TC` 只调用一次 Stitch `generate_screen_from_text`。

- Stitch project：`10888304674441209287`
- Design System：`assets/a99f770bf474445d98b287cf983bc147`
- Model：`GEMINI_3_PRO`
- Session：`8812386093922816405`
- 轮询结果：10 次 `list_screens` 后未发现新生成的 Integrations screen。
- 旧 screen：`621fecf4ef6945f58faa162d9f8af3b3` 仍存在，标题为 `整合能力 - Candao International (Fixed)`，但它不是本轮输出，且含有中文页品牌显示不合规风险，不能放入正式 `design-handoff/.stitch/designs/`。

本任务暂时阻塞在 Stitch 生成未写回，未生成正式 HTML、目标图或 QA 通过记录。证据见：

- `output/stitch-session-log-2026-08-20.json`
- `output/integrations-hifi-stitch-run-report-2026-08-20.md`
