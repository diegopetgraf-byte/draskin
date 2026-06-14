import seoData from './seo_metadata.json';

export interface SeoMetadata {
    page_number: number;
    refined_url: string;
    refined_hero: {
        eyebrow: string;
        title_line1: string;
        title_line2: string;
        paragraph: string;
    };
    meta_title: string;
    meta_description: string;
    hero_image_alt: string;
}

export function getSeoMetadata(slug: string): SeoMetadata | undefined {
    const fullPath = `/${slug}`;
    return seoData.find((item) => item.refined_url === fullPath);
}
