# Tappo Phone UI Visual Unification Plan

Date: 2026-06-05
Task: `T02`

## Background

Current low-fidelity page structure is mostly in place, but Tappo Phone still lacks a unified visual layer across:

- overall style language
- icons and illustrations
- component detail treatment
- page-to-page consistency

The design source file is in Figma, while the only existing systematic design reference is for Tappo Pad. Tappo Phone therefore needs a phone-first visual system derived from Pad rules, not a direct shrink-down copy of the Pad UI.

## Goal

Build a high-quality Tappo Phone visual system that is:

- consistent with the Tappo product tone
- clearly differentiated for owner, staff, and ordering scenarios
- suitable for dense restaurant operations on a phone
- executable in Figma first, then stable for front-end implementation

## Product Tone To Hold

Tappo Phone should feel like warm operational software:

- warm, friendly, efficient
- polished but not flashy
- data-dense but still relaxed and readable
- business-trustworthy in payment/order contexts
- approachable in onboarding, app center, and feature guidance contexts

This means:

- content and task completion stay first
- decoration supports hierarchy, not the other way around
- icon and illustration style must feel like one family
- Pad visual language can be inherited in color/material/tone, but layout density and interaction rhythm must be rebuilt for phone

## Working Principles

1. Start from phone scenarios, not from Pad layout compression.
2. Treat prototype content as fixed; optimize hierarchy, not content volume.
3. Create one visual motherboard in Figma before polishing individual pages.
4. Separate system icons from business illustrations; do not mix styles casually.
5. Validate every key screen at phone width before approving style decisions.

## Execution Plan

### Phase 1: Audit And Alignment

Duration: 0.5-1 day

Tasks:

- Inventory all existing Tappo Phone low-fidelity screens in Figma.
- Split pages into three experience groups: owner, staff, ordering/payment.
- Extract what can be inherited from Tappo Pad:
  - brand colors
  - typography temperament
  - card/surface softness
  - chart/info density rules
  - icon metaphors
- Mark what cannot be inherited directly:
  - large Pad layouts
  - desktop-like table density
  - wide multi-column grouping
  - icon sizes and illustration proportions
- Create a style benchmark board in Figma with:
  - current Tappo Phone screens
  - Tappo Pad references
  - 6-9 external reference samples for restaurant SaaS, POS, wallet, and mobile dashboard quality

Outputs:

- `Phone visual audit` page in Figma
- `Can inherit / must redesign` checklist
- page priority list for refinement

### Phase 2: Build Phone Visual Foundation

Duration: 1 day

Tasks:

- Create a dedicated `Tappo Phone Foundations` page in Figma.
- Define phone-first design tokens:
  - color palette
  - typography scale
  - spacing system
  - corner radius
  - shadow/elevation
  - status colors
- Define 4 base page templates:
  - dashboard page
  - app-grid/entry page
  - form/process page
  - detail/list page
- Define component style rules for:
  - top bar
  - bottom nav
  - card
  - button
  - input/select
  - list row
  - badge/tag
  - chart card
  - empty/loading/error state

Outputs:

- Figma foundations page
- Figma component library v0.1
- one-page style cheatsheet for future page design and front-end sync

### Phase 3: Define Icon And Illustration System

Duration: 1-1.5 days

Tasks:

- Split visual assets into three layers:
  - system icons: navigation, settings, actions, status
  - business icons: order, customer, takeaway, payment, POS, booking
  - illustrations: onboarding, empty states, feature guidance, device support
- Set one unified style rule per layer:
  - system icons: simple, precise, rounded geometry, mostly SVG
  - business icons: slightly warmer and more dimensional, but still clean
  - illustrations: soft semi-3D or shaded flat style, warm cream/orange/soft blue accents
- Build an icon sizing matrix:
  - 20px for inline/action
  - 24px for nav/list
  - 28-32px for framed function icons
  - 48-88px for illustration/support graphics
- Define which assets should be SVG and which should be raster:
  - repeat-use UI icons: SVG first
  - scene/empty-state/device visuals: raster allowed
- Produce the first unified asset batch:
  - 20-24 core icons
  - 3-5 small functional illustrations
  - 2-3 hero/support illustrations

Outputs:

- `Icons & Illustrations` page in Figma
- first reusable asset library
- asset usage rules: where each style is allowed and forbidden

### Phase 4: Refine Core Screens In Priority Order

Duration: 2-3 days

Recommended order:

1. Owner dashboard
2. Staff app center
3. Ordering flow
4. Payment result / order detail
5. Settings and support pages

Tasks:

- Rebuild the above screens with the new foundation/components/assets.
- Use one screen as the benchmark for each scenario:
  - owner: data + trust + operational overview
  - staff: quick entry + lightweight guidance
  - ordering/payment: conversion + clarity + low error risk
- Unify:
  - header rhythm
  - card padding
  - CTA prominence
  - chart styles
  - illustration placement
  - icon frame treatment
  - empty and disabled states

Outputs:

- high-fidelity key screens in Figma
- reusable section patterns for remaining screens

### Phase 5: Consistency QA And Handoff

Duration: 0.5-1 day

Tasks:

- Run full-page consistency review across all key screens.
- Check:
  - typography minimum size
  - icon centering and frame consistency
  - illustration crop safety
  - page spacing rhythm
  - same-action same-style rule
  - state completeness
  - owner/staff/ordering tone consistency within one family
- Build a light handoff page for engineering:
  - tokens
  - component states
  - icon export rules
  - illustration file naming
  - page priority for implementation

Outputs:

- final review checklist
- engineering handoff page in Figma
- export package list

## Deliverables

The plan should produce these concrete design assets:

- one `Phone visual audit` page
- one `Tappo Phone Foundations` page
- one `Icons & Illustrations` page
- one reusable component set
- 4-6 high-fidelity key screens
- one design QA checklist
- one engineering handoff page

## Suggested Review Rhythm

- Day 1 morning: align tone words and inheritance boundary from Pad
- Day 1 evening: confirm foundations direction
- Day 2 evening: confirm icon/illustration style batch
- Day 3-4: review key screens by scenario
- Final review: check consistency before large-scale page rollout

## Success Criteria

This plan is successful if:

- people can tell the screens belong to one Tappo Phone product family
- owner, staff, and ordering flows feel different in purpose but consistent in brand
- icon and illustration language is unified instead of mixed
- the UI looks polished without sacrificing business content density
- engineers can implement from Figma without guessing the design rules

## Practical Recommendation

Do not start by polishing every page one by one. The right order is:

1. audit
2. foundation
3. icon/illustration system
4. key screens
5. QA and handoff

If this order is reversed, the project will likely end up with locally good-looking pages but no stable product-level visual system.
