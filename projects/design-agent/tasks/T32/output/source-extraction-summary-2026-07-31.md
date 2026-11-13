# 国际官网新版优化资料抽取与证据摘要

> 2026-07-31 修订提醒：用户已进一步明确“网页主要使用繁体中文兼容英文，适用于香港地区”。后续需求默认以 T33 香港繁中优先修订为准：`projects/design-agent/tasks/T33/output/hong-kong-tc-primary-adjustment-2026-07-31.md` 和 `projects/design-agent/tasks/T33/output/international-website-redesign-prd-hk-tc-2026-07-31.md`。本文件保留为原始资料抽取和证据追溯。

## 1. 输入资料

| 类型 | 路径 / 来源 | 本次使用方式 |
| --- | --- | --- |
| 内容目标清单 | `/Users/victorwong/Downloads/香港及国际官网待确认清单.md` | 作为国际官网内容范围、待确认项、合规与转化目标的主依据 |
| 公司与产品介绍 PPT | `/Users/victorwong/Downloads/Candao Introduction 202401_L.pptx` | 抽取可用于国际官网的信息素材，避免照搬长篇售前话术 |
| 期望目录与竞品 URL | `/Users/victorwong/Downloads/website20250424.xlsx` | Sheet 1 确认竞品，Sheet 2 确认初始网站目录方向 |
| 已完成竞品分析 | `projects/design-agent/tasks/T30/output/competitor-analysis-2026-07-31/report-expanded.md` | 作为页面族、内容链路和竞品共性判断的上游证据 |
| 已完成竞品 brief | `projects/design-agent/tasks/T30/output/competitor-analysis-2026-07-31/generator_brief_expanded.json` | 作为后续网页生成 / 设计 Agent 的结构约束参考 |
| 公开官网核验 | Aigens、Deliverect、TabSquare 官网 | 用于确认当前竞品仍围绕产品矩阵、集成、案例、联系转化构建页面网络 |

## 2. Excel 抽取

### 2.1 Sheet 1：竞品网站

- `https://www.aigens.com/`
- `https://www.deliverect.com/en`
- `https://tabsquare.ai/`

### 2.2 Sheet 2：用户期望的项目目录

| 一级栏目 | 二级栏目 | 三级内容 |
| --- | --- | --- |
| Solutions | Restaurants / Retails | Mobile Ordering |
| Solutions | Restaurants / Retails | Kiosk Ordering |
| Solutions | Delivery Management | Delivery Management and Riders App |
| Solutions | Dispatch | Aggregated Logistics Management |
| Integrations | Delivery Platforms |  |
| Integrations | POS |  |
| Integrations | CRM |  |
| Integrations | 3rd Logistics |  |
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

### 2.3 对目录的初步判断

- 方向正确：已经覆盖 Solutions、Integrations、Resources、About 四个国际官网必备栏目。
- 缺少首页的战略结构：需要明确首屏定位、经营结果承诺、证据链和主 CTA。
- 缺少产品总览页：仅按二级目录列出产品会让用户难以理解 CanDao 产品矩阵与餐饮经营链路的关系。
- 缺少案例详情页：国际站需要证明“谁用过、解决了什么、结果如何”，Show cases 不能只停留在列表。
- 缺少安全与合规承接页：MD 清单明确需要 Privacy、Terms、DPA、Cookie Consent、数据存储、安全认证等内容。
- 缺少转化分流：Contact Us 不应只有一个表单，至少应区分 Book a Demo、Contact Sales、Support、Partner With Us。

## 3. MD 内容目标抽取

MD 的核心价值不是提供最终答案，而是定义国际官网必须解决的待确认范围。

| 模块 | 关键内容目标 | 对官网需求的含义 |
| --- | --- | --- |
| 目标市场与客户 | 香港、新加坡、英国、澳洲、美国、加拿大、东南亚等候选市场；目标客户包括海外连锁餐饮、中国品牌出海、亚洲餐饮集团、中小餐厅、技术伙伴、平台伙伴 | 首页和导航不能只泛泛讲全球业务，必须支持按市场、客户类型和业务意图分流 |
| 国际产品结构 | COMS、Tappo、AI IM、MCP / Skill、WorkBuddy，以及 Multi-channel Order Management、Menu and Store Management、Delivery Orchestration、Data and Reconciliation、Integrations and APIs、AI-powered Operations | 需要先确认哪些产品正式进入国际站；MVP 应优先展示已经有素材和交付能力的核心产品 |
| 海外平台与集成 | 外卖、POS、配送、支付、会员营销系统；上线 / 计划 / 定制状态；伙伴 Logo；API 文档；合作伙伴入口 | Integrations 需要成为一级核心页，并支持分类、状态说明、请求新集成和伙伴申请 |
| 国际客户与案例 | 可公开客户、案例语言、门店数、订单量、效率指标、Logo 和数据授权、推荐语、国际活动 | 客户证明必须贯穿首页、产品页、案例页；所有数据必须经过授权和口径确认 |
| 服务与交付范围 | 服务国家、语言、客服时区、实施团队、SLA、标准 / 定制边界、异常责任边界 | 官网需要 Trust / Support / FAQ 内容，避免销售承诺超过交付能力 |
| 公司与签约资料 | 51WM Company Ltd 信息、注册地区、香港地址、合同收款主体、51wm.com 主体说明 | About / Legal / Contact 页必须清晰解释品牌、签约和服务主体 |
| 数据、安全与合规 | 数据存放、加密、备份、权限审计、安全认证、香港私隐条例、GDPR、Cookie、Privacy、Terms、DPA、安全事件邮箱 | 新版上线前必须完成合规内容，否则国际获客存在法律和信任风险 |
| 联系方式 | 国际销售电话、邮箱、客服邮箱、响应时间、WhatsApp、LinkedIn、Facebook、地图、营业时间 | Contact 页需要按意图分流，并与 CRM / 邮件接收人打通 |
| SEO 与内容运营 | 英文关键词、繁中关键词、GSC、GA、新闻、审核人、洞察/白皮书、更新频率、旧 URL 跳转、国家落地页 | 官网不是一次性交付，需要内容运营、SEO、分析和重定向机制 |

## 4. PPT 可用素材抽取

PPT 中适合进入国际官网的内容应被重写为“国际客户可理解的业务价值”，而不是直接搬运售前长文。

### 4.1 公司可信度

- 成立于 2014 年，总部广州，在北京、上海、香港等地有办公室或团队。
- 餐饮 SaaS / 外卖订餐 / 配送业务有长期经验。
- 可用规模数字包括：5000+ 品牌、400+ 城市、200000+ 门店、每日订单处理量等，但不同页存在口径不一致，需要最终确认。
- PPT 提到 ISO 27001 和 ISO 20000，可作为安全与服务管理背书，但需要确认证书有效期、认证主体和覆盖范围。

### 4.2 可转化为官网产品线的内容

| 官网产品线建议 | PPT 对应素材 | 可提炼价值 |
| --- | --- | --- |
| Multi-channel Order Management / COMS | OMS、COMS、订单处理中心、多平台订单接入、Foodpanda、Deliveroo | 一个后台管理多平台订单，减少切换、漏单和高峰期混乱 |
| Menu and Store Management | 门店运营中心、菜单中心、库存、售罄、批量导入、跨平台同步 | 一次维护门店、菜单、库存，跨平台同步，减少重复人工 |
| Customer Marketing and First-party Ordering | QR Code Ordering、Takeaway / Delivery Ordering System、会员权益、营销活动、H5 Mobile | 支持自有官网 / H5 / QR 点餐，沉淀会员和私域订单 |
| Delivery Orchestration | Delivery Aggregator Platform、DMS、Rider App、Consumer SMS、智能派单 | 同时调度自有骑手和第三方配送，提升履约能力和客户可见性 |
| Data and Reconciliation | Reporting Center、Data Dashboard、Finance Center、对账流程 | 打通订单、渠道、用户、财务数据，支持运营决策和对账 |
| Integrations and APIs | 外卖平台、POS、支付、会员、第三方配送连接 | 证明 CanDao 能接入餐厅现有系统，降低迁移阻力 |

### 4.3 可用痛点

- 多个外卖平台导致设备和后台切换，影响出餐效率并增加错单风险。
- 多平台菜单维护工作量大，规则不一，运营复杂。
- 各平台数据割裂，难以形成有效经营分析。
- 多平台库存难统一，容易售罄不同步或超卖。
- 异常订单、配送异常和门店异常难以及时监控。
- 自有骑手管理缺少系统支撑，派单效率低、成本高、消费者无法实时查看配送状态。

### 4.4 可用业务结果表达

- 提升运营效率。
- 减少漏单、错单和取消。
- 降低人工重复维护成本。
- 提升配送履约效率。
- 统一数据资产，辅助经营决策。
- 支持会员、营销和第一方订单增长。

### 4.5 可用案例素材

| 案例 | PPT 中的服务内容 | 官网使用建议 |
| --- | --- | --- |
| Pizza-Box | OMS、App & Web Ordering、第三方配送集成、DMS、自有配送、营销工具、BI、客户服务 | 可作为香港本地连锁餐饮完整案例，优先进入 MVP，但需确认授权与最新数据 |
| JIA Group | COMS、订单管理、菜单管理、配送管理、会员管理、运营数据分析 | 适合证明高端餐饮集团也可使用 CanDao，需确认客户 Logo 与案例文本授权 |
| Jardine Group / KFC / Pizza Hut / PHD | DMS、IDMS、Foodpanda、Deliveroo 集成、COMS、订餐系统升级 | 证明大型 QSR 与企业级交付能力，需严格确认可公开范围 |
| Paisanos Pizzeria | 外卖全链路管理、前端订餐渠道、后端菜单与配送、数据分析 | 适合作为香港本地品牌案例，补充 Pizza-Box 以外的餐饮类型 |

## 5. T30 竞品分析关键结论

- 餐饮科技 SaaS 国际官网不能只做单页或首页视觉升级，必须形成页面网络。
- 三家竞品都先讲经营结果，再讲产品功能。
- 产品矩阵是必需项，不能只有“我们提供哪些功能”的堆叠。
- 集成页是餐饮 SaaS 官网核心页，用于证明可接入客户现有工具。
- 客户证明需要贯穿首页、产品页、集成页和联系转化页。
- About 页面承担长期信任、企业人格、安全、区域覆盖等作用。
- Contact 页面需要按意图分流，而不是只放一个通用表单。

## 6. 公开竞品核验摘要

| 竞品 | 当前观察 | 对 CanDao 的启发 |
| --- | --- | --- |
| Aigens | 官网围绕餐饮科技产品、移动点餐、Kiosk、Aigens Connect、About、Contact 等页面展开；产品页强调收益、功能、集成和 Demo 转化 | 借鉴产品详情页深度和“连接现有系统”的表达方式 |
| Deliverect | 官网导航包含 Products、Solutions、Partners、Integrations、Customers、Resources、Pricing 等结构；Integrations 是可搜索、可分类的核心入口；Contact 有多意图入口 | 借鉴信息架构、集成目录、合作伙伴路径和转化分流 |
| TabSquare | 官网以顾客体验、餐厅利润增长、产品生态、Integrations、Pricing、Resources、Contact 表单组织内容 | 借鉴体验叙事和“业务目标表单”方式 |

公开核验链接：

- [Aigens](https://www.aigens.com/)
- [Aigens Mobile Ordering](https://www.aigens.com/mobile-ordering/)
- [Aigens Connect](https://www.aigens.com/middleware/)
- [Deliverect](https://www.deliverect.com/en)
- [Deliverect Solutions](https://www.deliverect.com/en/solutions)
- [Deliverect Integrations](https://www.deliverect.com/en/integrations)
- [Deliverect Contact](https://www.deliverect.com/en/contact-us)
- [TabSquare](https://tabsquare.ai/)
- [TabSquare Solutions](https://tabsquare.ai/solutions)
- [TabSquare Integrations](https://tabsquare.ai/integrations)
- [TabSquare Pricing](https://tabsquare.ai/pricing)

## 7. 主要矛盾与待确认点

| 问题 | 说明 | 对 PRD 的影响 |
| --- | --- | --- |
| 产品清单不一致 | MD 提到 COMS、Tappo、AI IM、MCP / Skill、WorkBuddy；Excel 目录提到 Mobile Ordering、Kiosk、Delivery、Aggregated Logistics；PPT 重点是 OMS/COMS、QR/Online Ordering、Delivery Aggregator、DMS | 需要先定义国际官网正式产品矩阵，避免页面做出来后无法销售或交付 |
| 规模数据口径不一致 | PPT 中出现 5000+ 品牌、4200 品牌、80000 门店、200000 门店、每日 5 million+ 订单、500M+ Daily Processing Orders 等不同口径 | 所有规模数字需要最终口径，不应未经确认直接上线 |
| 案例授权不明 | PPT 有 Pizza-Box、JIA Group、Paisanos、Jardine 等案例，但 MD 要求确认 Logo、名称、数据和评价授权 | MVP 可设计案例模块，但上线内容必须以授权资料为准 |
| 国际服务范围未定 | 市场、语言、时区、实施团队、SLA、国家差异仍待确认 | 影响首页文案、Contact 表单、国家落地页和客服承诺 |
| 合规资料未完备 | Privacy、Terms、DPA、Cookie Consent、数据存放、GDPR 等仍待确认 | 国际站上线前的强依赖，不能留到最后 |
| Kiosk / AI / MCP 等能力是否进入国际站不明 | Excel 有 Kiosk，MD 有 AI / MCP / WorkBuddy，PPT支撑不足或定位不明确 | 这些内容不建议作为 MVP 主页面，除非补足产品定位、案例和交付边界 |
