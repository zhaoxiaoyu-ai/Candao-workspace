# Settings Page Figma-Inspired Pass

Date: 2026-05-22

## Inputs

- Figma reference: `https://www.figma.com/design/anMsqgZYi8ZqmJXZah78KI/Tappo-App?node-id=287-32144&m=dev`
- Parsed Figma file/node: `anMsqgZYi8ZqmJXZah78KI / 287:32144`
- Implementation target: Tappo Phone mobile WebView, adapted from the wide POS settings composition rather than copied as desktop layout.

## Result

- Added mobile settings route at `/settings`.
- Enabled the owner bottom-nav settings entry.
- Added `src/pages/SettingsPage.vue`.
- Added project-bound generated raster asset: `src/assets/generated/tappo-settings-hero.png`.
- Captured visual smoke screenshot: `tasks/T02/output/settings-figma-inspired-402-mobile.png`.

## Visual Direction Applied

- Figma-derived settings content kept visible: hardware/external devices, system configuration, account balance, onboarding task, feedback, restart/logout.
- Phone layout uses stacked mobile cards, 14px+ readable supporting text, warm Tappo orange, light card surfaces, soft blue balance treatment, and generated/semi-3D POS hardware illustration.
- Existing per-icon generated PNG component remains the icon delivery path to avoid sprite-crop drift.

## Image Generation

- Built-in image generation path was used.
- Final prompt intent: semi-3D Tappo restaurant POS settings illustration with POS terminal, receipt printer, cash drawer, payment card, settings gear, warm orange accents, solid warm cream background, no text/logos/watermarks.
- First generated image had a checkerboard-like background and was replaced by a second image with a solid warm cream background.

## Verification

- `npm run typecheck` passed.
- `npm run build` passed.
- Chrome headless screenshot at `402 x 874` passed basic visual smoke review.

## Notes

- Local Vite server is currently available at `http://127.0.0.1:5175/` because port `5174` was already occupied by another process.
