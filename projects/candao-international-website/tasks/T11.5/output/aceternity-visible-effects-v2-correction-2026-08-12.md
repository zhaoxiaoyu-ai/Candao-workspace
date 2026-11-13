# Aceternity Visible Effects V2 修正记录

日期：2026-08-12  
Figma 文件：`https://www.figma.com/design/BMXIuVRzSUUt9YNhVAQA6K`  
工作页：`03 Desktop Pages / Bilingual Validation`

## 修正原因

上一版首页样例的问题是：虽然文档中标注了 Aceternity 参考，但画面本身更像普通 SaaS 页面，无法直观看到 Aceternity 的组件能力。因此本轮新增 V2，不覆盖原 `首頁` Frame，也不删除上一版样例，而是单独建立一个能在视觉和图层层面都追溯 Aceternity 能力的新样例。

## 新增 Figma 节点

| 类型 | 名称 | Node ID |
| --- | --- | --- |
| 首页 V2 样例 | `首頁 / Aceternity Visible Effects V2 / Desktop TC` | `120:2` |
| 效果证据板 | `Aceternity Visible Effect Evidence / Home V2` | `120:573` |

截图备份：

- `tasks/T11.5/output/figma-aceternity-home-visible-effects-v2-2026-08-12.png`
- `tasks/T11.5/output/figma-aceternity-home-visible-effects-evidence-v2-2026-08-12.png`

## V2 如何实际转译 Aceternity 能力

| Aceternity 能力 | V2 中的实际呈现 |
| --- | --- |
| `BackgroundBeams` | Hero 内新增 `Aceternity BackgroundBeams / path field from component behavior`，包含多条曲线路径和高亮流动段，模拟源码中的 path field 与动态 gradient segment。 |
| `TextGenerateEffect` | H1 拆为 `TextGenerateEffect / staggered word layers`，包含 blur trail 与 visible final word group，表达分词逐步显现后的最终状态。 |
| `MovingBorder` | Navbar CTA、Hero 主 CTA、Final CTA 均有 `Aceternity MovingBorder` 图层，包含 base fill、active light segment 与 glow，模拟沿边缘移动的光点。 |
| `Feature Bento Grid With Skeletons` | 场景卡与平台能力卡加入 `Bento Skeleton / shimmer track`、`bright sweep`、`active pulse border`，不再只是静态卡片。 |
| `ContainerScroll` | 产品流程区新增 `ContainerScroll / scroll viewport mask`、`depth panel`、`enlarged active product panel` 和 step rail，表现滚动放大与步骤推进。 |
| `Logo Cloud Marquee` | 可信支撑区用双排 category chips、左右 fade mask 与透明位移模拟 marquee；未使用未授权客户 Logo。 |
| `CTA With Masonry Images` | Final CTA 使用深色 CTA block、图片 tile、intent card、progress card，并在 CTA 容器边缘加入 MovingBorder 路径。 |

## 回读验证

V2 首页样例 `120:2` 回读结果：

- 7 个页面区块：Hero、Business Scenario、Platform Overview、Product Showcase、Trust Preview、Final CTA、Footer。
- 文本节点：168
- 图片节点：3
- Aceternity 可追溯效果层数量：
  - `BackgroundBeams`：16
  - `TextGenerateEffect`：7
  - `MovingBorder`：18
  - `Bento Skeleton`：143
  - `ContainerScroll`：72
  - `Logo Cloud`：36
- 生产页可见英文残留：0；仅保留允许词范围内的 `Candao`、`EN`、`SaaS`、`POS`、`CRM`、`API`。
- 字体使用：`Noto Sans TC` 与 `Inter`。

## 边界

- Figma V2 是静态高保真转译；真实 `motion/react` 动效仍需在前端实现。
- 右侧 Evidence 板不是官网页面内容，只用于审查 Aceternity 能力如何对应到 Figma 图层。
- 原始 `首頁` Frame `84:468` 与上一版样例 `111:59` 均保留，可对比查看。
