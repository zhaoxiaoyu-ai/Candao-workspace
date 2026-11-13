# T08 - 配齐 Remotion 能力并提供使用说明

## Status

done

## Request

用户要求“配齐 remotion 能力并提供全面的使用说明”。

## Scope

- 确认可用的 Remotion 插件、技能和本地运行时。
- 安装/启用 Remotion Codex 插件能力。
- 验证 Remotion 新项目脚手架、依赖安装、CLI、composition 发现和 still 渲染链路。
- 沉淀 Candao workspace 内可复用的 Remotion 使用手册和环境初始化片段。

## Evidence

- 已读取本地 `stitch-build:remotion` 技能：`/Users/victorwong/.codex/plugins/cache/stitch-skills/stitch-build/1.0.0/skills/remotion/SKILL.md`。
- 已安装并读取 Remotion 插件清单：`/Users/victorwong/.codex/plugins/cache/openai-curated-remote/remotion/1.0.7/.codex-plugin/plugin.json`。
- 已读取 Remotion 插件技能入口，包括 `remotion-create`、`remotion-markup`、`remotion-render`、`remotion-studio`、`remotion-captions`、`remotion-multimedia`、`remotion-saas`、`remotion-interactivity`、`remotion-docs`、`remotion-upgrade` 和 `remotion-maps`。
- 已核对 Remotion 官方文档：`create-video`、Agent Skills、Studio、Render、MCP deprecation 等页面。

## Actions

- 通过插件安装建议确认安装 `remotion@openai-curated-remote`。
- 通过 Codex bundled runtime 确认可用 Node.js `v24.19.0` 和 pnpm `11.19.0`。
- 通过 `pnpm view remotion version` 确认当前 npm registry 上 Remotion 版本为 `4.0.512`。
- 在 `/tmp/codex-remotion-smoke-20260815081042` 生成临时 Remotion 工程并验证：
  - `pnpm exec remotion versions` 通过，所有 Remotion 包版本一致为 `4.0.512`。
  - `pnpm run lint` 通过。
  - `pnpm exec remotion compositions` 可发现默认 `MyComp`，`1280x720`，`30fps`，`60` frames。
  - `pnpm exec remotion still MyComp ... --frame=30 --scale=0.25` 成功输出 PNG。

## Outputs

- `output/remotion-capability-guide.md`
- `output/remotion-env.example.sh`
- `output/remotion-open.sh`
- `output/remotion-open.command`

## Notes

- 当前 macOS shell 中 `node` 不在默认 PATH，需要使用 Codex bundled runtime 路径或自行安装 Node.js。
- Remotion 官方文档显示 Remotion MCP 已弃用，主路径应使用 Remotion Agent Skills 和本地 CLI。
- pnpm 首次安装 Remotion 模板时可能因 `esbuild` build scripts approval 返回非零码，可运行 `pnpm approve-builds --all` 后重试。
- 2026-08-28: 追加 `output/remotion-open.sh` 和 `output/remotion-open.command` 作为更简单的 Remotion Studio 打开方式。
- 2026-09-01: 新电脑上发现脚本仍硬编码旧用户路径 `/Users/victorwong`，导致 `localhost:3000` 无服务监听。已改为基于 `$HOME` 自动定位 Codex runtime，并在 `projects/workspace-setup/remotion-demo` 创建默认 demo。
