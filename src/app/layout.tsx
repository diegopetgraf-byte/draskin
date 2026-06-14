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
const OG_IMAGE = `${SITE_URL}/og.png`; // Fallback to og.png in root/public

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Dra. Skin • Harmonização Facial e Corporal em Santana, São Paulo',
    template: '%s | Dra. Skin',
  },
  description: 'Clínica de estética avançada Dra. Skin em Santana, São Paulo. Tratamentos injetáveis e a laser personalizados pela Dra. Samara Rocha (CRBM 67943). Harmonização Facial, Botox, Preenchimento Labial e Bioestimuladores de Colágeno com resultados naturais.',
  keywords: [
    'Dra. Skin', 'Dra. Samara Rocha', 'Biomédica Esteta Santana', 'Harmonização Facial Santana',
    'Botox Santana', 'Preenchimento Labial Santana', 'Bioestimuladores de Colágeno Santana',
    'Clinica de Estetica Santana', 'Profhilo Santana', 'Skinbooster Santana',
    'Laser para Melasma Santana', 'Criolipolise Santana', 'Rejuvenescimento Facial Santana',
  ],
  authors: [{ name: 'Dra. Skin', url: SITE_URL }],
  creator: 'Dra. Skin',
  publisher: 'Dra. Skin',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Dra. Skin • Harmonização Facial e Corporal em Santana, São Paulo',
    description: 'Clínica de estética avançada Dra. Skin em Santana, São Paulo. Tratamentos injetáveis e a laser personalizados pela Dra. Samara Rocha (CRBM 67943).',
    url: SITE_URL,
    siteName: 'Dra. Skin',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Dra. Skin — Estética avançada focada em naturalidade e segurança',
      },
    ],
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
  twitter: {
    card: 'summary_large_image',
    title: 'Dra. Skin • Harmonização Facial e Corporal em Santana, São Paulo',
    description: 'Clínica de estética avançada Dra. Skin em Santana, São Paulo. Tratamentos injetáveis e a laser personalizados pela Dra. Samara Rocha (CRBM 67943).',
    images: [OG_IMAGE],
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
