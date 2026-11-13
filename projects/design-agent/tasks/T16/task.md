# T16 - MOS v2 Booking App Activation Flow

## Status

done

## Goal

Add the missing `訂座管理` application activation modal flow to MOS v2, based on the `svc-open.html` prototype and the existing `應用服務中心 / 應用開通 / 服務激活` layout reference.

## Figma Target

- File: `25.1213 MOS v2`
- File key: `1qe8d4ll9wLnxPAsiJAoa9`
- Page: `UI（確認稿）`
- Primary reference: `應用服務中心 / 應用開通 / 服務激活`
- Booking entry page: `MOS v2 / 訂座管理 / 01 未開通`

## Prototype Source

- `https://tappophone.netlify.app/admin-web/svc-open.html`

## Requirements

- Update the application opening flow so `訂座管理` no longer appears as a single-provider/simple confirmation flow.
- The service activation modal must include:
  - `訂座管理` application identity.
  - Store multi-select with at least one store required.
  - Supplier selection between `Tappo Reservation` and `Minitable Reservation`.
  - Supplier-specific detail content.
  - Tappo branch: direct MOS setup behavior after activation.
  - Minitable branch: account authorization, store mapping, and order/report callback readiness.
  - Validation states for missing store selection and unfinished Minitable preparation.
  - Success feedback with next-step guidance.
- Preserve the existing MOS v2 shell, modal style, typography rhythm, component-library usage, Design Tokens, and valid prototype navigation.

## Planned Validation

- Inspect existing service activation and booking frames before writing.
- Apply scoped Figma updates/additions only to MOS v2 application activation / booking activation flow frames.
- Re-run a structural audit for required flow states, text overflow, component/token usage, and invalid prototype reactions.
- Save screenshots and execution notes under `output/`.

## Completion Notes

Completed on 2026-07-02 in Figma file `25.1213 MOS v2` (`1qe8d4ll9wLnxPAsiJAoa9`) on page `UI（確認稿）`.

Updated / created booking flow frames:

- `39:563` - `應用服務中心/應用開通`
- `1866:24972` - `MOS v2 / 訂座管理 / 01 未開通`
- `2093:32399` - `應用服務中心/應用開通/訂座管理開通/服務激活-Tappo Reservation`
- `2093:32853` - `應用服務中心/應用開通/訂座管理開通/服務激活-Minitable 待準備`
- `2093:33329` - `應用服務中心/應用開通/訂座管理開通/服務激活-Minitable 已就緒`
- `2071:30246` - `應用服務中心/應用開通/訂座管理開通/門店未選校驗`
- `2071:30743` - `應用服務中心/應用開通/訂座管理開通/Minitable未完成校驗`
- `2071:31240` - `應用服務中心/應用開通/訂座管理開通/開通成功-Tappo`
- `2071:31737` - `應用服務中心/應用開通/訂座管理開通/開通成功-Minitable`

Follow-up correction after user review: the original `應用服務中心/應用開通/服務激活` frames at `903:17214`, `903:18776`, and `919:19848` were restored for the `三方外賣鏈接` application flow. The booking flow was moved to separate nodes listed above, and app-center hotspots now route `三方外賣連接` to `903:17214` and `訂座管理` to `2093:32399`.

Final validation confirmed required copy present, no old service-activation modal copy inside the new modals, no suspicious modal text wrapping, and all T16 prototype destinations valid.

Execution notes and screenshots are in `tasks/T16/output/figma-booking-activation-flow-2026-07-02.md`.
The follow-up separation/restoration note is in `tasks/T16/output/figma-booking-activation-flow-correction-2026-07-02.md`.
