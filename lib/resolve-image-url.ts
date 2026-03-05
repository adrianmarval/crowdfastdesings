import { getOptimizedAppwriteUrl, isAppwriteUrl } from './appwrite-image-url';

/**
 * Resolves a product image URL to its correct displayable path.
 *
 * Priority:
 * 1. If the image starts with 'http' → it's an Appwrite (or external) URL.
 *    - If it's Appwrite, convert /view → /preview with WebP + optional resize.
 *    - Otherwise, use as-is.
 * 2. If the image starts with '/' → it's a local static asset (e.g. /imgs/...), use as-is.
 * 3. Otherwise → return the placeholder (no more local /products/ images).
 */

interface ResolveOptions {
  /** Desired display width (used for Appwrite optimization) */
  width?: number;
  /** Desired display height (used for Appwrite optimization) */
  height?: number;
  /** Image quality 1-100 (default: 80) */
  quality?: number;
}

export const resolveProductImageUrl = (src?: string | null, options: ResolveOptions = {}): string => {
  const PLACEHOLDER = '/imgs/placeholder.webp';

  if (!src) return PLACEHOLDER;

  if (src.startsWith('http')) {
    // Optimize Appwrite images via /preview endpoint
    if (isAppwriteUrl(src)) {
      return getOptimizedAppwriteUrl(src, {
        width: options.width,
        height: options.height,
        quality: options.quality ?? 80,
        output: 'webp',
      });
    }
    return src;
  }

  if (src.startsWith('/')) return src;

  // Fallback: unknown format → placeholder
  return PLACEHOLDER;
};
