# Website High Fidelity Visual Design

任务：T11 高保真视觉方案设计  
项目：餐道国际官网重构  
输出语言：简体中文；视觉素材、设计关键词、组件名和 Figma 命名保留英文  
生成时间：2026-08-03

## 1. 执行边界

本文件基于以下输入生成：

- `tasks/T07/output/final-website-copy-v1.0-2026-08-03.md`
- `tasks/T08/output/website-ux-specification-2026-08-03.md`
- `tasks/T09/output/website-prototype-validation-2026-08-03.md`
- `tasks/T09/output/t09-v1.1-prototype-validation-supplement-note-2026-08-03.md`
- `tasks/T10/output/website-visual-direction-2026-08-03.md`
- `tasks/T10/output/t10-v1.1-visual-direction-supplement-note-2026-08-03.md`

T11 不重新探索视觉方向，不重写官网 Copy，不重新做 UX，不新增 Sitemap。

T11 目标：

```text
用高保真视觉方案验证：
T03 Strategy
→ T07 Copy
→ T08 UX
→ T09 Prototype
→ T10 Visual Direction
是否能成立为国际 SaaS 官网设计。
```

视觉总概念继承 T10：

```text
Operational Clarity for Global Restaurant SaaS
```

## 2. 高保真输出范围

T11 不为所有页面平均生成完整 High-fi。输出范围按 T10 v1.1 的 `Page Output Requirement` 执行。

| 页面 / 模块 | T11 输出 | Fidelity | Interaction | 说明 |
| --- | --- | --- | --- | --- |
| Home | 完整高保真视觉方案 | L3 | L2-L3 | 官网视觉方向第一验证点 |
| Products / Platform | 核心模块高保真 | L3 | L3 | 平台能力理解第一验证点 |
| Order Management | UI Demo storyboard + 关键段落视觉 | L3 for demo | L3 | 订单管理产品价值验证 |
| Delivery Management | UI Demo storyboard + 关键段落视觉 | L3 for demo | L3 | 配送管理产品价值验证 |
| Contact / Book a Demo | 表单视觉与状态方案 | L2-L3 | L2-L3 | 转化闭环验证 |
| Integrations Overview | 中保真视觉方向 | L2 | L2 | 技术可信路径 |
| Solutions / Restaurant Chains | 模板化视觉方向 | L1-L2 | L1-L2 | 业务场景入口 |
| Cases / Company | 模板化视觉方向 | L1 | L1 | 授权与基础可信占位 |

## 3. Moodboard 与参考映射

T11 的参考不是复制网站视觉，而是借鉴可执行能力。

| 参考方向 | 借鉴能力 | T11 应用 |
| --- | --- | --- |
| Deliverect | 业务结果表达、产品叙事 | Platform、Order、Delivery 的页面叙事节奏 |
| Aigens | 餐饮科技场景、亚洲餐饮真实感 | Home Hero、Solutions 场景摄影 |
| TabSquare | 餐饮场景 + 数字产品结合 | Home Product Showcase、Digital Operation 场景 |
| Stripe 类 SaaS | UI 精致度、组件系统、表单体验 | Design System、Contact Form、Integration Map |
| Linear 类 SaaS | 克制排版、产品 Motion、界面细节 | Product UI Motion、Dashboard、Stepper |
| Vercel 类 SaaS | 技术可信、结构清晰、开发者友好程度 | Integrations、Technical Trust |

Moodboard 标注格式：

```text
Reference:
Borrowed Capability:
Applied Page:
Do Not Copy:
```

## 4. Home High Fidelity Design

### 4.1 设计目标

Home 必须在 5 秒内建立：

```text
Candao 是面向复杂餐饮营运的国际 SaaS 平台。
```

视觉关键词：

- `Premium SaaS`
- `Global Restaurant Operations`
- `Operational Clarity`
- `Large Editorial Photography`
- `Product UI Motion`
- `Trustworthy B2B`

### 4.2 Desktop 1440 首屏构图

```text
Frame: Home / Desktop 1440

[Sticky Header]

[Hero Section]
Left 40%:
Headline
Description
Primary CTA: Book a Demo
Secondary CTA: Explore Platform

Right / Background 60%:
Real Restaurant Operation Scene
Floating SaaS UI Overlay
```

构图比例：

```text
70% Real Restaurant Scene
+
30% SaaS UI Layer
+
40% readable negative space for text
```

视觉说明：

- Hero 不放在卡片里，保持开放、国际化的首屏气质。
- 背景为真实餐厅高峰运营场景，文字区域保留足够负空间。
- UI Overlay 放在右侧或中右侧，不遮挡餐饮运营动作。
- 首屏必须同时看到 `Book a Demo` 和 `Explore Platform`。

### 4.3 Hero 图片方向

图片方向：

商业摄影：

```text
Global Restaurant Operation Scene
Restaurant Peak Hour Workflow
Front Counter Ordering
Commercial Kitchen Workflow
Store Team Coordination
```

画面要求：

- 有真实餐饮运营动作：接单、出餐、门店协作、配送交接。
- 人物处于工作流中，不需要正面摆拍。
- 光线干净，适合叠加深浅渐变和 UI Overlay。
- 不使用普通办公室、商务握手、食物特写、抽象科技背景。

### 4.4 Hero 视频方向

视频：

```text
Restaurant Operation Workflow Video
Peak Hour Restaurant Operations Loop
Restaurant Store Workflow Video
```

规格建议：

- 8-12 秒静音循环；
- 镜头顺序：前台接单 → 后厨出餐 → 门店协作 → 配送交接；
- 视频亮度稳定，不影响标题可读；
- 移动端可降级为静态封面 + 轻量 UI 状态；
- 不使用广告片式快切。

### 4.5 Hero UI Overlay

组件名：

```text
Component / Hero / Home
Component / Overlay / OperationsFlow
```

UI Overlay 构成：

| UI 元素 | 视觉内容 | 业务含义 |
| --- | --- | --- |
| Order Queue | 多渠道订单进入统一队列 | 分散订单进入清晰流程 |
| Store Status | 门店状态、营业状态、异常提示 | 总部可见门店情况 |
| Delivery Timeline | 配送状态、预计时间、异常标签 | 履约过程可跟踪 |
| Data Return | 小型运营看板、渠道摘要 | 数据回到总部视图 |
| Integration Signal | POS / Payment / Delivery 节点 | 系统连接可信 |

视觉规则：

- 半真实 UI，不使用真实客户数据。
- 面板透明度克制，避免厚重玻璃拟态。
- 线条和状态点用于解释流程，不做粒子动效。
- Motion 控制在 L2-L3。

### 4.6 Trust Fallback

当客户 Logo、门店数、认证和案例数据未确认时，Home 使用能力信任层。

视觉结构：

```text
Trust / Data Proof Module

Industry Experience
System Connectivity
Service Readiness
Regional Operations Understanding
Implementation Support
```

组件方向：

- 使用 5 个横向能力标签或轻量信息块；
- 可配合图标：`Store`、`Network`、`ShieldCheck`、`MapPin`、`Headset`；
- 不做数字墙；
- 不做虚假 Logo 墙。

### 4.7 Product Showcase

目标：

让用户理解 Candao 是一个连接每日餐饮营运流程的平台，而不是功能列表。

视觉结构：

```text
Order enters
→ Menu / Store status sync
→ Delivery status update
→ Data returns to dashboard
→ Integrations connect systems
```

模块构图：

- 中央为 `Capability Flow`；
- 左侧或顶部是业务问题；
- 右侧为半真实 UI 变化；
- 下方为能力入口：Order、Menu、Delivery、Data、Integrations。

交互：

- Desktop：Hover / Focus 显示能力摘要；
- Scroll 到模块时按顺序激活能力流；
- Mobile：改为 Swipeable capability cards。

### 4.8 Final CTA

视觉目标：

Final CTA 应像一次清晰的销售对话邀请，而不是营销口号。

布局：

```text
Full-width CTA band
Headline
Short description
Primary CTA: Book a Demo
Secondary link: Explore Platform
```

视觉规则：

- 使用简洁背景，可结合轻量 UI flow 线条；
- CTA 按钮必须高对比；
- 不使用复杂动效干扰转化。

## 5. Platform High Fidelity Key Sections

### 5.1 设计目标

Products / Platform 页面要证明：

```text
Candao 不是产品目录，而是 Capability layer。
```

用户应理解：

- 系统如何连接；
- 订单如何推动流程；
- 总部如何看到状态；
- 为什么 Order / Delivery 是下一级产品能力页。

### 5.2 Capability Map

组件名：

```text
Component / Map / Capability
Component / Flow / PlatformSystem
```

Desktop 结构：

```text
[Hero]
→ [Capability Map]
   Center: Candao Platform
   Left: Ordering Channels / POS / Payment
   Right: Stores / Delivery / Data
   Bottom: Headquarters Visibility
→ [Platform UI Demo]
→ [Product Entry Cards]
→ [CTA]
```

视觉方向：

- 中央平台节点稳定、清晰；
- 周边能力以分组节点呈现；
- 连接线使用温和流动状态；
- 不做复杂网络球体或科技线网。

图标方向：

```text
Order Channels Icon Set
POS System Icon
Payment Node
Delivery Dispatch
Data Dashboard
Integration Connector
```

### 5.3 Platform UI Demo

3-step storyboard：

| Step | UI 画面 | Motion | Business Result |
| --- | --- | --- | --- |
| 1 | Orders、Menus、Delivery、Data、Integrations 节点连接 | 节点轻亮，线条进入平台 | 建立平台总览 |
| 2 | 订单触发菜单、配送和数据状态更新 | Stepper 切换状态 | 说明流程连贯 |
| 3 | 总部 Dashboard 显示 Store health、Channel summary、Exceptions | Dashboard 卡片更新 | 说明总部可视 |

UI 风格：

- 半真实 SaaS UI；
- 抽象化数据；
- 卡片半径不超过 8px；
- 层级清晰，避免密集后台感。

### 5.4 Product Entry

入口卡片：

- Order Management；
- Menu and Store；
- Delivery Management；
- First-party Ordering；
- Data Intelligence；
- System Integrations。

视觉规则：

- 每张卡片只展示一个业务判断；
- 卡片 CTA 使用 `Explore` + Arrow；
- 不写内部模块名，如 OMS、DMS、COMS 作为第一层入口。

## 6. Product Motion Storyboard

### 6.1 Order Management 4-step UI Demo

页面目标：

让用户看懂多渠道订单如何进入统一流程，并回到总部视图。

组件名：

```text
Component / Demo / OrderQueue
Storyboard / OrderManagement / 4Step
```

Storyboard：

| Step | 画面结构 | 动效 | 关键 UI | 业务结果 |
| --- | --- | --- | --- | --- |
| 1 | 左侧出现多个订单来源 | 渠道订单轻量流入 | Delivery channels、First-party ordering、Store system | 订单来源分散 |
| 2 | 订单进入中央统一队列 | 队列归并、状态标签出现 | Unified order queue、Channel tags、Store assignment | 集中可见 |
| 3 | 门店处理订单 | 状态从 New → Accepted → Preparing → Ready | Status chips、Store action panel | 减少门店切换 |
| 4 | 总部查看摘要 | 数据回流到右侧 Dashboard | Exception summary、Channel performance、Store status | 总部可管理 |

视觉重点：

- 队列变化要清晰，不做炫技；
- 状态色服务理解；
- 异常状态使用克制红，不制造警报感；
- Mobile 降级为 4 张步骤卡。

图片方向：

商业摄影：

```text
Restaurant Front Counter Order Intake
Store Staff Managing Orders
Restaurant Ordering Workflow
```

UI 素材：

```text
Omnichannel Order Queue UI
Restaurant Order Status Dashboard
Store Order Workflow Interface
```

### 6.2 Delivery Management 4-step UI Demo

页面目标：

让用户看懂配送高峰、运力分配、履约追踪和异常回流。

组件名：

```text
Component / Demo / DeliveryMap
Storyboard / DeliveryManagement / 4Step
```

Storyboard：

| Step | 画面结构 | 动效 | 关键 UI | 业务结果 |
| --- | --- | --- | --- | --- |
| 1 | 地图与门店队列显示高峰订单 | 热区和队列轻亮 | Peak demand、Store queue、Delivery pressure | 运力压力出现 |
| 2 | 系统显示履约选择 | 卡片切换 Owned rider / External delivery / Manual review | Fulfillment option cards | 履约方式可选 |
| 3 | 配送进行中 | 地图路径、骑手状态、时间线推进 | Map view、Rider status、Delivery timeline | 状态可追踪 |
| 4 | 异常回到运营视图 | Delay / failed pickup / customer notification 进入异常面板 | Exception panel、Notification state | 异常可处理 |

视觉重点：

- 地图只服务配送理解，不做装饰地图；
- 骑手路径动效要克制；
- 异常回流要清晰但不夸张；
- Mobile 降级为 Swipeable timeline。

图片方向：

商业摄影：

```text
Restaurant Delivery Handoff
Peak Hour Delivery Coordination
Kitchen Pickup Workflow
```

UI 素材：

```text
Restaurant Delivery Management UI
Delivery Dispatch Map
Rider Status Timeline
Exception Handling Dashboard
```

## 7. Contact / Book a Demo Visual

### 7.1 设计目标

Contact 页面必须降低咨询摩擦，并完成基础 Lead Qualification。

页面视觉关键词：

- `Low-friction Conversion`
- `Professional Form`
- `Intent Routing`
- `Enterprise SaaS Demo Form`

### 7.2 桌面布局

```text
Desktop 1440:

Left:
Hero / Trust note / Enquiry routing explanation

Right:
Intent Selection
Progressive Form
Submit CTA
```

Intent Selection：

- Book a Demo；
- Contact Sales；
- Discuss Integration；
- Partner Enquiry；
- Support Request。

Lead Qualification 字段：

- Company；
- Region；
- Store Count；
- Ordering Channels；
- Current Systems；
- Delivery Workflow；
- Message。

### 7.3 Form States

必须设计：

- Default；
- Hover；
- Focus；
- Filled；
- Validation Error；
- Submitting；
- Success；
- Follow-up note。

视觉规则：

- Primary CTA：`Submit Demo Request` / `Submit Enquiry`；
- 字段分组清晰，不一次性压迫用户；
- 移动端采用单列和分段标题；
- 错误提示不使用强烈警报红大面积铺底。

## 8. Design System Draft

### 8.1 Token Draft

说明：Candao 最终品牌色需基于现有品牌资产确认。本节提供 Token 结构和使用规则，不锁定最终 Hex。

| Token | 方向 | 用途 |
| --- | --- | --- |
| `Color / Brand / Primary` | Existing Candao Brand Color | Logo、主 CTA、关键状态 |
| `Color / Accent / ServiceAmber` | Warm service accent | 餐饮现场、配送高峰、提示重点 |
| `Color / Neutral / Ink` | Deep neutral | 标题、导航、深色面板 |
| `Color / Neutral / Cloud` | Light background | 页面背景、卡片底 |
| `Color / Line / Mist` | Soft border | 分割线、卡片边框 |
| `Color / Status / Success` | Operational green | 完成、可用、连接正常 |
| `Color / Status / Warning` | Amber warning | 高峰、延迟、需要注意 |
| `Color / Status / Error` | Controlled red | 异常、错误、失败 |
| `Color / Status / Info` | System blue | 系统连接、信息提示 |

### 8.2 Typography Draft

| Token | 用途 | 方向 |
| --- | --- | --- |
| `Type / Display` | Home Hero | International SaaS headline |
| `Type / H1` | 页面主标题 | 清晰、专业、克制 |
| `Type / H2` | Section 标题 | 可扫读 |
| `Type / Body` | 正文 | 中英文友好 |
| `Type / Label` | UI 标签、状态 | 清楚，不压缩 |
| `Type / Caption` | 辅助说明 | 用于表单、状态和注释 |

字体方向：

```text
English:
Inter / Inter Tight / Suisse Intl style

Traditional Chinese:
Noto Sans TC / Source Han Sans TC / PingFang TC
```

### 8.3 Spacing / Radius / Shadow

| Token | 建议 |
| --- | --- |
| Spacing | 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 |
| Radius | 4 / 6 / 8，卡片不超过 8px |
| Shadow | 轻量层级，不做厚重浮层 |
| Grid | Desktop 12-column，Tablet 8-column，Mobile 4-column |
| Motion | Duration、Easing、Delay、Reduced Motion |

### 8.4 Components Draft

必须进入 Figma Components：

- `Component / Hero / Home`
- `Component / Hero / Page`
- `Component / Trust / Capability`
- `Component / Switcher / Problem`
- `Component / Card / Capability`
- `Component / Card / Solution`
- `Component / Map / Capability`
- `Component / Demo / OrderQueue`
- `Component / Demo / DeliveryMap`
- `Component / CTA / Primary`
- `Component / CTA / Secondary`
- `Component / Form / IntentSelector`
- `Component / Form / Field`
- `Component / Case / Template`
- `Component / Footer / Global`

### 8.5 Component States

每个交互组件至少定义：

- Default；
- Hover；
- Focus；
- Active；
- Selected；
- Disabled；
- Loading；
- Success；
- Warning；
- Error。

## 9. Asset Plan

### 9.1 Photography

图片方向：

商业摄影：

```text
Global Restaurant Operation Scene
Restaurant Peak Hour Workflow
Commercial Kitchen Workflow
Front Counter Ordering
Store Team Coordination
Restaurant Delivery Handoff
Multi-store Restaurant Operations
Restaurant Implementation Support
```

优先级：

| 优先级 | 素材 | 用途 |
| --- | --- | --- |
| P0 | Home Hero 视频 / 大图 | 首页第一印象 |
| P0 | Order / Delivery 操作场景 | 产品能力页真实感 |
| P1 | 多门店 / 总部运营场景 | Solutions / Restaurant Chains |
| P1 | 团队实施支持场景 | Company / Trust |
| P2 | 案例模板背景 | Customers 占位 |

### 9.2 Video

视频：

```text
Restaurant Operation Workflow Video
Restaurant Peak Hour Operations Loop
Restaurant Delivery Coordination Video
Store Workflow Motion Background
```

要求：

- 8-12 秒循环；
- 静音；
- 可降级为图片；
- 画面必须包含运营动作；
- 不能只是餐厅氛围或食物展示。

### 9.3 Product UI

产品 UI：

```text
Semi-real SaaS UI
Restaurant Operations Dashboard
Omnichannel Order Queue UI
Delivery Dispatch Map
Capability Map UI
Integration Flow Diagram
Intent-based Demo Form
```

规则：

- 不用真实客户数据；
- 允许基于真实产品逻辑重构；
- UI 需要能解释业务流程；
- 不做静态截图堆叠。

### 9.4 Icons

图标方向：

```text
Line Icons
SaaS Interface Icons
Restaurant Workflow Icons
System Integration Icons
```

建议图标：

- Order；
- Menu；
- Store；
- Delivery；
- Data；
- Integration；
- Support；
- Region；
- Security；
- Demo。

规则：

- 使用统一线宽；
- 不使用过度插画化图标；
- 图标只辅助扫读，不承担主要叙事。

### 9.5 Motion Assets

Motion 资产：

```text
Home Hero UI Overlay
Capability Flow Animation
Platform Capability Map Motion
Order Queue Stepper
Delivery Timeline Storyboard
Contact Intent Selector
```

范围：

- L1-L3；
- 不进入 L4 Product Simulation；
- 每个 L3 Motion 必须有静态等价状态。

## 10. Figma Handoff Structure

### 10.1 File Structure

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

### 10.2 必做 Frames

Desktop 1440：

- Home；
- Products / Platform；
- Order Management；
- Delivery Management；
- Contact / Book a Demo。

Mobile 390：

- Home；
- Products / Platform；
- Order Management；
- Contact / Book a Demo。

### 10.3 Motion Storyboard Frames

- `Storyboard / Home / HeroOverlay`
- `Storyboard / Home / ProductShowcase`
- `Storyboard / Platform / CapabilityMap`
- `Storyboard / Order / OrderQueue4Step`
- `Storyboard / Delivery / DeliveryMap4Step`
- `Storyboard / Contact / IntentSelector`

### 10.4 Review Notes

每个重点 Frame 必须标注：

- Visual Priority；
- Fidelity Level；
- Interaction Level；
- Asset Requirement；
- Copy Status；
- Open Questions。

## 11. Visual Review Result

按 T10 v1.1 `Visual Review Checklist` 做 T11 自检。

### 11.1 品牌检查

| 检查项 | T11 结论 |
| --- | --- |
| 是否建立国际餐饮运营 SaaS 平台认知 | 通过。Home Hero 以真实运营场景 + SaaS UI Overlay 建立定位。 |
| 是否延续 `Operational Clarity for Global Restaurant SaaS` | 通过。视觉方案围绕运营清晰度、平台连接和产品 Motion 展开。 |
| 是否专业、务实、可信、国际化 | 通过。避免夸张科技感和国内软件官网式表达。 |

### 11.2 视觉检查

| 检查项 | T11 结论 |
| --- | --- |
| 是否优先真实餐饮运营场景 | 通过。素材计划优先门店、前台、后厨、配送和实施支持。 |
| 是否避免泛科技视觉 | 通过。明确禁止 AI 背景、粒子、3D 球体、普通办公室和商务握手。 |
| Hero 是否有负空间和 CTA 可读性 | 通过。Desktop 构图保留约 40% text negative space。 |

### 11.3 产品检查

| 检查项 | T11 结论 |
| --- | --- |
| UI 是否解释价值 | 通过。Home、Platform、Order、Delivery 均以 UI flow / storyboard 表达业务结果。 |
| Product Showcase 是否是能力流 | 通过。结构为 Order → Menu / Store → Delivery → Data → Integrations。 |
| Order / Delivery 是否有 4-step storyboard | 通过。已分别定义 4-step UI Demo。 |

### 11.4 动效检查

| 检查项 | T11 结论 |
| --- | --- |
| Motion 是否服务理解 | 通过。Motion 用于流程、状态和转化路径。 |
| 是否控制在 L1-L3 | 通过。不进入 L4 Product Simulation。 |
| 是否有移动端降级 | 通过。Hero、Capability Map、Order / Delivery Demo 均定义移动端降级。 |

### 11.5 转化检查

| 检查项 | T11 结论 |
| --- | --- |
| `Book a Demo` 是否清晰 | 通过。Home、Platform、Product Pages、Contact 均保留主 CTA。 |
| Contact 是否低摩擦 | 通过。采用 Intent Selection + Progressive Form。 |
| Trust fallback 是否成立 | 通过。无客户授权时使用能力信任层和 Case Template。 |

### 11.6 交付检查

| 检查项 | T11 结论 |
| --- | --- |
| 是否包含 Desktop / Mobile 核心 Frame | 通过。已定义 Desktop 1440 和 Mobile 390 必做 Frames。 |
| 是否包含 Tokens、Components、Motion Storyboards | 通过。已定义 Design System Draft 和 Storyboard Frames。 |
| 是否能进入 T12 / T13 | 通过。可进入审核和最终整合，但品牌色、真实素材、字体授权仍需确认。 |

## 12. Open Questions

| 问题 | 影响 | 建议处理 |
| --- | --- | --- |
| Candao 最终品牌色资产未提供 | 无法锁定最终 Color Token | T12 前补充 Logo / Brand guide / 现有官网色彩 |
| 真实餐饮视频素材未确认 | Home Hero 高保真落地风险 | 准备静态大图 fallback 与 UI Overlay 替代 |
| 产品 UI 是否可脱敏使用未确认 | UI Demo 真实性与合规风险 | 使用半真实 UI 重构，不放客户数据 |
| 客户案例授权未确认 | Trust / Cases 不能展示真实 Logo | 使用 Trust fallback 和 Case Template |
| 字体授权未确认 | 最终设计与开发可能替换字体 | 优先使用可商用字体或系统字体组合 |

## 13. T12 输入建议

T12 审核 Agent 应重点检查：

1. Home 首屏是否真的符合 5 秒理解标准；
2. Platform 是否从视觉上体现 Capability layer；
3. Order / Delivery storyboard 是否足以解释产品价值；
4. Contact 表单是否低摩擦且不遗漏关键 Lead Qualification；
5. 视觉素材是否存在未授权客户、Logo、数据或认证风险；
6. 品牌色是否仍处于待确认状态；
7. T11 是否严格控制 High-fi 范围，没有平均设计所有页面。

## 14. T11 结论

T11 高保真视觉方案成立。

核心结论：

- Home 应进入完整 High-fi；
- Products / Platform 应进入核心模块 High-fi；
- Order Management 和 Delivery Management 应以 Product Motion Storyboard 作为重点；
- Contact / Book a Demo 应作为转化闭环进入中高保真；
- Solutions、Restaurant Chains、Cases、Company 先使用模板化视觉方案；
- Design System 初稿可以进入 Figma 建立 Tokens、Components、States 和 Storyboards；
- 所有未确认客户、Logo、数据、认证、集成状态和 SLA 继续保持待确认，不进入正式视觉事实。

## 15. Visual Deliverable Definition

本节明确 T11 的真实产物边界。

T11 当前产物是：

```text
High Fidelity Visual Specification
```

也就是：

- 高保真视觉方案规范；
- Figma 执行 Brief；
- 页面视觉结构说明；
- Design System 初稿说明；
- Motion Storyboard 说明；
- 素材准备清单。

T11 当前还不是：

- 已生成的 Figma Frame；
- 可点击 Prototype；
- 可在浏览器查看的 Web Demo；
- 可直接交付开发的最终视觉稿；
- 已完成视觉素材和产品 UI 动画的设计文件。

### 15.1 最终可视化交付物定义

后续真正能“看到效果”的视觉产物应至少包含：

| 类型 | 必需内容 | 说明 |
| --- | --- | --- |
| Figma 视觉稿 | Home Desktop 1440、Products / Platform Desktop 1440、Order Desktop 1440、Delivery Desktop 1440、Contact Desktop 1440 | 标准高保真页面 Frame |
| Mobile 视觉稿 | Home Mobile 390、Products / Platform Mobile 390、Order Mobile 390、Contact Mobile 390 | 验证响应式视觉节奏 |
| Motion Storyboard | Home Hero UI Overlay、Product Showcase、Order Flow、Delivery Flow、Contact Intent Selector | 验证关键产品动效 |
| Design System | Tokens、Components、States、Responsive Rules | 支撑页面一致性 |
| Prototype Flow | Home → Platform → Order / Delivery → Contact | 验证主路径和 CTA |

## 16. Prototype Generation Method

T11 之后应进入视觉原型生成，而不是继续优化 Markdown。

推荐流程：

```text
T11 High Fidelity Visual Specification
→ T11.5 Visual Prototype Generation
→ T12 Design Review
→ T13 Final Integration
```

### 16.1 推荐方式：Figma 高保真原型

适用场景：

- 需要真实设计稿；
- 需要 Desktop / Mobile Frame；
- 需要可点击原型；
- 需要设计系统和开发交接。

输出：

- Figma Pages；
- Desktop / Mobile Frames；
- Components；
- Motion Storyboards；
- Prototype Flow；
- Handoff Notes。

### 16.2 快速方式：Image Generation 视觉探索

适用场景：

- 快速验证 Home Hero 或页面视觉情绪；
- 探索摄影、UI Overlay、色彩和构图方向。

限制：

- 不能替代 Figma；
- 难以保证文字、组件、响应式和真实交互准确；
- 不适合直接作为开发交付物。

可用提示方向：

```text
International SaaS restaurant website hero,
large editorial restaurant operations photography,
floating SaaS dashboard UI,
premium B2B visual style,
clean typography area,
operational clarity,
not futuristic AI, not generic office
```

### 16.3 可运行方式：Web Prototype

适用场景：

- 希望直接在浏览器查看页面；
- 需要验证响应式、交互和滚动节奏；
- 可以接受视觉不是最终 Figma 精度。

输出：

- React / HTML Prototype；
- Local preview URL；
- Desktop / Mobile 截图；
- 基础交互动效；
- 可迭代页面效果。

限制：

- 视觉质量依赖前端实现；
- 不等同最终设计系统；
- 不应跳过后续设计审核。

## 17. Asset Preparation List

进入 T11.5 前需要准备或确认以下素材。

| 素材 | 优先级 | 状态 | 用途 |
| --- | --- | --- | --- |
| Candao Logo / Brand Asset | P0 | 待提供 | 品牌色提取、Header、Footer、CTA |
| 现有品牌色 / 品牌手册 | P0 | 待提供 | Color Token 适配 |
| 真实餐厅运营视频 | P0 | 待确认 | Home Hero |
| 真实餐厅运营摄影 | P0 | 待确认 | Home、Solutions、Product pages |
| 脱敏产品截图 / 产品录屏 | P0 | 待确认 | Semi-real SaaS UI 重构 |
| Order Management 流程素材 | P0 | 可按 T11 storyboard 重构 | Order UI Demo |
| Delivery Management 流程素材 | P0 | 可按 T11 storyboard 重构 | Delivery UI Demo |
| 图标风格参考 | P1 | 可生成 | Capability Card、Integration、Trust |
| 客户案例授权素材 | P2 | 待授权 | Cases / Trust，不作为 T11.5 必需 |

若真实素材暂时不足，T11.5 可以使用：

- 半真实 UI 重构；
- 抽象化数据；
- 授权状态占位；
- Hero 静态图片 fallback；
- Generated visual exploration 作为方向参考。

## 18. Visual Prototype Review Gate

T11.5 完成后进入 T12 前，必须先通过以下 Review Gate。

| Gate | 检查问题 | 通过标准 |
| --- | --- | --- |
| Brand Gate | 是否一眼看出是国际餐饮运营 SaaS？ | Home 5 秒理解成立 |
| Visual Gate | 是否真实餐饮运营，而不是泛科技或办公室？ | Hero 与核心素材包含运营动作 |
| Product Gate | UI 是否解释产品价值？ | Platform、Order、Delivery 的 UI Demo 可读 |
| Motion Gate | 动效是否服务理解？ | L1-L3 范围内，有移动端降级 |
| Conversion Gate | CTA 是否清楚？ | Book a Demo 路径明显 |
| System Gate | 是否可交接？ | 有 Tokens、Components、Frames、Storyboards |

未通过 Gate 时，不应直接进入 T12 最终审核，而应先回到 T11.5 迭代视觉原型。
