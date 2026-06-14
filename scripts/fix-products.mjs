/**
 * fix-products.mjs
 * 1. Copies /public/products/newplaceholder.webp → /public/products/{handle}.webp
 *    for every product currently pointing at the placeholder
 * 2. Updates products.json image URLs to use the new handle-named files
 * 3. Adds/fills descriptions for all products that are missing them
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PRODUCTS_JSON = path.join(ROOT, 'src/data/products.json');
const PRODUCTS_DIR = path.join(ROOT, 'public/products');
const PLACEHOLDER = path.join(PRODUCTS_DIR, 'newplaceholder.webp');

// ─── Descriptions for products ────────────────────────────────────────────────
const DESCRIPTIONS = {
    // ── Fichas clínicas ──
    'ficha-botox': 'Ficha clínica completa para aplicação de toxina botulínica (Botox). Inclui campos de anamnese, mapeamento facial, diluição e pontos de aplicação. Ideal para harmonização facial e tratamentos com botulinum toxina tipo A.',
    'ficha-planejamento-botox-v2': 'Ficha de planejamento avançado para toxina botulínica. Versão 2 com diagrama facial detalhado, campos de registro de unidades por região, contraindicações e evolução de sessões. Perfeita para protocolos de botox e bioestimulação.',
    'ficha-harmonizacao-facial': 'Ficha de anamnese e planejamento para harmonização facial completa. Contempla avaliação da proporcionalidade, histórico de procedimentos, expectativas do paciente e plano de tratamento personalizado com diagrama facial.',
    'ficha-hof-harmonizacao-orofacial-v2': 'Ficha clínica especializada para harmonização orofacial (HOF). Versão 2 com campos para odontopedia e estética, planejamento de botox, preenchimento periorofacial e registro fotográfico padronizado.',
    'ficha-preenchedor-hialuronico': 'Ficha de anamnese e aplicação para preenchimento com ácido hialurônico. Registro de volume injetado por região, marca do produto, lote, validade e acompanhamento de resultados. Essencial para rastreabilidade clínica.',
    'ficha-preenchedores-masculina': 'Ficha clínica de preenchimento dérmico desenvolvida para o universo masculino. Contempla avaliação das características faciais masculinas, campos específicos para harmonização e registro de aplicação por região.',
    'ficha-preenchimento-dermico': 'Ficha de registro completo para preenchimento dérmico com ácido hialurônico, hidroxiapatita de cálcio e outros bioestimuladores. Inclui anamnese, consentimento técnico e evolução do tratamento.',
    'ficha-clinica-full-face': 'Ficha clínica full face para planejamento e registro de procedimentos faciais completos. Diagrama facial frontal e lateral, campos para botox, preenchimento, bioestimuladores e fios de PDO em um único documento.',
    'ficha-preenchimento-labial': 'Ficha especializada para preenchimento labial. Inclui avaliação prévia dos lábios, proporções ideais, volume a ser injetado, técnica utilizada e cuidados pós-procedimento. Indispensável para protocolos de lip filler.',
    'ficha-rinomodelacao-estetica': 'Ficha de rinomodelação não cirúrgica com campos para avaliação do perfil nasal, pontos de aplicação, volume injetado e fotodocumentação. Ideal para procedimentos de rinomodelação com ácido hialurônico.',
    'ficha-toxina-botulinica-hiperidrose': 'Ficha específica para tratamento de hiperidrose com toxina botulínica. Campos para mapeamento das áreas de sudorese excessiva (axila, mãos, pés), diluição utilizada e pontos de aplicação padronizados.',
    'ficha-bioestimulador-colageno': 'Ficha de bioestimulador de colágeno (Sculptra, Radiesse, Ellansé). Registro de protocolo, diluição, quantidade de frascos, regiões tratadas e acompanhamento de resultados ao longo das sessões.',
    'ficha-aplicacao-fios-pdo': 'Ficha clínica para aplicação de fios de PDO (polidioxanona). Mapa de inserção de fios, tipos utilizados (liso, espiral, cog), regiões tratadas, contraindicações e protocolo pós-procedimento.',
    'ficha-skinbooster': 'Ficha de skinbooster para registro de hidratação profunda com ácido hialurônico. Campos para tipo de produto, concentração, técnica de aplicação (retrotraço, napagem), regiões tratadas e evolução da hidratação cutânea.',
    'ficha-sessoes-ultraformer-mpt-hifu': 'Ficha de sessões de Ultraformer MPT e HIFU (High Intensity Focused Ultrasound). Registro de parâmetros de energia, profundidade, linhas de passes, regiões tratadas e evolução do lifting não invasivo.',
    'ficha-sculptra-acido-polilatico-pla': 'Ficha de Sculptra — ácido poli-L-lático (PLA). Protocolo de reconstituição, volume total injetado, sessões realizadas, diluição e acompanhamento fotográfico da neocolagênese progressiva.',
    'ficha-harmonizacao-glutea': 'Ficha de harmonização glútea com registro de avaliação corporal, proporções, bioestimuladores ou preenchedores utilizados, volume por região e evolução fotográfica do contorno corporal.',
    'ficha-harmonizacao-corporal': 'Ficha de harmonização corporal completa. Avaliação de biótipo, medidas antropométricas, procedimentos indicados (enzimas, intradermoterapia, bioestimulação), e acompanhamento de resultados.',
    'ficha-mmp-capilar-intradermo': 'Ficha de MMP capilar — microagulhamento com intradermoterapia. Registro de protocolo, substâncias infiltradas, concentração, número de passes e evolução da saúde capilar. Ideal para tratamento de alopecia e tricologia.',
    'ficha-tratamentos-esteticos': 'Ficha geral de tratamentos estéticos. Anamnese completa, evolução de sessões, produtos utilizados e fotodocumentação. Versátil para clínicas de estética que realizam diferentes tipos de procedimentos.',
    'ficha-de-orcamento': 'Ficha de orçamento profissional para clínicas de estética. Detalhamento de procedimentos indicados, valores, condições de pagamento e assinatura do paciente. Transmite credibilidade e formaliza o atendimento.',
    'ficha-tratamento-facial': 'Ficha de tratamento facial completa para estética facial básica e avançada. Inclui anamnese de pele, histórico de procedimentos, tipo de pele, tratamentos realizados e recomendações de home care.',
    'ficha-procedimentos-corporais': 'Ficha de anamnese e evolução para procedimentos corporais. Avaliação de queixas, histórico de saúde, medidas biométricas, imagens e evolução de protocolos corporais estéticos.',
    'ficha-planejamento-corporal': 'Ficha de planejamento corporal estratégico. Campos para definição de metas, cronograma de tratamentos, medidas de controle e registro fotográfico em múltiplos ângulos para comprovação de resultados.',

    // ── Anamneses ──
    'anamnese-facial-avancada': 'Ficha de anamnese facial avançada para procedimentos de alta complexidade. Levanta histórico de saúde, alergias, uso de medicamentos anticoagulantes, procedimentos anteriores e contraindicações específicas para harmonização.',
    'anamnese-peeling-quimico': 'Anamnese especializada para peeling químico. Avaliação do tipo de pele, grau de fotodano, uso prévio de ácidos, histórico de herpes labial e expectativas do paciente. Essencial para prescritores de ácidos.',
    'prontuario-estetico': 'Prontuário estético completo em conformidade com os requisitos do COFEN e conselhos de classe. Registro sistemático de todos os procedimentos realizados, evolução clínica e comunicações relevantes.',

    // ── Termos ──
    'termo-uso-de-imagem': 'Termo de autorização de uso de imagem para clínicas de estética. Autoriza a utilização de fotos antes e depois para fins de divulgação, com cláusulas de privacidade e redes sociais. Essencial para profissionais de marketing digital.',
    'contrato-estetica-avancada': 'Contrato de prestação de serviços de estética avançada. Formaliza condições do atendimento, responsabilidades mútuas, política de reembolso e proteção para clínica e paciente. Baseado em legislação vigente.',
    'contrato-paciente-modelo': 'Contrato modelo de atendimento estético. Versão editável com cláusulas padronizadas para clínicas de estética. Inclui descrição dos serviços, honorários, prazo e mecanismos de resolução de conflitos.',
    'termo-harmonizacao-facial-hof': 'Termo de consentimento para harmonização orofacial (HOF). Explica riscos, benefícios e contraindicações de procedimentos de preenchimento e botox em contexto odontológico e de estética avançada.',
    'termo-acido-hialuronico-facial': 'Termo de consentimento livre e esclarecido para preenchimento com ácido hialurônico facial. Detalha riscos de efeitos adversos, cuidados pré e pós-procedimento e orientações sobre hialuronidase.',
    'termo-preenchimento-full-face': 'Termo de consentimento para preenchimento facial completo (full face). Abrange todas as regiões tratadas, volumes utilizados, produtos injetáveis e riscos específicos por área anatômica.',
    'termo-toxina-botulinica-botox': 'Termo de consentimento para aplicação de toxina botulínica (Botox). Esclarece mecanismo de ação, duração de resultado, efeitos adversos possíveis e contraindicações ao uso de botulinum toxina.',
    'termo-preenchimento-labial': 'Termo de consentimento específico para preenchimento labial. Contempla riscos de assimetria, hematoma, oclusão vascular e orienta sobre cuidados pós-procedimento de lip filler.',
    'termo-rinomodelacao': 'Termo de rinomodelação não cirúrgica. Descreve técnica de remodelação nasal com ácido hialurônico, riscos de oclusão vascular nasal e alternativas cirúrgicas disponíveis.',
    'termo-bichectomia': 'Termo de consentimento para bichectomia (retirada de bola de Bichat). Explica o procedimento cirúrgico, cuidados pós-operatórios, riscos de cicatrização e resultado esperado.',
    'termo-skinbooster': 'Termo de consentimento para skinbooster e hidratação profunda. Detalha técnica de napagem ou retrotraço, produtos utilizados, duração esperada e possíveis reações ao ácido hialurônico não reticulado.',
    'termo-bioestimulador-de-colageno': 'Termo de consentimento para bioestimuladores de colágeno (Sculptra, Radiesse, Ellansé). Explica mecanismo de neocolagênese, progressão de resultados, número de sessões e cuidados com massagem pós-procedimento.',
    'termo-sculptra-acido-poli-l-latico': 'Termo de consentimento específico para Sculptra (ácido poli-L-lático). Detalha protocolo de reconstituição, progressão de resultados em até 6 meses, riscos de nódulos e aplicação em múltiplas sessões.',
    'termo-fios-de-pdo': 'Termo de consentimento para fios de PDO (polidioxanona). Descreve tipos de fios, técnica de inserção, duração da reabsorção, efeito lifting esperado e possíveis complicações.',
    'termo-peeling-quimico': 'Termo de consentimento para peeling químico. Classifica o grau do peeling (superficial, médio, profundo), riscos de hiperpigmentação pós-inflamatória, cuidados de fotoproteção e tempo de recuperação.',
    'termo-microagulhamento': 'Termo de consentimento para microagulhamento (needling). Explica mecanismo de indução de colágeno, número de passagens, profundidade de perfuração, cuidados pós-procedimento e hiperemia esperada.',
    'termo-ultraformer': 'Termo de consentimento para Ultraformer e HIFU. Descreve o procedimento de lifting por ultrassom focalizado, sensações durante a sessão, resultado progressivo e indicações por área do rosto e corpo.',
    'termo-radiofrequencia-microagulhada': 'Termo de consentimento para radiofrequência microagulhada (Morpheus, Fractora). Explica transferência de energia térmica para a derme, riscos de queimadura, downtime esperado e cuidados pós-procedimento.',
    'termo-hialuronidase-off-label': 'Termo de consentimento para uso off-label de hialuronidase. Esclarece indicação como agente de dissolução de ácido hialurônico, riscos de reação alérgica, resultado e necessidade de reavaliação.',
    'termo-remocao-de-manchas': 'Termo de consentimento para tratamento de manchas faciais. Abrange diferentes protocolos (laser, peelings, despigmentantes), riscos de PIH e orientações de fotoproteção rigorosa.',
    'termo-melasma-luz-pulsada': 'Termo de consentimento para tratamento de melasma com luz pulsada intensa (IPL). Explica limitações do tratamento, risco de recidiva, cuidados de fotoproteção e importância do tratamento combinado.',
    'termo-remocao-vasinhos': 'Termo de consentimento para remoção de vasinhos (telangiectasias). Descreve técnicas disponíveis (laser, escleroterapia, IPL), número de sessões esperado e cuidados pós-procedimento.',
    'termo-luz-pulsada-facial': 'Termo de consentimento para luz pulsada intensa (IPL) facial. Detalha indicações de rejuvenescimento e fotodepilação, riscos para pele fotossensível e restrições pós-tratamento.',
    'termo-laser-fracionado': 'Termo de consentimento para laser fracionado ablativo e não ablativo. Explica mecanismo de remodelação cutânea, downtime esperado, cuidados de cicatrização e fotoproteção obrigatória.',
    'termo-limpeza-de-pele': 'Termo de consentimento para limpeza de pele profunda. Descreve etapas do procedimento, técnica de extração de comedões, risco de irritação e cuidados com pele sensível pós-procedimento.',
    'termo-black-peel-com-laser-omer': 'Termo de consentimento para Black Peel combinado com laser Omer. Protocolo associado de peeling e laser, cuidados de descamação, fotoproteção e contraindicações para peles melânicas.',
    'termo-laser-pisom': 'Termo de consentimento para laser Pisom (PicoSure ou similar). Explica tratamento de tatuagens, manchas e rejuvenescimento com laser picossegundo, número de sessões e resultados esperados.',
    'termo-harmonizacao-corporal': 'Termo de consentimento para harmonização corporal. Abrange procedimentos de contorno corporal com injetáveis, enzimas e bioestimuladores, riscos específicos e cuidados pós-procedimento.',
    'termo-harmonizacao-glutea': 'Termo de consentimento para harmonização glútea. Descreve técnica de volumização e projeção glútea com injetáveis, riscos específicos da região e cuidados de posicionamento pós-procedimento.',
    'termo-bioestimulador-corporal': 'Termo de consentimento para bioestimuladores de colágeno de uso corporal. Protocolos de neocolagênese para flacidez, estrias e contorno corporal com resultados progressivos.',
    'termo-enzimas': 'Termo de consentimento para intradermoterapia com enzimas. Explica uso de fosfolipase, colagenase e outras enzimas lipolíticas, indicações de lipodistrofia localizada e cuidados pós-procedimento.',
    'termo-intradermoterapia': 'Termo de consentimento para intradermoterapia e mesoterapia corporal. Registro de substâncias utilizadas, protocolo de aplicação, indicações de celulite e gordura localizada e riscos de discomforto.',
    'termo-lipo-de-papada': 'Termo de consentimento para lipo de papada (lipólise com injetáveis). Descreve protocolo de deoxicolato de sódio, número de sessões, edema esperado e cuidados pós-procedimento de lipo química.',
    'termo-escleroterapia-com-glicose': 'Termo de consentimento para escleroterapia com glicose hipertônica. Técnica de oclusão de vasinhos, riscos de trombose superficial, aplicação em membros inferiores e cuidados pós-sessão.',
    'termo-epilacao-a-laser': 'Termo de consentimento para epilação a laser. Abrange contraindicações por fototipo, número de sessões necessárias, intervalo entre sessões e cuidados obrigatórios de fotoproteção e depilação prévia.',
    'termo-remocao-tatuagem-omer': 'Termo de consentimento para remoção de tatuagem a laser Omer. Descreve técnica de fragmentação do pigmento, número estimado de sessões, riscos de hipopigmentação residual e cuidados de cicatrização.',
    'termo-clareamento-axilar': 'Termo de consentimento para clareamento axilar. Protocolos com despigmentantes, peelings e laser para hiperpigmentação axilar, indicações, riscos e tempo de tratamento esperado.',
    'termo-criolipolise': 'Termo de consentimento para criolipólise (CoolSculpting). Explica mecanismo de apoptose por frio, áreas tratáveis, riscos de paradoxical adipose hyperplasia (PAH) e resultado progressivo em 3 meses.',
    'termo-remocao-de-tatuagem-a-laser': 'Termo de consentimento para remoção de tatuagem a laser. Inclui avaliação das cores da tatuagem, estimativa de sessões, técnicas de laser Q-switched e picossegundo, e cuidados de cicatrização.',
    'termo-mmp-capilar': 'Termo de consentimento para MMP capilar (microagulhamento capilar). Descreve técnica de microinfusão de medicamentos no couro cabeludo, substâncias utilizadas, riscos e protocolo de sessões.',
    'termo-microagulhamento-capilar': 'Termo de consentimento para microagulhamento capilar. Explica indução de fatores de crescimento capilar, protocolo de sessões, cuidados pós-procedimento e combinação com terapias de intradermoterapia.',
    'termo-clareamento-intimo': 'Termo de consentimento para clareamento íntimo. Detalha técnicas aplicadas em regiões vulvar e perianal, riscos de irritação, contraindicações e protocolos de ácidos para pele íntima.',
    'termo-remocao-de-tatuagem-a-laser': 'Termo de consentimento para remoção de tatuagem a laser. Abrange tipos de laser, avaliação de pigmento, número de sessões estimadas e cuidados essenciais de cicatrização e fotoproteção.',

    // ── Papelaria ──
    'pastas-personalizadas-estetica': 'Pastas personalizadas para clínicas de estética. Design premium com logotipo, cor e dados da clínica. Ideais para organizar fichas de pacientes, exames e documentos de forma elegante e profissional.',
    'envelope-estetica-personalizado': 'Envelopes personalizados para correspondências e entregas de materiais de clínicas de estética. Personalizados com logotipo e identidade visual da sua marca. Transmitem profissionalismo em cada detalhe.',
    'envelope-documentos-estetica': 'Envelope de documentos para clínicas de estética. Ideal para entrega de contratos, resultados de exames e materiais informativos. Personalizável com identidade visual da clínica.',
    'timbrado-a4-estetica': 'Papel timbrado A4 para clínicas de estética. Personalizado com logotipo, endereço, contatos e identidade visual da clínica. Ideal para receituários, relatórios, declarações e comunicações formais.',
    'cartao-visita-estetica': 'Cartão de visita premium para profissionais e clínicas de estética. Design sofisticado com identidade visual personalizada, acabamento especial e informações de contato. Primeira impressão que fica.',
    'cartao-agendamento-estetica': 'Cartão de agendamento para clínicas de estética. Personalizável com data, horário e profissional. Elegante e funcional, reforça a marca e facilita o retorno do paciente.',
    'receituario-estetica-personalizado': 'Receituário personalizado para clínicas de estética. Modelo profissional com logotipo, dados da clínica e campos para prescrição de cosméticos e orientações de home care. Transmite autoridade e cuidado.',
    'receituario-controle-especial': 'Receituário de controle especial para prescrições que exigem formulário específico. Personalizado com dados do profissional habilitado, em conformidade com as normas da ANVISA e CRF.',
    'receituario-autocopiativo-estetica': 'Receituário autocopiativo (carbonado) para clínicas de estética. Permite cópia automática da prescrição, garantindo registro tanto para o profissional quanto para o paciente. Prático e profissional.',
    'atestados': 'Atestados personalizados para clínicas de estética. Modelos de atestado de comparecimento, saúde e aptidão para procedimentos estéticos. Personalizáveis com dados do profissional e logotipo da clínica.',
    'declaracao-de-comparecimento': 'Declaração de comparecimento para clínicas de estética. Documento formal que comprova a presença do paciente na clínica, personalizável com dados da clínica e assinatura do profissional.',
    'carta-de-encaminhamento': 'Carta de encaminhamento para clínicas de estética. Modelo elegante para referenciar pacientes a outros profissionais de saúde e estética, com campos para dados do paciente e justificativa do encaminhamento.',
    'ficha-de-cadastro': 'Ficha de cadastro de paciente para clínicas de estética. Coleta dados pessoais, contatos, histórico de saúde e consentimentos iniciais. Essencial para organizar prontuários e cumprir exigências de gestão clínica.',
    'tabela-controle-tratamentos': 'Tabela de controle de tratamentos para clínicas de estética. Planilha profissional para acompanhar sessões realizadas, resultados, frequência e retornos dos pacientes. Facilita a gestão clínica.',
    'talao-recibos-estetica': 'Talão de recibos para clínicas de estética. Modelo numerado e personalizado para emissão de comprovantes de pagamento de procedimentos estéticos. Organização financeira com identidade visual.',
    'planner-diario-estetica': 'Planner diário para profissionais de estética. Organização de agenda, procedimentos marcados, lista de materiais a preparar e anotações de atendimento. Design elegante e funcional para rotina clínica.',

    // ── Guias ──
    'guia-toxina-botulinica': 'Guia do paciente com orientações para cuidados pós-aplicação de toxina botulínica (botox). Explica restrições de atividade, posições a evitar, tempo de resultado e sinais de alerta. Entregue ao paciente após o procedimento.',
    'guia-preenchimento-ah': 'Guia do paciente com orientações para cuidados após preenchimento com ácido hialurônico. Detalha cuidados com edema, hematoma, massagem facial e sinais de complicação vascular para resposta rápida.',
    'guia-preenchimento-labial': 'Guia do paciente com orientações pós-preenchimento labial. Cuidados específicos dos lábios após lip filler, como evitar alimentos quentes, como lidar com inchaço e quando retornar para avaliação.',
    'guia-harmonizacao-facial': 'Guia de cuidados pós-harmonização facial completa. Orientações gerais para procedimentos combinados (botox, preenchimento, fios), restrições e como maximizar e prolongar os resultados.',
    'guia-rinomodelacao': 'Guia do paciente pós-rinomodelação. Cuidados com a região nasal após o procedimento, restrições de pressão, uso de óculos e sinais de complicação que exigem retorno imediato.',
    'guia-bichectomia': 'Guia de cuidados pós-bichectomia (retirada da bola de Bichat). Orientações de alimentação mole, higiene bucal, uso de antissépticos e tempo de recuperação esperado até o resultado definitivo.',
    'guia-skinbooster': 'Guia do paciente após skinbooster. Cuidados de hidratação, proteção solar reforçada, evitar manipulação da pele e o que esperar no processo de absorção do ácido hialurônico não reticulado.',
    'guia-bioestimulador-colageno': 'Guia de cuidados pós-bioestimulador de colágeno. Protocolo de automassagem obrigatória após Sculptra, cuidados gerais com resultado progressivo e como identificar possíveis nódulos.',
    'guia-sculptra': 'Guia pós-Sculptra. Instruções detalhadas de massagem 5-5-5, cuidados com edema, hematoma e expectativas de resultado progressivo ao longo de 3 a 6 meses de neocolagênese.',
    'guia-fios-pdo': 'Guia do paciente após fios de PDO. Cuidados com movimentos faciais intensos, expressões exageradas, dormir de lado e o que esperar no processo de reabsorção e lifting progressivo dos fios.',
    'guia-peeling-quimico': 'Guia de cuidados pós-peeling químico. Orientações de descamação, hidratação intensiva, fotoproteção rigorosa e restrição de exposição solar durante o processo de renovação celular.',
    'guia-microagulhamento': 'Guia pós-microagulhamento (needling). Cuidados com a pele na fase de recuperação, produtos que podem e não podem ser usados, tempo de hiperemia esperado e protetor solar obrigatório.',
    'guia-radiofrequencia': 'Guia de cuidados após radiofrequência microagulhada. Orientações de hidratação intensa, evitar calor excessivo e como potencializar a produção de colágeno induzida pelo procedimento.',
    'guia-ultraformer': 'Guia pós-Ultraformer e HIFU. Cuidados com edema e formigamento passageiro, tempo esperado para resultado de lifting progressivo e como manter os resultados do ultrassom focalizado.',
    'guia-laser-fracionado': 'Guia de cuidados após laser fracionado. Protocolo de recuperação, hidratação, proibição de sol, cuidados com eritema e descamação e sinais de complicação para retorno imediato.',
    'guia-limpeza-de-pele': 'Guia pós-limpeza de pele profunda. Orientações de cuidado com a pele nos dias seguintes ao procedimento, uso de maquiagem, protetor solar e como manter os resultados da limpeza.',
    'guia-luz-pulsada-facial': 'Guia do paciente após luz pulsada intensa (IPL) facial. Cuidados com eritema, evitar sol, protetor solar fator alto e o que esperar no escurecimento e queda das lesões tratadas.',
    'guia-harmonizacao-corporal': 'Guia de cuidados pós-harmonização corporal. Orientações para procedimentos com injetáveis corporais, restrição de atividade física, compressão e como observar evolução dos resultados.',
    'guia-harmonizacao-glutea': 'Guia de cuidados pós-harmonização glútea. Instruções de posicionamento pós-procedimento, restrição de sentar sobre as áreas tratadas e como maximizar resultado de volumização glútea.',
    'guia-criolipolise': 'Guia pós-criolipólise. Expectativa de resultado progressivo em 8 a 12 semanas, cuidados com área tratada, sinais de PAH (paradoxical adipose hyperplasia) e quando retornar para nova avaliação.',
    'guia-epilacao-laser': 'Guia de cuidados para epilação a laser. Orientações pré-sessão (não depilar a cera), pós-sessão (evitar sol, calor, esfoliação) e como garantir o sucesso do tratamento ao longo das sessões.',
    'guia-intradermoterapia': 'Guia pós-intradermoterapia e mesoterapia corporal. Cuidados com hematomas e edema local, restrições de atividade física intensa e como potencializar o efeito das substâncias infiltradas.',
    'guia-lipo-papada': 'Guia de cuidados após lipo de papada (lipólise química). Cuidados com edema intenso esperado, uso de compressão, restrição de calor e tempo de recuperação até resultado de definição do contorno.',
    'guia-mmp-capilar': 'Guia pós-MMP capilar. Cuidados com o couro cabeludo após microagulhamento capilar, restrições de lavagem, exposição solar e como otimizar a absorção dos ativos para estimular o crescimento capilar.',
    'guia-remocao-tatuagem': 'Guia de cuidados após remoção de tatuagem a laser. Cuidados com a lesão tratada, sinais de queimadura, fotoproteção rigorosa e expectativas realistas de número de sessões para remoção completa.',
    'guia-escleroterapia': 'Guia pós-escleroterapia com glicose. Cuidados pós-tratamento de vasinhos, uso de meias de compressão, restrição de calor e banhos quentes e tempo para visualização dos resultados.',
    'guia-clareamento-axilar': 'Guia de cuidados pós-clareamento axilar. Orientações de higiene, evitar desodorantes com álcool, não depilar por lâmina na região e proteção solar para a área axilar tratada.',
    'guia-clareamento-intimo': 'Guia pós-clareamento íntimo. Cuidados com higiene da região, restrições de atividade sexual, uso de hidratante específico e fotoproteção para regiões perianal e vulvar em tratamento.',
    'guia-melasma': 'Guia de tratamento do melasma. Orientações sobre a importância da fotoproteção diária como pilar central do tratamento, uso correto de despigmentantes e gestão de expectativas sobre recidiva.',
    'guia-remocao-manchas': 'Guia pós-tratamento de manchas. Cuidados com descamação de ácidos e peelings, proteção solar como prioridade absoluta e como evitar a hiperpigmentação pós-inflamatória (PIH).',
    'guia-black-peel': 'Guia de cuidados após Black Peel. Protocolo de recuperação específico do peeling fenol combinado com laser, descamação esperada, cuidados de hidratação e fotoproteção intensiva.',
    'guia-hialuronidase': 'Guia pós-hialuronidase. Orientações após dissolução de ácido hialurônico, reavaliação obrigatória em 15 dias, cuidados com edema de dissolução e quando é possível realizar novo preenchimento.',

    // ── Marketing & Branding ──
    'portfolio-de-apresentacao': 'Portfólio de apresentação premium para profissionais de estética. Pasta impressa em papel perolizado com design sofisticado para apresentar procedimentos, resultados e serviços a novos pacientes. Fechamento de orçamentos com impacto visual.',
    'ima-qr-code-estetica': 'Ímã de QR Code para clínicas de estética. Imã de geladeira ou painel personalizado com QR Code que direciona para avaliações no Google, redes sociais ou link de agendamento online. Estratégia de marketing prático.',
    'cartao-boas-vindas': 'Cartão de boas-vindas personalizado para clínicas de estética. Entregue ao paciente na primeira visita para apresentar a clínica, filosofia de atendimento e informações de contato. Cria conexão emocional desde a chegada.',
    'voucher-promocional-fidelizacao': 'Voucher promocional de fidelização para clínicas de estética. Cartão de desconto ou sessão bônus personalizado para presentear pacientes fidelizados ou atrair indicações. Ferramenta de marketing de relacionamento.',
    'cartao-fidelidade-estetica': 'Cartão de fidelidade personalizado para clínicas de estética e beleza. Sistema de selos ou carimbos por sessão com recompensa ao completar. Aumenta retenção de pacientes e frequência de visitas à clínica.',
    'panfleto-folder-flyer-estetica': 'Panfleto, folder e flyer personalizados para clínicas de estética. Material impresso de divulgação com design premium para apresentar procedimentos, preços e promoções. Ideal para captação de novos pacientes.',
};

// ─── Main ─────────────────────────────────────────────────────────────────────

const products = JSON.parse(fs.readFileSync(PRODUCTS_JSON, 'utf-8'));
let imagesCopied = 0;
let descAdded = 0;

// Check placeholder exists
if (!fs.existsSync(PLACEHOLDER)) {
    console.error('❌ Placeholder not found at:', PLACEHOLDER);
    process.exit(1);
}

for (const product of products) {
    const handle = product.handle;

    // 1. Copy placeholder image
    if (product.product_images) {
        for (const img of product.product_images) {
            if (img.url && img.url.includes('newplaceholder')) {
                const newFilename = `${handle}.webp`;
                const newPath = path.join(PRODUCTS_DIR, newFilename);

                if (!fs.existsSync(newPath)) {
                    fs.copyFileSync(PLACEHOLDER, newPath);
                    imagesCopied++;
                }

                img.url = `/products/${newFilename}`;
            }
        }
    }

    // 2. Add description
    if ((!product.description || product.description.trim().length < 30) && DESCRIPTIONS[handle]) {
        product.description = DESCRIPTIONS[handle];
        descAdded++;
    }
}

fs.writeFileSync(PRODUCTS_JSON, JSON.stringify(products, null, 2));
console.log(`✅ Images copied: ${imagesCopied}`);
console.log(`✅ Descriptions added: ${descAdded}`);
console.log('✅ products.json updated');
