import { motion } from 'framer-motion';
import {
  Sparkles,
  Palette,
  Layers,
  Shield,
  FileText,
  Hash,
  Copy,
  ClipboardList,
  CreditCard,
  Droplet,
  Award,
  Heart,
  Repeat,
  BookOpen,
  Mail,
  QrCode,
  Package,
  Target,
  Receipt,
  Calendar,
  Gift,
  FileCheck,
  Users,
  Printer
} from 'lucide-react';

export interface FinishBadge {
  icon: string;
  title: string;
  desc: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Palette,
  Layers,
  Shield,
  FileText,
  Hash,
  Copy,
  ClipboardList,
  CreditCard,
  Droplet,
  Award,
  Heart,
  Repeat,
  BookOpen,
  Mail,
  QrCode,
  Package,
  Target,
  Receipt,
  Calendar,
  Gift,
  FileCheck,
  Users,
  Printer,
  // Alias for 'Magnet' which doesn't exist in lucide-react
  Magnet: Package,
};

interface FinishBadgesProps {
  badges: FinishBadge[];
}

export const FinishBadges = ({ badges }: FinishBadgesProps) => {
  return (
    <div className="grid grid-cols-2 gap-2 md:gap-3">
      {badges.map((badge, index) => {
        const Icon = iconMap[badge.icon] || Sparkles;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-2.5 md:p-4 rounded-xl md:rounded-2xl bg-[#faf9f7] transition-all duration-200 md:hover:-translate-y-0.5"
            style={{ boxShadow: 'var(--clay-shadow-sm)' }}
          >
            <div className="flex items-start gap-2 md:gap-3">
              <div
                className="w-7 h-7 md:w-8 md:h-8 rounded-lg md:rounded-xl bg-logo-gradient flex items-center justify-center flex-shrink-0"
                style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.5), inset -1px -1px 2px rgba(0,0,0,0.03)' }}
              >
                <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
              </div>
              <div className="min-w-0">
                <h4 className="font-medium text-xs md:text-sm text-foreground leading-tight">
                  {badge.title}
                </h4>
                <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5 line-clamp-2">
                  {badge.desc}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
