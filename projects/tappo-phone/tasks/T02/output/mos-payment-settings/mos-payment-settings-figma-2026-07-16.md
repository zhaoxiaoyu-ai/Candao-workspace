# TAPPO MOS 支付设置 Figma 设计记录

## 评审入口

- Figma 文件：`nHamLH3qlZYFXVC0OVxNqc`
- Section：`1590:3551`
- Figma 链接：<https://www.figma.com/design/nHamLH3qlZYFXVC0OVxNqc/tappo-pulse?node-id=1590-3551>
- 原型参考：<https://tappophone.netlify.app/admin-web/payment-settings.html>

## 评审对象

- `1590:3552`：`MOS / 支付設置 / 全量配置`
- `1590:3757`：`MOS / 支付設置 / 掃碼點餐未開啟`
- `1590:3827`：`MOS / 彈窗 / 新增支付方式`
- `1590:3879`：`MOS / 彈窗 / 硬件與支付服務`
- `1590:3923`：`MOS / 彈窗 / 刪除受限確認`
- `1590:3936`：`MOS / SVG / 其他支付方式圖標方案`
- `1590:3982`：`Design token and component audit`

## 变更范围

- 仅设计 MOS 右侧配置内容：新增 `設置 > 業務規則 > 支付設置` 页面内容区。
- 顶部栏、侧边栏和整体 MOS 外框沿用现有 MOS 信息架构，不参考原型样式直接绘制。
- 原 `業務場景` 中的支付方式配置迁入新的 `支付設置` 板块，并包含支付服务、线上/线下支付、支付通道、收银支付方式和相关弹窗。
- 新增 `其他支付方式` 板块：支持新增、编辑、停用/启用、拖拽排序、删除受限说明和已有订单占用提示。
- 新增 `其他支付方式 Icon / SVG 方案`：默认建议使用通用支付图标；常用支付 logo 仅作为可选 SVG 资源位，避免前端误解为已完成第三方真实支付对接。

## 组件与 Token 使用

- 已优先检索并引用 MOS 组件库 `25.1213_MOS_v2` 与 `candao token`。
- 本轮画板共检测到 37 个组件实例：
  - `Button` x 19
  - `Switch` x 4
  - `InputCheckbox` x 7
  - `Tag` x 4
  - `Input` x 3
- 最终审计检测到 841 个 token 绑定引用，覆盖 28 个唯一变量引用。
- 使用到的关键 token 包括：`colorPrimary`、`colorPrimaryBg`、`colorPrimaryBorder`、`colorBgLayout`、`colorBgContainer`、`colorBgMask`、`colorText`、`colorTextSecondary`、`colorTextTertiary`、`colorTextDisabled`、`colorBorder`、`radiusBase`、`radiusLG`、`padding16`、`padding24`、`controlHeight40`。
- 未在 `projects/tappo-phone/source` 中发现 Code Connect 映射文件，因此按 Figma 文件内现有 MOS 组件库与变量系统执行。

## 需求映射

- 支付设置迁移：主画板已将支付方式配置归入新 `支付設置` 内容区，并保留 `開通支付服務`、线上支付、线下支付和收银支付方式配置。
- 业务依赖状态：补充 `掃碼點餐未開啟` 状态，线上支付置灰，并提示需先到业务场景开启顾客扫码点餐。
- 其他支付方式：新增独立列表、说明、状态、备注、排序把手和操作入口；新增支付方式弹窗包含支付方式名称、英文名称、图标样式与备注。
- 弹窗覆盖：补充新增支付方式、硬件与支付服务、操作确认/删除受限三类弹窗。
- SVG 图标：补充通用支付、WeChat Pay、Alipay、Octopus、PayMe 的 SVG 方案；默认推荐通用图标。
- 前端边界：画板已写明其他支付方式仅用于前端选择与查看说明，不与微信、支付宝等通道进行实际支付对接。

## 本地截图

- 总览截图：`tasks/T02/output/mos-payment-settings/mos-payment-settings-section-2026-07-16.png`
- 主页面截图：`tasks/T02/output/mos-payment-settings/mos-payment-settings-main-2026-07-16.png`
- 新增支付方式弹窗：`tasks/T02/output/mos-payment-settings/mos-payment-modal-method-2026-07-16.png`
- 硬件与支付服务弹窗：`tasks/T02/output/mos-payment-settings/mos-payment-modal-service-2026-07-16.png`
- 操作确认弹窗：`tasks/T02/output/mos-payment-settings/mos-payment-modal-confirm-2026-07-16.png`
- SVG 图标方案：`tasks/T02/output/mos-payment-settings/mos-payment-icons-2026-07-16.png`

## QA 结果

- 关键文案缺失：0。
- 表格行完整：`微信支付`、`支付寶`、`八達通`、`PayMe`。
- 主表格裁切已修正。
- `新增支付方式` 弹窗裁切已修正：图标样式说明与校验提示均在容器内完整显示。
- Figma 官方 MCP 当前仍无法加载 `OPPO Sans 4.0`；本轮新增文本使用 `Noto Sans HK` 作为可编辑回退字体。

## 通过标准

- 人工评审时优先打开 Section `1590:3551`。
- 检查内容是否符合需求范围：支付设置迁移、其他支付方式配置、SVG 图标方案、前端-only 说明。
- 检查组件是否仍为 MOS 组件实例，颜色/圆角/间距是否绑定设计 token。
- 若确认方向通过，下一步可根据评审意见在同一 Section 内做字段文案、排序规则或业务说明微调。
