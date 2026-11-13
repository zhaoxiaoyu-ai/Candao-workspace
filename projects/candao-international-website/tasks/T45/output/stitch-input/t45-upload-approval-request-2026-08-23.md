# T45 上传审批清单

## 目的

Stitch 原生 `generate_screen_from_text` 已按页执行，但下载版均未达到 100% 内容覆盖。以下 6 个本地 HTML 是可上传兜底候选，已通过内容覆盖、domain-copy、静态风险和 1440 渲染 QA。

## 待批准上传文件

| 页面 | 文件 | 大小 | QA |
| --- | --- | ---: | --- |
| 平台 | `tasks/T45/output/local-html/platform-coverage-safe-2026-08-23.html` | 14K | `76/76` pass |
| 整合能力 | `tasks/T45/output/local-html/integrations-coverage-safe-2026-08-23.html` | 13K | `59/59` pass |
| 客戶案例 | `tasks/T45/output/local-html/customers-coverage-safe-2026-08-23.html` | 15K | `90/90` pass |
| 資源 | `tasks/T45/output/local-html/resources-coverage-safe-2026-08-23.html` | 17K | `112/112` pass |
| 關於餐道 | `tasks/T45/output/local-html/about-coverage-safe-2026-08-23.html` | 16K | `100/100` pass |
| 預約產品演示 | `tasks/T45/output/local-html/demo-coverage-safe-2026-08-23.html` | 14K | `75/75` pass |

## 上传边界

- 目标 Stitch Project：`10888304674441209287`
- 这些文件是本地可控 HTML，不是 Stitch 原生生成器的输出。
- 上传前必须由用户明确批准本清单。
- 本轮尚未上传任何本地文件到 Stitch。

