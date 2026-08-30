# 新电脑文件操作说明

## 一句话结论

需要同时带走两类包：

- `Candao-migration`：餐道 workspace 项目文件、`.stitch`、任务产物、本地源码现场。
- `Codex-app-migration`：Codex App 本地对话、附件、生成图片、个人 skills、配置与状态。

只搬 Codex 冷备份不够，因为它不包含餐道项目文件；只搬餐道项目包也不够，因为它不包含 Codex 对话。

## 旧电脑需要转移的最小文件

把下面四个文件放到移动硬盘、U 盘或私密云盘。不要上传 GitHub。

```text
Candao-workspace-portable-*.tar.gz
Candao-workspace-portable-*.tar.gz.sha256
Codex-local-cold-backup-*.tar.gz
Codex-local-cold-backup-*.tar.gz.sha256
```

当前已生成的 Codex 冷备份是：

```text
/Users/victorwong/Documents/Codex/Codex-app-migration/Codex-local-cold-backup-20260830-230425.tar.gz
/Users/victorwong/Documents/Codex/Codex-app-migration/Codex-local-cold-backup-20260830-230425.tar.gz.sha256
```

餐道 workspace 包以最终拷走前最新生成的 `Candao-workspace-portable-*.tar.gz` 为准。

## 旧电脑不需要转移的内容

- 已解压出来的 `Candao-workspace-portable-*` 文件夹：不必转移，除非你想减少新电脑解压步骤。
- 已解压出来的 `Codex-local-cold-backup-*` 文件夹：不必转移。
- `node_modules/`、`.next/`、`dist/`、`build/`、`.cache/`：新电脑按项目需要重新安装或重新生成。
- `~/.codex/auth.json`：包含登录 token，主备份已排除。
- `~/.codex/browser/`：浏览器登录态，新电脑重新登录。
- 插件缓存、OAuth 锁、运行锁、临时目录：不迁移。

## 新电脑建议目录结构

```text
~/Documents/Codex/
├── Migration-Inbox/
│   ├── Candao-workspace-portable-*.tar.gz
│   ├── Candao-workspace-portable-*.tar.gz.sha256
│   ├── Codex-local-cold-backup-*.tar.gz
│   └── Codex-local-cold-backup-*.tar.gz.sha256
└── Candao-workspace/
```

## 第一步：放置迁移包

在新电脑上创建接收目录：

```bash
mkdir -p "$HOME/Documents/Codex/Migration-Inbox"
mkdir -p "$HOME/Documents/Codex"
```

把四个迁移文件复制到：

```text
~/Documents/Codex/Migration-Inbox/
```

## 第二步：校验压缩包

进入接收目录：

```bash
cd "$HOME/Documents/Codex/Migration-Inbox"
```

校验餐道 workspace 包：

```bash
shasum -a 256 -c Candao-workspace-portable-*.tar.gz.sha256
```

校验 Codex 冷备份包：

```bash
shasum -a 256 -c Codex-local-cold-backup-*.tar.gz.sha256
```

两条命令都应该显示 `OK`。如果失败，先不要解压和恢复，重新复制文件。

## 第三步：解压两个包

```bash
tar -xzf Candao-workspace-portable-*.tar.gz
tar -xzf Codex-local-cold-backup-*.tar.gz
```

解压后会看到：

```text
Candao-workspace-portable-YYYYMMDD-HHMMSS/
Codex-local-cold-backup-YYYYMMDD-HHMMSS/
```

## 第四步：恢复餐道 workspace

优先从 GitHub clone 最新仓库，拿到 `.git` 历史和最新提交：

```bash
git clone https://github.com/zhaoxiaoyu-ai/Candao-workspace.git "$HOME/Documents/Codex/Candao-workspace"
```

如果目标目录已经存在，先改名备份：

```bash
mv "$HOME/Documents/Codex/Candao-workspace" "$HOME/Documents/Codex/Candao-workspace.before-restore-$(date +%Y%m%d-%H%M%S)"
git clone https://github.com/zhaoxiaoyu-ai/Candao-workspace.git "$HOME/Documents/Codex/Candao-workspace"
```

再把 portable snapshot 覆盖进去，补齐未进 Git 的本地文件、设计资产和工作现场：

```bash
rsync -a "$HOME/Documents/Codex/Migration-Inbox"/Candao-workspace-portable-*/ "$HOME/Documents/Codex/Candao-workspace/"
```

检查状态：

```bash
cd "$HOME/Documents/Codex/Candao-workspace"
git status -sb
```

看到一些未提交修改或未跟踪文件是正常的，因为 portable snapshot 的目的就是把旧电脑本地现场也带过来。

## 第五步：恢复 Codex 本地对话

先在新电脑安装 ChatGPT / Codex，并用同一个 ChatGPT 账号和同一个 workspace 登录一次。然后完全退出 Codex。

备份新电脑自己的 `~/.codex`。如果还没有这个目录，就创建一个：

```bash
if [ -d "$HOME/.codex" ]; then
  cp -a "$HOME/.codex" "$HOME/.codex.before-restore-$(date +%Y%m%d-%H%M%S)"
else
  mkdir -p "$HOME/.codex"
fi
```

把旧电脑冷备份合并进去：

```bash
rsync -a "$HOME/Documents/Codex/Migration-Inbox"/Codex-local-cold-backup-*/dot-codex/ "$HOME/.codex/"
```

这个操作不会复制旧电脑的 `auth.json`，因此新电脑自己的登录状态会保留。插件、浏览器登录、OAuth 授权和系统权限需要在新电脑重新连接。

## 第六步：打开和验证

打开 Codex 后检查：

- 侧边栏是否出现旧任务。
- 在 Codex 输入 `/resume`，查看 saved chats。
- 终端可尝试 `codex resume`。
- 餐道项目路径是否为 `~/Documents/Codex/Candao-workspace`。

如果 UI 没有完整显示旧任务，对话文件仍在：

```bash
rg "关键词" "$HOME/.codex/sessions" "$HOME/.codex/archived_sessions"
```

## 第七步：项目依赖恢复

不要从旧电脑迁移 `node_modules`。进入具体项目后按需安装：

```bash
cd "$HOME/Documents/Codex/Candao-workspace"
```

如果根目录需要依赖：

```bash
npm install
```

如果某个子项目需要依赖，进入对应 `source/` 后按该项目的 `package.json` 和 lockfile 安装。

## 第八步：确认成功后再清理

确认餐道 workspace、Codex 历史、附件和生成图片都能找到后，可以删除新电脑 `Migration-Inbox` 里的解压目录，只保留 `.tar.gz` 和 `.sha256` 作为长期备份。

不要删除移动硬盘或私密云盘里的原始压缩包，至少保留到新电脑稳定使用一段时间后。

## 最终检查清单

- `~/Documents/Codex/Candao-workspace` 存在。
- `~/Documents/Codex/Candao-workspace/.git` 存在。
- `~/Documents/Codex/Candao-workspace/projects` 存在。
- `~/Documents/Codex/Candao-workspace/.stitch` 存在。
- `~/.codex/sessions` 存在。
- `~/.codex/archived_sessions` 存在。
- `~/.codex/session_index.jsonl` 存在。
- `~/.codex/auth.json` 是新电脑登录后生成的，不是旧电脑复制来的。
- Codex 能打开或通过 `/resume` 找到旧任务。
