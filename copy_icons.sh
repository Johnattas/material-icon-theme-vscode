#!/bin/bash
DEST="/home/johnattas/GitHub/material-icon-theme-vscode/icons/"
LIST="/home/johnattas/.gemini/antigravity/brain/8f1b07f8-7825-4c5d-94ce-49dea46cacbc/scratch/missing_icons.txt"
SUCCESS=0
ERROR=0

while IFS= read -r file; do
  [ -z "$file" ] && continue
  if cp -L "$file" "$DEST" 2>/dev/null; then
    SUCCESS=$((SUCCESS+1))
  else
    ERROR=$((ERROR+1))
  fi
done < "$LIST"

echo "Copied: $SUCCESS"
echo "Failed: $ERROR"
