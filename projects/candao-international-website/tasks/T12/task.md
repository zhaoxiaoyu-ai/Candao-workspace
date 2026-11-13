# Task T12: 审核 Agent

## Goal

运行审核 Agent，对策略、信息架构、Copy、UX、视觉方向、高保真视觉规格和视觉原型进行一致性审核。

T12 应在 T11.5 Visual Prototype Generation 之后执行。如果 T11.5 尚未生成可查看的视觉原型，T12 只能作为文档审核，不应被视为最终设计审核。

## Output

《Website Review Report》

## 输出语言

简体中文。

## Requirements

- 审核战略一致性、目标用户匹配度、信息架构清晰度、官网 Copy 双语完整性、UX 可执行性和视觉方向合理性。
- 必须读取 T11.5 输出《Website Visual Prototype Package》或其执行记录。
- 审核 T11.5 是否让用户实际看到页面效果，例如 Figma Frame、Prototype、Image Exploration 或 Web Demo。
- 对官网展示文案的审核可以引用繁体中文或英文原文，但审核意见使用简体中文。
- 标注必须修改、建议修改和可保留项。
- 必须读取 `tasks/TFIX-LOCALIZATION/output/Website Production Localization Guideline.md`。
- 必须审核生产语言规则：Primary Locale 是否为繁體中文，Secondary Locale 是否为 English。
- 必须审核视觉稿、Figma、Prototype 或 AI 生成网页是否为单一 Locale，而不是中英混排视觉稿。
- 必须指出当前 T11.5 Figma 原型是否已经具备可审核的 `/TC` 生产视觉稿；如 `/TC Production` 页面不合格，再要求补充或重做。
- 必须读取 `tasks/T11.5/output/t11.5-tc-production-figma-correction-2026-08-03.md`。
- 必须读取 `tasks/T39/output/figma-t11-5-web-desktop-reset-report-2026-08-20.md`。
- 2026-08-20 用户已确认 Figma T11.5 中 `04`、`05`、`06`、`07`、`08`、`09`、`10` 内容均不符合，不保留；因此旧 `08 Desktop Pages / TC Production`、`09 Mobile Pages / TC Production` 和 `10 TC Production Review` 不得继续作为视觉生产语言审核主输入。
- 原 `03 Desktop Pages / Bilingual Validation` 只能作为素材与历史探索参考，不得作为已确认 Web 端输出判定依据。
- T12 在新的 Web Desktop 基本稿确认前，只能审核当前资料、低保真 / 中保真输入、T35 token 基线和 T39 范围重置，不得宣称已有可进入 T13 的完整 `TC Production Visual Prototype`。
- 当前连基本 Web 端还没有确定，其他响应式不需要先做；T12 不审核移动端、390 视口、Responsive Rules 或 Motion Storyboards 的完成度。

## Acceptance

- 审核报告能指导 T13 最终整合。
- 明确指出是否存在语言规范违规，例如官网 Copy 缺少繁中或英文版本。
- 明确指出当前是否已有可查看视觉原型；如没有，需要阻止直接进入最终整合。
- 明确指出当前是否已经具备可进入 T12/T13 的 `TC Production Visual Prototype`。
