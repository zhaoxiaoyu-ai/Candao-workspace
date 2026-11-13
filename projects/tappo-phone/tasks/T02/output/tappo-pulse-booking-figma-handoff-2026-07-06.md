# TAPPO pulse 订座功能补充交接说明

日期：2026-07-06  
任务：在 TAPPO pulse Figma 文件中补上订座功能页面  
目标文件：`https://www.figma.com/design/nHamLH3qlZYFXVC0OVxNqc/tappo-pulse?node-id=0-1&t=mzMfHooTtBeq2Y5t-1`

## 当前结果

- 已核对原型：`https://tappophone.netlify.app/phone/staff_app_center_new.html`
- 已抽取订座入口、列表、创建预约、Provider 路由、状态操作、服务暂停、日期日历、拒绝/取消确认等关键交互。
- 已保存 8 张原型状态截图，评审入口：`tappo-pulse-booking-prototype-review-2026-07-06.html`
- 用户补充确认：Tappo APP 中已有的订座交互可以沿用，包括订座列表；视觉必须按 TAPPO PULSE 设计规范。
- 已生成 TAPPO PULSE 风格的 10 画板视觉评审稿：`tappo-pulse-booking-pulse-style-review-2026-07-06.html`
- 已生成视觉总览截图：`tappo-pulse-booking-pulse-style-overview-2026-07-06.png`
- Figma 连接当前返回 `UNAUTHORIZED / Reauthentication required`，本轮未能直接写入目标 Figma 文件。

## 可视化评审入口

- HTML 评审页：`projects/tappo-phone/tasks/T02/output/tappo-pulse-booking-prototype-review-2026-07-06.html`
- TAPPO PULSE 风格评审页：`projects/tappo-phone/tasks/T02/output/tappo-pulse-booking-pulse-style-review-2026-07-06.html`
- TAPPO PULSE 风格总览图：`projects/tappo-phone/tasks/T02/output/tappo-pulse-booking-pulse-style-overview-2026-07-06.png`
- 截图目录：`projects/tappo-phone/tasks/T02/output/tappo-pulse-booking-prototype-screens/`
- 关键状态图：
  - `01-booking-list-default.png`
  - `02-booking-list-service-paused.png`
  - `03-reject-booking-modal.png`
  - `04-cancel-booking-modal.png`
  - `05-add-booking-modal.png`
  - `06-booking-date-calendar.png`
  - `07-new-booking-page-tappo-provider.png`
  - `08-new-booking-page-minitable-provider.png`

## 原型内容与交互拆解

入口规则：

- 员工端应用中心展示 `智能收银` 固定入口。
- `订座` 入口仅在 MOS 后台应用服务中心已开通订座管理时展示。
- 点击 `订座` 进入 `staff_booking_list.html`。
- 未开通时隐藏入口；若入口被触发，提示 `订座应用尚未开通`。

列表页：

- 顶部标题：`订座`
- 工具区：`订座服务` 开关、`+ 新增预约`。
- 服务关闭：显示 `订座服务已暂停`，禁用新增与预约操作，但保留列表展示。
- 筛选：日期选择、搜索 `昵称/手机号/邮箱`。
- 状态 Tab：`全部 / 待确认 / 已确认 / 已到店 / 已取消 / 已爽约`，每项显示数量。
- 空态：`暂无预约记录`。

预约卡片字段：

- 客户信息：昵称、邮箱、手机遮罩、`[查看]` 完整手机号动作。
- 预约详情：日期、时段、人数段、订单渠道、备注。
- 状态：`pending / confirmed / arrived / cancelled / noshow`，对应文案为 `待确认 / 已确认 / 已到店 / 已取消 / 已爽约`。

操作规则：

- 待确认：`接受 / 拒绝 / 取消预约`。
- 已确认：`标记到店 / 标记爽约 / 取消预约`。
- 已到店、已取消、已爽约：不显示取消按钮。
- 接受后状态改为已确认，Toast：`已接受预约`。
- 标记到店后 Toast：`已标记到店`。
- 标记爽约后 Toast：`已标记爽约`。
- 取消后状态改为已取消，Toast：`已取消预约（取消通知邮件已发送）`。

拒绝预约：

- 弹窗标题：`拒绝预约`
- 原因：`时段已满 / 不符合订金要求 / 其他`
- 未选原因确认时 Toast：`请选择拒绝原因`
- 确认后状态改为已取消，Toast：`已拒绝预约`

取消预约：

- 弹窗标题：`取消预约`
- 主文案：`确定取消此预约？`
- 辅助文案：`取消后将发送取消通知邮件给顾客。`
- 按钮：`取消 / 确认取消`

新增预约弹窗：

- 标题：`新增预约`
- 字段：昵称、邮箱、手机、预约日期、预约时段、人数、备注。
- 日期说明：日历中标示不营业、已约满与剩余 5 个名额日期。
- 按钮：`取消 / 确认预约`
- 创建成功 Toast：`新增预约已建立`

日期日历：

- 标题：`选择预约日期`
- 月份切换：上一月 / 下一月。
- 日期状态：`不营业 / 已约满 / 余 5 位 / 可约 / 选中`
- 不营业与已约满不可选。
- 脚注：`灰色日期不可选；橙色日期代表当日订座库存仅剩 5 个；红色日期代表已约满。`

Provider 路由：

- 当前 Provider = `Tappo Booking`：展示原生新增预约表单。
- 当前 Provider = `Minitable Booking`：隐藏原生表单，展示跳转或内嵌提示卡。
- 未启用 Provider：提示需要先在 MOS `应用服务中心 -> 应用开通` 启用订座供应商。
- 第三方完成预约后，订单回传到 Tappo 列表。

独立新增预约页：

- 用于保留原型中的独立 `staff_booking_new.html` 分支。
- 表单字段：昵称、邮箱、手机、预约日期、预约时段、人数、备注。
- 校验：昵称必填；邮箱/手机二选一必填；邮箱格式错误需提示；日期、时段、人数必填。
- 提交：按钮默认禁用，必填项完整后启用；点击后 loading，成功提示 `预约已确认 / 预约通知已发送`，随后返回列表。

## 建议写入 TAPPO pulse 的 Figma 画板组

建议在目标文件新增一个分组或 Section：

`TAPPO pulse / Reservation / 2026-07-06`

建议画板：

1. `订座-列表-全部`
2. `订座-列表-服务暂停`
3. `订座-列表-空状态`
4. `订座-新增预约-弹窗`
5. `订座-选择预约日期-弹窗`
6. `订座-拒绝预约-弹窗`
7. `订座-取消预约-弹窗`
8. `订座-新增预约-Tappo Provider`
9. `订座-新增预约-Minitable Provider`
10. `订座-新增预约-未启用 Provider`

## 视觉落地规则

- 参考用户确认的 TAPPO POS 订座稿：列表信息层级、弹窗结构、日历状态、红色破坏性确认、橙色主操作。
- 遵循 TAPPO pulse / App 规范：390px 设计宽度、`OPPO Sans 4.0` 优先、16px 卡片圆角、16px 页面边距、白卡 + 浅灰背景、橙色主 CTA。
- 原型中的 emoji 图标应替换为 TAPPO pulse 线性图标或统一软图标，不直接保留 emoji。
- 订座属于中等辅助/操作型页面，不使用大面积 AI hero 或吉祥物；视觉重点放在服务状态、预约信息和可操作按钮。
- 破坏性操作使用红色系，确认/接受使用绿色或品牌橙，系统信息使用蓝色为辅助。
- 预约卡片应可快速扫描：客户信息与预约详情分区，状态 chip 固定在底部左侧，操作按钮固定在底部右侧或单独操作行。

## Figma 恢复后执行顺序

1. 重新认证 Figma 连接。
2. 读取目标文件页面结构和 TAPPO pulse 已有组件/字体/变量。
3. 找到已确认的 TAPPO pulse App 页面作为视觉样式参照。
4. 新建 `Reservation` 画板组，先创建 10 个 390px 手机画板骨架。
5. 按原型截图补齐列表、弹窗、日历和 Provider 分支。
6. 对照 POS 订座确认稿调整弹窗按钮、日历状态色、确认/取消语气。
7. 截图复查：文字不截断、按钮不重叠、状态色语义一致、所有原型字段未缺失。

## 通过标准

- Figma 文件中能看到完整订座页面组。
- 原型中的入口、列表、筛选、服务暂停、Provider 路由、新增预约、日历、拒绝、取消、状态操作均有对应画板或状态说明。
- 与 TAPPO POS 订座确认稿保持同一业务语义和弹窗结构，但视觉上符合 TAPPO pulse 手机端规范。
- 所有用户可见文案使用繁体原型文案，不因重绘删除核心内容。
- 后续 AI 或设计师可仅凭本说明和截图继续写入 Figma。

## 阻塞

Figma app connector 当前需要重新认证：

```text
UNAUTHORIZED
Reauthentication required
www_authenticate_reauth
```

本轮无法完成“最终存放到 TAPPO pulse Figma 文件”的写入动作。授权恢复后可继续执行，无需重新拆解原型。
