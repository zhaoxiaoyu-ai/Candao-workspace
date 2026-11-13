# T22 資源與預約產品演示低保真補齊報告

日期：2026-08-15  
狀態：done

## 1. 本次完成

已更新低保真原型：

```text
tasks/T17/output/low-fidelity-wireframe-prototype/index.html
```

导航已补齐为 8 个一级页面：

```text
首頁 / 解決方案 / 平台 / 整合能力 / 客戶案例 / 資源 / 關於餐道 / 預約產品演示
```

本次新增：

- `資源` 页面：支援中心、常見問題、接入指南、媒體與新聞、案例資源、查詢表單和 Resource Routing。
- `預約產品演示` 页面：Demo Hero、Intent Router、Scenario Step、System Landscape Fields、Needs Checklist、After Submit、Support Split 和 Privacy Note。
- 修正中文 / 繁體中文页面中的品牌显示残留：`關於 Candao`、`Candao 的可信`、`聯絡 Candao`、`Candao OMS` 已改为「關於餐道」「餐道的可信」「聯絡餐道」「餐道 OMS」。

## 2. 证据来源

- `domain-copy/business-context.md`
- `domain-copy/glossary.yaml`
- `domain-copy/copy-rules.md`
- `tasks/T15/output/old-website-ppt-to-page-module-evidence-matrix-v1.0-2026-08-14.md`
- `tasks/T11.5/output/website-directory-content-gap-fill-v0.2-2026-08-10.md`
- `tasks/T11.5/output/figma-all-pages-section-audit-2026-08-12.md`
- `tasks/T21/output/human-decisions-applied-2026-08-15.md`

## 3. 页面设计边界

`資源` 不承担产品销售主叙事，也不替代 Customers：

- 支援中心用于导入、使用、营运、技术查询。
- FAQ 必须围绕接入、订单、菜单、配送、财务对账。
- 媒体与新闻只做入口，不生成假新闻。
- 案例资源只导向 Customers，不重复完整案例页。
- 查询表单承接非销售型问题。

`預約產品演示` 不做普通联系表单：

- 先分流产品演示、联系销售、合作洽询、支援查询。
- 再收集营运场景、系统现况、订单来源、门店系统和配送方式。
- 提交后显示需求摘要；信息不足时提示补充，不编造方案。
- 不承诺价格、SLA、上線週期或整合范围。

## 4. 自动 QA

Domain-copy QA：

```text
tasks/T22/output/resources-demo-copy-qa-input-2026-08-15.json
tasks/T22/output/resources-demo-copy-qa-result-2026-08-15.json
```

结果：

```text
10 / 10 passed
```

检查覆盖：

- Resources Overview
- Support Center
- Finance FAQ
- Enquiry Form
- Demo Hero
- Intent Router
- Scenario Step
- System Landscape Fields
- Routing Result
- About 品牌显示检查

## 5. 视觉验证

使用 Google Chrome + Playwright 打开本地 HTML，并对 8 个页面逐一点击导航、验证 active page、导航数量和旧品牌残留。

结果：

```text
8 / 8 pages passed
```

截图：

- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t22-home-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t22-solutions-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t22-platform-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t22-integrations-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t22-customers-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t22-resources-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t22-about-1440-full.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/t22-demo-1440-full.png`

备注：bundled Playwright 浏览器二进制未安装，截图验证改用本机 Google Chrome 可执行文件完成。

## 6. 仍需人工确认

- H3-01：8 页低保真业务验收是否通过。
- H3-02：哪些页面、模块和段落进入 `approved_and_locked`。
- Resources 是否需要真实搜索功能，还是只保留分类筛选。
- 支援中心真实分流方式、接收团队、服务时段和响应口径。
- Demo 表单最终字段、隐私说明、资料用途、CRM / 表单接收流程。
- 媒体资料、新闻素材、品牌素材和案例资源是否有公开文件可放入正式官网。
