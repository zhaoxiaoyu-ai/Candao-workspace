# Task T02: Support Lanhu dashboard team URL input

## Request

Use the Lanhu URL:

```text
https://lanhuapp.com/dashboard/#/item?tid=6c021718-cf3e-4f0d-8f8e-2bcccc464b3a
```

The user clarified that the Lanhu account/password were provided earlier.

## Requirements

- Treat this as a team dashboard URL that contains `tid` but no project `pid`.
- Extend the standalone downloader to support team-level input when possible.
- Keep credentials out of source files.
- Do not delete, move, rename, or overwrite local files.
- Keep this independent from `design-agent`.

## Notes

- Existing script supports project URLs with `pid`.
- Need discover or document the Lanhu team project list step.
