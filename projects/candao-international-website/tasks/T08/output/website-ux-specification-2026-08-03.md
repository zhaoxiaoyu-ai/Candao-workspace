# Website UX Specification

任务：T08 官网 UX 体验规划 Agent  
项目：餐道国际官网重构  
输出语言：简体中文，页面名、组件名、交互名和设计关键词保留英文  
生成时间：2026-08-03

## 1. 执行边界

本文件基于 T03 战略、T04 信息架构、T05 Sitemap 和 T07 v1.1《Final Website Copy V1.0》生成。

T08 的任务是页面体验设计规范，不是重新分析官网定位，也不是重新生成官网 Copy。

禁止事项：

- 不重新判断官网定位；
- 不重新设计 Sitemap；
- 不新增主导航；
- 不重写 T07 已确定的官网 Copy；
- 不把 `Pending Authorization`、`Pending Verification` 或 `Placeholder Only` 内容当作已确认上线事实；
- 不把 P1 或 Phase 2 页面设计得比 P0 核心页面更重。

## 2. UX 总原则

### 2.1 页面体验主线

全站体验应围绕以下路径组织：

```text
理解品牌
→ 看见餐饮营运问题
→ 进入业务场景
→ 理解平台能力
→ 建立系统与信任认知
→ 提交 Demo / Sales / Integration 咨询
```

### 2.2 页面层级边界

| 页面层级 | UX 角色 | 主要回答的问题 |
| --- | --- | --- |
| Home | Brand + Conversion layer | Candao 是什么，为什么与我相关，下一步去哪里 |
| Solutions | Business outcome layer | 我的业务问题是否被理解 |
| Products / Platform | Capability layer | Candao 如何支撑这些流程 |
| Product Capability Pages | Workflow + UI demo layer | 某个能力如何在实际操作中发生 |
| Integrations | Technical trust layer | Candao 如何接入现有系统生态 |
| Cases / Customers | Proof layer | 有什么可验证的案例结构和授权证明位置 |
| Contact / Book a Demo | Conversion layer | 如何低摩擦提交咨询 |

### 2.3 全站交互原则

- 优先使用真实业务流程交互，不做纯装饰动效。
- 产品 UI 动效必须表达订单进入、状态变化、配送调度、数据回流和系统连接。
- 每个核心页面至少有一个明确下一步 CTA。
- Header 保持清晰，主 CTA 固定为 `Book a Demo`。
- 移动端优先保证阅读、导航和 CTA，不强行保留复杂桌面动效。

## 3. 全站导航与响应式规则

### 3.1 Header

布局：

- 左侧：Candao Logo，点击返回 Home。
- 中间：Solutions、Platform、Integrations、Customers、About。
- 可选：Resources 可优先放入 Footer，第一阶段 Header 可不突出。
- 右侧：Book a Demo 主按钮。

Interaction:

- 桌面端 Header 可使用轻量 sticky 行为，滚动后压缩高度。
- Solutions 和 Platform 可使用 Mega Menu，但第一阶段不宜内容过满。
- 移动端使用 Full-screen Drawer，优先显示 Solutions、Platform、Integrations、Book a Demo。

### 3.2 Footer

Footer 按 T05 Sitemap 分组：

- Solutions；
- Platform；
- Integrations；
- Customers；
- Resources；
- Company；
- Legal。

Footer 需要承接 P1 和 Phase 2 页面，但不在主体验中抢占 P0 页面注意力。

### 3.3 Responsive Behavior

| 设备 | 规则 |
| --- | --- |
| Desktop | 重点呈现横向流程、能力地图、UI Demo、双栏布局和滚动动效 |
| Tablet | 保留主要分栏，但 UI Demo 可降低复杂度 |
| Mobile | 单列内容流，能力地图改为步骤卡片，UI Demo 改为滑动步骤或轻量状态切换 |

## 4. 核心页面体验规格

### 4.1 Page: Home

页面目标：

建立品牌第一印象，解释 Candao 是面向复杂餐饮营运的 Restaurant Operations Platform，并推动 Demo 转化。

用户：

- 海外连锁餐饮集团管理层；
- 餐饮经营者；
- 运营负责人；
- 采购与技术评估人员；
- 技术合作伙伴的初次访客。

User Intent：

快速判断 Candao 是否理解复杂餐饮营运，并决定继续看 Solutions、Platform、Integrations 或直接预约 Demo。

信息结构：

```text
Hero
→ Trust Module
→ Problem Switcher
→ Capability Overview
→ Solutions Preview
→ Integrations Snapshot
→ Case Highlight
→ Final CTA
```

Content Flow：

1. 用 Hero 建立定位和业务问题。
2. 用 Trust Module 在无客户授权素材时先建立能力可信。
3. 用 Problem Switcher 让访客识别自己的问题。
4. 用 Capability Overview 把复杂产品压缩为能力入口。
5. 用 Solutions Preview 分流业务场景。
6. 用 Integrations Snapshot 建立系统连接可信度。
7. 用 Case Highlight 保留案例证明结构。
8. 用 Final CTA 收束为 Demo 转化。

模块：

- Hero；
- Trust Module；
- Problem Switcher；
- Capability Overview；
- Solutions Preview；
- Integrations Snapshot；
- Case Highlight；
- Final CTA。

布局：

- Hero 使用真实餐厅营运视频或高质量摄影作为首屏主视觉。
- Hero 文案区放左侧或居中偏左，UI 浮层放右侧或叠加在真实场景上。
- Trust Module 使用横向能力信任层，不做客户 Logo 墙假象。
- Problem Switcher 使用四类问题切换：订单分散、菜单维护、配送高峰、数据割裂。
- Capability Overview 使用能力流向图，不做功能清单。
- Final CTA 保持简洁，避免大段说明。

Components：

- `Hero Video / Image Background`
- `SaaS UI Overlay`
- `Trust Layer`
- `Problem Switcher Tabs`
- `Capability Flow`
- `Solution Cards`
- `Integration Category Strip`
- `Case Template Preview`
- `Sticky Book Demo CTA`

Interaction：

- Hero UI 浮层随滚动轻微位移，展示订单、门店、配送和数据状态。
- Problem Switcher 支持点击切换，默认展示最典型的多渠道订单问题。
- Capability Flow 支持 hover / focus 显示能力说明，并链接到 Platform 页面。
- Solutions Preview 卡片点击进入对应 Solution 页面。
- Integrations Snapshot 点击进入 Integrations Overview。

Animation：

- Hero 背景视频缓慢播放，避免过快剪辑。
- UI 浮层使用轻量 data flow 动效：订单进入、状态变化、数据回流。
- Problem Switcher 使用淡入切换，不使用夸张翻转。
- Capability Overview 使用 scroll-triggered reveal。

Responsive Behavior：

- 移动端 Hero 使用静态视频封面或短动效，不自动播放复杂视频。
- Problem Switcher 改为纵向 accordion。
- Capability Flow 改为 5 个步骤卡片。
- 主 CTA 可在移动端使用底部 sticky bar。

Visual Priority：

★★★★★

CTA Path：

```text
Book a Demo
Explore Platform
Explore Solutions
Explore Integrations
View Customer Stories
```

参考方向：

- 国际 SaaS 首页节奏；
- 真实餐饮营运场景 + 产品 UI 动效；
- Deliverect 式业务结果表达；
- TabSquare 式餐饮场景素材，但避免过多 Slider 堆叠。

### 4.2 Page: Solutions Overview

页面目标：

从客户业务场景进入解决方案，帮助访客先确认“我的业务问题是否被理解”。

用户：

- 连锁餐饮集团；
- 运营负责人；
- 餐饮经营者；
- 管理层和采购人员。

User Intent：

根据自身经营场景选择进入 Restaurant Chains、Multi-store Operations、Delivery Operations、Digital Ordering 或 Data-driven Operations。

信息结构：

```text
Hero
→ Scenario Cards
→ Related Platform
→ CTA
```

Content Flow：

1. Hero 说明解决方案从餐饮营运挑战出发。
2. Scenario Cards 按业务问题分流。
3. Related Platform 解释每个场景背后的平台能力。
4. CTA 引导销售沟通。

模块：

- Hero；
- Scenario Cards；
- Related Platform；
- CTA Module。

布局：

- Hero 使用简洁版场景入口，不做复杂产品 UI。
- Scenario Cards 使用 2x3 或 3x2 网格，按业务问题组织。
- Related Platform 使用从场景到能力的连接图。
- CTA 放在页面底部，也可在卡片区域保留轻量 inline CTA。

Components：

- `Scenario Card Grid`
- `Business Outcome Tags`
- `Solution-to-Platform Link Map`
- `CTA Module`

Interaction：

- Scenario Card hover 显示对应业务结果和入口。
- 点击卡片进入具体 Solution 页面。
- Related Platform 中能力节点点击进入 Platform 对应模块。

Animation：

- Scenario Cards 轻量 stagger reveal。
- Solution-to-Platform Map 使用线条连接动效，但不做复杂网络图。

Responsive Behavior：

- 移动端 Scenario Cards 改为纵向列表。
- Related Platform Map 改为“场景 → 能力”步骤卡片。

Visual Priority：

★★★★☆

CTA Path：

```text
Find Your Solution
Contact Sales
Explore Platform
```

参考方向：

- Business outcome layer；
- B2B SaaS 解决方案页；
- 避免把 Solutions 做成 Products 功能页。

### 4.3 Page: Restaurant Chains

页面目标：

说明连锁餐饮在多门店、多渠道、多系统环境中的总部可视和门店执行价值。

用户：

- 连锁品牌总部；
- 区域管理层；
- 采购和管理层；
- 运营团队。

User Intent：

判断 Candao 是否能支持连锁品牌的总部规则、门店执行、配送协同和数据可视。

信息结构：

```text
Hero
→ Operational Challenge
→ Candao Approach
→ Related Platform Capabilities
→ CTA
```

Content Flow：

1. Hero 建立总部视角。
2. Operational Challenge 展示门店、渠道、配送和系统复杂度。
3. Candao Approach 说明统一规则和连接流程。
4. Related Platform Capabilities 连接到 Order、Menu、Delivery、Data。
5. CTA 引导连锁餐饮演示。

模块：

- Hero；
- Operational Challenge；
- Headquarters / Store Flow；
- Related Platform Capabilities；
- CTA Module。

布局：

- 首屏建议使用总部运营看板 + 多门店地图组合。
- 中段用三列结构表达 Headquarters、Stores、Delivery Teams。
- 相关能力用横向能力链接，不展开成产品说明。

Components：

- `Multi-store Map`
- `Headquarters Dashboard Preview`
- `Store Execution Cards`
- `Operational Challenge Timeline`
- `Related Capability Links`

Interaction：

- 多门店地图 hover 显示门店状态。
- Headquarters / Store / Delivery 三列可切换角色视角。
- Related Capability Links 进入 Platform 对应页面。

Animation：

- 门店节点逐步亮起，表现多门店网络。
- 订单和状态从门店回流总部的轻量 data flow。

Responsive Behavior：

- 移动端地图降级为门店状态列表。
- 角色三列改为 tabs。

Visual Priority：

★★★★☆

CTA Path：

```text
Book a Chain Operations Demo
View Platform Capabilities
Contact Sales
```

参考方向：

- 连锁总部运营视角；
- 真实多门店餐饮管理场景；
- 避免只展示单店门店照片。

### 4.4 Page: Products / Platform

页面目标：

建立 Candao 是统一 Restaurant SaaS Platform 的认知，解释平台如何支撑订单、菜单、配送、数据和系统连接。

用户：

- 运营负责人；
- 技术评估团队；
- 采购与管理层；
- 需要理解产品能力的所有访客。

User Intent：

理解 Candao 的能力结构，以及为什么它不是单点工具或内部产品列表。

信息结构：

```text
Hero
→ Capability Map
→ UI Demo Direction
→ Business Outcome
→ CTA
```

Content Flow：

1. Hero 建立统一平台认知。
2. Capability Map 展示 Order、Menu、Delivery、Data、Integrations 的关系。
3. UI Demo Direction 展示系统连接、订单推动流程和总部状态视图。
4. Business Outcome 回到总部可视和门店专注。
5. CTA 引导 Demo。

模块：

- Hero；
- Capability Map；
- Platform UI Demo；
- Business Outcome；
- CTA Module。

布局：

- Hero 使用简洁产品叙事 + 抽象化平台 UI。
- Capability Map 应作为页面核心视觉，可放在首屏下方。
- UI Demo 使用横向三步或滚动叙事：系统连接 → 流程触发 → 总部查看。
- Business Outcome 使用总部与门店双视角。

Components：

- `Capability Map`
- `Platform Nodes`
- `Product UI Demo`
- `Data Flow Lines`
- `Business Outcome Split View`

Interaction：

- Capability Map 节点 hover 显示能力摘要。
- 节点点击进入 Order Management、Delivery Management 等页面。
- UI Demo 使用 scroll-driven stepper，滚动时切换场景。

Animation：

- 节点连接线缓慢流动，表达系统连接。
- UI Demo 依次展示 Orders、Menus、Delivery、Data、Integrations。
- 避免复杂 3D 或抽象 AI 动效。

Responsive Behavior：

- 移动端 Capability Map 改为纵向能力卡片。
- UI Demo 改为 swipeable steps。
- CTA 在能力卡片后重复出现，减少滚动损耗。

Visual Priority：

★★★★★

CTA Path：

```text
Explore Platform Capabilities
Order Management
Delivery Management
Book a Demo
```

参考方向：

- Capability layer；
- 国际 SaaS 产品总览页；
- 产品能力通过 UI 动效表达，不堆截图。

### 4.5 Page: Order Management

页面目标：

解释多渠道订单集中处理与异常可见能力，避免内部 OMS 说明书表达。

用户：

- 门店运营；
- 总部运营；
- 技术评估团队；
- 采购人员。

User Intent：

理解 Candao 如何让多渠道订单进入统一流程，并帮助门店减少切换、总部看见异常。

信息结构：

```text
Hero
→ Business Problem
→ Solution
→ Product Capability
→ UI Demo
→ Business Outcome
→ CTA
```

Content Flow：

1. 先展示订单分散带来的切换和风险。
2. 再展示统一订单队列如何集中接收和处理。
3. 说明订单状态、门店信息和系统连接如何保持同步。
4. 用 UI Demo 展示四个关键场景。
5. 以业务结果收束。

模块：

- Hero；
- Business Problem；
- Unified Order Workflow；
- Product Capability；
- Product UI Demo；
- Business Outcome；
- CTA Module。

布局：

- 页面核心应是订单流转 UI Demo。
- 左侧讲场景问题，右侧展示订单队列和状态变化。
- 中段使用 `Before / After` 对比：多设备切换 vs 统一订单队列。

Components：

- `Order Source Chips`
- `Unified Order Queue`
- `Status Timeline`
- `Exception Badge`
- `Headquarters Summary Panel`
- `Related Integration Link`

Interaction：

- 用户滚动时，订单从多个渠道进入统一队列。
- 点击订单卡片可展开状态：Accepted、Preparing、Ready、Exception。
- Headquarters Summary Panel 显示渠道表现、门店状态和异常摘要。

Animation：

```text
Scene 1: 多渠道订单流入
Scene 2: Candao 汇总到统一订单队列
Scene 3: 门店处理状态变化
Scene 4: 数据回流总部视图
```

动效要求：

- 状态变化清晰可读；
- 速度克制；
- 不使用真实客户订单数据。

Responsive Behavior：

- 移动端 UI Demo 改为四张步骤卡。
- 订单队列可横向滑动。
- `Book a Demo` 在页面中段和底部各出现一次。

Visual Priority：

★★★★☆

CTA Path：

```text
Explore Order Management
View Related Integrations
Book a Demo
```

参考方向：

- Workflow + UI demo layer；
- 用订单状态变化解释产品；
- 避免功能表格。

### 4.6 Page: Delivery Management

页面目标：

解释自有配送与外部运力协调、配送状态可见和异常处理。

用户：

- 外卖运营负责人；
- 配送团队；
- 区域运营团队；
- 技术评估人员。

User Intent：

判断 Candao 是否能在配送高峰和异常情况下帮助运营团队更快协调履约方式。

信息结构：

```text
Hero
→ Business Problem
→ Solution
→ Product Capability
→ UI Demo
→ Business Outcome
→ CTA
```

Content Flow：

1. 展示配送高峰压力。
2. 说明自有配送和外部运力可在同一流程协调。
3. 展示派单、追踪、异常处理能力。
4. 通过 UI Demo 呈现高峰期配送调度。
5. 用业务结果强调配送更可控。

模块：

- Hero；
- Peak Delivery Problem；
- Delivery Workflow；
- Dispatch and Tracking Capability；
- Product UI Demo；
- Business Outcome；
- CTA Module。

布局：

- 首屏可使用配送地图 + 门店队列。
- 中段使用地图、配送列表、状态时间线的组合 UI。
- 避免只展示 Rider App，应同时展示运营视角。

Components：

- `Delivery Demand Heatmap`
- `Store Queue`
- `Dispatch Option Selector`
- `Rider / External Capacity Status`
- `Delivery Timeline`
- `Exception Panel`

Interaction：

- 点击订单热区显示配送需求压力。
- Dispatch Option Selector 在 owned rider、external delivery、manual review 间切换。
- Exception Panel 展示 delay、failed pickup、customer notification 等状态。

Animation：

```text
Scene 1: 高峰期配送需求上升
Scene 2: 系统分配配送方式
Scene 3: 配送过程追踪
Scene 4: 异常回到营运视图
```

动效要求：

- 地图动效以状态理解为主；
- 不做复杂路线模拟；
- 移动端可降级为配送时间线。

Responsive Behavior：

- 移动端地图简化为卡片式配送状态。
- Dispatch Option Selector 改为 segmented control。
- 长表格避免出现，使用步骤卡和状态标签。

Visual Priority：

★★★★☆

CTA Path：

```text
Explore Delivery Management
Explore Integrations
Book a Demo
```

参考方向：

- 配送高峰和运力协调；
- 真实门店与配送流程；
- 地图 + 状态队列 + 时间线组合。

### 4.7 Page: Integrations Overview

页面目标：

建立技术可信和合作入口，以系统类别表达，不写具体平台合作事实。

用户：

- 企业技术团队；
- 技术合作伙伴；
- 采购评估人员；
- 运营团队。

User Intent：

确认 Candao 是否能规划与现有订单渠道、POS、支付、会员、配送和数据系统的连接方式。

信息结构：

```text
Hero
→ Category Overview
→ Connection Flow
→ Request Integration
```

Content Flow：

1. Hero 建立系统集成入口。
2. Category Overview 展示系统类别，不展示未确认平台 Logo。
3. Connection Flow 说明数据如何进入餐饮营运流程。
4. Request Integration 承接技术咨询。

模块：

- Hero；
- Integration Category Overview；
- Connection Flow；
- Status Placeholder；
- Request Integration CTA。

布局：

- 使用生态类别图，不使用具体品牌 Logo 墙。
- Category Overview 用 5-6 个系统类别模块。
- Connection Flow 从系统类别流向 Candao Platform。
- Request Integration 放在页面中段和底部。

Components：

- `Integration Category Cards`
- `System Type Icons`
- `Connection Flow Diagram`
- `Status Placeholder Labels`
- `Request Integration Form Entry`

Interaction：

- 类别卡片 hover 显示可规划的连接方向。
- Status Placeholder 显示“需项目确认”的状态逻辑。
- Request Integration 点击进入表单或展开轻量表单入口。

Animation：

- 系统类别节点连接到 Candao Platform。
- 数据流动线条使用轻量循环，不做复杂网络背景。

Responsive Behavior：

- 移动端类别图改为两列或单列卡片。
- Connection Flow 改为纵向步骤。
- 表单入口保持清晰，不放过多字段在详情页。

Visual Priority：

★★★★☆

CTA Path：

```text
Request Integration
Discuss Your System Setup
Partner Enquiry
```

参考方向：

- Technical trust layer；
- 类别优先，具体平台状态后置确认；
- 避免空的独立集成页面。

### 4.8 Page: Cases / Customers

页面目标：

建立信任入口和案例模板，不使用未授权客户事实。

用户：

- 采购与管理层；
- 连锁餐饮集团；
- 销售团队；
- 内容团队。

User Intent：

了解 Candao 如何通过真实营运场景验证平台价值，同时知道具体客户案例需授权后展示。

信息结构：

```text
Hero
→ Story Template
→ Case Categories
→ Authorization Placeholder
→ CTA
```

Content Flow：

1. Hero 建立“营运场景验证价值”的页面定位。
2. Story Template 展示案例应如何组织。
3. Case Categories 按场景分类。
4. Authorization Placeholder 预留未来授权案例位置。
5. CTA 引导销售沟通。

模块：

- Hero；
- Customer Story Template；
- Case Category Cards；
- Authorization Placeholder；
- CTA Module。

布局：

- 页面不使用客户 Logo 墙。
- 案例卡片只展示行业、场景、能力标签和状态。
- Customer Story Template 使用 Challenge、Solution、Capabilities Used、Result、CTA 结构。

Components：

- `Case Template Card`
- `Scenario Tags`
- `Authorization Status Label`
- `Challenge-Solution-Result Framework`
- `Contact Sales CTA`

Interaction：

- Case Category Cards 可筛选场景：Restaurant Chains、Delivery、Digital Ordering、Integrations、Data。
- 未授权案例卡片点击后显示“待授权内容结构”，不展示虚假详情。

Animation：

- 轻量卡片 reveal 即可。
- 不使用强动效，避免案例内容不足时显得空。

Responsive Behavior：

- 移动端案例分类改为标签筛选 + 卡片列表。
- 授权占位区域保持短，不占据过长页面。

Visual Priority：

★★★☆☆

CTA Path：

```text
Contact Sales
Discuss a Relevant Story
Book a Demo
```

参考方向：

- Proof layer；
- 模板先行，授权后填充；
- 用业务挑战替代 Logo 展示。

### 4.9 Page: Company / About

页面目标：

建立公司可信度，保持克制，不夸大未确认事实。

用户：

- 采购和管理层；
- 合作伙伴；
- 招聘访客；
- 法务或签约评估人员。

User Intent：

确认 Candao 是专注餐饮营运科技的可信团队，并理解其服务方式和能力范围。

信息结构：

```text
Hero
→ What We Support
→ Trust and Service Approach
→ Related Links
→ CTA
```

Content Flow：

1. Hero 说明 Candao 专注餐饮营运科技。
2. What We Support 说明订单、配送、门店、数据和系统连接。
3. Trust and Service Approach 说明务实的导入和服务方式。
4. Related Links 链接 Security、Customers、Contact。
5. CTA 引导销售沟通或 Demo。

模块：

- Hero；
- What We Support；
- Trust and Service Approach；
- Related Links；
- CTA Module。

布局：

- 使用真实团队、服务支持或餐饮营运协作场景。
- 不做超大公司历史时间轴。
- 具体年份、规模、办公室和主体信息需留给确认后补充。

Components：

- `Company Intro Block`
- `Service Capability Cards`
- `Trust Links`
- `Contact Sales CTA`

Interaction：

- Service Capability Cards hover 显示相关页面入口。
- Related Links 进入 Security、Customers、Contact。

Animation：

- 基础 reveal 即可。
- 不投入复杂产品动效。

Responsive Behavior：

- 移动端为单列信息流。
- Related Links 改为列表按钮。

Visual Priority：

★★☆☆☆

CTA Path：

```text
Contact Sales
Explore Platform
Book a Demo
```

参考方向：

- 公司可信入口；
- 真实服务和餐饮协作场景；
- 避免普通办公室和商务握手素材。

### 4.10 Page: Contact / Book a Demo

页面目标：

承接全站转化，按用户意图低摩擦分流 Demo、Sales、Integration、Partner、Support。

用户：

- 潜在客户；
- 采购人员；
- 技术合作伙伴；
- 现有客户；
- 餐饮经营者。

User Intent：

快速选择正确咨询类型，并提交足够信息让 Candao 团队安排下一步。

信息结构：

```text
Hero
→ Intent Selection
→ Form Fields
→ Trust Note
→ Privacy Note
→ Submit CTA
```

Content Flow：

1. Hero 说明用户可以分享餐饮营运场景。
2. Intent Selection 先分流需求类型。
3. Form Fields 根据意图逐步收集信息。
4. Trust Note 降低提交前疑虑。
5. Submit CTA 完成转化。

模块：

- Hero；
- Intent Selection；
- Progressive Form；
- Trust Note；
- Privacy Note；
- Submit CTA。

布局：

- 首屏直接出现表单分流，不做过长介绍。
- 表单使用两栏桌面布局：左侧说明和信任提示，右侧表单。
- 移动端表单单列，字段分组清晰。

Components：

- `Intent Selection Cards`
- `Progressive Form`
- `Region Selector`
- `Store Scale Field`
- `Ordering Channels Field`
- `Existing Systems Field`
- `Trust Note`
- `Submit Button`

Interaction：

- 选择意图后动态调整字段。
- Demo、Sales、Integration、Partner、Support 使用不同字段优先级。
- 表单错误提示即时显示。
- 提交后展示确认状态，不承诺未确认响应时间。

Animation：

- 表单字段使用轻量展开。
- 提交状态使用清晰成功反馈。
- 不使用干扰填写的背景动效。

Responsive Behavior：

- 移动端优先保留意图选择和关键字段。
- 长字段分步呈现。
- CTA 按钮固定在表单底部区域，不遮挡输入。

Visual Priority：

★★★★☆

CTA Path：

```text
Submit Enquiry
Submit Demo Request
Request Integration
Partner Enquiry
Support Enquiry
```

参考方向：

- B2B SaaS 低摩擦表单；
- 分流优先；
- 隐私和信任提示清晰。

## 5. P1 页面 UX 模板

P1 页面不做重视觉和复杂交互，第一阶段建议使用统一基础模板。

适用页面：

- Menu and Store Management；
- First-party Ordering；
- Data Intelligence；
- Multi-store Operations；
- Digital Ordering；
- FAQ；
- Support；
- Security and Service Capability。

基础结构：

```text
Hero
→ Problem / Context
→ Core Capability
→ Related Page Links
→ CTA
```

布局：

- 单页基础信息结构；
- 最多 3-4 个内容模块；
- 保持与上级 Solutions 或 Platform 页面互相链接；
- Security and Service Capability 使用 `Pending Verification` 状态，不展示具体认证事实。

Interaction：

- 基础 hover、accordion、anchor link 即可。
- FAQ 使用可搜索 accordion。
- Support 使用问题类型分流表单入口。

Responsive Behavior：

- 全部单列优先；
- 不做复杂 UI Demo；
- CTA 清晰。

## 6. Phase 2 页面 UX 方向

Phase 2 页面暂不输出完整页面体验规格，只保留方向。

页面：

- Retail Operations；
- API Connectivity；
- Restaurant Group Cases；
- Delivery Operations Cases；
- Guides；
- Press；
- Milestones；
- Careers；
- Market Pages；
- Data Processing Addendum。

UX 方向：

- 等待内容运营、技术开放范围、客户授权、法务材料或市场排序确认；
- 保留 Sitemap 位置；
- 不进入 T10 核心视觉资源分配；
- 后续可基于 T08 的页面模板扩展。

## 7. 动效与 UI Demo 全站规范

### 7.1 动效目的

动效必须服务理解：

- 订单进入；
- 状态变化；
- 配送调度；
- 系统连接；
- 数据回流；
- CTA 转化。

### 7.2 禁止动效

- 纯科技粒子背景；
- 抽象 AI 动效；
- 与餐饮营运无关的 3D 旋转物；
- 过度未来感；
- 让正文或 CTA 难以阅读的动效。

### 7.3 UI Demo 降级规则

| 桌面端 | 移动端 |
| --- | --- |
| Scroll-triggered stepper | Swipeable steps |
| Capability map | Vertical cards |
| Map + queue composite | Status cards |
| Data flow lines | Simple arrows |
| Multi-column role view | Tabs / accordion |

## 8. T09 / T10 输入建议

### 8.1 对 T09 体验规划的输入

T09 应基于本文继续细化：

- 全站用户路径；
- 页面节奏；
- 关键交互原型；
- 表单流程；
- 移动端优先级；
- P0 页面之间的流转关系。

### 8.2 对 T10 视觉设计 Agent 的输入

T10 应优先投入：

1. Home Hero；
2. Products / Platform Capability Map；
3. Order Management UI Demo；
4. Delivery Management UI Demo；
5. Integrations Category Flow；
6. Contact / Book a Demo Form Flow。

视觉素材应遵守 T07 v1.1 的 Asset Direction：

- 真实餐饮营运场景；
- 产品 UI 动效；
- 总部与门店协作；
- 配送状态和系统连接；
- 不使用未授权客户素材。

## 9. T08 v1.0 结论

T08 已将 T07 v1.1 Final Copy 转化为页面体验设计规范。

本文件可作为后续 T09 体验规划、T10 视觉设计 Agent 和开发参考的核心输入。

## 10. Design Component Framework

本节用于约束 T09 原型验证、T10 视觉设计和后续 Figma 执行，避免每个页面重新定义组件。

### 10.1 Shared UX Components

| Component | 适用页面 | UX 规则 | 视觉 / 交互注意 |
| --- | --- | --- | --- |
| Hero Module | Home、Solutions、Platform、核心详情页 | 首屏必须明确页面角色、主要用户问题和主 CTA | Home 可使用视频 / 大图；其他页面以产品 UI 或场景图为主 |
| Trust Module | Home、Cases、Company、Security | 在未授权客户素材前，优先使用能力信任层和状态占位 | 不做虚假 Logo 墙，不展示未确认数字 |
| Solution Card | Solutions、Home | 以业务问题和结果组织，不写功能清单 | 卡片信息量控制在标题、说明、CTA、标签 |
| Capability Card | Platform、Home、P1 产品页 | 展示能力入口和业务价值，链接到产品能力页 | 支持 hover / focus，不依赖复杂点击才能理解 |
| UI Demo Container | Platform、Order、Delivery | 承接场景、动作、界面、业务结果 | 必须可降级为静态步骤或移动端滑动步骤 |
| Flow Diagram | Platform、Integrations | 展示系统、订单、数据或配送流向 | 线条动效克制，避免复杂科技背景 |
| CTA Module | 全站 | 每页至少一个主 CTA，P0 页面可有中段与底部 CTA | Primary / Secondary 层级清晰 |
| Form Module | Contact、Request Integration、Support | 先分流意图，再收集字段 | 桌面两栏，移动端分步或单列 |
| Case Template Card | Cases、Home Case Highlight | 展示 Challenge、Solution、Result 的结构 | 未授权前只做模板和场景标签 |

### 10.2 Component Rules

#### Card

- 圆角建议保持 8px 或更小，避免过度圆润的消费级卡片感。
- 每张卡片只承载一个核心判断点。
- Hover 只增加轻量高亮、阴影或连接线，不改变卡片尺寸。
- 卡片 CTA 使用文字 + Arrow icon，不做大面积按钮堆叠。

#### CTA

| CTA 类型 | 用途 | 示例 |
| --- | --- | --- |
| Primary CTA | Demo、Sales、Integration 转化 | Book a Demo、Submit Enquiry、Request Integration |
| Secondary CTA | 页面探索路径 | Explore Platform、Explore Solutions、View Related Integrations |
| Inline CTA | 模块内轻量跳转 | View Workflow、Discuss Your System Setup |

规则：

- Primary CTA 每页最多保持 1 个主方向。
- 不同页面 CTA 必须服务页面角色，不平均使用 `Contact Us`。
- 移动端关键 CTA 可 sticky，但不得遮挡正文和表单字段。

#### Data Visualization

- Dashboard：只展示抽象化业务状态，不使用真实客户数据。
- Flow：用于解释订单、配送、集成和数据回流。
- Timeline：用于订单状态、配送履约、案例结构和表单流程。
- Map：仅用于多门店或配送场景，不做装饰地图。

## 11. Cross Page User Journey

T09 和 T10 必须关注跨页面流转，而不是只设计单页静态效果。

### 11.1 Journey A: 连锁餐饮集团采购路径

```text
Home
→ Restaurant Chains
→ Products / Platform
→ Order Management / Delivery Management
→ Cases / Customers
→ Book a Demo
```

体验重点：

- Home 让用户确认 Candao 理解复杂餐饮营运；
- Restaurant Chains 建立总部与门店管理场景；
- Platform 解释能力结构；
- Product Pages 展示关键工作流和 UI Demo；
- Cases 提供案例模板和授权证明位置；
- Demo 完成咨询。

### 11.2 Journey B: 技术评估与集成路径

```text
Home
→ Integrations Overview
→ Category Overview
→ Request Integration / Partner Enquiry
```

体验重点：

- 不展示未确认具体平台 Logo；
- 先展示系统类别和连接方式；
- 将技术兴趣转化为集成咨询或合作伙伴咨询。

### 11.3 Journey C: 运营负责人产品理解路径

```text
Home
→ Solutions Overview
→ Products / Platform
→ Order Management
→ Delivery Management
→ Book a Demo
```

体验重点：

- 先以业务问题进入；
- 再进入能力层；
- 最后通过 UI Demo 看到实际操作流程；
- CTA 应强调按营运场景安排 Demo。

### 11.4 Journey D: 信任验证路径

```text
Home
→ Cases / Customers
→ Company / About
→ Contact Sales
```

体验重点：

- 客户案例未授权前使用模板和授权状态；
- Company 页面轻量建立公司可信度；
- Contact Sales 承接复杂采购问题。

## 12. Visual Priority Definition

T08 已为页面定义 Visual Priority。T09/T10 应按以下含义分配时间、素材和 Motion 投入。

| 等级 | 含义 | 资源投入 | 适用页面 |
| --- | --- | --- | --- |
| ★★★★★ | 核心品牌与产品体验页面 | 独立视觉探索、重点 UI Demo、Motion 脚本、桌面和移动端完整方案 | Home、Products / Platform |
| ★★★★☆ | 重点转化或关键能力页面 | 高质量页面设计、关键交互动效、核心组件变体 | Solutions Overview、Restaurant Chains、Order Management、Delivery Management、Integrations Overview、Contact / Book a Demo |
| ★★★☆☆ | 信任与模板页面 | 模板化设计、清晰信息结构、少量状态或筛选交互 | Cases / Customers |
| ★★☆☆☆ | 基础信息页 | 基础布局、少量组件复用、不投入复杂动效 | Company / About、FAQ、Support、P1 页面 |
| ★☆☆☆☆ | Phase 2 占位方向 | 只保留结构和未来扩展方向 | API、Guides、Press、Careers、Market Pages |

执行规则：

- Home 与 Platform 不应共用完全相同的视觉结构。
- Order 与 Delivery 可共用 `Product UI Demo` 框架，但 UI 内容和动效脚本必须不同。
- Cases、Company、FAQ、Support 不应消耗第一阶段核心 Motion 资源。
- T10 不应为所有页面生成同等完整的视觉探索。

## 13. Photography & Media Direction

### 13.1 推荐摄影 / 视频素材

| 场景 | 推荐内容 | 用途 |
| --- | --- | --- |
| Home Hero | 餐厅高峰营运、前台接单、厨房出餐、门店协作 | 第一眼建立餐饮运营真实感 |
| Restaurant Chains | 多门店、总部运营、区域管理、门店执行 | 表达连锁集团总部与门店协作 |
| Order Management | 门店接单、前台设备、订单队列抽象 UI | 表达从多渠道到统一订单流程 |
| Delivery Management | 出餐、取餐、配送状态、调度视图 | 表达高峰履约和配送可视 |
| Integrations | 系统类别图、数据连接、抽象 UI 节点 | 表达技术可信 |
| Company / About | 团队协作、实施支持、餐饮运营工作场景 | 建立务实可信感 |

### 13.2 避免素材

- 商务握手；
- 普通办公室会议；
- 泛科技芯片、网络、粒子、AI 背景；
- 只有食物氛围、没有运营信息的库存照片；
- 未授权客户门店、Logo、客户员工或评价；
- 过度摆拍的微笑客服或销售场景。

### 13.3 Media Usage Rules

- Hero 视频应服务页面理解，不做纯背景装饰。
- 视频应可静音、可降级为图片，并保证文字可读。
- UI Motion 可使用抽象化数据，不使用真实客户数据。
- 移动端可使用视频封面 + 轻量 UI 动效替代完整视频。

## 14. Figma Structure Recommendation

T09/T10 若进入 Figma 或原型阶段，建议按以下结构输出，保证设计、交互和开发可读。

### 14.1 File / Page Structure

```text
Candao International Website
├─ 00 Cover & Notes
├─ 01 Design Tokens
├─ 02 Components
├─ 03 Desktop Pages
├─ 04 Mobile Pages
├─ 05 UI Motion Storyboards
├─ 06 Prototype Flow
└─ 07 Handoff Notes
```

### 14.2 Frame Structure

每个核心页面建议包含：

```text
Page:
Home / Products / Platform / Order Management

Frame:
Desktop 1440
Tablet 768
Mobile 390

Section:
Hero
Problem / Capability / UI Demo / CTA

Component:
Hero Module
Capability Card
UI Demo Container
CTA Module

Interaction:
Scroll-triggered animation
Hover reveal
Stepper transition

Assets:
Photography
Product UI Motion
Icon / Category labels
```

### 14.3 Prototype Requirements

- Home 必须串联到 Solutions、Platform、Integrations、Book a Demo。
- Platform 必须串联到 Order Management 和 Delivery Management。
- Order / Delivery 的 UI Demo 必须至少有 4 个状态步骤。
- Contact / Book a Demo 必须包含意图选择和表单状态。
- Mobile prototype 至少覆盖 Home、Platform、Order Management、Contact。

## 15. T08 v1.1 结论

T08 v1.1 不改变原页面 UX 方案，只补充设计执行层约束。

后续 T09 应转为设计原型验证，重点验证 Home、Products / Platform、Order Management、Delivery Management 和 Contact / Book a Demo 的页面节奏、交互脚本和移动端降级方式。

T10 应基于 T07 Copy、T08 UX 和 T09 Prototype 输出视觉方向、UI Style、Motion Style 和 Design System，而不是重新解释官网策略。
