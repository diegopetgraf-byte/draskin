'use client';
import { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import { QrCode, CreditCard, ChevronRight, X, ShoppingCart } from 'lucide-react';
import { PIX_DISCOUNT_RATE, calculateInstallment } from '@/lib/pricingParams';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import brasilFlag from '@/assets/brasil.svg';

// Pricing card with 12x installments popover + close button
interface PricingCardProps {
  price: number;
  quantity: number;
  onAddToCartWithInstallment?: (installments: number) => void;
}

const formatPrice = (price: number) => {
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
};

export const PricingCard = ({ price, quantity, onAddToCartWithInstallment }: PricingCardProps) => {
  const pixPrice = price * (1 - PIX_DISCOUNT_RATE);

  const [open, setOpen] = useState(false);

  // Animated price counter
  const [displayPrice, setDisplayPrice] = useState(pixPrice);

  const springPrice = useSpring(pixPrice, {
    stiffness: 100,
    damping: 20,
  });

  useEffect(() => {
    springPrice.set(pixPrice);
  }, [pixPrice, springPrice]);

  useEffect(() => {
    const unsubscribe = springPrice.on('change', (v) => {
      setDisplayPrice(v);
    });
    return unsubscribe;
  }, [springPrice]);

  return (
    <div
      className="rounded-2xl md:rounded-3xl bg-secondary overflow-hidden"
      style={{ boxShadow: 'var(--clay-shadow)' }}
    >
      {/* Two-column grid with vertical divider */}
      <div className="grid grid-cols-2 divide-x divide-border">
        {/* LEFT: PIX */}
        <div className="p-4 md:p-5 flex flex-col gap-2 relative">
          {/* Label row */}
          <div className="flex items-center gap-1.5">
            <div
              className="p-1.5 rounded-lg bg-pix/10"
              style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.5), inset -1px -1px 2px rgba(0,0,0,0.03)' }}
            >
              <QrCode className="w-3.5 h-3.5 text-pix" />
            </div>
            <span className="text-[11px] font-semibold text-pix uppercase tracking-wide">PIX 10% OFF</span>
          </div>

          {/* Price */}
          <div className="flex flex-col gap-0.5">
            <motion.span
              className="text-xl md:text-2xl font-heading text-foreground"
              key={displayPrice}
            >
              {formatPrice(displayPrice)}
            </motion.span>
            <span className="text-[11px] text-pix font-medium">
              Economia de {formatPrice(price * PIX_DISCOUNT_RATE)}
            </span>
          </div>

          {/* PIX cart button — only if onAddToCartWithInstallment is provided */}
          {onAddToCartWithInstallment && (
            <button
              onClick={() => onAddToCartWithInstallment(1)}
              className="absolute bottom-3 right-3 p-1.5 rounded-lg bg-pix/10 text-pix hover:bg-pix/20 hover:scale-110 active:scale-95 transition-all"
              style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.5), inset -1px -1px 2px rgba(0,0,0,0.03)' }}
              aria-label="Adicionar ao carrinho com desconto PIX"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* RIGHT: Card — entire right column is the Popover trigger */}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button className="p-4 md:p-5 flex flex-col gap-2 text-left w-full group hover:bg-secondary/60 transition-colors outline-none">
              {/* Label row */}
              <div className="flex items-center gap-1.5">
                <div
                  className="p-1.5 rounded-lg bg-logo-gradient flex items-center justify-center"
                  style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.3), inset -1px -1px 2px rgba(0,0,0,0.1)' }}
                >
                  <CreditCard className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-[11px] font-semibold text-foreground/70 uppercase tracking-wide">Cartão</span>
              </div>

              {/* Full price + hint */}
              <div className="flex flex-col gap-0.5">
                <span className="text-xl md:text-2xl font-heading text-foreground">{formatPrice(price)}</span>
                <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                  <span>calcular parcelamento</span>
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </button>
          </PopoverTrigger>
          <PopoverContent
            className="w-80 p-0 bg-secondary rounded-2xl overflow-hidden border-none"
            sideOffset={10}
            style={{ boxShadow: 'var(--clay-shadow)' }}
          >
            {/* Header with claymorphic close button */}
            <div className="bg-primary/5 p-4 border-b border-accent/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-accent" />
                <h4 className="font-semibold text-foreground">Opções de parcelamento</h4>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-xl bg-background transition-all hover:-translate-y-0.5 [box-shadow:inset_1px_1px_2px_rgba(255,255,255,0.9),inset_-1px_-1px_2px_rgba(0,0,0,0.04),2px_2px_6px_rgba(0,0,0,0.06),-1px_-1px_4px_rgba(255,255,255,0.8)] hover:[box-shadow:inset_2px_2px_3px_rgba(255,255,255,0.95),inset_-2px_-2px_3px_rgba(0,0,0,0.05),4px_4px_10px_rgba(0,0,0,0.08),-2px_-2px_6px_rgba(255,255,255,0.9)]"
                aria-label="Fechar"
              >
                <X className="w-3.5 h-3.5 text-muted-foreground" />
              </button>
            </div>
            <p className="text-xs text-muted-foreground px-4 py-2 border-b border-accent/5">Frete a calcular</p>
            <ScrollArea className="h-[300px]">
              <div className="p-2 space-y-1">
                {Array.from({ length: 12 }, (_, i) => i + 1).map((installment) => {
                  const { value, total } = calculateInstallment(price, installment);
                  const isInterestFree = installment === 1;

                  return (
                    <div
                      key={installment}
                      onClick={() => {
                        onAddToCartWithInstallment?.(installment);
                        setOpen(false);
                      }}
                      className={`flex items-center justify-between p-3 rounded-xl transition-colors cursor-pointer hover:bg-secondary/60 active:scale-[0.98] ${installment === 12 ? 'bg-secondary/30' : ''} ${onAddToCartWithInstallment ? 'group' : ''}`}
                    >
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">
                          {installment}x de {formatPrice(value)}
                        </span>
                        {!isInterestFree && (
                          <span className="text-[10px] text-muted-foreground">
                            Total: {formatPrice(total)}
                          </span>
                        )}
                      </div>
                      {/* Blue circle cart badge */}
                      <div
                        className="p-1.5 rounded-lg bg-blue-50 text-blue-500"
                        style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.7), inset -1px -1px 2px rgba(0,0,0,0.04)' }}
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollArea>
          </PopoverContent>
        </Popover>
      </div>

      {/* Bottom strip */}
      <div className="px-4 md:px-5 py-2.5 border-t border-border flex items-center gap-2">
        <img src={brasilFlag.src} alt="BR" className="w-4 h-4 flex-shrink-0" />
        <span className="text-xs text-muted-foreground font-medium">Enviamos para todo o Brasil</span>
        <span className="text-border">·</span>
        <span className="text-xs text-blue-600 font-medium">Frete a calcular</span>
      </div>
    </div>
  );
};
