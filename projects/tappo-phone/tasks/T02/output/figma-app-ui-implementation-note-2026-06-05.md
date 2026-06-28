# Figma App UI Implementation Note

Date: 2026-06-05
Task: `T02`

## Figma References

Implemented from latest Tappo Phone App-side Figma nodes:

- Owner home: `nHamLH3qlZYFXVC0OVxNqc / 138:281`
- Transaction record: `nHamLH3qlZYFXVC0OVxNqc / 538:3555`

`mcp__figma.get_metadata` was available and used to read node structure, dimensions, and text. `codex_apps` Figma `get_design_context` required reauthentication, so exact screenshot/code context from that app connection was unavailable in this session.

## Implementation

Changed source files:

- `source/src/pages/OwnerDashboard.vue`
- `source/src/pages/TransactionHistory.vue`
- `source/src/components/ui/TpLineIcon.vue`
- `source/src/components/ui/TpBottomNav.vue`
- `source/src/router/index.ts`

Key changes:

- Rebuilt owner home toward the latest App-side Figma direction:
  - white App header
  - `390px` App canvas behavior
  - orange balance card
  - sales summary card
  - consumption scene rows
  - semi-circle order-method gauge
  - booking strip
  - four-item bottom nav: `主頁 / 數據 / 應用 / 設置`
- Added transaction record page at `/transactions`.
- Added App endpoint line-icon component `TpLineIcon` to avoid using Pad-like generated raster icons for App primary navigation and dense dashboard rows.
- Updated bottom nav to use App-side line icons and active orange circular treatment.

## Design Contract Update

Updated:

- `projects/tappo-phone/tappo-design.md`
- `projects/tappo-phone/RULES.md`

The design contract now separates:

- `App`: latest Tappo Phone App / Flutter WebView rules from nodes `138:281` and `538:3555`
- `Pad`: previous warm cream / POS hardware / settings-oriented rules
- `Web`: pending endpoint rules, not inherited directly from App or Pad

Important correction:

- The old Pad-derived warm cream card system is no longer the App default.
- App screens now use the latest white/neutral-gray App Figma direction unless a newer App node says otherwise.

## Validation

Passed:

```powershell
npm run typecheck
npm run build
```

Visual smoke screenshots:

- `tasks/T02/output/figma-app-home-390-cdp.png`
- `tasks/T02/output/figma-app-transactions-390-cdp.png`

Chrome DevTools Protocol metrics:

- Owner home: `innerWidth=390`, `scrollWidth=390`, `bodyScrollWidth=390`
- Transaction record: `innerWidth=390`, `scrollWidth=390`, `bodyScrollWidth=390`

Local dev server:

```text
http://127.0.0.1:5177/
http://127.0.0.1:5177/transactions
```

## Notes

- The transaction page is implemented as a standalone detail page with hidden bottom nav, matching the provided Figma node.
- The current App implementation uses static mock content from Figma for this pass. Backend/API contracts are still pending.
- If future work needs exact Figma screenshot/context extraction rather than metadata, reauthenticate the Figma app connection first.
