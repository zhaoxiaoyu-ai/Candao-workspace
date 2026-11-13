# TAPPO 微官网 Lovable 源码级证据补充

## 范围

本记录补充 `tappo-microsite-lovable-second-pass-2026-07-06.md`。在 Codex 仍无法通过 Lovable MCP OAuth 的情况下，本轮使用已登录 Lovable 网页项目的 `Code / Read only` 面板做源码级复核，确认第二轮 Lovable 返回的关键实现确实存在于生成文件中。

目标 Lovable 项目：

- `https://lovable.dev/projects/8faa4bde-6332-499d-8c7c-32989d04759f`

当前预览入口：

- 首页：`https://8faa4bde-6332-499d-8c7c-32989d04759f.lovableproject.com/`
- 电子菜单：`https://8faa4bde-6332-499d-8c7c-32989d04759f.lovableproject.com/menu`
- 订座预约：`https://8faa4bde-6332-499d-8c7c-32989d04759f.lovableproject.com/booking`

## 评审信息

- 评审入口：已登录 Lovable 项目 `Code / Read only` 面板、Lovable 项目预览与本文档
- 评审对象：TAPPO / Tappo Pulse 餐饮商家移动端微官网 H5 的源码实现证据
- 变更范围：未新发 Lovable Chat，未改源码，未发布；只复核已生成代码与预览状态
- 通过标准：主题 token 集中可改；图片素材已接入；路由 pending 存在；Tappo/Minitable 订座供应商模式有源码分支；订座校验、成功弹窗、离开确认有代码支持；H5 外壳限制移动端宽度且阻止横向溢出
- 下一步动作：如需完成端到端交互验收，需用户确认后点击 dummy 预约提交；如需验证 Minitable 视觉分支，需在 Lovable 中切换 `brand.bookingProvider` 后预览；如需上线，需另行确认后点击 `Publish`

## 已确认源码

### 主题与字体

在 `src/styles.css` 确认存在 `Tappo Pulse theme tokens` 注释和集中主题变量：

- 主色：`--tappo-primary`
- 主色 RGB：`--tappo-primary-rgb`
- 主色透明度：`--tappo-primary-alpha-08`、`--tappo-primary-alpha-14`、`--tappo-primary-alpha-22`
- 主色深值：`--tappo-primary-deep`
- 辅助深色：`--tappo-dark`
- 辅助深色 RGB：`--tappo-dark-rgb`
- 辅助深色透明度：`--tappo-dark-alpha-06`、`--tappo-dark-alpha-12`、`--tappo-dark-alpha-68`
- 字体：`--tappo-font: "OPPO Sans 4.0", "OPPO Sans", "PingFang SC", "PingFang TC", system-ui, -apple-system, "Helvetica Neue", sans-serif`

同时确认 `html, body`、`input`、`textarea`、`select`、`button` 使用该字体规则，并显式设置 `letter-spacing: 0`。

### 图片资产

在 `src/assets/` 确认已生成并接入餐饮图片素材：

- `booking-hero.jpg`
- `brand-burger.jpg`
- `brand-hk.jpg`
- `brand-restaurant.jpg`
- `hero-burger.jpg`
- `hero-fries.jpg`
- `hero-shake.jpg`
- `menu-placeholder.jpg`

首页预览可见餐厅环境、招牌汉堡与港式餐饮氛围图；分享面板也仍在首页预览中可见。

### 门店与菜单数据

在 `src/lib/tappoData.ts` 确认：

- `BookingProvider = "tappo" | "minitable"`
- `brand.bookingProvider` 当前为 `"tappo"`
- `brand.minitableUrl` 为 Minitable 跳转 URL
- 门店信息包含 `中環旗艦店`、`中式餐廳`、`星期一至日 11:00 - 22:00`、`+852 2888 1234`、`香港中環皇后大道中 88 號 1 樓`
- 图片轮播 `slides` 使用 `brandRestaurant`、`brandBurger`、`brandHk`
- 菜单分类包含 `熱門`、`主食`、`飲品`、`小食`、`甜品`、`套餐`
- 菜品示例包含 `鮮蝦雲吞麵 HK$78`、`冰鎮奶茶 HK$32`、`楊枝甘露 HK$45`、`乾炒牛河`、`星洲炒米`、`凍檸茶`、`熱咖啡`

### 路由 loading

在 `src/router.tsx` 确认路由配置包含：

- `scrollRestoration: true`
- `defaultPreload: "intent"`
- `defaultPendingComponent: RoutePending`
- `defaultPendingMs: 0`
- `defaultPendingMinMs: 0`

文件树中确认 `src/components/RoutePending.tsx` 存在。

### 移动端 H5 外壳

在 `src/components/AppShell.tsx` 确认外层移动端画布：

- 外层 `min-h-screen w-full flex justify-center`
- 内容层 `w-full max-w-[430px] min-h-screen overflow-x-hidden`
- 背景统一使用 `var(--tappo-bg)`

这能解释第二轮 Lovable 摘要中“移动端限宽 430px + overflow-x-hidden”的来源。

### 订座供应商模式

在 `src/routes/booking.tsx` 确认：

- `const isMinitable = brand.bookingProvider === "minitable"`
- Minitable 分支会隐藏原生表单，显示 `此門店由 Minitable 提供預約服務`、`將跳轉至第三方預約頁`
- Minitable CTA 文案为 `前往 Minitable Booking`，链接来自 `brand.minitableUrl`
- 当前 `brand.bookingProvider` 为 `"tappo"`，因此预览显示原生预约表单

### 订座表单与弹窗

在 `src/routes/booking.tsx` 确认：

- 表单字段：`暱稱`、`郵箱`、`手機`、`預約日期`、`預約時段`、`人數`、`備註資訊`
- 校验文案：`請輸入暱稱`、`請輸入郵箱`、`郵箱格式不正確`、`請輸入手機號碼`、`請選擇預約日期`、`請選擇預約時段`、`請選擇人數`
- `submit()` 通过校验后执行 `setSuccess(true)`，并保留 `TODO: hook up MOS 订座管理配置 endpoint`
- 成功弹窗包含绿色对勾、`預約成功！`、日期、时段、人数，以及 `完成` 按钮
- `完成` 会 `setSuccess(false)`、清空表单并 `navigate({ to: "/" })`
- 已填写返回会打开 `leaveOpen` 弹窗，文案为 `確定要離開嗎？` 和 `已填寫的資訊將不會保存。`
- 离开弹窗按钮为 `取消` 与 `確定離開`

## 当前仍未完成

- 未点击 Lovable `Publish`。
- 未点击真实 `提交預約` 做成功弹窗端到端实测；原因是预约提交属于需要用户明确确认的界面动作。
- 未把 `brand.bookingProvider` 切换为 `"minitable"` 做视觉分支预览，只确认了源码分支存在。
- 未做 375px / 390px / 430px 多宽度截图集。
- Codex CLI 的 Lovable MCP 仍未登录；如需通过 MCP 做源码 diff、部署或项目管理，仍需使用 Lovable 官方支持的客户端连接 MCP。

## 当前结论

源码级证据已补齐大部分此前“只能依赖 Lovable 返回摘要”的风险：主题 token、Tappo Pulse 字体回退、Image-2 餐饮素材、三页路由、路由 pending、Tappo/Minitable 订座模式、表单校验、成功弹窗、离开确认和移动端 430px 外壳均已在 Lovable `Code / Read only` 面板中确认。剩余风险集中在会改变项目或业务状态的操作：发布、真实预约提交、供应商配置切换和完整多宽度截图验收。
