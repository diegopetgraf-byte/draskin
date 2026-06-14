import { Metadata } from 'next';
import { HomeClient } from '@/components/HomeClient';
import {
  JsonLd,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateLocalBusinessSchema
} from '@/lib/seo/schemas';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://draskinbrasil.com.br';

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    url: SITE_URL,
    type: 'website',
  },
};

export default function Home() {
  // Generate homepage SEO schemas
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      <JsonLd data={[organizationSchema, websiteSchema, localBusinessSchema]} />
      <HomeClient />
    </>
  );
}
