# T43 Solutions 低保真内容还原诊断

## 结论

用户反馈成立。T42 的 Stitch 输出不是单纯“视觉不够像”，而是把 T27 `Solutions / 解決方案` 低保真页面压缩成了一个概念型场景页：Hero 主标题基本保留，但页面的内容结构、场景入口、问题卡、能力承接和下一步导流大量丢失。

本轮不应继续盲目重试同类短 prompt。下一步应把“内容还原”设为硬门槛，优先改走本地 HTML / React 可控高保真，再按审批流程上传 HTML / PNG / 内容契约到 Stitch；若仍使用 Stitch 文本生成，只能作为低置信试验，不应登记为正式稿。

## 证据来源

- T27 低保真源页面：`tasks/T27/output/stitch-ready-low-fidelity/solutions.html`
- T27 页面提示词：`tasks/T27/output/stitch-ready-low-fidelity/stitch-ready-prompt-pack.md`
- T27 元素放置地图：`tasks/T27/output/stitch-ready-low-fidelity/element-placement-map.json`
- T42 Stitch 输出：`tasks/T42/output/stitch-downloads/t42-solutions-fdf1d4f894a8483885f7b3ba4c1c566c.html`
- T42 重试报告：`tasks/T42/output/solutions-prompt-v2-stitch-retry-report-2026-08-20.md`
- 本轮覆盖率报告：`tasks/T43/output/qa/solutions-lowfi-vs-t42-stitch-content-coverage-2026-08-23.json`

## 覆盖率结果

| 检查项 | T27 低保真 | T42 Stitch | 结论 |
| --- | ---: | ---: | --- |
| 总内容契约 | 69 / 69 | 23 / 69 | fail |
| 可见文本长度 | 881 | 540 | 只保留约 61.3% |
| Header 导航 | 8 / 8 | 6 / 8 | 缺 `資源`，CTA 被改写 |
| Hero 定位 | 5 / 5 | 5 / 5 | 通过 |
| Hero 场景链路 | 9 / 9 | 3 / 9 | 弱覆盖 |
| 常见营运问题 | 10 / 10 | 0 / 10 | 整段缺失 |
| 场景导览六入口 | 8 / 8 | 0 / 8 | 整段缺失或被改写 |
| 场景详情面板 | 11 / 11 | 0 / 11 | 整段缺失 |
| 承接能力与下一步 | 3 / 3 | 0 / 3 | 整段缺失 |
| 受保护产品术语 | 6 / 6 | 2 / 6 | 缺 `DMS / iDMS`、`Finance Center`、`SaaS`、`AMS / Connector` |
| 风险词 | pass | fail | 出现 `Candao`、`arrow_forward` |

T42 保住了 Hero 的一句话，但丢掉了低保真的页面角色：访客应从“我遇到哪类 O2O 营运问题”进入，再看到“问题 -> 能力 -> 结果 -> 下一步”的链路。现在 Stitch 输出变成两张泛化的营运痛点卡，既不足以承接场景，也不足以导向 Platform 或 Customers。

## 主要丢失内容

1. `常見營運問題` 三卡消失：`多平台訂單履約`、`門店與餐單營運`、`配送營運與對賬` 未被保留。
2. `場景導覽` 六入口被重命名或压缩：低保真的 `多平台外賣訂單`、`堂食掃碼與自有點餐`、`配送營運與履約`、`財務對賬與報表`、`會員與營運數據`、`門店與餐單管理` 没有按原结构出现。
3. 场景详情的 `高峰訂單處理鏈路` 与 `場景拆解` 缺失。
4. 关键链路 `漏單與重複維護 -> OMS / DMS 承接 -> 總部追蹤狀態` 缺失。
5. `承接能力：OMS、Menu Center、DMS / iDMS、Finance Center。` 缺失。
6. `查看客戶案例` 导流缺失。
7. 页脚出现英文品牌残留 `Candao`，且 Material Symbols ligature `arrow_forward` 可见。

## 原因判断

T42 的 Prompt v2 学到了 Stitch 的“短、清晰、少 token 重复”技巧，但它解决的是生成器理解负担，不是内容还原问题。对于这类页面，低保真本身已经是结构化内容资产，继续用纯文本 prompt 会让 Stitch 优先生成一个看起来完整的视觉概念，而不是忠实迁移模块。

本轮失败更像输入方式错误：

- 低保真 HTML 没有作为 source-of-truth DOM 契约被强制保留。
- T41 的短 prompt 策略削弱了完整模块清单，适合做视觉方向试点，不适合做内容还原。
- Stitch 自动把场景标签改成更短的泛化标签，破坏了 T27 已确定的场景边界。
- T36 / T42 已连续证明 `edit_screens` 在当前项目里不能稳定写回可下载 HTML，因此不能依赖“生成后再修完整”。

## 新的验收门槛

后续任何 Solutions 高保真候选稿，至少需要达到：

- 内容契约覆盖率必须达到 100%，不得遗漏任何低保真契约项。
- Header 导航 8 / 8，包括 `資源` 与 `預約演示`。
- 必须保留 4 个页面模块：Hero、常见营运问题、场景导览、Footer。
- 必须保留 6 个场景入口的原始命名。
- 必须保留产品术语：`OMS`、`Menu Center`、`DMS / iDMS`、`Finance Center`、`SaaS`、`AMS / Connector`。
- 不得出现 `Candao`、假备案、未确认数字、Material Symbols ligature 可见文本。
- 若为视觉压缩，必须有逐模块映射说明，不能直接删除低保真内容。

## 推荐重试路径

推荐路径 A：本地可控高保真优先。先用 T27 `solutions.html` 作为 DOM 内容源，结合 T35 首页风格和现有设计系统，在本地生成可控 HTML / React 高保真。通过内容覆盖率、domain-copy、静态检查和截图 QA 后，再决定是否上传 Stitch。

路径 B：上传低保真 HTML + 1440 PNG + 内容契约到 Stitch。这个更适合让 Stitch 参考现有页面，而不是凭 prompt 概括。但根据 `stitch::upload-to-stitch` 规则，上传前必须列出文件路径、大小、类型，并获得用户明确批准。

路径 C：继续文本生成。只能使用 `solutions-content-restoration-contract-2026-08-23.md` 这种强结构 prompt，且生成后立即跑覆盖率；若低于 100%，不得进入 edit 或正式登记。

## 本轮输出

- 覆盖率 JSON：`tasks/T43/output/qa/solutions-lowfi-vs-t42-stitch-content-coverage-2026-08-23.json`
- 低保真可见文本：`tasks/T43/output/qa/solutions-lowfi-visible-text-2026-08-23.txt`
- T42 可见文本：`tasks/T43/output/qa/solutions-t42-stitch-visible-text-2026-08-23.txt`
- 内容还原契约：`tasks/T43/output/stitch-input/solutions-content-restoration-contract-2026-08-23.md`
- 上传审批清单：`tasks/T43/output/stitch-input/solutions-upload-approval-request-2026-08-23.md`
