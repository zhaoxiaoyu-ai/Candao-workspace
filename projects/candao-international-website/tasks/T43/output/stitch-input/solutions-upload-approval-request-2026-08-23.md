# Solutions Upload Approval Request

## Purpose

如果下一轮决定把低保真内容以更完整的形式交给 Stitch，应优先上传低保真 HTML、1440 PNG 和内容还原契约，而不是只发送文本 prompt。

根据 `stitch::upload-to-stitch` 规则，上传前必须先列出文件路径、大小和类型，并获得用户明确批准。本文件只是审批清单，本轮未执行上传。

## Candidate Files

| 文件 | 类型 | 大小 | 用途 |
| --- | --- | ---: | --- |
| `projects/candao-international-website/tasks/T27/output/stitch-ready-low-fidelity/solutions.html` | `text/html` | 7,873 bytes | T27 Solutions 低保真源 DOM，作为内容结构 source of truth |
| `projects/candao-international-website/tasks/T34/output/images/03-solutions-low-fidelity-1440-full.png` | `image/png` | 578,348 bytes | 1440 宽完整页面视觉参考，帮助 Stitch 看到模块顺序和页面密度 |
| `projects/candao-international-website/tasks/T43/output/stitch-input/solutions-content-restoration-contract-2026-08-23.md` | `text/markdown` | 5,038 bytes | 模块、术语、CTA 和 QA 门槛的内容还原契约 |

## Recommended Upload Intent

上传目的应写为：

> Use these files as source-of-truth references for rebuilding the `Solutions / 解決方案` desktop page. Preserve the section structure, exact scenario labels, protected product terms, navigation, CTA routing, and footer copy from the HTML and contract. Use the PNG only as a visual layout reference. Do not summarize, rename, or omit low-fidelity content.

## Approval Needed

请用户明确批准后再运行上传：

- 批准上传以上 3 个文件到 Stitch Project `10888304674441209287`。
- 确认可使用当前 Stitch API key 或提供可用凭证。
- 确认上传后是否只做 `Solutions` 单页，不批量处理其他页面。

## Not Approved Yet

当前状态：未批准，未上传。
