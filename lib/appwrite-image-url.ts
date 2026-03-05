/**
 * Appwrite Image Optimization Helper
 *
 * Generates optimized image URLs using Appwrite's /preview endpoint
 * instead of /view. The preview endpoint supports:
 * - width/height resizing (server-side)
 * - output format (webp for lighter images)
 * - quality control
 * - gravity for smart cropping
 *
 * This reduces bandwidth significantly because Appwrite serves
 * already-resized and compressed images.
 */

interface AppwriteImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  /** Output format: empty = original, 'webp', 'jpg', 'png', 'gif' */
  output?: 'webp' | 'jpg' | 'png' | 'gif';
  /** Gravity for cropping: 'center', 'top-left', etc. */
  gravity?: 'center' | 'top-left' | 'top' | 'top-right' | 'left' | 'right' | 'bottom-left' | 'bottom' | 'bottom-right';
}

/**
 * Converts an Appwrite /view URL to an optimized /preview URL
 * with the specified dimensions and format.
 *
 * Example:
 *   Input:  https://appwrite.../files/abc123/view?project=xyz
 *   Output: https://appwrite.../files/abc123/preview?project=xyz&width=800&output=webp&quality=80
 */
export const getOptimizedAppwriteUrl = (viewUrl: string, options: AppwriteImageOptions = {}): string => {
  const { width, height, quality = 80, output = 'webp', gravity } = options;

  // Replace /view with /preview in the URL
  let optimizedUrl = viewUrl.replace('/files/', '/files/').replace('/view?', '/preview?');

  // If the URL doesn't contain /preview, it might not be an appwrite URL
  if (!optimizedUrl.includes('/preview?')) {
    return viewUrl;
  }

  // Add optimization parameters
  if (width) optimizedUrl += `&width=${width}`;
  if (height) optimizedUrl += `&height=${height}`;
  if (output) optimizedUrl += `&output=${output}`;
  if (quality) optimizedUrl += `&quality=${quality}`;
  if (gravity) optimizedUrl += `&gravity=${gravity}`;

  return optimizedUrl;
};

/**
 * Checks if a URL is an Appwrite storage URL
 */
export const isAppwriteUrl = (url: string): boolean => {
  return url.includes('/storage/buckets/') && url.includes('/files/');
};

/**
 * Preset sizes for common use cases
 */
export const IMAGE_PRESETS = {
  /** Product grid thumbnail */
  thumbnail: { width: 400, height: 400, quality: 75, output: 'webp' as const },
  /** Product detail main image */
  detail: { width: 1200, height: 800, quality: 85, output: 'webp' as const },
  /** Cart/order small image */
  cart: { width: 200, height: 200, quality: 75, output: 'webp' as const },
  /** Slideshow thumbnails */
  slideshowThumb: { width: 300, height: 300, quality: 75, output: 'webp' as const },
  /** Full quality (for zoom) */
  full: { width: 1920, height: 1080, quality: 90, output: 'webp' as const },
} as const;
