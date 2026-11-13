# T46 Finance Center 中文生产表达规则补丁

日期：2026-08-25  
状态：done

## 1. 修正原因

用户追问 `Finance Center` 的来源后，进一步确认：后续需要把对应英文调整成中文表达。

本轮处理为项目内可复用生产规则：`Finance Center` 仍可作为 PPT 原文和证据名称保留，但进入中文 / 繁體中文官网、Figma、Stitch、React、Web Prototype 或截图式界面时，不再作为可见展示词。

## 2. 生产表达规则

- 简体内部说明：`财务对账`
- 繁體中文生产稿：`財務對賬`
- 具体能力说明：`平台订单与 OMS 订单对账`、`金额差异、状态差异和漏单识别`
- 英文原词保留范围：英文 Locale、精确来源引用、文件名、URL、代码标识、PPT / 证据矩阵原文

常见替换：

- `Finance Center` -> `財務對賬`
- `CDBI / Finance Center` -> `CDBI / 財務對賬`
- `CDBI / Finance` -> `CDBI / 財務對賬`
- `OMS / Finance / CDBI` -> `OMS / 財務對賬 / CDBI`

## 3. 已更新文件

- `domain-copy/business-context.md`
- `domain-copy/glossary.yaml`
- `domain-copy/copy-rules.md`
- `domain-copy/examples.md`
- `domain-copy/copy-qa-cases.md`
- `domain-copy/copy-feedback-log.md`
- `domain-copy/scripts/domain_copy_qa.py`
- `tasks/T17/output/design-handoff/`
- `tasks/T17/output/design-ready-wireframe/`
- `tasks/T17/output/low-fidelity-wireframe-prototype/`
- `tasks/T27/output/stitch-ready-low-fidelity/`
- `tasks/T44/output/html/`
- `tasks/T44/output/stitch-input/`
- `tasks/T44/output/scripts/`
- `tasks/T45/output/local-html/`
- `tasks/T45/output/stitch-input/`
- `tasks/T45/output/scripts/`

## 4. 未改写范围

历史证据文档、PPT 抽取记录、旧任务报告和旧 QA 结果中保留 `Finance Center` 原文，用于证明来源链路，不作为后续页面生产的默认展示词。

## 5. QA 结果

正向 QA：

```text
finance-center-localized-term-positive-result-2026-08-25.json
3 / 3 passed
```

失败回归：

```text
finance-center-localized-term-failure-result-2026-08-25.json
2 / 2 failed as expected
```

主回归：

```text
domain-copy-main-regression-after-finance-localization-2026-08-25.json
10 / 10 passed
```

品牌失败回归和通用失败样例也按预期继续失败，说明本次补丁没有削弱原有拦截能力。

## 6. 格式与残留检查

- `glossary.yaml`、T46 正向 / 失败 QA 结果、`content-classification-inventory.json` 和 `element-placement-map.json` 均可被 JSON parser 解析。
- `design-ready.js`、`stitch-ready.js`、T44 QA 脚本和 T45 Stitch 页面工具脚本均通过 bundled Node `--check`。
- 当前可复用输入范围内未检出 `Finance Center`、`CDBI / Finance`、`OMS / Finance / CDBI`、`Payment / ERP / Finance`、`ERP / Finance` 或 `Data / Finance` 残留。
