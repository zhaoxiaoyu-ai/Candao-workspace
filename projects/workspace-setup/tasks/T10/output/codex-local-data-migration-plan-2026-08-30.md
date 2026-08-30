# Codex 本地对话离线迁移方案

## 场景判断

用户场景是：旧电脑之后不会再打开，新电脑也不会连接旧电脑。因此不能依赖 Codex Remote 或 Handoff 在两台机器之间在线交接。

可行方案是现在在旧电脑上做 `~/.codex` 的离线冷备份，再把备份包带到新电脑。这个方案是 best-effort：它可以最大化保留本地对话、附件、生成图片、个人 skills 和部分本地状态，但不等同于官方“一键迁移全部桌面端侧边栏状态”。

## 官方依据

- OpenAI Docs `Remote connections`：Handoff 用于在本机和已连接 remote host 之间移动现有 chat 与 Git 状态。若旧电脑以后不在线，新电脑也不连接旧电脑，这条路线不可用。链接：https://learn.chatgpt.com/docs/remote-connections
- OpenAI Docs `Advanced Configuration`：Codex 本地状态位于 `CODEX_HOME`，默认是 `~/.codex`，常见文件包括 `config.toml`、`auth.json`、`history.jsonl` 及其他本地状态、日志和缓存。链接：https://learn.chatgpt.com/docs/config-file/config-advanced
- OpenAI Docs `Authentication`：`auth.json` 应像密码一样处理，包含 access tokens，不能提交、粘贴或随意分享。链接：https://learn.chatgpt.com/docs/auth
- OpenAI Docs `Developer commands` 和 `Codex CLI`：本地 saved chat 可通过 `/resume` 或 `codex resume` 继续。链接：https://learn.chatgpt.com/docs/developer-commands 和 https://learn.chatgpt.com/docs/codex/cli

## 本机检查结果

- Codex 本地目录：`/Users/victorwong/.codex`
- 目录体积：约 `1.6G`
- 现有 session 文件：`50`
- 最大数据：
  - `sessions`：约 `720M`
  - `archived_sessions`：约 `63M`
  - `generated_images`：约 `38M`
  - `attachments`：约 `560K`
  - `skills`：约 `2.5M`
  - `logs_2.sqlite`：约 `240M`
  - `plugins`：约 `322M`，主要是缓存，不进入主备份
  - `.tmp`：约 `161M`，临时缓存，不进入主备份

## 备份策略

主备份包含：

- `sessions/`
- `archived_sessions/`
- `attachments/`
- `generated_images/`
- `visualizations/`
- `skills/`
- `shell_snapshots/`
- `AGENTS.md`
- `config.toml`
- `keybindings.json`
- `session_index.jsonl`
- `history.jsonl`
- `transcription-history.jsonl`
- `.codex-global-state.json`
- `.codex-global-state.json.bak`
- `models_cache.json`
- `state_5.sqlite`
- `memories_1.sqlite`
- `goals_1.sqlite`
- `logs_2.sqlite`
- `queue_1.sqlite`
- `sqlite/*.db`

主备份排除：

- `auth.json`
- `browser/`
- `mcp-oauth-locks/`
- `cache/`
- `.tmp/`
- `tmp/`
- `plugins/cache/`
- `plugins/.plugin-appserver/`
- `plugins/.remote-plugin-install-staging/`
- `computer-use/`
- `thread-writer-locks/`
- `ipc/`
- `process_manager/`
- `node_repl/`
- `installation_id`
- SQLite 的 `*-wal` 和 `*-shm` 文件

## 新电脑恢复原则

1. 先在新电脑安装 ChatGPT / Codex，并用同一个 ChatGPT 账号和 workspace 登录。
2. 完全退出 Codex。
3. 备份新电脑自己的 `~/.codex`。
4. 把冷备份包里的 `dot-codex/` 内容复制到新电脑的 `~/.codex/`。
5. 重新打开 Codex。
6. 如果桌面端侧边栏没有完整显示旧对话，优先用 `/resume` 或 `codex resume` 查找 saved chats；底层 `sessions/*.jsonl` 仍可作为可搜索的历史副本。
7. 插件、浏览器登录、OAuth 授权和系统权限在新电脑上重新登录或重新授权。

## 本次执行结果

- 已生成冷备份目录：`/Users/victorwong/Documents/Codex/Codex-app-migration/Codex-local-cold-backup-20260830-230425`
- 已生成压缩包：`/Users/victorwong/Documents/Codex/Codex-app-migration/Codex-local-cold-backup-20260830-230425.tar.gz`
- 已生成校验文件：`/Users/victorwong/Documents/Codex/Codex-app-migration/Codex-local-cold-backup-20260830-230425.tar.gz.sha256`
- 冷备份目录体积：约 `1.0G`
- 压缩包体积：约 `609M`
- Session jsonl 文件数：`50`
- SHA256：`c86b44f4d2e609d4e51ec6cd31ca1e2e994acd0409cb8d00588f5b669cfa0e11`
- 已验证压缩包可读，且未包含 `auth.json`、`browser/`、`mcp-oauth-locks/`、`plugins/cache/`、`.tmp/`、`cache/`、运行锁和旧设备身份文件。

## 风险说明

- 这不是官方承诺的完整跨机器 UI 状态迁移。
- `config.toml` 里可能有旧电脑路径，新电脑恢复后需要按新路径修正。
- 不迁移 `auth.json` 是为了降低泄露风险；若必须迁移登录凭据，应该单独做加密备份，并把它当密码处理。
- 不要把这个备份包上传到 GitHub。
