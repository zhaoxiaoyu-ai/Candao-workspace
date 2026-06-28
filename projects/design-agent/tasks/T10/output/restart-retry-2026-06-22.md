# Restart Retry

Date: 2026-06-22

## User Request

User said the environment had been restarted and asked to retry Figma MCP access.

## Checks

```powershell
codex mcp list
```

Result:

- Remote `figma` server is still configured as `https://mcp.figma.com/mcp`.
- Status is `enabled`.
- Auth is `OAuth`.

Tool discovery in the active conversation still exposed only the old `mcp__codex_apps__figma` namespace.

## Figma Calls Retried

- `mcp__codex_apps__figma._whoami`
- `mcp__codex_apps__figma._get_design_context` for:
  - File key: `1qe8d4ll9wLnxPAsiJAoa9`
  - Node ID: `1866:19820`

Both returned:

```text
UNAUTHORIZED / TRIGGER_REAUTHENTICATION
This app connection requires reauthentication before other actions on this app can succeed.
```

## Conclusion

The official remote MCP server is installed and OAuth-authenticated at the Codex CLI configuration level, but the active conversation is still routed through the old Figma app connector. The baseline frame cannot be read from this conversation yet.

Next step is to start a brand-new Codex conversation/session after the remote MCP installation, or use a Codex surface that loads configured `mcp_servers.figma` rather than the bundled Figma app connector namespace.
