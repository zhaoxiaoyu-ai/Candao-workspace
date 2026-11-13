# QA4 餐道官网 Hero 进入动画快捷语示例

## 目的

为 `quick-actions` 快捷语库新增一个独立的餐道官网 Home Hero 示例，归属于 QA4「Motion 进入动画」场景。

该示例用于后续快速代入：

```text
QA014 餐道官网 Hero
```

或自然语言：

```text
餐道Hero QA4
```

```text
用 QA4 给餐道官网 Hero 做进入动画
```

## 快捷语条目

已新增到：

```text
/Users/victorwong/.codex/skills/quick-actions/references/shortcut-library.md
```

条目 ID：

```text
QA014
```

名称：

```text
餐道官网 Hero QA4 进入动画
```

能力：

```text
QA4 / motion + $ui-ux-pro-max + $design-qa
```

触发词：

```text
餐道Hero, Candao Hero, QA4, Hero进入动画, homepage hero motion, design-qa
```

## 代入提示词

```text
用 QA4 为餐道国际官网 Home Hero 做单独进入动画示例：先用 ui-ux-pro-max 判断餐饮 SaaS Hero 的动效层级，保持 Hero-Centric、现代企业 SaaS、繁體中文单一 Locale、主色 #528dff；再用 motion/react 实现 headline、说明、CTA、产品 UI overlay 和背景视觉的 2-3 层克制入场，优先 opacity 与 transform，150-300ms，ease-out，stagger 不超过 0.08s，必须支持 prefers-reduced-motion；不得引入未确认客户 Logo、数字、认证或英文正文；若已有源视觉和渲染实现截图，再按 design-qa 对比字体、间距、颜色、图片质量和文案，否则明确 design-qa 尚未执行且不能标记 passed。
```

## ui-ux-pro-max 依据

本次用 `ui-ux-pro-max` 查询 `restaurant SaaS homepage hero operational intelligence`，推荐方向为：

- Pattern：Hero-Centric Design。
- Style：现代企业 SaaS，可用 Soft UI Evolution 的轻层次与可访问性原则，但项目主色仍以 Candao 既定 `#528dff` 为准。
- Motion：标准层级，不做复杂编排；Hero 只动画 1-2 个关键视觉组，避免过度动效。
- Accessibility：必须尊重 `prefers-reduced-motion`。

本次补充 UX 查询强调：

- 不忽略 reduced motion。
- 避免一次性动画过多元素。
- 进入动画使用 ease-out，不使用机械 linear UI transition。
- 避免强制 scroll/parallax 造成动效敏感问题。

## QA4 实现口径

适用于 React / Next.js + `motion/react`：

- Hero 文案组：`opacity: 0 -> 1`，`y: 16 -> 0`。
- CTA 组：跟随文案轻微 stagger，延迟不超过 `0.08s`。
- 产品 UI overlay：轻微 `opacity`、`y` 或 `scale`，避免夸张漂浮。
- 背景视觉：只做淡入或极轻位移，不做连续循环动画。
- `transition.duration` 控制在 `0.18s - 0.30s`。
- reduced motion 时禁用位移和缩放，只保留即时可见或极短 opacity。

## design-qa 边界

`product-design:design-qa` 不能在没有对比证据时直接使用。

要真正跑 design-qa，必须同时具备：

- 源视觉目标：Figma Hero 节点、截图、mockup 或设计图。
- 渲染实现：本地 URL、部署 URL、组件截图或页面截图。

如果缺少任一项，只能记录：

```text
final result: blocked
```

不能声称 QA passed。

## 选择器使用方式

重新生成视觉选择器后，可搜索：

```text
餐道
```

```text
QA4
```

```text
Hero
```

```text
design-qa
```

生成脚本：

```bash
/Users/victorwong/.codex/skills/quick-actions/scripts/build_picker.py --query "餐道"
```

生成文件：

```text
/Users/victorwong/.codex/skills/quick-actions/assets/quick-actions-picker.html
```
