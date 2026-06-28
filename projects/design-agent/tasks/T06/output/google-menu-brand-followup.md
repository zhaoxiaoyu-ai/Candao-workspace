# T06 Follow-up - Google, Menu, Brand Corrections

Date: 2026-06-18

## Source Checked

- `e:\Downloads\Tappo0615\prototypes\admin-web\mw.html`
- `e:\Downloads\Tappo0615\prototypes\admin-web\assets\app.js`

## Figma Target

- File: `25.1213 MOS v2`
- File key: `1qe8d4ll9wLnxPAsiJAoa9`
- Page: `UI（確認稿）`

## Changes Made

- Expanded `微官網管理` from 7 to 12 frames so Google can be reviewed step-by-step:
  - No-account flow: Step 1 through Step 6.
  - Existing-account flow: Step 1 through Step 4.
- Rebuilt all `Google 門店資訊` cards from the local prototype content:
  - Restored missing no-account Step 2, Step 3, and Step 5 content.
  - Restored existing-account Step 2 and Step 3 content.
  - Kept step numbers grouped inside circle frames so the number and background do not separate.
- Rebuilt `電子菜單設置` hierarchy:
  - Default state: upload option is unchecked and does not show upload operation.
  - `菜單展示方式` state: upload option is checked and shows upload operation plus uploaded thumbnails.
  - System menu option shows only the menu-scope radio group.
- Replaced the old `品牌與門店資訊` form card:
  - Added `Card / 品牌資訊` as a read-only KV/list display with logo and image thumbnails.
  - Added `Card / 門店資訊` as a read-only KV/list display.
  - Moved brand/store cards to the right column below the H5 preview so the brand list appears earlier.
- Recreated prototype hotspots:
  - Electronic menu upload/system-scope switching.
  - Google tabs.
  - Google button-driven progression.
  - Stepper circles for direct step review, skipping only current-frame self-navigation.

## Final Audit

- Micro-site frames: `12`.
- Wrong `Card / 品牌與門店資訊` cards: `0`.
- Required `Card / 品牌資訊` and `Card / 門店資訊`: present in all 12 frames.
- Expected Google step text: matched in all 12 frames.
- Compressed visible text nodes: `0`.
- Stepper direct text outside circle frames: `0`.
- Invalid prototype targets: `0`.
- Column card overlaps: `0`.
- Zero-size prototype hotspots: `0`.
- Prototype hotspots added in this follow-up: `100`, with `0` failures and `0` missing nodes.
- Visible text font audit: `1428` visible text nodes across 12 micro-site frames, `0` non-Roboto nodes.

## Notes

- The micro-site frames use vertical scrolling because the corrected content is longer than the 1320px viewport.
- Existing shared MOS/COMS shell nodes were preserved: top navigation, sidebar, breadcrumb, header/store switch, and footer buttons.
