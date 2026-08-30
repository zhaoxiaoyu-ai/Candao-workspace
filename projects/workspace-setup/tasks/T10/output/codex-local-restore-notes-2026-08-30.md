# 新电脑恢复说明

## 先做这三件事

1. 在新电脑安装 ChatGPT / Codex。
2. 用同一个 ChatGPT 账号和 workspace 登录。
3. 完全退出 Codex，确认没有 Codex 进程正在运行。

## 解压备份包

备份包名称类似：

```bash
Codex-local-cold-backup-YYYYMMDD-HHMMSS.tar.gz
```

校验：

```bash
shasum -a 256 -c Codex-local-cold-backup-YYYYMMDD-HHMMSS.tar.gz.sha256
```

解压：

```bash
tar -xzf Codex-local-cold-backup-YYYYMMDD-HHMMSS.tar.gz
```

## 恢复到新电脑

先备份新电脑自己的 Codex 本地目录：

```bash
mv "$HOME/.codex" "$HOME/.codex.before-restore-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$HOME/.codex"
```

复制备份内容：

```bash
rsync -a Codex-local-cold-backup-YYYYMMDD-HHMMSS/dot-codex/ "$HOME/.codex/"
```

然后打开 Codex。

## 恢复后检查

- 查看侧边栏是否出现旧任务。
- 在 Codex 中尝试 `/resume`。
- 在终端尝试 `codex resume`。
- 检查 `~/.codex/sessions` 和 `~/.codex/session_index.jsonl` 是否存在旧对话记录。
- 重新登录插件和浏览器会话。
- 打开餐道 workspace：`/Users/victorwong/Documents/Codex/Candao-workspace`，或新电脑上的对应迁移路径。

## 不建议恢复的内容

- `auth.json`：包含登录 token，主备份默认排除。
- `browser/`：浏览器 cookie / session 在新电脑上重新登录更稳。
- `plugins/cache/`：插件缓存应在新电脑重新安装。
- `computer-use/`：桌面控制辅助程序应在新电脑重新安装。
- `thread-writer-locks/`、`ipc/`、`process_manager/`、`node_repl/`：运行态文件，不适合迁移。

## 如果 UI 没有完整识别

这份备份仍有价值，因为 `sessions/*.jsonl` 是可搜索的对话历史副本。可以在新电脑用下面命令查找历史内容：

```bash
rg "关键词" "$HOME/.codex/sessions" "$HOME/.codex/archived_sessions"
```

必要时，把相关 `jsonl` 内容交给新的 Codex 任务，让它读取并继续。
