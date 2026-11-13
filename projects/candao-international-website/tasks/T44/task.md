# T44 - Solutions 100% 内容覆盖与首页风格重做

## Status

done

## Goal

按用户要求重新执行 `Solutions / 解決方案` 高保真输入：内容覆盖率必须达到 100%，并且视觉风格必须贴合已确定的首页设计风格，而不是沿用 T42 的 Stitch 概括页。

## Scope

- 以 T27 `solutions.html` 为内容 source of truth。
- 以 T35 首页 MCP 风格提取结果作为视觉风格基准。
- 生成一版本地可控的 `Solutions` 高保真 HTML，用于 100% 内容覆盖和首页风格验证。
- 运行内容覆盖、domain-copy、静态风险、截图渲染 QA。
- 输出可作为下一轮 Stitch 上传 / 生成输入的 HTML、截图和 prompt。
- 直接调用 Stitch 生成新 screen，并对同一 screen 做一次外科式 edit；保存下载件、QA 和写回限制说明。

## Hard Requirements

- 内容契约覆盖率必须为 100%，不得以 95% 或“基本覆盖”通过。
- Header 必须包含 `首頁 / 解決方案 / 平台 / 整合能力 / 客戶案例 / 資源 / 關於餐道 / 預約演示`。
- 必须保留 T27 Solutions 的 Hero、场景链路、常见营运问题、场景导览、默认场景详情、能力承接、CTA 与 Footer。
- 必须贴合 T35 首页风格：暗色餐饮营运场景、企业级产品工作台、`#528dff` 关键强调、深色平台段、白底业务内容段、8px 默认按钮。
- 不得出现 `Candao`、假备案、未确认数字、Material Symbols ligature 可见文本、未授权 Logo 或假产品截图。

## Out of Scope

- 不直接上传文件到 Stitch，除非用户明确批准上传清单。
- 不登记为正式高保真，除非 QA 全部通过且后续人工确认。

## Required Output

- `output/html/solutions-home-style-100-coverage.html`
- `output/screenshots/solutions-home-style-100-coverage-1440-full.png`
- `output/qa/solutions-home-style-100-content-coverage-2026-08-23.json`
- `output/qa/domain-copy-t44-solutions-report.json`
- `output/qa/static-t44-solutions-home-style-report.json`
- `output/stitch-input/solutions-home-style-100-stitch-prompt-2026-08-23.md`
- `output/solutions-home-style-100-execution-report-2026-08-23.md`
- `output/stitch-output/stitch-screen-b9cd15b7-solutions-cv4.html`
- `output/stitch-output/stitch-screen-b9cd15b7-solutions-cv4-dom-edit-applied.html`
