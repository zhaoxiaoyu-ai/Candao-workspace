# Form Page Pilot Conversion Report

## Scope

- XD source: `E:\桌面\A_项目管理\24_COMS\25.0729_COMS 8.0_v1.xd`
- Selected artboard: `表单页`
- XD artboard path: `artwork/artboard-a2951afb-77b1-4324-ad6c-c578b8827122/graphics/graphicContent.agc`
- Figma file: `xbqpPjPo6r527RHF2L5ukH`

## Why this page was chosen

- The page contains repeated form patterns and bottom action buttons.
- Existing Figma context already exposes reusable `Button` and `Upload` components.
- This page is suitable for testing component reuse, text style normalization and token mapping before attempting all artboards.

## XD structure snapshot

- `shape`: 245
- `group`: 157
- `text`: 148
- `syncRef`: 62
- `artboard`: 1

The presence of 62 `syncRef` nodes indicates that XD reused internal symbols heavily. This is a good sign for component-oriented conversion because repeated UI sections are already structured as reusable sources.

## Detected reusable regions

- `底部操作栏`
- button labels inside the bottom bar:
  - `存草稿`
  - `取消`
  - `提交保存`

These are the clearest candidates for mapping onto the Figma `Button` component variants.

## Figma context already confirmed

- Component context retrieved:
  - `Button` at node `691:11827`
  - `Upload` at node `3163:21034`
- Figma component code shows real variable references such as:
  - `--global/colors/brand/colorprimary`
  - `--global/colors/neutral/text/colortextsecondary-65`
  - `--global/border/border-radius/borderradius-8`
  - `--global/typography/fontsize-14`

This is enough to treat the Figma file as a valid source of component and token references for the pilot.

## Fonts detected in XD

- `Arita Heiti B | Bold | 16`
- `HelloFont WenYiHei | Regular | 12`
- `Microsoft YaHei | Bold | 14`
- `Microsoft YaHei | Regular | 12`
- `Microsoft YaHei | Regular | 14`
- `Microsoft YaHei | Regular | 16`
- `Montserrat | Black | 14`
- `PingFang SC | Bold | 14`
- `PingFang SC | Bold | 16`
- `PingFang SC | Heavy | 14`
- `PingFang SC | Heavy | 16`
- `PingFang SC | Heavy | 20`
- `PingFang SC | Regular | 12`
- `PingFang SC | Regular | 14`
- `PingFang SC | Regular | 16`

## Color snapshot from XD

Representative values found in the pilot page:

- `#528DFF`
- `#E8F4FF`
- `#F3F6FC`
- `#F7F9FD`
- `#FFFFFF`
- `#16233D @0.6509803921568628`
- `#16233D @0.45098039215686275`
- `#16233D @0.14901960784313725`

The blue and neutral system is consistent with the Figma button component context and should be mappable into the `candao token` variables.

## Mapping assessment

### High-confidence mappings

- XD bottom action buttons -> Figma `Button`
- primary blue action areas -> brand primary token family
- neutral text and border colors -> neutral text and border token family
- common radii such as `8px` -> border radius tokens

### Medium-confidence mappings

- form sections and card-like blocks -> likely Figma layout frames or page layout components
- step indicators and status markers -> likely token-based primitives, but component candidates are not yet confirmed

### Low-confidence mappings

- fonts not clearly represented in the Figma code context:
  - `Arita Heiti B`
  - `HelloFont WenYiHei`
  - `Montserrat`
- icon-only or compound vector groups from XD that do not yet have a confirmed Figma component target

## Risks and blockers

- Figma MCP search did not return the full variable inventory directly, even though variables are visibly consumed by components.
- The pilot page contains multiple font families that may require normalization into the Figma typography system.
- Some XD symbol references are internal-only and still need explicit mapping logic to known Figma components.

## Recommended next step

Implement a pilot converter for `表单页` that does the following:

1. Parse the selected artboard from the XD package.
2. Promote repeated XD `syncRef` regions into candidate component instances.
3. Map the bottom action bar to Figma `Button` variants first.
4. Normalize colors and typography against the Figma variable/style system.
5. Output:
   - pilot intermediate JSON
   - component mapping report
   - token mapping report
   - unresolved items list

Only after this pilot result is acceptable should the conversion expand to the remaining artboards.
