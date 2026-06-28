# T11 Figma File Operation Blocker - 2026-06-23

## User Request

Correct the existing Tappo App booking module:

1. Restore the original booking yellow `#F6D365` and gradient `#F6D365` to `#FDCB85`.
2. Explain why components such as buttons and tabs still do not appear to use the component library, and whether extra materials are needed.
3. Globally correct border colors and text colors so they read from design tokens.
4. Correct sidebar and topbar content/layout by reusing existing styles where the content already exists.

## What Was Attempted

Loaded project context, Tappo design rules, and Figma write workflow instructions. Then attempted Figma access through two paths:

1. Current chat exposed tools:
   - `mcp__codex_apps__figma._get_metadata`
   - `mcp__codex_apps__figma._get_libraries`
   - `mcp__codex_apps__figma._use_figma`

2. VS Code bundled Codex CLI subprocess:
   - Official remote `figma.whoami`
   - Official remote `figma.use_figma`

## Result

No Figma file or node was read or modified.

Current chat file-level tools failed before file access:

```text
MCP startup failed: timed out handshaking with MCP server after 29.9999998s
```

The VS Code bundled Codex CLI subprocess confirmed OAuth is valid:

```text
figma.whoami success
Handle: Can-dao_UI
Email: 2163548408@qq.com
```

The same subprocess attempted official remote `figma.use_figma` for a read-only Tappo App audit, but it failed with:

```text
user_cancelled_mcp_tool_call
```

Final gate retry after local artifacts were prepared:

```text
Tool: mcp__codex_apps__figma._whoami
Result: MCP startup failed: timed out handshaking with MCP server after 29.9999998s
```

Continuation retry after the user asked to continue:

```text
Tool: mcp__codex_apps__figma._whoami
Result: MCP startup failed: timed out handshaking with MCP server after 29.9999998s
```

VS Code bundled Codex subprocess retry:

- `codex.exe mcp list` still showed `figma https://mcp.figma.com/mcp enabled OAuth`.
- A subprocess prompt that only asked for `figma.whoami` timed out after 124 seconds.
- A second subprocess prompt that only asked for `figma.whoami` timed out after 184 seconds and produced no output file.
- The lingering diagnostic `codex exec` process was identified by command line and terminated; no Figma file or node was read or modified.

Additional safe local progress:

- Added `t11-use-figma-audit-script.js`, a read-only `use_figma` audit script scoped to the 8 known booking frames.
- Updated `t11-execution-runbook.md` to run audit first, then the fix script, then audit again.
- Both audit and fix scripts pass local JavaScript syntax validation.

## Interpretation

This is not a missing-design-material problem yet. The current blocker is Figma file-operation access:

- OAuth can succeed.
- The active chat still exposes the old `mcp__codex_apps__figma` tools, which time out during MCP startup.
- A fresh official remote `figma.use_figma` call is being cancelled before the read-only audit can run.

## Component Explanation To Carry Forward

Based on previous T09 state, the output did use actual Tappo instances for sidebar, topbar, Button, Input, Select, Switch, and Radio. It likely still appeared insufficient because several composed patterns were manual auto-layout frames rather than component-library instances:

- Booking list rows/cards.
- Filter/search/control bars.
- Modal/dialog shells.
- Status-switch wrapper labels.
- Some page/body section wrappers.

Previously, the discovered Tappo `radio-group` component was text-only and did not expose a usable checked radio control, so actual `Radio` component instances were placed inside an auto-layout wrapper. This should be rechecked once file access works, especially because the user now explicitly asks for tabs/buttons and component-theme yellow adjustment.

## Needed To Continue

No extra product/design material is required if Figma file access works and the Tappo component library/tokens are discoverable.

If Figma access works but component discovery remains ambiguous, request:

- Exact node IDs or URLs for canonical Button, Tabs, Input, Select, Radio-group, Modal/Dialog, list row/card, sidebar, and topbar components.
- The canonical order-page frame ID for list layout and shell reuse.
- Token collection/mode names for text, border, surface, selected state, and booking theme colors.
- A decision for pale yellow buttons: use the component's approved dark text/token, or keep white text despite the `#F6D365` contrast limitation.
