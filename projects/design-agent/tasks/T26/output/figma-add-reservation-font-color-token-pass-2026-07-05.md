# T26 Figma Add Reservation Font And Color Token Pass - 2026-07-05

## Summary

Updated the exact `訂座/新增預約` prototype frames in `Tappo App` (`anMsqgZYi8ZqmJXZah78KI`) page `UI`.

Targets:

- `3687:71298` - `訂座/新增預約`
- `3687:72213` - `訂座/新增預約`

## Completed In Figma

- Bound all visible text color segments to existing design-token variables by nearest current visual value.
- Preserved required-field mixed color behavior:
  - Required asterisks use `POS color/error`.
  - Label text uses `POS color/color-text-95%`.
- Converted the remaining gradient text `設置營業狀態` to `POS color/primary`.
- Final color audit found `0` unbound visible text color segments in both target frames.

## Font Status

The font normalization could not be completed in the current Figma MCP runtime.

The official Figma MCP can read existing `OPPO Sans 4.0` text in the file, but cannot load the font for mutation:

- `OPPO Sans 4.0 Regular`: failed
- `OPPO Sans 4.0 SemiBold`: failed

The local Mac has OPPO font files installed under `/Users/victorwong/Library/Fonts/`, including `OPPO Sans 4.0.ttf`, but those fonts are not exposed to the official Figma MCP runtime. The local app connector path `mcp__codex_apps__figma` is currently unauthenticated, so it could not be used as a local-font workaround.

## Final Audit

`3687:71298`:

- Text nodes: `98`
- Non-OPPO text segments: `0`
- Bound text color segments: `104`
- Unbound text color segments: `0`

`3687:72213`:

- Text nodes: `172`
- Non-OPPO text segments: `90`
- Bound text color segments: `172`
- Unbound text color segments: `0`
- Remaining non-OPPO text is the date-picker dialog content under `T22 / ...` nodes.

## Screenshot

- `t26-add-reservation-tokenized-current.png`

## Next Step

After OPPO Sans 4.0 is available to the active Figma write runtime, normalize the remaining `Noto Sans SC` text in `3687:72213` to OPPO Sans 4.0.
