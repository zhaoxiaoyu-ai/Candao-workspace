# T10 Step4+ Implementation Blocked By Figma Reauthentication

Date: 2026-06-22

## User Request

Read the Figma baseline URL:

```text
https://www.figma.com/design/1qe8d4ll9wLnxPAsiJAoa9/25.1213_MOS_v2?node-id=1866-19820&m=dev
```

Then use all design details from that page, including auto-layout parameters and typography/design-token usage, to update all micro-site pages from step4 onward while preserving existing page content.

## What Was Checked

- Loaded the Figma design implementation workflow.
- Loaded the Figma write/API workflow because the requested work updates existing Figma frames.
- Confirmed `codex mcp list` still reports official remote `figma` at `https://mcp.figma.com/mcp` as enabled with OAuth.
- Tool discovery still exposed only the old `mcp__codex_apps__figma` namespace.
- Called Figma `whoami` first, before reading any file or node.

## Result

`whoami` returned:

```text
UNAUTHORIZED / TRIGGER_REAUTHENTICATION
This app connection requires reauthentication before other actions on this app can succeed.
```

No Figma file or node was read, and no Figma frame was modified.

## Additional Diagnostic

A controlled nested `codex exec` check was attempted with instructions to call only Figma `whoami`.

- The nested session startup did load an MCP server named `figma`.
- It exited before any Figma tool call because the configured default model `gpt-5.5` requires a newer Codex CLI.
- Retrying with `-m gpt-5` also exited before any Figma tool call because that model is not supported for the current ChatGPT-account CLI mode.

This confirms the official remote MCP can start in a fresh process, but this active conversation still cannot call it directly.

## Required Next Step

Start a fresh Codex session that exposes the official remote `figma` MCP server instead of `mcp__codex_apps__figma`, then call `whoami` first. If `whoami` succeeds, continue by reading baseline node `1866:19820` and syncing the step4+ micro-site frames to that baseline.
