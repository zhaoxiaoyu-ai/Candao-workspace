# T24 - Simplify Tappo App Booking Date Picker To Single Frame

## Status

done

## Goal

根據用戶反饋，收斂 T23 產生的多年月狀態畫板，將訂座日期選擇彈窗回到單頁設計表達：一個頁面展示完整日曆、年月切換入口、狀態圖例與提示，不再為每個年月鋪開多個狀態畫板。

## Scope

- Figma file: `Tappo App`
- File key: `anMsqgZYi8ZqmJXZah78KI`
- Page: `UI`
- Main frame: `3320:70929` - `Tappo App / 訂座 / 05 選擇日期`

## Delivery

- Removed 8 auxiliary `T23 / date picker prototype / YYYY-MM` frames from the canvas.
- Kept only the main `3320:70929` date picker state.
- Cleared prototype reactions from the four month/year controls in the main date picker.
- Preserved the T22 full-calendar single-page visual:
  - Large dialog.
  - 7-column calendar.
  - Larger date cells.
  - Month/year controls.
  - State legend.
  - Tip copy.

## Rationale

The previous T23 multi-state prototype was technically useful for click-through behavior, but it over-expanded the canvas and made the design harder to review. For this stage, a single-frame representation communicates the intended behavior more clearly.
