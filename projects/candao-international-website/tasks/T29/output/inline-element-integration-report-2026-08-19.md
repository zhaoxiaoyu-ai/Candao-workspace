# 低保真链接内嵌元素配置报告

日期：2026-08-19  
任务：T29  
状态：已完成

## 本次目标

将 T28 的逐页逐模块元素配置，从独立 Markdown / JSON 文件整合到最新低保真入口中。现在打开 `tasks/T27/output/stitch-ready-low-fidelity/index.html`，即可直接看到 8 个页面的元素配置摘要；打开任一页面，页面底部可看到该页各模块应承载的高保真元素、素材状态和替代呈现方式。

本轮未调用 Stitch，未生成新的高保真 screen，也未批准 H3-01 / H3-02。

## 新增文件

- `tasks/T29/task.md`
- `tasks/T29/output/scripts/integrate_element_sections.py`
- `tasks/T29/output/qa/t29-inline-visible-copy-qa-input-2026-08-19.json`
- `tasks/T29/output/qa/t29-inline-visible-copy-qa-result-2026-08-19.json`
- `tasks/T29/output/qa/t29-inline-static-check-2026-08-19.json`
- `tasks/T29/output/qa/t29-inline-browser-check-2026-08-19.json`
- `tasks/T29/output/screenshots/t29-index-1440-full.png`
- `tasks/T29/output/screenshots/t29-home-1440-full.png`
- `tasks/T29/output/screenshots/t29-platform-1440-full.png`
- `tasks/T29/output/screenshots/t29-integrations-1440-full.png`
- `tasks/T29/output/screenshots/t29-about-1440-full.png`

## 修改文件

- `tasks/T27/output/stitch-ready-low-fidelity/index.html`
- `tasks/T27/output/stitch-ready-low-fidelity/home.html`
- `tasks/T27/output/stitch-ready-low-fidelity/solutions.html`
- `tasks/T27/output/stitch-ready-low-fidelity/platform.html`
- `tasks/T27/output/stitch-ready-low-fidelity/integrations.html`
- `tasks/T27/output/stitch-ready-low-fidelity/customers.html`
- `tasks/T27/output/stitch-ready-low-fidelity/resources.html`
- `tasks/T27/output/stitch-ready-low-fidelity/about.html`
- `tasks/T27/output/stitch-ready-low-fidelity/demo.html`
- `tasks/T27/output/stitch-ready-low-fidelity/assets/stitch-ready.css`
- `tasks/T27/output/stitch-ready-low-fidelity/README.md`

## 页面内调用关系

1. `index.html` 是最新低保真入口，新增「元素配置總覽」，展示 8 个页面的元素摘要和页面入口。
2. 每个页面底部新增「頁面元素配置」，展示该页模块卡片。
3. 模块卡片内容来自 `element-placement-map.json`，由 `integrate_element_sections.py` 自动写入。
4. `element-placement-guide.md` 和 `element-placement-map.json` 保留为结构化来源，供后续生成工具或人工核对读取。
5. `assets/stitch-ready.css` 新增元素配置卡片样式与移动端断点。

## 一次完整生成流程

1. 读取 `domain-copy/` 规则、T27 低保真包和 T28 元素地图。
2. 运行 `integrate_element_sections.py`。
3. 脚本读取 `element-placement-map.json`。
4. 脚本替换或插入 `<!-- element-overview:start -->` 与 `<!-- element-reference:start -->` 标记区。
5. 首页得到 8 个页面元素摘要；8 个页面得到共 41 个模块元素卡片。
6. 运行 domain-copy、结构和浏览器 QA。

## QA 结果

- domain-copy QA：9/9 `pass`
- 静态结构检查：`pass`
  - 页面：8
  - 模块：41
  - 首页元素摘要：8
  - 页面元素配置区：8
  - `text-transform` 风险：false
- 浏览器检查：`pass`
  - 9 个页面均可渲染
  - 导航、Logo、元素配置标题和卡片数量均通过
  - 未发现可见 `Candao`、`IDMS`、`SAAS`、`placeholder`、`Stitch`、内部词或测试残留

## 仍需人工确认

- H3-01：低保真原型业务验收是否通过。
- H3-02：哪些页面、模块和段落进入 `approved_and_locked`。
- 真实产品截图、产品视频、客户 Logo、案例图片、公司图片和证书图的具体素材文件仍需补齐或确认。
- 元素配置是否足以进入正式 Stitch 生成，仍应由人工确认页面优先级和生成顺序。

## 结论

最新低保真链接已经从“只展示页面结构”升级为“页面结构 + 页面内元素配置”。后续给 Stitch 或高保真设计时，可以先打开 `index.html` 看到全站元素摘要，再进入单页查看模块级元素要求；不必只依赖单独的元素说明文件。
