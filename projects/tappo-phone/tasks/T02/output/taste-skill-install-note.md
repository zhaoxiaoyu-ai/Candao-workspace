# Taste Skill Install Note

Date: 2026-06-05
Task: `T02`

## Installed Skill

- Source: `Leonxlnx/taste-skill`
- Path: `skills/taste-skill`
- Local destination: `C:\Users\Admin\.codex\skills\taste-skill`
- Skill frontmatter name: `design-taste-frontend`

## Install Command Used

```powershell
uv run --python 3.12 C:\Users\Admin\.codex\skills\.system\skill-installer\scripts\install-skill-from-github.py --repo Leonxlnx/taste-skill --path skills/taste-skill
```

## Usage Notes

Restart Codex to pick up the new skill.

After restart, call it explicitly when useful, for example:

```text
Use design-taste-frontend to review this landing page design direction.
```

or:

```text
Use taste-skill to improve the visual polish of this portfolio/landing page.
```

The installed skill is primarily for landing pages, portfolios, and redesigns. For Tappo Phone operational product UI, use it as a design-taste audit aid only. Keep `tappo-design` and `projects/tappo-phone/tappo-design.md` as the main product UI rules.
