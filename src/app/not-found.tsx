import type { Metadata } from 'next';
import NotFoundClient from '@/components/NotFoundClient';

export const metadata: Metadata = {
    title: 'Página não encontrada | Esthétique',
    description: 'A página que você está procurando não existe.',
    robots: {
        index: false,
        follow: true,
    },
    alternates: {
        canonical: '/404',
    },
};

export default function NotFound() {
    return <NotFoundClient />;
}
