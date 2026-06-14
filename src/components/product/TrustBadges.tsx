import { motion } from 'framer-motion';
import {
  Truck,
  QrCode,
  CreditCard,
  Shield,
  MessageCircle,
  Clock
} from 'lucide-react';

const badges = [
  {
    icon: Truck,
    title: 'Enviamos',
    description: 'para todo o Brasil',
  },
  {
    icon: QrCode,
    title: 'PIX 10% OFF',
    description: 'Desconto',
    accent: true,
  },
  {
    icon: CreditCard,
    title: 'Até 12 parcelas',
    description: 'No cartão de crédito',
  },
  {
    icon: Shield,
    title: 'Compra segura',
    description: 'Certificado SSL',
  },
  {
    icon: MessageCircle,
    title: 'Suporte WhatsApp',
    description: 'Atendimento rápido',
  },
  {
    icon: Clock,
    title: 'Aprovação simples',
    description: 'Tudo via WhatsApp',
  },
];

export const TrustBadges = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
      {badges.map((badge, index) => {
        const Icon = badge.icon;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 rounded-xl md:rounded-2xl bg-[#faf9f7]"
            style={{ boxShadow: 'var(--clay-shadow-sm)' }}
          >
            <div
              className="w-7 h-7 md:w-8 md:h-8 rounded-lg md:rounded-xl bg-logo-gradient flex items-center justify-center flex-shrink-0"
              style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.5), inset -1px -1px 2px rgba(0,0,0,0.03)' }}
            >
              <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
            </div>
            <div className="min-w-0">
              <p className="text-xs md:text-sm font-medium text-foreground leading-tight truncate">{badge.title}</p>
              <p className="text-[10px] md:text-xs text-muted-foreground truncate">{badge.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
