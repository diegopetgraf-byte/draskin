"use client";

import { Phone, ArrowRight, Instagram, MapPin } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/utils';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const Footer = () => {
  const whatsappUrl = getWhatsAppUrl();
  const instagramUrl = "https://instagram.com/draskinbrasil";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#tratamento-')) {
      e.preventDefault();
      window.location.hash = ''; // reset so it triggers hashchange even if clicked twice
      window.location.hash = href;
      return;
    }
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const linkSections = [
    {
      title: "Menu",
      links: [
        { label: "Home", href: "#home" },
        { label: "Tratamentos", href: "#tratamentos" },
        { label: "Sobre a Dra. Samara", href: "#sobre" },
        { label: "Galeria", href: "#galeria" },
        { label: "Depoimentos", href: "#depoimentos" },
        { label: "Perguntas Frequentes", href: "#faq" },
        { label: "Contato", href: "#contato" },
      ]
    },
    {
      title: "Principais Tratamentos",
      links: [
        { label: "Harmonização Facial", href: "#tratamento-harmonizacao-facial" },
        { label: "Preenchimento Labial", href: "#tratamento-preenchimento-labial" },
        { label: "Toxina Botulínica", href: "#tratamento-toxina-botulinica" },
        { label: "Bioestimuladores de Colágeno", href: "#tratamento-bioestimuladores" },
        { label: "Profhilo & Skinbooster", href: "#tratamento-profhilo" },
      ]
    },
    {
      title: "Contato & Localização",
      links: [
        { label: "Santana, São Paulo - SP", href: "" },
        { label: "Rua Dr. César, 1161 - Sala 1011", href: "https://maps.app.goo.gl/Ev9zhZhc1WYmpFBX9" },
        { label: "WhatsApp: (11) 99926-3636", href: getWhatsAppUrl() },
        { label: "Tel: (11) 99926-3636", href: "tel:+5511999263636" },
      ]
    }
  ];

  return (
    <footer className="px-4 pb-8 pt-4">
      <div className="container mx-auto max-w-7xl">
        {/* Floating Card Footer - Clay style */}
        <div className="bg-secondary flex-shrink-0 rounded-3xl px-8 py-10 md:px-12 md:py-16 [box-shadow:inset_3px_3px_6px_rgba(255,255,255,0.95),inset_-3px_-3px_6px_rgba(0,0,0,0.06),8px_8px_24px_rgba(0,0,0,0.1),-4px_-4px_12px_rgba(255,255,255,0.9)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
            {/* Left Column: Brand Info */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <img src="/logo.png" alt="Dra. Skin Logo" className="h-10 md:h-12 w-auto object-contain mb-6" />

              <div className="space-y-4 max-w-sm mb-8">
                <p className="text-sm font-medium text-foreground leading-relaxed">
                  Dra. Samara Rocha — Biomédica Esteta (CRBM 67943).
                </p>
                <address className="not-italic text-xs text-muted-foreground leading-relaxed">
                  Procedimentos injetáveis e tecnologias modernas focados em rejuvenescimento facial com resultados naturais e elegantes em Santana, São Paulo.
                  <br />
                  <a href="tel:+5511999263636" className="hover:text-accent transition-colors">(11) 99926-3636</a>
                </address>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[10px] font-semibold text-muted-foreground hover:text-accent uppercase tracking-widest transition-all"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  Instagram
                </a>
                <a
                  href="https://share.google/b4Ian9akJQwhbg0d3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[10px] font-semibold text-muted-foreground hover:text-accent uppercase tracking-widest transition-all"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" stroke="none" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" stroke="none" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" stroke="none" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" stroke="none" />
                  </svg>
                  Avaliações no Google
                </a>
              </div>

              {/* WhatsApp Link */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-logo-gradient flex items-center justify-center text-white [box-shadow:inset_1px_1px_2px_rgba(255,255,255,0.8),inset_-1px_-1px_2px_rgba(0,0,0,0.04),3px_3px_8px_rgba(0,0,0,0.06)] group-hover:scale-110 transition-transform">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold leading-none mb-1">WhatsApp de Agendamento</span>
                  <span className="text-sm font-bold text-foreground group-hover:text-logo-gradient transition-colors leading-none">(11) 99926-3636</span>
                </div>
              </a>
            </div>

            {/* Right Column: Links Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 lg:pl-8 border-t lg:border-t-0 lg:border-l border-white/50 pt-8 lg:pt-0">
              {linkSections.map((section) => (
                <div key={section.title} className="flex flex-col space-y-5">
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {section.title}
                  </h3>
                  <ul className="flex flex-col space-y-3">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        {link.href ? (
                          link.href.startsWith("#") ? (
                            <a
                              href={link.href}
                              onClick={(e) => handleNavClick(e, link.href)}
                              className="text-xs text-muted-foreground hover:text-accent transition-colors cursor-pointer"
                            >
                              {link.label}
                            </a>
                          ) : (
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-muted-foreground hover:text-accent transition-colors cursor-pointer"
                            >
                              {link.label}
                            </a>
                          )
                        ) : (
                          <span className="text-xs text-muted-foreground">
                            {link.label}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Divider & Copyright */}
          <div className="mt-10 md:mt-16 pt-8 border-t border-white/40 flex flex-col gap-2">
            <div className="flex flex-col md:flex-row md:justify-between gap-4 text-[10px] text-muted-foreground text-left">
              <p className="flex flex-col gap-0.5">
                <span>© {new Date().getFullYear()} Dra. Skin • Dra. Samara Rocha. Todos os direitos reservados.</span>
                <span>CRBM 67943 • Biomédica Esteta</span>
              </p>
              <a
                href="https://medlogos.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/60 hover:text-accent transition-colors"
              >
                Desenvolvido por Med Logos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
