# T06 - MOS v2 Real Card And Form Auto Layout

## Status

done

## Goal

Correct the MOS v2 Figma pages after design feedback that auto layout is still not actually applied deeply enough.

## Scope

- Figma file: `25.1213 MOS v2`
- File key: `1qe8d4ll9wLnxPAsiJAoa9`
- Page: `UI（確認稿）`
- Frames: MOS v2 generated frames; follow-up expanded `微官網管理` to 12 frames.

## Requirements

- Keep the existing shared shell, FormPage wrapper, two-column page body, header/store switch, background token, and prototype links.
- Convert form/card interiors from absolute positioning to real auto-layout groups where possible.
- Use horizontal form rows for titled controls and action rows.
- Keep `input-title` and `select-title` as linked component instances.
- Recheck after changes for obvious layout issues and inconsistent non-auto-layout card structures.

## Validation

- Cards that hold structured form content use auto layout.
- Form rows inside cards use auto layout.
- Remaining absolute-position children are limited to intentional prototype hotspots, fixed shells, or complex reused modules that should not be detached.
- No obvious visual overlap or broken modal layering is introduced.

## Completion Notes

- Fixed the post-auto-layout regression where Field frames and `T06 / Field Text Stack` nodes collapsed to 16px / 1px widths.
- Normalized all 80 MOS v2 cards to the imported COMS Card visual style and bound card corner radii to `borderRadiusLG-16`.
- Rebuilt the 7 `Google 門店資訊` cards with grouped step-circle frames, auto-layout step labels, and step-specific prototype-accurate content.
- Final Figma audit confirmed 0 compressed text nodes, 0 narrow Field frames, 0 card-style mismatches, 7 valid Google cards, 38 grouped step circles, and 0 direct text nodes in steppers.
- Prototype audit retained 65 reactions with 0 invalid targets.
- Follow-up on 2026-06-18 corrected product/design feedback:
  - Expanded `微官網管理` to 12 frames so Google no-account Step 1-6 and existing-account Step 1-4 are all reviewable.
  - Restored missing no-account Step 2, Step 3, Step 5 and existing-account Step 2, Step 3 from the local `mw.html` prototype.
  - Rebuilt `電子菜單設置` so upload mode and system-menu generation have different child operations.
  - Replaced the erroneous `品牌與門店資訊` form with read-only `品牌資訊` and `門店資訊` list cards.
  - Added 100 corrected menu/Google prototype hotspots.
- Follow-up audit confirmed 12 micro-site frames, 0 wrong `品牌與門店資訊` cards, 0 compressed visible text nodes, 0 invalid prototype targets, 0 column card overlaps, and 0 zero-size prototype hotspots.
