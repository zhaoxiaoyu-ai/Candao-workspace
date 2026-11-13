# T35: Figma Homepage MCP Style Extraction and Token Update

日期：2026-08-20
状态：done

## 目标

基于用户提供的 Figma 首页节点 `336:7645`，提取餐道国际官网新版首页风格，沉淀可约束后续高保真页面的设计规范，并按首页 MCP 更新本地 Design tokens 与 Figma 变量。

## 输入

- Figma 文件：`https://www.figma.com/design/BMXIuVRzSUUt9YNhVAQA6K/Candao-International-Website-Visual-Prototype-T11.5?node-id=336-7645&m=dev`
- `tasks/T17/output/design-handoff/design-tokens.json`
- `tasks/T17/output/design-handoff/.stitch/DESIGN.md`
- `tasks/T17/output/design-handoff/stitch/GLOBAL-CONTEXT.md`
- `tasks/T17/output/design-handoff/.stitch/metadata.json`
- `domain-copy/` 行业文案规则

## 输出

- `output/figma-assets/figma-home-336-7645-full.png`
- `output/figma-homepage-mcp-style-guide-2026-08-20.md`
- `output/stitch-input/homepage-mcp-stitch-guardrails-2026-08-20.md`
- `output/figma-token-update-ledger-2026-08-20.json`
- 更新 `tasks/T17/output/design-handoff/design-tokens.json`
- 更新 `tasks/T17/output/design-handoff/.stitch/DESIGN.md`

## 输出语言

内部执行文档使用简体中文。官网页面可见文案和 Stitch 生产语言继续使用繁體中文单一 Locale。

## 完成标准

- Figma 首页风格提取包含视觉结构、色彩、字体、组件、媒介、页面节奏和禁止照搬项。
- 本地 Design tokens 增补首页 MCP 里的关键颜色、间距、圆角、字体级别、阴影和 Stitch 约束。
- Figma 变量和样式完成增量更新，并记录新增 / 更新对象 ID。
- 后续 Stitch 页面必须能引用本任务产出的 guardrails。
- 不将未授权指标、假 Logo、假产品截图或简体残留写入正式页面内容。
