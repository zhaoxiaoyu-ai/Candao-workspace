# Current State

## 2026-11-13 · T15 GitHub同步

T15已完成：本机餐道工作区已同步至独立public仓库`zhaoxiaoyu-ai/Candao-workspace`，主提交`d37f8d9`经远端main核验一致。保留原有修改、源码、当前资源及现有跟踪资产，凭据扫描未发现实际凭据，未改变业务／设计审批状态。正式回执和资源清单见`tasks/T15/output/`；下方迁移与Remotion记录保留历史。

## Phase

T14 已完成。Remotion Studio `localhost:3000` 拒绝连接问题已修复，默认 demo 已在新电脑创建并启动。

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
- 2026-08-30: T10 已完成。基于官方 OpenAI 文档确认：Remote/Handoff 需要旧电脑作为已连接 host 在线，因此不适用于“旧电脑以后不会再打开、新电脑不会连接旧电脑”的场景；本机已生成 Codex 本地冷备份目录 `/Users/victorwong/Documents/Codex/Codex-app-migration/Codex-local-cold-backup-20260830-230425`，压缩包 `/Users/victorwong/Documents/Codex/Codex-app-migration/Codex-local-cold-backup-20260830-230425.tar.gz`，SHA256 为 `c86b44f4d2e609d4e51ec6cd31ca1e2e994acd0409cb8d00588f5b669cfa0e11`。备份包含 50 个 session jsonl 文件，目录约 1.0G，压缩包约 609M；已验证不含 `auth.json`、`browser/`、OAuth 锁、插件缓存、临时缓存、运行锁和旧设备身份文件。
- 2026-08-30: T11 已完成。已输出 `projects/workspace-setup/tasks/T11/output/new-computer-file-operations-guide-2026-08-30.md`，明确新电脑需要同时恢复餐道 workspace 项目文件包与 Codex 本地冷备份包。恢复策略：先从 GitHub clone `https://github.com/zhaoxiaoyu-ai/Candao-workspace.git`，再用 `Candao-workspace-portable-*.tar.gz` 解压内容覆盖补齐本地文件；Codex 冷备份通过 `rsync` 合并到新电脑 `~/.codex/`，保留新电脑自己的 `auth.json`。
- 2026-08-31: T12 已完成。新电脑路径 `/Users/mac/Documents/Codex/Candao-workspace` 已从 GitHub clone，远端 `main` 为 `708d7fc5e407bdfaba0d49bebb9659fa594fc4d3`；`Candao-workspace-portable-20260830-231908.tar.gz` 和 `Codex-local-cold-backup-20260830-230425.tar.gz` 均已通过 `.sha256` 校验；已将 `231908` 项目包解压到 `/Users/mac/Documents/Codex/Migration-Staging/` 并 `rsync` 覆盖到 clone 目录。`.git`、`.stitch`、`projects/candao-international-website` 与 `projects/tappo-phone/source` 均已存在。Codex 本地对话冷备份尚未合并到 `/Users/mac/.codex/`，因为需要先完全退出当前 Codex App。
- 2026-08-31: T13 已完成当前会话内可执行的旧路径索引修复。迁移后 Codex 历史文件链接仍指向旧路径 `/Users/victorwong/Documents/Codex/Candao-workspace`，导致 `ERR_FILE_NOT_FOUND` / `ENOENT`；已建立 `/Users/mac/.codex` 安全快照，修复 Codex 数据库、活动索引、历史任务沙箱策略 JSON 和可搜索文本中的旧路径到 `/Users/mac/Documents/Codex`，并验证截图示例文件在新路径可读。2026-08-31 15:43 已完成不需要管理员权限的活动索引修复，运行结果为 `repaired_files=3`、`backup_dir=/Users/mac/Documents/Codex/codex-recovery-guards/non-sudo-old-user-path-repair-20260831-154354`；活动文本索引与两个 Codex SQLite 数据库的旧路径计数均为 0。2026-08-31 15:50 进一步清理 `.codex-global-state.json` 中 139 个 UI tab / browser tab / prompt history 旧路径，备份目录为 `/Users/mac/Documents/Codex/codex-recovery-guards/global-ui-state-old-path-repair-20260831-155009`，复查 `remaining_global_state_hits=0`。后台任务 `local.codex.path-repair.after-quit` 已加载，待用户完全退出 Codex 后自动完成最终全局 UI 缓存修复。`/Users/victorwong/Documents/Codex -> /Users/mac/Documents/Codex` 兼容软链接尚未创建，因为用户终端 `sudo` 认证返回 `3 incorrect password attempts`。`ai-workspace` 本体 `/Users/mac/Documents/ai-workspace` 和安全副本 `/Users/mac/Documents/Codex/ai-workspace-safety-copy-20260831-014010` 保留，不得删除。
- 2026-09-01: T14 已完成。用户访问 `http://localhost:3000/` 时出现 `ERR_CONNECTION_REFUSED`；原因是 `3000` 端口没有 Remotion Studio 监听，且 T08 启动脚本仍硬编码旧电脑 `/Users/victorwong/.cache/...` runtime 路径。已将 `remotion-open.sh` 和 `remotion-env.example.sh` 改为 `$HOME/.cache/...` 自动定位，在 `projects/workspace-setup/remotion-demo` 创建默认 Remotion demo 并启动 Studio。已验证 `curl -I http://localhost:3000/` 返回 `HTTP/1.1 200 OK`，`node` 正在监听 `*:3000`。

## Active Task

- ID: `T15`
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
- For offline Codex chat migration when the old computer will not remain online, use `projects/workspace-setup/tasks/T10/output/codex-local-cold-backup.sh` to create a private cold backup from `~/.codex`; keep the backup out of GitHub and restore it only after signing in on the new computer.
- On the new computer, follow `projects/workspace-setup/tasks/T11/output/new-computer-file-operations-guide-2026-08-30.md` for exact file placement, checksum, extraction, workspace restore, Codex restore, dependency reinstall, and cleanup operations.
- On 2026-08-31, Candao workspace project-file restore and Codex local-state path repair have been executed on the new Mac. Treat `ai-workspace` and `Candao-workspace` as separate local projects; never restore one by replacing the other.
- If old `/Users/victorwong/...` file links still fail after restarting Codex, create the compatibility symlink only after user approval/admin password: `/Users/victorwong/Documents/Codex -> /Users/mac/Documents/Codex`.
- Remotion helper scripts must use `$HOME` or `CODEX_RUNTIME_DIR`, not a hardcoded macOS username, because this workspace has moved across machines.

## Blockers

- 旧路径兼容软链接 `/Users/victorwong/Documents/Codex -> /Users/mac/Documents/Codex` 需要本机管理员密码；用户执行 `sudo` 时出现 `3 incorrect password attempts`。该 blocker 不影响已完成的 Codex 活动索引修复，但会影响旧对话里已经写死的 `file:///Users/victorwong/...` 历史链接。

## Last Updated

2026-11-13
