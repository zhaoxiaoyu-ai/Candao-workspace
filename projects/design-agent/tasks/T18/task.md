# T18 - Add Auto Layout Structure To Previous Tappo App Booking Module

## Status

done

## Goal

Refactor the previous Tappo App booking module content structure in Figma so related content is grouped and maintained with auto layout instead of scattered absolute positioning.

Target Figma file:

- File: `Tappo App`
- File key: `anMsqgZYi8ZqmJXZah78KI`
- Page: `UI`

## Scope

Only the existing 8 previous booking frames are in scope:

- `3318:68380` - `Tappo App / 訂座 / 01 列表-全部`
- `3320:68138` - `Tappo App / 訂座 / 02 列表-待確認`
- `3320:68826` - `Tappo App / 訂座 / 03 服務暫停`
- `3320:69975` - `Tappo App / 訂座 / 04 新增預約表單`
- `3320:70929` - `Tappo App / 訂座 / 05 選擇日期`
- `3321:69714` - `Tappo App / 訂座 / 06 拒絕原因`
- `3323:70108` - `Tappo App / 訂座 / 07 取消預約`
- `3324:70502` - `Tappo App / 訂座 / 08 標記爽約`

The T15 concept board remains paused and out of scope.

## User Feedback To Address

- Booking module content lacks auto layout.
- Related content is scattered and hard to maintain.
- Group content by relationship.
- Content inside each group should use auto layout.
- Text should participate in responsive layout.
- After applying auto layout, check that text is not compressed, distorted, clipped, or hidden.

## Completion Notes

The Figma correction was executed on 2026-07-03. The repeated booking overlay structures were converted to auto layout without detaching component instances:

- Sidebar overlay groups and all sidebar items.
- Status tab rows and tab wrappers.
- Topbar action wrappers.
- Service-paused empty state, with an auto-layout copy stack and responsive copy text.

Final audit confirmed 0 remaining manual multi-child non-auto-layout containers outside component instances, 0 text display risks, and 0 invalid prototype destinations. Details and screenshots are in `output/figma-booking-autolayout-structure-2026-07-03.md`.
