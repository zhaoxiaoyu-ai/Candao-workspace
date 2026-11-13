# Platform High Fidelity Design

任务：T11.5-A / Task A06  
日期：2026-08-05  
输出语言：简体中文  

## 1. Figma 输出

Figma 文件：

```text
https://www.figma.com/design/BMXIuVRzSUUt9YNhVAQA6K
```

已生成 Frame：

| Frame | Node ID | 尺寸 | 验证 |
| --- | --- | --- | --- |
| `Platform / Desktop 1440 / TC` | `48:2` | 1440 × 2480 | 非空，20 个一级子节点 |

## 2. 页面目标

Platform 页面用于解释 Candao 不是单点工具，而是连接点餐渠道、门店履约、配送、数据和总部可视化的 Restaurant SaaS Platform。

## 3. 核心模块

| 模块 | 设计状态 | 说明 |
| --- | --- | --- |
| Hero | 已完成 | 深色产品场域 + Platform Pulse UI，建立统一平台认知 |
| Capability Map | 已完成 | `Ordering Channels → Candao Platform → Store / Delivery / Data / HQ Visibility` |
| UI Demo | 已完成 | Operations Console：订单队列、门店负载、配送例外 |
| Product Cards | 已完成 | Order Management、Delivery Management、Store Operations |

## 4. Capability Map 设计说明

设计结构：

```text
Web Ordering
Mobile App
Marketplace
QR / Kiosk
→ Candao Platform
→ Store
→ Delivery
→ Data
→ HQ Visibility
```

设计判断：

- 中央平台节点使用深色，建立平台核心；
- 输入渠道使用蓝色浅底，输出能力使用不同状态色；
- 连接线使用 `#528dff`，表达系统连接；
- 不画复杂网络球，避免泛科技感。

## 5. UI Demo 设计说明

Operations Console 包含：

- 左侧 SaaS 导航；
- Unified Order Queue；
- Peak mode / HQ view；
- Store workload chart；
- Exception handling panel。

该 UI Demo 主要回答：

```text
订单如何进入？
门店如何处理？
配送例外如何显现？
总部如何看到状态？
```

## 6. 质量判断

| 审核项 | 结论 |
| --- | --- |
| 国际 SaaS 感 | 通过 |
| 产品感 | 通过 |
| 餐饮行业感 | 基本通过，后续可补充更多餐饮场景图 |
| 可开发性 | 通过，结构可拆成 Hero、CapabilityMap、OperationsConsole、ProductCards |
| 风险 | 目前是半真实 UI，不应被解读为真实产品截图 |

