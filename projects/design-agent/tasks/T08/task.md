# T08 - Tappo App 訂座模塊返工修正

## Status

done

## Goal

修正 T07 訂座模塊在 Figma 中未充分使用 Tappo App 元件、design tokens、既有頂欄/側邊欄/佈局、表單頁與彈窗樣式的問題。

## Source Of Truth

- Tappo App Figma target: `anMsqgZYi8ZqmJXZah78KI`
- Existing reference page: `訂單-全部訂單` (`1925:52353`, `0:62814`)
- Existing T07 section: `T07 / Tappo App / 訂座模塊` (`3296:68872`)
- Prototype: `E:\Downloads\Tappo0615\prototypes\pad\booking.html`

## Fix Requirements

- 使用 Tappo App 的真實元件與 design tokens，不再以手工 frame 模擬核心 controls。
- 頂欄、側邊欄、整體佈局、內容樣式需參考或復用原有頁面，尤其訂單頁。
- 新增預約必須是表單樣式，參考同系統其他表單頁/表單控制模式。
- 彈窗樣式需統一，不能使用孤立自造 modal。
- 同一系統內的風格、佈局、交互、元件保持一致。
- 不修改或刪除訂座以外的既有頁面。

## Planned Output

- 重建 T07 訂座 frame，保留在訂座 section 中。
- 以真實 `侧边栏` instance、`Component 6` 頂欄、Tappo Button/Input/Select/Tabs/Switch component instances 與 POS token 為基礎。
- 建立列表、待確認、服務暫停、新增預約表單、日期選擇、拒絕/取消/爽約 modal 狀態。
- 重接 prototype interactions 並輸出 audit notes。
