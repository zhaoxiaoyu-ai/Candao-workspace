# T51 将 T50 接入评估中心送入 Stitch 生成高保真候选

状态：blocked  
日期：2026-08-27  
触发：用户要求“把这个内容放到 Stitch 上设计为高保真”。

## 目标

使用 T50 已清理的对外可落地内容，将「接入評估中心｜餐道」实际送入 Stitch Project 生成 `Desktop / TC` 高保真候选 screen，并下载 HTML、截图和 QA 报告。

## 输入

- `tasks/T50/output/prototype/index.html`
- `tasks/T50/output/screenshots/t50-public-hifi-1440-full.png`
- `tasks/T50/output/contracts/t50-public-hifi-contract.json`
- `tasks/T50/output/stitch-input/t50-public-hifi-stitch-brief-2026-08-27.md`
- `tasks/T35/output/figma-homepage-mcp-style-guide-2026-08-20.md`
- `tasks/T35/output/stitch-input/homepage-mcp-stitch-guardrails-2026-08-20.md`
- `domain-copy/business-context.md`
- `domain-copy/glossary.yaml`
- `domain-copy/copy-rules.md`

## Stitch 目标

- Project：`10888304674441209287`
- Design System：`assets/a99f770bf474445d98b287cf983bc147`
- Device：`DESKTOP`
- Model：`GEMINI_3_PRO`

## 必须保持

- 可见页面为繁體中文单一 Locale，Header 保留 `繁中 / EN`。
- 中文 / 繁體中文默认品牌显示为「餐道」。
- 不可出现 `Finance Center`、`Business Center`、`Data Center`、`Candao`、`T49`、`T50`、`原型`、`前端`、`React`、`QA`、`PPT`、`Slide`、`Stitch`、`Figma`、`高保真`、`品牌顯示` 等可见文本。
- 不得改写 `iDMS`、`SaaS`、`AMS / Connector` 等受保护术语。
- 不得创造未授权指标、SLA、假备案、假客户 Logo、假产品截图或未确认合作状态。
- 内容呈现必须像真实官网页面，不是执行说明或长文档。

## 输出

- `output/stitch-input/t51-enhanced-prompt-2026-08-27.md`
- `output/stitch-input/t51-edit-prompt-2026-08-27.md`
- `output/stitch-input/t51-second-edit-prompt-2026-08-27.md`
- `output/stitch-input/t51-third-edit-content-coverage-prompt-2026-08-27.md`
- `output/stitch-output/t51-stitch-generation-result-2026-08-27.json`
- `output/stitch-output/t51-stitch-edit-result-2026-08-27.json`
- `output/stitch-output/t51-stitch-second-edit-result-2026-08-27.json`
- `output/stitch-output/t51-stitch-third-edit-result-2026-08-27.json`
- `output/stitch-output/t51-stitch-screen-5a392fddd4c04634bc21c9e1926fffe8.html`
- `output/stitch-output/t51-stitch-screen-6159caff0a1c43c8ba7f3b504d26fe73-edited.html`
- `output/stitch-output/t51-stitch-screen-f8b664b70bdc4d55a2674dfed40a2b2c-final.html`
- `output/stitch-output/t51-stitch-screen-5d13339cb5a44dc6a73169adf3eec6d3-final.html`
- `output/screenshots/t51-stitch-screen-5d13339cb5a44dc6a73169adf3eec6d3-1440-full.png`
- `output/screenshots/t51-stitch-screen-<screen-id>-1440-full.png`
- `output/qa/t51-stitch-static-qa-report.json`
- `output/qa/t51-stitch-static-qa-third-report.json`
- `output/qa/domain-copy-t51-stitch-report.json`
- `output/t51-stitch-high-fidelity-run-report-2026-08-27.md`

## 当前结论

已实际送入 Stitch 并经过三轮 edit，最终 screen 为 `5d13339cb5a44dc6a73169adf3eec6d3`。本地 QA 显示可见禁用词、图标 ligature 与未授权指标已清零，`domain-copy` 为 `6/6 pass`，但内容覆盖仍未达到 T50 合同的 `100%`：默认内容缺 `3/58`，交互联合内容缺 `44/99`。因此不得登记为正式高保真通过稿，当前阻塞在 Stitch 对长内容精确保留和交互态联合内容覆盖不足。

## 验收

- Stitch 生成返回 screen ID 或可通过后续查询确认 screen。
- HTML 与截图已下载保存。
- 本地 1440 渲染可打开且无横向溢出。
- 禁用词和品牌显示检查通过。
- domain-copy QA 通过或记录具体失败项。
- 如果 Stitch 结果缺关键模块或出现硬性问题，最多对同一个 screen 做一次定向 edit；若仍无法复验通过，记录为 blocked，不登记为正式高保真。
