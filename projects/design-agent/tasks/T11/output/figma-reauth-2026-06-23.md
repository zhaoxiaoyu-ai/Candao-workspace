# Figma OAuth Restart

Date: 2026-06-23

## Request

Restart Codex Figma authentication.

## Actions

Ran:

```powershell
codex mcp logout figma
codex mcp login figma
codex mcp list
codex mcp get figma
```

## Result

- `codex mcp logout figma` removed OAuth credentials for `figma`.
- `codex mcp login figma` exited successfully.
- `codex mcp list` shows:

```text
figma   https://mcp.figma.com/mcp   enabled   OAuth
```

- `codex mcp get figma` confirms:

```text
enabled: true
transport: streamable_http
url: https://mcp.figma.com/mcp
```

## Current Session Verification

Tool discovery still exposes the Figma App connector namespace:

```text
mcp__codex_apps__figma
```

Calling `mcp__codex_apps__figma._whoami` still returns:

```text
UNAUTHORIZED / TRIGGER_REAUTHENTICATION
This app connection requires reauthentication before other actions on this app can succeed.
```

## Status

CLI-side Figma OAuth was restarted successfully, but this active conversation still cannot use Figma because it is routed through the old connector namespace. Figma read/write remains blocked until a session exposes the official remote `figma` MCP or the app connector is reauthenticated by the host.
