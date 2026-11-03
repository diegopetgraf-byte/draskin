import { ALL_PROCEDURES, CATEGORY_LABELS, CATEGORY_ORDER } from '@/data/procedimentos';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://draskinbrasil.com.br';

export const dynamic = 'force-static';

export function GET() {
  const lines = [
    '# Clínica Dra. Skin',
    '',
    '> Estética facial e corporal em Santana, São Paulo, com a Dra. Samara Rocha, biomédica esteta (CRBM 67943). Rua Dr. César, 1161, sala 1011, Santana, São Paulo, SP, CEP 02013-004. Agendamento pelo WhatsApp (11) 99926-3636. Instagram @draskinbrasil.',
    '',
    '## Páginas principais',
    `- [Início](${SITE_URL}/)`,
    `- [Todos os tratamentos](${SITE_URL}/tratamentos)`,
    `- [Dra. Samara Rocha](${SITE_URL}/dra-samara-rocha)`,
    '',
    ...CATEGORY_ORDER.flatMap((c) => [
      `## ${CATEGORY_LABELS[c].title}`,
      ...ALL_PROCEDURES.filter((p) => p.category === c).map((p) => `- [${p.name}](${SITE_URL}/${p.slug}): ${p.intro}`),
      '',
    ]),
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
