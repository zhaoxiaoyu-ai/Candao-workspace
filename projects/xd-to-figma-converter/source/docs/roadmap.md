# Roadmap

## Phase 1

- Parse real `.xd` packages and enumerate artboards.
- Build a stable intermediate node model from `graphicContent.agc`.
- Support page-scoped pilot conversion runs.

## Phase 2

- Extract intermediate colors, typography, spacing and radius values from XD.
- Resolve Figma components, variables and text styles before generation.
- Output pilot reports and machine-readable summaries for a selected artboard.

## Phase 3

- Bind fills and strokes to Figma variables instead of literal colors.
- Bind spacing, padding and radius to token values whenever the target system supports them.
- Preserve XD grouping so generated Figma frames use meaningful Auto Layout.

## Phase 4

- Convert a full selected XD artboard into a real Figma page.
- Report every unresolved component, variable and layout fallback.
- Expand from pilot conversion to all remaining artboards only after the pilot passes review.

## Working Reference

- Use [xd-to-figma-playbook.md](E:\Projects\xd-to-figma-converter\docs\xd-to-figma-playbook.md) as the default execution reference for subsequent page migrations.
