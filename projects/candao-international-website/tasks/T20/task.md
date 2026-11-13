# T20: Human Confirmation Gates

日期：2026-08-15  
状态：done

## 目标

结合用户提供的“3+1 人工关卡”材料，明确餐道国际官网后续哪些地方必须人工参与确认，哪些执行步骤可以继续由 Agent 自动完成。

本任务不重新生成官网文案或原型，而是建立人工决策边界，防止 AI 自行判定业务事实、项目范围、验收标准和永久规则适用层级。

## 范围

- 读取用户附件中的 3+1 人工关卡模型。
- 映射到当前餐道国际官网项目。
- 输出当前仍需人工确认的具体事项。
- 新增项目级 `human-review/` 决策机制。
- 将强制人工确认点写入项目级调用规则。

## 输出

- `human-review/human-confirmation-gates.md`
- `human-review/current-decision-queue.md`
- `tasks/T20/output/human-confirmation-points-analysis-2026-08-15.md`

## 输出语言

内部分析、规则和交接说明使用简体中文；官网页面名称、产品名、技术字段保留原文。

## 完成标准

- 明确 3 个项目内强制人工确认点。
- 明确 1 个永久规则更新审核点。
- 列出餐道官网当前具体待人工确认事项。
- 区分 Agent 可自动执行事项与必须进入决策队列的事项。
- TASKS、STATE、HANDOFF 写回。
