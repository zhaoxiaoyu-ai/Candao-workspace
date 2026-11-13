# T15 Figma Booking Workbench Concept

Date: 2026-07-02

## Target

- Figma file: `Tappo App`
- File key: `anMsqgZYi8ZqmJXZah78KI`
- Page: `UI`
- New board: `T15 / Tappo App / 訂座工作台概念 v1`
- Board node: `3635:71799`

## Created Frames

- `T15 / 訂座工作台 / 01 今日處理` (`3635:71802`)
  - Link: `https://www.figma.com/design/anMsqgZYi8ZqmJXZah78KI/Tappo-App?node-id=3635-71802`
- `T15 / 訂座工作台 / 02 新增預約` (`3635:72013`)
  - Link: `https://www.figma.com/design/anMsqgZYi8ZqmJXZah78KI/Tappo-App?node-id=3635-72013`
- `T15 / 訂座工作台 / 03 拒絕原因` (`3635:72136`)
  - Link: `https://www.figma.com/design/anMsqgZYi8ZqmJXZah78KI/Tappo-App?node-id=3635-72136`

## Design Direction

This concept shifts the booking module from a generic reservation list into a booking workbench:

- Primary surface: single booking queue/list.
- Secondary surface: selected-reservation processing desk, not the old `今日訂座總覽`.
- Booking operations: confirm, contact, reschedule/table-type adjustment, reject.
- Add booking flow: form plus live availability/capacity summary.
- Risk operation flow: rejection modal with standardized reasons and internal note.

## Theme And Token Intent

- Preserved booking yellow `#F6D365`.
- Preserved accent gradient `#F6D365 -> #FDCB85`.
- Did not use T09 dark yellow `#9A6A00`.
- Yellow surfaces use dark text behavior rather than white text because `#F6D365 + white text` is not contrast-safe.
- The write script found the expected local variables for booking background, booking primary, white, primary/secondary/error text, separator text-8%, and POS primary.

## Visual QA

Screenshots were generated from the created Figma nodes, downloaded, and inspected:

- `t15-booking-workbench-01.png`
- `t15-booking-workbench-02.png`
- `t15-booking-workbench-03.png`

First screenshot pass revealed text-height compression in auto-layout stacks. A follow-up Figma write loaded the used fonts and fixed 237 text node bounds. The second screenshot pass confirmed the main workbench no longer has obvious title, metric, row, or detail-panel text overlap.

A lightweight final Figma audit confirmed all three created frames exist at `1920 x 1200`, contain 235 text nodes in total, and contain `0` solid fill/stroke usages of the old dark yellow `#9A6A00`.

## Scope Guard

No existing booking, dine-in, takeaway, or other Tappo App frames were intentionally modified. The task created only new T15 concept nodes on the `UI` page.
