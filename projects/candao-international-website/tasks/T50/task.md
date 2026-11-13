# T50 对外可落地高保真原型依据清理

状态：done  
日期：2026-08-27  
触发：用户指出 T49 / 当前原型中掺杂了大量不必要的对外说明信息，不能作为可落地高保真原型依据。

## 目标

在保留 T49 交互结构的基础上，清除页面可见层中的内部执行说明、原型说明、前端实现说明、QA 说明和来源口径说明，将页面改为真实官网访客视角可见的高保真原型依据。

## 必须解决

- 页面可见文本不得出现 `T49`、`T50`、`原型`、`前端`、`React`、`QA`、`PPT Slide`、`Stitch`、`Figma`、`高保真`、`合同`、`覆盖率`、`品牌顯示` 等内部交付或实现话术。
- 可见文案必须直接服务官网用户：采购方、总部运营、IT、配送、财务、销售 / 售前。
- 不能因为删掉内部说明而丢失业务对象、系统关系、状态、案例、资源入口和演示下一步。
- 继续保留 T49 已验证的交互方式：问题切换、五步导览、系统拓扑、状态表、右侧摘要、案例 / 资源 / 支援 / 演示 Tab。
- 继续沿用 T35 首页风格。
- 中文 / 繁體中文可见品牌统一使用「餐道」。
- 繁體中文页面不得可见 `Finance Center`。

## 输入

- `tasks/T49/output/prototype/index.html`
- `tasks/T49/output/contracts/t49-interaction-content-contract.json`
- `tasks/T49/output/t49-interactive-prototype-report-2026-08-27.md`
- `tasks/T35/output/figma-homepage-mcp-style-guide-2026-08-20.md`
- `domain-copy/business-context.md`
- `domain-copy/glossary.yaml`
- `domain-copy/copy-rules.md`

## 输出

- `output/prototype/index.html`
- `output/contracts/t50-public-hifi-contract.json`
- `output/qa/t50-public-hifi-qa.mjs`
- `output/qa/t50-public-hifi-coverage-report.json`
- `output/qa/domain-copy-t50-public-input.json`
- `output/qa/domain-copy-t50-public-report.json`
- `output/screenshots/t50-public-hifi-1440-full.png`
- `output/stitch-input/t50-public-hifi-stitch-brief-2026-08-27.md`
- `output/t50-public-hifi-cleanup-report-2026-08-27.md`

## 验收

- 交互态联合内容覆盖通过。
- 对外可见文本清理通过。
- Domain-copy QA 通过。
- 1440 渲染通过，无横向溢出。
- 不出现禁用词、内部交付词、假备案、Material icon ligature、未确认 SLA 或错误品牌显示。
