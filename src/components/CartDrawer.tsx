import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';
import { X, Trash2, ShoppingBag, Gift, Truck, Loader2, CheckCircle2, FileText, Image as ImageIcon, Plus, Minus, ArrowRight, ArrowLeftRight, CreditCard, QrCode, ExternalLink, Upload, ChevronLeft, ScrollText, ShoppingCart } from 'lucide-react';
import brasilFlag from '@/assets/brasil.svg';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLogoUpload } from '@/hooks/useLogoUpload';
import { calculateInstallment } from '@/lib/pricingParams';
import { ShippingForm } from '@/components/ShippingForm';

// WhatsApp number for orders
const WHATSAPP_NUMBER = '5511943881210';


interface CartDrawerProps {
  onContinueShopping?: () => void;
}

export const CartDrawer = ({ onContinueShopping }: CartDrawerProps) => {
  const {
    items,
    isOpen,
    isLoading,
    closeCart,
    removeItem,
    updateItemPersonalization,
    _hasHydrated,
    selectedInstallment,
    setSelectedInstallment,
    shippingData,
    updateShippingField,
  } = useCartStore();

  // Dispatch events for mobile cart visibility
  useEffect(() => {
    if (isOpen) {
      window.dispatchEvent(new Event('cart-open'));
    } else {
      window.dispatchEvent(new Event('cart-close'));
    }
  }, [isOpen]);

  // Local state for editing personalization text
  const [editingItemId, setEditingItemId] = useState<string | null>(null);

  // Logo upload hook
  const { uploadLogo, deleteLogo, isUploading } = useLogoUpload();

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>, lineId: string, productHandle: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      toast.error('Arquivo muito grande. Máximo 10MB.');
      return;
    }

    const result = await uploadLogo(file);
    if (result.success && result.url) {
      updateItemPersonalization(lineId, { logoUrl: result.url });
      toast.success('Logo atualizado com sucesso!');
    } else {
      toast.error(result.error || 'Erro ao fazer upload do logo.');
    }
  };

  const handleDeleteLogo = async (lineId: string, url: string) => {
    // Delete from storage (optional, maybe we just unlink it)
    // await deleteLogo(url); 
    // Actually, good to keep it or delete it. Let's delete it to save space.
    await deleteLogo(url);
    updateItemPersonalization(lineId, { logoUrl: null });
    toast.success('Logo removido.');
  };
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const [showInstallmentPicker, setShowInstallmentPicker] = useState(false);


  // Calculate totals from items

  const PIX_DISCOUNT = 0.10; // 10%

  const subtotal = items.reduce(
    (sum, item) => sum + parseFloat(item.price.amount) * item.quantity,
    0
  );

  const pixDiscount = subtotal * PIX_DISCOUNT;
  const totalWithPix = subtotal * (1 - PIX_DISCOUNT);

  // Total for display (Card) - Now just subtotal since shipping is calculated later/separately
  const totalWithShipping = subtotal;

  // Installment display for cart (simple view, detailed on product page)
  const installmentValue = subtotal / 3; // Keep simple 3x display or update? User didn't specify Cart installment logic, just Product Page. 
  // But let's act safe and maybe hide or keep generic.
  // User asked for "Até 12 parcelas" logic on product page.
  // For cart, let's keep it simple or remove if it's confusing.
  // Let's keep existing structure but update logic if needed.

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };



  // Generate WhatsApp order message
  const generateOrderMessage = (paymentMethod: 'pix' | 'card') => {
    let message = '*Pedido Esthétique:*\nhttps://esthetique.com.br/\n\n';

    // Products loop
    items.forEach((item, index) => {
      const lineTotal = parseFloat(item.price.amount) * item.quantity;
      message += `*#${index + 1}. ${item.product.node.title}*\n`;

      // Variant (conditional)
      if (item.variantTitle !== 'Default Title') {
        message += `   • Variante: ${item.selectedOptions.map(o => o.value).join(' • ')}\n`;
      }

      // Qty and price
      message += `   • Qtd: ${item.quantity}x | ${formatPrice(lineTotal)}\n`;

      // Personalization data (conditional)
      if (item.personalization?.text) {
        message += `   • Dados: ${item.personalization.text}\n`;
      }

      // Logo (conditional)
      if (item.personalization?.logoUrl) {
        message += `   • Logo: ${item.personalization.logoUrl}\n`;
      }

      message += '\n';
    });

    // Financial summary
    message += '\n\n.........................\n\n\n';
    message += `💰 Subtotal: ${formatPrice(subtotal)}\n`;

    message += `📦 Frete: A calcular\n`;

    if (paymentMethod === 'pix') {
      message += `✨ Desconto PIX (10%): -${formatPrice(pixDiscount)}\n`;
      message += `💚 Total no PIX: ${formatPrice(totalWithPix)}\n`;
      message += `📦 Frete a calcular\n`;
    } else {
      message += `💳 Subtotal no Cartão: ${formatPrice(subtotal)}\n`;
      message += `📦 Frete a calcular\n`;
    }

    // Shipping data (if user filled the form)
    if (shippingData.nome) {
      message += '\n\n.........................\n\n\n';
      message += '📦 *Dados de envio:*\n';
      message += `   • Nome: ${shippingData.nome || 'Cliente'}\n`;
      if (shippingData.documento) message += `   • CPF/CNPJ: ${shippingData.documento}\n`;

      let endereco = `${shippingData.rua}, ${shippingData.numero}`;
      if (shippingData.complemento) endereco += ` - ${shippingData.complemento}`;
      message += `   • Endereço: ${endereco}\n`;

      message += `   • Bairro: ${shippingData.bairro} | Cidade: ${shippingData.cidade}/${shippingData.uf}\n`;
      message += `   • CEP: ${shippingData.cep}\n`;
      if (shippingData.email) message += `   • Email: ${shippingData.email}\n`;
    }



    // Payment method
    message += '\n\nForma de pagamento escolhida:\n';
    message += paymentMethod === 'pix' ? '💚 Pix' : '💳 Cartão de crédito';

    // Cashback information (5% of total paid)
    // "5% de cashback em seu próximo pedido. No calculated ammounts"
    message += '\n\n\n.........................\n\n\n';
    message += '*Cashback gerado para o seu próximo pedido:*\n';
    message += `5% de cashback em seu próximo pedido\n\n`;
    message += '_Seus créditos nunca expiram no programa de fidelidade Esthétique!_\n\n';



    return message;
  };

  const createOrder = async (paymentMethod: 'pix' | 'card') => {
    // TODO: Re-enable Supabase order creation on launch
    // For now, orders proceed directly via WhatsApp
    return null;
  };

  const handleCardCheckout = async (installments: number) => {
    const order = await createOrder('card');
    const { value, total } = calculateInstallment(subtotal, installments);

    let message = generateOrderMessage('card');
    // Inject installment info into card section
    const installmentLine = installments === 1
      ? `💳 Total no Cartão (à vista): ${formatPrice(subtotal)}\n`
      : `💳 Cartão de crédito — ${installments}x de ${formatPrice(value)} (total: ${formatPrice(total)})\n`;
    message = message.replace(`💳 Subtotal no Cartão: ${formatPrice(subtotal)}\n`, installmentLine);

    if (order?.order_number) {
      message = `*Pedido Esthétique: #${order.order_number}*\n\n` + message.replace('*Pedido Esthétique:*\n\n', '');
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
    window.location.href = whatsappUrl;
    setShowInstallmentPicker(false);
    closeCart();
  };

  const handlePixCheckout = async () => {
    const order = await createOrder('pix');

    let message = generateOrderMessage('pix');
    if (order?.order_number) {
      message = `*Pedido Esthétique: #${order.order_number}*\n\n` + message.replace('*Pedido Esthétique:*\n\n', '');
    }

    const encodedMessage = encodeURIComponent(message);

    // Use WhatsApp API which automatically opens the app on mobile or web on desktop
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;

    window.location.href = whatsappUrl;

    // clearCart();
    closeCart();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-md z-[60]"
          />

          {/* Drawer — supports swipe-right to close */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={{ left: 0, right: 0.4 }}
            dragMomentum={false}
            onDragEnd={(_, info) => {
              if (info.offset.x > 80 || info.velocity.x > 400) {
                closeCart();
              }
            }}
            className="fixed right-0 top-0 h-full w-full max-w-md z-[60] flex flex-col p-3 md:p-4 cursor-grab active:cursor-grabbing touch-none select-none"
          >
            {/* Clay container */}
            <div className="flex-1 flex flex-col bg-[#faf4f0] rounded-3xl overflow-hidden [box-shadow:inset_3px_3px_6px_rgba(255,255,255,0.95),inset_-3px_-3px_6px_rgba(0,0,0,0.06),8px_8px_32px_rgba(0,0,0,0.15),-4px_-4px_16px_rgba(255,255,255,0.9)]">

              {/* Header */}
              <div className="flex items-center justify-between px-7 py-4 md:px-10 md:py-6">
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground">Seu Carrinho</h2>
                  <p className="text-xs text-muted-foreground">
                    {items.length === 0 ? 'Vazio' : `${items.length} ${items.length === 1 ? 'item' : 'itens'}`}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {/* Link to full cart page */}
                  <Link
                    href="/carrinho"
                    onClick={closeCart}
                    title="Ver resumo"
                    className="group relative w-9 h-9 rounded-full bg-white flex items-center justify-center text-foreground/80 hover:text-foreground transition-all border border-black/5 shadow-sm"
                    aria-label="Ver resumo do carrinho"
                  >
                    <ScrollText className="w-4 h-4" />
                    <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-foreground text-background text-[10px] font-medium px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-10">
                      Ver resumo
                    </span>
                  </Link>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={closeCart}
                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm text-foreground/80 hover:text-foreground hover:bg-gray-50 transition-all border border-black/5"
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Divider */}
              <div className="mx-5 md:mx-6 h-1 rounded-full bg-secondary/50 [box-shadow:inset_1px_1px_2px_rgba(0,0,0,0.05),inset_-1px_-1px_2px_rgba(255,255,255,0.8)]" />

              {/* Client Info Card - Interactive - Blue Theme */}







              {/* Items */}
              <div className="flex-1 overflow-y-auto p-4 md:p-6">
                {!_hasHydrated ? (
                  /* Still reading from localStorage — don't flash "empty cart" */
                  <div className="flex items-center justify-center h-full">
                    <Loader2 className="w-6 h-6 text-muted-foreground/40 animate-spin" />
                  </div>
                ) : items.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center h-full text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: 'spring' }}
                      className="w-24 h-24 bg-secondary/50 rounded-3xl flex items-center justify-center mb-6 [box-shadow:inset_3px_3px_6px_rgba(255,255,255,0.8),inset_-3px_-3px_6px_rgba(0,0,0,0.04),4px_4px_12px_rgba(0,0,0,0.06)]"
                    >
                      <ShoppingBag className="w-12 h-12 text-muted-foreground/50" />
                    </motion.div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                      Carrinho vazio
                    </h3>
                    <p className="text-muted-foreground text-sm max-w-[200px] mb-4">
                      Explore nossos produtos e adicione itens ao seu carrinho
                    </p>

                    <button
                      onClick={() => { closeCart(); onContinueShopping?.(); }}
                      className="px-5 py-2 rounded-full bg-logo-gradient text-white text-sm font-semibold [box-shadow:4px_4px_12px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 transition-transform duration-200 active:scale-95"
                    >
                      Ver produtos
                    </button>
                    {/* Rewards hint */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-8 p-4 rounded-2xl bg-primary/5 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.8),inset_-2px_-2px_4px_rgba(0,0,0,0.03)]"
                    >
                      <div className="flex flex-col items-center gap-3 text-center">
                        <div className="w-12 h-12 bg-logo-gradient rounded-full flex items-center justify-center shadow-sm">
                          <Gift className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">Programa de fidelidade</p>
                          <p className="text-xs text-muted-foreground">5% de cashback em seu próximo pedido.<br />Seus créditos nunca expiram!</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ) : (
                  <div className="space-y-3 md:space-y-4">
                    {/* Shipping Data Section - Always first */}
                    <div className="p-3 md:p-4 rounded-2xl bg-blue-50 border border-blue-200 [box-shadow:inset_3px_3px_6px_rgba(255,255,255,0.8),inset_-3px_-3px_6px_rgba(0,0,0,0.04),6px_6px_20px_rgba(0,0,0,0.08),-3px_-3px_10px_rgba(255,255,255,0.9)]">
                      <button
                        onClick={() => setIsShippingOpen(!isShippingOpen)}
                        className="w-full flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <img src={brasilFlag.src} alt="BR" className="w-4 h-4" />
                          <span className="text-sm font-bold text-foreground">
                            {isShippingOpen ? 'Enviamos para todo o Brasil' : 'Adicionar dados de envio'}
                          </span>
                        </div>
                        {isShippingOpen
                          ? <Minus className="w-4 h-4 text-foreground" />
                          : <Plus className="w-4 h-4 text-foreground" />}
                      </button>

                      <AnimatePresence>
                        {isShippingOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-3 pt-3 border-t border-blue-200">
                              <ShippingForm
                                inputClassName="h-8 md:h-9 text-base md:text-sm bg-white border-blue-200 focus-visible:ring-0 outline-none"
                                dividerClassName="border-blue-200"
                              />
                              {/* Save Button */}
                              <div className="pt-2 flex justify-end">
                                <button
                                  onClick={() => setIsShippingOpen(false)}
                                  className="text-xs font-bold text-blue-600"
                                >
                                  SALVAR
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    {items.map((item, index) => {
                      const productImage = item.product.node.images?.edges?.[0]?.node?.url;
                      const productTitle = item.product.node.title;
                      const itemPrice = parseFloat(item.price.amount) * item.quantity;
                      const hasText = item.personalization?.text && item.personalization.text.trim().length > 0;
                      const hasLogo = item.personalization?.logoUrl;

                      return (
                        <motion.div
                          key={item.lineId}
                          layout
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ delay: index * 0.05 }}
                          className="p-3 md:p-4 rounded-2xl bg-white [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.03),3px_3px_10px_rgba(0,0,0,0.06),-1px_-1px_4px_rgba(255,255,255,0.8)]"
                        >
                          <div className="flex gap-3 md:gap-4">
                            {/* Product image */}
                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden bg-secondary flex-shrink-0 [box-shadow:inset_1px_1px_3px_rgba(0,0,0,0.05),2px_2px_6px_rgba(0,0,0,0.06)]">
                              {productImage && (
                                <img
                                  src={productImage}
                                  alt={productTitle}
                                  className="w-full h-full object-cover"
                                />
                              )}
                            </div>

                            {/* Product info */}
                            <div className="flex-1 min-w-0">
                              <h3 className="font-medium text-sm line-clamp-1 text-foreground mb-0.5">
                                {item.productPath ? (
                                  <Link
                                    href={item.productPath}
                                    onClick={closeCart}
                                    className="hover:underline"
                                  >
                                    {productTitle}
                                  </Link>
                                ) : (
                                  productTitle
                                )}
                              </h3>
                              {item.variantTitle !== 'Default Title' && (
                                <p className="text-xs text-muted-foreground line-clamp-1 mb-1">
                                  {item.selectedOptions.map(o => o.value).join(' • ')}
                                </p>
                              )}
                              <p className="text-black font-bold">
                                {formatPrice(itemPrice)}
                              </p>
                            </div>

                            {/* Remove button */}
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => removeItem(item.lineId)}
                              disabled={isLoading}
                              className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center transition-all hover:bg-destructive/20 disabled:opacity-50 self-start [box-shadow:inset_1px_1px_2px_rgba(255,255,255,0.5),inset_-1px_-1px_2px_rgba(0,0,0,0.05)]"
                            >
                              <Trash2 className="w-3.5 h-3.5 text-destructive" />
                            </motion.button>
                          </div>

                          {/* Personalization Info inside the item card */}
                          {(hasText || hasLogo || (!hasText && !hasLogo) || editingItemId === item.lineId) && (
                            <div className="mt-3 pt-3 border-t border-secondary-foreground/10 space-y-2">
                              {/* Text Edit Mode */}
                              {(hasText || editingItemId === item.lineId) && (
                                editingItemId === item.lineId ? (
                                  <div className="space-y-2">
                                    <textarea
                                      value={item.personalization?.text || ''}
                                      onChange={(e) => updateItemPersonalization(item.lineId, { text: e.target.value })}
                                      className="w-full h-20 p-2 text-base rounded-lg bg-white border border-black/5 focus:border-black/10 outline-none focus:outline-none ring-0 focus:ring-0 resize-none shadow-sm placeholder:text-muted-foreground/50"
                                      autoFocus
                                      onBlur={() => setEditingItemId(null)}
                                      autoComplete="off"
                                    />
                                    <div className="flex justify-end">
                                      <button
                                        onMouseDown={(e) => {
                                          e.preventDefault();
                                          setEditingItemId(null);
                                        }}
                                        className="text-[10px] font-bold text-foreground"
                                      >
                                        CONCLUIR
                                      </button>
                                    </div>
                                  </div>
                                ) : (
                                  hasText && (
                                    <div className="flex items-start gap-2 group">
                                      <FileText className="w-3 h-3 text-accent mt-0.5 shrink-0" />
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between">
                                          <p className="text-xs text-muted-foreground line-clamp-2">
                                            {item.personalization?.text}
                                          </p>
                                          <button
                                            onClick={() => setEditingItemId(item.lineId)}
                                            className="ml-2 text-[10px] font-bold text-foreground"
                                          >
                                            EDITAR
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  )
                                )
                              )}

                              {/* Logo Personalization - Updated with Edit/Delete */}
                              <div className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-2 overflow-hidden flex-1">
                                  {hasLogo ? (
                                    <>
                                      <ImageIcon className="w-3 h-3 text-accent shrink-0" />
                                      <a
                                        href={item.personalization?.logoUrl || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-foreground hover:underline flex items-center gap-1 truncate"
                                      >
                                        Logo enviado
                                        <ExternalLink className="w-2.5 h-2.5" />
                                      </a>
                                      <button
                                        onClick={() => item.personalization?.logoUrl && handleDeleteLogo(item.lineId, item.personalization.logoUrl)}
                                        disabled={isUploading}
                                        className="p-1 rounded-md hover:bg-destructive/10 text-destructive transition-colors shrink-0"
                                        title="Remover logo"
                                      >
                                        <Trash2 className="w-3 h-3" />
                                      </button>
                                    </>
                                  ) : (
                                    <>
                                      <input
                                        type="file"
                                        id={`upload-${item.lineId}`}
                                        className="hidden"
                                        accept="image/*,.pdf,.ai,.cdr"
                                        onChange={(e) => handleFileSelect(e, item.lineId, item.product.node.handle)}
                                      />
                                      <label
                                        htmlFor={`upload-${item.lineId}`}
                                        className="flex items-center gap-2 text-xs text-foreground cursor-pointer hover:underline"
                                      >
                                        <div className="w-3 h-3 flex items-center justify-center">
                                          {isUploading ? <Loader2 className="w-2.5 h-2.5 animate-spin" /> : <Upload className="w-2.5 h-2.5" />}
                                        </div>
                                        Adicionar Logo
                                      </label>
                                    </>
                                  )}
                                </div>

                                {!hasText && (
                                  <button
                                    onClick={() => setEditingItemId(item.lineId)}
                                    className="text-xs font-semibold text-foreground hover:underline cursor-pointer shrink-0 ml-4"
                                  >
                                    Dados de personalização
                                  </button>
                                )}
                              </div>
                            </div>
                          )}


                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Footer with pricing and checkout */}
              {items.length > 0 && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="p-4 md:p-6 space-y-3 md:space-y-4 bg-gradient-to-t from-secondary/50 to-transparent"
                >
                  {/* Pricing Summary */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium text-foreground">{formatPrice(subtotal)}</span>
                    </div>
                    <div className="h-px bg-black/5 my-1" />
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-foreground">Total</span>
                      <span className="text-xl font-bold text-foreground">{formatPrice(totalWithShipping)}</span>
                    </div>
                  </div>

                  {/* Side-by-side boxes */}
                  <div className="grid grid-cols-2 gap-2">
                    {/* PIX box */}
                    <button
                      onClick={handlePixCheckout}
                      disabled={isLoading}
                      className="relative h-24 rounded-2xl bg-emerald-500 text-white p-3.5 flex flex-col justify-between overflow-hidden text-left transition-all hover:brightness-110 active:scale-[0.97] disabled:opacity-50 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.2),4px_4px_14px_rgba(16,185,129,0.35)]"
                    >
                      <QrCode className="w-4 h-4 opacity-70" />
                      <div>
                        <div className="text-sm font-bold leading-none">{formatPrice(totalWithPix)}</div>
                        <div className="text-[10px] font-semibold opacity-80 mt-0.5">PIX 10% OFF</div>
                      </div>
                      <ShoppingCart className="absolute bottom-3 right-3 w-4 h-4 text-teal-300 opacity-80" />
                    </button>

                    {/* Card box */}
                    <button
                      onClick={() => setShowInstallmentPicker(!showInstallmentPicker)}
                      disabled={isLoading}
                      className="relative h-24 rounded-2xl bg-blue-600 text-white p-3.5 flex flex-col justify-between overflow-hidden text-left transition-all hover:brightness-110 active:scale-[0.97] disabled:opacity-50 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.15),4px_4px_14px_rgba(37,99,235,0.35)]"
                    >
                      <CreditCard className="w-4 h-4 opacity-70" />
                      <div>
                        <div className="text-sm font-bold leading-none">{formatPrice(subtotal)}</div>
                        <div className="text-[10px] font-semibold opacity-80 mt-0.5">até 12x c/ acréscimo</div>
                      </div>
                    </button>
                  </div>

                  {/* Installment picker */}
                  <AnimatePresence>
                    {showInstallmentPicker && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="rounded-2xl overflow-hidden [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.8),inset_-2px_-2px_4px_rgba(0,0,0,0.05),4px_4px_12px_rgba(0,0,0,0.08)]"
                      >
                        <div className="flex items-center gap-2 px-4 py-3 bg-blue-600 text-white">
                          <button onClick={() => setShowInstallmentPicker(false)} className="mr-1 opacity-80 hover:opacity-100">
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <CreditCard className="w-4 h-4" />
                          <span className="text-sm font-bold">Escolha o parcelamento</span>
                        </div>
                        <div className="bg-white max-h-[260px] overflow-y-auto divide-y divide-black/5">
                          {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => {
                            const { value, total } = calculateInstallment(subtotal, n);
                            return (
                              <button
                                key={n}
                                onClick={() => {
                                  setSelectedInstallment(n);
                                  setShowInstallmentPicker(false);
                                }}
                                className="w-full flex items-center justify-between px-4 py-3 hover:bg-secondary/40 transition-colors text-left"
                              >
                                <div className="flex flex-col">
                                  <span className="text-sm font-semibold text-foreground">
                                    {n}x de {formatPrice(value)}
                                  </span>
                                  {n > 1 && (
                                    <span className="text-[10px] text-muted-foreground">Total: {formatPrice(total)}</span>
                                  )}
                                </div>
                                {n === 1 ? (
                                  <span className="text-[10px] font-bold text-pix bg-pix/10 px-2 py-0.5 rounded-full">à vista</span>
                                ) : (
                                  <span className="text-[10px] font-medium text-red-500 bg-red-50 px-2 py-0.5 rounded-full">com acréscimo</span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Action panel — shown when installment selected */}
                  {selectedInstallment !== null && !showInstallmentPicker && (() => {
                    const { value, total } = calculateInstallment(subtotal, selectedInstallment);
                    return (
                      <motion.div
                        key="action-panel"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-2xl bg-white p-5 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.04),4px_4px_12px_rgba(0,0,0,0.07)]"
                      >
                        {/* Selected plan summary */}
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                            <CreditCard className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-bold text-foreground">
                              {selectedInstallment}× de {formatPrice(value)}
                            </p>
                            {selectedInstallment > 1 && (
                              <p className="text-xs text-muted-foreground">Total: {formatPrice(total)} com acréscimo</p>
                            )}
                          </div>
                          <button
                            onClick={() => setShowInstallmentPicker(true)}
                            className="w-7 h-7 flex items-center justify-center rounded-lg bg-white transition-all hover:-translate-y-0.5 flex-shrink-0 [box-shadow:inset_1px_1px_2px_rgba(255,255,255,0.9),inset_-1px_-1px_2px_rgba(0,0,0,0.04),2px_2px_5px_rgba(0,0,0,0.07)]"
                            aria-label="Alterar parcelamento"
                          >
                            <ArrowLeftRight className="w-3.5 h-3.5 text-muted-foreground" />
                          </button>
                        </div>

                        <div className="h-px bg-black/5 mb-4" />

                        {/* Action link */}
                        <div className="flex flex-col gap-4">
                          <button
                            onClick={() => handleCardCheckout(selectedInstallment!)}
                            className="flex items-center justify-between text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group"
                          >
                            <span>{selectedInstallment === 1 ? 'Concluir compra à vista' : `Concluir compra em ${selectedInstallment} parcelas`}</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </motion.div>
                    );
                  })()}
                </motion.div>
              )}
        </div>
    </motion.div>
        </>
      )
      }
    </AnimatePresence >
  );
};
