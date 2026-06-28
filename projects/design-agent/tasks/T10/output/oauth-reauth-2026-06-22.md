# T10 OAuth Reauthorization Attempt

Date: 2026-06-22

## Request

Do not read any Figma file or node. First troubleshoot and repair the Figma MCP OAuth state:

1. Confirm whether the current Codex session loaded the latest Figma MCP server.
2. Trigger Figma MCP OAuth reauthorization.
3. Restart the Codex session after authorization.
4. Call `whoami` first after restart.
5. Only after `whoami` succeeds, read the frame design context.

## Findings

The CLI-level MCP configuration is correct:

```text
figma
  enabled: true
  transport: streamable_http
  url: https://mcp.figma.com/mcp
```

`codex mcp list` shows:

```text
Name    Url                         Status    Auth
figma   https://mcp.figma.com/mcp   enabled   OAuth
```

However, tool discovery in this active conversation still exposes only the old `mcp__codex_apps__figma` namespace. No separate remote `figma` namespace is available in this running session.

## Reauthorization Performed

Ran:

```powershell
codex mcp logout figma
codex mcp login figma
```

Result:

```text
Removed OAuth credentials for 'figma'.
Successfully logged in to MCP server 'figma'.
```

After reauthorization, `codex mcp list` still confirms `figma` is `enabled` with `OAuth`.

## Current Status

The OAuth credential has been refreshed successfully at the CLI config level, but this running Codex conversation still has the old Figma app connector tool namespace loaded. This session cannot complete the requested `whoami -> design context` verification chain against the newly authenticated remote MCP server.

## Required Next Step

Close this Codex session and start a new Codex session so the MCP tool context is rebuilt from the current config. In the new session:

1. Confirm tool discovery exposes the refreshed Figma MCP tools.
2. Call `whoami` first.
3. Only if `whoami` succeeds, read the Figma frame design context.
