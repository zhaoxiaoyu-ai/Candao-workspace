# Mobbin MCP Setup Note

Date: 2026-05-22

## Action

Registered Mobbin MCP globally for Codex:

```powershell
codex mcp add mobbin --url https://api.mobbin.com/mcp
```

This added the following block to `C:\Users\Admin\.codex\config.toml`:

```toml
[mcp_servers.mobbin]
url = "https://api.mobbin.com/mcp"
```

## Current Status

- `codex mcp list` shows `mobbin` as enabled.
- Current Codex CLI version: `codex-cli 0.114.0`.
- `codex mcp login mobbin` timed out in this session.
- `codex mcp list` currently reports Mobbin auth as `Unsupported`, while Figma reports `OAuth`.

## Follow-Up

Restart Codex/IDE so the new MCP server can be discovered in a fresh tool list. If Mobbin tools still do not appear, verify Mobbin account entitlement and Codex MCP OAuth support for `https://api.mobbin.com/mcp`.
