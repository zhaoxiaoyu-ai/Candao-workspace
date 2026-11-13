# Task TFIX-LOCALIZATION: Website Production Localization 修正

## Goal

统一修正官网生产链路中的 Locale / Language / Visual Production 规则。

本任务不重新生成 T01-T11.5 的策略、Copy、UX 或视觉内容本身，只补齐后续生产和视觉执行必须遵守的语言规则。

## Output

《Website Production Localization Guideline》

以及 T05、T07、T08、T09、T10、T11、T11.5 的 v1.2 生产语言补丁文件。

## 输出语言

简体中文。

官网页面文案示例可使用繁體中文或 English，但必须明确区分 Locale。

## Requirements

- 内部文档继续使用简体中文。
- 官网内容库继续保留繁體中文 + English。
- Primary Locale 定义为繁體中文。
- Secondary Locale 定义为 English。
- 视觉稿、Figma、Prototype、Stitch 和 AI 网页生成默认必须模拟繁體中文真实官网。
- 禁止在同一个网页视觉稿中混合展示繁体中文和英文标题、正文、CTA 或 UI Label。
- 语言切换必须作为 Header 控件存在，但当前页面正文只显示当前 Locale。
- 使用 Agent-PD design-only 生成 Website Production Localization Reviewer Agent 规格。

## Acceptance

- `RULES.md` 已写入生产语言规则。
- T05-T11.5 已生成对应 v1.2 补丁产物。
- Agent-PD 运行记录和 Reviewer Agent 规格已落盘。
- `TASKS.md`、`STATE.md`、`HANDOFF.md` 已更新。
