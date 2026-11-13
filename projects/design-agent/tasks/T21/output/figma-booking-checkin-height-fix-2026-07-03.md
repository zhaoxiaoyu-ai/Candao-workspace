# T21 - Booking Check-In Content And Frame Height Fix

## Scope

- Figma file: `25.1213 MOS v2`
- File key: `1qe8d4ll9wLnxPAsiJAoa9`
- Page: `UI（確認稿）`
- Main frames:
  - `1866:24972` - `訂座管理 / 01 未開通`
  - `1866:25708` - `訂座管理 / 02 Tappo Reservation`
  - `1866:26444` - `訂座管理 / 03 切換供應商彈窗`
  - `1866:27180` - `訂座管理 / 04 新增人數段彈窗`
  - `1866:30124` - `訂座管理 / 05 Minitable Reservation`

## Prototype Findings

Latest prototype source:

- `https://tappophone.netlify.app/admin-web/booking.html`
- `https://tappophone.netlify.app/admin-web/assets/app.js`

The prototype `标记到店方式` card contains:

- Title: `标记到店方式`
- Description: `設定顧客到店後的标记方式，兩種方式可同時啟用`
- Option 1: `到店手動标记`
- Option 1 description: `顧客到店後，由店員手動点击标记到店，客人就座`
- Option 2: `到時自動标记`
- Option 2 description: `預約時間到達後系統自動标记到店，無需店員操作`

Default state from the prototype is manual checked and auto unchecked.

## Figma Changes

- Updated the visible `标记到店方式` cards in the Tappo-related states:
  - `1866:25708`
  - `1866:26444`
  - `1866:27180`
- Replaced old option content such as `Pad 端掃碼標記到店`, `Phone 端手動標記`, `超時自動標記 No-show`, `保留分鐘數`, and `提醒時間`.
- Kept the first option checked and changed the second option to an unchecked checkbox instance.
- Moved the unchecked checkbox instances into the correct option auto-layout hierarchy so the option title, description, and control align consistently.
- Hid the right-column content in `訂座管理 / 05 Minitable Reservation`, because this state should not show the Tappo-native right-side settings.
- Adjusted page heights to follow the rule: minimum `1080`, otherwise content-driven height.
- Expanded schedule/configuration card heights where visible content had outgrown the card.
- Moved footer/status areas to match the adjusted frame heights.
- Hid stale nested footer bars that were outside the intended visible footer structure.

## Final Frame Heights

- `訂座管理 / 01 未開通`: `1080`
- `訂座管理 / 02 Tappo Reservation`: `1620`
- `訂座管理 / 03 切換供應商彈窗`: `1622`
- `訂座管理 / 04 新增人數段彈窗`: `1622`
- `訂座管理 / 05 Minitable Reservation`: `1080`

## Final Audit

- Tappo-related states with visible `标记到店方式` card: `3 / 3`
- Required prototype option titles found in each visible card: `2 / 2`
- Forbidden old option/field text found: `0`
- Minitable visible right-column content: `0`
- Minitable visible Tappo-native check-in card: `0`
- Frame height rule applied to all 5 main booking frames.

## Visual QA

Screenshots saved:

- `figma-booking-checkin-tappo-height-final.png`
- `figma-booking-checkin-modal-height-final.png`
- `figma-booking-minitable-height-final.png`

Screenshot review showed the updated check-in method options aligned correctly, no obvious compressed text, no old option content, no right-side settings on Minitable, and footers placed at the adjusted page bottoms.
