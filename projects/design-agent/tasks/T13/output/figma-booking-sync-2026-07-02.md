# T13 Figma Booking Sync - 2026-07-02

## Scope

Updated the MOS v2 booking/reservation series in the active Figma file:

- File: `25.1213 MOS v2`
- File key: `1qe8d4ll9wLnxPAsiJAoa9`
- Page: `UI（確認稿）`
- Baseline: `MOS v2 / 微官網管理 / 01 默認` (`1866:19820`)

The user clarified to treat the currently available Figma file as the source and ignore the old/deleted version.

## Frames Updated

- `1866:24972` - `MOS v2 / 訂座管理 / 01 未開通`
- `1866:25708` - `MOS v2 / 訂座管理 / 02 Tappo Reservation`
- `1866:26444` - `MOS v2 / 訂座管理 / 03 切換供應商彈窗`
- `1866:27180` - `MOS v2 / 訂座管理 / 04 新增人數段彈窗`
- `1866:27916` - `MOS v2 / 訂座管理 / 05 獨立時段-全部時段`
- `1866:28652` - `MOS v2 / 訂座管理 / 06 獨立時段-指定時段`
- `1866:29388` - `MOS v2 / 訂座管理 / 07 獨立時段-特別日期`
- `1866:30124` - `MOS v2 / 訂座管理 / 08 Minitable Reservation`

## Changes Applied

- Resized booking frames to match the latest micro-site baseline canvas: `1920 x 1748`.
- Synced the page shell and `T05 / Layout / Page / FormPage` geometry to the baseline:
  - page content width `1664`
  - body width `1616`
  - left column width `1056`
  - right column width `536`
  - 24px column gap and 16px vertical module rhythm where the baseline uses it.
- Moved the shared footer/form action bar to the bottom baseline position and kept footer button instances.
- Expanded modal overlays to cover the full updated page height.
- Normalized all booking card/module containers to the baseline card treatment:
  - white container fill token
  - secondary border token
  - `16` radius token
  - baseline shadow/effect
  - 24px card padding and module spacing.
- Normalized manual page text to Roboto and the baseline font-size steps `12 / 14 / 16 / 20 / 24`.
- Bound all visible editable/manual booking text fills and font sizes to Figma variables, including required/error labels.
- Preserved existing component-library instances such as Sidebar/menu, icon/Sidebar, Top nav, Button, InputCheckbox, input-title, Input, select-title, Select, and FormFooter.
- Kept all existing prototype interactions valid.

## Final Audit

Final audit result:

- Booking frames checked: `8`
- Layout issues: `0`
- Manual visible text: `499`
- Manual text with fill variables: `499 / 499`
- Manual text with font-size variables: `499 / 499`
- Bad manual font sizes: `0`
- Manual text font: `Roboto`
- Cards checked: `38`
- Cards matching baseline style: `38 / 38`
- Prototype reactions checked: `33`
- Invalid prototype reactions: `0`

Component-internal text was not forcibly detached or overridden. This keeps component-library usage intact; component master typography remains governed by the library.

## Visual Artifacts

Before screenshots:

- `mos-micro-baseline-before.png`
- `booking-tappo-before.png`
- `booking-party-modal-before.png`
- `booking-minitable-before.png`

After screenshots:

- `booking-unopened-after.png`
- `booking-tappo-after.png`
- `booking-party-modal-after.png`
- `booking-minitable-after.png`

Visual review found the updated booking pages materially aligned with the latest micro-site layout rhythm and card style. No obvious text overlap or broken modal layout was observed in the checked screenshots.

## Notes

- Figma access was revalidated during the run; `whoami` succeeded for `Can-dao_UI / 2163548408@qq.com`.
- Screenshot downloads required a network-capable command because sandbox DNS access was restricted.
- No local source code changes were needed for this task.
