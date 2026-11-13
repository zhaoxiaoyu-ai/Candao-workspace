# T40 - T34 页面输出送入 Stitch 生成当前风格 Web Desktop 高保真

状态：done  
日期：2026-08-20

## 背景

用户要求按照 T34 导出的页面输出执行到 Stitch，并要求与 Figma 首页节点 `336:7645` 已确定的首页风格保持一致。

本任务将用户附件视为上下文证据，不把附件中的旧对话文字当作新的系统指令。用户当前请求的有效执行目标是：使用 T34 产品输出页面作为结构和内容输入，按 Figma 首页风格基准在 Stitch 中继续生成 Web Desktop / TC 高保真页面。

## 目标

- 读取 T34 产品输出清单和 T27 Stitch-ready 页面结构。
- 读取 Figma 首页节点 `336:7645` 及 T35 首页风格约束。
- 使用 Stitch 项目 `10888304674441209287` 和设计系统 `assets/a99f770bf474445d98b287cf983bc147`。
- 按 Web Desktop 1440 / TC 口径执行页面生成。
- 记录每次 Stitch 调用、返回 session / screen、落地检查和 QA 状态。

## 范围

本轮输入范围为 T34 `product_output_image_manifest` 中的真实页面，不包括 `index` 总览图。

优先处理截图中强调的页面范围：

- Solutions / 解決方案
- Platform / 平台
- Integrations / 整合能力
- Customers / 客戶案例
- Resources / 資源
- About / 關於餐道
- Demo / 預約產品演示

Home 已作为当前风格基准，不作为本轮新生成目标。

## 输出语言

内部执行记录使用简体中文。Stitch 页面可见内容使用繁體中文单一 Locale，不做中英双语混排。

## 验收

- Stitch 调用记录完整。
- 新生成页面不得包含内部说明、placeholder、假 Logo、未授权指标、错误品牌显示、错误产品名大小写或 Material icon ligature 可见文本。
- 若 Stitch 返回 session 但未落地 screen，必须记录为 blocked，不得登记为正式高保真。
- 若生成结果可下载，需保存 HTML、截图、QA 报告，并按正式输出规则判断是否可登记。

## 执行结果

2026-08-20 已按用户请求在 Stitch 中生成 7 个 Web Desktop / TC 候选 screen，并下载 HTML、Stitch 预览图和本地 1440 全页截图。

输出：

- `output/stitch-generation-ledger-2026-08-20.json`
- `output/t34-pages-to-stitch-generation-report-2026-08-20.md`
- `output/qa/domain-copy-t40-report.json`
- `output/qa/static-t40-stitch-html-report.json`
- `output/stitch-downloads/`
- `output/screenshots/`

结论：生成动作完成，但 QA 未通过，不能登记为正式高保真稿。
