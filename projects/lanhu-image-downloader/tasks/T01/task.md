# Task T01: Create standalone Lanhu image downloader script

## Request

Create a script that downloads Lanhu design images to local folders by project, group, and subgroup.

## Requirements

- Use Lanhu authentication supplied at runtime.
- Download design images by project.
- Save images under new local folders that match Lanhu project and group names.
- Keep images from the same project under the same project folder.
- Do not delete files.
- Do not move files.
- Do not perform operations other than downloading images and creating required output folders.
- Ask the user if a runtime blocker appears.

## Implementation Notes

- The user clarified this tool is unrelated to `design-agent`.
- Do not commit Lanhu account credentials into files.
- Prefer Lanhu project URLs as explicit input because Lanhu project discovery APIs are not public.
