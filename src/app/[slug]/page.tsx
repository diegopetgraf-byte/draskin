import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, CalendarDays, Sparkles, ShieldCheck, Check, ChevronDown, MapPin, ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/site/PageShell';
import { Breadcrumbs } from '@/components/site/Breadcrumbs';
import { ProcedureCard } from '@/components/site/ProcedureCard';
import { ALL_PROCEDURES, CATEGORY_LABELS, getProcedure, whatIsHeading, aboutPhrase, nameInSentence } from '@/data/procedimentos';
import { getWhatsAppUrl } from '@/lib/utils';
import { pageMeta } from '@/lib/seo/pageMeta';
import { JsonLd, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo/schemas';
import { VideoGrid, videoSchema } from '@/components/site/VideoGrid';
import { videosForPage } from '@/data/videos';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://draskinbrasil.com.br';

export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_PROCEDURES.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProcedure(slug);
  if (!p) return {};
  return pageMeta({ title: p.metaTitle, description: p.metaDescription, path: `/${p.slug}`, image: p.image, imageAlt: p.name });
}

export default async function ProcedureRoute({ params }: Props) {
  const { slug } = await params;
  const p = getProcedure(slug);
  if (!p) notFound();

  const category = CATEGORY_LABELS[p.category];
  const related = p.related.map(getProcedure).filter((x): x is NonNullable<typeof x> => Boolean(x)).slice(0, 3);
  const whatsapp = getWhatsAppUrl(p.name);
  const url = `${SITE_URL}/${p.slug}`;
  const videos = videosForPage(p.slug);

  const facts = [
    { icon: Clock, label: 'Duração', value: p.facts.duration },
    { icon: CalendarDays, label: 'Sessões', value: p.facts.sessions },
    { icon: Sparkles, label: 'Recuperação', value: p.facts.recovery },
    { icon: ShieldCheck, label: 'Conforto', value: p.facts.anesthesia },
  ];

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': `${url}#pagina`,
    url,
    name: p.metaTitle,
    description: p.metaDescription,
    inLanguage: 'pt-BR',
    image: `${SITE_URL}${p.image}`,
    about: { '@type': 'MedicalProcedure', name: p.name, description: p.intro },
    author: { '@id': `${SITE_URL}/#person-samara-rocha` },
    publisher: { '@id': `${SITE_URL}/#localbusiness` },
  };

  return (
    <PageShell>
      <JsonLd
        data={[
          pageSchema,
          generateBreadcrumbSchema([
            { name: 'Início', url: '/' },
            { name: 'Tratamentos', url: '/tratamentos' },
            { name: p.name, url: `/${p.slug}` },
          ]),
          generateFAQSchema(p.faq.map((f) => ({ question: f.q, answer: f.a }))),
          ...videos.map(videoSchema),
        ]}
      />

      {/* Abertura */}
      <section className="pt-4 pb-10 md:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <Breadcrumbs
            items={[
              { name: 'Início', href: '/' },
              { name: 'Tratamentos', href: '/tratamentos' },
              { name: p.name, href: `/${p.slug}` },
            ]}
          />
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">{category.title}</span>
              <h1 className="text-display text-foreground leading-[1.15]">{p.h1}</h1>
              <p className="font-heading text-lg md:text-xl italic text-logo-gradient">{p.subtitle}</p>
              <p className="text-base text-muted-foreground font-light leading-relaxed max-w-xl">{p.intro}</p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-logo-gradient text-white px-6 py-3 text-sm font-semibold min-h-11 transition-transform hover:-translate-y-0.5 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.3),inset_-2px_-2px_4px_rgba(0,0,0,0.1),4px_4px_16px_rgba(0,0,0,0.15)]"
                >
                  Agendar avaliação
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  <span className="sr-only">(abre o WhatsApp)</span>
                </a>
                <Link
                  href="/tratamentos"
                  className="inline-flex items-center rounded-full bg-white border border-border/60 px-6 py-3 text-sm font-semibold text-foreground min-h-11 [box-shadow:var(--clay-shadow-sm)]"
                >
                  Ver todos os tratamentos
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-[2rem] overflow-hidden bg-white border border-border/40 [box-shadow:var(--clay-shadow-lg)]">
                <img
                  src={p.image}
                  alt={`Ilustração de ${nameInSentence(p)}, Clínica Dra. Skin em Santana`}
                  className="w-full h-auto aspect-[3/2] object-cover mix-blend-multiply"
                  width={1200}
                  height={800}
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>

          {/* Ficha rápida */}
          <dl className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-white rounded-2xl p-5 border border-border/40 [box-shadow:var(--clay-shadow-sm)]">
                <dt className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-accent">
                  <Icon className="w-4 h-4" aria-hidden="true" />
                  {label}
                </dt>
                <dd className="mt-2 text-sm text-foreground leading-snug">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* O que é e indicações */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-headline">{whatIsHeading(p)}</h2>
            <div className="w-16 h-0.5 bg-primary/40" />
            {p.about.map((para, i) => (
              <p key={i} className="text-base text-muted-foreground font-light leading-relaxed">{para}</p>
            ))}
          </div>
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 border border-border/40 [box-shadow:var(--clay-shadow-lg)]">
              <h2 className="font-heading text-xl font-semibold text-foreground">Para quem é indicado</h2>
              <ul className="mt-5 space-y-3">
                {p.indications.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/85 leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vídeos da Dra. Samara sobre o tema */}
      {videos.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <VideoGrid videos={videos} eyebrow="Segunda Pele" title="A Dra. Samara explica" />
          </div>
        </section>
      )}

      {/* Como é feito */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-headline text-center">Como é feito</h2>
          <div className="w-16 h-0.5 bg-primary/40 mx-auto mt-4" />
          <ol className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {p.steps.map((step, i) => (
              <li key={i} className="flex gap-4 bg-white rounded-2xl p-6 border border-border/40 [box-shadow:var(--clay-shadow-sm)]">
                <span className="font-heading text-2xl text-logo-gradient leading-none shrink-0 w-8">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-sm text-foreground/85 leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Benefícios, cuidados e contraindicações */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            { title: 'Benefícios', items: p.benefits },
            { title: 'Cuidados antes e depois', items: p.care },
            { title: 'Quando não é indicado', items: p.contraindications },
          ].map((block) => (
            <div key={block.title} className="bg-white rounded-3xl p-8 border border-border/40 [box-shadow:var(--clay-shadow)]">
              <h2 className="font-heading text-xl font-semibold text-foreground">{block.title}</h2>
              <ul className="mt-5 space-y-3">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-2 h-px w-4 shrink-0 bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Perguntas frequentes */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-headline text-center">Perguntas frequentes sobre {aboutPhrase(p)}</h2>
          <div className="w-16 h-0.5 bg-primary/40 mx-auto mt-4" />
          <div className="mt-10 space-y-3">
            {p.faq.map((f) => (
              <details key={f.q} className="group bg-white rounded-2xl border border-border/40 [box-shadow:var(--clay-shadow-sm)]">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 text-left text-sm font-semibold text-foreground min-h-11">
                  {f.q}
                  <ChevronDown className="w-4 h-4 text-accent shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="px-5 pb-5 text-sm text-muted-foreground font-light leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Profissional */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-border/40 [box-shadow:var(--clay-shadow-lg)] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <img
              src="/dra-samara-retrato.webp"
              alt="Dra. Samara Rocha, biomédica esteta da Clínica Dra. Skin"
              className="md:col-span-4 w-40 h-52 md:w-full md:h-auto md:aspect-[770/1048] rounded-3xl object-cover object-top mx-auto"
              loading="lazy"
              width={320}
              height={320}
            />
            <div className="md:col-span-8 space-y-4 text-center md:text-left">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">Quem realiza</span>
              <h2 className="font-heading text-2xl font-semibold text-foreground">Dra. Samara Rocha</h2>
              <p className="text-sm text-muted-foreground">Biomédica esteta · CRBM 67943</p>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Cada plano começa por uma avaliação individual na Clínica Dra. Skin, em Santana. A Dra. Samara indica a técnica, o número de sessões e os cuidados de acordo com a sua pele e o seu objetivo.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Link href="/dra-samara-rocha" className="text-sm font-semibold text-accent underline-offset-4 hover:underline">
                  Conheça a Dra. Samara
                </Link>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-accent" aria-hidden="true" />
                  Rua Dr. César, 1161, sala 1011, Santana
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relacionados */}
      {related.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-headline text-center">Tratamentos relacionados</h2>
            <div className="w-16 h-0.5 bg-primary/40 mx-auto mt-4" />
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <ProcedureCard key={r.slug} procedure={r} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Chamada final */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
          <h2 className="text-headline">Agende sua avaliação de {nameInSentence(p)}</h2>
          <p className="text-base text-muted-foreground font-light leading-relaxed">
            Atendimento com hora marcada na Clínica Dra. Skin, em Santana, São Paulo. Fale com a equipe pelo WhatsApp (11) 99926-3636.
          </p>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-logo-gradient text-white px-7 py-3.5 text-sm font-semibold min-h-11 transition-transform hover:-translate-y-0.5"
          >
            Agendar pelo WhatsApp
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </PageShell>
  );
}
