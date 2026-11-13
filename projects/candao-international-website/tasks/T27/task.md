# T27: Stitch-ready External Low-fidelity Package

日期：2026-08-19  
状态：done

## 目标

整合目前最新的 8 个页面低保真设计，生成一套可以对外提供给 Stitch 的外部输入版本。

该版本不是内部内容核对稿，不展示来源编号、PPT 页码、旧官网编号、待确认提示、missing 标记、QA 说明或 Agent 执行痕迹。

## 输入

- `tasks/T17/output/design-ready-wireframe/`
- `tasks/T17/output/design-handoff/`
- `tasks/T26/output/design-input-layer-final-verification-2026-08-17.json`
- `tasks/T26/output/objective-completion-audit-2026-08-17.md`
- `domain-copy/business-context.md`
- `domain-copy/glossary.yaml`
- `domain-copy/copy-rules.md`
- `domain-copy/examples.md`
- `domain-copy/copy-qa-cases.md`
- `domain-copy/approved-copy-locks.yaml`
- `human-review/current-decision-queue.md`

## 输出

- `tasks/T27/output/stitch-ready-low-fidelity/`
- `tasks/T27/output/stitch-ready-low-fidelity/stitch-ready-page-map.json`
- `tasks/T27/output/stitch-ready-low-fidelity/stitch-ready-prompt-pack.md`
- `tasks/T27/output/stitch-ready-low-fidelity/README.md`
- `tasks/T27/output/qa/`
- `tasks/T27/output/stitch-ready-low-fidelity-package-report-2026-08-19.md`

## 输出语言

可见官网页面内容使用繁體中文单一 Locale。  
任务说明、QA 和交接记录使用简体中文。

## 完成标准

- 覆盖：首页、解決方案、平台、整合能力、客戶案例、資源、關於餐道、預約產品演示。
- 每个页面可以作为 Stitch 单独 screen 的低保真输入。
- 页面可见内容不出现内部来源编号、待确认说明、missing、placeholder、QA 注释或 Agent 执行痕迹。
- 中文 / 繁體中文品牌显示使用「餐道」。
- `iDMS`、`SaaS`、`AMS / Connector` 等大小写敏感术语不被改写。
- 运行 domain-copy QA 和静态检查。
- 不自行批准 H3-01 低保真业务验收，也不新增 `approved_and_locked`。
