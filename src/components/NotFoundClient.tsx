'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowRight, Loader2 } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SearchOverlay } from '@/components/SearchOverlay';
import { useProducts } from '@/hooks/useProducts';
import mascotSitting from '@/assets/mascot-sitting.webp';

const NotFoundClient = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsSearchOpen(true);
        }, 10);
        return () => clearTimeout(timer);
    }, []);

    // Fetch a few products to show below the 404 message
    const { products, isLoading } = useProducts(4);

    const formatPrice = (amount: string) => {
        return parseFloat(amount).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

            <main className="flex-1">
                {/* Hero / Message Section */}
                <section className="pt-32 pb-16 px-4">
                    <div className="container mx-auto">
                        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

                            {/* Left Side: Mascot (No widgets) */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="order-2 lg:order-1 flex justify-center"
                            >
                                <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px]">
                                    <img
                                        src={mascotSitting.src}
                                        alt="Esthétique Mascot"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </motion.div>

                            {/* Right Side: Text & Primary Action */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="order-1 lg:order-2 text-center lg:text-left space-y-8"
                            >
                                <div className="space-y-4">
                                    <motion.h1
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="text-[100px] md:text-[140px] font-heading font-medium text-logo-gradient leading-none tracking-tighter"
                                    >
                                        404
                                    </motion.h1>
                                    <p className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                                        A página que você está procurando parece ter tirado um dia de folga. Vamos te levar de volta para as melhores soluções.
                                    </p>
                                </div>

                                <div className="flex justify-center lg:justify-start">
                                    <Link
                                        href="/"
                                        className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-base bg-logo-gradient text-white transition-all hover:-translate-y-1 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.2),inset_-2px_-2px_4px_rgba(0,0,0,0.15),4px_4px_16px_rgba(0,0,0,0.15),-2px_-2px_8px_rgba(255,255,255,0.1)]"
                                    >
                                        <Home className="w-5 h-5" />
                                        Ir para o Início
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Products Section - Clean background like Catalogo pages */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-10">
                            <h3 className="text-xl md:text-2xl font-heading font-medium text-foreground">
                                Explore alguns de nossos <span className="text-logo-gradient italic">favoritos</span>
                            </h3>
                        </div>

                        {isLoading ? (
                            <div className="flex justify-center py-12">
                                <Loader2 className="w-8 h-8 animate-spin text-accent" />
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {products.map((product, i) => {
                                    const mainImage = product.node.images.edges[0]?.node?.url;
                                    const price = parseFloat(product.node.priceRange.minVariantPrice.amount);
                                    const collection = product.node.primaryCollection || 'grafica-estetica';

                                    return (
                                        <motion.div
                                            key={product.node.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <Link
                                                href={`/${collection}/${product.node.handle}`}
                                                className="product-card flex flex-col h-full group bg-white shadow-sm hover:shadow-md transition-shadow"
                                            >
                                                <div className="aspect-[4/3] overflow-hidden bg-secondary/10">
                                                    {mainImage ? (
                                                        <img
                                                            src={mainImage}
                                                            alt={product.node.title}
                                                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                                                            Sem imagem
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="p-5 flex-1 flex flex-col">
                                                    <h4 className="font-heading font-medium text-foreground text-sm mb-1 line-clamp-1">
                                                        {product.node.title.replace(/\s*\(2 Vias\)\s*/i, '')}
                                                    </h4>
                                                    <div className="mt-auto pt-4 flex items-center justify-between">
                                                        <div className="flex flex-col gap-0.5">
                                                            <span className="text-sm font-medium text-foreground">
                                                                {formatPrice(price.toString())}
                                                            </span>
                                                            <span className="text-[10px] font-semibold text-pix">
                                                                10% OFF no PIX
                                                            </span>
                                                        </div>
                                                        <div className="w-8 h-8 rounded-full bg-logo-gradient flex items-center justify-center text-white [box-shadow:inset_1px_1px_2px_rgba(255,255,255,0.8)]">
                                                            <ArrowRight className="w-4 h-4" />
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
            </main>

            <Footer />
        </div>
    );
};

export default NotFoundClient;
