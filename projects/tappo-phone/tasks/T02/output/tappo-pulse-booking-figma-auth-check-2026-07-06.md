# TAPPO pulse 订座 Figma MCP 认证复核

## 结论

用户提供的此前调通教程有效。本轮已按同一路径确认官方 Figma MCP 配置存在，并重新执行登录，`codex mcp login figma` 返回成功。

但当前 Codex Desktop 会话里仍未暴露单独的 `mcp__figma.*` 工具；当前可调用的是 Figma Apps connector，这条连接器继续返回 `UNAUTHORIZED / Reauthentication required`，所以目标 Figma 文件 `nHamLH3qlZYFXVC0OVxNqc` 仍暂时不能写入。

## 已确认

- `~/.codex/config.toml` 中存在 `[mcp_servers.figma] url = "https://mcp.figma.com/mcp"`。
- `codex mcp list` 显示 `figma https://mcp.figma.com/mcp enabled OAuth`。
- `codex mcp login figma` 已成功返回 `Successfully logged in to MCP server 'figma'`。
- `tool_search` 仍只暴露 `mcp__codex_apps__figma.*`，未暴露单独的 `mcp__figma.whoami`。
- `mcp__codex_apps__figma._whoami` 仍返回 `UNAUTHORIZED / Reauthentication required`。

## 下一步

1. 重启或重新加载 Codex Desktop 会话，让工具列表重新读取官方 MCP。
2. 重新搜索并调用 `mcp__figma.whoami` 或等价 `whoami`。
3. 若返回 `Can-dao_UI / 2163548408@qq.com`，先读取目标 TAPPO pulse 文件的现有页面、组件、变量和样式。
4. 按真实 TAPPO PULSE 设计规范重建订座画板，而不是直接照搬本地近似评审稿。
