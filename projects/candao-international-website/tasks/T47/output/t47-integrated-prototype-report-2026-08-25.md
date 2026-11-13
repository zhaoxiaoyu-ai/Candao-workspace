# T47｜整合能力、客户案例与资源三合一原型报告

## 结论

已完成一份新的 Web Desktop 1440-first 原型，把三页内容改为一条评估链路：

`接入问题 -> 案例证据 -> 资源下一步 -> 演示分流`

输出原型不再采用 T45 那种底部内容登记清单，而是把内容放进真实页面模块：暗色 Hero、系统接入工作台、案例证明区、资源路由、支援查询、演示分流和整合判断矩阵。

## 输出文件

- 原型 HTML：`tasks/T47/output/prototype/index.html`
- 1440 全页截图：`tasks/T47/output/screenshots/t47-integrated-prototype-1440-full.png`
- Stitch 重试提示词：`tasks/T47/output/stitch-input/integrated-proof-resource-stitch-prompt-2026-08-25.md`
- 内容覆盖契约：`tasks/T47/output/contracts/t47-integrated-content-contract.json`
- 静态 QA：`tasks/T47/output/qa/t47-static-content-report.json`
- domain-copy QA：`tasks/T47/output/qa/domain-copy-t47-integrated-report.json`
- 渲染 QA：`tasks/T47/output/qa/t47-render-report.json`
- 可见文本导出：`tasks/T47/output/qa/t47-integrated-prototype-visible-text-2026-08-25.txt`

## 信息架构

1. `Hero`：说明为什么三者合并，首屏直接给出接入验证、案例证据、资源下一步三条路径。
2. `三页合并方式`：用三张卡重新定义三页角色，避免简单拼接。
3. `接入验证`：保留整合能力页的系统对象、资料对象、AMS / Connector、OMS / 財務對賬 / CDBI 流向。
4. `案例证据`：保留服务规模、实名案例、业态成果和授权指标，客户名称只做文字呈现，不生成假 Logo。
5. `资源中心`：保留问题阶段、FAQ、接入准备清单、案例资源、支援中心、媒体资料和产品演示分流。
6. `整合判断矩阵`：把问题、接入 / 产品关系、相似案例和资源下一步放在同一个判断面。
7. `Final CTA`：把前面的判断结果带到 Demo 表单摘要。

## 文案与术语处理

- `Finance Center` 未进入可见页面，统一改为「財務對賬」。
- `Business Center` / `Data Center` 未进入可见页面，改为「營運管理中心」和「數據分析中心」。
- 品牌可见名使用「餐道」。
- 保留必要产品与技术词：`OMS`、`DMS`、`iDMS`、`CDBI`、`SaaS`、`AMS / Connector`、`Menu Center`、`POS / KDS`、`CRM`、`ERP`、`API`。

## QA 结果

- 内容覆盖：`224/224 pass`
- 禁用词 / 样式风险：`pass`
- domain-copy：`8/8 pass`
- 1440 渲染：`pass`
- 页面语言：`zh-Hant`
- 渲染尺寸：`1440 x 8202`
- 图片加载：`2/2 img pass`，背景图数量 `4`
- 横向溢出：无，`documentWidth = 1440`

## Stitch 提示词处理

本轮没有直接上传或执行 Stitch。已准备下一次重试用提示词，并按官方 Stitch Learn / Prompting 的结构化方式组织：明确平台、页面目标、设计系统、页面结构、内容覆盖规则和 hard failures。后续若继续走 Stitch，建议上传 HTML、1440 截图和内容契约，不再只用短文字提示让 Stitch 自行还原。

参考入口：

- <https://stitch.withgoogle.com/docs/learn/overview>
- <https://stitch.withgoogle.com/docs/learn/prompting/>
