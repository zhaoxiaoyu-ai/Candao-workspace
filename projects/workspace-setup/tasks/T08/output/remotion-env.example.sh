#!/usr/bin/env bash
set -euo pipefail

# 餐道 Codex desktop bundled runtime.
# Source this file before running Remotion commands if `node` is not on PATH.
CODEX_RUNTIME_DIR="${CODEX_RUNTIME_DIR:-$HOME/.cache/codex-runtimes/codex-primary-runtime/dependencies}"
export PATH="$CODEX_RUNTIME_DIR/node/bin:$CODEX_RUNTIME_DIR/bin/fallback:${PATH}"

node -v
pnpm -v
