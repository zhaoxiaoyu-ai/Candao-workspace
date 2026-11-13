# T52 Stitch 失败稿视觉返工与本地高保真基准

状态：done  
日期：2026-08-27  
触发：用户查看 T51 Stitch 输出后反馈“样式太丑了”。

## 目标

在 T51 Stitch 生成失败与视觉质量不达预期的基础上，重新建立一份可控的 Web Desktop 1440 高保真视觉基准。该版本以 T50 已通过内容与交互合同为底稿，重点解决 Stitch 输出中的模板感、灰白块、信息密度松散、产品工作台不真实、页面节奏断裂等问题。

## 输入

- `tasks/T50/output/prototype/index.html`
- `tasks/T50/output/contracts/t50-public-hifi-contract.json`
- `tasks/T50/output/qa/t50-public-hifi-coverage-report.json`
- `tasks/T50/output/screenshots/t50-public-hifi-1440-full.png`
- `tasks/T51/output/stitch-output/t51-stitch-screen-5d13339cb5a44dc6a73169adf3eec6d3-final.html`
- `tasks/T51/output/screenshots/t51-stitch-screen-5d13339cb5a44dc6a73169adf3eec6d3-1440-full.png`
- `tasks/T35/output/figma-homepage-mcp-style-guide-2026-08-20.md`
- `domain-copy/business-context.md`
- `domain-copy/glossary.yaml`
- `domain-copy/copy-rules.md`

## 必须解决

- 不把 T51 Stitch 失败稿登记为正式高保真。
- 重新执行一次 Stitch 视觉变体尝试，并保存结果与失败证据。
- 以 T50 为本地可控底稿，视觉上贴近首页已确定风格：暗色餐饮营运场景、企业级产品工作台、清晰数据流、案例与资源路由、授权规模数据带。
- 保持 T50 内容覆盖率：默认内容与交互联合内容不得丢失。
- 繁體中文页面不得可见 `Candao` 或 `Finance Center`。
- 不新增未确认客户、Logo、指标、SLA、备案或第三方合作状态。

## 输出

- `output/prototype/index.html`
- `output/contracts/t52-visual-polish-contract.json`
- `output/qa/t52-public-hifi-qa.mjs`
- `output/qa/t52-visual-polish-coverage-report.json`
- `output/qa/domain-copy-t52-visual-polish-input.json`
- `output/qa/domain-copy-t52-visual-polish-report.json`
- `output/screenshots/t52-visual-polish-1440-full.png`
- `output/screenshots/t52-stitch-screen-32612aab-preview.png`
- `output/stitch-screen-32612aab-premium-variant.html`
- `output/t52-visual-polish-run-report-2026-08-27.md`

## 验收

- 本地高保真基准通过 T50 内容合同复验。
- Domain-copy QA 通过。
- 1440 桌面渲染通过，无横向溢出。
- 禁用词、假备案、Material icon ligature、错误品牌显示、未授权指标均为 0。
- 明确记录 Stitch 变体是否达标；未达标时不得替代本地基准。
