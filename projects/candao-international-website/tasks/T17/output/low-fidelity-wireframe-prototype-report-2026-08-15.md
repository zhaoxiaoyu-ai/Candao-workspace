# 核心页面低保真原型图交付记录

任务：T17 Core Pages Low-fidelity Wireframe Prototype  
日期：2026-08-15  
状态：已完成初版低保真 HTML 原型

## 产物

- `output/low-fidelity-wireframe-prototype/index.html`
- `output/low-fidelity-wireframe-prototype/screenshots/`

## 范围

T17 初始覆盖 4 个已通过 T15 / T16 内容准入的核心页面：

- `首頁`
- `解決方案`
- `平台`
- `整合能力`

补充更新：

- 2026-08-15 T18 已在同一个 HTML 原型中补齐 `客戶案例` 与 `關於 Candao`。
- 用户已确认 PPT 中数据准确且授权展示，因此 `客戶案例` 和 `關於 Candao` 可使用 PPT 中客户、案例、规模数字、认证和 DMS 稳定性数据。
- 当前原型合计覆盖 6 页：`首頁 / 解決方案 / 平台 / 整合能力 / 客戶案例 / 關於 Candao`。

未覆盖：

- 資源
- 預約產品演示
- English 版本
- 高保真视觉
- Figma / Stitch / React 实现

## 原型原则

- 使用低保真线框表达页面结构，不引入真实视觉风格。
- 每个页面保留独立叙事角色。
- 使用来源编号提示模块证据，不隐藏资料来源。
- 不展示未确认客户 Logo、客户名、规模数字、认证、SLA、合作伙伴 Logo、价格或性能承诺。
- 通过灰阶线框、模块框、流程块、系统节点图表达内容层级和业务路径。

## 截图验证

已使用本机 Google Chrome + Playwright 生成 1440 桌面长图，并完成导航、模块数量与非空文件校验：

- `output/low-fidelity-wireframe-prototype/screenshots/home-desktop-1440.png`
- `output/low-fidelity-wireframe-prototype/screenshots/solutions-desktop-1440.png`
- `output/low-fidelity-wireframe-prototype/screenshots/platform-desktop-1440.png`
- `output/low-fidelity-wireframe-prototype/screenshots/integrations-desktop-1440.png`
- `output/low-fidelity-wireframe-prototype/screenshots/customers-desktop-1440.png`
- `output/low-fidelity-wireframe-prototype/screenshots/about-desktop-1440.png`

校验结果：6 个页面均 PASS。抽看 `首頁`、`平台`、`客戶案例` 与 `關於 Candao` 截图后，页面分工清晰：`首頁` 负责建立认知与导流，`平台` 负责产品能力地图与模块展开，`客戶案例` 负责授权案例与数据证明，`關於 Candao` 负责公司可信与服务方式。

## 需要继续确认

- T16 / T18 内容仍需做全站反泛化 QA。
- 低保真原型仍需业务方检查故事路径。
- 进入高保真前仍需补齐 English 内容库。
- PPT 以外的客户、数字、认证、合作伙伴公开口径仍不能进入页面。

## 下一步建议

建议下一步先做：

```text
T19: Resources + Demo Low-fidelity Supplement
```

建议先补齐 `資源` 和 `預約產品演示`，再做全站低保真评审，通过后再决定是否进入 Figma 低保真 / 中保真，或转为 React 原型。
