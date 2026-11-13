# T21 - Correct MOS Booking Check-In Method Content Against Prototype

## Status

done

## Goal

Correct the `標記到店方式` / `标记到店方式` option content in MOS v2 `訂座管理` Figma pages so it matches the booking prototype.

Target Figma file:

- File: `25.1213 MOS v2`
- File key: `1qe8d4ll9wLnxPAsiJAoa9`
- Page: `UI（確認稿）`

## Scope

The main MOS v2 `訂座管理` pages are in scope, especially Tappo-related states where the Tappo-native check-in method card is visible.

## User Feedback To Address

- The `标记到店方式` option content is inconsistent with the prototype.
- Confirm and correct option titles, descriptions, and any extra fields that do not belong to the prototype.

## Prototype Source

Latest fetched prototype:

- `https://tappophone.netlify.app/admin-web/booking.html`
- `https://tappophone.netlify.app/admin-web/assets/app.js`

Prototype content:

- Card title: `标记到店方式`
- Description: `設定顧客到店後的标记方式，兩種方式可同時啟用`
- Option 1: `到店手動标记`
- Option 1 description: `顧客到店後，由店員手動点击标记到店，客人就座`
- Option 2: `到時自動标记`
- Option 2 description: `預約時間到達後系統自動标记到店，無需店員操作`

## Completion Notes

- Matched `标记到店方式` content to the latest deployed booking prototype.
- Updated the Tappo-related states so the card has only the prototype's two options: `到店手動标记` and `到時自動标记`.
- Removed visible old option/field content including Pad/Phone/No-show variants, `保留分鐘數`, and `提醒時間`.
- Corrected checkbox state and hierarchy: first option checked, second option unchecked.
- Hid the right-side content in `訂座管理 / 05 Minitable Reservation`.
- Adjusted the 5 main booking frame heights to follow the rule: minimum `1080`, otherwise content-driven height.
- Saved final audit notes and screenshots under `output/`.
