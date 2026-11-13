# T13 - 修复新电脑 Codex 旧路径索引并保护 ai-workspace

## Status

done

## Date

2026-08-31

## Goal

迁移到新 Mac 后，修复 Codex 历史任务、文件预览和项目索引中仍指向旧电脑用户名路径的问题，同时确保 `ai-workspace` 与 `Candao-workspace` 作为两个独立工作区保留。

## User Requests

- 迁移后很多文件失去索引，旧对话中的 HTML 和本地输出文件无法打开。
- 截图显示旧路径 `/Users/victorwong/Documents/Codex/Candao-workspace` 报 `ERR_FILE_NOT_FOUND` / `ENOENT`。
- `ai-workspace` 的所有内容非常重要，必须保留，不能被 `Candao-workspace` 顶掉。
- 用户询问当前执行进度以及是否需要自己操作。

## Constraints

- 不删除、不覆盖 `/Users/mac/Documents/ai-workspace`。
- 不把 `.codex`、Codex 对话备份、`ai-workspace` 安全副本上传 GitHub。
- 修复前保留可回退快照。
- 只有在重启 Codex 后仍有旧路径错误时，才考虑创建 `/Users/victorwong/Documents/Codex` 兼容软链接。

## Actions

- 已确认截图中的示例文件在新路径可读：
  `/Users/mac/Documents/Codex/Candao-workspace/projects/candao-international-website/tasks/T17/output/low-fidelity-wireframe-prototype/index.html`
- 已为 `ai-workspace` 建立安全副本并确认本体仍存在。
- 已把 `ai-workspace` 相关 Codex 任务整理到独立侧边栏分组，避免与 Candao workspace 混在一起。
- 已创建 `/Users/mac/.codex` 安全快照后，修复活动 Codex 状态和索引中的旧绝对路径。
- 已补修 `state_5.sqlite` 中历史任务沙箱策略 JSON 里的旧路径，并为数据库留下单独备份。
- 已验证活动索引、SQLite 状态和可搜索文本中不再残留旧路径。
- 已补上 `/Users/mac/Documents/Codex/repair-codex-old-user-paths.sh`，解决终端执行时找不到同名脚本的问题。
- 2026-08-31 15:43 已完成不需要管理员权限的活动索引修复，结果为 `repaired_files=3`、`backup_dir=/Users/mac/Documents/Codex/codex-recovery-guards/non-sudo-old-user-path-repair-20260831-154354`；活动文本索引与两个 Codex SQLite 数据库的旧路径计数均为 0。
- 2026-08-31 15:50 再次定位到 `.codex-global-state.json` 中仍有 139 个 UI 恢复状态旧路径，集中在 `thread-tab-routes`、`thread-browser-tabs` 和 prompt history；已修复 `.codex-global-state.json` 与 `.codex-global-state.json.bak`，备份目录为 `/Users/mac/Documents/Codex/codex-recovery-guards/global-ui-state-old-path-repair-20260831-155009`，复查 `remaining_global_state_hits=0`。
- `/Users/victorwong/Documents/Codex -> /Users/mac/Documents/Codex` 兼容软链接仍未创建，因为用户终端 `sudo` 认证返回 `3 incorrect password attempts`；该步骤只影响旧对话里已经写死的历史 `file:///Users/victorwong/...` 链接。
- 已确认后台任务 `local.codex.path-repair.after-quit` 已加载，当前因 Codex 仍在运行而等待退出；完全退出 Codex 后会自动执行最终全局 UI 缓存路径修复。

## Outputs

- `output/codex-path-index-repair-2026-08-31.md`
- `output/repair-codex-old-user-paths.sh`
- `output/create-victorwong-compat-symlink.command`
