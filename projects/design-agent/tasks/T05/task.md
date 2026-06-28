# T05 - MOS v2 FormPage And Existing Module Reuse

## Status

done

## Goal

Correct the generated MOS v2 Figma pages according to the latest design feedback:

- Use actual `input-title` and `select-title` form components for titled form controls.
- Add form-level auto layout using the existing `Layout / Page / FormPage` pattern.
- Align page background color with existing system pages.
- Reuse the existing header title bar and store switching interaction from `設置/業務規則/業務場景設置`.
- Reuse existing date/time business modules from `設置/品牌與門店/門店/創建門店`.

## Target

- Figma file: `25.1213 MOS v2`
- File key: `1qe8d4ll9wLnxPAsiJAoa9`
- Page: `UI（確認稿）`
- Frames: existing 15 `MOS v2 /` generated frames

## Validation

- Titled input/select controls are component instances, not loose text labels.
- Main form areas use auto-layout containers aligned to FormPage conventions.
- Page background matches the reference pages.
- Header title/store switch nodes come from the existing reference pattern.
- Booking date/time modules reuse the existing create-store pattern where applicable.
- Prototype interactions remain valid.

## Result

- Rebuilt all 15 MOS v2 frames with actual COMS `input-title` and `select-title` instances for titled form controls.
- Added a `Layout / Page / FormPage`-style wrapper and two-column auto-layout body to every frame.
- Reused the reference breadcrumb and title/store-switch header from the existing settings page pattern.
- Bound page backgrounds to the system background token.
- Reused the existing create-store date/time business module in 7 booking states.
- Reverse-check found and fixed duplicate date/time headings and modal layer order problems.
- Final lightweight structural audit reported no issues: 15 token-bound backgrounds, 15 FormPage wrappers, 15 two-column bodies, 7 auto-layout date/time cards, and 2 correctly layered modal states.

## Output

- See `output/FIXES.md`.
- Screenshots are stored under `output/screenshots/`.
