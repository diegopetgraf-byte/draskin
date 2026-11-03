import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://draskinbrasil.com.br';

/** Metadados completos de uma página interna: título, descrição, canonical, Open Graph e Twitter. */
export function pageMeta({
  title,
  description,
  path,
  image = '/og.jpg',
  imageAlt,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const img = image.startsWith('http') ? image : `${SITE_URL}${image}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      url,
      type: 'website',
      locale: 'pt_BR',
      siteName: 'Dra. Skin',
      title,
      description,
      images: [{ url: img, alt: imageAlt ?? title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [img] },
  };
}
