# T31 - 需求深度调研与 PRD Agent

## 状态

done

## 目标

基于用户补充的 5 个关键答案，使用 Agent-PD 创建一个更适合 Codex 内设计工作的需求深度调研与 PRD Agent。

## 范围

- 使用细化后的 Agent brief 跑 Agent-PD design-only。
- 保留 Agent-PD 原生 `agent_spec`。
- 当原生 spec 过于泛化时，创建一份更适合实际使用的强化版契约。
- 将关键产物持久化到 `tasks/T31/output/`。

## 用户答案

1. 主要服务对象：用户本人，在 Codex 中使用，通常用于设计用途。
2. 输入类型：任何类型都有可能，常见包括一句话想法、竞品截图、现有 PRD、客户反馈、Figma/原型说明。
3. 输出要求：完整 PRD、用户故事和验收标准、MVP 范围表、任务拆解。
4. 行为要求：主动追问、识别矛盾、补假设、给优先级和 MVP 建议、指出风险与依赖，并能够自行检测不合理点、交互优化点、用户场景适配、用户体验和商业逻辑。
5. 边界：允许写入项目任务目录，允许联网查资料，可以派生设计和研发任务，并且必须全方位深度调研后给出结论。

## 输出语言规则

- 后续所有面向用户的产出默认使用中文。
- 只有代码字段、JSON schema、命令、日志、API 名称、第三方产品名、URL、测试 ID 等必须保留英文的部分才使用英文。
- 如果原始资料是繁体中文，优先使用繁体中文；否则默认使用简体中文。

## 完成记录

完成时间：2026-07-31。

- Agent-PD design-only 成功运行。
- Agent-PD 终态：`DONE: agent_spec produced & L1-valid`。
- Agent-PD 原生输出已复制到 `output/requirements-research-prd-agent.agent-pd-native.agent_spec.json`。
- 创建了强化版契约：
  - `output/requirements-research-prd-agent.agent_spec.json`
  - `output/requirements-research-prd-agent.md`
  - `output/agent-pd-native-result-2026-07-31.md`
- 强化版 spec 已通过 Agent-PD L1 校验。
- 2026-07-31 follow-up：按用户要求补充中文输出规则，并将 T31 关键说明文件调整为中文。JSON 字段名、命令、测试 ID 等技术契约继续保留必要英文。
