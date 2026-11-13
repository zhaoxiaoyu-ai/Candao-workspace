# Production Rule Update Report

## 1. 更新摘要

本次更新建立 `Website Production Guideline v1.0`，作为 Candao International Website 后续生产流程的最高优先级规则。

新增该规则的原因是 T11.5 A/B/C 执行中暴露了生产流程偏移：

- 内部分析语言和官网展示语言混淆。
- AI 生成网页改写了已经冻结的 IA。
- 产品能力页被错误提升为一级导航。
- 高保真视觉稿出现中英混排。
- AI 网页生成结果更像结构 Demo，而不是国际 SaaS 官网。
- 视觉生成阶段缺少真实网站生产约束。

## 2. 受影响任务

| Task | 影响程度 | 必要修正 |
|---|---|---|
| T05 Sitemap | 高 | 增加 Navigation Lock，防止后续任务重新解释 IA。 |
| T07 Final Copy | 高 | 增加 Primary Locale：繁體中文；英文必须作为独立 Locale。 |
| T08 UX | 中 | 增加 Prototype Locale 和页面职责规则。 |
| T09 Prototype | 中 | 增加 Prototype Production Rule，明确内部控制不等于官网导航。 |
| T10 Visual Direction | 高 | 增加真实官网视觉生产规则：摄影、半真实 SaaS UI、产品 Workflow。 |
| T11 High Fidelity Design | 高 | 增加 High Fidelity Locale Rule，强制一个页面只模拟一个 Locale。 |
| T11.5 A/B/C | 关键 | 重新定义 A/B/C 边界，禁止互相越权。 |

## 3. 问题原因

### 3.1 Locale 边界没有被写成硬规则

之前任务中同时存在内部简体中文分析、英文工具命名、繁体中文官网文案和英文 Prompt 语言，但没有明确“真实网页展示只能使用一个 Locale”。

这导致生成结果中出现繁体中文标题、英文标题和中文解释混排。

### 3.2 冻结 IA 没有作为生成器锁定层传入

T05 已经冻结 Sitemap，但后续生成 Prompt 没有把它作为硬约束。

因此 AI 工具把 `Order Management`、`Delivery Management` 这类高优先级能力误判为一级导航。

### 3.3 页面职责被混用

Home、Platform 和产品能力页在执行中有时被当成同一种“产品解释容器”。

这会让页面看起来像产品说明书，而不是品牌驱动的 SaaS 官网体验。

### 3.4 视觉概念阶段介入太晚

流程从信息结构直接进入页面布局，但还没有确定足够强的视觉概念、Hero 方向、摄影方向和产品 UI 风格。

这导致高保真产物信息完整，但缺少记忆点和品牌级第一印象。

### 3.5 AI 生成结果被过早当成参考

AI 生成页面适合做探索，但不能直接当作参考案例或最终方向。

任何生成结果必须先通过 IA、Locale、视觉、交互和可开发性检查。

## 4. 后续执行约束

所有后续官网相关工作必须遵守：

- T05 Sitemap 是唯一有效 IA 来源。
- 官网 Mockup 默认使用繁體中文。
- English 页面必须单独生成。
- 产品能力页保留在 Platform 下。
- Home 负责品牌认知和转化，不是产品目录页。
- Product Showcase 必须通过 Workflow、UI State Change、Business Outcome 表达价值。
- Hero 必须包含餐饮运营场景的大幅摄影、半真实 SaaS UI 和清晰 CTA。
- Stitch 和 AI Website Generator Prompt 必须由四层信息组成：Brand Direction、Website Structure Lock、Page Experience、Visual Asset Direction。
- Reference Selection、Moodboard Direction、Hero Direction、UI Style 必须人工确认。
- A = Design Production，B = Art Direction Review，C = Web Prototype Exploration。

## 5. 任务定义修正方式

原有 T05-T11.5 的 `task.md` 保留为历史任务定义。

Fix-00 执行时，部分历史 `task.md` 文件受到系统文件读取权限保护，因此本次没有强行改写历史正文，而是在对应任务目录新增 `production-rule-addendum-v1.0.md`。

这些 Addendum 是对应任务的最新执行约束：

- `projects/candao-international-website/tasks/T05/production-rule-addendum-v1.0.md`
- `projects/candao-international-website/tasks/T07/production-rule-addendum-v1.0.md`
- `projects/candao-international-website/tasks/T08/production-rule-addendum-v1.0.md`
- `projects/candao-international-website/tasks/T09/production-rule-addendum-v1.0.md`
- `projects/candao-international-website/tasks/T10/production-rule-addendum-v1.0.md`
- `projects/candao-international-website/tasks/T11/production-rule-addendum-v1.0.md`
- `projects/candao-international-website/tasks/T11.5/production-rule-addendum-v1.0.md`

如果历史任务定义与 Addendum 冲突，后续执行以 Addendum 为准。

## 6. 下一步

1. 后续继续 T05-T11.5 工作时，先读取本规则和对应 Addendum。
2. 重新生成 C v2 前，先建立 Visual Concept Development 阶段。
3. 收集并确认人工选择的视觉参考。
4. 将 B 从后置审查升级为生成前 Creative Director。
5. 在锁定 IA、确认视觉方向和 Image2 资产后，再重新生成 C v2。
6. C v2 通过 Art Direction Review 后，再进入 A 的正式高保真生产。

