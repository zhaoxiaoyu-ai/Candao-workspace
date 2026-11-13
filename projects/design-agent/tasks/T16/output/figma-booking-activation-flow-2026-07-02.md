# T16 - MOS v2 Booking Activation Flow

## Scope

Completed the missing `訂座管理` application activation modal flow in `25.1213 MOS v2` (`1qe8d4ll9wLnxPAsiJAoa9`), page `UI（確認稿）`.

Prototype reference: `https://tappophone.netlify.app/admin-web/svc-open.html`

Layout reference: existing `應用服務中心 / 應用開通 / 服務激活` modal pattern.

## Figma Frames

- `39:563` - `應用服務中心/應用開通`
- `1866:24972` - `MOS v2 / 訂座管理 / 01 未開通`
- `2093:32399` - `應用服務中心/應用開通/訂座管理開通/服務激活-Tappo Reservation`
- `2093:32853` - `應用服務中心/應用開通/訂座管理開通/服務激活-Minitable 待準備`
- `2093:33329` - `應用服務中心/應用開通/訂座管理開通/服務激活-Minitable 已就緒`
- `2071:30246` - `應用服務中心/應用開通/訂座管理開通/門店未選校驗`
- `2071:30743` - `應用服務中心/應用開通/訂座管理開通/Minitable未完成校驗`
- `2071:31240` - `應用服務中心/應用開通/訂座管理開通/開通成功-Tappo`
- `2071:31737` - `應用服務中心/應用開通/訂座管理開通/開通成功-Minitable`

## Implemented Flow

- Updated the application center booking card to show `Tappo Reservation / Minitable Reservation`, price `1 點數 / 單`, and current booking-specific description.
- Connected `MOS v2 / 訂座管理 / 01 未開通` CTA to the application center.
- Rebuilt the booking service activation modal with `訂座管理` identity, supplier selection, store multi-select, supplier-specific configuration, validation, and success states.
- Added Tappo branch content for direct MOS/Tappo setup after activation.
- Added Minitable branch content for account authorization, store mapping, and order/report callback readiness.
- Added validation states:
  - Missing store: `門店至少選擇一個才可以提交開通。`
  - Minitable incomplete: `請先完成 Minitable 的帳號授權、門店映射與訂單回傳準備。`
- Added success states for both suppliers, with next-step guidance to `設置 > 訂座管理`.

## Design-System Notes

- Reused the subscribed MOS/COMS component instances for buttons, checkboxes, and radio controls.
- Reused existing MOS application card, sidebar, top navigation, and service-center page structure.
- Kept the modal shell aligned to the existing service activation pattern: 536 px width, consistent header, divider, mask, footer, radius, and shadow.
- Used existing local variables/tokens for key fills and text colors where available.
- Minitable step buttons retain the underlying Button component instances. Because the component did not expose text sizing as an overridable property, visible labels were added as token-colored overlay text to prevent clipped/blank button labels while preserving the component chrome and state.

## Final Audit

- Missing frames: `0`
- Required copy failures: `0`
- Old modal copy inside T16 modals: `0`
- Suspicious modal text wrapping warnings: `0`
- Invalid prototype destinations: `0`
- Prototype hotspots:
  - App open entry: `1`
  - Booking unopened entry: `2`
  - Tappo activation: `3`
  - Minitable pending: `3`
  - Minitable ready: `2`
  - Missing-store validation: `1`
  - Minitable unfinished validation: `1`
  - Tappo success: `1`
  - Minitable success: `1`

Component instance audit highlights:

- Tappo activation: Button `2`, Checkbox `3`, Radio `2`
- Minitable pending: Button `5`, Checkbox `3`, Radio `2`
- Minitable ready: Button `7`, Checkbox `3`, Radio `2`
- Missing-store validation: Button `2`, Checkbox `3`, Radio `2`
- Minitable unfinished validation: Button `5`, Checkbox `3`, Radio `2`
- Success modals: Button `2` each

## Screenshots

- `t16-app-open-updated.png`
- `t16-activation-tappo.png`
- `t16-activation-minitable-pending.png`
- `t16-activation-minitable-ready.png`
- `t16-validation-missing-store.png`
- `t16-validation-minitable-unfinished.png`
- `t16-success-tappo.png`
- `t16-success-minitable.png`

## Notes

No local source-code tests were required; this was a Figma design/prototype update. Validation used Figma structural audits plus exported screenshot review.

Follow-up correction: the original `三方外賣鏈接` service activation frames at `903:17214`, `903:18776`, and `919:19848` were restored after user review. Booking activation was moved to the separate `2093:*` nodes above. See `figma-booking-activation-flow-correction-2026-07-02.md`.
