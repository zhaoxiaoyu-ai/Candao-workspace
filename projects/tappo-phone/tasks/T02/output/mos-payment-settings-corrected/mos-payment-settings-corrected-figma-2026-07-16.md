# MOS 支付设置纠正交付记录

日期：2026-07-16

## 正确目标文件

- Figma 文件：`25.1213 MOS v2`
- File key：`1qe8d4ll9wLnxPAsiJAoa9`
- Page：`UI（確認稿） / 0:1`

## 已完成节点

- 支付设置主态：`2254:32924`
  - https://www.figma.com/design/1qe8d4ll9wLnxPAsiJAoa9/25.1213_MOS_v2?node-id=2254-32924
- 新增支付方式弹窗态：`2256:33130`
  - https://www.figma.com/design/1qe8d4ll9wLnxPAsiJAoa9/25.1213_MOS_v2?node-id=2256-33130
- 停用支付方式小提示态：`2256:33667`
  - https://www.figma.com/design/1qe8d4ll9wLnxPAsiJAoa9/25.1213_MOS_v2?node-id=2256-33667
- 硬件与支付服务复用页：`2256:34200`
  - https://www.figma.com/design/1qe8d4ll9wLnxPAsiJAoa9/25.1213_MOS_v2?node-id=2256-34200

## 纠正内容

- 原支付服务板块已从业务场景设置页移除：
  - `179:8831` 原业务场景设置页：支付文本/节点匹配数为 0
  - `1068:19333` 二维码预览业务场景设置页：支付文本/节点匹配数为 0
- 新支付设置主态直接搬移原支付服务块，不重新设计。
- `其他支付方式` 表格按 MOS 账号管理表格样式处理，包含表头、行高、分隔线、操作链接样式。
- 状态列使用 MOS `Switch` 组件实例。
- 新增支付方式弹窗复用现有 560px 表单弹窗样式，只替换标题、字段和规则文案。
- 操作确认复用现有 400x224 小提示弹窗样式，未使用大弹窗。
- 硬件与支付服务页直接复制既有源页面，未重新设计。
- 之前误放到 `nHamLH3qlZYFXVC0OVxNqc` 的 Section `1590:3551` 已标记为 `误放勿用 / TAPPO MOS Payment Settings / 2026-07-16`。

## 组件与 Token

- 已使用 MOS 组件库中的 `Switch`、`Button`、`Input` 相关实例。
- 表格文字、边框、背景等颜色绑定或沿用 MOS Design Tokens。
- 表格结构参考并复用 `終端管理/終端賬號權限/賬號管理` 的已有列表样式。
- 弹窗来自 MOS 现有业务弹窗节点，不另起新样式。

## 截图

- 主态：`payment-settings-main-2026-07-16.png`
- 新增弹窗：`payment-settings-add-modal-2026-07-16.png`
- 小提示弹窗：`payment-settings-confirm-modal-2026-07-16.png`
- 硬件与支付服务复用页：`payment-hardware-service-reused-2026-07-16.png`
- 参考源截图：`source-*.png`

## 验证

- 已截图检查主态、新增弹窗、小提示弹窗、硬件与支付服务复用页。
- 已通过 Figma 层级脚本检查原业务场景页和二维码预览页无支付板块残留。
- `get_design_context` 在一次非关键读取中因 Figma MCP HTTP transport 超时失败；后续写入、截图和层级验证均成功。
