# T23 低保真逐页文案业务 QA 与收紧报告

日期：2026-08-15  
状态：done

## 1. 本次回答的问题

本轮针对当前 8 页低保真原型逐页检查：

- 之前约束的「符合餐道业务和行业术语」是否已经调整。
- 表达冗长、泛化、重复的问题是否已经解决。
- 原型阶段是否存在样式或文案层面擅自改变术语、删减业务对象的风险。

结论：

- T22 后已经完成了大方向调整：8 页都有页面角色、来源标记、餐道业务对象和产品模块。
- 但本轮仍发现若干残留：`閉環 / 增長 / 一站式 / 全渠道` 等泛化词、`Can-Dao Connector` 品牌显示不一致、`IDMS` 大小写不一致、Customers 案例长句偏多、About / Demo 局部说明过长。
- 本轮已直接修正，并通过 domain-copy QA 与 8 页截图验证。

## 2. 修改文件

### 低保真原型

- `tasks/T17/output/low-fidelity-wireframe-prototype/index.html`

主要修正：

- Home Hero：从「複雜餐飲 O2O 營運 / 閉環」改成「訂單、門店、配送 / 營運鏈路」。
- Solutions：去掉「閉環、數據到增長」抽象标题，改为「多平台訂單、門店、配送、對賬」场景标题。
- Solutions 服务模块：`系統託管與全渠道代運營` 改为 `系統託管與多渠道代營運`，并补回餐单、门店资讯、订单处理、营运监督、CDBI / Finance Center 等对象。
- Platform：`把資料變成營運資產` 改为 CDBI / Finance Center 的报表、看板与对账差异。
- Platform：`智能調度` 改为 DMS 区域、路线、第三方溢出规则。
- Integrations：`Can-Dao Connector` 改为 `餐道 Connector`。
- Customers：删除 `一站式管理`、`閉環`、`提高效率` 等泛化表达，改为 POS 对接、多平台资料、自動打印、骑手管理、OMS 流程、CDBI 分析等业务对象。
- Resources：压缩导语与接入指南，不再出现「所有系统可接」类硬风险表达。
- About / Demo：压缩长段，保留公司事实、ISO、DMS 指标、联系方式、Demo 分流字段。
- CSS：取消 `.block-kicker` 的 `text-transform: uppercase`，避免样式层把 `iDMS`、`SaaS` 等受保护术语视觉上改坏。

### domain-copy 机制

- `domain-copy/scripts/domain_copy_qa.py`
- `domain-copy/copy-rules.md`
- `domain-copy/copy-qa-cases.md`

主要修正：

- QA 脚本修正 K/M/B 指标识别，避免把 `500M+ / 200K+ / 4.5B+` 误截为未定义指标。
- copy-rules 增加规则：原型样式不得用强制大小写转换改变 `iDMS`、`SaaS`、`AMS / Connector`、客户名和产品名。
- copy-qa-cases 增加硬失败：样式层导致受保护术语显示错误。

### T23 输出

- `tasks/T23/task.md`
- `tasks/T23/output/page-copy-tightening-qa-input-2026-08-15.json`
- `tasks/T23/output/page-copy-tightening-qa-result-2026-08-15.json`
- `tasks/T23/output/page-copy-business-audit-and-tightening-2026-08-15.md`

## 3. 逐页结论

| 页面 | 本轮判断 | 已修正重点 |
|---|---|---|
| 首頁 | 已基本符合餐道业务主线 | Hero 绑定餐饮 O2O、订单、门店、配送和营运链路，去掉抽象「闭环」表达。 |
| 解決方案 | 已从泛场景改为业务场景 | 标题和三类问题改为多平台订单、履约、对账、自有点餐与会员营运。 |
| 平台 | 业务对象和术语已稳定 | CDBI / Finance、DMS 调度、iDMS 等表达更具体；取消样式强制大写。 |
| 整合能力 | 接入逻辑成立 | `餐道 Connector` 替代 `Can-Dao Connector`，继续保持系统类型和 API 条件表达。 |
| 客戶案例 | 内容深度保留，长句已收紧 | PPT 授权数据、实名案例和行业案例保留；去掉一站式、闭环、提高效率等泛化词。 |
| 資源 | 页面任务清晰 | 继续承担 FAQ、接入、支援和查询分流；压缩导语与接入说明。 |
| 關於餐道 | 公司可信保留，段落更短 | 公司事实、ISO、DMS 指标、联系方式保留，去掉过长英文解释。 |
| 預約產品演示 | 分流字段成立 | Demo Hero 拆短，保留品牌、地区、门店规模、外卖平台、POS、主要问题和产品演示匹配。 |

## 4. 自动 QA

QA 输入：

```text
tasks/T23/output/page-copy-tightening-qa-input-2026-08-15.json
```

QA 结果：

```text
tasks/T23/output/page-copy-tightening-qa-result-2026-08-15.json
```

结果：

```text
13 / 13 passed
```

覆盖项：

- Home Hero
- Solutions Overview
- Platform Capability Map
- Platform Order Processing
- Integrations Connector
- Customers Performance Metrics
- Customers Named Cases
- Customers Vertical Cases
- Resources Access Guide
- About Company
- About Security / Quality
- Demo Form Routing
- Demo After Submit

## 5. 截图验证

使用 Google Chrome + Playwright 直接渲染磁盘 HTML，逐页点击 8 个导航，检查：

- active page 是否正确；
- 导航数量是否仍为 8；
- 禁用词是否可见；
- 是否存在超过 90 字的可见长块；
- 是否能生成 1440 全页截图。

结果：

```text
8 / 8 pages passed
```

截图：

- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t23-home-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t23-solutions-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t23-platform-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t23-integrations-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t23-customers-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t23-resources-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t23-about-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t23-demo-1440-full.png`

## 6. 仍需人工确认

- H3-01：8 页低保真业务验收是否通过。
- H3-02：哪些页面、模块和段落进入 `approved_and_locked`。
- 真实产品截图是否替换当前低保真文字 / 界面占位。
- Demo 表单字段、隐私说明、资料用途和接收团队。
- Resources 是否需要真实内容库、全文搜索或只做分类筛选。
- 支援中心真实时段、响应方式和服务边界。

## 7. 本轮结论

当前低保真文案已经比 T22 更符合餐道业务与行业术语规则；冗长问题已在可见标题、段落和案例句子层面收紧。  
但它仍是业务验收前的低保真内容，不应直接进入高保真、Stitch、React 或 English 内容库；下一步应先完成 H3-01 业务验收，再决定 H3-02 文案锁定范围。
