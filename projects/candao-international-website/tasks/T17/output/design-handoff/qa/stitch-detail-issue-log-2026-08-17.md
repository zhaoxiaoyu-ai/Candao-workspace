# Stitch 细节问题记录

日期：2026-08-17  
范围：T17 餐道国际官网 Stitch 高保真输出  
用途：记录不影响对外交付方向判断的细节问题，避免同一页面反复生成多个 Stitch screen。

## 执行原则

- 同一页面只保留一个目标 Stitch screen、一个最终 HTML 和一张目标图。
- 首次生成尽量一次完成；细节问题先记录，不立即重新生成。
- 只有硬性问题才允许对同一个 screen 做一次定向 `edit_screens`。

## 硬性问题

出现以下情况时，才允许立即修正同一个 Stitch screen：

- 页面类型错误。
- 导航或核心文案缺失。
- 页面可见区域出现内部说明、来源页码、missing、placeholder。
- 出现假客户 Logo、假产品截图、假证书、假合作方标识。
- 出现未授权指标、未确认数量或未确认 SLA。
- `iDMS`、`SaaS`、`AMS / Connector` 等受保护术语大小写错误。

## 细节问题

以下问题先记录，不重新生成 screen，也不立即 edit：

- 局部间距、密度或对齐的微调。
- 个别图标是否更贴切。
- 图形表达的精度提升。
- 动效、过渡和滚动节奏建议。
- 真实产品截图、客户图片、客户 Logo、地图或公司图片到位后的替换。
- 模块之间视觉层级的进一步精修。

## 当前 Home 最终稿记录

最终 screen：

- `projects/10888304674441209287/screens/d792eb1c55b14ee284b9e111474614dd`

当前结论：

- 无阻塞硬性问题。
- `domain-copy` QA：`10/10 pass`。
- 已移除重复 Stitch 中间稿，正式输出目录仅保留最终 HTML 和一张目标长图。

待后续集中处理的细节：

- 真实产品截图、客户资产和参考主图仍缺失；当前高保真用于确认视觉方向和页面表达，不因此重新生成。
- 后续如果进入集中视觉评审，可统一检查模块节奏、图标语义和细节动效，而不是在当前轮次逐项消耗 token。

## 当前 Platform 最终稿记录

最终 screen：

- `projects/10888304674441209287/screens/03fa757724764d32bc84634a727427b3`

执行记录：

- 首次 `generate_screen_from_text`：`ea23e53acc3446a9bce5b1aa6a3d4dd6`。
- 首稿硬性问题：缺少 P02-P06 核心模块；使用了外部生成图片作为产品截图舞台；Footer 出现英文版权句。
- 处理方式：按单页单目标规则，对同一页面目标执行一次 `edit_screens`，得到最终 screen `03fa757724764d32bc84634a727427b3`。
- 首稿 HTML 已移出正式目录：`.stitch/superseded/platform/candao-platform-hifi-blocked-ea23e53acc3446a9bce5b1aa6a3d4dd6.html`。

当前结论：

- `domain-copy` QA：`10/10 pass`。
- HTML 静态扫描：`pass`。
- 正式输出目录中 Platform 仅保留最终 HTML 和一张目标图。
- 已检查导航、品牌显示、内部词、placeholder、假 Logo、未授权数字、`iDMS` / `SaaS` / `AMS / Connector` 大小写和 `text-transform` 风险。
- 已移除 Material Symbols 英文 ligature 残留，避免图标字体失败时出现 `category`、`play_arrow` 等非官网文案。

待后续集中处理的细节：

- 真实产品截图和产品视频仍缺失；当前版本只能使用抽象截图位、外部标注层和产品名视频入口，不应被解释为真实产品界面。
- 当前本地 HTML 已补轻量能力切换脚本；因本机没有 Node / Playwright，只做源码和静态渲染检查，未完成 6 个 Tab 的浏览器点击自动化回归。
