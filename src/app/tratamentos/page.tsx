import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo/pageMeta';
import { PageShell } from '@/components/site/PageShell';
import { Breadcrumbs } from '@/components/site/Breadcrumbs';
import { ProcedureCard } from '@/components/site/ProcedureCard';
import { CATEGORY_LABELS, CATEGORY_ORDER, proceduresByCategory } from '@/data/procedimentos';
import { JsonLd, generateBreadcrumbSchema } from '@/lib/seo/schemas';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://draskinbrasil.com.br';

export const metadata: Metadata = pageMeta({
  title: 'Tratamentos estéticos em Santana | Dra. Skin',
  description:
    'Todos os tratamentos da Dra. Samara Rocha em Santana, SP: harmonização, botox, bioestimuladores, lasers, criolipólise, glúteos, vasinhos e mais.',
  path: '/tratamentos',
});

export default function TratamentosPage() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Tratamentos da Clínica Dra. Skin',
    itemListElement: CATEGORY_ORDER.flatMap(proceduresByCategory).map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.name,
      url: `${SITE_URL}/${p.slug}`,
    })),
  };

  return (
    <PageShell>
      <JsonLd
        data={[
          itemList,
          generateBreadcrumbSchema([
            { name: 'Início', url: '/' },
            { name: 'Tratamentos', url: '/tratamentos' },
          ]),
        ]}
      />
      <section className="pt-4 pb-10 md:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <Breadcrumbs items={[{ name: 'Início', href: '/' }, { name: 'Tratamentos', href: '/tratamentos' }]} />
          <div className="mt-8 max-w-3xl space-y-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Clínica Dra. Skin · Santana</span>
            <h1 className="text-display text-foreground leading-[1.15]">Tratamentos estéticos faciais e corporais em Santana</h1>
            <p className="text-base text-muted-foreground font-light leading-relaxed">
              Conheça os procedimentos realizados pela Dra. Samara Rocha, biomédica esteta (CRBM 67943), na Clínica Dra. Skin, em Santana, São Paulo. Toque em um tratamento para ver como é feito, para quem é indicado, os cuidados e as perguntas mais comuns.
            </p>
            <nav aria-label="Categorias" className="flex flex-wrap gap-2 pt-2">
              {CATEGORY_ORDER.map((c) => (
                <a
                  key={c}
                  href={`#${c}`}
                  className="bg-white border border-border/80 px-4 py-2 rounded-full text-xs font-medium text-foreground min-h-9 [box-shadow:var(--clay-shadow-sm)]"
                >
                  {CATEGORY_LABELS[c].title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {CATEGORY_ORDER.map((c, idx) => (
        <section key={c} id={c} className={`py-16 md:py-20 scroll-mt-24 ${idx % 2 === 0 ? 'bg-secondary/30' : ''}`}>
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">{CATEGORY_LABELS[c].eyebrow}</span>
              <h2 className="text-headline mt-2">{CATEGORY_LABELS[c].title}</h2>
              <div className="w-16 h-0.5 bg-primary/40 mt-4" />
              <p className="text-muted-foreground mt-4 font-light">{CATEGORY_LABELS[c].description}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {proceduresByCategory(c).map((p) => (
                <ProcedureCard key={p.slug} procedure={p} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </PageShell>
  );
}
