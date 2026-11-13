# T14 - 修复 Remotion Studio localhost 拒绝连接

## Status

done

## Request

用户打开 `http://localhost:3000/` 时出现：

```text
ERR_CONNECTION_REFUSED
localhost 拒绝建立连接
```

## Scope

- 检查 `3000` 端口是否有服务监听。
- 检查 T08 Remotion 启动脚本是否适配新电脑路径。
- 修复脚本中旧电脑用户路径。
- 创建并启动默认 Remotion demo。
- 验证 `http://localhost:3000/` 可访问。

## Findings

- `3000` 端口最初没有监听进程，因此浏览器报 `ERR_CONNECTION_REFUSED`。
- `projects/workspace-setup/tasks/T08/output/remotion-open.sh` 和 `remotion-env.example.sh` 仍硬编码旧电脑路径 `/Users/victorwong/.cache/...`。
- 新电脑实际 Codex bundled runtime 在 `$HOME/.cache/codex-runtimes/codex-primary-runtime/dependencies`，当前用户为 `/Users/mac`。

## Actions

- 将 T08 Remotion 启动脚本改成基于 `$HOME` 自动定位 Codex runtime。
- 将环境初始化片段改成基于 `$HOME` 自动定位。
- 运行 `bash projects/workspace-setup/tasks/T08/output/remotion-open.sh`。
- 脚本创建默认 demo：`projects/workspace-setup/remotion-demo`。
- 脚本安装依赖并自动处理 `ERR_PNPM_IGNORED_BUILDS` / `esbuild` build script approval。
- Remotion Studio 已启动在 `http://localhost:3000`。

## Verification

```text
curl -I --max-time 10 http://localhost:3000/
HTTP/1.1 200 OK
```

```text
lsof -nP -iTCP:3000 -sTCP:LISTEN
node ... TCP *:3000 (LISTEN)
```

## Outputs

- `output/remotion-localhost-fix-2026-09-01.md`

## Notes

- 这次问题不是浏览器网络问题，而是 Remotion Studio 服务没有启动。
- 以后最简单打开方式仍是：`bash projects/workspace-setup/tasks/T08/output/remotion-open.sh`。
- 若浏览器仍显示旧错误，刷新 `http://localhost:3000/` 或关闭当前 tab 后重新打开即可。
