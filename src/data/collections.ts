/**
 * Collection and Service metadata
 * Defines all catalog collections and service pages with custom eyebrows, titles, and descriptions
 */

export interface CollectionMetadata {
    slug: string;
    type: 'collection' | 'service';
    eyebrow: string;
    title: string;
    description: string;
}

export const COLLECTIONS: Record<string, CollectionMetadata> = {
    // DOCUMENTAÇÃO
    'fichas-faciais-corporais': {
        slug: 'fichas-faciais-corporais',
        type: 'collection',
        eyebrow: 'Precisão com assinatura estética',
        title: 'Fichas Clínicas para Estética Avançada',
        description: 'Fichas clínicas profissionais para harmonização facial, glútea, botox e bioestimuladores. Modelos exclusivos para anamnese, planejamento e evolução de procedimentos estéticos.',
    },
    'anamnese-corporal-facial': {
        slug: 'anamnese-corporal-facial',
        type: 'collection',
        eyebrow: 'Avaliação sofisticada',
        title: 'Anamneses',
        description: 'Funcionalidade e design com riqueza em detalhes.',
    },
    'termos-clinica-estetica': {
        slug: 'termos-clinica-estetica',
        type: 'collection',
        eyebrow: 'Segurança com apresentação impecável',
        title: 'Termos e contratos',
        description: 'Documentação jurídica cuidadosamente desenhada para transmitir confiança e profissionalismo.',
    },
    'papelaria-estetica': {
        slug: 'papelaria-estetica',
        type: 'collection',
        eyebrow: 'Artes para quem valoriza sua apresentação',
        title: 'Papelaria essencial',
        description: 'Para clínicas e profissionais que entendem que design e qualidade comunicam valor.',
    },
    'guias-cuidados-estetica': {
        slug: 'guias-cuidados-estetica',
        type: 'collection',
        eyebrow: 'Ferramenta chave para fechar orçamentos',
        title: 'Carteiras de cuidados',
        description: 'Explique procedimentos e oriente cuidados pós tratamento com clareza, fortalecendo confiança e continuidade do cuidado.',
    },

    // ESPECIALIDADES
    'papelaria-estetica-facial': {
        slug: 'papelaria-estetica-facial',
        type: 'collection',
        eyebrow: 'Harmonia, técnica e detalhe',
        title: 'Procedimentos faciais',
        description: 'Fichas e materiais desenvolvidos para estética facial avançada, com linguagem visual sofisticada e clínica.',
    },
    'impressos-estetica-corporal': {
        slug: 'impressos-estetica-corporal',
        type: 'collection',
        eyebrow: 'Estrutura para resultados de alto nível',
        title: 'Procedimentos corporais',
        description: 'Documentação especializada para protocolos corporais, unindo organização técnica rigorosa e estética refinada.',
    },
    'estetica-capilar': {
        slug: 'estetica-capilar',
        type: 'collection',
        eyebrow: 'Diagnóstico com elegância clínica',
        title: 'Estética capilar',
        description: 'Documentação criada para protocolos capilares modernos, equilibrando precisão técnica, clareza visual e uma apresentação coerente com sua marca.',
    },
    'estetica-intima': {
        slug: 'estetica-intima',
        type: 'collection',
        eyebrow: 'Cuidado, discrição e ética',
        title: 'Estética íntima',
        description: 'Materiais técnicos desenvolvidos para procedimentos íntimos, priorizando clareza clínica, segurança e uma comunicação sensível com o paciente.',
    },

    // MARKETING & SERVICES
    'fidelidade-clinicas-estetica': {
        slug: 'fidelidade-clinicas-estetica',
        type: 'collection',
        eyebrow: 'Diferenciação e relacionamento',
        title: 'Branding',
        description: 'Materiais para elevar sua percepção de marca, criar conexões duradouras e transmitir exclusividade.',
    },
    'logotipos-estetica-harmonizacao': {
        slug: 'logotipos-estetica-harmonizacao',
        type: 'service',
        eyebrow: 'Sensibilidade artística e criatividade',
        title: 'Marcas com alma e posicionamento', // Updated from seo_content.json Page 8
        description: 'Identidades visuais autorais que traduzem sofisticação, confiança e expertise.',
    },
    'sites-clinicas-estetica': {
        slug: 'sites-clinicas-estetica',
        type: 'service',
        eyebrow: 'Presença digital à altura da sua marca',
        title: 'Websites',
        description: 'Websites elegantes e estratégicos, que mostram sua expertise e conquistam clientes.',
    },
    'grafica-estetica': {
        slug: 'grafica-estetica',
        type: 'collection',
        eyebrow: 'Papelaria avançada',
        title: 'Gráfica Estética',
        description: 'Toda nossa linha de papelaria estética premium e personalizada.',
    },
};

/**
 * Get collection metadata by slug
 */
export function getCollectionMetadata(slug: string): CollectionMetadata | undefined {
    return COLLECTIONS[slug];
}

/**
 * Get all collections of a specific type
 */
export function getCollectionsByType(type: 'collection' | 'service'): CollectionMetadata[] {
    return Object.values(COLLECTIONS).filter(c => c.type === type);
}
