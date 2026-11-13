# T46 - Finance Center 中文生产表达规则补丁

## Status

done

## Goal

根据用户确认，后续中文 / 繁體中文官网、Figma、Stitch、React 和截图式界面中，不再把 PPT 来源词 `Finance Center` 作为可见展示词，统一调整为「财务对账 / 財務對賬」或更具体的「平台订单与 OMS 订单对账」表达。

## Scope

- 更新 `domain-copy/business-context.md`、`glossary.yaml`、`copy-rules.md`、`examples.md`、`copy-qa-cases.md` 和 `copy-feedback-log.md`。
- 更新 `domain-copy/scripts/domain_copy_qa.py`，拦截中文 / 繁體中文生产稿中的 `Finance Center` 可见残留。
- 更新当前仍会被后续生成复用的设计输入、低保真和 upload-ready HTML 中的展示词。
- 保留历史证据文档和 PPT 原文引用，不改写来源事实。
- 输出正向 QA 与失败回归记录。

## Acceptance Criteria

- 中文 / 繁體中文生产稿标准展示词为「财务对账 / 財務對賬」。
- `Finance Center` 仅允许出现在英文 Locale、精确来源引用、文件名、URL 或代码标识中。
- QA 对中文 / 繁體中文输入中的 `Finance Center` 返回失败。
- 当前可复用生成输入不再把 `Finance Center` 作为可见展示词。
