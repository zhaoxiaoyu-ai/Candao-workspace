# T33 - 导出当前正式高保真页面独立图片

状态：done  
日期：2026-08-19

## 背景

用户询问是否可以把现在的高保真每页单独保存为图片。当前项目中进入正式 `design-handoff` 的 Stitch 高保真页面只有 Home 和 Platform；T32 Customers 生成失败，不能纳入当前正式高保真导出。

## 目标

从当前正式高保真 HTML 重新渲染并导出每页独立完整页面 PNG，统一放入 T33 输出目录，便于单独查看、传递或后续上传。

## 输入

- `tasks/T17/output/design-handoff/.stitch/designs/candao-home-hifi-final-d792eb1c55b14ee284b9e111474614dd.html`
- `tasks/T17/output/design-handoff/.stitch/designs/candao-platform-hifi-final-03fa757724764d32bc84634a727427b3.html`

## 输出语言

内部执行记录使用简体中文；图片中的官网可见内容保持原高保真 HTML 的繁體中文页面状态。

## 输出

- `tasks/T33/output/images/home-hifi-1440-full.png`
- `tasks/T33/output/images/platform-hifi-1440-full.png`
- `tasks/T33/output/qa/hifi-page-image-export-check-2026-08-19.json`
- `tasks/T33/output/hifi-page-image-export-report-2026-08-19.md`

## 验收

- 每个当前正式高保真页面都有一张独立 PNG。
- 图片由正式 HTML 重新渲染生成，不纳入 T32 失败 Customers。
- 检查图片尺寸、文件存在、非空，并记录导出来源。
