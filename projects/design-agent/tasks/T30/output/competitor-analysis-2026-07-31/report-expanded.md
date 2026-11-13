# 餐饮科技 SaaS 官网竞品扩展分析

## 本次修正

上一版主要分析了首屏气质、视觉风格和基础交互。这个版本扩展到关键页面族，不再只从首页判断。

本次重点：

- 产品介绍页
- 产品特色/能力页
- 合作商/集成页
- 企业介绍页
- 联系/预约演示页
- 内容呈现链路和表达方式
- 三家共性的对比

## 证据范围

| 竞品 | 已覆盖页面族 | 证据限制 |
| --- | --- | --- |
| Aigens | 首页、Mobile Ordering、Kiosk Ordering、Aigens Connect、About、Contact、Showcase/Case 内容 | sitemap 和部分自动截图被 Cloudflare 拦截；内容以可访问页面文本、搜索索引、已采集桌面截图为准 |
| Deliverect | 首页、Solutions、Integrations、Pricing、Partnerships、About、Contact、Customers | sitemap 可访问；桌面自动截图出现 429，文本证据较完整 |
| TabSquare | 首页、Solutions、Integrations、Pricing、About、People、Resources、Contact 表单 | sitemap 被 Cloudflare 拦截；页面文本和首页截图可访问 |

## 关键页面地图

### Aigens

Aigens 的站点结构更像“企业级产品矩阵 + 行业案例库”。

| 页面族 | 内容角色 | 呈现方式 |
| --- | --- | --- |
| 首页 | 总体定位、客户证明、可靠性、集成能力、FAQ、预约演示 | 先用餐饮场景和收益定位抓住用户，再用品牌 logo、KPI、集成能力建立企业可信 |
| 产品页 | Mobile Ordering、Kiosk Ordering、Aigens Pay、Aigens Loyalty、Aigens Connect | 每个产品页都先讲使用场景，再拆收益和功能细节 |
| 产品特色 | 点餐流程、支付、会员、加购、后台管理、POS/PMS/配送平台连接 | 长页面分段解释，偏“能力说明书” |
| 合作/集成 | Aigens Connect、POS、PMS、Food Aggregators、Payment Gateway、100+ integrated tools | 用集成对象和业务流程说明复杂系统如何打通 |
| 企业介绍 | 成立时间、区域覆盖、企业级客户、技术可靠性 | 更强调 APAC 餐饮集团、QSR、酒店、机场、娱乐场等复杂场景 |
| 联系/转化 | Book A Demo、Request A Demo、Contact us | 多数页面底部都会回到“找专家聊方案” |

Aigens 的内容链路：

```text
餐饮场景问题
-> 产品解决方案
-> 运营/收入/体验收益
-> 具体功能细节
-> 系统集成和后台管理
-> 客户 logo / Testimonials / Showcase
-> FAQ 处理疑虑
-> Request A Demo
```

### Deliverect

Deliverect 的站点结构最系统化，像“信息架构清晰的企业 SaaS 平台”。

| 页面族 | 内容角色 | 呈现方式 |
| --- | --- | --- |
| 首页 | 总平台定位、规模数据、解决方案分组、客户品牌、企业故事、CTA | 用 omnichannel、orders、locations、countries 等规模证据建立平台感 |
| Solutions | 第三方点餐、第一方点餐、店内服务、零售等业务线 | mega menu 和页面都按业务场景分组，帮助用户自我定位 |
| Integrations | 1000+ integration partners、搜索、分类、请求新集成 | 目录型页面，强调“我能接入你已有工具” |
| Partnerships | 技术合作/成为伙伴/开发者集成 | 把合作方也作为一类转化对象 |
| Pricing | 按规模和解决方案定价，引导获取 quote | 不直接暴露简单价格，而是让用户进入个性化报价 |
| About | 愿景使命、奖项、安全认证、团队、投资人、全球办公室 | 企业信任链很完整，尤其强调 security、global presence |
| Contact | Help/support、guided tour、become partner、全球办公室 | 联系页按用户意图分流，而不是单一表单 |

Deliverect 的内容链路：

```text
平台总定位
-> 全渠道订单/运营增长承诺
-> 规模证明和客户品牌
-> 业务线分组
-> 具体产品模块
-> 集成目录/伙伴网络
-> 成功案例
-> 定价/FAQ
-> Get Started / Guided tour / Become partner
```

### TabSquare

TabSquare 的站点结构最偏“体验叙事”，把餐厅经营结果包装在情绪化的用餐体验中。

| 页面族 | 内容角色 | 呈现方式 |
| --- | --- | --- |
| 首页 | 品牌情绪、增长结果、产品生态、集成、预约演示 | 用大幅真实餐厅图和情绪标题开场，再进入产品生态 |
| Solutions | 餐厅体验生态、Vibe、SmartQR、SmartPay、SmartKiosk、客户证言 | 先讲 unforgettable experiences，再讲产品如何支持这些体验 |
| Integrations | POS、Payment、CRM、Aggregators 等连接能力 | 类目 chip + 简短说明 + 联系表单 |
| Pricing | 以餐厅成长阶段划分：Starting Out、Growing Hot、Scaling Up、Industry Leader | 用“餐厅规模阶段”代替纯功能套餐，降低理解成本 |
| About | 餐厅情感故事、使命、数字、国家覆盖、Delivery Hero 生态 | 企业介绍更人性化，不是先讲公司履历 |
| People/Resources | 招聘文化、内容资源、灵感和成功故事 | 把品牌人格延展到团队和内容 |
| Contact | 多页面嵌入同一套 Get in touch 表单 | 表单字段和 business objective 直接围绕增长、客人体验、运营 |

TabSquare 的内容链路：

```text
餐厅情绪和顾客体验
-> 利润增长/复购/运营结果
-> 产品生态和解决方案
-> 客户证言和数字证明
-> 集成能力
-> 按餐厅规模解释套餐
-> 企业使命和生态背书
-> Get in touch 表单
```

## 三家共性矩阵

| 信息类型 | Aigens | Deliverect | TabSquare | 共性结论 |
| --- | --- | --- | --- | --- |
| 首屏定位 | 自助点餐/企业餐饮技术 | 全渠道数字点餐平台 | 编排难忘用餐体验并增长利润 | 都不是只讲软件功能，而是讲餐饮经营结果 |
| 产品介绍 | 按具体产品逐页深讲 | 按业务场景和平台模块组织 | 按体验生态和产品名组织 | 必须有产品矩阵，不应只做单页官网 |
| 产品特色 | 功能细节非常长，含后台、支付、会员、加购 | 聚合到运营效率、增长、利润等业务主题 | 体验、AI、支付、QR、kiosk 等生态化表达 | 特色呈现应从业务收益进入，再展开功能 |
| 合作/集成 | Aigens Connect 讲 POS/PMS/支付/配送等复杂连接 | Integrations 是大型目录和伙伴网络 | Integrations 更轻，但也按 POS/Payment/CRM/Aggregators 分类 | 集成页是餐饮 SaaS 官网必备核心页 |
| 客户证明 | 大量品牌 logo、testimonials、showcase | 客户 logo、订单/地点/国家规模、success story | 客户证言、餐厅数量、互动量 | 证明模块要贯穿首页、产品页、集成页 |
| 企业介绍 | 成立、区域、企业客户和技术可靠性 | 使命愿景、奖项、安全、团队、投资人、全球办公室 | 餐厅使命、情感叙事、生态背书、国家覆盖 | About 不是可有可无，它承担信任和品牌人格 |
| 联系方式 | Request Demo / Contact | support、guided tour、partner 分流 | 多页面统一嵌入表单 | 联系页要按意图分流，并在关键页重复 CTA |
| 内容呈现方式 | 长页分段、FAQ、多客户引用 | 结构化目录、mega menu、数字证明、FAQ | 视觉叙事、情绪标题、阶段式套餐、表单嵌入 | 我们应融合“结构清晰 + 情绪叙事 + 证据充分” |

## 内容呈现链路对比

### 共性的标准链路

三家共同使用的底层内容链路可以抽象为：

```text
1. 我们解决什么餐饮经营问题
2. 这对餐厅/顾客有什么结果
3. 我们有哪些产品或解决方案
4. 这些产品如何嵌入现有系统
5. 哪些客户、数据或案例能证明可信
6. 企业本身是否可靠
7. 用户下一步该怎么联系、预约或询价
```

这个链路比单一首页重要。网页生成 Agent 不能只生成“漂亮 hero”，而要生成一套可以承接用户决策的页面网络。

### 三家的差异

| 竞品 | 呈现链路特点 | 适合借鉴的地方 |
| --- | --- | --- |
| Aigens | 从具体产品进入，功能细节丰富，反复回到集成、客户证明、FAQ、demo | 适合借鉴产品详情页深度、FAQ 处理疑虑、复杂集成解释 |
| Deliverect | 从平台和业务线进入，导航和 sitemap 极强，产品、集成、定价、关于、联系互相连接 | 适合借鉴信息架构、mega menu、集成目录、联系分流 |
| TabSquare | 从餐厅体验和情绪进入，再落到产品生态、定价阶段、联系表单 | 适合借鉴品牌叙事、首屏气质、按餐厅成长阶段解释方案 |

## 对我们餐饮科技 SaaS 官网的页面结构建议

建议至少做 7 类页面，而不是只做首页。

| 页面 | 主要任务 | 内容链路 |
| --- | --- | --- |
| 首页 | 总体定位和转化 | 餐饮场景 hero -> 经营结果 -> 客户证明 -> 产品矩阵 -> 集成能力 -> 案例 -> CTA |
| 产品总览 | 让用户理解产品组合 | 按餐厅旅程或运营场景组织产品，而不是只列功能 |
| 产品详情 | 解释单个产品如何解决问题 | 场景问题 -> 关键收益 -> 核心功能 -> 运营后台 -> 集成 -> 客户证明 -> FAQ -> CTA |
| 产品特色/能力 | 展示平台级能力 | AI、支付、会员、加购、数据、稳定性、权限、报表等能力模块 |
| 合作商/集成 | 证明生态连接能力 | 搜索/分类 -> POS/支付/配送/CRM 等类别 -> 伙伴卡片 -> 请求新集成/成为伙伴 |
| 企业介绍 | 建立长期可信 | 使命 -> 数字 -> 客户/区域 -> 团队/安全/合规 -> CTA |
| 联系/预约演示 | 承接转化 | 预约演示、获取报价、客户支持、成为伙伴分流 |

## 生成 Agent 的内容呈现规则

网页生成 Agent 后续不要只接收视觉 brief，还需要接收 `content_presentation_chain`：

```json
{
  "content_presentation_chain": [
    "餐饮经营问题",
    "业务结果承诺",
    "产品/解决方案矩阵",
    "具体能力和使用场景",
    "集成和合作生态",
    "客户/数据/案例证明",
    "企业可信背书",
    "联系方式和下一步转化"
  ],
  "required_page_families": [
    "home",
    "products_overview",
    "product_detail",
    "features_or_capabilities",
    "integrations_or_partners",
    "about_company",
    "contact_or_demo"
  ]
}
```

## 对上一版 brief 的修正

上一版 `generator_brief.json` 的问题：

- 过度偏首页首屏。
- 没有要求产品详情页、集成/伙伴页、企业介绍页、联系页。
- 没有把内容呈现链路作为生成约束。
- 对“共性”更多停留在视觉风格，没有充分比较信息结构和页面角色。

本次应使用新的 `generator_brief_expanded.json` 作为后续网页生成 Agent 的上游输入。

