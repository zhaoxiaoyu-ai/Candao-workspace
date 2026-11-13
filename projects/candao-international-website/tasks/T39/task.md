# Task T39: Figma T11.5 Web Desktop-first 范围重置

## Goal

根据用户 2026-08-20 的最新确认，重置 Figma 文件 `Candao International Website Visual Prototype T11.5` 的当前设计范围。

本任务不继续生成新官网页面，不推进移动端、响应式或动效生产页。重点是把 Figma 与项目记录中的旧生产入口降级，避免后续继续误用 04-10 的旧内容。

## User Decisions

- Figma T11.5 中 04、05、06、07、08、09、10 内容均不符合，不保留。
- 00、01、02 内容需要相应更新。
- 当前连基本 Web 端还没有确定，其他响应式不需要先做。

## Required Actions

1. 读取项目规则、`domain-copy/` 规则、T35 Figma 首页 MCP 风格基线和 Figma 文件结构。
2. 检查 Figma 00-10 当前页面结构。
3. 在 `00 Cover` 新增 Web Desktop-first 当前基线说明。
4. 在 `01 Design Tokens` 新增桌面 Web token 当前基线说明。
5. 在 `02 Components` 新增桌面 Web 组件当前基线说明。
6. 将 04-10 页面显式标记为不保留，并排除移动端、响应式、动效、旧生产评审入口。
7. 更新 T12 审核入口、项目状态、交接文档和人工决策队列。

## Output

- `output/figma-t11-5-web-desktop-reset-report-2026-08-20.md`
- `output/figma-t11-5-web-desktop-reset-ledger-2026-08-20.json`

## 输出语言

内部说明使用简体中文；Figma 可见说明使用繁體中文，因为它出现在 Figma 画布中。

## Acceptance

- Figma 00/01/02 出现新的 Web Desktop-first 基线说明。
- Figma 04-10 页面名包含“不保留”，且每页有可见范围重置 Banner。
- 04-10 不再作为 T12 / T13 / Stitch / React 的当前输入。
- 当前范围明确为 Desktop Web first；移动端、响应式和动效等到 Web 端确认后再判断。
- 本地项目记录写回完成。
