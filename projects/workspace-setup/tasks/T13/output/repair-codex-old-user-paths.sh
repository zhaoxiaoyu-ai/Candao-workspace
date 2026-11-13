#!/usr/bin/env bash
set -euo pipefail

OLD_PREFIX="${OLD_PREFIX:-/Users/victorwong/Documents/Codex}"
NEW_PREFIX="${NEW_PREFIX:-/Users/mac/Documents/Codex}"
CODEX_HOME="${CODEX_HOME:-/Users/mac/.codex}"
GUARD_ROOT="${GUARD_ROOT:-/Users/mac/Documents/Codex/codex-recovery-guards}"
STAMP="$(date +%Y%m%d-%H%M%S)"

if [[ ! -d "$NEW_PREFIX" ]]; then
  echo "New prefix does not exist: $NEW_PREFIX" >&2
  exit 1
fi

if [[ ! -d "$CODEX_HOME" ]]; then
  echo "Codex home does not exist: $CODEX_HOME" >&2
  exit 1
fi

mkdir -p "$GUARD_ROOT"
SNAPSHOT="$GUARD_ROOT/dot-codex-before-old-path-repair-$STAMP"
cp -a "$CODEX_HOME" "$SNAPSHOT"
echo "Created safety snapshot: $SNAPSHOT"

TEXT_FILES=()
while IFS= read -r file; do
  TEXT_FILES+=("$file")
done < <(
  rg -l --hidden --fixed-strings "$OLD_PREFIX" "$CODEX_HOME" \
    --glob '!auth.json' \
    --glob '!browser/**' \
    --glob '!cache/**' \
    --glob '!.tmp/**' \
    --glob '!plugins/cache/**' \
    --glob '!tmp/**' \
    --glob '!*.sqlite' \
    --glob '!*.db' \
    --glob '!*.db-*' \
    --glob '!*.sqlite-*' \
    --glob '!*.log' \
    --glob '!**/repair-codex-*' \
    --glob '!.codex-global-state.json.before-*' \
    --glob '!.codex-global-state.json.bak.before-*' || true
)

if (( ${#TEXT_FILES[@]} > 0 )); then
  BACKUP_DIR="$GUARD_ROOT/path-text-files-before-repair-$STAMP"
  mkdir -p "$BACKUP_DIR"
  for file in "${TEXT_FILES[@]}"; do
    rel="${file#$CODEX_HOME/}"
    mkdir -p "$BACKUP_DIR/$(dirname "$rel")"
    cp -p "$file" "$BACKUP_DIR/$rel"
    perl -0pi -e "s|\\Q$OLD_PREFIX\\E|$NEW_PREFIX|g" "$file"
  done
  echo "Rewrote ${#TEXT_FILES[@]} text files. Backups: $BACKUP_DIR"
else
  echo "No text files contained old prefix."
fi

sqlite_has_table() {
  local db="$1"
  local table="$2"
  sqlite3 "$db" "SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = '$table' LIMIT 1;" | grep -qx '1'
}

sqlite_has_column() {
  local db="$1"
  local table="$2"
  local column="$3"
  sqlite3 "$db" "PRAGMA table_info('$table');" | awk -F'|' -v column="$column" '$2 == column { found = 1 } END { exit found ? 0 : 1 }'
}

sqlite_rewrite_column() {
  local db="$1"
  local table="$2"
  local column="$3"
  if sqlite_has_table "$db" "$table" && sqlite_has_column "$db" "$table" "$column"; then
    sqlite3 "$db" "UPDATE \"$table\" SET \"$column\" = replace(\"$column\", '$OLD_PREFIX', '$NEW_PREFIX') WHERE \"$column\" LIKE '%$OLD_PREFIX%';"
  fi
}

for db in "$CODEX_HOME/state_5.sqlite" "$CODEX_HOME/sqlite/codex-dev.db"; do
  [[ -f "$db" ]] || continue
  sqlite_rewrite_column "$db" threads rollout_path
  sqlite_rewrite_column "$db" threads cwd
  sqlite_rewrite_column "$db" threads title
  sqlite_rewrite_column "$db" threads sandbox_policy
  sqlite_rewrite_column "$db" threads first_user_message
  sqlite_rewrite_column "$db" threads preview
  sqlite_rewrite_column "$db" threads agent_path
  sqlite_rewrite_column "$db" threads name
  sqlite_rewrite_column "$db" project_roots path
  sqlite_rewrite_column "$db" local_thread_catalog cwd
  sqlite_rewrite_column "$db" thread_timeline_ledger cwd
  sqlite_rewrite_column "$db" thread_timeline_ledger payload_json
  echo "Checked SQLite database: $db"
done

REMAINING_FILES=()
while IFS= read -r file; do
  REMAINING_FILES+=("$file")
done < <(
  rg -l --hidden --fixed-strings "$OLD_PREFIX" "$CODEX_HOME" \
  --glob '!auth.json' \
  --glob '!browser/**' \
  --glob '!cache/**' \
  --glob '!.tmp/**' \
  --glob '!plugins/cache/**' \
  --glob '!tmp/**' \
  --glob '!*.sqlite' \
  --glob '!*.db' \
  --glob '!*.db-*' \
  --glob '!*.sqlite-*' \
  --glob '!*.log' \
  --glob '!**/repair-codex-*' \
  --glob '!.codex-global-state.json.before-*' \
  --glob '!.codex-global-state.json.bak.before-*' || true
)

echo "Remaining active text files with old path: ${#REMAINING_FILES[@]}"
for file in "${REMAINING_FILES[@]}"; do
  echo "$file"
done
