# T32 Customers 高保真输入送入 Stitch 执行记录

日期：2026-08-19  
目标页面：Customers / Desktop / TC  
目标 Stitch Project：`Candao International Website T11.5-C`  
Project ID：`10888304674441209287`  
Design System：`assets/a99f770bf474445d98b287cf983bc147`

## 已执行

1. 已读取 T31 最新视觉媒介层、T27 Stitch-ready 低保真包、T17 Stitch 全局上下文和 `.stitch` 元数据。
2. 已读取 `domain-copy/` 规则，并在 prompt 中固化术语、品牌显示、授权指标和禁止虚构素材规则。
3. 已创建 T32 输入包：
   - `tasks/T32/output/stitch-input/customers-hifi-stitch-prompt-2026-08-19.md`
   - `tasks/T32/output/stitch-input/customers-hifi-reference-assets-2026-08-19.md`
4. 已按单页单目标约束，只调用一次 `generate_screen_from_text`：
   - sessionId：`18168780483861820088`
5. Stitch 返回 screen：
   - screenId：`ae3d839fa9e44a2a8526c6e099edfd16`
   - title：`Candao Home - Desktop TC`
6. 已下载该 screen 的 HTML 与截图，但因失败不进入正式输出：
   - `tasks/T32/output/stitch-downloads/failed-home-generated-from-customers-prompt-ae3d839fa9e44a2a8526c6e099edfd16.html`
   - `tasks/T32/output/stitch-downloads/failed-home-generated-from-customers-prompt-ae3d839fa9e44a2a8526c6e099edfd16.png`
7. 已按局部修正规则，只对同一 screen 调用一次 `edit_screens`：
   - sessionId：`2995804334475677790`
8. 已多次轮询同一 screen，编辑结果截至本记录未写回可下载 HTML / 截图。

## QA 结论

该 Stitch 产物不得作为 Customers 高保真输出。

- `tasks/T32/output/qa/customers-hifi-failed-screen-copy-qa-result-2026-08-19.json`：fail
- `tasks/T32/output/qa/stitch-customers-hifi-static-check-2026-08-19.json`：fail

主要硬性失败：

- 生成结果为首页结构，不是客户案例页。
- 繁體中文可见品牌多处使用 `Candao`，违反「餐道」品牌显示规则。
- 缺少客户案例页必须出现的 `Pizza-Box`、`JIA Group`、`Jardine Group` 和授权指标。
- HTML 源码仍包含 placeholder 注释。

## 当前阻塞

Stitch 文字生成 / 编辑链路没有可靠产出 Customers 高保真页。若继续推进“把高保真的图给到 Stitch”，应改走 `stitch::upload-to-stitch` 本地上传脚本，把 T31 / T11.5 的高保真参考 PNG 作为素材屏上传到同一 Stitch Project。

该脚本运行前必须由用户明确批准拟上传文件清单。确认清单见：

- `tasks/T32/output/stitch-input/customers-hifi-upload-approval-request-2026-08-19.md`

## 不进入正式输出的内容

以下失败产物仅作为排错证据保存，不复制到 `tasks/T17/output/design-handoff/.stitch/designs/`：

- `failed-home-generated-from-customers-prompt-ae3d839fa9e44a2a8526c6e099edfd16.html`
- `failed-home-generated-from-customers-prompt-ae3d839fa9e44a2a8526c6e099edfd16.png`

因此 T17 正式 Stitch 高保真输出仍只保留既有 Home / Platform，不新增 Customers 正式稿。
