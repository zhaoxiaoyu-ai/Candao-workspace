# Task T11 - Tappo App Booking Color, Components, And Token Correction

## Status

blocked

## Request

Correct the existing Tappo App booking module in Figma after design feedback:

1. Restore the booking module theme color to the original yellow: single color `#F6D365`, gradient `#F6D365` to `#FDCB85`.
2. Explain why the previous output still did not appear to use the component library sufficiently, and whether extra materials are needed.
3. Globally correct border colors, text colors, and design-token bindings in the booking module.

## Target

- Figma file: `Tappo App`
- File key: `anMsqgZYi8ZqmJXZah78KI`
- Page: `UI`
- Known booking review frame from T09: `3318:68380`

## Figma Access Check

2026-06-23 current-session verification succeeded through the official Figma MCP server in a prior refreshed session:

```text
Tool: mcp__figma.whoami
Handle: Can-dao_UI
Email: 2163548408@qq.com
Plans: Aiello's team (Full), Can-dao_UI (View), figma示例 (Full)
```

The requested design corrections have not been applied yet.

2026-06-23 latest continuation attempt:

- The current chat tool list still exposes `mcp__codex_apps__figma`, not a direct `mcp__figma` namespace.
- Direct calls to `mcp__codex_apps__figma._get_metadata`, `_get_libraries`, and `_use_figma` all failed before file access with:

```text
MCP startup failed: timed out handshaking with MCP server after 29.9999998s
```

- A VS Code bundled Codex CLI subprocess could call the official remote `figma.whoami` successfully, proving OAuth is still valid.
- The same subprocess attempted official remote `figma.use_figma` for a read-only audit, but the tool call failed as:

```text
user_cancelled_mcp_tool_call
```

- No Figma file or node was read or modified during this latest attempt.

## Latest Local Progress

2026-06-23 follow-up after the user asked to push forward as much as possible:

- Re-read the local Pad booking prototype references and wrote a clean Traditional Chinese content map: `output/prototype-content-map.md`.
- Prepared a scoped Figma `use_figma` correction script: `output/t11-use-figma-fix-script.js`.
- The script is restricted to the 8 known booking frames, restores `#F6D365` / `#F6D365 -> #FDCB85`, removes `#9A6A00`, and attempts to rebind booking text/borders to existing Tappo/POS tokens.
- The script also corrects sidebar/topbar/status labels to the Pad booking prototype and avoids changing non-booking frames.
- Added execution and validation notes in `output/t11-execution-runbook.md`.
- Local syntax validation passed with `node new Function(...)`.
- The script has not been executed in Figma because file-level Figma access is still blocked/cancelled.
- Final gate retry after preparing the artifacts still exposed only `mcp__codex_apps__figma`; `_whoami` failed with the same MCP startup handshake timeout.

2026-06-23 continuation after user asked to continue:

- Reloaded Figma/Tappo workflow instructions and re-ran the current-chat Figma gate.
- `mcp__codex_apps__figma._whoami` still failed with MCP startup handshake timeout.
- VS Code bundled `codex.exe mcp list` still reports official remote `figma` as enabled with OAuth.
- Two independent `codex exec` whoami-only subprocess attempts timed out after 124s and 184s; no output file was produced and no Figma file/node was read or modified.
- Identified and terminated the lingering diagnostic subprocess started by this continuation.
- Added read-only audit script `output/t11-use-figma-audit-script.js`.
- Updated `output/t11-execution-runbook.md` to run audit first, fix second, and audit again.
- Both `output/t11-use-figma-audit-script.js` and `output/t11-use-figma-fix-script.js` pass local JavaScript syntax validation.

Previous blocker, now superseded:

Figma could not be read or written from the earlier Codex session. The callable Figma App connector returned:

```text
UNAUTHORIZED / TRIGGER_REAUTHENTICATION
This app connection requires reauthentication before other actions on this app can succeed.
```

The current session also does not expose the `use_figma` write tool, so the requested Figma corrections cannot be applied yet.

2026-06-23 OAuth restart:

- Ran `codex mcp logout figma`; credentials were removed.
- Ran `codex mcp login figma`; command exited successfully.
- `codex mcp list` and `codex mcp get figma` confirm official remote `figma` is enabled with OAuth at `https://mcp.figma.com/mcp`.
- At that time, tool discovery still routed Figma calls through `mcp__codex_apps__figma`.
- `mcp__codex_apps__figma._whoami` still returned `UNAUTHORIZED` / `TRIGGER_REAUTHENTICATION`.
- Figma read/write remained blocked in that earlier active conversation.

2026-06-23 VS Code extension OAuth correction:

- User showed the IDE MCP panel where `figma` was still unauthenticated.
- Found two Codex binaries:
  - npm PATH binary: `C:\Users\Admin\AppData\Roaming\npm\codex.cmd`, version `0.114.0`.
  - VS Code bundled binary: `c:\Users\Admin\.vscode\extensions\openai.chatgpt-26.5616.51431-win32-x64\bin\windows-x86_64\codex.exe`, version `0.142.0-alpha.6`.
- The npm binary showed `figma` as OAuth, but the VS Code binary showed `figma` as `Not logged in`.
- Ran `mcp login figma` with the VS Code bundled binary.
- The command returned `Successfully logged in to MCP server 'figma'`.
- The VS Code bundled binary now reports `figma` as enabled with `OAuth`.
- The already-running conversation still exposes `mcp__codex_apps__figma`; `_whoami` still fails until the session reloads.

## Planned Correction Once Figma Access Works

- Restore `Booking color/primary` to `#F6D365`.
- Restore the booking gradient direction/colors to `#F6D365` to `#FDCB85` where the component or token model supports gradients.
- Remove the previous darkened `#9A6A00` booking primary override.
- Rebind border strokes to the correct Tappo border/separator tokens, using booking yellow only for active/selected emphasis rather than every card/input border.
- Rebind all visible manual booking text fills to Tappo text tokens instead of ad hoc fills.
- Re-audit every Button, Input, Select, Radio-group, modal/dialog, filter row, list row/card, sidebar, and topbar area against the Tappo App component library.
- Replace remaining hand-built repeated UI with component instances if matching components exist in the file/library.
- If a component does not exist, reuse the closest existing order-page pattern as an auto-layout frame and bind all fills/strokes/text to tokens.

## Important Color Note

The original yellow `#F6D365` with white normal-size text has low contrast, roughly `1.46:1`, and does not meet WCAG normal text contrast. If the original yellow is required, the safest token-consistent approach is to let the actual Tappo Button component define the text color, or use a dark text token on pale yellow buttons. If white text is still mandatory, the design needs an approved darker yellow variant, overlay treatment, or explicit acceptance of the contrast tradeoff.

## Materials That Would Help

If Figma access is restored, no extra material should be required if the Tappo component library and tokens are discoverable. If discovery is still ambiguous, provide:

- Node URL or component names for the exact Tappo App Button, Input, Select, Radio-group, Modal/Dialog, list row/card, filter bar, topbar, and sidebar components expected for booking.
- The order-page frame node ID that should be treated as the canonical layout reference.
- The token collection/mode names for text, border, surface, selected state, and booking theme colors.
- A decision on whether pale yellow buttons should use token-default dark text or must keep white text despite contrast limitations.
