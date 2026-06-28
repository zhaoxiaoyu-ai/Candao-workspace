# Candao Workspace Operating System

This workspace manages Candao-related project memory and source repositories only. It is independent from `E:\Projects\ai-workspace`; do not read from or write to `ai-workspace` unless a user explicitly asks for a comparison.

## Core Principle

Treat this workspace as the single entry point for Candao company projects. Read only the minimum context needed for the current task, then write back durable state before finishing.

## Workspace Layout

```text
.
├── AGENTS.md
├── README.md
├── Candao-workspace.code-workspace
├── projects/
│   ├── _template/
│   ├── coms/
│   ├── design-agent/
│   ├── xd-to-figma-converter/
│   └── workspace-setup/
├── skills/
├── schemas/
├── prompts/
└── archive/
```

## Managed Project Roots

The source code remains in its original repositories under `E:\Projects` unless a task explicitly asks to migrate files.

| Workspace project | Source root |
| --- | --- |
| `projects/coms/` | `E:\Projects\Candao-workspace\projects\coms\source` |
| `projects/design-agent/` | `E:\Projects\Candao-workspace\projects\design-agent\source` |
| `projects/lanhu-image-downloader/` | `E:\Projects\Candao-workspace\projects\lanhu-image-downloader\source` |
| `projects/tappo-phone/` | `E:\Projects\Candao-workspace\projects\tappo-phone\source` |
| `projects/xd-to-figma-converter/` | `E:\Projects\Candao-workspace\projects\xd-to-figma-converter\source` |

## Required Read Order

For any Candao project task, read context in this order:

1. `/AGENTS.md`
2. `projects/<project>/PROJECT.md`
3. `projects/<project>/RULES.md`
4. `projects/<project>/STATE.md`
5. `projects/<project>/HANDOFF.md`
6. `projects/<project>/tasks/<task-id>/task.md`

Load skills only when the current task explicitly needs them.

## Write-Back Rules

Before ending a task, update:

1. `projects/<project>/TASKS.md`
2. `projects/<project>/STATE.md`
3. `projects/<project>/HANDOFF.md`
4. `projects/<project>/tasks/<task-id>/output/`

If no meaningful output artifact was created, write a short note in the task output folder.

## Boundaries

- This workspace manages only Candao company projects.
- Do not couple files, tasks, prompts, skills, or state with `ai-workspace`.
- Source repositories are stored under each managed project's `source/` folder.
- Do not scan all of `E:\Projects`; start from the managed project root listed above.
- Do not read `archive/` unless explicitly asked.

## Status Values

Use these task statuses:

- `todo`
- `in_progress`
- `blocked`
- `done`
- `archived`

## Completion Checklist

Before reporting completion:

- Confirm the requested work is done.
- Confirm state files were updated.
- Note any blocker or test that could not be run.
- Leave `HANDOFF.md` clear enough for a new AI session to continue.
