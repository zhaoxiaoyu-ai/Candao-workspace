# Tappo App I 系列图标评审 v03 - 2026-06-09

## 本轮结论

用户反馈 `I01-I22 v02` 仍然不够精致，并提供两个优秀图标参考站点：

- `https://remixicon.com/`
- `https://www.magnific.com/icons#from_element=mainmenu`

本轮只参考其“规范能力”和“视觉完成度”，不复制具体图标。`I01-I22 v03` 重新强化了图标网格、图形重心、布尔形体、闭合填充、柔和高光和轻体积层次，同时继续保持 Tappo App 的橙色品牌关系、清透渐变和简约可读。

## 评审入口

可点击入口：

- [打开当前评审入口](assets-review/current-review.html)
- [打开当前评审页](assets-review/current/index.html)
- [查看当前评审 PNG](assets-review/current/preview.png)

可复制路径：

```text
tasks/T02/output/assets-review/current/index.html
tasks/T02/output/assets-review/current/preview.png
```

## 参考边界

- Remixicon 参考点：24px 网格纪律、清晰隐喻、稳定图形重心、可扩展的图标家族一致性。
- Magnific 参考点：柔和圆角材质、轻体积感、清透高光、移动端友好的视觉完成度。
- 禁止项：不复制两个站点的具体图标，不导入外部资产，不做仿站图标，不嵌入文字、假 logo、水印、棋盘格、随机英文或二维码。

## 图标清单

| ID | 文件 | 字面含义 | 分组 |
| --- | --- | --- | --- |
| `I01` | `tasks/T02/output/assets-review/current/i-v03-01-message.svg` | 消息 | 消息 |
| `I02` | `tasks/T02/output/assets-review/current/i-v03-02-dine-in.svg` | 堂食 | 履约方式 |
| `I03` | `tasks/T02/output/assets-review/current/i-v03-03-pickup.svg` | 自取 | 履约方式 |
| `I04` | `tasks/T02/output/assets-review/current/i-v03-04-delivery.svg` | 外送 | 履约方式 |
| `I05` | `tasks/T02/output/assets-review/current/i-v03-05-order-method.svg` | 点餐方式 | 点餐与订座 |
| `I06` | `tasks/T02/output/assets-review/current/i-v03-06-today-booking.svg` | 今日订座 | 点餐与订座 |
| `I07` | `tasks/T02/output/assets-review/current/i-v03-07-home.svg` | 主页 | 底部导航 |
| `I08` | `tasks/T02/output/assets-review/current/i-v03-08-data.svg` | 数据 | 底部导航 |
| `I09` | `tasks/T02/output/assets-review/current/i-v03-09-apps.svg` | 应用 | 底部导航 |
| `I10` | `tasks/T02/output/assets-review/current/i-v03-10-settings.svg` | 设置 | 底部导航 |
| `I11` | `tasks/T02/output/assets-review/current/i-v03-11-notice.svg` | 提示 | 状态反馈 |
| `I12` | `tasks/T02/output/assets-review/current/i-v03-12-success.svg` | 成功 | 状态反馈 |
| `I13` | `tasks/T02/output/assets-review/current/i-v03-13-failure.svg` | 失败 | 状态反馈 |
| `I14` | `tasks/T02/output/assets-review/current/i-v03-14-username.svg` | 用户名 | 账号设置 |
| `I15` | `tasks/T02/output/assets-review/current/i-v03-15-email.svg` | 邮箱 | 账号设置 |
| `I16` | `tasks/T02/output/assets-review/current/i-v03-16-change-password.svg` | 修改密码 | 账号设置 |
| `I17` | `tasks/T02/output/assets-review/current/i-v03-17-language.svg` | 语言 | 账号设置 |
| `I18` | `tasks/T02/output/assets-review/current/i-v03-18-message-notification.svg` | 消息通知 | 账号设置 |
| `I19` | `tasks/T02/output/assets-review/current/i-v03-19-service-agreement.svg` | 服务协议 | 协议与反馈 |
| `I20` | `tasks/T02/output/assets-review/current/i-v03-20-privacy-policy.svg` | 隐私政策 | 协议与反馈 |
| `I21` | `tasks/T02/output/assets-review/current/i-v03-21-feedback.svg` | 建议反馈 | 协议与反馈 |
| `I22` | `tasks/T02/output/assets-review/current/i-v03-22-version.svg` | 版本号 | 协议与反馈 |

## 通过标准

- 图标必须严格符合字面含义，不用抽象装饰代替业务对象。
- 每个括号分组内的构图密度、材质、用色关系和光源保持一致。
- 主图形不使用 `stroke` 线框，使用闭合填充、evenodd 镂空或布尔组合绘制。
- 放入 `390px` 页面后不显拥挤，与 `16px` 圆角卡片体系兼容。
- 资产本身不嵌入文字、假 logo、水印、棋盘格、随机英文或二维码。
- 橙色保留 Tappo 品牌支撑，蓝青、薄荷、浅紫、轻粉、浅黄只做辅助氛围。

## 下一步

建议下一步人工评审 `I01-I22 v03`。通过后再决定是否迁移到：

```text
source/src/assets/generated/app-style-kit/
```

如果不通过，只按具体 ID 单项修正，不回退已经通过的 `D01-D04` 方向样张。
