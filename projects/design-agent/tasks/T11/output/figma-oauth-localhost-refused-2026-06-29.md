# Figma OAuth Localhost Refused Retry - 2026-06-29

## User Report

After clicking Figma authorization, the browser redirected to localhost and showed:

```text
127.0.0.1 refused connection
```

## Diagnosis

This usually means the browser followed an expired/stale OAuth redirect after the local callback listener had already timed out, or the browser was using a different callback port than the active login process.

## Retry Performed

- Restarted login with `codex mcp login figma`.
- New callback port: `52427`.
- Opened the fresh Figma authorization URL.
- Verified the local listener was active:

```text
codex ... TCP 127.0.0.1:52427 (LISTEN)
```

- The login still timed out without receiving the OAuth callback.
- Final MCP status remained:

```text
figma  https://mcp.figma.com/mcp  enabled  Not logged in
```

## Next Retry Strategy

Start `codex mcp login figma` again. If the browser redirects to `127.0.0.1` and shows an error, copy the complete redirected localhost URL from the address bar while the login command is still running. That callback URL can be replayed locally from the same machine while the listener is active.
