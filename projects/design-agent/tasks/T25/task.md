# T25 - Apply Tappo App Date Picker Typography Scale

## Status

done

## Goal

根據用戶最新字體要求，將訂座 `選擇預約日期` 彈窗內所有可見文字收斂到 3 個指定字號與行高：`20/28`、`22/32`、`28/34`，且最小字體不得小於 `20`。

## Scope

- Figma file: `Tappo App`
- File key: `anMsqgZYi8ZqmJXZah78KI`
- Page: `UI`
- Main frame: `3320:70929` - `Tappo App / 訂座 / 05 選擇日期`
- Dialog: `3692:69203` - `T22 / date picker dialog / full calendar`

## Typography Rule

- `20/28`: weekday labels, date helper/status text, legend labels, tip text, small control labels.
- `22/32`: month label and month/year switch control text.
- `28/34`: dialog title, close control, and primary date numbers.

## Delivery

- Updated all visible text inside the date picker dialog to use only `20/28`, `22/32`, or `28/34`.
- Removed all text below `20px`.
- Restored the missing tip row after typography adjustment.
- Preserved the single-frame approach from T24.
- Kept T23 auxiliary month/year prototype states deleted and did not re-add multi-state pages.

## Validation

Final audit:

- Dialog text nodes: `94`
- `20/28`: `50`
- `22/32`: `7`
- `28/34`: `37`
- Typography violations: `0`
- Tip row exists and is visible: yes
- `T23 / date picker prototype` frame count: `0`
- Month/year control prototype reactions: `0`
- Calendar row counts: `7, 7, 7, 7, 7`

Visual QA screenshot:

- `output/t25-date-picker-typography-final.png`
