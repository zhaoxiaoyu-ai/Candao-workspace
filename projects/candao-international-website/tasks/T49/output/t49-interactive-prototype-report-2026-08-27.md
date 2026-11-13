# T49 前端交互式查看原型重构报告

日期：2026-08-27  
任务：T48 之后的交互式高保真前置重构

## 结论

用户反馈成立。T48 虽然已经把 T47 的长页压成 `接入評估中心`，但页面主体仍偏“文字说明排版”，不是前端适合查看、切换和承接销售线索的交互方式。

本轮新增 T49，将页面改为：

`接入評估中心 / Desktop 1440 / TC / Interactive Workbench`

核心交互路径为：

`選擇問題 -> 核對系統 -> 查看案例 -> 匹配資源 -> 形成演示摘要`

## 已完成调整

- 首屏保留 T35 首页风格：暗色餐饮运营场景、中心标题、双 CTA、深色产品工作台。
- 将默认展示改为问题选择：`漏單與接單超時`、`餐單同步`、`配送超時`、`對賬差異`、`多品牌門店`。
- 使用同一个 JS state 同步 Hero 预览、系统拓扑、字段表、右侧摘要、案例资源区和演示摘要。
- 主体改为前端组件结构：Stepper、Scenario Rail、Operator Panel、Topology、Status Table、Summary Panel、View Tabs。
- 案例 / 资源 / 支援 / 演示不再平铺成多段文字，而是在同一问题下通过 Tab 切换。
- 内容覆盖口径从“静态长页可见”改为“交互态联合可见”。
- 保留授权规模数据带：`5000+`、`500M+`、`400+`、`200K+`、`4.5B+`、`30%`。
- 繁體中文页面继续使用「餐道」，未显示 `Finance Center`。

## 输出文件

- 原型：`tasks/T49/output/prototype/index.html`
- 交互合同：`tasks/T49/output/contracts/t49-interaction-content-contract.json`
- 交互 QA 脚本：`tasks/T49/output/qa/t49-interaction-qa.mjs`
- 交互 QA 报告：`tasks/T49/output/qa/t49-interaction-coverage-report.json`
- 交互联合可见文本：`tasks/T49/output/qa/t49-visible-text-union-2026-08-27.txt`
- Domain-copy QA 输入：`tasks/T49/output/qa/domain-copy-t49-interaction-input.json`
- Domain-copy QA 报告：`tasks/T49/output/qa/domain-copy-t49-interaction-report.json`
- 1440 截图：`tasks/T49/output/screenshots/t49-interactive-prototype-1440-full.png`
- Stitch 输入提示词：`tasks/T49/output/stitch-input/t49-interactive-workbench-stitch-prompt-2026-08-27.md`

## QA 结果

| QA | 结果 |
| --- | --- |
| Domain-copy | `6/6 pass` |
| 默认可见合同 | `39/39 pass` |
| 交互态联合覆盖 | `105/105 pass` |
| 检查状态数 | `31` |
| 禁用词 | `0` |
| 横向溢出 | 无，`documentWidth = 1440` |
| 图片加载 | `2/2 img pass` |
| 背景图 | `8` |
| 组件选择器 | `13/13 pass` |
| 样式风险 | 无 `text-transform`，无负字距 |
| 页面高度 | `5034px` |

## 本轮边界

- 本轮未上传或执行 Stitch。
- 本轮未推进移动端、响应式和动效验收。
- T49 是高保真前置候选，不等于最终业务验收通过。
- H3-01 低保真业务验收和 H3-02 文案锁定仍需人工确认。
