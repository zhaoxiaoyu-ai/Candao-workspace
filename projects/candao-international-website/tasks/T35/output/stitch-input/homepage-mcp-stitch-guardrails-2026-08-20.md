# 首页 MCP 风格用于 Stitch 的生成约束

## 全局目的

使用 Figma 首页节点 `336:7645` 的新版视觉语言，重新引导剩余一级页面的高保真生成。目标是让页面统一到“暗色餐饮运营场景 + 企业级产品工作台 + 授权客户/数据证明 + 清晰 CTA”的官网风格，而不是继续生成通用 SaaS 页面。

## 语言

Generate a Traditional Chinese first international SaaS website.

Language:
Traditional Chinese.

Do not display bilingual body content.

Include language switch:
繁中 / EN

## 必须继承的风格

- 深色 Hero 或深色系统段使用真实餐饮运营氛围、产品工作台或连接中枢。
- 使用 `#528dff` 对关键标题、CTA、数据和连接线做强调。
- 白底内容段必须有清晰信息层级，案例/表单/资源卡片不做堆叠式装饰。
- 案例卡、产品舞台、数据带、CTA 区之间要有明显节奏变化。
- 每页要保留一个明确 CTA；CTA 文案与页面任务对应。

## 禁止

- 不要生成假客户 Logo、假新闻、假认证、假视频封面、假产品截图。
- 不要创造未授权指标、百分比、状态数量、SLA、价格、接入承诺。
- 不要使用 `Candao` 替代中文 / 繁體中文正文中的「餐道」。
- 不要改写 `iDMS`、`SaaS`、`AMS / Connector`。
- 不要显示内部编号、来源页码、missing、placeholder、设计备注。
- 不要照搬 MCP 中的未授权效益数字：`-80%`、`-95%`、`+60%`、`100%`。

## 单页单目标执行

- 同一页面只允许一个目标输出。
- 首次只调用一次 `generate_screen_from_text`。
- 局部问题只记录到 issue log。
- 只有硬性问题才允许对同一个 screen 调用一次 `edit_screens`。
- 正式输出目录只保留一个 HTML 和一张目标图。

## 剩余页面优先顺序

1. Solutions / Desktop / TC
2. Integrations / Desktop / TC
3. Customers / Desktop / TC
4. Resources / Desktop / TC
5. About / Desktop / TC
6. Demo / Desktop / TC

说明：Home 与 Platform 已有正式高保真输出；Customers 旧 Stitch 失败稿不得复用。
