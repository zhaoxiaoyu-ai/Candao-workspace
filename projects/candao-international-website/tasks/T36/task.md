# T36 - Solutions 高保真 Stitch 单页收口

状态：blocked  
日期：2026-08-20

## 背景

长期目标要求以 Figma 首页 MCP 新版风格为基准，继续完成剩余一级页面的 Stitch 高保真输出。Home 与 Platform 已有正式高保真；Solutions 是剩余页面优先级第一项。

上一轮已对 Solutions 发起一次 `generate_screen_from_text`，但 Stitch 只返回 session `6134769186452970130`，未在 screen 列表中落地新的 Solutions screen。因此本任务不重试生成，而是检查既有 C v3 Solutions screen `4188f2a7f3f84566b5644b19efdedadd`，将其作为同页候选目标进行一次 `edit_screens` 定向修正。

## 输入

- `tasks/T35/output/figma-homepage-mcp-style-guide-2026-08-20.md`
- `tasks/T35/output/stitch-input/homepage-mcp-stitch-guardrails-2026-08-20.md`
- `tasks/T17/output/design-handoff/stitch/GLOBAL-CONTEXT.md`
- `tasks/T17/output/design-handoff/stitch/SOLUTIONS.md`
- `tasks/T17/output/design-handoff/.stitch/DESIGN.md`
- `tasks/T27/output/stitch-ready-low-fidelity/solutions.html`
- `domain-copy/`

## 输出语言

内部记录使用简体中文；Stitch 目标页面为繁體中文单一 Locale，Header 可显示 `繁中 / EN`。

## 输出

- `tasks/T36/output/stitch-input/solutions-hifi-edit-prompt-2026-08-20.md`
- `tasks/T36/output/stitch-downloads/`
- `tasks/T36/output/screenshots/`
- `tasks/T36/output/qa/`

若后续通过 QA，正式输出还需写入：

- `tasks/T17/output/design-handoff/.stitch/designs/`
- `tasks/T17/output/design-handoff/.stitch/metadata.json`

## 验收

- Solutions 页面只保留一个正式 HTML 和一张目标图。
- 不重试 `generate_screen_from_text`。
- 若使用编辑，只对同一个 Solutions screen 执行一次 `edit_screens`。
- 输出前检查导航、文案、内部词、placeholder、假 Logo、假图片、未授权数字和 `iDMS` / `SaaS` / `AMS / Connector` 大小写。
- 通过 domain-copy QA 和静态 HTML 检查。

## 当前结论

截至 2026-08-20，本任务未形成可交付的正式 Solutions 高保真输出。

- 既有 C v3 Solutions screen `4188f2a7f3f84566b5644b19efdedadd` 已下载并检查，但存在中文页显示 `Candao`、外部生成图片、未授权状态数量、Material icon ligature 可见和 Footer 英文法务链接等硬性问题。
- 已按规则对同一个 screen 只调用一次 `edit_screens`，session 为 `9105741495013900777`。
- 轮询 10 次后，目标 screen 的 HTML 下载文件、截图文件、标题和高度均未变化，也未在 screen 列表中出现新的可用 Solutions screen。
- 因此不得将旧 C v3 screen 放入正式 `design-handoff/.stitch/designs/`。
