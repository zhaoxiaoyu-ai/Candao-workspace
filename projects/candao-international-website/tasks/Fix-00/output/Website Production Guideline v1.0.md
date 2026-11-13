# Website Production Guideline v1.0

## 0. 规则优先级

本文件是 Candao International Website 后续生产流程的最高优先级规则，适用于所有 Agent、Skill、Prompt、Figma、Stitch、Image2、AI Web Generator、Prototype、Review 和实现任务。

当本规则与 AI 生成结果、原型评审壳、视觉探索、下游任务说明或临时 Prompt 发生冲突时，以本规则为准。

本规则不替代 T05 已冻结的 Sitemap，而是保护它不被后续生成流程改写。

## 1. 语言与 Locale 规则

### 1.1 内部文档语言

内部分析文档和任务产物默认使用简体中文。

适用范围包括：

- Strategy
- Sitemap 分析
- UX 分析
- Visual Direction
- Review
- Task Report
- Agent 指令
- Production Note

只有在技术上必须保留英文时，才保留英文，例如文件名、URL、API 字段、产品名、第三方名称、代码标识、精确来源名称或 Locale 标签。

### 1.2 官网正式内容语言

官网支持两个 Locale：

- Primary Locale：繁體中文
- Secondary Locale：English

每个生成页面只能展示一个 Locale。

禁止在同一个真实网页模拟页面中混合展示：

```text
繁體中文标题
+
English标题
+
中文解释
```

除非该页面被明确设计为语言选择页，否则不得做中英混排。

### 1.3 视觉稿与原型 Locale

所有 Figma 视觉稿、Stitch 网页、Prototype、AI 生成截图和网页 Mockup 都必须模拟真实上线状态。

默认网站视觉稿 Locale：

```text
Traditional Chinese Website
```

英文页面必须作为独立英文版本生成，不得嵌入繁体中文页面中。

## 2. Website Structure Lock

### 2.1 冻结导航

以下一级导航是后续生产和原型工作的唯一有效结构：

- 首頁 Home
- 解決方案 Solutions
- 平台 Platform
- 整合能力 Integrations
- 客戶案例 Customers
- 關於 Candao About
- Contact / Demo

任何 Agent、Skill、Prompt、Stitch 输出、Figma 设计、Prototype 或实现任务都不得新增一级导航、修改导航层级，或将产品能力页提升为一级导航。

### 2.2 产品能力页归属

产品能力页必须保留在 Platform 下：

```text
Platform
  - Order Management
  - Delivery Management
  - Menu & Store Management
  - First-party Ordering
  - Data Intelligence
```

错误示例：

```text
Home
Order Management
Delivery Management
Solutions
Platform
```

`Order Management` 和 `Delivery Management` 可以在 Home、Platform 和转化模块中重点展示，但不得成为一级导航。

### 2.3 原型评审壳例外

内部评审壳可以为了评审方便设置 Home、Platform、Order、Delivery 等页面切换控件。

这些控件必须被理解为内部原型控制，不得被当作正式官网导航。

## 3. 页面职责规则

### 3.1 Home

Home 负责品牌认知和转化。

Home 必须回答：

- Candao 是什么级别的公司？
- 为什么它对餐饮集团重要？
- 它带来的业务结果是什么？
- 用户下一步应该做什么？

Home 不是产品目录页，不能变成模块索引。

### 3.2 Solutions

Solutions 负责业务问题和行业场景。

它必须回答：

- Candao 是否理解我的经营问题？
- 这个方案适合什么餐饮或零售运营场景？
- 这个场景能够带来什么结果？

Solutions 页面不得写成产品功能列表。

### 3.3 Platform

Platform 负责产品能力架构。

它必须回答：

- Candao 如何工作？
- 哪些能力彼此连接？
- 订单、菜单、配送、门店和数据如何在平台中流动？

### 3.4 Product Capability Pages

例如：

- Order Management
- Delivery Management
- Menu & Store Management
- First-party Ordering
- Data Intelligence

这些页面负责解释工作流程、UI Demo、运营价值和业务结果。

它们不是一级导航页面。

页面逻辑必须遵守：

```text
Business Problem
-> Solution
-> Workflow
-> UI Demo
-> Business Result
-> CTA
```

## 4. 视觉生产规则

### 4.1 禁止的视觉模式

不得使用：

- 普通企业官网布局
- 产品说明书式页面
- 大量重复卡片堆叠
- 软件截图墙
- 泛 AI 科技背景
- 3D 科技球体
- 粒子特效
- 纯结构图式页面
- 把装饰性渐变当作主视觉概念

### 4.2 Hero 必须具备的结构

Hero 必须同时包含：

```text
Large Editorial Photography
+
Semi-real SaaS UI
+
Clear CTA
```

Hero 必须先建立品牌级第一印象，再进入模块解释。

### 4.3 Product Showcase 必须具备的逻辑

Product Showcase 必须通过以下方式表达产品价值：

```text
Workflow
-> UI State Change
-> Business Outcome
```

不得只用互不关联的功能卡片表达产品价值。

### 4.4 网站级视觉质量

视觉输出必须像真实国际 SaaS 官网，而不是内部线框图、结构 Demo 或 AI 模板。

每个关键页面必须具备：

- 一个强视觉锚点
- 清晰的信息层级
- 能承载含义的产品或运营场景
- 真实感 UI Overlay 或产品 Demo 层
- 可扫描的转化路径
- Desktop、Wide Desktop、Mobile 的响应式表现

## 5. AI Web Generator 规则

Stitch 和其他 AI Website Generator 任务不得自由读取全部 Markdown 后自行重构网站。

每个生成 Prompt 必须由四层锁定信息组成：

### Layer 1：Brand Direction

来源：

- T10 Visual Direction
- 已确认的 Creative Direction 材料

作用：

- 品牌气质
- 视觉语气
- 市场定位
- 国际 SaaS 质量标准

### Layer 2：Website Structure Lock

来源：

- T05 Sitemap
- 本规则文件

作用：

- 冻结导航
- 页面层级
- 产品能力页归属

### Layer 3：Page Experience

来源：

- T08 UX
- T09 Prototype

作用：

- 页面职责
- 用户路径
- Section 顺序
- 交互意图

### Layer 4：Visual Asset Direction

来源：

- T10 Visual Direction
- 已确认 Moodboard
- 已确认 Image2 或视觉资产 Prompt

作用：

- 摄影方向
- 产品 UI 方向
- Motion 方向
- Hero Asset 方向

## 6. 图片和视觉资产规则

视觉资产不是装饰，必须承担品牌表达和产品理解。

### 6.1 Hero Asset

Hero Asset 优先表现真实餐饮运营：

- 门店运营
- 后厨运营
- 接单
- 配送协同
- 多门店协作
- 运营控制场景

避免：

- 普通商务人物
- 普通办公室
- 普通科技背景
- 没有餐饮语境的抽象 AI 视觉

### 6.2 Product Asset

Product Asset 必须展示：

- Dashboard
- Workflow
- Data Flow
- UI Motion State
- Operational Status
- Business Outcome Metrics

产品资产不得只是装饰性的截图墙。

## 7. 人工决策节点

以下决策禁止完全自动化，必须人工确认：

### 7.1 Reference Selection

需要人工确认：

- 借鉴哪些竞品或参考网站
- 借鉴它们的什么
- 哪些部分不能借鉴

### 7.2 Moodboard Direction

进入高保真生产前，必须人工确认最终视觉方向。

### 7.3 Hero Direction

首页第一视觉进入生产前，必须人工确认。

### 7.4 UI Style

产品 UI 风格必须人工确认：

- Semi-real UI
- Real UI
- Abstract UI

## 8. A/B/C 任务边界规则

### 8.1 A：Design Production

A 负责生产级设计执行和可编辑设计系统。

A 不得重新定义 IA。

A 不得把内部分析语言当作官网展示语言。

### 8.2 B：Art Direction Review

B 负责 Creative Direction、视觉审查、Benchmark 评分和规则执行。

B 应该在生成前和生成后都参与。

B 不是页面生成器。

### 8.3 C：Web Prototype Exploration

C 负责快速网页原型探索。

C 必须使用锁定 IA 和已确认视觉方向。

C 输出不自动等于参考案例或最终设计，必须经过本规则和 T10/B 审查后才能进入生产。

## 9. 生成结果使用规则

AI 生成的网站结果不得直接作为参考案例。

它们默认只是内部探索产物，除非通过 Art Direction Review 阶段确认。

任何生成页面进入生产参考前，必须通过：

- IA Lock 检查
- Locale 检查
- Visual Anchor 检查
- Product Showcase 检查
- Interaction Intent 检查
- International SaaS Quality 检查
- Development Feasibility 检查

## 10. 必要 QA Checklist

接受任何后续视觉或网页输出前，必须确认：

- 是否保留 T05 导航？
- 每个页面是否只展示一个网站 Locale？
- Home 是否承担品牌认知和转化，而不是产品目录？
- 产品能力页是否仍在 Platform 下？
- Hero 是否包含 Editorial Photography、SaaS UI 和 CTA？
- Product Showcase 是否表达 Workflow、UI State Change 和 Business Outcome？
- 是否避免普通卡片堆叠、截图墙和纯结构图？
- 结果是否足够真实，可以指导生产？
- 需要人工确认的节点是否已记录？

