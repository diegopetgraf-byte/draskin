export type ProcedureCategory = 'facial' | 'pele-e-laser' | 'corporal';

export interface ProcedureFAQ {
  q: string;
  a: string;
}

export interface ProcedurePage {
  /** URL: https://draskinbrasil.com.br/<slug> */
  slug: string;
  /** Artigo para usar o nome no meio da frase (o, a, os, as). */
  article: 'o' | 'a' | 'os' | 'as';
  /** Nome curto do procedimento (cartão, menu, breadcrumb). */
  name: string;
  category: ProcedureCategory;
  /** <title> até 60 caracteres, com o procedimento e "Santana" ou "Dra. Skin". */
  metaTitle: string;
  /** Meta description de 140 a 155 caracteres. */
  metaDescription: string;
  /** H1 da página. */
  h1: string;
  /** Uma frase de apoio abaixo do H1. */
  subtitle: string;
  /** Resposta direta em 2 ou 3 frases: o que é e para quem. */
  intro: string;
  /** 2 a 4 parágrafos explicando o procedimento. */
  about: string[];
  /** Para quem é indicado (4 a 7 itens). */
  indications: string[];
  /** Como é feito, em passos curtos (3 a 6 itens). */
  steps: string[];
  /** Ficha rápida. Use "Definido na avaliação" quando variar. */
  facts: {
    duration: string;
    sessions: string;
    recovery: string;
    anesthesia: string;
  };
  /** Benefícios esperados (4 a 6 itens), sem promessa de resultado garantido. */
  benefits: string[];
  /** Cuidados antes e depois (4 a 8 itens). */
  care: string[];
  /** Contraindicações principais (3 a 6 itens). */
  contraindications: string[];
  /** 4 a 6 perguntas frequentes. */
  faq: ProcedureFAQ[];
  /** 2 a 4 slugs de procedimentos relacionados (da lista oficial). */
  related: string[];
  /** Caminho da imagem em /public. */
  image: string;
}
