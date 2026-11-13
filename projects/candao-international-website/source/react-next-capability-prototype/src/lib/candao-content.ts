import {
  BarChart3,
  BookOpen,
  Building2,
  CircleHelp,
  ClipboardCheck,
  CreditCard,
  FileText,
  Headphones,
  Layers3,
  MapPinned,
  Network,
  Newspaper,
  PanelTop,
  RadioTower,
  Route,
  SearchCheck,
  Settings2,
  ShieldCheck,
  Smartphone,
  Store,
  Truck,
  Users,
  Utensils,
} from "lucide-react"

export const navItems = [
  {
    label: "首頁",
    href: "#home",
    summary: "品牌定位、營運閉環與主要轉化入口",
    links: ["Hero", "營運旅程", "平台能力", "產品流程"],
  },
  {
    label: "解決方案",
    href: "#solutions",
    summary: "按業務場景理解 Candao 如何支援餐飲品牌",
    links: ["餐飲與零售", "連鎖餐飲", "配送營運與履約", "數字點餐與自助服務"],
  },
  {
    label: "平台",
    href: "#platform",
    summary: "以產品能力、工作流、UI 狀態與資料流展示平台",
    links: ["訂單管理", "配送管理", "門店管理", "數據智能"],
  },
  {
    label: "整合能力",
    href: "#integrations",
    summary: "連接外送平台、POS、CRM、物流、支付與內部系統",
    links: ["外送平台", "POS", "CRM / 會員", "API"],
  },
  {
    label: "客戶案例",
    href: "#customers",
    summary: "用匿名場景建立可信度，避免未確認 Logo 與數字",
    links: ["多門店", "配送協同", "點餐渠道", "營運資料"],
  },
  {
    label: "資源",
    href: "#resources",
    summary: "支援中心、常見問題、媒體與案例資源入口",
    links: ["支援中心", "常見問題", "媒體與新聞", "查詢表單"],
  },
  {
    label: "關於 Candao",
    href: "#about",
    summary: "公司定位、服務方式、安全與團隊入口",
    links: ["關於我們", "服務方式", "安全與服務", "加入我們"],
  },
]

export const heroFlow = [
  "接入訂單",
  "同步菜單",
  "分流履約",
  "更新配送",
  "回流數據",
]

export const metrics = [
  { label: "渠道", value: "多入口", tone: "blue" },
  { label: "門店", value: "跨區域", tone: "green" },
  { label: "履約", value: "可追蹤", tone: "amber" },
  { label: "決策", value: "有依據", tone: "rose" },
]

export const journeys = [
  {
    id: "restaurant-retail",
    label: "餐飲與零售",
    icon: Utensils,
    pressure: "前端點餐入口分散，門店履約與會員資料難以連回同一流程。",
    result: "把手機點餐、自助點餐、門店接單與會員資料接回營運平台。",
    recommended: ["自有點餐", "自助點餐", "訂單管理", "門店管理"],
  },
  {
    id: "chains",
    label: "連鎖餐飲",
    icon: Building2,
    pressure: "總部、區域與門店依賴人工追蹤，營運節奏不一致。",
    result: "讓渠道規則、門店狀態、異常處理與總部決策共享同一節奏。",
    recommended: ["訂單管理", "菜單與門店管理", "數據智能", "整合 API"],
  },
  {
    id: "delivery",
    label: "配送營運與履約",
    icon: Truck,
    pressure: "平台外送、自有配送、騎手與第三方物流狀態分散。",
    result: "把履約資源、配送狀態、異常節點與資料回饋串成可追蹤流程。",
    recommended: ["配送管理", "配送調度", "聚合物流管理", "數據智能"],
  },
  {
    id: "digital-ordering",
    label: "數字點餐與自助服務",
    icon: Smartphone,
    pressure: "顧客入口增加，但點餐資料、門店工作流與會員回流未完全打通。",
    result: "讓手機點餐、自助點餐和門店履約同步進入可管理工作流。",
    recommended: ["自有點餐", "自助點餐", "會員資料回流", "菜單同步"],
  },
]

export const capabilities = [
  {
    id: "orders",
    label: "訂單管理",
    icon: ClipboardCheck,
    group: "核心營運",
    summary: "把不同渠道訂單接入同一工作流。",
    flow: ["訂單進入", "規則分流", "門店確認", "異常提示"],
    state: "新訂單已分流至對應門店。",
    accent: "#528dff",
  },
  {
    id: "delivery",
    label: "配送管理",
    icon: Truck,
    group: "履約",
    summary: "追蹤外送、自有配送與履約狀態。",
    flow: ["建立履約任務", "同步狀態", "追蹤異常", "回傳結果"],
    state: "配送狀態已同步至營運看板。",
    accent: "#0f766e",
  },
  {
    id: "store-menu",
    label: "菜單與門店管理",
    icon: Store,
    group: "核心營運",
    summary: "集中管理菜單、價格、上下架與門店狀態。",
    flow: ["更新菜單", "選擇渠道", "同步門店", "確認狀態"],
    state: "菜單與營業狀態已同步。",
    accent: "#b7791f",
  },
  {
    id: "first-party",
    label: "自有點餐",
    icon: Smartphone,
    group: "顧客入口",
    summary: "建立品牌自有交易入口並回流顧客資料。",
    flow: ["顧客下單", "會員識別", "門店接單", "資料回流"],
    state: "自有點餐資料已進入營運流程。",
    accent: "#be3b5b",
  },
  {
    id: "kiosk",
    label: "自助點餐",
    icon: PanelTop,
    group: "顧客入口",
    summary: "將自助點餐、門店接單與後台狀態連接。",
    flow: ["顧客選餐", "門店確認", "排隊狀態", "資料回傳"],
    state: "自助點餐已同步至門店隊列。",
    accent: "#7c3aed",
  },
  {
    id: "dispatch",
    label: "配送調度",
    icon: Route,
    group: "履約",
    summary: "在距離、時效、資源狀態之間做可追蹤調度。",
    flow: ["讀取任務", "比較資源", "建議路徑", "同步騎手"],
    state: "已產生可追蹤的調度建議。",
    accent: "#0d9488",
  },
  {
    id: "logistics",
    label: "聚合物流管理",
    icon: Network,
    group: "履約",
    summary: "把第三方物流、自有配送與平台配送整合成履約池。",
    flow: ["讀取資源池", "比較狀態", "選擇資源", "同步履約"],
    state: "已選擇合適物流資源。",
    accent: "#2563eb",
  },
  {
    id: "intelligence",
    label: "數據智能",
    icon: BarChart3,
    group: "決策",
    summary: "把訂單、門店、配送與顧客資料轉成營運線索。",
    flow: ["資料匯入", "狀態聚合", "異常分析", "決策提示"],
    state: "營運訊號已形成決策線索。",
    accent: "#c2410c",
  },
  {
    id: "api",
    label: "整合 API",
    icon: Settings2,
    group: "連接",
    summary: "連接外部平台、內部系統與資料流程。",
    flow: ["建立連接", "映射欄位", "同步狀態", "監控資料流"],
    state: "系統資料流已建立連接。",
    accent: "#334155",
  },
]

export const integrationGroups = [
  {
    id: "delivery-platforms",
    label: "外送平台",
    icon: RadioTower,
    items: ["平台訂單接入", "渠道狀態同步", "履約資訊回傳"],
  },
  {
    id: "pos",
    label: "POS",
    icon: Store,
    items: ["門店交易", "菜單同步", "營業狀態"],
  },
  {
    id: "crm",
    label: "CRM / 會員",
    icon: Users,
    items: ["會員識別", "顧客資料", "活動回流"],
  },
  {
    id: "payment",
    label: "支付",
    icon: CreditCard,
    items: ["支付狀態", "交易對帳", "退款流程"],
  },
  {
    id: "logistics",
    label: "第三方物流",
    icon: MapPinned,
    items: ["運力池", "時效狀態", "履約回傳"],
  },
  {
    id: "internal",
    label: "內部系統",
    icon: Layers3,
    items: ["資料倉庫", "營運報表", "自動化流程"],
  },
]

export const resourceModules = [
  {
    label: "支援中心",
    icon: Headphones,
    summary: "導入、使用、營運支援與常見操作入口。",
  },
  {
    label: "常見問題",
    icon: CircleHelp,
    summary: "按導入、整合、營運、資料安全整理問題。",
  },
  {
    label: "媒體與新聞",
    icon: Newspaper,
    summary: "品牌資訊、新聞稿、媒體資料與公開內容。",
  },
  {
    label: "案例資源",
    icon: BookOpen,
    summary: "按場景、規模、平台能力探索案例入口。",
  },
  {
    label: "了解更多",
    icon: SearchCheck,
    summary: "尚未確定路徑時，先提交問題並獲得建議入口。",
  },
  {
    label: "查詢表單",
    icon: FileText,
    summary: "銷售、合作、支援與一般查詢分流。",
  },
]

export const customerSignals = [
  {
    label: "多門店品牌",
    challenge: "跨區域門店、渠道與規則管理分散。",
    response: "以統一工作流支援總部、區域與門店協同。",
  },
  {
    label: "配送型營運",
    challenge: "配送狀態和履約資源需要跨系統追蹤。",
    response: "以配送管理、調度和聚合物流形成履約閉環。",
  },
  {
    label: "自有渠道成長",
    challenge: "手機點餐和會員資料沒有完整回流。",
    response: "把前端交易入口與後台營運流程連接。",
  },
]

export const aboutModules = [
  {
    label: "關於我們",
    icon: Building2,
    summary: "專注餐飲營運數字化的 SaaS 團隊。",
  },
  {
    label: "服務方式",
    icon: ClipboardCheck,
    summary: "從需求梳理、導入、培訓到持續優化。",
  },
  {
    label: "安全與服務",
    icon: ShieldCheck,
    summary: "重視系統穩定、權限與資料治理。",
  },
  {
    label: "加入我們",
    icon: Users,
    summary: "一起打造餐飲營運的未來。",
  },
]

export const demoIntents = [
  {
    label: "預約產品演示",
    summary: "適合正在評估 Candao 平台能力的團隊。",
  },
  {
    label: "聯絡銷售",
    summary: "適合討論多門店、整合或配送方案。",
  },
  {
    label: "合作洽詢",
    summary: "適合平台、POS、支付、物流與技術合作方。",
  },
  {
    label: "支援查詢",
    summary: "適合既有客戶或導入中的支援需求。",
  },
]

export const capabilityGroups = [
  "全部",
  "核心營運",
  "顧客入口",
  "履約",
  "決策",
  "連接",
]

