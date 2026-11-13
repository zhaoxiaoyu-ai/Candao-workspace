Patch the selected screen for complete content coverage while preserving the current high-fidelity visual style. Add compact SaaS UI cards, scenario cards, chips, tables and segmented panels. Do not add a plain long-text document block.

Keep all current visible compliant content. Add or replace content so these exact Traditional Chinese strings are visible in polished UI components:

Top/body missing copy:
- 「選定問題後，可以直接查看相似案例、接入準備、營運 FAQ、支援查詢與產品演示分流。」
- 「可按品牌、業態或履約類型查看 Pizza-Box、JIA Group、Jardine Group、甜品連鎖、火鍋連鎖、中餐連鎖、咖啡品牌、鮮食零售與配送密集品牌。」

Source/product chips to add near the hero workspace or evaluation diagram:
- CRM / 會員
- 支付 / ERP
- 配送 API
- Menu Center
- DMS / iDMS
- 財務對賬
- 校驗同步
- 營運使用
- 總部可見
- 重新對賬

Use these exact scenario cards in a five-card grid or tabbed panel:
1. 漏單與接單超時
「多平台訂單、餐單更新、門店接單與漏單風險」
「外賣平台、自建點餐與 POS / KDS 分散處理時，門店容易漏接訂單或延遲接單，需要先核對來源、狀態與異常回傳。」
「核對渠道訂單與 OMS 訂單」
「門店接單狀態」
「退款未處理與取消未同步」
「多渠道訂單隊列與異常回傳」
「Pizza-Box 使用 OMS 與自有點餐入口支援長期營運，適合用於多平台訂單與門店接單演示。」
「支援中心查詢：門店接單超時、退款未處理、取消未同步」

2. 餐單同步
「餐單同步、庫存售罄與平台差異」
「餐單、庫存、售罄與區域菜單在多平台重複維護時，容易出現餐單更新失敗、價格差異或門店不可售。」
「更新平台餐單與區域菜單」
「同步售罄與可售狀態」
「餐單同步與門店營運狀態」
「JIA Group 適合作為多品牌餐單、門店營運與總部管理視角的演示參考。」
「支援中心查詢：餐單更新失敗、庫存售罄未同步、門店狀態異常」

3. 配送超時
「配送超時、派單規則、第三方配送狀態回傳」
「配送高峰時，派單規則、騎手狀態和第三方配送狀態需要回到同一視圖，否則超時、轉派和異常處理都會分散。」
「騎手 APP」
「轉第三方」
「配送派單、騎手追蹤與異常回流」
「Jardine Group / KFC / Pizza Hut / PHD 線索可支援配送密集品牌的履約場景討論。」
「支援中心查詢：配送超時、缺少配送坐標、第三方轉派狀態中斷」

4. 對賬差異
「平台訂單與 OMS 訂單金額、狀態與漏單差異」
「平台訂單與 OMS 訂單在金額、狀態或漏單標記上不一致時，需要回到同一張對賬視圖追蹤來源和處理人。」
「金額不一致」
「狀態不一致」
「平台訂單與 OMS 訂單對賬差異」
「甜品連鎖」
「甜品連鎖訂單量 100K、190K、1.01M；銷售額 6.6M、7.74M、54.42M；復購率 19.88%、19.95%、25.83%。」
「支援中心查詢：金額不一致、狀態不一致、漏單標記、退款未處理」

5. 多品牌門店
「多品牌、多區域、多門店的總部可見性」
「多品牌、多區域和多門店營運需要把渠道、餐單、門店狀態、配送與數據回到總部視圖，否則問題會分散在不同團隊。」
「會員」
「品牌、區域與門店表現」
「總部營運視圖與多品牌門店管理」
「中餐連鎖」
「中餐連鎖可展示訂單取消率改善、銷售增長與門店擴張率；咖啡品牌與鮮食零售可補充單店與線上訂單比例視角。」
「支援中心查詢：門店狀態異常、營業時間待同步、會員資料回流」

Cases/resources/support/demo router must use these exact card bodies:
- 「從相似客戶案例看落地方式」
- 「用當前問題匹配相似案例、使用產品和下一步演示方向。」
- 「預約相似場景演示」
- 「資源路由：按目前階段找到下一步」
- 「把評估中、導入中、日常營運、技術查詢轉成具體資源入口。」
- 「評估中」
- 「導入中」
- 「日常營運」
- 「技術查詢」
- 「接入準備清單」
- 「營運 FAQ」
- 「案例資源」
- 「支援中心」
- 「媒體與公司資料」
- 「產品演示分流」
- 「支援中心：把異常問題轉成查詢入口」
- 「用支援中心承接營運、IT、門店、配送和財務團隊的具體問題。」
- 「問題會回到訂單、餐單、門店、配送、對賬或會員資料狀態。」
- 「支援查詢需要包含來源、狀態、影響和下一步操作。」
- 「產品演示分流：把問題帶入演示模組」
- 「根據目前問題安排 OMS、Menu Center、DMS / iDMS、財務對賬或 CDBI 的演示順序。」
- 「演示從品牌已使用的系統與資料來源開始，先確認需要接入和回傳的對象。」
- 「讓採購方看到總部、門店、配送或財務團隊如何使用結果。」

Case chips must be exact:
Pizza-Box / JIA Group / Jardine Group / 甜品連鎖 / 火鍋連鎖 / 中餐連鎖 / 咖啡品牌 / 鮮食零售 / 配送密集品牌

Evaluation panel table must also include these exact rows or compact row cards:
- 訂單 / 外賣平台 / 同步中 / 核對渠道訂單與 OMS 訂單
- 門店 / POS / KDS / 待映射 / 確認門店接單狀態
- 支付 / 平台回傳 / 異常回傳 / 標記退款未處理與取消未同步
- 配送 / 第三方配送 / 同步中 / 回傳配送狀態到 OMS / CDBI

Final demo summary fields must use these exact labels and values:
- 「把目前選擇的問題、系統、案例與資源帶到產品演示。」
- 「建議演示模組」
- 「推薦資源」
- 「需要處理的問題：漏單與接單超時」
- 「已使用系統：外賣平台、自建點餐、POS / KDS」
- 「建議演示模組：OMS、AMS / Connector、CDBI」
- 「推薦資源：接入準備清單、營運 FAQ、案例資源」

Preserve compliance:
- No visible Candao.
- No English copyright line.
- No Finance Center.
- No Material Symbols ligature text.
- No 0.01%.
- No fake legal record, placeholder, internal notes, Figma/Stitch/process labels, or production QA wording.
