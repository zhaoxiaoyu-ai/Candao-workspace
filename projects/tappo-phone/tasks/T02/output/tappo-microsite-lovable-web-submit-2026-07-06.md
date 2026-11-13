# TAPPO 微官网 Lovable 网页执行记录

## 范围

本记录补充 `tappo-microsite-lovable-mcp-preflight-2026-07-06.md` 之后的实际执行结果。由于 Codex 当前不能完成 Lovable MCP OAuth，本次没有通过 MCP 工具直接调用 Lovable，而是使用已登录的 Lovable 网页项目 Chat 在目标项目内发起构建。

目标 Lovable 项目：

- `https://lovable.dev/projects/8faa4bde-6332-499d-8c7c-32989d04759f`

参考原型：

- `https://tappophone.netlify.app/merchant-h5/`

当前预览入口：

- 首页：`https://8faa4bde-6332-499d-8c7c-32989d04759f.lovableproject.com/`
- 电子菜单：`https://8faa4bde-6332-499d-8c7c-32989d04759f.lovableproject.com/menu`
- 订座预约：`https://8faa4bde-6332-499d-8c7c-32989d04759f.lovableproject.com/booking`

## 评审信息

- 评审入口：Lovable 项目预览与本文档
- 评审对象：TAPPO / Tappo Pulse 餐饮商家移动端微官网 H5
- 变更范围：通过 Lovable 网页 Chat 让目标项目生成首页、电子菜单、订座预约、分享面板与主题 token；未发布 production
- 通过标准：页面可进入、核心内容保留、主要交互可点击、主题色按 `--tappo-*` token 集中、图片素材已接入预览
- 下一步动作：用受支持客户端接入 Lovable MCP 后读取 diff/source 复核；或在 Lovable 网页继续做第二轮视觉与交互细化

## 本次执行

- 时间：2026-07-06 09:44 左右
- 操作方式：已登录 Lovable 网页项目 Chat
- 发送内容：以原型内容拆解为基础的 TAPPO / Tappo Pulse 微官网首轮构建 brief
- Lovable 返回标题：`重做了 Tappo 餐饮 H5 微官网`
- Lovable 返回摘要：`Tappo Pulse 微官網已重做完成——首页、电子菜单、订座预约、分享面板全部按需求实现，主题色统一由 src/styles.css 里的 --tappo-* token 控制，图片素材已生成并接入。`

## 已抽查结果

### 首页

已看到：

- 顶部品牌/餐厅图片轮播，包含餐厅环境、招牌汉堡、港式餐饮氛围等图片素材。
- 门店名称：`中環旗艦店`
- 类型与门店信息：`中式餐廳`、`星期一至日 11:00 - 22:00`、`+852 2888 1234`、`香港中環皇后大道中 88 號 1 樓`
- 品牌简介区保留 One Burger 原型文案。
- 最新公告区保留原型公告。
- 快捷入口：`電子菜單`、`訂座預約`
- 分享入口：`分享微官網`
- 页脚：`Powered by Tappo`、`© 2026 Tappo. All rights reserved.`

### 电子菜单

已通过首页入口进入 `/menu`，预览加载完成后看到：

- 顶部返回首页入口。
- 标题：`電子菜單`
- Tab：`活動菜單`、`系統菜單`
- 分类：`熱門`、`主食`、`飲品`、`小食`、`甜品`、`套餐`
- 已显示菜品示例：
  - `鮮蝦雲吞麵` / `HK$78`
  - `冰鎮奶茶` / `HK$32`
  - `楊枝甘露` / `HK$45`

说明：从 Lovable 预览的可访问结构看，菜单页路由已存在。首次点击后有短暂加载延迟，最终可以进入菜单页，不是路由缺失。

### 订座预约

已通过首页入口进入 `/booking`，预览加载完成后看到：

- 顶部返回首页入口。
- 标题：`訂座預約`
- 订座氛围图片。
- 门店信息卡与设施标签：`寵物友好`、`免費WiFi`、`停車場`、`電子支付`
- 表单字段：`暱稱`、`郵箱`、`手機`、`預約日期`、`預約時段`、`人數`、`備註資訊`
- 时段按钮：`午餐 11:00 - 14:00`、`晚餐 17:30 - 21:00`
- 人数按钮：`1人`、`2人`、`3人`、`4人`、`6人`、`8人`、`10人`
- 提交按钮：`提交預約`

### 分享

首页预览结构中存在分享入口与分享渠道：

- `WhatsApp`
- `Facebook`
- `Instagram`
- `Twitter`
- `Line`
- `複製連結`

分享链接已带当前预览域名。复制链接 toast 未做完整端到端校验，需下一轮继续复核。

## MCP 与官方配置结论

Lovable 官方确实支持 MCP，并且官方 endpoint 是：

```text
https://mcp.lovable.dev
```

但官方文档当前说明 OAuth 只支持以下客户端：

- ChatGPT
- Claude / Claude Desktop / claude.ai
- Claude Code
- Cursor
- VS Code

因此：

- 可以在官方支持客户端里正常配置 Lovable MCP。
- 当前 Codex CLI 可写入 MCP URL，但不能完成 Lovable OAuth。
- 已登录 Lovable 网页状态可以用于网页 Chat 操作项目，但不能自动变成 Codex MCP 的 OAuth token。
- 当前项目已通过网页路径推进；后续若需要源码级读取 diff、文件、部署动作，仍建议用官方支持客户端接入 MCP。

## 未完成或待复核

- 未发布项目；没有点击 Lovable 的 `Publish`。
- 未通过 MCP 读取 `src/styles.css` 或项目 diff，因此 `--tappo-*` token 位置待源码级复核。
- 未做完整 375px / 390px / 430px 多宽度截图验收。
- 未测试订座表单错误提示、成功弹窗、离开确认和复制链接 toast 的完整状态流。
- 未确认 `Minitable Booking` 模式是否已实现为可切换配置。

## 建议下一轮提示词

如果继续用 Lovable 网页 Chat，可发送：

```text
请继续完善当前 TAPPO / Tappo Pulse 微官网，不要改回 MCP agent integration。请基于现有页面做第二轮验收修正：

1. 确认 /menu、/booking 路由首次点击时不要短暂显示首页内容，进入时显示轻量 loading 或直接展示目标页。
2. 在订座页补齐 Tappo Booking / Minitable Booking 供应商模式切换配置：Tappo Booking 显示原生表单；Minitable Booking 显示第三方跳转/内嵌提示。
3. 补齐订座表单校验、成功弹窗、返回首页离开确认、关闭成功弹窗后清空表单并回首页。
4. 完整测试分享面板：底部弹出、遮罩/取消关闭、复制链接 toast、WhatsApp/Facebook/Instagram/Twitter/Line 链接。
5. 请在页面里增加一个只给开发维护看的 theme config 位置或注释，说明主色、主色透明度、辅助深色、辅助深色透明度如何改。
6. 保持 Tappo Pulse 风格、橙色主导、OPPO Sans 4.0 字体回退、移动端 375/390/430 无横向溢出。
```
