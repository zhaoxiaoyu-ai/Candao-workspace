# Content Realignment Note

Date: 2026-05-19

## Why

The visual polish pass had started to use Figma reference content as if it were product content. This was wrong. The prototype must remain the content baseline.

## Changed

- Re-crawled the prototype pages from `https://tappophone.netlify.app/login_flow`.
- Added `prototype-content-map.md` as the working content checklist.
- Replaced Figma/demo business content on current implemented screens with prototype content.
- Kept generated assets and visual polish as presentation only.

## Updated Pages

- Boss dashboard now uses prototype account balance, today overview, consumption scene table, ordering method table, booking count, notifications, and prototype entries.
- Staff app center now uses prototype greeting, store name, app center, my apps, and Tappo Pad capability guide.
- POS ordering now uses prototype categories, menu items, table/guest labels, empty cart, `送單`, and `付款`.
- Checkout now uses prototype item list, fee summary, tax, discount, total, and payment method options.
- Payment success now uses prototype success amount, payment method, order number, table/guest count, total, return table, and countdown/cancel content.

## Verification

- `npm run typecheck` passed.
- `npm run build` passed.
- Browser snapshots verified key prototype text on:
  - `/`
  - `/staff/apps`
  - `/ordering`
  - `/order-confirm`
  - `/order-info`

## Remaining

Prototype pages not yet implemented should be built from the content map first, then visually refined.
