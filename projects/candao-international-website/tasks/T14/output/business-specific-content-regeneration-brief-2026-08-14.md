# 餐道国际官网业务专属性内容再生成 Brief

任务：T14 Evidence-first Website Content Regeneration  
日期：2026-08-14  
状态：v1.0，可作为下一轮内容、Figma、Stitch、React / Next 输入前置  
输出语言：本文档为内部执行说明，使用简体中文；后续官网文案必须拆成繁體中文 + English 内容库。

## 0. 核心结论

这次重做的重点不是“把页面做得更国际化一点”，而是先把官网内容从通用 SaaS 叙事拉回餐道自己的业务事实。

新版官网当前的问题可以概括为：

- 页面看起来完整，但内容可以替换给任意餐饮 SaaS 或全渠道系统；
- Home、Solutions、Platform 多次重复“多渠道、统一平台、数据驱动、提升效率”，没有形成递进故事；
- 旧官网的“连接器 / 闭环 / 全链路统一管理 / 数据智能应用”主线没有被继承；
- PPT 中 OMS、COMS、SOMS、Data Asset、CDBI、iDMS、DMS、Rider App、Consumer SMS 等产品深度没有进入页面主叙事；
- 参考网站的视觉和布局方法压过了餐道业务内容，导致页面更像国际模板，而不像餐道官网。

因此，下一轮生成必须先完成：

```text
资料证据 -> 业务事实 -> 页面角色 -> 模块准入 -> 文案生成 -> 视觉 / 前端表达
```

不能再从：

```text
参考网站风格 -> 漂亮模块 -> 通用价值文案 -> 补一点餐道名词
```

开始。

## 1. 不可退让的执行原则

### 1.1 证据优先

每个新版官网模块进入主叙事前，必须写清：

- 页面位置
- 叙事任务
- 餐道业务事实
- 对应产品 / 功能
- 用户角色
- 业务场景
- 证据来源
- 待确认项
- 泛化风险
- 验收方式

没有证据来源的内容只能进入“待确认 / 候选内容池”，不能成为页面主标题、核心卖点、关键图形或主流程。

### 1.2 旧官网和 PPT 是内容锚点

本轮确认的分工：

| 资料 | 在新版官网中的作用 | 禁止用法 |
|---|---|---|
| 旧官网 | 保留餐道原本的业务讲述逻辑、产品分类、痛点和解决方案专属性 | 不能只把旧官网当 SEO 关键词库 |
| Candao Introduction PPT | 提供产品深度、业务流程、系统架构、模块细节、案例线索 | 不能只摘首页公司数字或泛化价值 |
| 菜单目录 | 作为 IA 和目录层级参考 | 不能在未校验业务证据时机械搬运 |
| 参考网站 | 借鉴国际化表达、信息密度、交互和前端展示方式 | 不能复制其行业无关叙事 |
| 公司详情 | 建立 About、信任、服务模式和公开口径 | 不能虚构认证、团队规模、客户和办公室 |

### 1.3 前端技术服务业务表达

更先进的前端技术不是为了“炫”，而是为了让复杂业务被看懂。

例如：

| 业务内容 | 适合的展示方式 | 不适合的展示方式 |
|---|---|---|
| 多平台订单进入 OMS | 可交互订单流、状态队列、渠道筛选、异常提醒动效 | 纯图标卡片 |
| 菜单 / 库存 / 售罄同步 | Before / After 对比、批量编辑 UI、同步状态动画 | 泛化功能列表 |
| 配送调度 | 地图 + 订单池 + 骑手状态 + 派单规则切换 | 单张抽象地图背景 |
| DMS Rider App | 手机界面流程、接单 / 取餐 / 送达状态切换 | 只写“移动端支持” |
| BI / Finance 对账 | Dashboard 状态切换、指标 drill-down、异常标记 | “数据驱动决策”一句话 |
| Integrations | 生态连接地图、系统类型筛选、数据流箭头 | 无授权 Logo 云 |

## 2. 已确认的业务证据骨架

### 2.1 旧官网叙事骨架

旧官网的核心不是“一个系统”，而是：

```text
餐饮 O2O 闭环需求复杂化 -> 餐道作为连接器 -> 打通业务系统和供应商 -> 形成一体化运营与数据智能
```

可继承内容：

| 旧官网内容 | 可转化的新官网叙事 |
|---|---|
| 餐道 SaaS 基于“连接器”思维，打通系统间技术壁垒 | Home / Platform 的核心认知：Candao 是 F&B / Retail O2O 运营连接器 |
| 业务类型包含外卖平台、自建系统、POS、CRM、配送、后厨、支付、ERP 等 | Integrations 的结构锚点，不使用无授权 Logo 云 |
| 用户痛点：打通闭环、数据利用、价值提升 | Solutions 总览的三层业务问题 |
| 聚合外卖、聚合送、网上点餐、我要外卖平台 | Platform / Solutions 的产品和场景入口 |
| OMS、CDBI、iDMS、DMS、AMS | Platform 的能力地图和产品模块 |
| 系统托管、全渠道代运营 | About / Resources / Demo 中的服务能力，不应丢失 |

### 2.2 PPT 业务深度骨架

PPT 提供的是新版官网最缺的深层业务事实。

| PPT 范围 | 关键业务内容 | 新官网承接方式 |
|---|---|---|
| Company Background | 2014 Founded、广州总部、香港 / 北京 / 上海办公室、成都运营中心、20+ 年餐饮外送经验 | About 页面建立可信背景，数字和办公室需确认公开口径 |
| Core Products / Services | SaaS Platform、Data Analysis、Intelligent Delivery、Quality Assurance | Home 能力摘要 + Platform 模块总览 |
| Operation Model | Order Flow、支付、ERP、POS / KDS、CRM、平台、Mini-programs、OMS、IDMS、Rider App、Monitoring | Home / Integrations 的复杂生态图 |
| OMS | 商户与 cashier、delivery、membership、takeaway platforms、POS 等第三方系统的 connector | Platform / Order Management 主线 |
| OMS 痛点 | 多平台切换、菜单更新、数据烟囱、库存困难、异常订单、门店异常 | Solutions / 多门店营运与 Platform / OMS |
| OMS 模块 | Order Processing、Operation Management、Menu Center、Marketing、Messaging、Finance、Reporting | Platform 能力地图，不能简化成“统一管理” |
| Mobile / QR Ordering | 外卖订餐、堂食扫码、自有 H5、会员权益、营销、门店接单、总部管理 | Solutions / 数字点餐与自助服务；Platform / 自有点餐 |
| iDMS | 聚合配送、APP / 客服下单、物流资源、交易明细、充值 / 扣费 / 退款 | Solutions / 配送履约；Platform / 聚合物流管理 |
| DMS | Admin WEB、Rider App、Consumer SMS、智能派单、人工调度、第三方溢出、监控、报表 | Platform / 配送管理、配送调度、Rider App 展示 |
| Cases / Performance | 多个客户案例和规模数字 | Customers 只能做匿名行业案例，真实品牌和数字需授权确认 |

## 3. 新版官网应解决的内容问题

### 3.1 第一问题：没有把“餐道解决的问题”讲专

旧官网和 PPT 里的问题很具体：

- 外卖平台多，门店需要反复切换后台；
- 菜单、价格、库存、售罄状态需要跨平台同步；
- 多平台订单、POS、支付、会员、配送、后厨之间有断点；
- 异常订单、超时订单、门店异常需要实时监控；
- 自建点餐、第三方平台、配送、会员和财务数据分散；
- 自有骑手和第三方物流并存时，调度和履约复杂；
- 管理层需要从数据里看出问题，而不只是看报表。

这些才是餐道的业务专属性。新版内容不能只讲“提升效率”“统一运营”“连接全渠道”。

### 3.2 第二问题：页面没有叙事分工

后续页面角色必须重新锁定：

| 页面 | 只回答的问题 | 不再承担 |
|---|---|---|
| Home | 餐道是谁，为什么复杂餐饮 O2O 运营需要它 | 不展开完整产品说明 |
| Solutions | 餐道理解哪些业务场景和角色压力 | 不做产品功能目录 |
| Platform | 具体能力如何工作，数据和流程如何流动 | 不重复讲业务痛点长文 |
| Integrations | 餐道连接哪些系统类型，如何降低接入复杂度 | 不堆无授权品牌 Logo |
| Customers | 餐道如何在真实行业场景中落地 | 不虚构客户名和结果数字 |
| Resources | 帮用户理解接入、迁移、运营和常见问题 | 不做泛博客中心 |
| About | 公司可信度、服务网络和长期经验 | 不重复 Home 的品牌口号 |
| Demo | 根据用户业务意图收集需求并分流 | 不做普通联系表单 |

### 3.3 第三问题：参考网站被当成内容来源

3 个参考网站只能解决：

- 国际化网站的信息密度；
- SaaS 产品展示样式；
- 交互节奏；
- 首页和产品页视觉组织方式；
- 前端组件表达方式。

它们不能决定餐道讲什么。餐道讲什么必须由旧官网、PPT、菜单目录和公司资料决定。

## 4. 新版全站故事路径

建议锁定为以下递进：

```text
Home：复杂餐饮 O2O 运营正在碎片化
  -> 餐道用 Connector 思维连接订单、门店、菜单、配送、会员、财务和数据

Solutions：从业务场景进入
  -> 多渠道外卖、多门店营运、数字点餐与自助服务、配送履约、数据化营运

Platform：从产品能力验证
  -> OMS / COMS / SOMS / Data Asset / CDBI / iDMS / DMS / AMS / Mobile Ordering

Integrations：证明连接能力
  -> 外卖平台、自建系统、POS、CRM、配送、后厨、支付、ERP、其他

Customers：证明落地
  -> 授权前使用匿名行业案例和业务前后对比模板

Resources：降低理解与采购阻力
  -> 接入指南、迁移 FAQ、运营问题解释、案例资源

About：建立企业可信
  -> 公司背景、服务经验、区域支持、产品长期演进

Demo：把用户问题转成销售 / 方案输入
  -> 订单渠道、菜单门店、配送履约、DMS、BI、系统整合等需求分流
```

一句话主线建议：

```text
餐道不是泛“全渠道平台”，而是面向餐饮与零售 O2O 复杂运营的连接器和营运中枢，把多渠道订单、门店、菜单、配送、会员、财务与数据重新接成可管理、可监控、可优化的业务闭环。
```

该句是内部策略句，后续应改写成繁體中文 + English 官网文案。

## 5. 页面内容再生成方向

### 5.1 Home

叙事任务：

让用户在第一屏理解餐道不是泛 SaaS，而是在解决餐饮 O2O 运营中“系统多、渠道多、角色多、数据散、履约复杂”的具体问题。

应使用的业务证据：

- 旧官网：连接器思维、餐饮 O2O 一体化解决方案、打通闭环、数据利用、价值提升；
- PPT：Operation Model、香港 Operation Eco-system、Candao SaaS Structure；
- PPT / 旧官网：OMS、CDBI、iDMS、DMS、AMS 产品体系。

建议模块：

| 模块 | 内容角色 | 证据 |
|---|---|---|
| Hero | 餐道作为 F&B / Retail O2O Connector 的第一认知 | 旧官网 solution；PPT Slide 7 / 8 / 12 |
| Complexity Map | 展示订单、POS、支付、会员、配送、后厨、财务、数据的连接复杂度 | PPT Operation Model |
| Candao Operating Loop | 菜单 / 门店 / 订单 / 配送 / 数据 / 财务形成闭环 | 旧官网 painPoints + PPT OMS / DMS |
| Product System Preview | 只概览 OMS、CDBI、iDMS、DMS、AMS，不展开功能 | 旧官网核心产品与服务 |
| Proof Placeholder | 只放可确认口径或匿名业务成果 | PPT Performance / Cases 待确认 |

禁用：

- 无授权客户 Logo 云；
- 未确认的 5000+、500M+、200K+、4.5B+、99.95% 等数字；
- “One platform for everything”式泛化表达；
- 首页重复完整讲 Solutions 和 Platform。

### 5.2 Solutions

叙事任务：

证明餐道理解餐饮与零售 O2O 业务压力，并按场景把用户导向相应产品能力。

建议场景：

| Solutions 场景 | 业务问题 | 对应证据 | 推荐能力 |
|---|---|---|---|
| 多渠道外卖营运 | 多平台切换、订单和菜单不同步、异常难监控 | 旧官网聚合外卖；PPT OMS 痛点 | OMS、COMS、SOMS、Menu Center |
| 多门店营运 | 总部、区域、门店之间信息维护复杂 | PPT Operation Management Center | Operation Management、Store Abnormity、Reporting |
| 数字点餐与自助服务 | 顾客入口增加，门店承接和会员回流困难 | 旧官网网上点餐；PPT Mobile / QR Ordering | Mobile Ordering、Membership、Marketing |
| 配送营运与履约 | 自有骑手、第三方物流、平台配送并存，调度复杂 | 旧官网聚合送 / DMS；PPT iDMS / DMS | iDMS、DMS、Rider App、Dispatch |
| 数据化营运 | 多渠道数据分散，财务对账和运营判断困难 | 旧官网 BI；PPT Data Assets / Finance | CDBI、Reporting、Finance Center |
| 系统托管与代运营 | 商家需要持续运营监控和全渠道维护 | 旧官网系统托管 / 全渠道代运营 | Merchant Service、Quality Assurance |

### 5.3 Platform

叙事任务：

让用户看到餐道具体产品如何工作，避免停留在概念。

建议产品结构：

| Platform 模块 | 应讲内容 | 证据 |
|---|---|---|
| OMS | 统一接入多平台订单、连接 POS / 配送 / 会员 / 外卖平台 | PPT Slide 15 / 17 / 22 / 28 |
| COMS | 总部 / 区域 / 门店配置、渠道信息、门店状态和订单管理 | PPT OMS 三大部分和后台模块 |
| SOMS | 门店接单、打印、异常提醒、门店执行 | PPT Store Order Management / Abnormity |
| Menu Center | 菜单、套餐、价格、售罄、库存跨平台同步 | 旧官网餐单管理；PPT Slide 24 / 31 |
| Data Asset / CDBI | 报表、看板、成本利润、交易明细、经营分析 | 旧官网 CDBI；PPT Slide 34-36 |
| iDMS | 聚合配送、物流资源、交易记录、充值扣费退款 | 旧官网 iDMS；PPT Slide 76-86 |
| DMS | 自有骑手管理、智能派单、人工调度、监控、报表 | 旧官网 DMS；PPT Slide 87-131 |
| Rider App | 接单、取餐、导航、送达、异常、结算 | PPT Rider App 部分 |
| Consumer SMS | 配送进度通知、骑手电话和位置追踪 | PPT Consumer SMS |
| AMS / Connector | 生态服务商接入、标准接口、定制中间件、安全机制 | 旧官网 AMS；PPT SaaS Structure |

### 5.4 Integrations

叙事任务：

证明餐道的连接能力覆盖餐饮运营关键系统类型，而不是展示装饰性 Logo。

结构应基于：

- 旧官网 businessType：外卖平台、自建系统、POS、CRM、配送、后厨、线上支付、ERP、其他；
- PPT Operation Eco-system：Food Order Platform、Delivery、Can-Dao Connector、POS、Online Order Web / H5、Payment Gateway、Delivery / Rider Co.、Third-party systems、Sources of Orders；
- PPT SaaS Structure：Menu API、Order API、User details API、Basic info API 等。

品牌名使用规则：

- Foodpanda、Deliveroo、Keeta、Zeek、Lalamove、Pandago 等名称需要确认是否可公开展示；
- 未确认前只使用系统类型，不使用 Logo；
- 不得使用 Airbnb、HubSpot、Google、Microsoft、Walmart、FedEx 等无关 Logo。

### 5.5 Customers

叙事任务：

用真实或匿名案例证明餐道在具体业态中解决了具体运营问题。

当前策略：

- 授权前使用匿名案例模板；
- 仅使用 PPT 案例中的行业类型和业务问题线索；
- 不使用未确认客户名称、品牌 Logo、增长数字、合同信息。

案例模板必须包含：

| 字段 | 要求 |
|---|---|
| 业态 | 例如甜品连锁、Pizza、餐饮集团、咖啡、火锅、鲜食零售 |
| 原始问题 | 必须来自 PPT 或业务访谈 |
| 介入能力 | OMS / DMS / iDMS / CDBI 等 |
| 业务过程 | 菜单、订单、配送、异常、财务或数据如何变化 |
| 可公开结果 | 仅使用已授权口径 |
| 待确认项 | 品牌名、数字、截图、引用语 |

### 5.6 About

叙事任务：

建立公司可信度和服务经验，而不是重复产品卖点。

可用内容：

- 2014 Founded；
- 总部广州，香港 / 北京 / 上海办公室，成都运营中心；
- 从电话订餐开始，沉淀餐饮外送业务经验；
- 产品从 COMS、CDBI、DMS、IDMS 扩展为餐饮与零售 O2O 全链路解决方案；
- ISO 27001、ISO 20000 等认证需确认公开口径。

### 5.7 Demo

叙事任务：

把访问者的问题转成销售和方案输入，不做普通联系表单。

表单建议按业务意图分流：

- 多平台订单与 OMS；
- 菜单 / 门店 / 库存同步；
- 自有点餐 / QR Ordering；
- 聚合配送 / 第三方物流；
- 自有骑手 / DMS / Rider App；
- 数据分析 / 财务对账；
- POS / CRM / ERP / 支付 / 后厨系统接入；
- 系统托管 / 代运营咨询。

## 6. 反泛化替换表

| 泛化表达 | 必须替换为餐道业务事实 |
|---|---|
| 统一平台 | 多平台订单进入 OMS，门店用一个后台处理订单、状态和异常 |
| 提升效率 | 菜单、库存、售罄、门店信息可跨平台批量维护和同步 |
| 数据驱动 | CDBI / Data Asset 汇总渠道、订单、财务和门店数据，并支持报表、看板和对账 |
| 全渠道运营 | 外卖平台、自建 H5 / 小程序、POS、CRM、配送、支付、后厨系统被连接到同一运营链路 |
| 智能调度 | DMS 支持区域、路线、角度、同向派单，并可在高峰或异常时转第三方配送 |
| 无缝整合 | 说明连接对象、API 类型、数据流和异常处理方式 |
| 降本增效 | 明确是减少后台切换、减少菜单重复维护、减少漏单、减少异常取消、减少人工对账 |
| 实时可视化 | 展示订单超时、门店异常、骑手位置、配送状态、财务差异等具体状态 |
| 端到端解决方案 | 拆成顾客下单、平台接单、门店履约、配送调度、数据回流、财务对账 |
| 国际化 SaaS | 说明在香港 / 亚洲餐饮 O2O 生态中连接平台、POS、配送、支付和会员系统的能力 |

## 7. 模块准入模板

后续任何页面模块生成前，必须先填：

| 字段 | 填写要求 |
|---|---|
| 页面位置 | Home / Solutions / Platform / Integrations / Customers / Resources / About / Demo |
| 模块名称 | 例如 `OMS Order Flow`、`Delivery Dispatch Map` |
| 叙事任务 | 这个模块让用户理解什么 |
| 餐道业务事实 | 必须是餐道具体业务内容 |
| 来源 | 旧官网 API / PPT slide / 菜单目录 / 公司资料 / 用户确认 |
| 产品模块 | OMS / COMS / SOMS / CDBI / iDMS / DMS / AMS / Mobile Ordering 等 |
| 用户角色 | 总部运营、门店店长、骑手、调度员、财务、IT、市场、顾客 |
| 业务场景 | 下单、接单、菜单更新、配送、异常、会员、财务、报表等 |
| 展示方式 | 静态文案、交互图、UI Demo、流程动效、对比图、表单 |
| 待确认项 | 数字、品牌、Logo、案例、认证、截图、集成状态 |
| 泛化风险 | 是否可被任意 SaaS 替换 |
| 准入结论 | 准入 / 待确认 / 删除 |

## 8. 内容生成的最小 Prompt

后续调用内容 Agent、Stitch、Figma 或前端前，必须把以下约束放入 prompt：

```text
你正在生成餐道国际官网内容。不要从通用 SaaS 表达开始。

必须先建立 Evidence Matrix：
- 每个页面模块必须绑定旧官网、PPT、菜单目录、公司资料或用户确认。
- 旧官网和 PPT 是业务专属性来源；参考网站只用于国际化表达和展示方法。
- 没有证据来源的内容只能进入待确认池，不能进入主页面。
- 品牌、Logo、客户、数字、认证、SLA、合作伙伴名称必须标注授权状态。

全站叙事必须递进：
Home 建立餐道作为 F&B / Retail O2O Connector 的认知；
Solutions 讲业务场景和角色压力；
Platform 讲产品能力、UI 工作流和数据流；
Integrations 讲连接对象和系统类型；
Customers 讲授权案例或匿名业务场景；
Resources 降低接入、迁移、运营疑问；
About 讲公司可信和服务经验；
Demo 收集业务意图并分流。

禁止使用未落到餐道事实的泛化词：
统一平台、提升效率、数据驱动、全渠道运营、智能调度、无缝整合、端到端解决方案。

输出每个模块时必须包含：
模块名称、业务事实、来源、页面角色、产品模块、用户角色、待确认项、泛化风险、准入结论。
```

## 9. 待确认和资料请求

为了避免再次绕开深度资料，下一轮必须主动补齐：

| 优先级 | 资料 / 决策 | 为什么需要 |
|---|---|---|
| P0 | 菜单目录最新文件 | 判断现有 IA 与业务分类是否仍匹配 |
| P0 | 3 个参考网站 URL / 截图 / 目标页面 | 只借鉴表达方式，避免误当内容来源 |
| P0 | PPT 中客户、品牌、数字、认证是否可公开 | 决定 Customers / Home proof / About trust 能否使用真实口径 |
| P0 | 公司详情资料最新版 | About、区域服务、服务模式、认证口径需要准确 |
| P1 | 真实产品截图或可重绘界面 | Platform UI Demo 和前端交互要避免假 Dashboard |
| P1 | 销售最常问问题 / Demo 表单字段 | Demo 页面要变成业务分流，而不是普通表单 |
| P1 | 典型客户行业与问题 Top 5 | Customers 匿名案例需要业务可信度 |

## 10. 下一步交付建议

下一步不应该直接写全站文案，也不应该继续生成视觉稿。

建议按这个顺序：

1. 输出 `旧官网 / PPT -> 页面模块证据矩阵 v1.0`。
2. 基于证据矩阵重写 `Home / Solutions / Platform / Integrations` 的页面角色和模块清单。
3. 先生成 4 个核心页面的繁體中文内容骨架，不进入视觉。
4. 通过反泛化 QA：检查每个模块是否可替换给任意 SaaS 公司。
5. 通过后再补 English 内容库。
6. 最后才进入 Figma / Stitch / React / Next 的展示方式和前端技术选型。

本 Brief 通过后，T15 建议定义为：

```text
T15: Old Website + PPT to Page Module Evidence Matrix
```
