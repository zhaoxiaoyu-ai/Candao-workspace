# T50 对外高保真原型清理报告

## 背景

用户指出当前原型“掺杂了很多不必要对外说明的信息，不能够作为可落地的高保真原型依据”。本轮以 T49 交互原型为基础，保留“整合能力 + 客户案例 + 资源”的交互查看方式，但把页面可见文案从内部执行说明改为对外客户可读的业务页面内容。

## 已完成调整

- 首屏从“以前端工作台方式查看”改为“先判斷現有系統如何接入，再查看案例與資源”。
- 中部流程从“原型 / 前端状态 / React 组件拆分”说明改为“从营运问题到产品演示”的对外评估流程。
- 案例与资源区从“证据层切换 / 三页内容平铺”说明改为“同一问题下查看案例、资源与支持”。
- 规模数据区删除 `PPT Slide 11 口徑` 等来源说明，改为“用服務規模支持採購判斷”。
- 演示 CTA 删除“这版原型 / 前端状态”说明，改为售前演示安排语境。
- 页尾删除“繁體中文網站原型 / 品牌顯示”说明，改为正式对外业务定位。
- 保留 5 个问题场景、5 步评估、4 个案例/资源/支援/演示 Tab 和演示摘要。

## 输出文件

- 原型入口：`tasks/T50/output/prototype/index.html`
- 1440 截图：`tasks/T50/output/screenshots/t50-public-hifi-1440-full.png`
- 对外文案合同：`tasks/T50/output/contracts/t50-public-hifi-contract.json`
- 交互覆盖报告：`tasks/T50/output/qa/t50-public-hifi-coverage-report.json`
- 可见文本联合导出：`tasks/T50/output/qa/t50-visible-text-union-2026-08-27.txt`
- domain-copy 报告：`tasks/T50/output/qa/domain-copy-t50-public-report.json`
- Stitch 输入 brief：`tasks/T50/output/stitch-input/t50-public-hifi-stitch-brief-2026-08-27.md`

## QA 结果

- 交互覆盖 QA：31 个状态检查通过。
- 默认视图合同覆盖：58 / 58 pass。
- 交互联合文本覆盖：99 / 99 pass。
- 禁止可见文本：无 `T49`、`T50`、`原型`、`前端`、`React`、`QA`、`PPT`、`Slide`、`Stitch`、`Figma`、`高保真`、`品牌顯示`、`Finance Center`、`Business Center`、`Data Center`、`Candao` 等残留。
- domain-copy：6 / 6 pass。
- 渲染检查：1440 桌面截图通过，无横向溢出；图片与背景图加载正常。

## 术语说明

`AMS / Connector` 本轮保留，因为当前项目 `domain-copy/glossary.yaml` 与 `domain-copy/business-context.md` 将其列为受保护产品 / 能力术语。若后续希望把 `Connector` 对外中文化，应先由人工确认标准展示词，再更新 `domain-copy` 词库和 QA 规则，避免代理自行改动产品边界。
