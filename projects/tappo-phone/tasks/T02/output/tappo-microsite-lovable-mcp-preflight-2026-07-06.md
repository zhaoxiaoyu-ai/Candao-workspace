# TAPPO 微官网 Lovable MCP 前置说明

## 范围

本说明记录 2026-07-06 对 TAPPO 微官网任务的前置准备：Lovable MCP 连接尝试、Lovable 使用方式识别、原型内容拆解、首轮 Lovable 构建提示词，以及当前阻塞点。

目标 Lovable 项目：

- `https://lovable.dev/projects/8faa4bde-6332-499d-8c7c-32989d04759f`

参考原型：

- `https://tappophone.netlify.app/merchant-h5/`

## 评审信息

- 评审入口：本文档
- 评审对象：Lovable MCP 连接状态、微官网内容范围、首轮构建提示词
- 变更范围：未改动 Lovable 项目代码；仅完成本机 MCP 配置尝试和项目输出文档
- 通过标准：确认 Lovable MCP 当前状态、明确下一步接入方案、首轮提示词可直接用于 Lovable 项目
- 下一步动作：使用受支持客户端接入 Lovable MCP，或由用户在 Lovable 项目 Chat 中粘贴本文档的首轮构建提示词

## Lovable MCP 当前状态

已将 Lovable MCP 按官方地址写入本机 Codex 配置：

```text
lovable -> https://mcp.lovable.dev
```

当前 `codex mcp list` 状态：

```text
lovable  https://mcp.lovable.dev  enabled  Not logged in
```

连接结果：

- 官方标准 URL 已配置成功。
- Codex CLI OAuth 登录失败，错误为 Lovable 限制动态客户端注册。
- 尝试使用官方文档中 Cursor 的 `CLIENT_ID` 后，浏览器进入 Lovable 授权页，但页面标题显示 `Authorization failed - Lovable`，Codex 未收到本地回调。
- 已移除 Cursor 专用 `CLIENT_ID`，保留官方标准 URL 配置，避免后续误判。

失败原因判断：

- Lovable 官方文档明确说明：Lovable MCP 的 OAuth 当前只支持 `ChatGPT`、`Claude`、`Claude Code`、`Cursor`、`VS Code`。
- Codex CLI 不在当前支持列表中，所以本机 Codex 不能完成 Lovable OAuth。
- 这不是 Lovable 网页登录状态问题；网页登录成功后仍需要 OAuth 客户端被 Lovable 接受。

## Lovable 使用方式摘要

Lovable MCP 是“外部 AI 客户端连接 Lovable”的入口，不是“Lovable 内部连接外部工具”的 Chat Connector。

核心流程：

1. 外部 AI 客户端连接 `https://mcp.lovable.dev`。
2. 调用 Lovable 工具读取工作区、项目、文件、diff 或向项目 agent 发消息。
3. 对已有项目迭代时使用 `send_message`，该调用会消耗真实 Lovable credits，并会直接改项目。
4. 需要发布时使用 `deploy_project`。

关键工具能力：

- `get_me`、`list_workspaces`、`list_projects`、`get_project`
- `send_message`、`get_message`
- `list_files`、`read_file`、`get_diff`、`list_edits`
- `deploy_project`
- `get_project_analytics`、`get_project_analytics_trend`

当前建议：

- 若必须由 AI 直接操作 Lovable 项目，优先使用官方支持的 ChatGPT / Claude Code / Cursor / VS Code 连接 Lovable MCP。
- 若继续在当前 Codex 会话推进，可先使用 Lovable 网页项目 Chat 手动粘贴下方首轮构建提示词；待 MCP 接通后再由工具化流程读取 diff、继续迭代。

## 原型内容拆解

原型版本：

- `pageId`: `merchant-h5-index`
- `version`: `v1.2`
- `lastUpdated`: `2026-06-11`

首页必须保留：

- 品牌区块：Logo、品牌简介、品牌图片轮播
- 门店：`中環旗艦店`
- 类型：`中式餐廳`
- 营业时间：`星期一至日 11:00 - 22:00`
- 电话：`+852 2888 1234`
- 地址：`香港中環皇后大道中 88 號 1 樓`
- 公告：`本店提供堂食及外賣服務，歡迎使用微官網提前預訂座位及查看最新菜單資訊！另外本週末將推出限定套餐，敬請期待！`
- 快捷入口：`電子菜單`、`訂座預約`
- 分享按钮：`分享微官網`
- 页脚：`Powered by Tappo`、`© 2026 Tappo. All rights reserved.`

品牌简介默认文案必须保留：

```text
One Burger 创立于香港中环，我们相信一个汉堡足以承载所有的美味与诚意。严选澳洲安格斯牛肉，每日新鲜手打现煎，搭配独家秘制酱料与手工烘焙面包。没有繁复的菜单，只有一个好汉堡该有的样子。来 One Burger，好好吃一个堡。
```

电子菜单必须保留：

- Tab：`活動菜單`、`系統菜單`
- 活动菜单空图占位：`菜單圖片預覽`、`此為商家上傳的靜態菜單圖片`
- 系统菜单分类：`熱門`、`主食`、`飲品`、`小食`、`甜品`、`套餐`
- 菜品：
  - `鮮蝦雲吞麵` / `HK$78` / `招牌鮮蝦雲吞配彈牙竹昇麵`
  - `冰鎮奶茶` / `HK$32` / `港式經典，香濃順滑`
  - `楊枝甘露` / `HK$45` / `鮮芒果、西柚、椰奶完美融合`
  - `乾炒牛河` / `HK$88`
  - `星洲炒米` / `HK$78`
  - `凍檸茶` / `HK$28`
  - `熱咖啡` / `HK$35`

订座预约必须保留：

- 供应商路由：`Tappo Booking` 显示原生表单；`Minitable Booking` 显示第三方跳转 / 内嵌提示
- 必填项：`暱稱`、`郵箱`、`手機`、`預約日期`、`預約時段`、`人數`
- 选填项：`備註資訊`
- 时段：`午餐 11:00-14:00`、`晚餐 17:30-21:00`
- 人数：`1人`、`2人`、`3人`、`4人`、`6人`、`8人`、`10人`
- 门店设施标签：`寵物友好`、`免費WiFi`、`停車場`、`電子支付`
- 成功弹窗：绿色对勾、`預約成功！`、预约详情、关闭后清空表单并回首页

分享面板必须保留：

- `WhatsApp`
- `Facebook`
- `Instagram`
- `Twitter`
- `Line`
- `複製連結`
- 分享标题格式：`【%餐廳名稱%】快来试试这家餐厅吧！`

## 视觉与交互要求

页面类型：

- 这是外部顾客访问的微官网，不是 App 内部运营工作台。
- 需要比原型更像真实可上线的餐饮品牌 H5：轻盈、干净、可信赖，有 Tappo Pulse 的智能产品气质，但不能变成后台管理页。

品牌与字体：

- 对外命名使用 `Tappo Pulse`。
- 字体规范参考 Tappo Pulse：优先 `OPPO Sans 4.0`；若不可用，回退 `OPPO Sans`、`PingFang SC`、`PingFang TC`、系统无衬线。
- 字距为 `0`。
- 正文和表单文字尽量不低于 `14px`，辅助标签可用 `12px`。

颜色可配置：

- 必须做成主题变量，不要把颜色散落在组件里。
- 主色：默认 Tappo orange，可配置。
- 主色透明度：提供 `--tappo-primary-alpha-*` 或等价 token，用于浅底、边框、光晕、选中态。
- 辅助色：使用深色体系，可配置。
- 辅助色透明度：提供 `--tappo-dark-alpha-*` 或等价 token，用于文字、遮罩、阴影、分割线。
- 蓝 / 青 / 薄荷 / 粉色只能作为智能氛围或图片背景的次级点缀，不能抢主色。

建议默认 token：

```css
:root {
  --tappo-primary: #ff6b35;
  --tappo-primary-rgb: 255 107 53;
  --tappo-dark: #1a1a2e;
  --tappo-dark-rgb: 26 26 46;
  --tappo-primary-alpha-08: rgba(255, 107, 53, 0.08);
  --tappo-primary-alpha-14: rgba(255, 107, 53, 0.14);
  --tappo-primary-alpha-22: rgba(255, 107, 53, 0.22);
  --tappo-dark-alpha-06: rgba(26, 26, 46, 0.06);
  --tappo-dark-alpha-12: rgba(26, 26, 46, 0.12);
  --tappo-dark-alpha-68: rgba(26, 26, 46, 0.68);
}
```

图片与资产：

- 首屏品牌图片、电子菜单占位图、订座提示图、空状态图可以用 Lovable 内置 `Image-2` 生成。
- 生成图片不得出现假 logo、错误文字、水印、夸张人物、赛博 AI 风。
- 如果图片中需要品牌标识，使用页面已有真实 Logo 或纯图形表达，不生成文字 logo。
- 风格：2025-2026 清透软渐变、轻量、柔和、餐饮场景明确、橙色主导。

## Lovable 首轮构建提示词

```text
请在当前 Lovable 项目中重做 TAPPO / Tappo Pulse 的餐饮商家微官网 H5，参考原型：https://tappophone.netlify.app/merchant-h5/

目标是做一个真实可上线的移动端微官网，不是后台管理页。请保留原型所有业务内容，但把视觉提升为 Tappo Pulse 风格：轻量、干净、可信赖、餐饮品牌感、清透软渐变、橙色主导，并支持主题色配置。

一、必须保留的页面和功能

1. 首页
- 品牌区块：Logo、品牌简介、品牌图片轮播。
- 门店名称：中環旗艦店。
- 门店类型：中式餐廳。
- 营业时间：星期一至日 11:00 - 22:00。
- 电话：+852 2888 1234。
- 地址：香港中環皇后大道中 88 號 1 樓。
- 公告：本店提供堂食及外賣服務，歡迎使用微官網提前預訂座位及查看最新菜單資訊！另外本週末將推出限定套餐，敬請期待！
- 快捷入口：電子菜單、訂座預約。
- 分享按钮：分享微官網。
- 页脚：Powered by Tappo / © 2026 Tappo. All rights reserved.

2. 品牌简介
- 默认文案必须保留：
One Burger 创立于香港中环，我们相信一个汉堡足以承载所有的美味与诚意。严选澳洲安格斯牛肉，每日新鲜手打现煎，搭配独家秘制酱料与手工烘焙面包。没有繁复的菜单，只有一个好汉堡该有的样子。来 One Burger，好好吃一个堡。
- 首页最多显示 3 行，超出后显示“查看”，点击弹窗展示完整内容。

3. 电子菜单页
- 顶部有返回首页。
- Tab：活動菜單、系統菜單。
- 活动菜单：展示菜單圖片預覽，占位说明“此為商家上傳的靜態菜單圖片”。
- 系统菜单分类：熱門、主食、飲品、小食、甜品、套餐。
- 菜品数据：
  - 鮮蝦雲吞麵 / HK$78 / 招牌鮮蝦雲吞配彈牙竹昇麵
  - 冰鎮奶茶 / HK$32 / 港式經典，香濃順滑
  - 楊枝甘露 / HK$45 / 鮮芒果、西柚、椰奶完美融合
  - 乾炒牛河 / HK$88
  - 星洲炒米 / HK$78
  - 凍檸茶 / HK$28
  - 熱咖啡 / HK$35
- 空分类显示“暫無菜品”。

4. 订座预约页
- 顶部有返回首页。
- 供应商模式：
  - Tappo Booking：显示原生预约表单。
  - Minitable Booking：隐藏原生表单，显示“前往 Minitable Booking”的第三方跳转 / 内嵌提示。
- 表单字段：
  - 暱稱，必填，placeholder：請輸入暱稱
  - 郵箱，必填，校验格式，placeholder：example@email.com
  - 手機，必填，placeholder：+852 XXXX XXXX
  - 預約日期，必填
  - 預約時段，必填，选项：午餐 11:00-14:00、晚餐 17:30-21:00
  - 人數，必填，选项：1人、2人、3人、4人、6人、8人、10人
  - 備註資訊，选填，placeholder：如有特殊需求請備註（選填）
- 门店信息卡：营业时间和设施标签：寵物友好、免費WiFi、停車場、電子支付。
- 校验失败时输入框红边并显示原型中的错误提示。
- 成功弹窗：绿色对勾、預約成功！、展示日期/时段/人数，关闭后清空表单并返回首页。
- 已填写表单时返回首页，需要提示“確定要離開嗎？已填寫的資訊將不會保存。”

5. 分享面板
- 点击“分享微官網”后从底部弹出分享面板。
- 渠道：WhatsApp、Facebook、Instagram、Twitter、Line、複製連結。
- 分享标题格式：【%餐廳名稱%】快来试试这家餐厅吧！
- 点击复制链接提示“已複製微官網鏈接”。
- 点击遮罩或取消关闭面板。

二、视觉要求

- 页面宽度按移动端 H5 优先，适配 375px、390px、430px。
- 首页第一屏必须明确看到品牌、门店、核心入口，不能做成普通 landing page。
- 使用 Tappo Pulse 字体规范：优先 OPPO Sans 4.0；fallback 为 OPPO Sans、PingFang SC、PingFang TC、system-ui、sans-serif。
- 字距 0，正文和表单文字尽量不低于 14px。
- 不要使用 emoji 作为正式图标，请改成统一线性或柔和填充图标。
- 不要使用嵌套卡片，卡片圆角控制在 8-16px，层级清爽。
- 整体色彩：橙色主导，深色辅助，浅灰/暖白背景，少量冰蓝/薄荷/粉色只作为图片和智能氛围点缀。

三、主题色可配置要求

请建立主题 token，并让页面主要视觉都引用 token，不要硬编码散落：

- 主色：--tappo-primary，默认 #ff6b35
- 主色 RGB：--tappo-primary-rgb，默认 255 107 53
- 主色透明度：例如 --tappo-primary-alpha-08 / 14 / 22
- 辅助深色：--tappo-dark，默认 #1a1a2e
- 辅助深色 RGB：--tappo-dark-rgb，默认 26 26 46
- 辅助深色透明度：例如 --tappo-dark-alpha-06 / 12 / 68

需要提供一个易维护的位置统一改色，例如 src/theme/tappoTheme.ts 或全局 CSS variables。

四、图片生成要求

请使用 Lovable 内置 Image-2 生成所需图片素材：

- 品牌图片轮播 3 张：真实餐厅 / 汉堡 / 港式餐饮氛围，清透软渐变，橙色主导，不要文字，不要水印，不要假 logo。
- 活动菜单占位图 1 张：餐牌/菜单摄影构图，适合 H5 卡片展示，不要生成可读文字。
- 订座提示或空状态小图 1 张：轻量餐桌预订场景，橙色智能光感，低细节，不要人物脸部。

所有生成图片需要放到项目 assets 中，并在页面中真实引用。图片需要有 alt 文案。

五、技术与交互要求

- 优先使用 React + Vite + Tailwind 或项目当前技术栈。
- 使用组件化结构：Home、Menu、Booking、ShareSheet、BrandHero、ThemeProvider 等。
- 不接真实后端，使用本地 mock 数据，但保留数据源注释：MOS 后台品牌配置、微官网电子菜单配置、订座管理配置。
- 表单提交用本地状态模拟。
- 所有按钮、Tab、返回、弹窗、分享面板必须可交互。
- 移动端不可横向溢出，底部按钮安全区要处理。

六、验收标准

- 375px、390px、430px 宽度下无文字重叠、无横向滚动。
- 首页、电子菜单、订座预约、分享面板全部可操作。
- 原型业务内容未删减。
- 颜色修改只需改主题 token。
- 图片素材真实出现在页面中，风格统一，没有假字、假 logo、水印。
- 整体视觉比原型更精致，符合 Tappo Pulse：橙色主导、清透、轻量、可信赖。
```

## 后续执行路线

### 官方可配置方式

Lovable 官方文档当前支持以下客户端接入 Lovable MCP：

- ChatGPT：添加 MCP Server URL `https://mcp.lovable.dev`，再按页面提示完成 Lovable OAuth。
- Claude / Claude Desktop：在 Connector 中搜索并连接 Lovable。
- Claude Code：安装官方 Lovable 插件后重启，首次使用工具时浏览器授权。
- Cursor：在 MCP 配置中添加 `https://mcp.lovable.dev`，并使用官方给出的 `CLIENT_ID`。
- VS Code：在 MCP settings 中添加 Lovable server URL，再按浏览器 OAuth 授权。

当前 Codex 的状态不是“Lovable 不支持 MCP”，而是：

- Lovable 支持 MCP。
- Codex 支持添加 streamable HTTP MCP。
- 但 Lovable OAuth 当前没有把 Codex CLI 列为可完成授权的客户端。

### 为什么不建议继续硬接 Codex

已验证：

- `codex mcp add lovable --url https://mcp.lovable.dev` 会写入配置，但动态注册被 Lovable 拒绝。
- 使用 Cursor 的 `CLIENT_ID` 可以生成 Lovable 授权 URL，但 Lovable 页面返回 `Authorization failed - Lovable`。
- 固定 `mcp_oauth_callback_port` 对动态注册失败无效，因为失败发生在回调前。

理论上还存在 `client_id_metadata_document` 路线：提供一个公开 HTTPS 客户端元数据文档，并让 Codex 使用该 URL 作为 OAuth `client_id`。但这需要满足精确回调地址、公开托管元数据、Lovable 接受该客户端元数据等条件。当前 Codex 还会给 `mcp_oauth_callback_url` 追加随机 callback id，容易导致严格 OAuth redirect URI 不匹配。因此这条路线不适合作为本任务的稳定执行路径。

推荐路线 A：受支持客户端连接 MCP

1. 在 ChatGPT / Claude Code / Cursor / VS Code 中连接 `https://mcp.lovable.dev`。
2. 完成 Lovable OAuth。
3. 对项目 `8faa4bde-6332-499d-8c7c-32989d04759f` 调用 `get_project` 确认项目。
4. 使用 `send_message` 发送上方构建提示词。
5. 使用 `get_diff` / `list_files` / `read_file` 复查改动。
6. 预览通过后再决定是否 `deploy_project`。

推荐路线 B：Lovable 网页项目 Chat

1. 打开 `https://lovable.dev/projects/8faa4bde-6332-499d-8c7c-32989d04759f`。
2. 将“Lovable 首轮构建提示词”粘贴到项目 Chat。
3. 等待 Lovable 生成预览。
4. 把预览链接或截图回传到本项目，再进行第二轮视觉与交互校正。

## 当前阻塞

- 当前 Codex CLI 不能完成 Lovable OAuth，因此本会话没有可调用的 `lovable` MCP 工具。
- 本前置说明生成时尚未向 Lovable 项目发送构建消息，未消耗项目 credits。
- 后续已改用 Lovable 网页项目 Chat 发送首轮构建 brief，并生成 TAPPO / Tappo Pulse 微官网预览；实际执行记录见 `tappo-microsite-lovable-web-submit-2026-07-06.md`。
- 由于仍未接通 Codex -> Lovable MCP，当前没有可读取的 Lovable diff / source 级复核结果。
