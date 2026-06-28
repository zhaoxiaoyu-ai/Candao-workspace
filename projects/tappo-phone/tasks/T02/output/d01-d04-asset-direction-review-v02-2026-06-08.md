# D01-D04 资产方向评审 v02

## 文档定位

本文件记录 `D01-D04` 首批资产方向样张的第二版修正。`v02` 是当前人工评审目标，`v01` 仅保留为问题对照。

## 评审入口

```text
tasks/T02/output/assets-review/d01-d04-review-board-v02.html
tasks/T02/output/assets-review/d01-d04-review-board-v02.png
```

单个 SVG 样张：

```text
tasks/T02/output/assets-review/d01-assistant-direction-v02.svg
tasks/T02/output/assets-review/d02-smart-orb-direction-v02.svg
tasks/T02/output/assets-review/d03-module-icon-tiles-direction-v02.svg
tasks/T02/output/assets-review/d04-micro-illustration-direction-v02.svg
```

## 本轮反馈修正

| ID | v01 问题 | v02 修正 |
| --- | --- | --- |
| `D01` | 细节复杂、凌乱、不够细致 | 减少外圈、漂浮点和装饰高光，只保留干净的助手脸部、轻量反光和柔和底座 |
| `D02` | 过于实体化 | 改为弥散圆形/异形氛围光影，不再表现成硬球体或轨道装置 |
| `D03` | 线条扭曲、错位、变形、不够细致 | 重画对齐的几何 glyph，统一线宽、端点、留白和中心对齐 |
| `D04` | 风格接近，但内容表达不清，有未知图标 | 改为 POS 终端、支付卡、到账圆点的支付/收款语义，删除含义不明符号 |

## 当前评审对象

只评审 `v02` 是否解决上述问题，不评审完整图库数量。

- `D01`：是否更简洁、更精致、不凌乱；仍保留 Tappo 可亲近的助手感。
- `D02`：是否有智能氛围感，但不是实体球、科幻能量体或蓝紫 AI 模板。
- `D03`：图标线条是否稳定、图形是否居中、是否无扭曲错位。
- `D04`：支付/收款业务对象是否一眼可读，没有未知图标。

## 通过标准

- 符合 `390px` App 评审宽度。
- 符合 `OPPO Sans 4.0`、`16px` 卡片圆角、`16px` 区块间距的当前 Style Kit 约束。
- 保持橙色主导、清透柔和、低饱和、统一光源。
- 不出现假 logo、假文字、水印、棋盘格、随机英文或模板化 AI 光效。
- 不把方向资产直接当生产图库使用。

## 下一步

如果 `v02` 通过：进入 `I01-I12` 模块图标 tile 与 `M01-M03` 微插画的下一批方向生成。  
如果 `v02` 不通过：只修正失败项，不扩大资产库规模。

## 验证

- 已用 Chrome headless 生成 `d01-d04-review-board-v02.png`。
- 已人工目检 PNG：评审板可见，`D03/D04` 横向样张展示已放大，当前截图不是空白或错版。
- 本次只更新静态 SVG/HTML/PNG 和说明文档，未运行 `npm run typecheck` 或 `npm run build`。
