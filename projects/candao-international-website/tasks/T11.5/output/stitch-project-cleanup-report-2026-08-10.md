# Stitch 项目整理报告

## 1. 本次结论

当前 Stitch 项目 `Candao International Website T11.5-C` 中的混乱，主要来自多轮生成历史叠加：

- 早期四页探索：Home、Platform、Order Management、Delivery Management；
- C v2 一级目录初稿；
- C v2 Fixed 修正版；
- Image2 / AI 图片生成时产生的独立图片 Screen；
- 本次新增的内部整理索引 Screen。

Stitch 默认会保留每一轮生成结果，`edit_screens` 也会生成新的修正版 Screen，而不是覆盖旧 Screen。因此同名页面会同时存在多个版本，且内容、图片、Footer、Locale 细节会有轻微差异。

## 2. 已执行的 Stitch 整理动作

已在 Stitch 项目内新增内部整理索引：

| 项目 | 内容 |
|---|---|
| Stitch Project ID | `10888304674441209287` |
| 清理索引 Screen ID | `5782dcac875b4c5fb8de68aae837d69a` |
| Screen Title | `00 Candao C v2 保留版索引 (Fixed)` |
| 本地 HTML | `.stitch/designs/cv2-cleanup/00-candao-cv2-cleanup-index-fixed.html` |
| 本地截图 | `.stitch/designs/cv2-cleanup/00-candao-cv2-cleanup-index-fixed.png` |
| 任务输出备份 | `tasks/T11.5/output/stitch-cv2-cleanup/` |

该索引用于在 Stitch 画布中明确：

- 哪些页面是保留版；
- 哪些页面是旧探索；
- 哪些 Screen 只是素材图，不是页面；
- Order Management / Delivery Management 只属于 Platform 下二级能力，不作为一级导航。

## 3. 只作为后续评审依据的 Fixed 保留版

| 一级目录 | Screen ID | 状态 |
|---|---|---|
| 首頁 | `d38f6ed9fe2c42b29849f2ab5776ef90` | 保留 |
| 解決方案 | `3f2cde2898c04fddb949d2371608ebeb` | 保留 |
| 平台 | `f5e50f9a9b5a4bc898a4d27568566d1c` | 保留 |
| 整合能力 | `621fecf4ef6945f58faa162d9f8af3b3` | 保留 |
| 客戶案例 | `e234dc8834e841b49e8d66d139e48734` | 保留 |
| 關於 Candao | `9c63c26edcbd481599e3d4cd689b378e` | 保留 |
| 預約產品演示 | `07cf801156f94a2681cf94c5e1102703` | 保留 |

## 4. 不再作为评审基准的 Screen 类型

| 类型 | 说明 |
|---|---|
| 早期四页探索 | Home、Platform、Order Management、Delivery Management；用于记录探索过程，不代表当前 IA。 |
| C v2 初稿 | 未标记 Fixed 的同名一级目录页面；部分 Locale、Footer 或图片占位未修正。 |
| 被替代版本 | Platform v1、Delivery v1；已被后续更完整版本取代。 |
| 图片素材 Screen | Image2 / AI 图片单独生成时进入 Stitch 的 Screen；只能作为素材，不是网页页面。 |
| 整理索引初稿 | `db96c8dd2d8b46bab8ebc713e9b45a21`；已由 Fixed 索引 `5782dcac875b4c5fb8de68aae837d69a` 替代。 |

## 5. 工具边界

当前可用的 Stitch MCP 工具没有开放 Screen 级删除、重命名、归档或拖动画布位置能力。

因此本次不能通过 MCP 直接删除旧图或重命名旧图。已采取的安全做法是：

- 不删除历史生成结果；
- 新增一张清晰的内部整理索引；
- 在项目文档中固化 Fixed 保留版 Screen ID；
- 后续评审只引用 Fixed 保留版和本地 C v2 原型。

如果需要真正删除旧 Screen，需在 Stitch 网页 UI 中手动执行，或等待 Stitch MCP 后续开放 Screen 删除 / 归档工具。

## 6. 后续使用规则

后续进入视觉评审或 Figma / 前端生产时：

1. 先打开 `00 Candao C v2 保留版索引 (Fixed)`。
2. 只读取第 3 节列出的 7 个 Fixed Screen。
3. 图片落位和真实 Image2 资产以本地原型为准：`source/stitch-first-level-v2/index.html`。
4. 旧探索页面只用于追溯过程，不再作为页面效果、IA 或文案评审依据。
