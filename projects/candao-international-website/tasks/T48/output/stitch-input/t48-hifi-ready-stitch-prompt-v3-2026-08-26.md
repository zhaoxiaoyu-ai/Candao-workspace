# T48 Stitch Prompt v3｜接入评估中心高保真页面输入

Create one Web Desktop 1440 screen for 餐道 international website.

Use Traditional Chinese only for visible body copy. Include the language switch `繁中 / EN`.

Use the existing Stitch project design system and match the approved homepage direction: cinematic restaurant operations hero, enterprise product workbench, dense but scannable B2B information, real operational imagery, and clear conversion actions.

## Page

`接入評估中心 / Desktop 1440 / TC`

## Page Purpose

Help brand decision makers, IT teams, operations teams and procurement teams judge whether their current ordering, POS, CRM, delivery, payment and reconciliation systems can connect back into 餐道, then use similar customer cases and resources to decide the next action.

## Primary Composition

1. Header  
   Transparent dark navigation over the hero. Include 餐道 logo, nav items `首頁 / 解決方案 / 平台 / 整合能力 / 客戶案例 / 資源 / 關於餐道`, language switch `繁中 / EN`, and CTA `預約產品演示`.

2. Hero Product Stage  
   Use a cinematic restaurant operations background. The hero headline is:
   `先判斷現有系統如何接入，再用案例與資源完成採購評估`

   Add a large product decision stage, not three plain cards. The stage should show:
   - Current question: 多平台訂單、餐單更新、門店接單、配送與對賬差異
   - System sources: 外賣平台、自建點餐、POS / KDS、CRM / 會員、支付 / ERP、配送 API
   - Processing layer: AMS / Connector
   - Usage layer: OMS、Menu Center、DMS / iDMS、財務對賬、CDBI
   - Next action: 提交接入評估 / 預約相似場景演示

3. System Fit Workbench  
   A dark enterprise workbench section. Use a left vertical system rail, a central field mapping and data-flow panel, and a right status / exception panel. It should explain:
   `來源 -> 校驗同步 -> 營運使用`

   Include business objects: 訂單、菜單、門店、庫存、會員、支付、配送、對賬.

4. Case Proof Board  
   A white editorial proof section using authorized named cases and metrics. Use text-based customer proof unless real logo assets are supplied.

   Include:
   - `5000+` 品牌數量
   - `500M+` 每日處理訂單
   - `400+` 覆蓋城市
   - `200K+` 門店數量
   - `4.5B+` 每月配送訂單交易額
   - `30%` 客戶效率提升
   - `Pizza-Box`、`JIA Group`、`Jardine Group`
   - 甜品連鎖、火鍋連鎖、中餐連鎖、咖啡品牌、鮮食零售、配送密集品牌

5. Resource Router  
   A light operations resource section. Use a stage rail and resource detail cards, not generic marketing cards.

   Stages:
   - 評估中
   - 導入中
   - 日常營運
   - 技術查詢

   Resource types:
   - 接入準備清單
   - 營運 FAQ
   - 案例資源
   - 支援中心
   - 媒體與公司資料
   - 產品演示分流

6. Decision Matrix  
   A dark decision table with four columns:
   `目前問題 / 接入或產品關係 / 相似案例 / 資源下一步`

   Rows:
   - 多平台訂單、餐單更新、門店接單與漏單風險
   - 配送超時、派單規則、第三方配送狀態回傳
   - 平台訂單與 OMS 訂單金額、狀態與漏單差異

7. Final Demo Summary  
   A white conversion section with a demo summary panel. Include CTA `預約產品演示` and secondary action `查看資源入口`.

## Copy and Terms

- Visible brand name in Traditional Chinese: `餐道`.
- Preserve product term casing: `OMS`, `COMS`, `SOMS`, `DMS`, `iDMS`, `CDBI`, `AMS / Connector`, `Menu Center`, `SaaS`.
- Use `財務對賬`, not `Finance Center`.
- Use only supplied business objects and approved product terms.
- Do not invent metrics, legal footer details, customer logos, support promises, partner status, SLA, pricing, or fake product data.

## Design Intent

This page must feel like a high-fidelity B2B SaaS product page. It should not look like a content checklist, a blog page, a generic SaaS landing page, or three separate pages pasted together.

The key visual idea is:

`restaurant operations pressure -> system fit workbench -> proof from similar cases -> resource route -> demo summary`

## QA Cleanup After Generation

After generating, download HTML and screenshot. Fail the screen if:

- It lacks a visible product decision stage in the hero.
- It lacks system rail, data flow, status rows, case proof, resource router or demo summary.
- It displays `Finance Center`, `Business Center`, `Data Center`, `Candao` as Traditional Chinese brand text, `arrow_forward`, fake ICP, fake customer logos, unsupported SLA, or unsupported “seamless integration” claims.
- It changes `iDMS`, `SaaS`, or `AMS / Connector` casing.
