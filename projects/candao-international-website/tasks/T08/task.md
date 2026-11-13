# Task T08: UX Agent

## Goal

运行 UX Agent，为国际官网核心页面制定体验规格。

T08 不是重新分析官网定位，也不是重新生成页面 Copy，而是将 T03 战略、T04 IA、T05 Sitemap 和 T07 Final Copy 转化为可供 T09 体验规划、T10 视觉设计和后续开发执行的页面体验设计规范。

## Output

《Website UX Specification》

## 输出语言

简体中文。

页面名称、组件名称、交互名称和设计关键词可保留英文，例如 `Hero`、`Product UI Demo`、`Scroll-triggered animation`、`Sticky CTA`。

## 前置输入

必须读取：

1. `tasks/T03/output/candao-international-website-strategy-v1.0-2026-08-02.md`
2. `tasks/T04/output/website-information-architecture-2026-08-02.md`
3. `tasks/T05/output/website-sitemap-2026-08-02.md`
4. `tasks/T07/output/final-website-copy-v1.0-2026-08-03.md`
5. `tasks/T07/output/t07-v1.1-final-copy-supplement-note-2026-08-03.md`

优先依据：

- T07 的页面结构和 Section；
- T07 v1.1 的 Copy Status Management；
- T07 v1.1 的 Solutions vs Platform Content Boundary；
- T07 v1.1 的 Visual Priority Matrix；
- T07 v1.1 的 Asset Direction；
- T05 v1.1 的页面等级与第一阶段建设范围。

## 禁止事项

- 不重新判断官网定位。
- 不重新设计 Sitemap。
- 不新增主导航。
- 不重写官网 Copy。
- 不把 Pending Authorization、Pending Verification 或 Placeholder Only 内容当作已确认上线事实。
- 不把 P1 或 Phase 2 页面设计得比 P0 核心页面更重。

## Example Format

```markdown
页面：

Products / Platform

Page Goal：

帮助用户理解产品价值。

User Intent：

理解 Candao 如何支撑订单、菜单、配送、数据和系统连接。

Content Flow：

Hero
→ Capability Map
→ UI Demo
→ Business Outcome
→ CTA

Layout Structure：

左侧产品介绍，
右侧 UI 动态展示。

Components：

Hero、Capability Map、Product UI Demo、CTA Module

Interaction:

Scroll-triggered animation

Responsive Behavior：

移动端将能力地图改为纵向步骤卡片，UI Demo 降级为可滑动流程。
```

## Requirements

- 输出不是“页面建议”，而是“页面体验设计规范”。
- 每个核心页面必须包含：
  - Page Goal；
  - User Intent；
  - Content Flow；
  - Layout Structure；
  - Components；
  - Interaction；
  - Animation；
  - Responsive Behavior；
  - Visual Priority；
  - CTA Path。
- 必须重点规划：
  - Home；
  - Solutions Overview；
  - Restaurant Chains；
  - Products / Platform；
  - Order Management；
  - Delivery Management；
  - Integrations Overview；
  - Cases / Customers；
  - Company / About；
  - Contact / Book a Demo。
- 必须明确 `Solutions` 和 `Products / Platform` 的体验边界：
  - `Solutions` 是 Business outcome layer；
  - `Products / Platform` 是 Capability layer；
  - 产品能力页是 Workflow + UI demo layer。
- 必须把 T07 的 Product UI Demo 结构转化为 UX 组件和动效脚本。
- 必须说明首页 Hero 如何呈现、产品 UI 如何动起来、页面信息节奏如何组织、动效和视觉如何匹配 Copy。
- P1 页面只输出基础 UX 模板或引用规则，不做过重设计。
- Phase 2 页面只保留 UX 方向，不输出完整页面规格。

## Acceptance

- 规格可直接传递给 T09 体验规划与 T10 视觉设计 Agent。
- 输出语言保持简体中文，必要英文用于设计和开发字段。
- 不存在重新生成官网文案的内容。
- 不存在重新推翻 T03/T04/T05/T07 已冻结决策的内容。
- 每个核心页面都有清晰的用户目标、内容流、布局结构、组件、交互、响应式规则和 CTA 路径。
