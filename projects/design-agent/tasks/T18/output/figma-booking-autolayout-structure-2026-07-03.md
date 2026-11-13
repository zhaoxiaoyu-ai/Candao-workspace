# T18 Figma Booking Auto Layout Structure - 2026-07-03

## Summary

Figma access was gated successfully through `mcp__figma.whoami` as `Can-dao_UI / 2163548408@qq.com`.

The previous Tappo App booking module was updated in `Tappo App` (`anMsqgZYi8ZqmJXZah78KI`) page `UI`. This pass focuses on maintainability: related booking content is grouped and managed through auto layout instead of scattered absolute positioning.

## Modified Frames

- `3318:68380` - `Tappo App / 訂座 / 01 列表-全部`
- `3320:68138` - `Tappo App / 訂座 / 02 列表-待確認`
- `3320:68826` - `Tappo App / 訂座 / 03 服務暫停`
- `3320:69975` - `Tappo App / 訂座 / 04 新增預約表單`
- `3320:70929` - `Tappo App / 訂座 / 05 選擇日期`
- `3321:69714` - `Tappo App / 訂座 / 06 拒絕原因`
- `3323:70108` - `Tappo App / 訂座 / 07 取消預約`
- `3324:70502` - `Tappo App / 訂座 / 08 標記爽約`

The paused T15 workbench concept was not modified.

## Key Changes

- Converted all 8 booking sidebar overlay groups to vertical auto layout.
- Converted all 48 sidebar item groups to auto layout, preserving the active background and icon text as positioned decorative/overlay layers inside each item.
- Added 8 fixed auto-layout spacer nodes named `T18 / sidebar spacer / lower actions` to preserve the visual gap between upper and lower sidebar actions while making the sidebar maintainable.
- Converted 6 status tab rows and 36 tab wrappers to auto layout.
- Converted 8 topbar `功能` action wrappers to auto layout while preserving the underlying button component instances.
- Rebuilt the service-paused empty state as an auto-layout group with a separate `T18 / empty state copy stack`.
- Changed the empty-state description text from fixed sizing to responsive height sizing.
- Preserved component instances and did not detach component-library nodes.

## Final Audit

Final structural and prototype audit:

- Manual multi-child non-auto-layout containers outside component instances: `0`
- Text display risks: `0`
- Prototype reactions: `48`
- Invalid prototype destinations: `0`
- Auto-layout tab wrappers: `36 / 36`
- Auto-layout sidebar items: `48 / 48`
- Auto-layout sidebar overlays: `8 / 8`
- Auto-layout topbar actions: `8 / 8`
- Empty-state copy stacks: `1`
- Sidebar spacers added: `8`

## Visual QA Screenshots

- `t18-booking-autolayout-list.png`
- `t18-booking-autolayout-empty.png`
- `t18-booking-autolayout-form.png`
- `t18-booking-autolayout-reject-modal.png`

Screenshot review found no obvious text compression, clipped labels, hidden text, or layout overlap in the checked list, empty state, form, and reject modal states.

## Notes

Component instances were preserved. For wrappers that use overlay text above an existing component instance, the wrapper itself now uses auto layout, while the overlay label remains absolute inside that wrapper so the visual result and component reuse both stay intact.

