/**
 * JSON-LD Schema generators for SEO
 * These schemas help Google understand our content and enable rich snippets
 */

import React from 'react';
import { toAbsoluteUrl } from './utils';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://draskinbrasil.com.br';
const SITE_NAME = 'Dra. Skin';
const LOGO_URL = toAbsoluteUrl('/og.png');

export interface ProductSchemaInput {
  name: string;
  description: string;
  image: string;
  url: string;
  price: number;
  currency?: string;
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
  sku?: string;
  brand?: string;
  reviewCount?: number;
  ratingValue?: number;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CollectionSchemaInput {
  name: string;
  description: string;
  url: string;
  products: Array<{
    name: string;
    url: string;
    image?: string;
    price: number;
  }>;
}

/**
 * Generate Product schema with Offer
 */
export function generateProductSchema(product: ProductSchemaInput): object {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: toAbsoluteUrl(product.image),
    url: toAbsoluteUrl(product.url),
    brand: {
      '@type': 'Brand',
      name: product.brand || SITE_NAME,
    },
    offers: {
      '@type': 'Offer',
      price: isNaN(product.price) ? '0.00' : product.price.toFixed(2),
      priceCurrency: product.currency || 'BRL',
      availability: `https://schema.org/${product.availability || 'InStock'}`,
      url: toAbsoluteUrl(product.url),
      seller: {
        '@type': 'Organization',
        name: SITE_NAME,
      },
    },
    sku: product.sku || product.url.split('/').pop(),
  };

  return schema;
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.url),
    })),
  };
}

/**
 * Generate FAQPage schema — must match visible FAQ content exactly
 */
export function generateFAQSchema(faqs: FAQItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate ItemList schema for collection pages
 */
export function generateItemListSchema(collection: CollectionSchemaInput): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: collection.name,
    description: collection.description,
    url: toAbsoluteUrl(collection.url),
    numberOfItems: collection.products.length,
    itemListElement: collection.products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        url: toAbsoluteUrl(product.url),
        image: toAbsoluteUrl(product.image || ''),
        offers: {
          '@type': 'Offer',
          price: isNaN(product.price) ? '0.00' : product.price.toFixed(2),
          priceCurrency: 'BRL',
        },
      },
    })),
  };
}

/**
 * Generate Organization schema for homepage
 */
export function generateOrganizationSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
    },
    description: 'Clínica de estética facial e corporal em Santana, São Paulo. Tratamentos injetáveis e a laser sob medida pela Dra. Samara Rocha (CRBM 67943).',
    foundingDate: '2022',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Dr. César, 1161, Sala 1011',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      postalCode: '02013-004',
      addressCountry: 'BR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-11-99926-3636',
      contactType: 'customer service',
      availableLanguage: 'Portuguese',
    },
    sameAs: [
      'https://instagram.com/draskinbrasil',
      'https://maps.app.goo.gl/Ev9zhZhc1WYmpFBX9',
    ],
  };
}

/**
 * Generate WebSite schema — no SearchAction since /search does not exist
 */
export function generateWebSiteSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: 'Clínica Dra. Skin Santana',
    url: SITE_URL,
    description: 'Estética facial e corporal em Santana, São Paulo — procedimentos injetáveis e a laser com a Dra. Samara Rocha.',
    inLanguage: 'pt-BR',
  };
}

/**
 * Generate HealthAndBeautyBusiness (LocalBusiness) schema
 * Note: Dra. Samara Rocha is a Biomédica Esteta (CRBM), not a physician.
 * HealthAndBeautyBusiness is the correct type.
 */
export function generateLocalBusinessSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    image: LOGO_URL,
    url: SITE_URL,
    telephone: '+55-11-99926-3636',
    priceRange: '$$',
    currenciesAccepted: 'BRL',
    paymentAccepted: 'Cash, Credit Card',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Dr. César, 1161, Sala 1011',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      postalCode: '02013-004',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -23.5019,
      longitude: -46.6254,
    },
    hasMap: 'https://maps.app.goo.gl/Ev9zhZhc1WYmpFBX9',
    areaServed: {
      '@type': 'City',
      name: 'São Paulo',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '14:00',
      },
    ],
    sameAs: [
      'https://instagram.com/draskinbrasil',
      'https://maps.app.goo.gl/Ev9zhZhc1WYmpFBX9',
    ],
  };
}

/**
 * Generate Person schema for Dra. Samara Rocha
 */
export function generatePersonSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person-samara-rocha`,
    name: 'Dra. Samara Rocha',
    jobTitle: 'Biomédica Esteta',
    description: 'Biomédica Esteta (CRBM 67943) especialista em procedimentos injetáveis e tecnologias a laser. Atua na Clínica Dra. Skin em Santana, São Paulo.',
    image: `${SITE_URL}/dra_skin_hero_real.jpg`,
    worksFor: {
      '@id': `${SITE_URL}/#localbusiness`,
    },
    sameAs: [
      'https://instagram.com/draskinbrasil',
    ],
  };
}

/**
 * Helper component to inject JSON-LD into the page
 */
export function JsonLd({ data }: { data: object | object[] }): React.ReactElement {
  const schemas = Array.isArray(data) ? data : [data];

  return React.createElement(
    React.Fragment,
    null,
    schemas.map((schema, index) =>
      React.createElement('script', {
        key: index,
        type: 'application/ld+json',
        dangerouslySetInnerHTML: { __html: JSON.stringify(schema) },
      })
    )
  );
}
