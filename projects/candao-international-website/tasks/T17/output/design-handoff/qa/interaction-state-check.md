# 交互状态 QA

日期：2026-08-16

## 已定义状态

| 模块 | 默认 | Hover | Click | Scroll | Mobile |
|---|---|---|---|---|---|
| Home Hero | 主截图位和双 CTA | CTA / 截图外框增强 | CTA 导向 Demo / Platform | 分层进入 | 单张截图 |
| Home Connector | 中心节点 | 点亮节点 | 锁定说明 | 节点依序点亮 | 节点 Accordion |
| Home Capability | 渠道聚合 | 临时预览 | 锁定能力 | Sticky 切换 | Accordion |
| Platform Capability | 多渠道订单 | 临时预览 | 标题、说明、产品、CTA 同步变化 | 不强制轮播 | Accordion |
| Platform Video | OMS 视频位 | 播放按钮 | Modal | 不自动播放 | 横向缩略图 |
| Integrations | 外卖平台 | 点亮对象 | 接入详情切换 | 数据包流动 | 核心节点 + Accordion |
| Customers | 主案例 | 案例预览 | 案例切换 | 指标出现 | 单案例轮播 |
| Demo | 选择意图 | 焦点边框 | 字段和摘要同步变化 | 桌面摘要 sticky | 单列 Stepper |

## 第一轮可实际测试

- Platform 六项能力 click 切换。
- Demo 意图 click 切换。
- 页面导航和响应式布局。

## 已补充实际测试

2026-08-16 已将更多 design-ready 页面从静态状态推进到可点击状态，并用 Google Chrome + Playwright 验证：

| 测试项 | 结果 |
|---|---|
| Home 能力切换到配送履约 | pass |
| Solutions 场景切换到财务对账 | pass |
| Integrations 接入对象切换到 POS / KDS | pass |
| Customers 主案例切换到 Jardine Group | pass |
| Resources 阶段切换到技术查询 | pass |
| About 时间线切换到产品演进 | pass |
| Platform 切换到 AMS / Connector | pass |
| Demo 切换到支援查询 | pass |
| 390px 移动端导航抽屉 | pass |

结果文件：

- `tasks/T26/output/design-ready-interaction-browser-check-2026-08-16.json`
- `tasks/T26/output/module-manifest-copy-qa-result-2026-08-17.json`

截图证据：

- `tasks/T17/output/design-ready-wireframe/screenshots/t26-solutions-finance-1440.png`
- `tasks/T17/output/design-ready-wireframe/screenshots/t26-integrations-pos-1440.png`
- `tasks/T17/output/design-ready-wireframe/screenshots/t26-home-mobile-nav-open-390.png`

## 2026-08-17 模块级交互协议补强

已将 `module-manifest.yaml` 从粗粒度合并项拆成 47 个独立模块。每个模块均包含默认、Hover、Click、Scroll 和 Mobile 相关布局说明，并明确操作前后文案、截图、CTA 或详情区域如何变化。

检查结果：

```text
module_count: 47
unique_ids: 47
aggregated_ids: []
missing_field_entries: []
status: pass
```

同时重跑 Manifest 级 domain-copy QA：

```text
47 / 47 passed
```
