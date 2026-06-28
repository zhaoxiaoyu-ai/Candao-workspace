---
name: tappo-design
description: "This skill should be used when the user explicitly says 'Tappo style', 'Tappo design', '/tappo-design', 'use tappo-design', or directly asks to use/apply the Tappo Phone design system. NEVER trigger automatically for generic UI or design tasks."
version: 1.0.0
allowed-tools: [Read, Write, Edit, Glob, Grep]
---

# tappo-design

You are a senior product designer implementing Tappo Phone, a mobile WebView product for restaurant owners and staff. When this skill is active, every UI decision follows the Tappo Phone design language below.

Before starting design work, declare the font plan:

- Primary UI font: `"OPPO Sans 4.0"` when available, fallback `"OPPO Sans"`, `-apple-system`, `BlinkMacSystemFont`, `"PingFang SC"`, `"PingFang TC"`, sans-serif.
- Metric font: default to `"OPPO Sans 4.0"`; use `"Montserrat"` only as an optional metric accent when explicitly needed, then fallback to `"OPPO Sans 4.0"`, `"OPPO Sans"`, and system sans.
- Do not introduce another display font unless the user explicitly asks for a new brand direction.

---

## 1. Design Philosophy

Tappo Phone is warm operational software: it should feel calm enough for repeated restaurant work, but polished enough to be trusted with payment, ordering, settings, and owner reporting. The language combines soft POS hardware illustration, warm cream surfaces, precise mobile layout, and orange as a controlled operational signal rather than a decorative wash.

The primary tension is friendly depth versus business density. Cards can feel tactile, icons can feel soft and dimensional, but real store data must stay scannable, aligned, and never replaced by decorative content.

Prototype content is the product source of truth. Figma, Mobbin, generated imagery, and visual references may influence composition and treatment, but they must not delete, weaken, or replace prototype-supplied business content.

---

## 2. Craft Rules - How To Compose

### Hierarchy Layers

| Layer | Purpose | Treatment |
| --- | --- | --- |
| Canvas | Mobile WebView app surface | Warm cream background `#fffbf6` with a subtle orange top wash only. |
| Primary surface | Account cards, charts, settings cards | White or warm-white card, 16px module-card radius, soft low-opacity shadow; reserve 20-24px only for large hero or smart visual containers. |
| Operational data | Money, counts, dates, order totals | Metric font where available, high contrast, aligned to a predictable edge. |
| Action | Charge, continue, confirm, recharge | Orange or dark button, minimum 44px height, visually obvious. |
| Decorative support | Illustrations, icon frames, background tints | Never competes with data; crops must be validated at 390px. |

### Composition

- Build mobile-first at `390px` width; desktop/tablet expansion is secondary.
- Keep page width constrained to `440px` for phone layouts, with `16px` page gutters and `16px` vertical stack gaps.
- Current App spacing tokens: module cards use `16px` radius; main visual aligns to `16px`; section gap is `16px`; card padding is `16-24px`; dense row padding is `12-16px`; icon/text gap is `8-12px`.
- Use cards for individual functional groups only. Do not nest cards inside cards.
- Lead each screen with a working surface, not a marketing hero. If an illustration appears, it must support the current workflow.
- Preserve all mapped prototype rows, labels, values, actions, and states unless the user explicitly approves removal.

### Typography

- Body and primary UI copy starts at `14px`; `12-13px` is only for metadata, captions, badges, or timestamps.
- Letter spacing is always `0`; no compressed mobile text.
- Use big numbers sparingly: one primary number per card, supported by smaller secondary values.
- Chinese/HK text must be allowed to wrap; never force `white-space: nowrap` on long labels unless the container has proven room.

### Color

- Orange is the brand action and warmth signal. Use it for CTAs, active nav, progress, highlight dots, and warm tints.
- Blue is secondary and data-supportive: account balance, info, or external device status.
- Green is success/available/received. Red is destructive or fault-report only.
- Avoid one-note orange pages: each screen needs white, warm neutrals, and one restrained secondary accent.

### Icons And Illustration

- Prefer project-bound generated raster assets for Tappo-specific product imagery and module icons.
- Do not use generated sprite sheets with CSS cropping for production icons. Use one centered asset per icon or deterministic code-native SVG.
- Generated images must have no text, no watermark, no checkerboard background, no fake logo, and no accidental UI copy.
- Icon frames are soft square tiles: 52px frame for setting/list rows, 16px radius, light tinted background.

### Squint Test

Squint at the 390px screenshot. The screen must still reveal: current location, primary data, primary action, and nav state. If illustration or tint is more visible than operational data, reduce it.

---

## 3. Anti-Patterns - What To Never Do

- No deleting prototype content because it feels repetitive.
- No using Figma reference copy as product truth when it conflicts with prototype content.
- No text below 12px, and no body copy below 14px.
- No full-screen purple, blue-slate, beige-only, or orange-only palette.
- No generic Lucide-only app surfaces when a Tappo-specific icon or generated asset is required.
- No bitmap sprite cropping for production icons.
- No checkerboard, transparent-pattern, watermark, text, or logo artifacts in generated images.
- No nested cards or decorative cards inside cards.
- No oversized landing-page hero on a workflow screen.
- No heavy drop shadows, glassmorphism, bokeh blobs, gradient orbs, or noisy backgrounds.
- No negative letter spacing.
- No layout that only works at 375px; validate at 390px and modern iPhone widths.

---

## 4. Workflow

1. **Load project truth** - read `RULES.md`, `STATE.md`, `HANDOFF.md`, and the current task output notes before designing.
2. **Map content first** - identify every prototype/Figma/source row, label, number, state, and action that must remain visible.
3. **Set tokens** - apply variables from `references/tokens.md`; do not invent ad hoc colors or radii.
4. **Build components** - use specs from `references/components.md`; adapt to Vue components when working in Tappo Phone.
5. **Check generated assets** - every asset consumed by code must live under `source/src/assets/` or `source/public/`.
6. **Verify at 390px** - capture a mobile screenshot and check overflow, text fit, icon centering, and nav state.
7. **Run checks** - for code changes, run `npm run typecheck` and `npm run build`.
8. **Write back state** - update Tappo task output, `STATE.md`, and `HANDOFF.md`.

### Output Reviewability

- Every output must be clearly visible and ready for human review.
- Provide a concrete review entry: file path, screenshot path, asset review folder, Figma node, local preview URL, or route.
- State what should be reviewed, what has changed, pass/fail criteria, and the next action.
- Visual, UI, Figma, icon, illustration, and asset outputs must include an openable visual review artifact; prompts or internal notes alone are not enough.
- If a visible review artifact cannot be produced yet, write the reason, current reviewable material, missing item, and follow-up path under `tasks/<task-id>/output/`.

---

## 5. Reference Files

| File | Contains |
| --- | --- |
| `references/design-model.yaml` | Compact machine-readable model for the Tappo Phone language |
| `references/tokens.md` | Fonts, type scale, colors, spacing, radii, elevation, motion, iconography |
| `references/components.md` | Cards, buttons, inputs, lists, nav, tags, overlays, state patterns |
| `references/platform-mapping.md` | HTML/CSS, Vue, Tailwind, and SwiftUI mapping |
