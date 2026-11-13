# Website Localization Review Report

任务：TFIX-LOCALIZATION / Fix-08  
项目：餐道国际官网重构  
日期：2026-08-03  
输出语言：简体中文。

## 1. 结论

当前 T01-T11.5 的策略、Copy、UX 和视觉方向可以保留，不需要重跑前序 Agent。

生产语言规则已统一为：

```text
Primary Locale:
繁體中文

Secondary Locale:
English
```

视觉稿、Figma、Prototype、Stitch 和 AI 网页生成默认必须输出繁體中文单语言真实官网版本。T11.5 Figma 已补充 `/TC Production` 生产页。

## 2. 必须修改

- T11.5 之后的视觉稿不得再同屏展示繁體中文 + English。
- Figma Frame 命名必须增加 `/TC` 或 `/EN`。
- Stitch / AI Web Generation Prompt 必须写明 `Traditional Chinese first` 和 `Do not display bilingual content`。
- T12 审核必须加入 Locale / Language / Visual Production 检查。

## 3. 建议修改

- 当前 T11.5 初版 Figma 双语页面可保留为视觉方向验证稿。
- 已新增 `TC Production Visual Prototype`；后续不要直接在原双语验证稿上继续深化。
- English 版本可在繁體中文生产稿确认后再独立生成。

## 4. 可保留项

- T07 双语 Copy 文档结构可保留，因为它是内容库，不是视觉布局。
- T08 / T09 的 UX 和 Prototype 逻辑可保留。
- T10 / T11 的视觉方向、摄影方向、UI Motion 和 Design System 方向可保留。
- T11.5 的初版 Figma 页面结构、Motion Storyboards 和 Visual Review 可作为参考；生产审核应以新增 `/TC Production` 页面为主。

## 5. Locale 检查表

| 检查项 | 标准 |
| --- | --- |
| Primary Locale | 繁體中文 |
| Secondary Locale | English |
| 默认视觉稿 | TC |
| Header Language Switch | 繁中 / EN |
| 页面正文 | 单一 Locale |
| CTA | 跟随当前 Locale |
| UI Label | 跟随当前 Locale |
| Frame 命名 | `/TC` 或 `/EN` |
| 内部说明 | 不得进入网页画面 |
| 双语混排 | 禁止 |

## 6. 已完成的视觉生产补充

已补充：

```text
T11.5 / TC Production Visual Prototype Correction
```

目标：

- 基于 T11.5 视觉方向；
- 生成 / 修正繁體中文真实官网视觉稿；
- 修正导航、Hero、CTA、UI Label 为 TC；
- 保留语言切换；
- 准备后续 English 独立版本。
