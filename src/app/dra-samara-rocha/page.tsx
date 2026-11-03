import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo/pageMeta';
import Link from 'next/link';
import { ArrowRight, Check, MapPin, Instagram } from 'lucide-react';
import { PageShell } from '@/components/site/PageShell';
import { Breadcrumbs } from '@/components/site/Breadcrumbs';
import { getWhatsAppUrl } from '@/lib/utils';
import { JsonLd, generateBreadcrumbSchema, generatePersonSchema } from '@/lib/seo/schemas';
import { VideoGrid, videoSchema } from '@/components/site/VideoGrid';
import { VIDEOS } from '@/data/videos';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://draskinbrasil.com.br';

export const metadata: Metadata = pageMeta({
  title: 'Dra. Samara Rocha, biomédica esteta | Dra. Skin',
  description:
    'Conheça a Dra. Samara Rocha, biomédica esteta (CRBM 67943), responsável pela Clínica Dra. Skin em Santana, São Paulo: formação, cursos e atendimento.',
  path: '/dra-samara-rocha',
  image: '/dra-samara-retrato.webp',
  imageAlt: 'Dra. Samara Rocha, biomédica esteta',
});

const timeline = [
  {
    period: 'Formação acadêmica',
    title: 'Biomedicina estética de alta performance',
    desc: 'Graduada em Biomedicina e Tecnóloga em Estética e Cosmética, com sólida base acadêmica e prática clínica focada na entrega de resultados de excelência.',
  },
  {
    period: 'Especialização avançada',
    title: 'Expert em procedimentos injetáveis',
    desc: 'Pós-graduada em Biomedicina Estética, com especialização avançada estritamente focada em procedimentos injetáveis premium e tecnologias de alta performance.',
  },
  {
    period: 'Certificações internacionais',
    title: 'Prática em polos globais da estética',
    desc: 'Especializações práticas em Londres (Facial Profiling e Russian Kiss Masterclass), Miami (Estética Avançada e Bioestimuladores) e imersão em Anatomia em Cadáver Fresh Frozen (EUA).',
  },
];

const highlights = [
  'Avaliação facial e corporal minuciosa e individual',
  'Plano de tratamento sob medida para cada paciente',
  'Produtos originais de alta performance',
  'Atendimento com hora marcada em Santana, São Paulo',
];

export default function DraSamaraPage() {
  const profilePage = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: `${SITE_URL}/dra-samara-rocha`,
    name: 'Dra. Samara Rocha, biomédica esteta',
    mainEntity: { '@id': `${SITE_URL}/#person-samara-rocha` },
  };

  return (
    <PageShell>
      <JsonLd
        data={[
          profilePage,
          ...VIDEOS.map(videoSchema),
          generatePersonSchema(),
          generateBreadcrumbSchema([
            { name: 'Início', url: '/' },
            { name: 'Dra. Samara Rocha', url: '/dra-samara-rocha' },
          ]),
        ]}
      />
      <section className="pt-4 pb-10 md:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <Breadcrumbs items={[{ name: 'Início', href: '/' }, { name: 'Dra. Samara Rocha', href: '/dra-samara-rocha' }]} />
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">Biomédica esteta · CRBM 67943</span>
              <h1 className="text-display text-foreground leading-[1.15]">Dra. Samara Rocha</h1>
              <p className="font-heading text-lg md:text-xl italic text-logo-gradient">Harmonização facial e corporal em Santana, São Paulo</p>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                À frente da Clínica Dra. Skin, a Dra. Samara Rocha realiza procedimentos injetáveis, tratamentos de pele e tecnologias corporais com foco em naturalidade, sofisticação e rejuvenescimento duradouro. Cada atendimento é individual e começa por uma avaliação detalhada do rosto, da pele e do corpo.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-logo-gradient text-white px-6 py-3 text-sm font-semibold min-h-11"
                >
                  Agendar avaliação
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <Link
                  href="/tratamentos"
                  className="inline-flex items-center rounded-full bg-white border border-border/60 px-6 py-3 text-sm font-semibold text-foreground min-h-11 [box-shadow:var(--clay-shadow-sm)]"
                >
                  Ver tratamentos
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6">
              <img
                src="/dra-samara-retrato.webp"
                alt="Dra. Samara Rocha, biomédica esteta da Clínica Dra. Skin"
                className="w-full max-w-sm mx-auto aspect-[770/1048] rounded-[2rem] object-cover object-top border-8 border-white [box-shadow:var(--clay-shadow-lg)]"
                width={770}
                height={1048}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-headline">Experiência e formação internacional</h2>
              <div className="w-16 h-0.5 bg-primary/40 mt-4" />
            </div>
            <div className="relative pl-6 border-l-2 border-primary/20 space-y-8">
              {timeline.map((t) => (
                <div key={t.title} className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-accent" aria-hidden="true" />
                  <span className="text-[11px] font-semibold text-accent uppercase tracking-wider">{t.period}</span>
                  <h3 className="font-heading text-lg font-semibold text-foreground mt-1">{t.title}</h3>
                  <p className="text-sm text-muted-foreground font-light mt-1 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-border/40 [box-shadow:var(--clay-shadow-lg)] space-y-5 self-start">
            <h2 className="font-heading text-xl font-semibold text-foreground">Como é o atendimento</h2>
            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-foreground/85">
                  <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent" aria-hidden="true" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-border/50 space-y-3 text-sm text-muted-foreground">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                Rua Dr. César, 1161, sala 1011, Santana, São Paulo, SP, CEP 02013-004
              </p>
              <a href="https://instagram.com/draskinbrasil" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent">
                <Instagram className="w-4 h-4 text-accent" aria-hidden="true" />
                @draskinbrasil
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <VideoGrid videos={VIDEOS} eyebrow="Segunda Pele" title="Vídeos da Dra. Samara" />
        </div>
      </section>
    </PageShell>
  );
}
