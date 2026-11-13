# T45 顺序执行报告

## 结论

已按顺序将 `Platform / Integrations / Customers / Resources / About / Demo` 六个页面实际送入 Stitch 生成，并保存下载 HTML、预览图、本地 1440 截图和 QA。Stitch 原生下载版全部未达到 100% 内容覆盖，不能登记为正式高保真。

同时已生成 6 个本地可上传 HTML 兜底候选，并完成全量 QA：内容覆盖、domain-copy、静态风险和 1440 渲染均 pass。按 `stitch::upload-to-stitch` 技能要求，本轮未执行上传；下一步需要用户明确批准上传清单。

## 执行依据

- T27 低保真包：`tasks/T27/output/stitch-ready-low-fidelity/`
- T27 / T28 元素层：`stitch-ready-page-map.json`、`element-placement-map.json`
- T35 首页风格：`tasks/T35/output/figma-homepage-mcp-style-guide-2026-08-20.md`
- Stitch Design System：`assets/a99f770bf474445d98b287cf983bc147`
- 当前任务硬门槛：内容覆盖必须是 `100%`，不得以“基本覆盖”通过。

## Stitch 原生生成结果

| 页面 | Stitch screen | 下载版 QA | 主要问题 |
| --- | --- | ---: | --- |
| 平台 | `90274a678c8a495099da93bef2b0932b` | `56/76` fail | 缺 20 项；可见 `Candao`；edit 未改善下载版 |
| 整合能力 | `1aa52e363ae84b8cb939efb82e3e8f2d` | `48/59` fail | 缺 11 项；静态和渲染 fail；edit 未改善下载版 |
| 客戶案例 | `27f1d7fe88744acf995f5021669ac289` | `36/90` fail | 严重压缩内容；有 `Candao`、`arrow_forward`、未授权指标 |
| 客戶案例重试 | `314b2b95ec834c39a95523426e899d99` | `40/90` fail | copy-register 增强提示词仍被压缩 |
| 資源 | `d301b522d77242f3ba61f38ba5f8bd2d` | `32/112` fail | 严重压缩内容；有 `Candao`、`arrow_forward` |
| 關於餐道 | `a452fefebffb4ac5972b3fa25e1f1c2f` | `31/100` fail | 公司旅程和能力内容大量缺失；有 `arrow_forward` |
| 預約產品演示 | `3215bd49b04244d5ba8efc7f9f97e250` | `67/75` fail | 缺 8 项；有 `Candao`、`arrow_forward`；精准 edit 未写回下载版 |

## 本地可上传候选

| 页面 | 本地 HTML | QA |
| --- | --- | --- |
| 平台 | `tasks/T45/output/local-html/platform-coverage-safe-2026-08-23.html` | `76/76` pass |
| 整合能力 | `tasks/T45/output/local-html/integrations-coverage-safe-2026-08-23.html` | `59/59` pass |
| 客戶案例 | `tasks/T45/output/local-html/customers-coverage-safe-2026-08-23.html` | `90/90` pass |
| 資源 | `tasks/T45/output/local-html/resources-coverage-safe-2026-08-23.html` | `112/112` pass |
| 關於餐道 | `tasks/T45/output/local-html/about-coverage-safe-2026-08-23.html` | `100/100` pass |
| 預約產品演示 | `tasks/T45/output/local-html/demo-coverage-safe-2026-08-23.html` | `75/75` pass |

本地候选 QA 证据位于：

- `tasks/T45/output/qa/local-*-coverage-safe-v2-content-coverage-2026-08-23.json`
- `tasks/T45/output/qa/domain-copy-local-*-coverage-safe-v2-report.json`
- `tasks/T45/output/qa/static-local-*-coverage-safe-v2-report.json`
- `tasks/T45/output/qa/render-local-*-coverage-safe-v2-report.json`
- `tasks/T45/output/screenshots/local-*-coverage-safe-v2-1440-full.png`

## 阻塞点

Stitch 原生生成器会把长页面内容契约压缩成摘要式页面，即使提示词写明逐条可见 copy register，也不能稳定输出完整低保真内容。`edit_screens` 能返回 DOM 操作，但 `get_screen` 和下载 URL 仍返回编辑前 HTML，不能作为正式通过证据。

因此当前若要在 Stitch 中获得 100% 覆盖版本，建议走本地 HTML 上传路径。上传清单已准备在 `tasks/T45/output/stitch-input/t45-upload-approval-request-2026-08-23.md`，但必须等用户明确批准后才可执行。

