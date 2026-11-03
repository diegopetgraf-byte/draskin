import { CATEGORY_LABELS, CATEGORY_ORDER, proceduresByCategory } from '@/data/procedimentos';

/**
 * Todos os tratamentos, por categoria, no rodapé de todas as páginas.
 *
 * Report quinzenal 02 (02/11/2026): 22 páginas de procedimento estavam como
 * "Detectada, mas não indexada", e quase todas recebiam só 1 a 9 links
 * internos. Montado no servidor para não levar o texto dos procedimentos ao
 * JavaScript do navegador; procedimento novo entra aqui sozinho.
 */
export function TreatmentsDirectory() {
  return (
    <nav
      aria-label="Todos os tratamentos"
      className="mt-10 md:mt-12 pt-8 border-t border-white/40"
    >
      <h3 className="font-heading text-base font-semibold text-foreground mb-6">
        Todos os tratamentos
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
        {CATEGORY_ORDER.map((category) => (
          <div key={category} className="flex flex-col space-y-3">
            <p className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground">
              {CATEGORY_LABELS[category].title}
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-1">
              {proceduresByCategory(category).map((p) => (
                <li key={p.slug}>
                  <a
                    href={`/${p.slug}`}
                    className="inline-block py-1 text-xs text-muted-foreground hover:text-accent transition-colors"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
