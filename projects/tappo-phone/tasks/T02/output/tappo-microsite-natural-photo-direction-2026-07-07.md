# TAPPO / Tappo Pulse 微官网后续需求整理：清新自然摄影方向

## 评审入口

- 旧版参考预览：`https://id-preview-1178098f--8faa4bde-6332-499d-8c7c-32989d04759f.lovable.app/`
- 可视化评审页：`tasks/T02/output/tappo-microsite-natural-photo-review-2026-07-07.html`
- 旧版参考截图：`tasks/T02/output/microsite-natural-style-review/old-preview-1178098f-clean-crop-2026-07-07.png`
- Lovable 项目：`https://lovable.dev/projects/8faa4bde-6332-499d-8c7c-32989d04759f`

## 最新设计判断

当前最新反馈覆盖上一轮“高质感广告大片 / 轻 3D 图标”的方向：

- 目标风格应更清新、自然、真实，偏真实摄影感。
- 当前最新版本的 Image2 资产 AI 感偏重，细节不够可信，食物和材质过于戏剧化。
- 相比之下，`1178098f` 旧版更接近目标：浅色背景、自然食品摄影、轻量卡片、视觉负担小。
- 后续不要再继续往厚重、强对比、电影光、3D 物件感方向推进。

上一批 `tappo-microsite-image2-asset-set-2026-07-06.md` 中的汉堡/套餐/餐厅氛围图仅保留为“反例或过渡稿”，不再作为当前执行方向。

## 1178098f 旧版可保留的优点

- 首屏色调轻：粉色/暖白背景，整体没有压迫感。
- 食物摄影更简单直接：饮品、草莓、奶油和玻璃杯主体清楚，商业感有，但不过度厚重。
- UI 层级清楚：顶部图片、欢迎卡、门店信息卡、功能入口之间关系明确。
- 卡片轻：大白卡、柔和阴影、圆角和留白比较舒服。
- 品牌氛围更年轻、自然，适合作为餐饮商家微官网，不像后台页或重型广告页。

## 需要纠正的问题

旧版本身不是最终版，只能作为风格参考。后续仍需修正：

- 首页必须保留 `点餐/电子菜单` 和 `订座预约` 两个入口。
- 菜单/点餐内容页不做，只保留轻量空状态；不要展示菜品分类、菜品、价格、加购、购物车或下单 CTA。
- 订座页和预约表单能力必须保留。
- 公告不要再写“查看最新菜单”，应改为“菜单内容由商家稍后配置 / 目前开放堂食、外卖与提前订座”。
- 文案应统一 Tappo Pulse / TAPPO 微官网口径，不要出现不可控假品牌名、假 logo 或图片内文字。

## 新视觉原则

### 图片

使用 Image2 时，关键词从“cinematic premium food advertising”改成：

- natural food photography
- fresh and airy
- soft daylight or clean studio light
- realistic food texture
- believable details
- minimal retouching
- editorial cafe / restaurant photography
- pastel or warm white background
- no CGI, no 3D render, no hyper-real plastic gloss

图片应像真实餐厅或饮品品牌摄影，而不是 AI 生成海报。

### UI

- 首屏继续使用大图轮播，但图片高度和卡片关系要轻：约 42%-48% 首屏高度即可。
- UI 卡片使用白色或暖白半透明，不要强玻璃拟态，不要重阴影。
- 图标不需要继续使用 3D pictorial icon；更推荐轻量线面结合图标，配浅色圆形底或小 badge。
- 主题色可替换，但默认应呈现清新、暖白、自然、轻粉/轻橙调性。
- 主色、主色透明度、辅助深色、辅助深色透明度仍需通过 token 控制。
- 字体仍按 TAPPO Pulse 规范：`OPPO Sans 4.0` 优先，回退 `OPPO Sans`、`PingFang SC/TC`、系统字体。

## 新 Image2 生成建议

### Hero 01 / 草莓奶昔或饮品

```text
Vertical natural food photography for a mobile restaurant micro-site hero. A strawberry milkshake in a clear glass with fresh strawberries and soft cream, clean pastel pink background, soft daylight, realistic glass reflections, believable food texture, fresh and airy mood, minimal retouching, editorial cafe photography, safe empty area for UI overlay. No logo, no readable text, no watermark, no CGI, no 3D render, no hyper-real plastic gloss.
```

### Hero 02 / 汉堡轻食

```text
Vertical natural restaurant food photography for a mobile H5 hero carousel. A fresh handcrafted burger on a clean warm-white table with simple ingredients nearby, soft daylight from the side, realistic bread and lettuce texture, shallow but natural depth of field, fresh casual dining mood, light pastel accents, minimal retouching. No logo, no readable text, no watermark, no CGI, no dramatic cinematic lighting.
```

### Hero 03 / 门店或餐桌

```text
Vertical natural cafe restaurant photography for a mobile micro-site. A bright restaurant table scene with simple plates, cutlery, drink glass, soft daylight, warm white and pale peach tones, calm natural atmosphere, realistic materials, clean composition, enough safe area for UI overlay. No people, no logo, no readable text, no watermark, no heavy dark lighting, no CGI.
```

## 可直接投喂 Lovable 的英文指令

```text
Do not publish. Do not click Upgrade. Do not add or change MCP integration.

Please revise the current TAPPO / Tappo Pulse merchant micro-site direction.

Latest visual correction:
- The previous Image2 direction is too AI-like, too cinematic, and too heavy.
- Use this older preview as the closer style reference:
  https://id-preview-1178098f--8faa4bde-6332-499d-8c7c-32989d04759f.lovable.app/
- The target style should be fresh, natural, light, realistic, and food-photography-led.
- Avoid CGI, 3D-rendered pictorial icons, hyper-real plastic gloss, dramatic dark restaurant lighting, fake text inside images, fake logos, and overly perfect AI food details.

Scope correction still applies:
1. Keep BOTH homepage entry cards: Menu / Ordering and Reservation.
2. Menu / Ordering entry stays visible, but there is no full menu content page for now.
3. /menu should be a lightweight empty-state page or panel only. It must NOT show categories, dish names, prices, menu tabs, add-to-cart, checkout, or ordering CTA.
4. /booking must remain a real reservation page with the form, validation, success modal, leave confirmation, and provider configuration.

Image direction:
- Generate or replace hero carousel images with natural editorial food photography.
- Suggested images: strawberry milkshake or dessert drink, fresh burger on a clean warm-white table, bright restaurant table scene.
- Use soft daylight, warm white or pastel background, believable food texture, minimal retouching, natural shadows, fresh airy mood.
- Do not bake text, logo, watermark, ratings, or labels into images. Page copy should be rendered by UI components.

UI direction:
- Keep the mobile H5 shell max-width 430px and safe-area support.
- Make the first screen feel airy and fresh, closer to the 1178098f version.
- Use light white/warm-white cards, soft shadows, clear hierarchy, and enough spacing.
- Entry icons should be lightweight and theme-adaptive, not heavy 3D assets. Use simple line/filled icons with subtle color badges if needed.
- Theme tokens must still support primary color + primary alpha and dark assistant color + dark alpha.
- Font remains OPPO Sans 4.0 fallback stack.

Content:
- Update announcement copy so it does NOT say "view latest menu".
- Suggested copy: The store is open for dine-in, takeaway, and advance reservations. The menu entry is reserved and menu content will be configured by the merchant later.

After finishing, summarize changed files and verify:
- Homepage keeps both entry cards.
- /menu has only an empty state and no menu content.
- /booking form works.
- Hero images are natural photography style, not AI-heavy cinematic assets.
- Cards and icons are lighter and theme-adaptive.
```

## Lovable 图片放到 Figma 的方法

### 推荐方式 A：拿原始图片资产再上传

适合后续要在 Figma 中继续设计和复用。

1. 在 Lovable 项目的 `Code / Files` 或预览页资源中找到图片文件，优先拿 `src/assets` 下的原图。
2. 下载图片到本地，命名为可追踪格式，例如：
   - `lovable-hero-strawberry-shake-1178098f.png`
   - `lovable-hero-burger-natural-1178098f.png`
3. 使用 Figma 官方 MCP 的 `upload_assets` 上传到目标文件。
4. 如果只是放素材板，不传 `nodeId`，让 Figma 生成独立图片 frame。
5. 如果要替换某个已有图片节点，传对应 `nodeId`，并用 `scaleMode: "FILL"` 或 `FIT`。

注意：Figma 上传支持 PNG、JPG、GIF、WebP；单个资产建议小于 10MB。SVG 不走图片上传，需用 `use_figma` 创建 SVG 节点。

### 方式 B：从 Lovable 预览页抓取图片 URL

适合图片不在文件面板里或无法直接下载时。

1. 打开 Lovable 预览页。
2. 通过浏览器资源面板、页面资源列表或截图工具识别 `img` / `background-image` 的真实 URL。
3. 下载真实图片文件，而不是整页截图。
4. 再按方式 A 上传到 Figma。

### 方式 C：截图裁切作为临时参考

适合只做风格参考，不作为最终素材。

1. 截取 Lovable 页面首屏。
2. 裁出 hero 区域或整屏参考。
3. 上传到 Figma 的参考区，命名为 `Reference / Lovable 1178098f`。
4. 在 Figma 中重建可编辑 UI；不要把整页截图当最终设计稿。

## 建议落到 Figma 的结构

如果要把 Lovable 方向同步到 Figma，建议新建一个 Section：

```text
TAPPO micro-site / Natural photo direction / 2026-07-07
```

Section 下放：

- `Reference / Lovable 1178098f`：旧版截图参考。
- `Hero assets / Natural photo`：从 Lovable 下载或 Image2 重生成的图片。
- `Screen / Home`：用 Figma 组件重建的可编辑首页。
- `Screen / Menu empty`：菜单空状态。
- `Screen / Booking`：订座页。

这样 Figma 中只有照片是位图，卡片、文案、图标、按钮和主题色仍然是可编辑设计资产。

## 下一步

1. Lovable 额度恢复后，用本文件的新英文指令替换旧输入框中的“高质感广告大片”方向。
2. 如果需要先同步到 Figma，则先上传 `1178098f` 旧版截图作为参考，再上传或重生成自然摄影 hero 图片。
3. Figma 中应重建可编辑 UI，不建议只贴整页截图。
4. 发布前仍需用户明确确认。
