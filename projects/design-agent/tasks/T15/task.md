# T15 - Create Tappo App Booking Workbench Concept Board

## Status

done

## Goal

Create a fresh Tappo App booking/reservation concept board that addresses the design gap identified when comparing the booking module with the existing dine-in ordering and takeaway modules.

## Figma Target

- File: `Tappo App`
- File key: `anMsqgZYi8ZqmJXZah78KI`
- Page: `UI`
- Scope: create new T15 concept frames only; do not modify or delete the existing booking, dine-in, or takeaway frames.

## User Feedback

- The current booking module effect is still not satisfying.
- The next direction should not be another small correction pass on the existing booking pages.
- Produce a new design version based on the current summarized goals.

## Requirements

- Treat booking as an operational workbench, closer in maturity to the dine-in and takeaway modules.
- Preserve booking theme color `#F6D365` and gradient `#F6D365 -> #FDCB85`.
- Do not reintroduce the dark yellow `#9A6A00`.
- Use approved dark text/token behavior on yellow surfaces because `#F6D365 + white text` has insufficient contrast.
- Keep a single booking list/queue as the primary structure; do not rebuild the old right-side `今日訂座總覽`.
- Use a booking queue plus selected-reservation processing panel to make the workflow feel business-native.
- Include high-risk operations such as rejection in a consistent modal pattern.
- Keep the Tappo shell/topbar/sidebar content aligned to booking context.
- Preserve unrelated pages and existing booking frames.

## Completed

- Created a new board in the `UI` page: `T15 / Tappo App / 訂座工作台概念 v1` (`3635:71799`).
- Created three new editable concept frames:
  - `T15 / 訂座工作台 / 01 今日處理` (`3635:71802`)
  - `T15 / 訂座工作台 / 02 新增預約` (`3635:72013`)
  - `T15 / 訂座工作台 / 03 拒絕原因` (`3635:72136`)
- Ran a visual QA pass with screenshots and fixed the first pass text-height overlap issue across 237 text nodes.
- Saved visual QA screenshots under `output/`.

## Output

- `output/figma-booking-workbench-concept-2026-07-02.md`
- `output/t15-booking-workbench-01.png`
- `output/t15-booking-workbench-02.png`
- `output/t15-booking-workbench-03.png`
