# T30 - 将元素真实还原进低保真页面内容

状态：done  
日期：2026-08-19

## 背景

T29 将元素配置嵌入低保真链接，但呈现方式仍然是独立说明模块，用户指出这不是目标。目标不是告诉设计师“应该承载什么”，而是像制作高保真一样，把这些元素作为页面真实内容、真实界面和真实业务画面还原到页面模块中。

## 目标

在 `tasks/T27/output/stitch-ready-low-fidelity/` 最新低保真包中，移除说明型元素配置区，并把 T28 元素要求转化为页面本身的低保真内容表达。

## 范围

- 首页总览 `index.html` 改为页面预览入口，不展示元素说明卡。
- 8 个页面移除底部「頁面元素配置」说明区。
- 在页面现有模块内补足真实低保真元素：产品舞台、状态面板、营运拓扑、场景链路、Connector 流向、授权指标、实名客户案例、资源路由、公司网络、服务流程和 Demo 表单分流。
- 保留 `element-placement-map.json` 和 `element-placement-guide.md` 作为设计输入资料，但不把其说明层直接展示在页面里。

## 约束

- 不调用 Stitch，不生成高保真 screen。
- 不生成假产品截图、假客户 Logo、假客户照片、假证书或未授权数据。
- 不新增未确认指标、SLA、合作状态或客户事实。
- 页面可见内容使用繁體中文单一 Locale。
- 保留 `iDMS`、`SaaS`、`AMS / Connector` 等大小写敏感术语。

## 验收

- 页面中不再出现「元素配置總覽」「頁面元素配置」「應承載的元素」这类说明型模块。
- 每个页面至少有一个真实页面元素增强点，而不是只新增说明文字。
- 8 页均可浏览，导航正常。
- domain-copy QA、静态检查和浏览器检查通过。

## 输出

- `tasks/T30/output/real-content-restoration-report-2026-08-19.md`
- `tasks/T30/output/scripts/realize_elements_in_pages.py`
- `tasks/T30/output/scripts/qa_realized_low_fidelity.py`
- `tasks/T30/output/scripts/qa_browser_low_fidelity.cjs`
- `tasks/T30/output/qa/domain-copy-t30-report.json`
- `tasks/T30/output/qa/static-realized-low-fidelity-report.json`
- `tasks/T30/output/qa/browser-realized-low-fidelity-report.json`
- `tasks/T30/output/screenshots/`
