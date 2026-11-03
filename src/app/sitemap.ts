import { MetadataRoute } from 'next';
import { ALL_PROCEDURES } from '@/data/procedimentos';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://draskinbrasil.com.br';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const now = new Date();

    return [
        { url: `${BASE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
        { url: `${BASE_URL}/tratamentos`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${BASE_URL}/dra-samara-rocha`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        ...ALL_PROCEDURES.map((p) => ({
            url: `${BASE_URL}/${p.slug}`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        })),
        { url: `${BASE_URL}/politica-de-privacidade`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    ];
}
