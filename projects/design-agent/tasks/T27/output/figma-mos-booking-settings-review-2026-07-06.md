# T27 - MOS Booking Settings Review Optimizations

## Scope

- Figma file: `25.1213 MOS v2`
- File key: `1qe8d4ll9wLnxPAsiJAoa9`
- Page: `UI（確認稿）`

Target frames:

- `1866:25708` - `訂座管理 / 02 Tappo Reservation`
- `1866:26444` - `訂座管理 / 03 切換供應商彈窗`
- `1866:27180` - `訂座管理 / 04 新增人數段彈窗`
- `1866:30124` - `訂座管理 / 05 Minitable Reservation` validation only / no regression

## Changes

- Converted the Tappo booking settings body from the previous left/right split into a single-column layout.
- Moved `标记到店方式` below `可預約日期與時段`, so all booking settings now read as one vertical flow.
- Widened the visible cards to the unified `1616px` content width.
- Added the missing `跟随营业时间` mode to `可預約日期與時段`.
- Replaced the old default-only independent time setup with two mode options:
  - `可预约时间跟随门店营业时间`
  - `独立设置可预约时间`
- Added maintenance guidance and the `去维护` action inside the booking-time card.
- Hid the old detailed independent time controls from the default visible state.
- Added delete controls (`×`) to all existing people-range chips.
- Re-aligned the supplier switch button to the right side of the widened supplier card.
- Kept the Minitable state one-column and confirmed the hidden right column did not reappear.

## Component / Style Reuse

- Reused existing MOS/COMS card surfaces and Button instances.
- Reused existing MOS `InputRadio` instances from the supplier modal for the new booking-time mode controls.
- Reused the existing check-in option field structure as the base for the new booking-time option rows.
- Preserved the existing people-range pill style and added only the missing delete affordance.

## Final Audit

- Tappo-related frames with vertical single-column body: `3 / 3`
- Tappo-related frames with `可预约时间跟随门店营业时间`: `3 / 3`
- Tappo-related frames with `独立设置可预约时间`: `3 / 3`
- Tappo-related frames with old visible independent time controls: `0 / 3`
- People-range delete controls: `5` per Tappo-related frame
- `标记到店方式` visible in the same column after booking time: `3 / 3`
- Minitable right column visible: `0`
- Minitable cards remain `1616px` wide.

## Visual QA

Screenshots saved:

- `t27-mos-booking-single-column-02.png`
- `t27-mos-booking-single-column-03-modal.png`
- `t27-mos-booking-single-column-04-modal.png`
- `t27-mos-booking-minitable-check.png`

Screenshot review found no obvious text compression, clipped labels, modal overlay collisions, missing delete controls, or right-column layout leftovers.
