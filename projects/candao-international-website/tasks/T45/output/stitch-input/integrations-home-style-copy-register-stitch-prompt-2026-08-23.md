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
T45 / 整合能力 - 餐道國際 / Desktop TC / 首頁風格 / COPY REGISTER 100%

Platform:
Web, Desktop 1440-first.

Page goal:
验证系统接入、资料对象和状态回传

Primary role:
IT / 总部运营

Story role:
让 IT 和运营团队验证接入对象、资料流和异常边界。

Page structure:
1. Header: logo text 餐道, full navigation 首頁 / 解決方案 / 平台 / 整合能力 / 客戶案例 / 資源 / 關於餐道 / 預約演示, language switch 繁中 / EN, primary demo CTA.
2. Hero: page-specific headline and subtext from the COPY REGISTER. Include page-specific dashboard/topology/form/case/resource/company visual blocks according to the module placements.
3. Primary content: preserve the low-fidelity module order. Translate visual media placeholders into polished static product diagrams, dense rails, bento modules, data tables, timelines, or form panels. Do not invent screenshots, logos, certificates, partner statuses, dates, metrics, SLA, or news.
4. Content register: compact visible copy ledger containing every COPY REGISTER string exactly.
5. Footer: dark footer with full navigation and product terms; visible brand is 餐道.

Module placements:
1. Hero: 右侧 Connector 网络图连接外卖平台、自建入口、POS / KDS、CRM、支付 / ERP、配送 API。
   Required elements: connector_network, dual_cta
   Fallback: 使用系统节点拓扑图。
   Forbidden: all_systems_supported_claim, unconfirmed_partner_status
2. 接入對象: 左侧系统类型 rail；右侧显示资料对象、适合情境和接入评估按钮。
   Required elements: six_item_rail, data_object_list, suitable_context, assessment_cta
   Fallback: 使用文字和标签组。
   Forbidden: seamless_integration_claim, invent_api_status
3. 資料流向: 以三段式表达外部系统 -> AMS / Connector -> OMS / Data Asset / 財務對賬 / DMS。
   Required elements: external_system_node, connector_node, destination_nodes
   Fallback: 使用低保真流向图。
   Forbidden: fake_latency, fake_success_rate

COPY REGISTER:
CR-001: 整合能力｜餐道
CR-002: 首頁
CR-003: 解決方案
CR-004: 平台
CR-005: 整合能力
CR-006: 客戶案例
CR-007: 資源
CR-008: 關於餐道
CR-009: 繁中 / EN
CR-010: 預約演示
CR-011: 系統接入
CR-012: 把外賣平台、POS / KDS、CRM、支付、ERP 與配送資料接回營運鏈路
CR-013: IT 與營運團隊可以了解餐道 Connector 如何承接不同系統類型、資料對象、狀態回傳與異常處理，讓外部渠道和門店系統回到 OMS、Data Asset、財務對賬與配送流程。
CR-014: 預約技術演示
CR-015: 查看平台能力
CR-016: 外部系統
CR-017: 外賣平台 / POS / ERP / 支付 / 會員 / 配送
CR-018: AMS / Connector
CR-019: 接口管理、資料校驗、同步監控、異常回報
CR-020: 餐道平台
CR-021: OMS、Menu Center、DMS / iDMS、財務對賬、CDBI
CR-022: POS / KDS
CR-023: 支付 / ERP
CR-024: 配送 API
CR-025: OMS / CDBI
CR-026: 接入對象
CR-027: 按系統類型了解接入範圍、資料流和回傳狀態
CR-028: 外賣平台
CR-029: 自建點餐入口
CR-030: CRM / 會員
CR-031: 配送與 API
CR-032: 外賣平台訂單進入 OMS
CR-033: 訂單數據進入 Connector 後，需要標準化訂單、餐單、用戶和基礎資料，再回到 OMS、Data Asset 和財務對賬。
CR-034: 資料對象：餐單、訂單、用戶、基礎資料。
CR-035: 適合情境：需要把多平台訂單、餐單更新、用戶資料和對賬差異接回餐道流程。
CR-036: 訂單
CR-037: 菜單
CR-038: 門店
CR-039: 庫存
CR-040: 會員
CR-041: 支付
CR-042: 配送
CR-043: 對賬
CR-044: 提交接入評估
CR-045: 資料流向
CR-046: 接入不是單點開接口，而是讓資料在營運鏈路中可校驗、可追蹤。
CR-047: 本頁以資料對象、同步方向和異常回報位置呈現接入邊界，後續可替換為真實產品截圖或動效。
CR-048: 來源
CR-049: 平台 / POS / ERP
CR-050: 校驗
CR-051: 使用
CR-052: OMS / 財務對賬 / CDBI
CR-053: 資料來源
CR-054: 平台 / POS / ERP訂單、菜單、門店、會員與交易資料進入接口層。
CR-055: 校驗同步
CR-056: AMS / Connector映射字段、監控同步狀態，將異常回報給對應角色。
CR-057: 營運使用
CR-058: OMS / 財務對賬 / CDBI 支撐履約、對賬、報表與跨系統決策。
CR-059: 餐飲與零售 O2O 營運中樞｜SaaS、iDMS、AMS / Connector

Hard failures:
- Missing any COPY REGISTER string from visible body text.
- Visible Candao / CANDAO / candao / Can Dao in Traditional Chinese page body, header, footer, or brand area.
- Visible Material Symbols ligature text such as arrow_forward.
- Importing or displaying Material Symbols.
- Fake ICP filing, fake product screenshots, fake customer logos, fake certification images, fake video thumbnails, fake partner status, unsupported SLA, unconfirmed metrics, or generic SaaS claims.
- Changing protected terms: iDMS, SaaS, AMS / Connector, OMS, DMS, CDBI, 財務對賬, Menu Center, Data Asset.
