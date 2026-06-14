import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Star, Users, QrCode, Heart, PawPrint, Shield, Package, Layers, Ruler, Printer, Search, Gift, Truck, Sparkles, Award, Zap, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import sampleProductImage from '@/assets/sample-product.webp';
import mascotHappy from '@/assets/mascot-new.webp';
import mascotSitting from '@/assets/mascot-sitting.webp';

import homepageImage from '@/assets/homepage.webp';
import documentImage from '@/assets/document.webp';


const collectionHeadlines = {
  'fichas-faciais-corporais': {
    main: 'Planejamentos',
    accent: 'faciais e corporais'
  },
  'anamnese-corporal-facial': {
    main: 'Anamneses para',
    accent: 'estética avançada'
  },
};

const collectionInfo = {
  'papelaria-economica': {
    title: 'Papelaria Econômica',
    description: 'Linha econômica de papelaria estética. Qualidade com o melhor custo-benefício.',
  },
  'fichas-faciais-corporais': {
    title: 'Planejamentos Clínicos',
    description: 'Fichas de planejamento facial e corporal, mapeamento de toxina e protocolos de tratamento.',
  },
  'anamnese-corporal-facial': {
    title: 'Fichas de Anamnese',
    description: 'Fichas de anamnese completas e específicas para cada procedimento estético.',
  },
};

import GoogleHeroWidget from '@/components/GoogleHeroWidget';
import bgImage from '@/assets/bg.svg';
import widgetIcon from '@/assets/widdget.svg';

type HeroSectionProps = {
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  showCTA?: boolean;
  showTrust?: boolean;
};

export const HeroSection = ({
  titleLine1 = 'Design e documentação para',
  titleLine2 = 'estética corporal e facial',
  description = 'Documentação completa para clínicas, consultórios e profissionais da estética. Papelaria personalizada, identidades visuais e websites.',
  showCTA = true,
  showTrust = true,
}: HeroSectionProps = {}) => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Graphic - Only on Desktop (1024px+) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
        <img
          src={bgImage.src}
          alt="Padrão decorativo de fundo"
          className="w-full h-full object-cover opacity-[0.11] scale-[0.9]"
        />
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        {/* Mobile/Tablet Layout (up to 1023px) */}
        <div className="lg:hidden flex flex-col items-center">
          {/* 1. Eyebrow + Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden text-[11px] font-semibold text-black uppercase tracking-wider mb-6 text-center"
          >
            ONDE SUA CLÍNICA GANHA AUTOESTIMA
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display text-foreground mb-[10px] text-center"
          >
            <span className="text-[0.75em] block mb-2">{titleLine1}</span>
            <span className="text-logo-gradient italic">{titleLine2}</span>
          </motion.h2>

          {/* 2. Image with Widgets — same structure as other collection heroes */}
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 mt-[58px] mb-16 mx-auto flex items-center justify-center">
            <div className="relative w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] shrink-0">
              <div className="absolute inset-0 bg-logo-gradient opacity-20 blur-[60px] rounded-full scale-110 animate-pulse -z-10" />
              <img
                src={homepageImage.src}
                alt="Esthétique - Papelaria Premium para Estética"
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_20px_rgba(237,190,172,0.3)]"
                loading="eager"
                fetchPriority="high"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
              transition={{ opacity: { delay: 0.5 }, x: { delay: 0.5 }, y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
              className="absolute -top-[38px] -left-[72px] sm:-top-[42px] sm:-left-[88px] md:-top-[42px] md:-left-[96px] z-20"
            >
              <GoogleHeroWidget />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              transition={{ opacity: { delay: 0.6 }, y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 } }}
              className="absolute -bottom-2 -right-10 sm:bottom-0 sm:-right-8 md:-bottom-2 md:-right-12 z-20"
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

          {/* 3. Paragraph + Buttons */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-black mb-8 font-light leading-relaxed text-center whitespace-pre-line"
          >
            {description}
          </motion.p>

          {showCTA && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              <Link href="/fichas-faciais-corporais" className="shrink-0">
                <Button size="lg" className="h-14 px-8 btn-text bg-logo-gradient hover:opacity-90 rounded-full shadow-lg">
                  Fichas de planejamento
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/anamnese-corporal-facial" className="shrink-0 relative group">
                {/* Subtle background glow that pulses slightly larger than the button */}
                <span className="absolute -inset-1 rounded-full bg-logo-gradient opacity-30 blur-md animate-pulse" style={{ animationDuration: '3s' }} />
                <button
                  className="relative z-10 h-14 px-8 text-sm font-semibold text-foreground bg-[#faf9f7] rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ boxShadow: 'var(--clay-shadow-sm)' }}
                >
                  Anamneses
                </button>
              </Link>
            </motion.div>
          )}

          {showTrust && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-black">A melhor qualidade da indústria gráfica</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Truck className="w-4 h-4 text-accent" />
                <span className="text-black">Enviamos para todo o Brasil</span>
              </div>
            </motion.div>
          )}

        </div>



        {/* Desktop Layout - 2 columns */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[11px] font-semibold text-black uppercase tracking-wider mb-6"
            >
              ONDE SUA CLÍNICA GANHA AUTOESTIMA
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-display text-foreground mb-6"
            >
              <span className="text-[0.75em] block mb-2">{titleLine1}</span>
              <span className="text-logo-gradient italic">{titleLine2}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base text-black mb-8 max-w-lg font-light leading-relaxed"
            >
              {description}
            </motion.p>

            {showCTA && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <Link href="/fichas-faciais-corporais" className="shrink-0">
                  <Button size="lg" className="h-14 px-8 btn-text bg-logo-gradient hover:opacity-90 rounded-full shadow-lg">
                    Fichas de planejamento
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/anamnese-corporal-facial" className="shrink-0 relative group">
                  <span className="absolute -inset-1 rounded-full bg-logo-gradient opacity-30 blur-md animate-pulse" style={{ animationDuration: '3s' }} />
                  <button
                    className="relative z-10 h-14 px-8 text-sm font-semibold text-foreground bg-[#faf9f7] rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ boxShadow: 'var(--clay-shadow-sm)' }}
                  >
                    Anamneses
                  </button>
                </Link>
              </motion.div>
            )}

            {showTrust && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-accent" />
                  <span className="text-black">A melhor qualidade da indústria gráfica</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Truck className="w-4 h-4 text-accent" />
                  <span className="text-black">Enviamos para todo o Brasil</span>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Side - Hero Image with Floating Widgets */}
          <div className="relative flex justify-center items-center">
            {/* Circular background mask */}
            <div className="relative">
              {/* Mascot Image */}
              <div className="relative w-[580px]">
                {/* Background Glow */}
                <div className="absolute inset-x-0 inset-y-0 bg-logo-gradient opacity-20 blur-[80px] rounded-full scale-125 animate-pulse" />

                <img
                  src={homepageImage.src}
                  alt="Esthétique - Papelaria Premium para Estética"
                  className="w-full h-auto relative z-10 drop-shadow-[0_0_30px_rgba(237,190,172,0.4)]"
                />
              </div>


              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [0, -10, 0]
                }}
                transition={{
                  opacity: { delay: 0.6 },
                  x: { delay: 0.6 },
                  y: { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
                }}
                className="absolute top-1/2 -translate-y-1/2 -right-16 z-20"
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

              {/* Widget: Google Reviews Badge - Bottom Left */}
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
                className="absolute bottom-24 -left-12 z-20"
              >
                <GoogleHeroWidget />
              </motion.div>

              {/* Widget: esthétic Seal - Bottom Right */}
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
                className="absolute -bottom-4 right-12 z-20"
              >
                <div className="bg-secondary rounded-xl px-3 py-2 flex items-center gap-2 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.05),4px_4px_12px_rgba(0,0,0,0.08),-2px_-2px_8px_rgba(255,255,255,0.8)]">
                  <div className="w-7 h-7 rounded-full overflow-hidden">
                    <img src={widgetIcon.src} alt="Avaliação de clientes" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-xs text-foreground">esthétique.</p>
                    <p className="text-[10px] text-muted-foreground">Artes que encantam</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div >

      </div >
    </section >
  );
};

// Cashback Banner Section
export const CashbackBanner = () => {
  return (
    <section className="pt-12 md:pt-16 pb-2">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden md:flex flex-wrap items-center justify-center gap-x-3 gap-y-0 font-heading"
        >
          <span className="text-4xl md:text-5xl lg:text-6xl text-logo-gradient leading-tight py-2">5%</span>
          <span className="text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug">
            de cashback em todas as compras.
          </span>
          <span className="text-2xl md:text-3xl lg:text-4xl text-primary italic leading-snug -mt-2">
            Seus créditos nunca expiram!
          </span>
        </motion.div>
      </div>
    </section>
  );
};

// Search Bar Section
export const SearchBarSection = ({ onSearchClick }: { onSearchClick: () => void }) => {
  return (
    <section className="pt-0 pb-8 md:pb-12">
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <button
            onClick={onSearchClick}
            className="w-full text-left relative bg-secondary rounded-2xl p-2 md:p-3 transition-all duration-200 hover:-translate-y-0.5 [box-shadow:inset_3px_3px_6px_rgba(255,255,255,0.95),inset_-3px_-3px_6px_rgba(0,0,0,0.06),8px_8px_24px_rgba(0,0,0,0.1),-4px_-4px_12px_rgba(255,255,255,0.9)] hover:[box-shadow:inset_4px_4px_8px_rgba(255,255,255,1),inset_-4px_-4px_8px_rgba(0,0,0,0.08),12px_12px_32px_rgba(0,0,0,0.12),-6px_-6px_16px_rgba(255,255,255,1)]"
          >
            <div className="flex items-center gap-3 md:gap-4">
              <span className="flex-1 text-base md:text-lg text-muted-foreground font-light pl-3 md:pl-4 flex items-center">
                Fichas de planejamento
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  className="ml-1 w-[2px] h-5 bg-accent/40"
                />
              </span>
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-logo-gradient rounded-xl md:rounded-2xl flex items-center justify-center [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.3),inset_-2px_-2px_4px_rgba(0,0,0,0.1),3px_3px_8px_rgba(0,0,0,0.15)]">
                <Search className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>
          </button>
        </motion.div>

        {/* Cashback - mobile only, under search bar */}
        <div className="md:hidden flex justify-center mt-5 mx-6">
          <div className="flex flex-col items-center justify-center text-center gap-1.5 px-4 py-3 rounded-2xl bg-white/50 border border-accent/10 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.8),inset_-2px_-2px_4px_rgba(0,0,0,0.02)]">
            <Gift className="w-4 h-4 text-accent shrink-0 mb-0.5" />
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">5% cashback</span> em todas as compras.<br />
              Seus créditos nunca expiram.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Real product image arrays (Now served from Supabase Storage)
const CAROUSEL_IMAGES = {
  carteiras: [
    "/home-carousel/cartao-de-cuidados-premium.webp",
    "/home-carousel/cartao-de-cuidados-estetica.webp",
    "/home-carousel/cuidados-passaporte-estetica.webp",
  ],
  fichas: [
    "/products/ficha-harmonizacao-facial.webp",
    "/products/ficha-bioestimulador-colageno.webp",
    "/products/ficha-botox.webp",
  ],
  receituarios: [
    "/products/ficha-harmonizacao-glutea.webp",
  ],
  cartaoVisita: "/home-carousel/cartao-visita-estetica.webp",
  catalogo: "/home-carousel/kit-papelaria-estetica.webp",
};

// Feature Showcase Card Component with real image carousel
const FeatureShowcaseCard = ({
  title,
  accent,
  href,
  images,
  features: customFeatures,
  videoUrl,
  startTime,
  endTime,
  playbackRate = 1
}: {
  title: string;
  accent: string;
  href: string;
  images: string[];
  features?: { icon: React.ElementType; title: string; desc: string }[];
  videoUrl?: string;
  startTime?: number;
  endTime?: number;
  playbackRate?: number;
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  const defaultFeatures = [
    { icon: Package, title: "Couchê 300g", desc: "Alta gramatura" },
    { icon: Layers, title: "Laminação", desc: "Acabamento fosco" },
    { icon: Ruler, title: "22x31cm", desc: "Tamanho A4" },
    { icon: Printer, title: "Offset", desc: "Profissional" }
  ];

  const features = customFeatures || defaultFeatures;

  // Auto-scroll through actual images
  React.useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="h-full flex flex-col bg-[#f9f8f6] rounded-[32px] overflow-hidden w-full transition-all duration-300 hover:-translate-y-1 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.95),inset_-2px_-2px_4px_rgba(0,0,0,0.02),8px_8px_24px_rgba(0,0,0,0.06),-4px_-4px_12px_rgba(255,255,255,0.9)] hover:[box-shadow:inset_3px_3px_6px_rgba(255,255,255,1),inset_-3px_-3px_6px_rgba(0,0,0,0.04),12px_12px_32px_rgba(0,0,0,0.08),-6px_-6px_16px_rgba(255,255,255,1)]">
      {/* Carousel Content */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/5 via-secondary/30 to-accent/5 overflow-hidden" style={{ aspectRatio: '4/3' }}>
        {videoUrl ? (
          <video
            ref={videoRef}
            src={videoUrl}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center' }}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedMetadata={(e) => {
              if (startTime) {
                e.currentTarget.currentTime = startTime;
              }
            }}
            onTimeUpdate={(e) => {
              if (endTime && e.currentTarget.currentTime >= endTime) {
                e.currentTarget.currentTime = startTime || 0;
                e.currentTarget.play();
              }
            }}
          />
        ) : (
          images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${title} ${accent} - ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            />
          ))
        )}

        {/* Carousel Dots - moved INSIDE relative container for correct positioning */}
        {!videoUrl && images.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSlide(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-primary w-5' : 'bg-primary/30 w-1.5 hover:bg-primary/50'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col space-y-3">
        <div>
          <h3 className="font-heading text-lg font-bold text-foreground">
            {title} <span className="text-logo-gradient italic">{accent}</span>
          </h3>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 flex-1">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shrink-0 [box-shadow:inset_1px_1px_2px_rgba(0,0,0,0.02),2px_2px_6px_rgba(0,0,0,0.04)]">
                <div className="text-accent">
                  <feature.icon className="w-5 h-5" />
                </div>
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-foreground truncate">{feature.title}</p>
                <p className="text-[10px] text-muted-foreground truncate leading-tight">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Ver Button - Clay style */}
        <Link
          href={href}
          className="flex items-center justify-center gap-2 w-full py-2.5 bg-logo-gradient text-accent-foreground rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.3),inset_-2px_-2px_4px_rgba(0,0,0,0.1),4px_4px_12px_rgba(0,0,0,0.12),-2px_-2px_8px_rgba(255,255,255,0.3)] hover:[box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.35),inset_-2px_-2px_4px_rgba(0,0,0,0.12),6px_6px_16px_rgba(0,0,0,0.15),-3px_-3px_10px_rgba(255,255,255,0.35)] active:[box-shadow:inset_2px_2px_6px_rgba(0,0,0,0.12),inset_-2px_-2px_6px_rgba(255,255,255,0.2)]"
        >
          Ver
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

// Product Card Horizontal Component - Simplified version
const ProductCardHorizontal = ({
  title,
  accent,
  href,
  imageUrl
}: {
  title: string;
  accent: React.ReactNode;
  href: string;
  imageUrl?: string;
}) => (
  <Link
    href={href}
    className="bg-[#f9f8f6] rounded-2xl overflow-hidden transition-all duration-300 flex items-center group hover:-translate-y-0.5 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.95),inset_-2px_-2px_4px_rgba(0,0,0,0.02),8px_8px_24px_rgba(0,0,0,0.06),-4px_-4px_12px_rgba(255,255,255,0.9)] hover:[box-shadow:inset_3px_3px_6px_rgba(255,255,255,1),inset_-3px_-3px_6px_rgba(0,0,0,0.04),12px_12px_32px_rgba(0,0,0,0.08),-6px_-6px_16px_rgba(255,255,255,1)]"
  >
    <div className="w-20 h-20 bg-gradient-to-br from-primary/5 via-secondary/30 to-accent/5 shrink-0 flex items-center justify-center">
      <img
        src={imageUrl || sampleProductImage.src}
        alt={title}
        className="w-full h-full object-contain p-3"
      />
    </div>
    <div className="flex-1 px-4 py-3 flex items-center justify-between">
      <h4 className="font-display text-base font-bold text-foreground">
        {title} <span className="text-logo-gradient italic">{accent}</span>
      </h4>
      <div className="w-8 h-8 rounded-full bg-logo-gradient flex items-center justify-center transition-all shrink-0 ml-3 [box-shadow:inset_1px_1px_2px_rgba(255,255,255,0.8),inset_-1px_-1px_2px_rgba(0,0,0,0.05)]">
        <ArrowRight className="w-4 h-4 text-white transition-all" />
      </div>
    </div>
  </Link>
);

// Featured + List Card
const FeaturedListCard = ({ onSearchClick }: { onSearchClick?: () => void }) => {
  const menuItems = [
    { label: "Procedimentos faciais", href: "/papelaria-estetica-facial" },
    { label: "Procedimentos corporais", href: "/impressos-estetica-corporal" },
    { label: "Itens essenciais", href: "/papelaria-estetica" },
    { label: "Carteiras de cuidados", href: "/guias-cuidados-estetica" },
  ];

  return (
    <div className="h-full bg-[#f9f8f6] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.95),inset_-2px_-2px_4px_rgba(0,0,0,0.02),8px_8px_24px_rgba(0,0,0,0.06),-4px_-4px_12px_rgba(255,255,255,0.9)]">
      <div className="h-full flex flex-col">
        {/* Top: Featured Image */}
        <div className="bg-gradient-to-br from-primary/5 via-secondary/30 to-accent/5 p-4">
          <span className="text-[11px] font-semibold text-black uppercase tracking-wider hover:text-logo-gradient transition-all duration-200 cursor-default">Documentação</span>
          <h3 className="font-display text-lg font-bold text-foreground mt-1">
            Mais <span className="text-logo-gradient italic">coleções</span>
          </h3>
        </div>

        {/* Bottom: Menu Items */}
        <div className="flex-1 p-4 space-y-1">
          {/* Todos os produtos - triggers search overlay */}
          <button
            onClick={onSearchClick}
            className="group flex items-center gap-2 p-2 rounded-xl hover:bg-secondary/50 transition-colors w-full text-left"
          >
            <div className="w-8 h-8 bg-logo-gradient rounded-full flex items-center justify-center shrink-0 transition-all shadow-sm">
              <Search className="w-4 h-4 text-white transition-all" />
            </div>
            <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
              Todos os produtos
            </span>
          </button>
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group flex items-center gap-2 p-2 rounded-xl hover:bg-secondary/50 transition-colors"
            >
              <div className="w-8 h-8 bg-logo-gradient rounded-full flex items-center justify-center shrink-0 transition-all shadow-sm">
                <ArrowRight className="w-4 h-4 text-white transition-all" />
              </div>
              <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export const FeaturedProductsSection = ({ onSearchClick }: { onSearchClick?: () => void }) => {
  const verticalProducts = [
    {
      title: collectionHeadlines['fichas-faciais-corporais'].main,
      accent: collectionHeadlines['fichas-faciais-corporais'].accent,
      href: "/fichas-faciais-corporais",
      images: CAROUSEL_IMAGES.fichas,
      features: [
        { icon: Heart, title: "Fidelização", desc: "Encante clientes" },
        { icon: Shield, title: "Qualidade", desc: "Papel Premium" },
        { icon: Sparkles, title: "Exclusivo", desc: "Design único" },
        { icon: Truck, title: "Entrega", desc: "Todo o Brasil" }
      ]
    },
    {
      title: collectionHeadlines['anamnese-corporal-facial'].main,
      accent: collectionHeadlines['anamnese-corporal-facial'].accent,
      href: "/anamnese-corporal-facial",
      images: CAROUSEL_IMAGES.receituarios,
      features: [
        { icon: Heart, title: "Confiança", desc: "Profissionalismo" },
        { icon: Shield, title: "Segurança", desc: "Dados protegidos" },
        { icon: Sparkles, title: "Premium", desc: "Acabamento fosco" },
        { icon: Truck, title: "Rápido", desc: "Produção agil" }
      ]
    }
  ];

  const horizontalProducts = [
    {
      title: "Ficha de",
      accent: <>harmonização <span className="hidden lg:inline">facial</span></>,
      href: "/fichas-faciais-corporais/ficha-harmonizacao-facial",
      imageUrl: "/products/icone-harmonizacao.webp"
    },
    { title: "Ficha", accent: "botox", href: "/fichas-faciais-corporais/ficha-botox", imageUrl: "/products/vial.webp" }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: 2 Vertical Feature Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {verticalProducts.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex justify-center items-stretch"
              >
                <FeatureShowcaseCard
                  title={product.title}
                  accent={product.accent}
                  href={product.href}
                  images={product.images}
                  features={product.features}
                  videoUrl={(product as any).videoUrl}
                  startTime={(product as any).startTime}
                  endTime={(product as any).endTime}
                />
              </motion.div>
            ))}
          </div>

          {/* Right: Horizontal Cards + Featured List */}
          <div className="flex flex-col gap-4">
            {horizontalProducts.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.2 }}
              >
                <ProductCardHorizontal
                  title={product.title}
                  accent={product.accent}
                  href={product.href}
                  imageUrl={product.imageUrl}
                />
              </motion.div>
            ))}


            {/* Featured List Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <FeaturedListCard onSearchClick={onSearchClick} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SocialProofSection = () => {
  // Load Reputon script on mount

  return (
    <section className="py-12 bg-background border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            {/* Reputon Google Reviews Widget */}
            <div
              className="reputon-google-reviews-widget"
              data-type="basic"
              data-content-index="1"
              data-theme="light"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const CategoriesSection = () => {
  // Static curated collections for homepage
  const collections = [
    { slug: 'guias-cuidados-estetica', title: 'Carteiras de Cuidados', description: 'Orientações e protocolos pós-procedimento' },
    { slug: 'papelaria-estetica', title: 'Papelaria Essencial', description: 'Receituários, timbrados e documentos clínicos' },
    { slug: 'fichas-faciais-corporais', title: collectionInfo['fichas-faciais-corporais'].title, description: collectionInfo['fichas-faciais-corporais'].description },
    { slug: 'anamnese-corporal-facial', title: collectionInfo['anamnese-corporal-facial'].title, description: collectionInfo['anamnese-corporal-facial'].description },
    { slug: 'termos-clinica-estetica', title: 'Termos', description: 'Termos de consentimento para procedimentos estéticos' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Priority 1 Collections - Core Business */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <p className="btn-text text-accent mb-2">Documentação Essencial</p>
            <h2 className="text-headline mb-4">
              O que você precisa hoje?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto font-light">
              Acesso direto aos documentos mais utilizados por clínicas de estética
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <Link
                  href={`/${collection.slug}`}
                  className="block bg-secondary border border-border/50 rounded-2xl overflow-hidden h-full hover:border-accent/30 hover:shadow-card transition-all group"
                >
                  {/* Collection Placeholder */}
                  <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/30 to-accent/5 flex items-center justify-center">
                    <img
                      src={sampleProductImage.src}
                      alt={collection.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-base lg:text-lg font-semibold text-foreground mb-1">
                      {collection.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                      {collection.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-logo-gradient">
                      Ver produtos
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Products CTA */}
        <div className="text-center mt-10">
          <Link href="/grafica-estetica">
            <Button variant="outline" size="lg" className="h-12 px-8 btn-text border-2 border-accent text-accent hover:bg-primary hover:text-accent-foreground">
              Ver toda a papelaria
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export const TrustSection = () => {
  const reviews = [
    { name: 'Raphaela T.', text: 'Excelente atendimento, excelente trabalho, super ótimo custo benefício!', rating: 5 },
    { name: 'Aline B.', text: 'Produtos de excelente qualidade, acabamento impecável!', rating: 5 },
    { name: 'Carolina R.', text: 'Meu pedido veio certinho, muito lindo! Chegou mais rápido do que eu esperava.', rating: 5 },
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 text-accent fill-primary" />
            <span className="text-sm font-medium text-accent">5.0 no Google • 210+ avaliações</span>
          </div>
          <h2 className="text-headline mb-4">
            O que dizem nossos clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-elevated p-6"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-warning fill-warning" />
                ))}
              </div>
              <p className="text-foreground mb-4 font-light">"{review.text}"</p>
              <p className="text-sm font-semibold text-muted-foreground">{review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
