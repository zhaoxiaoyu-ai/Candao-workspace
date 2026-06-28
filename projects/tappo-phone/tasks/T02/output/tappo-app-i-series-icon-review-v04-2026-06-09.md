# Tappo App I 系列图标评审 v04 - 2026-06-09

## 评审入口

优先打开：

```text
tasks/T02/output/assets-review/current-review.html
tasks/T02/output/assets-review/current/index.html
tasks/T02/output/assets-review/current/preview.html
```

备用静态图：

```text
tasks/T02/output/assets-review/current/preview.png
```

## 评审对象

当前评审对象为 `I01-I22 v04`，共 `22` 个独立 SVG 图标：

- `I01` 消息。
- `I02-I04` 堂食、自取、外送。
- `I05-I06` 点餐方式、今日订座。
- `I07-I10` 主页、数据、应用、设置。
- `I11-I13` 提示、成功、失败。
- `I14-I18` 用户名、邮箱、修改密码、语言、消息通知。
- `I19-I22` 服务协议、隐私政策、建议反馈、版本号。

## 变更范围

- 将 `I01-I22 v03` 归档为对照版本，新的当前目标为 `I01-I22 v04`。
- 按用户新关键词重调视觉方向：宫格插画风、柔和渐变、UI 设计风格、光线追踪感、干净白色背景、Pinterest / Dribbble 风格、OC / Blender 渲染感、减少细节、16K 高精度方向。
- 将关键词转译为可维护的 SVG 图标系统：独立宫格 tile、闭合填充、布尔组合形体、柔和渐变、统一左上光源、低细节密度。
- 保留 Tappo 橙色作为品牌支撑色，蓝青、薄荷、浅紫、轻粉、浅黄只做辅助氛围。
- 不迁移到生产目录，本轮仍是人工评审资产。

## 当前文件

```text
tasks/T02/output/assets-review/current/i-v04-01-message.svg
tasks/T02/output/assets-review/current/i-v04-02-dine-in.svg
tasks/T02/output/assets-review/current/i-v04-03-pickup.svg
tasks/T02/output/assets-review/current/i-v04-04-delivery.svg
tasks/T02/output/assets-review/current/i-v04-05-order-method.svg
tasks/T02/output/assets-review/current/i-v04-06-today-booking.svg
tasks/T02/output/assets-review/current/i-v04-07-home.svg
tasks/T02/output/assets-review/current/i-v04-08-data.svg
tasks/T02/output/assets-review/current/i-v04-09-apps.svg
tasks/T02/output/assets-review/current/i-v04-10-settings.svg
tasks/T02/output/assets-review/current/i-v04-11-notice.svg
tasks/T02/output/assets-review/current/i-v04-12-success.svg
tasks/T02/output/assets-review/current/i-v04-13-failure.svg
tasks/T02/output/assets-review/current/i-v04-14-username.svg
tasks/T02/output/assets-review/current/i-v04-15-email.svg
tasks/T02/output/assets-review/current/i-v04-16-change-password.svg
tasks/T02/output/assets-review/current/i-v04-17-language.svg
tasks/T02/output/assets-review/current/i-v04-18-message-notification.svg
tasks/T02/output/assets-review/current/i-v04-19-service-agreement.svg
tasks/T02/output/assets-review/current/i-v04-20-privacy-policy.svg
tasks/T02/output/assets-review/current/i-v04-21-feedback.svg
tasks/T02/output/assets-review/current/i-v04-22-version.svg
```

## 历史归档

旧 `I01-I22 v03` 已归档到：

```text
tasks/T02/output/assets-review/_archive/2026-06-09-i-series-v03-before-v04-grid-illustration/
```

## 通过标准

- 每个图标必须严格符合字面含义，不用抽象装饰替代业务对象。
- 每个括号分组内风格一致：同一宫格结构、相近材质、相近细节密度、统一光源。
- 图形必须干净清晰，减少无意义碎片细节，不出现凌乱线条。
- 主图形使用闭合填充、镂空或布尔组合思路，不使用 `stroke` 线框解释语义。
- 资产内不出现文字、假 logo、水印、棋盘格、随机英文、二维码。
- 放入 `390px` App 页面和 `16px` 圆角卡片体系后不显拥挤。

## 已完成校验

- 当前 `i-v04-*.svg` 数量为 `22`。
- 已重新生成 `preview.png`，并通过本地图片预览确认整组图标可见。
- 已检查当前 SVG：未检出 `stroke`、`<text>`、水印、logo、二维码、棋盘格或随机英文内容。

## 下一步

请按 `I01-I22` 逐项人工评审。若整体通过，再决定是否迁移到：

```text
source/src/assets/generated/app-style-kit/
```

如果不通过，建议按图标 ID 单项反馈，例如：`I04 外送语义不够明显`、`I16 修改密码还需要更像锁/编辑`、`I20 隐私政策防护感不足`。
