# AI Generated Website Review

任务：T11.5-C Stitch / AI Web Generator 网页生成流程  
项目：餐道国际官网重构  
日期：2026-08-03  
输出语言：简体中文。

## 1. 审核对象

本次审核比较：

- `Website Generation Prompt.md`；
- `AI Generated Website Pages.md`；
- T10 / T11 视觉标准；
- Website Production Localization Guideline。

2026-08-03 初版说明：当时环境没有可调用的 Stitch 工具，也没有真实 Stitch 截图输入，因此本报告评估的是 AI Web Generator 页面草案与 Prompt 输出质量。

2026-08-04 更新：Stitch 已连通并完成真实网页生成。真实截图审核已追加到 `stitch-generated-website-review-2026-08-04.md`，后续 T12 应同时读取两类材料，并以 2026-08-04 真实 Stitch 输出作为最终网页生成结果。

## 2. T10 标准摘要

T10 核心概念：

```text
Operational Clarity for Global Restaurant SaaS
```

通过标准：

- 真实餐饮运营场景优先；
- 国际 B2B SaaS 感；
- 半真实 SaaS UI 解释产品价值；
- Product Motion 服务流程理解；
- Home 首屏 5 秒内建立 Candao 是餐饮运营 SaaS 平台；
- Platform 必须体现 Capability layer；
- Order / Delivery 必须有清晰 4-step storyboard；
- 不使用未确认客户、Logo、真实数据、认证、SLA、价格；
- 视觉稿和网页原型默认繁體中文单一 Locale，Header 预留 `繁中 / EN`。

## 3. 审核矩阵

| 维度 | 评估 | 结论 |
| --- | --- | --- |
| 国际感 | Home 和 Platform 都以 `Premium SaaS`、大幅真实餐饮运营摄影、克制 UI Overlay 为方向，避免了国内软件官网式口号和数字墙 | 通过 |
| SaaS 感 | Prompt 明确要求 Semi-real SaaS UI、Capability Map、Dashboard、Order Queue、Delivery Timeline，并限制密集截图堆叠 | 通过 |
| UI 质量 | 页面草案包含状态 chip、队列、节点、时间线、总部摘要、异常面板等可组件化 UI；需要真实生成后检查视觉精细度 | 预通过 |
| 可开发性 | 页面可拆为 Header、Hero、Trust、Problem Switcher、Capability Map、UI Demo、Product Cards、CTA 等组件，动效有移动端与 reduced-motion 降级 | 通过 |
| 生产语言 | Prompt 强制 Traditional Chinese only，并允许 `Candao` 与 `繁中 / EN`；网页版本未写入双语正文 | 通过 |
| 未确认事实风险 | 明确禁止客户 Logo、真实订单、真实地图、认证、SLA、价格和具体数据 | 通过 |
| Motion 表达 | Home、Platform、Order、Delivery 均限定为 L2-L3，强调可读状态变化，不进入完整产品模拟 | 通过 |

## 4. 页面级审核

### Home

结论：通过，可进入 Stitch 生成。

理由：

- Hero 明确承接 T10 的真实餐饮运营摄影 + UI Overlay；
- 首屏文案能在 5 秒内表达复杂餐饮营运的清晰连接；
- Product Showcase 使用能力流，不是功能列表；
- Trust Module 避免了未授权 Logo 和未确认数字。

风险：

- AI 生成器可能把餐饮照片做成普通餐饮氛围图，需用修正 Prompt 强化“接单、出餐、门店协作、配送交接”等运营动作。

### Platform

结论：通过，可进入 Stitch 生成。

理由：

- Capability Map 被定义为页面视觉中心；
- 产品入口以平台能力组织，不使用内部模块名；
- UI Demo 用三步展示系统连接、流程触发和总部可视。

风险：

- AI 生成器可能过度生成抽象网络图，应在截图审核时检查是否出现粒子线网、3D 球体或泛科技背景。

### Order Management

结论：通过，可进入 Stitch 生成。

理由：

- 四步 workflow 清楚：来源分散、统一队列、门店处理、总部可视；
- 同时覆盖门店执行和总部视角，避免只像门店工具；
- UI 元素可开发：source chips、order queue、status timeline、exception badge、summary panel。

风险：

- 需检查 AI 生成器是否擅自加入真实订单号、金额、顾客名或外卖平台 Logo。

### Delivery Management

结论：通过，可进入 Stitch 生成。

理由：

- 四步 workflow 清楚：高峰需求、履约选择、过程追踪、异常回流；
- 强制使用运营视角，不只展示 Rider App；
- 地图动效被限制为状态理解，不做复杂路线模拟。

风险：

- AI 生成器可能把配送地图做得过于真实，需删除真实地址、真实地图品牌和路线细节。

## 5. 与 T10 标准差距

当前差距不是方向性问题，而是生成器执行质量问题：

| 差距 | 影响 | 修正方式 |
| --- | --- | --- |
| 真实摄影不可控 | 可能变成氛围餐饮图或库存图 | 使用 Home / Delivery 失败修正 Prompt，强调运营动作 |
| UI 精细度不可控 | 可能像线框或过度玻璃拟态 | 强化 Semi-real SaaS UI、8px radius、克制 shadow、清晰状态 chip |
| Motion 不可预览 | Markdown 无法验证真实动效节奏 | Stitch 输出后用截图或录屏补审 |
| 品牌色未锁定 | 可能与 Candao 现有品牌色不一致 | 进入真实设计阶段时基于品牌资产做色彩适配 |

## 6. 可开发性判断

可开发性：高。

原因：

- 页面结构是常规官网组件组合；
- L3 动效均可用 scroll-triggered stepper、CSS transition 或轻量 JS 实现；
- Order / Delivery 的复杂 UI 都有静态等价状态；
- Mobile 降级路径清楚；
- 未要求真实产品模拟、真实地图或实时数据。

开发建议：

- 首版 Web Prototype 可先做静态页面 + 局部 stepper；
- Product UI 使用脱敏 mock data；
- Motion 参数保持 300ms 到 500ms；
- 后续如进入开发，不应直接使用 AI 生成的无结构 HTML，应转为组件化实现。

## 7. 最终结论

方案 C 当前产物达到进入 Stitch / AI Web Generator 的条件。

本轮已完成：

- C01：Agent-PD 生成 AI Website Generation Prompt Agent，L1 PASS，并写回 JSON spec；
- C02：生成 Home 页面 Prompt 与网页版本草案；
- C03：生成 Platform 页面 Prompt 与网页版本草案；
- C04：生成 Order Management / Delivery Management 页面 Prompt 与网页版本草案；
- C05：完成 AI 网页结果相对 T10 标准的评估。

建议下一步：

将 `Website Generation Prompt.md` 中对应页面 Prompt 分别粘贴到 Stitch，导出截图后进入 T12 审核；真实截图审核重点放在摄影真实感、UI 精细度、Locale、动效表达和未确认事实风险。
