'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "/galeria-7.jpg",
  "/galeria-1.png",
  "/clinic_1.jpg",
  "/galeria-4.jpg",
  "/dra_skin_hero_real.jpg",
  "/galeria-6.jpg",
  "/clinic_2.jpg",
  "/galeria-2.jpg",
  "/galeria-doctor.jpg",
  "/galeria-5.jpg",
  "/clinic_3.jpg",
  "/galeria-3.jpg",
];

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setCurrentIndex((prev) => prev + 1);

  // Show exactly 3 items at a time (-1, 0, 1)
  const items = [-1, 0, 1].map(offset => {
    const absoluteIndex = currentIndex + offset;
    const imageIndex = ((absoluteIndex % images.length) + images.length) % images.length;
    return { offset, absoluteIndex, src: images[imageIndex] };
  });

  return (
    <section className="py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent/80">NOSSO ESPAÇO</span>
          <h2 className="text-headline mt-2 mb-4 font-light">Galeria Dra. Skin</h2>
          <div className="w-12 h-px bg-primary/30 mx-auto" />
        </div>

        <div className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center">
          <AnimatePresence initial={false}>
            {items.map(({ offset, absoluteIndex, src }) => {
              const isCenter = offset === 0;
              const sign = Math.sign(offset);

              return (
                <motion.div
                  key={absoluteIndex}
                  className="absolute w-[85%] max-w-[340px] md:max-w-none md:w-[45%] lg:w-[32%] aspect-[4/5] h-auto md:h-full md:aspect-auto rounded-3xl overflow-hidden shadow-[0_15px_40px_-10px_rgba(0,0,0,0.15)] bg-white/10 border border-white/40 cursor-grab active:cursor-grabbing flex items-center justify-center"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.05}
                  onDragEnd={(e, { offset: dragOffset }) => {
                    // Only allow sliding forward
                    if (dragOffset.x < -30) handleNext();
                  }}
                  initial={{ 
                    opacity: 0,
                    x: offset * 110 + "%",
                    scale: 0.8,
                    zIndex: 0
                  }}
                  animate={{
                    opacity: isCenter ? 1 : 0.6,
                    x: offset * 95 + "%",
                    scale: isCenter ? 1.05 : 0.85, // Center is prominent
                    zIndex: isCenter ? 10 : 5,
                  }}
                  exit={{ 
                    opacity: 0,
                    x: sign * 120 + "%",
                    scale: 0.8,
                    zIndex: 0
                  }}
                  transition={{
                    duration: 1.8,
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                >
                  <img
                    src={src}
                    alt={`Galeria ${absoluteIndex}`}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  
                  {/* Tinted, faded overlay for side items */}
                  <motion.div 
                    className="absolute inset-0 bg-white/30 backdrop-blur-[2px] pointer-events-none"
                    animate={{ opacity: isCenter ? 0 : 1 }}
                    transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                  />
                  
                  {/* Subtle edge reflection */}
                  <div className="absolute inset-0 rounded-3xl border-[1.5px] border-white/50 pointer-events-none" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
