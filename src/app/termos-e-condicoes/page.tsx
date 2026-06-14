import type { Metadata } from 'next';
import { TermsPageContent } from './TermsPageContent';

export const metadata: Metadata = {
    title: 'Termos e Condições | Esthétique',
    description: 'Termos e condições de uso da Esthétique. Política de compra, garantia, produção, entrega e privacidade.',
    alternates: { canonical: 'https://esthetique.com.br/termos-e-condicoes' },
    openGraph: {
        title: 'Termos e Condições | Esthétique',
        description: 'Política de compra, garantia, produção, entrega e privacidade da Esthétique.',
        url: 'https://esthetique.com.br/termos-e-condicoes',
        type: 'website',
    },
};

export default function TermsPage() {
    return <TermsPageContent />;
}
