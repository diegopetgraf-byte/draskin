import type { ProcedurePage } from './types';

/**
 * Páginas de procedimento: pele e laser (lote B).
 * Fontes: textos do site atual revisados pela Dra. Samara Rocha
 * (src/data/treatments.ts, src/components/HomeClient.tsx) e os termos de
 * consentimento da clínica (pasta "Fechado" da Med Logos).
 */
export const PROCEDURES_PELE_B: ProcedurePage[] = [
  {
    slug: 'rejuvenescimento-facial',
    article: 'o',
    name: 'Rejuvenescimento facial',
    category: 'pele-e-laser',
    metaTitle: 'Rejuvenescimento facial em Santana, SP | Dra. Skin',
    metaDescription:
      'Rejuvenescimento facial em Santana, São Paulo: plano sob medida que combina toxina, bioestimuladores e preenchimentos. Agende sua avaliação na Dra. Skin.',
    h1: 'Rejuvenescimento facial em Santana',
    subtitle: 'Protocolo integrado de rejuvenescimento global, planejado para o seu rosto.',
    intro:
      'O rejuvenescimento facial é a combinação personalizada de tratamentos, como toxina botulínica, bioestimuladores e preenchimentos. É indicado para quem tem vários sinais de envelhecimento e quer um plano estratégico e completo, com resultado natural.',
    about: [
      'Cada rosto envelhece de um jeito. Por isso, em vez de um procedimento isolado, a Dra. Samara Rocha monta um protocolo sob medida, que trata a pele e a estrutura do rosto ao mesmo tempo.',
      'A toxina botulínica suaviza as linhas de expressão. Os bioestimuladores estimulam o colágeno e tratam a flacidez de forma gradual. Os preenchimentos com ácido hialurônico devolvem o volume perdido e redefinem contornos.',
      'Tudo começa na avaliação, aqui na clínica em Santana. Analisamos suas queixas, sua estrutura facial e seu histórico de saúde para definir quais técnicas entram no plano e em que ordem.',
    ],
    indications: [
      'Múltiplos sinais de envelhecimento facial ao mesmo tempo',
      'Rugas estáticas e linhas de expressão',
      'Perda de volume e de contorno com o passar dos anos',
      'Flacidez e perda de firmeza da pele',
      'Quem prefere um plano completo a procedimentos isolados',
    ],
    steps: [
      'Avaliação personalizada da pele, da estrutura facial e do histórico de saúde',
      'Definição do protocolo: quais técnicas entram e em que ordem',
      'Realização das etapas planejadas, uma a uma',
      'Acompanhamento da evolução e ajustes do plano',
    ],
    facts: {
      duration: 'Definido na avaliação',
      sessions: 'Definido na avaliação',
      recovery: 'Varia de acordo com os procedimentos escolhidos',
      anesthesia: 'Definido na avaliação',
    },
    benefits: [
      'Harmonia facial restaurada',
      'Rejuvenescimento tridimensional da pele',
      'Suavização de rugas estáticas e dinâmicas',
      'Contornos mais jovens e definidos',
      'Plano estratégico, pensado para o seu rosto',
    ],
    care: [
      'Seguir as orientações específicas de cada procedimento do plano',
      'Não massagear as áreas tratadas, salvo orientação',
      'Evitar exposição solar intensa',
      'Usar protetor solar conforme orientação profissional',
      'Comunicar qualquer reação inesperada à clínica',
    ],
    contraindications: [
      'Gravidez, que deve ser informada antes do plano',
      'Alergias conhecidas aos produtos utilizados',
      'Uso de medicamentos ou condições de saúde que exijam avaliação prévia',
      'Procedimentos estéticos recentes na mesma área',
    ],
    faq: [
      {
        q: 'O rejuvenescimento facial é um único procedimento?',
        a: 'Não. É um protocolo que combina técnicas como toxina botulínica, bioestimuladores e preenchimentos, escolhidas na avaliação de acordo com as suas queixas.',
      },
      {
        q: 'Quanto tempo duram os resultados?',
        a: 'Depende de cada técnica. A toxina botulínica costuma durar de 4 a 6 meses, os preenchimentos de ácido hialurônico de 10 a 18 meses, e os bioestimuladores continuam agindo na produção de colágeno por até 2 anos.',
      },
      {
        q: 'Posso voltar à rotina logo depois?',
        a: 'Na maioria dos tratamentos injetáveis, sim, com cuidados básicos, como não massagear a área e evitar sol intenso. O tempo exato varia conforme os procedimentos escolhidos.',
      },
      {
        q: 'Os procedimentos doem?',
        a: 'A maioria utiliza anestésicos tópicos ou injetáveis locais, para o máximo conforto durante a sessão.',
      },
      {
        q: 'Como sei qual plano é ideal para mim?',
        a: 'Na consulta de avaliação, a Dra. Samara analisa sua pele, sua estrutura facial e suas queixas para criar um protocolo sob medida.',
      },
    ],
    related: ['toxina-botulinica', 'bioestimuladores-de-colageno', 'preenchimento-facial', 'full-face'],
    image: '/rejuvenescimento_final.jpg',
  },
  {
    slug: 'microagulhamento',
    article: 'o',
    name: 'Microagulhamento',
    category: 'pele-e-laser',
    metaTitle: 'Microagulhamento em Santana, São Paulo | Dra. Skin',
    metaDescription:
      'Microagulhamento em Santana, SP: indução de colágeno para cicatrizes de acne, poros dilatados, textura e linhas finas. Agende sua avaliação na Dra. Skin.',
    h1: 'Microagulhamento em Santana',
    subtitle: 'Indução de colágeno para cicatrizes, poros e textura da pele.',
    intro:
      'O microagulhamento usa microagulhas estéreis para abrir canais microscópicos na pele e estimular a produção natural de colágeno e elastina. É indicado para cicatrizes de acne, poros dilatados, linhas finas e textura irregular.',
    about: [
      'As microagulhas provocam pequenas perfurações controladas na pele. Esse processo estimula colágeno e elastina e promove renovação celular, firmeza e melhora da textura.',
      'Os canais abertos também permitem a permeação profunda de ativos selecionados, técnica chamada de drug delivery. Os ativos são escolhidos conforme a avaliação profissional, para potencializar os resultados.',
      'Pode ser feito no rosto, pescoço, colo, couro cabeludo e mãos. Na Dra. Skin, em Santana, a profundidade das agulhas e os ativos são definidos para o seu tipo de pele.',
    ],
    indications: [
      'Cicatrizes de acne',
      'Poros dilatados',
      'Linhas finas e marcas de expressão',
      'Textura irregular da pele',
      'Manchas superficiais',
      'Rosto, pescoço, colo, couro cabeludo e mãos',
    ],
    steps: [
      'Avaliação da pele e definição dos ativos',
      'Higienização da área a ser tratada',
      'Aplicação com dispositivo de microagulhas estéreis, na profundidade adequada',
      'Permeação dos ativos selecionados',
      'Orientações de cuidados para casa',
    ],
    facts: {
      duration: '45 minutos',
      sessions: 'Sessões seriadas, número definido na avaliação',
      recovery: '24h a 48h de vermelhidão moderada',
      anesthesia: 'Definido na avaliação',
    },
    benefits: [
      'Suavização de cicatrizes de acne',
      'Redução de poros dilatados',
      'Melhora de rugas finas',
      'Clareamento de manchas superficiais',
      'Pele mais firme e com textura uniforme',
    ],
    care: [
      'Evitar exposição solar direta por pelo menos 7 dias',
      'Aplicar protetor solar conforme orientação',
      'Não usar maquiagem ou cosméticos irritantes nas primeiras 48 horas',
      'Evitar coçar, friccionar ou manipular a área tratada',
      'Não praticar atividades físicas intensas nas primeiras 24 horas',
      'Evitar banhos muito quentes, piscinas e saunas',
      'Usar os produtos calmantes ou reparadores indicados pela profissional',
    ],
    contraindications: [
      'Alergias aos ativos utilizados, que devem ser informadas antes',
      'Doenças autoimunes, avaliadas na consulta',
      'Uso de medicamentos que precisem de avaliação prévia',
      'Procedimentos estéticos recentes na mesma área',
    ],
    faq: [
      {
        q: 'Quando começo a ver resultado?',
        a: 'Os resultados são progressivos e podem ser observados a partir da segunda semana. Sessões seriadas são recomendadas para o melhor desempenho do tratamento.',
      },
      {
        q: 'A pele fica vermelha depois?',
        a: 'Sim. É esperada vermelhidão moderada por 24h a 48h. Também podem ocorrer leve inchaço, descamação ou sensibilidade, que são passageiros.',
      },
      {
        q: 'Posso usar maquiagem no dia seguinte?',
        a: 'O ideal é não usar maquiagem nem cosméticos irritantes nas primeiras 48 horas.',
      },
      {
        q: 'O microagulhamento serve para cicatriz de acne?',
        a: 'Sim. A suavização de cicatrizes de acne é uma das principais indicações, junto com poros dilatados e textura irregular.',
      },
      {
        q: 'Dá para fazer no couro cabeludo?',
        a: 'Sim. O microagulhamento capilar faz parte dos nossos tratamentos capilares contra a queda.',
      },
    ],
    related: ['tratamentos-capilares', 'laser-rejuvenescimento', 'black-peel', 'skinbooster'],
    image: '/microagulhamento.jpeg',
  },
  {
    slug: 'hialuronidase',
    article: 'a',
    name: 'Hialuronidase',
    category: 'facial',
    metaTitle: 'Hialuronidase em Santana, São Paulo | Dra. Skin',
    metaDescription:
      'Hialuronidase em Santana, SP: correção de preenchimentos com ácido hialurônico, assimetrias, nódulos e acúmulos de produto. Agende sua avaliação conosco.',
    h1: 'Hialuronidase em Santana',
    subtitle: 'Correção de preenchimentos anteriores com cuidado e segurança.',
    intro:
      'A hialuronidase é usada para corrigir efeitos indesejados de preenchimentos com ácido hialurônico feitos anteriormente. É indicada para quem ficou insatisfeito com o resultado ou teve alguma intercorrência, como assimetria, nódulos ou acúmulo irregular de produto.',
    about: [
      'Às vezes, um preenchimento feito em outro lugar não fica como esperado. A hialuronidase permite tratar esse resultado e restaurar a simetria facial.',
      'O procedimento é individualizado. Antes da aplicação, há avaliação clínica, incluindo testes de sensibilidade, e tudo é registrado em prontuário.',
      'Na Dra. Skin, em Santana, a aplicação é feita em ambiente seguro, com materiais regulamentados e dentro das normas sanitárias. O objetivo é devolver harmonia ao rosto e bem-estar estético e emocional.',
    ],
    indications: [
      'Insatisfação com o resultado de um preenchimento anterior',
      'Assimetrias causadas por ácido hialurônico',
      'Nódulos ou acúmulo irregular de produto',
      'Intercorrências clínicas ou técnicas de preenchimentos anteriores',
      'Quem deseja reverter um preenchimento e recomeçar o planejamento',
    ],
    steps: [
      'Avaliação clínica e histórico do preenchimento anterior',
      'Testes de sensibilidade',
      'Aplicação individualizada da hialuronidase nas áreas indicadas',
      'Acompanhamento da resposta e, se preciso, novas sessões',
    ],
    facts: {
      duration: 'Definido na avaliação',
      sessions: 'Definido na avaliação; pode ser necessária mais de uma',
      recovery: 'Definido na avaliação',
      anesthesia: 'Definido na avaliação',
    },
    benefits: [
      'Correção de assimetrias',
      'Tratamento de nódulos e acúmulos de produto',
      'Reversão de efeitos indesejados de preenchimentos',
      'Restauração da harmonia facial',
      'Bem-estar estético e emocional',
    ],
    care: [
      'Informar todo o histórico do preenchimento anterior na avaliação',
      'Relatar imediatamente qualquer reação inesperada',
      'Seguir as orientações recebidas após a aplicação',
      'Aguardar a liberação profissional antes de um novo preenchimento',
    ],
    contraindications: [
      'Alergia conhecida à hialuronidase',
      'Reação nos testes de sensibilidade',
      'Condições de saúde que exijam avaliação clínica prévia',
    ],
    faq: [
      {
        q: 'Posso fazer hialuronidase se o preenchimento foi feito em outra clínica?',
        a: 'Sim. A hialuronidase é indicada justamente para corrigir preenchimentos feitos anteriormente, em outro estabelecimento ou com outro profissional.',
      },
      {
        q: 'Uma sessão é suficiente?',
        a: 'Depende do caso. Em algumas situações, podem ser necessárias múltiplas sessões. Isso é definido na avaliação.',
      },
      {
        q: 'A hialuronidase tem riscos?',
        a: 'Como qualquer procedimento, sim. Podem ocorrer ardência ou dor leve no local, reações alérgicas locais e, raramente, sistêmicas. Por isso fazemos avaliação e testes de sensibilidade antes.',
      },
      {
        q: 'O uso da hialuronidase na estética é aprovado?',
        a: 'Na estética, o uso é off-label. Isso é explicado na consulta e registrado no termo de consentimento, que você assina antes do procedimento.',
      },
      {
        q: 'Depois posso fazer um novo preenchimento?',
        a: 'Pode, com novo planejamento. O momento certo é definido pela profissional depois de avaliar a resposta ao tratamento.',
      },
    ],
    related: ['preenchimento-facial', 'preenchimento-labial', 'preenchimento-de-olheiras', 'harmonizacao-facial'],
    image: '/tratamentos/hialuronidase.webp',
  },
  {
    slug: 'black-peel',
    article: 'o',
    name: 'Black peel',
    category: 'pele-e-laser',
    metaTitle: 'Black peel em Santana, São Paulo | Dra. Skin',
    metaDescription:
      'Black peel em Santana, SP: máscara de carbono ativada por laser para limpeza profunda, oleosidade, poros e textura da pele. Agende sua avaliação conosco.',
    h1: 'Black peel em Santana',
    subtitle: 'Máscara de carbono com laser para uma pele limpa, uniforme e com viço.',
    intro:
      'O Black Peel é a aplicação de uma máscara de carbono sobre a pele, ativada em seguida com laser. Ajuda na limpeza profunda, no controle da oleosidade, na redução de poros dilatados e na melhora da textura.',
    about: [
      'Na Dra. Skin, o black peel é feito com o laser Omer. A máscara de carbono absorve a energia do laser e promove um efeito fototérmico controlado na pele.',
      'Esse efeito auxilia na limpeza profunda, no controle da oleosidade e na redução dos poros. Também estimula a renovação celular e o clareamento progressivo de manchas superficiais.',
      'É uma boa escolha para quem busca melhora global da qualidade da pele. Os resultados são progressivos e aparecem ao longo das sessões, aqui na clínica em Santana.',
    ],
    indications: [
      'Pele oleosa',
      'Poros dilatados',
      'Textura irregular',
      'Manchas superficiais',
      'Pele opaca, que precisa de renovação',
      'Melhora global da qualidade da pele',
    ],
    steps: [
      'Avaliação da pele',
      'Higienização da área',
      'Aplicação tópica da máscara de carbono',
      'Ativação da máscara com o laser',
      'Orientações de fotoproteção e cuidados',
    ],
    facts: {
      duration: 'Definido na avaliação',
      sessions: 'Múltiplas sessões, com manutenção periódica conforme avaliação',
      recovery: 'Imediato; pode haver vermelhidão e descamação leve nos dias seguintes',
      anesthesia: 'Definido na avaliação',
    },
    benefits: [
      'Limpeza profunda da pele',
      'Controle da oleosidade',
      'Redução de poros dilatados',
      'Melhora da textura cutânea',
      'Clareamento progressivo de manchas superficiais',
    ],
    care: [
      'Evitar exposição solar direta e bronzeadores por pelo menos 15 dias',
      'Usar protetor solar conforme orientação profissional',
      'Evitar calor excessivo, como banhos quentes e sauna, nas primeiras 48 horas',
      'Não usar produtos irritantes, ácidos ou esfoliantes sem orientação',
      'Manter a pele limpa, hidratada e protegida',
      'Evitar outros procedimentos estéticos na área pelo período recomendado',
    ],
    contraindications: [
      'Exposição solar recente, que deve ser informada antes',
      'Gravidez',
      'Doenças dermatológicas ativas na área',
      'Uso de medicamentos que precisem de avaliação prévia',
    ],
    faq: [
      {
        q: 'O Black Peel dói?',
        a: 'Pode haver leve ardor, sensação de calor ou sensibilidade durante e após o procedimento. São sensações passageiras.',
      },
      {
        q: 'Quantas sessões são necessárias?',
        a: 'Os resultados são progressivos e aparecem ao longo das sessões. O número exato e a manutenção periódica são definidos na avaliação.',
      },
      {
        q: 'Posso tomar sol depois?',
        a: 'Evite sol direto e bronzeadores por pelo menos 15 dias, e use protetor solar conforme a orientação da profissional.',
      },
      {
        q: 'A pele descasca?',
        a: 'Pode ocorrer descamação leve nos dias seguintes, além de vermelhidão e inchaço discreto e passageiro.',
      },
    ],
    related: ['remocao-de-manchas', 'laser-rejuvenescimento', 'microagulhamento', 'laser-para-melasma'],
    image: '/tratamentos/black-peel.webp',
  },
  {
    slug: 'laser-para-melasma',
    article: 'o',
    name: 'Laser para melasma',
    category: 'pele-e-laser',
    metaTitle: 'Laser para melasma em Santana, SP | Dra. Skin',
    metaDescription:
      'Laser para melasma em Santana, São Paulo: clareamento progressivo das manchas e tom mais uniforme, com acompanhamento contínuo. Agende sua avaliação.',
    h1: 'Laser para melasma em Santana',
    subtitle: 'Clareamento seguro e preciso de manchas.',
    intro:
      'O tratamento de melasma com laser e luz atua de forma controlada nos pigmentos responsáveis pelas manchas, para uniformizar o tom da pele. É indicado para quem convive com melasma persistente ou hiperpigmentação pós-inflamatória.',
    about: [
      'O melasma é uma condição crônica e recidivante. Pode ser influenciado por hormônios, genética, exposição solar e hábitos de vida. Por isso o foco é clarear e manter o controle ao longo do tempo.',
      'Usamos tecnologias de laser que agem de maneira fotoacústica, quebrando a melanina em partículas menores sem gerar calor excessivo, o que evita o efeito rebote. A luz pulsada também pode ser indicada, com feixes de luz controlados sobre as manchas.',
      'A tecnologia e o número de sessões são definidos na avaliação, aqui na Dra. Skin em Santana, conforme o tipo de melasma, a profundidade do pigmento e o fototipo da pele.',
    ],
    indications: [
      'Melasma persistente',
      'Hiperpigmentação pós-inflamatória',
      'Manchas solares',
      'Tom de pele irregular',
      'Quem busca um tratamento seguro para manchas',
    ],
    steps: [
      'Avaliação do tipo de melasma, da profundidade do pigmento e do fototipo',
      'Escolha da tecnologia e dos parâmetros',
      'Sessão de laser ou luz sobre as áreas com manchas',
      'Orientações de fotoproteção diária',
      'Acompanhamento contínuo e manutenção',
    ],
    facts: {
      duration: '30 a 45 minutos',
      sessions: 'Múltiplas sessões, com manutenção periódica',
      recovery: 'Imediato (pele levemente rosada por algumas horas)',
      anesthesia: 'Definido na avaliação',
    },
    benefits: [
      'Clareamento progressivo do melasma',
      'Uniformização do tom da pele',
      'Redução de manchas solares',
      'Melhora na textura geral',
      'Estímulo à renovação celular',
    ],
    care: [
      'Evitar exposição solar direta e bronzeadores por pelo menos 30 dias',
      'Usar protetor solar conforme orientação, com reaplicações regulares',
      'Evitar calor excessivo, como banhos quentes e sauna, nas primeiras 48 horas',
      'Não usar produtos irritantes, ácidos ou esfoliantes sem orientação',
      'Manter a pele limpa, hidratada e protegida',
      'Seguir as recomendações de fotoproteção diária',
    ],
    contraindications: [
      'Gravidez',
      'Exposição solar recente',
      'Alterações hormonais, que devem ser informadas na avaliação',
      'Tratamentos dermatológicos recentes ou uso de medicamentos que precisem de avaliação',
    ],
    faq: [
      {
        q: 'O laser cura o melasma?',
        a: 'O melasma é uma condição crônica e recidivante. O tratamento clareia as manchas e ajuda a mantê-las sob controle, com acompanhamento contínuo.',
      },
      {
        q: 'Quantas sessões são necessárias?',
        a: 'Em geral, são necessárias múltiplas sessões e, às vezes, tratamentos associados. A manutenção periódica é definida na avaliação.',
      },
      {
        q: 'A mancha pode escurecer antes de clarear?',
        a: 'Sim. Um escurecimento temporário das manchas antes do clareamento pode acontecer e faz parte do processo.',
      },
      {
        q: 'Posso voltar à rotina no mesmo dia?',
        a: 'Sim. A pele pode ficar levemente rosada por algumas horas. O mais importante é a fotoproteção rigorosa nos dias seguintes.',
      },
      {
        q: 'Por que o protetor solar é tão importante?',
        a: 'A exposição solar é um dos fatores que influenciam o melasma. Sem fotoproteção diária, o controle das manchas fica comprometido.',
      },
    ],
    related: ['remocao-de-manchas', 'laser-rejuvenescimento', 'black-peel', 'microagulhamento'],
    image: '/laser-melasma.jpeg',
  },
  {
    slug: 'laser-rejuvenescimento',
    article: 'o',
    name: 'Laser rejuvenescimento',
    category: 'pele-e-laser',
    metaTitle: 'Laser rejuvenescimento em Santana, SP | Dra. Skin',
    metaDescription:
      'Laser rejuvenescimento em Santana, São Paulo, com o laser Pisom: colágeno, textura, poros, linhas finas e manchas. Agende sua avaliação com a Dra. Samara.',
    h1: 'Laser rejuvenescimento em Santana',
    subtitle: 'Estímulo de colágeno, textura e redução de poros.',
    intro:
      'O laser rejuvenescimento estimula a renovação do colágeno para melhorar a qualidade da pele. É indicado para fotoenvelhecimento, poros abertos, linhas finas e perda de elasticidade.',
    about: [
      'O laser promove microlesões controladas nas camadas profundas da pele. Isso induz um processo de cicatrização que renova o colágeno.',
      'Na Dra. Skin usamos o laser Pisom (BB Laser Dual Wave), uma tecnologia de dupla onda. Ele promove estímulo térmico controlado nas camadas superficiais e profundas, atuando ao mesmo tempo na qualidade da pele e na uniformização do tom.',
      'Além de textura e poros, o tratamento auxilia na redução de manchas, vasinhos e sinais de fotoenvelhecimento. Os parâmetros são ajustados para o seu tipo de pele, aqui na clínica em Santana.',
    ],
    indications: [
      'Fotoenvelhecimento',
      'Poros abertos',
      'Linhas finas',
      'Perda de elasticidade da pele',
      'Textura irregular',
      'Manchas superficiais e vasinhos',
    ],
    steps: [
      'Avaliação do tipo de pele e do fototipo',
      'Ajuste individual dos parâmetros do laser Pisom',
      'Aplicação do laser nas áreas tratadas',
      'Orientações de fotoproteção e cuidados',
    ],
    facts: {
      duration: '30 a 45 minutos',
      sessions: 'Múltiplas sessões, número definido na avaliação',
      recovery: '2 a 4 dias (leve descamação e vermelhidão controladas)',
      anesthesia: 'Definido na avaliação',
    },
    benefits: [
      'Redução de rugas finas',
      'Fechamento de poros dilatados',
      'Melhora da textura e do viço',
      'Clareamento de manchas superficiais',
      'Tom de pele mais uniforme',
    ],
    care: [
      'Evitar exposição solar direta e bronzeadores por pelo menos 15 dias',
      'Usar protetor solar conforme orientação profissional',
      'Evitar calor excessivo, como banhos quentes e sauna, por 48 horas',
      'Não usar produtos irritantes ou ácidos sem orientação',
      'Manter a pele limpa, hidratada e protegida',
      'Evitar outros procedimentos estéticos na área pelo período recomendado',
    ],
    contraindications: [
      'Gravidez',
      'Exposição solar recente',
      'Doenças dermatológicas ativas na área',
      'Alterações hormonais ou uso de medicamentos que precisem de avaliação prévia',
    ],
    faq: [
      {
        q: 'Quando vejo o resultado?',
        a: 'Os resultados são progressivos e podem ser observados ao longo de semanas.',
      },
      {
        q: 'A pele fica vermelha?',
        a: 'Sim. São esperados de 2 a 4 dias de leve descamação e vermelhidão controladas, além de calor e sensibilidade passageiros.',
      },
      {
        q: 'O laser também trata manchas e vasinhos?',
        a: 'Sim. O Laser Pisom auxilia na redução de manchas, vasinhos, poros dilatados, textura irregular e linhas finas.',
      },
      {
        q: 'Quantas sessões são necessárias?',
        a: 'Podem ser necessárias múltiplas sessões. O número é definido na avaliação, conforme a pele e a área tratada.',
      },
    ],
    related: ['laser-para-melasma', 'microagulhamento', 'black-peel', 'remocao-de-manchas'],
    image: '/laser-rejuvenescimento.jpeg',
  },
  {
    slug: 'remocao-de-manchas',
    article: 'a',
    name: 'Remoção de manchas',
    category: 'pele-e-laser',
    metaTitle: 'Remoção de manchas na pele em Santana, SP | Dra. Skin',
    metaDescription:
      'Remoção de manchas em Santana, São Paulo: laser, luz pulsada e peelings para manchas solares, melanoses, lentigos e manchas pós-inflamatórias. Agende já.',
    h1: 'Remoção de manchas em Santana',
    subtitle: 'Clareamento progressivo para um tom de pele mais uniforme.',
    intro:
      'O tratamento para remoção de manchas usa recursos como laser, luz pulsada e peelings para clarear hipercromias de forma progressiva. É indicado para manchas solares, melanoses, lentigos, manchas pós-inflamatórias e alterações de tonalidade.',
    about: [
      'Nem toda mancha é igual. O tipo, a profundidade do pigmento e o fototipo da pele mudam a escolha do tratamento.',
      'Por isso a Dra. Samara Rocha avalia cada caso antes de indicar o recurso: laser, luz pulsada, peeling ou a combinação deles.',
      'O clareamento é progressivo e acontece ao longo das sessões. Na Dra. Skin, em Santana, o plano inclui orientação de cuidados e, quando indicado, manutenção.',
    ],
    indications: [
      'Manchas solares',
      'Melanoses',
      'Lentigos',
      'Manchas pós-inflamatórias',
      'Alterações de tonalidade da pele',
    ],
    steps: [
      'Avaliação do tipo de mancha, da profundidade do pigmento e do fototipo',
      'Escolha do recurso: laser, luz pulsada ou peeling',
      'Sessões de tratamento na área indicada',
      'Orientações de fotoproteção e cuidados',
      'Acompanhamento e manutenção, quando indicada',
    ],
    facts: {
      duration: 'Definido na avaliação',
      sessions: 'Múltiplas sessões, número definido na avaliação',
      recovery: 'Definido na avaliação',
      anesthesia: 'Definido na avaliação',
    },
    benefits: [
      'Clareamento progressivo das manchas',
      'Tom de pele mais uniforme',
      'Tratamento escolhido para o seu tipo de mancha',
      'Plano com manutenção, quando indicada',
    ],
    care: [
      'Evitar exposição solar direta e bronzeadores por pelo menos 15 a 30 dias',
      'Usar protetor solar conforme orientação profissional',
      'Evitar calor excessivo, como banhos quentes e sauna, nas primeiras 48 horas',
      'Não manipular crostas ou áreas em descamação',
      'Evitar produtos irritantes, ácidos ou esfoliantes sem orientação',
      'Manter a pele limpa, hidratada e protegida',
    ],
    contraindications: [
      'Gravidez',
      'Exposição solar recente',
      'Doenças dermatológicas ativas na área',
      'Uso de medicamentos que precisem de avaliação prévia',
    ],
    faq: [
      {
        q: 'Qual tratamento remove manchas?',
        a: 'Depende do tipo de mancha. Podem ser usados laser, luz pulsada, peelings ou outros métodos, escolhidos na avaliação.',
      },
      {
        q: 'A mancha sai totalmente?',
        a: 'O clareamento é progressivo e varia conforme o tipo de mancha, a profundidade do pigmento e a resposta da pele. Não há garantia de remoção completa em todos os casos.',
      },
      {
        q: 'A mancha pode escurecer antes de clarear?',
        a: 'Sim. Pode ocorrer escurecimento temporário da mancha antes do clareamento, além de descamação superficial ou pequenas crostas.',
      },
      {
        q: 'Quantas sessões são necessárias?',
        a: 'Podem ser necessárias múltiplas sessões, e a manutenção pode ser indicada conforme a avaliação.',
      },
    ],
    related: ['laser-para-melasma', 'black-peel', 'laser-rejuvenescimento', 'clareamento-intimo-e-axilas'],
    image: '/tratamentos/remocao-de-manchas.webp',
  },
  {
    slug: 'remocao-de-tatuagem',
    article: 'a',
    name: 'Remoção de tatuagem',
    category: 'pele-e-laser',
    metaTitle: 'Remoção de tatuagem a laser em Santana, SP | Dra. Skin',
    metaDescription:
      'Remoção de tatuagem a laser em Santana, São Paulo: clareamento progressivo da tinta, com remoção parcial ou total ao longo das sessões. Agende a avaliação.',
    h1: 'Remoção de tatuagem a laser em Santana',
    subtitle: 'Clareamento gradual da tinta com laser de alta precisão.',
    intro:
      'A remoção de tatuagem a laser aplica feixes de alta precisão sobre a área tatuada para fragmentar as partículas de pigmento. O organismo elimina esses fragmentos aos poucos, clareando a tatuagem de forma parcial ou total.',
    about: [
      'O laser quebra o pigmento da tinta em partículas menores. Depois, o sistema imunológico elimina esses fragmentos de forma gradual.',
      'Por isso o processo é feito em várias sessões, com intervalos entre elas. O resultado depende do tipo e da cor da tinta, da profundidade do pigmento, do tempo da tatuagem, da área e do tipo de pele.',
      'O objetivo pode ser o clareamento progressivo ou a remoção parcial ou total. Na Dra. Skin, em Santana, o plano é definido na avaliação.',
    ],
    indications: [
      'Quem deseja remover uma tatuagem',
      'Clareamento parcial da tatuagem',
      'Tatuagens antigas ou recentes, avaliadas caso a caso',
      'Diferentes cores e profundidades de tinta, conforme avaliação',
    ],
    steps: [
      'Avaliação da tatuagem: tipo e cor da tinta, profundidade, tempo e área',
      'Ajuste dos parâmetros do laser para a sua pele',
      'Aplicação do laser sobre a área tatuada',
      'Orientações de cuidados com a pele',
      'Novas sessões, com intervalos adequados',
    ],
    facts: {
      duration: 'Definido na avaliação',
      sessions: 'Múltiplas sessões, com intervalos adequados',
      recovery: 'Definido na avaliação',
      anesthesia: 'Definido na avaliação',
    },
    benefits: [
      'Clareamento progressivo da tatuagem',
      'Remoção parcial ou total do pigmento',
      'Laser de alta precisão sobre a área tatuada',
      'Plano ajustado à sua tatuagem e ao seu tipo de pele',
    ],
    care: [
      'Evitar exposição solar direta e bronzeadores por pelo menos 30 dias',
      'Usar protetor solar conforme orientação profissional',
      'Não remover crostas ou bolhas, permitindo a cicatrização natural',
      'Evitar calor excessivo, como banhos quentes e sauna, nas primeiras 48 horas',
      'Manter a área tratada limpa, seca e protegida',
      'Evitar outros procedimentos na região até a liberação profissional',
    ],
    contraindications: [
      'Gravidez',
      'Tendência a queloides, que deve ser informada antes',
      'Doenças dermatológicas ativas na área',
      'Uso de medicamentos que precisem de avaliação prévia',
    ],
    faq: [
      {
        q: 'Quantas sessões são necessárias?',
        a: 'O tratamento exige múltiplas sessões, com intervalos adequados. O número depende da tinta, da profundidade do pigmento, do tempo da tatuagem e da sua pele.',
      },
      {
        q: 'A remoção dói?',
        a: 'Pode haver dor ou desconforto durante e após a aplicação, além de vermelhidão, inchaço e calor passageiros.',
      },
      {
        q: 'A tatuagem sai por completo?',
        a: 'O clareamento é gradual e pode ser parcial ou total. Não há garantia de remoção completa em todos os casos.',
      },
      {
        q: 'Forma casquinha depois?',
        a: 'Podem se formar crostas, bolhas ou descamação superficial. Não remova as crostas: deixe a pele cicatrizar naturalmente.',
      },
      {
        q: 'Tintas claras respondem igual?',
        a: 'Nem sempre. Pode ocorrer escurecimento temporário do pigmento, especialmente em tintas claras.',
      },
    ],
    related: ['remocao-de-manchas', 'laser-rejuvenescimento', 'epilacao-a-laser'],
    image: '/tratamentos/remocao-de-tatuagem.webp',
  },
  {
    slug: 'epilacao-a-laser',
    article: 'a',
    name: 'Epilação a laser',
    category: 'pele-e-laser',
    metaTitle: 'Epilação a laser em Santana, São Paulo | Dra. Skin',
    metaDescription:
      'Epilação a laser em Santana, São Paulo: redução progressiva e prolongada dos pelos, com sessões planejadas para a sua pele. Agende sua avaliação conosco.',
    h1: 'Epilação a laser em Santana',
    subtitle: 'Redução progressiva dos pelos, com sessões planejadas para você.',
    intro:
      'A epilação a laser aplica feixes de luz concentrada sobre a pele para atingir o folículo piloso. O objetivo é a redução progressiva e prolongada do crescimento dos pelos.',
    about: [
      'O laser atua sobre a melanina presente no pelo. Ele gera calor que danifica o folículo, dificultando ou retardando o crescimento futuro.',
      'Os resultados variam conforme o tipo de pele, a cor e a espessura do pelo, a área tratada e as alterações hormonais. Por isso o tratamento é feito em várias sessões, com intervalos adequados.',
      'Na Dra. Skin, em Santana, a avaliação define o plano para cada área do corpo.',
    ],
    indications: [
      'Quem deseja reduzir pelos de forma prolongada',
      'Diferentes áreas do corpo e do rosto, conforme avaliação',
      'Diferentes tipos de pele e de pelo, avaliados caso a caso',
    ],
    steps: [
      'Avaliação do tipo de pele, da cor e espessura do pelo e da área',
      'Preparo da área a ser tratada',
      'Aplicação dos feixes de luz sobre a pele',
      'Orientações de cuidados',
      'Novas sessões, com intervalos adequados',
    ],
    facts: {
      duration: 'Definido na avaliação',
      sessions: 'Múltiplas sessões, com intervalos adequados',
      recovery: 'Definido na avaliação',
      anesthesia: 'Definido na avaliação',
    },
    benefits: [
      'Redução progressiva dos pelos',
      'Resultado prolongado',
      'Ação seletiva sobre o folículo piloso',
      'Plano ajustado à sua pele e à área tratada',
    ],
    care: [
      'Evitar exposição solar direta e bronzeadores por pelo menos 15 dias',
      'Usar protetor solar conforme orientação profissional',
      'Evitar calor excessivo, como banhos quentes e sauna, por 24 a 48 horas',
      'Não usar cera, pinça ou métodos que removam o pelo pela raiz durante o tratamento',
      'Manter a pele limpa, hidratada e sem produtos irritantes nas primeiras 48 horas',
      'Evitar atividades físicas intensas no dia do procedimento, quando orientado',
    ],
    contraindications: [
      'Gravidez',
      'Histórico de fotossensibilidade',
      'Doenças dermatológicas ativas na área',
      'Alterações hormonais ou uso de medicamentos que precisem de avaliação prévia',
    ],
    faq: [
      {
        q: 'A epilação a laser é definitiva?',
        a: 'O procedimento é indicado para redução prolongada dos pelos e não garante eliminação definitiva em todos os casos. Retoques ou sessões complementares podem ser indicados.',
      },
      {
        q: 'Quantas sessões preciso fazer?',
        a: 'O tratamento requer múltiplas sessões, com intervalos adequados. O número depende da pele, do pelo e da área.',
      },
      {
        q: 'Posso depilar com cera entre as sessões?',
        a: 'Não. Durante o tratamento, evite cera, pinça ou qualquer método que remova o pelo pela raiz.',
      },
      {
        q: 'Quando começo a ver resultado?',
        a: 'Os resultados são progressivos e podem ser observados ao longo de semanas.',
      },
      {
        q: 'Sente dor?',
        a: 'Pode haver sensibilidade local, ardor leve ou sensação de calor durante e após a aplicação, de forma passageira.',
      },
    ],
    related: ['hiperidrose', 'clareamento-intimo-e-axilas', 'laser-rejuvenescimento'],
    image: '/tratamentos/epilacao-a-laser.webp',
  },
  {
    slug: 'tratamentos-capilares',
    article: 'os',
    name: 'Tratamentos capilares',
    category: 'pele-e-laser',
    metaTitle: 'Tratamento capilar para queda em Santana, SP | Dra. Skin',
    metaDescription:
      'Tratamentos capilares em Santana, São Paulo: microagulhamento, intradermoterapia e fotobioestimulação contra a queda de cabelo. Agende sua avaliação já.',
    h1: 'Tratamentos capilares em Santana',
    subtitle: 'Terapias capilares avançadas contra a queda.',
    intro:
      'Os tratamentos capilares associam técnicas como microagulhamento capilar, aplicação de ativos no couro cabeludo e fotobioestimulação. São indicados para homens e mulheres com queda excessiva, afinamento dos fios ou estágios iniciais de alopecia.',
    about: [
      'A queda de cabelo tem causas diferentes em cada pessoa. Por isso o tratamento combina técnicas e é montado a partir da avaliação do couro cabeludo.',
      'O microagulhamento capilar abre microcanais no couro cabeludo e estimula a região. A mesointradermoterapia leva ativos específicos diretamente ao couro cabeludo. A fotobioestimulação complementa o protocolo.',
      'O objetivo é fortalecer o bulbo capilar, estimular o nascimento de novos fios e aumentar a densidade. Na Dra. Skin, em Santana, a sessão dura de 40 a 50 minutos.',
    ],
    indications: [
      'Queda capilar excessiva',
      'Afinamento dos fios',
      'Estágios iniciais de alopecia',
      'Perda de densidade capilar',
      'Homens e mulheres',
    ],
    steps: [
      'Avaliação do couro cabeludo e da queixa de queda',
      'Definição das técnicas do protocolo',
      'Microagulhamento capilar e aplicação de ativos no couro cabeludo, quando indicados',
      'Fotobioestimulação',
      'Orientações de cuidados e retorno',
    ],
    facts: {
      duration: '40 a 50 minutos',
      sessions: 'Definido na avaliação',
      recovery: 'Imediato',
      anesthesia: 'Definido na avaliação',
    },
    benefits: [
      'Combate à queda de cabelo',
      'Fortalecimento do bulbo capilar',
      'Estímulo ao nascimento de novos fios',
      'Aumento da densidade capilar',
    ],
    care: [
      'Seguir as orientações de cuidados recebidas após cada sessão',
      'Evitar coçar, friccionar ou manipular a área tratada',
      'Não praticar atividades físicas intensas nas primeiras 24 horas após o microagulhamento',
      'Evitar ambientes como piscinas e saunas após o microagulhamento',
      'Usar os produtos indicados pela profissional',
    ],
    contraindications: [
      'Alergias aos ativos utilizados, que devem ser informadas antes',
      'Doenças autoimunes, avaliadas na consulta',
      'Lesões ou doenças ativas no couro cabeludo',
      'Uso de medicamentos que precisem de avaliação prévia',
    ],
    faq: [
      {
        q: 'O tratamento capilar serve para homens e mulheres?',
        a: 'Sim. É indicado para homens e mulheres com queda excessiva, afinamento dos fios ou estágios iniciais de alopecia.',
      },
      {
        q: 'Quais técnicas são usadas?',
        a: 'O protocolo pode associar microagulhamento capilar, aplicação de ativos no couro cabeludo (mesointradermoterapia) e fotobioestimulação.',
      },
      {
        q: 'Preciso me afastar da rotina?',
        a: 'Não. O retorno às atividades é imediato, com os cuidados orientados após cada sessão.',
      },
      {
        q: 'Quanto tempo dura cada sessão?',
        a: 'De 40 a 50 minutos. O número de sessões é definido na avaliação.',
      },
    ],
    related: ['microagulhamento', 'intradermoterapia', 'skinbooster'],
    image: '/capilares.jpeg',
  },
];
