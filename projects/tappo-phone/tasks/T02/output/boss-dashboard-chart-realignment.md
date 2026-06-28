# Boss Dashboard Chart Realignment

Date: 2026-05-19

## User Direction

- `消費場景` and `點餐方式` may use clearer visual charts.
- Do not add content that is not present in the prototype.

## Implemented

- Replaced the two plain tables with visual chart cards:
  - stacked order-share bar
  - row-level order count meter
  - per-row `應收` and `實收` values
- Preserved every prototype row and value for both sections.
- Removed forced homepage content that was not part of the visible boss dashboard prototype:
  - inline notification detail card
  - extra feature cards such as `數據報表`
  - `已開通應用` summary card
  - assistant marketing copy such as `經營陪跑員小T`
- Changed owner bottom navigation to prototype labels:
  - `主頁`
  - `數據`
  - `設置`
- Kept `數據` and `設置` disabled as placeholders until their prototype pages are implemented.

## 2026-05-19 Soft Icon Revision

- Replaced the harder chart styling with softer iconized data cards.
- Added deterministic code-native `TpSoftIcon` icons instead of relying on cropped bitmap/icon-sheet positions.
- Current icons use fixed `64 x 64` SVG viewBox geometry, so the subject remains centered and cannot drift because of sprite cropping.
- Palette is now constrained to warm orange, soft peach, and muted sage. Strong blue/green chart blocks were removed from these cards.
- Generated bitmap icon sheets should not be used through CSS cropping for production UI unless each icon is exported as a separate centered asset and validated in its final container.

## Verification

- `npm run typecheck`: pass
- `npm run build`: pass
- 402 x 874 mobile visual screenshot:
  - `boss-dashboard-chart-content-402-mobile.png`
  - `boss-dashboard-soft-icon-chart-402-mobile.png`
  - `boss-dashboard-soft-icon-chart-402-full.png`
- Browser console:
  - no warnings or errors found
