# T26: Design Handoff Package and Design-ready Wireframe

日期：2026-08-16  
状态：done

## 目标

将 `tasks/T17/output/low-fidelity-wireframe-prototype/index.html` 从“内部内容核对型低保真”转换为可供设计、Stitch、Remotion 和前端继续执行的中间层。

本任务不是覆盖 T17 低保真，也不是直接进入最终高保真；它负责补齐：

- 内容分层；
- 访客可见文案；
- 设计系统；
- 页面模块 manifest；
- 素材与缺口 manifest；
- Motion storyboard；
- Stitch Prompt Pack；
- 设计执行版低保真；
- QA 报告和后续人工确认项。

## 输入

- `tasks/T17/output/low-fidelity-wireframe-prototype/index.html`
- `tasks/T25/output/low-fidelity-narrative-restructure-report-2026-08-16.md`
- `domain-copy/business-context.md`
- `domain-copy/glossary.yaml`
- `domain-copy/copy-rules.md`
- `human-review/current-decision-queue.md`
- 用户 2026-08-16 附件中的设计输入包执行指令

## 输出

- `tasks/T17/output/design-handoff/`
- `tasks/T17/output/design-ready-wireframe/`
- `tasks/T26/output/design-handoff-package-report-2026-08-16.md`
- `tasks/T26/output/design-ready-copy-qa-input-2026-08-16.json`
- `tasks/T26/output/design-ready-copy-qa-result-2026-08-16.json`
- `tasks/T26/output/design-ready-browser-check-2026-08-16.json`
- `tasks/T26/output/design-ready-interaction-copy-qa-input-2026-08-16.json`
- `tasks/T26/output/design-ready-interaction-copy-qa-result-2026-08-16.json`
- `tasks/T26/output/design-ready-interaction-browser-check-2026-08-16.json`
- `tasks/T26/output/module-manifest-copy-qa-input-2026-08-17.json`
- `tasks/T26/output/module-manifest-copy-qa-result-2026-08-17.json`
- `tasks/T26/output/design-input-layer-restructure-patch-2026-08-17.md`
- `tasks/T26/output/design-input-layer-final-verification-2026-08-17.json`
- `tasks/T26/output/objective-completion-audit-2026-08-17.md`
- `tasks/T26/output/requirement-completion-audit-2026-08-16.md`
- `tasks/T26/output/external-generation-readiness-summary-2026-08-16.md`

## 输出语言

内部设计交付、QA 和任务记录使用简体中文。  
设计执行版低保真可见页面内容使用繁體中文单一 Locale。

## 完成标准

- 不覆盖 `tasks/T17/output/low-fidelity-wireframe-prototype/`。
- 建立内容层、证据层、设计系统、模块 manifest、素材 manifest、Motion storyboard 和 Stitch Prompt Pack。
- 模块 manifest 必须拆到独立模块，不得保留 `S01-S06`、`D01-D06` 这类合并项。
- 第一轮可视验证重点覆盖 Home、Platform、Demo Mobile。
- 访客页面不显示 PPT 页码、OLD 编号、内部警告、待确认说明或设计备注。
- `domain-copy` QA 通过，或明确记录阻塞原因。
- 不自行批准 H3-01 低保真业务验收，也不新增 `approved_and_locked`。
