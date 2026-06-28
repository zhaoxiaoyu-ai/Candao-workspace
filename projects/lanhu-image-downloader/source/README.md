# Lanhu Image Downloader

Standalone Python CLI for downloading Lanhu design images into local folders by project and Lanhu group hierarchy.

## Install

```powershell
cd E:\Projects\Candao-workspace\projects\lanhu-image-downloader\source
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

If Python is not on PATH but `uv` is available:

```powershell
cd E:\Projects\Candao-workspace\projects\lanhu-image-downloader\source
uv run --no-project --with httpx python .\lanhu_image_downloader.py --help
```

## Authentication

The script supports either an authenticated Lanhu Cookie or runtime account/password login. It does not store account passwords.

In a browser that is already logged in to Lanhu, open DevTools, copy the request Cookie for `lanhuapp.com`, then set it for the current PowerShell session:

```powershell
$env:LANHU_COOKIE = "your copied Cookie header"
```

You can also put only the cookie text into a local file and pass `--cookie-file`.

Or use runtime login for the current PowerShell session:

```powershell
$env:LANHU_EMAIL = "your Lanhu email"
$env:LANHU_PASSWORD = "your Lanhu password"
```

## Usage

Download one project:

```powershell
python .\lanhu_image_downloader.py --url "https://lanhuapp.com/web/#/item/project/stage?tid=TEAM_ID&pid=PROJECT_ID" --output "E:\LanhuImages"
```

Download multiple projects:

```powershell
python .\lanhu_image_downloader.py --urls-file .\project-urls.txt --output "E:\LanhuImages"
```

Download all projects visible from a Lanhu team dashboard URL:

```powershell
python .\lanhu_image_downloader.py --url "https://lanhuapp.com/dashboard/#/item?tid=TEAM_ID" --output "E:\LanhuImages"
```

With `uv`:

```powershell
uv run --no-project --with httpx python .\lanhu_image_downloader.py --urls-file .\project-urls.txt --output "E:\LanhuImages"
```

Preview planned paths without downloading:

```powershell
python .\lanhu_image_downloader.py --url "https://lanhuapp.com/web/#/item/project/stage?tid=TEAM_ID&pid=PROJECT_ID" --output "E:\LanhuImages" --dry-run
```

## Output

Images are saved as:

```text
<output>/<project name>/<group>/<subgroup>/<design name>.<ext>
```

If a design has no Lanhu group, it is saved under `_ungrouped`.

## Safety

- The script creates output directories as needed.
- The script downloads missing image files only.
- Existing files are skipped.
- There is no delete, move, rename, or overwrite code path.
