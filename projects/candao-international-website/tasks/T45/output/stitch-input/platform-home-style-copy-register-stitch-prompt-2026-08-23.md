Generate a Traditional Chinese first international SaaS website screen.

COPY-FIRST EXECUTION MODE:
The main success criterion is exact visible copy coverage. Use a compact enterprise page, not a marketing summary. Every COPY REGISTER line below must appear as visible body text exactly as written after the "CR-000:" label, with no rewriting, deletion, translation, shortening, or replacement. The CR labels themselves do not need to appear; the text after each label must appear.

Use a two-layer layout:
1. Designed page layer: header, hero, and content modules matching the page's low-fidelity order and the approved homepage style.
2. Visible content register layer: a polished dense "operation index" / "content ledger" section integrated near the bottom of the page. Use 3-4 compact columns, small but readable text, and keep every COPY REGISTER string as a separate visible row. This layer exists to guarantee 100% content coverage.

Language:
Traditional Chinese only for body content.
Visible brand name must be 餐道. Do not display Candao, CANDAO, candao, or Can Dao anywhere.
Include language switch exactly: 繁中 / EN.

Design system:
Use the existing project design system assets and homepage direction. Do not redefine colors, fonts, roundness, spacing tokens, or theme values in this prompt. Match the already approved homepage direction: cinematic restaurant operations signal, enterprise product workbench, operational topology or bento modules, clear sales CTA, dark hero or dark system section, white business sections, restrained dense SaaS information hierarchy.

Screen title:
T45 / 平台 - 餐道國際 / Desktop TC / 首頁風格 / COPY REGISTER 100%

Platform:
Web, Desktop 1440-first.

Page goal:
说明产品如何承接业务对象、状态和操作

Primary role:
总部运营 / IT / 配送 / 财务

Story role:
说明餐道产品如何承接业务对象、状态、操作和下一步。

Page structure:
1. Header: logo text 餐道, full navigation 首頁 / 解決方案 / 平台 / 整合能力 / 客戶案例 / 資源 / 關於餐道 / 預約演示, language switch 繁中 / EN, primary demo CTA.
2. Hero: page-specific headline and subtext from the COPY REGISTER. Include page-specific dashboard/topology/form/case/resource/company visual blocks according to the module placements.
3. Primary content: preserve the low-fidelity module order. Translate visual media placeholders into polished static product diagrams, dense rails, bento modules, data tables, timelines, or form panels. Do not invent screenshots, logos, certificates, partner statuses, dates, metrics, SLA, or news.
4. Content register: compact visible copy ledger containing every COPY REGISTER string exactly.
5. Footer: dark footer with full navigation and product terms; visible brand is 餐道.

Module placements:
1. Hero: 右侧状态面板展示 OMS 订单队列、Menu Center 售罄、DMS 派单。
   Required elements: product_stage, status_rows, dual_cta
   Fallback: 使用低保真状态面板，不重画真实产品 UI。
   Forbidden: fake_product_ui, rewrite_product_names
2. 產品能力地圖: 左侧能力 rail；右侧产品画面、标题、说明、业务对象、状态 / 操作、对应产品和 CTA。
   Required elements: six_item_rail, product_media_slot, business_object_list, status_action_list, product_mapping, demo_cta
   Fallback: 保留产品画面区域与业务对象列表。
   Forbidden: remove_status_and_exception, generic_feature_grid
3. 產品演示入口: 卡片或 Carousel 至少包含 OMS、Menu / Store、DMS / iDMS、CDBI / 財務對賬。
   Required elements: video_or_screenshot_cards
   Fallback: 保留演示入口卡，不生成视频封面或假产品影片。
   Forbidden: fake_video_thumbnail, drop_cdbi_finance
4. CTA: 底部三按钮分流到 Demo、Integrations、Customers。
   Required elements: demo_cta, integration_cta, customer_cta
   Fallback: 无
   Forbidden: single_vague_cta

COPY REGISTER:
CR-001: 平台｜餐道
CR-002: 首頁
CR-003: 解決方案
CR-004: 平台
CR-005: 整合能力
CR-006: 客戶案例
CR-007: 資源
CR-008: 關於餐道
CR-009: 繁中 / EN
CR-010: 預約演示
CR-011: 平台能力
CR-012: 看 OMS、Menu Center、DMS / iDMS、CDBI 和 Connector 如何支撐每日營運
CR-013: 了解餐道產品如何工作：訂單如何進入 OMS，門店如何處理接單與售罄，配送如何派單與回傳狀態，報表與對賬如何追蹤差異。
CR-014: 預約產品演示
CR-015: 查看整合能力
CR-016: OMS 訂單隊列
CR-017: 待接單
CR-018: Menu Center 售罄
CR-019: 同步
CR-020: DMS 派單
CR-021: 配送中
CR-022: 財務對賬
CR-023: 差異追蹤
CR-024: CDBI 看板
CR-025: 分析
CR-026: AMS / Connector
CR-027: 接入
CR-028: OMS
CR-029: 訂單隊列切換
CR-030: DMS
CR-031: 配送狀態推進
CR-032: CDBI
CR-033: 對賬差異回流
CR-034: 產品能力地圖
CR-035: 從業務對象、狀態和操作理解餐道平台
CR-036: 多渠道訂單
CR-037: 餐單與門店
CR-038: 會員與自有點餐
CR-039: 配送履約
CR-040: 數據與對賬
CR-041: 平台工作台示意
CR-042: 統一營運
CR-043: 平台工作台
CR-044: 訂單｜OMS 匯入、分派、取消、退款
CR-045: 門店｜營業狀態、菜單版本、缺貨提示
CR-046: 配送｜DMS / iDMS 狀態、第三方協同
CR-047: 數據｜CDBI 報表、財務對賬
CR-048: 多渠道訂單進入 OMS 後台
CR-049: 外賣平台、自有 H5 / Web / APP / QR 和 Call Center 訂單進入 OMS，門店可按渠道、訂單狀態、配送狀態和異常類型處理。
CR-050: 業務對象：訂單、渠道、門店、訂單狀態、配送狀態、異常類型。
CR-051: 狀態 / 操作：待接單、製作中、配送中、取消、退款、超時提醒。
CR-052: 對應產品：OMS、COMS、SOMS、Order Processing Center。
CR-053: 預約訂單場景演示
CR-054: 產品演示入口
CR-055: 按工作流查看不同模組的日常使用方式
CR-056: 你可以在 OMS、Menu / Store、DMS / iDMS、CDBI / 財務對賬之間選擇演示重點，快速看到訂單、餐單、配送和對賬在餐道內如何被處理。
CR-057: 訂單隊列與異常處理
CR-058: 訂單整合、門店處理、異常追蹤和客服協同。
CR-059: 產品視頻
CR-060: 接單 / 退款 / 缺貨
CR-061: Menu Center / Store
CR-062: 餐單版本與門店狀態
CR-063: 菜單、價格、營業時間、門店資料和品牌規則同步。
CR-064: 菜單版本 / 門店狀態
CR-065: DMS / iDMS
CR-066: 派單、取餐與異常
CR-067: 配送任務、騎手或車隊資源、第三方配送協同。
CR-068: 派單 / 取餐 / 異常
CR-069: CDBI / 財務對賬
CR-070: 渠道報表與對賬差異
CR-071: 營運數據、渠道分析、對賬和營收視角。
CR-072: 渠道報表 / 對賬
CR-073: 下一步
CR-074: 看完產品能力後，評估接入方式或預約場景演示
CR-075: 查看客戶案例
CR-076: 餐飲與零售 O2O 營運中樞｜SaaS、iDMS、AMS / Connector

Hard failures:
- Missing any COPY REGISTER string from visible body text.
- Visible Candao / CANDAO / candao / Can Dao in Traditional Chinese page body, header, footer, or brand area.
- Visible Material Symbols ligature text such as arrow_forward.
- Importing or displaying Material Symbols.
- Fake ICP filing, fake product screenshots, fake customer logos, fake certification images, fake video thumbnails, fake partner status, unsupported SLA, unconfirmed metrics, or generic SaaS claims.
- Changing protected terms: iDMS, SaaS, AMS / Connector, OMS, DMS, CDBI, 財務對賬, Menu Center, Data Asset.
