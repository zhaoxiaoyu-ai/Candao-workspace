# Stitch Generated Artifacts Index

日期：2026-08-05  
项目：餐道国际官网重构  
任务：T11.5-C / Stitch 真实生成产物索引  
说明：Stitch 返回的 PNG 是压缩预览图，尺寸较小；实际可查看网页产物是 HTML。本文件补充 1440 宽完整页面截图，便于视觉评审。

## 1. 实际网页产物

实际生成网页位于：

```text
.stitch/designs/
```

最终采用版本：

| 页面 | HTML | Stitch 预览 PNG |
| --- | --- | --- |
| Home / Desktop / TC | `.stitch/designs/home-desktop-tc.html` | `.stitch/designs/home-desktop-tc.png` |
| Platform / Desktop / TC v2 | `.stitch/designs/platform-v2-desktop-tc.html` | `.stitch/designs/platform-v2-desktop-tc.png` |
| Order Management / Desktop / TC | `.stitch/designs/order-management-desktop-tc.html` | `.stitch/designs/order-management-desktop-tc.png` |
| Delivery Management / Desktop / TC v2 | `.stitch/designs/delivery-v2-desktop-tc.html` | `.stitch/designs/delivery-v2-desktop-tc.png` |

被替代版本：

| 页面 | HTML | 预览 PNG | 原因 |
| --- | --- | --- | --- |
| Platform v1 | `.stitch/designs/platform-desktop-tc.html` | `.stitch/designs/platform-desktop-tc.png` | Capability Map / UI Demo 过弱 |
| Delivery v1 | `.stitch/designs/delivery-management-desktop-tc.html` | `.stitch/designs/delivery-management-desktop-tc.png` | Workflow / Dashboard 过弱 |

## 2. 大尺寸完整页面截图

为解决 Stitch 预览 PNG 过小的问题，已使用本地 Chrome 从 HTML 重新渲染 1440 宽完整页面截图。

输出目录：

```text
tasks/T11.5/output/stitch-fullsize-screenshots/
```

| 页面 | 大图文件 | 尺寸 |
| --- | --- | --- |
| Home / Desktop / TC | `tasks/T11.5/output/stitch-fullsize-screenshots/01-home-desktop-tc-full.png` | 1440 x 2883 |
| Platform / Desktop / TC v2 | `tasks/T11.5/output/stitch-fullsize-screenshots/02-platform-v2-desktop-tc-full.png` | 1440 x 3749 |
| Order Management / Desktop / TC | `tasks/T11.5/output/stitch-fullsize-screenshots/03-order-management-desktop-tc-full.png` | 1440 x 4313 |
| Delivery Management / Desktop / TC v2 | `tasks/T11.5/output/stitch-fullsize-screenshots/04-delivery-v2-desktop-tc-full.png` | 1440 x 3098 |

## 3. 文档产物

视觉和审查文档位于：

```text
tasks/T11.5/output/
```

关键文件：

- `stitch-generated-website-result-2026-08-04.md`
- `stitch-generated-website-review-2026-08-04.md`
- `t11.5-c-stitch-connected-execution-note-2026-08-04.md`
- `Home Visual Critique.md`
- `Platform Product Demo Visual Critique.md`
- `Candao Visual Design Rules.md`

## 4. 备注

- `.stitch/designs/*.png` 是 Stitch 预览图，可能只有数百像素高 / 宽，不适合作为最终视觉审查大图。
- `stitch-fullsize-screenshots/*.png` 是从 HTML 重新渲染的完整页面图，可用于评审视觉细节。
- `.stitch/designs/*.html` 是最接近实际生成网页的产物，可直接在浏览器中打开查看。

