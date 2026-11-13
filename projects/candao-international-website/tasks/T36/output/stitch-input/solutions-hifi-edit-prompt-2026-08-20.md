# Solutions 高保真 Stitch 编辑 Prompt

目标 screen：`4188f2a7f3f84566b5644b19efdedadd`  
目标页面：`Solutions / Desktop 1440 / TC`  
执行方式：`edit_screens`，只编辑同一个 screen，不重新生成新 screen。

## Edit Prompt

You are editing the existing Solutions page screen into the formal Traditional Chinese high-fidelity page for 餐道 international website.

Keep this as the Solutions page, not Home and not Platform.

Use the existing project design system and align with the homepage MCP visual language:

- cinematic dark hero section;
- enterprise SaaS product/workflow clarity;
- structured white content sections;
- strong but restrained operational storytelling;
- one clear CTA at each conversion point;
- page rhythm should differ from Platform: Solutions is scenario storytelling, Platform is product capability.

Critical hard fixes:

1. Replace every visible Chinese / Traditional Chinese brand display `Candao` with `餐道`.
2. Header navigation must be exactly: `首頁`, `解決方案`, `平台`, `整合能力`, `客戶案例`, `資源`, `關於餐道`; active item is `解決方案`; include language switch `繁中 / EN`; CTA `預約演示` or `預約產品演示`.
3. Do not display English body copy. Traditional Chinese only.
4. Remove all external generated photos, fake restaurant images, fake dashboard screenshots, fake video thumbnails, fake customer logos, fake certifications, and fake partner marks.
5. Remove all unauthorized numeric status counts and metrics from this page, including `142`, `38`, `248`, `12`, `3`, `42` or similar invented values.
6. Remove visible icon ligature text such as `check_circle`, `store`, `two_wheeler`, `admin_panel_settings`, `local_shipping`, `sync_alt`, `motorcycle`, `route`, `hub`, and `arrow_forward`. Replace them with simple non-text pictograms or remove the icons.
7. Preserve protected product casing exactly: `OMS`, `DMS`, `iDMS`, `CDBI`, `Finance Center`, `Menu Center`, `SaaS`, `AMS / Connector`.
8. Do not use CSS or visual treatment that uppercases or lowercases protected terms. No visible `IDMS`, `SAAS`, `Can Dao`, `candao`, `placeholder`, `missing`, `PPT`, `OLD`, `source`, `來源`, or internal design notes.

Target page content and structure:

1. Header
   - Brand: use `餐道` as visible Chinese brand text or a simple non-fake brand mark placeholder without pretending to be a logo image.
   - Navigation exactly as listed above.

2. Hero
   - Headline: `按餐飲 O2O 營運問題，找到可落地的解決方案`
   - Supporting copy: `當外賣平台、自有點餐、門店接單、配送和對賬分散在多個後台，品牌需要先判斷哪一段流程造成漏單、重複維護或異常追蹤壓力。餐道按常見營運場景整理方案，協助你對照現有問題與下一步演示重點。`
   - Primary CTA: `預約相似場景演示`
   - Secondary CTA: `查看平台能力`
   - Right-side visual: replace all real-looking generated images with an abstract operational scenario map:
     `外賣平台 → 門店接單 → 餐道 OMS → 配送履約 → 對賬分析`
     Use diagram nodes, connectors, status chips, and a product-workbench style panel, but no fake screenshot and no invented numbers.

3. Common Operations Problems
   - Section title: `每一類問題都對應一條可追蹤的營運鏈路`
   - Three problem routes:
     - `多平台訂單履約`: `集中處理外賣平台與自有入口訂單，讓門店接單、打印、退款、取消和異常提醒回到 OMS 流程。`
     - `門店與餐單營運`: `總部可維護門店資料、營業時間、餐單、售罄和區域菜單，減少多平台重複更新。`
     - `配送營運與對賬`: `DMS / iDMS 承接自有騎手、第三方配送、派單、超時和狀態回傳，Finance Center 追蹤對賬差異。`

4. Scenario Explorer
   - Use a sticky side rail or segmented scenario selector, not a generic card wall.
   - Scenarios:
     - `多平台外賣訂單`
     - `堂食掃碼與自有點餐`
     - `配送營運與履約`
     - `財務對賬與報表`
     - `會員與營運數據`
     - `門店與餐單管理`
   - Detail panel must show:
     - scenario problem;
     - business objects;
     - corresponding products;
     - next action.
   - Default scenario detail:
     Title: `讓多平台外賣訂單回到同一條處理鏈路`
     Body: `集中查看外賣平台訂單，讓門店接單、打印、退款、取消、配送狀態和財務對賬進入統一流程。`
     Products: `承接能力：OMS、Menu Center、DMS / iDMS、Finance Center。`
     Next action: `下一步：查看平台能力或預約相似場景演示。`

5. Problem → Capability → Result
   - Use a horizontal or vertical process strip:
     `問題：漏單與重複維護`
     `能力：OMS / DMS / iDMS 承接`
     `結果：總部按渠道、門店、時段追蹤營運表現`
   - No invented counts.

6. Routing CTA
   - Title: `不確定從哪個場景開始？`
   - Body: `告訴我們你的門店規模、渠道組合與營運挑戰，餐道團隊將為你安排合適的產品演示。`
   - CTA: `預約產品演示`

7. Footer
   - Use `餐道`.
   - Footer links must include the same primary navigation pages.
   - No English legal links unless already confirmed for this Traditional Chinese page.

Design intent:

- Solutions page should feel like a strategic scenario route map for brand decision makers and operations teams.
- Avoid product-manual density and avoid repeating Platform's product capability map.
- Use clean diagrams, connector lines, status chips, and product-workbench panels as visual expression.
- Because real product screenshots and real scenario photography are not available in this input, use abstract structured visuals only.
