# Tappo App 首批图标与微插画评审 v01 - 2026-06-09

## 本轮结论

已在 `D01 v05 + D02 v05 + D03-D04 v04` 方向基础上继续执行，生成首批 `I01-I12` 模块图标 tile 与 `M01-M03` 业务微插画评审样张。

本轮仍是评审资产，不直接接入生产代码。

## 评审入口

```text
tasks/T02/output/assets-review/tappo-app-first-asset-batch-review-v01.html
tasks/T02/output/assets-review/tappo-app-first-asset-batch-review-v01.png
```

## 模块图标 tile

| ID | 文件 | 用途 |
| --- | --- | --- |
| `I01` | `tasks/T02/output/assets-review/i01-payment-tile-v01.svg` | 收款 / 支付 |
| `I02` | `tasks/T02/output/assets-review/i02-revenue-tile-v01.svg` | 营收 / 余额 |
| `I03` | `tasks/T02/output/assets-review/i03-order-tile-v01.svg` | 订单 |
| `I04` | `tasks/T02/output/assets-review/i04-booking-tile-v01.svg` | 预约 |
| `I05` | `tasks/T02/output/assets-review/i05-table-order-tile-v01.svg` | 桌台 / 点餐 |
| `I06` | `tasks/T02/output/assets-review/i06-staff-tile-v01.svg` | 员工 / 权限 |
| `I07` | `tasks/T02/output/assets-review/i07-device-tile-v01.svg` | 设备 / 连接 |
| `I08` | `tasks/T02/output/assets-review/i08-settings-tile-v01.svg` | 设置 |
| `I09` | `tasks/T02/output/assets-review/i09-analytics-tile-v01.svg` | 数据分析 |
| `I10` | `tasks/T02/output/assets-review/i10-app-activation-tile-v01.svg` | 应用开通 |
| `I11` | `tasks/T02/output/assets-review/i11-points-tile-v01.svg` | 会员 / 点数 |
| `I12` | `tasks/T02/output/assets-review/i12-inventory-tile-v01.svg` | 库存 / 商品 |

## 业务微插画

| ID | 文件 | 用途 |
| --- | --- | --- |
| `M01` | `tasks/T02/output/assets-review/m01-device-settings-v01.svg` | 设备 / 设置 |
| `M02` | `tasks/T02/output/assets-review/m02-payment-receive-v01.svg` | 支付 / 收款 |
| `M03` | `tasks/T02/output/assets-review/m03-booking-activation-v01.svg` | 预约 / 应用开通 |

## 通过标准

- 放入 `390px` 页面后不显拥挤。
- 与 `16px` 圆角卡片体系、`8-12px` 图文间距和 `OPPO Sans 4.0` UI 规则兼容。
- 图标底色可按模块语义变化，但同屏保持清透、低饱和、统一光源和统一材质。
- 橙色保留 Tappo 品牌支撑，蓝青、薄荷、浅紫、轻粉、浅黄只做辅助氛围。
- 每个图标和微插画的业务对象一眼可读。
- 资产本身不嵌入文字、假 logo、水印、棋盘格、随机英文或二维码。

## 下一步

如果本批通过，再把通过项迁移到：

```text
source/src/assets/generated/app-style-kit/
```

迁移前需要再次确认是否保留当前 SVG 形式，还是转成项目需要的 PNG/WebP 资源。若某个 ID 不通过，只按 ID 单项修正，不回退已经通过的方向样张。
