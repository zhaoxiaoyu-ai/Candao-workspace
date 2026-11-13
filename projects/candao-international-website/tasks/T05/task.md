# Task T05: Sitemap

## Goal

将 T04《Website Information Architecture》转换为正式网站地图和页面清单，冻结页面名称、英文名称、URL、层级、页面目标、目标用户、核心内容、CTA、Phase 和状态。

T05 的任务不是重新创造网站结构，而是整理和冻结 T04 已完成的 IA，使其可以直接传递给 T06 内容 Agent、T08 UX Agent 和后续开发/设计执行。

## Output

Sitemap 文档。

## 前置输入

必须读取：

1. `tasks/T04/output/website-information-architecture-2026-08-02.md`
2. `tasks/T03/output/candao-international-website-strategy-v1.0-2026-08-02.md`
3. `tasks/T05/task.md`

优先依据：

- T04 第 9 节 `T05 Sitemap 输入`；
- T04 v1.1 的页面商业目标；
- T04 v1.1 的页面内容优先级；
- T04 v1.1 的产品页面内容结构规范；
- T04 v1.1 的页面视觉复杂度等级。

## 输出语言

简体中文 + 英文页面名称。

## Required Format

```markdown
| 页面名称 | 英文名称 | URL | 层级 | 页面目标 | 目标用户 | 核心内容 | CTA | Phase | 状态 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 首页 | Home | `/` | 一级 | 建立品牌认知并推动 Demo | 所有访客 | Hero、问题、能力、信任、CTA | Book a Demo | Phase 1 | 必做 |
```

## Requirements

- 页面目标、说明和结构描述使用简体中文。
- 每个页面必须提供英文页面名称，便于后续对应官网导航。
- 必须标明 URL、层级、页面目标、目标用户、核心内容、CTA、Phase 和状态。
- 必须标明一级导航、二级页面、转化页面和页脚页面。
- 必须区分 `必做`、`结构预留`、`待确认`、`Phase 2` 等状态。
- 必须继承 T04 的导航顺序：Home、Solutions、Platform、Integrations、Customers、Resources、About、Contact / Book a Demo。
- 必须继承 T04 的分层原则：Solutions 讲场景，Platform 讲能力，Integrations 讲生态连接和技术可信。
- 不得重新判断官网定位。
- 不得新增未经 T04 支撑的主导航。
- 不得生成最终官网 Copy。
- 未确认客户 Logo、规模数据、认证、集成状态、Pricing 和案例只能标记为结构预留或待确认。

## Acceptance

- Sitemap 可直接传递给 T06 内容 Agent。
- 页面英文名称统一、可用于国际官网导航。
- Sitemap 可直接支持 T08 UX 页面规划和 T10 视觉资源分配。
- 页面状态清楚，能区分第一阶段实际建设页面与后续扩展页面。
