# Codex 本地冷备份执行结果

## 结论

已在旧电脑上完成 Codex 本地对话与配置冷备份。该包用于“旧电脑之后不会再打开、新电脑也不会连接旧电脑”的离线迁移场景。

## 文件位置

- 备份目录：`/Users/victorwong/Documents/Codex/Codex-app-migration/Codex-local-cold-backup-20260830-230425`
- 压缩包：`/Users/victorwong/Documents/Codex/Codex-app-migration/Codex-local-cold-backup-20260830-230425.tar.gz`
- 校验文件：`/Users/victorwong/Documents/Codex/Codex-app-migration/Codex-local-cold-backup-20260830-230425.tar.gz.sha256`

## 校验结果

- 备份目录体积：约 `1.0G`
- 压缩包体积：约 `609M`
- Session jsonl 文件数：`50`
- SHA256：`c86b44f4d2e609d4e51ec6cd31ca1e2e994acd0409cb8d00588f5b669cfa0e11`
- `shasum -a 256 -c`：通过
- `tar -tzf`：通过
- 敏感/运行态路径排除检查：通过

## 已排除

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
- `*.sqlite-wal`
- `*.sqlite-shm`

## 新电脑优先操作

1. 先安装 ChatGPT / Codex 并用同一个账号登录。
2. 完全退出 Codex。
3. 解压压缩包。
4. 备份新电脑自己的 `~/.codex`。
5. 把 `dot-codex/` 复制到新电脑的 `~/.codex/`。
6. 重新打开 Codex。
7. 插件、浏览器、OAuth 和系统权限在新电脑重新授权。

如果桌面端侧边栏没有完整显示旧任务，仍可通过 `/resume`、`codex resume` 或搜索 `sessions/*.jsonl` 找回历史内容。
