"use client";

import { useMemo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Star } from 'lucide-react';

import { googleReviews } from '@/data/reviews';

interface GoogleReviewsCarouselProps {
  reviewCount?: number;
  rating?: number;
}

// Google Logo SVG Component
const GoogleLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const GoogleReviewsCarousel = ({
  reviewCount = 220,
  rating = 5.0
}: GoogleReviewsCarouselProps) => {
  const autoplayPlugin = useMemo(() => Autoplay({
    delay: 3500,
    playOnInit: true,
    stopOnInteraction: false,
    stopOnMouseEnter: false
  }), []);

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      dragFree: true,
      containScroll: false,
      duration: 50
    },
    [autoplayPlugin]
  );

  const reviews = googleReviews;
  const googleLink = "https://share.google/b4Ian9akJQwhbg0d3";

  return (
    <section className="relative py-16 pb-24 bg-transparent">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header - Left aligned */}
        <div className="mb-10 text-center lg:text-left">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Opinião das Pacientes</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-foreground mt-2">
            O que nossas <span className="text-logo-gradient italic font-normal">pacientes</span> dizem
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative pb-8">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 items-stretch">
              {reviews.map((review, index) => {
                const cleanQuando = review.quando.replace(/^Editado\s+/i, '');

                return (
                  <div
                    key={index}
                    className="pl-4 flex-shrink-0 w-[300px] sm:w-[320px] md:w-[360px] pb-4 self-stretch"
                  >
                    <div className="bg-secondary/40 rounded-3xl p-6 h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 border border-border/40 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.02),4px_4px_16px_rgba(0,0,0,0.04)] hover:[box-shadow:inset_3px_3px_6px_rgba(255,255,255,0.95),inset_-3px_-3px_6px_rgba(0,0,0,0.04),8px_8px_24px_rgba(0,0,0,0.08)]">
                      {/* Top Bar: Stars & Verified */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-0.5">
                          {[...Array(review.nota)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center [box-shadow:inset_1px_1px_2px_rgba(255,255,255,0.3),2px_2px_4px_rgba(0,0,0,0.1)]">
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-[10px] font-semibold uppercase tracking-wider">Verificado</span>
                        </div>
                      </div>

                      {/* Review text */}
                      <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-light italic flex-1 mb-6">
                        "{review.texto}"
                      </p>

                      {/* Author info + Google logo */}
                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full flex items-center justify-center bg-primary/20 [box-shadow:inset_1px_1px_2px_rgba(255,255,255,0.5),2px_2px_6px_rgba(0,0,0,0.04)]">
                            <span className="text-sm font-heading font-semibold uppercase text-accent">
                              {review.nome.charAt(0)}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs font-semibold text-foreground">
                              {review.nome}
                            </span>
                            <span className="text-[10px] text-muted-foreground">
                              {cleanQuando}
                            </span>
                          </div>
                        </div>
                        <GoogleLogo className="w-4 h-4 shrink-0" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Central Google Trust Badge */}
        <div className="mt-8 flex justify-center">
          <a
            href={googleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-6 py-3 bg-white rounded-2xl border border-border/50 transition-all hover:scale-[1.02] active:scale-95 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.05),4px_4px_16px_rgba(0,0,0,0.06),-2px_-2px_8px_rgba(255,255,255,0.8)]"
          >
            <GoogleLogo className="w-5 h-5" />
            <div className="h-6 w-px bg-border/80" />
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-foreground">{rating.toFixed(1)}</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsCarousel;
