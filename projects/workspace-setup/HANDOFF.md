# Handoff

## Next Action

Use `E:\Projects\Candao-workspace\README.md` or `Candao-workspace.code-workspace` as the entry point for future Candao work. The workspace root is now the active Git repository for Candao work, and project source code remains under each project's `source/` folder.

Latest workspace setup change: T11 已完成新电脑文件操作说明。说明文档位于 `projects/workspace-setup/tasks/T11/output/new-computer-file-operations-guide-2026-08-30.md`，覆盖迁移包放置、校验、解压、餐道 workspace 恢复、Codex 本地对话恢复、依赖重装和清理检查。

Previous workspace setup change: T10 已完成 Codex 本地对话与配置离线冷备份。备份文档位于 `projects/workspace-setup/tasks/T10/output/`；本机冷备份目录为 `/Users/victorwong/Documents/Codex/Codex-app-migration/Codex-local-cold-backup-20260830-230425`，压缩包为 `/Users/victorwong/Documents/Codex/Codex-app-migration/Codex-local-cold-backup-20260830-230425.tar.gz`，SHA256 为 `c86b44f4d2e609d4e51ec6cd31ca1e2e994acd0409cb8d00588f5b669cfa0e11`。该包包含 50 个 session jsonl 文件，压缩包约 609M；已排除 `auth.json`、浏览器会话、OAuth 锁、插件缓存、临时缓存、运行锁和旧设备身份文件。不要上传到 GitHub。

Earlier workspace setup change: T09 已完成跨电脑迁移整理。迁移文档位于 `projects/workspace-setup/tasks/T09/output/`；本机 portable snapshot 为 `/Users/victorwong/Documents/Codex/Candao-migration/Candao-workspace-portable-20260830-190811`，压缩包为 `/Users/victorwong/Documents/Codex/Candao-migration/Candao-workspace-portable-20260830-190811.tar.gz`。最终快照约 434M，压缩包约 416M，默认不含 `.git`、依赖目录和构建缓存，包含 `.stitch`、项目记忆、源码、任务记录与关键 output。

Latest workspace-level output: New-computer file operation guide is available at `projects/workspace-setup/tasks/T11/output/new-computer-file-operations-guide-2026-08-30.md`.

## Required Context

Read these files first:

1. `PROJECT.md`
2. `RULES.md`
3. `STATE.md`
4. `TASKS.md`
5. `tasks/T11/task.md`

## Current Task

- ID: `T11`
- Path: `tasks/T11/task.md`

## Notes For Next AI

- The monorepo conversion task is complete.
- The temporary `lanhu-image-downloader` project has been removed from the workspace and from the managed-project registry.
- The workspace root GitHub repository is `https://github.com/zhaoxiaoyu-ai/Candao-workspace`.
- For source work, switch to the specific project folder under `projects/`, but use the workspace root Git repository for workspace-wide commits.
- Root Git status starts from commit `bc7417d` on branch `main`. Root remote is `origin https://github.com/zhaoxiaoyu-ai/Candao-workspace.git`.
- Former nested repository metadata backups live beside each source tree as `.git.backup-20260629` and are ignored by the root repo.
- Do not rely on `ai-workspace` for Candao project state.
- T07 已完成。它已将中文默认输出要求写入根目录 `AGENTS.md` 的 `Global Hard Rules`。后续所有 Candao 任务都必须把它当作工作区硬规则执行。
- T06 is complete. It created a cross-project quarterly AI work review and filled the user's provided Excel template. The latest deliverable is `tasks/T06/output/quarterly-ai-work-report-2026-q2-filled.xlsx`; Case 2 now uses the Tappo Pulse app-market launch assets project scenario. Personal fields such as Chinese name, English name, department, and position are left as placeholders for user confirmation.
- T08 已完成。Remotion 官方文档显示 MCP 已弃用，后续 Remotion 任务优先使用 Remotion Agent Skills 和本地 CLI。当前 shell 默认没有 `node`，可先 source `tasks/T08/output/remotion-env.example.sh`。本次临时验证工程在 `/tmp/codex-remotion-smoke-20260815081042`，已通过 `remotion versions`、`lint`、`compositions` 和 still 渲染。
- 2026-08-28: T08 追加 `tasks/T08/output/remotion-open.sh` 和 `tasks/T08/output/remotion-open.command`。用户若想最简单打开 Remotion Studio，可运行 `bash projects/workspace-setup/tasks/T08/output/remotion-open.sh [Remotion工程目录]`；不传目录时会使用默认 demo 目录。macOS Finder 里也可双击 `.command` 文件打开默认 demo。
- 2026-08-30: T09 已完成迁移整理。根 `.gitignore` 已补齐依赖/缓存/系统文件忽略规则；`projects/workspace-setup/tasks/T09/output/migration-export.sh` 可导出 portable snapshot。已生成并验证 `/Users/victorwong/Documents/Codex/Candao-migration/Candao-workspace-portable-20260830-190811` 和同名 `.tar.gz`。迁移包不含 `.git`、`node_modules`、`.next`、`dist`、`build`、`.cache`、`.DS_Store`、`._*`，包含 `.stitch`、任务 output 和项目文件。
- 2026-08-30: T10 已完成 Codex 本地冷备份。由于旧电脑以后不会再开机，不能依赖 Remote/Handoff；已生成 `/Users/victorwong/Documents/Codex/Codex-app-migration/Codex-local-cold-backup-20260830-230425` 和 `/Users/victorwong/Documents/Codex/Codex-app-migration/Codex-local-cold-backup-20260830-230425.tar.gz`。压缩包约 609M，SHA256 为 `c86b44f4d2e609d4e51ec6cd31ca1e2e994acd0409cb8d00588f5b669cfa0e11`，包含 50 个 session jsonl 文件。该包是私密冷备份，不进入 GitHub；新电脑应先登录同一账号，再退出 Codex 并按 `tasks/T10/output/codex-local-restore-notes-2026-08-30.md` 恢复。
- 2026-08-30: T11 已完成新电脑文件操作说明。新电脑恢复时需要同时处理项目包和 Codex 冷备份包：先 clone GitHub 仓库，再用餐道 portable snapshot 补齐本地文件；先登录新电脑 Codex，再把冷备份 `dot-codex/` 合并到 `~/.codex/`，保留新电脑 `auth.json`。详细命令见 `tasks/T11/output/new-computer-file-operations-guide-2026-08-30.md`。
