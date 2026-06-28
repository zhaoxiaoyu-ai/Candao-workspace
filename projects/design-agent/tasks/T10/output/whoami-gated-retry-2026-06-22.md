# T10 Whoami-Gated Figma Retry

Date: 2026-06-22

## Request

Call Figma `whoami` first. Only if `whoami` succeeds, read the design context for the Figma frame link.

## Result

`whoami` did not succeed.

```text
error: This app connection requires reauthentication before other actions on this app can succeed.
error_code: UNAUTHORIZED
action: TRIGGER_REAUTHENTICATION
reason: www_authenticate_reauth
```

Because the gate failed, no Figma file, node, or frame design context was read in this attempt.

## Tool Availability

Tool discovery still exposed only the old `mcp__codex_apps__figma` namespace in this running session. The independently configured remote `figma` MCP server is visible in `codex mcp list` as enabled with OAuth, but it is not exposed as a separate callable namespace in this conversation.
