# Candao 官网目录内容补齐 v0.2

任务：T11.5 目录与内容链路补齐  
日期：2026-08-10  
状态：待人工确认  
输出语言：本文档说明使用简体中文；官网展示文案默认使用繁體中文。

## 0. 处理原则

本轮不是推翻 T03-T11.5 的既有链路，而是在现有结构上补齐截图目录中遗漏或表达不完整的内容。

保留的主骨架：

| 一级结构 | 保留判断 |
|---|---|
| 首頁 | 保留，承担品牌第一印象和转化。 |
| 解決方案 | 保留，承担业务场景和行业问题。 |
| 平台 | 保留，承担产品能力和工作流展示。 |
| 整合能力 | 保留，承担生态连接和系统整合。 |
| 客戶案例 | 保留，承担信任和落地案例。 |
| 資源 | 应恢复为一级内容中心。T05 已包含 Resources，C v2 执行时被弱化为缺口。 |
| 關於 Candao | 保留，补齐 About Us、Milestones、Career、Contact Us。 |
| 預約產品演示 | 保留为主 CTA 和转化闭环。 |

硬性边界：

- `Order Management`、`Delivery Management` 不提升为一级导航。
- 截图中的产品能力必须映射到 `Solutions` 的场景页或 `Platform` 的能力页。
- 官网默认视觉和 Stitch / Figma 原型必须使用繁體中文单一 Locale。
- English 仅作为独立 Locale、路径、产品名、技术名或内部映射保留。

## 1. 总结结论

现有链路的方向成立，但缺少三类内容：

| 缺口类型 | 具体缺口 | 补齐方式 |
|---|---|---|
| 场景目录不完整 | `Restaurants / Retails`、`Mobile Ordering`、`Kiosk Ordering` 不够明确。 | 在 `Solutions` 下补为 `餐飲與零售`，并增加 `手機點餐`、`自助點餐` 场景入口。 |
| 配送链路不完整 | `Delivery Management and Riders App`、`Dispatch`、`Aggregated Logistics Management` 未形成完整链路。 | 在 `Solutions` 下补配送场景；在 `Platform` 下补 `騎手 App`、`配送調度`、`聚合物流管理` 能力。 |
| 资源与公司栏目偏薄 | `Resources` 下 Support、FAQ、Press、Show cases、Want to know more、Enquiry Forms；`About` 下 Milestones、Career、Contact Us。 | 恢复 `資源` 一级目录，并补齐 About 子目录，不替代主 CTA `預約產品演示`。 |

因此，下一轮 Stitch / Figma 不应重做全部页面，而应基于 C v2 的视觉方向补：

- `資源` 一级主页；
- `Solutions` 的餐饮零售、手机点餐、自助点餐、配送调度表达；
- `Platform` 的骑手 App、配送调度、聚合物流管理能力；
- `About` 的里程碑、招聘、联系入口；
- 各目录下的交互前后文案与 UI 展示方式。

## 2. 截图目录差异检查表

| 截图目录项 | 当前链路状态 | 判断 | 补齐方式 |
|---|---|---|---|
| Categories | 不是官网导航项。 | 不应作为前台导航。 | 仅作为内部分类标签，不进入官网。 |
| Solutions | 已存在一级导航。 | 保留。 | 扩充其下业务场景，不改变一级名。 |
| Restaurants / Retails | 现有 `Restaurant Chains`、`Multi-store Operations` 可承接，但未覆盖零售和门店前端点餐。 | 缺表达。 | 命名为 `餐飲與零售`，作为 Solutions 二级场景。 |
| Mobile Ordering | 现有 `Digital Ordering` / `First-party Ordering` 可承接，但名称不够直观。 | 需补齐。 | 在 Solutions 下为 `手機點餐`，在 Platform 下对应 `自有點餐` 能力。 |
| Kiosk Ordering | 现有链路未明确。 | 缺页或缺模块。 | 补为 `自助點餐`，可作为 Solutions 子场景和 Platform 能力模块。 |
| Delivery Management | 现有 Platform 下有 `Delivery Management`；Solutions 下有 `配送營運`。 | 保留但需拆清职责。 | Solutions 讲业务问题；Platform 讲产品工作流。 |
| Delivery Management and Riders App | 现有链路没有明确 `Riders App`。 | 缺产品展示。 | 在 Platform 的配送能力下补 `騎手 App`，在 Solutions 配送场景中作为履约角色。 |
| Dispatch | 现有链路未独立表达。 | 缺关键能力。 | 补为 `配送調度`，既是 Solutions 场景也是 Platform 能力。 |
| Aggregated Logistics Management | 现有 Integrations 有第三方物流，但没有聚合调度表达。 | 缺高级产品价值。 | 补为 `聚合物流管理`，放在 Platform 能力，并与 Integrations 的第三方物流连接。 |
| Integrations | 已存在一级导航。 | 保留。 | 与截图类别对齐命名。 |
| Delivery Platforms | 已存在。 | 保留。 | 命名为 `外送平台`。 |
| POS | 已存在。 | 保留。 | 保持 `POS`，说明文字用繁體中文。 |
| CRM | 已存在为 `CRM 與會員`。 | 保留并统一。 | 导航可用 `CRM`，页面说明补会员数据流。 |
| 3rd Logistics | 已存在为 `Third-party Logistics`。 | 保留但命名需规范。 | 命名为 `第三方物流`。 |
| Payment Gateway | 已存在为支付整合。 | 保留但命名需规范。 | 命名为 `支付閘道`。 |
| Resources | T05 包含一级目录，C v2 未生成一级主页。 | 当前最大执行缺口。 | 恢复为一级目录，至少做 Resources Overview。 |
| Support | 仅在 Contact / Support Enquiry 中部分承接。 | 缺内容中心入口。 | 补为 `支援中心`。 |
| FAQ | 现有为 Phase 2 / Footer。 | 缺一级资源内容。 | 补为 `常見問題`。 |
| Press | 现有链路弱。 | 缺品牌资讯入口。 | 补为 `媒體與新聞`。 |
| Show cases | 现有 `Customers` 可承接。 | 不应重复一级。 | 在 Resources 中设 `案例資源`，链接到 Customers。 |
| Want to know more | 现有 Contact / Demo 承接。 | 需要轻咨询入口。 | 补为 `了解更多`，引导 Enquiry Forms。 |
| Enquiry Forms | 现有 Contact / Demo 有表单。 | 保留并细分。 | 作为 Resources 子入口和主 CTA 表单共用。 |
| About | 已存在一级导航。 | 保留。 | 补齐截图中的子项。 |
| About Us | 现有 About 概览可承接。 | 需明确二级。 | 命名为 `關於我們`。 |
| Milestones | 现有链路未明确。 | 缺公司可信内容。 | 补为 `里程碑`。 |
| Career | 现有链路未明确。 | 缺招聘入口。 | 补为 `加入我們`。 |
| Contact Us | 现有 Contact / Demo 是主 CTA。 | 需要公司联系入口，但不得替代主 CTA。 | 在 About 下补 `聯絡我們`，转向 `/about/contact-us` 或 `/book-a-demo` 分流。 |

## 3. 更新后的完整目录结构

| 一级目录 | 二级目录 | 三级 / 模块 | URL 建议 | 页面职责 | 状态 |
|---|---|---|---|---|---|
| 首頁 | - | - | `/` | 品牌认知、产品理解、Demo 转化。 | 保留 |
| 解決方案 | 解決方案總覽 | - | `/solutions` | 按业务问题引导用户找到场景。 | 保留 |
| 解決方案 | 餐飲與零售 | 手機點餐 | `/solutions/restaurants-retail/mobile-ordering` | 展示门店、自有点餐和顾客入口场景。 | 新增补齐 |
| 解決方案 | 餐飲與零售 | 自助點餐 | `/solutions/restaurants-retail/kiosk-ordering` | 展示 Kiosk 高峰期分流与门店履约。 | 新增补齐 |
| 解決方案 | 配送管理 | 配送管理與騎手 App | `/solutions/delivery-management/riders-app` | 展示配送任务、骑手状态和履约协同。 | 新增补齐 |
| 解決方案 | 配送調度 | 聚合物流管理 | `/solutions/dispatch/aggregated-logistics` | 展示多物流资源、规则分配和异常处理。 | 新增补齐 |
| 解決方案 | 連鎖餐飲 | - | `/solutions/restaurant-chains` | 展示总部、区域、门店协同。 | 保留 |
| 解決方案 | 多門店營運 | - | `/solutions/multi-store-operations` | 展示多门店状态、菜单、异常管理。 | 保留 |
| 解決方案 | 數據化營運 | - | `/solutions/data-driven-operations` | 展示数据驱动的运营决策。 | 保留 |
| 平台 | 平台總覽 | - | `/platform` | 展示产品架构、Capability Map、UI Demo。 | 保留 |
| 平台 | 訂單管理 | - | `/platform/order-management` | 展示多渠道订单进入统一工作流。 | 保留 |
| 平台 | 配送管理 | 騎手 App | `/platform/delivery-management/riders-app` | 展示配送任务移动端、状态回传。 | 新增补齐 |
| 平台 | 配送調度 | - | `/platform/dispatch` | 展示调度规则、派单状态和异常处理。 | 新增补齐 |
| 平台 | 聚合物流管理 | - | `/platform/aggregated-logistics` | 展示第三方物流资源聚合和策略选择。 | 新增补齐 |
| 平台 | 菜單與門店管理 | - | `/platform/menu-store-management` | 展示菜单、价格、渠道、门店状态同步。 | 保留 |
| 平台 | 自有點餐 | 手機點餐 | `/platform/first-party-ordering` | 展示手机点餐背后的平台能力。 | 保留并强化 |
| 平台 | 自助點餐 | - | `/platform/kiosk-ordering` | 展示 Kiosk 点餐与后台订单同步。 | 新增补齐 |
| 平台 | 數據智能 | - | `/platform/data-intelligence` | 展示指标、洞察和运营动作。 | 保留 |
| 整合能力 | 整合能力總覽 | - | `/integrations` | 展示系统连接和数据流。 | 保留 |
| 整合能力 | 外送平台 | - | `/integrations/delivery-platforms` | 展示外送平台订单、菜单、状态连接。 | 保留 |
| 整合能力 | POS | - | `/integrations/pos` | 展示 POS 与订单、支付、门店数据同步。 | 保留 |
| 整合能力 | CRM | - | `/integrations/crm` | 展示会员、订单行为和营销数据连接。 | 命名对齐 |
| 整合能力 | 第三方物流 | - | `/integrations/third-party-logistics` | 展示物流服务商与履约状态连接。 | 命名对齐 |
| 整合能力 | 支付閘道 | - | `/integrations/payment-gateway` | 展示支付、退款、对账和订单状态连接。 | 命名对齐 |
| 整合能力 | 申請整合 | - | `/integrations/request` | 收集新增系统集成需求。 | 保留 |
| 客戶案例 | 客戶案例總覽 | - | `/customers` | 展示可公开案例、行业场景和落地故事。 | 保留 |
| 客戶案例 | 案例詳情 | - | `/customers/case-study-template` | 用挑战、方案、上线、结果讲案例。 | 保留 |
| 資源 | 資源總覽 | - | `/resources` | 汇总支持、FAQ、新闻、案例资源和咨询入口。 | 恢复一级 |
| 資源 | 支援中心 | - | `/resources/support` | 帮助客户找到导入、使用、运营支持。 | 新增补齐 |
| 資源 | 常見問題 | - | `/resources/faq` | 回答评估、导入、集成、支持常见问题。 | 新增补齐 |
| 資源 | 媒體與新聞 | - | `/resources/press` | 发布新闻、媒体资料和品牌动态。 | 新增补齐 |
| 資源 | 案例資源 | - | `/resources/showcases` | 引导用户按场景查看客户案例。 | 新增补齐 |
| 資源 | 了解更多 | 查詢表單 | `/resources/enquiry-forms` | 让非销售型问题进入轻咨询表单。 | 新增补齐 |
| 關於 Candao | 關於我們 | - | `/about/about-us` | 说明公司定位、使命、服务市场。 | 新增补齐 |
| 關於 Candao | 里程碑 | - | `/about/milestones` | 展示公司发展节点和长期投入。 | 新增补齐 |
| 關於 Candao | 加入我們 | - | `/about/career` | 招聘入口和团队文化。 | 新增补齐 |
| 關於 Candao | 聯絡我們 | - | `/about/contact-us` | 公司联系入口，按销售、合作、支持分流。 | 新增补齐 |
| 關於 Candao | 安全與服務 | - | `/about/security-service` | 展示企业级服务、稳定性和支持方式。 | 保留 |
| 預約產品演示 | 預約產品演示 | - | `/book-a-demo` | 主转化页。 | 保留 |
| 預約產品演示 | 聯絡銷售 | - | `/contact-sales` | 销售咨询。 | 保留 |
| 預約產品演示 | 合作洽詢 | - | `/partner-enquiry` | 合作伙伴咨询。 | 保留 |
| 預約產品演示 | 支援查詢 | - | `/support-enquiry` | 支持咨询。 | 保留 |

## 4. 结构边界说明

| 结构 | 负责回答的问题 | 不应该做的事 |
|---|---|---|
| Home | Candao 是什么，为什么值得继续了解？ | 不做产品目录，不堆所有能力卡片。 |
| Solutions | 我的业务问题是否被理解？ | 不直接讲软件模块配置。 |
| Platform | Candao 如何通过产品能力实现？ | 不把每个能力升成一级导航。 |
| Integrations | Candao 可以连接哪些系统，数据如何流动？ | 不承诺未确认的集成状态或合作关系。 |
| Customers | 是否有相似场景的落地经验？ | 不虚构客户、Logo、指标或结果。 |
| Resources | 用户评估和使用过程中需要什么资料？ | 不替代 Sales CTA，不写成博客堆叠。 |
| About | 这家公司是否可信、稳定、值得合作？ | 不写成空泛公司简介。 |
| Contact / Demo | 如何进入销售、合作、支持分流？ | 不与 About Contact Us 混淆。 |

## 5. 对后续 Stitch / Figma 的约束

| 约束 | 执行要求 |
|---|---|
| 一级导航 | 下一轮必须按 `首頁 / 解決方案 / 平台 / 整合能力 / 客戶案例 / 資源 / 關於 Candao / 預約產品演示` 建立基准，不再遗漏 Resources。 |
| 目录补齐 | C v2 已有 7 个一级主页可保留作为视觉方向参考；下一轮优先补 `資源` 主页和下拉内容，不需要推倒重做。 |
| 产品能力 | `訂單管理`、`配送管理`、`騎手 App`、`配送調度`、`聚合物流管理`、`自助點餐` 均属于 Platform 能力或 Solutions 场景，不得成为一级导航。 |
| 场景与能力分层 | `Solutions` 用业务问题、角色、场景照片；`Platform` 用工作流、UI 状态变化、业务结果。 |
| 视觉资产 | Hero 和重点产品展示必须使用真实餐饮运营摄影 + 半真实 SaaS UI，不使用泛科技背景或空卡片。 |
| 交互表达 | 每个重点页至少有一个明确的交互：场景选择、Capability Map、Workflow Stepper、状态切换、筛选或表单分流。 |
| 语言 | 视觉稿和网页默认只展示繁體中文。English 版本独立生成。 |

## 6. 需要人工确认的点

| 编号 | 问题 | 建议默认值 |
|---|---|---|
| Q01 | `Resources / 資源` 是否恢复为一级导航和一级主页？ | 是。T05 原本包含 Resources，C v2 漏做，应补回。 |
| Q02 | `Restaurants / Retails` 是否命名为 `餐飲與零售`？ | 是。英文内部映射建议用 `Restaurants / Retail`。 |
| Q03 | `Mobile Ordering` 是否放在 Solutions 和 Platform 两处表达？ | 是。Solutions 讲顾客点餐场景；Platform 讲自有点餐产品能力。 |
| Q04 | `Kiosk Ordering` 是否新增为平台能力？ | 是，同时在 `餐飲與零售` 场景页中出现。 |
| Q05 | `Riders App` 是否需要独立产品页？ | 初期建议作为 `配送管理` 下重点模块；如产品素材充足，再独立成页。 |
| Q06 | `Show cases` 是否与 `Customers` 重复？ | 不重复。Resources 放案例资源入口，真实案例页仍归 Customers。 |
| Q07 | `Contact Us` 是否替代 `Book a Demo`？ | 否。About 下的 Contact Us 是公司联系入口；Book a Demo 仍是主 CTA。 |
