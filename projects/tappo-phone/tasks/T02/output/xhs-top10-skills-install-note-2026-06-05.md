# XHS Top10 Skills Install Note

Date: 2026-06-05
Task: `T02`

## Source

User provided Xiaohongshu short link:

```text
http://xhslink.com/o/ADJQEc9oN6q
```

The Xiaohongshu short link could not be directly extracted as plain page content, but the same note content was indexed on the web under the title:

```text
推荐 Top10：面向 前端/产品/UI 的 Skills 这 10 个 S...
```

Referenced list:

1. `frontend-skill` from `openai/skills`
2. `frontend-design` from `anthropics/skills`
3. `figma-implement-design` from `openai/skills`
4. `web-design-guidelines` from `vercel-labs/agent-skills`
5. `react-best-practices` from `vercel-labs/agent-skills`
6. `playwright` from `openai/skills`
7. `webapp-testing` from `anthropics/skills`
8. `canvas-design` from `anthropics/skills`
9. `brand-guidelines` from `anthropics/skills`
10. `vercel-deploy-claimable` from `vercel-labs/agent-skills`

## Installed

Installed or synced into:

```text
C:\Users\Admin\.codex\skills
C:\Users\Admin\.agents\skills
```

Installed skills:

| Article Name | Installed Name | Status |
| --- | --- | --- |
| `frontend-design` | `frontend-design` | installed |
| `figma-implement-design` | `figma-implement-design` | installed |
| `web-design-guidelines` | `web-design-guidelines` | installed |
| `react-best-practices` | `vercel-react-best-practices` | installed under current Vercel name |
| `playwright` | `playwright` | installed |
| `webapp-testing` | `webapp-testing` | installed |
| `canvas-design` | `canvas-design` | installed |
| `brand-guidelines` | `brand-guidelines` | installed |
| `vercel-deploy-claimable` | `deploy-to-vercel` | installed under current Vercel name |

## Not Installed

| Article Name | Reason |
| --- | --- |
| `frontend-skill` | Current `openai/skills` clone and raw path do not expose this skill. `npx skills` found 39 OpenAI curated skills and reported no match for `frontend-skill`; raw URL also returned 404. |

## Commands Used

OpenAI skills installed with:

```powershell
npx skills add openai/skills -g -a codex -s frontend-skill figma-implement-design playwright -y --copy --full-depth
```

This installed only:

- `figma-implement-design`
- `playwright`

Anthropic single-file skills installed from raw GitHub URLs because Git clone connectivity was intermittent:

- `frontend-design`
- `webapp-testing`
- `canvas-design`
- `brand-guidelines`

Vercel current-name skills installed with:

```powershell
npx skills add vercel-labs/agent-skills -g -a codex -s deploy-to-vercel vercel-react-best-practices web-design-guidelines -y --copy --full-depth
```

## Usage

Restart Codex before expecting the newly installed skills to appear in the active skill list.

Call them explicitly by name, for example:

```text
Use frontend-design to improve this page's visual hierarchy.
```

```text
Use figma-implement-design to implement this Figma screen in the current frontend.
```

```text
Use playwright to capture and verify mobile screenshots.
```

For Tappo Phone, keep `tappo-design` as the primary product UI contract. Use these new skills as supporting references for Figma implementation, visual review, testing, and deployment-specific work.
