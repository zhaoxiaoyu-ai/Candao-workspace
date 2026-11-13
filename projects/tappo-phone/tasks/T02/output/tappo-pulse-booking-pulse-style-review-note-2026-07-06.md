# TAPPO PULSE 订座功能补充视觉评审稿

日期：2026-07-06  
任务：继续完成 TAPPO PULSE 订座功能补充  
用户补充口径：Tappo APP 中已有的订座交互可以沿用，包括订座列表；视觉必须按 TAPPO PULSE 设计规范。

## 当前结果

- 已生成 TAPPO PULSE 风格的订座页面组评审稿。
- 已覆盖 10 个 390px 手机画板：
  1. `订座列表 - 全部`
  2. `订座列表 - 服务暂停`
  3. `订座列表 - 空状态`
  4. `新增预约 - 弹窗`
  5. `选择预约日期`
  6. `拒绝预约`
  7. `取消预约`
  8. `新增预约 - Tappo Provider`
  9. `新增预约 - Minitable Provider`
  10. `新增预约 - 未启用 Provider`
- 已用 Chrome 截取总览图，确认页面非空、画板完整、无明显重叠。

## 评审入口

- HTML 评审页：`projects/tappo-phone/tasks/T02/output/tappo-pulse-booking-pulse-style-review-2026-07-06.html`
- 总览截图：`projects/tappo-phone/tasks/T02/output/tappo-pulse-booking-pulse-style-overview-2026-07-06.png`
- 原型状态评审页：`projects/tappo-phone/tasks/T02/output/tappo-pulse-booking-prototype-review-2026-07-06.html`
- Figma 交接说明：`projects/tappo-phone/tasks/T02/output/tappo-pulse-booking-figma-handoff-2026-07-06.md`

## 变更范围

- 交互层：沿用 Tappo APP / Tappo Phone 原型中的订座入口、订座列表、服务开关、日期筛选、搜索、状态 Tab、预约卡片、接受/拒绝/取消、标记到店/爽约、新增预约、日期日历、Provider 路由和未启用提示。
- 视觉层：按 TAPPO PULSE 方向重绘，使用浅灰画布、白色卡片、16px 以上圆角、低阴影、橙色主 CTA、绿色确认、蓝色信息、红色破坏性操作、线性图标和更干净的手机端层级。
- 内容层：保留原型繁体文案，不删除客户信息、预约详情、渠道、备注、状态、通知和错误提示。

## 当前阻塞

目标 Figma 文件 `nHamLH3qlZYFXVC0OVxNqc` 的 app connector 仍返回：

```text
UNAUTHORIZED
Reauthentication required
www_authenticate_reauth
```

因此本轮仍无法直接把画板写入 TAPPO PULSE Figma 文件。当前产物已可作为 Figma 写入蓝本，授权恢复后可直接按 HTML 评审稿落图。

## 通过标准

- 10 个画板能完整表达订座主流程和异常状态。
- 订座列表交互与 Tappo APP 现有逻辑一致。
- 视觉不沿用旧原型或 POS 皮肤，而是符合 TAPPO PULSE 的轻量、干净、运营可信方向。
- 文字无明显截断，按钮和状态标签不重叠。
- Figma 授权恢复后可以直接转写进目标文件。

## 下一步

1. 用户在 Codex / Figma connector 中完成重新认证。
2. 重新读取目标 Figma 文件结构和已有 TAPPO PULSE 规范组件。
3. 将 `tappo-pulse-booking-pulse-style-review-2026-07-06.html` 对应的 10 个画板写入 `TAPPO pulse / Reservation / 2026-07-06`。
4. 写入后用 Figma 截图复核，并更新本任务状态文件。
