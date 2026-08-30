# Task T10: 备份 Codex 本地对话与配置用于离线迁移

## Status

done

## Goal

在旧电脑未来不再开机、新电脑不会连接旧电脑的前提下，整理并执行 Codex 本地对话、附件、生成资产、个人 skills 和关键配置的离线冷备份方案。

## Scope

- 基于官方 OpenAI 文档确认 Codex Remote/Handoff 与本地状态迁移边界。
- 检查本机 `~/.codex` 中对话、附件、生成资产、配置和 SQLite 状态文件的位置。
- 输出不上传 GitHub 的本地冷备份脚本和恢复说明。
- 实际生成一份可拷贝到移动硬盘或云盘私密空间的备份包。
- 默认排除 `auth.json`、浏览器会话、OAuth 锁、插件缓存、运行缓存和临时文件。

## Outputs

- `output/codex-local-data-migration-plan-2026-08-30.md`
- `output/codex-local-cold-backup.sh`
- `output/codex-local-restore-notes-2026-08-30.md`
- `output/codex-local-backup-result-2026-08-30.md`

## Notes

- 官方 Handoff 适用于已连接的本机与远程 host；旧电脑离线后不适用。
- 备份目标目录：`/Users/victorwong/Documents/Codex/Codex-app-migration`
- Codex 本地状态源：`/Users/victorwong/.codex`
- 已生成冷备份：`/Users/victorwong/Documents/Codex/Codex-app-migration/Codex-local-cold-backup-20260830-230425`
- 已生成压缩包：`/Users/victorwong/Documents/Codex/Codex-app-migration/Codex-local-cold-backup-20260830-230425.tar.gz`
