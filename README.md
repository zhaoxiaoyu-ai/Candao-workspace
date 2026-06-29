# Candao Workspace

This is the independent AI-readable workspace for Candao company projects. It provides one entry point for project context, task state, handoffs, and source repositories.

## Start Here

For any active task, tell the AI:

```text
Please work in E:\Projects\Candao-workspace.

Read:
- AGENTS.md
- projects/<project>/PROJECT.md
- projects/<project>/RULES.md
- projects/<project>/STATE.md
- projects/<project>/HANDOFF.md
- projects/<project>/tasks/<task-id>/task.md

Then execute <task-id>.

When finished, update:
- projects/<project>/TASKS.md
- projects/<project>/STATE.md
- projects/<project>/HANDOFF.md
- projects/<project>/tasks/<task-id>/output/
```

## Managed Projects

| Project | Workspace path | Source root |
| --- | --- | --- |
| COMS Design System | `projects/coms/` | `projects/coms/source/` |
| Design Agent | `projects/design-agent/` | `projects/design-agent/source/` |
| Tappo Phone | `projects/tappo-phone/` | `projects/tappo-phone/source/` |
| XD to Figma Converter | `projects/xd-to-figma-converter/` | `projects/xd-to-figma-converter/source/` |

## Isolation Rule

This workspace is not coupled to `E:\Projects\ai-workspace`. Candao project state, task records, prompts, schemas, and future outputs should stay under `E:\Projects\Candao-workspace`.

## Expansion Points

- Add Candao projects under `projects/`.
- Add reusable Candao workflows under `skills/`.
- Add output contracts under `schemas/`.
- Add reusable prompts under `prompts/`.
- Move obsolete Candao task folders into `archive/` only when they should no longer affect active context.
