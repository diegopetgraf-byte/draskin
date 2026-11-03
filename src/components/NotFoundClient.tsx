'use client';

import Link from 'next/link';
import { Home, MessageCircle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { getWhatsAppUrl } from '@/lib/utils';

const NotFoundClient = () => {
    return (
        <div className="min-h-screen flex flex-col bg-transparent">
            <Header />

            <main className="flex-1">
                <section className="pt-36 pb-24 px-4">
                    <div className="container mx-auto max-w-2xl text-center space-y-8">
                        <p className="text-[100px] md:text-[140px] font-heading font-medium text-logo-gradient leading-none tracking-tighter">
                            404
                        </p>
                        <h1 className="text-2xl md:text-3xl font-heading text-foreground">
                            Esta página não existe.
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            O endereço pode ter mudado. Volte para o início para conhecer os
                            tratamentos da Dra. Skin ou fale com a equipe pelo WhatsApp.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground font-medium min-h-11"
                            >
                                <Home className="w-4 h-4" aria-hidden="true" />
                                Voltar ao início
                            </Link>
                            <a
                                href={getWhatsAppUrl()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-primary font-medium min-h-11"
                            >
                                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                                Falar no WhatsApp
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default NotFoundClient;
