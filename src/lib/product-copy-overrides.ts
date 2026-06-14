/**
 * Frontend copy overrides for products.
 * This module provides clean descriptions for products with legacy or generic data.
 * 
 * Issues addressed:
 * 1. Branding consistency → "Esthétique"
 * 2. Terminology alignment → "veterinários"
 * 3. Legacy shipping / production boilerplate removal
 * 4. Mismatched descriptions (wrong product described)
 */

// Products with completely mismatched descriptions that need full override
export const PRODUCT_DESCRIPTION_OVERRIDES: Record<string, string> = {
  // ID 8412848652496 - Receituário describes Cardiology Card
  'receituario-veterinario':
    'Blocos de receituário veterinário com 100 folhas em papel Paperfect Offset 90g/m². Formato A5 (14,8 x 21 cm) ou A4 (21 x 29,7 cm). Superfície lisa ideal para escrita precisa. Acabamento blocado com corte limpo.',

  // ID 8412848685264 - Timbrado A4 describes Renal Card  
  'timbrado-a4-veterinaria':
    'Papel timbrado A4 veterinário em blocos de 100 folhas. Impresso em Paperfect Offset 90g/m² de alta lisura e opacidade. Formato padrão 21 x 29,7 cm. Ideal para comunicação oficial e documentos clínicos.',

  // ID 8412848718032 - Receituário 2 Vias describes Bird Card
  'receituario-especial-em-2-vias-autocopiativas-para-veterinarios':
    'Receituário de controle especial em 2 vias autocopiativas. Papel carbonado para cópia instantânea. Formato A5 padrão clínico. Disponível em 11 cores diferentes. Ideal para prescrições que exigem via de arquivo.',

  // Cartão de visita - has Med Logos branding
  'cartao-visita-veterinario-arredondado':
    'Cartão de visita premium em Couché 300g/m² com laminação fosca e verniz localizado. O acabamento confere brilho seletivo e leve relevo ao toque. Formato 8,8 x 4,8 cm with alta nitidez. Disponível com bordas retas ou cantos arredondados.',

  // Envelope ofício - has Med Logos branding
  'envelope-oficio-veterinario-personalizado':
    'Envelope ofício veterinário em Paperfect Offset 90g/m². Formato 11,4 x 23 cm, ideal para correspondências clínicas, receitas e documentos. Design moderno com acabamento profissional.',

  // Envelope exames - has Med Logos branding
  'envelope-para-exames-veterinario-24x34cm':
    'Envelope saco para exames veterinários em Paperfect Offset 90g/m². Formato 24 x 34 cm, ideal para acondicionar laudos, radiografias e documentos clínicos com segurança.',

  // Pastas personalizadas - wrong vendor (Gráfica Harmonize)
  'pastas-personalizadas-para-clinicas-veterinarias':
    'Pastas A4 em papel couchê 250g or 300g com alta rigidez. Disponíveis com orelhas para grampear ou bolsa branca interna para documentos. Opções sem enobrecimento ou com laminação fosca externa. Versão Super Premium inclui impressão e laminação interna e externa.',

  // Kit completo - clean marketing copy
  'kit-papelaria-veterinaria-completa':
    'Kits veterinários completos com toda a papelaria essencial para sua clínica. Todos os itens personalizados com sua marca. Escolha o kit ideal para o tamanho da sua operação.',

  // Receituário de controle especial
  'receituario-controle-especial-veterinario':
    'Receituário de controle especial para prescrição de medicamentos controlados. Impresso em Paperfect Offset 90g/m² com alta lisura e nitidez. Formato A5 padrão clínico. Cada bloco possui 100 folhas com acabamento blocado.',

  // Ficha de manejo de aves silvestres - remove incorrect text about weight tables
  'ficha-manejo-aves-silvestres':
    'Caderneta de manejo para aves silvestres e exóticas. Impresso em Offset 240g/m² de alta densidade. Formato 15 x 20 cm com vinco central. Ideal para veterinários especializados em animais silvestres.',

  // ID 8412848521488 - Passaporte Lite
  'cartao-vacina-pet-passaporte':
    'A sofisticação do formato passaporte com custo-benefício otimizado.\n\nA carteira de vacina veterinária Passaporte Lite preserva a experiênciapremium do modelo passaporte, mantendo a estrutura de livreto grampeado (tipo brochura) com múltiplas páginas — ideal para longos históricos vacinais.\n\nCom revestimento em papel Off-Set Super 6 Plus 240g de alta densidade garante resistência, excelente acabamento e aparência profissional. Uma solução inteligente para clínicas que desejam estética refinada, alta capacidade de registro e viabilidade para grandes volumes de atendimento.',
  // Carteira Controle de Cães Atópicos
  'carteira-controle-caes-atopicos':
    'A dermatite atópica é um desafio de longo prazo. Esta carteira de controle ajuda a monitorar crises (flare-ups), registrar medicamentos, controle de ectoparasitas e alimentação hipoalergênica. Revestida em papel 240g/m², serve como um diário clínico para o tutor e o dermatologista. O layout inclui escalas de prurido e mapas simplificados. Essencial para a dermatologia veterinária, pois aumenta a adesão ao tratamento multimodal.',
};

// Regex patterns for sanitizing legacy text from descriptions
const LEGACY_TEXT_PATTERNS = [
  // Production/shipping text
  /Produção em até 12 dias úteis\.?\s*/gi,
  /Envio via Correios\.?\s*/gi,
  /Envio realizado pelos Correios[^.]*\.?\s*/gi,
  /Não é possível fracionar a tiragem[^.]*\.?\s*/gi,

  // Med Logos branding (replace with Esthétique)
  /Na Med Logos?,?\s*/gi,
  /Med Logos/gi,

  // Generic intro that mentions "médicos" 
  /tudo começa with design, e termina como percepção de valor\.\s*/gi,
  /Nossos impressos foram criados para impressionar:?\s*/gi,
  /pensados para médicos que sabem que cada material é mais do que papel\.?\s*/gi,
  /Ao investir no nosso trabalho, você está presenteando a sua própria imagem profissional\.?\s*/gi,
  /Design chama atenção\.\s*/gi,
  /Qualidade constrói reputação\.?\s*/gi,

  // Personalization methods block (moved to UI section)
  /Métodos de personalização disponíveis\s*/gi,
  /Escolha nosso desenho pré-desenvolvido para este produto[^;]*;\s*/gi,
  /criado para transmitir sofisticação, elegância e cuidado;\s*/gi,
  /Envie um logotipo já existente[^;]*;\s*/gi,
  /preferencialmente em formato vetorial \(Corel Draw ou Illustrator\)[^;]*;\s*/gi,
  /ou PNG de alta resolução with fundo transparente;\s*/gi,
  /Anexe até 3 arquivos da sua identidade visual[^.]*\.\s*/gi,

  // Art approval block (moved to UI section)
  /Aprovação da arte final\s*/gi,
  /Após a confirmação do pedido, nossa equipe entrará em contato pelo WhatsApp[^.]*\.\s*/gi,
  /Você poderá solicitar ajustes e correções[^.]*\.\s*/gi,

  // Shipping section
  /Prazos e envio\s*/gi,
  /com rastreamento nacional\.?\s*/gi,
  /É a escolha preferida de clínicas premium que desejam entregar um "passaporte de saúde" robusto\.?\s*/gi,
];

// Term replacements (run after pattern removal)
const TERM_REPLACEMENTS: [RegExp, string][] = [
  [/médicos/gi, 'veterinários'],
  [/médico/gi, 'veterinário'],
  [/clínica médica/gi, 'clínica veterinária'],
  [/consultório médico/gi, 'consultório veterinário'],
  [/oferece área expandida para registro de vacinas polivalentes, raiva, gripe, giardia e leishmaniose,/gi, 'oferece área com protocolo vacinal totalmente personalizável,'],
];

/**
 * Get the clean description for a product.
 * Priority:
 * 1. Check for explicit override by slug
 * 2. Sanitize the raw description
 */
export function getCleanDescription(slug: string | undefined, rawDescription: string): string {
  if (!slug) {
    return sanitizeDescription(rawDescription);
  }

  const s = slug.toLowerCase();

  // Check for explicit override
  for (const [key, override] of Object.entries(PRODUCT_DESCRIPTION_OVERRIDES)) {
    if (s.includes(key) || s === key) {
      return override;
    }
  }

  // Fall back to sanitized raw description
  return sanitizeDescription(rawDescription);
}

/**
 * Sanitize a raw description by removing legacy text and fixing terminology.
 */
export function sanitizeDescription(description: string): string {
  if (!description) return '';

  let result = description;

  // Remove legacy text patterns
  for (const pattern of LEGACY_TEXT_PATTERNS) {
    result = result.replace(pattern, '');
  }

  // Apply term replacements
  for (const [pattern, replacement] of TERM_REPLACEMENTS) {
    result = result.replace(pattern, replacement);
  }

  // Clean up whitespace
  result = result
    .replace(/\s+/g, ' ')
    .replace(/\s+\./g, '.')
    .replace(/\.\s*\./g, '.')
    .trim();

  // Remove leading punctuation or conjunctions
  result = result.replace(/^[,.;\s]+/, '');

  return result;
}
