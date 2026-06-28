# T11 Figma 執行與驗收 Runbook

目前狀態：腳本已準備好，但尚未在 Figma 執行。原因是目前會話的 Figma file-level 操作仍失敗或被取消。

## 目標文件

- Figma file：`Tappo App`
- file key：`anMsqgZYi8ZqmJXZah78KI`
- page：`UI`
- 已知訂座 frame IDs：
  - `3318:68380`
  - `3320:68138`
  - `3320:68826`
  - `3320:69975`
  - `3320:70929`
  - `3321:69714`
  - `3323:70108`
  - `3324:70502`

## 執行前 Gate

1. 先跑 `whoami`。
2. 只有在 `whoami` 成功，且 `use_figma` 不再 timeout / cancelled 時才執行腳本。
3. 腳本只允許操作上方 8 個訂座 frame；如果找不到 frame，腳本會 throw 並停止。

## Step 1：先執行 Read-only Audit

使用 Figma MCP `use_figma`，目標 file key 為 `anMsqgZYi8ZqmJXZah78KI`，script 使用：

`projects/design-agent/tasks/T11/output/t11-use-figma-audit-script.js`

這一步只讀取，不改動 Figma。用來確認：

- 8 個訂座 frame 是否存在。
- 是否仍有 `#9A6A00`。
- Button / Input / Select / Switch / Radio / Tabs / sidebar / topbar instance 數量。
- Text fill、stroke、fill 的 token binding 數量。
- 側邊欄、頂欄、狀態文字是否與訂座原型一致。
- 是否仍有 `今日訂座總覽`。

## Step 2：再執行修正腳本

只有在 audit 能成功返回後，再執行修正腳本：

`projects/design-agent/tasks/T11/output/t11-use-figma-fix-script.js`

預期回傳：

- `success: true`
- `bookingFrameCount: 8`
- `bookingTokens.primary = #F6D365`
- `bookingTokens.gradientStart = #F6D365`
- `bookingTokens.gradientEnd = #FDCB85`
- `audit[].oldDarkYellow = 0`

## Step 3：修正後再次 Audit

重新執行 `t11-use-figma-audit-script.js`。

修正後預期：

- `totals.oldDarkYellowNodes = 0`
- `totals.hasRightSummaryFrames = 0`
- `totals.radioInstances > 0`
- `totals.tabsInstances = 0`，除非 Figma 中 canonical 狀態切換組件本身就是 Tabs 且產品接受。
- 各 frame 的 `missingSidebarLabels` 不應包含 `訂座`、`經營`、`設置`、`通知`、`WiFi`、`退出`。
- 各 frame 的 `wrongTopbarLabelsPresent` 應為空。

## 驗收重點

視覺與內容：

- 不存在右側 `今日訂座總覽` 板塊。
- 列表為單列全頁 layout，參考訂單頁列表結構。
- 側邊欄文字為 `訂座`、`經營`、`設置`、`通知`、`WiFi`、`退出`。
- 頂欄文字為 `中環旗艦店`、日期、`功能`。
- POS 專用內容不應出現在訂座頂欄：`切換應用`、`Breakfast`、`Search table`、`Temporary addition`、`外賣點餐`、`指引`。

組件與 token：

- Button、Input、Select、Switch、Radio 仍應是 Tappo App 組件實例。
- 狀態切換使用 Radio-group / Radio 組件，不回退成 Tabs。
- Text fill 綁定 text primary / text secondary / danger token。
- 一般 border 綁定 neutral border / separator token。
- 訂座黃只出現在 active、selected、primary booking emphasis。
- `#9A6A00` 不應再出現。

顏色策略：

- 恢復主題黃 `#F6D365` 與漸變 `#F6D365 -> #FDCB85`。
- 不再用深黃解決白字對比。
- 因 `#F6D365 + 白字` 對比不足，腳本保留原黃並使用系統文字 token；若產品仍要求白字，需要設計系統提供可達標的深色按鈕狀態或正式接受對比風險。

## 失敗處理

若 `use_figma` 回傳 timeout / cancelled：

- 不要反覆改腳本內容；目前阻塞點在 Figma file-level access。
- 保留 `figma-file-operation-blocked-2026-06-23.md` 作為阻塞記錄。
- 等工具可用後直接重跑本 runbook。
