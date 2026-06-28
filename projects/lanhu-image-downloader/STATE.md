# Current State

## Phase

Team download completed

## Current Truth

- Source root is `E:\Projects\Candao-workspace\projects\lanhu-image-downloader\source`.
- The project is independent from `design-agent`.
- The downloader uses Lanhu project URLs as input and downloads design images using Lanhu web API endpoints.
- Credentials are not stored in source files.
- The downloader creates output folders and downloads missing image files only; existing files are skipped.
- The script was syntax-checked and CLI help was verified with `uv`.
- Dashboard team URLs with only `tid` are supported through authenticated team project discovery.
- Runtime login is supported through `LANHU_EMAIL` and `LANHU_PASSWORD`, without storing credentials.
- Full team dashboard download completed to `E:\LanhuImages`.
- Final local result: 144 project folders, 10,725 files, 0 zero-byte files, about 5,330.45 MB.

## Active Task

- ID: `T03`
- Status: `done`

## Decisions

- Implement as a standalone Python CLI.
- Use project URLs or a project URL text file as the batch input.
- Use `LANHU_COOKIE` or `--cookie-file` for authenticated Lanhu API access.
- Do not implement any delete, move, rename, or overwrite behavior.
- Dashboard URL support uses `GET /api/account/user_projects` after login or Cookie auth.
- Trial full-project download used `Tappo_H5`; the team-wide batch was then completed.
- Script stdout/stderr are forced to UTF-8 to avoid Windows GBK redirection failures.

## Blockers

- None

## Last Updated

2026-06-10
