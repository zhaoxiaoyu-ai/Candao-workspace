# T10 Retry - Figma OAuth Enabled But Active Connector Still Requires Reauth

Date: 2026-06-22

## Request

Run `codex mcp list` to confirm `figma` is still enabled with OAuth, then retry reading file `1qe8d4ll9wLnxPAsiJAoa9`, node `1866:19820`.

## Result

`codex mcp list` confirms the remote Figma MCP server is configured and authenticated:

```text
Name    Url                         Status    Auth
figma   https://mcp.figma.com/mcp   enabled   OAuth
```

However, tool discovery in the current Codex conversation still exposes only the old `mcp__codex_apps__figma` namespace, not a separate remote `figma` namespace.

`mcp__codex_apps__figma._whoami` returned:

```json
{
  "error": "This app connection requires reauthentication before other actions on this app can succeed.",
  "error_code": "UNAUTHORIZED",
  "error_data": {
    "detail": "Reauthentication required",
    "action": "TRIGGER_REAUTHENTICATION",
    "reason": "www_authenticate_reauth"
  }
}
```

`mcp__codex_apps__figma._get_design_context` for file `1qe8d4ll9wLnxPAsiJAoa9`, node `1866:19820`, returned the same `UNAUTHORIZED` / `TRIGGER_REAUTHENTICATION` response.

## Conclusion

T10 remains blocked. The CLI-level remote MCP configuration is valid, but this running session still routes Figma calls through the old app connector, which requires reauthentication.
