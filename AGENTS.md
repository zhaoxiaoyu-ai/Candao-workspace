# 餐道 Workspace Operating System

This workspace manages 餐道-related project memory and source repositories only. It is independent from `E:\Projects\ai-workspace`; do not read from or write to `ai-workspace` unless a user explicitly asks for a comparison.

## Core Principle

Treat this workspace as the single entry point for 餐道 company projects. Read only the minimum context needed for the current task, then write back durable state before finishing.

## Evidence-First And Deep Inquiry Rules

These rules are global for all 餐道 strategy, content, product, design, website, prototype, and frontend tasks.

- 用户提到的关键资料（例如旧官网、PPT、菜单目录、参考网站、公司资料、产品文档、截图、会议纪要）必须主动读取、请求或列为阻塞项；不得默默跳过后用通用行业知识补齐。
- 在生成策略、官网内容、页面结构、设计稿、Stitch / Figma prompt 或前端原型前，必须先建立证据清单：已读取资料、无法访问资料、待用户补充资料、每个核心结论对应的来源。
- 所有关键页面模块、产品能力、业务痛点、客户证明、数字、Logo、认证、SLA、集成状态和公司事实，必须能追溯到已读取资料；无法追溯的内容只能进入“待确认 / 候选”池，不能写成正式结论或官网事实。
- 当任务涉及业务定位、产品深度、官网目录、用户路径、产品痛点、行业场景或客户转化时，必须先做深度追问或列出缺口；不能为了让产物完整而回避资料请求。
- 对任何看起来“规范、顺滑、国际化”但可替换到任意 SaaS / 行业公司的表达，必须标记为泛化风险，并退回到业务事实、产品流程、旧官网或 PPT 证据层重写。
- 旧官网和产品 PPT 是餐道业务专属性的锚点；参考网站只用于借鉴国际化表达、页面节奏、交互和展示方法，不能替代餐道自身业务叙事。
- 内容证据和页面角色未通过前，不得进入高保真视觉、AI Web Generation、Figma / Stitch 页面生成或生产前端实现。

## Human Decision Gates

These rules are global principles. Each project must write the concrete decision content into its own project rules and decision queue.

- `business_facts: approved` can only be confirmed by a human. Agent may organize evidence, conflicts, and assumptions.
- `requirement_baseline: approved` can only be confirmed by a human. Agent must not decide current scope, core flow, or page priority by itself.
- `final_business_acceptance: approved` can only be confirmed by a human. Agent may provide task-based acceptance checklists and QA results.
- `permanent_rule_update: approved` can only be confirmed by a human. Agent must not promote one user edit into a Skill, enterprise glossary, or global rule without approval.

## Brand Naming Rule

- 中文、繁體中文、项目叙述和官网默认显示品牌名统一使用「餐道」。
- Keep `Candao` only when technically or linguistically required, such as file names, paths, URLs, code identifiers, official English legal names, English-locale artifacts, or exact source quotes.

## Global Hard Rules

- 输出语言是硬性要求：后续所有面向用户的回答、交付物、任务产物、摘要、交接、分析文档和生成提示词，默认必须使用中文。
- 只有在技术上必须使用英文时才保留英文，例如代码、schema、API 契约、字段名、第三方产品名、命令、日志、URL、测试 ID、文件名或精确引用原文。
- 如果来源材料是繁体中文，对应输出优先使用繁体中文；其他情况默认使用简体中文。
- 普通解释性文字如果可以自然地用中文表达，不得无必要地保留英文。

## Workspace Layout

```text
.
├── AGENTS.md
├── README.md
├── Candao-workspace.code-workspace
├── projects/
│   ├── _template/
│   ├── candao-international-website/
│   ├── coms/
│   ├── design-agent/
│   ├── xd-to-figma-converter/
│   └── workspace-setup/
├── skills/
├── schemas/
├── prompts/
└── archive/
```

## Managed Project Roots

The source code remains in its original repositories under `E:\Projects` unless a task explicitly asks to migrate files.

| Workspace project | Source root |
| --- | --- |
| `projects/candao-international-website/` | `E:\Projects\Candao-workspace\projects\candao-international-website\source` |
| `projects/coms/` | `E:\Projects\Candao-workspace\projects\coms\source` |
| `projects/design-agent/` | `E:\Projects\Candao-workspace\projects\design-agent\source` |
| `projects/tappo-phone/` (TAPPO product group; legacy folder name) | `E:\Projects\Candao-workspace\projects\tappo-phone\source` |
| `projects/xd-to-figma-converter/` | `E:\Projects\Candao-workspace\projects\xd-to-figma-converter\source` |

## Required Read Order

For any 餐道 project task, read context in this order:

1. `/AGENTS.md`
2. `projects/<project>/PROJECT.md`
3. `projects/<project>/RULES.md`
4. `projects/<project>/STATE.md`
5. `projects/<project>/HANDOFF.md`
6. `projects/<project>/tasks/<task-id>/task.md`

Load skills only when the current task explicitly needs them.

## Write-Back Rules

Before ending a task, update:

1. `projects/<project>/TASKS.md`
2. `projects/<project>/STATE.md`
3. `projects/<project>/HANDOFF.md`
4. `projects/<project>/tasks/<task-id>/output/`

If no meaningful output artifact was created, write a short note in the task output folder.

## Boundaries

- This workspace manages only 餐道 company projects.
- Do not couple files, tasks, prompts, skills, or state with `ai-workspace`.
- Source repositories are stored under each managed project's `source/` folder.
- Do not scan all of `E:\Projects`; start from the managed project root listed above.
- Do not read `archive/` unless explicitly asked.

## Status Values

Use these task statuses:

- `todo`
- `in_progress`
- `blocked`
- `done`
- `archived`

## Completion Checklist

Before reporting completion:

- Confirm the requested work is done.
- Confirm state files were updated.
- Note any blocker or test that could not be run.
- Leave `HANDOFF.md` clear enough for a new AI session to continue.
