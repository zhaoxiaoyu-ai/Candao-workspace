# Figma Config vs Active Session - 2026-06-29

## User Report

The user reported that Figma MCP is still not configured.

## Verification

Local Codex MCP config exists:

```toml
[mcp_servers.figma]
url = "https://mcp.figma.com/mcp"
```

`codex mcp list` reports:

```text
figma  https://mcp.figma.com/mcp  enabled  OAuth
```

`codex mcp get figma` reports:

```text
enabled: true
transport: streamable_http
url: https://mcp.figma.com/mcp
```

However, the active Codex desktop conversation still reports:

```text
tool_search figma: 0 tools
```

## Conclusion

Figma MCP is configured and authenticated at the local Codex CLI/config level, but this already-running conversation has not loaded the Figma MCP tools into its callable tool list.

From the perspective of this conversation, Figma is still not usable.

## Required Next Step

Refresh or start a new Codex session so it loads the newly configured/authenticated `figma` MCP server. Then gate with `whoami` before any Figma file access.
