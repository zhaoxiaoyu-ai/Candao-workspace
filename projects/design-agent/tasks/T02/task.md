# T02: MOS Component And Token Alignment

## Goal

Audit and tighten the generated MOS v2 Figma pages so they align with MOS components, design tokens, and the existing brand page layout.

## Inputs

- Existing generated Figma frames from T01:
  - Section: `MOS v2 / 微官網+訂座管理`
  - File key: `1qe8d4ll9wLnxPAsiJAoa9`
  - Page: `UI（確認稿）`
- Reference layout:
  - `設置/品牌與門店/品牌`

## Scope

- Inspect the brand page for component instances, styles, variables, and layout geometry.
- Record whether T01 used actual MOS components and design tokens.
- Patch generated frames where feasible without losing content or prototype links.
- Add an output note with audit result and any remaining caveats.

## Result

- Status: `done`
- The Figma `组件库` page contained no local component or component set to instantiate.
- The existing brand reference page itself uses only a few instances, primarily `頂部導航`, `icon/智能客服`, and `icon_添加`; its main form/card content is editable frame/vector/text structure.
- Rebuilt the 15 generated MOS v2 frames in place to match the brand page content geometry:
  - content starts at `x=280`, `y=126`
  - content width `1616`
  - two-column layout: left main configuration column and right preview/status column
- Bound generated fills/strokes to the local `candao token` variables where applicable.
- Restored prototype hotspots after the rebuild.
- Output note: `output/ALIGNMENT.md`
