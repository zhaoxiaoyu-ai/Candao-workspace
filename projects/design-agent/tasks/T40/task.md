# T40 - 餐道官网常见官网式轻交互低保真修订

## 状态

done

## 目标

根据用户反馈，修正 T39 对“交互呈现”的理解偏差：官网首页不应做成展开式说明页或后台信息面板，而应采用常见官网的轻交互方式，在默认态保留极少关键内容，通过 hover、自动轮播和鼠标互动展示少量细节。

## 输入

- `projects/design-agent/tasks/T34/output/candao-website-redesign-prd-standard-2026-07-31.md`
- `projects/design-agent/tasks/T38/output/reference-dense-wireframe.png`
- `projects/design-agent/tasks/T39/output/wireframe-interaction-01-default-state.png`
- `projects/design-agent/tasks/T39/output/wireframe-interaction-02-expanded-state.png`
- 用户反馈：交互应接近常见网页，如鼠标悬停、隔段时间切换内容、通过鼠标交互看到更多细节；默认呈现内容不多，重点是关键点和吸引人的视觉效果。

## 输出

- `output/wireframe-web-interaction-01-default-attract-state.png`
- `output/wireframe-web-interaction-02-hover-carousel-state.png`
- `output/web-style-light-interaction-wireframes-2026-08-01.md`

## 完成记录

2026-08-01 已生成两张修订版低保真静态页面：

- 页面 1：默认吸引态。以官网首屏为主，保留短标题、CTA、强视觉、少量价值标签、轻量信任数字和问题入口，并用进度点暗示自动轮播。
- 页面 2：hover / 轮播状态。保持同一页面结构，只展示用户 hover 到“配送协同低效”时的一个轻量浮层，并同步切换 hero spotlight，不再同时展开产品、集成、案例和联系分流。

本轮结论：餐道官网首页应默认“少而有吸引力”，完整内容通过二级页面、跳转或局部轻交互逐步出现。
