# TAPPO Pulse 订座功能 Figma 写入记录

## 评审入口

- 目标 Figma 文件：`https://www.figma.com/design/nHamLH3qlZYFXVC0OVxNqc/tappo-pulse?node-id=1478-3296`
- 写入位置：`产品界面` 画布下的新 Section
- Section：`TAPPO pulse / Reservation / 2026-07-06`
- Section node：`1478:3296`

## 评审对象

本次在 TAPPO Pulse 目标文件中补充订座功能页面，参考：

- 原型：`https://tappophone.netlify.app/phone/staff_app_center_new.html`
- 用户提供的 TAPPO POS / TAPPO App 已确认订座截图
- TAPPO Pulse 目标文件内现有页面规范，重点参考节点：`552:3162`、`552:3163`、`899:3329`

已创建 10 个 `390x884` 手机画板：

| 画板 | Node |
| --- | --- |
| `訂座-列表-全部` | `1478:3297` |
| `訂座-列表-服務暫停` | `1478:3417` |
| `訂座-列表-空狀態` | `1478:3530` |
| `訂座-新增預約-彈窗` | `1478:3569` |
| `訂座-選擇預約日期-彈窗` | `1478:3732` |
| `訂座-拒絕預約-彈窗` | `1478:3903` |
| `訂座-取消預約-彈窗` | `1478:4033` |
| `訂座-新增預約-Tappo Provider` | `1478:4163` |
| `訂座-新增預約-Minitable Provider` | `1478:4236` |
| `訂座-新增預約-未啟用 Provider` | `1478:4313` |

## 变更范围

- 订座列表：全部、待确认、已确认、已取消状态入口与卡片表达。
- 服务暂停：恢复服务入口、暂停提示和弱化列表状态。
- 空状态：无订座记录时的引导。
- 新增订座：弹窗版与 Provider 独立页版。
- 日期选择：日历弹窗与可预约日期说明。
- 操作确认：拒绝预约、取消预约二次确认。
- 供应商状态：Tappo Provider、Minitable Provider、未启用 Provider。

## TAPPO Pulse 样式依据

本次未沿用早期本地 HTML 稿的视觉，而是重新读取目标 Figma 文件后按真实 TAPPO Pulse 规范落地：

- 画板尺寸：`390x884`
- 背景：`#FFFBF6`
- 主品牌橙：`#FF8A3D`
- 主按钮渐变：`#FF963D -> #FF8A3D`
- 字体：`OPPO Sans 4.0` 为主，必要位置使用文件已有回退字体
- 卡片：约 `358px` 宽、`12px` 圆角、白色半透明和暖色阴影
- 弹窗：约 `358px` 宽、`16px` 圆角、`40%` 黑色遮罩
- 底部固定操作区：沿用 Pulse 的移动端底部操作密度

## 已完成修正

- 将所有 10 个画板重新挂入 Section `1478:3296`，确保 Section 截图和 Figma 层级可见。
- 修正列表待确认卡片中人数信息与 `拒绝 / 确认` 按钮重叠的问题。
- 清理 Provider 画板内重复的状态栏、标题栏和 Home Indicator。
- 重新导出并抽查总览、列表、Provider 和未启用 Provider 截图。

## 可视化复查截图

- 总览：`tasks/T02/output/tappo-pulse-booking-figma-section-overview-2026-07-06.png`
- 列表抽查：`tasks/T02/output/tappo-pulse-booking-figma-list-2026-07-06.png`
- 新增订座弹窗：`tasks/T02/output/tappo-pulse-booking-figma-add-modal-2026-07-06.png`
- 日期弹窗：`tasks/T02/output/tappo-pulse-booking-figma-calendar-modal-2026-07-06.png`
- Tappo Provider：`tasks/T02/output/tappo-pulse-booking-figma-provider-2026-07-06.png`
- 未启用 Provider：`tasks/T02/output/tappo-pulse-booking-figma-provider-disabled-2026-07-06.png`

## 通过标准

- 订座完整主流程在 Figma 中可见：列表、筛选、新增、日期选择、拒绝、取消、Provider 分支均已覆盖。
- 页面视觉应与目标文件既有 TAPPO Pulse 移动端风格一致，而不是沿用 POS 桌面风格或早期本地 HTML 稿。
- 关键操作按钮、卡片信息、弹窗标题和底部操作区无明显遮挡或重叠。
- 后续人工评审如发现文案、状态数量或业务规则需调整，应直接在 Section `1478:3296` 下对应画板修改。

## 下一步动作

- 用户在目标 Figma 文件中人工评审 Section `TAPPO pulse / Reservation / 2026-07-06`。
- 若需要继续细化，优先处理：服务暂停卡片的信息层级、Provider 未启用状态的入口文案、预约列表字段是否与产品最终规则完全一致。
