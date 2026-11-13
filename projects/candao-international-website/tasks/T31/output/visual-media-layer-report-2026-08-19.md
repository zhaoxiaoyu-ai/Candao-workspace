# T31 低保真视觉媒介层补齐报告

日期：2026-08-19  
入口：`tasks/T27/output/stitch-ready-low-fidelity/index.html`

## 结论

当前问题不是低保真不能表达图形化内容，而是此前页面只把“元素应放什么”转成了文字和结构，仍缺少媒介承载方式。T31 已把摄影构图、产品截图式界面、概念拓扑、视频入口、指标图表和动效关键帧直接放入对应页面模块。

这版更准确地说是“视觉化低保真 / 中保真输入”：它可以提供给 Stitch 理解每个模块该用什么画面承载，但不把低保真示意当作真实产品截图、真实客户照片、真实客户 Logo 或真实视频封面。

## 本轮改动

- `index.html`：Hero 产品舞台加入页面叙事关键帧，总览卡片增加视觉化预览层。
- `home.html`：Hero 加入订单进入、OMS 分派、履约和对账回流关键帧；能力探索器加入产品截图式界面；客户案例摘要加入门店营运摄影构图和导入前后对比板。
- `solutions.html`：Hero 加入场景概念拓扑；场景详情加入问题、能力、结果关键帧。
- `platform.html`：Hero 加入产品切换关键帧；能力地图右侧加入产品截图式工作台；产品演示入口升级为 2x2 视频缩略入口。
- `integrations.html`：Hero 加入 AMS / Connector 接入概念图；资料流向加入同步关键帧。
- `customers.html`：Hero 直接展示客户场景摄影构图、案例数据看板和导入前后关键帧；服务规模指标卡加入图表表达；实名案例详情加入案例营运产品画面。
- `resources.html`：资源路径加入关键帧；接入清单加入图表表达；产品演示分流加入案例摄影构图、产品画面和关键帧。
- `about.html`：公司网络加入服务团队与客户导入摄影构图；质量可信区加入证书 / 稳定性视觉卡。
- `demo.html`：演示摘要加入需求分流产品画面；演示模块摘要加入安排演示关键帧。
- `assets/stitch-ready.css`：新增 T31 视觉媒介层样式，覆盖 `photo-scene`、`product-shot-frame`、`concept-illustration`、`motion-strip`、`video-thumb`、`metric-chart` 等结构。
- `README.md`、`stitch-ready-prompt-pack.md`、`stitch-ready-page-map.json`：同步说明当前 HTML 已包含页面内视觉媒介层，供 Stitch 使用时保留媒介角色。

## 对“是否需要高保真静态页”的判断

可以做，但不建议跳过当前这一步。低保真应先解决：

- 每个模块到底用摄影、产品截图、概念图、数据图表、视频入口还是动效承载；
- 同一页不同模块的视觉角色是否重复；
- 哪些位置必须等待真实素材；
- 哪些画面可以用抽象拓扑或产品截图式骨架过渡。

完成这层后，再做高保真静态页会更稳。下一步如果要试高保真，建议先选 `Home`、`Platform`、`Customers` 三页中的 1-2 页，因为它们分别承担第一印象、产品能力和销售证明。

## QA 结果

- 静态视觉媒介 QA：9/9 通过，报告 `tasks/T31/output/qa/static-visual-media-low-fidelity-report.json`。
- domain-copy QA：9/9 通过，报告 `tasks/T31/output/qa/domain-copy-t31-report.json`。
- 浏览器 QA：18/18 通过，桌面 1440 与移动 390 均无横向溢出，报告 `tasks/T31/output/qa/browser-visual-media-low-fidelity-report.json`。
- 目检截图：`customers-1440.png`、`customers-390.png`、`platform-1440.png`、`home-1440.png`。已修正 Platform 视频入口桌面 4 列过窄问题，改为 2x2。

## 仍需人工确认

- H3-01：低保真业务验收是否通过。
- H3-02：哪些页面和文案进入 `approved_and_locked`。
- 真实产品截图、产品视频、客户 Logo、客户现场照片、公司照片、证书图片和客户引用语原图仍需真实素材或人工确认。
- 若下一步进入高保真静态页，需要确认优先页面：建议 Home + Platform，或 Home + Customers。
