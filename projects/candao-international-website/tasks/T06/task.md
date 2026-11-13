# Task T06: 官网内容 Agent

## Goal

运行官网内容 Agent，基于策略、信息架构和 Sitemap 生成官网内容框架与页面文案方向。

T06 必须以 T05 v1.1《Website Sitemap》为页面清单主输入，根据页面优先级生成不同深度的内容，不得为所有页面平均生成同等长度和同等细节。

## Output

《Website Copy Document》

## 前置输入

必须读取：

1. `tasks/T05/output/website-sitemap-2026-08-02.md`
2. `tasks/T04/output/website-information-architecture-2026-08-02.md`
3. `tasks/T03/output/candao-international-website-strategy-v1.0-2026-08-02.md`
4. `tasks/T01/output/candao-international-website-input-document-2026-08-02.md`

优先依据：

- T05 v1.1 的页面优先级矩阵；
- T05 v1.1 的 Page Template 类型；
- T05 v1.1 的第一阶段实际建设范围；
- T05 v1.1 的 T06 内容深度控制规则；
- T03 v1.1 的品牌语气 Tone of Voice。

## 输出语言

繁体中文 + 英文。

## Required Format

```markdown
Page:
首頁 Home

Section:
Hero

策略说明：
建立国际 SaaS 品牌第一印象

繁體中文：

標題：
打造全球餐飲企業智能營運平台

描述：
協助餐飲品牌整合訂單、配送及營運數據。

English:

Headline:
Empowering Global Restaurants with Intelligent Operations

Description:
Connect ordering channels, delivery networks and business data through one intelligent SaaS platform.

CTA:

立即預約展示

Book a Demo
```

## Requirements

- 所有官网实际展示文案必须同时提供繁体中文和英文。
- 不输出简体中文网页正式文案。
- `策略说明` 可使用简体中文作为内部说明，但不能替代官网展示文案。
- 每个页面至少覆盖 Page、Section、策略说明、繁體中文、English、CTA。
- 必须按页面等级控制输出深度：
  - P0 页面：输出完整页面内容框架 + 关键 Section 双语 Copy。
  - P1 页面：输出简化页面框架 + 核心 Section 双语 Copy。
  - 结构预留页面：只输出页面用途、模块占位、内部备注和谨慎占位 Copy。
  - Phase 2 页面：只输出页面方向、未来内容类型和待确认项，不输出完整正式 Copy。
- 必须优先生成 P0 页面：Home、Solutions Overview、Restaurant Chains、Platform Overview、Order Management、Delivery Management、Integrations Overview、Customers Overview、Contact / Book a Demo。
- 必须继承页面目标、主要内容和 CTA，不得重新创造 Sitemap 或新增主导航。
- Platform 页面必须遵守：Business Problem → Solution → Product Capability → UI Demo → Business Outcome → CTA。
- Integrations 第一阶段优先写 Integrations Overview、Category Overview、Request Integration，不为未确认分类页生成完整正式 Copy。
- Customers 第一阶段采用 Customer Proof Module、Story Template、Authorized Case 结构；未授权客户不得写成事实。
- 未确认客户 Logo、客户案例、规模数字、认证、SLA、集成状态、Pricing 和具体合作状态不得写成正式官网陈述。
- 避免把页面写成产品说明书、功能清单或重复文案集合。

## Acceptance

- 文档可直接传递给 T07 页面 Copy 生成。
- 官网文案内容没有缺失繁体中文或英文版本。
- 页面内容深度符合 T05 v1.1 的 P0、P1、结构预留和 Phase 2 分类。
- 没有为未确认资料生成正式事实陈述。
