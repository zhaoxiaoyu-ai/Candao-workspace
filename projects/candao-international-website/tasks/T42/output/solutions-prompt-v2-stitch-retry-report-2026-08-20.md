# T42 Solutions Prompt v2 Stitch 重试报告

日期：2026-08-20  
页面：`Solutions / 解決方案`  
状态：已生成并完成 QA，但不登记为正式高保真

## 用户请求与附件边界

本轮用户要求“重试”。上文附件截图用于确认 T34 已导出的产品页面清单，其中 `03-solutions-low-fidelity-1440-full.png` 是本轮试点来源之一。截图中属于旧对话或外部文档的指令性表述，不覆盖当前用户请求、项目规则、人工关卡和 QA 规则。

## 执行方法

本轮采用 T41 结论后的单页试点方法：

- 不批量生成 7 页。
- 不复用 T40 长 prompt。
- 不在主生成 prompt 中重复写颜色、字体、圆角等 Design System token。
- 主 prompt 只描述页面目的、构图、业务对象、模块关系与术语边界。
- 生成后用 QA 判断是否可进入正式输出。

使用的 Prompt：`output/stitch-input/solutions-prompt-v2-2026-08-20.md`

## Stitch 生成结果

- Project：`10888304674441209287`
- Design System：`assets/a99f770bf474445d98b287cf983bc147`
- Model：`GEMINI_3_PRO`
- Device：`DESKTOP`
- Screen ID：`fdf1d4f894a8483885f7b3ba4c1c566c`
- Screen Title：`解決方案 - 餐道國際 / Desktop TC / 營運場景導航`
- Generate Session：`950404505638462701`

本地保存：

- HTML：`output/stitch-downloads/t42-solutions-fdf1d4f894a8483885f7b3ba4c1c566c.html`
- Stitch 预览图：`output/screenshots/t42-solutions-fdf1d4f894a8483885f7b3ba4c1c566c-stitch-preview.png`
- 本地 1440 全页截图：`output/screenshots/local-render/t42-solutions-fdf1d4f894a8483885f7b3ba4c1c566c-1440-full.png`

## QA 结果

结论：`fail`

通过项：

- Stitch 生成成功，screen 可下载。
- 本地 Chrome 可渲染，截图非空。
- 页面语言为 `zh-TW`，标题为 `餐道 | 解決方案`。
- 横向溢出检查通过：`scrollWidth = 1440`，`viewportWidth = 1440`。

阻塞项：

- Header 缺少一级导航 `資源`。
- 页面可见 Material Symbols ligature 文本：`receipt_long`、`storefront`、`local_shipping`、`account_balance_wallet`、`group`、`hub`、`warning`、`arrow_forward`。
- Footer 可见 `© 2024 餐道 Candao. All rights reserved.`，违反繁體中文页面品牌显示与无假版权样板规则。
- 下载版 HTML 缺少 `Product Capability Bridge`。
- 下载版 HTML 缺少 `Proof / Next Step`。
- 可见文本长度仅 `523`，说明页面内容被压缩成首屏 + 场景面板 + Footer，未达到完整一级页面深度。

QA 文件：

- `output/qa/domain-copy-t42-report.json`
- `output/qa/static-t42-solutions-html-report.json`
- `output/qa/render-metrics-t42-solutions.json`

## Edit Attempt

已按规则只对同一个 screen 调用一次 `edit_screens`：

- Edit Session：`4198916200482572705`
- 目标：补齐 Header `資源`、移除 ligature、补 `Product Capability Bridge`、补 `Proof / Next Step`、清理 Footer。

Stitch 返回了 DOM 操作记录，但后续 `get_screen` 与原始下载 URL 仍暴露编辑前 HTML；重新下载文件大小仍为 `22304` bytes，页面内容未包含编辑新增模块。因此本轮把 edit 记为“返回操作但未稳定写回可下载产物”。

## 是否进入正式高保真

不进入。

未更新：

- `tasks/T17/output/design-handoff/.stitch/metadata.json`
- `tasks/T17/output/design-handoff/.stitch/designs/`

## 下一步建议

下一次不要继续让 Stitch 对同一 screen 做多轮盲目编辑。更稳的路径是：先把 T42 的短 prompt 思路保留，但把页面完整模块拆成更明确的 section scaffold；或改用本地 HTML / React 先做可控高保真，再通过 Stitch upload 路径送入 Stitch 项目。
