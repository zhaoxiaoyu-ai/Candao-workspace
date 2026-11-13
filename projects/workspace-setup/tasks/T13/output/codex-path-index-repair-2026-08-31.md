# Codex 旧路径索引修复记录

日期：2026-08-31

## 问题

新电脑用户名和旧电脑不同，迁移后的 Codex 历史任务里仍保存旧绝对路径：

```text
/Users/victorwong/Documents/Codex
```

新电脑实际路径是：

```text
/Users/mac/Documents/Codex
```

因此历史对话里的本地文件、HTML 预览和任务输出会出现 `ERR_FILE_NOT_FOUND` 或 `ENOENT`。

## 已完成

- 已确认 `Candao-workspace` 实体目录存在：
  `/Users/mac/Documents/Codex/Candao-workspace`
- 已确认 `ai-workspace` 实体目录存在并保留：
  `/Users/mac/Documents/ai-workspace`
- 已创建 `ai-workspace` 安全副本：
  `/Users/mac/Documents/Codex/ai-workspace-safety-copy-20260831-014010`
- 已创建 Codex 状态安全快照：
  `/Users/mac/Documents/Codex/codex-recovery-guards/dot-codex-before-path-repair-20260831-020010`
- 已为补修 `state_5.sqlite` 中的旧沙箱路径 JSON 创建单独备份：
  `/Users/mac/Documents/Codex/codex-recovery-guards/sqlite-before-sandbox-policy-path-repair-20260831-070624`
- 已为最终 3 个活动文本状态文件创建单独备份：
  `/Users/mac/Documents/Codex/codex-recovery-guards/path-text-files-before-repair-20260831-095235`
- 已修复活动 Codex 状态和索引中的旧路径：
  `/Users/victorwong/Documents/Codex` -> `/Users/mac/Documents/Codex`
- 已确认截图示例文件在新路径可读：
  `/Users/mac/Documents/Codex/Candao-workspace/projects/candao-international-website/tasks/T17/output/low-fidelity-wireframe-prototype/index.html`

## 验证结果

- 活动 `~/.codex` 可搜索文本中的旧路径残留：0
- `state_5.sqlite` 中旧 workspace / project / sandbox policy 路径记录：0
- `codex-dev.db` 中旧路径记录：0
- `ai-workspace` 相关任务仍指向 `/Users/mac/Documents/ai-workspace`
- `Candao-workspace` 相关任务应指向 `/Users/mac/Documents/Codex/Candao-workspace`

## 最终复核

2026-08-31 已完成最终复核：

- 已补上用户终端提示缺失的脚本：
  `/Users/mac/Documents/Codex/repair-codex-old-user-paths.sh`
- 已修正后台 LaunchAgent 使用的脚本：
  `/Users/mac/.codex/repair-codex-paths-after-quit.command`
- 2026-08-31 15:00 已运行 `/Users/mac/Documents/Codex/repair-codex-old-user-paths.sh`，结果为：
  - `repaired_files=3`
  - `backup_dir=/Users/mac/Documents/Codex/codex-recovery-guards/old-user-path-repair-20260831-150032`
  - `remaining_old_path_files=0`
- 2026-08-31 15:43 已再次完成不需要管理员权限的活动索引修复，结果为：
  - `repaired_files=3`
  - `backup_dir=/Users/mac/Documents/Codex/codex-recovery-guards/non-sudo-old-user-path-repair-20260831-154354`
  - 活动文本状态旧路径残留：0
  - `state_5.sqlite` 旧路径计数：0
  - `codex-dev.db` 旧路径计数：0
- 2026-08-31 15:50 用户反馈仍有很多文件报找不到路径；经复查，问题集中在桌面端 UI 恢复状态，而不是 SQLite 项目索引：
  - `.codex-global-state.json` 中旧路径命中：139
  - 主要位置：`thread-tab-routes`、`thread-browser-tabs`、prompt history
  - 已修复 `.codex-global-state.json` 与 `.codex-global-state.json.bak`
  - `backup_dir=/Users/mac/Documents/Codex/codex-recovery-guards/global-ui-state-old-path-repair-20260831-155009`
  - 2 秒后复查 `remaining_global_state_hits=0`
- 已确认后台任务 `local.codex.path-repair.after-quit` 已加载；当前 Codex 仍在运行时，日志显示它正在等待 App 完全退出。
- 已替换 3 个活动状态文件中的旧路径：
  - `/Users/mac/.codex/.codex-global-state.json`
  - `/Users/mac/.codex/.codex-global-state.json.bak`
  - `/Users/mac/.codex/sessions/2026/08/29/rollout-2026-08-29T21-24-24-01a04db1-5bed-7412-8995-f5a1f5b592ae.jsonl`
- 脚本运行后的当次校验中，活动文本状态旧路径为 0；两个 Codex SQLite 数据库中的旧路径计数也均为 0。当前 Codex 进程仍在运行时，`.codex-global-state.json` 仍可能从内存重新写回旧的 UI tab / prompt history 缓存；最终全局 UI 缓存清理会在完全退出 Codex 后由后台任务自动执行。
- `/Users/mac/.codex/.codex-global-state.json` 与 `.bak` 均通过 JSON 校验。
- `state_5.sqlite` 与 `codex-dev.db` 中旧路径计数均为 0。
- 截图示例 HTML 文件存在，大小为 67796 bytes。
- 已用新路径打开示例 HTML：
  `file:///Users/mac/Documents/Codex/Candao-workspace/projects/candao-international-website/tasks/T17/output/low-fidelity-wireframe-prototype/index.html`

## 用户下一步

现在不要删除、移动或覆盖任何以下目录：

- `/Users/mac/Documents/ai-workspace`
- `/Users/mac/Documents/Codex/ai-workspace-safety-copy-20260831-014010`
- `/Users/mac/.codex.before-restore-20260831-011648`
- `/Users/mac/Documents/Codex/codex-recovery-guards/`

完成当前记录后，需要完全退出并重新打开 Codex，让后台任务在退出后修复运行中缓存写回的全局 UI 状态。

如果重启后仍有旧路径文件打不开，再运行 `create-victorwong-compat-symlink.command` 创建兼容软链接。该脚本只会把旧路径桥接到新路径，不会删除任何工作区。

注意：2026-08-31 用户执行 `sudo` 时返回 `3 incorrect password attempts`，因此兼容软链接尚未创建。该步骤需要本机 `mac` 用户的开机/解锁密码；Apple ID 密码或其他账号密码不会通过。

## 仍需注意

已经打开的右侧预览 tab 可能还缓存旧 URL。重启后如果单个 tab 仍报错，先关闭该 tab，再从对应任务输出重新打开文件。
