# AI Generated Website Pages

任务：T11.5-C Stitch / AI Web Generator 网页生成流程  
项目：餐道国际官网重构  
日期：2026-08-03  
输出语言：内部说明使用简体中文；网页可见内容为繁體中文单一 Locale。

## 1. 生成范围

本文件是基于 `Website Generation Prompt.md` 生成的网页版本草案，用于进入 Stitch / AI Web Generator 前的页面结果校验。

2026-08-03 初版说明：当时环境未连接 Stitch 可调用工具，因此本文件不伪装成真实 Stitch 截图；它是可投喂网页生成器的结构化结果版本。

2026-08-04 更新：Stitch 已连通并完成真实网页生成。真实结果请以 `stitch-generated-website-result-2026-08-04.md` 和 `stitch-generated-website-review-2026-08-04.md` 为准；本文件保留为生成前页面草案与 Prompt 校验依据。

生成页面：

- Home / Desktop 1440 / TC；
- Platform / Desktop 1440 / TC；
- Order Management / Desktop 1440 / TC；
- Delivery Management / Desktop 1440 / TC；
- Mobile 390 降级规则。

## 2. Home 页面版本

### 首屏 Hero

可见文案：

```text
為複雜餐飲營運建立清晰連接

Candao 協助成長中的餐飲品牌連接跨渠道訂單、多門店流程、配送履約與營運數據，讓總部看得更清楚，讓門店更專注服務。

預約產品演示
探索平台能力
```

视觉结果：

- 真实餐厅高峰运营大图或 8-12 秒静音循环视频；
- 左侧保留可读负空间，右侧为半真实 SaaS UI Overlay；
- Overlay 包含统一订单队列、门店状态、配送时间线、营运摘要和系统连接状态；
- UI 状态使用繁體中文：`新訂單`、`準備中`、`配送中`、`已完成`、`需跟進`；
- Hero 首屏保留 Header 语言切换：`繁中 / EN`。

### Trust Module

可见文案：

```text
為多門店、多渠道餐飲營運建立可信基礎

Candao 的平台能力圍繞訂單、菜單、配送、數據和系統連接設計，協助餐飲品牌在複雜營運環境中建立更清晰的工作流程。
```

卡片：

- 行業理解；
- 系統連接；
- 服務準備；
- 區域營運理解；
- 導入支援。

### Problem Switcher

默认选中：

```text
訂單分散
不同渠道同時產生訂單，門店需要更清晰的接單流程。
```

其他问题：

- 菜單重複維護；
- 配送高峰難協調；
- 數據割裂。

### Product Showcase

模块标题：

```text
一個平台，串連每日餐飲營運流程
```

能力流：

```text
訂單進入
→ 菜單與門店狀態同步
→ 配送狀態更新
→ 數據回到總部視圖
→ 系統持續連接
```

能力入口：

- 訂單管理；
- 菜單與門店；
- 配送管理；
- 數據智能；
- 系統集成。

Motion：

- 滚动到 Product Showcase 时按顺序点亮能力节点；
- Hover / Focus 时显示能力摘要；
- 移动端降级为横向滑动能力卡。

## 3. Platform 页面版本

### 首屏 Hero

可见文案：

```text
一個餐飲 SaaS 平台，支撐訂單、菜單、配送、數據與系統連接

Candao 將餐飲品牌每天使用的渠道、門店和系統連接起來，讓關鍵營運流程可以在同一個平台中被管理和追蹤。

探索平台能力
預約產品演示
```

视觉结果：

- Hero 使用结构化平台 UI 与轻量餐饮运营背景；
- 不使用纯 Dashboard 截图墙；
- 首屏下沿露出 Capability Map，暗示页面核心。

### Capability Map

中心节点：

```text
Candao 營運平台
```

左侧系统：

- 訂單渠道；
- POS；
- 支付；
- 會員。

右侧输出：

- 門店；
- 配送；
- 數據視圖。

底部结果：

- 總部可視。

能力节点：

- 訂單管理；
- 菜單與門店；
- 配送管理；
- 自有點餐；
- 數據智能；
- 系統集成。

Motion：

- 节点按业务路径逐步出现；
- 连线缓慢流动；
- 点击 `訂單管理` 和 `配送管理` 可进入对应页面。

### Platform UI Demo

三步演示：

| Step | UI 状态 | 业务结果 |
| --- | --- | --- |
| 1 | 多个营运系统连接到 Candao 营运平台 | 建立平台总览 |
| 2 | 订单触发菜单、配送和数据状态更新 | 说明流程连贯 |
| 3 | 总部看到门店健康、渠道摘要和异常提示 | 说明总部可视 |

### Product Cards

产品入口：

- 訂單管理：集中處理跨渠道訂單與狀態。
- 菜單與門店：維護菜單、門店資料和狀態資訊。
- 配送管理：協調自有配送與外部運力。
- 自有點餐：建立品牌自己的點餐入口。
- 數據智能：整理營運、渠道和財務資料。
- 系統集成：連接既有餐飲技術生態。

## 4. Order Management 页面版本

### 首屏 Hero

可见文案：

```text
讓多渠道訂單進入同一個清晰流程

當外賣平台、自有點餐和門店系統同時產生訂單，Candao 協助門店集中接收、處理和追蹤狀態，讓總部也能掌握異常與渠道表現。

了解訂單管理
預約產品演示
```

视觉结果：

- 使用门店接单或前台设备工作场景；
- 右侧 Overlay 展示订单来源、统一队列、状态时间线和总部摘要；
- 不展示真实订单号、真实顾客名、真实金额或平台 Logo。

### Workflow

四步产品展示：

| Step | 画面 | 业务表达 |
| --- | --- | --- |
| 1 | 多渠道订单卡片从左侧来源进入 | 订单来源分散被看见 |
| 2 | 订单汇入统一订单队列 | 集中可见 |
| 3 | 状态从 `新訂單` 到 `準備中` 再到 `可取餐` | 门店减少切换 |
| 4 | 总部摘要面板更新异常和渠道状态 | 总部可管理 |

### Business Outcome

可见文案：

```text
減少切換，提升訂單處理可視性

當訂單流程更集中，門店能更快處理狀態，總部也能更容易發現渠道、門店或時段中的營運問題。

預約產品演示
```

Motion：

- 订单卡进入队列；
- 状态 chip 逐步切换；
- `需跟進` 出现后总部摘要同步更新；
- 移动端变为 4 张步骤卡。

## 5. Delivery Management 页面版本

### 首屏 Hero

可见文案：

```text
讓配送高峰不再只靠人工臨場協調

Candao 協助餐飲品牌在同一流程中協調自有配送與外部運力，追蹤履約狀態，並更快處理高峰期和異常情況。

了解配送管理
預約產品演示
```

视觉结果：

- 使用出餐、取餐或配送交接场景；
- UI Demo 包含地图、门店队列、履约方式选择、配送时间线和异常面板；
- 画面必须是运营视角，不只展示骑手端 App。

### Workflow

四步产品展示：

| Step | 画面 | 业务表达 |
| --- | --- | --- |
| 1 | 配送需求热区和门店队列点亮 | 运力压力出现 |
| 2 | 履约方式选择切换：自有配送、外部运力、人工覆核 | 履约方式可选 |
| 3 | 地图、骑手状态和配送时间线推进 | 状态可追踪 |
| 4 | 延迟、取餐失败和顾客通知进入异常面板 | 异常可处理 |

### Business Outcome

可见文案：

```text
讓配送更可控，讓門店少一點被動

更清晰的配送流程有助營運團隊掌握運力、追蹤異常，並在高峰期更快調整履約方式。

預約產品演示
```

Motion：

- Heatmap 使用克制琥珀色提示高峰；
- Dispatch selector 使用 selected state；
- Timeline 稳定推进；
- Exception Panel 作为运营状态出现，不制造过度警报；
- 移动端地图降级为状态卡片。

## 6. Mobile 390 统一降级

| 页面 | 降级方式 |
| --- | --- |
| Home | 静态摄影封面 + 紧凑 UI Overlay；Problem Switcher 改 accordion；Product Showcase 改 swipe cards |
| Platform | Capability Map 改分组能力卡；Platform UI Demo 改 3-step swipe |
| Order Management | 订单队列可横向滑动；4-step workflow 改步骤卡 |
| Delivery Management | 地图改状态卡；Dispatch selector 改 segmented control；Timeline 改纵向步骤 |

## 7. 生成结论

本轮页面版本已经覆盖用户要求的：

- Home：Hero、摄影、UI Overlay、Product Showcase；
- Platform：Capability Map、UI Demo、Product Cards；
- Order / Delivery：产品展示、Workflow、Motion 表达。

进入真实 Stitch 或 AI Web Generator 后，优先检查截图中的 Locale、摄影真实感、UI 精细度和 Motion 是否遵守 T10 标准。
