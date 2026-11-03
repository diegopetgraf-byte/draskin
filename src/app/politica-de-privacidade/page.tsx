import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo/pageMeta';
import { PageShell } from '@/components/site/PageShell';
import { Breadcrumbs } from '@/components/site/Breadcrumbs';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://draskinbrasil.com.br';

export const metadata: Metadata = pageMeta({
  title: 'Política de privacidade | Dra. Skin',
  description:
    'Como a Clínica Dra. Skin, em Santana, São Paulo, trata os dados pessoais de quem visita o site e entra em contato pelo WhatsApp, conforme a LGPD.',
  path: '/politica-de-privacidade',
});

const sections = [
  {
    title: 'Quem somos',
    body: [
      'Este site pertence à Clínica Dra. Skin, sob responsabilidade da Dra. Samara Rocha, biomédica esteta (CRBM 67943), com atendimento na Rua Dr. César, 1161, sala 1011, Santana, São Paulo, SP, CEP 02013-004.',
    ],
  },
  {
    title: 'Quais dados recebemos',
    body: [
      'O site não tem formulário de cadastro. Quando você toca em um botão de agendamento, a conversa acontece no WhatsApp, e recebemos o que você escolher enviar: nome, telefone e a mensagem.',
      'Como em qualquer site, o servidor registra dados técnicos de acesso (endereço IP, navegador, páginas visitadas e horário) para segurança e funcionamento.',
    ],
  },
  {
    title: 'Para que usamos',
    body: [
      'Usamos os dados de contato apenas para responder, agendar e acompanhar o seu atendimento. Dados de saúde informados na avaliação ficam no prontuário, protegidos por sigilo profissional.',
      'Não vendemos nem compartilhamos seus dados para fins de publicidade.',
    ],
  },
  {
    title: 'Serviços de terceiros',
    body: [
      'O site usa serviços de terceiros que têm políticas próprias: WhatsApp (conversas), Google (mapa e avaliações) e a hospedagem do site.',
    ],
  },
  {
    title: 'Seus direitos',
    body: [
      'Pela Lei Geral de Proteção de Dados (Lei 13.709/2018), você pode pedir acesso, correção ou exclusão dos seus dados de contato, além de informações sobre o uso deles. Basta enviar o pedido pelo WhatsApp (11) 99926-3636.',
    ],
  },
  {
    title: 'Atualizações',
    body: ['Esta política pode ser atualizada. A versão em vigor é sempre a publicada nesta página. Última atualização: outubro de 2026.'],
  },
];

export default function PrivacidadePage() {
  return (
    <PageShell>
      <section className="pt-4 pb-10 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Breadcrumbs items={[{ name: 'Início', href: '/' }, { name: 'Política de privacidade', href: '/politica-de-privacidade' }]} />
          <h1 className="text-display text-foreground leading-[1.15] mt-8">Política de privacidade</h1>
          <div className="mt-10 space-y-10">
            {sections.map((s) => (
              <div key={s.title} className="space-y-3">
                <h2 className="font-heading text-xl font-semibold text-foreground">{s.title}</h2>
                {s.body.map((b, i) => (
                  <p key={i} className="text-base text-muted-foreground font-light leading-relaxed">{b}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
