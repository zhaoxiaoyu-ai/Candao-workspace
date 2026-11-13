# Rules

- Follow `/Users/victorwong/Documents/Codex/Candao-workspace/AGENTS.md`.
- For website copy, UI text, prototypes, dashboards, backend pages, sample data, and approved content, also follow `projects/candao-international-website/AGENTS.md` and invoke `$domain-copy`.
- Keep this project independent from non-餐道 workspaces.
- Read only the minimum source files needed for the current task.
- Write durable task state back before ending.
- All task agents must read this file before generating any deliverable.

## 项目前置条件

- 本项目所有任务必须先遵守“项目输出语言规范”，再执行具体任务目标。
- 每个 `tasks/<task-id>/task.md` 必须明确写出输出产物和输出语言。
- 如果任务产物属于官网实际展示内容，必须输出繁体中文 + 英文，不得只输出简体中文。
- 如果任务产物属于内部策略、规划、执行、审核或 Agent 指令，默认使用简体中文；涉及官网字段、页面名称、组件名、设计关键词时可保留英文。
- 多 Agent 并行或串行执行时，必须把本规则作为 prompt 前置条件传入，避免不同 Agent 自行决定语言。

## Evidence-First Content Gate

本节是餐道国际官网的硬性工作门槛，用于防止 AI 产物滑向通用 SaaS 官网表达。

- 旧餐道国际官网、Candao Introduction PPT、菜单目录、参考网站和公司资料必须被明确分工：旧官网与 PPT 负责业务专属性和内容深度，菜单目录负责 IA 初稿，参考网站只负责国际化表达方式和前端展示方法。
- 任何新版页面、模块、标题、主文案、展示组件或前端动效进入产物前，必须先写清：页面位置、叙事任务、餐道业务事实、对应产品 / 功能、用户角色、业务场景、证据来源、待确认项、泛化风险。
- 没有证据来源的模块不得进入页面主叙事；只能放入“待确认 / 候选内容池”并向用户请求资料或确认。
- 如果用户提到某份资料但当前会话尚未读取，执行者必须主动请求、读取或声明阻塞；不得用“提升效率、统一平台、数据驱动、全渠道运营”等通用表述替代资料缺口。
- 每轮 Figma、Stitch、AI Web Generation 或 React / Next 前端实现前，必须先通过“反泛化 QA”：检查内容是否可替换给任意 SaaS 公司、是否重复其他页面、是否缺少餐道产品 / 场景 / 业务流程支撑。
- Home、Solutions、Platform、Integrations、Customers、Resources、About、Demo 必须承担不同叙事任务；同一业务流程不得在多个页面以相似方式重复讲述。

## Human Decision Gate

本项目采用 `3+1` 人工关卡，详见 `human-review/human-confirmation-gates.md`：

- `business_facts: approved` 只能由人工确认，Agent 只能整理证据、冲突和假设。
- `requirement_baseline: approved` 只能由人工确认，Agent 不得自行决定本期范围、核心流程或页面优先级。
- `final_business_acceptance: approved` 只能由人工确认，Agent 只能输出任务式验收清单和 QA 结果。
- `permanent_rule_update: approved` 只能由人工确认，Agent 不得因一次修改自动写入 Skill、行业词典或全局规则。

遇到权威资料冲突、缺关键指标口径、改变核心流程、扩大项目范围、角色权限 / 数据可见范围、合规 / 隐私 / 安全、删除已确认内容或升级永久规则时，必须写入 `human-review/current-decision-queue.md`。

## Brand Naming Gate

- 中文、繁體中文、项目叙述和官网默认显示品牌名统一使用「餐道」。
- `Candao` 仅在英文 Locale、英文法定名、文件名、URL、代码、路径或精确引用来源时保留。
- Home、Customers、About、Demo 等繁體中文页面不得把 `Candao` 当作默认品牌显示。
- 文件名、Frame 名、代码目录、URL 和英文内容库可按技术或英文语境保留 `Candao`。

## 项目输出语言规范

本项目所有输出分为三个层级：

### 1. 内部策略及执行文档

用途：

项目分析、设计规划、Agent 执行说明。

语言：

简体中文。

包括：

- 官网策略分析；
- 用户分析；
- 信息架构；
- UX 规划；
- 视觉设计说明；
- Agent 规则。

### 2. 官网实际展示内容

用途：

最终用于国际官网页面。

语言：

繁体中文 + 英文。

规则：

每一个官网页面文案需要同时输出：

繁体中文版本：

用于香港及亚洲市场审核。

英文版本：

用于国际市场英文 Locale 和海外访问版本。

注意：

Copy 文档中的繁體中文 + 英文是内容库结构，不代表视觉稿或网页原型需要同时展示两种语言。

格式：

```markdown
繁體中文：

標題：

說明：

CTA：

English:

Headline:

Description:

CTA:
```

### 3. 页面设计及开发参考内容

用途：

设计师、开发人员执行。

语言：

简体中文为主。

涉及官网字段、页面标题、组件名称时保留英文。

例如：

```markdown
模块：
产品展示 Product Showcase

交互：
Scroll Animation
```

## Website Production Localization Guideline

本节用于约束官网进入 Figma、Prototype、Stitch、AI Web Generation 和网页截图阶段时的生产语言规则。

## Current Web Desktop Gate

2026-08-20 用户已确认：当前连基本 Web 端还没有确定，其他响应式不需要先做。

- 当前阶段只处理 Web Desktop 1440 的页面故事、内容深度、产品展示、可信证据、CTA 和视觉基线。
- 在 Web Desktop 基本稿通过人工确认前，不得推进 Mobile、390 视口、Responsive Rules、Motion Storyboards 或响应式前端验收。
- Figma T11.5 中 `04`、`05`、`06`、`07`、`08`、`09`、`10` 已被标记为不保留；旧 `08 Desktop Pages / TC Production`、`09 Mobile Pages / TC Production` 和 `10 TC Production Review` 不得作为 T12 / T13 / Stitch / React 的当前输入。
- 若后续任务请求响应式、移动端或动效，必须先检查是否已有 Web Desktop 业务确认记录；没有则先回到 Web Desktop 基本稿确认。

### 1. Primary Locale

```text
繁體中文
```

用途：

- 香港市场；
- 亚洲市场；
- 第一版官网审核；
- 客户确认版本；
- 默认视觉生产版本。

### 2. Secondary Locale

```text
English
```

用途：

- 国际市场英文版本；
- 海外访问版本；
- 后续独立 Locale 扩展。

### 3. Visual Design / Prototype 默认语言

所有高保真视觉稿、Figma 页面、Prototype、Stitch 生成网页、AI 生成网页截图和 Web Prototype，默认必须模拟：

```text
Traditional Chinese Website Version
```

### 4. 禁止双语混排视觉稿

视觉稿和网页原型中禁止出现：

```text
繁體中文標題
English Subtitle
繁體中文說明
English CTA
```

同一个页面画面中只允许显示一个 Locale。

### 5. Language Switch

Header 必须预留语言切换：

```text
繁中 | EN
```

或：

```text
繁體中文 ▼
English
```

语言切换控件可以同时显示两个选项，但当前页面正文、导航、CTA 和 UI Label 只能显示当前 Locale。

### 6. Figma / Prototype 命名

默认繁體中文版本：

```text
Home / Desktop 1440 / TC
Platform / Desktop 1440 / TC
Order Management / Desktop 1440 / TC
Delivery Management / Desktop 1440 / TC
Contact / Desktop 1440 / TC
```

English 版本必须独立命名：

```text
Home / Desktop 1440 / EN
```

### 7. AI Web Generation Prompt

所有 Stitch 或 AI 网页生成 Prompt 必须包含：

```text
Generate a Traditional Chinese first international SaaS website.

Language:
Traditional Chinese.

Do not display bilingual content.

Include language switch:
繁中 / EN
```

## Figma + Aceternity Reference Workflow

本节用于约束后续餐道国际官网在 Figma、Aceternity、shadcn、React / Next.js + Tailwind 之间的协作方式。

### 1. 来源分工

- Figma 是内容和静态视觉的准确来源，包括最终文案、图片、截图、模块层级、视觉权重、品牌细节和页面真实排版方向。
- Aceternity UI / shadcn 组件截图或组件名称是展示方法和交互动效的参考来源，包括模块布局方式、动效表达、滚动行为、Hover / Reveal / Spotlight / Border / Background 等交互语言。
- React / Next.js 原型用于把 Figma 内容与 Aceternity 展示方法结合成可运行、可测试、可响应式验证的工程实现。

### 2. 用户只贴图时的默认理解

当用户直接贴 Figma 设计图、Aceternity 组件截图，且没有额外文字描述时，默认按以下规则理解：

- 官网文案、图片和内容顺序以 Figma 为准。
- 模块展示方法、交互动效和布局模式以 Aceternity 组件名称或截图为准。
- 不复制 Aceternity 示例中的品牌名、无关英文文案、Logo 或业务内容。
- 必须把 Aceternity 示例适配到餐道品牌、繁體中文 `/TC` 生产语言规则和当前官网信息架构。
- 如果截图中可见组件名称，例如 `Hero Section With Multi Color Background`，应优先按该名称检索或还原对应展示方法。

### 3. Figma 标记方式

推荐在 Figma 中把模块内容图与 Aceternity 参考图并排放置：

```text
左侧：餐道最终内容设计 / 静态视觉
右侧：Aceternity 展示方法截图 / 组件名称
```

可以不写长说明；如果有标记，优先使用简短格式：

```text
模块：Hero
内容：按左侧 Figma
展示：按右侧 Aceternity / Hero Section With Multi Color Background
交互：按 Aceternity 组件动效近似实现
```

### 4. 需要澄清的情况

仅在以下情况需要追问用户：

- Figma 内容与 Aceternity 示例的模块结构明显冲突；
- 多个 Aceternity 截图对应同一个模块，但没有优先级；
- 动画、滚动状态、展开状态或交互结果无法从截图判断；
- 参考图要求会破坏官网生产语言规则、未确认事实边界或品牌视觉规则。

## Task 输出语言总表

| Task | 产物 | 语言 |
| --- | --- | --- |
| Task01 | 资料整理 | 简体中文 |
| Task02 | 策略 Agent | 简体中文 |
| Task03 | 官网战略 | 简体中文，关键定位附英文 |
| Task04 | 架构 Agent | 简体中文 |
| Task05 | Sitemap | 简体中文 + 英文页面名 |
| Task06 | 内容 Agent | 繁体中文 + 英文 |
| Task07 | 官网 Copy | 繁体中文 + 英文 |
| Task08 | UX Agent | 简体中文 |
| Task09 | 体验规划 | 简体中文 |
| Task10 | 视觉 Agent | 简体中文 |
| Task11 | 视觉方向 | 简体中文 + 英文设计关键词 |
| Task11.5 | 视觉原型生成 | 简体中文 + 英文设计关键词 |
| Task12 | 审核 Agent | 简体中文 |
| Task13 | 最终方案 | 简体中文 + 官网内容附录 |
