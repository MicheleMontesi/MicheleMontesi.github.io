#!/usr/bin/env bash
set -euo pipefail

# Find Chrome/Chromium binary across macOS and Linux
find_chrome() {
  if [[ "$OSTYPE" == "darwin"* ]]; then
    local mac_paths=(
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
      "/Applications/Chromium.app/Contents/MacOS/Chromium"
      "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser"
      "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge"
    )
    for p in "${mac_paths[@]}"; do
      if [[ -x "$p" ]]; then
        echo "$p"
        return 0
      fi
    done
  fi

  for cmd in google-chrome google-chrome-stable chromium chromium-browser; do
    if command -v "$cmd" >/dev/null 2>&1; then
      command -v "$cmd"
      return 0
    fi
  done

  echo "Error: Could not find Google Chrome or Chromium binary." >&2
  exit 1
}

CHROME_BIN="$(find_chrome)"
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
INPUT="$ROOT_DIR/cv-onepage.html"
OUTPUT="$ROOT_DIR/michele-montesi-resume.pdf"
USER_DATA_DIR="${TMPDIR:-/tmp}/chrome-cv-build-$$"

mkdir -p "$USER_DATA_DIR"
trap 'rm -rf "$USER_DATA_DIR"' EXIT

echo "Using browser: $CHROME_BIN"
echo "Generating PDF from: $INPUT -> $OUTPUT"

"$CHROME_BIN" \
  --headless=new \
  --no-sandbox \
  --disable-gpu \
  --no-pdf-header-footer \
  --virtual-time-budget=5000 \
  --run-all-compositor-stages-before-draw \
  --user-data-dir="$USER_DATA_DIR" \
  --print-to-pdf="$OUTPUT" \
  "$INPUT"

echo "Successfully generated $OUTPUT"
