/**
 * Resolves a product image URL to its correct displayable path.
 *
 * All product images are Appwrite /view URLs. We pass them directly
 * to Next.js <Image>, which handles ALL optimization (resize, AVIF/WebP,
 * quality) and caches the result on disk.
 *
 * We do NOT convert to /preview because that causes double-optimization:
 *   Appwrite /preview (resize+WebP) → Next.js (re-resize+AVIF) = SLOW
 *
 * Instead:
 *   Appwrite /view (raw file, fast) → Next.js (single optimization + cache) = FAST
 */

export const resolveProductImageUrl = (src?: string | null): string => {
  const PLACEHOLDER = '/imgs/placeholder.webp';

  if (!src) return PLACEHOLDER;

  // Appwrite or external URL → pass through as-is, let Next.js <Image> optimize
  if (src.startsWith('http')) return src;

  // Local static asset (e.g. /imgs/...)
  if (src.startsWith('/')) return src;

  // Unknown format → placeholder
  return PLACEHOLDER;
};
