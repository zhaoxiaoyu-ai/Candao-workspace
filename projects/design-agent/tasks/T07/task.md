# T07 - Tappo App 訂座模塊 Figma 搭建

## Status

done

## Goal

在 Figma 目標檔 `Tappo App`（file key `anMsqgZYi8ZqmJXZah78KI`）中，按 Tappo App 設計規範與既有設計元件，為 Pad 訂座模塊搭建可操作的頁面與互動狀態。

## Source Of Truth

- 線上頁：`https://tappophone.netlify.app/pad/booking.html`
- 本地原型：`E:\Downloads\Tappo0615`
- 原型 MCP：`E:\Downloads\Tappo0615\mcp\tappo-prototypes-mcp`
- 詳細原型頁：`E:\Downloads\Tappo0615\prototypes\pad\booking.html`
- 關聯資產：`E:\Downloads\Tappo0615\prototypes\pad\assets\pad.css`、`pad.js`

## Hard Rules

- 不修改、不刪除訂座以外的其他 Figma 原有頁面或畫面。
- 組件與 design tokens 盡量直接復用 Tappo App 既有元件與 token。
- 訂座模塊主題色使用單色 `#F6D365`，漸變 `#F6D365` -> `#FDCB85`。
- 佈局參考 Tappo App 既有頁面，尤其訂單頁。
- 必須使用 auto layout 搭建新增頁面結構。
- 對外回覆使用繁體中文。

## Planned Figma Output

- 訂座列表主頁。
- 新增預約 modal。
- 選擇預約日期 modal。
- 拒絕原因 modal。
- 取消預約確認 modal。
- 標記爽約確認 modal。
- 服務暫停/空狀態。
- 主要 prototype interactions：狀態篩選、開關服務、新增預約、日曆選擇、接受/拒絕/標記到店/爽約/取消流程。
