# Product Motion Storyboard

任务：T11.5-A / Task A07  
日期：2026-08-05  
输出语言：简体中文  

## 1. Figma 输出

| Frame | Node ID | 尺寸 | 验证 |
| --- | --- | --- | --- |
| `Product Motion Storyboard / TC` | `50:74` | 1440 × 1060 | 非空，24 个一级子节点 |

## 2. Order Management 4-step UI Demo

| Step | 画面 | Motion 表达 | 业务价值 |
| --- | --- | --- | --- |
| 01 Multi-channel Orders | 多渠道订单卡片从不同方向进入 | 渠道 chip 进入，连接线亮起 | 展示订单来源分散 |
| 02 Unified Queue | 订单收敛到统一队列 | 卡片排序、状态统一 | 减少门店切换 |
| 03 Store Processing | 门店处理状态推进 | 状态颜色和进度条更新 | 前线执行更清晰 |
| 04 HQ Dashboard | 总部看到状态与异常摘要 | 图表聚合，例外节点高亮 | 运营可视性回流 |

## 3. Delivery Management 4-step UI Demo

| Step | 画面 | Motion 表达 | 业务价值 |
| --- | --- | --- | --- |
| 01 Peak Demand | 高峰需求出现 | 需求条上升，警示色出现 | 履约压力可见 |
| 02 Dispatch Choice | 派送方式选择 | 自有 / 外部运力选项切换 | 配送协调 |
| 03 Tracking | 追踪状态更新 | 时间线推进，状态 chip 改变 | 实时追踪 |
| 04 Exception Handling | 异常回流运营视图 | 异常卡片进入，总部面板同步 | 问题处理和总部可见 |

## 4. 设计原则

- 两条产品线共用 `Product UI Demo` 框架，但 UI 内容和状态色不同。
- 所有数据均为抽象示例，不使用真实客户订单、真实平台 Logo 或真实金额。
- 每段 Motion 都有静态等价画面，便于在 Figma、Stitch、网页开发中落地。
- 移动端降级为 swipeable 4-step cards。

## 5. 下一步建议

进入 T12 时，重点检查：

- UI Demo 是否足够像真实 SaaS 产品，而不是装饰图；
- Order 与 Delivery 是否有明显差异；
- Motion 是否解释业务流程；
- 是否需要补充 Contact / Book a Demo 的表单状态分镜。

