# TAPPO / Tappo Pulse 微官网 Lovable 执行提示词：清透自然产品图方向

## 背景

本提示词覆盖 2026-07-06 的厚重 Image2 / 电影广告 / 3D 图标方向，也覆盖 2026-07-07 早些时候的自然摄影方向初稿。

最新用户补充：

- 顶部动态图 / 轮播图必须是产品相关图片，不要抽象氛围图。
- 图片质感要更清透自然，不要重色彩、重灯光、重对比。
- 下面内容区版式要更灵活，不要死板卡片堆叠。
- 继续参考用户提供的 Gelato 风格参考图：重点参考首屏产品摄影、文字层次、卡片浮层和内容节奏，不复制品牌、文案或绿色重色调。

## 执行范围

- 保留首页 `点餐/电子菜单` 和 `订座预约` 两个入口。
- 菜单/点餐内容页不做完整内容；`/menu` 只保留轻量空状态或提示。
- `/booking` 订座预约页和表单能力必须保留。
- 不点击 `Publish`。
- 不点击 `Upgrade`。
- 不改 MCP 配置。

## 图片方向

动态图 / 轮播图必须是产品相关真实图片，包括但不限于：

- 招牌汉堡或主打餐品的清透自然摄影。
- 饮品 / 奶昔 / 甜品的清爽产品摄影。
- 外卖袋 / 包装 / 餐盒和产品同框的自然摄影。

避免：

- 纯门店氛围图作为主图。
- 只有灯光、墙面、餐厅空间，没有具体产品的图片。
- 深色餐厅、橙红灯光、强烈电影感。
- 高饱和、重油光、塑料质感、3D 渲染感、明显 AI 感。
- 图片内烧录文字、假 logo、水印、评分、标签。

关键词：

- natural product photography
- food and drink product hero
- soft daylight
- airy and translucent
- clean pastel or warm-white background
- realistic texture
- gentle shadows
- low saturation
- minimal retouching
- editorial cafe photography
- no CGI
- no 3D render
- no dramatic dark lighting

## 版式方向

- 参考用户提供的 Gelato 图：首屏可以有产品图 + 品牌/活动文案 + 信息浮层的层次，但整体色彩应更轻、更清透，不要重绿或重橙。
- 首页首屏应更像对外餐饮品牌 H5，而不是后台页面。
- 下面内容区不要只是连续白卡片堆叠，可以混合使用：
  - 轻量横向行动区；
  - 错落的信息模块；
  - 小尺寸产品/服务图片；
  - 图文并排的亮点；
  - 半透明浮层；
  - 留白和轻分割。
- 卡片阴影要柔，不要强玻璃拟态，不要重边框。
- 图标仍需主题适配，但不要使用厚重 3D 图标；使用轻量线面结合、浅色底、小 badge 或简洁符号。
- 主色、主色透明度、辅助深色、辅助深色透明度仍要通过 token 控制，换色后也应成立。
- 字体仍按 TAPPO Pulse：`OPPO Sans 4.0` 优先，回退 `OPPO Sans`、`PingFang SC/TC`、系统字体。

## 可直接投喂 Lovable 的英文指令

```text
Do not publish. Do not click Upgrade. Do not add or change MCP integration.

Before editing, clear the old prompt direction from the input context. The old heavy Image2 / cinematic / 3D icon direction is no longer approved.

Please revise the TAPPO / Tappo Pulse merchant micro-site with this latest direction:

1. Product-related moving hero / carousel images
- The top moving hero / carousel images MUST be product-related, not abstract atmosphere-only restaurant photos.
- Use realistic food and drink product photography: signature burger or main dish, fresh drink / milkshake / dessert, takeaway packaging or meal box with the product.
- The image feeling must be clearer, more translucent, more natural, and lower saturation.
- Use soft daylight, warm-white or light pastel backgrounds, realistic texture, gentle shadows, fresh and airy mood, minimal retouching.
- Avoid dark restaurant lighting, heavy orange/red lighting, high saturation, cinematic drama, CGI, 3D render, plastic gloss, AI-looking food details, fake text, fake logos, labels, ratings, and watermarks.
- Page copy must be rendered by UI components, not baked into images.

2. Use the provided Gelato-style reference only for design quality
- Reference its product-led first screen, layered typography, floating content card, and lively composition rhythm.
- Do NOT copy its brand, colors, handwritten logo, product labels, green-heavy palette, or exact layout.
- Our target should be lighter, more transparent, more natural, and suitable for different merchant theme colors.

3. Scope correction still applies
- Keep BOTH homepage entry cards: Menu / Ordering and Reservation.
- Menu / Ordering entry stays visible, but there is no full menu content page for now.
- /menu should be a lightweight empty-state page or panel only.
- /menu must NOT show categories, dish names, prices, menu tabs, add-to-cart, checkout, or ordering CTA.
- /booking must remain a real reservation page with form, validation, success modal, leave confirmation, and provider configuration.

4. Homepage layout direction
- Keep the mobile H5 shell max-width 430px and safe-area support.
- Make the first screen feel like a polished external restaurant brand micro-site, not a backend/admin page.
- The lower sections should be more flexible and editorial, not a rigid stack of identical white cards.
- Mix light action strips, staggered info modules, compact product/service image blocks, small icon badges, soft dividers, and generous whitespace.
- Keep hierarchy clear: hero product image, store info, two main actions, announcement/status, brand story, services/facilities, location/contact/share.
- Cards should be white or warm-white with soft shadows, not heavy glassmorphism or hard borders.
- Entry icons should be lightweight and theme-adaptive, not heavy 3D pictorial icons.

5. Visual tokens and typography
- Theme tokens must support primary color + primary alpha and dark assistant color + dark alpha.
- Default colors should feel fresh, clean, light, warm-white, and low saturation.
- Font remains OPPO Sans 4.0 fallback stack.

6. Content copy
- Announcement copy must not say "view latest menu".
- Suggested copy: The store is open for dine-in, takeaway, and advance reservations. The menu entry is reserved and menu content will be configured by the merchant later.
- Keep Tappo Pulse / TAPPO micro-site naming consistent.

After finishing, summarize changed files and verify:
- Homepage keeps both Menu / Ordering and Reservation entry points.
- /menu has only a light empty state and no menu content.
- /booking form still works.
- The hero moving/carousel images are product-related natural photography, not atmosphere-only images.
- The overall visual is clearer, more translucent, more natural, lower saturation, and less AI-looking.
- The lower layout is more flexible than repeated card stacking.
```

## 通过标准

- 首页首屏主图至少 2 张为产品相关图片。
- 主图不应是深色餐厅灯光图或纯空间图。
- 首页下半部分不再只是同样式卡片堆叠。
- `/menu` 不展示完整菜单内容。
- `/booking` 保留表单能力。
- 未点击 Publish。
