# 客戶案例與關於 Candao 低保真補齊記錄

任务：T18 Customers and About Low-fidelity Wireframe Supplement  
日期：2026-08-15  
状态：已按 PPT 授权口径补齐低保真结构，并完成 1440 桌面截图验证

## 用户确认

用户已在 2026-08-15 明确确认：

```text
PPT 中数据完全准确，授权完全展示
```

因此，本轮不再将 PPT 中客户、案例、规模数字、认证或 DMS 稳定性数据作为待授权占位处理。

## 本轮补齐

- 在 T17 低保真 HTML 原型中新增 `客戶案例` 页面。
- 在 T17 低保真 HTML 原型中新增 `關於 Candao` 页面。
- 顶部导航新增 `客戶案例 / 關於 Candao`。
- 首页故事路径补入 `Customers：證明落地` 和 `About：建立可信`。

## 内容边界

`客戶案例`：

- 使用 PPT Slide 11 的 `Our Performance` 规模数据。
- 使用 PPT Slide 39-41 的 Pizza-Box、JIA Group、Jardine Group / KFC / Pizza Hut / PHD、McDonald's / Yoshinoya 等客户线索。
- 使用 PPT Slide 38、42-45 的匿名行业案例和指标。
- 低保真阶段以文字标签表示 Logo / 指标位，高保真阶段可再做真实 Logo 和案例卡视觉。

`關於 Candao`：

- 使用 PPT Slide 4-6 的公司背景、团队、服务体系、ISO 27001 / ISO 20000 和产品演进。
- 使用 PPT Slide 131 的 DMS 稳定性数据：Concurrent Throughput 500 Order/second，Platform availability 99.95% over。
- 使用 PPT Slide 132 的官网、邮箱、电话和办公室地址线索。

## 待验证

已完成：

- 已重新生成 6 个页面的 1440 桌面截图。
- 已验证新增导航切换正常。
- 已验证 `客戶案例` 和 `關於 Candao` 页面非空、导航 active 状态正确、截图文件生成成功。

## 截图产物

- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/home-desktop-1440.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/solutions-desktop-1440.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/platform-desktop-1440.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/integrations-desktop-1440.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/customers-desktop-1440.png`
- `tasks/T17/output/low-fidelity-wireframe-prototype/screenshots/about-desktop-1440.png`

## 截图验证结果

```text
PASS home-desktop-1440.png
PASS solutions-desktop-1440.png
PASS platform-desktop-1440.png
PASS integrations-desktop-1440.png
PASS customers-desktop-1440.png
PASS about-desktop-1440.png
```

## 后续建议

下一步建议继续补齐 `資源` 与 `預約產品演示` 的低保真页面，使第一阶段主导航形成完整闭环。随后再做全站低保真叙事 QA，检查页面之间是否重复、是否有 PPT 数据口径冲突、是否需要补 English 内容库。
