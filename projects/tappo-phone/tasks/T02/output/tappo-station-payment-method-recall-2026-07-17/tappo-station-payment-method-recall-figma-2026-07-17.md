# Tappo Station 支付方式回显 Figma 记录

> 2026-07-17 纠正：此记录对应的 `nHamLH3qlZYFXVC0OVxNqc / 522:2427` 后续被用户确认不是本次应操作的 Tappo Station 项目。该 Figma 节点中本轮新增内容已撤回，移动过的标题和列表位置已恢复。正确记录请查看 `../tappo-station-pos-payment-method-recall-2026-07-17/tappo-station-pos-payment-method-recall-figma-2026-07-17.md`。

## 评审入口

- Figma 文件：`Tappo Station / nHamLH3qlZYFXVC0OVxNqc / 产品界面`
- 目标画面：`確認訂單頁_支付方式`
- 目标节点：`522:2427`
- Figma 节点链接：https://www.figma.com/design/nHamLH3qlZYFXVC0OVxNqc?node-id=522-2427
- 本地评审页：`review.html`

## 需求范围

- 在 Station 支付方式选择弹层中回显 Tappo MOS 后台配置的其他支付方式。
- 其他支付方式与原有配置支付方式之间需要有明显间隔。
- 补充说明文案，说明该类方式来自后台配置，选择后作为订单支付记录，实际收款按对应渠道完成。
- 不删除原有内容，不改写原有 `Kpay掃碼 / Kpay卡機 / 現金支付` 文案与图标。

## Figma 变更

- 保留原有三项支付方式：
  - `Kpay掃碼`
  - `Kpay卡機 / 已配置`
  - `現金支付 / 現金支付請到Tappo Pad進行`
- 新增分组：
  - 标题：`其他支付方式`
  - 说明：`由後台配置，選擇後會記錄於訂單；實際收款請依對應渠道完成。`
- 新增回显方式：
  - `微信支付`
  - `支付寶`
  - `八達通`
  - `PayMe`
- 新增灰色间隔带，区分原有配置支付方式与其他支付方式。
- 仅调整支付方式弹层内部排布：标题容器 `522:2654` 上移，列表容器 `522:2602` 上移并调整高度；其余订单背景与底部确认按钮未改。

## 组件与素材复用

- 其他支付方式 logo 复用既有品牌节点，不重新手绘：
  - 微信支付：`1590:3647`
  - 支付寶：`1590:3675`
  - 八達通：`1590:3704`
  - PayMe：`1590:3733`
- 未选中状态复用原支付方式弹层中的 radio 节点来源：`522:2632`
- 新增行使用现有支付方式弹层的列表结构和右侧 radio 选择语义。

## Design Tokens

新增节点绑定本地 `POS` 变量：

- `POS color/white`
- `POS color/color-text-95%`
- `POS color/color-text-65%`
- `POS color/color-text-4%`
- `border-radius/border-radius-large`

复核结果：新增 2026-07-17 命名节点的实色填充均已绑定变量，未发现未绑定的新实色填充。

## 字体说明

设计规范字体为 `OPPO Sans 4.0`。本轮 Figma MCP 写入时无法加载该字体，报错为字体 family 不存在；此前项目状态中已记录该连接限制。为保证新增文字可编辑，本轮新增文字暂用 `Noto Sans HK Regular` 作为港繁安全回退字体。原有文本仍保持文件内既有字体设定。

## 复核结果

- 新增文案与四个其他支付方式均存在。
- 原有 `Kpay掃碼 / Kpay卡機 / 現金支付 / 現金支付請到Tappo Pad進行` 文案均保留。
- 新增行位于底部确认按钮上方，未遮挡 `確認` 按钮。
- 其他支付方式与原有方式之间已有独立间隔。
- 使用了既有品牌 logo 节点与本地 Design Tokens。

## 关联截图

- 原型订单页：`prototype-pad-before-pay-2026-07-17.png`
- 原型支付弹窗：`prototype-pad-payment-modal-2026-07-17.png`
- 首次 390px 原型视口截图：`prototype-initial-2026-07-17.png`

## 下一步

- 用户在 Figma 节点 `522:2427` 进行人工评审。
- 如需完全恢复 `OPPO Sans 4.0` 可编辑文字，需要在 Figma 连接侧补齐该字体后单独替换新增文本字体。
