# Handoff

## Next Action

No active task. Use `E:\LanhuImages` as the completed local image archive unless the user asks for another output path.

## Required Context

Read these files first:

1. `PROJECT.md`
2. `RULES.md`
3. `STATE.md`
4. `TASKS.md`
5. `tasks/T03/task.md`

## Current Task

- ID: `none`
- Path: `none`

## Notes For Next AI

- The user corrected that this tool is unrelated to `design-agent`; keep it standalone.
- Do not store the provided Lanhu password in project files.
- The script must only create output folders and download missing image files.
- Main script: `source/lanhu_image_downloader.py`.
- Usage docs: `source/README.md`.
- User provided dashboard URL: `https://lanhuapp.com/dashboard/#/item?tid=6c021718-cf3e-4f0d-8f8e-2bcccc464b3a`.
- Live login and team project discovery were verified: 144 project refs.
- Single-project dry run verified image planning for the first discovered project: `0175be38-f27d-416d-b962-448227f53c8a`.
- Trial download target folder: `E:\LanhuImages`.
- Full team download completed successfully on resume: 144 projects, 10,725 files, 0 zero-byte files.
- Logs are in `tasks/T03/output/full-batch.log` and `tasks/T03/output/full-batch-resume.log`.
