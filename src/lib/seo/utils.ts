/**
 * SEO Helper utilities
 */

/**
 * Truncates text to a maximum length without cutting words in the middle.
 * Adds an ellipsis if the text was truncated.
 */
export function truncateDescription(text: string, maxLength: number = 160): string {
    if (!text || text.length <= maxLength) return text;

    const truncated = text.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');

    if (lastSpace === -1) return truncated;

    return truncated.substring(0, lastSpace) + '...';
}

/**
 * Ensures a URL is absolute by prefixing it with the site URL if needed.
 */
export function toAbsoluteUrl(url: string): string {
    const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://esthetique.com.br';

    if (!url) return `${SITE_URL}/og-image.jpg`;
    if (url.startsWith('http')) return url;

    // Handle relative paths
    const cleanPath = url.startsWith('/') ? url : `/${url}`;
    return `${SITE_URL}${cleanPath}`;
}
