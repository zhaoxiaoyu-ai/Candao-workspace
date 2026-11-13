# Website Visual Direction Exploration

任务：T11.5-A / Task A04  
日期：2026-08-05  
输出语言：简体中文  

## 1. 方向选择结论

三套方向均可成立，但本轮正式执行采用 Direction C：

```text
Operational Intelligence Direction
```

原因：

- 继承 T10 的 `Operational Clarity for Global Restaurant SaaS`；
- 同时有餐饮行业真实感和 SaaS 产品感；
- 能承接 Home、Platform、Order、Delivery 的 UI Demo 与 Motion Storyboard；
- 不依赖未确认客户、Logo 或数字。

## 2. Direction A: Enterprise SaaS Direction

特点：

- Deliverect 倾向；
- 产品能力强；
- 企业可信；
- 更适合 Platform、Integrations、Contact。

Moodboard 描述：

克制白底、清晰信息架构、密度适中的 dashboard、API / integration 连接图、企业采购可信感。

色彩：

- Primary：`#528dff`
- Neutral：冷白、浅灰、深墨色
- Status：success green、warning amber、error red

摄影：

少量使用餐厅现场，更多使用产品 UI 与系统连接。

UI 风格：

企业 SaaS dashboard；表格、状态 chip、连接图、侧边导航、数据卡片。

Motion 方向：

Scroll reveal、数据流线、stepper transition。

适用页面：

Products / Platform、Integrations、Contact / Book a Demo。

## 3. Direction B: Restaurant Experience Direction

特点：

- Aigens 倾向；
- 强餐饮场景；
- 强摄影；
- 更适合 Home 和 Solutions。

Moodboard 描述：

高质量餐饮营运摄影、前台接单、后厨出餐、门店协作、配送交接。产品 UI 以轻量 overlay 进入，而不是主导全部画面。

色彩：

- Primary：`#528dff` 用于 UI 焦点；
- 环境色：暖光餐厅、金属厨房、深色制服；
- 背景：深色 Hero + 浅色后续模块。

摄影：

真实餐厅高峰营运，人物在工作流中，不直视镜头，不做广告摆拍。

UI 风格：

半真实 SaaS UI overlay；透明度克制，阴影轻，避免厚重玻璃拟态。

Motion 方向：

Hero video loop、UI overlay parallax、订单状态轻动效。

适用页面：

Home、Solutions、Restaurant Chains。

## 4. Direction C: Operational Intelligence Direction

特点：

- 餐饮场景；
- SaaS UI；
- 产品动效；
- 本轮推荐方向。

Moodboard 描述：

真实餐饮营运作为业务语境，半真实产品 UI 展示流程，蓝色连接线和状态 chip 表达系统将分散工作流收敛为可管理的平台。

色彩：

- Primary：`#528dff`
- Primary Dark：`#2266dd`
- Primary Soft：`#eaf2ff`
- Neutral：`#f6f9fc`、`#ffffff`、`#0b1320`
- Status：green / amber / red 只服务业务状态。

摄影：

Home 使用餐饮高峰营运大图或视频；Platform 以产品 UI 和 Capability Map 为主。

UI 风格：

清晰 dashboard、Order Queue、Store Workload、Delivery Exception、HQ Dashboard。UI 数据使用抽象示例，不使用真实客户数据。

Motion 方向：

```text
Order enters
→ Unified Queue
→ Store Processing / Delivery Dispatch
→ HQ Dashboard
```

适用页面：

Home、Products / Platform、Order Management、Delivery Management。

## 5. 本轮 Figma 执行映射

| 方向元素 | Figma 结果 |
| --- | --- |
| 真实餐饮营运摄影 | `Hero / Photography / Generated Restaurant Operations`，桌面节点 `47:3`，移动节点 `49:3` |
| SaaS UI Overlay | `Hero / UI Overlay / Live Operations Command` |
| Capability Map | `Capability Map / Connected System` |
| Product Motion | `Platform UI Motion Storyboard / TC`、`Product Motion Storyboard / TC` |
| Design System | `Candao Website Design System v1.0` |

