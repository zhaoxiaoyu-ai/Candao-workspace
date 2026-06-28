# T07 Prototype Notes

## 原型讀取

- 已透過 `tappo-prototypes-mcp` 讀取 `pad/booking.html`。
- MCP 提供工具：`list_surfaces`、`list_pages`、`search_pages`、`get_page_html`。
- `pad/booking.html` 共 264 行，關聯 `pad/assets/pad.css` 與 `pad/assets/pad.js`。
- PowerShell 直接讀 HTML 會因終端編碼出現亂碼；中文內容以 MCP 回傳與 UTF-8 讀取 CSS/JS 為準。

## 原型主要內容

- 側邊欄：訂座、經營、設置，以及通知、WiFi、退出。
- 頂部列：中環旗艦店、日期、功能按鈕。
- 訂座主頁：訂座服務開關、新增預約按鈕、供應商入口、日期篩選、狀態篩選、搜尋、預約列表、分頁。
- 狀態篩選：全部、待確認、已確認、已到店、已取消、已爽約。
- 預約資料：
  - 陳大明，Tappo，待確認，晚餐 17:30-21:00，3~4人，大廳，靠窗位置。
  - 李小華，Minitable，已確認，午餐 11:00-14:00，1~2人，包廂A。
  - 張美玲，Tappo，已到店，晚餐 17:30-21:00，4~6人，包廂B。
  - 王先生，Minitable，已取消，午餐 11:00-14:00，3~4人，戶外座位。
  - 劉小姐，Tappo，已爽約，晚餐 17:30-21:00，7~9人，大廳。
  - 趙生，Tappo，待確認，晚餐 17:30-21:00，1~2人，大廳。

## 原型交互

- `toggleBookingService()`：切換訂座服務開關；關閉時顯示「訂座服務已暫停」空狀態。
- `switchStatusTab(status)`：切換狀態 tab 並重新過濾列表。
- `filterOrders()`：按日期、狀態、精確搜尋暱稱/郵箱/手機。
- `openAddBookingModal()`：開啟新增預約；若未啟用供應商會提示先至 MOS 開通。
- `submitBooking()`：校驗暱稱、郵箱/手機二選一、日期、時段、人數；成功後新增待確認預約。
- `openBookingCalendarModal()`：打開日曆；日期狀態包含可約、餘 5、已滿、不營業。
- `acceptBooking(id)`：待確認改為已確認。
- `openRejectModal(id)` / `confirmReject()`：拒絕原因，可將預約改為已取消。
- `markArrived(id)`：已確認改為已到店。
- `openNoshowModal(id)` / `confirmNoshow()`：已確認改為已爽約。
- `openCancelModal(id)` / `confirmCancel()`：待確認或已確認改為已取消。

## Figma 已確認可復用資源

- 目標檔頁面：`UI`（`0:1`）。
- 已訂閱 library：`Tappo App`。
- Tappo App 元件：
  - `Button` component set，key `cc9225b3d1f63918e0daf4479f1cb4cc2e458f92`。
  - `Input` component set，key `af0fae0ffbbf23f35f51e0aaf2518a8db64826d2`。
  - `Select` component set，key `3779995b6b7f1b60e9fba56daeab5f5d512ced4e`。
  - `Tabs` component set，key `ab4b081120f57724e6dfa1cc9620f8bd1394d483`。
  - `Switch` component set，key `35093afcdf9f53de1a8a885d8373d08d3d716e63`。
  - `侧边栏` component，key `316bc884d4afa75f057e3ee71c3c471cdb1bfb4a`。
- 元件文字使用 `OPPO Sans 4.0`；Figma MCP 實際寫入時無法載入該字體，因此新增的手工彈窗/疊層文字改用 `Inter Regular`，已保留可匯入元件的原始樣式。
- 已存在 Tappo App 變數：`POS color/primary`、`POS color/white`、`POS color/success`、`POS color/warning`、`POS color/error`、文字透明度等。

## 最終交付/注意

- Figma MCP 一度出現 `https://mcp.figma.com/mcp` HTTP transport failure，後續改用小批次寫入並完成。
- `Card` 搜尋曾逾時，後續改從頁內既有畫面、auto-layout 手工容器與元件實例復用。
- 最終 Figma section：`T07 / Tappo App / 訂座模塊`（`3296:68872`）。
- 最終建立 8 個訂座 frame，25 個 prototype reactions，所有主要 frame 均為 `HORIZONTAL` auto layout。
- 詳細交付記錄見 `figma-delivery.md`。
