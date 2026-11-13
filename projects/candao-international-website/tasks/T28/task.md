# T28: Stitch-ready Element Placement Layer

日期：2026-08-19  
状态：done

## 目标

在 T27 对外 Stitch-ready 低保真包上补齐“每个页面、每个模块应放置什么元素”的说明层，避免 Stitch 只依据文案生成通用 SaaS 页面。

本任务不重新生成高保真，不调用 Stitch，不批准 H3-01 / H3-02。

## 输入

- `tasks/T27/output/stitch-ready-low-fidelity/`
- `tasks/T27/output/stitch-ready-low-fidelity/stitch-ready-page-map.json`
- `tasks/T27/output/stitch-ready-low-fidelity/stitch-ready-prompt-pack.md`
- `tasks/T17/output/design-handoff/module-manifest.yaml`
- `tasks/T17/output/design-handoff/asset-manifest.yaml`
- `tasks/T17/output/design-handoff/missing-assets.md`
- `domain-copy/business-context.md`
- `domain-copy/glossary.yaml`
- `domain-copy/copy-rules.md`
- `domain-copy/examples.md`
- `domain-copy/copy-qa-cases.md`
- `domain-copy/approved-copy-locks.yaml`
- `human-review/current-decision-queue.md`

## 输出

- `tasks/T27/output/stitch-ready-low-fidelity/element-placement-guide.md`
- `tasks/T27/output/stitch-ready-low-fidelity/element-placement-map.json`
- 更新 `tasks/T27/output/stitch-ready-low-fidelity/stitch-ready-prompt-pack.md`
- 更新 `tasks/T27/output/stitch-ready-low-fidelity/README.md`
- `tasks/T28/output/qa/`
- `tasks/T28/output/element-placement-layer-report-2026-08-19.md`

## 输出语言

- 元素说明、QA、报告：简体中文。
- 官网可见文案示例：保持繁體中文。
- Prompt 中保留必要 English 指令。

## 完成标准

- 覆盖 8 个页面和页面总览。
- 每个页面明确主要模块、推荐元素、元素用途、素材状态、可抽象表达方式和禁止替代。
- 明确哪些元素必须使用真实素材，哪些可用抽象线框 / 信息图表达。
- 更新 Stitch Prompt Pack，使每页生成时可读取对应元素要求。
- 执行 domain-copy QA 与 JSON 结构校验。
- 写回 `TASKS.md`、`STATE.md`、`HANDOFF.md`。
