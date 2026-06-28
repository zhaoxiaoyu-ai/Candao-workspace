# T10 - Align MOS v2 Micro-site Frames To 01 Default

## Status

done

## Goal

Use `MOS v2 / 微官網管理 / 01 默認` (`1866:19820`) as the authoritative design baseline and update the remaining micro-site frames so their specification details match the corrected default frame.

## Figma Target

- File: `25.1213 MOS v2`
- File key: `1qe8d4ll9wLnxPAsiJAoa9`
- Page: `UI（確認稿）`
- Baseline node: `1866:19820`
- Baseline URL: `https://www.figma.com/design/1qe8d4ll9wLnxPAsiJAoa9/25.1213_MOS_v2?node-id=1866-19820&m=dev`

## Requirements

- Preserve each frame's existing business content and state-specific content.
- Align remaining frames to `微官網管理 / 01 默認` for:
  - Auto-layout structure.
  - Removal of unnecessary spacer, hidden, or redundant layout layers.
  - Corrected 13px body/help text sizing.
  - Text color and fill/stroke reuse via design tokens where the baseline uses tokens.
  - Card, column, row, and content spacing.
  - Consistent field/control internal spacing.
- Keep prototype interactions valid.
- Do not modify read-only source prototypes under `e:\Downloads\Tappo0615`.

## Current Blocker

Figma MCP currently requires reauthentication. `get_metadata`, `get_libraries`, and `whoami` all returned:

```text
This app connection requires reauthentication before other actions on this app can succeed.
```

Latest continuation attempt on 2026-06-18:

- `get_design_context` for baseline node `1866:19820` returned the same reauthentication requirement.
- `whoami` failed with a ChatGPT app transport request error to `https://chatgpt.com/backend-api/wham/apps`.

Latest continuation attempt on 2026-06-22:

- `get_design_context` for baseline node `1866:19820` returned the same reauthentication requirement.
- `whoami` returned the same reauthentication requirement.

Figma remote MCP installation on 2026-06-22:

- Added the official Figma remote MCP server with `codex mcp add figma --url https://mcp.figma.com/mcp`.
- Completed OAuth with `codex mcp login figma`.
- Verified via `codex mcp list` and `codex mcp get figma` that `figma` is enabled and configured as a streamable HTTP server at `https://mcp.figma.com/mcp`.
- Current running conversation still routes Figma tool calls through the old `mcp__codex_apps__figma` namespace, which still returns reauthentication required. A new Codex session should reload the newly configured remote MCP server before retrying the baseline read.

Restart retry on 2026-06-22:

- `codex mcp list` still shows remote `figma` enabled with OAuth.
- Tool discovery still exposes only the old `mcp__codex_apps__figma` namespace.
- `whoami` and `get_design_context` for baseline node `1866:19820` still returned `UNAUTHORIZED` / `TRIGGER_REAUTHENTICATION`.

Explicit OAuth confirmation retry on 2026-06-22:

- `codex mcp list` still shows remote `figma` enabled with OAuth.
- Tool discovery still exposes only the old `mcp__codex_apps__figma` namespace, not a separate remote `figma` namespace.
- `whoami` and `get_design_context` for `1qe8d4ll9wLnxPAsiJAoa9` / `1866:19820` still returned `UNAUTHORIZED` / `TRIGGER_REAUTHENTICATION`.

OAuth repair attempt on 2026-06-22:

- User explicitly instructed not to continue reading any Figma file or node.
- Confirmed `codex mcp get figma` shows `transport: streamable_http` and `url: https://mcp.figma.com/mcp`.
- Confirmed current tool discovery still exposes only `mcp__codex_apps__figma`, not a separate remote `figma` namespace.
- Ran `codex mcp logout figma`, which removed stored OAuth credentials.
- Ran `codex mcp login figma`, which completed successfully.
- Reconfirmed `codex mcp list` shows `figma` enabled with OAuth.
- Current session still has the old tool namespace loaded, so it cannot validate the newly refreshed remote MCP authorization. Close this session and start a new Codex session, then call `whoami` first. Only after `whoami` succeeds should the frame design context be read.

Step4+ implementation retry on 2026-06-22:

- User asked to read the baseline Figma URL and update all micro-site pages from step4 onward.
- Loaded the Figma implementation and Figma write/API workflows.
- Confirmed `codex mcp list` still shows official remote `figma` enabled with OAuth.
- Tool discovery still exposes only `mcp__codex_apps__figma`.
- `mcp__codex_apps__figma._whoami` returned `UNAUTHORIZED` / `TRIGGER_REAUTHENTICATION`.
- No Figma file/node was read, and no Figma frame was modified.
- A nested `codex exec` diagnostic did start the remote `figma` MCP server in a fresh process, but exited before any Figma tool call due Codex CLI/model compatibility errors.

## Planned Validation

- Compare each remaining micro-site frame against baseline `1866:19820`.
- Confirm no visible text is compressed or non-Roboto.
- Confirm visible body/help text follows the baseline 13px sizing where applicable.
- Confirm text/fill/stroke/radius variables match baseline token usage where applicable.
- Confirm no unnecessary zero-size or hidden spacer layers remain inside editable content.
- Confirm left/right column card order, gaps, and card internals have no overlaps.
- Confirm prototype reactions have no invalid targets.

## Completion

Completed on 2026-06-23.

- Updated `MOS v2 / 微官網管理 / 09 Google 有帳號-Step1` through `12 Google 有帳號-Step4`.
- Kept the manually adjusted no-account steps unchanged.
- Rebuilt each target Google card as a single-step page instead of a stacked all-steps card.
- Synced the Google card header, tabs, stepper, card spacing, frame height, footer position, and primary-color usage to the corrected baseline/adjusted pattern.
- Rebuilt Google prototype hotspots with valid destinations and no same-frame self-navigation.
- Saved visual review screenshots under `tasks/T10/output/`.
