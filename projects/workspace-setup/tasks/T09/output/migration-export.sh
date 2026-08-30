#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'USAGE'
Usage:
  bash migration-export.sh <destination-parent> [--include-git] [--dry-run]

Examples:
  bash migration-export.sh /Volumes/Backup
  bash migration-export.sh "$HOME/Desktop/Candao-migration"
  bash migration-export.sh /Volumes/Backup --include-git
  bash migration-export.sh /Volumes/Backup --dry-run

What it exports:
  - Workspace files, source files, task records, task outputs, .stitch designs.
  - Excludes dependency folders, build caches, system files, and logs.
  - Excludes .git by default because GitHub is the canonical version source.

Options:
  --include-git  Also copy the root .git folder for a full local-history snapshot.
  --dry-run      Show what rsync would do without writing the snapshot.
USAGE
}

DEST_PARENT=""
INCLUDE_GIT=0
DRY_RUN=0

while [[ $# -gt 0 ]]; do
  case "$1" in
    --include-git)
      INCLUDE_GIT=1
      ;;
    --dry-run)
      DRY_RUN=1
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      if [[ -z "$DEST_PARENT" ]]; then
        DEST_PARENT="$1"
      else
        usage
        exit 1
      fi
      ;;
  esac
  shift
done

if [[ -z "$DEST_PARENT" ]]; then
  usage
  exit 1
fi

if ! command -v rsync >/dev/null 2>&1; then
  echo "rsync is required but was not found." >&2
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$SCRIPT_DIR/../../../../.." && pwd)"

mkdir -p "$DEST_PARENT"
DEST_PARENT_ABS="$(cd "$DEST_PARENT" && pwd)"

case "$DEST_PARENT_ABS/" in
  "$ROOT/"|"$ROOT"/*)
    echo "Destination must not be inside the workspace root: $ROOT" >&2
    exit 1
    ;;
esac

STAMP="$(date +%Y%m%d-%H%M%S)"
SNAPSHOT_DIR="$DEST_PARENT_ABS/Candao-workspace-portable-$STAMP"

RSYNC_FLAGS=(-a)

if [[ "$DRY_RUN" -eq 1 ]]; then
  RSYNC_FLAGS+=(-n -v)
fi

EXCLUDES=(
  "--exclude=.DS_Store"
  "--exclude=._*"
  "--exclude=.AppleDouble/"
  "--exclude=.Spotlight-V100/"
  "--exclude=.Trashes/"
  "--exclude=*.log"
  "--exclude=node_modules"
  "--exclude=node_modules/"
  "--exclude=**/node_modules/"
  "--exclude=.pnpm-store"
  "--exclude=.pnpm-store/"
  "--exclude=**/.pnpm-store/"
  "--exclude=.npm"
  "--exclude=.npm/"
  "--exclude=**/.npm/"
  "--exclude=.yarn"
  "--exclude=.yarn/"
  "--exclude=**/.yarn/"
  "--exclude=.next"
  "--exclude=.next/"
  "--exclude=**/.next/"
  "--exclude=dist"
  "--exclude=dist/"
  "--exclude=**/dist/"
  "--exclude=build"
  "--exclude=build/"
  "--exclude=**/build/"
  "--exclude=.cache"
  "--exclude=.cache/"
  "--exclude=**/.cache/"
  "--exclude=.turbo"
  "--exclude=.turbo/"
  "--exclude=**/.turbo/"
  "--exclude=coverage"
  "--exclude=coverage/"
  "--exclude=**/coverage/"
  "--exclude=.vite"
  "--exclude=.vite/"
  "--exclude=**/.vite/"
  "--exclude=__pycache__"
  "--exclude=__pycache__/"
  "--exclude=**/__pycache__/"
  "--exclude=.venv"
  "--exclude=.venv/"
  "--exclude=**/.venv/"
  "--exclude=*.pyc"
)

if [[ "$INCLUDE_GIT" -eq 0 ]]; then
  EXCLUDES+=("--exclude=.git" "--exclude=.git/")
fi

echo "Source:      $ROOT"
echo "Destination: $SNAPSHOT_DIR"
echo "Include Git: $INCLUDE_GIT"
echo "Dry run:     $DRY_RUN"

if [[ "$DRY_RUN" -eq 0 ]]; then
  mkdir -p "$SNAPSHOT_DIR"
fi

rsync "${RSYNC_FLAGS[@]}" "${EXCLUDES[@]}" "$ROOT/" "$SNAPSHOT_DIR/"

if [[ "$DRY_RUN" -eq 1 ]]; then
  echo "Dry run complete. No migration manifest was written."
  exit 0
fi

MANIFEST="$SNAPSHOT_DIR/MIGRATION-MANIFEST.txt"
{
  echo "Candao workspace migration manifest"
  echo "Generated: $(date '+%Y-%m-%d %H:%M:%S %Z')"
  echo "Source root: $ROOT"
  echo "Snapshot directory: $SNAPSHOT_DIR"
  echo "Included .git: $INCLUDE_GIT"
  echo
  echo "Git remote:"
  git -C "$ROOT" remote -v || true
  echo
  echo "Git HEAD:"
  git -C "$ROOT" log -1 --pretty=format:'%h %ad %s' --date=short || true
  echo
  echo
  echo "Git status at export time:"
  git -C "$ROOT" status --short --untracked-files=all || true
  echo
  echo "Excluded during export:"
  printf '%s\n' "${EXCLUDES[@]}"
} > "$MANIFEST"

echo "Migration snapshot ready:"
echo "  $SNAPSHOT_DIR"
echo "Manifest:"
echo "  $MANIFEST"
