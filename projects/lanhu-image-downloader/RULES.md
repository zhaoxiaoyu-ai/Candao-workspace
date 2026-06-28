# Rules

- Follow `E:\Projects\Candao-workspace\AGENTS.md`.
- Treat `E:\Projects\Candao-workspace\projects\lanhu-image-downloader\source` as the source root.
- Keep this tool independent from `design-agent` and other managed projects.
- The downloader must not delete, move, rename, or overwrite existing local files.
- Runtime credentials must be supplied through environment variables, CLI arguments, or browser-exported cookies, not committed to source files.
- Read only the minimum source and task context needed for the current task.
- Write durable task state back before ending.
