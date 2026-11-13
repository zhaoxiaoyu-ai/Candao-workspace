# T14 Figma Booking Regression Fix - 2026-07-02

## Scope

Corrected the visual regressions reported after T13 on the MOS v2 booking pages.

- File: `25.1213 MOS v2`
- File key: `1qe8d4ll9wLnxPAsiJAoa9`
- Page: `UI（確認稿）`
- Scope: the 8 `MOS v2 / 訂座管理` frames.

## Findings

- Booking cards already contained `T06 / V Spacer` / `T06 / H Spacer` nodes, and T13 also applied card-level auto-layout `itemSpacing`. This stacked the gaps and inflated card heights.
- Micro-site baseline card titles use `Roboto SemiBold` at `20 / 28`; booking card titles had drifted to `Roboto Bold` at `16 / 24`.
- The reused date/time module heading had a narrow text box, causing hard wrapping.
- `Modal / 切換供應商` radio option descriptions were pushed to `x=628` by parent auto layout, outside the option field.

## Changes Applied

- Set spacer-based booking cards to `itemSpacing = 0`, letting the existing spacer nodes define the intended rhythm.
- Set those spacer-based cards to hug content vertically.
- Restored booking card titles to `Roboto SemiBold`, `20px`, `28px` line height.
- Kept card descriptions at `Roboto Regular`, `12px`, `20px` line height.
- Widened the date/time module heading to prevent hard wrapping.
- Normalized modal title typography to `Roboto SemiBold`, `20px`, `28px`.
- Fixed `Modal / 切換供應商` radio fields by switching the option containers from auto layout to fixed layout, then placing title and description text inside each option.

## Final Audit

- Spacer cards still using extra card gap: `0`
- Card title typography mismatches: `0`
- Narrow date/time headings: `0`
- Modal text overflow: `0`
- Prototype reactions checked: `33`
- Invalid prototype reactions: `0`

## Visual Artifacts

Before:

- `booking-tappo-regression-before.png`
- `booking-provider-modal-regression-before.png`

After:

- `booking-tappo-after-pass2.png`
- `booking-provider-modal-after-final.png`
- `booking-party-modal-after-pass2.png`

## Notes

- Figma screenshot retrieval triggered one reauthorization prompt during final QA; retry succeeded.
- Screenshot downloads required network-capable `curl` because sandbox DNS access is restricted.
- No local source code changes were needed.
