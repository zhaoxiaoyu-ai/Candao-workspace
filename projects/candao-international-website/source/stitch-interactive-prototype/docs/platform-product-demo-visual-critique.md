# Platform Product Demo Visual Critique

日期：2026-08-05  
任务：T11.5-B / B03  
审查对象：Platform / Desktop / TC v2、Order Management / Desktop / TC、Delivery Management / Desktop / TC v2  
审查 Agent：International SaaS Website Art Director Agent  
证据截图：

- `visual-director-audit-assets/02-platform-v2-stitch-desktop-tc.png`
- `visual-director-audit-assets/03-order-management-stitch-desktop-tc.png`
- `visual-director-audit-assets/04-delivery-v2-stitch-desktop-tc.png`

## 1. 审查结论

Platform v2 和 Product Demo 方向通过。相比 Home，Platform / Order / Delivery 的产品感更明确，已经能支撑“餐饮运营 SaaS 平台”的认知。

但目前仍是“可审核的 AI 生成网页”，不是最终设计稿。核心问题集中在：UI 细节还不够像真实可用产品、Motion 只是静态表达、部分圆角和卡片语言偏模板化、Platform Hero 仍偏普通 SaaS。

结论：不需要重新设计整体方向，但 Platform 与 Product Demo 需要做产品 UI 真实性精修。

## 2. Benchmark Score

| 维度 | 分数 | 判断 |
| --- | ---: | --- |
| SaaS 感 | 8.1 | 三页都有 UI 面板、Dashboard、队列、状态、连接线，SaaS 系统感成立。 |
| 国际感 | 7.8 | 版面克制、信息节奏清楚；局部圆角和模板卡片仍需收敛。 |
| 产品感 | 8.3 | Order / Delivery 的队列、地图、时间线、异常提示明显支撑产品价值。 |
| 转化能力 | 7.5 | CTA 可见，页面末端承接清楚；但 Product Demo 与 CTA 的因果连接还可以更强。 |

综合评分：7.9 / 10  
状态：方向通过，进入 UI 真实性和 Motion 精修。

## 3. Platform Visual Critique

### 为什么显得高级

- Platform v2 已有中心化 Capability Map，符合 T10 对 `Products / Platform` 的重点要求。
- 能力地图将订单、菜單、配送、自有點餐、數據等能力围绕平台节点组织，避免了纯产品目录。
- 页面包含 Platform UI Demo，总部视图、门店健康、异常提示和运营摘要让平台价值更具体。
- `#528dff` 作为连接线和关键状态色，平台连接感比 v1 明显更强。

### 为什么还显得普通

- Hero 区偏白、偏通用 SaaS，缺少餐饮运营情境的第一眼冲击。
- Capability Map 的节点和连线较“示意图”，还没有真实系统间数据流的厚度。
- Product Cards 仍偏功能卡片，缺少“为什么这些能力合在一起更强”的业务结果说明。
- Footer 英文版权句不符合生产语言规则。
- 部分卡片圆角偏大，影响企业级工具感。

## 4. Product Demo Visual Critique

### Order Management

通过项：

- 订单队列、状态分发、系统同步、总部回流关系清楚。
- 页面能表达“多渠道订单进入统一营运流程”，不是单纯展示后台表格。
- 深色产品展示区增强了 Demo 的视觉重点。

优化项：

- Demo UI 可以增加渠道来源、门店动作、异常状态的层级差异。
- 目前 Motion 主要靠线条和节点暗示，后续应做成 stepper 或 scroll-triggered 状态变化。
- UI 中的模拟数字必须继续保持脱敏，不写成真实官网事实。

### Delivery Management v2

通过项：

- Delivery Operations Dashboard 是目前最强的产品展示区域。
- 左侧出单佇列、中间路线图、右侧配送分配、异常提示和时间线形成完整工作台。
- 四步 Workflow 能清楚表达高峰、分配、追踪、异常回流。

优化项：

- 抽象路线图需要在开发前重绘成 Candao 产品风格，避免像泛地图素材。
- 异常处理的业务价值可以更强，例如显示“回到总部视图 / 门店协同 / 人工介入”的状态。
- 页脚英文版权句需清理。

## 5. UI 展示判断

当前 UI 展示的优点：

- 有业务对象：订单、门店、配送、异常、总部视图；
- 有状态：等待、配送中、异常、健康、负载；
- 有关系：渠道进入、平台连接、状态回流；
- 有页面级节奏：Hero → UI Demo → Workflow → Product Cards → CTA。

当前 UI 展示的不足：

- 界面仍是“半真实”，还缺少真实产品的信息密度与可操作性；
- 平台能力图还像概念图，缺少系统级输入输出；
- Product Cards 的视觉语言与 Demo 区之间关联偏弱；
- 组件圆角、阴影、图标尺寸需要统一为更克制的企业 SaaS token。

## 6. Motion 判断

从静态截图可见：

- Platform 有连接线和中心节点；
- Order 有流程线、状态节点和深色系统视图；
- Delivery 有四步流程、进度点和路线图。

这说明 Motion 方向成立，但目前只能算静态 storyboard。

后续 Motion 应这样做：

1. Platform：滚动到 Capability Map 时，渠道节点逐步连接到 Candao 平台，再回流到总部视图。
2. Order：四步切换时，订单从渠道进入统一队列，状态 chip 更新，异常摘要出现。
3. Delivery：高峰订单增加后，配送方式被分配，路线状态更新，异常卡片回到运营视图。
4. 所有 Motion 都必须有静态等价状态，并支持 reduced-motion。

不要这样做：

- 不做粒子线网；
- 不做复杂地图模拟；
- 不做 L4 产品仿真；
- 不做无意义浮动卡片。

## 7. 产品价值判断

当前最清楚的产品价值：

- Candao 不是单一订单系统，而是将订单、门店、配送、数据和总部视图连接起来；
- Order Management 能减少多渠道订单切换；
- Delivery Management 能让高峰配送压力和异常处理可见；
- Platform v2 能承接到更大的统一运营中枢叙事。

还需要强化的产品价值：

- Platform 应更明确显示“输入是什么、平台处理什么、输出给谁”；
- Product Demo 应在每一步下方显示一句业务结果，而不是只显示界面状态；
- CTA 前应总结“为什么看完 Demo 后应该预约产品演示”。

## 8. Creative Direction

### Moodboard

| Moodboard 方向 | 借鉴能力 | 应用页面 |
| --- | --- | --- |
| Unified Operations Command Center | 中心化运营视图、总部可见性 | Platform、Delivery |
| Dense But Calm SaaS UI | 信息密度高但层级清楚 | Order、Delivery、Platform UI Demo |
| Restaurant Service Pressure | 高峰、异常、门店协同 | Delivery、Order |
| Workflow Motion Storyboard | 状态变化解释产品价值 | Platform、Order、Delivery |
| Blue System Signal | `#528dff` 只用于关键连接和行动 | 全部 Product Demo |

### 风格建议

- Platform Hero 增加餐饮运营场景或更明确的 UI 场景，而不是纯白 SaaS 抽象首屏。
- Capability Map 加入输入 / 输出标签：渠道、平台处理、门店执行、总部可见。
- Order / Delivery Demo 保留当前结构，但重绘 UI 面板为统一 Design System。
- Workflow 每一步配一个小 UI fragment，且 fragment 之间有明确状态变化。
- CTA 前增加业务结果总结，但不使用未确认数字。

## 9. 审查限制

- Figma MCP 本轮未能读取 `/TC Production` Frame。
- 本报告以 Stitch 本地 PNG 与 HTML 文本扫描作为证据。
- 无法从静态 PNG 判断真实动效时长、缓动、hover、键盘焦点与移动端降级。

