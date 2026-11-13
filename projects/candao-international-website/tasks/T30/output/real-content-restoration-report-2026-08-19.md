# T30 真实内容还原报告

日期：2026-08-19  
入口：`tasks/T27/output/stitch-ready-low-fidelity/index.html`

## 结论

已按用户反馈纠正 T29 的方向：T29 把元素要求做成页面底部说明卡，仍然是在告诉“应该承载什么”；T30 已移除这些说明型区块，并把元素真实还原进页面本身的 Hero、流程图、工作台、拓扑、案例、资源入口和表单分流中。

当前低保真可以作为对外提供给 Stitch 的页面输入；`element-placement-map.json` 与 `element-placement-guide.md` 只保留为结构化来源，不再作为页面可见内容。

## 本轮改动

- `index.html`：移除 8 页元素配置总览，改为 8 个页面真实内容预览卡。
- `home.html`：新增 Hero 下方客户品牌条；将“一個系統連接關鍵流程”右侧改为全链路营运拓扑；能力探索器右侧改为 OMS 工作台示意；案例摘要补充实名客户证据。
- `solutions.html`：首屏右侧改为场景链路；常见问题卡补业务对象标签；场景导览右侧加入“问题 / 能力 / 结果”链路。
- `platform.html`：Hero 状态补 Finance Center / CDBI / AMS / Connector；产品能力地图右侧改为平台工作台示意；产品演示入口改为带视频入口的真实产品卡。
- `integrations.html`：首屏右侧改为 AMS / Connector 接入拓扑；接入对象详情补资料对象标签；新增资料流向区。
- `customers.html`：首屏加入案例证据卡；实名案例区加入“客户 + 业务范围”证据摘要，避免只重复客户名。
- `resources.html`：首屏补售前方案、导入资料、技术对接、品牌案例入口信号。
- `about.html`：首屏补 2014、广州总部、香港 / 北京 / 上海 / 成都服务网络信号条。
- `demo.html`：演示摘要改为真实分流卡，并加入提交线索、需求分流、安排演示流程。
- `assets/stitch-ready.css`：删除 T29 元素配置样式；新增真实页面模块样式；修复深色区白卡文字反白、Hero 品牌条 padding 和移动端状态面板裁切。
- `README.md`：改写交接说明，明确页面内不再展示配置卡，内容要求已经进入真实页面模块。

## 新增文件

- `tasks/T30/task.md`
- `tasks/T30/output/scripts/realize_elements_in_pages.py`
- `tasks/T30/output/scripts/qa_realized_low_fidelity.py`
- `tasks/T30/output/scripts/qa_browser_low_fidelity.cjs`
- `tasks/T30/output/qa/domain-copy-t30-input.json`
- `tasks/T30/output/qa/domain-copy-t30-report.json`
- `tasks/T30/output/qa/domain-copy-t30-autofix.json`
- `tasks/T30/output/qa/static-realized-low-fidelity-report.json`
- `tasks/T30/output/qa/browser-realized-low-fidelity-report.json`
- `tasks/T30/output/screenshots/*.png`

## QA 结果

- T30 静态 QA：通过。检查 9 个 HTML、CSS、关键模块、内部说明残留、术语大小写和导航。
- domain-copy QA：9/9 通过。无泛化表达、禁用表达、未定义指标、品牌显示错误或大小写敏感术语错误。
- 浏览器 QA：18/18 通过。桌面 1440 与移动 390 均无横向溢出；关键模块可见；Home、Solutions、Platform、Integrations、Customers、Demo 的交互切换通过。
- 目检修复：已修复 Hero 客户品牌条文字不可见、深色区白卡文字反白、移动端产品状态面板底部裁切、客户案例区客户名重复问题。

## 仍需人工确认

- H3-01 低保真业务验收仍未批准。
- H3-02 `approved_and_locked` 文案锁定仍未批准。
- 真实产品截图、产品视频、客户 Logo、客户照片、公司图片和证书类素材仍需真实资产或人工确认后才能进入高保真 / 正式官网。
- 当前页面中的授权指标沿用 PPT 与项目术语规则；如新增新的百分比、订单量、GMV、SLA 或客户成果，需要先进入 `domain-copy/glossary.yaml` 或人工确认队列。
