# T20 - Correct MOS Booking Management Content Against Prototype

## Status

done

## Goal

Correct MOS v2 `訂座管理` page content in Figma so fields and modules match the source prototype, especially separating `門店訂座庫存` from `人數設置` instead of merging them.

Target Figma file:

- File: `25.1213 MOS v2`
- File key: `1qe8d4ll9wLnxPAsiJAoa9`
- Page: `UI（確認稿）`

## Scope

The main MOS v2 `訂座管理` pages created and corrected in T13/T14 are in scope. The T19 application-service activation modal flow is out of scope unless a direct link is found.

## User Feedback To Address

- Some `訂座管理` page content does not correspond to the prototype.
- The `門店訂座庫存` field/module appears incorrect.
- `門店訂座庫存` and `人數設置` should be separate content, but the current Figma version appears to merge them.
- Recheck against the prototype to ensure content consistency.

## Completion Notes

- Confirmed the deployed prototype has no standalone visible `前台路由` field. The route-related behavior belongs to the supplier module only, so the unsupported standalone route card/wording was removed from visible Figma states.
- Split the merged `庫存與人數設置` card into separate `門店訂座庫存` and `人數設置` cards in the Tappo-related booking management states.
- Corrected `門店訂座庫存` to use `庫存量`, unit `位/天`, and `每日重置庫存` with the prototype helper copy.
- Reused existing card/input/button/pill structures and replaced the reset checkbox presentation with an existing checked `Switch` component instance.
- Updated the Minitable booking state so Tappo-native inventory, people, schedule, and arrival-marking settings are hidden from the visible design.
- Final visible audit found 0 `前台路由` / `供應商路由` strings, 0 merged `庫存與人數設置` strings, visible separated inventory/people cards in 3/3 Tappo states, and no visible Tappo-native inventory/people content in the Minitable state.
- Details and screenshots are in `output/figma-booking-content-consistency-2026-07-03.md`.
