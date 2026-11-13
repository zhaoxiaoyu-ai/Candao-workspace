# Stitch-ready 元素放置层补齐报告

日期：2026-08-19  
任务：T28  
状态：已完成

## 本次目标

在 T27 对外 Stitch-ready 低保真包上补齐“每个页面、每个模块应放置什么元素”的说明层，避免 Stitch 只按文案生成通用 SaaS 页面。

本轮未调用 Stitch，不生成高保真 screen，不批准 H3-01 / H3-02。

## 新增和修改文件

新增：

- `tasks/T27/output/stitch-ready-low-fidelity/element-placement-guide.md`
- `tasks/T27/output/stitch-ready-low-fidelity/element-placement-map.json`
- `tasks/T28/output/qa/element-placement-structure-check-2026-08-19.json`
- `tasks/T28/output/qa/element-placement-copy-qa-input-2026-08-19.json`
- `tasks/T28/output/qa/element-placement-copy-qa-result-2026-08-19.json`
- `tasks/T28/output/qa/stitch-ready-visible-copy-qa-input-after-elements-2026-08-19.json`
- `tasks/T28/output/qa/stitch-ready-visible-copy-qa-result-after-elements-2026-08-19.json`
- `tasks/T28/output/qa/stitch-ready-static-check-after-elements-2026-08-19.json`
- `tasks/T28/output/qa/platform-browser-check-after-element-card-2026-08-19.json`
- `tasks/T28/output/screenshots/t28-platform-after-element-card-1440-full.png`

修改：

- `tasks/T27/output/stitch-ready-low-fidelity/stitch-ready-prompt-pack.md`
- `tasks/T27/output/stitch-ready-low-fidelity/stitch-ready-page-map.json`
- `tasks/T27/output/stitch-ready-low-fidelity/README.md`
- `tasks/T27/output/stitch-ready-low-fidelity/platform.html`
- `tasks/T27/output/stitch-ready-low-fidelity/assets/stitch-ready.css`

## 调用关系

后续交给 Stitch 时按以下顺序使用：

1. 打开对应页面 HTML，确认页面结构和访客可见文案。
2. 读取 `stitch-ready-page-map.json`，确认页面任务、目标角色和 screen 名称。
3. 读取 `element-placement-map.json`，逐模块确认元素类型、素材状态、fallback 和禁止替代。
4. 参考 `element-placement-guide.md` 理解页面层面的元素放置原则。
5. 使用 `stitch-ready-prompt-pack.md` 中对应页面 Prompt 生成高保真。

## 元素层补齐范围

- 覆盖 8 个页面：首頁、解決方案、平台、整合能力、客戶案例、資源、關於餐道、預約產品演示。
- 覆盖 41 个模块。
- 每个模块均包含：放置元素、元素说明、素材状态、缺素材处理、禁止替代。
- 明确真实素材边界：产品截图、产品视频、客户 Logo、客户照片、公司照片、证书图和客户引用语原图不得由模型生成。
- 明确可抽象表达：营运中枢拓扑、场景链路、Connector 网络、资源路由、表单摘要、时间轴、指标布局和支援查询板。

## 可见页面小修

Platform 的“产品演示入口”原文提到 `CDBI / Finance`，但低保真卡片只有 OMS、Menu / Store、DMS / iDMS 三项。本轮补充 `CDBI / Finance` 卡片，并将该组卡片调整为四列等权重，避免数据与对账能力在视觉上被降级。

## QA 结果

- 元素结构检查：`pass`
  - 页面：8
  - 模块：41
  - 缺字段：0
- 元素层 domain-copy QA：8/8 `pass`
- 可见 HTML domain-copy QA：9/9 `pass`
- 静态检查：`pass`
  - 文件：17
  - HTML 页面：9
  - 元素模块：41
- Platform 浏览器检查：`pass`
  - 演示卡片：4
  - 栅格：四列等权
  - 截图：`tasks/T28/output/screenshots/t28-platform-after-element-card-1440-full.png`

## 仍需人工确认

- H3-01：低保真原型业务验收是否通过。
- H3-02：哪些页面、模块和段落进入 `approved_and_locked`。
- 真实产品截图、产品视频、客户 Logo、案例图片、公司图片和证书图的具体文件仍需后续补齐或确认。

## 结论

T27 现在不只是“内容低保真”，而是具备了可供 Stitch 使用的页面结构、文案、页面地图、元素放置地图、元素说明指南和页面级 Prompt。后续进入 Stitch 时，应优先使用 T27 目录下的这一组文件作为外部输入。
