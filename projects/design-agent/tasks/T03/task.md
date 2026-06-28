# T03: COMS Component And Typography Migration

## Goal

Migrate the existing MOS v2 micro-site and reservation management frames to published COMS component instances and COMS typography tokens.

## Inputs

- Target Figma file: `25.1213 MOS v2`
- File key: `1qe8d4ll9wLnxPAsiJAoa9`
- Target page: `UI (confirmed)`
- Existing generated section: `MOS v2 / Micro-site + Reservation Management`
- Published library: `26.0331_COMS 8.0_v1 (test change xd to figma)`
- Library key: `lk-de469e03583201b3b80c6631d63c3ef15a2cce5fe8476342a7470de34625d792cff08f6a3a97617895d7e10ec1316f9df2f5bf0c4d294aaabe49795a4a8e5505`

## Scope

- Replace hand-built buttons, inputs, selects, radio controls, checkboxes, and suitable tabs with COMS library instances.
- Preserve the existing two-column brand-page layout and MOS shell.
- Preserve prototype navigation and modal interactions.
- Bind page-level text to COMS `candao token` typography variables for font family, font size, weight, and line height where supported.
- Validate representative frames and record component/token coverage.

## Status

`done`

## Result

- Replaced all eligible manual controls across 15 MOS v2 frames with published COMS instances.
- Bound all 824 page-level text nodes to COMS font-size and pixel line-height variables.
- Preserved the two-column brand-page layout and all valid prototype interactions.
- Delivery note: `output/MIGRATION.md`
