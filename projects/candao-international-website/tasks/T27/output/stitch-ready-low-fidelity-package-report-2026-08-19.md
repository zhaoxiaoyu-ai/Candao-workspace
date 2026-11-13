# Stitch-ready 低保真外部包交付报告

日期：2026-08-19  
任务：T27  
范围：餐道国际官网 8 个页面 + 页面总览  
状态：已完成

## 本次目标

将目前最新的所有页面低保真设计整理为可对外提供给 Stitch 的版本。该版本用于高保真生成前的结构、页面叙事和可见文案参考，不再作为内部内容核对稿展示。

## 输入基准

- `tasks/T17/output/design-ready-wireframe/`
- `tasks/T17/output/design-handoff/`
- `tasks/T26/output/design-input-layer-final-verification-2026-08-17.json`
- `tasks/T26/output/objective-completion-audit-2026-08-17.md`
- `domain-copy/business-context.md`
- `domain-copy/glossary.yaml`
- `domain-copy/copy-rules.md`
- `domain-copy/examples.md`
- `domain-copy/copy-qa-cases.md`
- `domain-copy/approved-copy-locks.yaml`
- `human-review/current-decision-queue.md`

## 输出文件

主入口：

- `tasks/T27/output/stitch-ready-low-fidelity/index.html`

页面：

- `tasks/T27/output/stitch-ready-low-fidelity/home.html`
- `tasks/T27/output/stitch-ready-low-fidelity/solutions.html`
- `tasks/T27/output/stitch-ready-low-fidelity/platform.html`
- `tasks/T27/output/stitch-ready-low-fidelity/integrations.html`
- `tasks/T27/output/stitch-ready-low-fidelity/customers.html`
- `tasks/T27/output/stitch-ready-low-fidelity/resources.html`
- `tasks/T27/output/stitch-ready-low-fidelity/about.html`
- `tasks/T27/output/stitch-ready-low-fidelity/demo.html`

Stitch 输入辅助：

- `tasks/T27/output/stitch-ready-low-fidelity/stitch-ready-page-map.json`
- `tasks/T27/output/stitch-ready-low-fidelity/stitch-ready-prompt-pack.md`
- `tasks/T27/output/stitch-ready-low-fidelity/README.md`

资产与脚本：

- `tasks/T27/output/stitch-ready-low-fidelity/assets/stitch-ready.css`
- `tasks/T27/output/stitch-ready-low-fidelity/assets/stitch-ready.js`
- `tasks/T27/output/stitch-ready-low-fidelity/assets/candao-blue-logo.svg`

截图：

- `tasks/T27/output/stitch-ready-low-fidelity/screenshots/t27-index-1440-full.png`
- `tasks/T27/output/stitch-ready-low-fidelity/screenshots/t27-home-1440-full.png`
- `tasks/T27/output/stitch-ready-low-fidelity/screenshots/t27-solutions-1440-full.png`
- `tasks/T27/output/stitch-ready-low-fidelity/screenshots/t27-platform-1440-full.png`
- `tasks/T27/output/stitch-ready-low-fidelity/screenshots/t27-integrations-1440-full.png`
- `tasks/T27/output/stitch-ready-low-fidelity/screenshots/t27-customers-1440-full.png`
- `tasks/T27/output/stitch-ready-low-fidelity/screenshots/t27-resources-1440-full.png`
- `tasks/T27/output/stitch-ready-low-fidelity/screenshots/t27-about-1440-full.png`
- `tasks/T27/output/stitch-ready-low-fidelity/screenshots/t27-demo-1440-full.png`

QA：

- `tasks/T27/output/qa/stitch-ready-low-fidelity-static-check-2026-08-19.json`
- `tasks/T27/output/qa/stitch-ready-low-fidelity-copy-qa-input-2026-08-19.json`
- `tasks/T27/output/qa/stitch-ready-low-fidelity-copy-qa-result-2026-08-19.json`
- `tasks/T27/output/qa/stitch-ready-low-fidelity-browser-check-2026-08-19.json`

## 关键处理

- 从 T26 设计执行版低保真复制 8 个页面，单独放入 T27 外部交付目录，不覆盖 T17 / T26 内部基准。
- 将页面可见语言收敛为繁體中文单一 Locale；导航仅保留 `繁中 / EN` 语言切换。
- 将 `Solutions`、`Platform`、`Customers`、`Resources`、`About`、`Book a Demo`、`Step 1`、`Live Summary` 等执行期英文栏目替换为繁體中文官网可见表达。
- 移除 Demo 表单中的 `placeholder` 属性，改为可见的字段说明，避免 Stitch 将原型占位符当成正式文案。
- 使用用户已授权的 `assets/logo/candao-blue-logo.svg` 作为页面顶部与页脚 Logo。
- 为所有页面补齐统一官网页脚，保证每个页面可作为独立 Stitch screen 输入。
- 将 `topbar` 从 sticky 改为 relative，避免 full-page 截图时导航漂移到页面中段。
- 生成 `stitch-ready-page-map.json`，标明每页文件、页面任务、目标角色、核心模块和 Stitch screen 建议名称。
- 生成 `stitch-ready-prompt-pack.md`，供后续 Stitch 生成高保真时按页面使用。

## QA 结果

- 静态检查：`pass`
- `domain-copy`：首次 8/9，通过后修复指标白名单，再跑 9/9 `pass`
- 浏览器检查：9/9 `pass`
- 页面截图：9 张 1440 宽 full-page PNG 已生成
- 交互检查：Home、Solutions、Platform、Integrations、Customers、Resources、About、Demo 的关键切换均通过

## QA 修复记录

`domain-copy` 首次检查发现 Customers 页面中 `年度銷售額：1,578 萬元` 被判为未定义指标。原因是项目 `glossary.yaml` 已登记 PPT Slide 42 的 `1,578`，但未登记带单位写法。

处理：

- 在 `domain-copy/glossary.yaml` 的火锅案例指标中补充 `1,578 萬` 和 `1,578 萬元`。
- 未删除页面中的业务数据，也未缩短案例文案。
- 重新运行 `domain-copy`，结果 9/9 `pass`。

## 仍需人工确认

- H3-01：低保真原型业务验收是否通过，仍需人工确认。
- H3-02：哪些页面、模块和段落进入 `approved_and_locked`，仍需人工确认。
- 真实产品截图、产品视频、客户 Logo、案例图片和公司图片仍需后续补齐或确认具体素材。
- English 内容库应在繁體中文内容验收后再生成。

## 后续建议

后续如进入 Stitch 高保真生成，应以 T27 外部包作为页面结构输入，以 `stitch-ready-prompt-pack.md` 作为页面级 prompt 基础，并继续遵守单页单目标输出规则：同一页面只允许一个目标 screen、一个正式 HTML 和一张目标图。
