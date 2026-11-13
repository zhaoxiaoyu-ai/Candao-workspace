# Project: TAPPO Product Group

## Goal

Maintain TAPPO-related product work with clear naming boundaries that match the Figma project files: `Tappo Station`, `Tappo Pulse`, `Tappo MOS`, and `Tappo微官网`. The old `Tappo Phone` label maps to `Tappo Pulse`.

## Scope

In scope:

- `Tappo Pulse` Vue 3 mobile WebView source code under `source/`.
- `Tappo Pulse` design tokens, components, bridge layer, mock services, and phased page slices.
- `Tappo Station`, `Tappo微官网`, and `Tappo MOS` design records when they belong to the TAPPO product group.
- Shared naming, design-system, icon, illustration, and review-output records.
- Owner, staff, ordering, reservation, payment, microsite, and MOS workflow notes.

Out of scope:

- Flutter native shell implementation.
- Real backend integration before API contracts are provided.
- Non-Candao workspace state.

## Source Root

- Current `Tappo Pulse` implementation source root: `E:\Projects\Candao-workspace\projects\tappo-phone\source`
- `projects/tappo-phone/` is a legacy workspace folder name. Keep it for path compatibility unless the user explicitly asks for a filesystem migration.

## Outputs

- Runnable Vue 3/Vite app.
- Durable TAPPO product-group task notes and artifacts under this project folder.

## Naming Map

Current understanding:

| Area | Use this name | Notes |
| --- | --- | --- |
| Workspace grouping | TAPPO product group | Internal workspace grouping only. |
| Tappo App / Tappo app | Tappo Station | Use this for the Figma project/file corresponding to App. |
| Tappo Pad / Tappo pad | Tappo Station | Use this for the Figma project/file corresponding to Pad. |
| TAPPO POS / Tappo POS | Tappo Station | Use this for the Figma project/file corresponding to POS. |
| Tappo phone | Tappo Pulse | Old `Tappo Phone` wording maps here. Current `projects/tappo-phone/source` implementation belongs here. |
| MOS | Tappo MOS | Backend management system work, including `25.1213_MOS_v2`. |
| 微官网 | Tappo微官网 | Merchant/customer-facing H5 or microsite work. |
| Legacy label | Tappo Phone | Treat as old naming for `Tappo Pulse`; keep only in historical notes, old filenames, or legacy technical paths. |

## Context Files

- `PROJECT.md`: project definition
- `RULES.md`: project-specific rules
- `TASKS.md`: task map
- `STATE.md`: current truth
- `HANDOFF.md`: next entry point
- `tasks/<task-id>/task.md`: task definition
- `tasks/<task-id>/output/`: task artifacts
