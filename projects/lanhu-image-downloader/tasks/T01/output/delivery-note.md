# Delivery Note

## Created

- Standalone project: `projects/lanhu-image-downloader`
- Main script: `source/lanhu_image_downloader.py`
- Usage docs: `source/README.md`
- Dependencies: `source/requirements.txt`

## Behavior

- Reads one or more Lanhu project URLs from `--url` or `--urls-file`.
- Reads authentication from `LANHU_COOKIE`, `--cookie`, or `--cookie-file`.
- Downloads design images to `<output>/<project>/<group>/<subgroup>/<design>.<ext>`.
- Uses `_ungrouped` when Lanhu group data is unavailable.
- Skips existing files and does not overwrite them.
- Contains no delete, move, or rename code paths.

## Verification

- `uv run --no-project python -m py_compile source\lanhu_image_downloader.py`
- `uv run --no-project --with httpx python source\lanhu_image_downloader.py --help`
- Local smoke test for URL parsing and group path mapping.
- Static scan for file deletion, movement, and rename calls.

## Not Run

- A live Lanhu download was not run because this session did not use a project URL plus authenticated Cookie.
