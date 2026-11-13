# T19 - Add Auto Layout Structure To MOS Booking App Activation Flow

## Status

done

## Goal

Refactor the MOS application-service opening flow for `訂座管理開通` in Figma so related modal content is grouped and maintained with auto layout, without mixing this work with the previous Tappo App booking module.

Target Figma file:

- File: `25.1213 MOS v2`
- File key: `1qe8d4ll9wLnxPAsiJAoa9`
- Page: `UI（確認稿）`

## Scope

Only the `應用服務中心 / 應用開通 / 訂座管理開通` modal flow is in scope:

- `2093:32399` - `應用服務中心/應用開通/訂座管理開通/服務激活-Tappo Reservation`
- `2093:32853` - `應用服務中心/應用開通/訂座管理開通/服務激活-Minitable 待準備`
- `2093:33329` - `應用服務中心/應用開通/訂座管理開通/服務激活-Minitable 已就緒`
- `2071:30246` - `應用服務中心/應用開通/訂座管理開通/門店未選校驗`
- `2071:30743` - `應用服務中心/應用開通/訂座管理開通/Minitable未完成校驗`
- `2071:31240` - `應用服務中心/應用開通/訂座管理開通/開通成功-Tappo`
- `2071:31737` - `應用服務中心/應用開通/訂座管理開通/開通成功-Minitable`

The earlier T18 work on the previous Tappo App booking module is not counted as the delivery for this request.

## User Feedback To Address

- The requested target is specifically the `訂座管理開通` part inside `應用服務開通`.
- Content in the booking activation modals lacked auto layout and was scattered.
- Group content by relationship so later maintenance is easier.
- Internal content should use auto layout, including text that participates in responsive layout.
- Check for compressed, distorted, hidden, clipped, or abnormally wrapped text after auto-layout changes.
- Check for deformed nodes, misalignment, and abnormal spacing introduced by the adjustment.
- Recheck whether modal-content spacing follows the 8px rule, including major module gaps and title/body spacing.
- Recheck whether any required copy was omitted after the spacing and auto-layout corrections.
- Use `應用服務中心/應用開通/訂座管理開通/服務激活-Tappo Reservation` as the spacing reference page, then sync the later same-type activation pages to the same rhythm.
- Set each `選擇開通門店` option's title-to-description spacing to `0px`; same-type title-description row structures can follow this rule.

## Completion Notes

The Figma correction was executed on 2026-07-03. The modal flow was restructured with grouped auto-layout containers for:

- Modal header.
- App summary.
- Supplier selection and supplier cards.
- Supplier detail / Minitable setup steps.
- Store selection and store rows.
- Success message content.
- Footer actions.

A follow-up repair corrected 40 compressed auto-layout stacks that had retained 1px fixed height after grouping. This restored proper content-hug heights for app copy, supplier copy, Minitable steps, store rows, store copy, and success-copy stacks.

The final 8pt follow-up normalized modal-content spacing and padding, fixed supplier-card row overflow, and restored the missing supplier charge helper copy `以實際產生的訂單數量收費` across all supplier cards.

A final reference-sync pass used the Tappo Reservation activation page as the spacing standard for the later same-type activation pages. The Minitable pending, Minitable ready, missing-store validation, and Minitable unfinished validation pages now match the reference rhythm for supplier selection height, supplier card-row position, supplier-to-detail gap, detail-to-store gap, store-to-footer gap, and footer bottom padding.

The latest copy-spacing follow-up set the `選擇開通門店` title-description spacing to `0px` across same-type modal states, and also normalized the same title-description pattern inside Minitable setup steps.

Final verification confirmed 0 reference-spacing mismatches, 0 non-8 modal-content spacing issues, 0 non-zero title-description gaps in the targeted stacks, 0 compressed/clipped text issues, 0 overflow issues, 0 missing required copy, 12 prototype reactions, and 0 missing prototype destinations. Screenshots and details are in `output/figma-mos-booking-activation-autolayout-2026-07-03.md`.
