# Website High Fidelity Visual Design V1.2

任务：T11 High Fidelity 生产语言修正  
项目：餐道国际官网重构  
日期：2026-08-03  
输出语言：简体中文；Frame 命名、设计关键词保留英文。

## 1. 修正范围

本文件是 `website-high-fidelity-visual-design-2026-08-03.md` 与 `t11-v1.1-visual-prototype-generation-note-2026-08-03.md` 的生产语言补丁。

不重新设计高保真方案，不修改视觉概念。仅补充 High Fidelity Production Rule。

## 2. High Fidelity Locale

Default:

```text
Traditional Chinese Website
```

All High-fi Frames must contain:

- 繁體中文 Navigation；
- 繁體中文 Headline；
- 繁體中文 Body Copy；
- 繁體中文 CTA；
- 繁體中文 UI Labels。

English version must be created separately.

## 3. Frame Naming Rule

Desktop:

```text
Home / Desktop 1440 / TC
Platform / Desktop 1440 / TC
Order Management / Desktop 1440 / TC
Delivery Management / Desktop 1440 / TC
Contact / Desktop 1440 / TC
```

Mobile:

```text
Home / Mobile 390 / TC
Platform / Mobile 390 / TC
Order Management / Mobile 390 / TC
Contact / Mobile 390 / TC
```

English 独立版本：

```text
Home / Desktop 1440 / EN
Platform / Desktop 1440 / EN
Order Management / Desktop 1440 / EN
Delivery Management / Desktop 1440 / EN
Contact / Desktop 1440 / EN
```

## 4. High-fi 页面内容规则

### Home

默认 Hero 应显示：

```text
為複雜餐飲營運建立清晰連接
```

CTA：

```text
預約產品演示
探索平台能力
```

不得同时显示 English Hero。

### Platform

默认页面标题、能力卡片、UI Label 使用繁體中文。

可保留必要英文关键词：

- `Order Management`
- `Delivery Management`
- `Data Intelligence`
- `Integrations`

但不得把英文说明作为正文副标题混排。

### Order / Delivery UI Demo

UI Demo 默认使用繁體中文状态：

```text
新訂單
處理中
配送中
已完成
異常
```

English 状态另做 `/EN` 版本。

## 5. Stitch / AI Web Generation 补充

所有高保真转网页 Prompt 必须包含：

```text
Generate a Traditional Chinese first international SaaS website.

Language:
Traditional Chinese.

Do not display bilingual content.

Include language switch:
繁中 / EN
```

## 6. 对 T11.5 的影响

T11.5 初版 Figma 原型可作为视觉方向验证稿。

历史记录：当时已在同一 Figma 文件中补充 `/TC` 单语言生产视觉稿，并曾建议 T12 与后续客户评审以 `08 Desktop Pages / TC Production` 和 `09 Mobile Pages / TC Production` 为主输入。

2026-08-20 覆盖说明：该输入建议已被 T39 范围重置覆盖。用户已确认 Figma T11.5 中 `04`、`05`、`06`、`07`、`08`、`09`、`10` 内容均不符合，不保留；当前连基本 Web 端尚未确定，其他响应式不需要先做。后续不得再将 `08 Desktop Pages / TC Production`、`09 Mobile Pages / TC Production` 或 `10 TC Production Review` 作为 T12 / T13 / Stitch / React 的当前输入，必须先回到 Web Desktop 1440 基本稿确认。
