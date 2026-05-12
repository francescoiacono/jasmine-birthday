#!/usr/bin/env bash
set -euo pipefail

PHOTO_DIR="src/assets/photos"
TMP_DIR="$(mktemp -d "$PHOTO_DIR/.optimized.XXXXXX")"

cleanup() {
  rm -rf "$TMP_DIR"
}

trap cleanup EXIT

shopt -s nullglob nocaseglob

converted=0

for file in "$PHOTO_DIR"/*.{jpg,jpeg,png,PNG,heic,HEIC}; do
  filename="$(basename "$file")"
  name="${filename%.*}"

  echo "Optimizing $filename -> $name.webp"

  magick "$file" \
    -auto-orient \
    -resize '1200x1200>' \
    -strip \
    -quality 80 \
    "$TMP_DIR/$name.webp"

  rm -f "$file"
  mv "$TMP_DIR/$name.webp" "$PHOTO_DIR"/
  converted=$((converted + 1))
done

if (( converted == 0 )); then
  echo "No source images found in $PHOTO_DIR"
  exit 0
fi

echo "Done. Optimized $converted image(s) into $PHOTO_DIR"
