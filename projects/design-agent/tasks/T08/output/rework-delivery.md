# T08 Rework Delivery

## Target

- Figma file: `Tappo App` (`anMsqgZYi8ZqmJXZah78KI`)
- Page: `UI`
- Section: `T07 / Tappo App / 訂座模塊` (`3296:68872`)
- Direct node link: https://www.figma.com/design/anMsqgZYi8ZqmJXZah78KI/Tappo-App?node-id=3296-68872

## Rework Summary

- Deleted the previous 8 hand-built T07 booking frames inside the booking section only.
- Rebuilt the 8 booking frames from a revised order-page-based shell.
- Kept all work scoped to the booking section; no existing non-booking pages were modified or deleted.
- Reused the existing order page geometry: `侧边栏` + `Component 6` top bar + 1157px main content + 600px right panel.
- Rebuilt `新增預約` as a form page instead of a simplified interaction card/modal.
- Rebuilt date selection and confirmation states using a unified dialog pattern.

## Revised Frames

| Frame | Node ID |
| --- | --- |
| `Tappo App / 訂座 / 01 列表-全部` | `3318:68380` |
| `Tappo App / 訂座 / 02 列表-待確認` | `3320:68138` |
| `Tappo App / 訂座 / 03 服務暫停` | `3320:68826` |
| `Tappo App / 訂座 / 04 新增預約表單` | `3320:69975` |
| `Tappo App / 訂座 / 05 選擇日期` | `3320:70929` |
| `Tappo App / 訂座 / 06 拒絕原因` | `3321:69714` |
| `Tappo App / 訂座 / 07 取消預約` | `3323:70108` |
| `Tappo App / 訂座 / 08 標記爽約` | `3324:70502` |

## Component Reuse Audit

- `侧边栏`: 8 instances
- `Component 6` top bar: 8 instances
- `Button`: 59 instances
- `Select`: 24 instances
- `Input`: 10 instances
- `Tabs`: 36 instances
- `Switch`: 6 instances
- Sidebar nested app/menu/network/notification/exit instances are preserved from the actual Tappo App sidebar component.

## Token / Layout Audit

- Section child frames: 8
- Main frame auto layout: all 8 frames use `HORIZONTAL`.
- Booking theme variables still used for booking color/background/primary/border.
- Token-bound nodes in final audit:
  - Main list: 102
  - Pending list: 102
  - Service paused: 24
  - Add booking form: 16
  - Date / reject / cancel / no-show states: 104 each
- Total prototype reactions: 19

## Known Environment Constraint

- Figma MCP cannot load `OPPO Sans 4.0` or `OPPO Sans` in this environment.
- Imported Tappo component instances keep their original OPPO Sans rendering.
- Newly added override labels and form text use `Inter` because it is the available editable font in the MCP runtime.
- Button/Input/Select/Tabs components do not expose text override properties through `setProperties()`, so visible booking labels are applied as controlled overlay labels while preserving the underlying Tappo component instances.
