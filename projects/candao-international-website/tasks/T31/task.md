# T31 - 在低保真页面中补齐图形化媒介表达

状态：done  
日期：2026-08-19

## 背景

T30 已将 T28 的元素要求从说明型模块纠正为页面真实内容，但用户继续指出当前页面仍偏文字化，缺少摄影图、产品截图、概念插画和动效示例在对应内容区域内的直接表达。

## 目标

在 `tasks/T27/output/stitch-ready-low-fidelity/` 最新低保真包中，把视觉媒介层直接还原进页面模块，使其更接近可提供给 Stitch 的页面输入。

## 范围

- 在 Home、Solutions、Platform、Integrations、Customers、Resources、About、Demo 和总览页中补充页面内视觉媒介结构。
- 媒介类型包括营运场景摄影构图、产品截图式界面、概念拓扑、数据图表、视频入口、动效关键帧。
- 不新增独立说明模块，不把元素指南直接渲染为访客可见内容。

## 约束

- 不调用 Stitch，不生成新的高保真 screen。
- 不生成假产品截图、假客户 Logo、假客户照片、假证书、假视频封面或未授权指标。
- 可用低保真界面骨架、摄影构图框、概念图和关键帧表达媒介意图。
- 页面可见内容保持繁體中文单一 Locale。
- 保留 `iDMS`、`SaaS`、`AMS / Connector` 等大小写敏感术语。
- 不把任何文案标记为 `approved_and_locked`。

## 验收

- 每个页面至少出现一类图形化媒介承载方式。
- Customers 页面必须直接展示客户场景摄影构图、案例数据看板和导入前后关键帧。
- Platform 页面必须直接展示产品截图式界面和视频入口。
- Integrations 页面必须直接展示 Connector 拓扑和资料流动效关键帧。
- 8 页导航正常，桌面与移动端无横向溢出。
- domain-copy QA、静态 QA 和浏览器 QA 通过。

## 输出

- `tasks/T31/output/scripts/add_visual_media_layer.py`
- `tasks/T31/output/scripts/qa_visual_media_low_fidelity.py`
- `tasks/T31/output/scripts/qa_browser_visual_media_low_fidelity.cjs`
- `tasks/T31/output/qa/`
- `tasks/T31/output/screenshots/`
- `tasks/T31/output/visual-media-layer-report-2026-08-19.md`
