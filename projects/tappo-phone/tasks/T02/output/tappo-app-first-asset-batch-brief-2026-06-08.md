# Tappo App 首批资产生产包 - 2026-06-08

## 文档定位

本文件是 `App Style Kit v0.1` 之后的下一步执行产物，用于指导首批资产生成、评审和后续落地。

当前不扩展完整图库，只生产能验证整体调性的最小资产集：

- `1` 个小T / 助手方向。
- `1` 个弥散智能氛围 / 系统中枢方向。
- `12` 个模块图标 tile。
- `3` 个业务微插画。

## 全局资产规则

- UI 字体为 `OPPO Sans 4.0`，但生成图像资产内不嵌入任何文字。
- 评审宽度以 `390px` 为准，当前阶段先忽略 `402px`。
- 模块卡片圆角统一 `16px`，资产放入卡片后必须适配 `16px` 圆角体系。
- 主视觉按 `16px` 页面边距对齐。
- 图标与文字间距按 `8-12px` 预留。
- 图像资产不能出现假 logo、假 UI 文案、水印、棋盘格、随机英文、二维码或品牌误写。
- 模块图标 tile 底色不使用固定色板机械套色，可以按模块语义变化，但必须保持清透、柔和、低饱和、统一光源和统一材质。
- 每次资产产出必须可直接人工评审：提供可打开的评审图片、资产 ID、用途说明、通过标准和下一步动作。
- 方向评审资产先放入 `tasks/T02/output/assets-review/`，并同步更新该目录的索引说明；不能只留下图像提示词或未命名图片。

## 视觉基准

基础正向提示词：

```text
clear soft-gradient mobile app illustration, orange-led Tappo brand palette, translucent rounded geometry, soft 3D semi-flat style, minimal detail, gentle shadow, clean off-white background, 2025-2026 modern app UI asset style, low saturation, unified top-left light source, no text, no watermark, no logo, no checkerboard
```

基础负向提示词：

```text
old enterprise UI, dark cyber AI, neon sci-fi, heavy skeuomorphism, photorealistic hardware, stock people, emoji style, cluttered poster, fake UI text, fake logo, watermark, checkerboard, noisy gradient, high saturation rainbow, blue-first brand, purple AI SaaS template
```

## 第一阶段：方向评审资产

先生成以下 `4` 个方向资产，用于判断调性是否成立。

当前评审目标已更新为 `D01 v05 + D02 v05 + D03-D04 v04`，入口：

```text
tasks/T02/output/assets-review/d01-d04-review-board-v06.html
tasks/T02/output/assets-review/d01-d04-review-board-v06.png
tasks/T02/output/d01-d04-asset-direction-review-v06-2026-06-09.md
```

`v01`、`v02`、`v03`、`v04` 和 `v05` 已根据人工反馈保留为对照，不再作为当前通过目标。`v06` 修正重点：`D02` 改为更清透的大面积弥散氛围，吸收空气感渐变、半透明弧面、柔和蓝青/淡紫/轻粉关系，并保留少量橙色品牌支撑；`D01` 沿用 `v05`，`D03-D04` 沿用 `v04` 当前方向。

已继续生成首批图标与微插画评审 `v01`，入口：

```text
tasks/T02/output/assets-review/tappo-app-first-asset-batch-review-v01.html
tasks/T02/output/assets-review/tappo-app-first-asset-batch-review-v01.png
tasks/T02/output/tappo-app-first-asset-batch-review-v01-2026-06-09.md
```

用户已反馈 `I01-I12 v01` 图标不够细致、图形不够规范、语义不够贴合字面含义；之后按新清单重建为 `I01-I22 v02`。用户继续反馈 `v02` 精致度不足，并提供 Remixicon 与 Magnific 作为优秀图标质量参考，已推进到 `I01-I22 v03`。随后用户要求按“宫格插画风、柔和渐变、UI 设计风格、光线追踪、干净白色背景、Pinterest / Dribbble 风格、OC / Blender 渲染、减少细节、16K 分辨率”重调；当前 I 系列图标已推进为 `I01-I22 v04`，入口：

```text
tasks/T02/output/assets-review/current-review.html
tasks/T02/output/assets-review/current/index.html
tasks/T02/output/assets-review/current/preview.html
tasks/T02/output/assets-review/current/preview.png
tasks/T02/output/tappo-app-i-series-icon-review-v04-2026-06-09.md
```

| ID | 资产 | 用途 | 通过标准 |
| --- | --- | --- | --- |
| `D01` | 小T / 助手方向 | 封面、角色选择、首页提示、空状态 | 友好但不幼稚，不能像通用机器人头像 |
| `D02` | 弥散智能氛围 / 系统中枢 | 数据分析、设置、系统健康、AI 洞察 | 清透可信赖，有智能氛围；蓝青、淡紫、轻粉服务氛围，橙色保留品牌支撑 |
| `D03` | 模块图标 tile 样张 4 枚 | 应用中心、设置入口、数据模块 | 色彩可变但调性统一 |
| `D04` | 微插画样张 1 枚 | 设备/支付/预约等业务提示 | 业务对象清楚，不像营销 banner |

### `D01` 小T / 助手方向提示词

```text
a friendly cute 3D assistant entity for a modern restaurant operations mobile app, soft white rounded shell, glowing rounded face screen, small soft body, rounded side ears, tiny friendly hands, warm orange accent, soft blue reflection, approachable but professional, gentle expression, soft 3D semi-flat app asset, translucent rounded material, clean off-white background, no hard cyber tech feeling, no speech-bubble text, no copied reference pose, no text, no logo, no watermark
```

要求：

- 可以是头像、气泡或抽象助手，不绑定成固定吉祥物。
- 不能过于儿童玩具化。
- 不能替代 Tappo logo。
- 不能出现眼花缭乱的 AI 星光或蓝紫科技感。

### `D02` 弥散智能氛围 / 系统中枢提示词

```text
diffuse smart atmosphere field for a trustworthy restaurant operations app, large airy translucent gradient wash, soft cyan and ice blue blending into lavender and very light pink, subtle warm peach-orange support glow, low contrast, clean off-white background, no hard object, no sphere, no visible ring outline, no arcs, no strokes, no orbit lines, no decorative messy lines, modern 2025-2026 mobile UI atmosphere asset, no text, no logo, no watermark
```

要求：

- 橙色必须保留品牌支撑关系，但不要求在 D02 中做成硬性主导色块。
- 蓝青、淡紫、轻粉只服务清透智能氛围，不能变成蓝色品牌重做。
- 适合放入数据分析、设置总览、系统健康页面。
- 不做科幻、赛博、能量爆炸或玻璃球炫技。

### `D03` 模块图标 tile 样张提示词

```text
four individual rounded-square module icon tiles for a modern restaurant operations mobile app, each tile has a different soft low-saturation gradient background based on module meaning, unified top-left light source, geometrically centered simple translucent glyphs, visually centered within each tile, orange-led palette with cyan, mint, peach, soft yellow accents, clean off-white background, soft 3D semi-flat style, no text, no logo, no watermark
```

要求：

- 仅用于方向评审时可以同图展示；生产时必须一个图标一个独立资产。
- 同屏建议控制在 `3-4` 个主要底色色系。
- 底色可变，但明度、饱和度、光源和体积感必须统一。

### `D04` 微插画样张提示词

```text
small business micro illustration for a restaurant operations mobile app, clear payment and receiving money concept, soft POS terminal, payment card and received-status dot, orange-led soft gradient, translucent rounded geometry, minimal details, gentle shadow, clean off-white background, 2025-2026 mobile app asset style, no text, no logo, no watermark
```

要求：

- 只表达一个业务对象，不做复杂场景。
- 适合放在 `390px` 页面内的卡片或空状态里。
- 不使用真实硬件渲染，不做旧式收银机。

## 第二阶段：模块图标 tile 清单

方向通过后，生成 `12` 个独立模块图标 tile。生产时每个图标独立导出，不能用 sprite sheet 裁切。

| ID | 模块 | 建议底色方向 | 图形隐喻 | 用途 |
| --- | --- | --- | --- | --- |
| `I01` | 收款 / 支付 | 橙 + 青 | 钱包、卡片、支付波纹 | 支付设置、收款入口 |
| `I02` | 营收 / 余额 | 橙 + 蜜桃 | 金额卡、上升曲线 | 老板首页、数据卡 |
| `I03` | 订单 | 浅蓝 + 橙点 | 票据、订单条 | 订单列表、经营概览 |
| `I04` | 预约 | 浅黄 + 蜜桃 | 日历、时钟 | 预约管理 |
| `I05` | 桌台 / 点餐 | 薄荷 + 浅蓝 | 餐桌、菜单卡 | POS、桌台入口 |
| `I06` | 员工 / 权限 | 浅蓝 + 浅紫 | 人员徽章、权限钥匙 | 员工工作台 |
| `I07` | 设备 / 连接 | 蓝 + 薄荷 | 终端、连接波纹 | 设备绑定、系统健康 |
| `I08` | 设置 | 蓝灰 + 橙高光 | 齿轮、控制面板 | 设置页 |
| `I09` | 数据分析 | 橙 + 冰蓝 | 图表、洞察点 | 报表、AI 摘要 |
| `I10` | 应用开通 | 粉橙 + 浅黄 | 拼图、开关、模块块 | 应用管理 |
| `I11` | 会员 / 点数 | 橙 + 软黄 | 星标、点数币 | 点数、会员权益 |
| `I12` | 库存 / 商品 | 薄荷 + 蜜桃 | 盒子、清单 | 商品、库存、菜单 |

### 模块图标统一提示词模板

```text
single rounded-square module icon tile for a modern restaurant operations mobile app, [MODULE METAPHOR], soft low-saturation gradient background based on [COLOR DIRECTION], centered simple translucent glyph, unified top-left light source, soft 3D semi-flat style, minimal detail, clean off-white background, no text, no logo, no watermark, no checkerboard
```

替换字段：

- `[MODULE METAPHOR]`：使用上表“图形隐喻”。
- `[COLOR DIRECTION]`：使用上表“建议底色方向”。

## 第三阶段：业务微插画清单

方向通过后，生成 `3` 个独立微插画。

| ID | 微插画 | 页面 | 视觉重点 | 禁忌 |
| --- | --- | --- | --- | --- |
| `M01` | 设备 / 设置 | 设置总览、设备绑定 | 设备健康、连接可信赖 | 真实硬件渲染、旧收银机 |
| `M02` | 支付 / 收款 | 支付设置、充值、收款说明 | 安全、到账、状态清楚 | 大金额文字、银行卡真实品牌 |
| `M03` | 预约 / 应用开通 | 预约、应用管理 | 轻量引导、开通完成感 | 营销 banner、促销海报 |

### 微插画统一提示词模板

```text
small business micro illustration for a modern restaurant operations mobile app, [BUSINESS OBJECT], orange-led soft gradient palette with subtle cyan or mint support, translucent rounded geometry, soft 3D semi-flat style, minimal details, gentle shadow, clean off-white background, no text, no logo, no watermark, no checkerboard
```

替换字段：

- `[BUSINESS OBJECT]`：使用 `POS device and settings status`、`secure payment and receiving money`、`booking calendar and app activation module`。

## 文件命名与落地路径

评审图可以先放在：

```text
tasks/T02/output/assets-review/
```

确认可用于产品后，生产资产必须移动到：

```text
source/src/assets/generated/app-style-kit/
```

命名规则：

```text
tappo-assistant-direction-v01.png
tappo-smart-atmosphere-v01.png
tappo-icon-payment-v01.png
tappo-icon-revenue-v01.png
tappo-icon-order-v01.png
tappo-icon-booking-v01.png
tappo-icon-table-order-v01.png
tappo-icon-staff-v01.png
tappo-icon-device-v01.png
tappo-icon-settings-v01.png
tappo-icon-analytics-v01.png
tappo-icon-app-activation-v01.png
tappo-icon-points-v01.png
tappo-icon-inventory-v01.png
tappo-illustration-device-v01.png
tappo-illustration-payment-v01.png
tappo-illustration-booking-v01.png
```

## 评审标准

通过标准：

- 放入 `390px` 页面后不显拥挤。
- 与 `16px` 圆角卡片体系一致。
- 橙色仍是品牌主导，蓝/青/薄荷/粉/黄只做辅助。
- 图标底色可变但不像随机拼贴。
- 所有资产都没有文字、假 logo、水印、棋盘格。
- 业务对象一眼可读：支付、订单、设备、预约、员工、数据等不能混淆。
- Tier 3 操作详情页不会被大插画或光球干扰。

不通过标准：

- 像通用 AI SaaS、教育 App、招聘 App 或素材站图标。
- 主色变蓝紫，削弱 Tappo 橙色。
- 小T变成固定大吉祥物或儿童玩具。
- 光球像科幻能量球。
- 图标每个都不同材质、不同光源、不同饱和度。
- 图标或插画内出现任何文字、假 UI、logo、水印。

## 下一步执行

建议下一步人工评审 `I01-I22 v04`。通过后再决定是否迁移到 `source/src/assets/generated/app-style-kit/`；不通过则按图标 ID 单项修正。`M01-M03 v01` 暂不作为本轮重点。

不要先直接生成完整生产图库。
