# Handoff

## Next Action

Use `E:\Projects\Candao-workspace\README.md` or `Candao-workspace.code-workspace` as the entry point for future Candao work. The workspace root is now the active Git repository for Candao work, and project source code remains under each project's `source/` folder.

## Required Context

Read these files first:

1. `PROJECT.md`
2. `RULES.md`
3. `STATE.md`
4. `TASKS.md`
5. `tasks/T04/task.md`

## Current Task

- ID: `T04`
- Path: `tasks/T04/task.md`

## Notes For Next AI

- The monorepo conversion task is complete.
- The temporary `lanhu-image-downloader` project has been removed from the workspace and from the managed-project registry.
- For source work, switch to the specific project folder under `projects/`, but use the workspace root Git repository for workspace-wide commits.
- Root Git status starts from commit `bc7417d` on branch `main`. No root remote is configured yet.
- Former nested repository metadata backups live beside each source tree as `.git.backup-20260629` and are ignored by the root repo.
- Do not rely on `ai-workspace` for Candao project state.
