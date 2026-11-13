# T14 - Correct MOS v2 Booking Visual Regression After T13

## Status

done

## Goal

Fix the visual regressions reported after T13 on the MOS v2 booking/reservation pages.

## Figma Target

- File: `25.1213 MOS v2`
- File key: `1qe8d4ll9wLnxPAsiJAoa9`
- Page: `UI（確認稿）`
- Baseline: `MOS v2 / 微官網管理 / 01 默認` (`1866:19820`)
- Scope: the 8 `MOS v2 / 訂座管理` frames updated in T13.

## User Feedback

- Spacing became strange after the previous sync, likely related to auto-layout.
- Modal/dialog specifications are inconsistent.
- Font weights look inconsistent.
- Many abnormal text line breaks may be caused by constrained text widths.

## Requirements

- Diagnose before writing: compare booking frames against the micro-site baseline and identify specific layout/text causes.
- Fix abnormal text wrapping by correcting text auto-resize modes, explicit widths, and parent constraints instead of shrinking font sizes.
- Restore baseline-like spacing rhythm without over-compressing nested modules.
- Align modal overlay/dialog width, padding, title/body/action spacing, and typography to the existing MOS/micro-site modal pattern.
- Preserve component-library instances and Design Token bindings.
- Keep prototype reactions valid and avoid modifying unrelated pages/frames.

## Planned Validation

- Run a structural audit for narrow text, auto-layout compression, modal inconsistencies, font-weight mismatches, and suspicious spacing.
- Apply targeted fixes in small Figma writes.
- Re-run the audit and save before/after visual screenshots.
- Write execution notes under `output/`.

## Completion

- Completed on 2026-07-02 in the active `25.1213 MOS v2` Figma file.
- Confirmed the primary root cause was spacer stacking: T13 added card-level auto-layout spacing while the booking cards already contained `T06 / V Spacer` and `T06 / H Spacer` nodes.
- Fixed booking card spacing, title typography, date/time heading width, and provider modal radio text overflow.
- Final audit and screenshots are recorded in `output/figma-booking-regression-fix-2026-07-02.md`.
