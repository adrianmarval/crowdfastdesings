/**
 * Resolves a product image URL to its correct displayable path.
 *
 * Priority:
 * 1. If the image starts with 'http' → it's an Appwrite (or external) URL, use as-is.
 * 2. If the image starts with '/' → it's already an absolute path (e.g. /products/...), use as-is.
 * 3. Otherwise → it's a relative filename from seed/public, prepend '/products/'.
 * 4. If no image is provided → return the placeholder.
 */
export const resolveProductImageUrl = (src?: string | null): string => {
  const PLACEHOLDER = '/imgs/placeholder.jpg';

  if (!src) return PLACEHOLDER;

  if (src.startsWith('http')) return src;
  if (src.startsWith('/')) return src;

  return `/products/${src}`;
};
