"use client";

import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { TREATMENTS } from '@/data/treatments';
import { getWhatsAppUrl } from '@/lib/utils';
import GoogleReviewsCarousel from '@/components/GoogleReviewsCarousel';
import GoogleHeroWidget from '@/components/GoogleHeroWidget';
import GalleryCarousel from '@/components/GalleryCarousel';
import { VideoGrid } from '@/components/site/VideoGrid';
import { VIDEOS } from '@/data/videos';
import {
  Sparkles,
  Clock,
  ShieldCheck,
  User,
  MapPin,
  Instagram,
  Check,
  ChevronDown,
  Star,
  Award,
  ArrowRight,
  ShieldAlert,
  ThumbsUp,
  Activity,
  Heart,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TREATMENT_IMAGES: Record<string, string> = {
  "harmonizacao-facial": "/card_harmonizacao.jpg",
  "toxina-botulinica": "/card_facial_injectables.jpg",
  "preenchimento-labial": "/labial.jpeg",
  "skinbooster": "/skinbooster_final.jpg",
  "profhilo": "/Profhilo.jpeg",
  "laser-melasma": "/laser-melasma.jpeg",
  "laser-rejuvenescimento": "/laser-rejuvenescimento.jpeg",
  "tratamentos-capilares": "/capilares.jpeg",
  "bioestimuladores": "/bioestimuladores_final.jpg",
  "criolipolise": "/criolipolise.jpeg",
  "microagulhamento": "/microagulhamento.jpeg",
  "preenchimento-olheiras": "/olheiras.jpeg",
  "rejuvenescimento-facial": "/rejuvenescimento_final.jpg",
};

/** id antigo do cartão -> slug da página do tratamento. */
const TREATMENT_SLUGS: Record<string, string> = {
  "bioestimuladores": "bioestimuladores-de-colageno",
  "laser-melasma": "laser-para-melasma",
  "preenchimento-olheiras": "preenchimento-de-olheiras",
};

export function HomeClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const whatsappUrl = getWhatsAppUrl();

  // Links antigos (#tratamento-x) agora levam à página própria do tratamento.
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#tratamento-')) {
      const id = hash.replace('#tratamento-', '');
      window.location.replace(`/${TREATMENT_SLUGS[id] ?? id}`);
    }
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Os procedimentos são dolorosos?",
      answer: "A maioria dos procedimentos utiliza anestésicos tópicos ou injetáveis locais de última geração, garantindo o máximo conforto possível para a paciente durante toda a sessão."
    },
    {
      question: "Quanto tempo duram os resultados?",
      answer: "Isso varia de acordo com o tratamento: a Toxina Botulínica costuma durar de 4 a 6 meses; Preenchimentos de Ácido Hialurônico de 10 a 18 meses; e os Bioestimuladores continuam agindo na produção de colágeno por até 2 anos."
    },
    {
      question: "Posso voltar às atividades normais?",
      answer: "Sim, a maioria dos tratamentos estéticos injetáveis e a laser permite o retorno imediato às atividades cotidianas, sendo necessárias apenas algumas precauções básicas, como não massagear a área e evitar a exposição solar intensa."
    },
    {
      question: "Como funciona a avaliação?",
      answer: "A avaliação é uma consulta personalizada e detalhada onde analisamos as suas necessidades individuais, estrutura facial, histórico médico e traçamos um plano de tratamento personalizado focado em resultados elegantes e naturais."
    },
    {
      question: "Os procedimentos são seguros?",
      answer: "Absolutamente. Todos os procedimentos são realizados pela Dra. Samara Rocha, biomédica esteta qualificada, utilizando produtos de marcas renomadas mundialmente e seguindo rígidos protocolos de segurança e higiene sanitária."
    },
    {
      question: "Qual tratamento é ideal para mim?",
      answer: "O tratamento ideal é determinado na sua consulta de avaliação, onde avaliamos as particularidades da sua pele e queixas específicas para criar um protocolo sob medida para você."
    },
    {
      question: "Onde fica a clínica Dra. Skin?",
      answer: "A Clínica Dra. Skin está localizada na Rua Dr. César, 1161, sala 1011, no bairro de Santana, São Paulo, SP, CEP 02013-004. Atendemos de segunda a sexta das 9h às 19h e aos sábados das 9h às 14h, exclusivamente com hora marcada."
    },
    {
      question: "Como agendar uma avaliação?",
      answer: "O agendamento é feito diretamente pelo WhatsApp: (11) 99926-3636. Envie uma mensagem e nossa equipe retornará para confirmar o melhor horário para você."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-transparent selection:bg-primary/20">
      <Header />
      <FloatingWhatsApp />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden py-16">
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-8 text-left order-2 lg:order-1">
                <div className="hidden sm:inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">Dra. Skin</span>
                </div>
                <h1 className="text-display text-foreground leading-[1.15]">
                  Estética facial e corporal em Santana com <span className="text-logo-gradient italic">elegância e naturalidade</span>
                </h1>
                <p className="text-base text-muted-foreground max-w-xl font-light leading-relaxed">
                  Procedimentos injetáveis e tratamentos a laser personalizados, desenvolvidos pela <strong>Dra. Samara Rocha</strong>. Foco em naturalidade, sofisticação e rejuvenescimento duradouro em Santana, São Paulo.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-11 sm:h-14 px-6 sm:px-8 bg-logo-gradient text-white text-xs sm:text-base font-semibold rounded-full flex items-center justify-center shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Agendar Avaliação
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </a>
                  <a
                    href="#tratamentos"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("tratamentos")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="h-11 sm:h-14 px-6 sm:px-8 bg-white border border-border text-foreground text-xs sm:text-base font-semibold rounded-full flex items-center justify-center transition-all hover:bg-secondary hover:-translate-y-0.5"
                  >
                    Conhecer Tratamentos
                  </a>
                </div>
              </div>

              {/* Right Column - Premium image with floating widgets */}
              <div className="lg:col-span-5 relative flex justify-center items-center py-10 lg:py-6 order-1 lg:order-2 mb-6 lg:mb-0">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-logo-gradient opacity-15 blur-[60px] rounded-full scale-95 pointer-events-none" />

                <div className="relative">
                  {/* Image Frame */}
                  <div className="relative w-[220px] xs:w-[250px] sm:w-[320px] md:w-[360px] aspect-square rounded-full overflow-hidden [box-shadow:var(--clay-shadow-lg)] z-10 border-2 border-white/60">
                    <img
                      src="/dra_skin_hero_real.webp"
                      alt="Dra. Samara Rocha, biomédica esteta da Clínica Dra. Skin em Santana, São Paulo"
                      className="w-full h-full object-cover object-[center_15%]"
                      width={360}
                      height={360}
                      fetchPriority="high"
                      decoding="sync"
                    />
                  </div>

                  {/* Widget 1: Google Rating (Top Right on mobile, Top Left on desktop) */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: [0, -6, 0]
                    }}
                    transition={{
                      opacity: { delay: 0.4 },
                      x: { delay: 0.4 },
                      y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
                    }}
                    className="absolute -top-8 -right-6 sm:-top-4 sm:-left-12 sm:right-auto z-20 pointer-events-auto scale-[0.75] sm:scale-100 origin-top-right sm:origin-top-left"
                  >
                    <GoogleHeroWidget />
                  </motion.div>

                  {/* Widget 2: Natural Beauty (Right Middle on desktop, Left Middle on mobile) */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: [0, -8, 0]
                    }}
                    transition={{
                      opacity: { delay: 0.6 },
                      x: { delay: 0.6 },
                      y: { duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
                    }}
                    className="absolute top-[42%] -left-6 sm:left-auto sm:-right-12 z-20 pointer-events-auto scale-[0.75] sm:scale-100 origin-left sm:origin-right"
                  >
                    <div className="bg-secondary rounded-2xl px-3 py-2.5 flex items-center gap-2.5 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.04),4px_4px_16px_rgba(0,0,0,0.06),-2px_-2px_8px_rgba(255,255,255,0.8)] border border-white/50">
                      <div className="w-8 h-8 bg-logo-gradient rounded-full flex items-center justify-center shrink-0">
                        <Heart className="w-4 h-4 text-white fill-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-xs text-foreground leading-tight">Beleza natural</p>
                        <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">sem exageros</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Widget 3: Professional info (Bottom Center) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: [0, -7, 0]
                    }}
                    transition={{
                      opacity: { delay: 0.8 },
                      y: { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
                    }}
                    className="absolute -bottom-10 -left-6 sm:-bottom-6 sm:-left-8 z-20 pointer-events-auto scale-[0.75] sm:scale-100 origin-bottom-left"
                  >
                    <div className="bg-secondary rounded-2xl px-4 py-3 flex items-center gap-3 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.04),4px_4px_16px_rgba(0,0,0,0.06),-2px_-2px_8px_rgba(255,255,255,0.8)] border border-white/50">
                      <div className="w-9 h-9 rounded-full bg-logo-gradient flex items-center justify-center text-white shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-heading text-xs font-semibold text-foreground leading-tight">Dra. Samara Rocha</p>
                        <p className="text-[9px] text-muted-foreground uppercase tracking-wider mt-0.5">CRBM 67943 • Biomédica esteta</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST INDICATORS SECTION */}
        <section className="py-8 bg-secondary/60 border-y border-border/50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              {[
                { title: "Cursos internacionais", desc: "Londres e Miami" },
                { title: "Especializações avançadas", desc: "Injetáveis e tecnologias" },
                { title: "Atendimento personalizado", desc: "Exclusivo para você" },
                { title: "Tecnologias modernas", desc: "Equipamentos de ponta" },
                { title: "Resultados naturais", desc: "Sua beleza sem exageros" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center p-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mb-2" />
                  <h3 className="font-heading text-xs md:text-sm font-semibold text-foreground leading-tight">{item.title}</h3>
                  <p className="text-[10px] text-muted-foreground font-light mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FACIAL & CORPORAL INTRO SECTION */}
        <section className="py-16 bg-transparent">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Text Column */}
              <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">Harmonia integrada</span>
                <h2 className="text-headline mt-2">Tratamentos faciais e corporais</h2>
                <div className="w-16 h-0.5 bg-primary/40" />
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Buscamos a harmonia e o rejuvenescimento natural através de protocolos combinados e personalizados. Nossos tratamentos são divididos para cuidar de cada detalhe da sua beleza:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="p-5 bg-secondary/30 rounded-2xl border border-border/40 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.02),4px_4px_16px_rgba(0,0,0,0.04)]">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-1">Área facial</span>
                    <p className="text-[11px] text-muted-foreground font-light leading-relaxed">
                      Procedimentos para suavizar linhas de expressão, restaurar volume, redefinir contornos e devolver o viço e hidratação profunda da pele.
                    </p>
                  </div>
                  <div className="p-5 bg-secondary/30 rounded-2xl border border-border/40 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.02),4px_4px_16px_rgba(0,0,0,0.04)]">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-1">Área corporal</span>
                    <p className="text-[11px] text-muted-foreground font-light leading-relaxed">
                      Protocolos focados na redução de gordura localizada, flacidez e melhoria da firmeza corporal, incluindo o colo, pescoço e mãos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Illustration Image Column */}
              <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
                <div className="w-full max-w-[380px] aspect-square bg-transparent flex items-center justify-center">
                  <img
                    src="/homepage.webp"
                    alt="Ilustração de Tratamentos Faciais e Corporais baseados na proporção áurea"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MOST REQUESTED TREATMENTS SECTION */}
        <section id="tratamentos" className="py-24 bg-secondary/20">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <div className="max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">Procedimentos exclusivos</span>
              <h2 className="text-headline mt-2 mb-4">Tratamentos mais procurados</h2>
              <div className="w-16 h-0.5 bg-primary/40 mx-auto" />
              <p className="text-muted-foreground mt-4 font-light">
                Toque em um tratamento para conhecer detalhes, tempo de recuperação e benefícios de cada procedimento.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TREATMENTS.map((treatment) => (
                <a
                  key={treatment.id}
                  href={`/${TREATMENT_SLUGS[treatment.id] ?? treatment.id}`}
                  aria-label={`Ver página do tratamento: ${treatment.name}`}
                  className="group cursor-pointer bg-white rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 border border-border/40 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.02),4px_4px_16px_rgba(0,0,0,0.04)] hover:[box-shadow:inset_3px_3px_6px_rgba(255,255,255,0.95),inset_-3px_-3px_6px_rgba(0,0,0,0.04),8px_8px_24px_rgba(0,0,0,0.08)] flex flex-col justify-between min-h-[260px] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  <div>
                    {/* Visual luxury sketch image */}
                    <div className="w-full h-44 rounded-2xl overflow-hidden mb-6 relative bg-white border border-border/30 flex items-center justify-center transition-all duration-300 group-hover:scale-[1.02]">
                      <img
                        src={TREATMENT_IMAGES[treatment.id] || "/card_face_profile.webp"}
                        alt={`Procedimento estético: ${treatment.name}, Clínica Dra. Skin, Santana SP`}
                        className="w-full h-full object-cover mix-blend-multiply"
                        loading="lazy"
                        decoding="async"
                        width={340}
                        height={176}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {treatment.name}
                    </h3>
                    <p className="text-xs text-muted-foreground font-light line-clamp-2 leading-relaxed">
                      {treatment.subtitle}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">Saiba mais</span>
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center transition-transform group-hover:translate-x-1">
                      <ArrowRight className="w-4 h-4 text-accent" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-12">
              <a
                href="/tratamentos"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-border/60 px-7 py-3.5 text-sm font-semibold text-foreground min-h-11 [box-shadow:var(--clay-shadow-sm)] hover:-translate-y-0.5 transition-transform"
              >
                Ver todos os tratamentos
                <ArrowRight className="w-4 h-4 text-accent" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>



        {/* DRA. SAMARA SECTION (AUTHORITY) */}
        <section id="sobre" className="py-24 bg-secondary/30 relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Side: Timeline / Credentials */}
              <div className="lg:col-span-7 space-y-8 text-left">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">Dra. Samara Rocha</span>
                  <h2 className="text-headline mt-2 mb-4">Experiência e formação internacional</h2>
                  <div className="w-16 h-0.5 bg-primary/40" />
                </div>

                <div className="relative pl-6 border-l-2 border-primary/20 space-y-8">
                  {[
                    {
                      period: "Formação acadêmica",
                      title: "Biomedicina estética de alta performance",
                      desc: "Graduada em Biomedicina e Tecnóloga em Estética e Cosmética, com sólida base acadêmica e prática clínica focada na entrega de resultados de excelência."
                    },
                    {
                      period: "Especialização avançada",
                      title: "Expert em procedimentos injetáveis",
                      desc: "Pós-graduada em Biomedicina Estética, com especialização avançada estritamente focada em procedimentos injetáveis premium e tecnologias de alta performance."
                    },
                    {
                      period: "Certificações internacionais",
                      title: "Prática em polos globais da estética",
                      desc: "Especializações práticas em Londres (Facial Profiling & Russian Kiss Masterclass), Miami (Estética Avançada e Bioestimuladores) e imersão em Anatomia em Cadáver Fresh Frozen (EUA)."
                    }
                  ].map((timeline, index) => (
                    <div key={index} className="relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-white border-2 border-accent flex items-center justify-center" />
                      <span className="text-[10px] font-semibold text-accent uppercase tracking-wider">{timeline.period}</span>
                      <h3 className="font-heading text-base font-semibold text-foreground mt-1">{timeline.title}</h3>
                      <p className="text-xs text-muted-foreground font-light mt-1 leading-relaxed">{timeline.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap gap-2">
                  {["Bioestimuladores faciais", "Biorremodeladores", "Toxina botulínica", "Preenchimento facial"].map((tag, idx) => (
                    <span key={idx} className="bg-white border border-border/80 px-4 py-2 rounded-full text-xs font-medium text-foreground [box-shadow:var(--clay-shadow-sm)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Side: Visual credentials list with elegant CTA */}
              <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-border/40 [box-shadow:var(--clay-shadow-lg)] space-y-6 text-left">
                <h3 className="font-heading text-lg font-semibold text-foreground">Agende seu atendimento</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Os atendimentos com a Dra. Samara Rocha são totalmente individualizados. Cada plano de tratamento é traçado de acordo com as necessidades específicas do seu rosto e pele.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <p className="text-xs text-foreground/80">Avaliação facial minuciosa e individual</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <p className="text-xs text-foreground/80">Produtos originais de alta performance</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <p className="text-xs text-foreground/80">Suporte pós-procedimento humanizado</p>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-12 bg-logo-gradient text-white font-semibold rounded-full flex items-center justify-center gap-2 shadow-md transition-all hover:scale-[1.02]"
                >
                  Falar no WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <GalleryCarousel />
        <section className="py-6 flex justify-center bg-transparent px-4">
          <div className="p-5 max-w-xl text-center bg-secondary/30 rounded-2xl border border-border/40 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.02),4px_4px_16px_rgba(0,0,0,0.04)]">
            <p className="text-[11px] text-muted-foreground font-light leading-relaxed italic">
              Os resultados são individuais, podem variar entre pacientes e não constituem promessa ou garantia de resultado.
            </p>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        {/* VÍDEOS DA DRA. SAMARA */}
        <section id="videos" className="py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <VideoGrid videos={VIDEOS} eyebrow="Segunda Pele" title="A Dra. Samara explica" />
          </div>
        </section>

        <div id="depoimentos">
          <GoogleReviewsCarousel />
        </div>

        {/* FAQ SECTION */}
        <section id="faq" className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <div className="mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">Dúvidas frequentes</span>
              <h2 className="text-headline mt-2 mb-4">Perguntas frequentes</h2>
              <div className="w-16 h-0.5 bg-primary/40 mx-auto" />
            </div>

            <div className="space-y-4 text-left">
              {faqItems.map((item, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-border/40 overflow-hidden [box-shadow:var(--clay-shadow-sm)]"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4 flex items-center justify-between font-heading text-sm md:text-base font-semibold text-foreground hover:bg-secondary/40 transition-colors"
                    >
                      <span>{item.question}</span>
                      <ChevronDown className={`w-5 h-5 text-accent transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pt-1 text-xs md:text-sm text-muted-foreground leading-relaxed font-light border-t border-border/10">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center space-y-4">
              <p className="text-xs text-muted-foreground font-light">Não encontrou a resposta para a sua dúvida?</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 px-6 bg-logo-gradient text-white text-xs font-semibold uppercase tracking-wider rounded-full items-center justify-center shadow-md hover:scale-[1.02]"
              >
                Falar com Dra. Samara
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contato" className="py-24 bg-transparent">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              {/* Info Column */}
              <div className="lg:col-span-5 space-y-8 text-left flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">Localização</span>
                  <h2 className="text-headline mt-2 mb-4">Clínica Dra. Skin</h2>
                  <div className="w-16 h-0.5 bg-primary/40" />
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-accent shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-semibold text-foreground">Endereço</h4>
                      <p className="text-xs text-muted-foreground font-light leading-relaxed mt-1">
                        Rua Dr. César, 1161, sala 1011<br />
                        Santana • São Paulo - SP<br />
                        CEP 02013-004
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-accent shrink-0">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-semibold text-foreground">Instagram</h4>
                      <a
                        href="https://instagram.com/draskinbrasil"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-accent hover:underline leading-relaxed mt-1 block"
                      >
                        @draskinbrasil
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-secondary/50 rounded-2xl border border-border/40">
                  <h4 className="font-heading text-xs font-bold text-foreground uppercase tracking-wider mb-2">Horário de atendimento</h4>
                  <p className="text-xs text-muted-foreground font-light">Segunda a Sexta: 09h às 19h<br />Sábados: 09h às 14h</p>
                  <p className="text-[10px] text-accent font-semibold mt-2">Atendimento exclusivo com hora marcada.</p>
                </div>
              </div>

              {/* Editorial Clinic Environment Gallery & Location */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                {/* Images Grid */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border/40 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.02),4px_4px_16px_rgba(0,0,0,0.04)]">
                    <img
                      src="/clinic_1.jpg"
                      alt="Espaço de atendimento da Clínica Dra. Skin em Santana, São Paulo"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                      width={200}
                      height={250}
                    />
                  </div>
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border/40 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.02),4px_4px_16px_rgba(0,0,0,0.04)]">
                    <img
                      src="/clinic_2.jpg"
                      alt="Sala de procedimentos estéticos da Clínica Dra. Skin"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                      width={200}
                      height={250}
                    />
                  </div>
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border/40 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.02),4px_4px_16px_rgba(0,0,0,0.04)]">
                    <img
                      src="/clinic_3.jpg"
                      alt="Ambiente interno da Clínica Dra. Skin, Santana SP"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                      width={200}
                      height={250}
                    />
                  </div>
                </div>

                {/* Location Box */}
                <div className="relative rounded-[24px] overflow-hidden border border-border/40 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.02),4px_4px_16px_rgba(0,0,0,0.04)] bg-white/40 backdrop-blur-sm p-6 text-center">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                    <div className="w-10 h-10 rounded-full bg-logo-gradient flex items-center justify-center text-white shrink-0 mt-1">
                      <MapPin className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-sm font-semibold text-foreground">Santana, São Paulo</h3>
                      <address className="not-italic text-xs text-muted-foreground font-light leading-relaxed mt-1">
                        Nossa clínica está no bairro de Santana, com fácil acesso de transporte público e estacionamento nas proximidades.
                      </address>
                      <a
                        href="https://maps.app.goo.gl/Ev9zhZhc1WYmpFBX9"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Ver localização da Clínica Dra. Skin no Google Maps"
                        className="mt-3 inline-flex h-9 px-5 bg-white border border-border text-foreground font-semibold rounded-full items-center justify-center text-[10px] uppercase tracking-wider transition-colors hover:bg-secondary"
                      >
                        Ver no Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
