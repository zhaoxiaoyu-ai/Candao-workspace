# T27 - MOS Booking Settings Review Optimizations

## Status

done

## Goal

Optimize the MOS v2 `訂座管理` settings page after review feedback:

1. Add the missing `跟随营业时间` option to `可预约日期与时段`.
2. Add delete controls to existing people-range chips.
3. Convert the booking settings layout from a left/right split into a unified single-column layout.

Target Figma file:

- File: `25.1213 MOS v2`
- File key: `1qe8d4ll9wLnxPAsiJAoa9`
- Page: `UI（確認稿）`

## Scope

Main MOS v2 booking settings states:

- `1866:25708` - `訂座管理 / 02 Tappo Reservation`
- `1866:26444` - `訂座管理 / 03 切換供應商彈窗`
- `1866:27180` - `訂座管理 / 04 新增人數段彈窗`

Review also includes confirming the Minitable state is not regressed.

## User Feedback To Address

- MOS settings page `可预约日期与时段` currently only supports independent booking-time setup; it lacks `跟随营业时间`.
- Existing people ranges are missing delete buttons.
- The booking settings left/right layout feels odd; review whether to unify it as a single column.

## Reference Screenshots

- `/var/folders/0d/dsk5sn1s42335r_09kjcg8x80000gn/T/codex-clipboard-b083015a-fb0e-477f-ad71-02e4bb3e5ea3.png`
- `/var/folders/0d/dsk5sn1s42335r_09kjcg8x80000gn/T/codex-clipboard-306f1a7d-c043-4ee7-8e52-bd766edb9a06.png`
- `/var/folders/0d/dsk5sn1s42335r_09kjcg8x80000gn/T/codex-clipboard-3abdbfa2-586c-4e15-adad-8ea523e21072.png`

## Completion Notes

- Converted the Tappo booking settings states to a single-column layout.
- Moved `标记到店方式` below `可預約日期與時段`.
- Added `可预约时间跟随门店营业时间` and `独立设置可预约时间` to the booking-time card.
- Hid the old default visible independent time-detail controls.
- Added delete controls (`×`) to each existing people-range chip.
- Confirmed Minitable remains one-column with no visible right-column regression.
- Saved final audit notes and screenshots under `output/`.
