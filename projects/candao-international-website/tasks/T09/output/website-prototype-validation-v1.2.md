# Website Prototype Validation V1.2

任务：T09 Prototype 生产语言修正  
项目：餐道国际官网重构  
日期：2026-08-03  
输出语言：简体中文；页面名和 Locale 代码保留英文。

## 1. 修正范围

本文件是 `website-prototype-validation-2026-08-03.md` 和 `t09-v1.1-prototype-validation-supplement-note-2026-08-03.md` 的生产语言补丁。

不重做原型验证，不修改页面节奏。仅补充 Prototype Language Validation。

## 2. Prototype Language Validation

### Navigation

必须跟随当前 Locale。

默认 Prototype Locale:

```text
TC
```

因此默认 Navigation 必须为繁體中文，例如：

```text
首頁
解決方案
平台
整合能力
客戶案例
關於 Candao
```

### Content

必须单语言。

默认繁體中文页面不得同时展示 English headline、English description 或 English CTA。

### CTA

CTA 必须对应当前 Locale。

默认繁體中文 CTA 示例：

```text
預約產品演示
探索平台能力
查看解決方案
```

### Language Switch

Header 必须预留：

```text
繁中 | EN
```

或等价控件。

## 3. 禁止事项

Prototype must not contain:

- 双语标题；
- 中文解释混入网页；
- 英文辅助说明混入视觉稿；
- 内部设计备注进入页面；
- 页面同时展示繁體中文正文和 English 正文。

## 4. 新增验收项

Prototype must simulate real production website.

Not:

```text
Design presentation board.
```

Not:

```text
Bilingual content sheet.
```

## 5. 对 T11.5 的影响

T11.5 初版 Figma 原型可作为视觉方向验证参考。

当前已补充生产级繁中视觉稿，T12 必须以以下 `/TC` Frame 作为生产原型审核输入：

```text
Home / Desktop 1440 / TC
Platform / Desktop 1440 / TC
Order Management / Desktop 1440 / TC
Delivery Management / Desktop 1440 / TC
Contact / Desktop 1440 / TC
```

并确认页面视觉内容保持繁體中文单语言。
