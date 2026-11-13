# T17 Figma Booking Retune - 2026-07-03

## Summary

Figma access was gated successfully through `mcp__figma.whoami` as `Can-dao_UI / 2163548408@qq.com`.

The previous Tappo App booking module was retuned in `Tappo App` (`anMsqgZYi8ZqmJXZah78KI`) page `UI`. This pass does not continue the newer T15 workbench concept; it keeps the earlier booking flow and fixes the visual/component issues raised by the user.

## Modified Frames

- `3318:68380` - `Tappo App / 訂座 / 01 列表-全部`
- `3320:68138` - `Tappo App / 訂座 / 02 列表-待確認`
- `3320:68826` - `Tappo App / 訂座 / 03 服務暫停`
- `3320:69975` - `Tappo App / 訂座 / 04 新增預約表單`
- `3320:70929` - `Tappo App / 訂座 / 05 選擇日期`
- `3321:69714` - `Tappo App / 訂座 / 06 拒絕原因`
- `3323:70108` - `Tappo App / 訂座 / 07 取消預約`
- `3324:70502` - `Tappo App / 訂座 / 08 標記爽約`

## Key Changes

- Restored the page shell to the same neutral background structure used by dine-in and takeaway modules.
- Hid the wrong topbar widgets (`新手任務`, `篩選餐期`) and kept the booking prototype topbar content.
- Replaced the visible wrong sidebar content with a booking-prototype sidebar overlay while preserving the original sidebar instance underneath.
- Replaced visible Radio status controls with actual `Tabs` component instances and booking labels, matching the latest component feedback.
- Removed old warm booking cover overlays and normalized filter/form/dialog surfaces to white panels with neutral borders.
- Refined the booking list with full-width single-column cards, clearer status/action treatment, and neutral input controls.
- Added a dine-in-style illustrated empty state for service paused.
- Removed pagination from the service-paused empty state.
- Normalized dialog scrims, shells, reason input areas, and action buttons.

## Final Audit

Final structural audit:

- Bad visible topbar widgets: `0`
- Visible old booking theme covers: `0`
- Visible old Radio status groups: `0`
- Visible Tabs status switches: `6`
- Visible booking sidebar overlays: `8`
- Visible old warm panels: `0`
- Visible old T12 sidebar/topbar text overlays: `0`
- Service-paused visible pagination: `0`
- Empty-state illustration: `1`
- Field controls missing neutral stroke: `0`
- Field controls with neutral stroke: `20`
- Neutral form sections: `2`
- Non-neutral form sections: `0`

## Visual QA Screenshots

- `t17-booking-final-list.png`
- `t17-booking-final-empty.png`
- `t17-booking-final-form.png`
- `t17-booking-final-reject-modal.png`

## Notes

The published/sidebar component does not expose a clean `訂座` navigation variant, so this pass keeps the real sidebar instance in the frame but hides the wrong visible POS labels and applies a booking-specific overlay for the prototype labels. This keeps the work scoped and avoids modifying or deleting non-booking pages.

The T15 workbench concept nodes remain in the file but were not modified in this pass.
