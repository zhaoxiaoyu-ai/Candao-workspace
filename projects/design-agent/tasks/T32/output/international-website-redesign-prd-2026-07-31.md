# PRD：CanDao 国际官网新版优化

> 2026-07-31 修订提醒：用户已进一步明确“网页主要使用繁体中文兼容英文，适用于香港地区”。后续默认应以 T33 香港繁中优先版为准：`projects/design-agent/tasks/T33/output/international-website-redesign-prd-hk-tc-2026-07-31.md`。本文件保留作为 T32 原始国际站分析基线和追溯材料。

## 1. 摘要

CanDao 国际官网新版不应只是视觉改版，也不应只是把 PPT 内容搬到网页上。它应该从“公司介绍型官网”升级为“国际餐饮科技 SaaS 的获客与信任转化站”。

新版官网的核心任务是：让海外餐饮集团、连锁品牌、中国餐饮出海团队、POS / 技术合作伙伴和外卖 / 配送生态伙伴，在 3 分钟内理解 CanDao 解决什么餐饮经营问题，在 10 分钟内判断 CanDao 是否能接入自己的业务系统，并能清晰进入 Book a Demo、Contact Sales、Partner With Us 或 Support。

建议采用“首页 + 产品 / 解决方案矩阵 + 集成目录 + 案例证明 + 信任合规 + 转化分流”的页面网络，而不是单页官网。MVP 阶段优先聚焦已经有 PPT 素材、案例素材和交付可能性的能力：多平台订单管理、菜单与门店管理、第一方点餐 / QR 点餐、配送编排、数据与对账、集成能力、香港案例与联系转化。

## 2. 来源与证据地图

| ID | 结论 / 事实 | 来源类型 | 来源 | 置信度 |
| --- | --- | --- | --- | --- |
| E01 | 国际官网需要覆盖目标市场、客户、产品、集成、案例、服务、签约、合规、联系、SEO 等内容目标 | 用户资料 | `/Users/victorwong/Downloads/香港及国际官网待确认清单.md` | 高 |
| E02 | Excel 中指定的三个竞品为 Aigens、Deliverect、TabSquare | 用户资料 | `/Users/victorwong/Downloads/website20250424.xlsx` Sheet 1 | 高 |
| E03 | 用户期望目录包含 Solutions、Integrations、Resources、About | 用户资料 | `/Users/victorwong/Downloads/website20250424.xlsx` Sheet 2 | 高 |
| E04 | CanDao PPT 提供公司背景、核心产品、OMS/COMS、QR / Online Ordering、Delivery Aggregator、DMS、案例和规模数据 | 用户资料 | `/Users/victorwong/Downloads/Candao Introduction 202401_L.pptx` | 高 |
| E05 | 竞品共同采用“经营问题 -> 业务结果 -> 产品矩阵 -> 集成 -> 证明 -> 企业可信 -> CTA”的内容链路 | 既有调研 | `projects/design-agent/tasks/T30/output/competitor-analysis-2026-07-31/report-expanded.md` | 高 |
| E06 | Deliverect 当前官网以 Products、Solutions、Partners、Integrations、Customers、Resources、Pricing 等结构承接复杂决策 | 公开网页核验 | `https://www.deliverect.com/en`、`https://www.deliverect.com/en/integrations` | 中高 |
| E07 | Aigens 当前官网以具体产品页和 Aigens Connect 承接移动点餐、Kiosk、集成和 Demo 转化 | 公开网页核验 | `https://www.aigens.com/`、`https://www.aigens.com/middleware/` | 中高 |
| E08 | TabSquare 当前官网更偏体验叙事，用 Solutions、Integrations、Pricing、Resources、Contact 承接业务目标 | 公开网页核验 | `https://tabsquare.ai/`、`https://tabsquare.ai/solutions` | 中高 |
| E09 | PPT 中规模数字存在口径冲突，不能直接上线 | 资料内矛盾 | PPT Slide 4、10、11 | 高 |
| E10 | 客户案例、Logo、数据和推荐语需要授权确认 | 用户资料 + 常规合规判断 | MD 案例确认清单 | 高 |

## 3. 产品背景

CanDao 当前拥有足够多的产品与案例素材，但国际官网需要解决两个关键问题：

1. 让海外用户快速理解 CanDao 的产品组合。PPT 中有 OMS、COMS、SOMS、DMS、IDMS、Delivery Aggregator、QR Ordering、Online Ordering、Data Asset 等表达，如果直接上站，会造成命名复杂、层级混乱、销售口径不一致。
2. 建立国际客户信任。海外客户会关注能否接入本地平台、是否有本地服务、数据如何处理、是否有合规文件、是否有国际案例、能否联系到负责团队。这些正是 MD 清单中大量待确认项所在。

因此，新版官网的第一性目标不是“展示 CanDao 很强”，而是“让客户相信 CanDao 能解决他们所在市场的具体餐饮运营问题，并愿意留下销售线索”。

## 4. 官网新版定位

### 4.1 推荐定位

CanDao 国际官网应定位为：

> 面向国际餐饮集团和连锁品牌的全渠道订单、菜单、配送与数据运营平台。

英文表达建议后续由文案阶段打磨，但语义应覆盖：

- multi-channel orders
- menu and store operations
- delivery orchestration
- integrations
- data and reconciliation
- restaurant groups / chains

### 4.2 不建议的定位

- 不建议只定位为“Delivery and mobile self-service ordering system”。这个表达过窄，会削弱 COMS、集成、数据、对账和企业级交付能力。
- 不建议把所有产品名直接堆到首屏。用户不是来记产品名，而是来判断业务问题能否被解决。
- 不建议 MVP 阶段主打 AI IM、MCP / Skill、WorkBuddy，除非已经确认国际市场产品定位、案例、交付能力和销售策略。

## 5. 目标用户与使用场景

| 用户 / 角色 | 场景 | 触发条件 | 当前痛点 | 期望结果 |
| --- | --- | --- | --- | --- |
| 海外连锁餐饮运营负责人 | 寻找多平台外卖订单、菜单、门店和配送统一管理方案 | 多平台订单增长，门店执行混乱 | 多后台切换、菜单重复维护、漏单、取消、配送异常 | 看到 CanDao 如何统一订单、菜单、库存、异常和报表，并预约演示 |
| 餐饮集团 IT / 数字化负责人 | 评估系统接入和数据能力 | 需要连接 POS、外卖平台、配送、支付、会员系统 | 现有系统复杂，担心集成成本、数据安全和稳定性 | 查到集成目录、安全合规、API / 定制边界，并联系技术销售 |
| 中国餐饮品牌出海负责人 | 在香港或海外市场搭建订餐与配送能力 | 准备进入新市场或扩张门店 | 不熟悉当地外卖 / 支付 / 配送生态，缺少本地实施经验 | 看到香港案例、可服务市场、实施流程和 Contact Sales |
| 亚洲餐饮集团管理层 | 评估长期供应商可信度 | 需要统一多品牌、多市场运营 | 供应商实力、案例、稳定性、合规和本地支持不明确 | 通过 About、案例、规模数据、安全合规建立信任 |
| POS / 支付 / 配送 / 技术合作伙伴 | 寻找集成或商业合作 | 想进入 CanDao 客户生态 | 缺少伙伴入口和集成说明 | 进入 Partner With Us 或 Request Integration |
| 中小型餐厅老板 / 运营 | 想低成本启用点餐、配送或会员 | 订单渠道变多，人工成本上升 | 不知道是否适合自己，担心价格和实施复杂 | 通过精简方案说明判断是否联系销售；若无 SMB 策略则不作为 MVP 核心 |

## 6. 问题定义

当前国际官网优化要解决的是一组相互关联的问题：

- 信息架构问题：产品名和能力多，但缺少统一产品矩阵，用户难以判断入口。
- 内容表达问题：PPT 素材偏售前说明，官网需要转为短句、证据、页面节奏和转化路径。
- 国际信任问题：客户会关心服务地区、签约主体、数据合规、安全认证、案例授权和本地支持。
- 转化路径问题：不同用户意图不同，单一 Contact Us 无法同时承接销售、伙伴、支持、询价和 Demo。
- 竞品差距问题：Aigens、Deliverect、TabSquare 都已经把产品、集成、案例、资源、联系分流做成页面网络，CanDao 如果只做基础目录会显得不够成熟。

## 7. 产品目标与成功指标

### 7.1 目标

| 目标 | 说明 |
| --- | --- |
| 提升国际客户理解效率 | 用户能快速理解 CanDao 面向餐饮经营链路的产品组合 |
| 提升销售线索质量 | 表单可以按用户类型、市场、需求和集成对象收集有效信息 |
| 建立国际可信度 | 用客户案例、规模数据、安全合规、服务范围和公司资料降低决策风险 |
| 支撑 SEO 与长期内容运营 | 支持英文 / 繁中关键词、案例、FAQ、资源内容和国家落地页扩展 |
| 支撑后续设计和研发迭代 | 页面结构、内容模型和验收标准足够清晰，可直接派生任务 |

### 7.2 成功指标

| 指标 | MVP 建议目标 | 说明 |
| --- | --- | --- |
| Demo / Sales 表单提交量 | 上线后 90 天相对旧站提升 30% 或建立首个基准 | 当前缺少基准时先记录 baseline |
| 有效线索率 | 表单中公司、地区、角色、需求、联系方式完整率 > 80% | 以销售可跟进为判断标准 |
| 产品页 CTA 点击率 | 核心产品页 CTA 点击率 > 5% | 需通过 GA / 事件埋点验证 |
| 集成页使用率 | Integrations 页访问用户中搜索 / 分类交互使用率 > 20% | 证明用户在验证系统适配 |
| 案例页阅读深度 | 案例详情页 50% 滚动深度比例 > 40% | 证明案例内容有决策价值 |
| SEO 技术健康 | 关键页面可索引，Core Web Vitals 达到通过标准 | 作为上线验收项 |
| 表单响应 SLA | 销售线索内部首次响应时间可被追踪 | 具体 SLA 待确认 |

## 8. 推荐信息架构

### 8.1 顶部导航

| 一级导航 | 二级内容 | MVP 状态 | 说明 |
| --- | --- | --- | --- |
| Home | 首屏定位、产品矩阵、集成、案例、信任、CTA | P0 | 必须重新设计，不只是公司介绍 |
| Solutions | Restaurant Chains、Multi-location Operations、Delivery Operations、First-party Ordering | P0 | 按用户场景组织，帮助用户自我定位 |
| Products | Multi-channel Order Management、Menu & Store Management、Online / QR Ordering、Delivery Orchestration、Data & Reconciliation | P0 | 用统一命名重组 PPT 里的 OMS / COMS / DMS 等能力 |
| Integrations | Delivery Platforms、POS、Payment Gateway、3rd Logistics、CRM / Loyalty、Request Integration、Partner With Us | P0 | 餐饮 SaaS 国际站核心页面 |
| Customers | Case Studies、Logo Wall、Results、Testimonials | P0 | MVP 至少需要 2-4 个可公开案例或匿名案例 |
| Resources | FAQ、Support、Press、Insights / Guides | P1 | FAQ 建议 P0；Press 和 Insights 可 P1 |
| About | About Us、Milestones、Security & Compliance、Careers、Contact | P0 / P1 | About 与 Security 建议 P0，Careers 可 P1 |
| Contact | Book a Demo、Contact Sales、Support、Partner With Us | P0 | 必须按意图分流 |

### 8.2 MVP 页面清单

| 页面 | 页面目标 | 主要 CTA |
| --- | --- | --- |
| 首页 | 建立定位、价值、产品矩阵、证明与转化入口 | Book a Demo / Contact Sales |
| Solutions 总览 | 按餐饮经营场景解释 CanDao 如何覆盖不同需求 | Explore Products / Book a Demo |
| Products 总览 | 统一呈现产品矩阵，降低命名复杂度 | View Product / Contact Sales |
| Multi-channel Order Management | 解释多平台订单接入、统一接单、异常监控 | Book a Demo |
| Menu & Store Management | 解释门店、菜单、库存、售罄、批量同步 | Book a Demo |
| Online / QR Ordering | 解释自有官网 / H5 / QR 点餐、会员与营销 | Book a Demo |
| Delivery Orchestration | 解释配送聚合、自有骑手、智能派单、消费者短信追踪 | Book a Demo |
| Data & Reconciliation | 解释报表、BI、经营数据和财务对账 | Contact Sales |
| Integrations | 展示支持的平台类型、集成状态和请求新集成 | Request Integration / Partner With Us |
| Customers / Case Studies | 展示客户、案例、结果和行业覆盖 | Read Case / Contact Sales |
| About / Trust | 展示公司背景、国际业务、规模、安全认证、服务能力 | Contact Us |
| Security & Compliance | 承接数据、安全、隐私、合规和法律文件 | Contact Sales |
| FAQ / Support | 回答产品、实施、集成、服务、价格、合规常见问题 | Contact Support / Book a Demo |
| Contact | 按意图分流表单和联系方式 | Submit |

## 9. 页面级需求

### 9.1 首页

首页不是全部信息的目录，而是决策路径的总入口。

| 模块 | 内容要求 | 设计 / 交互要求 |
| --- | --- | --- |
| Hero | 一句话定位 + 2-3 个业务结果承诺 + 主 CTA / 次 CTA | 使用真实餐饮运营或点餐场景视觉；不要抽象科技背景；首屏下方露出下一屏内容 |
| 信任条 | 规模数字、覆盖区域、客户数量、认证或案例 Logo | 所有数字必须经过口径确认；未授权 Logo 不展示 |
| 痛点与结果 | 多平台订单、菜单维护、配送容量、数据割裂、异常监控 | 用“Before / After”或流程图表达，不堆长文 |
| 产品矩阵 | 5 个核心能力：订单、菜单门店、点餐、配送、数据对账 | 卡片进入产品详情；每张卡只讲收益和适用场景 |
| 集成预览 | 外卖、POS、支付、物流、CRM 分类 | 进入 Integrations；展示“已上线 / 可定制 / 计划中”的状态逻辑 |
| 案例预览 | 2-4 个香港 / 国际案例 | 支持匿名案例；必须标注行业、规模、问题、结果 |
| 安全与交付 | 数据、安全、ISO、服务地区、实施支持 | 不承诺未经确认的国家、SLA 或认证范围 |
| 底部 CTA | Demo、Sales、Partner、Support 分流 | 表单入口一致，事件埋点完整 |

### 9.2 Products / Solutions

产品页应从餐饮经营场景进入，再展开功能。

推荐每个产品详情页使用统一结构：

1. 场景痛点：用户遇到什么运营问题。
2. 产品定位：该产品在 CanDao 平台中负责什么。
3. 关键收益：3-5 个业务结果。
4. 核心功能：最多 6-8 个功能组。
5. 工作流 / 数据流：订单、菜单、配送、数据如何流动。
6. 集成关系：可连接哪些系统类型。
7. 适用客户：连锁餐饮、外卖高占比品牌、多区域品牌等。
8. 案例 / 结果：客户证明或匿名结果。
9. FAQ：处理实施、价格、集成、地区、数据疑虑。
10. CTA：Book a Demo / Contact Sales。

### 9.3 Integrations

Integrations 应作为核心页面，而不是资源页下的普通列表。

| 功能 | 要求 |
| --- | --- |
| 分类 | Delivery Platforms、POS、Payment Gateway、3rd Logistics、CRM / Loyalty、Ordering Channels、API |
| 搜索 | 支持按平台名搜索 |
| 状态 | 至少区分 Supported、Custom Integration、Planned 或 Contact Us |
| 国家差异 | 如果同一平台仅在特定市场支持，需要显示地区 |
| 请求新集成 | 用户可提交平台名称、国家、公司、当前系统、需求说明 |
| 伙伴入口 | 技术伙伴可申请合作，区别于餐厅销售线索 |
| 风险提示 | 不得展示未授权 Logo 或未上线能力 |

### 9.4 Customers / Case Studies

案例页要从“客户名片”升级为“问题-方案-结果”的证据资产。

每个案例建议字段：

| 字段 | 说明 |
| --- | --- |
| 客户名称 / 是否匿名 | 未授权时可使用匿名行业案例 |
| 市场 / 地区 | 香港、海外或中国大陆 |
| 餐饮类型 | QSR、Pizza、Hotpot、Coffee、Fine Dining、Retail 等 |
| 门店规模 | 可公开时展示 |
| 使用产品 | COMS、Online Ordering、Delivery Orchestration、DMS、Data 等 |
| 原始问题 | 多平台订单、菜单维护、配送、数据、会员等 |
| CanDao 方案 | 具体能力组合 |
| 业务结果 | 效率、取消率、订单量、复购、销售等，必须有授权和口径 |
| 推荐语 | 可选，必须授权 |

### 9.5 About / Trust / Security

About 不应只是公司履历，应承担国际客户信任建立。

必须覆盖：

- 公司背景与国际业务说明。
- CanDao 与 51WM Company Ltd 的品牌 / 签约主体关系。
- 可公开办公室与联系方式。
- 规模数据和客户覆盖。
- 安全认证、服务管理、数据保护。
- 数据存储、备份、权限、审计、合规文件入口。
- 国际服务范围、语言、时区和实施支持。

### 9.6 Contact

Contact 页需要从单一表单改为意图分流。

| 入口 | 表单重点字段 | 接收 / 路由 |
| --- | --- | --- |
| Book a Demo | 姓名、邮箱、公司、国家、门店数、角色、需求、期望时间 | 国际销售 |
| Contact Sales | 公司、市场、产品兴趣、预算 / 时间线可选 | 国际销售 |
| Partner With Us | 伙伴类型、系统类型、国家、API / 商务合作需求 | BD / Partner 负责人 |
| Request Integration | 平台名称、国家、当前系统、需求量级、备注 | 产品 / 售前 / BD |
| Support | 客户身份、问题类型、紧急程度、订单 / 门店信息可选 | 客服 / 支持 |

## 10. 内容策略

### 10.1 内容表达原则

- 先讲业务结果，再讲产品功能。
- 先讲国际客户熟悉的词，再解释 CanDao 内部产品名。
- 先讲场景和证据，再给 Demo。
- 所有数字、Logo、客户名、认证和地区承诺必须可验证。
- 英文站不应直接翻译中文售前话术，应重写为国际 SaaS 官网语言。

### 10.2 推荐内容主线

| 主线 | 解释 | 可用素材 |
| --- | --- | --- |
| Connect every order channel | 统一管理外卖平台、自有点餐、POS 等订单 | PPT OMS / COMS、Foodpanda、Deliveroo |
| Update menus and stores once | 一次维护门店、菜单、库存、售罄，跨平台同步 | PPT Menu Center、Store Management |
| Orchestrate delivery capacity | 编排自有骑手与第三方配送，提升高峰期履约能力 | PPT Delivery Aggregator、DMS、Rider App |
| Turn operations data into decisions | 统一报表、BI、对账和异常监控 | PPT Reporting Center、Finance Center |
| Prove local and regional experience | 香港案例、餐饮集团、ISO、服务能力 | Pizza-Box、JIA Group、Paisanos、Jardine、ISO |

### 10.3 内容不应直接上线的部分

- 中国大陆 POS 供应商长名单，除非用于“中国市场能力”说明，不建议放在国际站主视觉。
- 疫情相关功能，例如核酸 / 疫苗文件管理，除非有特定市场需求。
- 未确认的 500M+ Daily Processing Orders 等口径冲突数据。
- 未确认的客户 Logo、客户名称、业务结果和评价。
- AI IM、MCP / Skill、WorkBuddy，如无明确国际定位与交付资料，不进入 MVP 主导航。

## 11. MVP 范围表

| 项目 | MVP 状态 | 理由 | 依赖 |
| --- | --- | --- | --- |
| 首页重构 | P0 | 国际官网首要转化入口 | 定位、规模数据、CTA、视觉素材 |
| Products / Solutions 总览 | P0 | 解决产品矩阵理解问题 | 国际产品清单 |
| Multi-channel Order Management | P0 | PPT 支撑强，国际场景明确 | 产品命名、支持平台 |
| Menu & Store Management | P0 | 与订单管理强关联，痛点明确 | 功能边界、截图 / UI 素材 |
| Online / QR Ordering | P0 | PPT 有素材，可承接 Tappo 或第一方点餐 | 是否命名为 Tappo、交付范围 |
| Delivery Orchestration | P0 | Delivery Aggregator + DMS 是差异化能力 | 自有骑手 / 第三方配送边界 |
| Data & Reconciliation | P0 | 企业客户决策需要数据与对账可信 | 报表口径、财务对账边界 |
| Integrations 页面 | P0 | 竞品共性核心页，用户决策强依赖 | 集成清单、支持状态、Logo 授权 |
| Contact 分流表单 | P0 | 直接影响销售线索质量 | 接收人、CRM / 邮箱、SLA |
| Customers / Cases | P0 | 建立国际信任 | 客户授权、案例数据、推荐语 |
| About / Trust | P0 | 国际客户需要公司与签约可信度 | 51WM 资料、办公室、规模数据 |
| Security & Compliance | P0 | 国际站上线风险项 | Privacy、Terms、DPA、Cookie、数据存储 |
| FAQ | P0 | 降低销售前疑虑 | 产品、集成、价格、实施、支持答案 |
| SEO / Analytics / Redirect | P0 | 国际官网基础设施 | GSC、GA、关键词、旧 URL |
| Press / Insights | P1 | 长期内容运营有价值，但不阻塞 MVP | 内容负责人和更新机制 |
| Careers | P1 | About 子页面即可，不是获客核心 | HR 内容 |
| Pricing / Plans | P1 | 竞品有价格页，但 CanDao 是否公开价格未确认 | 定价策略 |
| 国家落地页 | P1 | 适合 SEO 和市场差异，但需先确认优先市场 | 市场优先级、地区支持 |
| Kiosk Ordering | P1 / P2 | Excel 提到，但 PPT 支撑不足 | 产品是否正式国际化 |
| AI IM / AI-powered Operations | P2 | MD 提到，但需要产品定位和证据 | 案例、能力边界 |
| MCP / Skill / WorkBuddy | P2 | 容易偏技术概念，非官网 MVP 主需求 | 国际用户价值定义 |
| Start Free | 暂不建议 MVP | 当前更像企业销售型 SaaS，免费自助开通路径未确认 | 账号体系、计费、试用交付 |

## 12. 功能需求

| ID | 优先级 | 需求 | 理由 |
| --- | --- | --- | --- |
| FR-01 | P0 | 官网支持英文与繁体中文内容结构 | 国际站目标市场至少包含英文与香港繁中语境 |
| FR-02 | P0 | 顶部导航支持页面族与下拉分类 | 产品和集成复杂，需要降低理解成本 |
| FR-03 | P0 | 首页必须包含定位、业务结果、产品矩阵、集成、案例、信任、CTA | 承接首次访问决策 |
| FR-04 | P0 | Products / Solutions 能按场景和产品双入口组织 | 同时服务业务负责人和 IT / 产品评估者 |
| FR-05 | P0 | 每个核心产品页使用统一页面结构 | 保持认知一致，利于设计与内容生产 |
| FR-06 | P0 | Integrations 支持分类、搜索、状态、请求新集成 | 用户最关心能否接入现有系统 |
| FR-07 | P0 | Contact 表单按意图分流 | 提升线索质量和内部响应效率 |
| FR-08 | P0 | Case Studies 支持授权案例和匿名案例 | 在授权不足时仍可表达方案能力 |
| FR-09 | P0 | 合规页包含 Privacy、Terms、Cookie、DPA、数据安全入口 | 国际站上线基础要求 |
| FR-10 | P0 | 关键 CTA 需要事件埋点 | 验证官网是否带来有效转化 |
| FR-11 | P0 | 支持 SEO metadata、sitemap、robots、hreflang、结构化数据 | 支撑国际 SEO |
| FR-12 | P1 | 支持资源内容管理，包括 FAQ、Press、Insights | 长期内容运营 |
| FR-13 | P1 | 支持国家 / 市场落地页模板 | 后续扩展香港、新加坡等市场 |
| FR-14 | P1 | 支持集成伙伴申请与合作流程追踪 | 强化生态合作 |

## 13. 非功能需求

| 类型 | 要求 |
| --- | --- |
| 性能 | 首页和核心页面需满足 Core Web Vitals 基础标准；图片需要响应式与压缩 |
| 可访问性 | 表单、按钮、导航、颜色对比、键盘访问满足基础可访问性要求 |
| 国际化 | 英文与繁中内容不能混排失控；URL、metadata、hreflang 明确 |
| 安全与隐私 | 表单提交、Cookie Consent、隐私政策、数据处理说明必须上线前完成 |
| 可维护性 | 产品、集成、案例、FAQ、资源内容应使用结构化内容模型 |
| 分析 | GA / GSC / 表单事件 / CTA 点击 / 搜索交互需要可追踪 |
| 合规 | 不展示未经授权的客户 Logo、数据、评价、合作伙伴 Logo |
| 响应式 | 移动端导航、产品卡片、集成列表、表单必须可用 |

## 14. 用户故事

| ID | 作为 | 我希望 | 以便 | 优先级 |
| --- | --- | --- | --- | --- |
| US-01 | 海外连锁餐饮运营负责人 | 在首页快速看懂 CanDao 能解决哪些运营问题 | 判断是否值得预约 Demo | P0 |
| US-02 | 海外餐饮集团 IT 负责人 | 查看 CanDao 能接入哪些外卖、POS、支付、配送和 CRM 系统 | 判断系统集成可行性 | P0 |
| US-03 | 中国餐饮品牌出海负责人 | 看到 CanDao 在香港或海外服务过哪些客户和场景 | 建立市场进入信心 | P0 |
| US-04 | 餐饮集团管理层 | 查看公司背景、规模、安全认证和服务范围 | 判断供应商可信度 | P0 |
| US-05 | 餐厅运营团队 | 了解如何一次维护菜单、库存和门店信息并同步多平台 | 评估是否能减少重复人工 | P0 |
| US-06 | 配送负责人 | 理解 CanDao 如何调度自有骑手和第三方配送 | 判断高峰期配送能力是否能改善 | P0 |
| US-07 | 财务 / 数据负责人 | 查看订单报表、运营数据和对账能力 | 判断是否能支持管理和财务流程 | P0 |
| US-08 | 技术合作伙伴 | 找到合作入口并说明自己的系统类型 | 申请集成或商务合作 | P0 |
| US-09 | 潜在客户 | 根据自己的意图选择 Book a Demo、Contact Sales、Support 或 Partner | 减少沟通成本 | P0 |
| US-10 | 内容运营者 | 更新案例、FAQ、资源和集成信息 | 保持官网长期可运营 | P1 |
| US-11 | 市场负责人 | 查看不同页面和 CTA 的转化数据 | 判断官网优化效果 | P0 |

## 15. 验收标准

| 用户故事 / 需求 ID | 验收标准 | 验证信号 |
| --- | --- | --- |
| US-01 / FR-03 | 首页首屏在桌面和移动端均能看到定位、核心价值和主 CTA | 设计评审 + 响应式截图 |
| US-01 / FR-03 | 首页在首屏后 2 个模块内出现产品矩阵或业务问题说明 | 页面走查 |
| US-02 / FR-06 | Integrations 页至少支持 5 类集成分类 | 页面内容检查 |
| US-02 / FR-06 | 用户可以按平台名称搜索或筛选集成 | 前端交互测试 |
| US-02 / FR-06 | 每个集成项显示支持状态或联系确认状态 | 内容模型检查 |
| US-03 / FR-08 | 至少上线 2 个授权案例，或 1 个授权案例 + 2 个匿名案例 | 法务 / 客户授权记录 |
| US-04 / FR-09 | About / Trust 页面能找到公司主体、安全认证、隐私和条款入口 | 页面走查 |
| US-05 / FR-05 | Menu & Store Management 页包含批量维护、跨平台同步、库存 / 售罄、门店设置等核心内容 | 内容评审 |
| US-06 / FR-05 | Delivery Orchestration 页清楚区分 Delivery Aggregator、DMS、自有骑手和第三方配送 | 产品评审 |
| US-07 / FR-05 | Data & Reconciliation 页包含报表、仪表盘、订单数据、财务对账能力 | 产品评审 |
| US-08 / FR-07 | Partner With Us 与 Request Integration 表单字段不同，提交后可路由到正确负责人 | 表单测试 + 接收人确认 |
| US-09 / FR-07 | Contact 页至少有 Demo、Sales、Partner、Support 四类入口 | 页面走查 |
| US-11 / FR-10 | 所有主 CTA、表单提交、集成搜索、语言切换均有事件埋点 | GA / Tag 测试 |
| FR-01 | 英文与繁中页面 URL、metadata、语言标识正确 | SEO 检查 |
| FR-11 | sitemap、robots、canonical、hreflang、OG image、页面标题和描述已配置 | SEO QA |
| 非功能 | 移动端无文字溢出、按钮重叠、表单不可点击等问题 | 多视口 QA |
| 非功能 | 表单隐私告知、Cookie Consent 和 Privacy 链接存在 | 合规 QA |

## 16. 产品 / 设计逻辑评审

### 16.1 用户场景适配

新版官网最适合优先服务“连锁餐饮 / 餐饮集团 / 出海品牌 / 技术伙伴”。这些用户需要的不是漂亮品牌故事，而是：

- 能否接入我已有平台。
- 能否覆盖我的国家 / 地区。
- 能否减少运营成本和异常。
- 是否有类似客户案例。
- 数据和合规是否可信。
- 我下一步该找谁。

因此，MVP 应优先做企业销售型转化，不建议优先做 Start Free。

### 16.2 用户体验适配

推荐体验路径：

```text
首页定位
-> 选择场景或产品
-> 查看集成能力
-> 查看案例 / 信任证明
-> 查看 FAQ / 合规
-> 提交 Demo / Sales / Partner 表单
```

需要避免的体验问题：

- 导航只按内部产品名组织，用户看不懂。
- 主页堆满公司历史、产品名和长段文字，用户无法快速判断价值。
- 集成只用 Logo 墙，不说明支持状态和地区。
- 案例只有客户名，没有问题、方案、结果。
- Contact 表单字段过少，导致销售后续反复补问。
- Contact 表单字段过多，用户还没建立信任就被吓走。建议不同入口使用不同字段。

### 16.3 商业逻辑判断

- 主 CTA 推荐 Book a Demo / Contact Sales。CanDao 当前更像企业销售型 SaaS，不适合在未确认账号、试用、计费、交付流程前主推 Start Free。
- Partner With Us 应作为重要次级 CTA。国际市场的 POS、配送、支付、会员生态合作可能带来更高杠杆。
- Pricing 可以有入口，但 MVP 不建议公开具体价格，除非已确认国家、门店规模、产品组合和实施成本的报价策略。可先采用“Get a tailored quote”。
- 国家落地页有 SEO 价值，但必须在确认优先市场和本地服务能力后再做，否则会造成过度承诺。

### 16.4 不合理或高风险点

| 风险点 | 判断 |
| --- | --- |
| 把 PPT 直接转成网页 | 会造成信息过长、术语混乱、国际用户理解困难 |
| 未确认产品清单就开设一级页面 | 会导致销售口径和交付能力不一致 |
| 使用冲突规模数字 | 会降低可信度，甚至带来合规风险 |
| 展示未授权客户 Logo / 数据 | 高风险，必须授权 |
| 把中国市场集成能力包装为国际能力 | 会造成误导，应区分地区支持 |
| 主推 AI / MCP / WorkBuddy | 如果没有清晰国际用户价值，会稀释官网核心转化 |
| 缺少 Privacy / Cookie / Terms / DPA | 国际站上线基础风险 |

## 17. 风险与依赖

| 项目 | 影响 | 缓解方式 |
| --- | --- | --- |
| 国际产品清单未定 | 影响导航、页面、文案和销售口径 | 产品 / 销售 / 交付共同确认 P0 产品矩阵 |
| 目标市场优先级未定 | 影响语言、SEO、地区承诺和联系方式 | 先以香港 + 国际英文通用为 MVP 假设 |
| 规模数据口径冲突 | 影响可信背书 | 建立官网可用数字清单，每个数字标注日期、统计口径和授权人 |
| 案例授权不完整 | 影响案例页和 Logo 墙 | MVP 支持匿名案例，同时推进授权 |
| 集成状态不清 | 影响 Integrations 页可信度 | 集成项必须有状态和地区字段 |
| 合规文件缺失 | 阻塞国际站上线 | Privacy、Terms、Cookie、DPA 作为 P0 依赖 |
| 联系表单无人接收 | 线索丢失 | 上线前确认接收人、通知方式、SLA 和测试 |
| 语言质量不足 | 国际客户信任下降 | 英文 / 繁中文案需要专业审核，不做机器直译上线 |
| 视觉素材不足 | 网站显得抽象或像模板 | 优先使用真实餐饮场景、产品 UI、流程图和授权案例素材 |

## 18. 假设

| 假设 | 置信度 | 验证方式 |
| --- | --- | --- |
| MVP 第一阶段以香港和国际英文通用市场为主 | 中 | 用户确认目标市场优先级 |
| CanDao 国际站主转化目标为 Book a Demo / Contact Sales | 中高 | 用户确认销售流程 |
| COMS / OMS、Online / QR Ordering、Delivery Orchestration、Data & Reconciliation 是 P0 产品线 | 中高 | 产品和销售确认国际交付能力 |
| 具体价格不公开，先使用 Contact Sales / Get Quote | 中 | 商务确认定价策略 |
| Pizza-Box、JIA Group、Paisanos、Jardine 至少部分案例可公开 | 中 | 客户授权确认 |
| 公开集成可以先按类别展示，具体 Logo 需授权后补充 | 高 | 集成负责人确认 |
| AI IM、MCP / Skill、WorkBuddy 不进入 MVP 主导航 | 中 | 产品负责人确认 |

## 19. 待确认问题

### 19.1 最关键的 5 个决策问题

| 问题 | 为什么重要 | 建议负责人 | 阻塞级别 |
| --- | --- | --- | --- |
| 第一阶段国际官网优先服务哪 1-2 个市场？ | 决定语言、SEO、案例、联系方式、服务承诺 | 业务负责人 / 国际销售 | 高 |
| 国际站正式展示哪些 P0 产品？产品英文名是什么？ | 决定导航和页面结构 | 产品负责人 / 销售负责人 | 高 |
| 哪些客户、Logo、业务数据和案例可以公开？ | 决定信任模块和案例页 | 客户成功 / 销售 / 法务 | 高 |
| 已上线的海外平台、POS、配送、支付、CRM 集成清单是什么？ | 决定 Integrations 页真实性 | 产品 / 交付 / 技术 BD | 高 |
| Privacy、Terms、DPA、Cookie、数据存储、安全认证资料是否齐备？ | 决定国际站是否可安全上线 | 法务 / 安全 / IT | 高 |

### 19.2 其他确认项

| 问题 | 为什么重要 | 建议负责人 | 阻塞级别 |
| --- | --- | --- | --- |
| 是否按国家展示不同产品、联系方式或案例？ | 影响国家落地页和内容模型 | 市场 / 销售 | 中 |
| 是否公开价格或套餐？ | 影响 Pricing 是否进入 MVP | 商务 / 销售 | 中 |
| Tappo 是否作为独立产品及一级页面？ | 影响产品命名与导航 | 产品 | 中 |
| Kiosk Ordering 是否已有可国际化产品和素材？ | Excel 提到，但 PPT 支撑不足 | 产品 | 中 |
| AI IM、MCP / Skill、WorkBuddy 是否公开？ | 影响品牌焦点和技术叙事 | 产品 / 管理层 | 中 |
| 国际销售邮箱、电话、WhatsApp、LinkedIn、地图等资料是什么？ | 影响 Contact 页上线 | 销售 / 市场 | 高 |
| 客服时区、服务语言、响应时间和 SLA 能否公开？ | 影响 Support / FAQ | 客服 / 交付 | 中 |
| 旧 URL 跳转规则是什么？ | 影响 SEO 与用户访问 | 技术 / 市场 | 中 |

## 20. 任务拆解

### 20.1 产品 / 调研

| 任务 | 输出物 | 优先级 |
| --- | --- | --- |
| 确认目标市场和 ICP | 市场优先级与用户分层文档 | P0 |
| 确认国际产品矩阵 | 产品清单、英文命名、页面优先级 | P0 |
| 建立集成清单 | 集成矩阵：类别、平台、国家、状态、Logo 授权 | P0 |
| 建立案例授权清单 | 可公开客户、匿名案例、可用数据、推荐语 | P0 |
| 统一规模数据口径 | 官网可信数字表 | P0 |
| 确认转化路径 | Demo / Sales / Partner / Support 表单字段和接收人 | P0 |
| 制定 SEO 关键词 | 英文和繁中关键词、页面 title / description 草案 | P0 |

### 20.2 内容

| 任务 | 输出物 | 优先级 |
| --- | --- | --- |
| 官网信息架构细化 | Sitemap、导航、页面说明 | P0 |
| 首页文案 | Hero、价值主张、模块文案、CTA | P0 |
| 产品页文案 | 5 个核心产品页文案 | P0 |
| 集成页内容 | 分类、集成项、状态说明、表单说明 | P0 |
| 案例页内容 | 2-4 个案例详情或匿名案例 | P0 |
| FAQ 内容 | 产品、实施、集成、价格、支持、安全 | P0 |
| 法务合规内容 | Privacy、Terms、Cookie、DPA 链接与摘要 | P0 |

### 20.3 设计

| 任务 | 输出物 | 优先级 |
| --- | --- | --- |
| 视觉方向探索 | 真实餐饮场景 + 企业级 SaaS 清晰度的视觉板 | P0 |
| 导航与页面框架 | Desktop / Mobile wireframe | P0 |
| 首页高保真设计 | 关键模块与 CTA 状态 | P0 |
| 产品页模板 | 产品详情页组件化模板 | P0 |
| 集成目录设计 | 搜索、筛选、卡片、状态标签 | P0 |
| 表单与转化流 | 多意图表单、成功状态、错误状态 | P0 |
| 案例页模板 | 案例字段、指标、引用、CTA | P0 |
| 响应式检查 | 桌面、平板、手机主要断点 | P0 |

### 20.4 研发

| 任务 | 输出物 | 优先级 |
| --- | --- | --- |
| 技术方案 | 前端框架、CMS / 内容数据、部署和表单方案 | P0 |
| 页面实现 | MVP 页面 | P0 |
| 内容模型 | Products、Integrations、Cases、FAQ、Resources | P0 |
| 表单路由 | Demo、Sales、Partner、Support、Request Integration | P0 |
| Analytics | GA / GSC / CTA / 表单 / 搜索事件 | P0 |
| SEO 基础 | sitemap、robots、metadata、schema、hreflang、canonical | P0 |
| Cookie 与隐私 | Cookie Consent、Privacy 链接、表单 consent | P0 |
| 旧 URL 重定向 | redirect map 与测试 | P0 |

### 20.5 QA

| 任务 | 输出物 | 优先级 |
| --- | --- | --- |
| 内容准确性 QA | 数字、客户、Logo、地区、集成、产品口径检查表 | P0 |
| 响应式 QA | 多视口截图和问题清单 | P0 |
| 表单 QA | 提交、错误、成功、通知、路由测试 | P0 |
| SEO QA | indexability、metadata、hreflang、sitemap、redirect | P0 |
| 合规 QA | Privacy、Terms、Cookie、DPA、consent 检查 | P0 |
| 可访问性 QA | 键盘、颜色对比、label、focus、alt text | P1 |

## 21. 设计任务提案

可派生一个设计任务：

> 基于本 PRD，为 CanDao 国际官网新版产出 sitemap、首页 wireframe、产品页模板、集成页模板、案例页模板、Contact 分流表单和视觉方向。设计需融合 Deliverect 的结构清晰、Aigens 的产品深度、TabSquare 的体验叙事，但不得复制竞品文案、素材、Logo、页面截图或品牌资产。

建议设计验收重点：

- 首屏是否清楚表达 CanDao 国际定位。
- 用户能否从导航快速找到产品、集成、案例和联系入口。
- 产品页是否从业务问题进入，而不是堆功能。
- 集成页是否像可验证目录，而不是 Logo 展示墙。
- 联系页是否能按意图分流。

## 22. 研发任务提案

可派生一个研发任务：

> 基于确认后的 sitemap、内容模型和设计稿，实现 CanDao 国际官网 MVP。需支持英文 / 繁中、多页面内容结构、产品与集成内容数据化、案例与 FAQ 管理、多意图表单、基础 SEO、Analytics、Cookie Consent、旧 URL 重定向和响应式体验。

建议研发验收重点：

- 内容可维护，不把产品、集成、案例硬编码到大量重复组件中。
- 表单可路由、可追踪、可测试。
- SEO 和多语言基础设施在首版就完成。
- 图片和视频素材性能可控。
- 所有合规入口存在且可访问。

## 23. 交付前自检清单

- [ ] 已确认国际站 P0 产品矩阵。
- [ ] 已确认目标市场优先级。
- [ ] 已确认客户案例和 Logo 授权。
- [ ] 已确认所有规模数字口径。
- [ ] 已确认集成清单与支持状态。
- [ ] 已确认公司主体、联系方式、签约主体和服务范围。
- [ ] 已确认 Privacy、Terms、Cookie、DPA、数据存储、安全认证。
- [ ] 已确认表单接收人和响应流程。
- [ ] 已配置 SEO、Analytics、sitemap、redirect。
- [ ] 已完成桌面和移动端 QA。
