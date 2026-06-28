# T11 原型內容對照

整理日期：2026-06-23

參考來源：

- `E:\Downloads\Tappo0615\prototypes\pad\booking.html`
- `E:\Downloads\Tappo0615\prototypes\pad\pos.html`
- `E:\Downloads\Tappo0615\prototypes\pad\assets\pad.js`
- `E:\Downloads\Tappo0615\prototypes\pad\assets\pad.css`

## 訂座 Shell

訂座側邊欄內容：

- Logo / app switch：只有 icon 入口。
- 主導航：
  - `訂座` active
  - `經營`
  - `設置`
- 底部導航：
  - `通知`
  - `WiFi`
  - `退出`

訂座頂欄內容：

- 左側：空白 spacer；切換應用入口在側邊欄 Logo。
- 中間：
  - `中環旗艦店`
  - 日期，格式 `YYYY-MM-DD`
- 右側：
  - `功能` outline button

注意：`pad/pos.html` 的頂欄包含 `切換應用`、`Breakfast`、桌號搜尋、`Temporary addition`、`外賣點餐`、`指引`。訂座頁不應直接套用 POS 頂欄內容，只能復用同一套頂欄樣式與組件。

## 訂座列表

全頁保留單列列表，不需要右側 `今日訂座總覽` 板塊。

主要控制：

- `訂座服務` toggle。
- `+ 新增預約` primary button。
- Provider strip：
  - 若 active provider 是 Minitable，右側顯示 `前往訂座入口`。
  - 其他情況隱藏。
- Filter bar：
  - 日期 input，預設 `2026-06-10`。
  - 狀態切換使用 Radio-group 組件，不使用 Tabs。
  - 狀態：
    - `全部 (6)`
    - `待確認 (2)`
    - `已確認 (1)`
    - `已到店 (1)`
    - `已取消 (1)`
    - `已爽約 (1)`
  - 搜尋 placeholder：`搜尋暱稱/手機號/郵箱...`
- 列表容器：`ordersList`。
- 分頁：
  - `共 28 條預約`
  - `<`、`1`、`2`、`3`、`>`

## 訂座卡片資料

原型資料：

- `陳大明`，`daimingo@email.com`，`+852 6123 1234`，`2026-06-10`，`晚餐 17:30-21:00`，`3~4人`，`大廳`，`靠窗位置`，渠道 `Tappo`，狀態 `待確認`
- `李小華`，`xiaohua@email.com`，`+852 9876 5678`，`2026-06-10`，`午餐 11:00-14:00`，`1~2人`，`包廂A`，渠道 `Minitable`，狀態 `已確認`
- `張美玲`，`meiling@email.com`，`+852 2345 9012`，`2026-06-09`，`晚餐 17:30-21:00`，`4~6人`，`包廂B`，渠道 `Tappo`，狀態 `已到店`
- `王先生`，`wang@email.com`，`+852 6789 3456`，`2026-06-09`，`午餐 11:00-14:00`，`3~4人`，`戶外座位`，渠道 `Minitable`，狀態 `已取消`
- `劉小姐`，`liu@email.com`，`+852 9123 7890`，`2026-06-08`，`晚餐 17:30-21:00`，`7~9人`，渠道 `Tappo`，狀態 `已爽約`
- `趙生`，`chiu@email.com`，`+852 6543 2468`，`2026-06-10`，`晚餐 17:30-21:00`，`1~2人`，`大廳`，渠道 `Tappo`，狀態 `待確認`

支持操作：

- 待確認：`接受`、`拒絕`、`取消`
- 已確認：`到店`、`爽約`、`取消`
- 已到店 / 已取消 / 已爽約：只呈現狀態

## 新增預約表單

新增預約是表單頁/表單樣式，不應做成不一致的自定義互動卡。

標題：`新增預約`

欄位：

- `暱稱 *`
- `郵箱`
- `手機`
- `預約日期 *`
- `預約時段 *`
- `人數 *`
- `備註資訊`

操作：

- `取消`
- `確認預約`

## 彈窗與狀態

需要與項目其他表單頁/彈窗保持同一套樣式：

- 日期選擇：日曆彈層。
- 拒絕原因：統一 Dialog shell。
- 取消預約：統一 Dialog shell。
- 標記爽約：統一 Dialog shell。

## 主題與 Token 修正

訂座主題色：

- 單色：`#F6D365`
- 漸變：`#F6D365` 到 `#FDCB85`

T11 不應延續 T09 的深黃色 `#9A6A00` override。該深色是為了讓白字達到約 `4.73:1` 對比度，但使用者已明確要求恢復原本黃色。

實作策略：

- 保留原本黃色 `#F6D365`。
- 一般邊框使用 Tappo/POS neutral border 或 separator token，不使用訂座黃色。
- 文字使用 Tappo/POS text primary / text secondary / danger token。
- 訂座黃色只用於 active、selected、primary booking emphasis。
- `#F6D365` 搭配白字約 `1.46:1`，不符合一般文字可讀性標準；若堅持原黃，按鈕文字應優先使用組件庫核准的文字 token，而不是再把主色改深。
