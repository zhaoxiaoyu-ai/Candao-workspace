# TAPPO / Tappo Pulse 微官网 Image2 视觉资产包

> 2026-07-07 更新：用户反馈该批图片 AI 感偏重、细节不够自然，当前不再作为执行方向。后续应以 `tappo-microsite-natural-photo-direction-2026-07-07.md` 的清新自然、真实摄影感为准；本文件仅保留为过渡稿和反例参考。

## 评审入口

- 视觉评审页：`tasks/T02/output/tappo-microsite-image2-visual-direction-review-2026-07-06.html`
- 主 brief：`tasks/T02/output/tappo-microsite-scope-correction-image2-visual-brief-2026-07-06.md`
- Lovable 项目：`https://lovable.dev/projects/8faa4bde-6332-499d-8c7c-32989d04759f`

## 资产清单

| 文件 | 尺寸 | 用途 | 状态 |
| --- | --- | --- | --- |
| `tappo-microsite-image2-hero-burger-2026-07-06.png` | 941x1672 | 首页轮播 01，招牌汉堡广告主视觉 | 可用候选 |
| `tappo-microsite-image2-hero-combo-2026-07-06.png` | 941x1672 | 首页轮播 02，套餐/外带组合主视觉 | 可用候选 |
| `tappo-microsite-image2-hero-restaurant-2026-07-06.png` | 941x1672 | 首页轮播 03，门店氛围和订座情绪 | 可用候选 |
| `tappo-microsite-image2-entry-icons-2026-07-06.png` | 1254x1254 | 入口图标和服务小卡的材质方向 | 方向稿，不建议整张直接上线 |
| `tappo-microsite-image2-visual-direction-sample-2026-07-06.png` | 方向样张 | 参考 Gelato 图后的首屏构图方向 | 评审参考 |

## Image2 提示词记录

### Hero 01 / 招牌汉堡

```text
Vertical premium food advertising photo for a mobile restaurant micro-site hero carousel. A handcrafted cheeseburger with glossy brioche bun, melted cheese, grilled beef patty, lettuce, tomato, fries and iced cola on a reflective dark wood table. Cinematic warm amber restaurant lighting, shallow depth of field, rich tactile materials, appetizing detail, premium casual dining mood, safe empty space near the top for UI overlay. No logo, no watermark, no readable text, no people.
```

### Hero 02 / 套餐外带

```text
Vertical premium mobile hero photo for a restaurant H5 website. Burger combo with fries, cold drink with condensation, kraft paper takeaway bag and napkin on a warm counter, subtle metal and glass reflections, cinematic depth of field, modern Hong Kong restaurant atmosphere, high-end but practical food brand feeling, generous top safe area for UI overlay. No logo, no watermark, no readable text, no people.
```

### Hero 03 / 门店氛围

```text
Vertical premium restaurant ambience hero image for a booking-focused mobile micro-site. Warm evening dining room in Central Hong Kong, elegant bar, candle-like table lamp, plates, cutlery, glassware, subtle burger plate in foreground, city lights through window, cinematic amber lighting, tactile reflections, shallow depth of field, premium yet welcoming mood. No logo, no watermark, no readable text, no people.
```

### Entry Icons / 入口图标材质方向

```text
Square design direction sheet with four premium pictorial app-entry icons for a restaurant mobile micro-site. Soft 3D material style, clean white background, rounded translucent cards, consistent warm light source and subtle shadows. Objects: menu or ordering with burger and menu wallet, reservation with table card and service bell, takeaway with kraft bag and coffee cup, service/help with brass bell and table lamp. Use neutral objects with small colored circular badges that can adapt to any theme. No logo, no readable text, no watermark.
```

## 落地规则

- 轮播图可以作为 Lovable 当前首页的三张 Image2 hero 候选，页面文案和品牌名必须由前端组件叠加，不烧进图片。
- 图标方向稿不建议整图裁切上线；更推荐在 Lovable 内按 `点餐/电子菜单`、`订座预约`、`外卖/自取`、`服务/优惠` 单独生成或重绘小资产。
- 色彩适配仍通过 token 完成：主色、主色透明度、辅助深色、辅助深色透明度控制按钮、badge、焦点、卡片 tint；图片本身保持中性高级感。
- 保留最新范围：点餐/电子菜单入口和订座预约入口都在首页；菜单内容页不做；订座页和预约表单保留。

## 当前阻塞

Lovable 当前账号显示 `0 free credits remaining today` 并弹出 `Upgrade your plan`，因此这些资产和指令尚未写入 Lovable 项目。已避免点击 Upgrade 和 Publish。

## 下一步

1. Lovable 额度恢复后，将主 brief 中的英文指令投喂到项目 Chat。
2. 要求 Lovable 使用这批 Image2 方向重做首页轮播、入口图标和卡片层级。
3. 验收 `/`、`/menu`、`/booking`：首页双入口保留，`/menu` 为空状态，`/booking` 表单可用。
4. 做 375 / 390 / 430px 多宽度截图 QA；发布前必须再次获得用户确认。
