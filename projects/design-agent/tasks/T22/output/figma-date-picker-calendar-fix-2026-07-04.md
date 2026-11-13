# T22 Figma Date Picker Calendar Fix - 2026-07-04

## Summary

Completed the booking date picker dialog update in `Tappo App` (`anMsqgZYi8ZqmJXZah78KI`) on page `UI`.

Modified frame:

- `3320:70929` - `Tappo App / 訂座 / 05 選擇日期`

Reference:

- User-provided node `3687:72213`
- Popup node `3687:72675`

## What Changed

- Rebuilt the visible dialog as `T22 / date picker dialog / full calendar`.
- Set the dialog to `1280 x 924`, centered at `x=320`, `y=138`.
- Hid the previous smaller dialog `3330:69947` without deleting it.
- Added year/month controls:
  - `上一年`
  - `上月`
  - `下月`
  - `下一年`
- Added current month display: `2026 年 6 月`.
- Added a full calendar layout with weekday headers and 5 rows of 7 date cells.
- Increased each date cell to approximately `163 x 92`.
- Added state legend and tip copy.
- Added all visible states:
  - `已選`
  - `可訂`
  - `餘 5`
  - `已滿`
  - `休息 / 不營業`
  - `非本月`
- Fixed footer actions to visible right-aligned buttons:
  - `返回`
  - `確認日期`

## Validation

Final read-only audit:

- Dialog visible: yes
- Old dialog hidden: yes
- Calendar rows: `5`
- Cells per row: `7, 7, 7, 7, 7`
- Total date cells: `35`
- Required texts found:
  - `選擇預約日期`
  - `2026 年 6 月`
  - `提示：`
  - `可訂`
  - `餘 5`
  - `已滿`
  - `休息`
  - `非本月`
  - `返回`
  - `確認日期`

Visual QA screenshot:

- `t22-date-picker-final.png`

## Follow-Up

The year/month switch controls are present visually. If this date picker needs clickable Figma prototype behavior, the next pass should add separate month/year state frames and wire the four controls to those destinations.
