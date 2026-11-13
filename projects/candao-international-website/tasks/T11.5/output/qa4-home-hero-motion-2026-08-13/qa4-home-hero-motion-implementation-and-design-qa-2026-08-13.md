# QA4 Home Hero 进入动画示例与 Design QA 记录

日期：2026-08-13

## 任务范围

为餐道国际官网 React / Next 能力原型的 Home Hero 增加一个单独 QA4 进入动画示例。

执行约束：

- 保持 Hero-Centric、现代企业 SaaS、繁體中文单一 Locale。
- 主色沿用 `#528dff`。
- 使用 `motion/react`。
- 仅做 2-3 层克制入场：背景视觉、Headline / 说明 / CTA 文案组、产品 UI overlay。
- 优先 `opacity` 与 `transform`。
- 单项时长控制在 150-300ms，`ease-out`，stagger 不超过 0.08s。
- 必须支持 `prefers-reduced-motion`。
- 不引入未确认客户 Logo、数字、认证或英文正文。

## ui-ux-pro-max 判断

已按 `ui-ux-pro-max` 查询餐饮 SaaS Hero 与进入动效边界。

采用判断：

- Hero 模式：Hero-Centric。
- 视觉风格：现代企业 SaaS，轻量 Soft UI / 控制台 overlay。
- 动效层级：Motion 4/10，不使用强滚动视差或大幅位移。
- 进入动效：只让关键内容建立阅读顺序，不逐字炫技，不让装饰元素抢主视觉。
- 无障碍：必须响应 `prefers-reduced-motion`，减少动态时所有入口层静态显示。

## 实现内容

代码位置：

- `source/react-next-capability-prototype/src/components/candao/capability-prototype.tsx`
- `source/react-next-capability-prototype/src/components/ui/background-beams.tsx`
- `source/react-next-capability-prototype/src/app/globals.css`

实现层级：

- 背景视觉层：`opacity 0 -> 1`、`scale 1.012 -> 1`，300ms，`easeOut`。
- 文案层：Kicker、Headline、说明、CTA 作为主要阅读顺序，240ms，`easeOut`，stagger `0.06s`。
- 产品 UI overlay 层：控制台从 `opacity 0 / y 18` 到静态位置，280ms，`easeOut`，delay `0.08s`。

动效收敛：

- 移除 Hero headline 的逐词生成动效，改为整体 headline 入场。
- 移除主 CTA 的持续 moving-border 动效，避免企业 SaaS Hero 过度装饰。
- 背景 beams 仅作为默认视觉氛围；在 `prefers-reduced-motion: reduce` 下隐藏。

Reduced Motion：

- 使用 CSS `@media (prefers-reduced-motion: reduce)` 将 `.qa4-motion-layer` 强制为 `opacity: 1`、`transform: none`、`transition-duration: 0ms`。
- 使用 `.qa4-hero-beams` 在 reduced-motion 下隐藏装饰性 beams。
- 该方案避免 SSR / hydration mismatch：Motion JSX 属性保持一致，减少动态由 CSS media query 处理。

## 截图证据

源视觉参考：

- `tasks/T11.5/output/figma-current-page-narrative-audit-2026-08-12/01-home.png`

实现截图：

- `tasks/T11.5/output/qa4-home-hero-motion-2026-08-13/screenshots/home-hero-motion-production-desktop-1440.png`
- `tasks/T11.5/output/qa4-home-hero-motion-2026-08-13/screenshots/home-hero-motion-production-reduced-motion-1440.png`

说明：最终 QA 截图来自 production server `http://localhost:4187`，不是 Next dev overlay 截图。

## Design QA

Final result：blocked / not passed

不能标记 passed 的原因：

- 当前可用源视觉不是本次 QA4 动效示例的已确认合规基线。源视觉中包含未确认客户 Logo 与大数字证明区块，而本次任务明确禁止引入未确认客户 Logo、数字、认证或英文正文。
- 源视觉 Hero 为居中标题 + Logo strip + 三个占位大卡片；本次 React 原型 Hero 为左侧文案 + 右侧产品 UI overlay。布局目标不同，不能按像素一致性通过。
- 本次已生成实现截图和 reduced-motion 截图，但没有经过批准的“QA4 Home Hero 动效目标稿 / motion storyboard”作为 passed 标准。

对比记录：

| 检查项 | 对比结论 |
| --- | --- |
| 字体 | 实现使用现有 Next / Geist +繁中文字 fallback，字重与源图接近但字号、换行和对齐方式不同；不判 passed。 |
| 间距 | 实现采用左右分栏与产品 UI overlay，源图为居中构图；空间模型不同；不判 passed。 |
| 颜色 | 主 CTA、UI accent 与系统主色 `#528dff` 一致；整体背景更深，适合当前 overlay 可读性。 |
| 图片质量 | 实现使用本地餐饮运营背景图，production 截图显示清晰且未空白；但源图与实现图不是同一画面裁切。 |
| 文案 | 实现保持繁體中文单一 Locale，保留 `Candao`、`SaaS`、`EN` 等允许品牌 / 技术词；未新增未确认客户 Logo、数字、认证或英文正文。 |
| 动效边界 | 实现符合 150-300ms、`easeOut`、`stagger 0.06s`、`prefers-reduced-motion` 静态降级；默认与 reduced-motion production 截图均可见。 |

后续若要将 design-qa 标记 passed，需要先提供或确认一个合规的 Home Hero 静态源稿 / motion storyboard，其中不包含未授权 Logo、未确认数字或英文正文。

## 验证结果

已通过：

- `pnpm lint`
- `pnpm exec tsc --noEmit`
- `pnpm build`
- Playwright + production server 截图：默认首屏与 `prefers-reduced-motion: reduce` 首屏均可见，production reduced-motion console 无问题。

边界：

- 开发模式下全站仍会提示非 Hero 图片缺少 Next Image `sizes` prop；这不是本次 Hero QA4 动效改动引入的问题，也不影响 production reduced-motion 截图。
