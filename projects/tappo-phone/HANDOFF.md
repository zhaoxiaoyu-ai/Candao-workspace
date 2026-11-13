# Handoff

## Next Action

2026-07-17 最新 Tappo Station 支付方式回显已纠正并按追加反馈完成：用户指出此前落错项目，本轮已撤回误放到 `nHamLH3qlZYFXVC0OVxNqc / 522:2427` 的新增节点，并恢复我移动过的标题和列表位置。正确目标为 `Tappo Station / anMsqgZYi8ZqmJXZah78KI / UI`，已在 `點餐-堂食/付款 / 121:21195` 与 `點餐-堂食/付款/提示 / 121:22298` 中处理。保留原有 `Cash / Kpay / Stripe / Adyen / Bbmsl / QFpay / mPay`，在 `mPay` 下方新增分隔、`其他支付方式` 标题、说明图标，并回显 `WeChat Pay / Alipay / Octopus / PayMe`。完整说明文案 `由後台配置，用於記錄收款方式；實際收款請於對應渠道完成。` 已收纳到说明图标，不在画面展开。新增行复用目标文件既有支付行结构；标题旁复用现有 `Container/icon/提示` 组件实例；文字和行背景绑定本地 POS tokens `POS color/primary`、`POS color/color-text-65%`、`POS color/color-text-8%`；WeChat Pay 与 Alipay 使用 icon-only SVG，Octopus 与 PayMe 当前未找到可直接使用的官方 SVG，已通过 Figma asset upload 改为完整 PNG 图形资产，不再使用截不全的裁切截图，也不显示文字版 wordmark。自动复核两个状态均为旧裁切节点 0、外露长说明文本 0、说明图标 1；Octopus 图片 hash 前缀 `0fe963d790e3`，PayMe 图片 hash 前缀 `cc58b0a4bf09`。当前限制：Figma MCP 无法加载 `OPPO Sans 4.0`，新增文字暂用可编辑的 `Noto Sans HK` 回退。正确记录：`tasks/T02/output/tappo-station-pos-payment-method-recall-2026-07-17/tappo-station-pos-payment-method-recall-figma-2026-07-17.md`；评审页：`tasks/T02/output/tappo-station-pos-payment-method-recall-2026-07-17/review.html`；最终截图：`station-payment-after-complete-icon-main-2026-07-17.png` 与 `station-payment-after-complete-icon-prompt-2026-07-17.png`；局部核对：`station-payment-after-complete-icon-main-crop-payment-list-2026-07-17.png`。旧 `tasks/T02/output/tappo-station-payment-method-recall-2026-07-17/` 已标记为撤回勿用。

2026-07-17 最新追加反馈已完成：用户指出很多文字未绑定 Design Tokens，并补充文字颜色应使用“颜色加透明度”的 Token。本轮已在正确 MOS 文件 `Tappo MOS / 1qe8d4ll9wLnxPAsiJAoa9 / 0:1` 的三套支付设置状态 `2254:32924`、`2256:33130`、`2256:33667` 中只回绑可见文字颜色变量，不改文案、不改布局、不重建组件；使用已有 `Global/Colors/Neutral/Text/colorText-95`、`Global/Colors/Neutral/Text/colorTextSecondary-65`、`Global/Colors/Neutral/Text/colorTextTertiary-45`、`Global/Colors/Neutral/Text/colorTextLightSolid`、`Global/Colors/Brand/colorPrimaryText` 和 `Component/Progress/progressDefaultColor`，未新建 Token。自动复核：三套状态可见文字 75/94/78，未绑定颜色变量 0/0/0。截图见 `tasks/T02/output/mos-payment-logo-assets-2026-07-17/figma-main-token-bound-2026-07-17.png`、`figma-add-modal-token-bound-2026-07-17.png` 和 `figma-disable-confirm-token-bound-2026-07-17.png`。

2026-07-17 最新命名记忆已写入：后续操作必须先按 Figma 项目文件名归属选择项目上下文，不能混淆。对应关系为 `Tappo App / Tappo app / Tappo Pad / Tappo pad / TAPPO POS / Tappo POS = Tappo Station`；`Tappo phone = Tappo Pulse`；`MOS = Tappo MOS`；`微官网 = Tappo微官网`。`Tappo Phone` 仅作为旧命名，映射到 `Tappo Pulse`；`projects/tappo-phone/` 仅作为历史技术路径保留。记录见 `tasks/T02/output/tappo-product-naming-correction-2026-07-17.md`。

2026-07-17 最新活跃请求已完成：用户指出 TAPPO MOS 支付方式里的微信和支付宝 icon 明显有问题且不是 SVG，要求调整后直接替换 UI 上的图片。本轮已在正确 MOS 文件 `Tappo MOS`（`1qe8d4ll9wLnxPAsiJAoa9 / 0:1`）直接替换可见 UI：主态表格 `2254:32924`、弹窗背景表格 `2256:33130`、新增支付方式弹窗默认图标选项均已清除旧字母占位；微信支付与支付宝改为 SVG 节点，八达通与 PayMe 使用此前入库的真实品牌图片；白底容器绑定 MOS 本地颜色变量 `Global/Colors/Neutral/Background/colorBgContainer` 与 `Global/Colors/Neutral/Border/colorBorderSecondary-8`。复核结果：`2254:32924` 与 `2256:33130` 中旧 `Logo letter / 微信支付`、`Logo letter / 支付寶`、`Logo letter / 八達通`、`Logo letter / PayMe` 数量均为 0。记录和截图见 `tasks/T02/output/mos-payment-logo-assets-2026-07-17/mos-payment-logo-assets-figma-2026-07-17.md`、`figma-main-after-svg-replace-2026-07-17.png`、`figma-modal-after-svg-replace-2026-07-17.png`。

2026-07-17 最新追加反馈已完成：用户指出前序设计未严格遵循原型内容，高亮提示文案被扩写，并额外新增了 `最後操作時間` 字段。本轮已在正确 MOS 文件 `Tappo MOS / 1qe8d4ll9wLnxPAsiJAoa9 / 0:1` 的三套状态 `2254:32924`、`2256:33130`、`2256:33667` 中修正：其他支付方式区块描述与高亮提示改回原型语义；表格移除 `最後操作時間` 表头和所有 `2026-07-*` 时间值；字段保留为 `排序 / 圖標 / 支付方式 / 英文名稱 / 狀態 / 備註 / 操作`；补回原型里的 `已有訂單記錄 / 暫無訂單記錄`；新增支付方式弹窗图标说明改回“不在此表单内配置排序字段”。Switch、logo、表格底纹、操作链接未重建，三套状态旧扩写提示 0、最后操作时间 0、日期值 0、旧字母 logo 占位 0。截图见 `tasks/T02/output/mos-payment-logo-assets-2026-07-17/figma-main-prototype-content-realigned-2026-07-17.png`、`figma-add-modal-prototype-content-realigned-2026-07-17.png` 和 `figma-disable-confirm-prototype-content-realigned-2026-07-17.png`。

上一轮表格左对齐修正仍保留为历史上下文：用户指出把表格改成全居中导致格式乱，应除操作列外左对齐且行内容垂直居中，并保持业务组件样式稳定；主态表格 `2269:33709` 和弹窗背景表格 `2269:34471` 曾恢复原业务表格列起点，截图为 `figma-main-table-left-align-row-center-final-2026-07-17.png` 和 `figma-modal-table-left-align-row-center-final-2026-07-17.png`。当前最新验收应以后续“原型内容回收修正”为准。

2026-07-17 上一轮 TAPPO MOS 支付设置修正已完成：继续在 Tappo 的 `25.1213 MOS v2` 文件执行，正确目标仍为 `1qe8d4ll9wLnxPAsiJAoa9 / 0:1`。本轮修正既有支付设置节点：主态 `2254:32924`、新增支付方式弹窗态 `2256:33130`、停用支付方式小提示态 `2256:33667`。已保留原支付服务和硬件/支付服务复用页，不再新增硬件与支付服务设计；其他支付方式区块补齐高亮说明、排序列和支付方式 icon，表格改为复用账号管理源表格样式并清除旧英文操作残留，状态列继续使用 MOS Switch 组件，PayMe 为关闭态；新增支付方式弹窗改为复用既有大业务弹窗尺寸，两个 `input-title` 组件横向填充弹窗内容宽度，并提供微信支付、支付宝、八达通、PayMe、文字图标默认选项。评审记录：`tasks/T02/output/mos-payment-settings-revision-2026-07-17/mos-payment-settings-revision-figma-2026-07-17.md`；最终截图目录：`tasks/T02/output/mos-payment-settings-revision-2026-07-17/`。下一步是用户人工评审 Figma 节点 `2254:32924`、`2256:33130`、`2256:33667`，如有反馈再微调字段、文案或组件状态。

2026-07-07 的 Tappo微官网请求保留为已完成历史上下文，不再是最新活跃请求；历史执行记录里曾混用 `TAPPO / Tappo Pulse 微官网`，后续统一按 `Tappo微官网` 理解。该轮通过已登录 Lovable 网页 Chat 执行：首页 hero/动态图片改为产品相关、更清晰自然、低饱和、弱 AI 感；下方版式更灵活，同时保留 Menu/Ordering 和 Reservation 两个入口。Lovable 返回 clean typecheck，并修改首页和 `/menu`：hero 图为汉堡/饮品/外带餐盒产品摄影，首页下方使用浮层卡片、操作条、不对称区块、标签和图文条带，`/menu` 是轻量空状态，`/booking` 保留订座表单。执行记录：`tasks/T02/output/tappo-microsite-lovable-natural-product-visual-pass-2026-07-07.md`；prompt：`tasks/T02/output/tappo-microsite-lovable-natural-product-visual-prompt-2026-07-07.md`；截图：`tasks/T02/output/lovable-natural-product-home-after-submit-2026-07-07.png`、`tasks/T02/output/lovable-natural-product-menu-tab-after-auth-2026-07-07.png`、`tasks/T02/output/lovable-natural-product-booking-tab-2026-07-07.png`。不要把 2026-07-06 较厚重的 Image2 资产方向作为当前执行目标。

The TAPPO Pulse reservation empty state work from earlier on 2026-07-07 remains completed context, but it is no longer the latest active request. The empty state `暫無預約` was supplemented with an Image2-generated illustration in target Figma file `nHamLH3qlZYFXVC0OVxNqc / 0:1`; empty-state frame is `1500:3577`, and illustration node is `1508:3367` named `Empty illustration / Image2`. The source Image2 PNG, transparent PNG, Figma screenshot, and record are saved in `tasks/T02/output/tappo-pulse-booking-empty-state-image2-2026-07-07.md`. Current unresolved item remains font tooling: official Figma MCP cannot load `OPPO Sans 4.0`, and the Figma Apps connector still returns `UNAUTHORIZED / Reauthentication required`; this version uses `Noto Sans TC` as an editable fallback.

For the Tappo微官网 request, Lovable MCP preflight confirmed that Codex can configure the official Lovable MCP URL but cannot complete Lovable OAuth because Codex is not currently a Lovable-supported MCP OAuth client. The target Lovable project has completed multiple passes through the logged-in Lovable web project. Latest scope correction still stands: keep both homepage entry cards for Menu/Ordering and Reservation; do not build a full menu/ordering content page; keep Reservation and its form flow. The latest 2026-07-07 visual pass has now been sent and applied. After that successful run, Lovable again shows `0 free credits remaining today` and `Upgrade Now`, so do not send another Lovable generation prompt until credits reset or the user explicitly approves upgrading. Do not click Upgrade and do not Publish without user confirmation.

Latest TAPPO MOS 支付设置 Figma 记录: `tasks/T02/output/mos-payment-settings-revision-2026-07-17/mos-payment-settings-revision-figma-2026-07-17.md`.
Latest TAPPO MOS 支付设置截图目录: `tasks/T02/output/mos-payment-settings-revision-2026-07-17/`.
Latest TAPPO MOS 支付方式真实 logo 资产记录: `tasks/T02/output/mos-payment-logo-assets-2026-07-17/mos-payment-logo-assets-figma-2026-07-17.md`.
Latest TAPPO MOS 支付方式真实 logo 评审页: `tasks/T02/output/mos-payment-logo-assets-2026-07-17/logo-assets-review.html`.
Latest TAPPO 项目命名纠正记录: `tasks/T02/output/tappo-product-naming-correction-2026-07-17.md`.
Latest icon 素材来源库: `tasks/T02/output/icon-source-library-2026-07-17.md`.
Latest TAPPO Station 支付方式回显正确记录: `tasks/T02/output/tappo-station-pos-payment-method-recall-2026-07-17/tappo-station-pos-payment-method-recall-figma-2026-07-17.md`.
Latest TAPPO Station 支付方式回显评审页: `tasks/T02/output/tappo-station-pos-payment-method-recall-2026-07-17/review.html`.
Latest support artifact: weekly report for 2026-05-29 created at `tasks/T02/output/weekly-report-2026-05-29.md`.
Additional support artifact: AI agent PM transition note created at `tasks/T02/output/ai-agent-pm-transition-2026-06-05.md`.
Deep support artifact: AI agent PM transition deep note created at `tasks/T02/output/ai-agent-pm-transition-deep-2026-06-05.md`.
New design planning artifact: `tasks/T02/output/tappo-phone-ui-visual-unification-plan-2026-06-05.md`.
Taste skill install note: `tasks/T02/output/taste-skill-install-note.md`; restart Codex to expose `design-taste-frontend`.
XHS Top10 skills install note: `tasks/T02/output/xhs-top10-skills-install-note-2026-06-05.md`; 9/10 mentioned skills installed, `frontend-skill` unavailable in current OpenAI skills source.
Latest App Figma implementation note: `tasks/T02/output/figma-app-ui-implementation-note-2026-06-05.md`.
Weekly report for 2026-06-05: `tasks/T02/output/weekly-report-2026-06-05.md`.
Latest local preview restart note: `tasks/T02/output/local-preview-restart-2026-06-08.md`.
Latest App style anchor brief: `tasks/T02/output/tappo-app-style-anchor-brief-2026-06-08.md`.
Latest module style classification: `tasks/T02/output/tappo-app-module-style-classification-2026-06-08.md`.
Latest intelligent visual anchor decision: `tasks/T02/output/tappo-app-intelligent-visual-anchor-decision-2026-06-08.md`.
Latest asset style boundaries: `tasks/T02/output/tappo-app-asset-style-boundaries-2026-06-08.md`.
Latest App Style Kit: `tasks/T02/output/tappo-app-style-kit-v0.1-2026-06-08.md`.
Latest first asset batch brief: `tasks/T02/output/tappo-app-first-asset-batch-brief-2026-06-08.md`.
Latest output language rule: `tasks/T02/output/output-language-rule-2026-06-08.md`.
Latest reviewable output rule: `tasks/T02/output/reviewable-output-rule-2026-06-08.md`.
Latest D01-D04 asset direction review: `tasks/T02/output/d01-d04-asset-direction-review-2026-06-08.md`.
Latest D01-D04 asset direction review v02: `tasks/T02/output/d01-d04-asset-direction-review-v02-2026-06-08.md`.
Latest D01-D04 asset direction review v03: `tasks/T02/output/d01-d04-asset-direction-review-v03-2026-06-08.md`.
Latest D01-D04 asset direction review v04: `tasks/T02/output/d01-d04-asset-direction-review-v04-2026-06-08.md`.
Latest D01-focused asset direction review v05: `tasks/T02/output/d01-d04-asset-direction-review-v05-2026-06-09.md`.
Latest D02-focused asset direction review v06: `tasks/T02/output/d01-d04-asset-direction-review-v06-2026-06-09.md`.
Latest first App icon and micro-illustration batch review v01: `tasks/T02/output/tappo-app-first-asset-batch-review-v01-2026-06-09.md`.
Latest I-series icon review v03: `tasks/T02/output/tappo-app-i-series-icon-review-v03-2026-06-09.md`.
Latest I-series icon review v04: `tasks/T02/output/tappo-app-i-series-icon-review-v04-2026-06-09.md`.
Latest review workflow cleanup: `tasks/T02/output/review-workflow-cleanup-2026-06-09.md`.
Latest clickable output link rule: `tasks/T02/output/clickable-output-link-rule-2026-06-09.md`.
Latest clickable preview link fix: `tasks/T02/output/clickable-preview-link-fix-2026-06-09.md`.
Latest output review and visualization long-term rule: `tasks/T02/output/output-review-visualization-long-term-rule-2026-06-09.md`.
Latest Tappo Pulse iOS App Store 尺寸修正: `tasks/T02/output/tappo-pulse-ios-appstore-size-fix-2026-07-30.md`.
Latest Tappo Pulse 应用市场素材补充: `tasks/T02/output/tappo-pulse-app-market-store-assets-2026-07-02.md`.
Latest TAPPO 微官网 Lovable MCP 前置说明: `tasks/T02/output/tappo-microsite-lovable-mcp-preflight-2026-07-06.md`.
Latest TAPPO 微官网 Lovable 网页执行记录: `tasks/T02/output/tappo-microsite-lovable-web-submit-2026-07-06.md`.
Latest TAPPO 微官网第二轮 Lovable 修正与验收记录: `tasks/T02/output/tappo-microsite-lovable-second-pass-2026-07-06.md`.
Latest TAPPO 微官网源码级证据补充: `tasks/T02/output/tappo-microsite-lovable-code-evidence-2026-07-06.md`.
Latest TAPPO 微官网单页范围变更: `tasks/T02/output/tappo-microsite-lovable-single-page-scope-2026-07-06.md`.
Latest TAPPO 微官网范围纠正与 Image2 视觉升级 brief: `tasks/T02/output/tappo-microsite-scope-correction-image2-visual-brief-2026-07-06.md`.
Latest TAPPO 微官网 Image2 方向评审页: `tasks/T02/output/tappo-microsite-image2-visual-direction-review-2026-07-06.html`.
Latest TAPPO 微官网 Image2 资产包: `tasks/T02/output/tappo-microsite-image2-asset-set-2026-07-06.md`.
Latest TAPPO 微官网 Lovable 额度复核: `tasks/T02/output/tappo-microsite-lovable-credit-recheck-2026-07-06.md`.
Latest TAPPO 微官网自然摄影方向需求整理: `tasks/T02/output/tappo-microsite-natural-photo-direction-2026-07-07.md`.
Latest TAPPO 微官网自然摄影方向评审页: `tasks/T02/output/tappo-microsite-natural-photo-review-2026-07-07.html`.
Latest TAPPO 微官网旧版自然风格参考截图: `tasks/T02/output/microsite-natural-style-review/old-preview-1178098f-clean-crop-2026-07-07.png`.
Latest TAPPO 微官网第二天 Lovable 额度复查阻塞记录: `tasks/T02/output/tappo-microsite-lovable-quota-recheck-blocked-2026-07-07.md`.
Latest TAPPO 微官网第二天 Lovable 额度放行后复查记录: `tasks/T02/output/tappo-microsite-lovable-quota-recheck-after-allow-2026-07-07.md`.
Latest TAPPO 微官网第二天 Lovable 额度放行后截图: `tasks/T02/output/lovable-quota-visible-after-allow-2026-07-07.png`.
Latest TAPPO 微官网自然产品图 Lovable 执行记录: `tasks/T02/output/tappo-microsite-lovable-natural-product-visual-pass-2026-07-07.md`.
Latest TAPPO 微官网自然产品图 Lovable 执行 prompt: `tasks/T02/output/tappo-microsite-lovable-natural-product-visual-prompt-2026-07-07.md`.
Latest TAPPO 微官网自然产品图首页截图: `tasks/T02/output/lovable-natural-product-home-after-submit-2026-07-07.png`.
Latest TAPPO 微官网菜单空状态截图: `tasks/T02/output/lovable-natural-product-menu-tab-after-auth-2026-07-07.png`.
Latest TAPPO 微官网订座表单截图: `tasks/T02/output/lovable-natural-product-booking-tab-2026-07-07.png`.
Latest TAPPO pulse 订座补充原型评审页: `tasks/T02/output/tappo-pulse-booking-prototype-review-2026-07-06.html`.
Latest TAPPO pulse 订座补充 Figma 交接说明: `tasks/T02/output/tappo-pulse-booking-figma-handoff-2026-07-06.md`.
Latest TAPPO PULSE 订座视觉评审稿: `tasks/T02/output/tappo-pulse-booking-pulse-style-review-2026-07-06.html`.
Latest TAPPO PULSE 订座视觉总览图: `tasks/T02/output/tappo-pulse-booking-pulse-style-overview-2026-07-06.png`.
Latest TAPPO PULSE 订座视觉评审说明: `tasks/T02/output/tappo-pulse-booking-pulse-style-review-note-2026-07-06.md`.
Latest Figma MCP 认证复核: `tasks/T02/output/tappo-pulse-booking-figma-auth-check-2026-07-06.md`.
Latest Figma 读取与写入尝试: `tasks/T02/output/tappo-pulse-booking-figma-read-write-attempt-2026-07-06.md`.
Latest TAPPO Pulse 订座 Figma 写入完成记录: `tasks/T02/output/tappo-pulse-booking-figma-write-2026-07-06.md`.
Latest TAPPO Pulse 订座 Auto Layout 修正记录: `tasks/T02/output/tappo-pulse-booking-figma-autolayout-fix-2026-07-06.md`.
Latest TAPPO Pulse 订座第二轮修正记录: `tasks/T02/output/tappo-pulse-booking-figma-revision2-2026-07-07.md`.
Latest TAPPO Pulse 订座空状态 Image2 插画记录: `tasks/T02/output/tappo-pulse-booking-empty-state-image2-2026-07-07.md`.

## Required Context

Read these files first:

1. `PROJECT.md`
2. `RULES.md`
3. `STATE.md`
4. `TASKS.md`
5. `tasks/T02/task.md`

## Current Task

- ID: `T02`
- Path: `tasks/T02/task.md`
- Status: `in_progress`

## Notes For Next AI

- Naming is a hard routing rule: `Tappo App / Tappo app / Tappo Pad / Tappo pad / TAPPO POS / Tappo POS = Tappo Station`; `Tappo phone = Tappo Pulse`; `MOS = Tappo MOS`; `微官网 = Tappo微官网`. When the user asks to operate on one of these projects, go to that corresponding project/Figma context and do not reuse another project's tokens/components unless explicitly requested.
- Current asset review target is `I01-I22 v04` I-series icons: prefer `tasks/T02/output/assets-review/current-review.html`, or open `tasks/T02/output/assets-review/current/index.html` / `tasks/T02/output/assets-review/current/preview.html`. `preview.png` remains available as a raw image backup. Older direction boards, `I01-I12 v01`, `I01-I22 v02`, and `I01-I22 v03` are retained only for comparison under `tasks/T02/output/assets-review/_archive/`. Do not migrate assets to `source/src/assets/generated/app-style-kit/` until the icon batch passes manual review.
- 2026-07-06 TAPPO 微官网任务：目标项目为 `https://lovable.dev/projects/8faa4bde-6332-499d-8c7c-32989d04759f`，原型为 `https://tappophone.netlify.app/merchant-h5/`。已在 `~/.codex/config.toml` 中保留 `[mcp_servers.lovable] url = "https://mcp.lovable.dev"`，但 `codex mcp list` 显示 `Not logged in`。标准 OAuth 失败信息为 Lovable 限制动态客户端注册；用 Cursor `CLIENT_ID` 尝试会打开 Lovable 授权页但显示 `Authorization failed - Lovable`，因此已恢复为官方标准 URL 配置。不要误判为用户未登录网页；网页已登录且已用于项目 Chat 执行。
- Lovable 官方文档当前支持 MCP OAuth 的客户端为 ChatGPT、Claude、Claude Code、Cursor、VS Code；Codex CLI 当前不可完成 OAuth。若要工具化操作 Lovable 项目，先让用户在受支持客户端连接 MCP。若继续本会话，可继续使用已登录 Lovable 网页 Chat 迭代；首轮与第二轮已完成，记录见 `tasks/T02/output/tappo-microsite-lovable-web-submit-2026-07-06.md` 和 `tasks/T02/output/tappo-microsite-lovable-second-pass-2026-07-06.md`。
- TAPPO 微官网当前 Lovable 预览入口：`https://8faa4bde-6332-499d-8c7c-32989d04759f.lovableproject.com/`。最新用户口径覆盖上一条“单页无入口”结论：点餐/电子菜单入口和订座预约入口都要保留；菜单/点餐内容页不需要做；订座是要的，`/booking` 预约表单能力要保留。2026-07-07 最新 Lovable 视觉执行后，首页两个入口仍保留，`/menu` 已改为轻量空状态，`/booking` 订座表单保留。未 Publish。
- 2026-07-07 最新 Lovable 执行：已清空输入框旧 prompt，发送自然产品图视觉 prompt 并成功生成。Lovable 返回首页与 `/menu` 重建、产品相关 hero 更新、clean typecheck；首页仍保留点餐/电子菜单和订座入口，`/menu` 已是空状态，`/booking` 订座表单保留。执行后 Lovable 再次显示 `0 free credits remaining today` 和 `Upgrade Now`，下一轮 Lovable 生成需等待额度恢复或用户明确升级。复核记录见 `tasks/T02/output/tappo-microsite-lovable-natural-product-visual-pass-2026-07-07.md`。
- 第二轮 Lovable `Code / Read only` 源码证据属于历史版本，但订座相关实现又被最新用户口径重新纳入范围：`src/styles.css` 的 `--tappo-*` theme token、`OPPO Sans 4.0` 字体回退、`src/components/AppShell.tsx` 的 `max-w-[430px] overflow-x-hidden`、订座供应商与表单分支仍是后续恢复/保留 `/booking` 的重要参考。
- 微官网原型内容拆解记录仍在 `tasks/T02/output/tappo-microsite-lovable-mcp-preflight-2026-07-06.md`。当前覆盖规则：保留品牌/门店图片轮播、门店信息、品牌简介、公告、设施/服务亮点、联系方式、地址、分享微官网、`Powered by Tappo` 页脚、点餐入口、订座入口和订座能力；不要做完整菜单内容页，不要展示菜品分类/菜品价格/加购/购物车/下单 CTA。
- 2026-07-07 最新视觉要求：用户反馈当前最新版本 AI 感太重、细节较差，目标应转向更清新自然的真实摄影感；旧 Lovable 预览 `1178098f` 反而更接近方向。后续 Lovable 图片可以继续用内置 `Image-2`，但提示词必须改为 `natural food photography`、`soft daylight`、`fresh and airy`、`believable texture`、`minimal retouching`，并明确排除 CGI、3D render、plastic gloss、hyper-real AI look、dramatic cinematic lighting、fake text/logo/watermark。2026-07-06 本地 Image2 资产包只保留作反例/过渡稿，不再作为执行方向。
- Tappo微官网视觉要求：外部 H5 / Web 端点，不是 Tappo Station 或 Tappo Pulse 内部运营页；对外命名用 `Tappo微官网`；主题 token 支持主色 + 主色透明度、辅助深色 + 深色透明度；字体优先 `OPPO Sans 4.0`，回退 `OPPO Sans`、`PingFang SC/TC`、system sans；图片若由 Lovable 内置 `Image-2` 生成，必须保持真实自然的摄影质感且不含假 logo、假文字、水印。
- Lovable 图片进入 Figma 的优先方式：先从 Lovable 项目的 `src/assets` / Files / Code 面板下载原始 PNG/JPG/WebP，再使用 Figma 插件工具的 `_upload_assets` 上传；单张图片支持 PNG、JPG、GIF、WebP，建议小于 10MB，可作为新图片画板放入当前页，也可用 `nodeId` 填充到现有节点。若拿不到源文件，可从预览页抓取 `img` 或 `background-image` 资源 URL 下载；截图裁切只能作为临时 mood/reference，不建议作为最终可编辑稿。
- Start source inspection from `E:\Projects\Candao-workspace\projects\tappo-phone\source`.
- The Flutter bridge currently has a mock implementation in Web; replace it only when the shell contract is available.
- Keep PWA disabled by default until the user asks to ship standalone Web/PWA.
- Verified commands: `npm run typecheck`, `npm run build`.
- Local dev URL: `http://127.0.0.1:5177/`; if it becomes inaccessible, restart Vite from `projects/tappo-phone/source`.
- Visual smoke screenshots are in `tasks/T01/output/owner-dashboard-402.png` and `tasks/T01/output/ordering-flow-402.png`.
- Latest App page references: Figma file `nHamLH3qlZYFXVC0OVxNqc`, nodes `138:281` and `538:3555`.
- Latest App style anchors: `17:38` and `1:568`, plus user keywords `轻量、干净、智能感、运营感、可信赖`. Use these to build tokens, icon rules, illustration rules, and component specimens before page application. Keep Tappo orange as the primary brand/action color; use blue only as a secondary smart/system atmosphere.
- App intelligent tone tiers are now defined. Strong tone applies to cover, role selection, owner/staff home, data analysis, app management, and settings. Moderate assistance applies to login/setup/recharge/table/booking/payment settings. Restrained operation applies to POS ordering, checkout, payment success, transaction/detail, order detail, and form-heavy operation pages.
- Intelligent visual anchor decision: use a hybrid system. 小T is flexible, not a fixed mascot. Use 小T/assistant cues for cover/onboarding/home/help; use orange smart orb/system core for data/settings/system health/AI insights; use module-specific micro illustrations for device/payment/booking/app activation.
- Asset style boundary: target 2025-2026 clear soft-gradient mobile UI. Keep assets translucent, lightweight, rounded, comfortable, softly dimensional, and orange-led. Avoid traditional old UI, gray enterprise density, heavy skeuomorphism, dark cyber AI, generic clipart, blue-first rebrand, and low-contrast full-page neumorphism.
- App Style Kit v0.1 是页面重塑和资产生成前的当前设计源，已重写为简体中文主文档。内容包含 token、渐变、阴影、图标/插画规则、组件样张、页面矩阵、去 AI 味/去模板化检查和资产生产门槛。评审前不要生成完整资产库。
- App Style Kit v0.1 已纠正图标 tile 底色规则：底色不是固定几个颜色，渐变配方只是参考语法样例；真实资产可按模块语义变化，但必须保持橙色品牌主导关系、清透软渐变、低饱和、统一光源、统一材质和同屏一致性。
- App Style Kit v0.1 已纠正尺寸与字体规则：App UI 字体使用 `OPPO Sans 4.0`；当前设计宽度和评审宽度使用 `390px`，先忽略 `402px`；模块卡片圆角 `16px`，主视觉 `16px` 对齐，区块间距 `16px`，卡片内边距 `16-24px`，密集行内边距 `12-16px`，图标与文字间距 `8-12px`。
- 首批资产生产包已创建：`tasks/T02/output/tappo-app-first-asset-batch-brief-2026-06-08.md`。当前 `I01-I12 v01`、`I01-I22 v02` 与 `I01-I22 v03` 已作为对照，I 系列最新评审目标为 `I01-I22 v04`；先做人工评审，不直接迁移生产目录。
- 输出语言规则：后续 Tappo Phone 项目产出默认使用简体中文。仅在代码、文件路径、URL、Figma 节点、token、CSS 变量、命令、API、库/插件/技能名或必须保留的原型文案中保留英文或原文。
- 可评审产出规则：后续每次产出都必须清晰可见并可人工评审。必须提供评审入口、评审对象、通过标准和下一步动作；视觉、UI、Figma、图标、插画、资产类产出必须有可直接打开的截图、评审图、Figma 节点、本地预览页、`assets-review/` 索引或样张页。
- 资产评审目录规则：后续不要把多个版本继续平铺到 `assets-review/` 顶层。顶层只保留 `README.md`、`current-review.html`、`current/` 和 `_archive/`；新一轮开始前先把旧 `current/` 归档，再写入新的当前评审内容。
- 对话交付链接规则：后续视觉、UI、图标、插画或资产评审类最终回复必须直接给可点击 Markdown 文件链接，优先链接到 `assets-review/current-review.html`、`assets-review/current/index.html` 和 `assets-review/current/preview.html`；如果提供原始 PNG，只作为备用入口；同时保留可复制相对路径代码块。
- 用户产出审核要求：每次产出必须明确评审入口、评审对象、变更范围、通过标准和下一步动作。视觉资产默认使用 `current-review.html`、`current/index.html`、`current/preview.html`、`current/preview.png` 四件套；旧版本必须进入 `_archive/<date>-<reason>/`，不要让用户从平铺文件里猜当前版本。
- `D01-D04` 方向评审样张已生成。评审入口：`tasks/T02/output/assets-review/d01-d04-review-board.html`；静态图：`tasks/T02/output/assets-review/d01-d04-review-board.png`；说明：`tasks/T02/output/d01-d04-asset-direction-review-2026-06-08.md`。
- New hard constraints: preserve all prototype content unless user confirms removal; avoid tiny text; use generated raster assets for unified illustrations/icons where generic icons make the UI feel unfinished.
- 2026-05-19 correction: do not let Figma reference content replace prototype content. Use `tasks/T02/output/prototype-content-map.md` before implementing or revising pages.
- Current realigned pages: boss dashboard, staff app center, POS ordering, checkout, payment success.
- Latest owner dashboard adjustment: `消費場景` and `點餐方式` are now chart visualizations, not plain tables, but all prototype data is preserved. Removed forced non-prototype homepage blocks and changed owner bottom nav to `主頁 / 數據 / 設置`; `數據` and `設置` are disabled placeholders until their routes are implemented.
- Latest screenshot artifact: `tasks/T02/output/boss-dashboard-chart-content-402-mobile.png`.
- Latest visual revision: `TpSoftIcon` was added for deterministic centered SVG icons. Avoid using generated bitmap sheets via CSS cropping for production icon positions; if using generated bitmap icons later, export one centered asset per icon and validate in-container.
- Latest soft-icon screenshot artifacts: `tasks/T02/output/boss-dashboard-soft-icon-chart-402-mobile.png` and `tasks/T02/output/boss-dashboard-soft-icon-chart-402-full.png`.
- 2026-05-22 settings pass: Figma node `anMsqgZYi8ZqmJXZah78KI / 287:32144` was adapted into `source/src/pages/SettingsPage.vue`.
- Owner bottom-nav settings entry now routes to `/settings`.
- New project-bound generated raster asset: `source/src/assets/generated/tappo-settings-hero.png`.
- Latest settings screenshot artifact: `tasks/T02/output/settings-figma-inspired-402-mobile.png`.
- Output note: `tasks/T02/output/settings-figma-inspired-note.md`.
- Mobbin MCP was registered globally via `codex mcp add mobbin --url https://api.mobbin.com/mcp`, but current CLI reports auth as `Unsupported` and login timed out. See `tasks/T02/output/mobbin-mcp-setup-note.md`; restart Codex/IDE to rediscover tools, then verify whether Mobbin appears.
- Installed `dominikmartn/hue@hue` globally via Skills CLI at `C:\Users\Admin\.agents\skills\hue`; restart Codex before using it. See `tasks/T02/output/hue-skill-install-note.md`.
- Created reusable Tappo design language skill at `C:\Users\Admin\.agents\skills\tappo-design`; archived copy at `skills/tappo-design`. Use it when the user says `Tappo design`, `Tappo style`, or `/tappo-design`.
- Installed `Leonxlnx/taste-skill` at `C:\Users\Admin\.codex\skills\taste-skill`; after restart it should expose `design-taste-frontend`. Its stated scope is landing pages, portfolios, and redesigns, so for Tappo Phone use it as taste/audit support while keeping `tappo-design` as the primary product UI contract.
- Installed XHS-recommended frontend/product/UI support skills into `C:\Users\Admin\.codex\skills` and `C:\Users\Admin\.agents\skills`: `frontend-design`, `figma-implement-design`, `web-design-guidelines`, `vercel-react-best-practices`, `playwright`, `webapp-testing`, `canvas-design`, `brand-guidelines`, and `deploy-to-vercel`. `frontend-skill` from the article was unavailable in the current OpenAI source.
- Extracted project-facing single-file design contract at `projects/tappo-phone/tappo-design.md`; use it when a session needs Tappo rules without loading the full skill. Output note: `tasks/T02/output/tappo-design-md-extract-note.md`.
- Latest owner dashboard optimization used `tappo-design` and updated `source/src/pages/OwnerDashboard.vue`.
- Latest owner dashboard artifacts: `tasks/T02/output/owner-dashboard-before-tappo-design-402.png`, `tasks/T02/output/owner-dashboard-tappo-design-402-mobile.png`, `tasks/T02/output/owner-dashboard-tappo-design-402-tall.png`, and `tasks/T02/output/owner-dashboard-tappo-design-note.md`.
- Screenshot capture note: use Chrome headless with `--virtual-time-budget=5000`; without the wait budget, lazy route rendering can be captured as blank main content.
- Weekly report for 2026-05-22 now has two parts: (1) project title, hours, requirement ID summary; (2) bullet-point work description and next-week plan. The DingTalk simple version is plain text, not Markdown. Requirement IDs are marked as `待补充`, and hours are estimated as 8h / 24h / 8h based on the user's day-by-day timeline.
- Weekly report for 2026-05-29 is available at `tasks/T02/output/weekly-report-2026-05-29.md`. It is structured as two sections only: `本周执行内容` and `下周计划`, with both sections organized by timeline.
- Weekly report for 2026-06-05 is available at `tasks/T02/output/weekly-report-2026-06-05.md`. It is structured as `本周执行内容` and `下周计划`, organized by timeline. It records Tappo App product/ops optimizations, Tappo Phone PD review optimizations, owner recharge/app-opening full-flow page supplements, staff order/payment flow pages, omitted pages, and next-week owner/staff login flow plus visual optimization work.
- Verified after latest pass: `npm run typecheck`, `npm run build`.
- Verified after latest App Figma pass: `npm run typecheck`, `npm run build`.
- Local dev URL after latest pass: `http://127.0.0.1:5177/`; transaction page is `http://127.0.0.1:5177/transactions`. Older ports may still be occupied.
- 2026-06-08 preview check: `5174`-`5178` were initially unreachable, then Vite was restarted on `5177`; `/` and `/transactions` both returned HTTP 200. Logs are `tasks/T02/output/vite-preview-2026-06-08-5177.log` and `tasks/T02/output/vite-preview-2026-06-08-5177.err.log`.
- 2026-06-08 style direction change: user does not want page-by-page reconstruction first. Next input to request is the owner/staff module and page-type list, including which screens are daily operations, AI/insight surfaces, and restrained detail flows.
- 2026-06-08 module input resolved: user confirmed stronger intelligent tone for cover, role selection, owner/staff home, data analysis, and settings, while detail/operation pages should be restrained.
- 2026-06-08 visual anchor resolved: hybrid anchor, but 小T is not fixed.
- 2026-06-08 asset style input resolved: user wants 2025-2026 current clear soft-gradient UI, not old/traditional UI.
- 2026-06-08 App Style Kit v0.1 created. Next recommended step: review the Style Kit; if approved, generate the limited first asset batch only: 1 assistant direction, 1 orange smart orb/system core, 8-12 module icon tiles, and 3 micro illustrations.
- 2026-06-08 output language rule added: future project outputs should be in Simplified Chinese by default.
- 2026-06-08 App Style Kit v0.1 已重新调整：主语言改为简体中文，并强化橙色主导、简约清晰、统一用色、去 AI 味和去模板化规则。
- 2026-06-08 图标底色纠正：模块图标 tile 可以扩展为多种低饱和浅色渐变，不按固定色板套色；同屏建议控制在 3-4 个主要底色色系。
- 2026-06-08 尺寸/字体纠正：`OPPO Sans 4.0` 为 App UI 字体；当前 Style Kit 阶段只按 `390px` 宽度做设计验收，不再把 `402px` 作为必检尺寸。
- 2026-06-08 已推进到首批资产生产准备：先按 `D01-D04` 做方向评审，资产提示词和命名规则见 `tappo-app-first-asset-batch-brief-2026-06-08.md`。
- 2026-06-08 已写入长期可评审产出约束：任何产出不能只有内部说明或提示词，必须提供可人工打开和判断的评审入口。
- 2026-06-09 已按新关键词重绘 `I01-I22 v04`：宫格插画风、柔和渐变、干净白色背景、轻 3D 渲染感、减少细节、独立 SVG、闭合填充/布尔图形、无 `stroke` 线框。下一步等人工判断是否通过。
- 2026-07-02 Tappo Phone 对外命名按 `Tappo Pulse` 处理。本次在 Figma `nHamLH3qlZYFXVC0OVxNqc / 1390:3296` 的 `应用市场` 页面补充完成：`iOS App Store / English` 5 张英文版截图、`Google Play / Android mockup` 英文 5 张与中文 5 张 `1080x1920` Android 样机截图、Google Play Feature Graphic 和 Icon。后续按用户反馈修正：英文标题/副标题叠放、中文截图部分英文小字、iOS 灵动岛比例、Android 顶部打孔样式、Google Play 第一张错位样式、Google Play 底部纹理、Google Play 应用截图占比、英文 iOS 支付方式残留中文；最新修正为 Google Play 英文文案对齐 App Store 英文版，新增 Google Play 中文宣传图系列，提升 Google Play 中英文标题/副标题字号，并将顶层画板统一为 `市场-语言-编号-尺寸` 命名，例如 `Google Play-EN-01-1080x1920`。Figma MCP 无法加载文件内 `OPPO Sans 4.0`，新增英文文案层使用 `Inter`，中文小字替换使用可用字体回退。最终复查截图和说明见 `tasks/T02/output/tappo-pulse-app-market-store-assets-2026-07-02.md`。
- 2026-07-30 Tappo Pulse iOS App Store 应用市场尺寸已按用户反馈修正：在 Figma `nHamLH3qlZYFXVC0OVxNqc / 1390:3296` 的 `应用市场` 页，将 App Store 英文 01-05 与中文 01-05 共 10 张画板从 `1320x2868` 调整为 `1242x2688`；内部内容使用等比缩放轻微收小并保持构图，画板横向间距保持 100px；画板名同步为 `App Store-EN-01-1242x2688` 至 `App Store-ZH-05-1242x2688`。已导出英文 01 和中文 01 复查图，说明见 `tasks/T02/output/tappo-pulse-ios-appstore-size-fix-2026-07-30.md`。
- 2026-07-06 TAPPO pulse 订座补充已写入并完成 Auto Layout 修正：Section `TAPPO pulse / Reservation / 2026-07-06 / Auto Layout`，node `1478:3296`，位于文件 `nHamLH3qlZYFXVC0OVxNqc / 0:1` 的 `产品界面`。本次先从原型提取并截图 8 个关键状态，再读取目标文件真实组件/变量/样式，最后重建 10 个 `390x884` 手机画板：列表全部、服务暂停、空态、新增预约弹窗、日期日历、拒绝、取消、Tappo Provider、Minitable Provider、未启用 Provider。
- 2026-07-06 TAPPO pulse 订座视觉依据：用户明确现有 Tappo APP 订座交互可沿用，包括订座列表，但视觉必须按 TAPPO PULSE 设计规范。最终写入版不直接采用早期本地 HTML 稿，而是按目标文件真实 PULSE 规范重建：`#FFFBF6` 背景、`#FF8A3D` 品牌橙、358px 白色半透明卡片、358px/16px 弹窗、40% 黑色遮罩、Auto Layout 结构和 8px 间距原则。
- 2026-07-06 Figma MCP 认证和写入结果：用户重启 Codex 后官方 `mcp__figma.*` 工具恢复，`whoami` 返回 `Can-dao_UI / 2163548408@qq.com`。官方 MCP 当前可写入目标文件，但无法加载 `OPPO Sans 4.0`；Figma Apps connector 仍返回 `UNAUTHORIZED / Reauthentication required`。当前版本暂用 `Noto Sans TC`，后续如恢复字体通道需单独替换字体。
- 2026-07-06 Figma 写入 QA：已修正 Section 层级、待确认卡片人数与按钮重叠、Provider 画板重复状态栏/标题栏、底部遮挡、字段宽度、服务暂停状态和弹窗结构问题。最新审计为 10 个屏幕、527 个 Auto Layout frame、8px 间距异常 0、关键文案缺失 0。主要记录见 `tasks/T02/output/tappo-pulse-booking-figma-autolayout-fix-2026-07-06.md`；后续优先根据用户在 Figma 内对 Section `1478:3296` 的人工评审反馈继续微调。
- 2026-07-07 TAPPO pulse 订座第二轮修正：按用户反馈删除 3 个 Provider 独立页，保留 7 个主流程画面。列表内容改为更接近 TAPPO App 的紧凑卡片；选择预约日期新增提示语和可选状态说明；新增预约组件修正输入框宽度、字体颜色层级和 8/16px 间距；时段改为 `11:00-14:00 / 17:30-21:00`；人数改为 `1～2人 / 3～4人 / 5～6人 / 7～8人`；拒绝原因改为 radio 单选样式。最新审计为 7 个屏幕、530 个 Auto Layout frame、8px 间距异常 0、Provider 独立页面 0。主要记录见 `tasks/T02/output/tappo-pulse-booking-figma-revision2-2026-07-07.md`。
- 2026-07-07 TAPPO pulse 订座空状态插画补充：按用户要求使用 Image2 生成空状态插画，并通过透明 PNG 上传到 Figma 空状态画板 `1500:3577` 的节点 `1508:3367`。插画内容为订座日历、双人餐桌和橙色轻点缀，不含文字、logo 或水印；空状态文案仍由 Figma 文本节点承载。截图见 `tasks/T02/output/tappo-pulse-booking-empty-state-image2-figma-2026-07-07.png`，说明见 `tasks/T02/output/tappo-pulse-booking-empty-state-image2-2026-07-07.md`。
