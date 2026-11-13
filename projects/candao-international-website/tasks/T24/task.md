# T24 - 产品名大小写敏感规则补丁

## Status

done

## Goal

根据用户反馈，补强餐道官网文案与原型 QA：产品名称不能统一全部大写，部分产品名具有大小写识别性，例如首字母小写、后续字母大写的 `iDMS`。后续文案、低保真、高保真、Figma、Stitch、React 和 CSS 样式层都不得改变产品名大小写。

## Scope

- 更新 `domain-copy/glossary.yaml`，建立大小写敏感术语字段。
- 更新 `copy-rules.md`、`copy-qa-cases.md`、`examples.md` 和 `copy-feedback-log.md`。
- 更新 `domain-copy/scripts/domain_copy_qa.py`，拦截错误大小写和危险样式。
- 扫描并验证当前低保真原型。
- 输出 QA 输入、QA 结果和执行报告。

## Acceptance Criteria

- `iDMS`、`SaaS` 等大小写敏感术语有标准形态和禁止形态。
- QA 能拦截 `IDMS`、`Idms`、`idms`、`SAAS`、`Saas`、`saas` 等错误写法。
- QA 能拦截对含大小写敏感术语容器使用 `text-transform: uppercase/lowercase/capitalize` 的风险。
- 当前低保真原型通过大小写敏感术语扫描。
- 更新项目状态文件和交接说明。
