# Figma 当前页面叙事审查报告

任务：T11.5 当前 Figma 整理页叙事与内容完整性审查  
日期：2026-08-12  
输出语言：简体中文；官网展示文案示例保留繁體中文。  
Figma 文件：`BMXIuVRzSUUt9YNhVAQA6K`  
审查节点：`03 Desktop Pages / Bilingual Validation`，Node `3:5`

## 1. 审查范围与证据

本次审查基于当前 Figma 整理页中可见的 8 个主要页面：

| 页面 | Figma Node | 截图证据 |
|---|---:|---|
| 首页 | `122:5998` | `figma-current-page-narrative-audit-2026-08-12/01-home.png` |
| 解決方案 | `84:757` | `figma-current-page-narrative-audit-2026-08-12/02-solutions.png` |
| 平台 | `84:1049` | `figma-current-page-narrative-audit-2026-08-12/03-platform.png` |
| 整合能力 | `84:2683` | `figma-current-page-narrative-audit-2026-08-12/04-integrations.png` |
| 客戶案例 | `84:2852` | `figma-current-page-narrative-audit-2026-08-12/05-customers.png` |
| 資源 | `84:3296` | `figma-current-page-narrative-audit-2026-08-12/06-resources.png` |
| 關於餐道 | `106:4763` | `figma-current-page-narrative-audit-2026-08-12/07-about.png` |
| 預約產品演示 | `84:3134` | `figma-current-page-narrative-audit-2026-08-12/08-demo.png` |

对照资料：

- `tasks/T01/output/candao-international-website-input-document-2026-08-02.md`
- `tasks/T03/output/candao-international-website-strategy-v1.0-2026-08-02.md`
- `tasks/T04/output/website-information-architecture-2026-08-02.md`
- `tasks/T07/output/final-website-copy-v1.0-2026-08-03.md`
- `tasks/T11.5/output/website-directory-content-gap-fill-v0.2-2026-08-10.md`
- `tasks/T11.5/output/website-solutions-platform-differentiation-update-v0.3-2026-08-10.md`

## 2. 总体结论

当前 Figma 已经覆盖旧菜单要求和后续补齐后的一级目录，页面数量基本够，方向也比早期方案更接近国际 SaaS 官网。

但当前最大问题不是缺页面，而是叙事角色还没有完全分配清楚：

```text
Home、Solutions、Platform 都在讲“多渠道、门店、配送、数据进入统一工作流”。
```

这导致用户会连续看到几组相似表达：

- 首页：一个平台连接关键流程；
- 首页：从即时订单到营运决策；
- Solutions：从营运问题出发找到方案；
- Platform：餐饮营运核心能力连接在同一个平台；
- Platform：自动化营运工作流。

这些内容都对，但如果不重新定义层级，页面会显得“每一页都在重新解释 Candao 是什么”，而不是递进。

建议将全站主线固定为：

```text
1. Home：先建立认知
   Candao 是连接订单、菜单、门店、配送、数据与系统的餐饮营运平台。

2. Solutions：再确认场景
   用户从自己的业务问题进入：餐饮零售、连锁、多门店、数字点餐、配送履约、数据化营运。

3. Platform：然后看到实现方式
   Candao 具体如何通过产品能力、UI 状态和工作流处理这些问题。

4. Integrations：验证能否接入现有生态
   外送平台、POS、支付、CRM、第三方物流、内部系统如何连接。

5. Customers：验证是否有真实落地经验
   先用授权案例或谨慎案例模板，不虚构客户、Logo 和指标。

6. Resources：降低评估和使用疑虑
   支援、FAQ、媒体、案例资源、查询表单。

7. About：建立企业可信
   公司是谁、如何服务、发展节点、安全与服务、招聘与联系。

8. Demo：完成联系与分流
   产品演示、销售、合作、支持查询进入不同路径。
```

## 3. 当前主要冲突与重复

| 问题 | 出现位置 | 影响 | 建议 |
|---|---|---|---|
| 首页与 Platform 都在讲“一个平台连接流程” | Home `Platform Overview`、Platform `Hero / Capability Map` | 首页变成平台页预演，Platform 再重复一次 | 首页只保留一句平台定义；真正的 Capability Map 和 UI Demo 放到 Platform。 |
| 首页 Product Showcase 与 Platform Workflow Strip 重复 | Home `Product Showcase Workflow`、Platform `Workflow Strip` | 用户看两次类似的接单到数据回馈流程 | 首页用精简 3-5 步故事；Platform 展开完整工作流和状态变化。 |
| Solutions 与 Platform 都出现能力卡 | Solutions `Scenario Selector`、Platform `Capability Map` | Solutions 有产品目录化风险 | Solutions 只显示“推荐能力”，不做能力卡墙；Platform 才完整讲能力。 |
| 多处使用未确认数字 | Home `5000+ / 500M+ / 200K+ / 4.5B+`，Solutions `142 / 38`，Customers `50+ / 99.9%` | 与 T01 数据口径风险冲突，容易被误认为真实公开承诺 | 全部改为占位式表达或待确认标签，正式稿不得出现未经确认数据。 |
| 首页出现未授权 Logo | Home Hero logo cloud 显示 Airbnb、HubSpot、Google、Microsoft、Walmart、FedEx | 与 Candao 客户和集成生态无关，严重破坏可信度 | 立即移除；可改为“外送平台 / POS / 支付 / CRM / 物流 / API”类别标签。 |
| 导航名称不一致 | `资源` / `資源`，`關於餐道` / `關於 Candao`，旧导航含 `訂單管理 / 配送管理 / 集成` | 破坏当前 IA 锁定，也违反繁體中文生产规范 | 统一为：`首頁 / 解決方案 / 平台 / 整合能力 / 客戶案例 / 資源 / 關於 Candao / 預約產品演示`。 |
| Customers 页面像真实案例但证据不足 | Customers 当前“大型餐饮集团、50+、99.9%” | 无法证明来源与授权 | 改成“案例结构示范 / 授权后显示”，或只用 PPT 已知案例作为内部待授权来源。 |
| About 与 Resources 都有联系入口，Demo 也有联系入口 | About Contact Hub、Resources Enquiry、Demo Router | 入口多但分工不清 | Resources 处理轻咨询和支持，About 处理公司联系，Demo 处理销售/合作/支持分流。 |

## 4. 建议的全站叙事主线

### 4.1 用户看完整站后应该形成的认知

用户最终应该明确知道四件事：

1. Candao 是谁：餐饮智能营运 SaaS 平台，不是单点点餐、配送或订单工具。
2. Candao 解决什么：多渠道订单、菜单同步、门店协同、配送履约、数据割裂、系统集成。
3. Candao 如何解决：通过平台能力、工作流、UI 状态、数据流和集成能力。
4. 下一步怎么联系：按产品演示、销售、合作、支持四类意图进入表单。

### 4.2 页面之间的推荐衔接

```text
Home
  先给一句清晰定位和一段运营混乱到清晰的视觉故事
  ↓
Solutions
  用户按自己的业务场景选择问题
  ↓
Platform
  用户看到对应产品能力如何工作
  ↓
Integrations
  用户验证现有 POS、外送平台、支付、CRM、物流是否能连接
  ↓
Customers / Resources / About
  用户分别验证案例、FAQ 支持、公司可信
  ↓
Book a Demo
  用户按意图提交需求
```

### 4.3 首页内的推荐叙事

首页建议收敛为 6 个模块：

```text
Hero：从多平台混乱到一个清晰系统
Problem Strip：门店为什么痛苦
Product Story：一笔订单如何被 Candao 处理
Scenario Entrances：你属于哪类营运场景
Trust / Evidence：有何可验证支撑
Final CTA：预约演示或查看方案
```

当前首页的 `Platform Overview`、`Product Showcase Workflow`、`四个价值点` 可以合并为一条更顺的产品故事：

```text
一笔订单进入
→ 自动标准化
→ 门店执行
→ 配送履约
→ 总部看见数据
→ 用户选择进入 Solutions 或 Platform
```

## 5. 页面与模块审查

### 5.1 首页

| 模块 | 存在理由 | 是否辅助流程 | 问题 | 建议 |
|---|---|---|---|---|
| 顶部导航 | 给用户进入主目录与 Demo 的入口 | 辅助，但当前有命名问题 | `资源` 是简体；`關於餐道` 与锁定名不一致；部分历史导航仍不一致 | 统一为繁體中文导航，并保留 `繁中 / EN`。 |
| Hero | 建立第一印象：餐饮营运从混乱走向清晰 | 有帮助，是首页最强模块 | Logo cloud 使用 Airbnb 等无关未授权 Logo；中间有空白图片卡；标题可更接近 T07 定稿 | 移除无关 Logo；补真实餐饮运营图和半真实 UI；标题建议回到“為複雜餐飲營運建立清晰連接”。 |
| Platform Overview | 说明 Candao 是平台，不是单点工具 | 有帮助，但与 Platform 页重复 | 使用 `24 / 12 / 98%` 假数字；能力图偏说明书 | 压缩为“平台定义过渡”，去掉数字，改为系统状态标签。 |
| Product Showcase Workflow | 让用户看到系统如何运作 | 很有帮助，应保留为首页核心产品故事 | 与 Platform Workflow Strip 重复；步骤只展示接单状态，后续步骤缺画面推进 | 首页只做一段 5 步预告，Platform 负责完整 UI Demo。 |
| 四个价值点 | 将产品故事收束为业务价值 | 理论上有帮助，但当前太薄 | 只有 icon + 标题，像占位 | 改为结果型短句：减少平台切换、提高门店可见性、支持跨市场部署、降低人工追踪。 |
| Trust 数字区 | 建立可信度 | 目前不应上线 | `500M+`、`200K+`、`4.5B+` 与 T01 口径冲突 | 只保留“待确认数据位”，或换成能力信任：行业经验、服务准备、系统连接、安全边界。 |
| Final CTA | 承接转化 | 有帮助 | 图片偏办公/泛企业，不够餐饮运营；CTA 单一 | 使用真实门店/团队导入场景；给 `預約產品演示` + `查看解決方案`。 |

首页当前方向成立，但需要做减法：不要同时承担完整 Platform、完整 Trust、完整 Case。首页应只回答“为什么继续看”。

### 5.2 解決方案

| 模块 | 存在理由 | 是否辅助流程 | 问题 | 建议 |
|---|---|---|---|---|
| Hero | 明确 Solutions 从营运问题出发 | 有帮助 | UI 卡片出现 `142 / 38` 未确认数据 | 去掉数字，改为“待处理 / 配送中 / 异常提醒”等状态。 |
| Scenario Selector | 让用户按业务场景自我分流 | 很有帮助 | 右侧推荐能力偏产品化，但可接受 | 进一步弱化产品模块感，强化“你正在解决哪类问题”。 |
| 餐飲與零售 | 补齐旧菜单中的 Restaurants / Retails、Mobile、Kiosk | 有帮助 | 页面结构可再把手机点餐、自助点餐区分更清楚 | 增加“手机点餐 / 自助点餐 / 门店履约”的三段场景切换。 |
| 配送營運與履約 | 补齐 Riders App、Dispatch、Aggregated Logistics 的业务场景 | 很有帮助 | 当前是整页最好的一段，但要避免变成产品演示页 | 保留真实配送图，文案写角色压力：门店、骑手、调度、第三方物流。 |
| 总部/数据场景 | 连接连锁、多门店、数据化运营 | 有帮助 | 与 Platform 数据智能容易重复 | Solutions 只讲“管理层如何看见问题”，Dashboard 细节留给 Platform。 |
| Conversion | 帮用户在不确定时联系 | 有帮助 | CTA 只到 Demo，缺“查看平台能力”辅助路径 | 增加 `查看平台如何支援此場景`。 |

Solutions 当前基本符合 v0.3，但应继续减少能力卡密度。它的核心任务是让用户说：“这说的是我的业务问题。”

### 5.3 平台

| 模块 | 存在理由 | 是否辅助流程 | 问题 | 建议 |
|---|---|---|---|---|
| Hero | 进入产品能力层 | 有帮助 | 和首页标题高度相似 | 改成更产品化：`看見訂單、門店、配送與數據如何在平台內流動`。 |
| 大型产品视觉 | 建立产品真实感 | 当前不足 | 顶部大图是紫色占位图 | 必须替换为半真实 SaaS UI / 产品截图合成。 |
| Capability Map Bento | 展示核心能力 | 很有帮助 | 部分文案有过度承诺，如“零延迟处理” | 改为“更快进入对应工作站 / 自动标准化”。 |
| Workflow Strip | 展示工作流 | 有帮助 | 与首页 Product Showcase 重复 | Platform 应加状态变化：点击能力后 UI、数据流、结果同步更新。 |
| UI Demo Wide | 证明产品可用 | 很有帮助 | 视觉不错，但需补真实 UI 细节和数据来源说明 | 保留为平台核心模块，并加“示例界面 / 非真实客户数据”标记。 |
| Integrations Preview | 连接到整合能力页 | 有帮助 | 与 Integrations 页面轻微重复 | 只做桥梁，不展开系统卡。 |
| Conversion | 转化路径清晰 | 有帮助 | OK | 可加 `申請整合` 辅助 CTA。 |

Platform 应该是最“像产品”的页面。当前最大缺口是顶部仍有占位图，且部分文案过度承诺。

### 5.4 整合能力

| 模块 | 存在理由 | 是否辅助流程 | 问题 | 建议 |
|---|---|---|---|---|
| Hero | 回答“能否接入现有系统” | 很有帮助 | 标题准确，但视觉略像泛系统图 | 增加餐饮生态语境：外送平台、POS、支付、CRM、物流状态流。 |
| 搜索与分类 | 帮技术/采购快速判断类别 | 很有帮助 | `系统 A / 服务 B / 系统 C` 太虚 | 改为类别卡，不假装已经连接某具体系统。 |
| 数据流预览 | 解释连接后发生什么 | 很有帮助 | 当前三步合理 | 增加“订单 / 菜单 / 支付 / 会员 / 物流状态”可切换数据流。 |
| 申请整合 | 完成转化 | 很有帮助 | OK | 表单可增加系统类别、市场、当前使用系统。 |

Integrations 是全站采购可信关键页。目前结构对，但信息应从“空系统卡”转成“类别 + 状态 + 申请路径”。

### 5.5 客戶案例

| 模块 | 存在理由 | 是否辅助流程 | 问题 | 建议 |
|---|---|---|---|---|
| Hero | 建立信任入口 | 有帮助 | 方向成立 | 保留。 |
| 行业标签 | 帮用户找相似场景 | 有帮助 | OK | 可保留。 |
| 大型餐饮集团案例 | 应证明真实落地 | 当前风险最高 | `50+`、`99.9%`、改善结果都像真实事实，但未授权未确认 | 改为 `案例模板 / 授權後顯示`，或使用匿名但不带具体数字的场景故事。 |
| 相关能力 | 从案例回到产品 | 有帮助 | OK | 可保留，但避免重复 Platform 能力卡墙。 |
| 示例指标 | 强信任模块 | 不应上线 | 缺来源与授权 | 删除或标注“示例结构，非公开数据”。 |

案例来源在 PPT 中确实存在，包括 Pizza-Box、JIA Group、Paisanos、Jardine / KFC / Pizza Hut / PHD，以及多个匿名案例方向。但当前页面里的“大型餐饮集团、50+、99.9%”没有被证明是可公开事实。

建议 Customers 第一阶段采用三层：

```text
行业场景标签
→ 案例结构模板
→ 授权后案例位
```

### 5.6 資源

| 模块 | 存在理由 | 是否辅助流程 | 问题 | 建议 |
|---|---|---|---|---|
| Hero | 明确资源中心入口 | 有帮助 | OK | 保留。 |
| 资源入口模块 | 补齐 Support、FAQ、Press、Show cases、Want to know more、Enquiry Forms | 很有帮助 | 目前模块区分比旧版好 | 保留模块化表达。 |
| 支援中心 | 服务现有客户和导入团队 | 有帮助 | 需确认是否有真实支持中心、系统状态页面 | 若无真实系统状态，改为“支援查詢”。 |
| 常见问题 | 降低采购和实施疑虑 | 有帮助 | OK | FAQ 应覆盖集成、导入、安全、支持、Demo。 |
| 媒体与新闻 | 公司资讯入口 | 有帮助但低频 | 如果没有更新机制，容易空 | 第一阶段可做低承诺模块，不做新闻列表。 |
| 案例资源 | 连接 Customers | 有帮助 | OK | 明确是案例入口，不替代 Customers。 |
| 查询表单 | 轻咨询入口 | 很有帮助 | OK | 与 Demo 表单共享分流规则。 |

Resources 当前是比较完整的补齐版。它的角色是降低疑虑和承接支持，不要变成博客/新闻运营压力。

### 5.7 關於 Candao

| 模块 | 存在理由 | 是否辅助流程 | 问题 | 建议 |
|---|---|---|---|---|
| Hero | 建立公司可信 | 有帮助 | 标题有疑似错字：`可持續擴的` | 改为 `可持續擴展的`。 |
| 關於我們 | 说明公司是谁 | 很有帮助 | OK | 保留，但补主体关系和地区服务信息需业务确认。 |
| 服务方式 | 说明如何导入和持续营运 | 很有帮助 | 比单纯公司介绍更有价值 | 保留，并连接 Demo。 |
| 里程碑 | 建立长期投入 | 有帮助 | 已写“具体年份待确认”是正确做法 | 保留占位，不写真实年份前不公开。 |
| 安全与服务 | 采购信任关键 | 很有帮助 | 如写到权限、稳定性、持续支持，需要确认边界 | 可保留谨慎表达，不写 SLA、认证和灾备承诺。 |
| 加入我们 | 对招聘访客有用 | 辅助 | 非销售主线，可放后段 | 保留但不要占太高权重。 |
| 联络团队 | 分流销售、合作、支持、媒体、招聘 | 有帮助 | 与 Demo/Resources 分工需清楚 | About 联系公司；Demo 处理产品/销售/合作/支持意图。 |

About 已比前版完整很多，适合保留。它是“公司可信”而非“产品能力”页面。

### 5.8 預約產品演示

| 模块 | 存在理由 | 是否辅助流程 | 问题 | 建议 |
|---|---|---|---|---|
| Hero + Router | 用户选择产品演示、销售、合作、支持 | 很有帮助 | 当前最清晰的转化页面 | 保留。 |
| 场景选择表单 | 收集需求 | 很有帮助 | 只展示第一步，缺完整提交状态 | 补步骤 2/3：公司与联系方式、确认提交。 |
| 预约流程 | 降低提交不确定性 | 有帮助 | OK | 保留。 |
| 支持分流 | 避免现有客户误进销售 | 很有帮助 | OK | 与 Resources 支援中心互相连接。 |
| Footer | 基础导航 | 有帮助 | 缺隐私说明更突出 | 表单附近加隐私提示和资料用途说明。 |

Demo 页面是目前全站最接近“用户知道如何联系解决问题”的页面。下一步重点是补完整表单状态和隐私/资料用途提示。

## 6. 与旧菜单目录对照

旧菜单来源于 `website20250424.xlsx`，T01 已整理为 Solutions、Integrations、Resources、About 四大类。

| 旧菜单要求 | 当前 Figma 是否覆盖 | 判断 |
|---|---|---|
| Solutions / Restaurants / Retails | 已覆盖为 `餐飲與零售` | 完整，但可加强 Retail 语境。 |
| Mobile Ordering | 已覆盖为 `手機點餐場景` / `自有點餐` | 完整。 |
| Kiosk Ordering | 已覆盖为 `自助點餐` | 完整，但 Platform 页需更明确展示 Kiosk UI。 |
| Delivery Management and Riders App | 已覆盖在配送场景与平台能力中 | 基本完整，Rider App 仍需产品界面支撑。 |
| Dispatch | 已覆盖为 `配送調度` 场景/能力 | 完整，但不要升一级。 |
| Aggregated Logistics Management | 已覆盖为 `聚合物流場景 / 聚合物流管理` | 完整。 |
| Integrations / Delivery Platforms | 已覆盖 `外送平台` | 完整。 |
| POS | 已覆盖 | 完整。 |
| CRM | 已覆盖为 `CRM 與會員` | 完整。 |
| 3rd Logistics | 已覆盖 `第三方物流` | 完整。 |
| Payment Gateway | 当前写 `支付` 或 `支付閘道` | 需统一为 `支付閘道`。 |
| Resources / Support | 已覆盖 `支援中心` | 完整。 |
| FAQ | 已覆盖 `常見問題` | 完整。 |
| Press | 已覆盖 `媒體與新聞` | 完整但需低承诺。 |
| Show cases | 已覆盖 `案例資源` 并连接 Customers | 完整。 |
| Want to know more / Enquiry Forms | 已覆盖 `了解更多 / 查詢表單` | 完整。 |
| About Us | 已覆盖 `關於我們` | 完整。 |
| Milestones | 已覆盖 `里程碑` | 完整但待确认年份。 |
| Career | 已覆盖 `加入我們` | 完整。 |
| Contact Us | 已覆盖 `聯絡 Candao 團隊` | 完整。 |

结论：目录覆盖已基本完整。当前需要修的是名称一致性、证据合法性和页面间叙事分工。

## 7. 与 Candao 国际产品 PPT 对照

| PPT 产品 / 能力 | 当前 Figma 承接 | 完整度 | 备注 |
|---|---|---|---|
| OMS / COMS | 訂單管理、菜單與門店管理、统一接单流程 | 高 | 首页和 Platform 均有承接。 |
| QR Code / Mobile Ordering | 手機點餐、自有點餐、數字點餐與自助服務 | 中高 | 需要更明确顾客端 UI 与会员回流。 |
| Kiosk Ordering | 自助點餐 | 中 | 有目录和文案，但视觉展示不足。 |
| Delivery Aggregator | 聚合物流管理、第三方物流、配送調度 | 高 | 需要避免承诺具体物流伙伴。 |
| DMS / Owned rider delivery | 配送管理、騎手 App、配送協同 | 中高 | 需要 Rider App 产品界面和真实状态流。 |
| Data Asset / Reporting / BI | 數據智能、總部看板、全局掌控 | 中 | 财务中心、对账、报表中心没有明显展开。 |
| Finance Center | 当前不明显 | 低 | 建议在 Platform / Data Intelligence 或 Integrations / Payment Gateway 增补。 |
| POS / Payment / Membership / Foodpanda / Deliveroo 等集成 | Integrations 分类承接 | 中 | 不能展示具体 Logo 或合作状态，除非确认。 |
| ISO 27001 / ISO 20000、安全与服务 | About 安全与服务模块承接 | 中 | 当前表达谨慎，证书主体和有效期未确认前不要公开认证图标。 |
| 客户案例 | Customers 页面承接 | 中低 | 有 PPT 案例来源，但当前 Figma 里的具体数字不安全。 |

结论：产品能力覆盖基本完整，但 `Finance Center / 财务对账`、`CRM / 会员营销`、`Kiosk UI`、`Rider App UI`、`真实授权案例` 是当前还不够清楚的四类。

## 8. 案例支撑与来源

当前案例方向的可用来源来自 T01 对 Candao Introduction PPT 的整理：

| 案例来源 | 可用于什么页面 | 当前状态 |
|---|---|---|
| Pizza-Box | 香港本地餐饮、多渠道点餐、配送、BI、客服中心 | 需确认名称、Logo、数据与引用授权。 |
| JIA Group | 香港高端餐饮集团，官方外卖管理、订单、菜单、配送、会员、数据分析 | 需确认公开授权。 |
| Jardine Group / KFC / Pizza Hut / PHD | 大型集团、多门店、DMS、Foodpanda / Deliveroo 集成 | 品牌影响力强，但授权和具体表述必须确认。 |
| Paisanos Pizzeria | 点餐渠道、餐品管理、配送管理、数据分析 | 可作为香港本地案例方向，需授权。 |
| 匿名甜品 / 火锅 / 中餐 / 咖啡 / 生鲜零售案例 | 不同场景的案例模板 | 可匿名表达业务场景，但具体数据需确认。 |

当前 Figma Customers 页的 `大型餐飲集團`、`50+`、`99.9%` 不应视为已被这些来源支撑。它们最多是“案例结构示例”，不能作为真实官网内容。

建议下一轮将案例页改成：

```text
授权案例可用：
  展示客户名称、Logo、场景、导入能力、结果。

授权案例不可用：
  展示匿名行业场景，不展示具体客户、Logo、百分比、门店数。
```

## 9. 让整件事更清晰的关键问题

这些问题不是阻塞视觉继续迭代，而是决定哪些内容可以从“占位”升级为“正式官网事实”。

| 问题 | 为什么重要 | 影响页面 |
|---|---|---|
| 第一阶段最重要用户是谁：总部管理层、营运负责人、IT/集成团队，还是潜在合作伙伴？ | 决定首页首屏和 CTA 优先级 | Home、Solutions、Demo |
| 哪些客户案例可以公开？是否可用 Logo、名称、门店数、结果数据和推荐语？ | 决定 Customers 和首页 Trust 是否能成立 | Home、Customers |
| PPT 里的规模数字最终采用哪一版？ | 当前数据口径冲突明显 | Home、About、Trust |
| 哪些集成是已上线、可定制、计划中、不可公开？ | 决定 Integrations 是否可信 | Integrations、Platform |
| ISO 认证主体、有效期和公开证书是否可用？ | 决定安全与服务模块能否强表达 | About、Footer、Trust |
| `Finance Center / 财务对账` 是否是国际站 P0 能力？ | 决定 Platform 是否需补财务/对账模块 | Platform、Integrations |
| `CRM / 会员营销` 是否需要独立强化？ | 决定数字点餐是否只讲订单，还是讲复购和自有用户关系 | Solutions、Platform、Integrations |
| Demo 表单由谁接收？是否有地区、门店规模、系统现况字段？ | 决定转化路径是否真实可执行 | Demo、Contact |
| 51WM Company Ltd 与 Candao 的公开关系如何表述？ | 国际客户会关注签约主体和公司可信 | About、Footer、Legal |

## 10. 下一轮优化优先级

### P0 必须修

1. 统一全站导航和页脚命名：`資源`、`關於 Candao`，移除旧导航中的 `訂單管理 / 配送管理 / 集成` 一级项。
2. 移除首页无关 Logo 和所有未确认数字。
3. 将 Customers 页面改成授权案例策略，不再使用 `50+`、`99.9%` 这类假强指标。
4. 修正首页 `Platform Overview` 与 `Product Showcase` 的重复：合并成一条订单工作流故事。
5. 替换 Platform 顶部占位图，补半真实 SaaS UI。

### P1 应该强化

1. Platform 增补 `Finance Center / 財務對帳` 或明确并入 `數據智能`。
2. 数字点餐链路补 `CRM / 會員回流`，让自有点餐不只是下单入口。
3. Rider App、Kiosk Ordering 补真实产品界面表达。
4. Integrations 增加状态标签：`可評估 / 可定制 / 待確認`，避免“已连接”的暗示。
5. Demo 表单补完整步骤和隐私提示。

### P2 可后续处理

1. Resources 的 Press / 媒体模块可低承诺保留，不必做新闻列表。
2. About 的 Career 保留即可，不应抢主线权重。
3. English 独立 Locale 后续再单独生成 `/EN` Frame。

## 11. 推荐的主线文案骨架

这不是最终 Copy，只是下一轮 Figma / Stitch prompt 可用的叙事骨架。

```text
首頁
讓餐飲營運，從多平台混亂走向一個清晰系統
看到問題：訂單分散、菜單重複、配送難控、數據割裂
看到流程：訂單進入 → 門店承接 → 配送履約 → 總部看見數據
選擇下一步：查看解決方案 / 探索平台能力 / 預約產品演示

解決方案
從你的營運場景開始
餐飲與零售 / 連鎖餐飲 / 多門店 / 數字點餐 / 配送履約 / 數據化營運
每個場景只回答：問題是什麼、誰受影響、Candao 如何幫你整理流程

平台
看見 Candao 如何工作
能力地圖 → 工作流 → UI 狀態 → 數據回流 → 業務結果

整合能力
確認 Candao 能否接入你的現有系統
外送平台 / POS / 支付閘道 / CRM / 第三方物流 / 內部系統

客戶案例
用已授權案例或匿名場景證明落地方式
挑戰 → 導入能力 → 營運變化 → 下一步演示

資源
降低疑問，找到支援、FAQ、媒體、案例資源和查詢入口

關於 Candao
理解這家公司如何長期支援餐飲營運
公司定位 → 服務方式 → 里程碑 → 安全與服務 → 聯絡團隊

預約產品演示
按意圖進入下一步
產品演示 / 聯絡銷售 / 合作洽詢 / 支援查詢
```

## 12. 审查结论

当前 Figma 整理页的方向可以继续推进，不需要推倒重做。

更准确地说：页面结构已经搭起来了，但必须从“页面各自完整”进一步走到“页面之间递进”。下一轮应优先做三件事：

1. 修正不可信内容：无关 Logo、未确认数字、假案例指标。
2. 合并重复叙事：Home 只做认知和导流，Platform 才做完整产品能力。
3. 补足证据链：Customers、Trust、Integrations、Security 只使用确认过的案例、数据、认证和集成状态。

这样用户看完整站后，才会清楚地知道：

```text
餐道是一家什么公司；
它解决哪些餐饮营运问题；
它通过哪些平台能力解决；
是否能接入现有系统；
是否有可信案例或公司支撑；
下一步应该联系谁、提交什么需求。
```
