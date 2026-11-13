# T11 Figma Execution - 2026-06-30

## Summary

T11 was executed against the Figma file `Tappo App` (`anMsqgZYi8ZqmJXZah78KI`) on page `UI`.

The Figma identity gate passed with `Can-dao_UI / 2163548408@qq.com`, then the runbook was completed:

1. Read-only audit.
2. Scoped booking-frame correction.
3. Final read-only audit.
4. Visual QA screenshots for `3318:68380` and `3320:69975`.

Only the 8 known booking frames were targeted:

- `3318:68380`
- `3320:68138`
- `3320:68826`
- `3320:69975`
- `3320:70929`
- `3321:69714`
- `3323:70108`
- `3324:70502`

## Script Compatibility Fix

The first read-only audit reached the Figma file but failed without mutation because the script used `figma.util.colorToHex`, which is not available in the current Figma Plugin API runtime.

Updated both local scripts to use an internal RGB-to-hex helper instead:

- `t11-use-figma-audit-script.js`
- `t11-use-figma-fix-script.js`

Both scripts then passed syntax validation with the bundled Codex Node runtime.

## Pre-Fix Audit

The corrected read-only audit succeeded.

Key findings:

- Booking frame count: `8`
- `#9A6A00`: `0`
- Tabs instances: `0`
- Radio instances: `36`
- Right summary frames: `0`
- Main remaining issues:
  - Topbar still showed POS shell content such as `Fangcun Store`, `Business Date 2025-05-29`, and `Breakfast`.
  - Sidebar still showed POS shell labels such as `POS`, `點餐`, `訂單`, `估清`, and `菜單`.
  - Status labels used full-width parentheses, for example `全部（6）`, instead of `全部 (6)`.

## Applied Changes

Restored booking theme tokens:

- `Booking color/primary = #F6D365`
- `Booking color/gradient-start = #F6D365`
- `Booking color/gradient-end = #FDCB85`
- `Booking color/background = #FFF8E8`
- `Booking color/border = #F6D365` for booking emphasis only

Rebound booking text and borders to existing Tappo/POS tokens:

- Text primary: `POS color/color-text-95%`
- Text secondary: `POS color/color-text-65%`
- Danger: `POS color/error`
- Surface: `POS color/white`
- Neutral border/separator fallback: `POS color/color-text-8%`

Corrected booking UI content:

- Status labels normalized to:
  - `全部 (6)`
  - `待確認 (2)`
  - `已確認 (1)`
  - `已到店 (1)`
  - `已取消 (1)`
  - `已爽約 (1)`
- Topbar visible labels now include:
  - `中環旗艦店`
  - `2026-06-10`
  - `功能`
- Sidebar visible labels now include:
  - `訂座`
  - `經營`
  - `設置`
  - `通知`
  - `WiFi`
  - `退出`

## Sidebar/Topbar Implementation Note

The existing `侧边栏` and `Component 6` instances have no exposed `componentProperties`, and direct `characters` edits on their inner text layers did not apply. To preserve component-library usage while correcting visible content:

- Kept the original sidebar/topbar component instances in every booking frame.
- Hid the visible POS shell text inside those instances.
- Added token-bound `T11 overlay / ...` text nodes as absolute-positioned overlays inside each booking frame.

This created 72 overlay text nodes total: 6 sidebar labels and 3 topbar labels per frame across 8 frames.

## Final Audit

Final read-only audit results:

- Booking frame count: `8`
- `totals.oldDarkYellowNodes = 0`
- `totals.tabsInstances = 0`
- `totals.radioInstances = 36`
- `totals.hasRightSummaryFrames = 0`
- All list/modal-backed booking frames keep Radio status switching.
- All audited frames now contain the required sidebar labels.
- All audited frames now contain `中環旗艦店` and `功能`.
- No audited frame contains the wrong topbar labels checked by the runbook.
- Text fill, fill, and stroke bindings improved across all 8 frames.

Frames without a status switch by design, such as service paused and add booking form, still do not contain the six list filter status labels.

## Visual QA

Rendered screenshots for:

- `Tappo App / 訂座 / 01 列表-全部` (`3318:68380`)
- `Tappo App / 訂座 / 04 新增預約表單` (`3320:69975`)

Visual checks passed:

- Topbar reads `中環旗艦店 / 2026-06-10 / 功能`.
- Sidebar reads as the booking shell.
- Single-column list remains intact.
- No right-side `今日訂座總覽` panel appears.
- Buttons use the restored pale yellow / yellow gradient strategy.
- No obvious text overlap was visible in the checked frames.

## Component-Library Explanation

The earlier output did use actual Tappo App instances for sidebar, topbar, Button, Input, Select, Switch, and Radio. It still appeared insufficient because composed booking-specific structures such as booking list rows, filter row wrappers, dialog shells, and some booking cards were manually assembled auto-layout frames instead of published booking-specific components.

The existing `radio-group` component previously inspected was text-only, so the booking status switch uses actual `Radio` component instances inside a composed row rather than reverting to Tabs.

No additional material is required for the completed correction. Future improvement would benefit from dedicated published booking list-row, booking filter-bar, and booking dialog-shell components if the design team wants those composed structures to be component instances too.
