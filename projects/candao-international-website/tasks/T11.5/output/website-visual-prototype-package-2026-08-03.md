# Website Visual Prototype Package

任务：T11.5 Visual Prototype Generation  
项目：餐道国际官网重构  
输出日期：2026-08-03  
输出语言：内部说明为简体中文；Figma 页面名、组件名、设计关键词保留英文。

生产语言修正：

本文件已根据 TFIX-LOCALIZATION 和 `t11.5-tc-production-figma-correction-2026-08-03.md` 更新理解：

- T11.5 初版 Figma 双语稿保留为视觉方向验证稿；
- 默认生产视觉稿必须为繁體中文单一 Locale；
- English 作为独立 Secondary Locale，不与繁體中文同屏混排；
- 生产 Frame 使用 `/TC` 命名。

## 1. 产物定位

本产物基于 T07 Final Copy、T08 UX Specification、T09 Prototype Validation、T10 Website Visual Direction 和 T11 High Fidelity Visual Specification 生成。

T11.5 的角色是：

```text
High Fidelity Visual Specification
→ Reviewable Figma Visual Prototype
→ T12 Design Review Input
```

本产物不是最终上线设计稿，也不是完整前端实现，而是用于评审官网视觉方向、页面节奏、产品 UI Demo、Motion Storyboard 和转化路径的 Figma 视觉原型。

## 2. Figma 文件

Figma 文件：

[Candao International Website Visual Prototype T11.5](https://www.figma.com/design/BMXIuVRzSUUt9YNhVAQA6K)

File Key:

```text
BMXIuVRzSUUt9YNhVAQA6K
```

创建位置：

```text
Aiello's team
```

## 3. Figma 页面结构

| 页面 | 内容 |
| --- | --- |
| `00 Cover` | T11.5 视觉原型包封面 |
| `01 Design Tokens` | 颜色、间距、圆角、字体层级和阴影基础 |
| `02 Components` | 本地原型组件：Button、Trust Chip、Capability Card、SaaS UI Demo Panel、Form Field |
| `03 Desktop Pages / Bilingual Validation` | 初版 Desktop 双语视觉方向验证稿，保留作历史参考 |
| `04 Mobile Pages / Bilingual Validation` | 初版 Mobile 双语视觉方向验证稿，保留作历史参考 |
| `05 Motion Storyboards` | Hero UI Overlay、Capability Flow、Platform Map、Order / Delivery 4-step Demo、Contact Intent |
| `06 Prototype Flow` | 三条主要用户路径 |
| `07 Visual Review` | T12 前置视觉审核清单 |
| `08 Desktop Pages / TC Production` | 繁體中文生产视觉稿 Desktop 1440 |
| `09 Mobile Pages / TC Production` | 繁體中文生产视觉稿 Mobile 390 |
| `10 TC Production Review` | T11.5 生产语言修正记录 |

## 4. 已生成原型范围

### Desktop 1440

初版验证稿已生成：

- `Home / Desktop 1440`
- `Products Platform / Desktop 1440`
- `Order Management / Desktop 1440`
- `Delivery Management / Desktop 1440`
- `Contact Book a Demo / Desktop 1440`

生产繁中稿已补充：

- `Home / Desktop 1440 / TC`
- `Platform / Desktop 1440 / TC`
- `Order Management / Desktop 1440 / TC`
- `Delivery Management / Desktop 1440 / TC`
- `Contact / Desktop 1440 / TC`

### Mobile 390

初版验证稿已生成：

- `Home / Mobile 390`
- `Products Platform / Mobile 390`
- `Order Management / Mobile 390`
- `Contact Book a Demo / Mobile 390`

生产繁中稿已补充：

- `Home / Mobile 390 / TC`
- `Platform / Mobile 390 / TC`
- `Order Management / Mobile 390 / TC`
- `Contact / Mobile 390 / TC`

## 5. 已覆盖关键体验

| 体验要求 | 状态 |
| --- | --- |
| Home Hero | 已用真实餐饮运营场景占位 + SaaS UI Overlay 表达 |
| Product Showcase | 已用 Capability Flow 表达平台能力关系 |
| Platform Capability Map | 已生成能力地图与平台 UI Demo |
| Order Management 4-step Demo | 已生成 Receive、Consolidate、Process、Report 四步 |
| Delivery Management 4-step Demo | 已生成 Demand、Assign、Track、Resolve 四步 |
| Contact Intent Selection | 已生成 Demo、Sales、Integration、Partner、Support 意图分流 |
| Prototype Flow | 已保留 Demo 主路径、餐饮场景路径和 Integrations 路径 |
| Visual Review | 已生成通过项与待确认风险 |

## 6. 设计系统原型

已创建本地变量集合：

- `Candao / Color`
- `Candao / Spacing & Radius`

已创建文字样式：

- `Candao / Display / EN`
- `Candao / H1 / TC`
- `Candao / H2 / EN`
- `Candao / Body / EN`
- `Candao / Body / TC`
- `Candao / Label / UI`

已创建效果样式：

- `Candao / Shadow / Floating UI`

已创建本地原型组件：

- `Component / Button / Primary`
- `Component / Button / Secondary`
- `Component / Trust Chip`
- `Component / Capability Card`
- `Component / SaaS UI Demo Panel`
- `Component / Form Field`

## 7. Visual Review 结论

已通过：

- 国际 SaaS 方向；
- 真实餐饮运营信号；
- 避免产品说明书式表达；
- UI 用于解释产品价值；
- Motion 服务流程理解；
- CTA 可见；
- 生产视觉稿使用繁體中文单一 Locale；
- Header 预留 `繁中 / EN` 语言切换；
- English 不与繁體中文同屏混排；
- 未写入未确认客户、Logo、数字、认证、定价、SLA 或集成状态。

待确认：

- 最终摄影与视频素材；
- 真实产品 UI 高保真程度；
- 品牌色与现有 Candao 品牌资产的一致性；
- 客户案例、客户 Logo、规模数据、认证与集成状态。

## 8. T12 输入建议

T12 Website Review Report 应重点审核：

1. Figma 原型是否符合 T03 冻结战略。
2. 页面结构是否继承 T04 / T05。
3. 页面文案是否遵守 T07 的繁体中文 + English 规则。
4. Home 是否满足 5 秒理解标准。
5. Platform 是否表达 Capability layer，而不是产品目录。
6. Order / Delivery UI Demo 是否能解释产品价值。
7. Contact 是否形成低摩擦 Demo 转化。
8. Visual Review 中的 Pending 项是否继续保持待确认状态。
9. 新增 `/TC Production` 页面是否符合生产语言规则。
10. 原 `Bilingual Validation` 页面是否仅作为历史参考，不进入生产稿判断。
