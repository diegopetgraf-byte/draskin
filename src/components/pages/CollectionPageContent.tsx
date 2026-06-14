'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import GoogleReviewsCarousel from '@/components/GoogleReviewsCarousel';
import GoogleHeroWidget from '@/components/GoogleHeroWidget';
import { HeroSection } from '@/components/home/HomeSections';
import { useProducts } from '@/hooks/useProducts';
import { SearchOverlay } from '@/components/SearchOverlay';
import { getCollectionMetadata } from '@/data/collections';
import { getSeoMetadata } from '@/data/seo';
import type { LegacyProduct } from '@/lib/products/types';
import { ArrowRight, Loader2, Heart, QrCode } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';

// Mascot images
import mascotSitting from '@/assets/mascot-sitting.webp';
import cuidadosOrientacoes from '@/assets/cuidados-orientacoes.webp';
import anamneseAsset from '@/assets/anamnese.webp';
import planejamentoClinicoAsset from '@/assets/planejamento-estetica-corporal-facial.webp';
// import planejamentoAsset from '@/assets/planejamento.webp'; // Unused in original
import corporalAsset from '@/assets/corporal.webp';
import faciaisAsset from '@/assets/faciais.webp';
import capilarAsset from '@/assets/capilar.webp';
import intimoAsset from '@/assets/intimo.webp';
import brandingAsset from '@/assets/branding.webp';
import essencialAsset from '@/assets/essencial.webp';
import termosAsset from '@/assets/termos-estetica.webp';

const passaporteVideo = '/videos/carteira-passaporte-premium.mov';
const kitEsteticaVideo = '/videos/kit-estetica.mp4';

const collectionInfo: Record<string, { title: string; description: string }> = {
    'receituarios': {
        title: 'Receituários',
        description: 'Blocos de receituário simples e de controle especial. Personalizados com sua marca.',
    },
    'atestados': {
        title: 'Atestados',
        description: 'Atestados de saúde e tratamentos para clínicas de estética. Personalizados com sua marca.',
    },
    'certificados': {
        title: 'Certificados',
        description: 'Certificados de cuidados e procedimentos. Personalizados com sua marca.',
    },
    'termos-de-consentimento': {
        title: 'Termos de Consentimento',
        description: 'Documentação jurídica essencial para sua segurança.',
    },
    'fichas-faciais-corporais': {
        title: 'Fichas Clínicas',
        description: 'Fichas de anamnese, prontuários e planejamentos para clínicas de estética.',
    },
    'grafica-estetica': {
        title: 'Gráfica Estética',
        description: 'Toda nossa linha de papelaria estética premium.',
    },
    'papelaria-estetica': {
        title: 'Papelaria Essencial',
        description: 'Papelaria profissional para clínicas de estética e harmonização.',
    },
    'anamnese-corporal-facial': {
        title: 'Anamneses',
        description: 'Fichas de avaliação e anamnese detalhadas.',
    },
    'fidelidade-clinicas-estetica': {
        title: 'Branding',
        description: 'Identidade visual e logotipo para sua marca pessoal.',
    },
    'papelaria-economica': {
        title: 'Papelaria Econômica',
        description: 'Linha econômica de papelaria estética. Qualidade com o melhor custo-benefício.',
    },
    'termos-clinica-estetica': {
        title: 'Termos e Contratos',
        description: 'Documentação jurídica essencial para sua segurança.',
    },
    'guias-cuidados-estetica': {
        title: 'Guias de Cuidados',
        description: 'Orientações e protocolos pós-procedimento.',
    },
    'papelaria-estetica-facial': {
        title: 'Papelaria Facial',
        description: 'Materiais para procedimentos faciais.',
    },
    'impressos-estetica-corporal': {
        title: 'Impressos Corporais',
        description: 'Materiais para procedimentos corporais.',
    },
};

// Unique headlines per collection
const collectionHeadlines: Record<string, { main: string; accent: string }> = {
    'receituarios': {
        main: 'Receituários com',
        accent: 'design profissional e elegante.'
    },
    'atestados': {
        main: 'Atestados em',
        accent: 'conformidade técnica.'
    },
    'certificados': {
        main: 'Certificados que',
        accent: 'emocionam.'
    },
    'termos-de-consentimento': {
        main: 'Termos para',
        accent: 'segurança jurídica.'
    },
    'fichas-faciais-corporais': {
        main: 'Fichas clínicas para',
        accent: 'registro e planejamento'
    },
    'anamnese-corporal-facial': {
        main: 'Anamneses que revelam',
        accent: 'a história do paciente'
    },
    'termos-clinica-estetica': {
        main: 'Termos e contratos',
        accent: 'com clareza e confiança'
    },
    'papelaria-estetica': {
        main: 'O extraordinário na',
        accent: 'papelaria essencial'
    },
    'guias-cuidados-estetica': {
        main: 'Carteiras visuais e explicativas',
        accent: 'para encantar e informar'
    },
    'papelaria-estetica-facial': {
        main: 'Excelência técnica em',
        accent: 'procedimentos faciais'
    },
    'impressos-estetica-corporal': {
        main: 'Resultados avançados em',
        accent: 'procedimentos corporais'
    },
    'fidelidade-clinicas-estetica': {
        main: 'Materiais promocionais',
        accent: 'para clínicas e profissionais'
    },
    'estetica-capilar': {
        main: 'Documentação para',
        accent: 'estética e terapias capilares'
    },
    'estetica-intima': {
        main: 'Documentação para',
        accent: 'estética íntima com acolhimento'
    },
    'grafica-estetica': {
        main: 'Papelaria estética',
        accent: 'premium e personalizada.'
    },
};

interface CollectionPageContentProps {
    slug?: string;
    initialProducts?: LegacyProduct[];
}

export default function CollectionPageContent({ slug: propSlug, initialProducts = [] }: CollectionPageContentProps) {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const pathname = usePathname();

    // Handle both /catalogo/:slug and top-level routes (e.g. /fichas-faciais-corporais)
    const slug = propSlug || pathname?.replace(/^\/|\/$/g, '') || 'grafica-estetica';

    // Try new metadata first, fall back to legacy
    const newMetadata = slug ? getCollectionMetadata(slug) : undefined;
    const seoMetadata = slug ? getSeoMetadata(slug) : undefined;
    const collection = slug ? collectionInfo[slug] : undefined;
    const headline = slug ? collectionHeadlines[slug] : undefined;

    // Fetch products (must be before any early returns - React hooks rules)
    const { products, isLoading, error } = useProducts(2000, undefined, slug, initialProducts);

    // Validate collection exists
    if (!newMetadata && !collection && slug !== 'grafica-estetica') {
        // Let parent handle 404 or render not found here
        return (
            <div className="flex items-center justify-center min-h-screen">
                <h1 className="text-2xl">Coleção não encontrada</h1>
            </div>
        );
    }

    // Get mascot - specific images for certain collections, otherwise sitting mascot
    const mascot = slug === 'guias-cuidados-estetica'
        ? { src: cuidadosOrientacoes.src, alt: seoMetadata?.hero_image_alt || 'Esthétique - Cuidados e Orientações' }
        : slug === 'anamnese-corporal-facial'
            ? { src: anamneseAsset.src, alt: seoMetadata?.hero_image_alt || 'Esthétique - Fichas de Anamnese' }
            : slug === 'fichas-faciais-corporais'
                ? { src: planejamentoClinicoAsset.src, alt: seoMetadata?.hero_image_alt || 'Esthétique - Fichas Clínicas' }
                : slug === 'termos-clinica-estetica'
                    ? { src: termosAsset.src, alt: seoMetadata?.hero_image_alt || 'Esthétique - Termos e Contratos' }
                    : slug === 'papelaria-estetica-facial'
                        ? { src: faciaisAsset.src, alt: seoMetadata?.hero_image_alt || 'Esthétique - Procedimentos Faciais' }
                        : slug === 'impressos-estetica-corporal'
                            ? { src: corporalAsset.src, alt: seoMetadata?.hero_image_alt || 'Esthétique - Procedimentos Corporais' }
                            : slug === 'estetica-capilar'
                                ? { src: capilarAsset.src, alt: seoMetadata?.hero_image_alt || 'Esthétique - Procedimentos Capilares' }
                                : slug === 'estetica-intima'
                                    ? { src: intimoAsset.src, alt: seoMetadata?.hero_image_alt || 'Esthétique - Procedimentos Íntimos' }
                                    : slug === 'fidelidade-clinicas-estetica'
                                        ? { src: brandingAsset.src, alt: seoMetadata?.hero_image_alt || 'Esthétique - Branding Pessoal' }
                                        : slug === 'papelaria-estetica'
                                            ? { src: essencialAsset.src, alt: seoMetadata?.hero_image_alt || 'Esthétique - Papelaria Essencial' }
                                            : { src: mascotSitting.src, alt: seoMetadata?.hero_image_alt || 'Esthétique - Impressos Premium' };


    const showGlow = slug === 'guias-cuidados-estetica' ||
        slug === 'anamnese-corporal-facial' ||
        slug === 'fichas-faciais-corporais' ||
        slug === 'termos-clinica-estetica' ||
        slug === 'impressos-estetica-corporal' ||
        slug === 'fidelidade-clinicas-estetica' ||
        slug === 'papelaria-estetica';

    const isLargeHero = showGlow;

    // Video hero logic for specific collections
    const hasVideoHero = slug === 'certificados' || slug === 'grafica-estetica';

    const formatPrice = (amount: string) => {
        return parseFloat(amount).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    };

    const pageTitle = newMetadata?.title || collection?.title || 'Catálogo';
    const pageDescription = newMetadata?.description || collection?.description || '';

    // Generate SEO schemas
    const breadcrumbs = [
        { name: 'Início', url: '/' },
        { name: pageTitle, url: `/${slug}` },
    ];

    const displayHeadline = headline || (newMetadata ? {
        main: newMetadata.title,
        accent: ''
    } : {
        main: 'Papelaria e design que encantam.',
        accent: 'Exclusivo para estética.'
    });

    return (
        <>

            <Header />
            <CartDrawer onContinueShopping={() => setIsSearchOpen(true)} />
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

            <main className="min-h-screen">
                {slug === 'grafica-estetica' ? (
                    <HeroSection
                        titleLine1="Papelaria & design"
                        titleLine2="para estética avançada"
                        description={"Trabalhos únicos e personalizados para encantar seus pacientes.\nFichas de planejamento, anamneses, termos de consentimento e websites."}
                        showCTA={false}
                        showTrust={false}
                    />
                ) : (
                    <section className="pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-40 lg:pb-20 px-4">
                        <div className="container mx-auto">
                            {/* Mobile/Tablet Layout (up to 1023px) */}
                            <div className="lg:hidden relative px-4 flex flex-col items-center">
                                {/* Breadcrumbs removed from hero */}
                                <p className="hidden text-[11px] font-semibold text-black uppercase tracking-wider mb-6 text-center">
                                    {newMetadata?.eyebrow?.toUpperCase() || 'IMPRESSOS COM AMOR, DESDE 2013.'}
                                </p>

                                <h2 className="text-display text-foreground mb-8 text-center flex flex-col">
                                    <span className="text-[0.65em] opacity-90 block mb-1">{displayHeadline.main}</span>
                                    <span className={`text-logo-gradient italic pb-2 ${slug === 'fidelidade-clinicas-estetica' ? 'text-[0.9em]' : ''} ${slug === 'fichas-faciais-corporais' ? 'text-[0.85em] whitespace-nowrap' : ''}`}>{displayHeadline.accent}</span>
                                </h2>

                                {/* Mobile Hero Image + Widgets - Structure synced with Home */}
                                <div className={`relative w-56 h-56 sm:w-64 sm:h-64 ${isLargeHero ? 'mt-12 mb-20' : 'mb-8'} mx-auto flex items-center justify-center`}>
                                    {/* Scalable Image Container */}
                                    <div className={`relative ${['guias-cuidados-estetica', 'papelaria-estetica'].includes(slug) ? 'w-[337px] h-[337px] sm:w-[380px] h-[380px]' : ['fichas-faciais-corporais', 'anamnese-corporal-facial', 'termos-clinica-estetica', 'impressos-estetica-corporal', 'fidelidade-clinicas-estetica'].includes(slug) ? 'w-[320px] h-[320px] sm:w-[360px] h-[360px]' : isLargeHero ? 'w-[355px] h-[355px] sm:w-[400px] h-[400px]' : 'w-full h-full'} ${slug === 'guias-cuidados-estetica' ? '-mt-12 sm:-mt-16 mb-4' : ''} flex items-center justify-center shrink-0`}>
                                        {/* Posh Moving Gradient Glow - Restricted to specific collections */}
                                        {showGlow && (
                                            <div className="absolute inset-0 bg-logo-gradient opacity-20 blur-[60px] rounded-full scale-110 animate-pulse -z-10" />
                                        )}

                                        {hasVideoHero ? (
                                            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl relative group">
                                                <video
                                                    src={slug === 'grafica-estetica' ? passaporteVideo : kitEsteticaVideo}
                                                    className="w-full h-full object-cover"
                                                    style={slug === 'certificados' ? { objectPosition: 'center bottom' } : undefined}
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                />
                                            </div>
                                        ) : (
                                            <img
                                                src={mascot.src}
                                                alt={mascot.alt}
                                                className="w-full h-full object-contain"
                                                fetchPriority="high"
                                                loading="eager"
                                            />
                                        )}
                                    </div>

                                    {/* Widget: Google Reviews Badge - Bottom Left */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
                                        transition={{ opacity: { delay: 0.5 }, x: { delay: 0.5 }, y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
                                        className="absolute bottom-16 -left-[72px] sm:bottom-20 sm:-left-[88px] md:bottom-24 md:-left-[96px]"
                                    >
                                        <GoogleHeroWidget />
                                    </motion.div>

                                    {/* Widget: Apaixonados - Bottom Right */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: [0, -10, 0] }}
                                        transition={{ opacity: { delay: 0.6 }, y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 } }}
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

                                <p className="text-sm text-black mb-8 font-light leading-relaxed text-center max-w-lg">
                                    {pageDescription}
                                </p>
                            </div>



                            {/* Desktop Layout */}
                            <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                                    {/* Breadcrumbs removed from hero */}
                                    <p className="text-[11px] font-semibold text-black uppercase tracking-wider mb-6">
                                        {newMetadata?.eyebrow?.toUpperCase() || 'IMPRESSOS COM AMOR, DESDE 2013.'}
                                    </p>

                                    <h1 className="text-display text-foreground mb-8 flex flex-col items-start">
                                        <span className="text-[0.75em] opacity-90 block mb-2">{displayHeadline.main}</span>
                                        <span className="text-logo-gradient italic pb-2">{displayHeadline.accent}</span>
                                    </h1>

                                    <p className="text-base text-black mb-8 font-light leading-relaxed max-w-2xl">
                                        {pageDescription}
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="relative flex justify-center items-center"
                                >
                                    <div className={`relative ${['guias-cuidados-estetica', 'papelaria-estetica'].includes(slug) ? 'w-[589px] h-[589px]' : ['impressos-estetica-corporal'].includes(slug) ? 'w-[496px] h-[496px]' : ['fichas-faciais-corporais', 'anamnese-corporal-facial', 'termos-clinica-estetica'].includes(slug) ? 'w-[558px] h-[558px]' : isLargeHero ? 'w-[620px] h-[620px]' : 'w-[400px] h-[400px]'} ${['guias-cuidados-estetica', 'papelaria-estetica', 'fichas-faciais-corporais', 'anamnese-corporal-facial', 'termos-clinica-estetica', 'impressos-estetica-corporal', 'fidelidade-clinicas-estetica'].includes(slug) ? '-mt-20' : ''} flex items-center justify-center`}>
                                        {/* Posh Moving Gradient Glow - Restricted to specific collections */}
                                        {showGlow && (
                                            <div className="absolute inset-x-0 inset-y-0 bg-logo-gradient opacity-20 blur-[80px] rounded-full scale-125 animate-pulse -z-10" />
                                        )}

                                        {hasVideoHero ? (
                                            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl relative group">
                                                <video
                                                    src={slug === 'grafica-estetica' ? passaporteVideo : kitEsteticaVideo}
                                                    className="w-full h-full object-cover"
                                                    style={slug === 'certificados' ? { objectPosition: 'center bottom' } : undefined}
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                />
                                            </div>
                                        ) : (
                                            <img
                                                src={mascot.src}
                                                alt={mascot.alt}
                                                className="w-full h-full object-contain"
                                            />
                                        )}

                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
                                            transition={{ opacity: { delay: 0.7 }, x: { delay: 0.7 }, y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 } }}
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

                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
                                            transition={{ opacity: { delay: 0.8 }, x: { delay: 0.8 }, y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 } }}
                                            className="absolute bottom-24 -left-12"
                                        >
                                            <GoogleHeroWidget />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: [0, -10, 0] }}
                                            transition={{ opacity: { delay: 0.9 }, y: { duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.9 } }}
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
                )}

                <section className="py-12 lg:py-16">
                    <div className="container mx-auto px-4">
                        {isLoading && (
                            <div className="flex items-center justify-center py-16">
                                <Loader2 className="w-8 h-8 text-accent animate-spin" />
                            </div>
                        )}

                        {error && (
                            <div className="text-center py-16">
                                <p className="text-muted-foreground">Erro ao carregar produtos. Tente novamente.</p>
                            </div>
                        )}

                        {!isLoading && !error && products.length > 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {products.map((product, index) => {
                                    const mainImage = product.node.images.edges[0]?.node?.url;
                                    const price = parseFloat(product.node.priceRange.minVariantPrice.amount);
                                    const productLink = `/${product.node.primaryCollection || slug}/${product.node.handle}`;

                                    return (
                                        <motion.div
                                            key={product.node.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.03, duration: 0.3 }}
                                            className="h-full"
                                        >
                                            <Link href={productLink} className="product-card flex flex-col h-full group bg-card transition-all hover:shadow-lg">
                                                <div className="aspect-[4/3] overflow-hidden bg-secondary/10">
                                                    {mainImage ? (
                                                        <img
                                                            src={mainImage}
                                                            alt={product.node.title}
                                                            loading="lazy"
                                                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                                                            Sem imagem
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="p-5 md:p-6">
                                                    <h3 className="font-heading font-semibold text-foreground text-sm md:text-base mb-1 line-clamp-2">
                                                        {product.node.title.replace(/\s*\(2 Vias\)\s*/i, '')}
                                                    </h3>
                                                    <p className="text-[10px] md:text-xs text-muted-foreground mb-2 line-clamp-2">
                                                        {product.node.description}
                                                    </p>
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex flex-col gap-0.5">
                                                            <span className="text-sm md:text-base font-medium text-foreground">
                                                                A partir de {formatPrice(price.toString())}
                                                            </span>
                                                            <span className="text-[10px] md:text-xs font-semibold text-pix">
                                                                10% OFF no PIX
                                                            </span>
                                                        </div>
                                                        <div className="w-8 h-8 rounded-full bg-logo-gradient flex items-center justify-center transition-all duration-300 [box-shadow:inset_1px_1px_2px_rgba(255,255,255,0.8),inset_-1px_-1px_2px_rgba(0,0,0,0.05)]">
                                                            <ArrowRight className="w-4 h-4 text-white transition-all" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </section>

                {/* SEO Content Section - keyword-rich content per collection */}
                {slug === 'fichas-faciais-corporais' && (
                    <section className="mb-16">
                        <div className="container mx-auto px-4">
                            <div className="prose prose-slate text-left max-w-3xl">
                                <h2 className="text-2xl font-heading mb-6">Fichas clínicas para profissionais de estética</h2>
                                <p className="text-muted-foreground mb-4">
                                    Nossas fichas clínicas são desenvolvidas especialmente para <strong>profissionais de harmonização facial, estética avançada e procedimentos corporais</strong>. Cada modelo inclui campos específicos para anamnese, planejamento, evolução e observações técnicas, facilitando o registro e acompanhamento dos seus pacientes.
                                </p>
                                <p className="text-muted-foreground">
                                    Disponíveis para procedimentos como <strong>botox, bioestimuladores de colágeno, MMP capilar, harmonização glútea e facial</strong>, todas as fichas são editáveis e prontas para impressão.
                                </p>
                            </div>
                        </div>
                    </section>
                )}
                {slug === 'anamnese-corporal-facial' && (
                    <section className="mb-16">
                        <div className="container mx-auto px-4">
                            <div className="prose prose-slate text-left max-w-3xl">
                                <h2 className="text-2xl font-heading mb-6">Anamneses completas para avaliação estética</h2>
                                <p className="text-muted-foreground mb-4">
                                    Realize avaliações precisas com nossas <strong>fichas de anamnese facial e corporal</strong>. Projetadas para capturar histórico de saúde, queixas principais e expectativas do paciente com clareza e organização.
                                </p>
                                <p className="text-muted-foreground">
                                    Essenciais para planejar tratamentos seguros e eficazes, nossas anamneses transmitem profissionalismo desde o primeiro contato, reforçando a confiança na sua prática clínica.
                                </p>
                            </div>
                        </div>
                    </section>
                )}
                {slug === 'termos-clinica-estetica' && (
                    <section className="mb-16">
                        <div className="container mx-auto px-4">
                            <div className="prose prose-slate text-left max-w-3xl">
                                <h2 className="text-2xl font-heading mb-6">Segurança jurídica para sua clínica de estética</h2>
                                <p className="text-muted-foreground mb-4">
                                    Proteja sua prática com <strong>Termos de Consentimento Livre e Esclarecido (TCLE) e Contratos de Prestação de Serviços</strong> elaborados especificamente para a área da estética.
                                </p>
                                <p className="text-muted-foreground">
                                    Documentos claros que explicam riscos, benefícios e cuidados, garantindo transparência na relação com o paciente e a segurança profissional que você precisa.
                                </p>
                            </div>
                        </div>
                    </section>
                )}
                {slug === 'papelaria-estetica' && (
                    <section className="mb-16">
                        <div className="container mx-auto px-4">
                            <div className="prose prose-slate text-left max-w-3xl">
                                <h2 className="text-2xl font-heading mb-6">Papelaria personalizada para clínicas de estética</h2>
                                <p className="text-muted-foreground mb-4">
                                    Eleve o padrão do seu atendimento com nossa linha de <strong>papelaria personalizada para estética</strong>. De receituários e pastas a cartões de visita, cada item é pensado para reforçar sua marca.
                                </p>
                                <p className="text-muted-foreground">
                                    Materiais que unem funcionalidade e design sofisticado, criando uma experiência visual coesa e memorável para seus pacientes em todos os pontos de contato.
                                </p>
                            </div>
                        </div>
                    </section>
                )}
                {slug === 'guias-cuidados-estetica' && (
                    <section className="mb-16">
                        <div className="container mx-auto px-4">
                            <div className="prose prose-slate text-left max-w-3xl">
                                <h2 className="text-2xl font-heading mb-6">Orientações pós-procedimento para seus pacientes</h2>
                                <p className="text-muted-foreground mb-4">
                                    Garanta a eficácia dos tratamentos com nossas <strong>carteiras e guias de cuidados pós-procedimento</strong>. Instruções visuais e didáticas para o home care do paciente.
                                </p>
                                <p className="text-muted-foreground">
                                    Disponíveis para diversos procedimentos, esses materiais educam o paciente sobre o autocuidado essencial, reduzindo intercorrências e potencializando os resultados clínicos.
                                </p>
                            </div>
                        </div>
                    </section>
                )}
                {slug === 'papelaria-estetica-facial' && (
                    <section className="mb-16">
                        <div className="container mx-auto px-4">
                            <div className="prose prose-slate text-left max-w-3xl">
                                <h2 className="text-2xl font-heading mb-6">Documentação para harmonização orofacial</h2>
                                <p className="text-muted-foreground mb-4">
                                    Documentação técnica de alto nível para especialistas em HOF. <strong>Fichas de mapeamento facial, planejamento de toxina botulínica e preenchedores</strong> com diagramas detalhados.
                                </p>
                                <p className="text-muted-foreground">
                                    Ferramentas visuais que auxiliam na explicação do plano de tratamento e no registro detalhado de cada aplicação, fundamentais para a previsibilidade dos procedimentos faciais.
                                </p>
                            </div>
                        </div>
                    </section>
                )}
                {slug === 'impressos-estetica-corporal' && (
                    <section className="mb-16">
                        <div className="container mx-auto px-4">
                            <div className="prose prose-slate text-left max-w-3xl">
                                <h2 className="text-2xl font-heading mb-6">Controle total nos tratamentos corporais</h2>
                                <p className="text-muted-foreground mb-4">
                                    Acompanhe a evolução dos seus pacientes com nossas <strong>fichas de avaliação corporal e biométrica</strong>. Ideais para protocolos de redução de medidas, celulite e flacidez.
                                </p>
                                <p className="text-muted-foreground">
                                    Registre dados antropométricos, fotodocumentação e sessões realizadas de forma organizada, comprovando resultados e fidelizando seus pacientes.
                                </p>
                            </div>
                        </div>
                    </section>
                )}
                {slug === 'estetica-capilar' && (
                    <section className="mb-16">
                        <div className="container mx-auto px-4">
                            <div className="prose prose-slate text-left max-w-3xl">
                                <h2 className="text-2xl font-heading mb-6">Fichas para tricologia e terapia capilar</h2>
                                <p className="text-muted-foreground mb-4">
                                    Fichas especializadas para o universo capilar. Realize <strong>anamneses tricológicas detalhadas e acompanhe protocolos de terapia capilar</strong> com precisão.
                                </p>
                                <p className="text-muted-foreground">
                                    Documente a saúde do couro cabeludo, planeje cronogramas de tratamento e monitore a evolução clínica com materiais desenvolvidos por especialistas.
                                </p>
                            </div>
                        </div>
                    </section>
                )}
                {slug === 'estetica-intima' && (
                    <section className="mb-16">
                        <div className="container mx-auto px-4">
                            <div className="prose prose-slate text-left max-w-3xl">
                                <h2 className="text-2xl font-heading mb-6">Documentação para estética íntima</h2>
                                <p className="text-muted-foreground mb-4">
                                    Aborde procedimentos íntimos com a seriedade e delicadeza necessárias. Nossas <strong>fichas e termos para estética íntima</strong> garantem registro clínico adequado e consentimento informado.
                                </p>
                                <p className="text-muted-foreground">
                                    Desenvolvidos para oferecer segurança jurídica e conforto ao paciente, cobrindo procedimentos como clareamento, rejuvenescimento e ninfoplastia.
                                </p>
                            </div>
                        </div>
                    </section>
                )}
                {slug === 'fidelidade-clinicas-estetica' && (
                    <section className="mb-16">
                        <div className="container mx-auto px-4">
                            <div className="prose prose-slate text-left max-w-3xl">
                                <h2 className="text-2xl font-heading mb-6">Materiais de branding e fidelização</h2>
                                <p className="text-muted-foreground mb-4">
                                    Potencialize o retorno dos seus pacientes com <strong>cartões fidelidade, vouchers e materiais promocionais</strong> de alto padrão visual.
                                </p>
                                <p className="text-muted-foreground">
                                    Ferramentas de marketing essenciais para clínicas que desejam criar um relacionamento duradouro e incentivar indicações com elegância.
                                </p>
                            </div>
                        </div>
                    </section>
                )}

                <GoogleReviewsCarousel />
            </main >

            <FloatingWhatsApp />
            <Footer />
        </>
    );
}
