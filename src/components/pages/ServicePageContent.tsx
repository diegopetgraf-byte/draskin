'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { CartDrawer } from '@/components/CartDrawer';
import { SearchOverlay } from '@/components/SearchOverlay';
import { getCollectionMetadata } from '@/data/collections';
import { QrCode, Heart } from 'lucide-react';
import GoogleHeroWidget from '@/components/GoogleHeroWidget';
import GoogleReviewsCarousel from '@/components/GoogleReviewsCarousel';
import { Breadcrumbs } from '@/components/Breadcrumbs';

import mascotSitting from '@/assets/mascot-sitting.webp';
import webAsset from '@/assets/web.webp';
import identidadeAsset from '@/assets/identidade.webp';
import designAsset from '@/assets/design.webp';

interface ServicePageContentProps {
    slug: string;
}

export default function ServicePageContent({ slug }: ServicePageContentProps) {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const metadata = getCollectionMetadata(slug);

    if (!metadata || metadata.type !== 'service') {
        return null;
    }

    const mascot = slug === 'sites-clinicas-estetica'
        ? { src: webAsset.src, alt: 'Esthétique - Websites for Clinics' }
        : slug === 'logotipos-estetica-harmonizacao'
            ? { src: identidadeAsset.src, alt: 'Esthétique - Marcas com alma e posicionamento' }
            : slug === 'identidade-visual-estetica'
                ? { src: designAsset.src, alt: 'Esthétique - Design cirúrgico para estética avançada' }
                : { src: mascotSitting.src, alt: 'Esthétique - Premium Design Services' };

    const isLargeHero = slug === 'sites-clinicas-estetica' || slug === 'logotipos-estetica-harmonizacao' || slug === 'identidade-visual-estetica' || slug === 'fidelidade-clinicas-estetica';
    const hasGlow = slug === 'sites-clinicas-estetica';

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <CartDrawer onContinueShopping={() => setIsSearchOpen(true)} />
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            <FloatingWhatsApp />

            <main className="flex-1">
                {/* Hero Section - Standardized with CollectionPage */}
                <section className="pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-40 lg:pb-20 px-4">
                    <div className="container mx-auto">
                        {/* Mobile/Tablet Layout (up to 1023px) */}
                        <div className="lg:hidden relative px-4 flex flex-col items-center">
                            {/* Breadcrumbs removed from hero */}
                            {/* Eyebrow + Title */}
                            <p className="hidden text-[11px] font-semibold text-black uppercase tracking-wider mb-6 text-center">
                                {metadata.eyebrow}
                            </p>

                            <h1 className="text-display text-foreground mb-8 text-center flex flex-col">
                                {slug === 'logotipos-estetica-harmonizacao' ? (
                                    <>
                                        <span className="text-[0.65em] opacity-90 block mb-1">Marcas com alma</span>
                                        <span className="text-logo-gradient italic pb-2">e posicionamento</span>
                                    </>
                                ) : slug === 'identidade-visual-estetica' ? (
                                    <>
                                        <span className="text-[0.65em] opacity-90 block mb-1">Design cirúrgico</span>
                                        <span className="text-logo-gradient italic pb-2">para estética avançada</span>
                                    </>
                                ) : slug === 'sites-clinicas-estetica' ? (
                                    <>
                                        <span className="text-[0.65em] opacity-90 block mb-1">Sua clínica</span>
                                        <span className="text-logo-gradient italic pb-2">livre de algoritmos</span>
                                    </>
                                ) : slug === 'fidelidade-clinicas-estetica' ? (
                                    <>
                                        <span className="text-[0.65em] opacity-90 block mb-1">Materiais promocionais</span>
                                        <span className="text-logo-gradient italic pb-2">para clínicas e profissionais</span>
                                    </>
                                ) : (
                                    metadata.title
                                )}
                            </h1>

                            {/* Image with 2 Widgets - Sync with Home */}
                            <div className={`relative w-56 h-56 sm:w-64 sm:h-64 ${isLargeHero ? 'mt-12 mb-20' : 'mb-8'} mx-auto flex items-center justify-center`}>
                                <div className={`relative ${['logotipos-estetica-harmonizacao', 'sites-clinicas-estetica', 'identidade-visual-estetica'].includes(slug) ? 'w-[320px] h-[320px] sm:w-[360px] h-[360px]' : isLargeHero ? 'w-[355px] h-[355px] sm:w-[400px] h-[400px]' : 'w-full h-full'} flex items-center justify-center shrink-0`}>
                                    {/* Posh Moving Gradient Glow */}
                                    {hasGlow && (
                                        <motion.div
                                            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                            className="absolute inset-0 bg-logo-gradient blur-3xl rounded-full -z-10"
                                        />
                                    )}
                                    <img
                                        src={mascot.src}
                                        alt={mascot.alt}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                        y: [0, -10, 0]
                                    }}
                                    transition={{
                                        opacity: { delay: 0.5 },
                                        x: { delay: 0.5 },
                                        y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                                    }}
                                    className="absolute bottom-16 -left-[72px] sm:bottom-20 sm:-left-[88px] md:bottom-24 md:-left-[96px]"
                                >
                                    <GoogleHeroWidget />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: 1,
                                        y: [0, -10, 0]
                                    }}
                                    transition={{
                                        opacity: { delay: 0.6 },
                                        y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
                                    }}
                                    className="absolute -bottom-2 -right-10 sm:bottom-0 sm:-right-8 md:-bottom-2 md:-right-12"
                                >
                                    <div className="bg-secondary rounded-xl px-3 py-2 flex items-center gap-2 [box-shadow:inset_3px_3px_6px_rgba(255,255,255,0.95),inset_-3px_-3px_6px_rgba(0,0,0,0.06),8px_8px_20px_rgba(0,0,0,0.08),-4px_-4px_12px_rgba(255,255,255,0.9)]">
                                        <div className="w-7 h-7 bg-logo-gradient rounded-full flex items-center justify-center">
                                            <Heart className="w-3.5 h-3.5 text-white fill-white" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-xs text-foreground">Apaixonados</p>
                                            <p className="text-[10px] text-muted-foreground">por estética</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-black mb-8 font-light leading-relaxed text-center max-w-lg">
                                {metadata.description}
                            </p>
                        </div>



                        {/* Desktop Layout - 2 columns */}
                        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {/* Breadcrumbs removed from hero */}
                                {/* Eyebrow */}
                                <p className="text-[11px] font-semibold text-black uppercase tracking-wider mb-6">
                                    {metadata.eyebrow}
                                </p>

                                {/* Main Headline */}
                                <h1 className="text-display text-foreground mb-8 flex flex-col items-start">
                                    {slug === 'logotipos-estetica-harmonizacao' ? (
                                        <>
                                            <span className="text-[0.75em] opacity-90 block mb-2">Marcas com alma</span>
                                            <span className="text-logo-gradient italic pb-2">e posicionamento</span>
                                        </>
                                    ) : slug === 'identidade-visual-estetica' ? (
                                        <>
                                            <span className="text-[0.75em] opacity-90 block mb-2">Design cirúrgico</span>
                                            <span className="text-logo-gradient italic pb-2">para estética avançada</span>
                                        </>
                                    ) : slug === 'sites-clinicas-estetica' ? (
                                        <>
                                            <span className="text-[0.75em] opacity-90 block mb-2">Sua clínica</span>
                                            <span className="text-logo-gradient italic pb-2">livre de algoritmos</span>
                                        </>
                                    ) : slug === 'fidelidade-clinicas-estetica' ? (
                                        <>
                                            <span className="text-[0.75em] opacity-90 block mb-2">Materiais promocionais</span>
                                            <span className="text-logo-gradient italic pb-2">para clínicas e profissionais</span>
                                        </>
                                    ) : (
                                        metadata.title
                                    )}
                                </h1>

                                {/* Description */}
                                <p className="text-base text-black mb-8 font-light leading-relaxed max-w-2xl">
                                    {metadata.description}
                                </p>
                            </motion.div>

                            {/* Mascot + All Widgets */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="relative flex justify-center items-center"
                            >
                                <div className="relative">
                                    {/* Mascot Image */}
                                    <div className={`relative ${['logotipos-estetica-harmonizacao', 'sites-clinicas-estetica', 'identidade-visual-estetica'].includes(slug) ? 'w-[558px] h-[558px]' : isLargeHero ? 'w-[620px] h-[620px]' : 'w-[400px] h-[400px]'} flex items-center justify-center`}>
                                        {/* Posh Moving Gradient Glow */}
                                        {hasGlow && (
                                            <motion.div
                                                className="absolute inset-0 bg-logo-gradient blur-[100px] rounded-full -z-10 animate-float-delayed"
                                                animate={{
                                                    scale: [1.1, 1.3, 1.1],
                                                    opacity: [0.25, 0.4, 0.25],
                                                    x: [0, 10, -10, 0],
                                                    y: [0, -15, 15, 0]
                                                }}
                                                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                                            />
                                        )}
                                        <img
                                            src={mascot.src}
                                            alt={mascot.alt}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    {/* Widget: PIX Discount */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                            y: [0, -10, 0]
                                        }}
                                        transition={{
                                            opacity: { delay: 0.7 },
                                            x: { delay: 0.7 },
                                            y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }
                                        }}
                                        className="absolute top-1/2 -translate-y-1/2 -right-16"
                                    >
                                        <div className="bg-secondary rounded-xl px-3 py-2 flex items-center gap-2 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.05),4px_4px_12px_rgba(0,0,0,0.08),-2px_-2px_8px_rgba(255,255,255,0.8)]">
                                            <div className="w-7 h-7 bg-pix/10 rounded-full flex items-center justify-center">
                                                <QrCode className="w-3.5 h-3.5 text-pix" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-pix text-sm">10% OFF</p>
                                                <p className="text-[10px] text-muted-foreground">Pagando no PIX</p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Widget: Google Reviews Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                            y: [0, -10, 0]
                                        }}
                                        transition={{
                                            opacity: { delay: 0.8 },
                                            x: { delay: 0.8 },
                                            y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
                                        }}
                                        className="absolute bottom-24 -left-12"
                                    >
                                        <GoogleHeroWidget />
                                    </motion.div>

                                    {/* Widget: Apaixonados */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{
                                            opacity: 1,
                                            y: [0, -10, 0]
                                        }}
                                        transition={{
                                            opacity: { delay: 0.9 },
                                            y: { duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.9 }
                                        }}
                                        className="absolute -bottom-4 right-12"
                                    >
                                        <div className="bg-secondary rounded-xl px-3 py-2 flex items-center gap-2 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.05),4px_4px_12px_rgba(0,0,0,0.08),-2px_-2px_8px_rgba(255,255,255,0.8)]">
                                            <div className="w-7 h-7 bg-logo-gradient rounded-full flex items-center justify-center">
                                                <Heart className="w-3.5 h-3.5 text-white fill-white" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-xs text-foreground">Apaixonados</p>
                                                <p className="text-[10px] text-muted-foreground">por estética</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <GoogleReviewsCarousel />
            </main>

            <Footer />
        </div>
    );
};
