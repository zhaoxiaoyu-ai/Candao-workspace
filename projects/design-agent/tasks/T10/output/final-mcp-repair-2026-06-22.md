# T10 Final Figma MCP Repair Attempt

Date: 2026-06-22

## Request

Follow the screenshot approach:

1. Disable the built-in Codex Figma App/Connector.
2. Use Figma official remote MCP at `https://mcp.figma.com/mcp`.
3. Complete OAuth.
4. Refresh or start a new session so the MCP toolset reloads.
5. Verify with `whoami` before reading or writing Figma content.

## Actions Completed

- Confirmed `C:\Users\Admin\.codex\config.toml` contained official remote MCP:

```toml
[mcp_servers.figma]
url = "https://mcp.figma.com/mcp"
```

- Disabled the built-in Figma plugin:

```toml
[plugins."figma@openai-curated"]
enabled = false
```

- Refreshed OAuth:

```powershell
codex mcp logout figma
codex mcp login figma
```

- OAuth completed successfully.
- `codex mcp list` confirms:

```text
figma   https://mcp.figma.com/mcp   enabled   OAuth
```

## Current Session Result

The current conversation still exposes the old already-loaded `mcp__codex_apps__figma` namespace. Tool discovery did not expose a separate refreshed remote `figma` namespace in this running session.

Calling `mcp__codex_apps__figma._whoami` still returns:

```text
UNAUTHORIZED / TRIGGER_REAUTHENTICATION
This app connection requires reauthentication before other actions on this app can succeed.
```

## Required Next Step

Start a fresh Codex session from `E:\Projects\Candao-workspace`. The new session should load the updated config with `figma@openai-curated` disabled and official remote `figma` MCP enabled.

In the new session:

1. Call Figma `whoami`.
2. If `whoami` succeeds, call `get_design_context` for file key `1qe8d4ll9wLnxPAsiJAoa9`, node `1866:19820`.
3. Only after read access succeeds, continue T10 implementation or Figma write validation.
