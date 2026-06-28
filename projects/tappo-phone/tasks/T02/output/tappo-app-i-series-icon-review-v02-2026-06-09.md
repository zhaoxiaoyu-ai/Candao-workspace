# Tappo App I 系列图标评审 v02 - 2026-06-09

## 本轮结论

上一版 `I01-I12 v01` 判定为不通过对照，主要问题是图标不够细致、图形不够规范、部分语义不够贴近字面含义。

本轮按用户提供的新清单重建 `I01-I22`，每个括号内的图标作为一组进行风格控制。所有图标均为独立 SVG，主图形使用闭合填充、evenodd 镂空或布尔组合思路绘制，不使用 `stroke` 线框，不嵌入文字。

## 评审入口

可点击入口：

- [打开当前评审入口](assets-review/current-review.html)
- [打开 I 系列图标评审 v02](assets-review/tappo-app-i-series-icon-review-v02.html)
- [查看 I 系列图标评审 v02 PNG](assets-review/tappo-app-i-series-icon-review-v02.png)

可复制路径：

```text
tasks/T02/output/assets-review/tappo-app-i-series-icon-review-v02.html
tasks/T02/output/assets-review/tappo-app-i-series-icon-review-v02.png
```

## 图标清单

| ID | 文件 | 字面含义 | 分组 |
| --- | --- | --- | --- |
| `I01` | `tasks/T02/output/assets-review/i-v02-01-message.svg` | 消息 | 消息 |
| `I02` | `tasks/T02/output/assets-review/i-v02-02-dine-in.svg` | 堂食 | 履约方式 |
| `I03` | `tasks/T02/output/assets-review/i-v02-03-pickup.svg` | 自取 | 履约方式 |
| `I04` | `tasks/T02/output/assets-review/i-v02-04-delivery.svg` | 外送 | 履约方式 |
| `I05` | `tasks/T02/output/assets-review/i-v02-05-order-method.svg` | 点餐方式 | 点餐与订座 |
| `I06` | `tasks/T02/output/assets-review/i-v02-06-today-booking.svg` | 今日订座 | 点餐与订座 |
| `I07` | `tasks/T02/output/assets-review/i-v02-07-home.svg` | 主页 | 底部导航 |
| `I08` | `tasks/T02/output/assets-review/i-v02-08-data.svg` | 数据 | 底部导航 |
| `I09` | `tasks/T02/output/assets-review/i-v02-09-apps.svg` | 应用 | 底部导航 |
| `I10` | `tasks/T02/output/assets-review/i-v02-10-settings.svg` | 设置 | 底部导航 |
| `I11` | `tasks/T02/output/assets-review/i-v02-11-notice.svg` | 提示 | 状态反馈 |
| `I12` | `tasks/T02/output/assets-review/i-v02-12-success.svg` | 成功 | 状态反馈 |
| `I13` | `tasks/T02/output/assets-review/i-v02-13-failure.svg` | 失败 | 状态反馈 |
| `I14` | `tasks/T02/output/assets-review/i-v02-14-username.svg` | 用户名 | 账号设置 |
| `I15` | `tasks/T02/output/assets-review/i-v02-15-email.svg` | 邮箱 | 账号设置 |
| `I16` | `tasks/T02/output/assets-review/i-v02-16-change-password.svg` | 修改密码 | 账号设置 |
| `I17` | `tasks/T02/output/assets-review/i-v02-17-language.svg` | 语言 | 账号设置 |
| `I18` | `tasks/T02/output/assets-review/i-v02-18-message-notification.svg` | 消息通知 | 账号设置 |
| `I19` | `tasks/T02/output/assets-review/i-v02-19-service-agreement.svg` | 服务协议 | 协议与反馈 |
| `I20` | `tasks/T02/output/assets-review/i-v02-20-privacy-policy.svg` | 隐私政策 | 协议与反馈 |
| `I21` | `tasks/T02/output/assets-review/i-v02-21-feedback.svg` | 建议反馈 | 协议与反馈 |
| `I22` | `tasks/T02/output/assets-review/i-v02-22-version.svg` | 版本号 | 协议与反馈 |

## 通过标准

- 图标必须严格符合字面含义，不用抽象图形代替业务对象。
- 每个括号分组内的构图密度、材质、用色关系保持一致。
- 主图形不使用 `stroke` 线框，使用闭合填充、evenodd 镂空或布尔组合绘制。
- 放入 `390px` 页面后不显拥挤，与 `16px` 圆角卡片体系兼容。
- 资产本身不嵌入文字、假 logo、水印、棋盘格、随机英文或二维码。
- 橙色保留 Tappo 品牌支撑，蓝青、薄荷、浅紫、轻粉、浅黄只做辅助氛围。

## 下一步

如果 `I01-I22 v02` 通过，再决定是否迁移到：

```text
source/src/assets/generated/app-style-kit/
```

如果不通过，只按具体 ID 单项修正，不回退已经通过的 D01-D04 方向样张。
