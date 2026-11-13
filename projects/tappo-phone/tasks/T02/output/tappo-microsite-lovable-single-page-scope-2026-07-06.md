# TAPPO / Tappo Pulse 微官网单页范围变更记录

> 状态更新：本记录已被 2026-07-06 后续用户纠正覆盖。当前最新口径是：首页点餐/电子菜单入口和订座预约入口都要保留；菜单/点餐内容页不做；订座预约页和预约表单需要保留。最新记录见 `tasks/T02/output/tappo-microsite-scope-correction-image2-visual-brief-2026-07-06.md`。

## 评审入口

- Lovable 项目：`https://lovable.dev/projects/8faa4bde-6332-499d-8c7c-32989d04759f`
- 当前预览：`https://8faa4bde-6332-499d-8c7c-32989d04759f.lovableproject.com/`
- 参考原型：`https://tappophone.netlify.app/merchant-h5/`

## 范围变更

用户在 2026-07-06 明确补充：点餐和订座的子页面都不需要做。

本轮 Lovable 修改目标因此从“首页 + 电子菜单 + 订座预约”收敛为单页门店微官网。首页只保留品牌/门店图片轮播、门店信息卡、品牌简介、最新公告、门店设施/服务亮点、联系方式、地址、分享微官网和 `Powered by Tappo` 页脚。

## Lovable 返回的修改结果

Lovable 返回标题：`精简首页为单页微官网`。

已修改或删除：

- 删除 `src/routes/menu.tsx`、`src/routes/booking.tsx`，以及对应页面图 `booking-hero.jpg`、`menu-placeholder.jpg`。
- 新增 `src/routes/$.tsx`，作为兜底路由，把未知路径（包括旧的 `/menu`、`/booking`）重定向回 `/`。
- 更新 `src/routes/index.tsx`，移除 `Link`、`ClipboardList`、`CalendarDays` 引入，删除首页两个快捷入口卡，改为 `門店設施 · 服務亮點` 标签区，并从 `brand.facilities` 渲染。
- 更新 `src/lib/tappoData.ts`，公告文案改为堂食/外卖、周末限定套餐、致电查询，不再出现预订座位或查看菜单相关引导。

## 已复核内容

- Lovable Preview 首页未再展示「电子菜单」或「订座预约」入口卡。
- 当前首页保留餐饮图片轮播、门店卡、品牌简介、最新公告、门店设施/服务亮点、分享按钮和 `Powered by Tappo` 页脚。
- 最新公告文案已改为门店营业、堂食/外卖、周末限定套餐与致电查询，不再引导用户进入点餐或订座子页面。
- Lovable 页面切换器当前显示 `Homepage`，预览主内容没有菜单分类、菜品价格、订座表单、时间选择、人数选择或 Minitable 跳转卡。
- 曾尝试用外部 `curl` 直达 `/menu`，但 Lovable 未发布预览会先跳到 `lovable.dev/auth-bridge`，无法用无登录会话的命令行证明页面内重定向；旧路径仍建议发布前在已登录浏览器里单独复查。
- 本轮未点击 `Publish`。

## 通过标准

- 首页不再出现点餐、电子菜单、订座、预约相关入口。
- `/menu` 与 `/booking` 不再作为业务子页面保留；若用户直接访问，应回到首页，不显示旧菜单页或订座表单。
- 微官网仍保持 Tappo Pulse 视觉方向：轻量、干净、可信赖、餐饮品牌感、橙色主导、清透软渐变。
- 主题 token 继续保留主色 + 主色透明度、辅助深色 + 深色透明度；字体继续参考 `OPPO Sans 4.0` / Tappo Pulse 规范。
- H5 外壳继续保持移动端 `max-width: 430px`、无横向溢出和 safe-area 兼容。

## 后续动作

- 发布前建议再做一次独立地址栏直达 `/menu` 与 `/booking` 的人工复查，确认旧链接会回到首页。
- 发布前建议补一轮 375 / 390 / 430px 多宽度截图 QA。
- 如需正式上线，需要用户明确确认后再点击 Lovable `Publish`。
