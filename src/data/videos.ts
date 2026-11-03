/** Vídeos do Instagram da Dra. Samara (@draskinbrasil), série "Segunda Pele". */
export interface SiteVideo {
  id: string;
  title: string;
  description: string;
  src: string;
  poster: string;
  /** Duração ISO 8601 (schema.org). */
  duration: string;
  /** Slugs das páginas de tratamento onde o vídeo aparece. */
  pages: string[];
}

export const VIDEOS: SiteVideo[] = [
  {
    id: 'colageno-rosto-mudou',
    title: 'Seu rosto mudou ou você perdeu colágeno?',
    description: 'A Dra. Samara explica por que, com o passar dos anos, a perda de sustentação e de qualidade da pele pode fazer algumas regiões do rosto parecerem mais cansadas.',
    src: '/videos/colageno-rosto-mudou.mp4',
    poster: '/videos/colageno-rosto-mudou.webp',
    duration: 'PT43S',
    pages: ['bioestimuladores-de-colageno', 'profhilo'],
  },
  {
    id: 'envelhecimento-mesma-idade',
    title: 'Por que duas pessoas da mesma idade envelhecem diferente?',
    description: 'Exposição solar, qualidade da pele e características anatômicas influenciam a forma como cada rosto envelhece. Não existe uma idade exata para começar.',
    src: '/videos/envelhecimento-mesma-idade.mp4',
    poster: '/videos/envelhecimento-mesma-idade.webp',
    duration: 'PT48S',
    pages: ['rejuvenescimento-facial', 'full-face'],
  },
  {
    id: 'parecer-mais-jovem',
    title: 'Por que algumas pessoas parecem mais jovens do que realmente são?',
    description: 'Proteção solar, hidratação e cuidados preventivos influenciam diretamente a forma como envelhecemos. A pele reflete as escolhas que fazemos ao longo da vida.',
    src: '/videos/parecer-mais-jovem.mp4',
    poster: '/videos/parecer-mais-jovem.webp',
    duration: 'PT35S',
    pages: ['skinbooster', 'laser-rejuvenescimento'],
  },
  {
    id: 'naturalidade-dra-samara',
    title: 'Por que eu falo tanto sobre naturalidade',
    description: 'A Dra. Samara conta a experiência pessoal que mudou a forma como ela enxerga a estética: o objetivo não é mudar um rosto, e sim valorizar o que cada pessoa tem de único.',
    src: '/videos/naturalidade-dra-samara.mp4',
    poster: '/videos/naturalidade-dra-samara.webp',
    duration: 'PT45S',
    pages: ['harmonizacao-facial', 'preenchimento-facial', 'toxina-botulinica'],
  },
  {
    id: 'gluteos-sem-cirurgia',
    title: 'Glúteos mais firmes sem cirurgia',
    description: 'Bioestimulador que ativa o colágeno na região e melhora a textura dos glúteos, com resultado progressivo e natural.',
    src: '/videos/gluteos-sem-cirurgia.mp4',
    poster: '/videos/gluteos-sem-cirurgia.webp',
    duration: 'PT16S',
    pages: ['harmonizacao-glutea', 'preenchedores-corporais'],
  },
  {
    id: 'skincare-sem-diagnostico',
    title: 'A rotina da influencer pode estar prejudicando a sua pele',
    description: 'Copiar uma rotina de skincare sem diagnóstico pode trazer ativos de que a sua pele não precisa e gerar inflamação e até manchas.',
    src: '/videos/skincare-sem-diagnostico.mp4',
    poster: '/videos/skincare-sem-diagnostico.webp',
    duration: 'PT34S',
    pages: ['remocao-de-manchas', 'laser-para-melasma', 'black-peel'],
  },
];

export const videosForPage = (slug: string) => VIDEOS.filter((v) => v.pages.includes(slug));
