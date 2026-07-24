import { Metadata } from 'next';
import { HomeClient } from '@/components/HomeClient';
import {
  JsonLd,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateLocalBusinessSchema,
  generatePersonSchema,
  generateFAQSchema,
} from '@/lib/seo/schemas';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://draskinbrasil.com.br';

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    url: SITE_URL,
    type: 'website',
  },
};

// FAQ items — must exactly match the visible FAQ on the page
const faqItems = [
  {
    question: 'Os procedimentos são dolorosos?',
    answer: 'A maioria dos procedimentos utiliza anestésicos tópicos ou injetáveis locais de última geração, garantindo o máximo conforto possível para a paciente durante toda a sessão.',
  },
  {
    question: 'Quanto tempo duram os resultados?',
    answer: 'Isso varia de acordo com o tratamento: a Toxina Botulínica costuma durar de 4 a 6 meses; Preenchimentos de Ácido Hialurônico de 10 a 18 meses; e os Bioestimuladores continuam agindo na produção de colágeno por até 2 anos.',
  },
  {
    question: 'Posso voltar às atividades normais?',
    answer: 'Sim, a maioria dos tratamentos estéticos injetáveis e a laser permite o retorno imediato às atividades cotidianas, sendo necessárias apenas algumas precauções básicas, como não massagear a área e evitar a exposição solar intensa.',
  },
  {
    question: 'Como funciona a avaliação?',
    answer: 'A avaliação é uma consulta personalizada e detalhada onde analisamos as suas necessidades individuais, estrutura facial, histórico médico e traçamos um plano de tratamento personalizado focado em resultados elegantes e naturais.',
  },
  {
    question: 'Os procedimentos são seguros?',
    answer: 'Absolutamente. Todos os procedimentos são realizados pela Dra. Samara Rocha, Biomédica Esteta qualificada, utilizando produtos de marcas renomadas mundialmente e seguindo rígidos protocolos de segurança e higiene sanitária.',
  },
  {
    question: 'Qual tratamento é ideal para mim?',
    answer: 'O tratamento ideal é determinado na sua consulta de avaliação, onde avaliamos as particularidades da sua pele e queixas específicas para criar um protocolo sob medida para você.',
  },
  {
    question: 'Onde fica a clínica Dra. Skin?',
    answer: 'A Clínica Dra. Skin está localizada na Rua Dr. César, 1161 — Sala 1011, no bairro de Santana, São Paulo – SP, CEP 02013-004. Atendemos de segunda a sexta das 9h às 19h e aos sábados das 9h às 14h, exclusivamente com hora marcada.',
  },
  {
    question: 'Como agendar uma avaliação?',
    answer: 'O agendamento é feito diretamente pelo WhatsApp: (11) 99926-3636. Envie uma mensagem e nossa equipe retornará para confirmar o melhor horário para você.',
  },
];

export default function Home() {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();
  const localBusinessSchema = generateLocalBusinessSchema();
  const personSchema = generatePersonSchema();
  const faqSchema = generateFAQSchema(faqItems);

  return (
    <>
      <JsonLd data={[organizationSchema, websiteSchema, localBusinessSchema, personSchema, faqSchema]} />
      <HomeClient />
    </>
  );
}
