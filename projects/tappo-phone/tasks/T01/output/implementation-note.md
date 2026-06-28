# T01 Implementation Note

## Completed

- Created a clean `Vue 3 + TypeScript + Vite` app in `projects/tappo-phone/source`.
- Added Pinia, Vue Router, vue-i18n, conditional PWA config, and Tappo logo asset.
- Added Tappo visual tokens, global mobile layout rules, and self-built base components:
  - `TpButton`
  - `TpCard`
  - `TpTopBar`
  - `TpBottomNav`
  - `TpDialog`
  - `TpBottomSheet`
- Defined Flutter WebView bridge request/response types and a development mock bridge.
- Centralized mock data and mock API calls under `src/mocks/` and `src/services/mockApi.ts`.
- Implemented first routes:
  - `/` owner dashboard
  - `/staff/apps` staff app center
  - `/ordering` ordering flow
  - `/order-confirm` order confirmation and payment request state
  - `/order-info` order detail / payment pending
  - `/design-spec` design spec preview

## Adjustments Made From Prototype Sources

- Remapped the old 375px ordering structure to the new 402px primary validation viewport.
- Kept owner settings/staff settings separation in navigation assumptions; staff application center links into staff flows only.
- Applied the subtotal + tax + packaging fee total formula as a mock placeholder with a clearly marked 10% tax rule.
- Treated KPay as a third-party return flow and provided a Web-side payment pending state.
- Implemented Tappo Pad App Store / MOS URL actions through the bridge mock.
- PWA support is present but disabled by default.

## Verification

- `npm run typecheck` passed.
- `npm run build` passed.
- Local dev server started at `http://127.0.0.1:5174/`.
- Browser smoke test at `402 x 874` passed through:
  - owner dashboard
  - ordering guest dialog
  - add item
  - confirm order
  - payment pending
  - order detail
- No console warnings/errors were found during smoke test.

## Artifacts

- `owner-dashboard-402.png`
- `ordering-flow-402.png`
