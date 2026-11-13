# T17: Core Pages Low-fidelity Wireframe Prototype

日期：2026-08-15
状态：done；2026-08-17 追加设计交接与 Stitch 首页高保真收口已完成

## 目标

将 T16 的 Home、Solutions、Platform、Integrations 四个核心页面繁體中文内容骨架整理为低保真原型图，用于检查页面故事路径、模块顺序、跨页去重和内容准入状态。

本任务只做低保真线框，不进入高保真视觉、Figma、Stitch 或生产前端实现。

## 输入

- `tasks/T16/output/core-pages-tc-content-skeleton-v1.0-2026-08-14.md`
- `tasks/T15/output/old-website-ppt-to-page-module-evidence-matrix-v1.0-2026-08-14.md`
- 项目 Evidence-First / Anti-Generic 规则

## 输出

- `output/low-fidelity-wireframe-prototype/index.html`
- `output/low-fidelity-wireframe-prototype/screenshots/`
- `output/low-fidelity-wireframe-prototype-report-2026-08-15.md`

## 输出语言

原型中可见页面内容使用繁體中文。

任务说明、报告和执行记录使用简体中文。

## 完成标准

- 覆盖 `首頁 / 解決方案 / 平台 / 整合能力` 四个核心页面。
- 每个页面保持不同叙事角色。
- 页面模块能追溯到 T15 / T16 的来源编号。
- 不展示未确认客户 Logo、客户名、规模数字、认证、SLA、合作伙伴 Logo、价格或性能承诺。
- 输出可打开 HTML，并尽量生成桌面截图作为原型图检查。

## 2026-08-17 追加执行记录

用户确认「先按这版」，并要求在 Codex 中整理已有修改、更新任务与输出，同时约束 Stitch 后续执行不得同一页面重复生成多张稿。

本次追加范围：

- 将低保真后的 `design-ready-wireframe/` 收口为可供设计交接的版本，覆盖 Home、Solutions、Platform、Integrations、Customers、Resources、About、Demo。
- 针对 Solutions、Platform、Integrations 的页面角色做区分：Solutions 讲客户场景，Platform 讲产品如何工作，Integrations 讲系统接入和数据流。
- 针对 Customers 增加实名客户与行业案例的结果描述，避免只列产品名。
- 针对 Resources 和 About 调整为按能力/内容属性独立呈现的模块，而不是同质化卡片。
- 生成 `design-handoff/` 资料包，包括视觉方向、模块清单、素材清单、动效清单、Stitch prompt 包和 QA 文件。
- 在 Stitch 项目 `Candao International Website T11.5-C` 中生成首页高保真，并收敛到唯一最终稿：
  - Stitch screen: `projects/10888304674441209287/screens/d792eb1c55b14ee284b9e111474614dd`
  - HTML: `output/design-handoff/.stitch/designs/candao-home-hifi-final-d792eb1c55b14ee284b9e111474614dd.html`
  - Screenshot: `output/design-handoff/.stitch/designs/candao-home-hifi-final-d792eb1c55b14ee284b9e111474614dd-full.png`
- 将同一页面的旧 Stitch 多轮文件移出正式输出目录；正式输出目录仅保留一组最终 HTML 和一张目标长图。
- 更新 `output/design-handoff/.stitch/metadata.json` 作为 Stitch 最终稿登记。
- 运行 `domain-copy` QA，结果为 `10/10 pass`。

## Stitch 单页单图规则

- 同一页面在 Stitch 中只能有一个目标输出，不允许连续生成 3-5 个重复版本作为正式交付。
- 生成前必须先整理关键词、页面结构、禁用项、素材状态和已确认文案；原则上一次 `generate_screen_from_text` 产出目标稿。
- 为节省 token 和避免 Stitch 重复输出，细节问题先记录到 `output/design-handoff/qa/stitch-detail-issue-log-2026-08-17.md`，不立即反复修。
- 只有硬性问题才允许对同一 screen 做一次定向 `edit_screens`：页面错误、导航/核心文案缺失、出现内部说明、placeholder、假 Logo、未授权指标或状态数量、受保护产品名大小写错误。
- 非硬性问题，例如局部间距、个别图形精度、轻微视觉偏好、某个图标是否更合适，先记录，不生成新 screen，也不立即 edit。
- Codex 正式输出目录中只保留最终 screen 对应的一个 HTML 和一张目标图；中间版本不得留在 `output/design-handoff/.stitch/designs/`。
- 页面可见内容不得出现内部说明、来源页码、missing/placeholder、假客户 Logo、假指标、未授权状态数量或大小写错误产品名。

## 2026-08-17 Platform Stitch 追加执行记录

本次继续 T17 设计任务，按 `.stitch/metadata.json` 和 `stitch/metadata.json` 推荐顺序，在 Home 后推进 Platform。

执行结果：

- 生成页面：Platform / Desktop / TC。
- 首次 `generate_screen_from_text`：`projects/10888304674441209287/screens/ea23e53acc3446a9bce5b1aa6a3d4dd6`。
- 首稿因缺少 P02-P06 核心模块、出现外部生成图片和英文 Footer，属于硬性问题。
- 已按规则只对同一页面目标执行一次 `edit_screens`，最终 screen：
  - `projects/10888304674441209287/screens/03fa757724764d32bc84634a727427b3`
- 正式输出：
  - HTML：`output/design-handoff/.stitch/designs/candao-platform-hifi-final-03fa757724764d32bc84634a727427b3.html`
  - Screenshot：`output/design-handoff/.stitch/designs/candao-platform-hifi-final-03fa757724764d32bc84634a727427b3-full.png`
- 首稿 HTML 已移至：
  - `output/design-handoff/.stitch/superseded/platform/candao-platform-hifi-blocked-ea23e53acc3446a9bce5b1aa6a3d4dd6.html`
- 已更新：
  - `output/design-handoff/.stitch/metadata.json`
  - `output/design-handoff/qa/stitch-platform-hifi-run-report-2026-08-17.md`
  - `output/design-handoff/qa/stitch-platform-hifi-copy-qa-result-2026-08-17.json`
  - `output/design-handoff/qa/stitch-platform-hifi-html-static-check-2026-08-17.json`

QA 结果：

- `domain-copy` QA：`10/10 pass`。
- HTML 静态检查：`pass`。
- 已检查导航、文案、内部词、placeholder、假 Logo、未授权数字和 `iDMS` / `SaaS` / `AMS / Connector` 大小写。
- 产品截图和产品视频仍为缺失素材；当前高保真只使用抽象截图位和产品名视频入口，不生成假截图或假视频。
