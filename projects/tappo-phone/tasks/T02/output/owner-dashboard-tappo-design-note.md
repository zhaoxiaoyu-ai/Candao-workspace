# Owner Dashboard Tappo Design Pass

Date: 2026-05-25

## Skill Used

Used the newly created `tappo-design` skill from:

```text
C:\Users\Admin\.agents\skills\tappo-design
```

Font plan declared by the skill:

- UI font: `OPPO Sans` with system Chinese fallbacks.
- Metric font: `Montserrat` with Tappo/system fallbacks.

## Implementation

Updated `source/src/pages/OwnerDashboard.vue`.

Changes:

- Reworked owner dashboard styling against `tappo-design` rules.
- Preserved prototype content and existing data rows.
- Fixed 402px horizontal overflow caused by right-aligned long values and wide chips.
- Converted account status/action and sales booking chip into vertical mobile-safe layouts.
- Changed sales mini metrics from three cramped columns into one full-width order metric plus two money cards.
- Changed chart summaries and row amounts to vertical data stacks so all values remain visible.
- Kept deterministic `TpSoftIcon` chart icons and generated PNG quick-entry icons.

## Validation

Commands passed:

```powershell
npm run typecheck
npm run build
```

Screenshots:

- `owner-dashboard-before-tappo-design-402.png`
- `owner-dashboard-tappo-design-402-mobile.png`
- `owner-dashboard-tappo-design-402-tall.png`

Screenshot capture required `--virtual-time-budget=5000`; without it, Chrome captured before the lazy route had rendered and produced a blank main area.

## Notes

- No new generated image assets were created in this pass.
- The current dev server used for validation is `http://127.0.0.1:5176/`.
