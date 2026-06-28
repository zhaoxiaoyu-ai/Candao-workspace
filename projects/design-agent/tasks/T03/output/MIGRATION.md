# T03 COMS Migration Delivery

## Target

- Figma file: `25.1213 MOS v2`
- File key: `1qe8d4ll9wLnxPAsiJAoa9`
- Page: `UI (confirmed)`
- Frames: 15 existing `MOS v2 /` state frames
- Library: `26.0331_COMS 8.0_v1 (test change xd to figma)`

## Component Migration

Replaced all eligible hand-built body controls with linked COMS library instances:

| Component set | Instances |
| --- | ---: |
| Button | 79 |
| Input | 78 |
| InputCheckbox | 42 |
| InputRadio | 32 |
| Tabs | 23 |
| Total | 254 |

Checkbox and radio rows retain their existing title and help-text layout. Their 16 px control glyphs are COMS instances. Buttons, inputs, and tabs are full COMS instances.

## Typography

- Page-level text nodes audited: 824
- Font-size token bindings: 824
- Pixel line-height token bindings: 824
- Manual text family: `Noto Sans TC`, matching COMS component text
- COMS component text retains its own published token bindings

The published `Global/Typography/fontFamily` value is a CSS fallback stack rather than a valid single Figma font family. `fontWeightStrong` resolves to `SemiBold`, while the available `Noto Sans TC` styles do not include that exact style. These two variables were not forced onto nodes because doing so would invalidate fonts.

## Validation

- MOS v2 frames: 15
- Manual control remnants: 0
- Valid prototype reactions: 65
- Invalid prototype destinations: 0
- Zero-size component instances: 0
- Direct out-of-bounds children: 0

Representative screenshots:

- `pilot-default-typography.png`
- `booking-tappo.png`
- `booking-provider-modal-final.png`
- `booking-segment-modal.png`
