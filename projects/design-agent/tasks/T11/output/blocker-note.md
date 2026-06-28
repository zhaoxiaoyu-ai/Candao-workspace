# T11 Blocker Note

## Figma Status

The requested Tappo App booking corrections could not be applied in Figma during this session because the only exposed Figma connector is not authenticated.

Observed gate check:

```text
Tool: mcp__codex_apps__figma._whoami
Result: UNAUTHORIZED / TRIGGER_REAUTHENTICATION
Message: This app connection requires reauthentication before other actions on this app can succeed.
```

The current toolset also does not expose `use_figma`, so there is no available Figma write path in this session.

## Requested Corrections To Apply After Reauthentication

- Restore booking yellow:
  - Single color: `#F6D365`
  - Gradient: `#F6D365` to `#FDCB85`
- Remove previous dark yellow override `#9A6A00`.
- Correct border colors globally so neutral containers, cards, inputs, and dividers use Tappo border/separator tokens; reserve booking yellow for selected/active emphasis.
- Correct visible text colors globally so text uses Tappo text tokens rather than ad hoc fills.
- Re-audit all booking screens for actual component-library instances:
  - Sidebar
  - Topbar
  - Button
  - Input
  - Select
  - Radio / Radio-group
  - Modal/Dialog
  - Filter bar
  - List row/card
- Replace hand-built repeated structures with real component instances where matching components exist.
- If a matching component does not exist, reuse the existing order-page auto-layout pattern and bind every fill/stroke/text to design tokens.

## Component Explanation

The previous booking output reused some actual Tappo instances, including sidebar, topbar, Button, Input, Select, Switch, and Radio. It still likely looked insufficient because several composed patterns were manually built auto-layout frames rather than library components:

- Booking list rows/cards.
- Filter/search/control bar.
- Modal shell and dialog body.
- Some section wrappers and status-control labels.

The Tappo `radio-group` component found previously was text-only and did not expose an actual checked radio control, so the prior implementation used the actual `Radio` component inside an auto-layout wrapper named `Radio-group / 狀態切換`.

## Color Constraint

`#F6D365` with white normal-size text is about `1.46:1` contrast, which is below WCAG normal-text requirements. If the design must use the original yellow, the token-consistent approach is to use the Button component's approved text color or a dark text token. If white text must remain mandatory, the team should approve a darker accessible yellow variant or accept the accessibility tradeoff.
