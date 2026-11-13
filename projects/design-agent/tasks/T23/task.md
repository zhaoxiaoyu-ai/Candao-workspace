# T23 - Tappo App Booking Date Picker Month/Year Prototype

## Status

done - superseded by T24

## Goal

延續 T22，為 `Tappo App` 訂座日期選擇彈窗補上可點擊的年月切換原型狀態，讓 `上一年`、`上月`、`下月`、`下一年` 不只是視覺控件，而是能導航到對應年月畫板。

## Scope

- Figma file: `Tappo App`
- File key: `anMsqgZYi8ZqmJXZah78KI`
- Page: `UI`
- Main state frame: `3320:70929` - `Tappo App / 訂座 / 05 選擇日期`
- Base dialog: `3692:69203` - `T22 / date picker dialog / full calendar`

## Requirements

- Continue from the T22 date picker.
- Add real Figma prototype destinations for month/year switching.
- Keep the original `2026 年 6 月` frame as the main state.
- Do not modify booking-unrelated pages.

## Delivery

- Created 8 auxiliary prototype state frames:
  - `T23 / date picker prototype / 2025-05`
  - `T23 / date picker prototype / 2025-06`
  - `T23 / date picker prototype / 2025-07`
  - `T23 / date picker prototype / 2026-05`
  - `T23 / date picker prototype / 2026-07`
  - `T23 / date picker prototype / 2027-05`
  - `T23 / date picker prototype / 2027-06`
  - `T23 / date picker prototype / 2027-07`
- Reused the original `3320:70929` frame as `2026-06`.
- Rebuilt each auxiliary state's calendar grid to match its actual month layout.
- Preserved the large 7-column calendar form.
- Added Figma prototype reactions to month/year controls across the available 3 x 3 state matrix.
- Disabled edge controls where the bounded prototype has no destination.

## Notes

- Superseded by T24 after user feedback. The auxiliary state frames created in T23 were removed from Figma, and the active design now uses one single reviewable frame.
- The interactive range is intentionally bounded to `2025-05` through `2027-07`, centered on the original `2026-06` state.
- Months that require 6 calendar rows use slightly shorter but still large date cells to avoid footer overlap.
