# Task T11.5: Visual Prototype Generation

## Goal

基于 T07 Final Copy、T08 UX Specification、T09 Prototype Validation、T10 Website Visual Direction 和 T11 High Fidelity Visual Specification，生成可视化原型，让项目从 Markdown 设计规范进入可查看的视觉结果。

T11.5 不重新定义策略，不重写 Copy，不重新规划 UX，不重新设计视觉方向。T11.5 的重点是把已经确认的内容、体验和视觉规范转成可查看、可评审、可迭代的视觉原型。

## Output

《Website Visual Prototype Package》

## 输出语言

内部说明使用简体中文；页面名、组件名、设计关键词和 Figma / Web Prototype 命名可保留英文。

官网展示文案如需出现在画面中，默认使用繁體中文单一 Locale，不得在同一视觉稿中同时展示繁體中文和 English。

T07 的繁體中文 + English 双语 Copy 是内容库结构，不是视觉布局结构。T11.5 默认生产视觉稿必须使用 `/TC` 命名；English 版本如需生成，必须作为独立 `/EN` Frame。

## Required Inputs

必须读取：

1. `tasks/T07/output/final-website-copy-v1.0-2026-08-03.md`
2. `tasks/T08/output/website-ux-specification-2026-08-03.md`
3. `tasks/T09/output/website-prototype-validation-2026-08-03.md`
4. `tasks/T09/output/t09-v1.1-prototype-validation-supplement-note-2026-08-03.md`
5. `tasks/T10/output/website-visual-direction-2026-08-03.md`
6. `tasks/T10/output/t10-v1.1-visual-direction-supplement-note-2026-08-03.md`
7. `tasks/T11/output/website-high-fidelity-visual-design-2026-08-03.md`
8. `tasks/T11/output/t11-v1.1-visual-prototype-generation-note-2026-08-03.md`

## Preferred Execution Method

优先方式：

```text
Figma Visual Prototype
```

如果 Figma 工具或目标文件尚未准备好，可退而输出：

- Image Generation Visual Exploration；
- Web Prototype Plan；
- 或等待用户指定 Figma / Web / Image 生成方式。

## Required Prototype Scope

### 1. Figma视觉稿

P0 Desktop 1440：

- Home；
- Products / Platform；
- Order Management；
- Delivery Management；
- Contact / Book a Demo。

P0 Mobile 390：

- Home；
- Products / Platform；
- Order Management；
- Contact / Book a Demo。

### 2. Prototype Flow

必须包含：

```text
Home
→ Products / Platform
→ Order Management / Delivery Management
→ Contact / Book a Demo
```

同时保留：

```text
Home
→ Integrations Overview
→ Request Integration
```

### 3. Motion Storyboards

必须包含：

- Home Hero UI Overlay；
- Home Product Showcase Capability Flow；
- Products / Platform Capability Map；
- Order Management 4-step UI Demo；
- Delivery Management 4-step UI Demo；
- Contact Form Intent Selection。

### 4. Design System

必须包含：

- Design Tokens；
- Components；
- Component States；
- Responsive Rules；
- Figma Handoff Notes。

## Visual Review

T11.5 必须输出 Visual Review，检查：

- 是否国际 SaaS；
- 是否真实餐饮运营；
- 是否像说明书；
- UI 是否解释产品价值；
- Motion 是否服务理解；
- CTA 是否突出；
- 是否遵守语言规范；
- 是否使用未确认客户、Logo、数据、认证、集成状态或 SLA。

## Acceptance

- 用户可以看到页面效果，或至少看到明确的视觉原型交付方式。
- Home、Products / Platform、Order Management、Delivery Management、Contact 的可视化结果足以进入评审。
- 原型能支撑 T12 Design Review。
- 未确认事实继续保持待确认或占位状态。

## Additional Branch: T11.5-A Design Execution Skill + Figma High Fidelity Design

2026-08-05 用户追加执行 T11.5-A，用于补齐 Design Execution Skill、国际 SaaS 视觉基准、视觉方向探索，以及真实可编辑的 Figma 高保真页面。

### A01 Design Execution Skill Assessment

输出：

```text
Design Execution Skill Assessment.md
```

要求：

- 检查当前 Design / Figma / UI / Web Design / Image Generation / Stitch 相关能力；
- 判断 Figma 页面生成、Design Token、Component、UI 视觉优化、Motion Storyboard 的缺口；
- 给出后续执行方案。

### A02 Website High Fidelity Design Execution Skill

输出：

```text
Website Design Skill Setup Report.md
website-high-fidelity-design-execution-workflow-agent-spec-2026-08-05.json
```

要求：

- 如需要使用 `agent-pd:agent-pd`，优先使用；
- 建立 Candao 官网专用高保真设计执行 Skill；
- 支持 Figma Design Execution、Design System Builder、UI Prototype Builder、Motion Storyboard Builder。

### A03 International SaaS Website Visual Benchmark

输出：

```text
International SaaS Website Visual Benchmark.md
```

参考：

- Aigens；
- Deliverect；
- TabSquare。

重点：

- Hero；
- 摄影；
- UI Overlay；
- Typography；
- Product Showcase；
- Layout；
- Motion。

### A04 Website Visual Direction Exploration

输出：

```text
Website Visual Direction Exploration.md
```

方向：

- Direction A: Enterprise SaaS Direction；
- Direction B: Restaurant Experience Direction；
- Direction C: Operational Intelligence Direction。

### A05 Home High Fidelity Figma Design

输出：

```text
Home Design Review.md
```

Figma Frame：

```text
Home / Desktop 1440 / TC
Home / Mobile 390 / TC
```

必须包含：

- Hero；
- 大型商业摄影 / 视频方向；
- UI Overlay；
- Trust Module；
- Problem Switcher；
- Product Showcase；
- Final CTA。

### A06 Platform High Fidelity Design

输出：

```text
Platform High Fidelity Design.md
Platform UI Motion Storyboard.md
```

Figma Frame：

```text
Platform / Desktop 1440 / TC
Platform UI Motion Storyboard / TC
```

必须包含：

- Capability Map；
- Ordering Channels → Candao Platform → Store / Delivery / Data / HQ Visibility；
- UI Demo；
- Product Cards。

### A07 Product Motion High Fidelity Design

输出：

```text
Product Motion Storyboard.md
```

必须包含：

- Order Management 4-step UI Demo；
- Delivery Management 4-step UI Demo。

### A08 Design System v1.0

输出：

```text
Candao Website Design System v1.0.md
```

Figma Frame：

```text
Candao Website Design System v1.0
```

必须包含：

- Tokens；
- Color；
- Typography；
- Spacing；
- Radius；
- Components；
- States。

### A09 High Fidelity Design Review

输出：

```text
High Fidelity Design Review Report.md
t11.5-a-design-execution-skill-and-figma-execution-note-2026-08-05.md
```

审核：

- 品牌是否国际化、SaaS、餐饮行业；
- 视觉是否有高潮、摄影、UI 层、产品感；
- 产品是否有 Workflow 和 Business Value；
- 是否遵守生产语言和未确认事实边界。

## Additional Branch: T11.5-B Visual Director Agent

2026-08-05 用户追加执行 T11.5-B。

### B01 Visual Director Agent

使用 `agent-pd:agent-pd` 生成：

```text
International SaaS Website Art Director Agent
```

Agent 定位：

- 不生成页面；
- 不重写 Copy；
- 不重新定义策略；
- 负责视觉判断、审查、评分和优化方向。

输入：

- 竞品网站 / 参考方向；
- T10 Visual Direction；
- Figma 截图；
- 页面设计；
- Stitch 生成截图。

输出：

- Visual Critique；
- Creative Direction；
- Benchmark Score。

### B02 Home Visual Critique

输出：

```text
Home Visual Critique.md
```

必须回答：

- 是否 5 秒理解；
- 是否像国际 SaaS；
- 是否有产品感；
- 是否需要重新设计。

### B03 Platform / Product Demo Visual Critique

输出：

```text
Platform Product Demo Visual Critique.md
```

重点审核：

- UI 展示；
- Motion；
- 产品价值。

### B04 Visual Design Rules

输出：

```text
Candao Visual Design Rules.md
```

沉淀：

- 好的设计规则；
- 常见错误；
- 优化方向。

## Additional Branch: T11.5-D Stitch Interactive Web Prototype

2026-08-05 用户追加要求：将 Stitch 实际生成产物整合成一个可交互网页，解决 `.stitch/designs/*.png` 预览图过小、难以逐页评审的问题。

### D01 Interactive Prototype Shell

生成：

```text
source/stitch-interactive-prototype/index.html
```

要求：

- 保留 Stitch 原始 HTML，不直接改写真实生成页；
- 统一整合 Home、Platform v2、Order Management、Delivery v2；
- 支持页面切换；
- 支持 1440、390、自适应视口切换；
- 支持打开原始 HTML 和 1440 宽完整页面截图；
- 在同一界面沉淀 Visual Director 审查摘要、Benchmark Score、优化优先级和 Screen ID；
- 可通过本地静态服务查看。

### D02 Validation

输出：

```text
stitch-interactive-prototype-2026-08-05.md
```

必须记录：

- 原型入口；
- 已整合文件；
- 验收方式；
- 已知边界。
