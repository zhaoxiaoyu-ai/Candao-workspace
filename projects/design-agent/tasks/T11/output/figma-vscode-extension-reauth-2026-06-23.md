# VS Code Figma MCP Authentication

Date: 2026-06-23

## Issue

The IDE MCP panel showed:

```text
figma    未经过身份验证
```

The previous `codex mcp login figma` had been run through the first `codex` on PATH:

```text
C:\Users\Admin\AppData\Roaming\npm\codex.cmd
codex-cli 0.114.0
```

But VS Code is using its bundled Codex binary:

```text
c:\Users\Admin\.vscode\extensions\openai.chatgpt-26.5616.51431-win32-x64\bin\windows-x86_64\codex.exe
codex-cli 0.142.0-alpha.6
```

That binary showed `figma` as `Not logged in`.

## Fix Applied

Ran Figma login with the VS Code extension binary:

```powershell
& 'c:\Users\Admin\.vscode\extensions\openai.chatgpt-26.5616.51431-win32-x64\bin\windows-x86_64\codex.exe' mcp login figma
```

Result:

```text
Successfully logged in to MCP server 'figma'.
```

Verified with the same binary:

```powershell
& 'c:\Users\Admin\.vscode\extensions\openai.chatgpt-26.5616.51431-win32-x64\bin\windows-x86_64\codex.exe' mcp list
```

Result:

```text
figma   https://mcp.figma.com/mcp   enabled   OAuth
```

## Remaining Limitation

The already-running Codex conversation still exposes `mcp__codex_apps__figma`, and calling its `_whoami` still returns:

```text
UNAUTHORIZED / TRIGGER_REAUTHENTICATION
```

This active conversation likely needs to be reloaded or restarted so the newly authenticated VS Code remote `figma` MCP is used.
