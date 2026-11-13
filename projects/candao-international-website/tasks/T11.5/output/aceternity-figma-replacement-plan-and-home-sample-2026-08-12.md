# Aceternity Figma 替换规划与首页样例

日期：2026-08-12  
Figma 文件：`https://www.figma.com/design/BMXIuVRzSUUt9YNhVAQA6K`  
工作页：`03 Desktop Pages / Bilingual Validation`，Node `3:5`

## 本轮目标

本轮不是重写官网内容，也不是重新定义 IA。目标是在用户提供的 Figma 文件中，以“目标替换内容”为页面内容与信息顺序，以“设计参考”中的 Aceternity Blocks 为展示方法、布局节奏、元素风格和动效参考，先完成全站替换规划，并把 `首頁` 替换为一个可评审的 Desktop TC 测试样例。

## 已读取与采用的 Aceternity 方法

- `BackgroundBeams`：用于 Hero 背景里的低透明度数据流 / 光束线，表达多系统数据汇聚，不作为无业务含义的装饰粒子。
- `TextGenerateEffect`：用于 Hero H1 的进入动效；Figma 静态稿展示最终文本状态。
- `MovingBorder`：用于主 CTA 边缘高亮，强调预约动作；按钮圆角保持 8-10px。
- `ContainerScroll`：用于产品流程展示；Figma 中做成静态 Storyboard，表达滚动后产品控制台放大与步骤推进。
- Aceternity Blocks 参考：`Hero Section With Images Grid and Navbar`、`Three Columns With Images`、`Symmetric Bento Grid`、`CTA With Masonry Images`、`Empty State Vertical Grid`、`Features Bento Grid With Skeletons`、`Simple Footer With Four Grids`、`Contact Form Grid With Details`、`Blog With Search`、`FAQs With Grid`、`Stats With Gradient`、`Logo Cloud Marquee`。

## 基础设计规范

- 主色：`#528dff`
- 中文字体：`Noto Sans TC`
- 英文字体：`Inter`
- 深色文字：`#16233D`，透明度 95% / 65% / 45%
- 页面展示语言：繁体中文为主；仅保留 `Candao`、`EN`、`SaaS`、`POS`、`CRM`、`API` 等品牌或技术词。
- 卡片圆角：默认 8px；避免卡片套卡片。
- 未确认客户 Logo、客户数字、认证、SLA 和集成状态不得写成公开事实。

## Figma 新增节点

| 类型 | 名称 | Node ID | 说明 |
| --- | --- | --- | --- |
| 替换规划板 | `Aceternity Replacement Plan / 2026-08-12` | `111:2` | 全站页面级替换规划，放在当前工作页右侧 |
| 首页测试样例 | `首頁 / Aceternity Replacement Test / Desktop TC` | `111:59` | 已生成 Desktop TC 首页样例，保留原 `首頁` Frame 不改 |

截图备份：

- `tasks/T11.5/output/figma-aceternity-replacement-plan-2026-08-12.png`
- `tasks/T11.5/output/figma-aceternity-home-replacement-test-2026-08-12.png`

## 全站替换规划

| 页面 | 目标内容 | Aceternity 参考 | 替换方式 |
| --- | --- | --- | --- |
| 首頁 | Hero / 运营场景 / 平台摘要 / 产品流程 / 可信支撑 / CTA / Footer | Hero Images Grid、Feature Bento、ContainerScroll、CTA Masonry、Logo Cloud、Four Grid Footer | 用深色 Hero、产品 UI、场景 Bento 和流程 Storyboard 建立首页样例 |
| 解決方案 | 按业务问题与角色压力组织，而不是罗列功能 | Three Columns With Images、Symmetric Bento、CTA Masonry | 场景摄影 + 问题选择 + 推荐能力，沿用 v0.3 Solutions 场景化边界 |
| 平台 | Capability Map、产品能力、关键流程 | Features Bento Grid With Skeletons、UI Demo Panel、ContainerScroll | 节点连线 + 半真实 SaaS UI 状态，保持 Platform 是能力表达，不抢 Solutions 场景叙事 |
| 整合能力 | 外送、POS、CRM、物流、支付、API 等整合类别 | Logo Cloud Marquee、Bento Grid、Contact Form Grid | 分类搜寻 + 资料流预览；仅在授权时使用真实 Logo，否则用类别标签 |
| 客戶案例 | 匿名场景、成果摘要、案例筛选 | Blog With Search、Stats Gradient、Bento Cards | 以案例问题和结果结构呈现；不放未授权客户 Logo 或未确认数字 |
| 資源 | 支援、FAQ、媒體、案例資源、查詢 | Blog With Search、FAQ Grid、Contact Form Grid | 模组化内容中心，避免旧稿单一侧栏式资源页 |
| 關於 Candao | 公司定位、服务方式、里程碑、加入、联系 | CTA Masonry、Stats Gradient、Feature Bento | 公司叙事 + 时间线 + 服务卡，数字需确认后再上线 |
| 預約產品演示 | 需求分流与表单 | Contact Form Grid With Details、Empty State Vertical Grid | Intent cards + multi-step form + success state |

## 首页分区替换规划

| 首页分区 | 对应目标内容 | Aceternity 参考 | 样例处理 |
| --- | --- | --- | --- |
| TopNav / Hero | 首页定位、一级导航、预约 CTA | Hero Section With Images Grid and Navbar、BackgroundBeams、TextGenerateEffect、MovingBorder | 深色餐厅营运背景 + 数据流线 + 右侧订单流程 UI；H1 保持目标内容语义 |
| Business Scenario Band | 解决方案入口与场景选择 | Symmetric Bento Grid、Three Columns With Images | 横向场景标签 + 右侧推荐能力卡，避免功能堆叠 |
| Platform Overview | 平台连接多流程能力 | Features Bento Grid With Skeletons | 能力地图 + 深色门店管理状态面板，突出系统连接关系 |
| Product Showcase Workflow | 从订单到行动的流程 | ContainerScroll Static Storyboard | 暗色 Storyboard + 5 步工作流，展示“订单、分流、履约、门店协同、数据回馈” |
| Trust Preview | 跨渠道、跨门店、跨市场支撑 | Logo Cloud Marquee fallback | 用分类标签替代未确认 Logo，配合可信能力卡 |
| Final CTA | 预约产品演示 | CTA With Masonry Images、MovingBorder | 深色 CTA + 场景图片 + 需求卡 |
| Footer | 一级导航与公司链接 | Simple Footer With Four Grids | 四列 Footer，文案仅用已确认页面入口 |

## 首页样例验证

Figma 回读验证结果：

- 首页样例 Node：`111:59`
- Section 数量：7
- 文本节点：175
- 图片节点：3
- 字体扫描：未发现非 `Noto Sans TC` / `Inter` 的可见文本字体
- 英文残留扫描：未发现非允许词的可见英文残留；已将可见 `Logo` 修正为 `標誌`
- 原始 `首頁` Frame `84:468` 保留未改，当前样例作为可对比测试稿存在

## 已知边界

- Figma 中的动效为静态表达，真实 `BackgroundBeams`、`TextGenerateEffect`、`MovingBorder`、`ContainerScroll` 需要在 React / Next 或最终前端实现中落地。
- 首页样例使用当前 Figma 文件内已有图片填充；上线前仍需替换为授权摄影或真实产品截图。
- 本轮只替换首页作为测试样例；其他页面已经有替换规划，但尚未执行到完整 Figma 页面。
- 若用户确认首页样例方向成立，下一步建议按 `解決方案`、`平台`、`整合能力`、`預約產品演示` 的顺序继续替换，因为这些页面最能验证场景表达、产品能力和转化链路。
