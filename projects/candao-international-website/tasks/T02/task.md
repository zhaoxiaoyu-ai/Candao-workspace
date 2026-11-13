# Task T02: 官网策略 Agent

## Goal

运行官网策略 Agent，基于 T01 输入资料分析 Candao 国际官网的战略方向。

## Original Detailed Brief

前置描述：

- 使用 `$agent-pd` 生成一个“国际官网策略分析 Agent”。

Agent 目标：

- 该 Agent 用于分析企业资料、产品资料、竞品网站、国际市场定位，并输出官网整体策略方向。

Agent 能力要求：

输入：

- 企业介绍 PPT；
- 产品资料；
- 竞品分析资料；
- 菜单结构；
- 市场目标。

输出包含：

### 1. 品牌定位分析

需要输出：

- 当前品牌认知；
- 国际市场定位建议；
- SaaS 化表达方向。

### 2. 用户分析

需要分析：

- 海外连锁餐饮集团；
- 餐饮经营者；
- 技术合作伙伴。

### 3. 官网目标分析

需要明确：

- 品牌展示；
- Demo 转化；
- 合作伙伴获取。

### 4. 首页策略建议

需要输出：

- Hero 方向；
- 信息排序；
- 核心表达。

最终输出：

- 《Website Strategy Analysis》

## Output

《Website Strategy Analysis》

## 输出语言

简体中文。

## Requirements

- 分析目标市场、目标用户、购买决策链路、品牌认知障碍、竞争差异与官网转化目标。
- 明确国际官网应承担的商业任务，例如品牌信任、产品理解、行业方案、Demo 预约或销售线索收集。
- 输出策略判断，不生成最终官网页面 Copy。
- 如涉及品牌英文表达，可保留英文候选项并用简体中文解释。

## Acceptance

- 策略结论能支撑 T03 官网战略文档。
- 输出语言保持简体中文。

## Result

Done on 2026-08-02.

Outputs:

- `tasks/T02/output/website-strategy-analysis-2026-08-02.md`
- `tasks/T02/output/international-website-strategy-agent-spec-2026-08-02.json`
- `tasks/T02/output/agent-pd-run-note-2026-08-02.md`
