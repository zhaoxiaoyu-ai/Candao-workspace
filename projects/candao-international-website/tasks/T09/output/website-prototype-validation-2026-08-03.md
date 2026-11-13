# Website Prototype Validation

任务：T09 页面体验规划 / 设计原型验证  
项目：餐道国际官网重构  
输出语言：简体中文，页面名、组件名、交互名和原型关键词保留英文  
生成时间：2026-08-03

## 1. 执行边界

本文件基于以下输入生成：

- `tasks/T05/output/website-sitemap-2026-08-02.md`
- `tasks/T06/output/website-copy-document-2026-08-03.md`
- `tasks/T07/output/final-website-copy-v1.0-2026-08-03.md`
- `tasks/T08/output/website-ux-specification-2026-08-03.md`
- `tasks/T08/output/t08-v1.1-design-execution-supplement-note-2026-08-03.md`

本文件输出页面体验方案和原型验证结论，不输出最终视觉稿，不重写官网 Copy，不重新设计 Sitemap。

## 2. 验证目标

T09 需要回答：

- 首页是否能在首屏建立国际 SaaS 品牌认知；
- 首页是否能自然承接 Hero、产品展示、数据证明、案例和 CTA；
- 产品页面是否能通过 UI 展示、功能流程和产品价值解释 Candao；
- 关键交互和动效是否能进入 T10 视觉设计；
- 移动端是否有可执行的降级方案；
- 页面范围和视觉投入是否可控。

## 3. 重点页面范围

### 3.1 深度验证页面

| 页面 | 原型验证重点 | 输出深度 |
| --- | --- | --- |
| Home | Hero、产品展示、数据证明、案例、CTA | 深度验证 |
| Products / Platform | UI 展示、能力地图、平台价值 | 深度验证 |
| Order Management | 订单流程、状态变化、总部视图 | 深度验证 |
| Delivery Management | 配送调度、地图/队列、异常处理 | 深度验证 |
| Integrations Overview | 系统类别、连接流程、Request Integration | 中深度验证 |
| Contact / Book a Demo | 意图分流、表单流程、提交反馈 | 深度验证 |

### 3.2 轻量验证页面

| 页面 | 原型验证重点 | 输出深度 |
| --- | --- | --- |
| Solutions Overview | 场景入口和分流 | 轻量验证 |
| Restaurant Chains | 连锁总部视角 | 轻量验证 |
| Cases / Customers | 授权案例模板 | 轻量验证 |
| Company / About | 公司可信基础信息 | 轻量验证 |

## 4. Global Prototype Flow

### 4.1 主路径 A：品牌认知到 Demo

```text
Home
→ Products / Platform
→ Order Management
→ Delivery Management
→ Contact / Book a Demo
```

验证重点：

- Home 的 Capability Overview 能否自然引导到 Products / Platform；
- Products / Platform 能否清楚解释平台能力，而不是产品目录；
- Order 和 Delivery 能否通过 UI Demo 展示流程；
- Demo 表单是否低摩擦承接转化。

### 4.2 主路径 B：连锁餐饮场景到咨询

```text
Home
→ Solutions Overview
→ Restaurant Chains
→ Products / Platform
→ Cases / Customers
→ Contact Sales
```

验证重点：

- Solutions 是否保持 Business outcome layer；
- Restaurant Chains 是否突出总部、门店、配送协作；
- Cases 在未授权情况下是否仍能作为证明结构存在；
- Contact Sales 是否承接复杂采购咨询。

### 4.3 主路径 C：技术与集成路径

```text
Home
→ Integrations Overview
→ Request Integration
```

验证重点：

- Integrations 是否以类别和连接流程建立可信度；
- 不出现未确认平台 Logo；
- Request Integration 是否能承接技术团队和合作伙伴。

## 5. Home 页面体验方案

### 5.1 Page Goal

建立 Candao 国际官网第一印象，解释 Candao 是面向复杂餐饮营运的 Restaurant Operations Platform，并推动访客进入 Platform、Solutions、Integrations 或 Book a Demo。

### 5.2 Wireframe Structure

```text
Desktop 1440:

[Sticky Header]

[Hero]
左侧：Headline / Description / Primary CTA / Secondary CTA
右侧：真实餐厅营运场景 + SaaS UI Overlay

[Trust / Data Proof Module]
能力信任层：Industry Experience / System Connectivity / Service Readiness / Implementation Support

[Problem Switcher]
四类问题切换：订单分散 / 菜单维护 / 配送高峰 / 数据割裂

[Product Showcase]
Capability Flow：Order / Menu / Delivery / Data / Integrations

[Solutions Preview]
场景卡片：Restaurant Chains / Delivery Operations / Digital Ordering / Data-driven Operations

[Integration Snapshot]
系统类别条：Ordering Channels / POS / Payment / Loyalty / Delivery / Data

[Case Highlight]
Case Template Preview：Challenge / Solution / Result / Authorization Status

[Final CTA]
Book a Demo
```

### 5.3 Page Rhythm

| 阶段 | Section | 节奏目的 |
| --- | --- | --- |
| 0-5 秒 | Hero | 让用户理解 Candao 解决复杂餐饮营运 |
| 5-15 秒 | Trust / Data Proof | 在无客户授权素材时建立能力可信 |
| 15-30 秒 | Problem Switcher | 让用户看到自己的问题 |
| 30-60 秒 | Product Showcase | 让用户理解 Candao 的平台能力入口 |
| 60-90 秒 | Solutions / Integrations / Case | 建立业务场景、技术可信和证明路径 |
| 最后 | CTA | 推动 Demo 或销售咨询 |

### 5.4 重点模块验证

#### Hero

验证结论：

- Hero 应使用真实餐厅营运视频或高质量摄影作为主视觉。
- 文案区不应放入卡片容器，保持国际 SaaS Hero 的开放感。
- UI Overlay 应展示订单流、门店状态、配送状态、数据回流，不做抽象科技背景。

关键交互：

- Hero UI Overlay 轻微随滚动移动。
- 主 CTA 为 `Book a Demo`，Secondary CTA 为 `Explore Platform`。

移动端降级：

- 背景视频降级为静态封面 + 轻量 UI 动效。
- CTA 使用可见按钮组，不强制 sticky 覆盖首屏。

#### 产品展示 Product Showcase

验证结论：

- 首页产品展示不做完整产品页，而做 Capability Flow。
- 能力入口应显示 Order、Menu、Delivery、Data、Integrations 五类。
- 每个入口只表达业务价值和下一步，不展开功能清单。

关键交互：

- Hover / Focus 显示能力摘要。
- 点击进入 Products / Platform 或对应产品能力页。

动效验证：

```text
Order enters
→ Menu / Store status sync
→ Delivery status update
→ Data returns to dashboard
```

#### 数据证明 Data Proof

验证结论：

- 因规模数字、客户 Logo、认证均需确认，首页不做具体数字墙。
- 使用“能力信任层”替代未确认数据证明。
- 模块标题应表达可信基础，而不是直接声称规模。

可展示内容：

- Industry Experience；
- System Connectivity；
- Service Readiness；
- Regional Operations Understanding；
- Implementation Support。

禁止：

- 未确认客户 Logo；
- 未确认门店数、品牌数、订单数；
- 未确认认证或 SLA。

#### 案例 Case Highlight

验证结论：

- 首页保留案例入口，但只展示 Case Template Preview。
- 案例卡片使用 Challenge、Solution、Capabilities Used、Result 的结构占位。
- 授权状态必须可见，避免误认为已有公开案例。

关键交互：

- 点击进入 Cases / Customers。
- 未授权案例不进入真实案例详情，只进入案例模板说明。

#### CTA

验证结论：

- 首页 CTA 应在 Hero、Product Showcase 后、Final CTA 三处出现。
- 主 CTA 始终围绕 Demo，不分散到太多目标。
- Integrations Snapshot 可使用 `Request Integration` 作为局部 CTA。

CTA Path：

```text
Hero: Book a Demo / Explore Platform
Product Showcase: Explore Platform
Case Highlight: View Customer Stories
Final CTA: Book a Demo
```

### 5.5 Prototype Flow

```text
Home Hero CTA → Book a Demo
Home Product Showcase → Products / Platform
Home Order capability → Order Management
Home Delivery capability → Delivery Management
Home Integrations Snapshot → Integrations Overview
Home Case Highlight → Cases / Customers
```

### 5.6 Risk / Open Questions

- Hero 视频素材是否已有真实餐饮营运素材。
- 是否有可公开客户 Logo 或案例；若无，继续使用 Trust fallback。
- 是否可确认任何规模数据；未确认前不进入原型。
- 首页是否需要多语言切换入口，当前原型只预留位置。

## 6. Products / Platform 页面体验方案

### 6.1 Page Goal

解释 Candao 是统一餐饮 SaaS 平台，展示订单、菜单、配送、数据和系统连接如何形成可管理的运营能力。

### 6.2 Wireframe Structure

```text
[Hero]
平台定位 + Primary CTA

[Capability Map]
Order / Menu / Delivery / Data / Integrations

[Platform UI Demo]
Scene 1: 品牌连接多个营运系统
Scene 2: 订单推动后续流程
Scene 3: 总部查看整体状态

[Business Outcome]
总部可视 / 门店专注

[CTA]
Book a Demo
```

### 6.3 Page Rhythm

| 阶段 | 目的 |
| --- | --- |
| Hero | 建立 Capability layer，而不是场景页 |
| Capability Map | 快速理解产品架构 |
| UI Demo | 看到平台如何工作 |
| Business Outcome | 回到总部和门店的业务价值 |
| CTA | 转入 Demo 或具体产品能力页 |

### 6.4 UI 展示验证

验证结论：

- Capability Map 是本页核心，而不是辅助图。
- UI Demo 应使用抽象化界面，避免真实客户数据。
- Order、Delivery 两个节点必须视觉上更突出，因为它们是第一阶段重点产品能力。

组件：

- `Capability Map`
- `Platform Nodes`
- `Data Flow Lines`
- `Product UI Demo`
- `Business Outcome Split View`

### 6.5 功能流程验证

```text
Orders
→ Menu / Store Status
→ Delivery Dispatch
→ Data Dashboard
→ Integrations
```

验证要求：

- 用户能从流程中理解 Candao 是平台，不是单点工具。
- 节点之间有清晰关系，但不做复杂网络图。
- 每个节点提供进入对应产品页的入口。

### 6.6 产品价值验证

本页产品价值必须落在：

- 总部更可视；
- 门店减少切换；
- 配送更可控；
- 系统连接更清晰；
- 营运数据可回流。

不应落在：

- 功能数量；
- 内部模块名称；
- 技术炫技；
- 未确认性能指标。

### 6.7 Motion Validation

推荐：

- Scroll-triggered stepper。
- 节点连接线轻量流动。
- 每个 Scene 切换时右侧 UI 状态变化。

移动端降级：

- Capability Map 改为纵向能力卡片。
- UI Demo 改为三步 swipeable cards。
- CTA 在能力卡片后重复出现。

### 6.8 Prototype Flow

```text
Products / Platform
→ Order Management
→ Delivery Management
→ Integrations Overview
→ Book a Demo
```

### 6.9 Risk / Open Questions

- 是否已有可抽象化的产品 UI 参考。
- Capability Map 的节点是否与实际公开产品范围一致。
- Data Intelligence 是否在第一阶段作为独立节点强展示，还是只作为平台模块。

## 7. Order Management 页面体验方案

### 7.1 Page Goal

验证多渠道订单如何进入统一流程，并通过状态变化和总部视图说明产品价值。

### 7.2 Wireframe Structure

```text
[Hero]
多渠道订单问题 + Explore Order Management

[Business Problem]
多设备 / 多后台 / 多状态导致切换和风险

[Unified Order Workflow]
多渠道订单 → 统一订单队列

[Product Capability]
订单状态 / 门店信息 / POS / 配送流程同步

[UI Demo]
4-step order workflow

[Business Outcome]
减少切换，提升订单处理可视性

[CTA]
Book a Demo
```

### 7.3 UI 展示验证

核心 UI：

- `Order Source Chips`
- `Unified Order Queue`
- `Status Timeline`
- `Exception Badge`
- `Headquarters Summary Panel`

验证结论：

- 页面视觉重心应放在订单队列和状态变化。
- `Headquarters Summary Panel` 必须出现，否则页面容易只像门店工具。
- 不展示真实客户订单、真实平台 Logo 或真实金额。

### 7.4 功能流程验证

```text
Scene 1: 多渠道订单流入
Scene 2: Candao 汇总到统一订单队列
Scene 3: 门店处理状态变化
Scene 4: 数据回流总部视图
```

每个 Scene 的业务结果：

| Scene | 业务结果 |
| --- | --- |
| Scene 1 | 说明订单来源分散 |
| Scene 2 | 说明订单集中可见 |
| Scene 3 | 说明门店减少切换 |
| Scene 4 | 说明总部可管理 |

### 7.5 产品价值验证

必须传达：

- 减少系统切换；
- 降低漏单、错单、延误风险；
- 提升总部异常可见性；
- 支撑后续配送和数据分析。

### 7.6 Motion Validation

- 订单卡从多渠道 chips 进入统一队列。
- 状态 timeline 依次变化：Accepted、Preparing、Ready、Exception。
- Exception 状态触发总部摘要卡更新。

移动端降级：

- UI Demo 改为四张步骤卡。
- 订单队列可横向滑动。
- Headquarters Summary 放在步骤四。

### 7.7 Prototype Flow

```text
Order Management
→ View Related Integrations
→ Book a Demo
```

### 7.8 Risk / Open Questions

- 是否需要展示 POS 连接位置；若集成状态未确认，只使用类别占位。
- 是否能提供真实产品截图作为抽象化 UI 的参考。
- Order 状态名称是否与实际系统一致。

## 8. Delivery Management 页面体验方案

### 8.1 Page Goal

验证配送高峰、运力协调、配送追踪和异常处理如何通过 UI Demo 表达。

### 8.2 Wireframe Structure

```text
[Hero]
配送高峰问题 + Explore Delivery Management

[Business Problem]
订单量上升 / 运力不足 / 成本波动 / 取餐延误

[Delivery Workflow]
订单 → 出餐 → Dispatch option → Tracking → Exception

[Product Capability]
派单 / 骑手工作流 / 外部运力 / 顾客通知 / 交易记录

[UI Demo]
Map + Queue + Timeline + Exception Panel

[Business Outcome]
配送更可控，门店少被动

[CTA]
Book a Demo
```

### 8.3 UI 展示验证

核心 UI：

- `Delivery Demand Heatmap`
- `Store Queue`
- `Dispatch Option Selector`
- `Rider / External Capacity Status`
- `Delivery Timeline`
- `Exception Panel`

验证结论：

- 不只展示 Rider App，必须展示运营视图。
- 地图只用于理解配送压力，不做复杂路线模拟。
- Dispatch Option Selector 是本页关键交互。

### 8.4 功能流程验证

```text
Scene 1: 高峰期配送需求上升
Scene 2: 系统分配配送方式
Scene 3: 配送过程追踪
Scene 4: 异常回到营运视图
```

每个 Scene 的业务结果：

| Scene | 业务结果 |
| --- | --- |
| Scene 1 | 运力压力出现 |
| Scene 2 | 履约方式可选择 |
| Scene 3 | 配送状态可见 |
| Scene 4 | 异常可处理 |

### 8.5 产品价值验证

必须传达：

- 高峰期履约更可控；
- 自有配送和外部运力能协同；
- 异常能回到运营视图；
- 门店减少临场被动协调。

### 8.6 Motion Validation

- Heatmap 显示配送需求上升。
- Dispatch Option Selector 切换 owned rider、external delivery、manual review。
- Timeline 展示配送状态变化。
- Exception Panel 出现 delay、failed pickup、customer notification。

移动端降级：

- 地图降级为状态卡片。
- Dispatch Option 使用 segmented control。
- Timeline 改为纵向步骤。

### 8.7 Prototype Flow

```text
Delivery Management
→ Explore Integrations
→ Book a Demo
```

### 8.8 Risk / Open Questions

- 是否展示自有骑手和第三方配送的具体术语，需要业务确认。
- 是否有配送地图数据可视化样式参考。
- 顾客通知是否作为第一阶段能力公开展示，需要确认。

## 9. Integrations Overview 页面体验方案

### 9.1 Wireframe Structure

```text
[Hero]
系统连接价值

[Category Overview]
Ordering Channels / POS / Payment / Loyalty / Delivery / Data

[Connection Flow]
System types → Candao Platform → Operations workflow

[Request Integration]
提交集成需求
```

### 9.2 Prototype Validation

- 使用系统类别，不展示具体平台 Logo。
- Connection Flow 必须清楚表达数据如何进入营运流程。
- `Request Integration` 应作为本页主 CTA。
- 分类页暂不深做，优先在总览页以模块承接。

### 9.3 Responsive Validation

- 桌面端使用横向生态图。
- 移动端改为系统类别卡片 + 纵向连接步骤。

### 9.4 Risk / Open Questions

- 具体平台和合作状态需确认。
- API 是否第一阶段展示需确认。

## 10. Contact / Book a Demo 页面体验方案

### 10.1 Wireframe Structure

```text
[Hero]
告知用户提交营运场景

[Intent Selection]
Demo / Sales / Integration / Partner / Support

[Progressive Form]
按意图展示字段

[Trust Note]
说明由合适团队跟进

[Privacy Note]
隐私说明入口

[Submit CTA]
提交咨询
```

### 10.2 Prototype Validation

- 首屏必须直接出现意图选择，不做长介绍。
- 表单字段应按意图变化。
- 不承诺未确认响应时间。
- 提交成功后显示确认状态和下一步说明。

### 10.3 Form Flow

```text
Select intent
→ Company / Region
→ Store model / Channel / System
→ Contact details
→ Submit
→ Confirmation
```

### 10.4 Responsive Validation

- 桌面端两栏：左侧说明和信任提示，右侧表单。
- 移动端单列，字段分步展开。
- CTA 不遮挡输入框。

### 10.5 Risk / Open Questions

- Demo 表单字段最终版本需销售团队确认。
- 表单接收人和响应承诺需确认。
- Privacy / Terms 链接需法务确认。

## 11. 轻量页面体验方案

### 11.1 Solutions Overview

验证重点：

- 保持 Business outcome layer。
- 使用 Scenario Cards 分流。
- 不进入产品功能细节。

建议原型：

```text
Hero
→ Scenario Cards
→ Related Platform
→ CTA
```

### 11.2 Restaurant Chains

验证重点：

- 首屏建立连锁总部视角。
- 多门店地图 + 总部运营看板可作为视觉骨架。
- Related Platform Capabilities 链接到 Order / Delivery / Data。

建议原型：

```text
Hero
→ Operational Challenge
→ Headquarters / Store Flow
→ Related Platform Capabilities
→ CTA
```

### 11.3 Cases / Customers

验证重点：

- 只做案例模板和授权占位。
- 不展示真实客户、Logo 或数字。
- 以 Challenge、Solution、Capabilities Used、Result 组织。

建议原型：

```text
Hero
→ Story Template
→ Case Categories
→ Authorization Placeholder
→ CTA
```

### 11.4 Company / About

验证重点：

- 基础可信信息页，不做重视觉。
- 重点呈现 Candao 专注餐饮营运科技。
- 具体年份、办公室、规模、主体信息待确认。

建议原型：

```text
Hero
→ What We Support
→ Trust and Service Approach
→ Related Links
→ CTA
```

## 12. Figma 原型输出建议

### 12.1 必做高保真前验证 Frame

```text
Desktop 1440:
Home
Products / Platform
Order Management
Delivery Management
Contact / Book a Demo

Mobile 390:
Home
Products / Platform
Order Management
Contact / Book a Demo
```

### 12.2 可模板化 Frame

```text
Solutions Overview
Restaurant Chains
Integrations Overview
Cases / Customers
Company / About
```

### 12.3 UI Motion Storyboard

必须输出以下 storyboard：

- Home Hero UI Overlay；
- Home Product Showcase Capability Flow；
- Platform Capability Map；
- Order Management 4-step UI Demo；
- Delivery Management 4-step UI Demo；
- Contact Form Intent Selection。

## 13. T10 输入结论

T10 视觉设计 Agent 应优先投入：

1. Home Hero；
2. Home Product Showcase；
3. Products / Platform Capability Map；
4. Order Management UI Demo；
5. Delivery Management UI Demo；
6. Contact / Book a Demo 表单体验。

T10 不应平均设计所有页面。

T10 视觉方向应基于：

- 真实餐饮营运场景；
- SaaS UI Motion；
- Capability Map；
- Workflow Demo；
- Trust fallback；
- 低摩擦转化。

## 14. T09 结论

本文件完成页面体验方案与设计原型验证。

结论：

- Home 信息节奏成立，可进入高保真视觉探索。
- Products / Platform 应作为核心产品体验页面进入重点设计。
- Order Management 和 Delivery Management 需要独立 UI Demo storyboard。
- Integrations Overview 和 Contact / Book a Demo 可进入中高保真原型。
- Solutions、Restaurant Chains、Cases、Company 可先使用模板化原型，不消耗核心 Motion 资源。
- 所有未确认客户、数据、认证、集成状态和响应承诺继续保持占位或待确认状态。

## 15. Prototype Acceptance Criteria

本节用于 T10 前的原型评审，不重新生成 UX，也不扩大页面范围。

### 15.1 全站通过标准

| 验证项 | 通过标准 | 不通过信号 |
| --- | --- | --- |
| 品牌理解 | 用户在 5 秒内理解 Candao 是面向复杂餐饮营运的 SaaS 平台 | 首屏像普通软件公司或系统说明页 |
| 页面路径 | 用户能从 Home 自然进入 Platform、Order / Delivery、Demo | 页面之间跳转理由不清晰 |
| 转化入口 | `Book a Demo` 在首屏、中段和尾段均可被识别 | CTA 被视觉元素压低或目标分散 |
| 信任建立 | 即使没有授权客户 Logo，也能通过行业经验、系统连接和服务能力建立可信度 | 页面依赖未确认数据或 Logo 才能成立 |
| 内容密度 | 关键页面不依赖大段说明文字，信息可扫读 | 用户必须阅读长段文字才能理解价值 |
| 移动端 | 核心路径可在 Mobile 390 完成，动效有降级方案 | 移动端模块堆叠后失去节奏或 CTA 难找 |

### 15.2 页面通过标准

| 页面 | Acceptance Criteria |
| --- | --- |
| Home | 5 秒内说明 Candao 解决什么问题；首屏可见 Demo 与 Platform 入口；Product Showcase 能解释平台能力；Trust fallback 不依赖未确认客户素材；Final CTA 明确收束。 |
| Products / Platform | 用户能理解这是 Capability layer，而不是产品目录；Capability Map 能说明系统连接、订单流、配送流和数据回流；可自然进入 Order Management 与 Delivery Management。 |
| Order Management | 用户能看懂多渠道订单从进入、汇总、门店处理到总部回看的流程；UI Demo 不变成静态截图堆叠；产品价值落在可视化、集中处理和减少切换。 |
| Delivery Management | 用户能看懂高峰配送需求、分配、追踪和异常回流；地图、队列和状态变化有明确关系；产品价值落在配送协调和营运可见性。 |
| Integrations Overview | 用户能理解集成类别和连接流程；不把未确认平台写成已支持事实；`Request Integration` 入口清晰。 |
| Contact / Book a Demo | 用户能先选择咨询意图；Demo 表单字段能完成基础 Lead Qualification；提交反馈清晰。 |
| Solutions / Cases / Company | 作为模板化页面成立；不消耗核心 Motion 资源；不使用未确认案例、数据或企业事实。 |

## 16. Prototype Fidelity Level

T10 不应把所有页面直接做成同等高保真。原型保真度按页面价值和验证风险分配。

| Level | 名称 | 用途 | 输出要求 |
| --- | --- | --- | --- |
| L1 | Wireframe | 验证结构和信息顺序 | 灰度线框、模块层级、CTA 位置 |
| L2 | Low-fi Prototype | 验证路径和页面节奏 | 可点击路径、基础响应式、简单 Reveal |
| L3 | High-fi Key Section | 验证重点视觉和核心 UI Demo | 重点 Section 高保真、组件风格、动效脚本 |
| L4 | Production Motion Prototype | 验证接近开发实现的动效 | 精细 Motion、状态切换、交互参数 |

### 16.1 页面保真度建议

| 页面 | 建议 Level | 说明 |
| --- | --- | --- |
| Home | L3 | Hero、Product Showcase、Trust / Data Proof、Final CTA 需要高保真关键段落；整页不必一次完成 L4。 |
| Products / Platform | L3 | Capability Map 和 Platform UI Demo 进入高保真关键段落。 |
| Order Management | L3 | 4-step UI Demo 进入高保真 storyboard；页面其他模块可 L2。 |
| Delivery Management | L3 | 配送地图、队列、状态流进入高保真 storyboard；页面其他模块可 L2。 |
| Integrations Overview | L2 | 验证类别、连接流程和 Request Integration 路径即可。 |
| Contact / Book a Demo | L2-L3 | Intent Selection 和表单状态需要明确；视觉可跟随全站组件。 |
| Solutions Overview | L1-L2 | 以场景入口和分流为主。 |
| Restaurant Chains | L1-L2 | 以模板验证业务场景页结构。 |
| Cases / Customers | L1 | 等待授权素材后再提升保真度。 |
| Company / About | L1 | 基础信息页，不进入重点视觉探索。 |

### 16.2 保真度边界

- L4 不作为 T10 默认要求。
- L4 只在 Home Hero、Product Showcase 或核心 UI Demo 经过评审后进入 T11 / T13 深化。
- 未确认素材、数据、客户案例不得推动页面升高保真度。

## 17. Interaction Complexity Level

本节用于控制 Motion 成本。交互复杂度必须服务理解，不以炫技为目标。

| Level | 类型 | 适用场景 | 说明 |
| --- | --- | --- | --- |
| L1 | Hover / Reveal | Cards、导航、轻量内容页 | 用于增强可扫读性，不改变页面结构。 |
| L2 | Scroll Animation | Home、Solutions、Integrations | 用于逐步呈现流程、信任证明和内容节奏。 |
| L3 | Guided Interactive Demo | Platform、Order、Delivery、Contact | 用户可通过 Tab、Stepper 或局部点击理解产品流程。 |
| L4 | Product Simulation | 后续产品演示或销售 Demo | 近似真实产品操作，不作为官网 Phase 1 默认范围。 |

### 17.1 页面交互等级建议

| 页面 | 建议复杂度 | 控制规则 |
| --- | --- | --- |
| Home | L2-L3 | Hero 和 Product Showcase 可用 L3；Trust、Case、CTA 使用 L1-L2。 |
| Products / Platform | L3 | Capability Map 使用 Guided Demo，不做完整产品模拟。 |
| Order Management | L3 | 4-step UI Demo 使用 Stepper 或 Scroll-triggered Storyboard。 |
| Delivery Management | L3 | 地图、队列、状态变化用受控 storyboard 表达。 |
| Integrations Overview | L2 | 连接流程可 Scroll reveal，不做复杂系统配置模拟。 |
| Contact / Book a Demo | L2-L3 | Intent Selection 可交互；表单不做复杂动态规则。 |
| Solutions / Cases / Company | L1-L2 | 以 Hover、Reveal 和基础锚点跳转为主。 |

### 17.2 交互降级规则

- Mobile 优先保证阅读顺序和 CTA 可达，不强制保留桌面复杂动效。
- `prefers-reduced-motion` 场景应降级为静态状态或简单 Fade。
- 所有 L3 交互必须有静态截图等价表达，便于设计评审和开发实现。

## 18. Visual Mood Input

本节不是最终视觉方向，而是给 T10 的情绪输入。T10 仍需输出完整 Visual Direction、UI Style、Motion Style 和 Design System。

| 页面 | Mood | 关键词 |
| --- | --- | --- |
| Home | 高级、国际化、可信、餐饮现场感 | `Premium SaaS`、`Global`、`Trustworthy`、`Operational Clarity` |
| Products / Platform | 结构化、智能、连接感、平台感 | `Structured`、`Intelligent`、`Connected Platform`、`System Map` |
| Order Management | 专注、实时、可控、清晰 | `Real-time Operations`、`Focused Workflow`、`Operational Control` |
| Delivery Management | 动态、协调、响应、高峰压力可视化 | `Dynamic Coordination`、`Live Dispatch`、`Responsive Operations` |
| Integrations Overview | 技术可信、开放、清楚、有边界 | `Technical Trust`、`Connected Ecosystem`、`Clear Integration Flow` |
| Contact / Book a Demo | 低摩擦、专业、清晰分流 | `Low-friction Conversion`、`Professional Form`、`Intent Routing` |
| Solutions Overview | 业务结果、场景化、易分流 | `Business Outcome`、`Scenario-led` |
| Cases / Customers | 真实、克制、可审核 | `Proof-driven`、`Credible`、`Authorization-aware` |
| Company / About | 稳定、务实、专注餐饮科技 | `Practical`、`Focused`、`Restaurant Technology` |

### 18.1 T10 使用原则

- 视觉情绪应优先表达餐饮营运真实性，而不是抽象科技感。
- 页面氛围应从 Home 的国际品牌感，逐步过渡到 Platform 和 Product Pages 的产品理解。
- Cases 和 Company 不应比 Home、Platform、Order、Delivery 更抢视觉资源。
- 所有 Moodboard 参考必须能够转化为官网 UI、摄影、动效或组件规则。
