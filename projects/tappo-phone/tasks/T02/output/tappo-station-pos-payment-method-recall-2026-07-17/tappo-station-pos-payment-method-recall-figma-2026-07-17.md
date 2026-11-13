# Tappo Station 支付方式回显 Figma 记录

## 评审入口

- Figma 文件：`Tappo Station / anMsqgZYi8ZqmJXZah78KI / UI`
- 主支付画面：`點餐-堂食/付款`，节点 `121:21195`
- 提示态画面：`點餐-堂食/付款/提示`，节点 `121:22298`
- 主画面链接：https://www.figma.com/design/anMsqgZYi8ZqmJXZah78KI?node-id=121-21195
- 提示态链接：https://www.figma.com/design/anMsqgZYi8ZqmJXZah78KI?node-id=121-22298
- 本地评审页：`review.html`

## 本轮纠正

- 用户纠正此前落错项目：原先误改到 `nHamLH3qlZYFXVC0OVxNqc / 522:2427`，本轮已撤回那里的新增节点，并恢复我移动过的标题和列表位置。
- 正确目标改为 Tappo Station Pad/POS 文件 `anMsqgZYi8ZqmJXZah78KI`。
- 本轮只新增 Station 支付方式栏下半段内容，不移动原有支付方式、数字键盘、订单栏或底部收款按钮。

## Figma 变更

- 保留既有配置支付方式：
  - `Cash`
  - `Kpay`
  - `Stripe`
  - `Adyen`
  - `Bbmsl`
  - `QFpay`
  - `mPay`
- 在既有 `mPay` 下方新增分隔与说明：
  - 标题：`其他支付方式`
  - 说明文案已收纳到标题旁的说明图标中，不在画面上完整展开：`由後台配置，用於記錄收款方式；實際收款請於對應渠道完成。`
- 新增回显方式：
  - `WeChat Pay`
  - `Alipay`
  - `Octopus`
  - `PayMe`
- 同步更新 `點餐-堂食/付款` 与 `點餐-堂食/付款/提示` 两个状态，避免同一支付流程画面不一致。

## 组件、结构与素材

- 先检查了目标文件已接入 `Tappo Station` 组件库，并搜索了支付/列表/行相关组件。
- 该支付栏现有支付方式不是组件实例，而是文件内已有的复合支付行结构；为避免硬套不匹配组件，本轮复用既有支付行结构作为新增行基底。
- 追加反馈修正后，标题旁复用目标文件现有 `Container/icon/提示` 组件实例承载说明，不再显示完整说明段落。
- `WeChat Pay` 与 `Alipay` 使用 icon-only SVG 节点，不使用 PNG 占位，也不显示文字版 wordmark。
- `Octopus` 与 `PayMe` 使用此前 MOS 任务整理过的真实品牌图片资产；当前未找到可直接使用的官方 SVG，因此 Figma 中使用完整 PNG 图形资产，不再使用截图裁切片段，也不显示文字版 wordmark。

## Octopus / PayMe 素材核对

- `Octopus`：官方品牌包中当前可用素材为 `AI / JPG`，未提供 SVG；该 `AI` 在当前环境无法导出为可用 logo 矢量内容，因此没有作为 SVG 导入。
- `PayMe`：官方公开页面当前可获取的是 PNG header logo，未找到官方 SVG。
- 本轮已将两者分别整理为完整独立图标 PNG，并通过 Figma 正式 asset upload 写回节点：
  - Octopus：`logo complete icon asset / Octopus / 2026-07-17`，节点 `3897:68551`、`3897:68552`，图片 hash 前缀 `0fe963d790e3`
  - PayMe：`logo complete icon asset / PayMe / 2026-07-17`，节点 `3897:68553`、`3897:68554`，图片 hash 前缀 `cc58b0a4bf09`
- 已确认八达通图标不是截不全的局部截图，而是完整彩色图形；PayMe 为完整红色 `P` 图形。

## Design Tokens

新增节点使用目标文件本地 POS tokens：

- `POS color/primary`
- `POS color/color-text-65%`
- `POS color/color-text-8%`

复核结果：

- 两个画面各有 4 个新增支付方式行。
- 两个画面各有 5 个可见新增文字节点，文字颜色均绑定 POS 颜色变量；完整说明文案不作为可见文本展开。
- 两个画面各有 4 个新增行背景，背景均绑定 `POS color/primary`。
- 两个画面各有 1 个说明图标和 4 个 icon-only logo 容器。
- 最终复核：旧 `Octopus / PayMe` 裁切节点数为 0；两个画面均没有外露长说明文本；两个画面各 1 个说明 icon。

## 字体说明

目标文件既有文字使用 `OPPO Sans 4.0`，但当前 Figma MCP 环境无法加载该字体。为保持新增文字可编辑，本轮新增文字使用目标环境可用的 `Noto Sans HK` 回退字体。原有文字未改动。

## 关联截图

- 主支付画面变更前：`station-payment-before-0.5x.png`
- 主支付画面最终：`station-payment-after-final-svg-0.5x.png`
- 提示态最终：`station-payment-prompt-after-final-svg-0.5x.png`
- 主支付画面 icon-only / 说明图标最终：`station-payment-after-complete-icon-main-2026-07-17.png`
- 提示态 icon-only / 说明图标最终：`station-payment-after-complete-icon-prompt-2026-07-17.png`
- 主支付画面付款列表局部核对：`station-payment-after-complete-icon-main-crop-payment-list-2026-07-17.png`

## 下一步

- 用户在 Figma 节点 `121:21195` 与 `121:22298` 人工评审。
- 如后续 Figma 字体通道恢复，可将新增文字从 `Noto Sans HK` 替换回 `OPPO Sans 4.0`。
