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
T45 / 資源 - 餐道國際 / Desktop TC / 首頁風格 / COPY REGISTER 100%

Platform:
Web, Desktop 1440-first.

Page goal:
降低评估、导入、营运和技术疑问

Primary role:
采购方 / IT / 总部运营 / 支持

Story role:
按评估、导入、日常营运和技术查询降低疑问。

Page structure:
1. Header: logo text 餐道, full navigation 首頁 / 解決方案 / 平台 / 整合能力 / 客戶案例 / 資源 / 關於餐道 / 預約演示, language switch 繁中 / EN, primary demo CTA.
2. Hero: page-specific headline and subtext from the COPY REGISTER. Include page-specific dashboard/topology/form/case/resource/company visual blocks according to the module placements.
3. Primary content: preserve the low-fidelity module order. Translate visual media placeholders into polished static product diagrams, dense rails, bento modules, data tables, timelines, or form panels. Do not invent screenshots, logos, certificates, partner statuses, dates, metrics, SLA, or news.
4. Content register: compact visible copy ledger containing every COPY REGISTER string exactly.
5. Footer: dark footer with full navigation and product terms; visible brand is 餐道.

Module placements:
1. Hero: 右侧资源路径卡显示评估中、导入中、日常营运。
   Required elements: resource_router, stage_cards
   Fallback: 无
   Forbidden: blog_homepage_layout
2. 問題階段: 左 rail 切换阶段；右侧显示当前阶段的 Q&A 与支援或查詢 CTA。
   Required elements: stage_rail, qa_panel, support_cta
   Fallback: 无
   Forbidden: generic_faq_without_next_action
3. 接入準備清單: 用四列看板展示渠道与入口、门店系统、企业资料、AMS / Connector。
   Required elements: system_object_board
   Fallback: 无
   Forbidden: all_systems_supported_claim
4. 營運 FAQ: 以多平台订单、餐单同步、财务对账组织问题。
   Required elements: operation_question_cards
   Fallback: 无
   Forbidden: generic_help_center_copy
5. 案例資源: 用业态入口导向 Customers。
   Required elements: industry_map
   Fallback: 无
   Forbidden: fake_customer_icons
6. 支援中心: 支援查询板必须显示问题类型、相关系统、业务对象、可见异常。
   Required elements: support_ticket_board
   Fallback: 无
   Forbidden: replace_exception_with_system_issue
7. 媒體與公司資料: 资料架显示公司资料、品牌资产、媒体联络。
   Required elements: media_shelf
   Fallback: 无
   Forbidden: invent_news_title_or_date
8. 產品演示分流: 用业态、门店规模、现有系统、主要问题、演示模块组成路由画布。
   Required elements: routing_canvas, demo_cta
   Fallback: 无
   Forbidden: remove_routing_conditions

COPY REGISTER:
CR-001: 資源｜餐道
CR-002: 首頁
CR-003: 解決方案
CR-004: 平台
CR-005: 整合能力
CR-006: 客戶案例
CR-007: 資源
CR-008: 關於餐道
CR-009: 繁中 / EN
CR-010: 預約演示
CR-011: 資源中心
CR-012: 按你的問題，找到餐道導入、接入、案例與支援入口
CR-013: 採購、IT、營運、門店、配送和財務團隊可以在這裡找到接入準備、常見問題、支援查詢、案例資源和產品演示入口，減少評估與導入前的不確定。
CR-014: 售前方案
CR-015: 導入資料
CR-016: 技術對接
CR-017: 品牌案例
CR-018: 資源路徑
CR-019: 評估
CR-020: 確認問題
CR-021: 導入
CR-022: 整理系統
CR-023: 營運
CR-024: 提交支援
CR-025: 01
CR-026: 評估中了解餐道是否適合目前的訂單、門店、配送或對賬問題。
CR-027: 02
CR-028: 導入中整理外賣平台、自有點餐、POS、CRM、ERP、配送和支付資料。
CR-029: 03
CR-030: 日常營運提交接單超時、餐單同步、配送超時或對賬差異問題。
CR-031: 問題階段
CR-032: 用目前所處階段找到下一步
CR-033: 評估中
CR-034: 導入中
CR-035: 日常營運
CR-036: 技術查詢
CR-037: 問答
CR-038: 評估中常見問題
CR-039: Q1
CR-040: 接入前要準備哪些系統類型？可先整理外賣平台、自建入口、POS / KDS、CRM、配送、支付和 ERP。
CR-041: Q2
CR-042: 財務對賬如何比對平台訂單與餐道 OMS 訂單，識別金額、狀態和漏單差異？
CR-043: 提交支援或查詢
CR-044: 資源能力
CR-045: 每一類資源都對應一個獨立能力板塊
CR-046: 接入準備、營運 FAQ、案例資源、支援中心、媒體資料和產品演示分流服務的問題不同，呈現方式也應不同。
CR-047: 接入準備清單
CR-048: 把接入前需要整理的系統對象一次看清
CR-049: 適合 IT 和營運團隊在接入前確認外賣平台、自有入口、POS / KDS、CRM、配送、支付、ERP、API、字段、權限與異常處理。
CR-050: 渠道與入口外賣平台
CR-051: H5 / Web / APP / QR
CR-052: 門店系統POS / KDS
CR-053: 打印 / 後廚單
CR-054: 企業資料CRM / 會員
CR-055: 支付 / ERP
CR-056: AMS / ConnectorAPI
CR-057: 字段
CR-058: 權限
CR-059: 異常回傳
CR-060: 多平台訂單渠道、門店、訂單狀態、配送狀態和異常類型如何在 OMS 內處理？
CR-061: 餐單同步Menu Center 如何處理餐單、庫存、售罄、區域菜單和平台差異？
CR-062: 財務對賬財務對賬如何識別金額差異、狀態差異和漏單？
CR-063: 營運 FAQ
CR-064: 用真實營運問題組織問答與下一步
CR-065: 採購、營運、門店和財務團隊可以直接按問題類型閱讀答案，判斷下一步是看平台能力、提交查詢還是預約演示。
CR-066: 案例資源
CR-067: 按業態找到相似案例與可參考成果
CR-068: Pizza / Fast Food多平台訂單、配送履約、長期服務
CR-069: 餐飲集團多品牌、多門店、COMS 營運數據
CR-070: 甜品連鎖POS 對接、自動打印、漏單降低
CR-071: 火鍋 / 中餐小程序訂單、門店聚合、系統整合
CR-072: 咖啡品牌Menu Center、外賣平台、CDBI 分析
CR-073: 鮮食零售區域餐單、庫存、多平台同步
CR-074: 支援中心
CR-075: 把既有客戶和導入中問題導向正確處理路徑
CR-076: 接入、營運和技術問題需要帶上相關系統、業務對象與異常狀態，方便支援團隊判斷是 OMS、DMS、iDMS、CDBI 還是 AMS / Connector 相關。
CR-077: 支援查詢
CR-078: 待分流
CR-079: 問題類型
CR-080: 接入 / 營運 / 技術
CR-081: 相關系統
CR-082: OMS / DMS / iDMS / CDBI
CR-083: 業務對象
CR-084: 訂單 / 餐單 / 配送 / 對賬
CR-085: 可見異常
CR-086: 接單超時 / 配送超時 / 對賬差異
CR-087: 公司資料公司背景、據點、服務能力
CR-088: 品牌資產Logo、品牌資料、聯絡入口
CR-089: 媒體聯絡新聞、合作與採購查詢
CR-090: 媒體與公司資料
CR-091: 把採購、合作和媒體需要的資料集中呈現
CR-092: 這一板塊支援公司可信、合作溝通和資料索取，因此用資料架與聯絡入口呈現。
CR-093: 產品演示分流
CR-094: 把不確定的問題轉成可安排的演示模組
CR-095: 相似業態案例
CR-096: 演示分流
CR-097: 現有系統
CR-098: POS / KDS
CR-099: 主要問題
CR-100: 漏單
CR-101: 推薦模組
CR-102: OMS
CR-103: 填寫現況
CR-104: 匹配模組
CR-105: 安排演示
CR-106: 業態Pizza / 餐飲集團 / 甜品 / 咖啡 / 鮮食零售
CR-107: 門店規模單店、多門店、跨區域或多品牌營運
CR-108: 現有系統外賣平台、POS / KDS、CRM、ERP、配送
CR-109: 主要問題漏單、重複維護、配送超時、對賬差異
CR-110: 演示模組OMS、DMS、iDMS、CDBI、AMS / Connector
CR-111: 預約產品演示
CR-112: 餐飲與零售 O2O 營運中樞｜SaaS、iDMS、AMS / Connector

Hard failures:
- Missing any COPY REGISTER string from visible body text.
- Visible Candao / CANDAO / candao / Can Dao in Traditional Chinese page body, header, footer, or brand area.
- Visible Material Symbols ligature text such as arrow_forward.
- Importing or displaying Material Symbols.
- Fake ICP filing, fake product screenshots, fake customer logos, fake certification images, fake video thumbnails, fake partner status, unsupported SLA, unconfirmed metrics, or generic SaaS claims.
- Changing protected terms: iDMS, SaaS, AMS / Connector, OMS, DMS, CDBI, 財務對賬, Menu Center, Data Asset.
