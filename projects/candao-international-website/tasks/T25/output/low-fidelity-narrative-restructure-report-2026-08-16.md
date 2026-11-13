# T25 低保真叙事局部重构报告

日期：2026-08-16  
状态：done  
原型文件：`tasks/T17/output/low-fidelity-wireframe-prototype/index.html`

## 1. 是否需要到“重构”的程度

需要，但不是全站推倒重来，而是低保真叙事结构的局部重构。

本轮不新增一级页面，不推翻旧官网 / PPT 证据，不重写 Customers / Resources / Demo 的主体内容。重构范围集中在：

- Home：从产品说明和局部功能，改成“定位 + 复杂生态 + 规模证明 + 全链路能力总览”。
- Complexity Map：从混合产品、功能、系统，改成餐饮 O2O 生态复杂度图。
- Platform：从静态产品说明，改成可切换的业务链路能力地图。
- CTA：补齐 Solutions / Platform / Integrations 的页面任务导流。
- Product Video：补旧官网产品视频入口候选，并标注素材确认边界。
- About：改掉 AI 化叙述，转为专业企业定位和服务交付能力表达。

## 2. 用户 11 点反馈的处理

| 用户问题 | 本轮处理 | 依据 / 边界 |
|---|---|---|
| 1. 首页文案片面且冗长，是否体现聚合能力 / 全链路 | 已改 Hero，明确餐道连接外卖平台、自有点餐、POS / KDS、CRM / 会员、配送、支付、ERP、财务数据，并表达营运中枢。 | `OLD-SOLUTION-292`、`PPT-OPMODEL`、`PPT-SaaS` |
| 2. Complexity Map 维度混杂 | 已将节点改为订单渠道、门店执行系统、顾客与会员、支付与企业系统、配送资源、营运对象、异常状态、餐道 Connector，不再把 OMS / CDBI / DMS 放进同一层。 | `PPT-OPMODEL`、`PPT-OMS-PAIN`、`OLD-BIZ-289` |
| 3. “营运调整”依据不足 | 已删除“营运调整”，改为售罄、转派、退款或对账跟进。 | `PPT-OMS-MODULES`、`PPT-DATA`、`OLD-DELIVERY-388` |
| 4. 首页为什么放产品体系入口 | 已改为 Capability Overview，首页只保留渠道聚合、营运承接、配送履约、数据对账、生态接入；完整产品体系导向 Platform。 | H2-02 页面去重规则、T15 Home / Platform 页面角色 |
| 5. 首页是否过偏产品、权威性不足 | 已新增 Authority Snapshot 和 Hero 下方 proof strip，使用 PPT Slide 11 同一组口径和 20 年经验。 | `PPT-SLIDE-11`、`PPT-COMPANY`；仍标注如需集中 Customers 可调整 |
| 6. Platform 能力地图每项是否可切换 | 已改为 6 个可切换 rail：多渠道订单、餐单与门店、会员与自有点餐、配送履约、数据与对账、AMS / Connector。 | `OLD-PRODUCT-285`、`PPT-OMS-CORE` |
| 7. Platform 是否像产品说明书 | 已要求右侧固定承载场景、业务对象、状态 / 操作、对应产品、来源、下一步，不再只是产品卡。 | T15 Platform 页面角色：产品如何工作、状态变化、数据流 |
| 8. 是否每页都需要 CTA | 已补 Solutions / Platform / Integrations CTA；Home、Customers、Resources、About、Demo 原有 CTA 保留并调整分流。 | H2-03 销售转化对象优先 |
| 9. 旧官网产品视频是否补齐 | 已新增 Product Video Entry，按 OMS、Menu / Store、DMS / iDMS、CDBI / Finance 分发；正式使用前确认素材、语言、封面和公开范围。 | `USER-2026-08-16` 用户指出旧官网有产品视频；素材仍需确认 |
| 10. About “从外送经验长出”不专业 | 已改为“專注餐飲與零售 O2O 營運系統的產品與服務團隊”。 | `PPT-COMPANY` |
| 11. SaaS / Data / Delivery / QA 模块来源与必要性 | 已改为“以产品平台、数据分析、配送履约和质量保障支撑长期营运”，并逐项解释，不再孤立摆四个英文词。 | `PPT-COMPANY`、`PPT-OPMODEL`、`OLD-PAIN-284` |

## 3. 修改文件

- `tasks/T17/output/low-fidelity-wireframe-prototype/index.html`
- `tasks/T25/task.md`
- `tasks/T25/output/low-fidelity-narrative-restructure-qa-input-2026-08-16.json`
- `tasks/T25/output/low-fidelity-narrative-restructure-qa-result-2026-08-16.json`
- `tasks/T25/output/low-fidelity-narrative-restructure-report-2026-08-16.md`

## 4. 自动 QA

QA 输入：

```text
tasks/T25/output/low-fidelity-narrative-restructure-qa-input-2026-08-16.json
```

QA 结果：

```text
tasks/T25/output/low-fidelity-narrative-restructure-qa-result-2026-08-16.json
```

结果：

```text
12 / 12 passed
```

覆盖：

- Home Hero
- Home Complexity Map
- Home Authority Snapshot
- Home Operating Loop
- Home Capability Overview
- Solutions CTA
- Platform Capability Map
- Platform Delivery Tab
- Platform Product Video Entry
- Integrations CTA
- About Company
- About Service Delivery

## 5. 渲染与交互检查

使用本机 Google Chrome + Playwright 渲染磁盘 HTML：

- 8 / 8 页面导航切换通过。
- Platform 6 / 6 能力 rail 切换通过。
- 可见文本未命中 `IDMS`、`SAAS`、`Can Dao`、`candao`、`一站式`、`賦能`、`全球領先`、`營運調整`、`從外送經驗長出`。

截图：

- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t25-home-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t25-solutions-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t25-platform-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t25-integrations-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t25-customers-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t25-resources-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t25-about-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t25-demo-1440-full.png`

## 6. 仍需人工确认

- H3-01：低保真业务验收是否通过。
- H3-02：哪些文案进入 `approved_and_locked`。
- Home 是否最终保留 Slide 11 指标，或只保留 Logo + Customers 导流。
- 产品视频素材、语言版本、封面、公开范围和放置位置。
- 真实产品截图如何替换当前低保真文字 / 界面占位。
- Demo 表单字段、隐私说明、资料用途和接收团队。

## 7. 结论

本轮完成的是低保真叙事局部重构。当前原型更接近“餐道业务专属性官网”的路径：Home 建立认知和可信，Solutions 确认场景，Platform 说明实现方式，Integrations 验证接入，Customers 证明落地，Resources 降低疑问，About 建立企业可信，Demo 完成转化分流。

本轮不标记 H3-01 通过，也不新增 `approved_and_locked`。
