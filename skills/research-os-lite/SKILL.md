# Research OS Lite v1.1

AI轻量研究操作系统（快捷指令版）

Version: Lite v1.1
Goal: 用最少步骤完成高质量研究与决策

## Trigger

- 用户明确说“用轻量调研”或 `research-os-lite`
- 用户输入 `/think`、`/explore`、`/deep`、`/validate`
- 项目任务中明确指定使用 `skills/research-os-lite/SKILL.md`

## Core Principle

少即是多。

默认不做完整研究，只做：

判断 -> 行动 -> 必要时再深入

## Command System

系统支持以下快捷指令：

- `/think`: 快速判断
- `/explore`: 轻量探索
- `/deep`: 深度研究
- `/validate`: 验证假设

## /think

用途：快速判断是否值得做

输入：

```text
/think {problem}
```

输出：

- Conclusion（一句话结论）
- Why（最多3条）
- Next Step（下一步）
- Risk（最大风险）

Prompt：

```text
对以下问题做快速判断：

输出：
- Conclusion
- Why（最多3条）
- Next Step
- Risk

问题：
{problem}
```

## /explore

用途：快速理解问题（轻量研究）

输出：

- Technology（技术情况）
- User（用户需求）
- Business（商业情况）

要求：每项最多2条。

Prompt：

```text
快速分析问题：

输出：

- Technology（技术是否可行）
- User（用户是否需要）
- Business（是否值得做）

每项最多2条。

问题：
{problem}
```

## /deep

用途：深入研究（只针对一个方向）

输入：

```text
/deep {problem} | {dimension}
```

dimension 只能选：

- Technology
- Market
- User
- Business

输出：

- Key Findings（3条）
- Evidence（简要）
- Insight（结论）

Prompt：

```text
针对以下方向做深入研究：

问题：
{problem}

方向：
{dimension}

输出：

- Key Findings（最多3条）
- Evidence（简要）
- Insight（结论）
```

## /validate

用途：验证关键假设

输入：

```text
/validate {problem} | {type}
```

type 选择：

- Tech
- User
- Business

输出：

- Validation Type
- Method
- Result
- Impact

Prompt：

```text
验证以下假设：

问题：
{problem}

验证类型：
{type}

输出：

- Validation Type
- Method
- Result
- Impact
```

## Smart Usage

优先级：

1. 默认使用 `/think`
2. 不确定 -> `/explore`
3. 关键问题 -> `/deep`
4. 准备执行 -> `/validate`

## Meta Rule

避免：

- 长报告
- 过度分析
- 信息堆砌

优先：

快速判断 -> 小步验证 -> 再深入

## Upgrade Path

Lite -> v1.5 -> v2.1

仅当以下情况升级：

- 系统设计
- 高风险决策
- 多变量问题

## Core Formula

好决策 = 快速判断 x 小步验证 x 持续迭代
