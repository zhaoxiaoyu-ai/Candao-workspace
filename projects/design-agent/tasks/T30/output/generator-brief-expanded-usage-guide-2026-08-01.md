# generator_brief_expanded.json 使用说明

## 这个文件是什么

`generator_brief_expanded.json` 是给网页生成 Agent 使用的结构化设计约束，不是最终页面内容，也不是完整 PRD。

它的作用是把三家餐饮科技 SaaS 竞品的共性整理成可执行约束，让后续生成官网时不要只做一个漂亮首页，而是生成一组具备产品、集成、企业信任和转化链路的页面网络。

## 适用场景

- 给网页生成 Agent 作为上游输入。
- 给设计师作为页面结构、内容节奏、视觉调性和交互方向的检查清单。
- 给验收者判断生成结果是否贴合竞品气质，但不直接复制竞品。

## 推荐使用方式

### 1. 先与项目 PRD 合并

先读取官网项目 PRD，再读取 `generator_brief_expanded.json`。

PRD 决定“餐道官网要表达什么”，brief 决定“表达方式应该贴近什么气质、结构和交互方式”。

推荐优先级：

1. 业务事实、产品范围、真实客户与合规要求以 PRD 为准。
2. 页面结构、内容链路、视觉气质和交互节奏参考 `generator_brief_expanded.json`。
3. 不允许直接使用竞品 logo、客户 logo、原文、页面截图、源码、CSS 或独特品牌资产。

### 2. 生成页面时重点读取这些字段

- `target_page_context`：确认目标是餐饮科技 SaaS 官网。
- `required_page_families`：决定必须生成哪些页面类型。
- `common_content_chain`：决定整个官网的内容叙事顺序。
- `site_generation_requirements`：决定首页、产品详情页、集成页、联系页的结构。
- `visual_and_interaction_guidance`：决定视觉气质、导航、CTA 和滚动节奏。
- `forbidden_copy_items`：避免抄袭和品牌侵权。
- `acceptance_scores`：用于最终验收评分。

### 3. 生成前应转换成具体任务

网页生成 Agent 不应只说“参考这个 JSON”。它应该先把 JSON 转成任务清单：

- 生成不少于 7 类页面：首页、产品总览、产品详情、产品特色/能力、合作商/集成、企业介绍、联系/预约演示。
- 每类页面必须符合对应 `purpose` 和 `content_chain`。
- 导航必须支持多页面，而不是单页锚点。
- 首页必须体现真实餐饮场景、经营结果、客户证明、产品矩阵、集成生态和预约演示入口。
- 集成页必须有搜索、分类、伙伴卡片和请求新集成/成为合作伙伴入口。
- 联系页必须按预约演示、获取报价、客户支持、成为伙伴等意图分流。

## 可复制给网页生成 Agent 的提示词

```text
请读取以下两个上游输入：

1. 项目 PRD：说明真实业务目标、产品范围、内容素材和约束。
2. generator_brief_expanded.json：说明餐饮科技 SaaS 官网应参考的竞品气质、页面结构、内容呈现链路、视觉与交互约束。

生成时必须遵守：

- 不要只生成首页，必须生成页面网络。
- 至少包含：首页、产品总览、产品详情、产品特色/能力、合作商/集成、企业介绍、联系/预约演示。
- 使用 `common_content_chain` 作为整站叙事顺序。
- 使用 `required_page_families` 和 `site_generation_requirements` 作为页面结构约束。
- 使用 `visual_and_interaction_guidance` 作为视觉和交互方向。
- 严格遵守 `forbidden_copy_items`，不得复制竞品 logo、客户 logo、原文、页面截图、源码、CSS 或独特品牌资产。
- 生成完成后按 `acceptance_scores` 自评：overall、visual、structure、copy、interaction、compliance。

输出内容：

1. 站点地图
2. 每个页面的区块结构
3. 首页首屏设计描述
4. 产品详情页设计描述
5. 集成页设计描述
6. 联系页设计描述
7. 视觉与交互规则
8. 自评分数和未满足项
```

## 验收标准

生成结果至少需要满足：

- 不只停留在首页。
- 页面网络能覆盖用户从认知、理解产品、验证可信到联系转化的全过程。
- 气质上接近餐饮科技 SaaS：真实餐饮现场、温暖可信、企业级清晰、科技能力隐在体验背后。
- 结构上有产品矩阵、集成生态、客户证明、企业背书和联系分流。
- 文案不直接复制竞品。
- `overall_score` 目标不低于 `0.82`。
