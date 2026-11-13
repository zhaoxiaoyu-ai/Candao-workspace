# T24 Figma Date Picker Single-Frame Simplification - 2026-07-05

## Summary

Simplified the Tappo App booking date picker back to one reviewable frame after user feedback that the T23 multi-state approach created too many states.

Updated frame:

- `3320:70929` - `Tappo App / 訂座 / 05 選擇日期`

## What Changed

- Deleted 8 auxiliary T23 month/year prototype frames:
  - `T23 / date picker prototype / 2025-05`
  - `T23 / date picker prototype / 2025-06`
  - `T23 / date picker prototype / 2025-07`
  - `T23 / date picker prototype / 2026-05`
  - `T23 / date picker prototype / 2026-07`
  - `T23 / date picker prototype / 2027-05`
  - `T23 / date picker prototype / 2027-06`
  - `T23 / date picker prototype / 2027-07`
- Cleared prototype reactions from:
  - `T22 / control / 上一年`
  - `T22 / control / 上月`
  - `T22 / control / 下月`
  - `T22 / control / 下一年`
- Kept the single date picker design frame with:
  - `2026 年 6 月`
  - Large 7-column calendar grid.
  - State legend.
  - Tip copy explaining month/year switching.

## Validation

Final audit:

- `T23 / date picker prototype` frame count: `0`
- Main date picker dialog exists: yes
- Month/year control reactions: `0`
- Calendar row counts: `7, 7, 7, 7, 7`
- Visible month: `2026 年 6 月`

Visual QA screenshot:

- `t24-date-picker-single-frame-final.png`

## Note

T23 remains in the project history as an intentionally superseded experiment. The active Figma design now follows the single-frame approach requested by the user.
