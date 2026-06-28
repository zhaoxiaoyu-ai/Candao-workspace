# Local Preview Restart - 2026-06-08

## Result

- Previous local preview links were stale because no Vite listener was running on ports `5174`-`5178`.
- Restarted the Tappo Phone dev server from `projects/tappo-phone/source`.
- Current working URL: `http://127.0.0.1:5177/`
- Transaction page URL: `http://127.0.0.1:5177/transactions`

## Verification

- `http://127.0.0.1:5177/` returned HTTP `200`.
- `http://127.0.0.1:5177/transactions` returned HTTP `200`.
- Listening process: `127.0.0.1:5177`, PID `21032`.

## Logs

- stdout: `tasks/T02/output/vite-preview-2026-06-08-5177.log`
- stderr: `tasks/T02/output/vite-preview-2026-06-08-5177.err.log`

## Note

The local preview is a session-level Vite dev process. If the machine restarts, the terminal session exits, or the Node process is killed, the link can become unavailable and should be restarted from `projects/tappo-phone/source`.
