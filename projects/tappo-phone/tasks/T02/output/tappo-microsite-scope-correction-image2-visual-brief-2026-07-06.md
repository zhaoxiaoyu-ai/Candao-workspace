# TAPPO / Tappo Pulse 微官网范围纠正与 Image2 视觉升级 Brief

## 评审入口

- Lovable 项目：`https://lovable.dev/projects/8faa4bde-6332-499d-8c7c-32989d04759f`
- 当前预览：`https://8faa4bde-6332-499d-8c7c-32989d04759f.lovableproject.com/`
- 视觉方向评审页：`tasks/T02/output/tappo-microsite-image2-visual-direction-review-2026-07-06.html`
- Image2 资产包说明：`tasks/T02/output/tappo-microsite-image2-asset-set-2026-07-06.md`
- Image2 方向样张：`tasks/T02/output/tappo-microsite-image2-visual-direction-sample-2026-07-06.png`
- Image2 轮播候选：
  - `tasks/T02/output/tappo-microsite-image2-hero-burger-2026-07-06.png`
  - `tasks/T02/output/tappo-microsite-image2-hero-combo-2026-07-06.png`
  - `tasks/T02/output/tappo-microsite-image2-hero-restaurant-2026-07-06.png`
- Image2 图标方向稿：`tasks/T02/output/tappo-microsite-image2-entry-icons-2026-07-06.png`
- 参考图：用户提供的绿色 Gelato 小程序首页截图。

## 最新范围纠正

用户在 2026-07-06 进一步纠正范围，以本条为准：

- 点餐/电子菜单入口要保留。
- 订座预约入口也要保留。
- 菜单/点餐内容页不需要做，不展示菜品分类、菜品、价格、加购、购物车或下单 CTA。
- 订座是需要的，`/booking` 应继续保留预约页和预约表单能力。

因此，上一份 `tappo-microsite-lovable-single-page-scope-2026-07-06.md` 中“删除或隐藏两个入口、删除订座页”的结论已经被最新纠正覆盖，不再作为当前执行口径。

## 设计问题判断

当前 Lovable 预览的规范和结构基本可用，但设计感不足：

- 顶部轮播图更像普通餐厅环境图，缺少广告大片质感、食物材质、光线层次和品牌记忆点。
- 首页入口卡偏基础，图标偏单一线性，缺少能支撑餐饮品牌的“可感知资产”。
- 卡片虽然干净，但材质、层级、动线和主题适配能力还不够强。

参考图可提炼的方向不是固定绿色，而是：

- 顶部首屏用高质感食品广告图占据主要情绪。
- 图像里有真实食材、器皿、液体、反光、雾感、景深和聚光。
- UI 卡片叠在图像下方，使用半透明材质、柔和阴影和清晰层级。
- 功能图标有物件感或微 3D 质感，不只是单色线框。
- 色彩可以换，但布局和材质要保持通用，适配任意主色。

## 已生成 Image2 方向资产

本轮已补齐 4 个本地可评审资产：

| 文件 | 尺寸 | 用途 | 建议 |
| --- | --- | --- | --- |
| `tappo-microsite-image2-hero-burger-2026-07-06.png` | 941x1672 | 招牌汉堡轮播图 | 可作为首页第一张 hero 候选 |
| `tappo-microsite-image2-hero-combo-2026-07-06.png` | 941x1672 | 套餐/外带轮播图 | 可表达堂食、外卖、自取能力 |
| `tappo-microsite-image2-hero-restaurant-2026-07-06.png` | 941x1672 | 门店氛围轮播图 | 适合订座和品牌情绪 |
| `tappo-microsite-image2-entry-icons-2026-07-06.png` | 1254x1254 | 入口图标材质方向 | 方向稿，不建议整张裁切直接上线 |

这些图片均未发现明显假 logo、水印或可读品牌文字。后续在 Lovable 中可以：

- 直接参考这些图的光影、材质、构图和安全留白，让 Lovable 内置 Image2 重新生成项目内资产。
- 如果 Lovable 支持上传参考图，则把这 4 张作为 style reference。
- 图标方向稿建议拆成单个入口小资产重新生成或重绘，不要整张拼贴图上线。

## Image2 生成原则

顶部轮播图使用 Image2 重新生成或复刻 3 张：

1. 招牌汉堡主视觉：手打牛肉汉堡、融化芝士、金黄面包、微反光木质台面、暖橙聚光、浅景深。
2. 套餐氛围主视觉：汉堡、薯条、冷饮、纸袋/餐盘组合，带冷凝水、金属或玻璃反光，适合微官网首屏。
3. 门店氛围主视觉：中环夜间餐厅灯光、吧台/桌面/餐具细节，品牌感强但不含假 logo。

生成约束：

- 不要把可读文字、假 logo、品牌标志、水印烧进图片。
- 预留上方和边缘 safe area，方便叠加状态栏、品牌名或轮播控件。
- 图片要适合作为移动端顶部 40%-50% 高度的视觉。
- 可以随主题色套用暖橙、深绿、深红、墨蓝等氛围，但不要让图片依赖单一固定色。

## 图标与卡片方向

首页入口卡：

- 保留两个入口：`点餐/电子菜单`、`订座预约`。
- 图标不使用单一线性图标，可使用 Image2 小图资产或高质感 pictorial icon。
- 图标内容建议：
  - 点餐/电子菜单：餐袋、菜单夹、汉堡小物件、餐盘，不出现购物车下单暗示过重。
  - 订座预约：餐桌牌、铃、餐具、预约卡，不要用过于后台化的日历图标。
- 卡片使用主题 token 控制主色和透明度：主色负责强调点、按钮、icon badge；卡片主体保持中性半透明，确保换色后仍能成立。

服务小卡：

- 使用 `堂食 / 外卖 / 订座 / 会员或优惠` 等轻量服务表达。
- 图标可以是小型 Image2 物件资产，但必须统一光源、材质、圆角和阴影。
- 不要生成大量风格不同的图标，也不要混用摄影图、线框图和插画图。

## 可直接投喂 Lovable 的英文指令

```text
Do not publish. Do not add or change MCP integration.

Latest scope correction:
- Keep BOTH homepage entry cards: Menu / Ordering and Reservation.
- Menu / Ordering entry stays visible, but there is no full menu content page for now.
- Reservation is required and must remain functional.

Please update this Lovable project:
1. Keep two homepage entry cards: Menu / Ordering and Reservation.
2. /menu should be a lightweight empty-state page or panel only. It must NOT show categories, dish names, prices, activity/system menu tabs, add-to-cart, checkout, or ordering CTA. Use copy like: Menu content has not been configured yet. Please visit the store or call us.
3. /booking must remain a real reservation page. Restore/keep the reservation form: name, email, phone, date, time slot, party size, validation, success modal, leave confirmation, and Tappo Booking / Minitable Booking provider configuration.
4. Update announcement copy: The store is open for dine-in, takeaway, and advance reservations. The menu entry is reserved; menu content will be configured by the merchant later. Do NOT say view latest menu.
5. Improve the visual design using the attached reference direction: more premium, less flat. The current carousel images feel too generic. Use built-in Image2 to generate premium food advertising hero images similar to these directions: close-up signature burger, burger combo with takeaway bag, and warm restaurant ambience. Requirements: cinematic food photography, tactile materials, rich lighting, controlled depth of field, no fake logos, no readable text baked into image, leave safe area for UI overlay. Create 3 hero slides.
6. Upgrade entry icons and cards. Icons should not be single flat line icons. Use richer theme-adaptive pictorial icons or Image2-generated small assets with soft 3D/material feel: menu wallet/burger for Menu, reservation table card/service bell for Booking, takeaway bag/cup for service cards. They must work with arbitrary primary colors, so bind cards to theme tokens and avoid hard-coded green/orange-only styling.
7. Keep Tappo Pulse style: clean, light, trustworthy, food-brand feeling, premium but practical. Theme tokens must still support primary color plus primary alpha, and dark assistant color plus dark alpha. Font remains OPPO Sans 4.0 fallback stack. AppShell stays max-width 430px, no horizontal overflow, safe-area compatible.

After finishing, summarize changed files and how to verify: homepage has both entry cards, /menu has no menu content, /booking form works, Image2 hero assets and upgraded icons/cards are used.
```

## 当前 Lovable 执行状态

- 已尝试在已登录 Lovable 网页项目继续输入最新纠正和视觉升级指令。
- 已在本地补齐 3 张 Image2 轮播候选图和 1 张入口图标材质方向稿，并更新评审页。
- Lovable 当前账号显示 `0 free credits remaining today`，发送时弹出 `Upgrade your plan`，因此本轮未能继续实际写入项目。
- 未点击 `Upgrade`，未点击 `Publish`。
- 当前可见 Lovable 预览仍处在旧版状态：首页有点餐/电子菜单和订座预约两个入口；订座历史实现已存在；菜单页仍可能是完整菜单内容，需在额度恢复后按本 brief 改成轻量空状态。

## 通过标准

- 首页两个入口都存在。
- `/menu` 不展示菜单分类、菜品、价格、购物车、加购或点餐 CTA，只保留轻量空状态或提示。
- `/booking` 继续是可用订座表单。
- 顶部轮播图通过 Image2 改为高质感餐饮广告主视觉。
- 图标和卡片不再是单一线性图标/普通白卡，而是更有材质、层级和通用主题适配能力。
- 所有图片资产无假 logo、无水印、无不可控文字。

## 下一步

1. 等 Lovable free credits 恢复，或使用可用额度账号继续发送上方英文指令。
2. 执行后检查 `/`、`/menu`、`/booking` 三个路径。
3. 做 375 / 390 / 430px 多宽度截图 QA。
4. 仅在用户明确确认后再点击 `Publish`。
