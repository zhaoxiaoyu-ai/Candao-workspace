# T28 - Restore Independent Booking Time Setting Subpage

## Status

done

## Goal

Restore the previously hidden independent booking-time setting component as an interactive subpage/state for MOS v2 `訂座管理`.

Target Figma file:

- File: `25.1213 MOS v2`
- File key: `1qe8d4ll9wLnxPAsiJAoa9`
- Page: `UI（確認稿）`

## Scope

- Main default Tappo settings frame:
  - `1866:25708` - `訂座管理 / 02 Tappo Reservation`
- New subpage/state to create:
  - `訂座管理 / 06 Tappo Reservation - 獨立設置可預約時間`

## User Feedback To Address

- The old independent booking-time setting component should not disappear.
- `獨立設置可預約時間` is one of the booking-time options and should be shown as an interactive child page/state.

## Completion Notes

Completed on 2026-07-06 in Figma.

- Created `2193:32601` - `訂座管理 / 06 Tappo Reservation - 獨立設置可預約時間`.
- Restored the old independent booking-time detail controls as visible node `2193:33838` inside the new state.
- Kept the default `1866:25708` state focused on `可预约时间跟随门店营业时间`; the old independent controls remain hidden there.
- Wired prototype hotspots:
  - `2193:35097` from default `独立设置可预约时间` to the new independent state.
  - `2193:35099` from the independent state `可预约时间跟随门店营业时间` back to default.
- Updated option-row selected/unselected strokes with existing design-token variables.
- Final audit and screenshots are saved under `tasks/T28/output/`.
