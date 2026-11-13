# T28 - Independent Booking Time Subpage Restoration

## Scope

- File: `25.1213 MOS v2`
- File key: `1qe8d4ll9wLnxPAsiJAoa9`
- Page: `UI（確認稿）`
- Default frame: `1866:25708` - `訂座管理 / 02 Tappo Reservation`
- New frame: `2193:32601` - `訂座管理 / 06 Tappo Reservation - 獨立設置可預約時間`

## Changes

- Restored the previously hidden independent booking-time detail controls as a visible child state, not as part of the default follow-business-hours state.
- Kept `1866:25708` as the default state with `可预约时间跟随门店营业时间` selected.
- Created `2193:32601` as the independent setting state with `独立设置可预约时间` selected.
- Restored the editable time detail component as `2193:33838`, including weekday tabs, time rows, add/delete controls, special business date switch, and special-date table.
- Hid the business-hours maintenance row in the independent state because that guidance only applies to the follow-business-hours mode.
- Updated selected and unselected option row strokes with existing design-token bindings:
  - Selected: `Global/Colors/Brand/colorPrimaryBorder`
  - Unselected: `Global/Colors/Neutral/Border/colorBorder-15`
- Set the new frame height to `2104` so the longer restored content and footer do not overlap.

## Prototype

- `2193:35097`: default page `独立设置可预约时间` option navigates to `2193:32601`.
- `2193:35099`: independent page `可预约时间跟随门店营业时间` option navigates back to `1866:25708`.

## Final Audit

- Default frame visible old independent controls: `0`
- Independent state visible restored control groups: present
- Independent state maintenance copy: hidden
- Default state radio/stroke:
  - Follow business hours selected
  - Independent setting unselected
- Independent state radio/stroke:
  - Follow business hours unselected
  - Independent setting selected
- Prototype destinations are valid in both directions.

## Artifacts

- `t28-default-booking-time-entry.png`
- `t28-independent-booking-time-state.png`
