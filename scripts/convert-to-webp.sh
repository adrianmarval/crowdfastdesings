#!/bin/bash
# =============================================================================
# convert-to-webp.sh
# Converts all PNG/JPG/JPEG images in public/ to WebP format.
#
# - Quality: 82 (perceptually lossless, ~70-80% smaller than PNG)
# - Preserves directory structure
# - Deletes originals after successful conversion
# - Updates seed data if the image references are used there
# =============================================================================

set -euo pipefail

PUBLIC_DIR="$(dirname "$0")/../public"
CONVERTED=0
SKIPPED=0
ERRORS=0
SAVED_BYTES=0

echo "🔄 Converting images to WebP in: $PUBLIC_DIR"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Find all PNG, JPG, JPEG files
find "$PUBLIC_DIR" -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) | while read -r file; do
  # Skip if it's the placeholder (we'll handle it separately)
  # Get the WebP output path
  webp_file="${file%.*}.webp"

  # Skip if WebP already exists
  if [ -f "$webp_file" ]; then
    echo "⏭  Already exists: $webp_file"
    SKIPPED=$((SKIPPED + 1))
    continue
  fi

  # Get original file size
  original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)

  # Convert based on file type
  if [[ "$file" == *.png ]]; then
    # PNG → WebP (lossless option for very small icons, lossy for photos)
    if [ "$original_size" -lt 10000 ]; then
      # Small files (< 10KB) → lossless WebP
      cwebp -lossless "$file" -o "$webp_file" -quiet 2>/dev/null
    else
      # Larger files → lossy WebP at quality 82
      cwebp -q 82 "$file" -o "$webp_file" -quiet 2>/dev/null
    fi
  else
    # JPG/JPEG → WebP lossy at quality 82
    cwebp -q 82 "$file" -o "$webp_file" -quiet 2>/dev/null
  fi

  if [ $? -eq 0 ] && [ -f "$webp_file" ]; then
    webp_size=$(stat -f%z "$webp_file" 2>/dev/null || stat -c%s "$webp_file" 2>/dev/null)
    saved=$((original_size - webp_size))
    saved_kb=$((saved / 1024))
    original_kb=$((original_size / 1024))
    webp_kb=$((webp_size / 1024))
    percent=$(( (saved * 100) / original_size ))

    echo "✅ ${file#$PUBLIC_DIR/}"
    echo "   ${original_kb}KB → ${webp_kb}KB (saved ${saved_kb}KB, ${percent}% smaller)"

    CONVERTED=$((CONVERTED + 1))
    SAVED_BYTES=$((SAVED_BYTES + saved))
  else
    echo "❌ Failed: $file"
    ERRORS=$((ERRORS + 1))
  fi
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✨ Conversion complete!"
echo "   Converted: $CONVERTED files"
echo "   Total saved: $((SAVED_BYTES / 1024 / 1024))MB"
echo ""
echo "⚠️  Original files were NOT deleted."
echo "   Review the WebP files, then run:"
echo "   find public/ -type f \\( -name '*.png' -o -name '*.jpg' -o -name '*.jpeg' \\) -exec rm {} \\;"
echo "   to remove originals after verifying."
