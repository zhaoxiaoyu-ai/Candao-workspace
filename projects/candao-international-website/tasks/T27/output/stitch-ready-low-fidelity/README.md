# 餐道国际官网 Stitch-ready 低保真外部包

版本：2026-08-19

## 入口

- 页面总览：`index.html`
- 页面清单：`stitch-ready-page-map.json`
- 元素放置指南：`element-placement-guide.md`
- 元素放置地图：`element-placement-map.json`
- Stitch Prompt：`stitch-ready-prompt-pack.md`

## 页面文件

- `home.html`
- `solutions.html`
- `platform.html`
- `integrations.html`
- `customers.html`
- `resources.html`
- `about.html`
- `demo.html`

## 页面内容还原

- `index.html` 已将 8 个页面的真实内容预览嵌入页面卡片。
- 各页面已移除底部说明型配置卡片，内容要求已还原进 Hero、流程图、工作台、案例、表单、资源入口等真实页面模块。
- 当前页面已补齐视觉媒介层：摄影构图、产品截图式界面、概念拓扑、数据图表、视频入口和动效关键帧已直接进入对应内容区域。
- `element-placement-map.json` 仅作为结构化来源，便于后续自动更新或交给生成工具读取，不作为页面可见内容。

## 使用边界

- 这套文件用于 Stitch 高保真生成前的外部低保真输入。
- 可见页面内容为繁體中文单一 Locale。
- 导航保留语言切换 `繁中 / EN`，但正文不做双语混排。
- 已移除内部来源编号、待确认提示、QA 说明、missing 标记和原型占位属性。
- 使用授权餐道 SVG Logo。
- 页面中的产品画面、摄影构图和视频缩略入口为低保真媒介表达，用来指导高保真承载方式；不得把它们误认为真实产品截图、真实客户照片或真实视频封面。
- 不代表 H3-01 低保真业务验收已由人工批准。
- 不代表任何页面文案已进入 `approved_and_locked`。

## Stitch 使用顺序

1. 打开 `index.html`，确认 8 个页面的真实内容预览。
2. 打开对应页面 HTML，查看页面结构、访客可见文案、页面内真实模块和视觉媒介承载方式。
3. 需要结构化读取时，再读取 `element-placement-map.json` 中同一页面的模块要求。
4. 参考 `element-placement-guide.md` 理解每个模块该放置的元素、素材状态和禁止替代方式。
5. 使用 `stitch-ready-prompt-pack.md` 中对应页面 Prompt 生成高保真，并保留 HTML 中的摄影、产品画面、概念图、视频入口和关键帧角色。
6. 缺真实产品截图、产品视频、客户 Logo、客户图片或公司图片时，只使用文件中规定的 fallback，不生成未授权素材。
