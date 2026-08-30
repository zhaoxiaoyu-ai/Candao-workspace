# Task T09: 整理 Candao workspace 跨电脑迁移方案

## Status

done

## Goal

整理并落地 `Candao-workspace` 迁移到另一台电脑所需的 GitHub + 离线文件迁移方案，避免遗漏未进入 Git 的设计稿、任务产物和本地工作现场。

## Scope

- 检查 workspace 当前 Git 状态、未跟踪文件、依赖缓存和大文件分布。
- 补齐 `.gitignore`，让依赖目录、构建缓存、系统文件和日志不进入 Git。
- 输出迁移清单、复原步骤和可执行脚本。
- 不删除用户文件。
- 不主动推送 GitHub，除非用户明确要求并确认要提交的范围。

## Outputs

- `output/migration-plan-2026-08-30.md`
- `output/migration-inventory-2026-08-30.md`
- `output/migration-export.sh`
- `output/migration-restore-checklist-2026-08-30.md`

## Notes

- 当前机器路径：`/Users/victorwong/Documents/Codex/Candao-workspace`
- 远端仓库：`https://github.com/zhaoxiaoyu-ai/Candao-workspace.git`
- 本机迁移包目录：`/Users/victorwong/Documents/Codex/Candao-migration`
- 最终 snapshot：`/Users/victorwong/Documents/Codex/Candao-migration/Candao-workspace-portable-20260830-190811`
- 最终压缩包：`/Users/victorwong/Documents/Codex/Candao-migration/Candao-workspace-portable-20260830-190811.tar.gz`
- 已生成并验证 portable snapshot，默认不包含 `.git`、依赖目录和构建缓存。
