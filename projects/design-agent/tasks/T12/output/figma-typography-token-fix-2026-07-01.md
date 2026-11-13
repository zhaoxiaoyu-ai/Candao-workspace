# T12 Figma Execution - Typography, Tokens, And Component Library Alignment

Date: 2026-07-01

## Scope

- Figma file: `Tappo App`
- File key: `anMsqgZYi8ZqmJXZah78KI`
- Page: `UI`
- Frames touched:
  - `3318:68380`
  - `3320:68138`
  - `3320:68826`
  - `3320:69975`
  - `3320:70929`
  - `3321:69714`
  - `3323:70108`
  - `3324:70502`

Only the known booking frames were modified. No non-booking pages were modified or deleted.

## Gate And Audit

Figma access was gated successfully through `mcp__figma.whoami`:

- Handle: `Can-dao_UI`
- Email: `2163548408@qq.com`

Read-only audit findings:

- The file has no local Text Styles.
- Tappo typography is currently expressed through component text and variables rather than formal text styles.
- Existing Tappo component masters use `OPPO Sans 4.0`.
- Current Figma MCP font availability does not include `OPPO Sans 4.0` or `PingFang SC`.
- Available relevant fallback fonts include `Noto Sans SC`, `Inter`, and `SF Pro`.
- Tappo token variables are available:
  - `font-size/font-small`
  - `font-size/font-regular`
  - `font-size/font-header1`
  - `POS color/color-text-95%`
  - `POS color/color-text-65%`
  - `POS color/error`
  - `Booking color/primary`
- The sidebar nested menu component does not provide a `訂座` variant. Its `contents` options are `點餐`, `訂單`, `估清`, `菜單`, `經營`, `設置`, `桌檯`, and `對賬`.
- The topbar `Component 6` exposes no text component properties.

Because `OPPO Sans 4.0` cannot be loaded by the current Figma MCP runtime, direct conversion of editable text to the exact component font is not possible in this session.

## Fix Applied

- Preserved actual Tappo component instances:
  - `侧边栏`
  - `Component 6`
  - Button
  - Input
  - Select
  - Switch
  - Radio
- Converted all visible editable booking text from `Inter` to a consistent Chinese fallback:
  - `Noto Sans SC Medium`: 237 text nodes
  - `Noto Sans SC Regular`: 181 text nodes
- Rebound all visible editable booking text color fills to Tappo/POS/Booking variables:
  - `POS color/color-text-95%`: 171
  - `POS color/color-text-65%`: 187
  - `POS color/error`: 52
  - `Booking color/primary`: 8
- Normalized visible editable font sizes to Tappo token size steps:
  - `font-size/font-small` / 20: 127
  - `font-size/font-regular` / 22: 270
  - `font-size/font-header1` / 24: 21
- Rebound all visible editable booking font sizes:
  - `418 / 418` visible editable text nodes have font-size variable bindings.
- Renamed legacy `T11 overlay / ...` text layers to `T12 tokenized overlay / ...`.
  - These overlays remain only where the component library has no usable property or variant for the required booking shell content.

## Final Audit

Final read-only audit highlights:

- Booking frames audited: `8`
- Visible text nodes: `498`
- Visible editable text nodes: `418`
- Text inside component instances: `80`
- Visible editable Inter text: `0`
- Visible editable Noto Sans SC text: `418`
- Legacy `T11 overlay` nodes: `0`
- Tokenized overlay nodes: `72`
- Editable text nodes without color variable: `0`
- Editable text nodes without font-size variable: `0`
- Tabs instances: `0`
- Radio instances: `36`
- Button instances: `59`
- Input instances: `20`
- Select instances: `19`
- Switch instances: `6`
- Topbar `Component 6` instances: `8`

## Visual QA

Screenshots were generated and inspected for:

- Main booking list frame `3318:68380`
- Date picker frame `3320:70929`

No obvious text overlap, calendar crowding, or broken control shape was observed after token-size normalization.

## Remaining Limitation

The exact Tappo component font is still `OPPO Sans 4.0`, but the current Figma MCP runtime cannot load it:

```text
The font "OPPO Sans 4.0 Regular" could not be loaded.
The font family "OPPO Sans 4.0" does not exist.
```

Therefore, editable booking text now uses the consistent available Chinese fallback `Noto Sans SC`, while imported Tappo component instances retain their original component styling. To achieve exact font parity with the component masters, `OPPO Sans 4.0` must be made available to the Figma environment, or Tappo typography should be published as formal Text Styles / font variables that the file can apply without relying on the MCP runtime font list.
