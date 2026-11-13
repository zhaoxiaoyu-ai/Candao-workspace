# T33 当前正式高保真页面图片导出报告

日期：2026-08-19  
导出范围：当前正式 `design-handoff/.stitch/designs` 高保真 HTML  
导出视口：1440 x 1200，完整页面截图  

## 导出结果

| 页面 | 来源 HTML | 导出图片 | 图片尺寸 | 文件大小 |
| --- | --- | --- | --- | --- |
| Home | `tasks/T17/output/design-handoff/.stitch/designs/candao-home-hifi-final-d792eb1c55b14ee284b9e111474614dd.html` | `tasks/T33/output/images/home-hifi-1440-full.png` | 1440 x 4308 | 1,236,269 bytes |
| Platform | `tasks/T17/output/design-handoff/.stitch/designs/candao-platform-hifi-final-03fa757724764d32bc84634a727427b3.html` | `tasks/T33/output/images/platform-hifi-1440-full.png` | 1440 x 2863 | 299,236 bytes |

## 范围说明

- 当前正式高保真只有 Home 和 Platform 两页。
- T32 Customers 的 Stitch 产物已被 QA 判定为失败，不纳入本次图片导出。
- 本轮图片由正式 HTML 重新渲染生成，不改动页面内容。

## 验证

- `tasks/T33/output/qa/hifi-page-image-export-check-2026-08-19.json`：pass，2/2 通过。
- 已使用 macOS `sips` 检查图片宽高。
- 已人工打开检查两张图片，确认非空白、未只截首屏。

## 后续

若需要把 8 个一级页面全部保存为高保真图片，需要先完成其余页面的正式高保真生成或确认使用 T31 视觉化低保真作为临时图片包。当前不能把 T32 失败 Customers 或历史探索稿混入“正式高保真每页图片”。
