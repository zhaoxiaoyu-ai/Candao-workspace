# 餐道国际官网 Agents

## 必须调用 `$domain-copy` 的情况

凡涉及官网 UI 文案、原型内容、页面标题、模块说明、指标卡、表格字段、图表标题、按钮、表单、成功 / 错误提示、空状态、异常预警、后台页面、数据大屏、页面示例数据或已审核文案，必须先调用 `$domain-copy`，并读取本项目 `domain-copy/` 目录。

## 必须人工确认的情况

本项目采用 `3+1` 人工关卡：原始业务事实确认、需求基线和范围确认、最终业务验收、永久规则和知识库更新审核。具体规则见 `human-review/human-confirmation-gates.md`，当前决策项见 `human-review/current-decision-queue.md`。

## 品牌显示

中文、繁體中文、项目叙述和官网默认显示品牌名统一使用「餐道」。`Candao` 仅在英文 Locale、英文法定名、文件名、URL、代码、路径或精确引用来源时保留。

## 当前 Web Desktop Gate

当前基本 Web 端尚未确认。后续任务在未看到 Web Desktop 人工确认记录前，不得先推进 Mobile、390 视口、Responsive Rules、Motion Storyboards 或响应式前端验收。Figma T11.5 的 `04-10` 已标记为不保留，不得作为当前输入。

## 不可违反

- 不得擅自替换 `glossary.yaml` 中的受保护术语。
- 不得使用未定义指标、未确认状态、未确认流程或无来源业务结论。
- 不得用空泛价值表达替代业务对象、状态、条件、数据口径和下一步操作。
- 不得删除、缩写、改写或翻译 `approved_and_locked` 文案。
- 原型阶段如发生文字溢出，必须报告位置、文字、长度、可用空间和布局建议，不得自行缩短。
- 不得自行把 `business_facts`、`requirement_baseline`、`final_business_acceptance` 或 `permanent_rule_update` 标记为 approved。
- 不得在中文 / 繁體中文默认品牌显示中使用 `Candao`、`candao` 或 `Can Dao` 替代「餐道」。

## 完成标准

相关 `domain-copy/` 资料已读取；输出前已执行 QA；QA 未通过时已自动修改一次并复检；用户人工修改已写入 `copy-feedback-log.md`；如修改具有普遍性，已同步更新术语、规则或回归案例。
