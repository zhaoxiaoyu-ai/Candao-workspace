# Task T12 - Tappo App Booking Typography, Tokens, And Component Library Alignment

## Status

done

## Request

Fix the latest Tappo App booking module feedback after T11:

1. Fonts were replaced or became inconsistent.
2. The booking module should follow the Tappo design specification.
3. Use unified font family, font sizes, text colors, and design tokens.
4. Reuse the Tappo component library rather than manual or overlay-only structures.

## Target

- Figma file: `Tappo App`
- File key: `anMsqgZYi8ZqmJXZah78KI`
- Page: `UI`
- Known booking frame IDs:
  - `3318:68380`
  - `3320:68138`
  - `3320:68826`
  - `3320:69975`
  - `3320:70929`
  - `3321:69714`
  - `3323:70108`
  - `3324:70502`

## Initial Context

T11 completed the booking yellow and token correction, but it used `T11 overlay / ...` text nodes for sidebar/topbar labels because the existing `侧边栏` and `Component 6` instances exposed no text component properties and direct inner text edits did not apply.

The user now wants a more design-system-correct fix:

- Avoid replacing fonts ad hoc.
- Follow Tappo typography/text/color tokens.
- Prefer real Tappo components and component instances.
- Remove or replace overlay/manual fixes where a component or tokenized style is available.

## Planned Approach

1. Gate Figma with `whoami`.
2. Inspect local text styles, variables, available fonts, and subscribed Tappo libraries.
3. Audit the 8 booking frames for:
   - Visible text font family/style/size/style binding.
   - Text fill variable bindings.
   - Manual overlay nodes from T11.
   - Component instance coverage.
   - Available component properties on sidebar/topbar and related shell components.
4. Apply the smallest safe correction:
   - Remove T11 overlay text if it cannot follow Tappo typography.
   - Use existing Tappo text styles / typography tokens where available.
   - Use existing Tappo color variables for text fills and neutral borders.
   - Preserve and reuse Tappo component instances.
   - Only create fallback text layers if no component-property path exists, and style them using the nearest Tappo text style/token rather than arbitrary fonts.
5. Run final audit and visual QA.

## Completion

Completed on 2026-07-01.

- Gated Figma successfully through `mcp__figma.whoami`.
- Audited text styles, variables, font availability, sidebar variants, topbar properties, and the 8 booking frames.
- Preserved Tappo component instances and did not detach or replace the core controls.
- Converted visible editable booking text from ad hoc `Inter` to consistent `Noto Sans SC` fallback because the Figma MCP runtime cannot load `OPPO Sans 4.0`.
- Bound all visible editable booking text colors to Tappo/POS/Booking color variables.
- Normalized and bound all visible editable booking font sizes to Tappo `font-size/*` variables.
- Renamed legacy `T11 overlay / ...` layers to `T12 tokenized overlay / ...`.
- Final audit confirmed 0 visible editable Inter text nodes, 418/418 editable text nodes with color variables, 418/418 editable text nodes with font-size variables, Tabs 0, Radio 36, Button 59, Input 20, Select 19, Switch 6, and 8 topbar instances.
- Visual QA screenshots for `3318:68380` and `3320:70929` showed no obvious text overlap or layout breakage.

Execution details: `output/figma-typography-token-fix-2026-07-01.md`.
