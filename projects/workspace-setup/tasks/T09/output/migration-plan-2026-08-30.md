# 餐道 workspace 跨电脑迁移方案

## 迁移原则

本次迁移使用“双轨方案”：

1. GitHub 保存可版本化资产：源码、项目记忆、任务记录、规则、文档、锁文件、可追溯交付物。
2. 离线迁移包保存完整工作现场：未进入 Git 的任务 output、截图、设计稿、`.stitch` 导出、Excel、AI、ZIP 等不可轻易再生资产。

依赖目录和构建缓存不迁移，换电脑后按 lockfile 重装。

## 已执行整理

- 新建 workspace 迁移任务：`projects/workspace-setup/tasks/T09/task.md`
- 补齐根目录 `.gitignore`：
  - 忽略 `node_modules/`、`.next/`、`dist/`、`build/`、`.cache/` 等依赖和构建缓存。
  - 忽略 `.DS_Store`、日志、Python 缓存。
  - 未忽略 `.stitch/` 和 `projects/*/tasks/*/output/`，因为这些属于设计和任务现场。
- 输出离线迁移脚本：`projects/workspace-setup/tasks/T09/output/migration-export.sh`
- 已导出本机 portable snapshot：`/Users/victorwong/Documents/Codex/Candao-migration/Candao-workspace-portable-20260830-190811`
- 已生成压缩包：`/Users/victorwong/Documents/Codex/Candao-migration/Candao-workspace-portable-20260830-190811.tar.gz`
- 快照内包含 `MIGRATION-MANIFEST.txt`，记录导出时的 Git 状态。

## 当前迁移判断

- 当前 workspace 根目录：`/Users/victorwong/Documents/Codex/Candao-workspace`
- GitHub 远端：`https://github.com/zhaoxiaoyu-ai/Candao-workspace.git`
- 当前分支：`main`
- 当前 HEAD：`0b9d8e5 2026-06-29 Record GitHub publication details`
- 根目录只有一个 `.git`，未发现嵌套 `projects/*/source/.git`。
- 未发现明显 `.env`、secret、credential 文件；扫描命中的 token 多为设计 token 或依赖源码命名。

## 应该进入 GitHub 的内容

这些建议 commit/push：

- `.gitignore`
- `AGENTS.md`、`README.md`
- `projects/*/PROJECT.md`
- `projects/*/RULES.md`
- `projects/*/STATE.md`
- `projects/*/HANDOFF.md`
- `projects/*/TASKS.md`
- `projects/*/tasks/*/task.md`
- 关键 Markdown、JSON、YAML、Python/TS/TSX/Vue 源码
- 源码项目里的 `package.json`、`package-lock.json`、`pnpm-lock.yaml`

## 建议走离线迁移包的内容

这些不一定适合全部塞进 Git，但必须带走：

- `.stitch/`
- `projects/candao-international-website/tasks/*/output/`
- `projects/design-agent/tasks/*/output/`
- `projects/tappo-phone/tasks/*/output/`
- Excel、AI、ZIP、截图、HTML 原型、设计评审图

## 不建议迁移的内容

这些是可再生或机器相关内容：

- `node_modules/`
- `.next/`
- `dist/`
- `build/`
- `.cache/`
- `.DS_Store`
- `._*` AppleDouble 元数据文件
- 日志文件

## 导出离线迁移包

把 `<目标目录>` 换成移动硬盘、NAS、Dropbox、iCloud Drive 或新电脑可访问的同步目录：

```bash
cd /Users/victorwong/Documents/Codex/Candao-workspace
bash projects/workspace-setup/tasks/T09/output/migration-export.sh <目标目录>
```

例如：

```bash
bash projects/workspace-setup/tasks/T09/output/migration-export.sh /Volumes/Backup
```

如果要连根目录 `.git` 一起保存为完整本地历史快照：

```bash
bash projects/workspace-setup/tasks/T09/output/migration-export.sh /Volumes/Backup --include-git
```

## GitHub 上传建议

迁移前先人工确认是否要把全部未跟踪任务 output 也纳入 Git。如果只想先提交迁移整理本身：

```bash
git add .gitignore projects/workspace-setup/tasks/T09 projects/workspace-setup/TASKS.md projects/workspace-setup/STATE.md projects/workspace-setup/HANDOFF.md
git commit -m "Prepare workspace migration handoff"
git push origin main
```

如果决定把所有业务现场全部纳入 Git，需要先检查 GitHub 单文件大小和仓库体积，必要时启用 Git LFS。

## 已验证结果

- portable snapshot 约 `434M`。
- 已确认未包含 `.git`、`node_modules`、`.next`、`dist`、`build`、`.cache`、`.DS_Store`、`._*`。
- 已确认包含 `.stitch/`、`projects/candao-international-website/tasks/`、`projects/tappo-phone/tasks/T02/output/` 和 `MIGRATION-MANIFEST.txt`。
