# 新电脑恢复执行记录

日期：2026-08-31

## 已完成

- 已确认 `/Users/mac/Documents/Codex/Migration-Inbox/` 中存在迁移包与校验文件。
- 已校验 `Candao-workspace-portable-20260830-231908.tar.gz`，结果为 `OK`。
- 已校验 `Codex-local-cold-backup-20260830-230425.tar.gz`，结果为 `OK`。
- 已从 GitHub clone `https://github.com/zhaoxiaoyu-ai/Candao-workspace.git` 到 `/Users/mac/Documents/Codex/Candao-workspace`。
- Clone 后远端 `main` HEAD 为 `708d7fc5e407bdfaba0d49bebb9659fa594fc4d3`。
- 已解压 `Candao-workspace-portable-20260830-231908.tar.gz` 到 `/Users/mac/Documents/Codex/Migration-Staging/Candao-workspace-portable-20260830-231908/`。
- 已用 `rsync` 将 `231908` portable snapshot 覆盖到 `/Users/mac/Documents/Codex/Candao-workspace/`，补齐 `.stitch`、本地任务产物、项目文件和源码现场。
- 已确认恢复后存在 `.git`、`.stitch`、`projects/candao-international-website` 和 `projects/tappo-phone/source`。

## 当前 Git 状态

恢复后 `git status -sb` 显示 `main...origin/main`，并出现迁移包带来的未提交修改与未跟踪文件。这符合迁移设计，因为 portable snapshot 的作用就是补齐未进入 GitHub 的本地现场。

## 尚未执行

- 尚未把 `/Users/mac/Documents/Codex/Migration-Staging/Codex-local-cold-backup-20260830-230425/dot-codex/` 合并到 `/Users/mac/.codex/`。

原因：执行本记录时 Codex App 仍在运行。冷备份恢复涉及 sqlite、会话索引和本地状态文件，必须先完全退出 Codex App。

## 后续命令

完全退出 Codex App 后执行：

```bash
cp -a "$HOME/.codex" "$HOME/.codex.before-restore-$(date +%Y%m%d-%H%M%S)"
rsync -a "$HOME/Documents/Codex/Migration-Staging/Codex-local-cold-backup-20260830-230425/dot-codex/" "$HOME/.codex/"
```

重新打开 Codex 后检查：

```bash
ls "$HOME/.codex/sessions"
ls "$HOME/.codex/archived_sessions"
```

也可以在 Codex 中用 `/resume` 检查旧任务是否可见。
