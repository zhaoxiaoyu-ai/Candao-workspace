# Candao Visual Design Rules

日期：2026-08-05  
任务：T11.5-B / B04  
项目：餐道国际官网重构  
用途：沉淀 Candao 国际官网后续视觉优化、T12 审核和 T13 Design Blueprint 可复用规则。

## 1. 总规则

Candao 国际官网的视觉判断标准是：

```text
Operational Clarity for Global Restaurant SaaS
```

好的视觉不是更炫，而是让复杂餐饮运营变得更清楚、更可信、更像可购买的国际 SaaS 产品。

## 2. 好的设计规则

### 2.1 Hero

- 首屏必须在 5 秒内说明：Candao 是面向复杂餐饮运营的 SaaS 平台。
- Hero 应使用真实餐饮运营场景：接单、出餐、打包、配送交接、门店协同。
- Hero 不用普通办公室、商务握手、城市夜景、抽象 AI 背景、粒子和 3D 球体。
- Hero 文字区必须有足够负空间，标题、说明和 CTA 不被图片或 UI 遮挡。
- UI Overlay 应展示订单、门店、配送、数据或系统连接，不做无意义装饰面板。

### 2.2 SaaS UI

- UI 必须是半真实产品 UI：有业务对象、有状态、有关系、有下一步。
- UI Demo 必须回答：输入是什么、系统如何处理、输出给谁、业务结果是什么。
- Dashboard 不堆满指标，只保留能解释运营清晰度的关键状态。
- Order Demo 必须展示多渠道订单进入统一队列。
- Delivery Demo 必须展示订单高峰、配送分配、路线追踪、异常回流。
- Platform Demo 必须展示 Capability Map 和总部可见性。

### 2.3 色彩

- 主色使用 `#528dff`。
- `#528dff` 用于 CTA、当前导航、关键状态、平台连接线和重要 Product UI emphasis。
- 不把整页做成单一蓝色主题。
- 状态色必须有语义：绿色表示健康 / 成功，琥珀表示高峰 / 警示，红色表示异常。
- 背景以中性浅灰和白色为主，保留 SaaS 工具的清晰阅读体验。

### 2.4 组件

- 常规卡片圆角不超过 8px。
- 不使用卡片套卡片作为页面主结构。
- 卡片必须服务信息分组，不做装饰堆叠。
- 图标要与真实功能关联，避免泛图标。
- CTA 按钮文案统一为 `預約產品演示`。

### 2.5 Motion

- Motion 只服务三件事：解释流程、显示状态变化、引导下一步行动。
- Platform 使用连接线和节点变化表达系统连接。
- Order / Delivery 使用 stepper 或 scroll-triggered storyboard 表达四步流程。
- 每个 Motion 必须有静态等价状态。
- 必须保留 `prefers-reduced-motion` 降级方案。

### 2.6 生产语言

- 默认视觉稿和 Stitch 输出为繁體中文单一 Locale。
- 同屏只允许 `Candao` 和语言切换 `繁中 / EN` 可见英文。
- 不允许英文标题、英文 CTA、英文 Footer 混入繁中生产页。
- Figma Frame 使用 `/TC` 或 `/EN`；当前默认使用 `/TC`。

### 2.7 可信证明

- 未确认客户 Logo、客户名称、真实数据、认证、SLA、价格和集成状态不得出现在视觉稿。
- 无授权背书时，使用 Trust fallback：服务流程、平台类别、产品能力、数据脱敏 UI、案例模板。
- 模拟 UI 数据必须保持匿名，不得被转写成官网事实。

## 3. 常见错误

| 错误 | 为什么会变普通 | 修正方式 |
| --- | --- | --- |
| 抽象科技背景 | 看起来像通用 SaaS，不像餐饮运营 | 换成真实餐饮运营摄影 + 产品 UI Overlay |
| 图标卡片堆叠 | 像功能目录，不像产品叙事 | 改成 Capability Flow 或 Workflow Storyboard |
| 过大圆角和厚阴影 | 有 AI 模板感 | 圆角收敛到 4-8px，阴影更轻 |
| 英文残留 | 破坏繁中生产页规则 | Footer、CTA、UI Label 全部清理为繁中 |
| UI 太抽象 | 看不出 Candao 做什么 | 增加订单、门店、配送、异常、总部视图等业务对象 |
| Motion 只做装饰 | 消耗注意力但不帮助理解 | Motion 必须绑定状态变化和流程推进 |
| 假客户 Logo / 假数据 | 合规和可信风险 | 一律使用授权素材或待确认占位 |
| 首页 Product Showcase 太弱 | 首屏后产品感断层 | 用订单进入、状态同步、配送更新、数据回流串起能力 |

## 4. 页面优化方向

### Home

必须优化：

- 替换中段灰色占位图；
- 统一 CTA 为 `預約產品演示`；
- 清理 Footer 英文版权句；
- 将 Product Showcase 从功能卡片改成能力流；
- 强化 Hero UI Overlay 的业务对象。

目标：

```text
真实运营信号
→ Candao 平台连接
→ 核心能力流
→ Demo 转化
```

### Platform

必须优化：

- 以 Platform v2 为准，丢弃 v1；
- Capability Map 增加输入 / 输出关系；
- UI Demo 增强总部视图、异常提示和门店健康状态；
- Product Cards 从功能入口变成能力结果入口。

目标：

```text
Ordering Channels
→ Candao Platform
→ Store / Delivery / Data
→ Headquarters Visibility
```

### Order Management

必须优化：

- 统一四步 UI Demo 的视觉 token；
- 在每一步补充业务结果；
- 保持模拟数据脱敏；
- 增加异常 / 总部回流状态。

目标：

```text
多渠道订单
→ 统一队列
→ 门店执行
→ 总部可见
```

### Delivery Management

必须优化：

- 以 Delivery v2 为准，丢弃 v1；
- 重绘抽象路线图为 Candao 产品风格；
- 强化异常处理回到营运视图；
- 将配送分配、追踪、异常面板做成同一张运营工作台。

目标：

```text
高峰压力可见
→ 配送方式分配
→ 过程追踪
→ 异常回流
```

## 5. 视觉验收清单

### 5.1 品牌与定位

- 5 秒内是否知道 Candao 是餐饮运营 SaaS？
- 是否有真实餐饮运营信号？
- 是否避免泛科技和国内软件官网口号？
- 是否有国际 B2B SaaS 的克制和可信？

### 5.2 产品表达

- UI 是否解释产品价值？
- Capability Map 是否显示连接关系？
- Product Demo 是否有 4-step storyboard？
- 每个 UI 状态是否有业务意义？

### 5.3 转化

- 首屏 CTA 是否可见？
- CTA 文案是否统一？
- 页面末端是否自然承接 Demo？
- Product Demo 是否给用户预约理由？

### 5.4 开发可执行性

- 组件是否可拆分？
- 圆角、间距、颜色是否能固化为 token？
- Motion 是否可用 CSS / Framer Motion 实现？
- 静态 fallback 和 reduced-motion 是否存在？

### 5.5 语言与合规

- 是否为繁體中文单一 Locale？
- 是否只保留 `Candao` 与 `繁中 / EN` 可见英文？
- 是否没有未确认客户、Logo、数据、认证、SLA、价格？
- 是否没有真实客户数据？

## 6. T12 使用建议

T12 应把本规则库作为视觉审查底表。

推荐审核顺序：

1. 先审 Home 5 秒理解。
2. 再审 Platform Capability Map。
3. 再审 Order / Delivery Product Demo。
4. 再审生产语言与未确认事实风险。
5. 最后审开发可执行性和 Motion 降级。

