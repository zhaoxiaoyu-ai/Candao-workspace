# T31 Agent-PD 原生运行结果

## 日期

2026-07-31

## 使用的用户澄清信息

- 主要服务对象：用户本人，在 Codex 中使用，通常用于设计工作。
- 输入类型：可以是任何输入，常见包括一句话想法、竞品截图、现有 PRD、客户反馈、Figma/原型说明。
- 输出要求：完整 PRD、用户故事和验收标准、MVP 范围表、任务拆解。
- 行为要求：主动追问、识别矛盾、补假设、给优先级和 MVP 建议、指出风险和依赖、发现不合理决策和交互优化点，并判断用户场景、用户体验和商业逻辑是否成立。
- 边界：允许写入项目任务目录，允许联网调研，允许派生设计和研发任务，并且必须在结论前进行全方位深度调研。

## 输出语言规则

- 后续所有面向用户的产出默认使用中文。
- 英文只在必要技术场景保留，例如字段名、命令、日志、API 名称、第三方产品名、URL、测试 ID。
- 强化版契约已把该规则写入 Agent 行为说明和 spec 约束。

## Agent-PD 执行

命令：

```bash
python3 /Users/victorwong/.codex/skills/agent-pd/scripts/agent_pd_run.py design "<refined requirements research PRD agent idea>"
```

结果：

- 终态：`DONE: agent_spec produced & L1-valid`
- L1 校验：`PASS`
- Agent-PD 原生输出路径：`/Users/victorwong/Downloads/agent-pd/out/agent_spec.json`
- 持久化副本：`requirements-research-prd-agent.agent-pd-native.agent_spec.json`

## 原生 spec 摘要

- `agent_id`: `requirement-analysis-agent`
- `carrier`: `subagent`
- 工具数量：`5`
- 工具名称：
  - `parse_input`
  - `analyze_requirements`
  - `ask_questions`
  - `search_internet`
  - `write_output`
- eval case 数量：`6`

## 强化版契约

Agent-PD 原生 spec 有效，但比较精简，没有强约束几个关键要求：

- 最终结论前必须完成深度调研。
- 产品设计逻辑、UX 适配、交互问题和商业逻辑必须成为强制输出。
- 派生任务必须区分“提案”和“执行”。
- 证据质量和未完成调研必须显式标记。
- 面向用户的输出必须默认使用中文。

因此创建了强化版契约：

- `requirements-research-prd-agent.agent_spec.json`
- `requirements-research-prd-agent.md`

建议：实际在 Codex 中使用时，以强化版契约为基线；Agent-PD 原生 spec 保留作为自动生成链路成功的证据。
