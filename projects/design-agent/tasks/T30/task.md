# T30 - 网页竞品风格分析 Agent

## Status

done

## Goal

使用 Agent-PD 创建一个网页竞品分析 Agent。这个 Agent 要分析公开竞品网页，并帮助后续生成网页在气质调性、视觉语言、信息结构、文案节奏和交互感觉上贴合竞品。

2026-07-31 用户补充后，推荐目标升级为：

> 面向设计师和网页生成 Agent 的网页竞品视觉、交互、功能分析 Agent。

v2 推荐规格要求：

- 主使用者是设计师，也可以被网页生成 Agent 调用。
- 输出按分析目标拆分为视觉、交互、功能、综合四种模式。
- 视觉和交互分析必须给网页生成 Agent 提供清晰、准确、可执行的关键描述。
- 多竞品融合时以共性作为主参考，再挑选优秀视觉和交互模式做安全融合。
- 固定验收 `overall style-fit >= 0.82`，并拆成视觉、结构、文案、交互、合规五项分数。
- 后续产物默认中文，首次出现专业名词时给设计师可读解释。

## Test URLs

- https://www.aigens.com/kiosk-ordering/
- https://www.deliverect.com/en/integrations
- https://tabsquare.ai/

## Scope

- 加载并使用本地 Agent-PD 工作流。
- 保留 Agent-PD 原生运行结果、失败原因和 full pipeline 结果。
- 必要时手工创建 Agent-PD 兼容 `agent_spec`。
- 在用户补充澄清后，升级推荐规格为中文、设计师友好、可被网页生成 Agent 调用的 v2 契约。
- 所有持久产物存放在 `tasks/T30/output/`。

## User Request

用Agent-PD做一个网页竞品分析的Agent。

目标：生成的网页能够在气质调性上完全贴合竞品。

测试用例：

- https://www.aigens.com/kiosk-ordering/
- https://www.deliverect.com/en/integrations
- https://tabsquare.ai/

## Completion Notes

完成日期：2026-07-31。

- 已加载 `agent-pd` Codex skill，并通过规定 wrapper 运行 Agent-PD design mode。
- 初始 Agent-PD 因 LLM 后端返回 `402 Insufficient Balance` 在 `n2_triage` 前停止，没有产出原生 `agent_spec`。
- 已创建手工 fallback 规格：
  - `output/web-competitor-style-analyst.agent_spec.json`
  - `output/web-competitor-style-analyst.md`
  - `output/agent-pd-run-log.md`
- fallback JSON 已通过 Agent-PD L1 校验。
- 后续诊断发现 `.env` 被粘贴残留污染，后面的占位 `DEEPSEEK_API_KEY` 覆盖了真实 key；已清理 `.env`，且 Agent-PD smoke 通过。
- Agent-PD 原生 design 随后成功，原生规格复制到 `output/web-competitor-style-analyst.agent-pd-native.agent_spec.json`。
- 已新增 `output/agent-pd-native-result-2026-07-31.md`，记录根因、修复、原生结果和与 fallback 的比较。
- 用户询问能否继续后，已运行 Agent-PD full maker/eval/review。
- full pipeline 完整执行到自动修复，但终态为 `FIX_EXHAUSTED`；最终通过率 `0.375`，未 promotion。
- full-run 产物已复制到 `output/`，包括生成实现和 eval 报告。
- 用户后续补充 5 个关键澄清后，已新增 v2 推荐规格：
  - `output/web-competitor-style-analyst-v2.md`
  - `output/web-competitor-style-analyst-v2.agent_spec.json`
  - `output/t30-v2-upgrade-summary-2026-07-31.md`
- v2 `agent_spec` 已通过 Agent-PD L1 校验。当前推荐基线是 v2，而不是旧 full pipeline 生成的 `impl.py`。
- 后续按用户要求实际分析了三个竞品，目标为“餐饮科技 SaaS 官网”，模式为视觉和交互分析，不做完整功能分析。
- 已采集并检查截图证据；Aigens 和 Deliverect 的部分自动截图受 Cloudflare/429 限制，已在报告中标注证据限制并删除无效截图。
- 已新增实际分析首屏快速版产物：
  - `output/competitor-analysis-2026-07-31/report.md`
  - `output/competitor-analysis-2026-07-31/generator_brief.json`
- `generator_brief.json` 已通过 `python3 -m json.tool` 校验。
- 用户指出不能只从首页分析，还要覆盖产品介绍、合作商、产品特色、企业介绍、联系方式等关键页面，并对比内容呈现链路和方式。
- 已新增扩展版分析产物，作为后续推荐使用版本：
  - `output/competitor-analysis-2026-07-31/report-expanded.md`
  - `output/competitor-analysis-2026-07-31/generator_brief_expanded.json`
- 扩展版覆盖首页、产品总览、产品详情、产品特色/能力、合作商/集成、企业介绍、联系/预约演示，并提炼共性内容链路：经营问题 -> 业务结果 -> 产品矩阵 -> 能力场景 -> 集成生态 -> 客户证明 -> 企业背书 -> 转化入口。
- `generator_brief_expanded.json` 已通过 `python3 -m json.tool` 校验；后续网页生成 Agent 应优先使用扩展版 brief。
- 2026-08-01 用户询问 `generator_brief_expanded.json` 应如何使用；已新增使用说明：
  - `output/generator-brief-expanded-usage-guide-2026-08-01.md`
