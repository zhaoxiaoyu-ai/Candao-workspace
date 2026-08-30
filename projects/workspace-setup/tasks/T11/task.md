# Task T11: 整理新电脑迁移后的文件操作说明

## Status

done

## Goal

整理用户在新电脑上恢复餐道 workspace 与 Codex 本地对话时需要执行的全部文件操作，避免混淆 GitHub、餐道 portable snapshot 与 Codex 冷备份三类来源。

## Scope

- 明确旧电脑需要带走的最小文件集合。
- 说明新电脑目录放置、校验、解压、恢复、验证和清理步骤。
- 说明 `Candao-migration` 与 `Codex-app-migration` 的区别。
- 说明不应迁移或不应上传 GitHub 的文件。

## Outputs

- `output/new-computer-file-operations-guide-2026-08-30.md`

## Notes

- 餐道 workspace 项目文件与 Codex App 本地对话是两套迁移对象。
- 新电脑优先从 GitHub clone 最新 workspace，再用 portable snapshot 补齐未进 Git 的本地文件。
- Codex 冷备份应合并到新电脑 `~/.codex/`，并保留新电脑重新登录产生的 `auth.json`。
