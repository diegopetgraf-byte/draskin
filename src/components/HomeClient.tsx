"use client";

import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { TREATMENTS, Treatment } from '@/data/treatments';
import GoogleReviewsCarousel from '@/components/GoogleReviewsCarousel';
import GoogleHeroWidget from '@/components/GoogleHeroWidget';
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
  "harmonizacao-facial": "/card_facial_injectables.jpg",
  "toxina-botulinica": "/card_facial_injectables.jpg",
  "preenchimento-labial": "/card_face_profile.png",
  "skinbooster": "/card_face_profile.png",
  "profhilo": "/card_face_profile.png",
  "laser-melasma": "/card_face_profile.png",
  "laser-rejuvenescimento": "/card_face_profile.png",
  "tratamentos-capilares": "/card_face_profile.png",
  "bioestimuladores": "/card_silhouettes.jpg",
  "criolipolise": "/card_body_planning.jpg",
};

export function HomeClient() {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const whatsappUrl = "https://wa.me/5511999263636?text=Ol%C3%A1%2C%20Dra.%20Samara!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20Dra.%20Samara.";

  // Accessibility: close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedTreatment(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Listen to hash changes for deep links to treatments
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#tratamento-')) {
        const treatmentId = hash.replace('#tratamento-', '');
        const found = TREATMENTS.find(t => t.id === treatmentId);
        if (found) {
          setSelectedTreatment(found);
          const element = document.getElementById('tratamentos');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedTreatment) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedTreatment]);

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
      answer: "Absolutamente. Todos os procedimentos são realizados pela Dra. Samara Rocha, Biomédica Esteta qualificada, utilizando produtos de marcas renomadas mundialmente e seguindo rígidos protocolos de segurança e higiene sanitária."
    },
    {
      question: "Qual tratamento é ideal para mim?",
      answer: "O tratamento ideal é determinado na sua consulta de avaliação, onde avaliamos as particularidades da sua pele e queixas específicas para criar um protocolo sob medida para você."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-transparent selection:bg-primary/20">
      <Header />
      {!selectedTreatment && <FloatingWhatsApp />}

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
                  Realce a sua beleza natural com <span className="text-logo-gradient italic">elegância e segurança</span>
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
                      src="/dra_skin_hero_real.jpg"
                      alt="Dra. Samara Rocha na Clínica Dra. Skin"
                      className="w-full h-full object-cover object-[center_15%]"
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
                        <p className="font-semibold text-xs text-foreground leading-tight">Beleza Natural</p>
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
                        <p className="text-[9px] text-muted-foreground uppercase tracking-wider mt-0.5">CRBM 67943 • Biomédica Esteta</p>
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
                { title: "Cursos Internacionais", desc: "Londres e Miami" },
                { title: "Especializações Avançadas", desc: "Injetáveis e Tecnologias" },
                { title: "Atendimento Personalizado", desc: "Exclusivo para você" },
                { title: "Tecnologias Modernas", desc: "Equipamentos de ponta" },
                { title: "Resultados Naturais", desc: "Sua beleza sem exageros" }
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
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">Harmonia Integrada</span>
                <h2 className="text-headline mt-2">Tratamentos Faciais & Corporais</h2>
                <div className="w-16 h-0.5 bg-primary/40" />
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Buscamos a harmonia e o rejuvenescimento natural através de protocolos combinados e personalizados. Nossos tratamentos são divididos para cuidar de cada detalhe da sua beleza:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="p-5 bg-secondary/30 rounded-2xl border border-border/40 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.02),4px_4px_16px_rgba(0,0,0,0.04)]">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-1">Área Facial</span>
                    <p className="text-[11px] text-muted-foreground font-light leading-relaxed">
                      Procedimentos para suavizar linhas de expressão, restaurar volume, redefinir contornos e devolver o viço e hidratação profunda da pele.
                    </p>
                  </div>
                  <div className="p-5 bg-secondary/30 rounded-2xl border border-border/40 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.02),4px_4px_16px_rgba(0,0,0,0.04)]">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-1">Área Corporal</span>
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
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">Procedimentos Exclusivos</span>
              <h2 className="text-headline mt-2 mb-4">Tratamentos Mais Procurados</h2>
              <div className="w-16 h-0.5 bg-primary/40 mx-auto" />
              <p className="text-muted-foreground mt-4 font-light">
                Clique nos tratamentos abaixo para conhecer detalhes, tempo de recuperação e benefícios de cada procedimento.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TREATMENTS.map((treatment) => (
                <div
                  key={treatment.id}
                  onClick={() => setSelectedTreatment(treatment)}
                  className="group cursor-pointer bg-white rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 border border-border/40 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.02),4px_4px_16px_rgba(0,0,0,0.04)] hover:[box-shadow:inset_3px_3px_6px_rgba(255,255,255,0.95),inset_-3px_-3px_6px_rgba(0,0,0,0.04),8px_8px_24px_rgba(0,0,0,0.08)] flex flex-col justify-between min-h-[260px] text-left"
                >
                  <div>
                    {/* Visual luxury sketch image */}
                    <div className="w-full h-44 rounded-2xl overflow-hidden mb-6 relative bg-white border border-border/30 flex items-center justify-center transition-all duration-300 group-hover:scale-[1.02]">
                      <img
                        src={TREATMENT_IMAGES[treatment.id] || "/card_face_profile.png"}
                        alt={treatment.name}
                        className="w-full h-full object-cover mix-blend-multiply"
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TREATMENT MODALS */}
        <AnimatePresence>
          {selectedTreatment && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedTreatment(null)}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="relative bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl z-10 max-h-[85vh] sm:max-h-[90vh] flex flex-col"
              >
                {/* Header background pattern */}
                <div className={`p-6 md:p-8 bg-gradient-to-br ${selectedTreatment.imageColor} relative shrink-0`}>
                  <button
                    onClick={() => setSelectedTreatment(null)}
                    className="absolute top-4 right-4 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5 text-foreground" />
                  </button>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-accent bg-white/80 px-3 py-1 rounded-full">Procedimento Estético</span>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-4">{selectedTreatment.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1 font-light leading-relaxed">{selectedTreatment.subtitle}</p>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {selectedTreatment.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-secondary p-4 rounded-2xl flex items-center gap-3">
                      <Clock className="w-5 h-5 text-accent shrink-0" />
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Duração aproximada</p>
                        <p className="text-xs font-semibold text-foreground">{selectedTreatment.duration}</p>
                      </div>
                    </div>
                    <div className="bg-secondary p-4 rounded-2xl flex items-center gap-3">
                      <Activity className="w-5 h-5 text-accent shrink-0" />
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Tempo de recuperação</p>
                        <p className="text-xs font-semibold text-foreground">{selectedTreatment.recovery}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-heading text-sm font-semibold text-foreground flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent" />
                      Benefícios Principais
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                      {selectedTreatment.benefits}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-heading text-sm font-semibold text-foreground flex items-center gap-2">
                      <User className="w-4 h-4 text-accent" />
                      Indicado Para
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                      {selectedTreatment.idealCandidates}
                    </p>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-4 sm:p-6 border-t border-border/60 bg-secondary/30 flex justify-center sm:justify-end shrink-0">
                  <a
                    href={`${whatsappUrl}&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20o%20tratamento%20de%20${encodeURIComponent(selectedTreatment.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 px-6 bg-logo-gradient text-white text-xs font-semibold rounded-full flex items-center justify-center gap-2 shadow-sm transition-all hover:-translate-y-0.5"
                  >
                    <span>Agendar Avaliação</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* DRA. SAMARA SECTION (AUTHORITY) */}
        <section id="sobre" className="py-24 bg-secondary/30 relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Side: Timeline / Credentials */}
              <div className="lg:col-span-7 space-y-8 text-left">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">Dra. Samara Rocha</span>
                  <h2 className="text-headline mt-2 mb-4">Experiência e Formação Internacional</h2>
                  <div className="w-16 h-0.5 bg-primary/40" />
                </div>

                <div className="relative pl-6 border-l-2 border-primary/20 space-y-8">
                  {[
                    {
                      period: "Formação Acadêmica",
                      title: "Biomedicina Estética de Alta Performance",
                      desc: "Graduada em Biomedicina Estética e Tecnóloga em Estética e Cosmética pela Universidade Nove de Julho, aliando o rigor científico à prática da cosmetologia."
                    },
                    {
                      period: "Especialização Avançada",
                      title: "Expert em Procedimentos Injetáveis",
                      desc: "Pós-graduada em Biomedicina Estética pela Faculdade Inaci (Finaci), com formação focada em procedimentos injetáveis avançados e tecnologias de alta performance."
                    },
                    {
                      period: "Certificações Internacionais",
                      title: "Prática em Polos Globais da Estética",
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
                  {["Bioestimuladores Faciais", "Bio Remodeladores", "Toxina Botulínica", "Preenchimento Facial"].map((tag, idx) => (
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

        {/* TESTIMONIALS SECTION */}
        <div id="depoimentos">
          <GoogleReviewsCarousel />
        </div>

        {/* FAQ SECTION */}
        <section id="faq" className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <div className="mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">Dúvidas Frequentes</span>
              <h2 className="text-headline mt-2 mb-4">Perguntas Frequentes</h2>
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
                        Rua Dr. César, 1161 — Sala 1011<br />
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
                  <h4 className="font-heading text-xs font-bold text-foreground uppercase tracking-wider mb-2">Horário de Atendimento</h4>
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
                      alt="Consultório Dra. Skin"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border/40 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.02),4px_4px_16px_rgba(0,0,0,0.04)]">
                    <img
                      src="/clinic_2.jpg"
                      alt="Atendimento Dra. Skin"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border/40 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.02),4px_4px_16px_rgba(0,0,0,0.04)]">
                    <img
                      src="/clinic_3.jpg"
                      alt="Sala de Espera Dra. Skin"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Location Box */}
                <div className="relative rounded-[24px] overflow-hidden border border-border/40 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.02),4px_4px_16px_rgba(0,0,0,0.04)] bg-white/40 backdrop-blur-sm p-6 text-center">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                    <div className="w-10 h-10 rounded-full bg-logo-gradient flex items-center justify-center text-white shrink-0 mt-1">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-sm font-semibold text-foreground">Santana, São Paulo</h3>
                      <p className="text-xs text-muted-foreground font-light leading-relaxed mt-1">
                        Nossa clínica fica estrategicamente localizada no bairro de Santana, próxima a vias principais e com fácil acesso de transporte.
                      </p>
                      <a
                        href="https://maps.google.com/?q=Rua+Dr.+César,+1161,+Santana,+São+Paulo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex h-9 px-5 bg-white border border-border text-foreground font-semibold rounded-full items-center justify-center text-[10px] uppercase tracking-wider transition-colors hover:bg-secondary"
                      >
                        Visualizar no Google Maps
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
