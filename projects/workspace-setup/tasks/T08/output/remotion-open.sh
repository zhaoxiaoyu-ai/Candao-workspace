#!/usr/bin/env bash
set -euo pipefail

WORKSPACE_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../../../.." && pwd)"
DEFAULT_PROJECT_DIR="$WORKSPACE_ROOT/projects/workspace-setup/remotion-demo"
TARGET_DIR="${1:-$DEFAULT_PROJECT_DIR}"
PORT="${REMOTION_PORT:-3000}"

if [ "${1:-}" = "--help" ] || [ "${1:-}" = "-h" ]; then
  cat <<USAGE
Usage:
  bash projects/workspace-setup/tasks/T08/output/remotion-open.sh
  bash projects/workspace-setup/tasks/T08/output/remotion-open.sh /path/to/remotion-project
  REMOTION_PORT=3005 bash projects/workspace-setup/tasks/T08/output/remotion-open.sh /path/to/remotion-project

Without a project path, the default project is:
  $DEFAULT_PROJECT_DIR
USAGE
  exit 0
fi

CODEX_RUNTIME_DIR="${CODEX_RUNTIME_DIR:-$HOME/.cache/codex-runtimes/codex-primary-runtime/dependencies}"
export PATH="$CODEX_RUNTIME_DIR/node/bin:$CODEX_RUNTIME_DIR/bin/fallback:${PATH}"

echo "Remotion launcher"
echo "Target: $TARGET_DIR"
echo "Port: $PORT"

if ! command -v node >/dev/null 2>&1; then
  echo "Error: node is not available on PATH."
  exit 1
fi

if ! command -v pnpm >/dev/null 2>&1; then
  echo "Error: pnpm is not available on PATH."
  exit 1
fi

if [ ! -d "$TARGET_DIR" ]; then
  echo "Creating a blank Remotion project..."
  pnpm dlx create-video@latest --yes --blank --no-tailwind "$TARGET_DIR"
fi

cd "$TARGET_DIR"

if [ ! -f "package.json" ]; then
  echo "Error: $TARGET_DIR does not contain package.json."
  echo "Pass a Remotion project folder, or pass a new folder name to create one."
  exit 1
fi

if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  if ! pnpm install; then
    echo "Retrying after approving package build scripts..."
    pnpm approve-builds --all
    pnpm install
  fi
fi

URL="http://localhost:${PORT}"
echo "Starting Remotion Studio..."
echo "Open: $URL"

if command -v open >/dev/null 2>&1; then
  (sleep 4 && open "$URL") >/dev/null 2>&1 &
fi

pnpm exec remotion studio --no-open --port="$PORT"
