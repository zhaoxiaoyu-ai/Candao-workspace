# Delivery Note

## Updated

- `source/lanhu_image_downloader.py`
- `source/README.md`
- `source/.env.example`
- `source/project-urls.example.txt`

## New Behavior

- Accepts dashboard team URLs such as:

```text
https://lanhuapp.com/dashboard/#/item?tid=6c021718-cf3e-4f0d-8f8e-2bcccc464b3a
```

- Supports runtime login with `LANHU_EMAIL` and `LANHU_PASSWORD`.
- Uses Lanhu `account/user_projects` to expand a team URL into project URLs.
- Continues downloading each project into `<output>/<project>/<group>/<subgroup>/<design>.<ext>`.
- Existing files are skipped.
- No delete, move, rename, or overwrite code path was added.

## Live Verification

- Account login succeeded during validation.
- Dashboard URL resolved to 144 project refs.
- First project dry run succeeded:

```text
PROJECT Tappo_H5 (31 images)
```

## Not Run

- Full 144-project download was not started automatically because it may be a large pull and no final output directory was confirmed.
