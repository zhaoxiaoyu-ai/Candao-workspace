# Remotion Studio localhost 修复记录

日期：2026-09-01

## 问题

打开 `http://localhost:3000/` 时显示：

```text
ERR_CONNECTION_REFUSED
localhost 拒绝建立连接
```

## 原因

- `3000` 端口没有 Remotion Studio 服务监听。
- T08 的启动脚本仍使用旧电脑路径 `/Users/victorwong/.cache/...`。
- 新电脑用户路径是 `/Users/mac`，正确 runtime 应通过 `$HOME/.cache/...` 自动定位。

## 修复

已更新：

- `projects/workspace-setup/tasks/T08/output/remotion-open.sh`
- `projects/workspace-setup/tasks/T08/output/remotion-env.example.sh`

核心改动：

```bash
CODEX_RUNTIME_DIR="${CODEX_RUNTIME_DIR:-$HOME/.cache/codex-runtimes/codex-primary-runtime/dependencies}"
export PATH="$CODEX_RUNTIME_DIR/node/bin:$CODEX_RUNTIME_DIR/bin/fallback:${PATH}"
```

## 当前可用入口

```bash
bash projects/workspace-setup/tasks/T08/output/remotion-open.sh
```

打开后访问：

```text
http://localhost:3000/
```

## 本次验证

Remotion Studio 已启动：

```text
Server ready - Local: http://localhost:3000, Network: http://192.168.1.76:3000
```

本机请求通过：

```text
HTTP/1.1 200 OK
```

端口监听通过：

```text
node ... TCP *:3000 (LISTEN)
```

## 默认 demo

脚本已生成默认 Remotion demo：

```text
projects/workspace-setup/remotion-demo
```

主要文件：

```text
package.json
remotion.config.ts
src/Composition.tsx
src/Root.tsx
src/index.ts
```

当前 demo 使用 Remotion `4.0.519`。
