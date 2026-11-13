# Booking vs Dine-in / Takeaway Analysis - 2026-07-02

## Scope

Compared the latest corrected Tappo App booking module with existing Tappo App dine-in and takeaway modules in Figma file `Tappo App` (`anMsqgZYi8ZqmJXZah78KI`), page `UI`.

Representative frames inspected read-only:

- Booking list: `3318:68380` / `Tappo App / 訂座 / 01 列表-全部`
- Booking form: `3320:69975` / `Tappo App / 訂座 / 04 新增預約表單`
- Dine-in order: `2322:54241` / `點餐-堂食`
- Takeaway order: `109:8641` / `點餐-外賣`
- Takeaway menu management: `2605:62463` / `菜單-外賣菜單`
- Takeaway order management: `0:63633` / `訂單/待處理`

No Figma nodes were modified.

## Core Difference

The booking module is a reservation operations module. Its core object is a future reservation: customer, date/time, party size, area/table preference, channel, and reservation status.

Dine-in and takeaway ordering modules are transactional POS modules. Their core object is an active cart/order: dishes, quantities, price, table or takeaway mode, checkout, payment, and fulfillment.

So booking should feel like a calm management list/form workflow, while dine-in/takeaway should feel like a fast, dense POS workstation.

## Structure And Density

Booking list:

- `343` nodes, `62` text nodes, `29` component instances.
- Single-column reservation list with date/status/search filters.
- Uses Button, Input, Select, Switch, Radio, sidebar, and topbar.

Booking form:

- `301` nodes, `49` text nodes, `23` component instances.
- Form-oriented create-reservation workflow.

Dine-in order:

- `708` nodes, `134` text nodes, `19` component instances.
- Dense POS canvas with menu, cart, table context, totals, and checkout.

Takeaway order:

- `785` nodes, `138` text nodes, `18` component instances.
- Similar POS density to dine-in, but centered on takeaway order mode.

Takeaway menu management:

- `1057` nodes, `149` text nodes, `73` component instances.
- Admin/table-like workflow with Tabs, Selects, Switches, Checkbox, menu/category synchronization, and availability controls.

## Component Usage

Booking after T11/T12 is cleaner in token binding and generic component usage:

- Booking list text colors are bound on `62/62` text nodes.
- Booking form text colors are bound on `49/49` text nodes.
- Tabs are `0`; status switching uses `36` Radio instances across the booking list states.
- Booking uses Button, Input, Select, Switch, Radio, sidebar, and topbar instances.

But booking still feels less native than POS because several business-specific structures are manually composed:

- Reservation list rows/cards.
- Filter bar wrappers.
- Dialog shells.
- Booking summary/detail cards.
- Sidebar/topbar booking labels are overlay text because the existing component instances expose no usable text properties.

Dine-in/takeaway ordering feels more native because it already has domain-specific POS components:

- `購物車`
- `餐品列表`
- cart operation icons
- sidebar/menu icons

Takeaway menu/order management is the most component-rich of the compared external-channel screens:

- Tabs, Tables, Checkbox, Select tags, Switch, Input, Button, sidebar, and topbar.

## Token And Visual System

Booking is currently more token-correct than the older POS order screens:

- Booking uses `Booking color/primary`, `Booking color/background`, `POS color/color-text-*`, `POS color/error`, `POS color/white`, and neutral separator/border variables.
- Booking restores the requested yellow `#F6D365` and gradient `#F6D365 -> #FDCB85`.

Dine-in and takeaway order frames are older and less token-bound:

- Dine-in order text fill binding: `2/134`.
- Takeaway order text fill binding: `2/138`.
- They visually rely more on original POS construction and manual fills.

Takeaway menu management is stronger than the order screens in token usage:

- Text fill binding: `78/149`.
- Stroke binding: `49`.
- Fill binding: `157`.
- Uses both MOH and POS variables.

## Interaction Model

Booking:

- Date/status/search filtering.
- Accept, reject, cancel, mark arrived, mark no-show.
- Create reservation form.
- Service pause state.

Dine-in:

- Select table/headcount.
- Add dishes.
- Edit cart items, remarks, discounts.
- Pay and send order.

Takeaway order:

- Similar dish/cart/checkout flow, but without table occupancy.
- Emphasizes takeaway mode, pickup/order identity, and channel handling.

Takeaway menu/order management:

- Sync third-party menu.
- Manage categories/items/status.
- Process external orders, refunds, delivery/pickup states.

## My View

The biggest difference is component maturity, not just color or spacing.

The existing dine-in and takeaway modules already have business-specific components for their main workflows, so they feel like original product surfaces. The latest booking module is functionally correct and much cleaner in token usage, but it is still assembled from generic Tappo/POS components plus manual booking-specific structures.

To make booking feel as mature as dine-in/takeaway, the design system should add dedicated booking components:

- Booking list row/card.
- Booking status filter group.
- Booking filter bar.
- Booking dialog shell.
- Booking summary/detail card.
- Sidebar/topbar booking variants with editable labels or exposed text properties.

Until those exist, booking is correct as a generated module, but it will still read as more composed than the older POS ordering modules.
