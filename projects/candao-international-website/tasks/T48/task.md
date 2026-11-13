# T48｜三合一原型高保真前置重构

## Status

done

## User Request

这个原型不符合能够直接输出为页面的高保真前提。

## Scope

- 对 T47 `整合能力、客户案例与资源三合一原型` 做高保真前置审计，明确为什么不能直接进入 Stitch / Figma / React 页面生产。
- 将原型目标从“内容覆盖型长页”修正为“可直接设计成页面的接入评估中心”。
- 保留用户此前要求：`整合能力`、`客戶案例`、`資源` 三者合并，并保持内容覆盖可追溯。
- 继承 T35 首页基准：真实餐饮营运 Hero、`#528dff` 连接色、产品工作台、白底案例证明、资源路径、清晰 CTA。
- 不生成新的未确认事实、客户 Logo、认证、价格、SLA、接入承诺或假产品截图。

## Inputs Read

- `AGENTS.md`
- `projects/candao-international-website/PROJECT.md`
- `projects/candao-international-website/RULES.md`
- `projects/candao-international-website/AGENTS.md`
- `projects/candao-international-website/STATE.md`
- `projects/candao-international-website/HANDOFF.md`
- `projects/candao-international-website/TASKS.md`
- `projects/candao-international-website/tasks/T47/task.md`
- `projects/candao-international-website/tasks/T47/output/prototype/index.html`
- `projects/candao-international-website/tasks/T47/output/screenshots/t47-integrated-prototype-1440-full.png`
- `projects/candao-international-website/tasks/T47/output/t47-integrated-prototype-report-2026-08-25.md`
- `projects/candao-international-website/tasks/T47/output/stitch-input/integrated-proof-resource-stitch-prompt-2026-08-25.md`
- `projects/candao-international-website/tasks/T35/output/figma-homepage-mcp-style-guide-2026-08-20.md`
- `projects/candao-international-website/tasks/T35/output/stitch-input/homepage-mcp-stitch-guardrails-2026-08-20.md`
- `projects/candao-international-website/tasks/T17/output/design-handoff/.stitch/DESIGN.md`
- `projects/candao-international-website/tasks/T11.5/output/Home Visual Critique.md`
- `projects/candao-international-website/tasks/T11.5/output/Candao Visual Design Rules.md`
- `projects/candao-international-website/tasks/T41/output/stitch-prompt-technique-learning-and-reprompt-plan-2026-08-20.md`
- `projects/candao-international-website/tasks/T41/output/candao-stitch-prompt-template-v2-2026-08-20.md`
- `projects/candao-international-website/human-review/current-decision-queue.md`
- `projects/candao-international-website/domain-copy/`

## Outputs

- `output/audit/t47-high-fidelity-readiness-audit-2026-08-26.md`
- `output/high-fidelity-page-blueprint-2026-08-26.md`
- `output/stitch-input/t48-hifi-ready-stitch-prompt-v3-2026-08-26.md`
- `output/contracts/t48-hifi-readiness-contract.json`
- `output/prototype/index.html`
- `output/screenshots/t48-hifi-ready-prototype-1440-full.png`
- `output/qa/`

## Acceptance

- 明确 T47 不能直接作为高保真页面输入的原因。
- 给出可执行的高保真前置门槛和页面级蓝图。
- 新版原型必须把内容转化为页面组件、产品 UI、状态、资源路径和转化表单，而不是审稿清单或纯文字堆叠。
- 新版原型通过 domain-copy QA、静态风险 QA、合同 QA 和 1440 渲染检查。
- 更新 `TASKS.md`、`STATE.md`、`HANDOFF.md`。
