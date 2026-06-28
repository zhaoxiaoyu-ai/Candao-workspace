# XD to Figma Conversion Playbook

## Scope
- Default rule: migrate only content that is visible on the XD artboard.
- Do not migrate hidden layers, conditional content, collapsed content, or speculative fields unless explicitly requested.
- Preserve the XD page's visible information hierarchy before optimizing for component reuse.

## Core Workflow
1. Parse the target XD artboard and confirm visible content, bounds, grouping, and top-level structure.
2. Query Figma context first: variables, text styles, atomic components, business components, and page-level modules.
3. Rebuild the page in Figma by keeping XD structure as the source of truth.
4. Reuse existing Figma components only where they truly correspond to the XD content.
5. Bind all eligible colors, typography, spacing, and radius values to existing tokens.
6. Validate in Figma with screenshots after every structural change.

## Layout Rules
- Preserve the XD container width and section structure first.
- Business module and master consistency is mandatory. If a matching page-level business module exists, use its structure as the shell before placing page-specific content.
- Do not hand-build a business module shell that already exists in the Figma library. This includes wrappers, card shells, header shells, table shells, and their Auto Layout hierarchy.
- Do not wrap the main content with a page-level example component if the XD page is not structurally identical; instead, instantiate the matching master module, preserve its structural slots, and remove or hide only XD-invisible optional slots.
- For page templates such as `Layout / Page / Table`, decide header ownership from XD-visible structure before building:
  - If visible XD content includes tabs, keep `PageHeader` separated above `TableContainer`.
  - If visible XD content does not include tabs, merge the title and description block into the top area inside `TableContainer` and do not keep a separate outer `PageHeader`.
  - Treat this as a structural rule, not a visual preference. The presence of tabs is the primary switch for choosing the header pattern.
- When using a page template instance, prefer instance-level overrides while preserving the template structure. Do not detach the template unless the instance model truly blocks the required change.
- If detaching is required because the instance cannot represent the XD schema, detach only after seeding from the master instance, then preserve the master node names, Auto Layout modes, padding, gaps, sizing modes, radius bindings, and fill bindings.
- For table pages, `PageHeader`, `TableContainer`, `FilterBar`, `ActionBar`, `DataTable`, and `Pagination` must come from `Layout / Page / Table` or an approved table-page derivative. Do not recreate these frames manually.
- `PageHeader` and `TableContainer` must keep the master Auto Layout settings and token bindings. Page-specific content should be moved into their existing slots instead of replacing the slots with absolute-positioned frames.
- Background fills, corner radii, padding, and gaps for business modules must follow the current master component values. Do not copy older screenshots or earlier generated values when the Figma master has changed.
- For table pages, status/category filters belong in the master `StatusTabBar` slot when it exists. Do not place status tabs in `ActionBar` or a custom frame.
- `ActionBar` is reserved for the master action slot. Remove or hide it only when the XD page has no visible bulk/action bar content; do not repurpose it for status filtering.
- Use Auto Layout for stable containers and field groups, but do not flatten XD grouping prematurely.
- Avoid mixing page-level absolute positioning with manual offsets once a container has been converted to Auto Layout.
- Footer spacing rule: keep `24px` between the visible form content and the bottom action bar unless the source page clearly differs.

## Component Reuse Rules
- Reuse existing Figma business components for global regions such as `TopNav`, `Sidebar`, `FormFooter`, `Breadcrumb`, and matching business widgets.
- Reuse atomic components for form controls only when the component semantics match the XD field.
- Reuse text-button variants for operation links when the table component exposes them. Do not replace `Button / Style=text` operation controls with plain text links.
- For textarea fields, use the `Input` component's `State=text area` variant instead of creating or using a separate textarea structure.
- If a component instance contains demo placeholder text, helper text, or counters that do not exist in the XD page, override or hide them at the instance level.
- Do not change the XD breadcrumb hierarchy based on page semantics. Use the exact visible XD hierarchy.
- Sidebar rule:
  - always reuse the current `Sidebar` business component instead of rebuilding the navigation manually
  - sidebar selection is part of the page state and must be corrected during conversion
  - do not keep the highlighted menu from the source template page if it does not match the current XD page
  - the selected menu is controlled by nested `Sidebar/menu` variant instances
  - determine the active menu from the actual XD page content and module ownership, then set only that menu to `State=primary`
  - non-target sibling menus should remain `State=default` unless the XD source visibly shows another state
  - keep the existing sidebar styling and structure; do not add an extra sidebar background layer unless the XD page visibly has one

## `Layout / Page / List` Conversion Rules
- Use `Layout / Page / List` for detail-heavy pages whose visible XD structure is a set of white information cards, not for generic form pages and not for table pages.
- Treat `Layout / Page / List` as a structural reference for card composition, spacing rhythm, and field rows. Do not force the exact two-column canvas split if the XD page is clearly single-column-heavy.
- Main decision rule:
  - if the XD page is card-based detail display, borrow `Layout / Page / List`
  - if the XD page is editable form-first, prefer the form-page pattern instead
  - if the XD page is table-first, use `Layout / Page / Table`
- Card header rule:
  - use the `CardHeader` structure from `Layout / Page / List`
  - do not fake a card header by reusing `Tabs` unless the XD card visibly contains real tabs
  - for normal detail cards, the title row is a header, not a tab selector
  - if the XD card has only a title, keep a simple title-only `CardHeader`
  - if the XD card has title plus meta text, follow the header pattern with title and supporting text, not ad hoc text blocks
- Detail row rule:
  - for single-line key-value rows, match the `TextField` pattern used inside `Layout / Page / List`
  - the actual row primitive is `Item/list`, not a custom hand-built label/value stack
  - preserve its three-part structure: `SubTitle` / `Content` / trailing slot
  - label width should stay aligned across rows in the same card; do not let every row invent its own label width
  - if the trailing slot is not used in XD, keep it empty or hidden rather than collapsing the row into a different structure
- Textarea and rich-content rule:
  - multiline descriptive content can break out of the single-line `TextField` pattern
  - for long message bodies, image blocks, and mixed media content, keep the card-level auto layout stable first, then compose the inner content according to XD
  - do not force multiline content into `Item/list` when it stops matching the semantics
- Image rule:
  - if XD shows a demo image or screenshot as one visible asset, keep it as a whole-image region
  - do not split the image into components unless the XD source clearly separates it into reusable UI parts
- Auto Layout rule:
  - card container uses vertical auto layout with `HUG` height
  - card header sits above the list/content block and should not be absolutely positioned
  - the list block inside the card uses vertical stacking
  - single-line rows may remain `layoutMode=NONE` internally if that matches the source component, but the parent list and card must still follow stable auto layout
  - avoid mixing stale fixed heights from an early absolute build with later auto layout cards; fix parent containers first
- Width rule:
  - card width follows the visible XD card width first
  - one row can contain one card when the XD layout is single-column
  - do not force one-row-two-card symmetry just because the reference template shows two columns
- Typography rule:
  - card titles should follow the title treatment demonstrated by `Layout / Page / List` card headers
  - key labels and values in `Item/list` should inherit the demonstrated text-style split:
    - label uses the secondary 14/22 style
    - value uses the primary 14/22 style
- Validation rule for `Layout / Page / List` pages:
  - confirm no card header still looks like tabs unless tabs are visible in XD
  - confirm single-line rows use a consistent `Item/list` structure
  - confirm multiline sections are not compressed into 40px rows
  - confirm card heights hug content and do not clip
  - confirm side preview areas or screenshot panels remain whole-image regions when the XD source is a single bitmap

## Typography and Tokens
- When a section title corresponds to a business module like `PageHeader`, borrow that module's typography and token treatment, but keep the title inside the correct XD-owned container.
- Do not create ad hoc colors or text styles.
- Always prefer existing local text styles such as `Heading/h4`, `Base/default`, `Base/strong`, `SM/default`.
- Required asterisk color must remain bound to the existing error token.

## Spacing and Field Structure
- If a reused business component appears to have extra bottom spacing, inspect the parent frame first.
- Common cause: a parent frame still has a stale fixed height from an earlier absolute-positioned build.
- Fix by converting the parent field group to Auto Layout and `HUG` height before changing internal gaps.
- For this file's current business examples:
  - field label to control gap: `8px`
  - three-column form row gap: `232px`
  - textarea row gap: `24px`
  - sidebar top gap below top nav: `16px`

## Breadcrumb Rules
- Use the global `Breadcrumb` business component, not hand-built text.
- Keep default component spacing and sizing.
- Preserve close support when the breadcrumb variant supports it.
- Match the visible XD breadcrumb labels exactly.
- Breadcrumb audit gate: the final breadcrumb node must be an `INSTANCE` of the global `Breadcrumb` component or component set. A plain text breadcrumb is a conversion failure.

## Validation Checklist
- Confirm the page height matches the XD artboard height.
- Confirm the sidebar does not receive an extra background layer unless the XD page shows one.
- Confirm the sidebar highlighted menu matches the actual XD page module, not the copied template's previous state.
- Confirm global business regions use components: `TopNav`, `Sidebar`, `Breadcrumb`, and any matching page shell.
- Confirm page header ownership is correct: do not place it outside the section if the XD page shows it inside the section.
- Confirm the page template branch is correct:
  - with tabs: separate outer `PageHeader`
  - without tabs: title and description merged into `TableContainer`
- Confirm table-page shells preserve the master structure:
  - `MainWrap` is seeded from `Layout / Page / Table` or an approved derivative
  - `PageHeader` keeps vertical Auto Layout and token-bound radius/fill
  - `TableContainer` keeps vertical Auto Layout and token-bound radius/fill
  - `FilterBar`, `StatusTabBar`, `ActionBar`, and `DataTable` keep the master slot structure when present in the current master
  - page controls are inserted into the existing slots instead of replacing the slots with ad hoc frames
  - status filters are inside `StatusTabBar`, not inside `ActionBar`
- Confirm the table schema is locked before editing:
  - `with-checkbox`
  - `without-checkbox`
- Confirm the header and row use the same schema, not a mixed pair.
- Confirm the header cell count, visible columns, and row cell count are consistent.
- Confirm the header widths and row widths follow the same column map.
- Confirm textarea instances do not expose component demo copy.
- Confirm content is not clipped by root containers or shell wrappers.
- Confirm only visible XD content is present.

## Page Template Branch Memory
- Use the following quick decision in every new page conversion:
  - `Has visible tabs in XD?`
  - `Yes` -> use the separated `PageHeader` pattern.
  - `No` -> use the merged header-in-container pattern.
- Record the result in the working notes for the current page before editing Figma:
  - `Template branch: separated-header`
  - or `Template branch: merged-header`
- If a later review changes the branch choice, update the note first, then rebuild the page shell instead of patching around the wrong structure.

## Table Conversion Rules
- Before touching any table page, record the table schema for the current page in working notes:
  - `Table schema: with-checkbox`
  - or `Table schema: without-checkbox`
- Treat table schema as a structural rule, not a visual preference. Do not start by changing titles or row content first.
- `with-checkbox` means:
  - the header includes a dedicated `InputCheckbox` column
  - row content also includes a matching leading checkbox column
  - all later columns are positioned after that checkbox column
- `without-checkbox` means:
  - do not add or keep an `InputCheckbox` column
  - the first visible header column must correspond directly to the first visible content column
- Header checkbox rule:
  - the checkbox column is implemented with `TableCell` variant/style `InputCheckbox`
  - only include that column when the current page schema is `with-checkbox`
  - if the current page schema is `without-checkbox`, do not keep an empty leading placeholder column
  - do not assume the first visible content column is fixed at `40px`
  - only the `InputCheckbox` column uses its own predefined width
  - all other header columns should use widths that fit their content and the current page's width map
- Never mix `with-checkbox` header instances with `without-checkbox` row instances, or the reverse.
- Never patch around a schema mismatch by shifting titles only. Header and row must be corrected as a pair.
- When reusing table components, confirm these four items together before editing content:
  - visible column count
  - column order
  - width map
  - special columns such as `InputCheckbox` or `operate`
- If the current page instance cannot support the required schema through instance overrides alone, stop and record the capability gap instead of modifying the component master.
- Preferred table execution order:
  1. choose `with-checkbox` or `without-checkbox`
  2. choose a page/table instance that already supports that schema
  3. verify header and row share the same schema
  4. set column titles and width map
  5. fill row content
  6. validate header-to-row alignment with a screenshot
- Table width rule:
  - use `40px` multiples when adjusting field spacing and table column widths
  - column start positions should also land on the same `40px` grid
  - if the master slot width is not exactly divisible by `40px`, keep the table content on the nearest valid `40px` grid and leave the remaining slack at the trailing edge instead of distributing fractional widths
  - apply the `InputCheckbox` width only to the checkbox column itself, not to the first content column by default
  - do not widen or narrow only the header or only the row
  - update the width map as a single table-level decision
- Operation column rule:
  - operation actions such as view/edit/delete should reuse `Button / Style=text` as provided by `TableCell / style=operate`
  - do not downgrade operation actions to loose text nodes
- Text style rule for tables:
  - do not introduce unproven text styles just because a field looks secondary
  - if a field does not have a confirmed special style from an existing example, fall back to an existing demonstrated table text style

## Known Decisions for `品牌詳情_編輯`
- Visible-only migration.
- Breadcrumb content follows XD-visible hierarchy: `品牌管理 / 組織 / 品牌詳情-太興`.
- `品牌訊息` is the section title and should use `PageHeader` typography treatment while remaining inside the `FormSection`.
- Sidebar uses the existing component without an extra background fill, with `16px` offset below `TopNav`.

## Sidebar State Reference
- Current sidebar implementation uses the `Sidebar` component with nested `Sidebar/menu` variant instances.
- Menu highlight should be treated as explicit conversion work, not as inherited template residue.
- Sidebar conversion order:
  1. identify the current XD page's owning business module
  2. insert or reuse the `Sidebar` component
  3. locate the matching `Sidebar/menu` item by module name
  4. set the target menu item to `State=primary`
  5. reset copied active states on non-target menu items to `State=default`
  6. validate the highlighted menu against the XD page before closing the task
- If the current page belongs to a module whose sidebar label differs slightly from the page title, follow the business module context, not the raw page title.

## Reusable Session Bootstrap
- When starting a new conversation, assume the following values remain unchanged unless explicitly overridden:
  - XD file path: `E:\桌面\A_项目管理\24_COMS\25.0729_COMS 8.0_v1.xd`
  - Figma file link: `https://www.figma.com/design/xbqpPjPo6r527RHF2L5ukH/26.0331_COMS-8.0_v1--test-change-xd-to-figma-?node-id=0-1`
  - Component library file link: `https://www.figma.com/design/xbqpPjPo6r527RHF2L5ukH/26.0331_COMS-8.0_v1--test-change-xd-to-figma-?node-id=0-1`
  - Migration scope: visible XD content only
  - Variable system: current file's `candao token`, local text styles, existing business components, and atomic components

- Recommended minimal prompt for a new conversation:
  - `请按 E:\Projects\xd-to-figma-converter\docs\xd-to-figma-playbook.md 执行，目标画板名称：<画板名>`

- Recommended explicit prompt when you want to be slightly more defensive:
  - `请按 E:\Projects\xd-to-figma-converter\docs\xd-to-figma-playbook.md 执行当前页面转换。已知信息与当前项目保持一致，目标画板名称：<画板名>`
