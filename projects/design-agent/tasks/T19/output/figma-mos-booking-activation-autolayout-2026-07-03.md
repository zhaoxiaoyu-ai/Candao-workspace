# T19 MOS Booking Activation Auto Layout - 2026-07-03

## Summary

Figma access was available through the official `mcp__figma` toolset. This pass corrected the intended scope after the user clarified that the request referred to `應用服務開通` -> `訂座管理開通`, not the previous Tappo App booking module.

Work was completed in `25.1213 MOS v2` (`1qe8d4ll9wLnxPAsiJAoa9`) page `UI（確認稿）`.

## Modified Frames

- `2093:32399` - `應用服務中心/應用開通/訂座管理開通/服務激活-Tappo Reservation`
- `2093:32853` - `應用服務中心/應用開通/訂座管理開通/服務激活-Minitable 待準備`
- `2093:33329` - `應用服務中心/應用開通/訂座管理開通/服務激活-Minitable 已就緒`
- `2071:30246` - `應用服務中心/應用開通/訂座管理開通/門店未選校驗`
- `2071:30743` - `應用服務中心/應用開通/訂座管理開通/Minitable未完成校驗`
- `2071:31240` - `應用服務中心/應用開通/訂座管理開通/開通成功-Tappo`
- `2071:31737` - `應用服務中心/應用開通/訂座管理開通/開通成功-Minitable`

## Key Changes

- Added semantic `T19 / Group / ...` auto-layout wrappers for modal header, app summary, supplier selection, supplier detail, store selection, success message, and footer actions.
- Grouped supplier cards into auto-layout card rows and internal header/copy stacks while preserving the Radio component instances.
- Grouped Minitable setup into a steps stack, with each step row and step copy using auto layout.
- Grouped store rows and store copy so checkbox, store name, and address are maintained as related content.
- Grouped success icon, success title, description copy, and footer actions in the two success modals.
- Preserved existing MOS/COMS component instances and Design Token usage from the T16 activation flow.

## Follow-Up Fix

Visual review after the first grouping pass found several deformed or misaligned areas. Root cause: multiple auto-layout stacks were created correctly but retained a 1px fixed height, so visible text appeared to fall outside its group.

Fixed 40 compressed stacks:

- App copy stacks: `1px` -> content height.
- Supplier copy stacks: `1px` -> content height.
- Minitable steps stacks: `1px` -> `208px`.
- Store rows stacks: `1px` -> `184px`.
- Store copy stacks: `1px` -> `40px`.
- Success copy stacks: `1px` -> `104px`.

Also expanded outer store/header groups where content was short by 1-2px.

## Final Audit

- Target modal frames: `7`
- Compressed auto-layout groups: `0`
- Group overflow issues: `0`
- Auto-layout `T19` groups: `170`
- Prototype reactions in the booking activation flow: `12`
- Missing prototype destinations: `0`

Narrow required-star text and avatar initials are intentionally small and were not treated as layout defects.

## 8pt Spacing And Copy Follow-Up

After the follow-up request to recheck the 8px spacing rule and missing copy, the booking activation modals were audited again at modal-content scope.

Adjustments made:

- Normalized content-level gaps and auto-layout paddings for app summary, supplier cards, supplier detail, Minitable setup steps, store rows, and success-message blocks.
- Fixed the supplier-card row overflow by fitting the card row inside the supplier-selection group without compressing the 22px title text.
- Removed stale empty success-state groups left from earlier activation modal structure.
- Restored the missing supplier charge helper copy `以實際產生的訂單數量收費` across all supplier cards so Tappo and Minitable states are consistent.

Final scoped audit after the follow-up:

- Non-8 auto-layout spacing/padding values in T19 modal content: `0`
- Non-8 measured gaps between modal modules and text stacks: `0`
- Content overflow issues: `0`
- Compressed or clipped text issues: `0`
- Missing required copy: `0`
- Stale success-state groups: `0`

## Tappo Reference Spacing Follow-Up

After the user asked to use `應用服務中心/應用開通/訂座管理開通/服務激活-Tappo Reservation` as the reference page, the later same-type activation pages were synced to that page's spacing rhythm.

Reference rhythm:

- Supplier selection group: `192px` high.
- Supplier card row: `y=32`, `160px` high.
- Header -> app summary: `40px`.
- App summary -> supplier selection: `24px`.
- Supplier selection -> provider detail: `8px`.
- Provider detail -> store selection: `24px`.
- Store selection -> footer actions: `24px`.
- Footer bottom padding: `16px`.

Synced pages:

- `2093:32853` - Minitable pending: modal `984px` -> `992px`, supplier group `200px` -> `192px`, provider detail `y=384` -> `368`, footer `y=928` -> `936`.
- `2093:33329` - Minitable ready: modal `984px` -> `992px`, supplier group `200px` -> `192px`, provider detail `y=384` -> `368`, footer `y=928` -> `936`.
- `2071:30246` - missing-store validation: modal `864px` -> `824px`, supplier group `200px` -> `192px`, provider detail `y=384` -> `368`, store selection `y=520` -> `504`, footer `y=808` -> `768`.
- `2071:30743` - Minitable unfinished validation: modal `984px` -> `992px`, supplier group `200px` -> `192px`, provider detail `y=384` -> `368`, footer `y=928` -> `936`.

Final reference-spacing audit:

- Reference rhythm mismatches across the reference page plus 4 later same-type pages: `0`
- Supplier selection spacing mismatches: `0`
- Footer bottom padding mismatches: `0`
- Missing-font issues: `0`

Representative measured module gaps after the reference sync:

- Tappo reference / missing-store flow: header -> app `40`, app -> supplier `24`, supplier -> detail `8`, detail -> store `24`, store -> footer `24`, footer bottom `16`.
- Minitable flow: header -> app `40`, app -> supplier `24`, supplier -> detail `8`, detail -> store `24`, store -> footer `24`, footer bottom `16`.
- Success flow: header -> success message `32`, success message -> footer `24`.

## Visual QA Screenshots

- `t19-booking-activation-tappo.png`
- `t19-booking-activation-minitable-pending.png`
- `t19-booking-activation-minitable-ready.png`
- `t19-booking-activation-missing-store-validation.png`
- `t19-booking-activation-minitable-validation.png`
- `t19-booking-activation-success-tappo.png`
- `t19-booking-activation-success-minitable.png`

Screenshot review after the repair found no remaining obvious text compression, clipped store addresses, supplier-card text overflow, Minitable step-row deformation, modal footer overlap, or success-message misalignment.

Additional final 8pt follow-up screenshots:

- `figma-mos-booking-activation-tappo-final-8pt.png`
- `figma-mos-booking-activation-minitable-pending-final-8pt.png`
- `figma-mos-booking-activation-minitable-ready-final-8pt.png`
- `figma-mos-booking-activation-missing-store-final-8pt.png`
- `figma-mos-booking-activation-minitable-unfinished-final-8pt.png`
- `figma-mos-booking-activation-success-tappo-final-8pt.png`
- `figma-mos-booking-activation-success-minitable-final-8pt.png`

Final screenshot review after the 8pt follow-up found no visible supplier-card squeezing, abnormal text wrapping, modal footer overlap, or success-modal misalignment.

The final 8pt screenshots were overwritten after the Tappo-reference sync for the reference page and 4 later same-type activation pages. Visual review found no new crowding in the Minitable setup area and no red validation text overlap in the two validation states.

## Store Option Copy Spacing Follow-Up

After the user clarified that each `選擇開通門店` option should use `0px` spacing between the store title and helper/address text, the same title-description row pattern was normalized.

Adjusted structures:

- Store option copy stacks in Minitable pending, Minitable ready, missing-store validation, and Minitable unfinished validation: `8px` -> `0px`.
- The Tappo Reservation reference store option stacks were already `0px`, so they were left unchanged.
- Same-type Minitable setup step copy stacks (`帳號授權`, `門店映射`, `訂單回傳`) were also normalized from `8px` -> `0px`.

Verification:

- Checked target title-description stacks: `24`
- Remaining non-zero title-description gaps: `0`
- Mutated stacks: `21`
- Visual review of the updated Minitable pending and Minitable unfinished screenshots found no row deformation, clipping, or crowding after the spacing change.

## Note

T18 was a completed cleanup of the previous Tappo App booking module, but it was not the intended target for this user correction. This T19 record is the delivery for `應用服務開通` -> `訂座管理開通`.
