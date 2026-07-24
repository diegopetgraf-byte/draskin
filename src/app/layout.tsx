import type { Metadata } from 'next';
import './globals.css';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/600.css';
import '@fontsource/raleway/700.css';
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/600.css';
import '@fontsource/playfair-display/400-italic.css';
import { Providers } from '@/components/Providers';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://draskinbrasil.com.br';
const OG_IMAGE = `${SITE_URL}/og.png`;

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f5e8df',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Estética Facial e Corporal em Santana | Dra. Skin',
    template: '%s | Dra. Skin',
  },
  description: 'Estética facial e corporal em Santana, São Paulo. Harmonização facial, toxina botulínica, bioestimuladores e laser com a Dra. Samara Rocha (CRBM 67943). Avaliação personalizada.',
  authors: [{ name: 'Dra. Skin', url: SITE_URL }],
  creator: 'Dra. Skin',
  publisher: 'Dra. Skin',
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Estética Facial e Corporal em Santana | Dra. Skin',
    description: 'Procedimentos injetáveis e a laser personalizados pela Dra. Samara Rocha em Santana, São Paulo. Harmonização facial, bioestimuladores, skinbooster e mais.',
    url: SITE_URL,
    siteName: 'Dra. Skin',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Clínica Dra. Skin — Estética facial e corporal em Santana, São Paulo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estética Facial e Corporal em Santana | Dra. Skin',
    description: 'Procedimentos injetáveis e a laser personalizados pela Dra. Samara Rocha em Santana, São Paulo.',
    images: [{ url: OG_IMAGE, alt: 'Clínica Dra. Skin — Estética facial e corporal em Santana, São Paulo' }],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Dra. Skin',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
