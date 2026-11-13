# T34 - 将 T27 Stitch-ready 低保真包导出为图片

状态：done  
日期：2026-08-19；2026-08-20 追加单张入口图导出并修正产品输出口径

## 背景

用户指定文件：

`/Users/victorwong/Documents/Codex/Candao-workspace/projects/candao-international-website/tasks/T27/output/stitch-ready-low-fidelity/index.html`

并要求把该内容转换成图片即可。

## 目标

从 T27 `stitch-ready-low-fidelity` 包重新渲染入口页和 8 个一级页面，并逐页保存为 1440 宽完整页面 PNG。2026-08-20 用户确认：入口总览图不属于真正产品输出；正式产品输出口径只包含 8 个真实页面图片，入口总览图仅保留为内部导航 / QA 参考。

## 输入

- `tasks/T27/output/stitch-ready-low-fidelity/index.html`
- `tasks/T27/output/stitch-ready-low-fidelity/stitch-ready-page-map.json`
- `tasks/T27/output/stitch-ready-low-fidelity/*.html`
- `tasks/T27/output/stitch-ready-low-fidelity/assets/`

## 输出语言

内部记录使用简体中文；图片中的页面内容保持 T27 原始繁體中文。

## 输出

- `tasks/T34/output/images/`
- `tasks/T27/output/stitch-ready-low-fidelity/index-1440-content.png`
- `tasks/T34/output/qa/t27-low-fidelity-image-export-check-2026-08-19.json`
- `tasks/T34/output/qa/t27-index-single-image-export-check-2026-08-20.json`
- `tasks/T34/output/t27-low-fidelity-image-export-report-2026-08-19.md`
- `tasks/T34/output/product-output-image-manifest-2026-08-20.json`

## 验收

- 技术导出可包含 `index.html` 和 8 个页面的 PNG，但产品输出不得包含 `index.html` 总览图。
- 2026-08-20 用户只要求转换指定 `index.html` 时，已单独导出同目录精确内容高度 PNG；该图后来被确认仅作内部参考，不进入产品输出。
- 单页导出结果记录在 `tasks/T34/output/qa/t27-index-single-image-export-check-2026-08-20.json`。
- 产品输出清单以 `tasks/T34/output/product-output-image-manifest-2026-08-20.json` 为准，只包含 8 个真实页面。
- 图片由 T27 指定 HTML 包重新渲染生成。
- 每张图片非空，记录宽高和文件大小。
