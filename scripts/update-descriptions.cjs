#!/usr/bin/env node
/**
 * Rewrites all Esthétique product descriptions to follow the standard:
 *   Paragraph 1 (P1): Product-specific SEO copy — what it is, what it records/contains
 *   Paragraph 2 (P2): Technical specs — paper, format, finish (rendered semi-bold by component)
 *
 * "Impressão com altíssimo nível de nitidez. Artes únicas..." and the brand quote
 * are injected by the component; they do NOT live in the JSON description.
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/products.json');
const products = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

// Spec lines (P2) — rendered with gradient in the component
const S_FICHA = 'Blocos com 100 folhas em papel Off-Set Paperfect com 90g/m² e altíssima nitidez.';
const S_TERMO = 'Blocos com 100 folhas em papel Off-Set Paperfect com 90g/m² e altíssima nitidez.';
const S_240 = 'Impresso em papel Off-Set Super 6 Plus® com 240g/m², com vinco central e altíssima nitidez. Formato 15 x 20 cm aberto.';
const S_PRONTU = 'Impresso em papel Off-Set Super 6 Plus® com 240g/m² e altíssima nitidez.';
const S_FULL = 'Impresso em papel Off-Set Super 6 Plus® com 240g/m² e altíssima nitidez. Formato amplo com planejamento estruturado de todas as zonas faciais.';

const DESCRIPTIONS = {
    // ──────────────────────────────────────
    // FICHAS CLÍNICAS
    // ──────────────────────────────────────
    'ficha-clinica-full-face':
        `Ficha clínica full face para planejamento completo de harmonização facial. Mapeamento detalhado de todas as zonas, com campos para toxina botulínica, preenchedores, bioestimuladores e técnicas complementares em um único documento.\n\n${S_FULL}`,

    'ficha-mmp-capilar-intradermo':
        `Ficha clínica de MMP capilar e intradermoterapia capilar. Campos para anamnese capilar, mapeamento do couro cabeludo, protocolo terapêutico e acompanhamento da evolução entre sessões.\n\n${S_FICHA}`,

    'ficha-harmonizacao-glutea':
        `Ficha clínica de harmonização glútea para planejamento e registro de procedimentos estéticos corporais. Campos para mapeamento de áreas de aplicação, produto, volume e acompanhamento fotodocumentado.\n\n${S_FICHA}`,

    'ficha-harmonizacao-facial':
        `Ficha clínica de harmonização facial para planejamento completo de procedimentos estéticos faciais. Campos para registro de áreas de aplicação, produtos utilizados, dosagens e acompanhamento pós-procedimento.\n\n${S_FICHA}`,

    'ficha-bioestimulador-colageno':
        `Ficha clínica de bioestimuladores de colágeno para planejamento e registro de sessões de bioestimulação. Campos para áreas tratadas, produto, volume injetado e acompanhamento do resultado bioestimulador.\n\n${S_FICHA}`,

    'ficha-botox':
        `Ficha clínica de botox para planejamento e acompanhamento. Registro detalhado de pontos de aplicação da toxina botulínica, com dosagem e áreas tratadas.\n\n${S_FICHA}`,

    'ficha-planejamento-botox-v2':
        `Ficha de planejamento para toxina botulínica com layout atualizado. Campos para mapeamento de pontos de aplicação, dosagem por músculo, diluição e acompanhamento do resultado final.\n\n${S_FICHA}`,

    'ficha-hof-harmonizacao-orofacial-v2':
        `Ficha clínica de harmonização orofacial (HOF) com layout atualizado. Planejamento multidisciplinar de procedimentos orofaciais com registro detalhado de todas as etapas e áreas de intervenção.\n\n${S_FICHA}`,

    'ficha-preenchedor-hialuronico':
        `Ficha clínica para preenchimento com ácido hialurônico. Campos para planejamento de áreas faciais, volumes aplicados, técnicas de injeção e acompanhamento com fotodocumentação.\n\n${S_FICHA}`,

    'ficha-preenchedores-masculina':
        `Ficha clínica de preenchimento facial para pacientes masculinos. Planejamento de harmonização facial masculina com campos para áreas, volumes e técnicas de injeção adaptados ao rosto masculino.\n\n${S_FICHA}`,

    'ficha-preenchimento-dermico':
        `Ficha clínica de preenchimento dérmico para registro completo de procedimentos de preenchimento facial. Campos para áreas tratadas, produto e marca, volume por ponto e técnica de aplicação.\n\n${S_FICHA}`,

    'ficha-toxina-botulinica-hiperidrose':
        `Ficha clínica de toxina botulínica para tratamento de hiperidrose (sudorese excessiva). Mapeamento de áreas, dosagem por ponto, protocolo de diluição e acompanhamento de resultados.\n\n${S_FICHA}`,

    'ficha-aplicacao-fios-pdo':
        `Ficha clínica de aplicação de fios de PDO para planejamento e registro de procedimentos de sustentação facial e corporal. Campos para tipo de fio, quantidade, áreas de inserção e técnica utilizada.\n\n${S_FICHA}`,

    'ficha-preenchimento-labial':
        `Ficha clínica de preenchimento labial para planejamento detalhado de procedimentos labiais. Registro de técnica de aplicação, produto, volume por lábio e acompanhamento pós-procedimento.\n\n${S_FICHA}`,

    'ficha-rinomodelacao-estetica':
        `Ficha clínica de rinomodelação estética para planejamento e registro de procedimentos de remodelação nasal. Campos para avaliação estrutural, planejamento do resultado e acompanhamento fotodocumentado.\n\n${S_FICHA}`,

    'ficha-planejamento-corporal':
        `Ficha clínica de planejamento para procedimentos estéticos corporais. Registro de medidas biométricas, mapeamento de áreas de tratamento e acompanhamento de resultados com evolução fotográfica.\n\n${S_FICHA}`,

    'ficha-harmonizacao-corporal':
        `Ficha clínica de harmonização corporal para planejamento e registro de injetáveis corporais. Campos para avaliação, mapeamento de áreas e acompanhamento de resultados.\n\n${S_FICHA}`,

    'ficha-sculptra-acido-polilatico-pla':
        `Ficha clínica de Sculptra para planejamento com ácido poli-l-lático (PLLA). Registro detalhado de sessões, volumes por área, profundidade de aplicação e acompanhamento de neocolagênese.\n\n${S_FICHA}`,

    'ficha-sessoes-ultraformer-mpt-hifu':
        `Ficha clínica de sessões de Ultraformer MPT e HIFU para registro de parâmetros técnicos e acompanhamento. Campos para energia, profundidade de transdutores e número de linhas por região.\n\n${S_FICHA}`,

    'ficha-tratamentos-esteticos':
        `Ficha clínica versátil para registro de tratamentos estéticos faciais e corporais. Modelo adaptável com campos para diferentes tipos de procedimento, ideal para clínicas com portfólio diversificado.\n\n${S_FICHA}`,

    'prontuario-estetico':
        `Prontuário estético completo para anamnese e planejamento de procedimentos injetáveis. Registro detalhado do histórico clínico, avaliação facial e corporal e planejamento terapêutico estruturado.\n\n${S_PRONTU}`,

    'ficha-procedimentos-corporais':
        `Ficha completa de procedimentos estéticos corporais com anamnese detalhada. Campos para avaliação corporal, biometria, mapeamento de tratamento e acompanhamento de resultados.\n\n${S_FICHA}`,

    'anamnese-facial-avancada':
        `Ficha de anamnese facial avançada para avaliação completa de pacientes em estética facial. Registro de histórico clínico, análise da pele, alergias, medicações e planejamento de tratamento personalizado.\n\n${S_FICHA}`,

    'anamnese-peeling-quimico':
        `Anamnese e termo de consentimento para peeling químico. Campos para histórico de pele, fototipos, medicações em uso, tipo de ácido, concentração e protocolo de aplicação.\n\n${S_FICHA}`,

    'ficha-tratamento-facial':
        `Ficha e anamnese facial completa para avaliação de pacientes em estética avançada. Campos para histórico clínico, avaliação da pele, planejamento de tratamento e acompanhamento de sessões.\n\n${S_FICHA}`,

    'ficha-skinbooster':
        `Ficha clínica de skinbooster para registro completo do procedimento. Campos para avaliação de hidratação e qualidade da pele, áreas de aplicação, técnica, produto e acompanhamento de resultados.\n\n${S_FICHA}`,

    // ──────────────────────────────────────
    // TERMOS E CONTRATOS
    // ──────────────────────────────────────
    'termo-uso-de-imagem':
        `Termo de uso de imagem para clínicas de estética. Autorização do paciente para uso de fotografias e vídeos em redes sociais, portfólio profissional e materiais de divulgação, com cláusulas de proteção ao profissional.\n\n${S_TERMO}`,

    'contrato-estetica-avancada':
        `Contrato de prestação de serviços para estética avançada. Documento completo com termos, condições, descrição dos procedimentos, responsabilidades e garantias para segurança jurídica do profissional e do paciente.\n\n${S_TERMO}`,

    'contrato-paciente-modelo':
        `Contrato e ficha do paciente para clínicas de estética com modelo completo para procedimentos corporais e faciais. Termos, condições, responsabilidades e orientações pré e pós-procedimento bem definidas.\n\n${S_TERMO}`,

    'termo-harmonizacao-facial-hof':
        `Termo de consentimento para harmonização orofacial (HOF). Documento com descrição do procedimento, riscos, contraindicações e orientações pré e pós-procedimento para assinatura do paciente.\n\n${S_TERMO}`,

    'termo-acido-hialuronico-facial':
        `Termo de consentimento para preenchimento com ácido hialurônico facial. Documento com descrição, riscos, contraindicações absolutas e relativas e cuidados pós-procedimento.\n\n${S_TERMO}`,

    'termo-preenchimento-full-face':
        `Termo de consentimento para preenchimento facial full face. Documento com descrição de múltiplos procedimentos, riscos combinados, contraindicações e orientações detalhadas pré e pós-procedimento.\n\n${S_TERMO}`,

    'termo-toxina-botulinica-botox':
        `Termo de consentimento para toxina botulínica (botox). Documento com descrição do mecanismo de ação, riscos, contraindicações e orientações pré e pós-procedimento para aplicação de toxina.\n\n${S_TERMO}`,

    'termo-preenchimento-labial':
        `Termo de consentimento para preenchimento labial. Documento com descrição do procedimento labial, riscos específicos, contraindicações e orientações de cuidados pré e pós-procedimento.\n\n${S_TERMO}`,

    'termo-rinomodelacao':
        `Termo de consentimento para rinomodelação não cirúrgica. Documento com descrição do procedimento, riscos específicos da região nasal, contraindicações e orientações de cuidados pré e pós-procedimento.\n\n${S_TERMO}`,

    'termo-bichectomia':
        `Termo de consentimento para bichectomia estética. Documento com descrição do procedimento cirúrgico, riscos, complicações possíveis, contraindicações e orientações pré e pós-operatórias.\n\n${S_TERMO}`,

    'termo-skinbooster':
        `Termo de consentimento para skinbooster. Documento com descrição do procedimento de hidratação profunda, riscos, contraindicações e orientações de cuidados pré e pós-procedimento.\n\n${S_TERMO}`,

    'termo-bioestimulador-de-colageno':
        `Termo de consentimento para bioestimulador de colágeno. Documento com descrição do mecanismo de bioestimulação, riscos, contraindicações e orientações completas de cuidados pré e pós-procedimento.\n\n${S_TERMO}`,

    'termo-sculptra-acido-poli-l-latico':
        `Termo de consentimento para Sculptra (ácido poli-l-lático). Documento com descrição do procedimento, protocolo de sessões, riscos, contraindicações e orientações pós-procedimento.\n\n${S_TERMO}`,

    'termo-fios-de-pdo':
        `Termo de consentimento para aplicação de fios de PDO. Documento com descrição do procedimento de lifting com fios, riscos, contraindicações e orientações detalhadas de cuidados pré e pós-procedimento.\n\n${S_TERMO}`,

    'termo-peeling-quimico':
        `Termo de consentimento para peeling químico. Documento com descrição do procedimento, tipos de ácidos, profundidade de ação, riscos, contraindicações e protocolo de cuidados pré e pós-procedimento.\n\n${S_TERMO}`,

    'termo-microagulhamento':
        `Termo de consentimento para microagulhamento. Documento com descrição do procedimento de indução de colágeno, profundidades, riscos, contraindicações e cuidados pré e pós-procedimento.\n\n${S_TERMO}`,

    'termo-ultraformer':
        `Termo de consentimento para Ultraformer MPT e HIFU. Documento com descrição do ultrassom microfocado, parâmetros técnicos, riscos, contraindicações e orientações pré e pós-procedimento.\n\n${S_TERMO}`,

    'termo-radiofrequencia-microagulhada':
        `Termo de consentimento para radiofrequência microagulhada. Documento com descrição do procedimento, energia utilizada, riscos específicos, contraindicações e orientações pré e pós-procedimento.\n\n${S_TERMO}`,

    'termo-hialuronidase-off-label':
        `Termo de consentimento para hialuronidase off-label. Documento com descrição do procedimento de dissolução de ácido hialurônico, riscos, contraindicações e uso off-label documentado.\n\n${S_TERMO}`,

    'termo-remocao-de-manchas':
        `Termo de consentimento para remoção de manchas. Documento com descrição dos protocolos, riscos de fotossensibilidade, contraindicações e orientações de cuidados pré e pós-procedimento.\n\n${S_TERMO}`,

    'termo-melasma-luz-pulsada':
        `Termo de consentimento para tratamento de melasma com luz pulsada. Documento com descrição do procedimento, parâmetros do equipamento, riscos, contraindicações e protocolo de cuidados.\n\n${S_TERMO}`,

    'termo-remocao-vasinhos':
        `Termo de consentimento para remoção de vasinhos com luz pulsada. Documento com descrição da fotocoagulação, riscos, contraindicações e orientações de cuidados pré e pós-procedimento.\n\n${S_TERMO}`,

    'termo-luz-pulsada-facial':
        `Termo de consentimento para luz pulsada facial. Documento com descrição da fototerapia, riscos de fotossensibilidade, contraindicações e orientações de cuidados pré e pós-procedimento.\n\n${S_TERMO}`,

    'termo-laser-fracionado':
        `Termo de consentimento para laser fracionado. Documento com descrição do procedimento, densidade de ablação, riscos, contraindicações e protocolo de cuidados pré e pós-procedimento.\n\n${S_TERMO}`,

    'termo-limpeza-de-pele':
        `Termo de consentimento para limpeza de pele profissional. Documento com descrição do procedimento, técnicas utilizadas, riscos, contraindicações e orientações de cuidados pré e pós-procedimento.\n\n${S_TERMO}`,

    'termo-black-peel-com-laser-omer':
        `Termo de consentimento para black peel com laser Omer. Documento com descrição do procedimento combinado, riscos específicos, contraindicações e protocolo de cuidados pré e pós-procedimento.\n\n${S_TERMO}`,

    'termo-laser-pisom':
        `Termo de consentimento para laser Pisom (BB Laser Dual Wave). Documento com descrição do procedimento, comprimentos de onda, riscos, contraindicações e orientações pré e pós-procedimento.\n\n${S_TERMO}`,

    'termo-harmonizacao-corporal':
        `Termo de consentimento para harmonização corporal. Documento com descrição de procedimentos de injetáveis corporais, riscos, contraindicações e orientações pré e pós-procedimento.\n\n${S_TERMO}`,

    'termo-harmonizacao-glutea':
        `Termo de consentimento para harmonização glútea. Documento com descrição de injetáveis na região glútea, riscos, contraindicações e orientações detalhadas pré e pós-procedimento.\n\n${S_TERMO}`,

    'termo-bioestimulador-corporal':
        `Termo de consentimento para bioestimulador em áreas corporais (mãos, abdômen e glúteos). Documento com descrição do procedimento, riscos por região, contraindicações e cuidados pós-procedimento.\n\n${S_TERMO}`,

    'termo-enzimas':
        `Termo de consentimento para tratamento estético com enzimas. Documento com descrição do protocolo enzimático, indicações, riscos, contraindicações e orientações de cuidados pré e pós-procedimento.\n\n${S_TERMO}`,

    'termo-intradermoterapia':
        `Termo de consentimento para intradermoterapia. Documento com descrição do procedimento de mesoterapia, ativos utilizados, riscos, contraindicações e orientações de cuidados pré e pós-procedimento.\n\n${S_TERMO}`,

    'termo-lipo-de-papada':
        `Termo de consentimento para lipo de papada. Documento com descrição do procedimento de lipolíticos na região submentoniana, riscos, contraindicações e orientações pré e pós-procedimento.\n\n${S_TERMO}`,

    'termo-escleroterapia-com-glicose':
        `Termo de consentimento para escleroterapia com glicose. Documento com descrição da esclerose de vasinhos, concentrações utilizadas, riscos, contraindicações e cuidados pós-procedimento.\n\n${S_TERMO}`,

    'termo-epilacao-a-laser':
        `Termo de consentimento para epilação a laser. Documento com descrição do procedimento, tipos de laser, parâmetros, riscos, contraindicações e protocolo de cuidados pré e pós-procedimento.\n\n${S_TERMO}`,

    'termo-remocao-tatuagem-omer':
        `Termo de consentimento para remoção de tatuagem com laser Omer. Documento com descrição do procedimento, pigmentos tratados, número estimado de sessões, riscos e contraindicações.\n\n${S_TERMO}`,

    'termo-clareamento-axilar':
        `Termo de consentimento para clareamento dermatológico axilar. Documento com descrição do procedimento, ativos e protocolos utilizados, riscos, contraindicações e cuidados pré e pós-procedimento.\n\n${S_TERMO}`,

    'termo-criolipolise':
        `Termo de consentimento para criolipólise. Documento com descrição do procedimento, parâmetros do equipamento, riscos, contraindicações e orientações pré e pós-procedimento.\n\n${S_TERMO}`,

    'termo-mmp-capilar':
        `Termo de consentimento para MMP capilar e intradermoterapia capilar. Documento com descrição do protocolo, ativos utilizados, riscos, contraindicações e orientações pré e pós-procedimento.\n\n${S_TERMO}`,

    'termo-microagulhamento-capilar':
        `Termo de consentimento para microagulhamento capilar. Documento com descrição do procedimento, ativos associados, riscos, contraindicações e cuidados pré e pós-procedimento.\n\n${S_TERMO}`,

    'termo-clareamento-intimo':
        `Termo de consentimento para clareamento dermatológico íntimo. Documento com descrição do procedimento, ativos e protocolos utilizados, riscos, contraindicações e cuidados pré e pós-procedimento.\n\n${S_TERMO}`,

    'termo-remocao-de-tatuagem-a-laser':
        `Termo de consentimento para remoção de tatuagem a laser. Documento com descrição do procedimento, comprimentos de onda, riscos, número estimado de sessões e cuidados pré e pós-procedimento.\n\n${S_TERMO}`,

    // ──────────────────────────────────────
    // DOCUMENTOS CLÍNICOS GERAIS
    // ──────────────────────────────────────
    'atestados':
        `Atestado personalizado para clínicas de estética. Modelo com campos para identificação do profissional, paciente e registro profissional (CRM/CRN), com espaço para justificativa técnica e assinatura.\n\n${S_FICHA}`,

    'declaracao-de-comparecimento':
        `Declaração de comparecimento para clínica de estética. Documento oficial confirmando a presença do paciente, com campos para data, horário de entrada e saída, e assinatura do profissional responsável.\n\n${S_FICHA}`,

    'carta-de-encaminhamento':
        `Carta de encaminhamento para clínica de estética. Modelo para referenciamento de pacientes entre especialistas, com campos completos para dados do profissional solicitante, paciente e justificativa clínica.\n\n${S_FICHA}`,

    'ficha-de-cadastro':
        `Ficha de cadastro de pacientes para clínica de estética. Coleta completa de dados pessoais, contato de emergência, histórico de procedimentos anteriores e consentimento para registro e uso de dados.\n\n${S_FICHA}`,

    'ficha-de-orcamento':
        `Ficha de orçamento para clínica de estética. Campos para registro de procedimentos cotados, valores unitários e total, condições de pagamento e validade da proposta, com espaço para assinatura de aceite.\n\nBlocos com 100 folhas em papel Off-Set Paperfect com 90g/m² e altíssima nitidez.`,

    'portfolio-de-apresentacao':
        `Portfólio de apresentação premium para profissionais de estética avançada. Formato pasta com acabamento especial, pensado para apresentação de trabalhos e atendimento de pacientes high ticket.\n\nPapel especial com acabamento perolizado de alta qualidade. Formato estilo pasta, exclusivo para profissionais de posicionamento elevado.`,

    // ──────────────────────────────────────
    // GUIAS DO PACIENTE
    // ──────────────────────────────────────
    'guia-toxina-botulinica':
        `Guia do paciente para toxina botulínica com orientações completas de cuidados pré e pós-procedimento. Instruções sobre o que esperar, cuidados imediatos, atividades contraindicadas e retorno programado.\n\n${S_240}`,

    'guia-preenchimento-ah':
        `Guia do paciente para preenchimento com ácido hialurônico. Orientações de cuidados pré e pós-procedimento com instruções sobre uso de gelo, posição de descanso e atividades restritas nas primeiras horas.\n\n${S_240}`,

    'guia-preenchimento-labial':
        `Guia do paciente para preenchimento labial com orientações completas de cuidados pré e pós-procedimento. Instruções sobre inchaço esperado, temperatura, alimentação e atividades contraindicadas.\n\n${S_240}`,

    'guia-harmonizacao-facial':
        `Guia do paciente para harmonização facial com orientações completas de cuidados pré e pós-procedimento. Instruções práticas sobre o que evitar, cuidados com a pele e acompanhamento nos primeiros dias.\n\n${S_240}`,

    'guia-rinomodelacao':
        `Guia do paciente para rinomodelação com orientações completas de cuidados pré e pós-procedimento. Instruções sobre restrições de atividade, cuidados com a região nasal e acompanhamento do resultado.\n\n${S_240}`,

    'guia-bichectomia':
        `Guia do paciente para bichectomia com orientações completas de cuidados pré e pós-procedimento. Instruções sobre alimentação, higiene bucal, uso de medicamentos e acompanhamento da recuperação.\n\n${S_240}`,

    'guia-skinbooster':
        `Guia do paciente para skinbooster com orientações completas de cuidados pré e pós-procedimento. Instruções sobre hidratação ideal, proteção solar, atividades contraindicadas e evolução da hidratação.\n\n${S_240}`,

    'guia-bioestimulador-colageno':
        `Guia do paciente para bioestimulador de colágeno com orientações completas de cuidados pré e pós-procedimento. Instruções sobre cuidados nécessários para potencializar o processo de bioestimulação.\n\n${S_240}`,

    'guia-sculptra':
        `Guia do paciente para Sculptra (ácido poli-l-lático) com orientações completas de cuidados pré e pós-procedimento. Instruções sobre o protocolo de massagem 5-5-5, hidratação e expectativas de resultado.\n\n${S_240}`,

    'guia-fios-pdo':
        `Guia do paciente para fios de PDO com orientações completas de cuidados pré e pós-procedimento. Instruções sobre restrições de movimentação, expressões faciais e atividades contraindicadas no pós-imediato.\n\n${S_240}`,

    'guia-peeling-quimico':
        `Guia do paciente para peeling químico com orientações completas de cuidados pré e pós-procedimento. Instruções sobre descamação esperada, proteção solar obrigatória e hidratação na fase de reparação.\n\n${S_240}`,

    'guia-microagulhamento':
        `Guia do paciente para microagulhamento com orientações completas de cuidados pré e pós-procedimento. Instruções sobre proteção solar, uso de cosméticos, atividades restritas e evolução da pele.\n\n${S_240}`,

    'guia-radiofrequencia':
        `Guia do paciente para radiofrequência microagulhada com orientações completas de cuidados pré e pós-procedimento. Instruções sobre hidratação, proteção solar, atividades restritas e acompanhamento.\n\n${S_240}`,

    'guia-ultraformer':
        `Guia do paciente para Ultraformer e HIFU com orientações completas de cuidados pré e pós-procedimento. Instruções sobre sensações esperadas, cuidados nos primeiros dias e evolução do resultado.\n\n${S_240}`,

    'guia-laser-fracionado':
        `Guia do paciente para laser fracionado com orientações completas de cuidados pré e pós-procedimento. Instruções sobre o processo de reparação cutânea, cosméticos restritos e proteção solar no pós-laser.\n\n${S_240}`,

    'guia-limpeza-de-pele':
        `Guia do paciente para limpeza de pele com orientações completas de cuidados pré e pós-procedimento. Instruções sobre maquiagem, exposição solar, manipulação da pele e produtos recomendados.\n\n${S_240}`,

    'guia-luz-pulsada-facial':
        `Guia do paciente para luz pulsada facial com orientações completas de cuidados pré e pós-procedimento. Instruções sobre fotossensibilidade, proteção solar obrigatória e atividades contraindicadas.\n\n${S_240}`,

    'guia-harmonizacao-corporal':
        `Guia do paciente para harmonização corporal com orientações completas de cuidados pré e pós-procedimento. Instruções sobre restrições de atividade física, uso de compressão e acompanhamento de resultados.\n\n${S_240}`,

    'guia-harmonizacao-glutea':
        `Guia do paciente para harmonização glútea com orientações completas de cuidados pré e pós-procedimento. Instruções sobre posição de descanso, atividade física, massagem e acompanhamento do resultado.\n\n${S_240}`,

    'guia-criolipolise':
        `Guia do paciente para criolipólise com orientações completas de cuidados pré e pós-procedimento. Instruções sobre sensações esperadas, massagem manual no pós-imediato e cronograma de resultados.\n\n${S_240}`,

    'guia-epilacao-laser':
        `Guia do paciente para epilação a laser com orientações completas de cuidados pré e pós-procedimento. Instruções sobre preparo da pele, exposição solar e intervalo entre sessões para melhor resultado.\n\n${S_240}`,

    'guia-intradermoterapia':
        `Guia do paciente para intradermoterapia com orientações completas de cuidados pré e pós-procedimento. Instruções sobre cuidados com o local de aplicação, hidratação, atividade física e proteção solar.\n\n${S_240}`,

    'guia-lipo-papada':
        `Guia do paciente para lipo de papada com orientações completas de cuidados pré e pós-procedimento. Instruções sobre uso de faixa compressiva, restrições alimentares, exercícios e acompanhamento da região.\n\n${S_240}`,

    'guia-mmp-capilar':
        `Guia do paciente para MMP capilar com orientações completas de cuidados pré e pós-procedimento. Instruções sobre lavagem do cabelo, uso de produtos capilares, exposição solar e intervalo entre sessões.\n\n${S_240}`,

    'guia-remocao-tatuagem':
        `Guia do paciente para remoção de tatuagem a laser com orientações completas de cuidados pré e pós-procedimento. Instruções sobre proteção da área tratada, cicatrização esperada e intervalo entre sessões.\n\n${S_240}`,

    'guia-escleroterapia':
        `Guia do paciente para escleroterapia com glicose com orientações completas de cuidados pré e pós-procedimento. Instruções sobre uso de meia de compressão, caminhada recomendada e atividades contraindicadas.\n\n${S_240}`,

    'guia-clareamento-axilar':
        `Guia do paciente para clareamento axilar com orientações completas de cuidados pré e pós-procedimento. Instruções sobre uso de desodorante, depilação, exposição solar e cuidados durante o tratamento.\n\n${S_240}`,

    'guia-clareamento-intimo':
        `Guia do paciente para clareamento íntimo com orientações completas de cuidados pré e pós-procedimento. Instruções sobre higiene, roupas adequadas, depilação e cuidados essenciais durante o tratamento.\n\n${S_240}`,

    'guia-melasma':
        `Guia do paciente para tratamento de melasma com orientações completas de cuidados pré e pós-procedimento. Instruções sobre proteção solar de amplo espectro, antioxidantes e fatores desencadeantes a evitar.\n\n${S_240}`,

    'guia-remocao-manchas':
        `Guia do paciente para remoção de manchas com orientações completas de cuidados pré e pós-procedimento. Instruções sobre proteção solar, cosméticos depigmentantes e acompanhamento do tratamento.\n\n${S_240}`,

    'guia-black-peel':
        `Guia do paciente para black peel com orientações completas de cuidados pré e pós-procedimento. Instruções sobre descamação esperada, cuidados com a pele, hidratação intensa e proteção solar.\n\n${S_240}`,

    'guia-hialuronidase':
        `Guia do paciente para hialuronidase com orientações completas de cuidados pré e pós-procedimento. Instruções sobre o processo de dissolução do ácido hialurônico, inchaço esperado e cuidados no pós-imediato.\n\n${S_240}`,

    // ──────────────────────────────────────
    // PAPELARIA E MARKETING
    // ──────────────────────────────────────
    'panfleto-folder-flyer-estetica':
        `Panfletos, folders e flyers personalizados para clínicas de estética. Arte exclusiva para divulgação de procedimentos, lançamentos e captação de pacientes com design diferenciado.\n\nImpresso em papel Couché brilho com cores vibrantes e alta reprodução fotográfica.`,

    'ima-qr-code-estetica':
        `Ímã com QR Code personalizado para avaliação no Google para clínicas de estética. Estratégia para aumentar avaliações online, ideal para recepção, bancadas de procedimento e áreas de atendimento.\n\nFormato 7 x 8 cm com impressão full color e QR Code personalizado. Embalado individualmente.`,

    'cartao-visita-estetica':
        `Cartão de visita personalizado para profissionais de estética avançada. Design com identidade visual, dados do profissional e especialidades, transmitindo sofisticação e autoridade desde o primeiro contato.\n\nImpresso em papel Couché 300g com verniz localizado. Formato 8,8 x 4,8 cm. Disponível com bordas retas ou cantos arredondados.`,

    'envelope-documentos-estetica':
        `Envelope para documentos 24x34cm personalizado para clínica de estética. Tamanho ideal para fichas clínicas A4, prontuários e documentos de grande formato com identidade visual da sua marca.\n\nPapel Off-Set Paperfect com 90g/m², formato 24 x 34 cm, com impressão de altíssima nitidez.`,

    'envelope-estetica-personalizado':
        `Envelope ofício personalizado para clínica de estética. Para entrega profissional de documentos, laudos, receituários e comunicados com a identidade visual da sua marca.\n\nPapel Off-Set Paperfect com 90g/m², formato ofício (11,4 x 23 cm), com impressão de altíssima nitidez.`,

    'tabela-controle-tratamentos':
        `Tabela skincare para controle de tratamentos estéticos. Organize protocolos, frequência de sessões, produtos utilizados e a evolução dos resultados de forma visual e de fácil consulta.\n\n${S_FICHA}`,

    'cartao-agendamento-estetica':
        `Cartão de agendamento personalizado para clínica de estética. Para organizar consultas, retornos e sessões com um material elegante que reforça a identidade da sua clínica.\n\nImpresso em papel Couché 300g. Formato compacto.`,

    'planner-diario-estetica':
        `Planner diário para profissional de estética. Layout funcional e elegante para organização de agenda, procedimentos, atendimentos e metas diárias, com identidade visual personalizada.\n\n${S_FICHA}`,

    'receituario-controle-especial':
        `Receituário de controle especial para clínica de estética. Documento numerado conforme regulamentação para prescrição de medicamentos controlados, com campos para dados do profissional, paciente e CRM/CRN.\n\n${S_FICHA}`,

    'timbrado-a4-estetica':
        `Papel timbrado A4 personalizado para clínica de estética. Utilizado para comunicados oficiais, laudos, cartas e documentos internos, com identidade visual e dados completos do profissional ou clínica.\n\n${S_FICHA}`,

    'receituario-autocopiativo-estetica':
        `Receituário autocopiativo em 2 vias para clínica de estética. Via do paciente e via de controle com papel carbonado integrado, para prescrições com necessidade de arquivo e comprovante.\n\nBlocos com 100 folhas em papel autocopiativo (carbonado) e altíssima nitidez.`,

    'receituario-estetica-personalizado':
        `Receituário personalizado para profissionais de estética e harmonização. Design com identidade visual, dados do profissional e espaço estruturado para prescrição de produtos e protocolos.\n\n${S_FICHA}`,

    'talao-recibos-estetica':
        `Talão de recibos personalizado para clínica de estética. Campos para dados do profissional, paciente, procedimento realizado, valor e condição de pagamento.\n\nBlocos com 100 folhas, formato 10 x 15 cm, em papel Off-Set Paperfect com 90g/m² e altíssima nitidez.`,

    'pastas-personalizadas-estetica':
        `Pastas A4 personalizadas para clínica de estética com identidade visual completa. Organização e presenteação premium de documentos, orçamentos e fichas clínicas para pacientes high ticket.\n\nPapel Couché 250g ou 300g com opções de orelhas internas ou bolsa para documentos. Laminação fosca ou brilho.`,

    'cartao-boas-vindas':
        `Cartão de boas-vindas personalizado para clínica de estética. Para surpreender seus pacientes desde o primeiro atendimento com um material acolhedor que reforça a identidade da sua marca.\n\nImpresso em papel Off-Set Super 6 Plus® com 240g/m², com vinco central.`,

    'voucher-promocional-fidelizacao':
        `Voucher promocional de fidelização personalizado para clínica de estética. Para recompensar pacientes fiéis e incentivar indicações com um material de alto valor percebido.\n\nImpresso em papel Off-Set Super 6 Plus® com 240g/m², com vinco central.`,

    'cartao-fidelidade-estetica':
        `Cartão de fidelidade para clínicas de estética. Para reter e fidelizar pacientes com um cartão de alta qualidade que transmite o padrão e o cuidado da sua marca.\n\nImpresso em papel Couché Brilho® envernizado com 250g/m². Formato 8,8 x 4,8 cm.`,
};

// Apply updates
let updated = 0;
let skipped = [];
for (const product of products) {
    const handle = product.handle;
    if (DESCRIPTIONS[handle]) {
        product.description = DESCRIPTIONS[handle];
        updated++;
    } else {
        skipped.push(handle);
    }
}

fs.writeFileSync(filePath, JSON.stringify(products, null, 2), 'utf-8');
console.log(`\n✅ Updated ${updated} product descriptions.`);
if (skipped.length) {
    console.log(`⚠️  ${skipped.length} products were NOT updated:\n   ${skipped.join('\n   ')}`);
}
