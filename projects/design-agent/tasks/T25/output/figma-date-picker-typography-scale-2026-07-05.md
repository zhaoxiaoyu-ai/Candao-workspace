# T25 Figma Date Picker Typography Scale - 2026-07-05

## Summary

Applied the user's latest typography rule to the Tappo App booking date picker dialog.

Updated frame:

- `3320:70929` - `Tappo App / 訂座 / 05 選擇日期`

Updated dialog:

- `3692:69203` - `T22 / date picker dialog / full calendar`

## User Rule

- Minimum font size: `20`
- Allowed typography pairs only:
  - `20/28`
  - `22/32`
  - `28/34`

## What Changed

- Converted all visible dialog text below `20px` to the approved scale.
- Normalized dialog typography to:
  - `28/34` for title, close control, and date numbers.
  - `22/32` for current month and month/year controls.
  - `20/28` for weekday labels, legend, date state labels, and tip content.
- Restored the missing visible tip row after the typography adjustment.
- Kept the design as a single reviewable frame.
- Did not recreate T23's auxiliary month/year state frames.

## Validation

Final audit:

- Text nodes inside dialog: `94`
- `20/28`: `50`
- `22/32`: `7`
- `28/34`: `37`
- Typography violations: `0`
- Tip row exists: yes
- Tip row visible: yes
- `T23 / date picker prototype` frame count: `0`
- Month/year control reactions: `0`
- Calendar row counts: `7, 7, 7, 7, 7`

Visual QA screenshot:

- `t25-date-picker-typography-final.png`

## Note

The date picker remains a single-page design expression. The month/year controls are shown as visual affordances, with the tip explaining the behavior, but no extra prototype state frames are present in the active design.
