# 设计输入包预检

日期：2026-08-16  
范围：`tasks/T17/output/design-handoff/` 与 `tasks/T17/output/design-ready-wireframe/`

## 结论

本轮需要做到交付结构重构：保留 T25 内容核对稿作为业务依据，新建设计执行输入包，不覆盖原低保真目录。

## 预检结果

| 项目 | 结果 | 处理 |
|---|---|---|
| 现有低保真 HTML | 已找到 `tasks/T17/output/low-fidelity-wireframe-prototype/index.html` | 作为内容和页面结构来源，不直接交给 Stitch 美化 |
| 8 个低保真页面 | 已在单一 HTML 中找到 Home、Solutions、Platform、Integrations、Customers、Resources、About、Demo | 转换成 `design-ready-wireframe/` 独立页面 |
| 首页风格参考图 | 未找到 `tasks/T17/input/references/home-style-reference.png`，也未找到 1652×2047 母版 | 不生成替代图；记录到 `missing-assets.md` 与 `content-missing.yaml` |
| 产品截图目录 | 未找到可直接标记为真实产品截图的公开截图目录 | 暂以产品截图位和素材缺口承接，不让模型重绘后台 |
| 客户 Logo | 已找到 `assets/logo/candao-blue-logo.svg`；其他客户 Logo 文件未集中归档 | 餐道 Logo 可用；客户 Logo 需整理授权文件 |
| 客户案例素材 | PPT 数据和实名案例已由人工确认可用；未找到独立案例图片包 | Customers 可写结构；图片和 Logo 进入素材缺口 |
| 公司图片 | 未找到正式公司图片包 | About 保留图片位，进入素材缺口 |
| 产品视频 | 未找到 `.mp4`、`.mov`、`.webm` 等视频文件 | Platform 视频 Carousel 只做入口和素材需求 |
| Remotion 项目 | 未找到当前官网专属 Remotion 项目 | 本轮只输出 storyboard，不创建完整视频 |
| Stitch Skills | 本机已存在 Stitch 相关 Skills；外部 Stitch 写入需用户确认 | 本轮只生成 Prompt Pack，不主动上传或批量生成 |
| 旧低保真目录 | 不覆盖、不删除 | 新产物进入 `design-handoff/` 与 `design-ready-wireframe/` |

## 本轮执行边界

- 可以自动生成内容分层、模块 manifest、设计系统、Prompt Pack、Motion storyboard 和设计执行版低保真。
- 不可以自行批准 H3-01 / H3-02。
- 不可以用 AI 图片替代真实产品截图、客户 Logo、认证、客户数据或产品视频。
- 不可以把历史 Stitch / Figma 截图自动当作用户指定首页母版，只能列为候选参考。
