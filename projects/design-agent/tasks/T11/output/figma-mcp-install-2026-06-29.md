# Figma MCP Install Attempt - 2026-06-29

## Request

Install Figma MCP and open account authorization for login.

## Actions

- Checked Codex MCP command syntax.
- Confirmed initial `codex mcp list` only showed `node_repl`.
- Registered official remote Figma MCP:
  - Name: `figma`
  - URL: `https://mcp.figma.com/mcp`
- Opened the first browser OAuth authorization URL generated during `codex mcp add`.
- The first OAuth flow timed out waiting for the local callback.
- Confirmed `figma` was registered but `Not logged in`.
- Ran `codex mcp login figma`.
- Opened the second browser OAuth authorization URL.
- The second OAuth flow also timed out waiting for the local callback.

## Final Status

`figma` is installed/registered and enabled, but not authenticated:

```text
figma  https://mcp.figma.com/mcp  enabled  Not logged in
```

## Impact

- The active Codex session still has no callable Figma tools.
- `whoami` cannot be called.
- `use_figma` cannot be called.
- T11 Figma audit/fix scripts were not executed.
- Tappo App Figma file `anMsqgZYi8ZqmJXZah78KI` was not read or modified.

## Next Step

Run `codex mcp login figma` again when the user is ready to complete the browser authorization flow. After OAuth succeeds, restart or refresh the active Codex session if needed, then gate with `whoami` before running the T11 audit script.
