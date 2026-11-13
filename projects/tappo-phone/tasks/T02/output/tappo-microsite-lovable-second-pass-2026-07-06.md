# TAPPO 微官网 Lovable 第二轮修正与验收记录

## 范围

本记录补充 `tappo-microsite-lovable-web-submit-2026-07-06.md` 之后的第二轮 Lovable 网页 Chat 修正与实机预览抽查。由于 Codex 当前仍不能完成 Lovable MCP OAuth，本次继续使用已登录 Lovable 网页项目 Chat 与项目预览，不通过 MCP 读取源码 diff。

目标 Lovable 项目：

- `https://lovable.dev/projects/8faa4bde-6332-499d-8c7c-32989d04759f`

当前预览入口：

- 首页：`https://8faa4bde-6332-499d-8c7c-32989d04759f.lovableproject.com/`
- 电子菜单：`https://8faa4bde-6332-499d-8c7c-32989d04759f.lovableproject.com/menu`
- 订座预约：`https://8faa4bde-6332-499d-8c7c-32989d04759f.lovableproject.com/booking`

## 评审信息

- 评审入口：已登录 Lovable 项目预览与本文档
- 评审对象：TAPPO / Tappo Pulse 餐饮商家移动端微官网 H5 第二轮交互修正
- 变更范围：路由 loading、订座表单校验、订座供应商配置说明、离开确认、分享面板与复制 toast；未发布 production
- 通过标准：首页、`/menu`、`/booking` 可进入；路由切换不闪回首页；订座必填校验可见；分享面板与复制提示可用；Tappo/Minitable 供应商配置在 Lovable 返回中有明确文件位置
- 下一步动作：在用户确认后提交一次 dummy 预约测试成功弹窗；用受支持客户端接入 Lovable MCP 后读取源码 diff，复核 theme token、Minitable 模式与多宽度样式

## 第二轮 Lovable 执行

- 时间：2026-07-06 09:54 左右
- 操作方式：已登录 Lovable 网页项目 Chat
- 发送内容：第二轮验收修正 brief，要求不要改回 MCP agent integration、不要发布，重点修正 `/menu` 与 `/booking` 路由 loading、Tappo/Minitable 订座供应商配置、表单校验、成功弹窗、离开确认、分享面板、主题 token 与移动端安全区。
- Lovable 返回标题：`修正 TAPPO 微官网加载与订座`
- Lovable 返回摘要：`已完成第二轮修正。`

Lovable 返回的修改文件：

- `src/router.tsx`：加入 `defaultPreload: "intent"`、`defaultPendingComponent`、`defaultPendingMs: 0`，导航到 `/menu`、`/booking` 时显示加载态。
- `src/components/RoutePending.tsx`：新增轻量路由 loading spinner，复用 `AppShell` 与主题 token。
- `src/lib/tappoData.ts`：补充订座供应商配置注释，来源标注为 MOS 后台「订座管理配置」。

Lovable 返回的供应商配置说明：

- `brand.bookingProvider = "tappo"`：显示当前原生预约表单。
- `brand.bookingProvider = "minitable"`：隐藏原生表单，显示 `前往 Minitable Booking` 跳转卡片，链接来自 `brand.minitableUrl`。

## 已实测结果

### 首页

已从 `/booking` 返回首页，看到路由切换先显示轻量 `加載中…` 状态，随后进入首页。首页内容继续保留：

- 顶部图片轮播。
- 门店信息：`中環旗艦店`、`中式餐廳`、营业时间、电话、地址。
- `品牌簡介`、`最新公告`。
- `電子菜單`、`訂座預約` 快捷入口。
- `分享微官網` 与页脚。

### 路由 loading

已验证：

- 从订座页点击 `返回首頁` 后先出现 `加載中…`，没有误显示首页旧内容。
- 从首页点击 `電子菜單` 后先出现 `加載中…`，随后进入 `/menu`。

### 电子菜单

已通过首页入口进入 `/menu`，看到：

- 标题：`電子菜單`
- 菜单类型：`活動菜單`、`系統菜單`
- 分类：`熱門`、`主食`、`飲品`、`小食`、`甜品`、`套餐`
- 菜品与价格：`鮮蝦雲吞麵 HK$78`、`冰鎮奶茶 HK$32`、`楊枝甘露 HK$45`

### 订座表单校验

已在 `/booking` 测试空表单提交后的必填错误，页面显示红色边框与错误文案：

- `請輸入暱稱`
- `請輸入郵箱`
- `請輸入手機號碼`
- `請選擇預約日期`
- `請選擇預約時段`
- `請選擇人數`

随后填入 dummy 测试资料：

- 暱稱：`測試客人`
- 郵箱：`test@example.com`
- 手機：`+852 6888 0000`
- 預約日期：`2026-07-10`
- 預約時段：`午餐 11:00 - 14:00`
- 人數：`2人`

填写后相应错误逐项消失。日期控件为浏览器原生分段输入，直接整体赋值未生效，但按年、月、日键盘输入可完成填写。

### 离开确认

已在表单填写后点击 `返回首頁`：

- 弹窗文案：`確定要離開嗎？已填寫的資訊將不會保存。`
- 点击 `取消` 后保留表单。
- 再次点击 `返回首頁` 并选择 `確定離開` 后进入首页 loading，并返回首页。

### 分享面板

已在首页点击 `分享微官網`：

- 以底部弹层打开分享面板。
- 面板包含 `WhatsApp`、`Facebook`、`Instagram`、`Twitter`、`Line`、`複製連結`。
- `WhatsApp` / `Facebook` / `Twitter` / `Line` 链接中包含当前预览域名和分享文案，文案为 `【One Burger】快来试试这家餐厅吧！`。
- 点击 `複製連結` 后出现 toast：`已複製微官網鏈接`。
- 点击 `取消` 可关闭分享面板。

说明：未点击外部社交渠道，避免打开第三方页面。

## 未完成或待复核

- 未点击 Lovable `Publish`。
- 未通过 Lovable MCP 或源码面板读取真实 diff，因此 `src/styles.css` 里的 `--tappo-*` token、`src/lib/tappoData.ts` 的 Minitable 分支仍需源码级复核。
- 未做 375px / 390px / 430px 全量截图验收，只在当前 Lovable 手机预览宽度做交互抽查。
- 未提交 dummy 预约成功流。原因：即使当前是 Lovable 预览，`提交預約` 属于预约提交类界面动作，需要用户确认后再点击。已完成提交前的完整填表与必填校验验证。
- 未验证成功弹窗关闭后是否清空表单并自动回首页；该项依赖上一条提交确认。

## 访问限制说明

未登录命令行访问当前预览时，会先 `302` 跳转到 Lovable `auth-bridge`：

```text
location: https://lovable.dev/auth-bridge?project_id=8faa4bde-6332-499d-8c7c-32989d04759f&return_url=...
```

因此本轮页面验收以已登录 Chrome 内的 Lovable 项目预览为准；命令行无法直接获得可渲染页面或源码级证据。

## 当前结论

第二轮修正已显著补齐首轮缺口：路由 loading、订座校验、离开确认、分享面板与复制 toast 均已通过预览抽查。当前主要剩余风险是源码级不可见、Minitable 分支未实机切换、成功预约提交流未获用户确认点击，以及缺少多宽度截图验收。
