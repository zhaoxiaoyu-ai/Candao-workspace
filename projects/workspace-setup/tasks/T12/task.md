# Task T12: 在新电脑执行 Candao workspace 项目文件恢复

## Status

done

## Goal

在新电脑上完成 Candao workspace 的 GitHub clone、迁移包校验、解压和 portable snapshot 覆盖恢复。

## Scope

- 校验 `Candao-workspace-portable-20260830-231908.tar.gz`。
- 校验 `Codex-local-cold-backup-20260830-230425.tar.gz`。
- 将 Candao workspace 从 GitHub clone 到 `/Users/mac/Documents/Codex/Candao-workspace`。
- 将通过校验的 Candao portable snapshot 覆盖到 clone 目录。
- 记录剩余的 Codex 本地对话恢复动作。

## Outputs

- `output/new-computer-restore-execution-2026-08-31.md`

## Notes

- `Codex-local-cold-backup-20260830-230425.tar.gz` 已通过校验，但尚未合并到 `/Users/mac/.codex/`。
- 合并 `dot-codex/` 前必须完全退出 Codex App，避免覆盖正在写入的本地状态文件。
