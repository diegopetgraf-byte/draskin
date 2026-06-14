'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import GoogleReviewsCarousel from '@/components/GoogleReviewsCarousel';

const AboutPageContent = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <FloatingWhatsApp />

            <main className="flex-1">
                {/* Hero Section - Standardized with ServicePage style */}
                <section className="relative pt-24 pb-8 md:pt-32 md:pb-10 lg:pt-40 lg:pb-12 px-4 overflow-hidden">
                    {/* Background Decorative Gradient */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-logo-gradient opacity-[0.03] blur-[120px] pointer-events-none -z-10" />
                    <div className="absolute bottom-0 left-0 w-1/4 h-full bg-logo-gradient opacity-[0.02] blur-[100px] pointer-events-none -z-10" />

                    <div className="container mx-auto max-w-4xl">
                        {/* Hero Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="z-10"
                        >
                            <p className="text-[11px] font-semibold text-black uppercase tracking-wider mb-6">
                                Impressos com amor, desde 2013.
                            </p>
                            <h1 className="text-display text-foreground mb-8 text-left">
                                <span className="text-[0.75em] block mb-2">Design que encanta,</span>
                                <span className="text-logo-gradient italic">personalizado com carinho</span>
                            </h1>
                            <div>
                                <p className="text-base md:text-lg text-foreground leading-relaxed font-medium">
                                    Somos a Paper Design Group, empresa atuante nos ramos da estética avançada, saúde humana e animal, com os sites <span className="text-logo-gradient font-bold">Esthétique</span>, <a href="https://medlogos.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-accent border-b border-accent/20 transition-colors">Med Logos</a> e <a href="https://petgraf.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-accent border-b border-accent/20 transition-colors">petgraf</a>.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Main Content Section */}
                <section className="pt-0 pb-12 md:pb-20 px-4">
                    <div className="container mx-auto max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-10"
                        >
                            <div className="prose prose-slate max-w-none">
                                <p className="text-muted-foreground leading-relaxed">
                                    Fundada em 2013, nossa missão é transformar marcas em experiências visuais marcantes, com soluções criativas, funcionais e esteticamente sofisticadas.
                                </p>
                                <br />

                                <p className="text-muted-foreground leading-relaxed">
                                    Buscamos refletir com elegância os valores de profissionais exigentes, com a flexibilidade de personalização total e suporte especializado.
                                </p>
                                <br />

                                <p className="text-muted-foreground leading-relaxed">
                                    Todo material é desenvolvido com o acompanhamento de designers profissionais experientes, especializados em branding para a área médica.
                                </p>
                                <br />

                                <p className="text-muted-foreground leading-relaxed">
                                    Nossa plataforma digital foi pensada para ser simples, prática e eficiente: o profissional pode selecionar, personalizar e aprovar seus materiais com poucos cliques — sempre com o apoio de uma equipe dedicada e atenciosa.
                                </p>
                                <br />

                                <p className="text-muted-foreground leading-relaxed">
                                    Mais do que uma gráfica, somos um estúdio criativo focado em potencializar a imagem de marcas da saúde.
                                </p>
                                <br />

                                <p className="text-muted-foreground leading-relaxed">
                                    Unimos tecnologia, sensibilidade artística e compromisso com a excelência para entregar soluções gráficas à altura do seu nome.
                                </p>

                                <div className="mt-16 pt-12 border-t border-border">
                                    <h3 className="font-heading text-2xl md:text-3xl font-normal italic text-logo-gradient leading-tight">
                                        Na Esthétique, seu nome ganha forma, sua marca ganha força, e sua imagem conquista confiança.
                                    </h3>
                                </div>
                            </div>

                            {/* Final Signature Block */}
                            <div className="pt-12 flex flex-col items-start text-left border-t border-border mt-8">
                                <div className="flex items-center gap-5 md:gap-6">
                                    <img
                                        src="/products/logohambuguer.svg"
                                        alt="Diego Costa / Esthétique"
                                        className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-md object-contain"
                                    />
                                    <div className="flex flex-col gap-1">
                                        <p className="font-heading text-xl md:text-2xl font-normal text-black mb-1">Diego Costa</p>
                                        <p className="text-[11px] font-semibold text-black uppercase tracking-wider mb-0.5 mt-1">Publicitário • Diretor de Arte</p>
                                        <p className="text-sm text-muted-foreground font-medium">Fundador da Esthétique</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <GoogleReviewsCarousel />
            </main>

            <Footer />
        </div>
    );
};

export default AboutPageContent;
