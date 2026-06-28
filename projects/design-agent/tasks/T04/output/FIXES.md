# T04 Output - MOS v2 Shared Shell And Style Correction

## Figma Target

- File: `25.1213 MOS v2`
- File key: `1qe8d4ll9wLnxPAsiJAoa9`
- Page: `UI（確認稿）`
- Scope: existing 15 `MOS v2 /` generated frames

## Changes Applied

- Replaced old generated sidebar visuals with shared COMS `Sidebar` instances in all 15 frames.
- Replaced old manual breadcrumb text with shared COMS `Breadcrumb` instances in all 15 frames.
- Replaced old footer shell visuals with shared COMS `FormFooter` instances in all 15 frames.
- Added 30 linked COMS footer action buttons at the right side of the shared footer bars; FormFooter's internal button positions are not overridable, so the internal buttons were hidden.
- Set all generated text nodes to Roboto.
- Restyled 78 input labels to the COMS `input-title` title style: Roboto Medium, 14px, 22px line height.
- Restyled 80 `Card /` containers to COMS Card styling: 16px radius, white fill, subtle border, and `0/0/8` light shadow.

## Validation

- Frame count: 15
- Shared Sidebar instances: 15
- Shared Breadcrumb instances: 15
- Shared FormFooter instances: 15
- Linked footer Button instances: 30
- Non-Roboto text nodes: 0
- Input label style mismatches: 0
- Card style mismatches: 0
- Prototype reactions: 65
- Invalid prototype destinations: 0
- Direct out-of-bounds children: 0

## Screenshot Checks

- `mw-default-t04-fixed.png`
- `booking-tappo-t04-fixed.png`
