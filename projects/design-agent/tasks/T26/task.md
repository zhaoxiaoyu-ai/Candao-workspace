# T26 - Tokenize Text Color And Unify OPPO Font On Booking Add Reservation Prototype

## Status

blocked

## Goal

根據用戶要求，修改 `訂座/新增預約` 畫板：文字字體統一為 `OPPO Sans 4.0`，文字顏色依據 design tokens，按現畫面相近值綁定。

## Scope

- Figma file: `Tappo App`
- File key: `anMsqgZYi8ZqmJXZah78KI`
- Page: `UI`
- Target frames:
  - `3687:71298` - `訂座/新增預約`
  - `3687:72213` - `訂座/新增預約`

## Completed

- Bound all visible text color segments in both target frames to existing design-token color variables using the nearest current visual value.
- Converted the remaining gradient text labels `設置營業狀態` to `POS color/primary`.
- Preserved mixed required-field labels:
  - `*` segments use `POS color/error`.
  - Label text segments use `POS color/color-text-95%`.
- Saved visual QA screenshot:
  - `output/t26-add-reservation-tokenized-current.png`

## Blocker

The font part cannot be completed in the current Figma MCP environment.

`mcp__figma.use_figma` can read existing text that already uses `OPPO Sans 4.0`, but `figma.loadFontAsync` fails for the required OPPO fonts:

- `OPPO Sans 4.0 Regular`
- `OPPO Sans 4.0 SemiBold`

The local Mac has OPPO font files installed, but the official Figma MCP runtime does not expose them. The local Figma app connector is also currently unauthenticated, so it cannot be used as a workaround.

## Final Audit

Frame `3687:71298`:

- Text nodes: `98`
- Font distribution:
  - `OPPO Sans 4.0 / Regular`: `66`
  - `OPPO Sans 4.0 / SemiBold`: `32`
- Non-OPPO text segments: `0`
- Bound text color segments: `104`
- Unbound text color segments: `0`

Frame `3687:72213`:

- Text nodes: `172`
- Font distribution:
  - `OPPO Sans 4.0 / Regular`: `57`
  - `OPPO Sans 4.0 / SemiBold`: `25`
  - `Noto Sans SC / Medium`: `47`
  - `Noto Sans SC / Bold`: `36`
  - `Noto Sans SC / Regular`: `7`
- Non-OPPO text segments: `90`
- Bound text color segments: `172`
- Unbound text color segments: `0`

## Resume Steps

Once `OPPO Sans 4.0` is available to the active Figma write runtime, rerun only the font normalization on frame `3687:72213`, mapping:

- `Noto Sans SC / Regular` -> `OPPO Sans 4.0 / Regular`
- `Noto Sans SC / Medium` -> `OPPO Sans 4.0 / SemiBold`
- `Noto Sans SC / Bold` -> `OPPO Sans 4.0 / SemiBold`
