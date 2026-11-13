# Candao Website Design System v1.0

任务：T11.5-A / Task A08  
日期：2026-08-05  
输出语言：简体中文  

## 1. Figma 输出

| Frame | Node ID | 尺寸 | 验证 |
| --- | --- | --- | --- |
| `Candao Website Design System v1.0` | `51:2` | 1440 × 2020 | 非空，8 个一级子节点 |

## 2. Tokens

### Color

| Token | Value | 用途 |
| --- | --- | --- |
| `color/brand/blue` | `#528dff` | Primary CTA、连接线、active 状态、重点 UI |
| `color/brand/blue-dark` | `#2266dd` | 文本强调、hover、深色背景上的辅助 |
| `color/brand/blue-soft` | `#eaf2ff` | 浅色标签、卡片背景、hover 面 |
| `color/bg/page` | `#f6f9fc` | 页面背景 |
| `color/bg/surface` | `#ffffff` | 卡片、UI 面板 |
| `color/text/primary` | `#0b1320` | 主文本 |
| `color/text/secondary` | `#556477` | 次级文本 |
| `color/status/success` | 绿色 | 稳定 / 完成 |
| `color/status/warning` | 琥珀色 | 高峰 / 待处理 |
| `color/status/error` | 红色 | 异常 / 错误 |

### Typography

| Style | 用途 |
| --- | --- |
| Display | Home Hero、核心页面 Hero |
| H1 / H2 | 页面标题、Section 标题 |
| Body | 正文说明 |
| Label / UI | UI chip、表格状态、微文案 |

字体：

```text
Noto Sans TC
```

规则：

- 字距为 0；
- 行高约 1.34；
- 卡片和 UI 面板内标题不得使用 Hero 级字号；
- 官网生产 Frame 使用繁體中文。

### Spacing / Radius / Elevation

| 类型 | 规则 |
| --- | --- |
| Spacing | `4 / 8 / 12 / 16 / 24 / 32 / 48 / 72` |
| Radius | 默认卡片 8px；小状态 4-8px；避免大圆角 AI 网页感 |
| Elevation | Floating UI 使用轻阴影，服务层级，不做厚重玻璃拟态 |

## 3. Components

| Component | 用途 | 关键规则 |
| --- | --- | --- |
| Hero | 首屏摄影、标题、CTA、UI Overlay | 不放入卡片；保留负空间 |
| Capability Card | 首页与平台能力入口 | 标题 + 一句价值 + 状态或入口 |
| UI Demo Container | 产品展示 | 必须呈现 workflow，不做装饰截图 |
| CTA | Demo 转化 | 主按钮使用 `#528dff` |
| Form | Contact / Demo | 支持 intent、默认、error、success |
| Flow Diagram | Platform / Product Motion | 用蓝色连接线表达系统连接 |

## 4. States

| State | 用途 |
| --- | --- |
| Default | 基础白色或浅灰表面 |
| Hover | `blue-soft` 背景或轻阴影 |
| Active | `#528dff` 主色填充 |
| Error | 红色提示，用于异常和表单错误 |
| Success | 绿色提示，用于完成和稳定状态 |

## 5. Visual QA Rules

1. 首屏 5 秒内必须看懂：餐饮营运 + SaaS 平台 + UI Overlay。
2. Hero 必须有摄影或视频方向，不使用抽象渐层作为主视觉。
3. Product Showcase 必须是 workflow，不是功能清单。
4. `#528dff` 只作行动、连接和焦点色，不能把整站做成单一蓝。
5. 禁止虚构客户、数字、认证、SLA、价格和真实订单数据。

