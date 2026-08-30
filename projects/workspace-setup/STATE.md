# Current State

## Phase

T09 已完成。已整理 Candao workspace 跨电脑迁移方案，补齐依赖/缓存忽略规则，生成迁移清单、恢复检查清单和 portable snapshot 导出脚本，并在本机生成一份已验证迁移包。

## Current Truth

- `E:\Projects\Candao-workspace` has been created as an independent workspace.
- `E:\Projects\Candao-workspace` is now the standalone top-level Git repository for the Candao workspace.
- The workspace root Git repository was initialized on branch `main`, and the first monorepo commit is `bc7417d` (`Initialize Candao workspace monorepo`).
- The workspace root GitHub repository was created at `https://github.com/zhaoxiaoyu-ai/Candao-workspace`.
- Managed projects are registered under the workspace, including `coms`, `design-agent`, `xd-to-figma-converter`, and `tappo-phone`.
- The temporary `lanhu-image-downloader` project was removed from the workspace on 2026-06-29 at the user's request.
- Original source repositories were moved into their project `source/` folders under `E:\Projects\Candao-workspace`.
- The former nested Git repositories for `coms`, `design-agent`, and `xd-to-figma-converter` were deactivated by moving each `source/.git` directory to a local backup folder named `.git.backup-20260629`.
- `E:\Projects` no longer has top-level `COMS`, `Design Agent`, or `xd-to-figma-converter` directories.
- No files were added to `E:\Projects\ai-workspace`.
- 2026-07-05: Created and refined a workspace-level 2026 Q2 AI work review summary for Candao projects. The latest version is organized in the quarterly AI work report format: usage scenarios, efficiency outcomes, practical lessons, problems, trial-and-error experience, next-quarter plan, and summary around the three core purposes. Output: `projects/workspace-setup/tasks/T06/output/quarterly-ai-work-report-2026-q2.md`.
- 2026-07-06: Filled the user's provided quarterly AI work report Excel template and revised Case 2 to use a real project scenario about Tappo Pulse app-market launch assets. Output: `projects/workspace-setup/tasks/T06/output/quarterly-ai-work-report-2026-q2-filled.xlsx`.
- 2026-07-31: T07 已完成。根目录 `AGENTS.md` 现在包含 `Global Hard Rules`，要求后续所有面向用户的回答、交付物、任务产物、摘要、交接、分析文档和生成提示词默认使用中文。只有代码、schema、API 契约、字段名、第三方产品名、命令、日志、URL、测试 ID、文件名或精确引用原文等技术必要场景才保留英文。
- 2026-08-15: T08 已完成。已安装 Remotion Codex 插件 `remotion@openai-curated-remote`，确认插件版本 `1.0.7` 和 Remotion Agent Skills 可用；通过 Codex bundled Node.js `v24.19.0`、pnpm `11.19.0` 验证 Remotion `4.0.512` 新项目脚手架、CLI 版本检查、lint、composition 发现和 still 渲染链路。输出：`projects/workspace-setup/tasks/T08/output/remotion-capability-guide.md` 和 `projects/workspace-setup/tasks/T08/output/remotion-env.example.sh`。
- 2026-08-28: 根据用户反馈“如何运行不够清楚”，T08 追加一键入口 `projects/workspace-setup/tasks/T08/output/remotion-open.sh` 和可双击的 macOS 启动文件 `projects/workspace-setup/tasks/T08/output/remotion-open.command`。脚本可自动配置 Codex bundled Node.js / pnpm PATH、按需创建空白 Remotion 工程、安装依赖并启动 Remotion Studio。
- 2026-08-30: T09 已完成。已补齐根目录 `.gitignore`，忽略 `node_modules/`、`.next/`、`dist/`、`build/`、`.cache/`、`.DS_Store`、日志和 Python 缓存；已输出迁移方案、迁移盘点、恢复检查清单和 `migration-export.sh`。本机已生成 portable snapshot：`/Users/victorwong/Documents/Codex/Candao-migration/Candao-workspace-portable-20260830-190811`，并生成压缩包：`/Users/victorwong/Documents/Codex/Candao-migration/Candao-workspace-portable-20260830-190811.tar.gz`。最终快照约 434M，压缩包约 416M；已确认不含 `.git`、依赖目录、构建缓存、`.DS_Store`、`._*`，且包含 `.stitch` 与关键任务 output。

## Active Task

- ID: `T09`
- Status: `done`

## Decisions

- Use workspace metadata and a VS Code workspace file as the unified entry point.
- Store source repositories inside the Candao workspace to avoid duplicate project entries at `E:\Projects`.
- Keep Candao task state separate from `ai-workspace`.
- Use a single root Git repository at `E:\Projects\Candao-workspace` for workspace-level submission and tracking.
- Publish the root Git repository to its own GitHub repository, independent from any child-project repository and independent from `ai-workspace`.
- Keep former nested repository metadata only as ignored local backups, not as active repositories.
- Remove temporary projects from the workspace entirely when the user decides they are no longer needed.
- Store cross-project AI review artifacts under `workspace-setup` because they summarize the workspace as a whole rather than changing one source project.
- Treat the Chinese default output rule as a workspace-level hard rule, not a per-task preference.
- Treat Remotion video work as an Agent Skills + local CLI workflow. Remotion MCP is deprecated per official docs and should not be the long-term default path.
- For cross-computer migration, use GitHub for tracked/versionable assets and `projects/workspace-setup/tasks/T09/output/migration-export.sh` for non-regenerable local artifacts. Do not migrate dependency/build cache directories; reinstall from lockfiles on the new machine.

## Blockers

- None

## Last Updated

2026-08-30
