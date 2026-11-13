# T32 - 将客户案例高保真设计输入送入 Stitch

状态：blocked  
日期：2026-08-19

## 背景

用户要求把高保真的图给到 Stitch 进行设计。当前浏览器停留在 `tasks/T27/output/stitch-ready-low-fidelity/customers.html`，且 T31 已将客户案例页补齐为视觉化低保真 / 中保真输入，包括客户场景构图、案例数据看板、指标图表和导入前后关键帧。

## 目标

以 Customers / Desktop 1440 / TC 为本次单页目标，使用 T31 最新结构与 T11.5 高保真媒介参考，向 Stitch 发起一次高保真设计生成，并把结果收敛为一个正式 HTML 和一张目标图。

## 输入

- `tasks/T31/output/screenshots/customers-1440.png`
- `tasks/T11.5/output/assets/cv2-first-level/customers-hero-case-ops-2026-08-08.png`
- `tasks/T27/output/stitch-ready-low-fidelity/customers.html`
- `tasks/T27/output/stitch-ready-low-fidelity/stitch-ready-prompt-pack.md`
- `tasks/T27/output/stitch-ready-low-fidelity/element-placement-map.json`
- `tasks/T17/output/design-handoff/stitch/GLOBAL-CONTEXT.md`
- `tasks/T17/output/design-handoff/.stitch/metadata.json`
- `domain-copy/`

## 约束

- 同一页面只允许一个目标输出。
- 首次只调用一次 `generate_screen_from_text`。
- 局部问题只允许对同一 screen 使用一次 `edit_screens`。
- 正式 output 只保留一个 HTML 和一张目标图。
- 可见页面使用繁體中文单一 Locale，仅 Header 保留 `繁中 / EN`。
- 中文 / 繁體中文品牌显示使用「餐道」。
- 不生成假客户 Logo、假产品截图、假客户现场照片、假视频封面、未授权数字、未确认 SLA 或未确认合作状态。
- 保留 `iDMS`、`SaaS`、`AMS / Connector` 大小写。

## 验收

- Stitch 项目中生成 Customers / Desktop / TC 单页 screen，或记录异步生成未落盘的阻塞原因。
- 下载 Stitch HTML 和截图。
- 执行 domain-copy QA 与静态 HTML 检查。
- 输出前检查导航、文案、内部词、placeholder、假 Logo、未授权数字和 `iDMS / SaaS / AMS / Connector` 大小写。
- 更新 `TASKS.md`、`STATE.md`、`HANDOFF.md`。

## 输出

- `tasks/T32/output/stitch-input/customers-hifi-stitch-prompt-2026-08-19.md`
- `tasks/T32/output/stitch-input/customers-hifi-reference-assets-2026-08-19.md`
- `tasks/T32/output/stitch-input/customers-hifi-upload-approval-request-2026-08-19.md`
- `tasks/T32/output/stitch-downloads/`
- `tasks/T32/output/qa/`
- `tasks/T32/output/customers-hifi-stitch-run-report-2026-08-19.md`

## 当前结果

首次 Stitch 生成偏成 Home 页面；同一 screen 的一次 `edit_screens` 修正截至本轮未写回可下载页面。失败 screen 已作为证据保存，不进入正式 `design-handoff`。下一步需要用户批准 T32 高保真参考素材上传清单后，改走 `stitch::upload-to-stitch` 本地上传脚本。
