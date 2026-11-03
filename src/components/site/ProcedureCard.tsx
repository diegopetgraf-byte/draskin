import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ProcedurePage } from '@/data/procedimentos';

/** Cartão de procedimento no mesmo desenho dos cartões da home. */
export function ProcedureCard({ procedure }: { procedure: ProcedurePage }) {
  return (
    <Link
      href={`/${procedure.slug}`}
      className="group bg-white rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 border border-border/40 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.02),4px_4px_16px_rgba(0,0,0,0.04)] hover:[box-shadow:inset_3px_3px_6px_rgba(255,255,255,0.95),inset_-3px_-3px_6px_rgba(0,0,0,0.04),8px_8px_24px_rgba(0,0,0,0.08)] flex flex-col justify-between min-h-[260px] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
    >
      <div>
        <div className="w-full h-44 rounded-2xl overflow-hidden mb-6 relative bg-white border border-border/30 transition-all duration-300 group-hover:scale-[1.02]">
          <img
            src={procedure.image}
            alt={`${procedure.name} na Clínica Dra. Skin, Santana, São Paulo`}
            className="w-full h-full object-cover mix-blend-multiply"
            loading="lazy"
            decoding="async"
            width={340}
            height={176}
          />
        </div>
        <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
          {procedure.name}
        </h3>
        <p className="text-xs text-muted-foreground font-light line-clamp-2 leading-relaxed">
          {procedure.subtitle}
        </p>
      </div>
      <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">Saiba mais</span>
        <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center transition-transform group-hover:translate-x-1">
          <ArrowRight className="w-4 h-4 text-accent" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
