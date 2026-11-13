# 内容覆盖 QA

日期：2026-08-16

## 检查结果

| 页面 | 主任务 | 当前状态 |
|---|---|---|
| Home | 建立认知、规模可信、全链路能力入口 | 已拆为 H01-H06 |
| Solutions | 场景叙事和导流 | 已定义 S01-S06，设计执行版有页面骨架 |
| Platform | 真实产品截图切换器 | 已定义 P01-P06，设计执行版有可切换能力 |
| Integrations | 系统网络和 API 数据流 | 已定义 I01-I05，设计执行版有网络结构 |
| Customers | 授权数据、实名案例、行业筛选 | 已定义 C01-C06，设计执行版有主案例结构 |
| Resources | 支持阶段、FAQ、查询入口 | 已定义 R01-R05，设计执行版有阶段选择 |
| About | 公司可信、服务体系、地点 | 已定义 A01-A07，设计执行版有时间线和服务体系 |
| Demo | 多步骤表单和动态摘要 | 已定义 D01-D06，设计执行版有表单和摘要 |

## 逐条文本分类

已生成 `content/content-classification-inventory.json`，从 `tasks/T17/output/low-fidelity-wireframe-prototype/index.html` 抽取 592 条可见文本并分类：

| 类型 | 数量 | 后续处理 |
|---|---:|---|
| `public_copy` | 491 | 可进入公开页面，但仍需按 domain-copy QA 检查 |
| `internal_note` | 18 | 只供内部交接和评审，不得公开 |
| `evidence_source` | 78 | 只用于追溯，不得显示来源编号或 PPT 页码 |
| `constraint` | 4 | 作为设计 / 前端硬约束，不得改写为公开文案 |
| `missing` | 1 | 作为缺口或阻塞项，不得用占位内容替代 |

后续 Stitch、Figma 或前端实现必须先读取该清单；只有 `public_copy` 可进入访客页面。

## 风险

- Home 使用 Slide 11 指标仍需最终业务验收确认是否保留在首页，或集中到 Customers。
- English 内容库仍按 H2-05 后置。
- H3-01 和 H3-02 仍未人工批准。
