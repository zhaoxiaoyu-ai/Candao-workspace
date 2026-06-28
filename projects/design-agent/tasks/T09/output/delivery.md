# T09 Delivery - Tappo App 訂座模塊修正

## Figma Target

- File: `Tappo App`
- File key: `anMsqgZYi8ZqmJXZah78KI`
- Main review frame: `Tappo App / 訂座 / 01 列表-全部`
- Main frame node: `3318:68380`
- Link: https://www.figma.com/design/anMsqgZYi8ZqmJXZah78KI/Tappo-App?node-id=3318-68380

## Completed Changes

- Removed the right-side `今日訂座總覽` panel from all booking list/modal-backed frames.
- Converted the booking content area to a single-column layout using the existing order-page shell: actual `侧边栏`, actual `Component 6` top bar, and full-width `Component 8`-style body geometry.
- Replaced the previous status Tabs row with an auto-layout `Radio-group / 狀態切換` row composed from actual Tappo `Radio` component instances.
- Preserved Tappo Button/Input/Select/Switch component instances; removed Tabs instances from the booking status switch.
- Bound all manual booking text fills to Tappo `POS color` or `Booking color` variables.
- Bound eligible manual text sizes to Tappo `font-size/*` variables.
- Updated booking primary yellow to `#9A6A00`, because original `#F6D365` and `#FDCB85` do not provide enough contrast for white button text.
- Bound all primary booking button covers to `Booking color/primary` and their labels to `POS color/white`.

## Audit Results

- Booking frames: `8`
- Right panels remaining: `0`
- Tabs instances remaining in booking frames: `0`
- Tappo `Radio` instances in status rows: `36`
- `Radio-group / 狀態切換` rows: `6`
- Tappo `Button` instances: `59`
- Tappo `Input` instances: `10`
- Tappo `Select` instances: `10`
- Tappo `Switch` instances: `6`
- Manual booking text nodes with color token binding: `346 / 346`
- Manual booking text nodes with font-size token binding: `293 / 346`
- Primary booking covers bound to `Booking color/primary`: `28`
- Primary booking labels bound to `POS color/white`: `28`
- Prototype reactions: `48`
- Invalid reaction targets: `0`

## Notes

- The Tappo library search found `Radio`, `radio-group`, and `Radio-group`. The `radio-group` component set is text-only, while the usable radio control is the `Radio` component set. The revised status switch therefore uses actual `Radio` instances inside an auto-layout wrapper named `Radio-group / 狀態切換`.
- Figma MCP still cannot load `OPPO Sans 4.0` or `OPPO Sans`. Existing imported Tappo component instances keep their original rendering; newly created editable labels use Inter because it is the available runtime font.

## Visual Review Artifacts

- List page screenshot: `tasks/T09/output/booking-single-column-all.png`
- Form page screenshot: `tasks/T09/output/booking-form-single-column.png`
