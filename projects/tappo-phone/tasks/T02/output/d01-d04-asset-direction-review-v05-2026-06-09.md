# D01-D04 资产方向评审 v05

## 文档定位

本文件记录 `D01-D04` 首批资产方向样张的第五版修正。`v05` 是 `D01` 重点修正版：`D01` 使用 `v05`，`D02-D04` 沿用 `v04` 当前方向作为同版评审对象。

## 评审入口

```text
tasks/T02/output/assets-review/d01-d04-review-board-v05.html
tasks/T02/output/assets-review/d01-d04-review-board-v05.png
```

当前样张：

```text
tasks/T02/output/assets-review/d01-assistant-direction-v05.svg
tasks/T02/output/assets-review/d02-smart-atmosphere-direction-v04.svg
tasks/T02/output/assets-review/d03-module-icon-tiles-direction-v04.svg
tasks/T02/output/assets-review/d04-micro-illustration-direction-v04.svg
```

## 本轮反馈修正

| ID | v04 问题 | v05 修正 |
| --- | --- | --- |
| `D01` | 需要更 3D 化实体感，形象更亲民可爱，不要太硬的科技感 | 改为软白外壳、圆润侧耳、发光脸屏、小身体和小手的 3D 亲民助手方向 |
| `D02` | 当前无新增反馈 | 沿用 `v04` 无线条弥散氛围 |
| `D03` | 当前无新增反馈 | 沿用 `v04` 居中图标方向 |
| `D04` | 当前无新增反馈 | 沿用 `v04` 整洁支付/收款微插画 |

## 参考图处理边界

- 只吸收参考图的方向关键词：圆润、3D、亲民、可爱、软壳实体、发光脸屏。
- 不复制参考图里的具体机器人造型、动作、文字气泡、Hi 字样、水印、品牌元素或第三方图形。
- 资产仍保持 Tappo App 的橙色主导、清透柔和、低饱和、可信赖调性。

## 当前评审对象

重点评审 `D01 v05`：

- 是否比 `v04` 更有 3D 实体感。
- 是否更亲民可爱，但不幼稚。
- 是否柔和、有产品助手感，但不过硬科技。
- 是否没有文字、水印、假 logo 或参考图复刻痕迹。

`D02-D04` 仅作为当前组合陪同展示，不在本轮扩大修改范围。

## 下一步

如果 `D01 v05` 通过：再判断 `D01-D04` 是否整体进入 `I01-I12` 模块图标 tile 与 `M01-M03` 微插画。  
如果 `D01 v05` 不通过：继续只修正 `D01`，不扩大资产库规模。

## 验证

- 已用 Chrome headless 生成 `d01-d04-review-board-v05.png`。
- 已人工目检 PNG：评审板可见，`D01` 已变为更软、更 3D、更亲民的小T助手，且无文字气泡、水印或参考图复刻。
- 本次只更新静态 SVG/HTML/PNG 和说明文档，未运行 `npm run typecheck` 或 `npm run build`。
