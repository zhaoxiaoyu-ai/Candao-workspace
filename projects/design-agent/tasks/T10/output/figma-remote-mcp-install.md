# Figma Remote MCP Install

Date: 2026-06-22

## Source

- Official Figma remote MCP installation docs for Codex:
  - `https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/#codex`

## Commands Run

```powershell
codex --version
codex mcp list
codex mcp add figma --url https://mcp.figma.com/mcp
codex mcp login figma
codex mcp list
codex mcp get figma
```

## Result

- Codex CLI version: `codex-cli 0.114.0`.
- `codex mcp add figma --url https://mcp.figma.com/mcp` timed out in the shell, but successfully wrote the server entry to `C:\Users\Admin\.codex\config.toml`.
- `codex mcp login figma` completed OAuth and returned `Successfully logged in to MCP server 'figma'.`
- `codex mcp list` now shows `figma` enabled with Auth `OAuth`.
- `codex mcp get figma` shows:

```text
figma
  enabled: true
  transport: streamable_http
  url: https://mcp.figma.com/mcp
```

## Current Session Limitation

The current running Codex conversation still exposes the old `mcp__codex_apps__figma` connector namespace. Calling its `whoami` after the remote MCP OAuth still returned:

```text
UNAUTHORIZED / This app connection requires reauthentication before other actions on this app can succeed.
```

This means the official remote MCP server is installed and authenticated at the Codex CLI level, but the current already-running session has not hot-loaded it. Start a new Codex session or reload the extension before retrying the T10 baseline read.

## Next Verification

In the next fresh Codex session:

1. Run `codex mcp list` and confirm `figma` is enabled with Auth `OAuth`.
2. Discover tools; the new remote server should be available from the configured MCP server.
3. Retry the baseline read for file key `1qe8d4ll9wLnxPAsiJAoa9`, node `1866:19820`.
