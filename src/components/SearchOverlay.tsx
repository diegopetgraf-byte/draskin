import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Loader2 } from 'lucide-react';
import { useProducts } from '@/hooks/useProducts';
import footerLogo from '@/assets/logo.svg';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  filterByCollection?: string; // Optional: filter products by specific collection
}

export const SearchOverlay = ({ isOpen, onClose, filterByCollection }: SearchOverlayProps) => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  // Fetch products from local database
  // Default to grafica-estetica ordering (curated sitemap order)
  const collection = filterByCollection || 'grafica-estetica';
  const { products: fetchedProducts, isLoading, error } = useProducts(250, debouncedQuery || undefined, collection);

  // Products come pre-ordered from the API by collection mapping
  const products = fetchedProducts;

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Dispatch events for mobile cart visibility
  useEffect(() => {
    if (isOpen) {
      window.dispatchEvent(new Event('cart-open'));
    } else {
      window.dispatchEvent(new Event('cart-close'));
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleClose = () => {
    setQuery('');
    onClose();
  };

  const formatPrice = (amount: string) => {
    return parseFloat(amount).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-gradient-to-tl from-primary-light via-background to-secondary flex flex-col"
        >
          {/* Fixed Header */}
          <div className="flex-shrink-0 px-4 pt-4 pb-6 lg:pt-6 lg:pb-8">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 lg:top-6 lg:right-6 p-2.5 rounded-full bg-secondary transition-all hover:-translate-y-0.5 [box-shadow:var(--clay-shadow-sm)] z-10"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="flex justify-center mb-6 lg:mb-8 relative h-12 lg:h-16"
            >
              <img
                src={footerLogo.src}
                alt="Esthétique"
                className="h-full w-auto object-contain"
              />
            </motion.div>

            {/* Search Input */}
            <div className="max-w-2xl mx-auto">
              <div
                className="relative rounded-2xl bg-secondary [box-shadow:var(--clay-shadow)]"
              >
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar produtos..."
                  className="w-full h-12 lg:h-14 pl-12 pr-4 bg-transparent text-base lg:text-lg text-foreground placeholder:text-muted-foreground focus:outline-none rounded-2xl"
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-secondary/50 transition-colors"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                )}
              </div>
              {debouncedQuery && !isLoading && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-sm text-muted-foreground mt-3"
                >
                  {products.length} {products.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
                </motion.p>
              )}
            </div>
          </div>

          {/* Scrollable Content */}
          <div
            ref={gridRef}
            className="flex-1 overflow-y-auto px-4 py-6 lg:px-6 lg:py-8"
          >
            {/* Loading State */}
            {isLoading && (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="w-8 h-8 text-accent animate-spin" />
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">Erro ao buscar produtos. Tente novamente.</p>
              </div>
            )}

            {/* Empty State */}
            {!isLoading && !error && products.length === 0 && (
              <div className="text-center py-16">
                <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  {debouncedQuery ? 'Nenhum produto encontrado.' : 'Digite para buscar produtos.'}
                </p>
              </div>
            )}

            {!isLoading && !error && products.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {products.map((product, i) => {
                  const mainImage = product.node.images.edges[0]?.node?.url;
                  const price = parseFloat(product.node.priceRange.minVariantPrice.amount);

                  return (
                    <motion.div
                      key={product.node.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: Math.min(i * 0.03, 0.6) }}
                      className="h-full"
                    >
                      <Link
                        href={`/${product.node.primaryCollection || 'grafica-estetica'}/${product.node.handle}`}
                        onClick={handleClose}
                        className="product-card flex flex-col h-full group !bg-[#faf9f7]"
                      >
                        <div className="aspect-[4/3] overflow-hidden bg-secondary/10 relative">
                          {mainImage ? (
                            <Image
                              src={mainImage}
                              alt={product.node.title}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                              Sem imagem
                            </div>
                          )}
                        </div>

                        <div className="p-5 lg:p-6 flex-1 flex flex-col">
                          <h3 className="font-heading font-semibold text-foreground text-sm lg:text-base mb-1 line-clamp-2">
                            {product.node.title}
                          </h3>
                          <p className="text-[10px] lg:text-xs text-muted-foreground mb-2 line-clamp-2">
                            {product.node.description}
                          </p>
                          <div className="flex items-center justify-between mt-auto">
                            <div className="flex flex-col gap-0.5">
                              <span className="text-sm lg:text-base font-medium text-foreground">
                                A partir de {formatPrice(price.toString())}
                              </span>
                              <span className="text-[10px] lg:text-xs font-semibold text-pix">
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};
