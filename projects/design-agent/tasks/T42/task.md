# T42 - 餐道官网完整首页动态交互低保真原型

## 状态

done

## 目标

在 T41 完整首页全页低保真效果稿基础上，制作一个可在浏览器中打开和交互的动态原型。原型需要保持低保真、低密度和官网式轻交互，不改变 T41 静态结构基线。

## 输入

- `projects/design-agent/tasks/T41/output/homepage-full-page-wireframe.html`
- `projects/design-agent/tasks/T41/output/homepage-full-page-wireframe.png`
- 用户反馈：现在这个餐道官网首页全页低保真效果能不能做成动态的，可以交互的。

## 输出

- `output/homepage-interactive-wireframe.html`
- `output/homepage-interactive-wireframe-2026-08-01.md`
- `output/navigation-and-route-correction-2026-08-01.md`

## 完成记录

2026-08-01 已完成可交互 HTML 原型。

已加入交互：

- 顶部导航平滑滚动到对应模块。
- 首屏 spotlight 自动轮播，并支持点击轮播点切换。
- 经营问题卡片 hover / 点击后切换解决方案说明和流程。
- 产品能力 Tab 切换平台连接图内容。
- 产品卡 hover 显示轻量浮层，点击显示原型提示。
- 集成分类点击后切换目录预览内容。
- 客户案例支持多案例切换。
- 底部下一步入口点击后打开轻量表单弹层。
- 表单提交后显示反馈 toast。

本轮没有启动开发服务器，因为该原型是单个 HTML 文件，直接用浏览器打开即可体验。

## 2026-08-01 导航修正说明

用户指出当前首页顶部导航和产品功能目录不应全部是首页锚点。确认该问题成立：

- T42 中的顶部导航平滑滚动仅是单文件低保真交互原型的效率处理。
- 它不应作为正式官网的信息架构。
- 正式官网应采用多页面导航，产品、解决方案、集成、案例、关于、联系等栏目应跳转独立页面或页面族。
- 首页可以保留摘要和入口，但不能用首页模块替代产品详情页、集成目录页和联系页。
