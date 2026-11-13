# T49 前端交互式查看原型重构

状态：done  
日期：2026-08-27  
触发：用户指出 T48 原型“几乎全是文字”，要求按前端适合查看的交互方式呈现内容。

## 目标

将 T48 `接入評估中心 / Desktop 1440 / TC` 从内容排版型页面重构为前端可执行的交互式查看原型。

本轮不新增业务事实，不上传或执行 Stitch，不推进移动端；只在 Web Desktop 1440 范围内，把既有 `整合能力`、`客戶案例`、`資源` 内容改造成可点击、可切换、可 QA 的页面状态。

## 必须解决

- 默认视图不能再像长篇说明稿。
- 页面主体必须使用前端交互模式：场景选择、步骤导览、Tab、状态面板、系统拓扑、动态表格、摘要面板。
- 内容覆盖率仍需达到 100%，但覆盖口径改为“交互态联合覆盖”，即点击完整路径后所有合同内容均可见。
- 继续沿用 T35 首页高保真风格：暗色餐饮运营 Hero、`#528dff` 连接色、产品工作台、案例证明、授权规模数据带和销售转化 CTA。
- 中文 / 繁體中文可见品牌统一使用「餐道」。
- 繁體中文生产页不得可见 `Finance Center`，对应表达为「財務對賬」或「平台訂單與 OMS 訂單對賬」。

## 输入

- `tasks/T48/output/prototype/index.html`
- `tasks/T48/output/contracts/t48-hifi-readiness-contract.json`
- `tasks/T35/output/figma-homepage-mcp-style-guide-2026-08-20.md`
- `tasks/T17/output/design-handoff/.stitch/DESIGN.md`
- `tasks/T11.5/output/Candao Visual Design Rules.md`
- `domain-copy/business-context.md`
- `domain-copy/glossary.yaml`
- `domain-copy/copy-rules.md`

## 输出

- `output/prototype/index.html`
- `output/contracts/t49-interaction-content-contract.json`
- `output/qa/t49-interaction-qa.mjs`
- `output/qa/t49-interaction-coverage-report.json`
- `output/qa/domain-copy-t49-interaction-input.json`
- `output/qa/domain-copy-t49-interaction-report.json`
- `output/screenshots/t49-interactive-prototype-1440-full.png`
- `output/stitch-input/t49-interactive-workbench-stitch-prompt-2026-08-27.md`
- `output/t49-interactive-prototype-report-2026-08-27.md`

## 验收

- 交互态合同覆盖 100%。
- Domain-copy QA 通过。
- 1440 渲染通过，无横向溢出。
- 所有图片加载成功，背景图可见。
- 可见文本不出现禁用词、假备案、Material icon ligature 或未确认 SLA。
