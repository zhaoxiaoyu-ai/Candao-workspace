# Integrations 高保真 Stitch 生成报告

日期：2026-08-20  
状态：blocked

## 目标

继续长期目标二，按 Figma 首页 MCP 新版风格和 T35 设计约束，为 `Integrations / Desktop / TC` 生成单页高保真 Stitch 输出。

目标页面为「整合能力」，用于让 IT / 营运团队理解餐道 `AMS / Connector` 如何承接外賣平台、自建點餐入口、`POS / KDS`、`CRM / 會員`、支付 / ERP 与配送 API，并回到 `OMS`、`Menu Center`、`DMS / iDMS`、`Finance Center`、`CDBI` 等营运链路。

## 输入

- `tasks/T35/output/figma-homepage-mcp-style-guide-2026-08-20.md`
- `tasks/T35/output/stitch-input/homepage-mcp-stitch-guardrails-2026-08-20.md`
- `tasks/T17/output/design-handoff/stitch/GLOBAL-CONTEXT.md`
- `tasks/T17/output/design-handoff/stitch/INTEGRATIONS.md`
- `tasks/T17/output/design-handoff/.stitch/DESIGN.md`
- `tasks/T27/output/stitch-ready-low-fidelity/integrations.html`
- `tasks/T27/output/stitch-ready-low-fidelity/element-placement-map.json`
- `domain-copy/`
- `tasks/T37/output/stitch-input/integrations-hifi-generate-prompt-2026-08-20.md`

## Stitch 执行

- Project ID：`10888304674441209287`
- Design System：`assets/a99f770bf474445d98b287cf983bc147`
- Model：`GEMINI_3_PRO`
- 调用方式：只调用一次 `generate_screen_from_text`
- Session ID：`8812386093922816405`

Stitch 返回了 session，但没有返回 `output_components`，也没有返回新 screen ID。

## 轮询结果

已按 Stitch 工具说明每 30 秒轮询 `list_screens`，共 10 次。10 次后仍未发现新的 Integrations screen。

项目中仍可见旧的 Integrations screen：

- Screen ID：`621fecf4ef6945f58faa162d9f8af3b3`
- 标题：`整合能力 - Candao International (Fixed)`
- 尺寸：`2560 x 3576`
- HTML file：`projects/10888304674441209287/files/7001591698750260085`

该旧 screen 不是 T37 的生成结果，且标题仍含 `Candao`，不符合当前中文 / 繁體中文默认显示「餐道」的品牌规则。因此不能将它登记为正式 Integrations 高保真输出。

## QA 状态

未运行 domain-copy QA、静态 HTML QA 或浏览器截图 QA，因为本轮没有新的可下载 HTML 或截图产物。

已确认的规则状态：

- 已遵守同一页面只调用一次 `generate_screen_from_text`。
- 未重试生成。
- 未将旧 screen 冒充本轮正式输出。
- 未更新 `tasks/T17/output/design-handoff/.stitch/metadata.json`。
- 未新增正式 HTML 或正式目标图。

## 结论

T37 阻塞原因是 Stitch 生成会话没有写回项目 screen 列表。当前正式高保真输出仍只有 Home 与 Platform；Integrations 不能登记为完成。

下一步需要在新的任务中重新尝试，或等待 Stitch 写回恢复后再检查 session 结果。重试时应沿用本轮 prompt，并在获得新 screen 后执行下载、1440 宽完整截图、domain-copy QA、静态检查和浏览器视觉检查，全部通过后才可进入正式 `design-handoff/.stitch/designs/`。
