# T06 Google Layout Fix Delivery

Date: 2026-06-18

## Scope

- Figma file: `25.1213 MOS v2`
- File key: `1qe8d4ll9wLnxPAsiJAoa9`
- Page: `UI（確認稿）`
- Frames: 15 existing `MOS v2 /` frames, with focused fixes in 7 `微官網管理` Google states.

## Changes

- Repaired collapsed auto-layout form fields:
  - 58 `Field / Checkbox` and `Field / Radio` frames now have usable row-based widths.
  - `T06 / Field Text Stack` children now use fixed content width with visible text.
- Normalized Card styling:
  - 80 `Card / ...` frames match imported COMS `Card`.
  - Radius remains `16px`, with all four corners bound to `borderRadiusLG-16`.
  - Added the COMS Card 4% gray-blue stroke and retained the weak card shadow.
- Rebuilt `Google 門店資訊`:
  - Step numbers/checkmarks are now inside `T06 / Google Step Circle / ...` frames.
  - No direct text nodes remain in the stepper row.
  - Step-specific content now follows the local prototype:
    - No-account Step 1: prefill form, store photos, next-to-registration action.
    - No-account Step 4: bind Google account.
    - No-account Step 6: management mode radio choices and confirm.
    - Yes-account Step 1: authorize Google account.
    - Yes-account Step 4: management mode radio choices and confirm.

## Verification

- Final Figma audit:
  - `compressedTexts`: 0
  - `narrowFields`: 0
  - `cardStyleMismatches`: 0
  - `googleIssues`: 0
  - `allGoogleCards`: 7
  - `stepperCircleCount`: 38
  - `stepperDirectTextCount`: 0
  - `prototypeReactions`: 65
  - `invalidPrototypeTargets`: 0
- Screenshot checks saved in `tasks/T06/output/screenshots/`:
  - `micro_default_t06_google_fix_compact.png`
  - `google_step4_t06_fix.png`
  - `google_step6_t06_fix.png`
  - `google_yes_step1_t06_fix.png`
  - `google_yes_step4_t06_fix.png`

## Notes

- The first full Step 4 screenshot attempt timed out; the follow-up local Google-card screenshots succeeded.
- A timed-out card normalization script did finish on the Figma side; a follow-up read-only audit confirmed all 80 cards were updated.
