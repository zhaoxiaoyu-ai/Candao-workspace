# Integrations 高保真 Stitch 一次性生成 Prompt

目标页面：`Integrations / Desktop 1440 / TC`  
执行方式：首次 `generate_screen_from_text`，只调用一次。

## Prompt

Generate a high-fidelity Traditional Chinese desktop web page for 餐道 international website.

This page is `整合能力 / Integrations`. It is not a customer logo wall and not a generic integration marketplace. Its job is to help IT and operations teams verify integration objects, data direction, permission / validation boundaries, and exception handling before they request an integration assessment.

Use the existing project design system. Align visually with the homepage MCP style: cinematic dark hero, enterprise SaaS workflow clarity, structured white content sections, restrained premium interaction language, and clear conversion CTA. Do not invent colors, fonts, customer logos, numbers, system availability, latency, partnership status, or real product screenshots.

Language:

- Traditional Chinese only for visible page body.
- Header may include `繁中 / EN`.
- Use `餐道` as the visible Chinese brand name.

Header:

- Visible brand: `餐道`.
- Navigation exactly: `首頁`, `解決方案`, `平台`, `整合能力`, `客戶案例`, `資源`, `關於餐道`.
- Active item: `整合能力`.
- CTA: `預約演示` or `提交接入評估`.

Hero:

- Eyebrow: `系統接入`
- Headline: `把外賣平台、POS / KDS、CRM、支付、ERP 與配送資料接回營運鏈路`
- Body: `IT 與營運團隊可以了解餐道 Connector 如何承接不同系統類型、資料對象、狀態回傳與異常處理，讓外部渠道和門店系統回到 OMS、Data Asset、Finance Center 與配送流程。`
- Primary CTA: `提交接入評估`
- Secondary CTA: `查看平台能力`
- Hero visual: an abstract Connector network diagram. Center node: `AMS / Connector`. External nodes: `外賣平台`, `自建點餐入口`, `POS / KDS`, `CRM / 會員`, `支付 / ERP`, `配送 API`. Internal destination nodes: `OMS`, `Menu Center`, `DMS / iDMS`, `Finance Center`, `CDBI`. Use connector lines, directional data packets, status chips, and validation tags. No fake logos, no real-looking screenshots, no generated partner marks.

Section 1: 接入對象

- Section title: `按系統類型了解接入範圍、資料流和回傳狀態`
- Layout: left-side rail or segmented selector, right-side detail panel.
- Rail items:
  - `外賣平台`
  - `自建點餐入口`
  - `POS / KDS`
  - `CRM / 會員`
  - `支付 / ERP`
  - `配送與 API`
- Default detail title: `外賣平台訂單進入 OMS`
- Default detail body: `訂單數據進入 Connector 後，需要標準化訂單、餐單、用戶和基礎資料，再回到 OMS、Data Asset 和 Finance Center。`
- Detail list:
  - `資料對象：餐單、訂單、用戶、基礎資料。`
  - `適合情境：需要把多平台訂單、餐單更新、用戶資料和對賬差異接回餐道流程。`
- CTA: `提交接入評估`

Section 2: 資料流向

- Section title: `接入不是單點開接口，而是讓資料在營運鏈路中可校驗、可追蹤`
- Body: `本頁以資料對象、同步方向和異常回報位置呈現接入邊界，後續可替換為真實產品截圖或動效。`
- Use a three-stage API data flow:
  - `資料來源：平台 / POS / ERP`
  - `校驗同步：AMS / Connector`
  - `營運使用：OMS / Finance Center / CDBI`
- Data packets: `訂單`, `菜單`, `門店`, `庫存`, `會員`, `支付`, `配送`, `對賬`.
- Include exception tags: `字段缺失`, `狀態不一致`, `同步失敗`, `對賬差異`.
- Do not invent real API status percentages, latency numbers, success rates, or all-systems-supported promises.

Section 3: 深度場景

- Use two tabs or two side-by-side scenario panels:
  - `POS / Store 接入`
  - `Delivery / API 接入`
- Each panel must show:
  - input system;
  - data object;
  - validation point;
  - destination product;
  - exception handling route.
- Keep it concise. This section should be technical and legible, not a marketing feature grid.

Final CTA:

- Title: `先判斷接入對象，再安排技術演示`
- Body: `告訴我們你目前使用的 POS / KDS、外賣平台、支付、CRM、ERP 或配送系統，餐道團隊會按資料對象與營運場景準備接入評估。`
- CTA: `提交接入評估`

Footer:

- Use `餐道`.
- Footer links must include: `首頁`, `解決方案`, `平台`, `整合能力`, `客戶案例`, `資源`, `關於餐道`, `預約演示`.

Hard restrictions:

- No visible `Candao` in Traditional Chinese page content except in hidden metadata or file names.
- No `IDMS`, `SAAS`, `Can Dao`, `candao`.
- Preserve exact casing: `iDMS`, `SaaS`, `AMS / Connector`.
- No `text-transform` that changes protected product names.
- No fake logos, fake product screenshots, fake photos, fake video thumbnails, fake certifications, fake partner labels, fake SLA, fake status counts, fake API metrics, pricing, or unconfirmed cooperation status.
- No internal words: `placeholder`, `missing`, `PPT`, `OLD`, `source`, `來源`, design notes, task IDs.
