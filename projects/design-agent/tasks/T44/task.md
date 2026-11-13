# T44 - 餐道官网多页面低保真交互原型 v2

## 状态

done

## 目标

在保留 T43 多页面结构的前提下，重做首页，使其更像真正的餐饮科技 SaaS 官网首页，而不是页面说明书或入口目录。

本任务的核心不是增加更多页面，而是修正首页策略：让首页重新承担品牌定位、经营结果、可信证明、产品矩阵预览和转化分流的第一感官任务。

## 输入

- `projects/design-agent/tasks/T43/output/multipage-interactive-wireframe.html`
- `projects/design-agent/tasks/T43/output/multipage-interactive-wireframe-2026-08-01.md`
- `projects/design-agent/tasks/T43/output/homepage-strategy-diagnosis-2026-08-01.md`
- `projects/design-agent/tasks/T34/output/candao-website-redesign-prd-standard-2026-07-31.md`
- `projects/design-agent/tasks/T30/output/competitor-analysis-2026-07-31/generator_brief_expanded.json`

## 输出

- `output/multipage-interactive-wireframe-v2.html`
- `output/multipage-interactive-wireframe-v2-2026-08-01.md`
- `output/t44-home.png`
- `output/t44-products.png`
- `output/t44-mobile-home-menu.png`

## 计划范围

- 重做首页内容链路与首页交互节奏
- 保留 T43 的多页面路由结构
- 保留产品、集成、客户案例、资源、关于、联系等独立页面承接深内容
- 用低保真但更像真实官网的方式强化品牌、结果、可信证明和转化

## 完成记录

2026-08-01 已完成多页面低保真交互原型 v2。

已完成：

- 新增 `output/multipage-interactive-wireframe-v2.html`。
- 新增 `output/multipage-interactive-wireframe-v2-2026-08-01.md`。
- 生成验证截图：
  - `output/t44-home.png`
  - `output/t44-products.png`
  - `output/t44-mobile-home-menu.png`

本轮重点修正：

- 首页从“入口目录”改为“品牌定位 + 经营结果 + 可信证明 + 产品矩阵预览 + 集成可信 + 案例 + 分流 CTA”的连续叙事。
- 首页新增三组核心交互：首屏焦点切换、经营问题切换、平台能力切换。
- 继续保留多页面结构：解决方案、产品总览、5 个产品详情、集成目录、客户案例、资源 / FAQ、关于 / 信任、联系我们。
- 保留顶部导航页面路由，不退回首页锚点滚动。

验证结果：

- JS 语法检查通过。
- Playwright + 本机 Chrome 验证通过。
- 已验证首页 `h1`、首屏焦点切换、经营问题切换、平台能力切换、产品页跳转和移动端菜单。
- 截图显示桌面与移动端无明显重叠或塌陷。
