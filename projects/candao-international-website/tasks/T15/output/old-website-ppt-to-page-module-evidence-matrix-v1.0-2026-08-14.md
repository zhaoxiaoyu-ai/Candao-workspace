# 旧官网 / PPT 到新版官网页面模块证据矩阵 v1.0

任务：T15 Old Website + PPT to Page Module Evidence Matrix  
日期：2026-08-14  
状态：v1.0，可作为下一轮内容骨架输入  
输出语言：内部执行说明使用简体中文；来源中的繁体中文、英文系统名、slide 编号和 URL 保持原样。

## 0. 本轮结论

可以进入下一轮内容骨架生成，但只能进入“证据约束下的内容骨架”，不能进入最终官网 Copy、Figma 高保真或前端实现。

原因：

- 旧官网和 PPT 已经足够支撑 Home、Solutions、Platform、Integrations、Resources、About、Demo 的业务主线。
- Customers、Proof、客户 Logo、规模数字、认证和合作伙伴名称仍需要公开授权确认。
- 菜单目录、3 个参考网站、公司详情最新版尚未补齐，本矩阵不能替代这些资料。

下一轮建议先做：

```text
T16: Home / Solutions / Platform / Integrations 繁體中文内容骨架 v1.0
```

这 4 个页面有足够证据可先写结构和模块逻辑；Customers、About Proof、公开数字和客户案例暂不进入最终文案。

## 1. 已读取证据索引

### 1.1 旧官网来源

| 编号 | 来源 | 当前可用内容 | 使用方式 |
|---|---|---|---|
| OLD-SEO | `https://www.can-dao.com.hk/` title / description | 餐饮管理系统、微信小程序点餐、堂食扫码、外卖接单配送、会员管理、餐饮 O2O 一体化 | 可用于 SEO 关键词和 Home 第一认知，但不能作为产品深度唯一来源 |
| OLD-SOLUTION-292 | 旧官网 API `catid=292` | 餐道 SaaS、连接器思维、打通系统壁垒、一体化数据智能、全链路统一管理、数据资产 | Home / Platform 主线 |
| OLD-BIZ-289 | 旧官网 API `catid=289` | 外卖平台、自建系统、POS、CRM、配送、后厨、线上支付、ERP、其他 | Integrations 页面结构 |
| OLD-USERPAIN-290 | 旧官网 API `catid=290` | 打通闭环、数据利用、价值提升 | Solutions 总览的三层问题 |
| OLD-PAIN-284 | 旧官网 API `catid=284` | 聚合外卖平台管理、接单管理、私域运营、营销管理、配送管理、BI 分析、系统托管、全渠道代运营 | Solutions 场景与 Resources / Demo 服务问题 |
| OLD-PRODUCT-285 | 旧官网 API `catid=285` | OMS、CDBI、iDMS、DMS、AMS 及各自能力要点 | Platform 能力地图 |
| OLD-TAKEOUT-379 | 旧官网 API `catid=379` | 多门店、餐单管理、自建小程序 / H5、多渠道接单、数据报表、顾客营销 | Solutions / 多渠道外卖；Platform / OMS |
| OLD-DELIVERY-388 | 旧官网 API `catid=388` | 对账、门店管理、配送呼叫、订单追踪、超时提醒 | Solutions / 配送履约；Platform / iDMS |
| OLD-ONLINE-394 | 旧官网 API `catid=394` | 外卖订餐、堂食点餐、优惠通知、预约下单、移动支付、服务评价 | Solutions / 数字点餐；Platform / Mobile Ordering |
| OLD-WYW-461 | 旧官网 API `catid=461` | APP、Web、H5Web 多渠道平台、移动支付、预约、优惠、外卖订餐 | Platform / 自有点餐入口 |

### 1.2 PPT 来源

| 编号 | Slide | 当前可用内容 | 使用方式 |
|---|---:|---|---|
| PPT-COMPANY | 4-6 | 公司背景、2014、办公室与运营中心、20+ 年餐饮外送经验、SaaS / Data / Delivery / QA | About、Home 能力摘要，数字和认证需确认 |
| PPT-OPMODEL | 7-8 | 新餐饮零售复杂化、Order Flow、POS / KDS、CRM、ERP、平台、Mini-programs、OMS、IDMS、Rider App、Connector | Home 复杂生态图、Integrations |
| PPT-PERFORMANCE | 11 | Brands、orders、cities、stores、GMV、efficiency 等规模数字 | 仅进入待确认 Proof，不进入正式页面 |
| PPT-SAAS | 12 | Candao SaaS Structure、Data Centre、Order Channel、OCRM、Menu / Order / User / Basic API、POS、DMS、third party delivery、Foodpanda / Deliveroo / Keeta 等 | Platform 架构、Integrations 数据流，品牌需确认 |
| PPT-OMS-CORE | 15 | OMS 作为商户与 cashier、delivery、membership、takeaway platforms 等第三方系统的 connector；COMS、SOMS、Data Asset | Platform / OMS 主叙事 |
| PPT-OMS-PAIN | 17-19 | 多平台切换、菜单更新、数据烟囱、库存、异常订单、门店异常，以及六个业务场景 | Solutions / 多渠道外卖与多门店营运 |
| PPT-OMS-MODULES | 21-31 | Order Processing、Operation Management、Menu Center、Marketing、Messaging、Store Order、Abnormity、Inventory | Platform / OMS、COMS、SOMS、Menu Center |
| PPT-DATA | 34-36 | Reporting、Dashboard、Finance Center、订单与平台对账、差异和漏单识别 | Platform / CDBI、Solutions / 数据化营运 |
| PPT-MOBILE | 46-68 | QR Ordering、Takeaway / Delivery Ordering、H5、会员、营销、总部区域管理、异常监控、门店接单、数据报表 | Solutions / 数字点餐与自助服务；Platform / Mobile Ordering |
| PPT-IDMS | 76-86 | Aggregated Delivery Platform、APP / 客服下单、司机接单、费用、交易记录、充值退款、三步开通 | Solutions / 配送履约；Platform / 聚合物流 |
| PPT-DMS | 87-96 | DMS Web + App、自有骑手、配送规则、实时位置、第三方溢出、Admin WEB / Rider App / Consumer SMS | Platform / DMS 总览 |
| PPT-DMS-DISPATCH | 97-112 | 智能派单、人工派单、第三方派单、门店 / 骑手 / 配送 / SMS / 商圈 / 监控 / 报表 / 权限管理 | Platform / 配送调度、DMS Admin |
| PPT-RIDER-SMS | 113-131 | Rider App 角色、接单取餐送达、异常、批量派单、结算、监控、培训、Consumer SMS | Platform / Rider App、Consumer SMS，性能数字需确认 |

## 2. 页面级证据矩阵

### 2.1 Home / 首頁

页面角色：

让用户在 5 秒内理解餐道不是泛 SaaS，而是面向餐饮与零售 O2O 复杂运营的 Connector 和营运中枢。

| 模块 | 叙事任务 | 餐道业务事实 | 来源 | 产品模块 | 用户角色 | 展示方式 | 待确认项 | 泛化风险 | 准入 |
|---|---|---|---|---|---|---|---|---|---|
| Hero: F&B / Retail O2O Connector | 建立第一认知 | 餐道连接订单渠道、门店、菜单、配送、会员、支付、POS、财务和数据 | OLD-SOLUTION-292、PPT-OPMODEL、PPT-SAAS | OMS、AMS、CDBI、DMS、iDMS | 品牌总部、运营、IT | 生态连接图 + 产品 UI overlay | 英文定位句需后续双语化 | 中 | 准入 |
| Complexity Map | 说明为什么餐饮 O2O 复杂 | 多系统、多渠道、多角色导致重复维护、数据分散和履约复杂 | PPT-OPMODEL、PPT-OMS-PAIN | OMS、IDMS、DMS | 总部运营、门店、财务、配送 | 可交互系统地图 | 参考网站展示方式待补 | 低 | 准入 |
| Operating Loop | 把业务闭环串起来 | 菜单、门店、订单、配送、数据、财务可以进入同一运营链路 | OLD-USERPAIN-290、OLD-PAIN-284、PPT-SAAS | OMS、CDBI、Finance、DMS | 运营、财务、门店 | 流程动效 / stepper | 真实产品界面待补 | 中 | 准入 |
| Product System Preview | 提前说明产品体系，但不展开 | OMS、CDBI、iDMS、DMS、AMS 是旧官网核心产品服务 | OLD-PRODUCT-285、PPT-COMPANY | 全产品 | 决策者、IT、运营 | 5 个能力入口卡 + 后续导流 | 产品命名最终口径 | 低 | 准入 |
| Proof Band | 建立信任 | PPT 有规模数字、案例和认证线索 | PPT-PERFORMANCE、PPT-COMPANY、PPT-RIDER-SMS | 全产品 | 决策者 | 授权前只做“待确认证明位” | 数字、认证、客户、Logo 是否可公开 | 高 | 待确认 |

Home 禁止事项：

- 不使用无关 Logo 云。
- 不直接展示未确认规模数字。
- 不把 Solutions 和 Platform 的完整内容搬到首页。

### 2.2 Solutions / 解決方案

页面角色：

从业务场景和角色压力进入，让用户感觉“餐道理解我的运营问题”，再导向 Platform 能力。

| 模块 | 叙事任务 | 餐道业务事实 | 来源 | 推荐能力 | 用户角色 | 展示方式 | 待确认项 | 泛化风险 | 准入 |
|---|---|---|---|---|---|---|---|---|---|
| Solutions Overview: 三个核心问题 | 从业务问题开场 | 打通闭环、数据利用、价值提升 | OLD-USERPAIN-290 | OMS、CDBI、AMS | 决策者、运营负责人 | 三层问题 + 场景导流 | 是否沿用旧官网三层命名 | 低 | 准入 |
| 多渠道外卖营运 | 讲平台切换、接单、菜单、库存压力 | 多渠道外卖平台统一接单、餐单调整、门店覆盖、报表和营销 | OLD-TAKEOUT-379、PPT-OMS-PAIN、PPT-OMS-MODULES | OMS、COMS、SOMS、Menu Center | 总部运营、门店店长 | Before / After + 订单流 | Foodpanda / Deliveroo 可否展示 | 低 | 准入 |
| 多门店营运 | 讲总部和门店协同 | 门店信息、营业时间、配送条件、门店状态和渠道信息可批量维护 | PPT-OMS-MODULES、PPT-MOBILE | Operation Management、Store Abnormity | 总部、区域、门店 | 门店矩阵 + 同步状态 | 效率数字需确认 | 低 | 准入 |
| 数字点餐与自助服务 | 讲顾客入口和门店承接 | QR Ordering、H5、手机点餐、会员权益、营销活动、门店接单 | OLD-ONLINE-394、OLD-WYW-461、PPT-MOBILE | Mobile Ordering、Marketing、Membership | 顾客、门店、市场 | 顾客下单路径 + 后台承接 | McDonald's / KFC 等案例授权 | 中 | 准入 |
| 配送营运与履约 | 讲配送复杂性 | 自有骑手、第三方物流、平台配送并存，配送呼叫、订单追踪、超时提醒 | OLD-DELIVERY-388、PPT-IDMS、PPT-DMS | iDMS、DMS、Dispatch、Rider App | 配送主管、门店、骑手 | 地图 + 订单池 + 异常状态 | 物流合作方名称和价格不可直接公开 | 中 | 准入 |
| 数据化营运与财务对账 | 讲数据不是看板装饰 | CDBI、Reporting、Finance Center 可做多维报表、看板、平台订单对账和异常识别 | OLD-PAIN-284、OLD-PRODUCT-285、PPT-DATA | CDBI、Finance Center | 管理层、财务、运营 | Dashboard 状态切换 + 对账流程 | 真实报表截图 | 低 | 准入 |
| 系统托管与全渠道代运营 | 保留旧官网服务深度 | 系统托管含信息维护、订单处理、运营监督；代运营基于数据分析制定营销方案 | OLD-PAIN-284 | Merchant Service、TP / Operation Support | 品牌方、运营团队 | 服务流程 + 适用情境 | 服务范围、服务时段、交付边界 | 中 | 准入 |

Solutions 禁止事项：

- 不写成产品功能列表。
- 不使用“提升效率”“降本增效”作为独立卖点，必须说明是减少什么操作、避免什么异常。
- 配送调度、聚合物流、骑手 App 在 Solutions 中只讲场景，不讲产品 UI 细节。

### 2.3 Platform / 平台

页面角色：

解释餐道的产品能力如何工作，展示数据流、状态变化和 UI 工作流。

| 模块 | 叙事任务 | 餐道业务事实 | 来源 | 产品模块 | 用户角色 | 展示方式 | 待确认项 | 泛化风险 | 准入 |
|---|---|---|---|---|---|---|---|---|---|
| Capability Map | 建立产品体系 | OMS、COMS、SOMS、Data Asset、CDBI、iDMS、DMS、AMS、Mobile Ordering 共同组成业务闭环 | OLD-PRODUCT-285、PPT-OMS-CORE、PPT-COMPANY | 全产品 | 决策者、IT、运营 | 可筛选能力地图 | 产品命名最终口径 | 低 | 准入 |
| OMS | 说明订单管理核心 | OMS 连接 cashier、delivery、membership、takeaway platforms，并统一管理门店、餐品、多渠道订单 | PPT-OMS-CORE、OLD-PRODUCT-285 | OMS | 总部运营、IT、门店 | 订单流 + 后台 UI | 真实 OMS 截图 | 低 | 准入 |
| Order Processing Center | 讲多平台接单 | 一个账号查看多个平台订单，建立在线数据连接，降低切换后台 | PPT-OMS-MODULES、OLD-TAKEOUT-379 | COMS / OMS | 门店店长、运营 | 订单队列 + 渠道 filter | 平台名称授权 | 低 | 准入 |
| Operation Management Center | 讲门店与渠道维护 | 店铺营业时间、电话、配送条件、状态、范围等支持批量维护和同步 | PPT-OMS-MODULES、PPT-MOBILE | COMS | 总部运营、区域经理 | 批量编辑 UI | 效率数字不直接使用 | 低 | 准入 |
| Menu Center | 讲菜单库存同步 | 菜单、库存、售罄、套餐、区域菜单可跨平台同步和批量维护 | OLD-TAKEOUT-379、PPT-OMS-MODULES、PPT-MOBILE | Menu Center | 运营、门店 | Before / After + 同步状态 | 菜单截图 / 商品模板 | 低 | 准入 |
| Customer Marketing Center | 讲会员和营销 | 自有平台会员等级、积分、优惠券、营销活动；第三方平台促销活动配置 | OLD-PAIN-284、PPT-OMS-MODULES、PPT-MOBILE | Marketing、Membership | 市场、运营 | 活动配置 UI | 第三方平台活动口径 | 中 | 准入 |
| Messaging & Abnormity | 讲异常和消息不漏 | 多平台 IM、投诉、催单、取消、退款提醒；门店和订单异常自动通知 | PPT-OMS-MODULES、PPT-MOBILE、OLD-DELIVERY-388 | Messaging、Store Abnormity | 门店、客服、运营 | 异常状态中心 | 通知渠道和 UI 截图 | 低 | 准入 |
| Inventory Management | 讲库存和售罄控制 | 可售库存、售罄状态集中管理，避免超卖并同步各平台 | OLD-PRODUCT-285、PPT-OMS-MODULES | Inventory | 门店、运营 | 库存状态 UI | 真实库存规则 | 低 | 准入 |
| CDBI / Data Asset | 讲数据分析 | 多维报表、实时看板、成本利润、补贴、订单、用户、销售、骑手等报表 | OLD-PRODUCT-285、PPT-DATA、PPT-MOBILE | CDBI、Reporting | 管理层、运营 | Dashboard + drill-down | 真实指标和截图 | 低 | 准入 |
| Finance Center | 讲财务对账 | 对比外卖平台订单与 OMS 订单，识别金额、状态、漏单等异常 | PPT-DATA、OLD-PRODUCT-285 | Finance Center | 财务、运营 | 对账流程动画 | 对账平台和字段 | 低 | 准入 |
| iDMS / Aggregated Delivery | 讲聚合物流 | APP / 客服下单、司机接单、取餐配送、交易明细、充值扣费退款 | OLD-DELIVERY-388、OLD-PRODUCT-285、PPT-IDMS | iDMS | 门店、配送运营 | 物流池 + 费用 / 状态抽屉 | 物流品牌、价格、合作范围 | 中 | 准入 |
| DMS Admin WEB | 讲自有骑手管理 | Admin WEB 包含派单、运营、监控、报表、系统管理；支持自有骑手和第三方溢出 | OLD-PRODUCT-285、PPT-DMS、PPT-DMS-DISPATCH | DMS | 配送主管、调度员 | 地图 + 订单池 + rule switch | 真实地图和订单字段 | 低 | 准入 |
| Dispatch Rules | 讲“智能调度”的具体内涵 | 支持区域、路线、角度、同向派单；支持人工派单和第三方派单 | OLD-PRODUCT-285、PPT-DMS-DISPATCH | DMS Dispatch | 调度员、配送主管 | 规则切换动效 | 规则名称是否公开 | 低 | 准入 |
| Rider App | 讲骑手端流程 | 骑手接单、拒单、到店、取餐、导航、送达、收款、异常、结算、培训 | OLD-PRODUCT-285、PPT-RIDER-SMS | Rider App | 骑手、骑手长 | 手机界面流程 | App 截图或重绘授权 | 低 | 准入 |
| Consumer SMS | 讲消费者可视履约 | 消费者通过 SMS 获得配送进度、骑手电话和位置追踪 | PPT-RIDER-SMS | Consumer SMS | 顾客、客服 | 短信状态 storyboard | 号码、模板和性能数字 | 中 | 准入 |
| AMS / Open Connector | 讲生态接入 | 开放平台、统一合作入口、标准接口、定制转换中间件、安全机制 | OLD-PRODUCT-285、PPT-SAAS | AMS / Connector | IT、生态伙伴 | API flow / 系统连接图 | API 文档和安全认证 | 低 | 准入 |

Platform 禁止事项：

- 不只写抽象能力名，必须展示“状态如何变化”。
- 不把 Solutions 的业务痛点长文重复一遍。
- 不生成假 Dashboard 数字。

### 2.4 Integrations / 整合能力

页面角色：

证明餐道连接的不是零散 Logo，而是餐饮 O2O 生态里的关键系统类型和数据流。

| 模块 | 叙事任务 | 餐道业务事实 | 来源 | 产品模块 | 用户角色 | 展示方式 | 待确认项 | 泛化风险 | 准入 |
|---|---|---|---|---|---|---|---|---|---|
| Integration Categories | 建立分类 | 外卖平台、自建系统、POS、CRM、配送、后厨、线上支付、ERP、其他 | OLD-BIZ-289 | AMS、OMS、DMS | IT、运营 | 分类筛选矩阵 | 菜单目录是否补充新分类 | 低 | 准入 |
| Hong Kong Ecosystem | 讲香港业务生态 | Food Order Platform、Delivery、Can-Dao Connector、POS、Online Order Web / H5、Payment Gateway、Delivery / Rider Co. | PPT-OPMODEL | Connector、OMS、iDMS | 香港团队、IT、运营 | 香港生态图 | 品牌名、地区口径 | 中 | 准入 |
| API and Data Flow | 解释怎么连 | Menu API、Order API、User details API、Basic info API 等接口支撑数据流动 | PPT-SAAS、OLD-PRODUCT-285 | AMS、OMS | IT、技术负责人 | API swimlane | API 公开字段 | 低 | 准入 |
| POS / Store Systems | 讲门店系统连接 | POS、KDS、Kitchen、Invoice 等系统与订单链路连接 | PPT-SAAS、PPT-OMS-MODULES、PPT-MOBILE | OMS、SOMS | IT、门店 | POS 到门店出单流程 | POS 厂商名称授权 | 中 | 准入 |
| Delivery Integrations | 讲配送连接 | 第三方物流、骑手公司、聚合配送、DMS 可共同承接履约 | OLD-DELIVERY-388、PPT-IDMS、PPT-DMS | iDMS、DMS | 配送主管、门店 | 物流池 + 状态回传 | Zeek、Lalamove、Pandago 等是否公开 | 中 | 准入 |

Integrations 禁止事项：

- 不使用无关国际品牌 Logo。
- 未确认前只展示系统类型，不展示具体合作 Logo。
- 不用“seamless integration”替代接口、对象和数据流说明。

### 2.5 Customers / 客戶案例

页面角色：

证明餐道在具体业态中解决具体运营问题。当前只允许做匿名案例结构，真实客户和数字待确认。

| 模块 | 叙事任务 | 餐道业务事实 | 来源 | 产品模块 | 用户角色 | 展示方式 | 待确认项 | 泛化风险 | 准入 |
|---|---|---|---|---|---|---|---|---|---|
| Anonymous Case Framework | 建立案例模板 | PPT 包含甜品、Pizza、餐饮集团、咖啡、火锅、鲜食零售等案例线索 | PPT case slides、T14 已整理摘要 | 全产品 | 决策者、销售 | 匿名案例卡 | 客户名、Logo、数字、截图授权 | 高 | 待确认 |
| Multi-brand Chain Case | 讲连锁总部运营 | 多门店、订单流、报表分析是链锁品牌核心问题 | PPT-COMPANY、PPT-OMS-PAIN | OMS、CDBI | 连锁总部 | Before / After narrative | 真实客户和结果 | 高 | 待确认 |
| Pizza / Fast Food Case | 讲订单、菜单、配送 | PPT 有 Pizza / KFC / Pizza Hut / PHD 等线索 | PPT-MOBILE、case slides | OMS、COMS、DMS、IDMS | 总部、门店、配送 | 匿名行业案例 | 是否可公开品牌 | 高 | 待确认 |
| Delivery-heavy Case | 讲配送履约 | DMS / IDMS 支撑自有骑手、第三方溢出、监控和 SMS | PPT-IDMS、PPT-DMS、PPT-RIDER-SMS | DMS、iDMS | 配送主管 | 配送过程案例 | 数字和品牌授权 | 高 | 待确认 |
| Data / Finance Case | 讲经营和财务 | CDBI 和 Finance Center 可识别报表、订单、补贴、漏单等问题 | PPT-DATA、OLD-PRODUCT-285 | CDBI、Finance | 财务、管理层 | 指标前后对比 | 真实指标 | 高 | 待确认 |

Customers 当前结论：

- 页面可以保留。
- 第一版只写匿名案例框架。
- 未经确认不能放品牌 Logo、客户名、引用语、增长率、效率数字。

### 2.6 Resources / 資源

页面角色：

降低用户理解成本，帮助销售前教育，而不是做泛博客。

| 模块 | 叙事任务 | 餐道业务事实 | 来源 | 产品模块 | 用户角色 | 展示方式 | 待确认项 | 泛化风险 | 准入 |
|---|---|---|---|---|---|---|---|---|---|
| 接入指南 | 解释连接前需要准备什么 | 餐道连接订单渠道、POS、配送、会员、支付、ERP 等系统 | OLD-BIZ-289、PPT-SAAS | AMS、OMS | IT、运营 | Checklist | 实际接入流程 | 中 | 准入 |
| 多平台订单 FAQ | 回答多平台接单疑问 | OMS 可统一接入、订单处理、异常提醒 | OLD-TAKEOUT-379、PPT-OMS-MODULES | OMS | 门店、运营 | FAQ + 示例状态 | 真实售前问题 | 低 | 准入 |
| 菜单同步 FAQ | 回答菜单和库存问题 | Menu Center 支持菜单、库存、售罄、区域菜单和模板 | OLD-TAKEOUT-379、PPT-OMS-MODULES | Menu Center | 运营、门店 | FAQ + mini UI | 菜单目录和截图 | 低 | 准入 |
| 配送履约 FAQ | 回答 DMS / iDMS 场景 | 聚合配送、自有骑手、第三方派单、SMS、监控 | OLD-DELIVERY-388、PPT-IDMS、PPT-DMS | iDMS、DMS | 配送主管 | 场景问答 | 物流合作状态 | 中 | 准入 |
| 财务对账说明 | 解释对账价值 | Finance Center 比对平台订单和 OMS 订单，识别金额、状态、漏单 | PPT-DATA | Finance Center | 财务 | 对账流程说明 | 对账字段和输出样例 | 低 | 准入 |
| 系统托管 / 代运营说明 | 讲服务能力 | 旧官网明确系统托管和全渠道代运营 | OLD-PAIN-284 | Merchant Service | 商家、运营 | 服务范围页 | 服务边界、服务时段、报价 | 中 | 准入 |

Resources 禁止事项：

- 不做“行业洞察”空泛文章列表。
- 每个资源主题必须对应一个销售或接入疑问。

### 2.7 About / 關於 Candao

页面角色：

建立公司可信、服务经验和长期产品演进，不重复产品卖点。

| 模块 | 叙事任务 | 餐道业务事实 | 来源 | 产品模块 | 用户角色 | 展示方式 | 待确认项 | 泛化风险 | 准入 |
|---|---|---|---|---|---|---|---|---|---|
| Company Background | 建立公司基本可信 | 2014 成立，广州总部，香港 / 北京 / 上海办公室，成都运营中心 | PPT-COMPANY | 全产品 | 决策者 | 时间线 + 地图 | 办公室、团队规模是否最新 | 中 | 准入 |
| Delivery Origin Story | 讲业务经验来源 | 从电话订餐开始，沉淀餐饮外送经验 | PPT-COMPANY | Delivery、OMS、DMS | 决策者、合作伙伴 | 时间线 | 年份和表述准确性 | 低 | 准入 |
| Product Evolution | 讲产品不是临时拼装 | COMS、CDBI、DMS、IDMS 等逐步形成 F&B 解决方案 | PPT-COMPANY、PPT-OMS-CORE | 全产品 | 决策者、IT | 产品演进图 | 产品版本口径 | 低 | 准入 |
| Security / Quality | 建立信任 | PPT 提及 ISO 27001、ISO 20000、Quality Assurance | PPT-COMPANY | 全产品 | IT、采购 | 认证区块 | 认证证书与有效期 | 高 | 待确认 |
| Service Network | 讲区域支持 | 香港生态、客户服务团队、运营支持线索 | PPT-OPMODEL、PPT-IDMS、OLD-PAIN-284 | Merchant Service | 香港 / 国际客户 | 服务覆盖地图 | 服务范围、时段、语言 | 中 | 待确认 |

### 2.8 Demo / 預約產品演示

页面角色：

把访问者的业务问题变成销售和方案团队可用的需求输入。

| 模块 | 叙事任务 | 餐道业务事实 | 来源 | 产品模块 | 用户角色 | 展示方式 | 待确认项 | 泛化风险 | 准入 |
|---|---|---|---|---|---|---|---|---|---|
| Intent Selector | 按问题分流 | 多渠道订单、菜单库存、数字点餐、配送、DMS、数据、系统整合都是明确业务入口 | OLD-PAIN-284、T14、PPT-OMS-PAIN | 全产品 | 访客、销售 | 分段选择器 | 销售实际分类 | 低 | 准入 |
| System Landscape Fields | 收集当前系统 | 外卖平台、自建系统、POS、CRM、配送、后厨、支付、ERP 是连接对象 | OLD-BIZ-289、PPT-SAAS | AMS、OMS | IT、运营 | 多选表单 | 菜单目录和销售字段 | 低 | 准入 |
| Order / Delivery Profile | 收集业务规模和履约方式 | 订单渠道、门店数量、配送方式、骑手是否自有会影响方案 | PPT-OPMODEL、PPT-IDMS、PPT-DMS | OMS、iDMS、DMS | 运营、配送主管 | 条件表单 | 可收集字段与隐私规则 | 中 | 准入 |
| Data / Finance Needs | 收集报表和对账需求 | CDBI / Finance Center 处理报表、看板、对账、异常 | PPT-DATA、OLD-PRODUCT-285 | CDBI、Finance | 财务、管理层 | 需求 checklist | 销售后续流程 | 低 | 准入 |
| Demo Routing Result | 给出预约前反馈 | 根据选择推荐 OMS、DMS、iDMS、CDBI、AMS 等演示重点 | 全来源 | 全产品 | 销售、访客 | 动态 summary | CRM / 表单对接 | 中 | 准入 |

Demo 禁止事项：

- 不做只有姓名、电话、邮箱的普通表单。
- 不承诺 SLA、上线周期、价格、集成范围。

## 3. 反泛化 QA

| 检查项 | 结果 | 处理 |
|---|---|---|
| 是否仍有“统一平台”类空泛表达 | 有风险 | 必须替换为具体连接对象和流程 |
| 是否每个页面角色不同 | 已明确 | 后续生成要按本矩阵执行 |
| 是否可替换给任意 SaaS 公司 | Home / Solutions 仍需警惕 | 所有主标题必须绑定餐饮 O2O、订单、菜单、配送、门店、数据等事实 |
| 是否有未确认事实 | 有 | Proof、Customers、认证、数字、Logo、合作伙伴全部待确认 |
| 是否能进入视觉生成 | 暂不可以 | 需先生成内容骨架并通过 QA |
| 是否能进入内容骨架 | 可以 | 建议从 Home / Solutions / Platform / Integrations 开始 |

## 4. 当前可准入内容

可进入下一轮内容骨架：

- Home 的 Connector / Operating Loop / Product System Preview。
- Solutions 的多渠道外卖、多门店营运、数字点餐、配送履约、数据化营运、系统托管与代运营。
- Platform 的 OMS、COMS、SOMS、Menu Center、CDBI、Finance、iDMS、DMS、Dispatch、Rider App、Consumer SMS、AMS。
- Integrations 的系统类型分类、API / 数据流、POS / 门店系统、配送系统。
- Resources 的接入、订单、菜单、配送、财务、托管 / 代运营问题。
- Demo 的业务意图分流表单。

只能进入待确认池：

- 真实客户 Logo 和客户名称。
- PPT 中所有规模数字和效率数字。
- ISO 27001、ISO 20000 等认证。
- Foodpanda、Deliveroo、Keeta、Zeek、Lalamove、Pandago 等名称和 Logo 的公开展示。
- POS 厂商名单。
- 具体价格、费用表、服务时段、SLA、系统性能指标。
- 真实产品截图。

## 5. 下一轮生成约束

### 5.1 T16 建议范围

先生成 4 个核心页面的繁體中文内容骨架：

- Home / 首頁
- Solutions / 解決方案
- Platform / 平台
- Integrations / 整合能力

暂不生成：

- 最终 English 文案；
- Customers 真实案例；
- About 认证与数字证明；
- 视觉稿、Figma、Stitch、React 代码。

### 5.2 T16 输出格式建议

每个模块必须输出：

```text
页面：
模块：
页面角色：
用户问题：
餐道业务事实：
来源：
产品模块：
建议繁體中文标题方向：
建议说明方向：
CTA 方向：
待确认项：
泛化风险：
准入状态：
```

### 5.3 资料请求

进入 T16 前，不强制等待所有资料，但必须在文档开头列出缺口：

- 菜单目录最新文件；
- 3 个参考网站；
- 公司详情资料；
- 客户 / 数字 / 认证公开口径；
- 产品截图或可重绘界面。

如果用户此时能补资料，T16 准确度会明显提升；如果暂时不能补，也可以先只做“证据已覆盖模块”的内容骨架。
