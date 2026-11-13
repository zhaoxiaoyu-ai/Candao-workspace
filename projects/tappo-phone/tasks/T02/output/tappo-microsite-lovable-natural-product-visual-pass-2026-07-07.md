# TAPPO 微官网 Lovable 自然产品图视觉执行记录

日期：2026-07-07

## 本轮输入

用户最新要求：

- 动态图/顶部轮播必须是产品相关图片，不能只是抽象氛围图。
- 质感更清透自然，不要重色彩，不要明显 AI 感。
- 下方版式需要更灵活，继续参考 Gelato 参考图的层次、卡片和入口质感。
- 点餐和订座入口都要保留；菜单内容页不用做；订座页需要保留。

本轮发送给 Lovable 的执行提示词：

- `tasks/T02/output/tappo-microsite-lovable-natural-product-visual-prompt-2026-07-07.md`

## Lovable 执行结果

已通过已登录 Lovable 网页 Chat 成功提交 prompt。本轮没有点击 `Publish`，没有点击 `Upgrade`。

Lovable 返回本轮完成内容：

- Rebuilt homepage & `/menu`
- Implementing product-focused hero updates
- Clean typecheck

Lovable 声明变更文件：

- `src/assets/hero-product-burger.jpg`
- `src/assets/hero-product-drink.jpg`
- `src/assets/hero-product-takeaway.jpg`
- `src/lib/tappoData.ts`
- `src/components/BrandHero.tsx`
- `src/routes/index.tsx`
- `src/routes/menu.tsx`
- `/booking.tsx` 未改动

## 关键验收

- 首页顶部轮播已改为产品相关真实摄影方向：招牌汉堡、饮品/甜品、外带餐盒。
- 图片方向改为浅色、自然光、低饱和、清透餐饮摄影质感，避免重色彩、CGI、3D 渲染、塑料感和假文字。
- 首页下方结构不再是重复同款卡片，改为浮层门店卡、公告条、快捷服务条、不对称双栏、标签网格和图文条带。
- 首页仍保留点餐/电子菜单入口与订座预约入口。
- `/menu` 已改为轻量空状态，仅提示菜单即将上线，不展示菜品分类、菜品价格、加购、购物车或下单 CTA。
- `/booking` 仍为订座表单页，保留门店信息、昵称、邮箱、手机、日期、时段、人数、备注和提交预约。
- `tsgo` / typecheck 由 Lovable 返回为通过。

## 截图证据

- 首页 Lovable 预览截图：`tasks/T02/output/lovable-natural-product-home-after-submit-2026-07-07.png`
- 菜单空状态截图：`tasks/T02/output/lovable-natural-product-menu-tab-after-auth-2026-07-07.png`
- 订座表单截图：`tasks/T02/output/lovable-natural-product-booking-tab-2026-07-07.png`

## 额度状态

本轮提交执行成功后，Lovable 页面再次显示：

- `0 free credits remaining today`
- `Upgrade Now`

因此下一次 Lovable 生成式修改需要等待免费额度恢复，或由用户明确决定升级。继续遵守：不点击 `Upgrade`，不点击 `Publish`，除非用户明确确认。

## 备注

- 本轮仍是通过 Lovable 网页 Chat 操作；Lovable MCP 在 Codex 中仍无法完成 OAuth。
- 无头浏览器干净截图尝试不稳定，最终采用 Lovable 完成摘要、网页可见内容和 Chrome 可见截图作为验收证据。
- 下一步建议先由用户人工看首页产品图的自然度、清透度和下方版式层次；如果还偏 AI 或偏模板，应在额度恢复后做小步视觉微调，不要回到 2026-07-06 的重色彩 Image2 方向。
