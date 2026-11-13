# T31 中文输出规则调整记录

## 日期

2026-07-31

## 用户要求

后续所有产出都需要使用中文回答，除非必须使用英文的部分；并重新调整产出的关键文件。

## 调整范围

- `tasks/T31/task.md`
- `tasks/T31/output/requirements-research-prd-agent.md`
- `tasks/T31/output/requirements-research-prd-agent.agent_spec.json`
- `tasks/T31/output/agent-pd-native-result-2026-07-31.md`
- `projects/design-agent/STATE.md`
- `projects/design-agent/HANDOFF.md`
- `projects/design-agent/TASKS.md`

## 规则落地

- 面向用户的说明、模板、行为要求和交接记录改为中文。
- 强化版 spec 增加中文输出约束：默认 `zh-CN`，可按输入切换 `zh-HK`，仅技术契约必要部分保留英文。
- JSON 字段名、枚举值、命令、测试 ID 和文件名保持英文，因为它们属于 schema、工具或验证契约。

## 验证

- 强化版 `requirements-research-prd-agent.agent_spec.json` 已重新通过 Agent-PD L1 校验。

