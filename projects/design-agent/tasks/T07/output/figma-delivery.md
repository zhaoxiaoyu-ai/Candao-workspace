# T07 Figma Delivery

> Superseded on 2026-06-17 by T08. Use `projects/design-agent/tasks/T08/output/rework-delivery.md` and the revised node IDs there for review.

## Target

- Figma file: `Tappo App` (`anMsqgZYi8ZqmJXZah78KI`)
- Page: `UI`
- Section: `T07 / Tappo App / 訂座模塊` (`3296:68872`)
- Direct node link: https://www.figma.com/design/anMsqgZYi8ZqmJXZah78KI/Tappo-App?node-id=3296-68872
- Canvas position when checked: `x=5934`, `y=-30393`
- Source prototype: `E:\Downloads\Tappo0615\prototypes\pad\booking.html`
- Prototype MCP: `E:\Downloads\Tappo0615\mcp\tappo-prototypes-mcp`

## Scope

- Built the Tappo App booking module only.
- Did not modify or delete existing non-booking pages.
- Did not use `.pen`; Pencil MCP is only needed for encrypted `.pen` design files, while this task used the local Tappo prototype MCP and Figma MCP.

## Booking Theme

- Primary: `#F6D365`
- Gradient: `#F6D365` to `#FDCB85`
- Local Figma variable collection: `Tappo App / Booking Theme`
- Variables created:
  - `Booking color/background`
  - `Booking color/primary`
  - `Booking color/border`

## Frames

| Frame | Node ID |
| --- | --- |
| `Tappo App / 訂座 / 01 列表-全部` | `3296:68137` |
| `Tappo App / 訂座 / 02 列表-待確認` | `3297:67523` |
| `Tappo App / 訂座 / 03 服務暫停` | `3297:67696` |
| `Tappo App / 訂座 / 04 新增預約` | `3297:67869` |
| `Tappo App / 訂座 / 05 選擇日期` | `3297:68042` |
| `Tappo App / 訂座 / 06 拒絕原因` | `3297:68215` |
| `Tappo App / 訂座 / 07 取消預約` | `3297:68388` |
| `Tappo App / 訂座 / 08 標記爽約` | `3297:68561` |

## Interactions

- `列表-全部` to `新增預約`
- `列表-全部` to `服務暫停`
- `列表-全部` to `列表-待確認`
- `列表-待確認` to `列表-全部`
- Pending actions: accept, reject, arrived, cancel, no-show
- `新增預約` to `選擇日期`
- Date picker confirm/back to `新增預約`
- Modal close/cancel/confirm paths back to the correct list state

## Final Audit

- Section child frames: 8
- Frame size: 1920 x 1200
- Main frame auto layout: `HORIZONTAL` on all 8 frames
- Prototype reactions: 25
- Missing reaction targets: 0
- Booking theme variables present: yes

## Notes

- Figma MCP could not load `OPPO Sans 4.0` for newly generated manual modal/overlay text, so new text uses `Inter Regular`.
- Imported Tappo component styling was kept where possible.
- Figma MCP had intermittent transport failures; final build was completed through smaller incremental writes and audited successfully.
- If the section is not visible in the canvas, open the direct node link or search the layer name `T07 / Tappo App / 訂座模塊`; the section sits far above the common canvas area.
