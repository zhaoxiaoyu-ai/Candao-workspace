# TAPPO Pulse 订座 Figma 第二轮修正记录

## 评审入口

- Figma 文件：`nHamLH3qlZYFXVC0OVxNqc / 0:1`
- Figma Section：`TAPPO pulse / Reservation / 2026-07-07 / Auto Layout`
- Section node：`1478:3296`
- 评审链接：`https://www.figma.com/design/nHamLH3qlZYFXVC0OVxNqc/tappo-pulse?node-id=1478-3296`

## 本轮用户反馈

- 订座列表内容呈现需要参考 TAPPO App。
- 选择预约日期缺少提示语和可选文字描述。
- 新增预约组件规范、字体颜色、间距有误。
- 预约时段不需要写午餐/晚餐。
- 人数需要按后台一致的区间，例如 `1～2人`。
- 拒绝原因选择组件需要复用单选样式。
- 不应出现 `订座-新增预约-Tappo Provider` 独立页面。

## 本轮修正

- 删除 3 个 Provider 独立页面：`Tappo Provider`、`Minitable Provider`、`未启用 Provider`。
- 当前保留 7 个主流程画面：列表、服务暂停、空态、新增预约弹窗、选择预约日期弹窗、拒绝预约弹窗、取消预约弹窗。
- 订座列表卡片改为更接近 TAPPO App 的紧凑内容呈现：头像/姓名/状态、日期时段、邮箱、手机查看、人数、渠道、备注和操作区。
- 时段统一改为后台值：`11:00-14:00`、`17:30-21:00`，不再写午餐/晚餐。
- 人数改为区间选项：`1～2人`、`3～4人`、`5～6人`、`7～8人`。
- 新增预约输入框改为完整 326px 内容宽，修正此前按文字内容收缩的问题。
- 新增预约 label、helper、输入框、选项按钮按 8/16px 间距重新整理。
- 日期选择弹窗新增提示卡：
  - `請選擇可預約日期`
  - `白色日期可選；灰色不可選；「餘5」代表剩餘 5 個名額；紅色代表已約滿。`
- 日期选择图例改为：`可選日期`、`餘5位`、`已約滿`、`不營業`。
- 拒绝原因改为标准 radio 单选行：外圈、内点、选中/未选状态。

## 当前画面清单

| 画面 | Node |
| --- | --- |
| 订座-列表-全部 / Auto Layout | `1500:3296` |
| 订座-列表-服务暂停 / Auto Layout | `1500:3435` |
| 订座-列表-空状态 / Auto Layout | `1500:3577` |
| 订座-新增预约-弹窗 / Auto Layout | `1500:3623` |
| 订座-选择预约日期-弹窗 / Auto Layout | `1500:3813` |
| 订座-拒绝预约-弹窗 / Auto Layout | `1500:4070` |
| 订座-取消预约-弹窗 / Auto Layout | `1500:4232` |

## 结构审计

- 屏幕数量：7
- 画板尺寸：`390x884`
- Auto Layout frame 数：530
- 总节点数：1090
- 8px 间距审计：0 个异常
- Provider 独立页面：0
- 关键文案缺失：0

## 截图证据

- 总览：`tasks/T02/output/tappo-pulse-booking-revision2-section-2026-07-07.png`
- 列表：`tasks/T02/output/tappo-pulse-booking-revision2-list-2026-07-07.png`
- 新增预约弹窗：`tasks/T02/output/tappo-pulse-booking-revision2-add-modal-final-2026-07-07.png`
- 日期选择弹窗：`tasks/T02/output/tappo-pulse-booking-revision2-date-picker-2026-07-07.png`
- 拒绝预约弹窗：`tasks/T02/output/tappo-pulse-booking-revision2-reject-modal-2026-07-07.png`

## 关于 Provider 页面

上一版出现 `订座-新增预约-Tappo Provider` 的原因：它来自原型中 `staff_booking_new.html` 的独立新增预约 Provider 分支，用于表达 `Tappo Booking / Minitable Booking / 未启用` 三种供应商状态。本轮按用户反馈判断，这类 Provider 独立页不应作为 TAPPO Pulse 订座补稿中的展示页面，因此已删除，只保留列表内新增预约弹窗流程。

## 未完成限制

字体仍受工具环境限制：官方 Figma MCP 当前无法加载 `OPPO Sans 4.0`，Figma Apps connector 仍未恢复授权；本轮继续使用可编辑回退字体 `Noto Sans TC`。结构、内容和视觉间距已完成本轮修正。
