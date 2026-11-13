# T29 - 将元素示例层整合进最新低保真链接

状态：done  
日期：2026-08-19

## 目标

在 T27 最新对外低保真包基础上，将 T28 的逐页逐模块元素放置层直接整合进可打开的低保真 HTML 链接中，使首页总览和 8 个页面都能看到对应模块应放置的高保真元素、素材状态和替代呈现方式。

## 范围

- 更新 `tasks/T27/output/stitch-ready-low-fidelity/index.html`。
- 更新 `tasks/T27/output/stitch-ready-low-fidelity/*.html` 八个页面。
- 更新 `tasks/T27/output/stitch-ready-low-fidelity/assets/stitch-ready.css`。
- 保留 `element-placement-map.json` 作为结构来源，不在页面中新增未经确认的业务事实、指标、客户或产品状态。

## 约束

- 不调用 Stitch，不生成新的高保真 screen。
- 不把内部证据说明、prompt 说明或开发说明写入访客主叙事。
- 不使用 `placeholder`、假 Logo、假产品截图、未授权数字、未确认 SLA 或未确认合作状态。
- 保留 `iDMS`、`SaaS`、`AMS / Connector` 等大小写敏感术语。
- 当前没有 `approved_and_locked` 文案；若后续出现锁定文案，原型阶段只能改布局，不得改写。

## 验收

- 最新低保真入口可直接看到页面清单和每页元素摘要。
- 每个页面底部都有对应的元素参考卡片。
- `element-placement-map.json` 与页面内元素参考数量一致。
- domain-copy QA、静态检查和浏览器检查通过。

## 完成记录

- 已在 `index.html` 内嵌 8 个页面的元素配置摘要。
- 已在 8 个页面底部内嵌共 41 个模块元素配置卡片。
- 已新增可复跑脚本 `output/scripts/integrate_element_sections.py`。
- 已完成 domain-copy QA、静态结构检查和浏览器渲染检查。
