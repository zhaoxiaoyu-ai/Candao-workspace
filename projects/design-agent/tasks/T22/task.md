# T22 - Tappo App Booking Date Picker Calendar Dialog

## Status

done

## Goal

完善 `Tappo App` 訂座模塊中 `選擇預約日期` 彈窗內容，按用戶提供的 Figma 原型補齊完整日曆形式、年月切換入口、較大的日期格、日期狀態與提示。

## Scope

- Figma file: `Tappo App`
- File key: `anMsqgZYi8ZqmJXZah78KI`
- Page: `UI`
- Target frame: `3320:70929` - `Tappo App / 訂座 / 05 選擇日期`
- Reference node: `3687:72213` / popup node `3687:72675`

## Requirements

- Follow the provided Figma prototype/reference.
- Date selection area must use calendar form, one row with 7 columns.
- Date cells must be visibly larger and fill the dialog width.
- Add year/month switching controls.
- Include all mentioned date states and user guidance/tips.
- Keep the work scoped to the booking date picker frame.

## Delivery

- Rebuilt the date picker dialog as `T22 / date picker dialog / full calendar`.
- Preserved the booking page background and modal scrim.
- Hid the prior small dialog `3330:69947` instead of deleting it.
- Added a 7-column June 2026 calendar with large 163 x 92 date cells.
- Added weekday row, month label, previous/next year and month controls.
- Included states: selected, available, remaining seats, full, rest / closed, and non-current month.
- Added visible tip copy and a state legend.
- Fixed footer actions to `返回` and `確認日期`.

## Notes

- The year/month controls are implemented visually in this pass. No extra month-state frames or Figma prototype click-through wiring were added yet, so the visual direction can be reviewed before multiplying states.
