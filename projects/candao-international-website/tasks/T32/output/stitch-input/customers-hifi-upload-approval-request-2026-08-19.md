# T32 高保真素材上传确认清单

日期：2026-08-19  
目标 Stitch 项目：`Candao International Website T11.5-C`  
Project ID：`10888304674441209287`

## 为什么需要确认

Stitch 当前 MCP 只支持文字生成 / 编辑 screen 与 DESIGN.md 上传；本地 PNG 图片素材上传需要走 `stitch::upload-to-stitch` 的本地上传脚本。该 Skill 明确要求：运行上传脚本前，必须向用户展示拟上传文件的路径、大小和类型，并等待明确批准。

## 拟上传文件

| 用途 | 文件 | 类型 | 尺寸 | 大小 |
| --- | --- | --- | --- | --- |
| Customers 最新页面结构与内容参考 | `tasks/T31/output/screenshots/customers-1440.png` | PNG | 1440 x 3004 | 696,554 bytes |
| Customers 移动端结构参考 | `tasks/T31/output/screenshots/customers-390.png` | PNG | 390 x 6215 | 597,038 bytes |
| Customers 高保真媒介风格参考 | `tasks/T11.5/output/assets/cv2-first-level/customers-hero-case-ops-2026-08-08.png` | PNG | 1808 x 870 | 1,897,164 bytes |

## 上传边界

- 以上图片可作为 Stitch 视觉参考和素材屏，不代表真实客户现场照片或真实产品截图。
- 不得把图片中的视觉内容转写成新的业务事实。
- 任何可见文案仍必须以 `domain-copy/`、旧官网、PPT 和 T27-T31 最新页面内容为准。
- 上传后仍需单独生成或编辑 Customers 高保真 screen，并重新执行 domain-copy QA 与静态检查。

## 需要用户明确批准

批准语义建议：`确认上传 T32 三个高保真参考素材到 Stitch`。
