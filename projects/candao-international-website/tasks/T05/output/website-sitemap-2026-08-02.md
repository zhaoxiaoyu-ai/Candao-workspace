# Website Sitemap

任务：T05 官网 Sitemap 和页面规划  
项目：餐道国际官网重构  
输出语言：简体中文 + 英文页面名称  
生成时间：2026-08-02  

## 1. 执行边界

本文件基于官网策略、原始菜单目录和 T04《Website Information Architecture》生成，用于冻结 Candao 国际官网正式 Sitemap 和页面清单。

T05 不重新判断官网定位，不重新创造 IA，不生成最终官网 Copy。

## 2. 输入来源

| 输入 | 用途 |
| --- | --- |
| T01《Candao International Website Input Document》 | 原始菜单目录、菜单缺口和术语规范 |
| T03《Candao International Website Strategy V1.0》 | 冻结导航策略、首页逻辑、页面规划方向 |
| T04《Website Information Architecture》 | 页面结构、页面关系、用户路径、T05 Sitemap 输入 |

## 3. Sitemap 总体结构

推荐一级导航：

```text
Home
Solutions
Platform
Integrations
Customers
Resources
About
Contact / Book a Demo
```

结构说明：

- `Home` 是品牌认知和转化入口。
- `Solutions` 讲客户场景和经营问题。
- `Platform` 讲产品能力和模块边界。
- `Integrations` 讲生态连接和技术可信。
- `Customers` 承接案例和采购信任，第一阶段采用结构预留和授权案例策略。
- `Resources` 第一阶段保持低承诺，优先 FAQ 和 Support。
- `About` 承接公司可信度、安全服务能力和签约疑虑。
- `Contact / Book a Demo` 是全站转化闭环。

## 4. 状态定义

| 状态 | 说明 |
| --- | --- |
| 必做 | 第一阶段建议实际建设，支撑品牌、产品理解、集成可信或转化 |
| 结构预留 | 第一阶段保留页面或模块结构，但正式内容依赖授权、数据或业务确认 |
| 待确认 | 是否发布、内容深度或合规条件需要业务确认 |
| Phase 2 | 后续扩展页面，不建议第一阶段投入完整内容和设计资源 |

## 5. 正式 Sitemap

| 页面名称 | 英文名称 | URL | 层级 | 页面目标 | 目标用户 | 主要内容 | CTA | Phase | 状态 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 首页 | Home | `/` | 一级 | 建立品牌认知并推动 Demo | 所有访客、连锁餐饮集团、经营者、采购与管理层 | Hero、Problem Switcher、Capability Overview、Trust Bar、Solutions Preview、Integrations Snapshot、Case Highlight、Final CTA | Book a Demo | Phase 1 | 必做 |
| 解决方案 | Solutions | `/solutions` | 一级 | 按客户场景解释 Candao 如何解决餐饮运营问题 | 连锁餐饮集团、餐饮经营者、营运负责人 | 场景入口、用户问题、解决路径、关联 Platform 能力、证明材料占位 | Talk to Sales | Phase 1 | 必做 |
| 连锁餐饮解决方案 | Restaurant Chains | `/solutions/restaurant-chains` | 二级 | 说明连锁餐饮多门店、多渠道、多系统运营价值 | 连锁品牌总部、区域管理层、采购与管理层 | 总部运营问题、跨门店订单、菜单管理、数据可视、案例占位 | Book a Demo | Phase 1 | 必做 |
| 多门店运营 | Multi-store Operations | `/solutions/multi-store-operations` | 二级 | 说明总部和门店如何统一管理 | 营运负责人、区域经理、门店管理者 | 门店信息同步、菜单维护、库存与状态、异常监控、总部视图 | Talk to Sales | Phase 1 | 必做 |
| 配送运营 | Delivery Operations | `/solutions/delivery-operations` | 二级 | 说明自有配送与第三方配送如何协同 | 外卖运营负责人、配送负责人、区域运营团队 | 聚合配送、自有骑手管理、智能派单、配送追踪、异常处理 | Book a Demo | Phase 1 | 必做 |
| 数字点餐 | Digital Ordering | `/solutions/digital-ordering` | 二级 | 说明自有点餐入口和会员增长路径 | 品牌运营、门店管理者、增长团队 | QR Code Ordering、自营外卖、会员权益、营销活动、支付与订单流转 | Talk to Sales | Phase 1 | 必做 |
| 数据化运营 | Data-driven Operations | `/solutions/data-driven-operations` | 二级 | 说明数据分析和财务对账如何支撑经营决策 | 总部管理层、财务团队、运营分析团队 | Operations Dashboard、跨渠道数据分析、财务对账、定制报表 | Book a Demo | Phase 1 | 必做 |
| 零售运营 | Retail Operations | `/solutions/retail-operations` | 二级 | 作为餐饮零售混合业态扩展方向 | 零售或餐饮零售混合业态客户 | 零售场景、POS 对接、线上订单、库存和门店管理 | Contact Sales | Phase 2 | Phase 2 |
| 平台能力 | Platform | `/platform` | 一级 | 解释 Candao 平台能力结构 | 运营团队、技术评估团队、采购与管理层 | 平台能力总览、能力地图、典型流程、产品 UI 方向、相关集成 | Book a Demo | Phase 1 | 必做 |
| 平台总览 | Platform Overview | `/platform/overview` | 二级 | 展示 Candao 是统一运营平台而非单点工具 | 所有需要理解产品能力的访客 | 平台能力地图、业务流程、能力与场景映射、关键 UI Demo | Book a Demo | Phase 1 | 必做 |
| 订单管理 | Order Management | `/platform/order-management` | 二级 | 展示多渠道订单集中处理和异常可见能力 | 门店运营、总部运营、技术评估团队 | Business Problem、订单流转、异常监控、POS 连接、业务结果 | Book a Demo | Phase 1 | 必做 |
| 菜单与门店管理 | Menu and Store Management | `/platform/menu-store-management` | 二级 | 展示菜单、门店和库存信息统一维护能力 | 营运团队、菜单管理团队、门店管理者 | 菜单同步、门店资料、库存状态、平台信息同步、UI Demo | Book a Demo | Phase 1 | 必做 |
| 配送管理 | Delivery Management | `/platform/delivery-management` | 二级 | 展示聚合配送和自有骑手管理能力 | 外卖运营、配送团队、技术评估团队 | Aggregated Delivery、Smart Dispatch、Rider App、实时配送追踪、异常处理 | Book a Demo | Phase 1 | 必做 |
| 自有点餐 | First-party Ordering | `/platform/first-party-ordering` | 二级 | 展示品牌自有点餐和会员营销能力 | 品牌运营、增长团队、门店管理者 | QR Code Ordering、Branded Online Ordering、会员与营销、支付连接 | Talk to Sales | Phase 1 | 必做 |
| 数据智能 | Data Intelligence | `/platform/data-intelligence` | 二级 | 展示经营看板、报表和财务对账能力 | 管理层、财务团队、运营分析团队 | Operations Dashboard、Cross-channel Data Analytics、Financial Reconciliation、Custom Reports | Book a Demo | Phase 1 | 必做 |
| 集成生态 | Integrations | `/integrations` | 一级 | 展示 Candao 可连接客户现有餐饮技术生态 | 企业技术团队、技术合作伙伴、采购评估人员 | 集成类别、连接场景、数据流说明、状态标签预留、合作入口 | Request Integration | Phase 1 | 必做 |
| 外卖平台集成 | Delivery Platforms | `/integrations/delivery-platforms` | 二级 | 展示外卖平台订单接入和菜单同步类别 | 餐饮企业、外卖运营团队、技术评估团队 | 平台类别、订单流、菜单同步、状态标签占位 | Request Integration | Phase 1 | 结构预留 |
| POS 集成 | POS Integrations | `/integrations/pos` | 二级 | 展示 POS 与订单、库存、财务数据的连接能力 | 技术评估团队、门店系统团队、采购人员 | POS 对接场景、订单数据流、库存连接、财务对账入口 | Request Integration | Phase 1 | 结构预留 |
| 支付网关 | Payment Gateways | `/integrations/payment-gateways` | 二级 | 展示支付和对账连接位置 | 技术团队、财务团队、采购人员 | 支付类别、订单支付状态、财务对账、状态标签占位 | Request Integration | Phase 1 | 结构预留 |
| CRM 与会员 | CRM and Loyalty | `/integrations/crm-loyalty` | 二级 | 展示会员和营销系统连接能力 | 品牌运营、会员团队、技术团队 | CRM / Loyalty 分类、自有点餐、会员权益、营销活动连接 | Request Integration | Phase 1 | 结构预留 |
| 第三方物流 | Third-party Logistics | `/integrations/third-party-logistics` | 二级 | 展示第三方配送资源如何接入配送调度 | 配送负责人、技术伙伴、外卖运营团队 | 3PL 分类、Dispatch、费用记录、交易记录、状态标签占位 | Request Integration | Phase 1 | 结构预留 |
| API 连接 | API Connectivity | `/integrations/api` | 二级 | 作为 API 能力公开入口 | 技术伙伴、企业技术团队 | API 能力概述、合作流程、数据边界占位 | Request Integration | Phase 2 | Phase 2 |
| 请求集成 | Request Integration | `/integrations/request` | 转化页面 | 收集集成咨询和合作需求 | 技术合作伙伴、企业客户、系统供应商 | 表单分流、系统类别、合作类型、地区、联系信息 | Submit Integration Request | Phase 1 | 必做 |
| 客户案例 | Customers / Case Studies | `/customers` | 一级 | 建立采购信任 | 采购与管理层、连锁餐饮集团、经营者 | Customer Overview、案例分类、行业标签、结果结构占位、Authorized Case 区域 | Contact Sales | Phase 1 | 结构预留 |
| 案例总览 | Case Studies Overview | `/customers/case-studies` | 二级 | 展示案例分类和案例模板 | 采购与管理层、内容团队、销售团队 | 案例类别、行业标签、使用能力、结果指标占位、CTA | Book a Demo | Phase 1 | 结构预留 |
| 客户故事模板 | Customer Story Template | `/customers/story-template` | 模板页面 | 为授权案例提供统一页面结构 | 内容团队、设计团队、销售团队 | 背景、挑战、解决方式、使用能力、结果、CTA | Contact Sales | Phase 1 | 结构预留 |
| 连锁集团案例 | Restaurant Group Cases | `/customers/restaurant-groups` | 二级 | 授权后展示连锁集团案例 | 连锁餐饮集团、采购与管理层 | 多门店、多品牌、多渠道运营案例、授权内容 | Contact Sales | Phase 2 | Phase 2 |
| 配送运营案例 | Delivery Operations Cases | `/customers/delivery-operations` | 二级 | 授权后展示配送管理案例 | 外卖运营负责人、配送负责人 | 配送挑战、调度方案、履约改善结果、授权内容 | Book a Demo | Phase 2 | Phase 2 |
| 资源与支持 | Resources | `/resources` | 一级 | 承接 FAQ、Support 和低承诺内容 | 采购评估人员、实施团队、现有客户、内容访客 | FAQ、Support、Guides 模板、Press 模板 | Contact Support | Phase 1 | 必做 |
| 常见问题 | FAQ | `/resources/faq` | 二级 | 降低采购、实施、集成和服务疑虑 | 采购、运营、技术评估、实施团队 | 产品范围、实施流程、集成问题、安全问题、支持问题、Demo 问题 | Book a Demo | Phase 1 | 必做 |
| 支持 | Support | `/resources/support` | 二级 | 提供支持入口和服务说明 | 现有客户、实施团队、运营团队 | Support Enquiry、服务时间占位、问题分类、联系入口 | Support Enquiry | Phase 1 | 必做 |
| 指南 | Guides | `/resources/guides` | 二级 | 用于后续内容运营和市场教育 | 内容访客、潜在客户、运营团队 | 餐饮运营指南、集成指南、配送管理指南 | Book a Demo | Phase 2 | Phase 2 |
| 新闻 | Press | `/resources/press` | 二级 | 承接新闻和公司动态 | 媒体、合作伙伴、招聘访客 | Press release、媒体联系、品牌资料 | Contact | Phase 2 | Phase 2 |
| 关于 Candao | About | `/about` | 一级 | 建立公司可信度 | 采购与管理层、合作伙伴、招聘访客 | 公司介绍、服务经验、办公与服务网络占位、安全与服务能力、CTA | Contact Sales | Phase 1 | 必做 |
| 关于我们 | About Us | `/about/company` | 二级 | 说明 Candao 公司背景和餐饮 SaaS 经验 | 采购、管理层、合作伙伴 | 公司介绍、服务范围、团队能力、办公地点占位 | Contact Sales | Phase 1 | 必做 |
| 发展里程碑 | Milestones | `/about/milestones` | 二级 | 展示长期经营与交付能力 | 采购、合作伙伴、招聘访客 | 成立年份、关键发展节点、区域拓展占位 | Contact Sales | Phase 2 | Phase 2 |
| 安全与服务能力 | Security and Service Capability | `/about/security-service` | 二级 | 承接安全、认证、服务管理和可靠性疑虑 | 采购、技术评估、合规评估 | ISO 认证占位、服务流程、SLA 占位、数据安全说明 | Contact Sales | Phase 1 | 结构预留 |
| 招聘 | Careers | `/about/careers` | 二级 | 作为后续公司品牌和招聘入口 | 招聘访客 | 职位入口、团队介绍、联系方式 | Contact | Phase 2 | Phase 2 |
| 联系与预约演示 | Contact / Book a Demo | `/contact` | 一级 | 承接全站咨询和转化分流 | 潜在客户、采购人员、技术合作伙伴、现有客户 | 表单分流、咨询类型、公司信息、联系方式、响应说明占位、隐私提示 | Submit Enquiry | Phase 1 | 必做 |
| 预约演示 | Book a Demo | `/book-a-demo` | 转化页面 | 收集 Demo 线索 | 潜在客户、采购人员、餐饮经营者 | 公司、地区、门店规模占位、需求类型、产品兴趣、联系方式 | Submit Demo Request | Phase 1 | 必做 |
| 联系销售 | Contact Sales | `/contact/sales` | 转化页面 | 承接复杂采购和报价咨询 | 企业客户、采购与管理层 | 销售咨询表单、市场区域、产品兴趣、联系信息 | Contact Sales | Phase 1 | 必做 |
| 合作伙伴咨询 | Partner Enquiry | `/contact/partners` | 转化页面 | 承接合作伙伴和生态接入需求 | POS、支付、配送、CRM、技术伙伴 | 合作类型、系统类别、合作地区、联系信息 | Submit Partner Enquiry | Phase 1 | 必做 |
| 支持咨询 | Support Enquiry | `/contact/support` | 转化页面 | 分流现有客户支持问题 | 现有客户、实施团队、运营团队 | 问题类别、客户信息、联系方式、Support 入口 | Submit Support Enquiry | Phase 1 | 必做 |
| 隐私政策 | Privacy Policy | `/privacy-policy` | 页脚页面 | 承接隐私和数据收集说明 | 所有访客、采购、法务 | 隐私条款、数据收集、联系方式、合规说明 | Contact | Phase 1 | 必做 |
| 使用条款 | Terms of Use | `/terms-of-use` | 页脚页面 | 承接网站使用条款 | 所有访客、采购、法务 | 网站使用规则、责任限制、法律条款 | Contact | Phase 1 | 必做 |
| Cookie 政策 | Cookie Policy | `/cookie-policy` | 页脚页面 | 承接 Cookie 和追踪说明 | 所有访客、法务、合规评估 | Cookie 类型、追踪说明、偏好设置占位 | Contact | Phase 1 | 待确认 |
| 数据处理附录 | Data Processing Addendum | `/data-processing-addendum` | 页脚页面 | 承接数据处理和合规补充 | 企业客户、法务、技术评估 | 数据处理角色、存储地区、DPA 占位 | Contact Sales | Phase 2 | 待确认 |

## 6. Header 规划

推荐 Header：

| 位置 | 导航项 | 英文名称 | URL | 说明 |
| --- | --- | --- | --- | --- |
| 左侧 | Logo | Candao | `/` | 返回首页 |
| 主导航 | 首页 | Home | `/` | 可在国际官网中只保留 Logo 返回，不一定显示 Home 文本 |
| 主导航 | 解决方案 | Solutions | `/solutions` | 业务场景入口 |
| 主导航 | 平台能力 | Platform | `/platform` | 产品能力入口 |
| 主导航 | 集成生态 | Integrations | `/integrations` | 技术可信入口 |
| 主导航 | 客户案例 | Customers | `/customers` | 信任入口，第一阶段弱展示 |
| 可选导航 / Footer 优先 | 资源与支持 | Resources | `/resources` | FAQ 和 Support。若第一阶段内容不足，Header 可不展示 |
| 主导航 | 关于 Candao | About | `/about` | 公司可信入口 |
| 主 CTA | 预约演示 | Book a Demo | `/book-a-demo` | 全站主转化 |

移动端优先级：

```text
Solutions
Platform
Integrations
Book a Demo
```

## 7. Footer 规划

| 分组 | 链接 |
| --- | --- |
| Solutions | Restaurant Chains、Multi-store Operations、Delivery Operations、Digital Ordering、Data-driven Operations |
| Platform | Platform Overview、Order Management、Menu and Store Management、Delivery Management、First-party Ordering、Data Intelligence |
| Integrations | Delivery Platforms、POS Integrations、Payment Gateways、CRM and Loyalty、Third-party Logistics、Request Integration |
| Customers | Case Studies Overview、Customer Story Template |
| Resources | FAQ、Support、Guides、Press |
| Company | About Us、Security and Service Capability、Contact Sales |
| Legal | Privacy Policy、Terms of Use、Cookie Policy、Data Processing Addendum |

## 8. 页面关系

```text
Home
→ Solutions
→ Platform
→ Integrations
→ Customers
→ Contact / Book a Demo
```

关系说明：

| 来源页面 | 推荐下一步 | 目的 |
| --- | --- | --- |
| Home | Solutions / Platform / Book a Demo | 从品牌认知进入场景、能力或转化 |
| Solutions | Platform / Customers / Contact Sales | 从业务问题进入产品能力、信任和咨询 |
| Platform | Integrations / Book a Demo | 从产品理解进入技术可信或转化 |
| Integrations | Request Integration / Partner Enquiry | 从技术可信进入集成咨询或合作 |
| Customers | Book a Demo / Contact Sales | 从信任证明进入销售线索 |
| Resources | Support Enquiry / Book a Demo | 从疑虑解答进入支持或转化 |
| About | Contact Sales / Customers | 从公司可信进入销售咨询或案例验证 |

## 9. 页面状态重点

### 9.1 第一阶段必须建设

第一阶段必须建设的页面包括：

- Home；
- Solutions 及核心场景页；
- Platform 及核心产品能力页；
- Integrations 总页及核心类别页；
- Contact / Book a Demo 及表单分流页；
- FAQ、Support；
- About Us；
- Privacy Policy、Terms of Use。

### 9.2 第一阶段结构预留

第一阶段应保留结构但谨慎填充内容：

- Customers / Case Studies；
- Customer Story Template；
- Security and Service Capability；
- 各类具体 Integrations 页面；
- 客户 Logo、案例数据、认证、集成状态。

### 9.3 Phase 2 扩展

后续扩展页面包括：

- Retail Operations；
- API Connectivity；
- Restaurant Group Cases；
- Delivery Operations Cases；
- Guides；
- Press；
- Milestones；
- Careers；
- Data Processing Addendum；
- Market Pages。

## 10. 对 T06 内容 Agent 的输入

T06 可以直接使用第 5 节表格作为页面 Copy 生成清单。

执行提醒：

- T06/T07 官网实际展示文案必须输出繁体中文 + 英文。
- 不得输出简体中文正式网页文案。
- 每个页面 Copy 必须继承本 Sitemap 的页面目标、主要内容和 CTA。
- 未确认客户 Logo、客户案例、规模数字、认证、集成状态和 Pricing 不得写成正式事实。
- T06 不应为所有页面生成同等深度内容，应按第 12-15 节的页面优先级、模板类型和第一阶段建设范围控制输出深度。

## 11. T05 v1.1 增补说明

本节根据 T05 审查意见补充，目的是控制后续 T06 Copy、T08 UX 和 T10 视觉设计的页面数量与内容深度。

T05 v1.1 不改变第 5 节的完整 Sitemap 清单，但新增：

- 页面优先级矩阵；
- 页面独立标准；
- Integrations 第一阶段收敛策略；
- Customers 第一阶段展示策略；
- Page Template 类型；
- 第一阶段实际建设范围；
- T06 内容深度控制规则。

## 12. 页面优先级矩阵

### 12.1 Design Priority

| 页面 | 英文名称 | 优先级 | 执行深度 | 说明 |
| --- | --- | --- | --- | --- |
| 首页 | Home | P0 | 深度设计 + 深度 Copy | 第一印象、品牌定位、业务问题和 Demo 转化入口 |
| 解决方案总览 | Solutions Overview | P0 | 深度设计 + 中深度 Copy | 承接客户场景入口，必须避免产品说明书化 |
| 连锁餐饮解决方案 | Restaurant Chains | P0 | 深度设计 + 深度 Copy | 第一阶段最能代表目标客户的 Solution 页面 |
| 平台总览 | Platform Overview | P0 | 深度设计 + 深度 Copy | 解释 Candao 是统一运营平台，不是单点工具 |
| 订单管理 | Order Management | P0 | 深度设计 + 深度 Copy | 最核心产品能力之一，承接多渠道订单问题 |
| 配送管理 | Delivery Management | P0 | 深度设计 + 深度 Copy | 国际餐饮运营强相关，承接配送和履约复杂度 |
| 集成总览 | Integrations Overview | P0 | 中深度设计 + 中深度 Copy | 证明能连接客户现有生态 |
| 客户案例总览 | Customers Overview | P0 | 模板设计 + 谨慎 Copy | 使用模板和授权案例策略，不填未确认内容 |
| 联系与预约演示 | Contact / Book a Demo | P0 | 深度 UX + 中深度 Copy | 全站转化闭环，必须低摩擦 |
| 菜单与门店管理 | Menu and Store Management | P1 | 内容规划 + 基础页面 | 可作为 Platform 下独立页，也可先做模块 |
| 自有点餐 | First-party Ordering | P1 | 内容规划 + 基础页面 | 与 Digital Ordering 关联，避免重复 |
| 数据智能 | Data Intelligence | P1 | 内容规划 + 基础页面 | 有价值，但第一阶段不宜写成报表清单 |
| 多门店运营 | Multi-store Operations | P1 | 内容规划 + 基础页面 | 可与 Restaurant Chains 互相承接 |
| 数字点餐 | Digital Ordering | P1 | 内容规划 + 基础页面 | 可先作为 Solutions 模块，后续独立深化 |
| FAQ | FAQ | P1 | 基础内容 | 降低采购、集成和实施疑虑 |
| 关于我们 | About Us | P1 | 基础内容 | 建立公司可信度，不需要过度视觉化 |
| 安全与服务能力 | Security and Service Capability | P1 | 结构预留 + 待确认内容 | 认证、SLA、数据安全需业务确认 |
| 支持 | Support | P1 | 基础内容 | 承接现有客户和实施支持入口 |
| 具体 Integrations 分类页 | Delivery Platforms / POS / Payment / CRM / Third-party Logistics | P1 / 结构预留 | 分类模块优先，独立页延后 | 第一阶段避免多个空集成页面 |
| Guides / Press / Careers / API / Market Pages | Guides / Press / Careers / API / Market Pages | Phase 2 | 暂不生成完整 Copy | 依赖内容运营、公开策略或市场排序 |

### 12.2 优先级含义

| 优先级 | 含义 | T06 Copy 深度 | T08 UX 深度 | T10 视觉深度 |
| --- | --- | --- | --- | --- |
| P0 | 第一阶段核心页面 | 完整页面内容框架 + 关键 Section 双语 Copy | 需要完整页面结构和关键交互 | 需要重点视觉和 UI 动效 |
| P1 | 第一阶段辅助页面 | 页面框架 + 核心 Section 双语 Copy，不展开过多细节 | 基础布局和信息组织 | 基础视觉系统即可 |
| 结构预留 | 等待授权或确认 | 只写页面用途、模块占位和谨慎占位文案 | 模板和状态处理 | 不投入复杂视觉 |
| Phase 2 | 后续扩展页面 | 不生成完整正式 Copy，只保留方向 | 暂不展开 UX | 暂不投入视觉资源 |

## 13. 页面独立标准

页面是否需要独立，应满足以下判断。若不满足，应先作为 Overview 页面中的模块处理。

| 判断项 | 独立页面条件 | 不独立时处理 |
| --- | --- | --- |
| 独立用户 | 有明确不同的主要访问者或决策角色 | 放入上级页面模块 |
| 独立场景 | 用户问题和业务流程与其他页面明显不同 | 合并到相关 Solution 或 Platform 页面 |
| 独立价值 | 能表达清楚的业务结果和转化理由 | 作为能力卡片或 Section |
| 内容充足 | 有足够的场景、流程、UI、证明材料和 CTA | 先做结构预留 |
| 转化价值 | 能独立推动 Demo、Sales 或 Integration 咨询 | 用内部链接承接到主转化页 |

### 13.1 Platform 页面收敛规则

`Platform` 第一阶段应优先深做：

- Platform Overview；
- Order Management；
- Delivery Management。

以下页面第一阶段可先做为独立页面或 Platform Overview 内模块，最终取决于内容深度：

- Menu and Store Management；
- First-party Ordering；
- Data Intelligence。

执行建议：

- 如果 T06 缺少足够内容，不要强行把每个 Platform 能力页写满。
- P1 产品页可以只输出 Hero、Business Problem、Core Capability、CTA。
- 产品页必须遵守：`Business Problem → Solution → Product Capability → UI Demo → Business Outcome → CTA`。

## 14. Integrations 第一阶段收敛策略

当前 Sitemap 保留多个 Integrations 分类页，但第一阶段不建议把每个分类页都做成完整独立页面。

### 14.1 第一阶段建议

第一阶段建议实际建设：

```text
Integrations Overview
→ Category Overview
→ Request Integration
```

说明：

- `Integrations Overview` 讲整体连接能力。
- `Category Overview` 以模块形式展示 Delivery Platforms、POS、Payment Gateways、CRM and Loyalty、Third-party Logistics。
- `Request Integration` 承接咨询和合作机会。

### 14.2 暂不深做的页面

以下页面第一阶段保留 URL 和结构，但不建议生成完整页面级 Copy：

- Delivery Platforms；
- POS Integrations；
- Payment Gateways；
- CRM and Loyalty；
- Third-party Logistics；
- API Connectivity。

处理方式：

- 若业务确认有充足内容和可公开合作状态，可升级为独立页面。
- 若未确认，则在 `Integrations Overview` 中作为分类模块展示。
- T06 不得写具体平台 Logo、合作状态或数量。

## 15. Customers 第一阶段展示策略

Customers 第一阶段不是删除案例，而是采用“首页客户证明 + 案例模板 + 授权案例”的谨慎策略。

### 15.1 首页处理

Home 应保留 `Customer Proof Module`：

```text
Trust Bar
→ Customer Proof Module
→ Case Highlight
```

处理规则：

- 若客户 Logo 和案例授权已确认，可展示具体客户。
- 若未确认，只保留模块结构和行业场景，不写客户名称、Logo、结果数据和推荐语。
- 不使用冲突或未确认的规模数字作为首页信任大字。

### 15.2 Customers 页面处理

第一阶段 Customers 建议结构：

```text
Customer Overview
→ Story Template
→ Authorized Case
→ CTA
```

执行说明：

- `Customer Overview` 可以说明案例分类方式和服务行业，不写未授权客户事实。
- `Story Template` 为后续授权案例保留统一结构。
- `Authorized Case` 只在资料确认后填充。
- Phase 2 再扩展为完整 Customer Stories。

## 16. Page Template 类型

### 16.1 Landing Page Template

适用页面：

- Home；
- Solutions Overview；
- Platform Overview。

结构：

```text
Hero
Problem
Solution
Capability / Feature
Proof
CTA
```

执行重点：

- 先讲业务问题和结果，再讲平台能力。
- Home 需要更强视觉和转化引导。
- Overview 页面负责分流，不承载所有细节。

### 16.2 Solution Page Template

适用页面：

- Restaurant Chains；
- Multi-store Operations；
- Delivery Operations；
- Digital Ordering；
- Data-driven Operations。

结构：

```text
Hero
Scenario Problem
Operational Challenge
Candao Approach
Related Platform Capabilities
Proof Placeholder
CTA
```

执行重点：

- 以用户场景开头，不以产品名开头。
- 每个 Solution 页面必须连接到相关 Platform 能力。

### 16.3 Platform Page Template

适用页面：

- Order Management；
- Menu and Store Management；
- Delivery Management；
- First-party Ordering；
- Data Intelligence。

结构：

```text
Business Problem
Solution
Product Capability
UI Demo
Business Outcome
CTA
```

执行重点：

- 避免 OMS、DMS、COMS 作为第一层表达。
- UI Demo 应服务理解，不堆截图。

### 16.4 Integration Page Template

适用页面：

- Integrations Overview；
- 集成分类模块；
- Request Integration。

结构：

```text
Category Overview
Connection Flow
Supported System Types
Status Placeholder
Request Integration CTA
```

执行重点：

- 第一阶段优先做分类总览。
- 具体平台和合作状态必须确认后才能公开。

### 16.5 Case Study Template

适用页面：

- Customers Overview；
- Customer Story Template；
- Authorized Case。

结构：

```text
Challenge
Solution
Implementation
Capabilities Used
Result
CTA
```

执行重点：

- 未授权案例只保留模板，不写具体客户事实。
- 结果数据必须经过确认。

### 16.6 Contact Template

适用页面：

- Contact / Book a Demo；
- Book a Demo；
- Contact Sales；
- Partner Enquiry；
- Support Enquiry。

结构：

```text
Intent Selection
Form Fields
Trust Note
Response Expectation Placeholder
Privacy Note
Submit CTA
```

执行重点：

- 表单必须分流 Demo、Sales、Partner、Support。
- 响应时间、销售接收人和联系方式仍需确认。

## 17. 第一阶段实际建设范围

### 17.1 P0 核心页面

必须深度设计和重点生成内容：

| 页面 | 英文名称 | 目标 |
| --- | --- | --- |
| 首页 | Home | 建立品牌认知并推动 Demo |
| 解决方案总览 | Solutions Overview | 按场景组织用户问题 |
| 连锁餐饮解决方案 | Restaurant Chains | 服务最核心目标客户 |
| 平台总览 | Platform Overview | 建立统一平台认知 |
| 订单管理 | Order Management | 解释多渠道订单集中管理 |
| 配送管理 | Delivery Management | 解释配送调度和履约管理 |
| 集成总览 | Integrations Overview | 建立技术可信 |
| 客户案例总览 | Customers Overview | 建立案例模板和授权案例位置 |
| 联系与预约演示 | Contact / Book a Demo | 完成线索转化 |

### 17.2 P1 页面

第一阶段可以生成基础内容，但不投入过深视觉和长篇 Copy：

- Menu and Store Management；
- First-party Ordering；
- Data Intelligence；
- Multi-store Operations；
- Digital Ordering；
- FAQ；
- Support；
- About Us；
- Security and Service Capability。

### 17.3 Phase 2 页面

暂不生成完整官网 Copy，只保留 Sitemap、模板或页面方向：

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

## 18. T06 内容深度控制规则

T06 的最大风险不是文案质量，而是页面数量过多导致内容重复和价值稀释。因此 T06 必须按页面等级生成不同深度。

| 页面等级 | T06 输出深度 | 必须输出 | 不应输出 |
| --- | --- | --- | --- |
| P0 | 完整页面内容框架 + 关键 Section 双语 Copy | Page、Section、策略说明、繁體中文、English、CTA | 未确认客户事实、未确认数字 |
| P1 | 简化页面框架 + 核心 Section 双语 Copy | Hero / Problem / Capability / CTA | 过多长段功能说明 |
| 结构预留 | 页面用途 + 模块占位 + 谨慎占位 Copy | Internal Note、Placeholder、CTA | 具体客户、Logo、集成状态、认证事实 |
| Phase 2 | 只输出页面方向和未来内容要求 | 页面目标、未来内容类型、待确认项 | 完整正式 Copy |

执行要求：

- 不要为每个 Sitemap 页面填满相同数量的 Section。
- 不要为了页面完整而制造重复文案。
- 不要把 P1 或 Phase 2 页面写得比 P0 页面更重。
- Copy 必须继承 T03 的品牌语气：专业、务实、可信、国际化。
- 官网实际展示文案必须始终输出繁体中文 + 英文。

## 19. T05 结论

本 Sitemap 将 Candao 国际官网页面结构冻结为：

```text
Home
Solutions
Platform
Integrations
Customers
Resources
About
Contact / Book a Demo
Footer Legal
```

该结构已经覆盖用户从进入官网到提交咨询的主要路径：

```text
进入官网
→ 理解品牌
→ 了解解决方案
→ 理解平台能力
→ 建立集成和案例信任
→ 提交 Demo / Sales / Partner / Support 咨询
```

下一步 T06 应基于本 Sitemap 生成《Website Copy Document》。
