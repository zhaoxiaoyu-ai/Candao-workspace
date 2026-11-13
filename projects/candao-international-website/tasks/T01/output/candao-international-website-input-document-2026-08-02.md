# Candao International Website Input Document

任务：T01 资料整理  
项目：餐道国际官网重构  
版本：v1.1  
输出语言：简体中文  
生成时间：2026-08-02  
修订说明：v1.1 在原始资料整理基础上，新增“竞品启发与可应用规则”“官网表达资产整理”“产品能力到解决方案映射”“首页素材池”和“后续 Agent 语言规则”，用于减少后续 Agent 输出偏说明书的问题。

## 1. 资料来源

| 类型 | 来源 | 本次使用方式 |
| --- | --- | --- |
| 参考网站清单 | `/Users/victorwong/Downloads/website20250424.xlsx`，工作表 1 | 提取 3 个参考网站，并核验其公开官网内容 |
| 新官网菜单目录 | `/Users/victorwong/Downloads/website20250424.xlsx`，工作表 2 | 提取一级导航、二级页面、三级页面和页面关系 |
| 企业及产品资料 | `/Users/victorwong/Downloads/Candao Introduction 202401_L.pptx` | 抽取企业介绍、产品体系、解决方案、客户案例、数据证明 |
| 官网待确认清单 | `/Users/victorwong/Downloads/香港及国际官网待确认清单.md` | 整理已确认边界、待补充内容和页面风险 |
| 公开参考网站 | `https://www.aigens.com/`、`https://www.deliverect.com/en`、`https://tabsquare.ai/` | 用于分析品牌定位、首页结构、内容层级、产品展示、视觉媒体和交互方式 |

## 2. T02 可直接使用的输入摘要

- Candao 国际官网应优先围绕“餐饮企业多渠道订单、菜单、配送、数据与集成的一体化运营平台”建立认知。
- 当前可用的企业背书包括：2014 年成立、总部广州、香港/北京/上海等办公室或分支、成都运营中心、餐饮系统和外卖业务经验、服务连锁品牌、覆盖城市和门店数据、ISO 27001 与 ISO 20000。
- 当前产品资料可归纳为 5 条主线：OMS/COMS 订单与内容管理、移动/二维码/自营点餐、配送聚合、DMS 自有骑手配送管理、数据资产与报表/财务中心。
- Excel 第二张表给出的导航初稿是：Solutions、Integrations、Resources、About 四大类，缺少 Home、Products、Customers/Case Studies、Pricing/Contact 等是否进入主导航的明确判断。
- 待确认清单中除“网站定位、域名结构、访问规则、跳转原则、语言结构、CanDao 与 51WM Company Ltd 关系”被标注为已排除/已确认外，其余关键业务资料基本都是未确认状态。
- PPT 内存在若干关键数据口径冲突，后续生成官网对外文案前必须确认，尤其是品牌数、门店数、每日订单数和客户案例授权。
- v1.1 增补判断：后续官网不应直接按 PPT 产品章节组织内容，应优先按客户问题、业务结果、可信证明和转化路径组织表达。
- v1.1 增补判断：首页应承担“品牌定位 + 经营结果 + 可信证明 + 转化入口”的宣传作用，而不是把所有产品能力一次性展开成说明书。

## 3. 参考网站资料整理

Excel 工作表 1 提供的三个参考网站：

| 序号 | 网站 | 官网定位简述 |
| --- | --- | --- |
| 1 | Aigens | 餐饮与酒店行业的企业级点餐、支付、会员与集成方案提供商 |
| 2 | Deliverect | 面向餐厅与零售的全渠道数字点餐、订单、配送与集成平台 |
| 3 | TabSquare | 以 AI 和用餐旅程为核心的餐厅数字体验与自助点餐平台 |

### 3.1 Aigens

来源：`https://www.aigens.com/`

#### 品牌定位

- 定位为面向大型餐饮与酒店场景的企业级 Restaurant Ordering、Loyalty、Payment 解决方案提供商。
- 强调“Enterprise grade solutions”，覆盖大型 F&B 运营所需的移动点餐、自助 Kiosk、支付、会员、集成与定制开发。
- 核心可信背书包括：7,000+ stores、US$4B transactions、99.9% SLA、Since 2012、PCI-DSS、ISO 27001、ISO 27701。

#### 首页结构

1. 语言入口与 Book A Demo。
2. Enterprise grade solutions 总定位。
3. 产品模块：Mobile Ordering、Kiosk Ordering、Payment Solutions、Loyalty、Integrations、Custom Development。
4. 客户 Logo 墙：Burger King、Cafe de Coral、Pizza Hut、KFC、IKEA、Hyatt、Jollibee、HKU 等。
5. 安全、支持、可靠性模块：Security & Data Privacy、Support、Reliability。
6. KPI 模块：门店数、交易额、SLA、成立时间。
7. Integrations 模块：Open API、POS、Payment Gateway、Legacy/In-house system、Analytics、CRM/ERP/Membership。
8. FAQ。
9. Ready to Elevate Your Operations CTA。

#### 页面信息层级

- 先讲“企业级解决方案”而不是单一产品。
- 中段用客户 Logo 和安全资质建立信任。
- 后段用 KPI、集成范围和 FAQ 降低采购疑虑。
- 页面整体从品牌定位进入产品矩阵，再进入信任证明和销售转化。

#### 产品展示方式

- 产品以卡片式模块呈现，每个模块有短说明和 Read More。
- 集成能力独立成区，用 icon/标签展示 Open API、POS、Payment、CRM、ERP 等类别。
- 客户案例主要以 Logo 墙呈现，不在首页展开长案例故事。

#### 图片/视频应用

- 重点使用客户 Logo、产品/集成图形、认证和 KPI 图形。
- 本次抓取的文本结构未显示强视频叙事，整体偏企业 SaaS 信息展示。

#### 页面交互方式

- Book A Demo CTA。
- 语言切换。
- 产品模块 Read More。
- FAQ 展开式信息承接。
- 页脚产品和资源导航。

### 3.2 Deliverect

来源：`https://www.deliverect.com/en`

#### 品牌定位

- 定位为面向餐厅与零售的 Omnichannel digital ordering solutions。
- 强调 API-first、agentic platform、从 first-party digital experience 到 third-party platform optimization 的端到端数字运营。
- 公开背书包括：1,000+ integrations、1.5B+ orders processed、80K locations served、65+ countries available。

#### 首页结构

1. 国家/语言选择。
2. Mega Menu：Solutions、Integrations、Pricing、Resources、Company。
3. Hero：Omnichannel digital ordering solutions built to scale。
4. 1,000+ integrations out-of-the-box。
5. 全球客户 Logo：KFC、Burger King、Taco Bell、Chipotle、Ben & Jerry's、Popeyes、Pizza Hut 等。
6. Outcome 模块一：Operations made easy，对应 Deliverect Restaurants、Retail。
7. Outcome 模块二：Fuel growth and loyalty，对应 Sentinel、Direct。
8. Outcome 模块三：Last mile excellence，对应 Dispatch、Courier App。
9. Enterprise success story：Little Caesars。
10. Ready to scale CTA。
11. 页脚资源、方案、集成和公司信息。

#### 页面信息层级

- 顶部先以全渠道数字点餐建立大定位。
- 用 integrations 和客户 Logo 快速证明规模。
- 中部按业务结果组织产品：效率、转化、利润/配送。
- 后部用 Enterprise success story 建立企业级客户可信度。

#### 产品展示方式

- 产品不是平铺功能清单，而是嵌入业务结果模块。
- 每个产品有短说明、产品 UI 图和 Explore 链接。
- Integrations 有独立页面，支持搜索、分类、Request a New Integration。

#### 图片/视频应用

- 大量使用产品 UI mockup、客户 Logo、企业案例图片。
- 视觉重点是“平台界面 + 全球客户 + 企业案例”。

#### 页面交互方式

- 国家/语言选择器。
- Mega Menu 分组导航。
- Get Started CTA。
- Integrations 搜索与分类。
- Request an integration。
- 产品 Explore 链接。

### 3.3 TabSquare

来源：`https://tabsquare.ai/`

#### 品牌定位

- 定位为帮助餐厅编排用餐体验的 AI 餐饮科技平台。
- 不是先强调后台系统，而是用“orchestrate dining experiences”讲客人从发现、到店、点餐、支付、复购的完整旅程。
- 公开背书包括：7,000+ restaurants、23 million+ diner interactions yearly。

#### 首页结构

1. Explore 导航：Homepage、Solutions、Integrations、Resources、Pricing、People、About、Vibe、MunchMate。
2. Hero：We help orchestrate dining experiences that captivate diners。
3. 用虚拟顾客 Jeanette 的用餐旅程做叙事。
4. Journey Slider：发现餐厅、扫码点餐、推荐菜品、SmartPay、复购营销。
5. Business outcomes 数据区。
6. Solutions suite：Vibe、MunchMate、SmartPay 等能力。
7. Integrations：POS、Payment、CRM、Aggregators。
8. Demo 表单。

#### 页面信息层级

- 先用情境故事建立感知，再把产品能力自然嵌入旅程。
- 用“客人体验”替代传统产品功能堆叠。
- 解决方案页进一步用客户证言和视频来证明价值。

#### 产品展示方式

- 产品能力嵌入顾客旅程：MunchMate 做个性化推荐，Vibe 做扫码/视觉菜单，SmartPay 做支付。
- Solutions 页面用客户证言说明 AI、SmartKiosks、自助点餐、upselling/cross-selling 的价值。
- Integrations 页面按 POS、Payment、CRM、Aggregators 分类。

#### 图片/视频应用

- 首页使用多段 Slider 图片和视频。
- Solutions 页使用客户图片和 YouTube 视频证言。
- 更偏消费体验和餐饮氛围，不只是后台 UI。

#### 页面交互方式

- Journey Slider 分段切换。
- 视频播放。
- Pricing 与 Demo CTA。
- Integrations 分类按钮。
- Demo 表单与表单校验。

### 3.4 三个参考网站的共性启发

- 顶层定位都不是“软件功能列表”，而是面向餐饮企业的业务结果：规模化运营、全渠道增长、体验提升、配送效率、数据连接。
- 产品展示应避免只罗列功能，应按业务场景或经营结果归组。
- 客户 Logo、数据指标、集成生态、认证/安全和案例是官网信任建设的主要材料。
- 参考网站都把 Integrations 独立成重要模块，适合 Candao 后续强化海外平台、POS、支付、配送、CRM 的可信度。
- TabSquare 的叙事方式适合启发首页体验表达；Deliverect 的结构适合启发企业级 SaaS 信息架构；Aigens 的可信背书和认证表达适合启发国际市场信任模块。

### 3.5 竞品启发与可应用规则

这一节不是继续描述参考网站，而是把参考网站转化为 Candao 官网可执行规则。

| 参考来源 | 可借鉴方向 | Candao 可应用场景 | 建议做法 | 避免事项 |
| --- | --- | --- | --- | --- |
| Aigens | 企业级可信背书 | 首页 Trust、About、Security、Integrations | 使用客户 Logo、认证、SLA、门店/订单/交易规模、集成生态建立可信度 | 不要只堆认证和数字，必须解释这些背书如何降低国际客户采购风险 |
| Aigens | 产品矩阵卡片 | Products 或 Solutions 摘要区 | 用短卡片展示 Mobile Ordering、Kiosk、Payment、Loyalty、Integrations 等同级能力的清晰边界 | 不要把每个产品卡写成完整说明书 |
| Deliverect | 按业务结果组织产品 | 首页中段、Solutions 页面 | 将 Candao 能力归入“统一订单”“提高效率”“增长自有渠道”“优化配送”“打通数据”等结果模块 | 不要按 OMS、DMS、COMS 的内部系统名作为第一层叙事 |
| Deliverect | Integrations 独立成强页面 | Integrations 页面、首页集成摘要 | 提供外卖平台、POS、支付、CRM、配送、API 分类，并标注已支持/可定制/待确认 | 不要公开展示未经确认的平台 Logo 或暗示已上线 |
| Deliverect | 企业客户案例承接 | Customers / Case Studies | 用 1 个强案例承接首页信任，而不是只放 Logo | 不要使用未授权客户名称、数据或推荐语 |
| TabSquare | 场景化首页叙事 | 首页 Hero、首页第一屏后 1-2 个模块 | 用餐厅运营旅程组织内容：接单、出餐、配送、数据、复购 | 不要做成纯后台功能列表 |
| TabSquare | 图片和视频氛围 | Hero、Solutions、Case Studies | 使用真实餐厅运营、门店、配送、顾客点餐和后台 UI 动效组合 | 避免纯科技 3D、抽象球体、泛蓝紫 SaaS 视觉，餐饮行业需要真实经营场景 |
| TabSquare | 旅程式交互 | 首页重点模块、产品能力模块 | 使用切换、滑块或滚动触发，按“顾客下单 - 门店接单 - 骑手配送 - 总部分析”展示能力 | 不要一次性展开过多模块，避免页面像 PPT 目录 |

#### 对 Candao 首页的直接启发

- 首屏建议先讲“帮助餐饮品牌统一订单、餐单、配送与营运数据”，而不是先列 OMS、DMS、COMS。
- 首屏视觉建议采用“餐饮运营场景 + 产品 UI 动效”的组合，例如门店忙碌接单、外卖平台订单汇入、后台统一处理、骑手配送状态变化。
- 首页第一屏下方可以立即出现三类可信证明：客户/品牌、集成生态、安全或服务能力。
- 产品能力应分批露出：首页只讲结果和入口，详细能力放到 Products / Solutions / Integrations。
- 官网语气应从“我们有什么系统”转成“客户可以少做什么、快做什么、看清什么、稳定什么”。

#### 对 Candao 视觉与交互的直接启发

- 可用真实餐厅、门店、厨房、骑手、顾客点餐等场景照片或视频建立行业感。
- 可用后台 UI、订单流、集成流、配送地图、报表看板做轻量动效，突出系统能力。
- 交互应帮助用户理解复杂业务，例如用标签切换展示不同经营问题，用滚动触发展示订单从平台进入 Candao 再流向 POS/配送/报表。
- 不建议把国际官网做成只有抽象 3D 图形和大段文字的通用 SaaS 模板。

## 4. 新官网菜单目录整理

来源：`/Users/victorwong/Downloads/website20250424.xlsx`，工作表 2。

### 4.1 原始菜单结构

| 一级导航 | 二级页面 | 三级页面/说明 |
| --- | --- | --- |
| Solutions | Restaurants / Retails | Mobile Ordering |
| Solutions | Restaurants / Retails | Kiosk Ordering |
| Solutions | Delivery Management | Delivery Management and Riders App |
| Solutions | Dispatch | Aggregated Logistics Managementt |
| Integrations | Delivery Platforms |  |
| Integrations | POS |  |
| Integrations | CRM |  |
| Integrations | 3rd Logisttics |  |
| Integrations | Payment Gateway |  |
| Resources | Support |  |
| Resources | FAQ |  |
| Resources | Press |  |
| Resources | Show cases |  |
| Resources | Want to know more | Enquiry Forms |
| About | About Us |  |
| About | Milestones |  |
| About | Career |  |
| About | Contact Us |  |

### 4.2 页面关系整理

- `Solutions` 是业务价值主入口，当前包含餐厅/零售、自助点餐、配送管理、骑手 App、聚合配送等能力。
- `Integrations` 是信任与可行性支撑，应承接外卖平台、POS、CRM、第三方物流、支付网关等生态能力。
- `Resources` 是辅助决策内容区，应包含 Support、FAQ、Press、Show cases、Enquiry Forms。
- `About` 是公司信任区，包含公司介绍、发展里程碑、招聘和联系。
- `Enquiry Forms` 目前放在 Resources 下，但从转化逻辑看更像全站 CTA 或 Contact/Sales 表单，需要后续确认。

### 4.3 术语和结构待规范

| 原始词 | 建议后续确认方向 | 原因 |
| --- | --- | --- |
| Restaurants / Retails | Restaurants & Retail 或 Restaurants / Retail | 英文复数和并列关系需统一 |
| Aggregated Logistics Managementt | Aggregated Logistics Management | 原始拼写多一个 `t` |
| 3rd Logisttics | Third-party Logistics 或 3rd-party Logistics | 原始拼写错误，且表达需面向国际客户 |
| Show cases | Case Studies 或 Customer Stories | 国际 SaaS 官网更常用 Case Studies / Customer Stories |
| Want to know more | Contact Sales / Book a Demo / Enquiry | 更适合作为 CTA，而非资源页名称 |
| Delivery Management 与 Dispatch | 需要明确上下级关系 | 两者都与配送相关，后续 IA 需要避免重复 |

### 4.4 当前菜单缺口

- 未出现 `Home`，但正式官网必须有首页。
- 未出现独立 `Products`，而 Candao 的产品体系较复杂，后续需判断产品是否放在 Solutions 下，还是独立成 Products。
- 未出现 `Customers` 或 `Case Studies` 一级入口，但 PPT 中有香港案例和集团案例，建议后续评估是否独立展示。
- 未出现 `Pricing`，待确认清单也提到是否公开价格，当前建议先列为待确认。
- 未出现 `Security`、`Compliance`、`Privacy`、`Terms` 等信任/法律页面，但国际官网需要至少在页脚承接。

## 5. 企业及产品资料整理

来源：`/Users/victorwong/Downloads/Candao Introduction 202401_L.pptx`。

### 5.1 企业介绍

- Candao Information Technology Co., Ltd. 成立于 2014 年，总部位于广州。
- PPT 资料显示公司在北京、上海、香港等地设有分支或办公室，并在成都设有运营中心。
- 公司强调拥有数百人的技术产品研发团队。
- PPT 将 Candao 描述为较早进入中国餐饮 SaaS 系统领域的企业之一，并强调拥有餐饮系统研发及外卖业务经验。
- 公司服务对象以知名连锁餐饮品牌为主，核心价值集中在多门店运营、订单流转、报表分析、门店和渠道管理。
- 企业愿景表达：`Customers Focus on What They do the Best and Leave the Rest for Candao`。

### 5.2 质量与安全背书

- PPT 中提到 ISO 27001 信息安全管理认证。
- PPT 中提到 ISO 20000 IT 服务管理认证。
- DMS 部分提到系统负载均衡、灾备、500 orders/second concurrent throughput 和 99.95% platform availability。
- 这些内容适合进入国际官网信任模块，但认证证书、有效期、适用主体和英文表述需要业务侧确认。

### 5.3 产品体系

| 产品/能力 | PPT 中的表达 | 可整理成官网输入的能力 |
| --- | --- | --- |
| OMS / COMS | OMS system、Central Ordering Management System、Content and Order Management System | 多渠道订单管理、菜单管理、门店运营管理、平台信息同步、异常监控 |
| SOMS | Sales Ordering Management System | 门店/销售订单管理、库存、门店异常和订单处理 |
| Data Asset | Reporting Center、Finance Center、BI data boards、data reports | 报表中心、财务对账、经营看板、跨渠道数据分析 |
| QR Code Ordering | Mobile Self-service QR Code Ordering System | 堂食扫码点餐、自助点餐、桌边点餐、H5/网页点餐 |
| Takeaway / Delivery Ordering System | Order Website、H5 Mobile Version、Backend Management System | 自营外卖/自有官网点餐、会员权益、营销活动、门店后台 |
| Delivery Aggregator Platform | Aggregated Delivery Platform | 聚合第三方配送、商家 App 下单、客服代叫、充值、交易记录 |
| DMS | Owned rider delivery management system | 自有骑手管理、智能派单、配送监控、骑手 App、消费者 SMS |
| Integrations | POS、Payment、Membership、Foodpanda、Deliveroo 等 | 外卖平台、POS、支付、会员、配送平台和第三方系统集成 |

### 5.4 解决方案与业务痛点

PPT 中反复出现的客户痛点：

- 线上订餐平台多，门店需要频繁切换多个平台和设备。
- 多平台菜单更新工作量大，规则不同，重复维护成本高。
- 不同平台数据割裂，难以统一分析和指导运营。
- 多平台库存管理困难，容易出现库存不一致和超卖。
- 订单超时、配送异常、门店异常难以及时发现和处理。
- 自有骑手管理困难，缺少实时位置、考勤、车辆、身份和绩效管理。
- 高峰期人工派单效率低，配送运力不足时需要自动转第三方配送。
- 消费者缺少配送进度追踪，导致催单和取消率上升。

可整理成官网解决方案方向：

- 多渠道订单统一管理。
- 多平台菜单与门店信息同步。
- 店铺异常和订单异常实时监控。
- 自营点餐与会员营销。
- 聚合配送和自有骑手智能派单。
- 数据报表、BI 看板与财务对账。
- POS、外卖平台、支付、会员和第三方配送集成。

### 5.5 集成生态资料

- 中国市场运营模型页显示：已集成 83 个订单平台、53 个物流服务商、193 个软件服务商；资料统计时间为 2021 年 12 月。
- 香港生态页展示的类别包括：Food Order Platform、Platform Delivery、Online order、Payment Gateway、Delivery and Rider Co.、POS and third party systems。
- PPT 中多处提到 Foodpanda、Deliveroo 作为香港/海外外卖平台示例。
- 配送聚合平台页提到 Zeek、Lalamove、Pandago 作为合作配送团队。
- POS 集成资料中有大量中国 POS 厂商；香港或国际可公开 POS 清单需要另行确认。

### 5.6 客户案例资料

| 客户/案例 | PPT 中可用资料 | 页面使用注意 |
| --- | --- | --- |
| Pizza-Box | 合作超过 9 年；使用 OMS、APP & WEB ordering system；整合第三方配送平台；使用 Candao IMS/DMS 建立自有配送；提供营销工具、BI 和客服中心 | 香港案例价值高，需确认 Logo、名称、数据和引用权限 |
| JIA Group | 香港高端餐饮集团；Candao 提供官方外卖管理，包括订单、菜单、配送、会员和运营数据分析 | 适合作为高端餐饮集团案例，需确认对外授权 |
| Jardine Group / KFC / Pizza Hut / PHD | 为 KFC、Pizza Hut、PHD 提供服务；为 200+ outlets 提供 DMS；管理 IDMS 配送；OMS 集成 Foodpanda 和 Deliveroo；COMS 提供点餐和菜单管理；升级 KFC ordering system | 品牌影响力强，授权和准确表述必须确认 |
| Paisanos Pizzeria | 提供从前端不同点餐渠道到后端餐品管理、配送管理和数据分析的全链路外卖管理 | 香港本地案例，可用于证明本地服务能力 |
| 甜品连锁品牌匿名案例 | POS 对接、第三方平台对接；订单量、销售额、复购率提升数据 | 匿名案例适合做数据证明，但需确认行业和数据口径 |
| 火锅连锁品牌匿名案例 | 小程序、门店聚合管理、第三方平台对接；取消率、效率、销售和复购提升 | 可用于“自营渠道 + 门店聚合”场景 |
| 中餐连锁品牌匿名案例 | 业务中心、数据中心，打通收购后的系统架构和数据孤岛 | 可用于“集团扩张/系统整合”场景 |
| 西式咖啡品牌匿名案例 | 外卖平台对接、菜单管理、数据资产；单店销售和订单增长 | 可用于“菜单同步 + 数据决策”场景 |
| 生鲜零售品牌匿名案例 | POS 对接、第三方平台对接、门店侧管理；运营效率、数字化和线上订单占比 | 可用于 Retail 方向，但需确认国际官网是否保留 Retail |

### 5.7 数据证明资料

| 数据 | 来源页内容 | 使用建议 |
| --- | --- | --- |
| 2014 年成立 | 公司背景页 | 可用于 About / Milestones |
| 20+ 年餐饮系统或外卖业务经验 | 公司背景页 | 表述需确认是团队经验还是公司经验 |
| 5000+ 品牌 | 公司背景页、Performance 页 | 可用于信任模块，但与 4200 品牌旧口径冲突 |
| 400+ 城市 | 公司背景页、Performance 页 | 可用于规模背书 |
| 200,000+ 门店 | 公司背景页、Performance 页 | 可用于规模背书，但与 80,000 stores 旧口径冲突 |
| 5 million+ daily orders | 公司背景页 | 可用于规模背书，但与 Performance 页的 500M+ daily processing orders 冲突 |
| 4.5B+ monthly delivery order GMV | Performance 页 | 可用于业务规模，但币种和统计周期需确认 |
| 运营效率提升 30%+ | 公司背景页、门店信息同步案例 | 适合用于效率价值证明 |
| DMS 500 orders/second | DMS 性能页 | 可用于技术性能，但需确认测试条件 |
| DMS 99.95% availability | DMS 性能页 | 可用于可靠性模块，需确认统计周期和 SLA 口径 |
| ISO 27001 / ISO 20000 | 核心产品与服务页 | 可用于安全和服务管理背书，需确认证书主体 |

### 5.8 数据口径风险

- PPT 第 10 页显示“4200 brands、400 cities、80,000 stores”，第 4 页和第 11 页又显示“5000+ brands、200,000+ stores”。后续必须确认最新公开口径。
- PPT 第 4 页显示“5 million+ orders daily”，第 11 页提取到“Daily Processing Orders 500M+”。两者量级差异极大，正式官网不可直接使用，必须核对原始设计稿或业务数据。
- “20 years of practical experience”与公司 2014 年成立存在解释空间，应表述为团队/行业经验，而非公司成立年限。
- 中国市场集成数据统计时间为 2021 年 12 月，不宜直接作为 2026 国际官网最新集成数量。

### 5.9 官网表达资产整理

这一节用于把 PPT 中的产品和能力转化为后续官网策略、信息架构和 Copy Agent 可使用的表达资产。这里不是最终官网文案，而是表达方向。

#### OMS / COMS

产品本质：

- 不是单纯的订单管理工具。
- 应表达为帮助连锁餐饮品牌统一管理多渠道订单、菜单、门店信息和运营异常的核心运营平台。

用户价值：

- 降低门店在多个外卖平台和设备之间切换的人工成本。
- 减少漏单、错单、超时单和门店异常带来的运营损失。
- 提升总部对多门店、多渠道、多菜单的统一管理能力。
- 让订单、菜单、库存、门店状态和数据分析进入同一个运营视图。

官网关键词：

| 中文方向 | English Direction |
| --- | --- |
| 全渠道订单管理 | Omnichannel Order Management |
| 多平台菜单同步 | Multi-platform Menu Synchronization |
| 门店运营管理 | Store Operations Management |
| 异常订单监控 | Abnormal Order Monitoring |
| 统一运营后台 | Unified Operations Console |

表达提醒：

- 首页不建议直接说“OMS 系统”，应先说“统一管理多渠道订单与门店运营”。
- Products 页面可以再解释 OMS / COMS 的产品结构。

#### 自营点餐 / 二维码点餐

产品本质：

- 不是单个 H5 点餐页面。
- 应表达为帮助餐饮品牌建立自有点餐入口、会员触达和营销承接的数字渠道。

用户价值：

- 降低对第三方平台的单一依赖。
- 支持堂食扫码、提前点餐、自营外卖、会员权益和营销活动。
- 帮助品牌积累自有用户数据和复购路径。

官网关键词：

| 中文方向 | English Direction |
| --- | --- |
| 自有点餐渠道 | First-party Ordering Channel |
| 扫码点餐 | QR Code Ordering |
| 移动点餐 | Mobile Ordering |
| 会员与营销 | Membership and Marketing |
| 自营外卖官网 | Branded Online Ordering |

表达提醒：

- 首页可用“把顾客从发现、点餐、支付到复购连接起来”表达，不要只讲页面和后台配置。

#### Delivery Aggregator / 聚合配送

产品本质：

- 不是配送价格表或叫车工具。
- 应表达为帮助餐饮品牌灵活调度多家第三方配送资源，降低高峰期运力不足和配送成本波动。

用户价值：

- 高峰期快速补充配送运力。
- 支持商家 App 下单或客服代叫。
- 统一记录配送费用、充值、扣款和退款。
- 可结合自有骑手与第三方配送形成弹性履约。

官网关键词：

| 中文方向 | English Direction |
| --- | --- |
| 聚合配送 | Aggregated Delivery |
| 第三方配送调度 | Third-party Delivery Dispatch |
| 弹性运力 | Flexible Delivery Capacity |
| 配送成本优化 | Delivery Cost Optimization |
| 配送交易记录 | Delivery Transaction Records |

表达提醒：

- 后续对外展示配送伙伴时必须确认 Logo 和合作状态。

#### DMS / 自有骑手配送管理

产品本质：

- 不是骑手 App 功能清单。
- 应表达为面向品牌自有配送团队的智能派单、骑手管理、配送监控和消费者通知系统。

用户价值：

- 提升人工派单效率，降低高峰期配送压力。
- 统一管理骑手身份、车辆、考勤、培训、薪资和权限。
- 实时追踪骑手位置、配送进度、异常订单和门店履约表现。
- 通过消费者 SMS 提升配送透明度，减少催单和取消。

官网关键词：

| 中文方向 | English Direction |
| --- | --- |
| 自有骑手管理 | Owned Rider Management |
| 智能派单 | Smart Dispatch |
| 实时配送追踪 | Real-time Delivery Tracking |
| 骑手 App | Rider App |
| 消费者配送通知 | Customer Delivery Notifications |

表达提醒：

- 首页只需要表现“配送可控、异常可见、运力可调度”，详细派单规则应放在产品详情页。

#### Data Asset / 报表与财务中心

产品本质：

- 不是报表列表。
- 应表达为把订单、渠道、门店、用户、配送和财务数据汇总为可决策的经营视图。

用户价值：

- 让总部看清不同平台、不同门店、不同时间段的经营表现。
- 支持运营报表、销售报表、用户报表、财务对账和定制报表。
- 通过数据打破平台信息孤岛，辅助菜单更新、活动优化和门店管理。

官网关键词：

| 中文方向 | English Direction |
| --- | --- |
| 经营数据看板 | Operations Dashboard |
| 跨渠道数据分析 | Cross-channel Data Analytics |
| 财务对账 | Financial Reconciliation |
| 定制报表 | Custom Reports |
| 数据资产管理 | Data Asset Management |

表达提醒：

- 不要把首页数据能力写成“几十种报表”，应表达为“让总部实时看清业务表现并更快决策”。

#### Integrations / 集成生态

产品本质：

- 不是 Logo 陈列。
- 应表达为 Candao 连接外卖平台、POS、支付、配送、会员、CRM 和 API 的能力基础。

用户价值：

- 减少系统孤岛和重复录入。
- 支持订单、菜单、门店、库存、配送和财务数据在系统之间流动。
- 帮助国际客户判断 Candao 是否能接入现有技术栈。

官网关键词：

| 中文方向 | English Direction |
| --- | --- |
| 集成生态 | Integration Ecosystem |
| 外卖平台集成 | Delivery Platform Integrations |
| POS 集成 | POS Integrations |
| 支付网关 | Payment Gateways |
| API 连接 | API Connectivity |

表达提醒：

- Integrations 页面应使用状态标签：已上线、可定制、需确认。
- 不得把中国市场历史集成数量直接作为国际站最新能力。

### 5.10 产品能力到解决方案映射

国际官网不应只按 PPT 产品名组织，而应以客户问题和业务结果为第一层，再承接到产品能力。

| 客户问题 | 官网解决方案方向 | 可承接产品能力 | 建议页面 |
| --- | --- | --- | --- |
| 多个外卖平台订单难管理，门店频繁切换设备 | Omnichannel Operations | OMS / COMS、Order Processing Center、POS Integration | Solutions、Products |
| 多平台菜单、库存和门店信息重复维护 | Menu and Store Management | Menu Center、Store Management、Inventory Management | Solutions、Products |
| 自营渠道弱，会员和营销难沉淀 | First-party Ordering and Growth | QR Code Ordering、Order Website、Membership、Marketing Campaigns | Solutions、Products |
| 配送高峰期运力不足，第三方配送成本不稳定 | Delivery Orchestration | Delivery Aggregator、Third-party Dispatch、DMS | Solutions、Delivery |
| 自有骑手难管理，派单和异常不可视 | Owned Rider Delivery Management | DMS Admin Web、Rider App、Monitoring Center、Consumer SMS | Products、Delivery |
| 多平台数据割裂，经营决策依赖人工汇总 | Data and Reconciliation | Reporting Center、Finance Center、BI Dashboard、Custom Reports | Products、Data |
| 现有 POS、支付、配送、CRM 系统需要接入 | Integrations and APIs | POS、Payment Gateway、CRM、Delivery Platforms、API | Integrations |
| 国际客户需要确认公司可信度、安全和服务能力 | Trust and Compliance | ISO 27001、ISO 20000、SLA、Support、Case Studies | About、Security、Customers |

#### 建议的国际官网产品层级

第一层：

客户经营问题。

第二层：

官网解决方案，如 Omnichannel Operations、Delivery Orchestration、First-party Ordering、Data and Reconciliation。

第三层：

产品能力，如 OMS / COMS、DMS、Delivery Aggregator、QR Code Ordering、Reporting Center、Integrations。

第四层：

具体功能与实施资料，如菜单同步、派单规则、骑手管理、报表字段、表单字段、API 能力。

#### 对 IA 的提醒

- `Solutions` 应讲业务场景和客户价值。
- `Products` 应讲产品模块和功能边界。
- `Integrations` 应讲连接能力和生态可信度。
- `Customers / Case Studies` 应讲真实结果和行业信任。
- 首页只做摘要和入口，不承载所有产品详情。

## 6. 首页素材池

本节用于帮助 T02 官网策略 Agent 和后续首页设计 Agent 快速判断首页能用哪些素材，以及哪些素材需要确认后才能公开。

### 6.1 品牌定位素材

- Candao 可被表达为餐饮企业数字运营、订单管理、配送管理和数据连接平台。
- 可用方向：全球餐饮智能运营 SaaS 平台。
- 可用英文方向：Intelligent SaaS Platform for Global Restaurant Operations。
- 更业务化的表达方向：帮助餐饮品牌统一订单、菜单、配送与营运数据。

### 6.2 品牌证明素材

| 素材 | 可用性 | 备注 |
| --- | --- | --- |
| 2014 年成立 | 可用，但需确认英文表述 | 可用于 About 和信任模块 |
| ISO 27001 / ISO 20000 | 可用方向，但需确认证书主体和有效期 | 适合 Security / Trust |
| 香港、北京、上海、广州、成都等办公室或运营中心 | 需确认最新办公资料 | 适合 About / Contact |
| 5000+ 品牌、400+ 城市、200,000+ 门店 | 需确认口径 | 首页可保留占位，不可直接发布 |
| 5 million+ daily orders | 需确认口径 | 与 500M+ 冲突，暂不发布 |
| 运营效率提升 30%+ | 需确认适用场景 | 可作为结果型证明 |

### 6.3 产品能力素材

- 多渠道订单统一接入。
- 多平台菜单、库存、门店信息同步。
- POS、外卖平台、支付、CRM、配送平台集成。
- 自营点餐、二维码点餐、会员和营销活动。
- 聚合第三方配送和自有骑手配送管理。
- 智能派单、骑手 App、消费者配送 SMS。
- 报表中心、财务对账、经营看板和数据分析。

### 6.4 信任元素素材

- 香港客户案例：Pizza-Box、JIA Group、Paisanos Pizzeria。
- 大型集团案例：Jardine Group / KFC / Pizza Hut / PHD。
- 安全与服务认证：ISO 27001、ISO 20000。
- 集成生态：Foodpanda、Deliveroo、POS、Payment Gateway、CRM、Zeek、Lalamove、Pandago 等，但 Logo 和状态需确认。
- 服务能力：客服中心、交付团队、实施支持、售后支持、SLA，具体承诺需确认。

### 6.5 场景素材方向

- 门店高峰期接单场景。
- 总部门店运营管理场景。
- 外卖平台订单汇入统一后台。
- 菜单同步到多个平台。
- 骑手派单、配送追踪、消费者 SMS 通知。
- 经营数据看板和财务对账。
- 香港餐饮门店、连锁品牌、厨房、出餐、配送和顾客扫码点餐。

### 6.6 首页结构素材建议

| 首页模块 | 可用素材 | 目的 |
| --- | --- | --- |
| Hero | 品牌定位、核心经营问题、餐厅运营场景 + UI 动效 | 建立第一印象，避免像产品说明书 |
| Trust Bar | 客户 Logo、认证、门店/订单/城市数据占位 | 快速建立可信度 |
| Problem Switcher | 漏单、菜单重复维护、配送异常、数据割裂 | 让用户先看到自己的问题 |
| Capability Overview | 订单、菜单、配送、数据、集成 | 把复杂产品压缩成 4-5 个入口 |
| Integration Snapshot | 外卖平台、POS、支付、CRM、配送 | 证明可接入现有生态 |
| Case Highlight | 香港客户或大型集团案例 | 让官网不只讲能力，也讲结果 |
| CTA | Book a Demo / Contact Sales | 统一转化 |

### 6.7 首页不建议做的内容

- 不要把 OMS、DMS、QR Code Ordering、Delivery Aggregator 的完整功能全部堆在首页。
- 不要把 PPT 的产品目录直接搬成网页目录。
- 不要优先使用未经确认的数字做首屏大字。
- 不要使用纯技术抽象视觉替代餐饮经营场景。
- 不要让首页只承担导航入口，首页必须承担品牌宣传和转化。

## 7. 官网待确认清单整理

来源：`/Users/victorwong/Downloads/香港及国际官网待确认清单.md`。

### 7.1 已确认或已排除的内容边界

原 MD 顶部说明：已排除已经确认的网站定位、域名结构、访问规则、跳转原则、语言结构，以及 CanDao 与 51WM Company Ltd 的品牌和签约主体关系。

可整理为当前已确认边界：

- 网站定位已有一定基础结论，但 T01 未拿到完整定位文本，需要 T03 再固化。
- 域名结构已有基础结论，但 T01 未拿到具体 URL 规则。
- 访问规则、跳转原则已有基础结论，但具体实现规则仍需在 IA/开发阶段展开。
- 语言结构已有基础结论；结合项目规则，后续官网实际展示内容应输出繁体中文 + 英文。
- CanDao 与 51WM Company Ltd 的品牌和签约主体关系已确认，但具体可公开公司资料仍需补充。

### 7.2 待补充内容

| 类别 | 待确认重点 | 对官网影响 |
| --- | --- | --- |
| 目标市场与客户 | 第一阶段重点市场、优先市场、主要客户类型、最主要转化目标、是否按国家展示产品/价格/联系方式 | 决定首页定位、Solutions 页面和国家/地区内容 |
| 国际产品结构 | 正式展示产品清单、COMS 英文定位、Tappo 是否独立、AI IM/MCP/Skill/WorkBuddy 是否公开、是否公开价格 | 决定主导航、产品页面数量和产品命名 |
| 海外平台与集成 | 已支持外卖平台、POS、配送、支付、CRM，哪些已上线，哪些仅计划，可否展示 Logo，是否公开 API 文档 | 决定 Integrations 页面真实性和销售可信度 |
| 国际客户与案例 | 香港和海外客户名单、客户案例语言、门店数/订单量/效率数据、Logo 和数据授权、英文推荐语、海外活动内容 | 决定客户案例页和首页信任模块强度 |
| 服务与交付范围 | 可服务国家地区、服务语言、客服时区、香港/当地实施团队、实施周期、培训、售后、SLA、标准功能与定制边界 | 决定 Contact、FAQ、服务承诺和风险说明 |
| 公司与签约资料 | 51WM Company Ltd 准确英文名、注册地区、公开注册资料、香港办公室地址、国际业务年份、合同收款主体 | 决定 About、Legal、Contact 和页脚公司信息 |
| 数据、安全与合规 | 数据存放地区、加密、备份、权限审计、安全认证、香港私隐条例、GDPR、Cookie、Privacy、Terms、DPA | 决定 Security/Privacy/Terms 页面和国际客户信任 |
| 国际联系方式 | 销售电话、销售邮箱、客服邮箱、英文联系人、Book a Demo 字段、表单接收人、响应时间、WhatsApp、LinkedIn、地图和营业时间 | 决定转化表单和联系页面 |
| 国际 SEO 与内容运营 | 英文关键词、香港繁中关键词、GSC/GA 负责人、新闻更新负责人、内容审核人、白皮书/指南、更新频率、旧 URL 跳转、国家落地页 | 决定 SEO 架构、资源内容和运营机制 |

### 7.3 页面风险

| 风险 | 影响页面 | 风险说明 | 建议处理 |
| --- | --- | --- | --- |
| 目标市场未定 | Home、Solutions、Contact | 无法判断首页是否优先讲香港、新加坡、英国、北美或泛国际市场 | T02/T03 先确认第一阶段优先市场 |
| 产品清单未定 | Products、Solutions、Navigation | COMS、Tappo、AI IM、MCP、WorkBuddy 是否进入国际站未定 | 先做产品公开等级：公开、弱展示、暂不展示 |
| 集成状态未定 | Integrations | 已上线、计划中、定制开发边界不清，可能导致误导客户 | 建立“已支持/可定制/计划中”标签 |
| 客户授权未定 | Home、Customers、Case Studies | Logo、案例、数据、评价语可能存在授权风险 | 所有客户内容进入待授权清单 |
| 数据口径冲突 | Home、About、Trust | PPT 中品牌数、门店数、订单量存在不一致 | 正式官网只使用经确认的一版数据 |
| 合规资料不足 | Security、Privacy、Terms | 国际站缺少数据存储、隐私、DPA、Cookie 等材料 | T12 前必须补齐基础法律与安全材料 |
| 签约主体资料不完整 | About、Contact、Footer | 51WM 具体公开资料未提供，影响国际客户信任 | 补充注册地、办公室、合同与收款主体 |
| 价格策略未定 | Pricing、CTA | 是否公开价格未定，影响导航和转化路径 | 第一阶段可默认 Contact Sales，但需确认 |
| 内容运营责任未定 | Resources、Press、Blog | 新闻、洞察、案例更新人未定，资源页容易空置 | 资源页先低承诺，避免设计成高频内容中心 |

## 8. 后续 Agent 输入建议

### 8.1 给 T02 官网策略 Agent

- 请优先判断 Candao 国际官网的第一阶段市场和主客户类型。
- 请基于 Candao 已有能力，把产品从“功能清单”转化为“业务结果”表达。
- 请参考 Deliverect 的全渠道 SaaS 结构、Aigens 的企业级可信背书、TabSquare 的用餐体验叙事，但不要直接复制任何一家。
- 请处理“香港本地可信度”与“国际 SaaS 品牌感”之间的权重。
- 请把所有未确认的对外数据列为风险，不要生成最终官网公开数字。
- 请特别使用 `3.5 竞品启发与可应用规则`、`5.9 官网表达资产整理`、`5.10 产品能力到解决方案映射` 和 `6. 首页素材池`，避免策略报告停留在资料复述。

### 8.2 给 T03 官网策略文档

- 需要明确品牌定位中英文版本。
- 需要确认 Candao 与 51WM 的公开关系如何在国际官网解释。
- 需要定义官网第一阶段核心转化目标：Book a Demo、Contact Sales、Partner With Us 或其他。

### 8.3 给 T04/T05 信息架构与 Sitemap

- Excel 菜单可作为初稿，但不能直接作为最终 IA。
- 建议重点评估是否新增 Home、Products、Customers/Case Studies、Security、Contact/Sales。
- Integrations 需要独立成强页面，而不是只做页脚资源。
- 信息架构应优先按“客户问题 → 解决方案 → 产品能力 → 转化路径”组织，而不是按 PPT 内部章节组织。

### 8.4 给 T06/T07 内容 Agent

- T01 阶段不生成最终官网文案。
- 后续官网实际展示文案必须使用繁体中文 + 英文。
- 客户案例、Logo、数据、认证、安全和 SLA 类文案必须等待确认后才能写成强承诺。
- Copy Agent 应使用 `5.9 官网表达资产整理` 中的“产品本质、用户价值、官网关键词”，先生成官网表达，再生成页面文案。

### 8.5 后续 Agent 语言规则

本文件是内部分析资料，输出语言为简体中文。后续 Agent 不得简单继承 T01 的输出语言到所有产物，必须按项目规则区分：

| 阶段 | 产物类型 | 输出语言 |
| --- | --- | --- |
| T02-T05 | 策略、官网战略、信息架构、Sitemap | 简体中文为主；页面英文名称保留英文 |
| T06-T07 | 官网实际展示内容和页面 Copy | 繁体中文 + 英文 |
| T08-T12 | UX、体验、视觉、审核 | 简体中文为主；设计关键词、组件名、页面名可保留英文 |
| T13 | 最终整合蓝图 | 主体简体中文；官网 Copy 附录繁体中文 + 英文 |

语言硬规则：

- T01、T02、T03、T04、T05 不生成最终网页文案。
- T06、T07 不输出简体中文官网正式网页文案。
- 如需写官网展示内容，必须同时提供繁体中文和英文版本。
- 英文术语可作为字段名、页面名、组件名和 SEO/导航参考保留。

## 9. 附录：源文件快速索引

### 9.1 Excel 工作表 1：参考网站

```text
https://www.aigens.com/
https://www.deliverect.com/en
https://tabsquare.ai/
```

### 9.2 Excel 工作表 2：菜单目录

```text
Solutions
  Restaurants / Retails
    Mobile Ordering
    Kiosk Ordering
  Delivery Management
    Delivery Management and Riders App
  Dispatch
    Aggregated Logistics Managementt

Integrations
  Delivery Platforms
  POS
  CRM
  3rd Logisttics
  Payment Gateway

Resources
  Support
  FAQ
  Press
  Show cases
  Want to know more
    Enquiry Forms

About
  About Us
  Milestones
  Career
  Contact Us
```

### 9.3 PPT 关键页码索引

| 内容 | 页码范围 |
| --- | --- |
| 公司背景 | 3-12 |
| OMS 介绍、痛点、方案 | 13-36 |
| OMS 案例 | 37-45 |
| 移动/二维码/自营点餐 | 46-68 |
| 香港案例 | 69-75 |
| 配送聚合平台 | 76-86 |
| DMS 自有骑手配送管理 | 87-131 |
| 愿景和联系方式 | 132-133 |
