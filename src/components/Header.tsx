"use client";

import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Galeria", href: "#galeria" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const whatsappUrl = getWhatsAppUrl();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const item of navItems) {
        const targetId = item.href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(targetId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 pt-3 transition-transform duration-300">
        {/* Main header - Clay style */}
        <div className="bg-secondary/95 backdrop-blur-sm rounded-2xl mx-auto max-w-7xl [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.05),4px_4px_16px_rgba(0,0,0,0.1),-2px_-2px_8px_rgba(255,255,255,0.8)] transition-all">
          <div className="px-4 lg:px-6">
            <div className="relative flex items-center justify-between h-16">
              {/* Mobile Menu Toggle - LEFT */}
              <div className="lg:hidden flex-1 flex items-center">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Menu"
                  className="flex items-center justify-center w-[38px] h-[38px] rounded-full transition-all duration-200 hover:-translate-y-0.5 [box-shadow:inset_1px_1px_2px_rgba(255,255,255,0.8),inset_-1px_-1px_2px_rgba(0,0,0,0.04),2px_2px_6px_rgba(0,0,0,0.06),-1px_-1px_4px_rgba(255,255,255,0.7)] hover:[box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.05),4px_4px_10px_rgba(0,0,0,0.08),-2px_-2px_6px_rgba(255,255,255,0.8)]"
                >
                  <Menu className="w-5 h-5 text-foreground" />
                </button>
              </div>

              {/* Logo - CENTERED on Mobile, LEFT on Desktop */}
              <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:left-0 lg:translate-x-0 flex-shrink-0 flex items-center">
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, "#home")}
                  className="flex items-center gap-1.5"
                >
                  <img src="/logo.png" alt="Dra. Skin Logo" className="h-8 md:h-10 w-auto object-contain" />
                </a>
              </div>

              {/* Desktop Menu - Inline (lg only) */}
              <nav className="hidden lg:flex items-center gap-1 mx-auto">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 rounded-lg hover:text-logo-gradient ${
                      activeSection === item.href.substring(1)
                        ? 'text-logo-gradient bg-background/50 [box-shadow:inset_1px_1px_2px_rgba(0,0,0,0.02)]'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Action Button: WhatsApp CTA - RIGHT */}
              <div className="flex-1 lg:flex-none flex items-center justify-end">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group shrink-0 hidden sm:block"
                >
                  <span className="absolute -inset-0.5 rounded-full bg-logo-gradient opacity-30 blur-sm group-hover:opacity-50 transition-opacity" />
                  <button
                    className="relative z-10 px-4 py-2 md:px-5 md:py-2.5 text-[10px] md:text-xs font-semibold uppercase tracking-wider text-white bg-logo-gradient rounded-full transition-all hover:-translate-y-0.5 hover:shadow-md"
                    style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
                  >
                    Agendar Avaliação
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to compensate for fixed header */}
      <div className="h-20" aria-hidden="true" />

      {/* Full Screen Mobile Menu Tray */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-secondary flex flex-col h-screen"
          >
            {/* Menu Header with Close Button */}
            <div className="p-6 flex justify-between items-center bg-secondary">
              <img src="/logo.png" alt="Dra. Skin Logo" className="h-8 w-auto object-contain" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-background transition-all duration-200 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.05),4px_4px_12px_rgba(0,0,0,0.08),-2px_-2px_8px_rgba(255,255,255,0.8)] active:scale-95"
              >
                <X className="w-5 h-5 text-accent" />
              </button>
            </div>

            {/* Nav Content - Aligned Left */}
            <nav className="flex-1 px-8 pt-8 pb-4 flex flex-col gap-2 justify-start">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block py-2.5 text-xs font-semibold uppercase tracking-[0.15em] transition-all hover:text-logo-gradient ${
                      activeSection === item.href.substring(1)
                        ? 'text-logo-gradient pl-2 border-l-2 border-primary/50'
                        : 'text-foreground'
                    }`}
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
            </nav>

            {/* Footer Mimic Section */}
            <div className="px-8 pb-8 pt-4 border-t border-black/5 bg-white/5">
              <div className="flex flex-col items-start gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group transition-all w-full"
                >
                  <div className="w-10 h-10 rounded-xl bg-logo-gradient flex items-center justify-center text-white [box-shadow:inset_1px_1px_2px_rgba(255,255,255,0.3),inset_-1px_-1px_2px_rgba(0,0,0,0.1),3px_3px_8px_rgba(0,0,0,0.08)] group-hover:scale-105 transition-transform">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold leading-none mb-1">Dra. Skin</span>
                    <span className="text-sm font-bold text-foreground group-hover:text-logo-gradient transition-colors leading-none">(11) 99926-3636</span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
