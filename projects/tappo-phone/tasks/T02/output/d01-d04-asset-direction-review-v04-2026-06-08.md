# D01-D04 资产方向评审 v04

## 文档定位

本文件记录 `D01-D04` 首批资产方向样张的第四版修正。`v04` 是当前人工评审目标，`v01`、`v02`、`v03` 仅保留为问题对照。

## 评审入口

```text
tasks/T02/output/assets-review/d01-d04-review-board-v04.html
tasks/T02/output/assets-review/d01-d04-review-board-v04.png
```

单个 SVG 样张：

```text
tasks/T02/output/assets-review/d01-assistant-direction-v04.svg
tasks/T02/output/assets-review/d02-smart-atmosphere-direction-v04.svg
tasks/T02/output/assets-review/d03-module-icon-tiles-direction-v04.svg
tasks/T02/output/assets-review/d04-micro-illustration-direction-v04.svg
```

## 本轮反馈修正

| ID | v03 问题 | v04 修正 |
| --- | --- | --- |
| `D01` | 仍有点奇怪，没有实体轮廓，形状奇异 | 改为单一圆角胶囊实体，头身一体，轮廓稳定，不使用异形气泡 |
| `D02` | 弥散效果不佳，上方还有凌乱线条 | 删除所有弧线、描边和轨道，只使用柔和模糊渐变色块 |
| `D03` | 当前无新增反馈 | 沿用 `v03` 居中版本，同步为 `v04` 文件 |
| `D04` | 当前无新增反馈 | 保留支付/收款表达，同时去掉装饰弧线，让画面更整洁 |

## 当前评审对象

只评审 `v04` 是否解决上述问题，不评审完整图库数量。

- `D01`：是否有清晰实体轮廓，是否避免奇异形状。
- `D02`：是否无线条、无轨道、无杂乱描边，弥散氛围是否干净。
- `D03`：是否继续保持居中和统一风格。
- `D04`：是否保持业务含义清楚，同时更整洁。

## 通过标准

- 符合 `390px` App 评审宽度。
- 符合 `OPPO Sans 4.0`、`16px` 卡片圆角、`16px` 区块间距的当前 Style Kit 约束。
- 保持橙色主导、清透柔和、低饱和、统一光源。
- 不出现假 logo、假文字、水印、棋盘格、随机英文或模板化 AI 光效。
- 不把方向资产直接当生产图库使用。
- 无装饰性凌乱线条。

## 下一步

如果 `v04` 通过：进入 `I01-I12` 模块图标 tile 与 `M01-M03` 微插画的下一批方向生成。  
如果 `v04` 不通过：只修正失败项，不扩大资产库规模。

## 验证

- 已用 Chrome headless 生成 `d01-d04-review-board-v04.png`。
- 已人工目检 PNG：评审板可见，`D01` 为单一稳定实体轮廓，`D02` 无弧线/轨道/描边，`D04` 也已去掉装饰弧线。
- 本次只更新静态 SVG/HTML/PNG 和说明文档，未运行 `npm run typecheck` 或 `npm run build`。
