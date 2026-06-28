# Research OS v2.1

AI Research Operating System（可运行版）

Version: v2.1
Goal: 输入问题 -> 自动研究 -> 输出可执行方案

## Trigger

- 用户明确说“用完整版调研”或 `research-os-full`
- 用户说“做完整研究 / 深度调研 / 输出决策方案”
- 项目任务中明确指定使用 `skills/research-os-full/SKILL.md`
- Lite 输出显示风险高、变量多、结论不稳定

## Execution Note

- 默认按各 Agent 角色顺序执行，不强制真实启动多 Agent。
- 当用户明确要求并行调研、多 Agent 协作，或任务足够复杂时，再启用多 Agent delegation。
- 若任务较小，可压缩为：Problem -> Planning -> Research -> Evidence -> Decision。

## System Goal

将复杂问题自动转化为：

结构化研究 -> 多Agent执行 -> 证据验证 -> 决策输出

## Core Formula

Research OS = Structure + Routing + Evidence + Validation + Iteration

## System Architecture

Agents:

- Orchestrator Agent（调度器）
- Problem Agent（问题解析）
- Planner Agent（研究规划）
- Research Agents（执行研究）
- Evidence Agent（证据整理）
- Validation Agent（验证）
- Decision Agent（决策）
- Meta Agent（质量检查）

## Global Workflow

1. Problem Structuring
2. Research Planning
3. Task Routing
4. Research Execution
5. Evidence Structuring
6. Validation
7. Decision Output
8. Meta Review
9. Iteration（如必要）

## Orchestrator Agent

Purpose: 控制整个研究流程

Responsibilities:

- 调用各Agent
- 管理研究状态
- 判断是否进入下一阶段
- 控制循环

## Problem Agent

Output:

- Research Objective
- Scope
- Constraints
- Success Criteria
- Key Variables
- Problem Type

Prompt:

```text
将问题结构化输出：

- Objective
- Scope
- Constraints
- Success Criteria
- Key Variables
- Problem Type（Technical / Product / Market / Business / System / Strategy / Mixed）

问题：
{user_problem}
```

## Planner Agent

Output:

- Research Tree
- Task Graph
- Priority
- Dependencies

Prompt:

```text
将问题拆解为研究树：

维度：

Technology
Market
User
Business

并生成：

- Task
- Priority
- Dependency
```

## Prompt Router

根据任务类型选择Prompt：

- 技术 -> 技术调研Prompt
- 市场 -> 市场分析Prompt
- 用户 -> 用户研究Prompt
- 商业 -> 商业分析Prompt

## Tool Router

根据任务类型选择工具：

Technology:

- GitHub
- Docs

Market:

- Perplexity
- Reports

User:

- Interview
- Survey

Data:

- Python
- Excel

## Research Agents

类型：

- Technology Agent
- Market Agent
- User Agent
- Business Agent

Output:

- Findings
- Evidence
- Insights

## Evidence Agent

Schema:

- Evidence ID
- Claim
- Source
- Confidence
- Relevance
- Dimension
- Insight

Responsibility:

- 去重
- 分类
- 提炼洞察

## Validation Agent

Types:

- Technical
- User
- Business

Output:

- Validation Type
- Method
- Result
- Risk

## Decision Agent

Output Format:

- Conclusion
- Why
- Evidence Summary
- Implementation Plan
- Risks
- Fallback Plan

## Meta Agent

Check List:

- 是否覆盖核心维度
- 是否存在证据缺失
- 是否完成验证
- 是否存在偏见
- 是否过早结论

Output:

- Gaps
- Bias
- Weak Points
- Next Actions

## Research Loop

执行：

Research -> Evidence -> Meta Check

如果：

证据不足 / 结论不稳定

则：

-> 回到 Planner
-> 生成补充任务
-> 再研究

## Evaluation Gate

满足以下条件才结束：

1. 覆盖核心维度
2. 关键结论有证据
3. 风险已识别
4. 至少完成一类验证
5. 可输出行动方案

## State Machine

```text
INIT
-> STRUCTURED
-> PLANNED
-> RESEARCHING
-> EVIDENCE_READY
-> VALIDATING
-> REVIEWING
-> DECISION_READY
-> DONE
```

## Output Deliverables

1. Executive Summary
2. Evidence Pack
3. Feasibility Analysis
4. Action Plan

## Usage

输入：

```text
研究问题：
{user_problem}
```

系统执行：

Problem -> Planning -> Research -> Evidence -> Validation -> Decision -> Review

输出：

可执行研究报告与方案

## Meta Rule

避免：

- 一次性长研究
- 信息堆砌
- 无验证结论

优先：

结构 -> 小步研究 -> 验证 -> 决策

## Upgrade Strategy

简单问题：

-> 使用 Lite

复杂问题：

-> 使用 v2.1

系统级问题：

-> 多轮 Research Loop
