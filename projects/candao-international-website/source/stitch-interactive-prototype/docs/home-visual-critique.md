# Home Visual Critique

日期：2026-08-05  
任务：T11.5-B / B02  
审查对象：Home / Desktop / TC  
审查 Agent：International SaaS Website Art Director Agent  
证据截图：`visual-director-audit-assets/01-home-stitch-desktop-tc.png`

## 1. 审查结论

Home 方向成立，但还不是最终级别的高级官网首屏。

它能在 5 秒内让用户理解 Candao 与餐饮运营 SaaS 有关，也有真实餐饮场景和 UI Overlay。但中段占位、产品展示区的通用卡片感、Footer 英文残留和 CTA 文案不一致，会让页面从“国际 SaaS 官网”掉回“AI 生成的 SaaS 模板”。

结论：不需要推倒重做，但需要做一次重点视觉精修。

## 2. 必答问题

| 问题 | 判断 | 说明 |
| --- | --- | --- |
| 是否 5 秒理解？ | 基本通过 | Hero 标题、餐饮运营背景和右侧 UI Overlay 能快速建立“餐饮营运 + 系统平台”的关系；但首屏还可以更明确表达 `global restaurant operations SaaS platform` 的平台感。 |
| 是否像国际 SaaS？ | 有条件通过 | 导航、留白、蓝色 CTA、浮层 UI 和克制版面接近国际 B2B SaaS；但中段卡片和占位图仍有模板味。 |
| 是否有产品感？ | 有，但不够强 | Hero UI Overlay 有订单、配送、数据摘要；下方 Product Showcase 覆盖能力入口，但缺少连续的能力流和状态变化。 |
| 是否需要重新设计？ | 不需要重做方向，需要重构关键细节 | Hero 方向可保留；需要重做 Product Showcase 中段、替换占位图、统一 CTA、清理 Footer、收敛圆角。 |

## 3. Visual Critique

### 为什么显得高级

- 首屏使用真实餐饮运营照片作为大背景，避免了泛科技蓝紫、3D 球体和抽象 AI 背景。
- 标题放在深色负空间上，阅读路径清楚，CTA 在首屏可见。
- 右侧 UI Overlay 提供了订单状态、配送状态和营运摘要，能把“餐饮场景”连接到“SaaS 产品”。
- `#528dff` 用在 CTA、Logo 与关键状态，品牌信号清楚，没有把整页染成单一蓝色。
- 顶部导航和语言切换 `繁中 / EN` 保持了真实官网结构。

### 为什么显得普通

- 中段存在灰色图片占位，这会立即暴露 AI 生成痕迹，破坏高级感。
- Product Showcase 更像图标功能卡片，尚未形成 `Order → Store/Menu → Delivery → Data` 的能力流。
- 部分卡片圆角偏大，接近通用模板卡片，不符合 T10 的 8px 以内规则。
- Footer 有 `All Rights Reserved` 英文版权句，不符合繁中单一 Locale 的生产规则。
- CTA 同时出现 `預約演示` 和 `預約產品演示`，转化语言不够统一。
- Hero 的 UI Overlay 还可以更具体，例如显示渠道来源、门店状态、异常提示、系统连接线，而不仅是简化摘要。

## 4. Benchmark Score

| 维度 | 分数 | 判断 |
| --- | ---: | --- |
| SaaS 感 | 7.4 | UI Overlay 与组件系统成立，但 Product Showcase 还偏卡片模板。 |
| 国际感 | 7.2 | 首屏克制可信，整体留白好；占位图和 Footer 英文残留拉低完成度。 |
| 产品感 | 6.8 | 有产品信号，但能力流和状态变化不够强。 |
| 转化能力 | 7.1 | CTA 可见，但文案不统一，首屏后的转化承接还可以更强。 |

综合评分：7.1 / 10  
状态：方向成立，需要重点精修。

## 5. Creative Direction

### Moodboard

| Moodboard 方向 | 借鉴能力 | Home 应用 |
| --- | --- | --- |
| Editorial Restaurant Operations | 真实业务动作、现场可信感 | Hero 使用门店接单、厨房出餐、配送交接的真实运营摄影或短视频 |
| Precision Blue SaaS UI | 克制蓝色、清晰组件、轻浮层 | 用 `#528dff` 做 CTA / 状态 / 连接线，不做大面积蓝底 |
| Capability Flow Storytelling | 业务流程而不是功能目录 | Product Showcase 改成订单进入、门店同步、配送更新、数据回流 |
| Trust Without Fake Proof | 无授权背书下仍可信 | 使用能力信任层、服务流程、集成类别，不伪造 Logo 和数据 |

### 风格建议

- Hero 保留当前“真实场景 + UI Overlay”方向，但让 UI 更像真实产品状态面板。
- 中段 Product Showcase 从静态卡片改为横向能力流或 scroll-triggered storyboard。
- 替换灰色占位图为授权餐饮运营摄影、脱敏产品 UI 或抽象化能力流截图。
- 统一所有主 CTA 为 `預約產品演示`。
- Footer 改为 `© 2026 Candao International。版權所有。` 或项目确认后的正式版权句。
- 所有主要卡片圆角收敛到 8px，减少 `rounded-xl` / `rounded-2xl` 的模板感。

## 6. 优化优先级

| 优先级 | 优化项 | 原因 |
| --- | --- | --- |
| P0 | 替换中段占位图 | 这是当前最明显的低完成度信号。 |
| P0 | 统一 CTA 与 Footer 语言 | 直接影响生产语言规则和转化一致性。 |
| P1 | 重构 Product Showcase 为能力流 | 决定 Home 是否有真正产品感。 |
| P1 | 强化 Hero UI Overlay 业务对象 | 让用户更快理解 Candao 连接订单、门店、配送和数据。 |
| P2 | 收敛卡片圆角、阴影、图标样式 | 提升国际 SaaS 的精致度。 |

## 7. 审查限制

- Figma MCP 本轮只返回空归档页，未能读取 `/TC Production` Frame 截图。
- 本报告以 Stitch 本地 PNG 与 HTML 文本扫描作为视觉证据。
- Motion 只能从静态截图中的连接线、步骤节点和 UI 状态推断，不能验证真实动效节奏。

