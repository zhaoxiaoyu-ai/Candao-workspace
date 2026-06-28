# T02 Alignment Delivery

## Summary

Reworked the generated MOS v2 `微官網管理` and `訂座管理` frames after user feedback that the pages should reference the existing brand page layout and should not use overly broad multi-column dashboard layouts.

## Component Findings

- Checked Figma page `组件库`.
- Local component/component set count: `0`.
- Checked reference frame `設置/品牌與門店/品牌`.
- The brand page itself is not fully component-instanced. It primarily uses these instances:
  - `頂部導航`
  - `icon/智能客服`
  - `icon_添加`
- Main brand page body uses editable frames, vectors, and text rather than button/card/input component instances.

## Applied Changes

- Rebuilt the existing 15 generated frames in place.
- Preserved the original frame IDs and names.
- Reused the MOS top navigation instance pattern.
- Reworked page body geometry to match the brand page:
  - content start: `x=280`, `y=126`
  - content width: `1616`
  - left main column and right secondary column
- Removed the previous three/four-column dashboard-style distribution.
- Moved micro-web H5 preview, theme, provider status, and check-in summary into the right column.
- Kept primary configuration sections in the left column.
- Bound generated fills and strokes to the local `candao token` variables where applicable.

## Validation

- Frame count: `15`
- Valid prototype hotspots/reactions: `65`
- Token-bound paint nodes: `1928`
- Direct out-of-bounds children: `0`
- Representative screenshots were generated for:
  - `MOS v2 / 微官網管理 / 01 默認`
  - `MOS v2 / 訂座管理 / 02 Tappo Reservation`
  - `MOS v2 / 訂座管理 / 03 切換供應商彈窗`

## Notes

- Because `组件库` contains no local component/component set, the final implementation cannot honestly be described as fully component-instanced for body controls.
- It now follows the same practical construction pattern as the existing brand page: MOS shell/top navigation reuse, editable frame/text/vector controls, and Candao token-bound colors.
