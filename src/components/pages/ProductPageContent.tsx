'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { Skeleton } from '@/components/ui/skeleton';
import GoogleRatingTag from '@/components/GoogleRatingTag';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { useProductNavigation } from '@/hooks/useProductNavigation';
import { useCartStore } from '@/stores/cartStore';
import { PricingCard } from '@/components/product/PricingCard';
import { TrustBadges } from '@/components/product/TrustBadges';
import { FinishBadges, FinishBadge } from '@/components/product/FinishBadges';
import { PersonalizationForm } from '@/components/product/PersonalizationForm';
import { ProductVariantSelector } from '@/components/product/ProductVariantSelector';
import { SearchOverlay } from '@/components/SearchOverlay';
import { getCleanDescription } from '@/lib/product-copy-overrides';

import {
    ArrowRight,
    ArrowLeft,
    ShoppingCart,
    ChevronDown,
    Heart,
    Send,
} from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import type { ProductNode } from '@/lib/products/types';
import type { ProductMediaItem } from '@/components/product/ProductGallery';
import { ProductGallery } from '@/components/product/ProductGallery';
import { getCollectionMetadata } from '@/data/collections';

// Video paths (ensure these exist in public folder)
const passaporteVideo = '/videos/carteira-passaporte-premium.mov';

// Images to filter out from gallery
const FILTERED_IMAGE_URLS = [
    'pasta-laminadas-luxo.png',
];

// Badge categories by product type - each with unique characteristics
const badgeCategories = {
    // Duo - Standard vaccination card (10 immunizations, single fold)
    duo: [
        { icon: 'Hash', title: 'Informação e cuidado', desc: 'Fidelização de pacientes' },
        { icon: 'FileText', title: '15 x 20 cm', desc: 'Formato aberto' },
        { icon: 'Layers', title: 'Vinco Central', desc: 'Dobra única' },
        { icon: 'Award', title: 'Off-Set 240g', desc: 'Alta densidade' },
    ],
    // Trio - Extended vaccination card (18 immunizations, double fold)
    trio: [
        { icon: 'Hash', title: '18 Imunizações', desc: 'Capacidade expandida' },
        { icon: 'FileText', title: '30 x 20 cm', desc: 'Formato triplo' },
        { icon: 'Layers', title: '2 Vincos', desc: 'Dobra paralela' },
        { icon: 'Award', title: 'Off-Set 240g', desc: 'Alta densidade' },
    ],
    // Equinos - Large format for horses (18 immunizations)
    equinos: [
        { icon: 'Pencil', title: '16 Imunizações', desc: 'Ressenha do animal' },
        { icon: 'FileText', title: '30 x 20 cm', desc: 'Formato amplo' },
        { icon: 'Layers', title: '2 Vincos', desc: 'Dobras paralelas' },
        { icon: 'Award', title: 'Off-Set 240g', desc: 'Alta rigidez' },
    ],
    // Passaporte - Premium booklet
    // Felinos - Cat-specific
    felinos: [
        { icon: 'Hash', title: '10 Imunizações', desc: 'Felinos' },
        { icon: 'FileText', title: 'Tamanho A4', desc: 'Quando aberta' },
        { icon: 'Layers', title: 'Vinco Central', desc: 'Dobra precisa' },
        { icon: 'Award', title: 'Off-Set 240g', desc: 'Alta densidade' },
    ],
    // Acompanhamento
    acompanhamento: [
        { icon: 'Heart', title: 'Acompanhamento', desc: 'Registro clínico' },
        { icon: 'FileText', title: '15 x 20 cm', desc: 'Formato aberto' },
        { icon: 'Layers', title: 'Vinco Central', desc: 'Dobra precisa' },
        { icon: 'Award', title: 'Off-Set 240g', desc: 'Alta densidade' },
    ],
    // Aves Silvestres
    avesSilvestres: [
        { icon: 'Heart', title: 'Apaixonados', desc: 'por silvestres' },
        { icon: 'FileText', title: '15 x 20 cm', desc: 'Formato aberto' },
        { icon: 'Layers', title: 'Vinco Central', desc: 'Dobra única' },
        { icon: 'Award', title: 'Off-Set 240g', desc: 'Alta densidade' },
    ],
    // Blocos A5
    blocosA5: [
        { icon: 'Copy', title: '100 Folhas', desc: 'Por bloco' },
        { icon: 'FileText', title: 'Tamanho Ideal', desc: 'A5 (14,8 x 21cm)' },
        { icon: 'Award', title: 'Off-Set 90g', desc: 'Alta lisura' },
        { icon: 'ClipboardList', title: 'Blocado', desc: 'Acabamento preciso' },
    ],
    // Blocos A4 Simplex
    blocosA4Simplex: [
        { icon: 'Copy', title: '100 Folhas', desc: 'Por bloco' },
        { icon: 'FileText', title: 'A4 (21 x 29,7cm)', desc: 'Amplo e completo' },
        { icon: 'Award', title: 'Off-Set 90g', desc: 'Ótima densidade' },
        { icon: 'ClipboardList', title: 'Blocado', desc: 'Acabamento preciso' },
    ],
    // Blocos A4
    blocosA4: [
        { icon: 'Copy', title: '100 Folhas', desc: 'Frente e verso' },
        { icon: 'FileText', title: 'Espaço de Sobra', desc: 'A4 (21 x 29,7cm)' },
        { icon: 'Award', title: 'Off-Set 90g', desc: 'Ótima densidade' },
        { icon: 'ClipboardList', title: 'Blocado', desc: 'Acabamento preciso' },
    ],
    // Receituário Autocopiativo
    autocopiativo: [
        { icon: 'Copy', title: '2 Vias', desc: 'Autocopiativas' },
        { icon: 'FileText', title: 'Padrão Clínico', desc: 'Formato A5' },
        { icon: 'Layers', title: 'Carbonado', desc: 'Cópia instantânea' },
        { icon: 'Palette', title: 'Design Limpo', desc: 'Profissional' },
    ],
    // Cartão de Visita Premium
    cartaoVisita: [
        { icon: 'CreditCard', title: 'Tamanho Clássico', desc: '8,8 x 4,8 cm' },
        { icon: 'Layers', title: 'Alta Rigidez', desc: 'Couché 300g' },
        { icon: 'Sparkles', title: 'Toque de Classe', desc: 'Verniz localizado' },
        { icon: 'Palette', title: 'Cantos', desc: 'Retos ou arredondados' },
    ],
    // Cartões pequenos
    cartoes: [
        { icon: 'CreditCard', title: '9 x 5 cm', desc: 'Formato compacto' },
        { icon: 'Award', title: 'Off-Set 240g', desc: 'Alta rigidez' },
        { icon: 'Sparkles', title: 'Corte Preciso', desc: 'Acabamento limpo' },
        { icon: 'Repeat', title: 'Personalizável', desc: 'Sua marca' },
    ],
    // Pastas A4
    pastas: [
        { icon: 'Layers', title: 'Alta densidade', desc: 'Couchê 250g/300g' },
        { icon: 'Printer', title: 'Bolsa interna ou orelhas', desc: 'Bolsa branca sem impressão' },
        { icon: 'FileText', title: 'Apresentação impecável', desc: 'organização e branding' },
        { icon: 'Palette', title: 'Feitas para encantar', desc: 'design personalizado' },
    ],
    // Envelopes Ofício
    envelopes: [
        { icon: 'Mail', title: 'Formato ofício', desc: '11,4 x 23 cm' },
        { icon: 'Printer', title: 'Impressão full', desc: 'Frente, verso e aba' },
        { icon: 'Shield', title: 'Excelente robustez', desc: 'Opções com 120 a 150g/m²' },
        { icon: 'Heart', title: 'Encante', desc: 'nos detalhes' },
    ],
    // Envelopes Saco
    envelopesSaco: [
        { icon: 'Mail', title: 'Formato saco', desc: '24 x 34 cm' },
        { icon: 'Printer', title: 'Impressão full', desc: 'Frente, verso e aba' },
        { icon: 'Shield', title: 'Excelente robustez', desc: 'Opções com 120 a 150g/m²' },
        { icon: 'Heart', title: 'Encante', desc: 'nos detalhes' },
    ],
    // Certificados
    certificados: [
        { icon: 'Gift', title: 'Um Mimo', desc: 'Para seu paciente' },
        { icon: 'FileText', title: '15 x 21 cm', desc: 'Formato ideal' },
        { icon: 'Sparkles', title: 'Alta Qualidade', desc: 'Papel premium' },
        { icon: 'Heart', title: 'Fidelização', desc: 'Encante clientes' },
    ],
    // Timbrado A4
    timbrado: [
        { icon: 'Award', title: 'Alta qualidade', desc: 'Off-Set Paperfect 90g/m²' },
        { icon: 'FileText', title: 'Formato A4', desc: '(21 x 29,7cm)' },
        { icon: 'Palette', title: 'Expertise técnica', desc: 'e sensibilidade artística' },
        { icon: 'Printer', title: 'Folhas soltas', desc: 'Ideal para impressoras' },
    ],
    // Ímãs
    imas: [
        { icon: 'Magnet', title: 'Formato 7x8', desc: 'Corte especial' },
        { icon: 'QrCode', title: 'QR Code', desc: 'Link personalizado' },
        { icon: 'Package', title: 'Embalados', desc: 'Individualmente' },
        { icon: 'Palette', title: 'Impressão Full', desc: 'Alta definição' },
    ],
    // Panfletos
    panfletos: [
        { icon: 'FileText', title: 'Alta Qualidade', desc: 'Papel Couché' },
        { icon: 'Layers', title: 'Versátil', desc: 'Arte sob medida' },
        { icon: 'Palette', title: 'Cores Vibrantes', desc: 'Impressão Full' },
        { icon: 'Target', title: 'Atraia Clientes', desc: 'Marketing eficaz' },
    ],
    // Talões
    taloes: [
        { icon: 'Receipt', title: '100 Folhas', desc: 'Por talão' },
        { icon: 'FileText', title: 'Praticidade', desc: '10 x 15 cm' },
        { icon: 'Award', title: 'Off-Set 90g', desc: 'Alta lisura' },
        { icon: 'ClipboardList', title: 'Organização', desc: 'Numerado' },
    ],
    // Planners
    planners: [
        { icon: 'Calendar', title: 'Organização Total', desc: 'Planner diário' },
        { icon: 'FileText', title: 'Espaço de Sobra', desc: 'A4 (21 x 29,7cm)' },
        { icon: 'Award', title: 'Off-Set 90g', desc: 'Ótima densidade' },
        { icon: 'ClipboardList', title: '100 Folhas', desc: 'Por bloco' },
    ],
    // Kits
    kits: [
        { icon: 'Package', title: 'Kit Completo', desc: 'Tudo em um' },
        { icon: 'Gift', title: 'Smart Choice', desc: 'Melhor custo-benefício' },
        { icon: 'Sparkles', title: 'Premium', desc: 'Qualidade garantida' },
        { icon: 'Repeat', title: 'Personalizado', desc: 'Com sua marca' },
    ],
    // Laudos
    laudos: [
        { icon: 'FileCheck', title: 'Credibilidade', desc: 'Laudo técnico' },
        { icon: 'FileText', title: 'A4 (21 x 29,7cm)', desc: 'Padrão oficial' },
        { icon: 'Award', title: 'Off-Set 90g', desc: 'Ótima densidade' },
        { icon: 'ClipboardList', title: '100 Folhas', desc: 'Frente e verso' },
    ],
    // Cadernetas
    cadernetas: [
        { icon: 'BookOpen', title: 'Guia de Cuidados', desc: 'Instruções claras' },
        { icon: 'FileText', title: 'Compacto', desc: '15 x 20 cm' },
        { icon: 'Award', title: 'Off-Set 90g', desc: 'Alta densidade' },
        { icon: 'Layers', title: 'Acabamento', desc: 'Vinco central' },
    ],
    // Prescrição Pós-Cirúrgica
    prescricaoPosCirurgica: [
        { icon: 'Copy', title: '100 Folhas', desc: 'Por bloco' },
        { icon: 'FileText', title: 'Clareza Total', desc: 'A4 (21 x 29,7cm)' },
        { icon: 'Award', title: 'Off-Set 90g', desc: 'Alta lisura' },
        { icon: 'ClipboardList', title: 'Instruções', desc: 'Pós-operatório' },
    ],
    // Fichas Cadastro
    fichasCadastro: [
        { icon: 'Users', title: 'Cadastro', desc: 'Cliente e pet' },
        { icon: 'FileText', title: 'Organização', desc: 'A4 (21 x 29,7cm)' },
        { icon: 'Award', title: 'Off-Set 90g', desc: 'Alta lisura' },
        { icon: 'Layers', title: 'Frente e Verso', desc: 'Campos detalhados' },
    ],
    // Passaporte Lite
    passaporteLite: [
        { icon: 'Shield', title: '40 Imunizações', desc: 'Espaço garantido' },
        { icon: 'Award', title: 'Acabamento Robusto', desc: '240g Alta Densidade' },
        { icon: 'FileText', title: '15 x 20 cm', desc: 'Formato aberto' },
        { icon: 'Layers', title: 'Miolo 90g', desc: 'Tons de cinza' },
    ],
    // Passaporte Premium
    passaportePremium: [
        { icon: 'Shield', title: '45 Imunizações', desc: 'Espaço extra' },
        { icon: 'Sparkles', title: 'Soft Touch', desc: 'Toque aveludado' },
        { icon: 'FileText', title: '15 x 20 cm', desc: 'Formato aberto' },
        { icon: 'Layers', title: 'Miolo 120g', desc: 'Mais encorpado' },
    ],
    // Ficha Clínica Full Face - Custom specs
    fichaFullFace: [
        { icon: 'Award', title: 'Off-Set 240g', desc: 'Qualidade premium' },
        { icon: 'Palette', title: 'Personalizado', desc: 'com sua identidade' },
        { icon: 'ClipboardList', title: 'Planejamento completo', desc: 'Segurança clínica' },
        { icon: 'Sparkles', title: 'Impressão digital', desc: 'Alta nitidez' },
    ],
    // Portfólio de apresentação
    portfolio: [
        { icon: 'Award', title: 'Papel especial', desc: 'Acabamento perolizado' },
        { icon: 'FileText', title: 'Tamanho amplo', desc: 'Estilo Pasta' },
        { icon: 'Sparkles', title: 'Personal Branding', desc: 'Pacientes High Ticket' },
        { icon: 'Palette', title: 'Criação exclusiva', desc: 'Arte sob medida' },
    ],
    // Guias do paciente
    guias: [
        { icon: 'Heart', title: 'Fidelização', desc: 'Amor e cuidado' },
        { icon: 'FileText', title: '15 x 20 cm', desc: 'Formato aberto' },
        { icon: 'Layers', title: 'Vinco Central', desc: 'Dobra única' },
        { icon: 'Award', title: 'Off-Set 240g', desc: 'Alta densidade' },
    ],
    // Cartão de Fidelidade
    cartaoFidelidade: [
        { icon: 'CreditCard', title: 'Formato Clássico', desc: '8,8 x 4,8 cm' },
        { icon: 'Award', title: 'Couché 250g', desc: 'Papel premium' },
        { icon: 'Sparkles', title: 'Envernizado', desc: 'Proteção e brilho' },
        { icon: 'Repeat', title: 'Fidelização', desc: 'Sua promoção' },
    ],
};

const getProductBadges = (slug: string | undefined, title: string | undefined, variants: any[] = []): FinishBadge[] => {
    if (!slug) return badgeCategories.blocosA5;
    const s = slug.toLowerCase();

    // Specific product overrides
    if (s === 'ficha-clinica-full-face' || s === 'prontuario-estetico') return badgeCategories.fichaFullFace;
    if (s === 'portfolio-de-apresentacao') return badgeCategories.portfolio;
    if (s === 'ficha-de-orcamento') return badgeCategories.blocosA4Simplex;
    if (s === 'cartao-boas-vindas') return badgeCategories.guias;
    if (s === 'cartao-fidelidade-estetica') return badgeCategories.cartaoFidelidade;
    if (s.startsWith('guia-')) return badgeCategories.guias;
    if (s.includes('cartao-vacina-pet-passaporte')) return badgeCategories.passaporteLite;
    if (s.includes('cartao-vacina-vet-passaporte')) return badgeCategories.passaportePremium;
    if (s.includes('timbrado')) return badgeCategories.timbrado;

    const t = (title || '').toLowerCase();

    if (variants && variants.length > 0) {
        const firstVariant = variants[0].node || variants[0];
        const priceVal = firstVariant?.price?.amount || firstVariant?.price;
        const startPrice = typeof priceVal === 'string' ? parseFloat(priceVal) : (typeof priceVal === 'number' ? priceVal : 0);

        const isPrice = (target: number) => Math.abs(startPrice - target) < 0.1;

        if (isPrice(131.90)) return badgeCategories.blocosA5;
        if (isPrice(179.90)) return badgeCategories.blocosA4Simplex;
        if (isPrice(237.90)) return badgeCategories.blocosA4;

        if (isPrice(115.90)) {
            return badgeCategories.taloes;
        }
    }

    if (s === 'prescricao-pos-cirurgica-veterinaria-1' || s === 'prescricao-pos-cirurgica-veterinaria') {
        return badgeCategories.blocosA4Simplex;
    }

    if (s.includes('atestado') && s.includes('viagem')) return badgeCategories.blocosA4Simplex;

    if (s.includes('termo') && (s.includes('anestesia') || s.includes('cirurgia') || s.includes('internacao'))) {
        return badgeCategories.blocosA5;
    }

    if (s.includes('ima-') || s.includes('iman-') || s === 'ima' || t.includes('ímã')) {
        return badgeCategories.imas;
    }

    if (s.includes('kit') || t.includes('kit')) {
        return badgeCategories.kits;
    }

    if (s.includes('panfleto') || s.includes('flyer') || s.includes('folder') || t.includes('panfleto') || t.includes('flyer') || t.includes('folder')) {
        return badgeCategories.panfletos;
    }

    if (s.includes('cartao-visita') || s.includes('cartao-de-visita') || t.includes('cartão de visita')) {
        return badgeCategories.cartaoVisita;
    }

    if (s.includes('envelope')) {
        if (s.includes('documento') || s.includes('saco')) {
            return badgeCategories.envelopesSaco;
        }
        return badgeCategories.envelopes;
    }

    if (s.includes('pasta')) {
        return badgeCategories.pastas;
    }

    if (s.includes('certificado') || s.includes('diploma') || t.includes('certificado')) {
        return badgeCategories.certificados;
    }

    if ((s.includes('equino') || t.includes('equino')) && !s.includes('formulario')) {
        return badgeCategories.equinos;
    }

    if ((s.includes('felino') || t.includes('felino')) && (s.includes('vacina') || s.includes('carteira') || t.includes('vacinação'))) {
        return badgeCategories.felinos;
    }

    if (s.includes('passaporte')) {
        return s.includes('lite') ? badgeCategories.passaporteLite : badgeCategories.passaportePremium;
    }

    if ((s.includes('trio') && (s.includes('vacina') || s.includes('cartao'))) || t.includes('trio')) {
        return [
            ...badgeCategories.trio.filter(b => b.icon !== 'Layers'),
            { icon: 'Layers', title: '2 Vincos', desc: 'Dobras paralelas' }
        ];
    }

    if ((s.includes('vacina') && s.includes('duo')) ||
        (s.includes('cartao') && s.includes('vacina') && !s.includes('calendario')) || t.includes('duo')) {
        return badgeCategories.duo;
    }

    if (s.includes('caderneta') || s.includes('instrucoes') || s.includes('instrucao')) {
        return badgeCategories.cadernetas;
    }

    if (s.includes('silvestres') || s.includes('ficha-manejo-aves')) {
        return badgeCategories.avesSilvestres;
    }

    if (!s.includes('laudo-teste-alergico') && !s.includes('dor')) {
        if (s.includes('quimioterapia') || s.includes('cardiolog') || s.includes('cardiopata') ||
            s.includes('renal') || s.includes('nefro') ||
            s.includes('aves') || s.includes('atopic') || s.includes('manejo')) {
            return badgeCategories.acompanhamento;
        }
    }

    if (s.includes('dor') && s.includes('carteira')) {
        return badgeCategories.acompanhamento;
    }

    if (s.includes('a4') || t.includes('a4') ||
        s.includes('ficha') || s.includes('prontuario') || s.includes('timbrado') ||
        s.includes('anamnese') ||
        s.includes('viagem') || s.includes('transporte') ||
        s.includes('laudo') ||
        s.includes('solicitacao') || s.includes('requisicao') ||
        s.includes('internacao') || s.includes('internamento') ||
        s.includes('cirurgia') || s.includes('anestesia') ||
        s.includes('oncologia') || s.includes('dermatologia') ||
        s.includes('oftalmologia') || s.includes('endocrinologia') ||
        s.includes('neurologico') || s.includes('fisiatria') ||
        s.includes('acupuntura') ||
        (s.includes('formulario') && s.includes('equino'))) {
        return badgeCategories.blocosA4;
    }

    if (s.includes('autocopiativ') || t.includes('autocopiativ') || s.includes('2-vias')) {
        return badgeCategories.autocopiativo;
    }

    if (s.includes('recibo') || s.includes('comanda') || s.includes('tabela-de-controle') ||
        s.includes('medicacao') || t.includes('recibo') || t.includes('comanda')) {
        if (s.includes('prescricao-pos')) return badgeCategories.prescricaoPosCirurgica;
        return badgeCategories.taloes;
    }

    if (s.includes('prescricao-pos')) {
        return badgeCategories.prescricaoPosCirurgica;
    }

    if (s.includes('marcacao') || s.includes('calendario') || s.includes('agendamento') ||
        t.includes('cartão de marcação')) {
        return badgeCategories.cartoes;
    }

    if (s.includes('planner') || s.includes('agenda')) {
        return badgeCategories.planners;
    }

    if (s.includes('cadastro')) {
        return badgeCategories.fichasCadastro;
    }

    if (s.includes('termo') || s.includes('receituario') || s.includes('atestado') ||
        s.includes('carta') || s.includes('bloco') || s.includes('formulario') ||
        s.includes('laudo-teste-alergico')) {
        return badgeCategories.blocosA5;
    }

    return badgeCategories.blocosA5;
};

const getBadgeSectionLabel = (slug: string | undefined, title: string | undefined): string => {
    if (!slug) return 'Especificações:';
    const s = slug.toLowerCase();
    if (s.includes('envelope')) return 'Especificações';
    if (s.includes('pasta')) return 'Eleve a percepção da sua imagem:';
    if (s.includes('cartao-de-visita') || s.includes('cartao-visita')) return 'Acabamento Premium:';
    return 'Especificações:';
};



interface ProductPageContentProps {
    slug?: string;
    collectionSlug?: string;
    initialProduct: ProductNode['node'];
}

export default function ProductPageContent({ slug: propSlug, collectionSlug: propCollection, initialProduct }: ProductPageContentProps) {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Use props if available, otherwise params handled by wrapper but component is designed to take props
    const productSlug = propSlug;
    const urlCollection = propCollection;

    const product = initialProduct;
    // We don't need useProduct since we have initialProduct from SSR
    const { products: navProducts } = useProductNavigation(urlCollection || product.primaryCollection || 'grafica-estetica');
    const currentCollection = urlCollection || product.primaryCollection || 'grafica-estetica';

    const addItem = useCartStore((state) => state.addItem);
    const setSelectedInstallment = useCartStore((state) => state.setSelectedInstallment);
    const cartIsLoading = useCartStore((state) => state.isLoading);

    const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
    const [formKey, setFormKey] = useState(0);
    const [personalizationData, setPersonalizationData] = useState<{
        text: string;
        file: File | null;
        uploadedUrl: string | null;
    }>({ text: '', file: null, uploadedUrl: null });

    useEffect(() => {
        if (product && product.options?.length && product.variants?.edges?.length) {
            const defaultSelections = product.options.reduce((acc: any, opt: any) => {
                acc[opt.name] = opt.values[0];
                return acc;
            }, {} as Record<string, string>);

            const defaultIndex = product.variants.edges.findIndex((v: any) => {
                return v.node.selectedOptions.every((opt: any) => defaultSelections[opt.name] === opt.value);
            });

            if (defaultIndex !== -1) {
                setSelectedVariantIndex(defaultIndex);
            } else {
                setSelectedVariantIndex(0);
            }
        }
    }, [product]);

    const { prevProduct, nextProduct } = useMemo(() => {
        if (!productSlug || navProducts.length === 0) return { prevProduct: null, nextProduct: null };
        const currentIndex = navProducts.findIndex(p => p.handle === productSlug);
        if (currentIndex === -1) return { prevProduct: null, nextProduct: null };
        const prevIndex = (currentIndex - 1 + navProducts.length) % navProducts.length;
        const nextIndex = (currentIndex + 1) % navProducts.length;
        return {
            prevProduct: navProducts[prevIndex],
            nextProduct: navProducts[nextIndex],
        };
    }, [productSlug, navProducts]);

    const variants = product?.variants?.edges || [];
    const selectedVariant = variants[selectedVariantIndex]?.node;
    const options = product?.options || [];

    const mediaItems = useMemo<ProductMediaItem[]>(() => {
        const allImages = product?.images?.edges || [];
        const items: ProductMediaItem[] = allImages
            .filter((img: any) => {
                const url = img.node.url;
                return !FILTERED_IMAGE_URLS.some(filter => url.includes(filter));
            })
            .map((img: any) => ({
                type: 'image',
                url: img.node.url,
                alt: img.node.altText || product?.title
            }));

        if (productSlug === 'cartao-vacina-vet-passaporte') {
            items.splice(1, 0, {
                type: 'video',
                url: passaporteVideo,
                alt: 'Vídeo do Passaporte Esthétique'
            });
        }



        return items;
    }, [product?.images?.edges, productSlug, product?.title]);

    const mainImage = mediaItems.find(i => i.type === 'image')?.url;

    const price = selectedVariant ? parseFloat(selectedVariant.price.amount) : 0;

    const handleAddToCart = useCallback(async () => {
        if (!product || !selectedVariant) return;

        await addItem({
            product: { node: product },
            variantId: selectedVariant.id,
            variantTitle: selectedVariant.title,
            price: selectedVariant.price,
            quantity: 1,
            selectedOptions: selectedVariant.selectedOptions || [],
            productPath: `/${currentCollection}/${productSlug}`,
            personalization: personalizationData.text || personalizationData.uploadedUrl ? {
                text: personalizationData.text,
                logoUrl: personalizationData.uploadedUrl,
            } : undefined,
        });

        setPersonalizationData({ text: '', file: null, uploadedUrl: null });
        setFormKey(prev => prev + 1);
    }, [product, selectedVariant, addItem, personalizationData]);

    const handleAddToCartWithInstallment = useCallback(async (installments: number) => {
        await handleAddToCart();
        setSelectedInstallment(installments);
    }, [handleAddToCart, setSelectedInstallment]);

    const formatPrice = (value: number | string | any) => {
        const numValue = typeof value === 'string' ? parseFloat(value) : value;
        if (isNaN(numValue) || numValue === null || numValue === undefined) return 'R$ 0,00';

        return numValue.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    };

    // SSR already handled loading/error cases at the page level.
    // By providing initialProduct, we jump straight to rendering.

    const displayTitle = product.title.replace(/\s*\(2 Vias\)\s*/i, '');

    // Split on raw description BEFORE sanitizing (sanitizer collapses \n\n into spaces)
    const rawParts = (product.description || '').split('\n\n');
    const descCopy = getCleanDescription(productSlug, rawParts[0] || '');
    const descSpecs = rawParts.slice(1).join(' ').trim();

    const SPECS_SUFFIX = 'Material personalizado, com sensibilidade artística e feito sob medida para você. Aprovação simples, humana e prática, via WhatsApp.';

    const specsGradient: React.CSSProperties = {
        background: 'linear-gradient(135deg, #9a6540 0%, #52301a 42%, #a87248 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    };

    // Dynamic quote lines based on product category
    const quoteLines: [string, string | null] = (() => {
        if (productSlug.startsWith('guia-')) {
            return ['Materiais visuais e explicativos.', 'Uma ferramenta chave para fechar orçamentos.'];
        }
        if (productSlug.startsWith('termo-') || productSlug.startsWith('contrato-')) {
            return ['Termos revisados por especialistas em direito na saúde.', 'Materiais que te resguardam em casos de intercorrências.'];
        }
        if (productSlug.startsWith('anamnese-')) {
            return ['Desenvolvidas para a singularidade de cada tratamento.', 'Funcionalidade, design e riqueza de informações.'];
        }
        if (
            productSlug.startsWith('ficha-') ||
            productSlug.startsWith('prontuario-')
        ) {
            return ['Organização transmite confiança.', 'Design eleva a percepção do seu atendimento.'];
        }
        // Papelaria essencial: receituários, envelopes, cartões, planners, etc.
        return ['Onde sua clínica ganha autoestima.', 'Design e qualidade que comunicam valor.'];
    })();

    return (
        <div className="min-h-screen">

            <Header />
            <CartDrawer onContinueShopping={() => setIsSearchOpen(true)} />
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

            <main className="min-h-screen pb-28 md:pb-0">
                <div className="px-4 pt-4 md:container md:mx-auto md:pt-6">
                    <div className="flex items-center justify-between mb-2 md:mb-0">
                        {prevProduct ? (
                            <Link
                                href={`/${prevProduct.primaryCollection || currentCollection}/${prevProduct.handle}`}
                                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors group"
                            >
                                <ArrowLeft className="w-4 h-4 text-accent group-hover:-translate-x-0.5 transition-transform" />
                                <span className="hidden lg:inline">Anterior</span>
                            </Link>
                        ) : (
                            <div className="w-4 h-4 lg:hidden"></div>
                        )}

                        <Breadcrumbs
                            items={[
                                { name: getCollectionMetadata(currentCollection)?.title || 'Catálogo', url: `/${currentCollection}` },
                                { name: displayTitle, url: `/${currentCollection}/${productSlug}` }
                            ]}
                            className="hidden lg:flex"
                        />

                        {/* Mobile + Tablet — collection name between the arrows */}
                        <div className="lg:hidden">
                            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
                                {getCollectionMetadata(currentCollection)?.title || 'Catálogo'}
                            </span>
                        </div>

                        {nextProduct ? (
                            <Link
                                href={`/${nextProduct.primaryCollection || currentCollection}/${nextProduct.handle}`}
                                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors group"
                            >
                                <span className="hidden lg:inline">Próximo</span>
                                <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        ) : (
                            <div className="w-4 h-4 lg:hidden"></div>
                        )}
                    </div>
                </div>

                <section className="px-4 pt-6 pb-10 md:container md:mx-auto md:py-12 lg:py-16">
                    <div className="block lg:hidden space-y-0 md:space-y-6">
                        <div>
                            <h1 className="text-2xl font-heading text-foreground mb-3">
                                {displayTitle}
                            </h1>
                            <div className="flex flex-row items-center gap-3.5 mt-1 mb-4">
                                <GoogleRatingTag />
                            </div>
                            <p className="text-[13px] md:text-sm text-muted-foreground leading-relaxed mb-3">
                                {descCopy}
                            </p>
                            <p className="text-[13px] md:text-sm text-muted-foreground leading-relaxed mb-3">
                                Material personalizado, com sensibilidade artística e feito sob medida para você.
                            </p>
                            <p className="text-[13px] md:text-sm text-muted-foreground leading-relaxed mb-3">
                                Aprovação simples, humana e prática, via WhatsApp.
                            </p>
                            {descSpecs && (
                                <p className="text-[13px] md:text-sm leading-relaxed">
                                    <span className="font-semibold" style={specsGradient}>{descSpecs}</span>
                                </p>
                            )}
                        </div>

                        <div className="h-[36px] block md:hidden" />

                        <ProductGallery
                            media={mediaItems}
                            productName={displayTitle}
                        />

                        <div className="h-[36px] block md:hidden" />

                        <div>
                            <div className="flex items-baseline gap-2 mb-1">
                                <span className="text-3xl font-heading text-foreground">{formatPrice(price)}</span>
                                <span className="text-xs text-muted-foreground">
                                    ({selectedVariant?.title})
                                </span>
                            </div>
                            <div className="text-sm flex items-center gap-1.5 mb-1">
                                <span className="text-muted-foreground">ou {formatPrice(price * 0.9)}</span>
                                <span className="text-pix font-semibold">10% de desconto no PIX</span>
                            </div>
                        </div>

                        <div className="h-[36px] block md:hidden" />

                        {variants.length > 1 && (
                            <ProductVariantSelector
                                options={options}
                                variants={variants}
                                selectedVariantIndex={selectedVariantIndex}
                                onVariantChange={setSelectedVariantIndex}
                                formatPrice={formatPrice}
                                productHandle={productSlug}
                            />
                        )}

                        <div className="h-[36px] block md:hidden" />

                        {getProductBadges(productSlug, product?.title, variants).length > 0 && (
                            <div className="space-y-2">
                                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                                    {getBadgeSectionLabel(productSlug, product?.title)}
                                </p>
                                <FinishBadges badges={getProductBadges(productSlug, product?.title, variants)} />
                            </div>
                        )}

                        <div className="h-[36px] block md:hidden" />

                        <div className="space-y-5 pb-2">
                            <PricingCard price={price} quantity={1} onAddToCartWithInstallment={handleAddToCartWithInstallment} />
                        </div>

                        <div className="h-[36px] block md:hidden" />

                        <PersonalizationForm productHandle={productSlug || ''} onPersonalizationChange={setPersonalizationData} />

                        <div className="h-[36px] block md:hidden" />

                        {/* Add to cart — inline below personalization on mobile */}
                        <button
                            onClick={handleAddToCart}
                            disabled={!selectedVariant?.availableForSale || cartIsLoading}
                            className="lg:hidden w-full h-12 bg-logo-gradient text-white font-semibold rounded-full shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {cartIsLoading ? (
                                <span className="flex items-center gap-2">
                                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                                    Adicionando...
                                </span>
                            ) : !selectedVariant?.availableForSale ? (
                                'Esgotado'
                            ) : (
                                <>
                                    <ShoppingCart className="w-4 h-4" />
                                    Adicionar ao Carrinho
                                </>
                            )}
                        </button>

                        <div className="h-[36px] block md:hidden" />

                        {/* Brand quote — shown on all products, right before trust badges */}
                        <div className="pl-4 border-l-2 border-l-transparent" style={{ borderImage: 'linear-gradient(to bottom, #c9a48a, #8b6f5c) 1' }}>
                            <p className="text-[12px] md:text-[13px] text-foreground/70 leading-relaxed font-semibold mb-2">
                                {quoteLines[0]}{quoteLines[1] && <><br />{quoteLines[1]}</>}
                            </p>
                            <p className="text-[12px] md:text-[13px] text-muted-foreground leading-relaxed">
                                Na <span className="font-semibold" style={{ background: 'linear-gradient(135deg, #b8815a 0%, #7a4f35 42%, #c4906a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Esthétique</span>, cada layout foi desenvolvido por diretores de arte com profunda expertise na área da saúde. Um padrão de qualidade incomparável para que seus atendimentos revelem a verdadeira essência da estética. Trabalhamos com profissionais que querem encantar e criar conexões de alto impacto com seus pacientes.
                            </p>
                        </div>

                        <div className="h-[36px] block md:hidden" />

                        <TrustBadges />
                    </div>

                    <div className="hidden lg:grid lg:grid-cols-2 gap-12 xl:gap-20">
                        <div>
                            <ProductGallery
                                media={mediaItems}
                                productName={displayTitle}
                            />
                        </div>

                        <div className="space-y-8 sticky top-24 self-start">
                            <div>
                                <h1 className="text-4xl font-heading text-foreground mb-4">
                                    {displayTitle}
                                </h1>
                                <div className="flex flex-row items-center gap-4 mb-6">
                                    <GoogleRatingTag />
                                </div>
                                <p className="text-base text-muted-foreground leading-relaxed mb-3">
                                    {descCopy}
                                </p>
                                <p className="text-base text-muted-foreground leading-relaxed mb-3">
                                    Material personalizado, com sensibilidade artística e feito sob medida para você.<br />
                                    Aprovação simples, humana e prática, via WhatsApp.
                                </p>
                                {descSpecs && (
                                    <p className="text-base leading-relaxed">
                                        <span className="font-semibold" style={specsGradient}>{descSpecs}</span>
                                    </p>
                                )}

                                {/* Brand quote — shown on all products */}
                                <div className="mt-5 pl-4 border-l-2 border-l-transparent" style={{ borderImage: 'linear-gradient(to bottom, #c9a48a, #8b6f5c) 1' }}>
                                    <p className="text-sm text-foreground/70 leading-relaxed font-semibold mb-2">
                                        {quoteLines[0]}{quoteLines[1] && <><br />{quoteLines[1]}</>}
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Na <span className="font-semibold" style={{ background: 'linear-gradient(135deg, #b8815a 0%, #7a4f35 42%, #c4906a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Esthétique</span>, cada layout foi desenvolvido por diretores de arte com profunda expertise na área da saúde. Um padrão de qualidade incomparável para que seus atendimentos revelem a verdadeira essência da estética. Trabalhamos com profissionais que querem encantar e criar conexões de alto impacto com seus pacientes.
                                    </p>
                                </div>
                            </div>

                            {variants.length > 1 && (
                                <ProductVariantSelector
                                    options={options}
                                    variants={variants}
                                    selectedVariantIndex={selectedVariantIndex}
                                    onVariantChange={setSelectedVariantIndex}
                                    formatPrice={formatPrice}
                                    productHandle={productSlug}
                                />
                            )}

                            {getProductBadges(productSlug, product?.title, variants).length > 0 && (
                                <div className="space-y-3">
                                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                        {getBadgeSectionLabel(productSlug, product?.title)}
                                    </p>
                                    <FinishBadges badges={getProductBadges(productSlug, product?.title, variants)} />
                                </div>
                            )}

                            <div className="space-y-6 bg-secondary/30 p-8 rounded-3xl border border-border/50">
                                <div className="flex items-baseline gap-3">
                                    <span className="text-4xl font-heading text-foreground">{formatPrice(price)}</span>
                                    <span className="text-sm text-muted-foreground">
                                        ({selectedVariant?.title})
                                    </span>
                                </div>

                                <div className="space-y-6">
                                    <PricingCard price={price} quantity={1} onAddToCartWithInstallment={handleAddToCartWithInstallment} />
                                    <PersonalizationForm productHandle={productSlug || ''} onPersonalizationChange={setPersonalizationData} />
                                </div>

                                <div className="pt-6 border-t border-border">
                                    <button
                                        onClick={handleAddToCart}
                                        disabled={!selectedVariant?.availableForSale || cartIsLoading}
                                        className="w-full h-14 btn-clay bg-logo-gradient text-white hover:brightness-105 rounded-full shadow-lg transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base font-semibold"
                                    >
                                        {cartIsLoading ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                                                Adicionando...
                                            </span>
                                        ) : !selectedVariant?.availableForSale ? (
                                            'Esgotado'
                                        ) : (
                                            <>
                                                <ShoppingCart className="w-5 h-5" />
                                                Adicionar ao Carrinho
                                            </>
                                        )}
                                    </button>
                                </div>

                                <TrustBadges />
                            </div>
                        </div>
                    </div>
                </section>


            </main>
            <FloatingWhatsApp />
            <Footer />
        </div >
    );
}
