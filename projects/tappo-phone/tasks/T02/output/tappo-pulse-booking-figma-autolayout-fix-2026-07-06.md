# TAPPO Pulse 订座 Figma Auto Layout 修正记录

## 评审入口

- Figma 文件：`nHamLH3qlZYFXVC0OVxNqc / 0:1`
- Figma Section：`TAPPO pulse / Reservation / 2026-07-06 / Auto Layout`
- Section node：`1478:3296`
- 评审链接：`https://www.figma.com/design/nHamLH3qlZYFXVC0OVxNqc/tappo-pulse?node-id=1478-3296`

## 本轮变更范围

按用户反馈重新检查并重建 TAPPO Pulse 订座画板：

- 将 10 个订座画面重建为嵌套 Auto Layout 结构。
- 间距按 8px 原则统一：页面边距 16px、区块间距 16px、组件内距 8/16px、表单和卡片内部 gap 8/16px；仅紧凑状态 Tab 内部保留 4px。
- 补齐原型内容：订座服务开关、新增预约按钮、邮箱、手机查看、备注、状态 Tab 数量、服务暂停状态、Tappo Provider、Minitable Provider、未启用 Provider、拒绝/取消弹窗、日期日历。
- 修正服务不可用状态：内容正常显示，仅新增预约和卡片操作按钮置灰不可用。
- 删除早期底部 home indicator 遮挡，修复列表卡片内容被遮挡问题。
- 修正新增预约弹窗和 Tappo Provider 页面字段宽度，字段统一铺满 326px 内容宽。
- 弹窗改为复用相似的 16px 圆角、白底、遮罩、底部按钮结构。

## 画面清单

| 画面 | Node |
| --- | --- |
| 订座-列表-全部 / Auto Layout | `1495:3296` |
| 订座-列表-服务暂停 / Auto Layout | `1495:3427` |
| 订座-列表-空状态 / Auto Layout | `1495:3561` |
| 订座-新增预约-弹窗 / Auto Layout | `1495:3608` |
| 订座-选择预约日期-弹窗 / Auto Layout | `1495:3790` |
| 订座-拒绝预约-弹窗 / Auto Layout | `1495:4036` |
| 订座-取消预约-弹窗 / Auto Layout | `1495:4189` |
| 订座-新增预约-Tappo Provider / Auto Layout | `1495:4334` |
| 订座-新增预约-Minitable Provider / Auto Layout | `1495:4399` |
| 订座-新增预约-未启用 Provider / Auto Layout | `1495:4425` |

## 结构审计

- 屏幕数量：10
- 根画板尺寸：`390x884`
- Auto Layout frame 数：527
- 总节点数：1144
- 8px 间距审计：0 个异常
- 关键文案缺失：0 项
- home indicator 遮挡：0 个
- 新增预约弹窗与 Tappo Provider 表单字段宽度：326px

## 截图证据

- 总览：`tasks/T02/output/tappo-pulse-booking-autolayout-section-fixed-2026-07-06.png`
- 列表：`tasks/T02/output/tappo-pulse-booking-autolayout-list-fixed-2026-07-06.png`
- 服务暂停：`tasks/T02/output/tappo-pulse-booking-autolayout-paused-2026-07-06.png`
- 新增预约弹窗：`tasks/T02/output/tappo-pulse-booking-autolayout-add-modal-fixed-2026-07-06.png`
- 日期选择弹窗：`tasks/T02/output/tappo-pulse-booking-autolayout-date-picker-2026-07-06.png`
- 拒绝预约弹窗：`tasks/T02/output/tappo-pulse-booking-autolayout-reject-modal-2026-07-06.png`
- 取消预约弹窗：`tasks/T02/output/tappo-pulse-booking-autolayout-cancel-modal-2026-07-06.png`
- Tappo Provider：`tasks/T02/output/tappo-pulse-booking-autolayout-tappo-provider-fixed-2026-07-06.png`
- Minitable Provider：`tasks/T02/output/tappo-pulse-booking-autolayout-minitable-provider-2026-07-06.png`

## 未完成限制

字体仍是当前唯一工具限制：官方 `mcp__figma.use_figma` 在本会话无法加载 `OPPO Sans 4.0`，报错为字体 family 不存在；Figma Apps connector 仍返回 `UNAUTHORIZED / Reauthentication required`，无法通过另一条通道写入。为保持画面可编辑，本轮暂用可加载的 `Noto Sans TC`。恢复 Apps connector 认证或让官方 MCP 能加载 OPPO Sans 4.0 后，需要再执行字体替换。

## 通过标准

- Figma Section 内直接可评审 10 个画面。
- 画面结构为 Auto Layout，可继续编辑维护。
- 原型关键内容和交互状态不缺失。
- TAPPO Pulse 色彩、卡片、弹窗和间距规则已按现有文件风格收敛。
- 除 OPPO Sans 4.0 工具写入限制外，本轮反馈项已完成修正。

## 下一步

在 Figma 内人工检查 Section `1478:3296`。如果用户确认字体通道恢复，下一步只做字体替换与微调，不需要重做内容结构。
