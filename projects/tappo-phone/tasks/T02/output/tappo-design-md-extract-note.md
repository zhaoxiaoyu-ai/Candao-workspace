# Tappo Design Markdown Extract Note

Date: 2026-05-25

## Result

Extracted a single-file design contract from the callable `tappo-design` skill:

```text
projects/tappo-phone/tappo-design.md
```

Source skill:

```text
C:\Users\Admin\.agents\skills\tappo-design
```

## Purpose

`tappo-design.md` is a project-facing reference for high-fidelity Tappo Phone UI implementation. It condenses the reusable skill into a single document covering:

- source-of-truth hierarchy
- design philosophy
- anti-patterns
- color, typography, spacing, radius, elevation, and motion tokens
- component contracts
- generated asset rules
- Vue/CSS mapping
- implementation and visual validation workflow

## Validation

Checked for unresolved template placeholders. No `{{...}}` placeholders remain.

No code or runtime behavior changed in this extraction pass, so `npm run typecheck` and `npm run build` were not rerun.
