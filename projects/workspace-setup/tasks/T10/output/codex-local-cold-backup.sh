#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'USAGE'
Usage:
  bash codex-local-cold-backup.sh <destination-parent>

Example:
  bash codex-local-cold-backup.sh "$HOME/Documents/Codex/Codex-app-migration"

What it exports:
  - Local Codex chats, archived chats, attachments, generated images, personal skills,
    selected settings, and SQLite state snapshots from CODEX_HOME, defaulting to ~/.codex.

What it excludes:
  - auth.json, browser sessions, OAuth locks, plugin caches, runtime locks,
    process state, app binaries, general caches, and temporary folders.
USAGE
}

if [[ "${1:-}" == "-h" || "${1:-}" == "--help" ]]; then
  usage
  exit 0
fi

if [[ $# -ne 1 ]]; then
  usage
  exit 1
fi

if ! command -v rsync >/dev/null 2>&1; then
  echo "rsync is required but was not found." >&2
  exit 1
fi

if ! command -v sqlite3 >/dev/null 2>&1; then
  echo "sqlite3 is required but was not found." >&2
  exit 1
fi

CODEX_SOURCE="${CODEX_HOME:-$HOME/.codex}"
DEST_PARENT="$1"

if [[ ! -d "$CODEX_SOURCE" ]]; then
  echo "Codex source directory not found: $CODEX_SOURCE" >&2
  exit 1
fi

mkdir -p "$DEST_PARENT"
DEST_PARENT_ABS="$(cd "$DEST_PARENT" && pwd)"
CODEX_SOURCE_ABS="$(cd "$CODEX_SOURCE" && pwd)"

case "$DEST_PARENT_ABS/" in
  "$CODEX_SOURCE_ABS/"|"$CODEX_SOURCE_ABS"/*)
    echo "Destination must not be inside CODEX_HOME: $CODEX_SOURCE_ABS" >&2
    exit 1
    ;;
esac

STAMP="$(date +%Y%m%d-%H%M%S)"
SNAPSHOT_DIR="$DEST_PARENT_ABS/Codex-local-cold-backup-$STAMP"
DOT_CODEX="$SNAPSHOT_DIR/dot-codex"
MANIFEST="$SNAPSHOT_DIR/BACKUP-MANIFEST.txt"
EXCLUDED="$SNAPSHOT_DIR/EXCLUDED-FILES.txt"
RESTORE_README="$SNAPSHOT_DIR/README-RESTORE.md"
ARCHIVE="$SNAPSHOT_DIR.tar.gz"

mkdir -p "$DOT_CODEX"

copy_dir() {
  local rel="$1"
  if [[ -d "$CODEX_SOURCE_ABS/$rel" ]]; then
    mkdir -p "$DOT_CODEX/$rel"
    rsync -a \
      --exclude='.DS_Store' \
      --exclude='._*' \
      "$CODEX_SOURCE_ABS/$rel/" "$DOT_CODEX/$rel/"
  fi
}

copy_file() {
  local rel="$1"
  if [[ -f "$CODEX_SOURCE_ABS/$rel" ]]; then
    mkdir -p "$(dirname "$DOT_CODEX/$rel")"
    rsync -a "$CODEX_SOURCE_ABS/$rel" "$DOT_CODEX/$rel"
  fi
}

sqlite_quote() {
  printf "%s" "$1" | sed "s/'/''/g"
}

backup_sqlite() {
  local source_db="$1"
  local target_db="$2"

  if [[ -f "$source_db" ]]; then
    mkdir -p "$(dirname "$target_db")"
    local quoted_target
    quoted_target="$(sqlite_quote "$target_db")"
    sqlite3 "$source_db" ".timeout 5000" ".backup main '$quoted_target'"
  fi
}

echo "Codex source: $CODEX_SOURCE_ABS"
echo "Backup dir:   $SNAPSHOT_DIR"

for rel in \
  sessions \
  archived_sessions \
  attachments \
  generated_images \
  visualizations \
  skills \
  shell_snapshots \
  dictation-history \
  vendor_imports
do
  copy_dir "$rel"
done

for rel in \
  AGENTS.md \
  config.toml \
  keybindings.json \
  session_index.jsonl \
  history.jsonl \
  transcription-history.jsonl \
  .codex-global-state.json \
  .codex-global-state.json.bak \
  .personality_migration \
  .sandbox_migration \
  models_cache.json
do
  copy_file "$rel"
done

for rel in \
  state_5.sqlite \
  memories_1.sqlite \
  goals_1.sqlite \
  logs_2.sqlite \
  queue_1.sqlite
do
  backup_sqlite "$CODEX_SOURCE_ABS/$rel" "$DOT_CODEX/$rel"
done

if [[ -d "$CODEX_SOURCE_ABS/sqlite" ]]; then
  while IFS= read -r db_path; do
    rel="${db_path#"$CODEX_SOURCE_ABS/"}"
    backup_sqlite "$db_path" "$DOT_CODEX/$rel"
  done < <(find "$CODEX_SOURCE_ABS/sqlite" -type f -name '*.db' | sort)
fi

cat > "$EXCLUDED" <<'EXCLUDED_LIST'
auth.json
browser/
mcp-oauth-locks/
cache/
.tmp/
tmp/
plugins/cache/
plugins/.plugin-appserver/
plugins/.remote-plugin-install-staging/
computer-use/
thread-writer-locks/
ipc/
process_manager/
node_repl/
installation_id
*.sqlite-wal
*.sqlite-shm
.DS_Store
._*
EXCLUDED_LIST

SESSION_FILES="0"
if [[ -d "$DOT_CODEX/sessions" || -d "$DOT_CODEX/archived_sessions" ]]; then
  SESSION_FILES="$(find "$DOT_CODEX/sessions" "$DOT_CODEX/archived_sessions" -type f -name '*.jsonl' 2>/dev/null | wc -l | tr -d ' ')"
fi

{
  echo "Codex local cold backup manifest"
  echo "Generated: $(date '+%Y-%m-%d %H:%M:%S %Z')"
  echo "Source CODEX_HOME: $CODEX_SOURCE_ABS"
  echo "Snapshot directory: $SNAPSHOT_DIR"
  echo "Session jsonl files: $SESSION_FILES"
  echo
  echo "Included top-level entries:"
  find "$DOT_CODEX" -maxdepth 2 -mindepth 1 -print | sed "s#^$DOT_CODEX/##" | sort
  echo
  echo "Snapshot size:"
  du -sh "$SNAPSHOT_DIR" || true
  echo
  echo "Excluded:"
  sed 's/^/- /' "$EXCLUDED"
} > "$MANIFEST"

cat > "$RESTORE_README" <<'RESTORE'
# Codex Local Cold Backup Restore

This backup is private. Do not upload it to GitHub.

Recommended restore flow on the new computer:

1. Install ChatGPT / Codex and sign in with the same ChatGPT account and workspace.
2. Quit Codex completely.
3. Back up the new computer's current ~/.codex directory.
4. Copy this backup's dot-codex/ contents into ~/.codex/.
5. Reopen Codex.
6. Reconnect plugins, browser sessions, OAuth accounts, and local permissions manually.

Example:

```bash
mv "$HOME/.codex" "$HOME/.codex.before-restore-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$HOME/.codex"
rsync -a Codex-local-cold-backup-YYYYMMDD-HHMMSS/dot-codex/ "$HOME/.codex/"
```

If the desktop sidebar does not show every old task, try `/resume` in Codex or
`codex resume` in the terminal. The sessions/*.jsonl files are still searchable:

```bash
rg "keyword" "$HOME/.codex/sessions" "$HOME/.codex/archived_sessions"
```

auth.json is intentionally excluded because it contains access tokens.
RESTORE

tar -C "$DEST_PARENT_ABS" -czf "$ARCHIVE" "$(basename "$SNAPSHOT_DIR")"
shasum -a 256 "$ARCHIVE" > "$ARCHIVE.sha256"
tar -tzf "$ARCHIVE" >/dev/null

if tar -tzf "$ARCHIVE" | grep -Eq '(^|/)(auth\.json|browser/|mcp-oauth-locks/|plugins/cache/|\.tmp/|cache/|thread-writer-locks/|ipc/|process_manager/|node_repl/|installation_id)(/|$)'; then
  echo "Backup validation failed: excluded sensitive/runtime paths were found in archive." >&2
  exit 1
fi

echo
echo "Codex local cold backup ready:"
echo "  $SNAPSHOT_DIR"
echo "Archive:"
echo "  $ARCHIVE"
echo "SHA256:"
echo "  $ARCHIVE.sha256"
echo "Session jsonl files:"
echo "  $SESSION_FILES"
