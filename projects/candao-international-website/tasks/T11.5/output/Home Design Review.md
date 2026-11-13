# Home Design Review

任务：T11.5-A / Task A05  
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
| `Home / Desktop 1440 / TC` | `47:2` | 1440 × 2680 | 非空，36 个一级子节点 |
| `Home / Mobile 390 / TC` | `49:2` | 390 × 2300 | 非空，23 个一级子节点 |
| Desktop Hero 摄影节点 | `47:3` | 1440 × 790 | `IMAGE` 填充 |
| Mobile Hero 摄影节点 | `49:3` | 390 × 520 | `IMAGE` 填充 |

项目内摄影资产：

```text
tasks/T11.5/output/assets/candao-hero-restaurant-operations-blue-2026-08-05.png
```

## 2. 模块覆盖

| 模块 | 状态 | 说明 |
| --- | --- | --- |
| Hero | 已完成 | 大型餐饮营运摄影 + 左侧负空间 + UI Overlay |
| 摄影 / 视频方向 | 已完成 | 生成商业摄影作为静态 fallback；文字中保留视频方向 |
| UI Overlay | 已完成 | `即時營運指揮台` 展示订单、状态、预测和配送分流 |
| Trust Module | 已完成 | 使用能力信任层，不使用未确认 Logo / 数字 |
| Problem Switcher | 已完成 | 默认展示“渠道碎片化”高峰问题 |
| Product Showcase | 已完成 | Unified Ordering、Delivery Management、HQ Visibility 三组 UI demo |
| Final CTA | 已完成 | 深色收束区 + Demo CTA |

## 3. 必答审核

### 是否 5 秒理解？

基本通过。

用户在首屏能看到：

- 餐厅高峰营运现场；
- Candao 是餐饮 SaaS 平台；
- UI Overlay 表达跨渠道订单和营运状态；
- `預約示範` 与 `探索平台` 路径明确。

需要注意：当前 H1 使用“為連鎖餐飲打造的一體化營運平台”，比 T07 原句更短，更适合视觉稿，但后续进入最终网页时应回到 T07/T13 确认最终公开文案。

### 是否像国际 SaaS？

通过。

原因：

- Hero 不使用抽象科技背景；
- 页面有清晰的 SaaS UI Overlay；
- Trust、Problem、Product、CTA 的节奏符合国际 B2B SaaS；
- 颜色克制，`#528dff` 作为 action / connection 色，而不是整页铺满。

### 是否有产品感？

通过，但仍有精修空间。

优点：

- UI Overlay 展示订单流和预测；
- Product Showcase 用 UI 小面板表达产品能力；
- 没有把产品变成功能清单。

后续精修：

- Product Showcase 可进一步补充更真实的表格列、状态筛选和 hover 状态；
- Hero UI 可加入 Store Load / Delivery Timeline 的第二状态，用于动效版。

### 是否需要重新设计？

不需要推倒重做。

当前方向符合 T10 的 `Operational Clarity for Global Restaurant SaaS`。建议进入 T12 综合审核后做视觉精修，而不是重新选方向。

## 4. 风险

- Hero 图为 AI 生成资产，可用于方向探索和 Figma 验证；正式上线仍应替换为授权摄影 / 视频。
- 视觉稿中使用抽象订单编号和状态，不代表真实客户数据。
- 当前 Home 仅完成 Desktop 1440 与 Mobile 390，未生成完整 `/EN` 独立版本。
- 已执行生产语言复扫，英文残留仅剩 `Candao`、`EN`、`SaaS`、`POS`、`QR` 等允许品牌 / 技术词。
