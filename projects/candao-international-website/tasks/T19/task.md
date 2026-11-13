# T19: Domain Copy Capability

日期：2026-08-15
状态：done

## 目标

将当前项目中“文案行业感不足、业务表达不准确、内容过于冗长，以及原型阶段擅自删减文案”的问题，从一次性人工纠偏升级为可复用的行业文案能力。

本任务不是只修改当前一批官网文案，而是建立后续任务能够自动调用、自动检查和持续更新的机制。

## 范围

- 创建项目级 `domain-copy/` 行业文案资料目录。
- 创建可复用 `domain-copy` Skill。
- 建立自动质检脚本和回归测试输入。
- 建立 approved_and_locked 文案锁定机制。
- 建立用户人工修改后的持续改进回写机制。
- 新增项目级 `AGENTS.md`，只保留强制调用规则和完成标准。

## 输出

- `domain-copy/business-context.md`
- `domain-copy/glossary.yaml`
- `domain-copy/copy-rules.md`
- `domain-copy/examples.md`
- `domain-copy/copy-qa-cases.md`
- `domain-copy/approved-copy-locks.yaml`
- `domain-copy/copy-feedback-log.md`
- `domain-copy/scripts/domain_copy_qa.py`
- `domain-copy/regression/qa-regression-input.json`
- `domain-copy/regression/qa-failure-demo-input.json`
- `AGENTS.md`
- `/Users/victorwong/.codex/skills/domain-copy/SKILL.md`
- `/Users/victorwong/.codex/skills/domain-copy/scripts/domain_copy_qa.py`
- `/Users/victorwong/.codex/skills/domain-copy/references/workflow.md`
- `tasks/T19/output/domain-copy-capability-report-2026-08-15.md`
- `tasks/T19/output/qa-regression-result-2026-08-15.json`
- `tasks/T19/output/qa-failure-demo-result-2026-08-15.json`

## 输出语言

内部规则、流程、报告使用简体中文。

官网实际展示示例使用繁體中文，技术字段和脚本参数保留英文。

## 完成标准

- 至少 10 个典型页面任务完成自动回归测试。
- 自动 QA 能识别业务准确性、术语一致性、用户角色适配、信息完整性、表达紧凑度、AI 泛化表达、未确认内容 / 虚构数据、原型阶段擅自删减文案。
- 项目级 `AGENTS.md` 明确什么时候必须调用 Skill、哪些规则不可违反、什么才算完成。
- Skill 验证通过。
- TASKS、STATE、HANDOFF 写回。

## 完成记录

- 已创建项目级 `domain-copy/` 行业文案资料目录、规则、案例、锁定机制、反馈日志、QA 脚本和回归输入。
- 已创建全局 `$domain-copy` Skill，并通过 `quick_validate.py` 校验。
- 已使用 10 个典型页面任务完成正向回归测试，结果为 10/10 通过。
- 已运行失败样例，确认可拦截泛化表达、未确认 SLA / 指标、锁定文案改写和原型删减风险。
- 完整报告见 `tasks/T19/output/domain-copy-capability-report-2026-08-15.md`。
