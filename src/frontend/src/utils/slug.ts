/**
 * Deterministic slug generator and validator for deployment identifiers.
 * Enforces 5-50 characters and only letters, numbers, and hyphens.
 */

/**
 * Normalizes a string into a valid slug format
 * - Converts to lowercase
 * - Replaces whitespace and underscores with hyphens
 * - Removes invalid characters (keeps only a-z, 0-9, -)
 * - Collapses multiple consecutive hyphens into one
 * - Trims leading/trailing hyphens
 */
export function normalizeSlug(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, '-')           // Replace spaces and underscores with hyphens
    .replace(/[^a-z0-9-]/g, '')        // Remove invalid characters
    .replace(/-+/g, '-')               // Collapse multiple hyphens
    .replace(/^-+|-+$/g, '');          // Trim leading/trailing hyphens
}

/**
 * Validates if a slug meets the requirements:
 * - Between 5 and 50 characters
 * - Contains only letters, numbers, and hyphens
 * - No leading or trailing hyphens
 */
export function isValidSlug(slug: string): boolean {
  if (slug.length < 5 || slug.length > 50) {
    return false;
  }
  
  // Check format: only letters, numbers, hyphens; no leading/trailing hyphens
  const validPattern = /^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/;
  return validPattern.test(slug);
}

/**
 * Generates a valid slug from input, ensuring it meets all requirements.
 * If the normalized slug is too short, pads with a deterministic suffix.
 * If too long, truncates intelligently at word boundaries.
 */
export function generateValidSlug(input: string): string {
  let slug = normalizeSlug(input);
  
  // If empty after normalization, use a default
  if (!slug) {
    slug = 'archiv-agency';
  }
  
  // If too short, pad with a deterministic suffix
  if (slug.length < 5) {
    slug = `${slug}-app`.slice(0, 50);
  }
  
  // If too long, truncate at word boundary (hyphen) if possible
  if (slug.length > 50) {
    slug = slug.slice(0, 50);
    const lastHyphen = slug.lastIndexOf('-');
    if (lastHyphen > 5) {
      slug = slug.slice(0, lastHyphen);
    }
  }
  
  // Ensure no trailing hyphen after truncation
  slug = slug.replace(/-+$/, '');
  
  // Final validation and fallback
  if (!isValidSlug(slug)) {
    // If still invalid, use a safe default
    slug = 'archiv-agency-app';
  }
  
  return slug;
}

/**
 * Generates a deployment identifier from the current hostname or app name.
 * This is deterministic and will always produce the same result for the same input.
 */
export function getDeploymentSlug(): string {
  // Try to use hostname first (most deterministic)
  if (typeof window !== 'undefined' && window.location.hostname) {
    const hostname = window.location.hostname;
    
    // If already on IC, extract the canister ID portion
    if (hostname.includes('.ic0.app') || hostname.includes('.icp0.io')) {
      const parts = hostname.split('.');
      if (parts.length > 0) {
        return generateValidSlug(parts[0]);
      }
    }
    
    // For localhost or other domains, use the hostname
    if (hostname !== 'localhost' && hostname !== '127.0.0.1') {
      return generateValidSlug(hostname);
    }
  }
  
  // Fallback to app name
  return generateValidSlug('archiv-agency');
}
