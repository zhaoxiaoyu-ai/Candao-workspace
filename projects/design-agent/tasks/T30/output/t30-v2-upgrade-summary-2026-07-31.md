# T30 v2 升级摘要

## 本次继续完成的内容

在用户补充 5 个关键问题后，T30 从旧版“通用网页竞品风格分析 Agent”升级为：

> 面向设计师和网页生成 Agent 的网页竞品视觉、交互、功能分析 Agent。

新增产物：

- `web-competitor-style-analyst-v2.md`
- `web-competitor-style-analyst-v2.agent_spec.json`

## 关键变化

### 1. 使用者更明确

主使用者是设计师；同时保留给网页生成 Agent 调用的结构化输出。

### 2. 分析目标分层

新增四种分析模式：

- 视觉分析
- 交互分析
- 功能分析
- 综合分析

不同模式输出不同内容，避免每次都生成混在一起的全量报告。

### 3. 输出物更可执行

面向设计师输出中文报告；面向网页生成 Agent 输出 `generator_brief`，其中包含：

- `visual_key_brief`
- `interaction_key_brief`
- `function_key_brief`
- `page_structure`
- `token_guidance`
- `component_rules`
- `copy_rules`
- `forbidden_copy_items`
- `acceptance_scores`

### 4. 多竞品融合策略固定

多个竞品输入时：

- 先提取共性作为主参考。
- 再挑选优秀视觉模式融合。
- 再挑选优秀交互模式融合。
- 每个融合点必须保留来源、理由和安全改写方式。
- 冲突时输出 `conflict_matrix`，不得平均成模糊风格。

### 5. 评分更符合用户要求

固定门槛：

```text
overall style-fit >= 0.82
```

拆分评分：

- 视觉
- 结构
- 文案
- 交互
- 合规

通过规则：

```text
pass = overall_score >= 0.82 且 compliance = 1.0
```

### 6. 术语更友好

v2 文档新增术语解释，面向设计师默认使用中文解释。只有字段名、命令、URL、第三方工具名等技术必要内容保留英文。

## 校验结果

已使用本地 Agent-PD 校验器验证：

```bash
/Users/victorwong/Downloads/agent-pd/.venv/bin/python
```

结果：

```text
PASS
```

说明 `web-competitor-style-analyst-v2.agent_spec.json` 通过 Agent-PD L1 校验，包括 JSON schema 和 carrier profile。

## 推荐后续

当前推荐基线应改为 v2 规格。旧版产物仍保留，用于追溯 Agent-PD 原生设计、旧 fallback 和 full pipeline 失败原因。

下一步如果要继续实现，可基于 v2 规格重新跑 maker/eval，或人工实现一个专门满足 v2 评测项的网页竞品分析 Agent。
