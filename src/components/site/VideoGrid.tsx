import type { SiteVideo } from '@/data/videos';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://draskinbrasil.com.br';

export function videoSchema(v: SiteVideo) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: v.title,
    description: v.description,
    thumbnailUrl: `${SITE_URL}${v.poster}`,
    contentUrl: `${SITE_URL}${v.src}`,
    uploadDate: '2026-10-13',
    duration: v.duration,
    inLanguage: 'pt-BR',
    author: { '@id': `${SITE_URL}/#person-samara-rocha` },
  };
}

/** Vídeos verticais da Dra. Samara, com capa e controles nativos. */
export function VideoGrid({ videos, title, eyebrow }: { videos: SiteVideo[]; title: string; eyebrow?: string }) {
  if (videos.length === 0) return null;
  const cols = videos.length === 1 ? 'max-w-sm mx-auto' : videos.length === 2 ? 'grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
  return (
    <div>
      <div className="text-center max-w-2xl mx-auto mb-10">
        {eyebrow && <span className="text-xs font-semibold uppercase tracking-widest text-accent">{eyebrow}</span>}
        <h2 className="text-headline mt-2">{title}</h2>
        <div className="w-16 h-0.5 bg-primary/40 mx-auto mt-4" />
      </div>
      <div className={`grid gap-6 ${cols}`}>
        {videos.map((v) => (
          <figure key={v.id} className="bg-white rounded-3xl p-3 border border-border/40 [box-shadow:var(--clay-shadow)]">
            <video
              src={v.src}
              poster={v.poster}
              controls
              playsInline
              preload="none"
              className="w-full aspect-[9/16] rounded-2xl bg-secondary object-cover"
              aria-label={v.title}
            />
            <figcaption className="px-2 pt-4 pb-2 space-y-1.5 text-left">
              <h3 className="font-heading text-base font-semibold text-foreground leading-snug">{v.title}</h3>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">{v.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
