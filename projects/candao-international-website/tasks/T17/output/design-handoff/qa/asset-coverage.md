# 素材覆盖 QA

日期：2026-08-16

## 可用

- `assets/logo/candao-blue-logo.svg`
- PPT 授权指标和实名客户案例事实

## 缺失或待清理

- 首页视觉母版缺失。
- 真实产品截图缺失。
- 产品视频缺失。
- 客户 Logo 文件包待整理。
- 客户案例图片缺失。
- 公司图片缺失。
- 认证文件需要源文件确认后使用。

## 处理结果

设计执行版低保真只保留产品画面、视频和媒体位置，不生成假资产。

## 2026-08-17 补充检查

- `asset-manifest.yaml` 共 9 个素材项，均有 `content_description`。
- 每个素材项均已绑定明确主模块；跨模块用途写入 `related_modules`。
- 未发现 `P02-P03`、`C02-C03`、`C03-C04`、`A01-A06` 这类范围式模块 ID。
- 结果已纳入 `tasks/T26/output/design-input-layer-final-verification-2026-08-17.json`。
