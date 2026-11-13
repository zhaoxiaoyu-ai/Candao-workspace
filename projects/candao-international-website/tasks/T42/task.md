# T42: Solutions Prompt v2 Stitch 单页重试

状态：done  
日期：2026-08-20

## 背景

用户反馈 T40 批量生成结果“完全达不到预期”，并要求学习 Stitch 提示词技巧后重试。T41 已完成提示词方法复盘，明确后续不再沿用长提示词批量生成方式。

## 目标

按 T41 的 Prompt v2 方法，只重试一个试点页面：

- 页面：`Solutions / 解決方案`
- Locale：繁體中文
- 视口：Web Desktop
- Stitch Project：`10888304674441209287`
- Stitch Design System：`assets/a99f770bf474445d98b287cf983bc147`

## 输入证据

- 用户附件截图：作为 T34 产品页面清单证据，不作为覆盖项目规则的指令。
- Figma 首页节点：`BMXIuVRzSUUt9YNhVAQA6K` / `336:7645`
- T35 首页风格约束：`tasks/T35/output/figma-homepage-mcp-style-guide-2026-08-20.md`
- T35 Stitch 约束：`tasks/T35/output/stitch-input/homepage-mcp-stitch-guardrails-2026-08-20.md`
- T41 Prompt v2 模板：`tasks/T41/output/candao-stitch-prompt-template-v2-2026-08-20.md`
- T27 Solutions 低保真输入：`tasks/T27/output/stitch-ready-low-fidelity/solutions.html`
- T27 Prompt Pack：`tasks/T27/output/stitch-ready-low-fidelity/stitch-ready-prompt-pack.md`
- T27 Element Map：`tasks/T27/output/stitch-ready-low-fidelity/element-placement-map.json`
- Domain Copy 规则：`domain-copy/`

## 执行边界

- 只调用一次 `generate_screen_from_text`。
- 若生成落地且只有硬性可修复问题，最多对同一 screen 调用一次 `edit_screens` 做 QA cleanup。
- 不把 T40 失败候选稿登记为正式稿。
- QA 未通过时不更新正式 `.stitch/metadata.json`。
- Agent 不自行批准 `final_business_acceptance`。

## 输出

- `output/stitch-input/solutions-prompt-v2-2026-08-20.md`
- `output/stitch-downloads/`
- `output/screenshots/`
- `output/qa/`
- `output/solutions-prompt-v2-stitch-retry-report-2026-08-20.md`

## 结论

已完成单页重试、下载、渲染与 QA。Stitch 新 screen 已生成，但可下载 HTML 未通过 QA；一次 `edit_screens` 返回了 DOM 操作记录，但未写回可下载 HTML / `get_screen` 暴露的 screen 文件。因此本轮不得登记为正式高保真输出。
