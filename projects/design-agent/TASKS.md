# Task Map

| ID | Status | Goal | Path | Updated |
| --- | --- | --- | --- | --- |
| T01 | done | Build MOS v2 Figma pages for 微官網管理 and 訂座管理 from local Trae prototypes | `tasks/T01/task.md` | 2026-06-15 |
| T02 | done | Align MOS v2 generated Figma pages with MOS components, design tokens, and brand page layout | `tasks/T02/task.md` | 2026-06-15 |
| T03 | done | Migrate MOS v2 generated pages to COMS library component instances and typography tokens | `tasks/T03/task.md` | 2026-06-16 |
| T04 | done | Correct MOS v2 shared shell, Roboto typography, form titles, and card styling | `tasks/T04/task.md` | 2026-06-16 |
| T05 | done | Rebuild MOS v2 form/page structure with input-title, select-title, FormPage layout, and existing page modules | `tasks/T05/task.md` | 2026-06-16 |
| T06 | done | Add real auto layout and correct MOS v2 Google/menu/brand follow-up feedback | `tasks/T06/task.md` | 2026-06-18 |
| T07 | done | Build Tappo App booking module pages in Figma using Tappo App components, tokens, and booking theme color | `tasks/T07/task.md` | 2026-06-17 |
| T08 | done | Rework Tappo App booking module to use actual Tappo components, design tokens, order-page shell, form pages, and unified modal patterns | `tasks/T08/task.md` | 2026-06-17 |
| T09 | done | Correct Tappo App booking module single-column layout, Radio-group status switching, component reuse, and booking yellow white-text contrast | `tasks/T09/task.md` | 2026-06-18 |
| T10 | done | Align remaining MOS v2 micro-site frames to the corrected `微官網管理 / 01 默認` design-spec details | `tasks/T10/task.md` | 2026-06-23 |
| T11 | blocked | Restore Tappo App booking yellow, correct component reuse explanation, and globally fix booking border/text token bindings | `tasks/T11/task.md` | 2026-06-23 |

## Figma Access Note

- 2026-06-23 final T11 local progress: Since file-level Figma access still failed/cancelled, prepared non-destructive local deliverables instead: `tasks/T11/output/prototype-content-map.md`, `tasks/T11/output/t11-use-figma-audit-script.js`, `tasks/T11/output/t11-use-figma-fix-script.js`, and `tasks/T11/output/t11-execution-runbook.md`. Both scripts passed local JavaScript syntax validation but have not been executed in Figma. A final `_whoami` gate retry still failed with MCP startup handshake timeout. No Figma file or node was read or modified.

- 2026-06-23 continuation after user asked to continue: Current-chat `_whoami` still timed out during MCP startup. VS Code bundled `codex.exe mcp list` still shows official remote `figma` enabled with OAuth, but two whoami-only `codex exec` subprocess attempts timed out after 124s and 184s. The lingering diagnostic subprocess was identified and terminated. Added `tasks/T11/output/continue-2026-06-23.md`.

- 2026-06-23 latest T11 continuation attempt: Current chat still exposes `mcp__codex_apps__figma`, not direct `mcp__figma`. Direct `_get_metadata`, `_get_libraries`, and `_use_figma` calls for Tappo App file `anMsqgZYi8ZqmJXZah78KI` all failed before file access with `MCP startup failed: timed out handshaking with MCP server after 29.9999998s`. A VS Code bundled Codex CLI subprocess confirmed official remote `figma.whoami` still succeeds, but official remote `figma.use_figma` for a read-only audit failed with `user_cancelled_mcp_tool_call`. No Figma file or node was read or modified.

- 2026-06-23: Current session now exposes the official `mcp__figma` server. `mcp__figma.whoami` succeeded for handle `Can-dao_UI` / `2163548408@qq.com`, with available plans `Aiello's team` (`team::1303717087847373113`, Full), `Can-dao_UI` (`team::1582296935234272183`, View), and `figma示例` (`team::1597058052141150518`, Full). T11 is no longer blocked by the previous Figma reauthentication failure, but the requested Figma design corrections have not yet been applied.

- Earlier on 2026-06-23: User pointed out the IDE MCP panel still showed `figma` as not authenticated. Confirmed the earlier login had used the npm `codex-cli 0.114.0`, while VS Code uses `c:\Users\Admin\.vscode\extensions\openai.chatgpt-26.5616.51431-win32-x64\bin\windows-x86_64\codex.exe` (`0.142.0-alpha.6`). Ran `mcp login figma` with the VS Code extension binary; it returned `Successfully logged in to MCP server 'figma'`, and that same binary then showed `figma` enabled with `OAuth`. At that time, the already-loaded `mcp__codex_apps__figma` connector still returned `UNAUTHORIZED` / `TRIGGER_REAUTHENTICATION`; this is now superseded by the successful official `mcp__figma.whoami` check above.

- Earlier on 2026-06-23: User requested `codex figma` reauthentication restart. Ran `codex mcp logout figma` successfully, then `codex mcp login figma` successfully. `codex mcp list` and `codex mcp get figma` confirmed official remote `figma` remained enabled with OAuth at `https://mcp.figma.com/mcp`. At that time, tool discovery still exposed `mcp__codex_apps__figma`; this is now superseded by the successful official `mcp__figma.whoami` check above.

- 2026-06-22: User asked to correct the Tappo App booking module again: restore the original booking yellow `#F6D365` / `#F6D365-#FDCB85`, explain why component-library usage still appears insufficient, and globally correct border/text design-token usage. Loaded Tappo and Figma workflow context, but the only exposed Figma connector returned `UNAUTHORIZED` / `TRIGGER_REAUTHENTICATION` on `whoami`, and this session does not expose `use_figma`, so no Figma read/write could proceed.

- 2026-06-22: User again asked to read/implement the Figma URL `1qe8d4ll9wLnxPAsiJAoa9` node `1866:19820` and update micro-site pages from step4 onward. Loaded the Figma implementation/write workflow, confirmed `codex mcp list` still shows official remote `figma` enabled with OAuth, and discovered callable tools still route through `mcp__codex_apps__figma`. Gated `whoami` returned `UNAUTHORIZED` / `TRIGGER_REAUTHENTICATION`, so no Figma file/node was read and implementation remains blocked.

- 2026-06-22: Applied the final MCP repair approach from the user's screenshot. Disabled `[plugins."figma@openai-curated"]` in `C:\Users\Admin\.codex\config.toml`, kept `[mcp_servers.figma] url = "https://mcp.figma.com/mcp"`, ran `codex mcp logout figma`, then completed `codex mcp login figma` successfully. `codex mcp list` now shows remote `figma` enabled with OAuth and the built-in Figma plugin disabled in config. Current conversation still exposes the old `mcp__codex_apps__figma` namespace until a new Codex session reloads tools; `whoami` in this session still returns `UNAUTHORIZED` / `TRIGGER_REAUTHENTICATION`.

- 2026-06-22: User asked to implement/read the Figma URL `1qe8d4ll9wLnxPAsiJAoa9` node `1866:19820`. Loaded the Figma implementation workflow and checked the gate first. `codex mcp list` still shows remote `figma` enabled with OAuth, but callable tools still route through `mcp__codex_apps__figma`; `whoami` returned `UNAUTHORIZED` / `TRIGGER_REAUTHENTICATION`, so the design context could not be read and implementation could not start.

- 2026-06-22: Gated retry followed the requested order: call `whoami` first, then read design context only if `whoami` succeeds. Tool discovery still exposed only `mcp__codex_apps__figma`; `whoami` returned `UNAUTHORIZED` / `TRIGGER_REAUTHENTICATION`, so no Figma frame/node design context was read.

- 2026-06-22: Performed OAuth repair without reading any Figma file/node. `codex mcp logout figma` removed credentials and `codex mcp login figma` completed successfully. CLI now confirms `figma` remains `enabled` with `OAuth`, but the active conversation still exposes only `mcp__codex_apps__figma`; close this session and start a new Codex session before running `whoami`.

- 2026-06-22: Retried after confirming `codex mcp list` still shows remote `figma` enabled with OAuth. The active conversation still exposes only `mcp__codex_apps__figma`; `whoami` and `get_design_context` for `1qe8d4ll9wLnxPAsiJAoa9` / `1866:19820` still return `UNAUTHORIZED` / `TRIGGER_REAUTHENTICATION`.

- 2026-06-22: After restart, T10 remains blocked. `codex mcp list` shows remote `figma` enabled with OAuth, but the active conversation still exposes only the old `mcp__codex_apps__figma` namespace; `whoami` and `get_design_context` for `1866:19820` still return `UNAUTHORIZED` / `TRIGGER_REAUTHENTICATION`.

- 2026-06-22: Installed and authenticated the official Figma remote MCP server for Codex as `figma` (`https://mcp.figma.com/mcp`). `codex mcp list` shows it enabled with OAuth, but the current running conversation still uses the old Figma app connector namespace and still returns reauthentication required. A new Codex session should reload the remote server.

- 2026-06-22: T10 remains blocked after continuation attempt 8. Figma MCP `get_design_context` for baseline node `1866:19820` and MCP `whoami` both returned `This app connection requires reauthentication before other actions on this app can succeed.`

- 2026-06-18: T10 remains blocked after continuation attempt 7. Figma MCP `get_design_context` for baseline node `1866:19820` still requires Figma App reauthentication, and `whoami` failed with a ChatGPT app transport request error.

- 2026-06-18: T10 remains blocked after continuation attempt 6. Figma MCP `whoami` timed out after 120 seconds, so the updated `MOS v2 / 微官網管理 / 01 默認` frame could not be verified.

## Rules

- Keep one row per task.
- Update status before ending a session.
- Move completed stale tasks to `archive/` only after they are no longer needed.
