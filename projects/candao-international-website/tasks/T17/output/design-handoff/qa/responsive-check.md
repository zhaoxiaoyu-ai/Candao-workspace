# 响应式 QA

日期：2026-08-16

## 规则

- Desktop：1440px 页面画布，1200px 内容宽度。
- Mobile：390px 基准，不把所有内容简单压成同一种单列卡片。

## 当前设计执行版

- Header 在移动端换成可打开 / 关闭的导航抽屉，390px 下已通过 Playwright 检查。
- Home 能力探索器在 HTML 中可点击切换；移动端以单列 rail + 详情面板替代桌面双栏。
- Solutions 场景叙事在 HTML 中可点击切换；移动端以单列 rail + 详情面板替代 Sticky。
- Platform 能力切换在 HTML 中可点击切换；移动端以单列 rail + 详情面板替代桌面双栏。
- Integrations、Customers、Resources、About 已补充可点击状态，移动端不再只是静态单列。
- Demo 在 390px 下变成单列 Stepper + 摘要面板。

## 后续高保真前需要补充

- 产品截图横向滑动状态。
- 真正的产品截图文件接入后的横向滑动、标注层和溢出复核。
