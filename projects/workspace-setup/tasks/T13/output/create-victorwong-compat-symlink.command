#!/usr/bin/env bash
set -euo pipefail

TARGET="/Users/mac/Documents/Codex"
LINK="/Users/victorwong/Documents/Codex"
PARENT="$(dirname "$LINK")"

if [[ ! -d "$TARGET" ]]; then
  echo "Target does not exist: $TARGET" >&2
  exit 1
fi

if [[ -L "$LINK" ]]; then
  current="$(readlink "$LINK")"
  if [[ "$current" == "$TARGET" ]]; then
    echo "Compatibility link already exists: $LINK -> $TARGET"
    exit 0
  fi
  echo "Refusing to replace existing symlink: $LINK -> $current" >&2
  exit 1
fi

if [[ -e "$LINK" ]]; then
  echo "Refusing to replace existing path: $LINK" >&2
  exit 1
fi

echo "This will create a compatibility link:"
echo "$LINK -> $TARGET"
echo
echo "macOS may ask for your administrator password."

sudo mkdir -p "$PARENT"
sudo ln -s "$TARGET" "$LINK"

echo "Created compatibility link: $LINK -> $TARGET"
