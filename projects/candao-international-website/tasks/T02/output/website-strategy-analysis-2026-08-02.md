# Website Strategy Analysis

任务：T02 官网策略 Agent  
项目：餐道国际官网重构  
输出语言：简体中文  
生成时间：2026-08-02  
Agent 来源：`agent-pd` 生成的 `candao-website-strategy-analyzer` 规格  

## 1. 分析边界

### 1.1 输入资料

本策略分析基于以下资料：

- T01 v1.1 输入文档：`tasks/T01/output/candao-international-website-input-document-2026-08-02.md`
- Agent-PD 生成的 Agent 规格：`tasks/T02/output/international-website-strategy-agent-spec-2026-08-02.json`
- T01 中整理的企业资料、产品资料、竞品网站、菜单结构、首页素材池和待确认清单。

### 1.2 输出定位

本文件是内部策略分析文档，用于支撑 T03《Candao International Website Strategy V1.0》。

本文件不生成最终官网页面 Copy，不输出可直接上线的繁体中文或英文网页文案。

### 1.3 当前假设

- 待确认问题暂不阻塞 T02，但会影响 T06/T07 的正式官网文案。
- 在目标市场未完全确认前，策略默认采用“香港作为可信起点，面向亚洲及国际连锁餐饮客户扩展”的分析假设。
- 所有客户 Logo、案例数据、集成状态、认证、SLA 和规模数字在未确认前只作为“可用素材方向”，不得作为官网确定事实发布。

## 2. 品牌定位分析

### 2.1 当前品牌认知

Candao 当前资料中呈现出的品牌认知主要有三层：

1. 餐饮 SaaS 与 O2O 系统服务商  
   资料强调 Candao 从餐饮外卖、电话订餐、订单系统和门店管理系统发展而来，服务对象以连锁餐饮品牌为主。

2. 多渠道订单、菜单、配送与数据连接平台  
   产品资料显示 Candao 能连接外卖平台、POS、支付、会员、配送和后台报表，核心能力不是单点工具，而是将订单、门店、菜单、配送和数据打通。

3. 具备香港和中国连锁餐饮交付经验的运营型技术伙伴  
   PPT 中的 Pizza-Box、JIA Group、Paisanos、Jardine / KFC / Pizza Hut / PHD 等案例，以及香港生态资料，说明 Candao 有本地化餐饮运营和交付经验。但这些内容的授权与公开口径仍需确认。

当前品牌认知的优势：

- 有真实餐饮行业经验，而不是泛 SaaS 工具。
- 产品能力覆盖订单、菜单、配送、数据和集成，适合讲“运营平台”。
- 香港案例和大型连锁客户素材具备国际官网信任潜力。
- ISO 27001 / ISO 20000、系统稳定性和服务能力可支撑企业级信任。

当前品牌认知的不足：

- PPT 资料偏产品说明书，容易让官网变成功能堆叠。
- OMS、COMS、DMS、Delivery Aggregator 等内部产品名称多，国际客户第一眼不一定理解。
- 中国市场、香港市场、国际市场的产品范围与服务范围尚未清晰分层。
- 数据口径不一致，导致官网不能直接使用最强数字背书。
- CanDao 与 51WM Company Ltd 的公开关系虽已确认方向，但 T01 未拿到完整公开表述。

### 2.2 国际市场定位建议

建议将 Candao 国际官网的定位从“餐饮系统供应商”提升为：

> 面向连锁餐饮品牌的智能运营 SaaS 平台，帮助企业统一订单、菜单、配送、集成与经营数据。

可保留的英文定位方向：

> Intelligent SaaS Platform for Global Restaurant Operations

但 T03 需要继续打磨，因为这个英文方向比较标准，还需要更贴近 Candao 的真实差异。建议 T03 至少比较三种定位：

| 定位方向 | 适用性 | 风险 |
| --- | --- | --- |
| Intelligent SaaS Platform for Global Restaurant Operations | 适合作为总定位，覆盖订单、配送、数据和运营 | 较通用，需要用案例和场景强化差异 |
| Omnichannel Operations Platform for Restaurant Brands | 更贴近多渠道订单、菜单、配送和数据统一 | 对“餐饮智能运营”表达稍窄 |
| Connected Ordering, Delivery and Data Platform for Restaurant Operators | 更具体、易懂，适合首屏说明 | 品牌高度略弱 |

当前建议：

- T03 可采用“总定位 + 业务化解释”的双层结构。
- 总定位负责建立 SaaS 品牌感。
- 业务化解释负责让餐饮客户立即理解 Candao 解决什么问题。

### 2.3 SaaS 化表达方向

Candao 官网不应首先说：

- OMS 系统；
- DMS 系统；
- QR Code Ordering；
- Delivery Aggregator；
- 报表中心；
- 财务中心。

应首先说：

- 统一管理多渠道订单；
- 一次维护菜单，同步到多个平台；
- 在高峰期协调自有与第三方配送；
- 让总部看清门店、渠道、配送和财务数据；
- 连接外卖平台、POS、支付、会员和配送生态。

建议的 SaaS 化表达规则：

| 内部产品表达 | 官网表达方式 | 原因 |
| --- | --- | --- |
| OMS / COMS | 全渠道订单与门店运营管理 | 国际客户先理解业务结果，再理解产品名称 |
| DMS | 自有骑手配送管理与实时追踪 | 避免变成骑手 App 功能列表 |
| Delivery Aggregator | 聚合配送与弹性运力调度 | 强调高峰期和成本优化价值 |
| Data Asset | 跨渠道数据分析与财务对账 | 从报表清单转成经营决策价值 |
| Integrations | 集成生态与 API 连接能力 | 支撑国际客户采购信任 |

### 2.4 竞争差异判断

从参考网站看：

- Aigens 更强调企业级 ordering、payment、loyalty 和安全可信。
- Deliverect 更强调全渠道数字点餐、集成生态、全球规模和企业级增长。
- TabSquare 更强调 AI、用餐体验旅程、自助点餐和顾客互动。

Candao 的可差异化位置：

- 不只做点餐体验，也不只做第三方平台订单整合。
- 更适合表达为“餐饮运营中台”：订单、菜单、配送、门店、集成、报表和服务交付一体化。
- 香港及亚洲餐饮交付经验是重要差异，尤其适合连接本地餐饮集团、中国品牌出海和亚洲餐饮集团。

建议竞争表达：

- 不要正面对比竞品功能数量。
- 要强调 Candao 对餐饮运营复杂度的理解：门店多、平台多、菜单多、配送复杂、数据割裂。
- 用业务结果和真实场景替代“我们也有很多系统”。

## 3. 用户分析

### 3.1 用户一：海外连锁餐饮集团

典型对象：

- 香港、新加坡、英国、澳洲、北美等市场的区域性或国际连锁餐饮集团。
- 拥有多门店、多渠道、多品牌或复杂配送场景。

核心诉求：

- 总部希望统一管理多平台订单、门店状态、菜单和库存。
- 减少门店在多个平台、设备和系统之间切换。
- 提升高峰期订单处理稳定性。
- 看清不同门店、平台、区域和时间段的经营数据。
- 在现有 POS、支付、配送和会员系统基础上接入新平台。

采购关注点：

- 是否支持本地主要外卖平台、POS、支付和配送生态。
- 是否有同区域或同类型客户案例。
- 系统是否稳定、安全、可扩展。
- 是否能支持多门店、多国家、多语言和权限管理。
- 是否有本地或跨时区实施支持。

官网策略：

- 首页必须快速证明 Candao 理解连锁餐饮的复杂运营。
- Solutions 页面应以“多门店、多渠道、多配送、多数据”组织。
- Case Studies 页面需要至少一个强案例承接信任，但需先确认授权。

### 3.2 用户二：餐饮经营者

典型对象：

- 品牌老板、营运负责人、区域经理、门店管理者。
- 可能不是技术决策人，但会强烈影响采购。

核心诉求：

- 少漏单、少错单、少超时。
- 菜单和门店信息不要重复维护。
- 高峰期配送不要失控。
- 门店员工不要被多个设备和平台拖住。
- 希望看到系统能直接改善效率，而不是只看到技术名词。

采购关注点：

- 系统是否容易理解和落地。
- 门店员工是否容易使用。
- 是否能降低人工成本和运营风险。
- 是否有清楚的服务和支持方式。

官网策略：

- 首页 Hero 和第一屏后模块应使用经营问题切入。
- 文案应避免内部系统名开场。
- 视觉应出现真实餐厅运营场景和产品 UI，而不是纯抽象科技画面。

### 3.3 用户三：技术合作伙伴

典型对象：

- POS 厂商；
- 支付服务商；
- 配送平台；
- CRM / 会员系统；
- 外卖平台或区域技术合作伙伴。

核心诉求：

- 判断 Candao 是否可集成、如何合作、API 和数据边界是否清晰。
- 判断合作是否能带来餐饮客户、平台订单或生态价值。
- 了解 Candao 在香港及国际市场的产品范围与合作模式。

采购/合作关注点：

- 集成方式、API 文档、合作入口。
- 已支持的平台和系统类别。
- 合作伙伴申请机制。
- 数据安全、隐私、接口稳定性。

官网策略：

- Integrations 不应只做 Logo 墙，应成为独立强页面。
- 需要清晰分类：Delivery Platforms、POS、CRM、Third-party Logistics、Payment Gateway、API。
- 对未确认集成状态，应使用“已上线 / 可定制 / 需确认”的内部策略标签；正式对外展示前再定稿。

### 3.4 购买决策链路

建议将国际官网的购买决策链路理解为：

1. 认知：用户确认 Candao 是餐饮运营 SaaS，不是普通外包开发或单一外卖工具。
2. 理解：用户理解 Candao 能统一订单、菜单、配送、数据和集成。
3. 信任：用户看到客户案例、集成生态、安全认证、服务能力和本地经验。
4. 适配：用户确认 Candao 是否支持所在市场、平台、POS、配送、支付和语言。
5. 转化：用户提交 Book a Demo / Contact Sales / Partner With Us。

官网需要在每一步降低一个疑虑：

| 阶段 | 用户疑虑 | 官网应回答 |
| --- | --- | --- |
| 认知 | 这是做什么的？ | Candao 统一餐饮品牌的订单、菜单、配送与经营数据 |
| 理解 | 能解决我的复杂场景吗？ | 多门店、多平台、多配送、多系统集成 |
| 信任 | 是否可靠？ | 客户案例、认证、服务能力、数据证明 |
| 适配 | 能接我的系统和市场吗？ | Integrations、地区服务能力、Contact |
| 转化 | 下一步怎么开始？ | Book a Demo / Contact Sales / Partner With Us |

## 4. 官网目标分析

### 4.1 品牌展示

官网第一目标是重建国际市场对 Candao 的品牌认知。

品牌展示不应只是“公司介绍”，而应完成三件事：

- 说明 Candao 不是单点工具，而是餐饮运营 SaaS 平台；
- 说明 Candao 理解连锁餐饮真实运营复杂度；
- 说明 Candao 具备香港/亚洲及国际交付可信度。

关键页面：

- Home；
- About；
- Customers / Case Studies；
- Security / Trust；
- Integrations。

### 4.2 Demo 转化

官网第二目标是推动销售线索。

当前待确认清单中 Demo 表单字段、接收人、响应时间、销售邮箱、WhatsApp 等仍未明确，但策略上应先设定：

- 主 CTA：Book a Demo 或 Contact Sales。
- 辅助 CTA：View Solutions、Explore Integrations、See Case Studies。
- 高意向路径：Home → Solutions / Products → Integrations / Case Studies → Book a Demo。

建议：

- 如果价格策略未确认，第一阶段不建议公开 Pricing。
- Pricing 可先从主导航中弱化，使用 Contact Sales 承接。
- Demo 表单不要过长，先收集市场、门店数量、角色、联系方式、需求类型。

### 4.3 合作伙伴获取

官网第三目标是服务合作伙伴获取。

适合的合作伙伴包括：

- POS；
- 支付；
- 配送；
- 外卖平台；
- CRM / Loyalty；
- 区域实施或渠道伙伴。

官网策略：

- Integrations 页面需要承接 Partner With Us 或 Request Integration。
- About / Contact 中应有合作咨询入口。
- 如果暂时无法公开 API 文档，可先设置“Contact for integration details”式承接，但正式文案需 T06/T07 双语生成。

### 4.4 官网商业任务优先级

| 优先级 | 商业任务 | 原因 |
| --- | --- | --- |
| P0 | 建立品牌可信度 | 国际用户对 Candao 的认知不足，必须先解决“你是谁、是否可信” |
| P0 | 解释产品价值 | 产品体系复杂，必须从业务结果解释，不可直接搬 PPT |
| P0 | 获取 Demo / Sales 线索 | 国际官网应承担销售入口 |
| P1 | 展示集成能力 | 集成是餐饮 SaaS 采购关键门槛 |
| P1 | 展示客户案例 | 能显著提高信任，但受授权约束 |
| P2 | 内容运营与 SEO | 后续可逐步建设，第一阶段不要让资源页变成空壳 |

## 5. 首页策略建议

### 5.1 首页总体原则

首页不是产品目录页，也不是公司简介页。

首页应承担四个任务：

1. 建立国际 SaaS 品牌第一印象；
2. 让餐饮客户立即看到自己的经营问题；
3. 用 4-5 个能力入口解释 Candao 如何解决；
4. 用可信证明和 CTA 推动继续浏览或预约 Demo。

### 5.2 Hero 方向

Hero 应优先表达：

- 统一订单；
- 统一菜单；
- 调度配送；
- 连接数据；
- 服务连锁餐饮运营。

不建议 Hero 直接表达：

- OMS；
- DMS；
- COMS；
- Delivery Aggregator；
- 系统模块清单；
- 未确认规模数字。

Hero 推荐方向：

| 方向 | 策略价值 | 适合程度 |
| --- | --- | --- |
| 餐饮品牌智能运营平台 | 品牌高度高，可承接全产品线 | 高 |
| 统一订单、菜单、配送与营运数据 | 业务清晰，用户易懂 | 高 |
| 全渠道餐饮运营 SaaS | SaaS 感强，适合国际市场 | 中高 |
| 香港及亚洲餐饮数字运营伙伴 | 本地可信度强 | 中，需确认市场优先级 |

Hero 视觉建议：

- 餐厅运营真实场景作为主视觉基础；
- 叠加产品 UI 动效，如订单汇入、菜单同步、配送状态、数据看板；
- 避免纯抽象 3D 或无餐饮语境的科技背景；
- 首屏下方立即露出下一模块，不要只做大而空的品牌口号。

### 5.3 信息排序

建议首页信息排序：

1. Hero：一句话定位 + 业务化解释 + 主 CTA。
2. Trust Bar：客户/认证/集成/服务能力，但未确认数字只占位，不上线。
3. Problem Switcher：多平台订单、菜单重复维护、配送异常、数据割裂。
4. Capability Overview：订单、菜单、配送、数据、集成 5 个能力入口。
5. Solutions Preview：连锁餐饮、多门店运营、自营点餐、配送管理。
6. Integrations Snapshot：外卖平台、POS、支付、CRM、配送、API。
7. Case Highlight：香港或大型集团案例，需授权。
8. Final CTA：Book a Demo / Contact Sales。

### 5.4 核心表达

首页核心表达应围绕：

- 让餐饮品牌把分散的订单、菜单、配送和数据集中管理；
- 让总部看清业务，让门店少切换系统，让配送更可控；
- 让现有 POS、外卖平台、支付、CRM、配送生态能被连接起来；
- 让国际客户相信 Candao 既懂餐饮运营，也具备企业级技术和服务能力。

表达上要少用：

- “我们拥有某某系统”；
- “系统模块包括”；
- “提供一站式解决方案”这种泛化句子；
- 未确认客户或数字背书。

表达上要多用：

- 经营问题；
- 业务结果；
- 真实场景；
- 可信证据；
- 清晰 CTA。

## 6. 国际市场定位建议

### 6.1 第一阶段策略假设

在优先市场未最终确认前，建议 T02 采用以下策略假设：

- 香港作为可信起点；
- 亚洲餐饮集团和中国品牌出海作为重点叙事对象；
- 国际连锁餐饮客户作为品牌高度目标；
- 技术合作伙伴作为重要转化分支。

这个假设的好处：

- 与 T01 中已有香港案例和香港生态资料一致；
- 不会过早承诺美国、英国、澳洲等市场服务范围；
- 可以同时保持国际 SaaS 品牌感和本地可信度；
- 有利于后续 IA 把 Contact、Integrations、Case Studies 做实。

### 6.2 不同市场表达权重

| 市场/对象 | 当前策略权重 | 原因 |
| --- | --- | --- |
| 香港餐饮集团 | 高 | 已有较多案例和生态线索，是可信起点 |
| 亚洲餐饮集团 | 中高 | 与 Candao 经验较接近，适合延展 |
| 中国品牌出海 | 中高 | Candao 熟悉中国餐饮品牌与平台复杂度 |
| 英国/澳洲/北美市场 | 中 | 可作为国际方向，但服务范围和集成状态待确认 |
| 技术合作伙伴 | 中高 | Integrations 是国际官网重要信任入口 |

### 6.3 市场定位风险

- 如果最终第一阶段不是香港，首页和案例策略需要调整。
- 如果可公开国际客户不足，首页信任模块要更多依靠安全认证、服务能力和集成生态。
- 如果海外集成状态不足，Integrations 页面需要谨慎使用“可定制/咨询”策略。

## 7. 风险与后续确认项

### 7.1 不阻塞 T02 的问题

以下问题不阻塞当前策略分析，但会影响 T03 后的文案、IA 或页面内容：

- 第一阶段优先市场；
- 公开产品清单；
- 是否公开 Pricing；
- 客户案例和 Logo 授权；
- 集成状态；
- 公司签约主体公开资料；
- 数据、安全、隐私和合规材料；
- Demo 表单字段和接收流程。

### 7.2 必须在 T06/T07 前确认的问题

| 确认项 | 原因 |
| --- | --- |
| 客户 Logo、案例、数据、推荐语授权 | 直接影响官网实际展示内容 |
| 规模数字最终口径 | 不能把冲突数据写入官网 |
| 集成平台已上线/可定制/计划中状态 | 防止误导销售和合作伙伴 |
| ISO 认证主体、有效期和可公开证书 | 影响 Trust / Security 页面 |
| Privacy、Terms、Cookie、DPA 基础材料 | 国际官网必须具备法律和合规基础 |
| 联系方式、Demo 表单、表单接收人 | 影响转化闭环 |

### 7.3 当前策略可先推进的部分

- 品牌定位方向；
- 用户分析；
- 首页信息排序；
- 产品能力到解决方案的映射；
- Integrations 页面战略重要性；
- Case Studies 作为信任模块的规划；
- Contact Sales / Book a Demo 作为主转化路径。

## 8. 对 T03 的建议

T03 应基于本文件进一步固化：

- 官网定位的一句话版本；
- 中文定位和 English Positioning；
- 第一阶段市场假设；
- 官网主导航策略；
- 首页核心表达；
- 产品和 Solutions 的分层；
- 转化路径；
- 待确认事项的处理策略。

建议 T03 不要重新做资料整理，而要直接做战略取舍：

- 哪些内容放首页；
- 哪些内容进入一级导航；
- 哪些内容作为页脚或后续阶段；
- 哪些内容必须先确认才能进入官网；
- 哪些数据和案例暂时只能作为内部素材池。

## 9. 官网内容策略原则

本节为 v1.1 补充，用于把 T02 的策略判断转化为后续 T03、T04、T06、T08 可执行的内容原则。

### 9.1 总原则

官网内容应遵循四个基本顺序：

1. 从业务结果开始，而不是从产品名称开始。
2. 从客户场景开始，而不是从功能列表开始。
3. 从信任建立开始，而不是从企业自述开始。
4. 从转化路径组织内容，而不是把所有资料平均铺开。

### 9.2 页面内容基本结构

每个核心页面都应尽量包含五类内容：

| 内容层 | 作用 | 示例 |
| --- | --- | --- |
| 用户问题 | 让用户确认“这和我有关” | 多个平台订单难管理、菜单重复维护、配送异常、数据割裂 |
| 解决方案 | 说明 Candao 如何组织问题 | Omnichannel Operations、Delivery Orchestration、Data and Reconciliation |
| 产品能力 | 承接具体系统能力 | OMS / COMS、DMS、Delivery Aggregator、Integrations |
| 证明材料 | 建立可信度 | 客户案例、认证、集成生态、服务能力、数据证明 |
| CTA | 给出下一步 | Book a Demo、Contact Sales、Partner With Us |

### 9.3 页面内容表达规则

- 首页先讲品牌定位、客户问题和结果，不讲完整产品说明。
- Solutions 页面讲“场景和业务结果”，不要变成 Products 的重复页面。
- Products 页面讲“模块和能力边界”，但仍要用客户价值开头。
- Integrations 页面讲“生态连接能力和可信度”，不是单纯 Logo 陈列。
- Case Studies 页面讲“问题、方案、结果”，不得只放客户名称。
- About 页面讲“公司可信度和服务能力”，不要只写发展历史。
- Contact 页面应服务转化，不应成为单纯地址页。

### 9.4 后续 Copy Agent 使用规则

T06/T07 生成官网 Copy 时，应先回答：

- 这个页面对应哪个用户？
- 用户进入该页面时最关心的问题是什么？
- Candao 在这个问题上的解决方案是什么？
- 哪些证明材料已确认可公开？
- 页面应该把用户导向哪个 CTA？

未确认的客户、Logo、数字、集成和认证不得写成确定事实。

## 10. 用户-页面映射关系

本节为 v1.1 补充，用于支撑 T04 信息架构和 T05 Sitemap。

| 用户 | 主要问题 | 核心页面 | 辅助页面 | 主要 CTA |
| --- | --- | --- | --- | --- |
| 海外连锁餐饮集团 | 多门店、多平台、多配送、多系统集成复杂 | Home、Solutions、Products、Case Studies、Integrations | About、Security、FAQ | Book a Demo / Contact Sales |
| 餐饮经营者 | 漏单、错单、菜单重复维护、配送异常、门店效率低 | Home、Solutions、Products | Case Studies、FAQ、Contact | Book a Demo |
| 技术合作伙伴 | 是否可集成、如何合作、API 和数据边界是否清晰 | Integrations、Partner / Contact | About、Security、Resources | Partner With Us / Request Integration |
| 采购与管理层 | 是否可信、是否有案例、是否适合企业级采购 | Home、About、Case Studies、Security | Solutions、Integrations | Contact Sales |
| 实施与运营团队 | 是否易落地、是否支持本地平台、服务边界是什么 | Solutions、Products、Support / FAQ | Contact、Resources | Talk to Sales / Support Enquiry |

### 10.1 对 IA 的直接建议

- `Home` 面向所有用户，但重点承担认知、问题共鸣和转化。
- `Solutions` 优先服务餐饮经营者和连锁餐饮集团。
- `Products` 服务需要理解能力边界的运营、技术和采购用户。
- `Integrations` 同时服务企业客户和技术合作伙伴。
- `Case Studies` 服务采购信任和行业验证。
- `About / Security` 服务企业可信度、签约和合规疑虑。
- `Contact` 应分流 Demo、Sales、Partner 和 Support，不建议只做一个通用表单。

## 11. 产品体系官网表达层级

本节为 v1.1 补充，用于解决 T03/T04 必须面对的 Products 与 Solutions 区分问题。

### 11.1 建议分层

Candao 国际官网建议使用三层表达：

第一层：Solutions

面向客户场景和经营问题，回答“你遇到的问题如何解决”。

建议方向：

- Restaurant Chains
- Multi-store Operations
- Delivery Operations
- Digital Ordering
- Data-driven Operations

第二层：Platform / Products

面向产品能力边界，回答“Candao 平台由哪些能力组成”。

建议方向：

- Order Management
- Menu and Store Management
- Delivery Management
- Data Intelligence
- Integrations

第三层：Capabilities

面向具体功能，回答“系统具体能做什么”。

建议方向：

- Omnichannel Order Management
- Multi-platform Menu Synchronization
- Smart Dispatch
- Rider App
- Financial Reconciliation
- POS / Payment / CRM Integrations

### 11.2 Solutions 与 Products 的区别

| 维度 | Solutions | Products |
| --- | --- | --- |
| 用户问题 | 以场景和业务目标为中心 | 以产品模块和能力边界为中心 |
| 内容开头 | “你正在遇到什么经营问题” | “Candao 平台包含哪些能力” |
| 典型页面 | Restaurant Chains、Delivery Operations、Digital Ordering | Order Management、Delivery Management、Data Intelligence |
| 证明方式 | 场景案例、结果、客户问题 | 功能说明、UI、集成、技术能力 |
| CTA | Book a Demo / Talk to Sales | Explore Product / Book a Demo |

### 11.3 当前建议

- 主导航保留 `Solutions`，并将其作为业务价值主入口。
- 是否设置独立 `Products` 可在 T03 决策，但建议至少保留一个 `Platform` 或 `Products` 层承接产品能力。
- 不建议把 OMS、DMS、COMS 作为主导航第一层名称。
- Integrations 应独立于 Products，因为它既是产品能力，也是采购信任入口。

## 12. 战略决策矩阵

本节为 v1.1 补充，用于让 T03 做战略冻结时不再从零判断。

| 决策问题 | 候选方案 | 推荐决策 | 理由 | 风险/待确认 |
| --- | --- | --- | --- | --- |
| 品牌定位 | 餐饮系统供应商 / 餐饮 SaaS 平台 / 餐饮智能运营平台 | 餐饮智能运营 SaaS 平台 | 既有 SaaS 品牌高度，又能承接订单、菜单、配送、数据和集成 | 英文定位需 T03 打磨 |
| 首页重点 | 产品目录 / 公司介绍 / 客户场景与业务结果 | 客户场景与业务结果 | 避免首页像说明书，先让用户看到问题和结果 | 需要视觉和内容继续配合 |
| 首页 Hero | OMS / DMS / COMS / 统一订单菜单配送数据 | 统一订单、菜单、配送与营运数据 | 业务直观，国际客户易理解 | 最终文案 T06/T07 双语生成 |
| 导航策略 | 只用 Excel 菜单 / 重构导航 / 保留原始结构 | 基于 Excel 重构导航 | Excel 是初稿，缺 Home、Products、Case Studies、Security、Contact | T04/T05 需要正式 IA |
| Solutions 与 Products | 只保留 Solutions / 只保留 Products / 两者分层 | 两者分层 | Solutions 讲场景，Products 讲能力，避免混乱 | 需控制页面数量 |
| Integrations | 放在 Products 下 / 独立一级导航 / 页脚链接 | 独立一级导航 | 集成是国际 SaaS 采购关键门槛 | 集成状态和 Logo 需确认 |
| Case Studies | 首页 Logo 墙即可 / 独立页面 / 暂不展示 | 规划独立页面，首期可弱展示 | 客户案例是国际市场信任核心 | 授权未确认前不可强展示 |
| Pricing | 公开价格 / Contact Sales / 暂不出现 | Contact Sales | 企业级餐饮 SaaS 通常需按场景报价 | 是否公开价格仍需业务确认 |
| 主 CTA | Book a Demo / Contact Sales / Partner With Us / Start Free | Book a Demo + Contact Sales | Demo 和销售线索最符合当前阶段 | 表单字段和接收人需确认 |
| 视觉方向 | 纯科技 3D / 真实餐饮场景 / 软件截图堆叠 | 真实餐饮场景 + SaaS UI 动效 | 兼顾行业感和产品能力 | 需要 T10 视觉 Agent 深化 |
| 数据证明 | 使用最强数字 / 暂不使用数字 / 使用确认后数字 | 只使用确认后数字 | PPT 数据存在冲突 | T06/T07 前必须确认口径 |
| 市场起点 | 泛国际 / 香港优先 / 按国家拆站 | 香港作为可信起点，国际扩展 | 与现有案例和生态资料一致 | 第一阶段市场需业务确认 |

### 12.1 T03 必须冻结的事项

T03 不应继续泛分析，而应冻结以下策略：

- 最终中文定位；
- English Positioning；
- 官网核心叙事；
- Solutions / Products / Integrations 的关系；
- 首页 Section 顺序；
- Phase 1 与 Phase 2 页面；
- 内容表达原则；
- 转化路径；
- 待确认事项的处理方式。
