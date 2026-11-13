# Figma + Aceternity Reference Workflow Memory

Date: 2026-08-11

## 目的

本记录固化用户确认的长期协作规则：后续餐道国际官网模块设计可以用 Figma 图作为内容和静态视觉来源，用 Aceternity UI 组件名称或截图作为展示方法、交互动效和布局模式来源。

## 长期规则

- Figma 是最终内容设计与静态视觉的准确来源。
- Aceternity UI / shadcn 组件截图是展示方法和交互动效参考。
- React / Next.js + Tailwind 原型负责把两者结合为可运行、可响应式验证的网页能力。
- 用户可以直接贴图，不一定需要写长文字描述。
- 如果图中能看到 Aceternity 组件名称，应默认按该组件名称理解展示方式。
- 不复制 Aceternity 示例中的无关品牌、Logo、英文文案或业务内容。
- 必须把组件适配为 Candao 官网的繁體中文 `/TC` 生产语言、品牌视觉和当前信息架构。

## 默认解释格式

当用户提供 Figma 内容图 + Aceternity 参考图时，默认理解为：

```text
内容文案：按 Figma
图片素材：按 Figma
模块层级：按 Figma
展示方法：按 Aceternity 截图 / 组件名称
交互动效：按 Aceternity 组件动效近似实现
工程落地：React / Next.js + Tailwind + shadcn / Aceternity
```

## 例子

如果用户贴出 Aceternity 截图，标题为：

```text
Hero Section With Multi Color Background
```

则默认理解为：

- Candao Hero 的文案和图片仍按 Figma 官网稿；
- Hero 的展示方法参考该 Aceternity 组件；
- 可采用深色 Hero、左对齐大标题、顶部导航、胶囊标签、双 CTA、右下角多色光束背景等表现；
- 需去除示例中的 `Leadgen`、`Get warm leads`、`Try for free` 等无关内容；
- 需改为 Candao 品牌、繁體中文 `/TC` 页面和当前官网 CTA。

## 追问边界

只有在以下情况才需要向用户追问：

- 同一模块旁边放了多个互相冲突的 Aceternity 参考；
- 截图无法判断组件名称、关键动效或隐藏交互状态；
- Figma 内容与 Aceternity 布局冲突到无法同时保留；
- 参考方式会引入未确认事实、错误语言或偏离 Candao 品牌。
