# Website UX Specification V1.2

任务：T08 UX 生产语言修正  
项目：餐道国际官网重构  
日期：2026-08-03  
输出语言：简体中文；页面名、组件名、Locale 代码保留英文。

## 1. 修正范围

本文件是 `website-ux-specification-2026-08-03.md` 和 `t08-v1.1-design-execution-supplement-note-2026-08-03.md` 的生产语言补丁。

不重做 UX，不修改页面流程。仅补充 Prototype Locale Rule。

## 2. Prototype Locale Rule

Default Prototype:

```text
Traditional Chinese Website Version
```

All UX prototypes must simulate:

- 繁體中文 Navigation；
- 繁體中文 Headline；
- 繁體中文 CTA；
- 繁體中文 UI Label。

English is separate locale.

## 3. Core Page Prototype Locale

| Page | Prototype Locale | 说明 |
| --- | --- | --- |
| Home | TC | 默认首页原型使用繁體中文真实官网状态 |
| Solutions Overview | TC | 业务场景层使用繁體中文导航与 CTA |
| Restaurant Chains | TC | 连锁餐饮场景页使用繁體中文 |
| Products / Platform | TC | 平台能力层使用繁體中文 |
| Order Management | TC | 产品流程 UI Label 默认繁體中文 |
| Delivery Management | TC | 配送流程 UI Label 默认繁體中文 |
| Integrations Overview | TC | 技术可信路径使用繁體中文，集成类别名可保留必要英文专有名词 |
| Cases / Customers | TC | 案例模板使用繁體中文，未授权状态可用内部标记但不得进入页面视觉 |
| Company / About | TC | 公司页使用繁體中文 |
| Contact / Book a Demo | TC | 表单与 CTA 使用繁體中文 |

## 4. UX Handoff Rule

UX 文档可以用简体中文说明模块目标和交互逻辑。

但交给 Figma / Stitch / Web Prototype 的页面内容必须指明：

```text
Prototype Locale:
TC
```

并禁止将内部说明文字放入页面 UI。

## 5. Language Switch UX

Header 应预留语言切换：

```text
繁中 | EN
```

或：

```text
繁體中文 ▼
English
```

交互规则：

- 当前页面只显示当前 Locale；
- 切换后进入对应 Locale 页面或状态；
- 不在同一页面同时展示繁體中文正文和 English 正文。
