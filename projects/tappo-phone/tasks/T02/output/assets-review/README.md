# Assets Review

该目录用于临时存放 Tappo App 资产方向评审图。这里的文件只用于方向评审，不直接进入生产代码。

## 当前评审入口

以后只看这一组稳定入口：

- [打开当前评审入口](./current-review.html)
- [打开当前评审页](./current/index.html)
- [打开当前图片预览页](./current/preview.html)
- [查看当前评审 PNG](./current/preview.png)

可复制路径：

```text
tasks/T02/output/assets-review/current-review.html
tasks/T02/output/assets-review/current/index.html
tasks/T02/output/assets-review/current/preview.html
tasks/T02/output/assets-review/current/preview.png
```

当前评审对象：`I01-I22 v04`。

说明文档：

```text
tasks/T02/output/tappo-app-i-series-icon-review-v04-2026-06-09.md
```

## 目录规则

- `current/`：只放当前可人工评审和可能进入生产判断的内容。
- `current-review.html`：唯一稳定入口，提供当前评审页、图片预览页和原始 PNG 入口。
- `current/preview.html`：图片预览页，用 HTML 包装 PNG，避免部分客户端无法点击图片直链。
- `_archive/`：只放旧版本、对照版本和已被替代版本。
- 顶层目录不再平铺历史资产，避免人工评审时误打开旧版。
- 不删除历史版本；需要对照时再进入 `_archive/`。

## 本轮修正依据

- 用户要求按新关键词重调 I 系列：宫格插画风、柔和渐变、UI 设计风格、光线追踪感、干净白色背景、Pinterest / Dribbble 风格、OC / Blender 渲染感、减少细节、16K 高精度方向。
- 本轮将上述关键词转译为可维护 SVG 资产：使用独立宫格 tile、闭合填充形体、柔和渐变、轻 3D 阴影和统一光源，不生成不可控位图。
- `I01-I22 v04` 从 `v03` 的线性图标质感转向更轻的宫格插画风，减少零碎细节，强化字面语义和组内一致性。
- 主图形使用闭合填充、evenodd 镂空或布尔组合思路绘制，不使用 `stroke` 线框。
- `OC / Blender / 16K / 光线追踪` 作为质量与质感方向，不在 SVG 内写入渲染器或分辨率；如后续进入生产，可按同一构图再导出高分辨率 PNG/WebP。
- 每个图标是独立 SVG，仍属于评审资产，不迁移生产目录。

## 当前样张文件

| ID | 文件 | 字面含义 | 分组 |
| --- | --- | --- | --- |
| `I01` | `current/i-v04-01-message.svg` | 消息 | 消息 |
| `I02` | `current/i-v04-02-dine-in.svg` | 堂食 | 履约方式 |
| `I03` | `current/i-v04-03-pickup.svg` | 自取 | 履约方式 |
| `I04` | `current/i-v04-04-delivery.svg` | 外送 | 履约方式 |
| `I05` | `current/i-v04-05-order-method.svg` | 点餐方式 | 点餐与订座 |
| `I06` | `current/i-v04-06-today-booking.svg` | 今日订座 | 点餐与订座 |
| `I07` | `current/i-v04-07-home.svg` | 主页 | 底部导航 |
| `I08` | `current/i-v04-08-data.svg` | 数据 | 底部导航 |
| `I09` | `current/i-v04-09-apps.svg` | 应用 | 底部导航 |
| `I10` | `current/i-v04-10-settings.svg` | 设置 | 底部导航 |
| `I11` | `current/i-v04-11-notice.svg` | 提示 | 状态反馈 |
| `I12` | `current/i-v04-12-success.svg` | 成功 | 状态反馈 |
| `I13` | `current/i-v04-13-failure.svg` | 失败 | 状态反馈 |
| `I14` | `current/i-v04-14-username.svg` | 用户名 | 账号设置 |
| `I15` | `current/i-v04-15-email.svg` | 邮箱 | 账号设置 |
| `I16` | `current/i-v04-16-change-password.svg` | 修改密码 | 账号设置 |
| `I17` | `current/i-v04-17-language.svg` | 语言 | 账号设置 |
| `I18` | `current/i-v04-18-message-notification.svg` | 消息通知 | 账号设置 |
| `I19` | `current/i-v04-19-service-agreement.svg` | 服务协议 | 协议与反馈 |
| `I20` | `current/i-v04-20-privacy-policy.svg` | 隐私政策 | 协议与反馈 |
| `I21` | `current/i-v04-21-feedback.svg` | 建议反馈 | 协议与反馈 |
| `I22` | `current/i-v04-22-version.svg` | 版本号 | 协议与反馈 |

## 通过标准

- 图标必须严格符合字面含义，不用抽象图形代替业务对象。
- 每个括号分组内的构图密度、材质、用色关系保持一致。
- 视觉方向应体现宫格插画风、柔和渐变、干净白色背景、轻 3D 渲染感和低细节密度。
- 主图形不使用 `stroke` 线框，使用闭合填充、evenodd 镂空或布尔组合绘制。
- 放入 `390px` 页面后不显拥挤，与 `16px` 圆角卡片体系兼容。
- 资产本身不嵌入文字、假 logo、水印、棋盘格、随机英文或二维码。
- 橙色保留 Tappo 品牌支撑，蓝青、薄荷、浅紫、轻粉、浅黄只做辅助氛围。

## 旧版对照

旧版入口已归档到：

```text
tasks/T02/output/assets-review/_archive/2026-06-09-before-review-system/
tasks/T02/output/assets-review/_archive/2026-06-09-i-series-v03-before-v04-grid-illustration/
```

归档内容包含 `D01-D04` 多轮方向样张、`I01-I12 v01`、`I01-I22 v02`、`I01-I22 v03` 和旧评审板。

## 下一步

如果 `I01-I22 v04` 通过，再决定是否迁移到：

```text
source/src/assets/generated/app-style-kit/
```

迁移前需要确认保留 SVG，还是转成 PNG/WebP。不要在代码中直接引用本目录图片。
