# Tappo Cross-Platform Design Contract

Version: 1.3.0
Last updated: 2026-06-08

## Purpose

This file is the project-facing design contract for Tappo work. Tappo includes multiple product surfaces, so rules must be separated by endpoint:

- `App`: Tappo Phone mobile app / Flutter WebView.
- `Pad`: Tappo Pad POS and larger operational screens.
- `Web`: browser-based admin, MOS, or external web surfaces.

Do not apply Pad rules directly to App screens. Do not treat App screens as scaled-down Pad screens.

## Source Priority

Business content source of truth:

- Prototype content and user-provided product documents.
- Figma can change visual treatment, grouping, and priority, but do not delete product content unless the user explicitly approves it.

Visual source of truth:

- App latest owner home: `nHamLH3qlZYFXVC0OVxNqc / 138:281`.
- App latest transaction record: `nHamLH3qlZYFXVC0OVxNqc / 538:3555`.
- App style anchor: `nHamLH3qlZYFXVC0OVxNqc / 17:38`, used for AI companion, soft operational cards, smart insight treatment, and App Style Kit direction.
- App style anchor: `nHamLH3qlZYFXVC0OVxNqc / 1:568`, used for asset/AI center treatment, health cards, status chips, and intelligent system surfaces.
- Pad/settings reference: `anMsqgZYi8ZqmJXZah78KI / 287:32144`, applies to Pad-like settings and POS surfaces, not App home by default.

When App and Pad visual rules conflict, App nodes win for Tappo Phone implementation.

## Output Reviewability

Every Tappo Phone output must be clearly visible, directly openable, and ready for human review.

- Provide a concrete review entry: file path, screenshot path, asset review folder, Figma node, local preview URL, or route.
- State what should be reviewed, what has changed, the pass/fail criteria, and the next action.
- Visual, UI, Figma, icon, illustration, and asset outputs must include an openable visual review artifact; do not provide prompts, internal notes, or raw paths only.
- Documentation outputs must include a clear title, scope, decisions, checklist, linked files, and next step.
- If a visible review artifact cannot be produced yet, write the reason, current reviewable material, missing item, and follow-up path under `tasks/<task-id>/output/`.

### Asset Review Directory Workflow

Use a stable current-review workflow for visual assets:

- `tasks/T02/output/assets-review/current-review.html` is the only stable review entry.
- `tasks/T02/output/assets-review/current/` contains only the current reviewable version.
- `tasks/T02/output/assets-review/current/index.html` is the current review board.
- `tasks/T02/output/assets-review/current/preview.html` is the clickable image-preview wrapper.
- `tasks/T02/output/assets-review/current/preview.png` is the raw static image backup, not the only preview entry.
- Historical versions, rejected variants, and comparison boards move to `tasks/T02/output/assets-review/_archive/<date>-<reason>/`.
- Do not leave multiple generated versions flat in `assets-review/`; the user should never need to guess which file is current.
- Update `assets-review/README.md` after each visual asset round with current entry, current review board, image preview page, raw image backup, review object, pass/fail criteria, next action, and archive location.
- In final chat replies for visual/UI/icon/illustration/asset outputs, include clickable Markdown links to the current review entry, current HTML review page, and `preview.html` image-preview wrapper. If linking the raw PNG, also provide `preview.html` because some clients do not make image file links clickable. Also include copyable relative paths.

## Brand Core

These rules apply to all endpoints:

- Tappo uses warm operational orange as the primary brand/action signal.
- UI should feel efficient, trustworthy, restaurant-operational, and product-specific.
- Data must remain scannable; decoration never outranks amount, order, status, or action.
- Typography uses `OPPO Sans 4.0` as the App UI font by default, with `OPPO Sans` and system Chinese/HK-safe sans only as fallback. Important numbers should also default to `OPPO Sans 4.0`; use `Montserrat` only as an optional metric accent when explicitly needed.
- Letter spacing is `0`.
- Body text should generally be `14px` or larger.
- Avoid generic mixed icon styles. Each endpoint should use one coherent icon family.

## App Endpoint

Use this section for Tappo Phone / app-side screens.

### App Style-System-First Rule

Do not refine App pages one by one as isolated visual patches. Build the App Style Kit first, then apply it to pages:

- Style anchors and mood extraction.
- Color, type, spacing, radius, shadow, and motion tokens.
- Unified line icon and soft module icon rules.
- AI/assistant illustration rules.
- Reusable UI element specimens.
- Page application and QA.

The current App keywords are `light / clean / intelligent / operational / trustworthy`.

Tappo orange remains the primary brand and action color. Light-blue reference images can guide atmosphere, airiness, softness, and intelligent visual cues, but Tappo Phone must not become a blue-first product.

### App Intelligent Tone Tiers

Apply intelligent visual intensity by page type:

- `Tier 1 / Strong intelligent tone`: cover, role selection, owner home, staff home/app center, data analysis, app management, settings overview. These screens may use an AI assistant/orb, soft atmospheric background, smart insight cards, and stronger orange-led brand composition.
- `Tier 2 / Moderate assistance`: login/registration, PIN login, region/organization selection, points/recharge overview, staff table list, booking list, payment settings, device binding. These screens may use helper prompts, smart status chips, and light guidance, but the task structure remains primary.
- `Tier 3 / Restrained operation`: POS ordering, checkout/order confirmation, payment success, new booking form, transaction records/details, order details. These screens should avoid large AI heroes or decorative mascot use; prioritize legibility, aligned data, clear actions, and trust.

In every tier, orange remains the primary CTA and active-state color. Blue is only a secondary system/AI/information accent.

### App Intelligent Visual Anchor

The App uses a hybrid intelligent visual anchor:

- `Flexible 小T assistant`: for cover, role selection, owner/staff home, onboarding, empty states, and help/guidance moments.
- `Orange smart orb / system core`: for data analysis, settings, app management, system health, AI insight, and usage prediction surfaces.
- `Module-specific micro illustrations`: for POS/device setup, payment configuration, booking guidance, staff permissions, and app activation.

小T is not a fixed mascot requirement. Treat it as a flexible assistant expression layer that may vary by pose, crop, avatar form, or guidance context. It must not replace the Tappo logo, appear as a large repeated decoration on every page, or compete with operational content.

The orange smart orb/system core should feel precise, clean, and trustworthy. It can use secondary blue glow for intelligent atmosphere, but orange remains the brand lead.

### App Asset Style Boundary

The asset style direction is `clear soft-gradient intelligent operations UI`.

Use:

- 2025-2026 current mobile UI feeling.
- Clear, lightweight, soft, comfortable gradients.
- Rounded-square icon tiles with translucent or softly dimensional glyphs.
- Soft 3D / semi-flat hybrid illustrations with low detail and gentle shadows.
- Orange-led brand identity with ice blue, cyan, mint, peach, soft yellow, or light pink as secondary atmosphere colors.
- Spacious Tier 1 compositions with bento-like card grouping and clean mobile dashboard hierarchy.

Avoid:

- Traditional old admin UI.
- Gray enterprise toolbar density.
- Heavy skeuomorphism or literal hardware renders.
- Dark cyber AI, neon sci-fi, or blue-first brand takeover.
- Full-page low-contrast neumorphism.
- Generic clipart, emoji-like icons, stock illustration faces, fake logos, watermarks, or generated text inside images.

Generated asset rule: if a Tappo logo appears, place the official project logo asset; never generate fake logo text.

### App Style Kit v0.1

Current Style Kit source: `tasks/T02/output/tappo-app-style-kit-v0.1-2026-06-08.md`.

Use it before page redesign or asset generation. It defines:

- Color tokens.
- Gradient recipes.
- Shadow and elevation recipes.
- Radius, spacing, and typography rules.
- System line icons, soft module icon tiles, and status icon rules.
- Flexible 小T, orange smart orb/system core, and module micro-illustration usage.
- Component specimens and page application matrix.
- Anti-AI and anti-template checklist.

Do not generate the full icon/illustration library before the Style Kit is reviewed. The first asset batch should be limited to assistant direction, orange smart orb/system core, 8-12 module icon tiles, and 3 micro illustrations.

### Current App Direction

The latest App Figma direction is lighter, flatter, and more phone-native than the previous Pad-derived warm-card system:

- Canvas: neutral light gray, warm white, or very pale blue-gray; not warm cream by default.
- Header: white, iPhone-safe, brand logo at `48px`, store selector, `40px` icon button.
- Page width: design target `390px`; implementation may remain responsive, but the current App Style Kit phase reviews `390px` first and ignores `402px` as a design acceptance width.
- Main cards: white cards on gray canvas, module card radius unified to `16px`, low neutral shadow.
- Accent: orange leads brand/action moments including balance, recharge, selected nav state, primary progress, and CTA. Blue is secondary for smart/system/AI atmosphere.
- Icons: latest App home uses simple line icons, not large generated semi-3D raster icons for primary navigation and dashboard rows.
- Bottom nav: four items: `主頁 / 數據 / 應用 / 設置`.

### App Layout Rules

- Header height follows the latest App nodes: `54px` status area plus `60-80px` app header.
- Page gutters are `16px`; hero/balance/main visual cards also align to `16px` on a `390px` frame.
- Repeated App list cards use `358px` width on a `390px` frame.
- Section gap is `16px`.
- Card padding is `16-24px` depending on component height.
- Dense row padding is `12-16px`.
- Icon/text gap is `8-12px`.
- Workflow/detail pages may hide bottom nav when the Figma node omits it.
- Avoid oversized marketing-style hero sections on App operational screens.

### App Components

Owner home:

- Balance card: `350 x 152`, orange gradient, `24px` radius, account label, `1,250 pts`, `充值` pill.
- Sales card: `358 x 222`, white card, top amount block, growth pill, two compact metrics.
- Scene detail card: section title with count pill, white list card, `40px` circular line-icon tiles.
- Order method card: `358 x 502`, semi-circle gauge, three legends, three compact rows.
- Booking strip: single-row white card, label left and value right.
- Bottom nav: white fixed bar, line icons, active icon uses subtle orange circular background.

Transaction record:

- Header: white, back icon plus title `交易記錄`, no bottom nav.
- List container: `16px` gutters, `16px` vertical gap.
- Transaction card: `358 x 149`, `16px` radius, neutral shadow.
- Transaction status icon: `40px` circle; green for top-up/success, orange for deduction/pending-like rows.
- Amount block aligns right; title/time aligns left; second line uses divider and detail/status row.

### App Anti-Patterns

- Do not default App screens to Pad-style warm cream canvas.
- Do not use bulky generated raster icons in bottom nav or dense data rows.
- Do not create nested cards.
- Do not shrink labels below `12px`.
- Do not force long Chinese/HK labels into fixed-width no-wrap text unless the Figma card has proven space.

## Pad Endpoint

Use this section for Tappo Pad, POS hardware, larger settings, and operational tablet screens.

Pad can keep more of the previous warm Tappo visual system:

- Warm cream surfaces are acceptable.
- Larger cards, heavier section grouping, and device/POS illustrations are acceptable.
- Generated raster illustrations can be primary support visuals.
- Pad layouts may use wider grids and denser side-by-side information.
- Settings/POS reference `anMsqgZYi8ZqmJXZah78KI / 287:32144` remains useful for this endpoint.

Pad rules must not be copied into App without checking App Figma nodes.

## Web Endpoint

Web rules are not final yet. Until a Web-specific Figma source exists:

- Treat Web as a separate endpoint, not an expanded App screen.
- Prefer functional admin density, tables, filters, and predictable navigation.
- Do not inherit App bottom nav, App card sizes, or App status-bar spacing.
- Do not inherit Pad warm illustration density unless the Web product explicitly requires it.

## Implementation Mapping

Current Tappo Phone source root:

```text
E:\Projects\Candao-workspace\projects\tappo-phone\source
```

Current App implementation stack:

- Vue 3
- TypeScript
- Vite
- Vue Router
- Pinia

Useful implementation primitives:

- `TpLineIcon`: App endpoint line icons.
- `TpGeneratedIcon`: generated raster icons for richer module or support visuals.
- `TpSoftIcon`: older deterministic chart/category SVG icons; use only when matching older chart treatment.
- `TpBottomNav`: App bottom nav now follows the four-item App Figma direction.

## Verification

For App endpoint work:

- Validate at `390 x 844` or similar iPhone-width viewport.
- Do not use the project historical `402 x 874` viewport as a design acceptance requirement in the current App Style Kit phase.
- Check no horizontal overflow.
- Check nav labels, long HK text, amounts, and transaction rows do not collide.
- Run `npm run typecheck`.
- Run `npm run build`.

## Override Rule

If a task provides a newer Figma node for a specific endpoint, derive that endpoint's rules from the new node and update this file. Keep endpoint-specific rules separated instead of rewriting all Tappo surfaces into one shared style.
