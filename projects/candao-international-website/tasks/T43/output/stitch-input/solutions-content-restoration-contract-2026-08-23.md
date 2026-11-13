# Solutions 内容还原契约

## 使用目的

本契约用于下一轮 `Solutions / 解決方案` 高保真重试。它不是新的官网文案，也不是自由发挥的创意 brief，而是 T27 低保真内容的还原边界。任何 Stitch、Figma、本地 HTML 或 React 产物都必须先满足本契约，再进入视觉质量评审。

## Source of Truth

- 页面源：`tasks/T27/output/stitch-ready-low-fidelity/solutions.html`
- 视觉参考图：`tasks/T34/output/images/03-solutions-low-fidelity-1440-full.png`
- 元素地图：`tasks/T27/output/stitch-ready-low-fidelity/element-placement-map.json`
- 当前风格基准：`tasks/T35/output/figma-homepage-mcp-style-guide-2026-08-20.md`
- Stitch Design System：`tasks/T17/output/design-handoff/.stitch/DESIGN.md`

## Page Role

`Solutions / 解決方案` 是场景判断页，不是产品目录页。访客进入页面后，应先识别自己遇到的餐饮 O2O 营运问题，再看到问题如何被餐道的产品能力承接，并被导向 `平台`、`客戶案例` 或 `預約演示`。

## Required Header

顶部导航必须包含并保持以下顺序：

`首頁 / 解決方案 / 平台 / 整合能力 / 客戶案例 / 資源 / 關於餐道 / 預約演示`

语言切换可显示为 `繁中 / EN`。中文 / 繁體中文页面品牌显示使用 `餐道`。

## Required Module Structure

### 1. Hero

必须保留：

- Eyebrow：`營運場景`
- H1：`按餐飲 O2O 營運問題，找到可落地的解決方案`
- Lead：必须表达外卖平台、自有点餐、门店接单、配送和对账分散在多个后台，品牌需要判断哪段流程造成漏单、重复维护或异常追踪压力。
- CTA：`預約相似場景演示`、`查看平台能力`

右侧或首屏视觉必须保留 `場景鏈路`，节点包括：

- `外賣平台`
- `門店接單`
- `餐道 OMS`
- `配送履約`
- `對賬分析`

链路步骤必须保留：

- `多入口產生訂單`
- `OMS 統一處理`
- `履約與對賬回流`

### 2. 常见营运问题

必须保留 section：

- Eyebrow：`常見營運問題`
- H2：`每一類問題都對應一條可追蹤的營運鏈路`

三张问题卡必须保留：

- `多平台訂單履約`：集中处理外卖平台与自有入口订单，让门店接单、打印、退款、取消和异常提醒回到 OMS 流程。
- `門店與餐單營運`：总部可维护门店资料、营业时间、餐单、售罄和区域菜单，减少多平台重复更新。
- `配送營運與對賬`：`DMS / iDMS` 承接自有骑手、第三方配送、派单、超时和状态回传，`Finance Center` 追踪对账差异。

### 3. 场景导览

必须保留 section：

- Eyebrow：`場景導覽`
- H2：`選擇最接近你現況的營運場景`

六个场景入口必须按原命名保留：

- `多平台外賣訂單`
- `堂食掃碼與自有點餐`
- `配送營運與履約`
- `財務對賬與報表`
- `會員與營運數據`
- `門店與餐單管理`

默认详情面板必须保留：

- Title：`讓多平台外賣訂單回到同一條處理鏈路`
- Lead：集中查看外卖平台订单，让门店接单、打印、退款、取消、配送状态和财务对账进入统一流程。
- Subheading：`高峰訂單處理鏈路`
- Label：`場景拆解`

关键帧必须保留：

- `問題：漏單與重複維護`
- `能力：OMS / DMS 承接`
- `結果：總部追蹤狀態`

流程步骤必须保留：

- `問題：訂單高峰`
- `能力：OMS + DMS`
- `結果：數據回流`

### 4. 能力承接与下一步

必须保留：

- `承接能力：OMS、Menu Center、DMS / iDMS、Finance Center。`
- `下一步：查看平台能力或預約相似場景演示。`
- CTA：`預約相似場景演示`
- CTA：`查看客戶案例`

### 5. Footer

Footer 必须包含：

- `餐飲與零售 O2O 營運中樞｜SaaS、iDMS、AMS / Connector`
- `首頁 / 解決方案 / 平台 / 整合能力 / 客戶案例 / 資源 / 關於餐道 / 預約演示`

## Protected Terms

必须保留大小写和写法：

- `OMS`
- `Menu Center`
- `DMS / iDMS`
- `Finance Center`
- `SaaS`
- `AMS / Connector`
- `CDBI`

## Do Not

- 不要把本页改成产品目录或泛化价值页。
- 不要删除 `常見營運問題`、`場景導覽`、默认场景详情或能力承接。
- 不要改写六个场景入口的命名。
- 不要在繁體中文页面显示 `Candao` 作为品牌名。
- 不要生成假客户 Logo、假备案、未确认数字、SLA、认证或合作状态。
- 不要让 Material Symbols 的 ligature 文本可见，例如 `menu`、`arrow_forward`、`restaurant`。
- 不要重复定义已有 Design System 中的颜色、字体、圆角 token。

## Coverage Gate

生成或实现后必须跑内容覆盖检查：

- 总覆盖率必须达到 100%，不得遗漏任何低保真契约项。
- Header 必须 8 / 8。
- `常見營運問題` 必须 10 / 10。
- `場景導覽` 必须 8 / 8。
- `場景详情面板` 必须 11 / 11。
- 受保护产品术语必须 6 / 6。
- 风险词必须为 0。

未通过时不得登记为正式高保真，不得继续做视觉审美评审。
