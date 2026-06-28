# T05 Output - MOS v2 FormPage And Existing Module Reuse

Date: 2026-06-16

## Scope

- Figma file: `25.1213 MOS v2`
- File key: `1qe8d4ll9wLnxPAsiJAoa9`
- Page: `UI（確認稿）`
- Frames: 15 existing `MOS v2 /` frames

## Implemented

- Replaced hand-built titled form controls with actual COMS `input-title` and `select-title` component instances.
- Wrapped every frame with a `Layout / Page / FormPage`-style vertical auto-layout structure.
- Kept the body layout to two columns: 1056 px main column and 536 px secondary column.
- Reused the existing breadcrumb and title/store-switch header pattern from the settings reference page.
- Bound page backgrounds to the system background token.
- Reused the existing create-store date/time business module in 7 booking states.
- Preserved prototype navigation and modal/tab/state interactions.

## Reverse Check Findings

The visual reverse check found two layout defects after the first T05 write:

- Booking date/time cards had duplicate headings because the old card title remained above the reused module.
- Booking modal overlay/dialog layers were below the FormPage content, so page cards appeared above the modal.

Both issues were fixed:

- The 7 booking date/time cards now contain only `T05 / Reused CreateStore DateTime Module` and use vertical auto layout.
- The 2 booking modal states now have `Modal overlay`, `Modal / ...`, and modal hotspots as the top layer group.

## Validation

- 15/15 frames have token-bound page backgrounds.
- 15/15 frames have `T05 / Layout / Page / FormPage` vertical auto-layout wrappers.
- 15/15 frames have two-column horizontal auto-layout bodies.
- 7/7 booking date/time cards use auto layout and contain only the reused date/time module.
- 2/2 modal states have overlay/dialog/hotspots above page content.
- Earlier component audit confirmed 65 `input-title` instances, 7 `select-title` instances, 0 old input instances, 0 old loose form labels, 0 visible non-Roboto text nodes, 65 reactions, and 0 invalid prototype destinations.

## Screenshots

- `screenshots/micro_default_1866-19820.png`
- `screenshots/booking_tappo_1866-25708_postfix.png`
- `screenshots/booking_modal_people_1866-27180_prefix_issue.png` shows the pre-fix modal stacking defect for traceability.

After the modal layer fix, full modal re-screenshot attempts failed due to Figma MCP transport/render timeouts. The final direct layer audit passed.

## Notes

- Long booking states still use the system fixed footer pattern. Content below the visible 1320 px viewport should be reviewed as scrollable form content in prototype mode.
