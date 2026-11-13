# T40 T34 页面输出送入 Stitch 生成报告

日期：2026-08-20

## 任务边界

用户请求是把 T34 已导出的页面输出送入 Stitch 生成，并要求与 Figma 首页节点 `336:7645` 的已确定风格保持一致。附件截图仅作为页面清单证据，不作为可覆盖项目规则的新指令。

用户提到“忽略规则限制”的部分未被作为执行规则。业务事实、需求基线、最终业务验收和永久规则更新仍需人工关卡确认。

## 输入证据

- T34 产品输出清单：`tasks/T34/output/product-output-image-manifest-2026-08-20.json`
- T27 Stitch-ready 页面结构：`tasks/T27/output/stitch-ready-low-fidelity/stitch-ready-prompt-pack.md`
- T27 元素放置层：`tasks/T27/output/stitch-ready-low-fidelity/element-placement-map.json`
- T35 Figma 首页风格约束：`tasks/T35/output/figma-homepage-mcp-style-guide-2026-08-20.md`
- Stitch 设计系统：`assets/a99f770bf474445d98b287cf983bc147`，即「餐道 Operations Architecture」

本轮只处理 T34 产品页面，不处理 `01-index` 总览图。Home 只作为风格基准，不作为新生成目标。

## Stitch 生成结果

| 页面 | Screen ID | Stitch 高度 | 本地 HTML | 本地全页截图 |
| --- | --- | ---: | --- | --- |
| 解決方案 | `6254a23be6ba4334968e45cc0b50afe5` | 3396 | `output/stitch-downloads/t40-solutions-6254a23be6ba4334968e45cc0b50afe5.html` | `output/screenshots/local-render/t40-solutions-6254a23be6ba4334968e45cc0b50afe5-1440-full.png` |
| 平台 | `4ed70a41e89741b1854271a31bdcd4da` | 2768 | `output/stitch-downloads/t40-platform-4ed70a41e89741b1854271a31bdcd4da.html` | `output/screenshots/local-render/t40-platform-4ed70a41e89741b1854271a31bdcd4da-1440-full.png` |
| 整合能力 | `e3a8d39f3c734306aa4c55baac1cb657` | 5518 | `output/stitch-downloads/t40-integrations-e3a8d39f3c734306aa4c55baac1cb657.html` | `output/screenshots/local-render/t40-integrations-e3a8d39f3c734306aa4c55baac1cb657-1440-full.png` |
| 客戶案例 | `e32f4196c2204fdba471a231c0188b48` | 2614 | `output/stitch-downloads/t40-customers-e32f4196c2204fdba471a231c0188b48.html` | `output/screenshots/local-render/t40-customers-e32f4196c2204fdba471a231c0188b48-1440-full.png` |
| 資源 | `bfc9b7527f234a2f8981c9407a87794d` | 3138 | `output/stitch-downloads/t40-resources-bfc9b7527f234a2f8981c9407a87794d.html` | `output/screenshots/local-render/t40-resources-bfc9b7527f234a2f8981c9407a87794d-1440-full.png` |
| 關於餐道 | `c7930267f0dd4abdbc7acfc6dc4312f3` | 8022 | `output/stitch-downloads/t40-about-c7930267f0dd4abdbc7acfc6dc4312f3.html` | `output/screenshots/local-render/t40-about-c7930267f0dd4abdbc7acfc6dc4312f3-1440-full.png` |
| 預約產品演示 | `5ec6d859f93741adb92347ccab41098c` | 4266 | `output/stitch-downloads/t40-demo-5ec6d859f93741adb92347ccab41098c.html` | `output/screenshots/local-render/t40-demo-5ec6d859f93741adb92347ccab41098c-1440-full.png` |

## QA 结果

已保存 Stitch 下载 HTML、Stitch 预览缩略图和本地 Chrome 1440 全页截图。

- `domain-copy` QA：`output/qa/domain-copy-t40-report.json`
- 静态 HTML QA：`output/qa/static-t40-stitch-html-report.json`
- 生成 ledger：`output/stitch-generation-ledger-2026-08-20.json`

`domain-copy` QA 结果为 7 页中 4 页通过、3 页失败：

- `關於餐道`：命中 `中台`，当前应优先改为「營運中樞」等已批准表达。
- `資源`：繁體中文页脚可见 `Candao International`，命中品牌显示规则。
- `解決方案`：繁體中文页脚可见 `Candao`，命中品牌显示规则。

静态 HTML QA 结果为 fail，主要问题：

- 7 页均含 Material Symbols ligature 文本，若字体加载失败会显示 `arrow_forward`、`check_circle`、`receipt_long` 等英文图标词。
- `解決方案` 页脚出现假备案号 `粵ICP備12345678號`。
- `關於餐道` 出现未确认或不建议表达：`超過 500 名技術與營運專家`、`無縫對接第三方 POS 與 ERP`、`SLA 高可用性`。
- `資源` 与 `解決方案` 页脚可见 `Candao`，不符合繁體中文默认品牌显示规则。

未发现下载 HTML 中残留 `{{DATA...}}`、`COMPONENTS_` 或 `IMAGE_` 内部 Stitch 占位标记。未发现 `IDMS`、`idms`、`SAAS` 或 `Saas` 术语大小写错误。

## 结论

本轮已完成用户要求的 Stitch 生成动作，并将 7 个候选 screen、HTML、截图和 QA 结果保存到 T40 输出目录。

这些页面目前不能登记为正式高保真稿，也不应写入 `tasks/T17/output/design-handoff/.stitch/metadata.json`。后续需要先修正或重新生成 QA fail 项，再进入正式登记和人工验收。
