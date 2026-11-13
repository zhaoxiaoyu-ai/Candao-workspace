# Website Production Localization Guideline

任务：TFIX-LOCALIZATION  
项目：餐道国际官网重构  
日期：2026-08-03  
输出语言：简体中文。

## 1. 修正目的

本规则用于统一约束 Candao 国际官网后续所有生产链路中的 Locale / Language / Visual Production 规则。

本次修正不重新生成前序策略、Copy、UX 或视觉内容本身，而是明确：

- 内部文档使用简体中文；
- 官网内容库保留繁體中文 + English；
- 视觉稿、Prototype、Figma、Stitch 和 AI 网页生成必须模拟真实上线状态；
- 默认视觉生产 Locale 为繁體中文；
- English 作为独立 Secondary Locale，不与繁體中文混排。

## 2. Internal Document

用途：

- Strategy；
- IA；
- Sitemap 内部说明；
- UX Specification；
- Prototype Validation；
- Visual Direction；
- Design Review；
- Agent Instruction。

语言：

```text
简体中文
```

规则：

内部文档可以引用页面英文名称、组件名、设计关键词和技术字段，但解释性文字默认使用简体中文。

## 3. Website Content

官网采用双语言内容库。

Primary Locale:

```text
繁體中文
```

用途：

- 香港市场；
- 亚洲市场；
- 第一版官网审核；
- 客户确认版本；
- 默认视觉生产版本。

Secondary Locale:

```text
English
```

用途：

- 国际市场英文版本；
- 海外访问版本；
- 后续英文 Locale 扩展。

Copy 文档输出顺序必须保持：

```text
繁體中文版本

English Version
```

禁止将 Copy 文档顺序改为：

```text
English

繁體中文
```

## 4. Visual Design / Prototype Locale

以下产物必须模拟真实官网状态：

- Figma 页面；
- 高保真视觉稿；
- Prototype；
- Stitch 生成页面；
- AI 网页截图；
- Web Prototype。

默认 Locale:

```text
Traditional Chinese
```

页面中只允许显示一种语言。

禁止：

```text
繁體中文標題
English Subtitle
繁體中文說明
English CTA
```

正确示例，繁體中文页面：

```text
首頁
解決方案
平台
整合能力
客戶案例
關於 Candao

為複雜餐飲營運建立清晰連接

預約產品演示
```

正确示例，English 页面：

```text
Home
Solutions
Platform
Integrations
Customers
About

Built for complex restaurant operations across channels, stores and markets

Book a Demo
```

## 5. Language Switch

Header 必须预留语言切换。

推荐形式：

```text
繁中 | EN
```

或：

```text
繁體中文 ▼
English
```

规则：

- 当前页面只显示当前 Locale；
- 语言切换控件可以同时显示两个选项；
- 页面正文、CTA、导航、UI Label 不得混合两个 Locale；
- English 页面必须作为独立 Locale 版本生成。

## 6. Figma Frame Naming

繁體中文版本：

```text
Home / Desktop 1440 / TC
Platform / Desktop 1440 / TC
Order Management / Desktop 1440 / TC
Delivery Management / Desktop 1440 / TC
Contact / Desktop 1440 / TC

Home / Mobile 390 / TC
Platform / Mobile 390 / TC
Order Management / Mobile 390 / TC
Contact / Mobile 390 / TC
```

English 版本：

```text
Home / Desktop 1440 / EN
Platform / Desktop 1440 / EN
Order Management / Desktop 1440 / EN
Delivery Management / Desktop 1440 / EN
Contact / Desktop 1440 / EN
```

## 7. Stitch / AI Web Generation Prompt Rule

所有 Stitch 或 AI 网页生成 Prompt 必须包含：

```text
Generate a Traditional Chinese first international SaaS website.

Language:
Traditional Chinese.

Do not display bilingual content.

Include language switch:
繁中 / EN

Visual style:
Premium SaaS
Large Editorial Photography
Semi-real SaaS UI
Product Motion
```

## 8. Production Review Gate

任何视觉稿、Prototype 或 AI 生成网页进入评审前，必须检查：

- 是否只有一个显示 Locale；
- 是否默认繁體中文；
- 是否预留语言切换；
- 是否没有内部说明文字进入页面；
- 是否没有双语标题、双语正文或双语 CTA；
- 是否像真实官网页面，而不是内部设计说明板；
- 是否可独立扩展 English Locale。

## 9. 与既有产物关系

本规则不否定 T07 的双语 Copy 文档。

T07 是内容库：

```text
繁體中文 Copy
+
English Copy
```

但 T11 / T11.5 / Figma / Stitch / Web Prototype 是视觉生产产物，必须选择单一 Locale 呈现。

T11.5 初版 Figma 原型已完成视觉方向验证，并已补充 `/TC` 单语言生产视觉稿。

后续 T12、Stitch、AI Web Generation 或 Web Prototype 应以 `/TC Production` 页面作为生产视觉输入；原双语页面仅作为历史验证参考。
