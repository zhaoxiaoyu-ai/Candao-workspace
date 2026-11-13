# T20 Figma Booking Content Consistency Fix

Date: 2026-07-03

## Scope

- Figma file: `25.1213 MOS v2`
- File key: `1qe8d4ll9wLnxPAsiJAoa9`
- Page: `UI（確認稿）`
- Target frames:
  - `1866:24972` - `訂座管理 / 01 未開通`
  - `1866:25708` - `訂座管理 / 02 Tappo Reservation`
  - `1866:26444` - `訂座管理 / 03 切換供應商彈窗`
  - `1866:27180` - `訂座管理 / 04 新增人數段彈窗`
  - `1866:30124` - `訂座管理 / 05 Minitable Reservation`

## Prototype Findings

- The deployed prototype does not contain a standalone visible field named `前台路由`.
- The only route-related source is the supplier behavior: when the current supplier is Tappo, Pad / Phone / 微官網新增訂座 follows Tappo Reservation; when the current supplier is Minitable, the front booking entry jumps to or embeds Minitable and order/report data returns to Tappo.
- `門店訂座庫存` and `人數設置` are separate cards in the prototype:
  - `門店訂座庫存`: `庫存量`, unit `位/天`, `每日重置庫存`, helper `開啟後，每日午夜自動將庫存重置為設定值`
  - `人數設置`: description `設定可供預約的人數段，如 1~2人、3~4人、7~9人 等`, existing people-range pills, `+ 新增人數段`
- Minitable state should not show Tappo-native inventory, people, schedule, or arrival-marking settings. It should show Minitable connection/configuration state instead.

## Figma Changes

- Removed the unsupported visible route wording:
  - Hid standalone `Card / 前台路由狀態` in Tappo-related states.
  - Removed visible `供應商路由` wording from the unopened-state helper/pill.
  - Reworded the Minitable status helper so it describes connection, store mapping, and order-return state without using route terminology.
- Split the previous merged `庫存與人數設置` card into:
  - `Card / 門店訂座庫存`
  - `Card / 人數設置`
- Preserved maintainability by keeping the old merged card as a hidden backup and creating the two visible cards from copied existing card/component structures.
- Reused existing component instances where applicable:
  - Existing card shell and text styles
  - COMS input-title instance for `庫存量`
  - Existing people-range pill structures
  - Existing Button instance for `+ 新增人數段`
  - Existing checked `Switch` component instance for `每日重置庫存`
- Updated Minitable state so visible content no longer includes Tappo-native inventory/people/schedule/arrival-marking cards.

## Final Audit

- Visible `前台路由` / `供應商路由`: `0`
- Visible merged `庫存與人數設置`: `0`
- Tappo-related states with visible separated `門店訂座庫存` and `人數設置`: `3 / 3`
- Minitable state visible Tappo-native inventory/people content: `0`
- Card gaps in Tappo-related left columns:
  - `訂座服務供應商` -> `門店訂座庫存`: `16px`
  - `門店訂座庫存` -> `人數設置`: `16px`
  - `人數設置` -> `可預約日期與時段`: `16px`
- Text display check: key inventory and people text nodes use height auto-resize; no obvious compression, clipping, or abnormal wrapping in the reviewed screenshots.

## Visual QA Artifacts

- `figma-booking-tappo-content-fix-v2.png`
- `figma-booking-minitable-content-fix.png`
- `figma-booking-add-party-modal-content-fix-v2.png`

