import type { ProcedurePage } from './types';

/**
 * Páginas de procedimento corporais (lote C) da Dra. Samara Rocha, Dra. Skin, Santana, São Paulo.
 * Fontes: texto do site atual (src/data/treatments.ts) e os termos e fichas que a Dra. Samara
 * revisou (pasta "Samara Fornara Pedrotti Rocha/Fechado"): Termo Radiofrequencia, HIFU,
 * Termo Criolipolise, Termo enzimas, Termo intradermoterapia, MMP, Termo harmonização glútea,
 * Glúteos, preenchedores corporais, Termo Bioestimulador Mão Abdômen Glúteo, hiperidrose,
 * Termo Botox, Termo escleroterapia, Termo Vasinhos, Termo Clareamento Íntimo Axila e Anamnese Corporal.
 */
export const PROCEDURES_CORPORAL_C: ProcedurePage[] = [
  {
    slug: 'radiofrequencia',
    article: 'a',
    name: 'Radiofrequência',
    category: 'corporal',
    metaTitle: 'Radiofrequência microagulhada em Santana | Dra. Skin',
    metaDescription:
      'Radiofrequência microagulhada em Santana, São Paulo, com a Dra. Samara Rocha. Estímulo de colágeno para firmeza, textura, poros, cicatrizes e flacidez.',
    h1: 'Radiofrequência microagulhada em Santana',
    subtitle: 'Firmeza e textura renovadas a partir do colágeno da sua própria pele.',
    intro:
      'A radiofrequência microagulhada une microagulhas à emissão controlada de energia de radiofrequência nas camadas profundas da pele. Na Dra. Skin, em Santana, São Paulo, ela é indicada para rosto e corpo de quem busca mais firmeza, textura uniforme e menos flacidez.',
    about: [
      'O objetivo é estimular a produção natural de colágeno e elastina e promover a remodelação do tecido. Com isso, a pele ganha firmeza e melhora em textura, poros dilatados, cicatrizes e flacidez cutânea.',
      'Os resultados são progressivos e costumam aparecer ao longo de semanas a meses. Eles variam conforme as características da pele, a área tratada, a idade, os hábitos de vida e a resposta de cada organismo.',
      'Na maioria dos casos o protocolo prevê mais de uma sessão e, depois, manutenção periódica. A Dra. Samara Rocha define o número de sessões e o intervalo entre elas na avaliação.',
    ],
    indications: [
      'Flacidez cutânea no rosto ou no corpo',
      'Textura irregular da pele',
      'Poros dilatados',
      'Cicatrizes',
      'Perda de firmeza com o passar dos anos',
      'Quem deseja estimular colágeno e elastina de forma natural',
    ],
    steps: [
      'Avaliação da pele, do histórico de saúde e dos tratamentos anteriores.',
      'Higienização e preparo da área a ser tratada.',
      'Aplicação das microagulhas com emissão controlada de radiofrequência.',
      'Orientações de cuidados para casa e planejamento das próximas sessões.',
    ],
    facts: {
      duration: 'Definido na avaliação',
      sessions: 'Mais de uma sessão, com manutenção periódica',
      recovery: 'Vermelhidão e inchaço passageiros; maquiagem após 24 a 48 horas',
      anesthesia: 'Definido na avaliação',
    },
    benefits: [
      'Estímulo natural de colágeno e elastina',
      'Pele mais firme ao toque',
      'Textura mais uniforme',
      'Poros com aparência mais fechada',
      'Melhora gradual de cicatrizes e flacidez',
    ],
    care: [
      'Evite sol direto e bronzeadores por pelo menos 15 dias.',
      'Use protetor solar conforme a orientação profissional.',
      'Evite calor excessivo, como banho quente e sauna, por 48 horas.',
      'Não use produtos irritantes, ácidos ou esfoliantes no período orientado.',
      'Evite maquiagem nas primeiras 24 a 48 horas, quando aplicável.',
      'Mantenha a pele limpa, hidratada e protegida.',
    ],
    contraindications: [
      'Gestação',
      'Doenças dermatológicas ativas na área a tratar',
      'Tendência a cicatrização anormal',
      'Condições de saúde ou medicamentos que a avaliação contraindique',
    ],
    faq: [
      {
        q: 'A radiofrequência microagulhada dói?',
        a: 'Pode haver ardor, desconforto ou dor leve a moderada durante a aplicação. O conforto de cada sessão é planejado na avaliação.',
      },
      {
        q: 'Quando começo a ver resultado?',
        a: 'Os resultados são progressivos e costumam ser observados ao longo de semanas a meses, conforme a resposta da sua pele.',
      },
      {
        q: 'Quantas sessões são necessárias?',
        a: 'Em geral são indicadas múltiplas sessões, com manutenção periódica. O número exato é definido na avaliação.',
      },
      {
        q: 'Posso fazer no corpo, além do rosto?',
        a: 'Sim. A radiofrequência microagulhada pode ser indicada tanto para áreas faciais quanto corporais.',
      },
      {
        q: 'O que é normal sentir depois?',
        a: 'Vermelhidão, inchaço ou sensibilidade local, pequenos pontos de sangramento, crostas ou descamação leve. Essas reações são passageiras.',
      },
    ],
    related: ['microagulhamento', 'hifu', 'bioestimuladores-de-colageno', 'laser-rejuvenescimento'],
    image: '/tratamentos/radiofrequencia.webp',
  },
  {
    slug: 'hifu',
    article: 'o',
    name: 'HIFU (ultrassom microfocado)',
    category: 'corporal',
    metaTitle: 'HIFU, ultrassom microfocado em Santana | Dra. Skin',
    metaDescription:
      'HIFU em Santana, São Paulo: ultrassom microfocado e macrofocado para rosto e corpo, sem cortes, com plano de sessões feito pela Dra. Samara Rocha.',
    h1: 'HIFU, ultrassom microfocado, em Santana',
    subtitle: 'Tecnologia de ultrassom para firmeza e contorno, sem cortes.',
    intro:
      'O HIFU é o ultrassom focalizado de alta intensidade, uma tecnologia que concentra energia em pontos precisos sob a pele, sem cortes. Na Dra. Skin, em Santana, São Paulo, trabalhamos com ultrassom microfocado e macrofocado em áreas do rosto e do corpo.',
    about: [
      'Cada protocolo de HIFU começa no mapa facial e corporal da ficha da Dra. Samara Rocha. Nele ficam marcadas as áreas tratadas e o registro de cada sessão.',
      'O ultrassom microfocado também entra como tratamento associado em outros protocolos corporais da clínica, ao lado dos bioestimuladores de colágeno e da radiofrequência, por exemplo no tratamento da flacidez dos glúteos.',
      'No contorno corporal, o ultrassom focalizado é uma das tecnologias apresentadas como alternativa à criolipólise. A escolha entre elas depende da análise do seu caso, feita em consulta na clínica de Santana.',
    ],
    indications: [
      'Flacidez no rosto',
      'Flacidez no corpo',
      'Quem busca melhorar o contorno corporal sem cortes',
      'Complemento de protocolos com bioestimuladores de colágeno',
      'Complemento da harmonização glútea',
    ],
    steps: [
      'Avaliação e marcação das áreas no mapa facial e corporal.',
      'Escolha entre ultrassom microfocado e macrofocado para cada área.',
      'Aplicação da tecnologia nas regiões planejadas.',
      'Registro da sessão na ficha e planejamento das próximas.',
    ],
    facts: {
      duration: 'Definido na avaliação',
      sessions: 'Definido na avaliação',
      recovery: 'Definido na avaliação',
      anesthesia: 'Definido na avaliação',
    },
    benefits: [
      'Tecnologia sem cortes',
      'Tratamento de rosto e corpo no mesmo protocolo',
      'Pode ser associado a bioestimuladores e radiofrequência',
      'Plano de sessões registrado e acompanhado em ficha',
    ],
    care: [
      'Informe na avaliação seu histórico de saúde, medicamentos e procedimentos anteriores.',
      'Siga as orientações entregues ao fim de cada sessão.',
      'Use protetor solar nas áreas expostas conforme orientação profissional.',
      'Mantenha hábitos saudáveis, alimentação equilibrada e atividade física regular.',
    ],
    contraindications: [
      'Gestação ou amamentação',
      'Doenças dermatológicas ativas na área a tratar',
      'Condições de saúde identificadas na anamnese que contraindiquem a tecnologia',
    ],
    faq: [
      {
        q: 'O que significa HIFU?',
        a: 'É a sigla em inglês para ultrassom focalizado de alta intensidade. A energia do ultrassom é concentrada em pontos precisos, sem cortes.',
      },
      {
        q: 'O HIFU serve para rosto e corpo?',
        a: 'Sim. Na Dra. Skin o ultrassom microfocado e macrofocado é aplicado em áreas faciais e corporais, conforme o mapa definido na avaliação.',
      },
      {
        q: 'Quantas sessões vou precisar?',
        a: 'O número de sessões é definido na avaliação, de acordo com a área e o objetivo do tratamento.',
      },
      {
        q: 'Posso combinar o HIFU com outros tratamentos?',
        a: 'Sim. Ele pode ser associado a bioestimuladores de colágeno e à radiofrequência, por exemplo nos protocolos de glúteos.',
      },
    ],
    related: ['radiofrequencia', 'criolipolise', 'bioestimuladores-de-colageno', 'harmonizacao-glutea'],
    image: '/tratamentos/hifu.webp',
  },
  {
    slug: 'criolipolise',
    article: 'a',
    name: 'Criolipólise',
    category: 'corporal',
    metaTitle: 'Criolipólise em Santana, São Paulo | Dra. Skin',
    metaDescription:
      'Criolipólise em Santana, São Paulo: redução de gordura localizada por resfriamento controlado, sem cirurgia. Abdômen, flancos, culote, braços e papada.',
    h1: 'Criolipólise em Santana',
    subtitle: 'Redução de gordura localizada por resfriamento controlado, sem cortes.',
    intro:
      'A criolipólise é um procedimento não invasivo que resfria de forma controlada as células de gordura para reduzir a gordura localizada, sem cirurgia. Na Dra. Skin, em Santana, São Paulo, é indicada para quem está perto do peso ideal e tem gordura difícil de perder com dieta e exercícios.',
    about: [
      'O tratamento é feito com uma máquina de criolipólise de tecnologia avançada, que aplica vácuo suave e resfriamento controlado nas áreas escolhidas. As placas de resfriamento ficam sobre a pele com um gel protetor específico, que protege a pele durante a sucção e o resfriamento.',
      'O resfriamento leva as células de gordura à morte programada (apoptose). Depois, o próprio organismo elimina essas células de forma gradual, a partir das primeiras semanas.',
      'Os primeiros resultados aparecem a partir de 30 a 45 dias, e o resultado máximo costuma chegar entre 2 e 4 meses após a sessão. A redução média esperada é de 20% a 25% da camada de gordura tratada por sessão, variando de pessoa para pessoa.',
      'As células eliminadas não voltam. Para manter o resultado, vale cuidar da alimentação e da atividade física: um ganho de peso importante pode fazer as células restantes aumentarem de tamanho.',
    ],
    indications: [
      'Gordura localizada no abdômen',
      'Flancos, os chamados pneuzinhos',
      'Culote e coxas, parte interna e externa',
      'Braços e dorso',
      'Papada (região submentoniana)',
      'Quem está próximo do peso ideal e não quer cirurgia',
    ],
    steps: [
      'Avaliação clínica, medidas e escolha das áreas.',
      'Aplicação do gel protetor e posicionamento das placas.',
      'Vácuo suave e resfriamento controlado da gordura localizada.',
      'Orientações e acompanhamento da evolução nas semanas seguintes.',
    ],
    facts: {
      duration: '60 minutos por área',
      sessions: 'Definido na avaliação; novas sessões podem ser indicadas',
      recovery: 'Imediata; a área pode ficar dormente ou avermelhada por um tempo',
      anesthesia: 'Não utilizada; procedimento não invasivo',
    },
    benefits: [
      'Redução de gordura localizada sem cortes',
      'Melhora do contorno corporal e da silhueta',
      'Redução gradual e natural da camada de gordura',
      'Sem necessidade de repouso',
      'Resultado duradouro nas células eliminadas, com hábitos saudáveis',
    ],
    care: [
      'Mantenha alimentação equilibrada e atividade física regular.',
      'Evite ganho de peso significativo após o tratamento.',
      'Informe na avaliação seu histórico de saúde e medicamentos em uso.',
      'Siga as orientações da Dra. Samara Rocha sobre novas sessões.',
    ],
    contraindications: [
      'Gestação ou amamentação',
      'Quem busca emagrecimento: a criolipólise trata gordura localizada',
      'Doenças dermatológicas ativas na área a tratar',
      'Condições de saúde identificadas na anamnese que contraindiquem o resfriamento',
    ],
    faq: [
      {
        q: 'Em quanto tempo vejo o resultado da criolipólise?',
        a: 'Os resultados não são imediatos. Os primeiros aparecem a partir de 30 a 45 dias, e o máximo costuma chegar entre 2 e 4 meses após a sessão.',
      },
      {
        q: 'Quanto de gordura a criolipólise reduz?',
        a: 'A redução média esperada é de 20% a 25% da camada de gordura tratada por sessão, variando conforme cada organismo.',
      },
      {
        q: 'A gordura volta?',
        a: 'As células eliminadas não voltam. Um ganho de peso importante, porém, pode aumentar as células que ficaram, por isso hábitos saudáveis fazem parte do tratamento.',
      },
      {
        q: 'Preciso ficar de repouso?',
        a: 'Não. A volta à rotina é imediata. A área pode ficar dormente ou avermelhada por um tempo.',
      },
      {
        q: 'Existem alternativas à criolipólise?',
        a: 'Sim. Enzimas, radiofrequência, ultrassom focalizado e cosméticos redutores são algumas opções. A escolha é feita na avaliação do seu caso.',
      },
    ],
    related: ['enzimas', 'hifu', 'radiofrequencia', 'intradermoterapia'],
    image: '/criolipolise.jpeg',
  },
  {
    slug: 'enzimas',
    article: 'as',
    name: 'Enzimas para gordura localizada',
    category: 'corporal',
    metaTitle: 'Enzimas para gordura localizada em Santana | Dra. Skin',
    metaDescription:
      'Enzimas para gordura localizada em Santana, São Paulo: microinjeções que ajudam a quebrar a gordura de abdômen, flancos, culote, braços, papada e costas.',
    h1: 'Enzimas para gordura localizada em Santana',
    subtitle: 'Microinjeções que ajudam o corpo a eliminar a gordura que insiste em ficar.',
    intro:
      'O tratamento com enzimas lipolíticas reduz a gordura localizada com a aplicação de substâncias que agem direto nas células de gordura, promovendo sua quebra (lipólise). Na Dra. Skin, em Santana, São Paulo, é indicado para áreas como abdômen, flancos, culote, braços, papada e costas.',
    about: [
      'As enzimas são aplicadas por microinjeções locais. Depois da quebra das células de gordura, o próprio organismo elimina esse conteúdo de forma gradual.',
      'A Dra. Samara Rocha seleciona as substâncias mais indicadas para as suas necessidades e acompanha cada sessão. O tratamento costuma ser feito em sessões seriadas, com avaliação periódica para ajustar o protocolo.',
      'O resultado é progressivo e varia conforme o metabolismo, os hábitos de vida e as características do corpo. Sessões complementares podem ser indicadas para manter ou reforçar o resultado.',
    ],
    indications: [
      'Gordura localizada no abdômen',
      'Flancos',
      'Culote',
      'Braços',
      'Papada',
      'Costas',
    ],
    steps: [
      'Avaliação clínica e escolha das áreas a tratar.',
      'Seleção das enzimas mais indicadas para o seu caso.',
      'Aplicação por microinjeções locais.',
      'Orientações de cuidados e agendamento das próximas sessões.',
    ],
    facts: {
      duration: 'Definido na avaliação',
      sessions: 'Sessões seriadas, conforme avaliação',
      recovery: 'Rotina liberada; sem exercício intenso por 48 horas',
      anesthesia: 'Definido na avaliação',
    },
    benefits: [
      'Ação direta na gordura localizada',
      'Tratamento sem cortes',
      'Protocolo ajustado a cada área',
      'Melhora progressiva do contorno',
    ],
    care: [
      'Aplique compressas geladas na área tratada nas primeiras 24 horas.',
      'Evite sol direto na área aplicada por no mínimo 72 horas.',
      'Não massageie a região tratada, exceto se indicado pela profissional.',
      'Evite exercícios físicos intensos por 48 horas.',
      'Mantenha boa hidratação e alimentação equilibrada.',
      'Evite roupas apertadas sobre a área tratada.',
      'Não ingira bebidas alcoólicas no dia da aplicação.',
    ],
    contraindications: [
      'Gestação ou amamentação',
      'Alergia a componentes das enzimas',
      'Doenças crônicas, avaliadas na consulta',
      'Uso de medicamentos que a avaliação contraindique',
    ],
    faq: [
      {
        q: 'Como as enzimas agem na gordura?',
        a: 'Elas atuam direto nas células de gordura e promovem sua quebra, a lipólise. Depois, o organismo elimina esse conteúdo aos poucos.',
      },
      {
        q: 'Quantas sessões são necessárias?',
        a: 'O tratamento costuma envolver sessões seriadas. O número é definido na avaliação e pode ser ajustado ao longo do protocolo.',
      },
      {
        q: 'O que pode acontecer depois da aplicação?',
        a: 'Dor, vermelhidão, inchaço, hematomas, ardência, coceira, sensação de calor, pequenos nódulos temporários e alteração de sensibilidade na área.',
      },
      {
        q: 'Posso treinar depois?',
        a: 'Evite exercícios físicos intensos por 48 horas após a aplicação.',
      },
    ],
    related: ['criolipolise', 'intradermoterapia', 'radiofrequencia', 'hifu'],
    image: '/tratamentos/enzimas.webp',
  },
  {
    slug: 'intradermoterapia',
    article: 'a',
    name: 'Intradermoterapia (MMP)',
    category: 'corporal',
    metaTitle: 'Intradermoterapia e MMP em Santana | Dra. Skin',
    metaDescription:
      'Intradermoterapia e MMP em Santana, São Paulo: microinjeções de ativos para gordura localizada, celulite, flacidez, estrias e queda de cabelo.',
    h1: 'Intradermoterapia e MMP em Santana',
    subtitle: 'Ativos aplicados direto na pele, com a fórmula certa para cada objetivo.',
    intro:
      'A intradermoterapia, também conhecida como mesoterapia, aplica medicamentos, substâncias alopáticas ou ativos naturais direto na derme, por microinjeções. Na Dra. Skin, em Santana, São Paulo, ela trata gordura localizada, celulite, flacidez, estrias, queda de cabelo e rejuvenescimento facial.',
    about: [
      'Os ativos variam conforme o objetivo e podem incluir vitaminas, enzimas, minerais e aminoácidos. O tratamento é feito em sessões seriadas e personalizadas, de acordo com a avaliação da Dra. Samara Rocha.',
      'Na MMP, a microinfusão de medicamentos na pele, os ativos entram com técnicas como nappage, ponto a ponto e microinjeções superficiais ou profundas, às vezes associadas ao microagulhamento.',
      'No couro cabeludo, a intradermoterapia e a MMP capilar começam por um diagnóstico da queda e pela escolha das áreas a tratar. A fórmula pode reunir vitaminas, fatores de crescimento, peptídeos, biotina e silício orgânico, entre outros ativos.',
      'O resultado é gradual e depende da continuidade do tratamento conforme o plano estabelecido.',
    ],
    indications: [
      'Gordura localizada',
      'Celulite',
      'Flacidez',
      'Estrias',
      'Queda de cabelo e alopecia',
      'Rejuvenescimento facial',
    ],
    steps: [
      'Avaliação e diagnóstico, incluindo o diagnóstico capilar quando for o caso.',
      'Escolha dos ativos e da técnica de aplicação.',
      'Anestésico tópico, quando indicado.',
      'Aplicação por microinjeções ou microinfusão na pele.',
      'Registro da resposta e planejamento das próximas sessões.',
    ],
    facts: {
      duration: 'Definido na avaliação',
      sessions: 'Sessões seriadas, conforme o caso',
      recovery: 'Rotina liberada; sem calor e atividade intensa por 48 horas',
      anesthesia: 'Anestésico tópico, quando indicado',
    },
    benefits: [
      'Fórmula personalizada para cada objetivo',
      'Ativos aplicados direto onde agem',
      'Um mesmo método para corpo, rosto e couro cabeludo',
      'Pode ser associada a outros tratamentos',
    ],
    care: [
      'Não massageie nem friccione o local das aplicações por 24 horas.',
      'Evite sol direto na área tratada por no mínimo 48 horas.',
      'Evite banho quente, piscina, sauna e atividade física intensa por 48 horas.',
      'Use roupas leves e evite compressão na área tratada.',
    ],
    contraindications: [
      'Gestação ou lactação',
      'Alergia a algum dos ativos',
      'Doenças autoimunes, avaliadas na consulta',
      'Distúrbios hormonais, avaliados na consulta',
    ],
    faq: [
      {
        q: 'Intradermoterapia e mesoterapia são a mesma coisa?',
        a: 'Sim. São dois nomes para a aplicação de ativos direto na derme por microinjeções.',
      },
      {
        q: 'O que é MMP?',
        a: 'É a microinfusão de medicamentos na pele. Os ativos entram com técnicas como nappage, ponto a ponto ou microagulhamento associado.',
      },
      {
        q: 'Serve para queda de cabelo?',
        a: 'Sim. A intradermoterapia e a MMP capilar tratam queda e afinamento dos fios, a partir de um diagnóstico capilar feito na avaliação.',
      },
      {
        q: 'Quantas sessões são necessárias?',
        a: 'O tratamento é feito em sessões seriadas. O número varia conforme o caso clínico e é definido na avaliação.',
      },
      {
        q: 'O que pode acontecer depois?',
        a: 'Dor, ardência, coceira, inchaço, vermelhidão, hematomas, pequenos nódulos, escurecimento da pele ou descamação, de forma temporária.',
      },
    ],
    related: ['tratamentos-capilares', 'enzimas', 'microagulhamento', 'criolipolise'],
    image: '/tratamentos/intradermoterapia.webp',
  },
  {
    slug: 'harmonizacao-glutea',
    article: 'a',
    name: 'Harmonização glútea',
    category: 'corporal',
    metaTitle: 'Harmonização glútea em Santana, São Paulo | Dra. Skin',
    metaDescription:
      'Harmonização glútea em Santana, São Paulo: remodelar, projetar e melhorar o contorno dos glúteos com ácido hialurônico e bioestimuladores de colágeno.',
    h1: 'Harmonização glútea em Santana',
    subtitle: 'Contorno, projeção e sustentação em harmonia com o seu corpo.',
    intro:
      'A harmonização glútea é um procedimento minimamente invasivo para remodelar, projetar e melhorar o contorno dos glúteos com preenchedores corporais. Na Dra. Skin, em Santana, São Paulo, o resultado buscado é natural e proporcional à sua anatomia.',
    about: [
      'O ácido hialurônico usado é biocompatível, aprovado pela Anvisa e indicado especificamente para áreas do corpo que pedem mais volume e sustentação. O procedimento é feito com anestesia local e tem efeito imediato.',
      'O plano começa na ficha de glúteos da Dra. Samara Rocha: biotipo glúteo, avaliação de contorno, flacidez, celulite e assimetrias, e as áreas de aplicação, como polo superior, médio e inferior, região lateral, sulco infraglúteo e região trocantérica.',
      'Conforme o objetivo, o protocolo pode usar ácido hialurônico ou bioestimuladores de colágeno, como hidroxiapatita de cálcio, policaprolactona e ácido polilático, e ser associado a radiofrequência ou ultrassom microfocado.',
      'O resultado final é avaliado após 30 a 45 dias. Ajustes ou novas aplicações podem ser indicados para manter o efeito desejado.',
    ],
    indications: [
      'Aumento de volume dos glúteos',
      'Melhora do contorno e da projeção',
      'Sustentação e tratamento da flacidez',
      'Correção de assimetrias',
      'Irregularidades de contorno e depressão lateral',
      'Melhora da qualidade da pele da região',
    ],
    steps: [
      'Avaliação morfológica, biotipo glúteo e marcação das áreas.',
      'Escolha da substância e da técnica de aplicação.',
      'Anestesia local.',
      'Aplicação dos preenchedores nas áreas planejadas.',
      'Orientações de cuidados e reavaliação após 30 a 45 dias.',
    ],
    facts: {
      duration: 'Definido na avaliação',
      sessions: 'Definido na avaliação; ajustes podem ser indicados',
      recovery: 'Evitar sentar sobre os glúteos por 24 a 48 horas e exercícios por 7 dias',
      anesthesia: 'Anestesia local',
    },
    benefits: [
      'Efeito imediato após a aplicação',
      'Contorno mais definido e proporcional',
      'Mais projeção e sustentação',
      'Resultado natural, de acordo com a sua anatomia',
      'Opção de bioestimulação de colágeno na mesma região',
    ],
    care: [
      'Evite sentar direto sobre os glúteos por 24 a 48 horas; use travesseiros anatômicos quando necessário.',
      'Não massageie nem comprima a área, salvo indicação profissional.',
      'Evite atividade física por 7 dias ou conforme orientação personalizada.',
      'Não tome sol nem frequente sauna, piscina ou banho quente nas primeiras 72 horas.',
      'Durma de bruços ou de lado, sem pressão direta nos glúteos.',
      'Use roupas leves, que não apertem a área tratada.',
    ],
    contraindications: [
      'Gestação ou amamentação',
      'Alergia a componentes do preenchedor',
      'Doenças crônicas, avaliadas na consulta',
      'Cirurgias anteriores na região, avaliadas na consulta',
    ],
    faq: [
      {
        q: 'Qual substância é usada na harmonização glútea?',
        a: 'Principalmente o ácido hialurônico próprio para o corpo, biocompatível e aprovado pela Anvisa. Bioestimuladores de colágeno podem entrar quando o objetivo é firmeza.',
      },
      {
        q: 'O resultado é imediato?',
        a: 'Sim, o efeito aparece logo após a aplicação. O resultado final é avaliado após 30 a 45 dias.',
      },
      {
        q: 'Posso sentar normalmente depois?',
        a: 'Evite sentar direto sobre os glúteos nas primeiras 24 a 48 horas. Travesseiros anatômicos ajudam nesse período.',
      },
      {
        q: 'Quando volto a treinar?',
        a: 'Evite atividade física por 7 dias ou conforme a orientação personalizada da Dra. Samara Rocha.',
      },
      {
        q: 'O que pode acontecer depois?',
        a: 'Dor leve, inchaço, vermelhidão, hematomas ou pequenos nódulos. Complicações raras são explicadas em detalhe na avaliação.',
      },
    ],
    related: ['preenchedores-corporais', 'bioestimuladores-de-colageno', 'radiofrequencia', 'hifu'],
    image: '/tratamentos/harmonizacao-glutea.webp',
  },
  {
    slug: 'preenchedores-corporais',
    article: 'os',
    name: 'Preenchedores corporais',
    category: 'corporal',
    metaTitle: 'Preenchedores corporais em Santana | Dra. Skin',
    metaDescription:
      'Preenchedores corporais e bioestimuladores em Santana, São Paulo, para firmeza, contorno e qualidade da pele de mãos, abdômen e glúteos. Dra. Samara Rocha.',
    h1: 'Preenchedores corporais em Santana',
    subtitle: 'Firmeza, contorno e qualidade de pele também para o corpo.',
    intro:
      'Os preenchedores corporais tratam o corpo com substâncias injetáveis, como o ácido hialurônico e os bioestimuladores de colágeno. Na Dra. Skin, em Santana, São Paulo, são indicados para mãos, abdômen e glúteos, buscando firmeza, contorno e uma pele de melhor qualidade.',
    about: [
      'Cada região é registrada na ficha de preenchedores corporais da Dra. Samara Rocha, com o lado tratado, a quantidade aplicada e a etiqueta de cada produto.',
      'Os bioestimuladores de colágeno estimulam a produção natural de colágeno pelo organismo e melhoram aos poucos a firmeza, a espessura e a textura da pele. Nas mãos, no abdômen e nos glúteos, ajudam no tratamento da flacidez cutânea. O objetivo principal deles não é dar volume imediato.',
      'Quando o objetivo é volume, contorno ou projeção, como nos glúteos, entra o ácido hialurônico próprio para o corpo. Os resultados são graduais e variam com as características de cada pessoa, a área tratada, a idade e os hábitos de vida.',
    ],
    indications: [
      'Flacidez cutânea nas mãos',
      'Flacidez no abdômen',
      'Flacidez e contorno dos glúteos',
      'Perda de firmeza e espessura da pele',
      'Textura irregular da pele do corpo',
    ],
    steps: [
      'Avaliação da região e definição do objetivo: firmeza, contorno ou volume.',
      'Escolha do preenchedor ou do bioestimulador.',
      'Aplicação injetável nas áreas planejadas, com registro em ficha.',
      'Orientações de cuidados e acompanhamento da evolução.',
    ],
    facts: {
      duration: 'Definido na avaliação',
      sessions: 'Uma ou mais sessões, conforme avaliação',
      recovery: 'Rotina leve; sem calor excessivo por 48 horas',
      anesthesia: 'Definido na avaliação',
    },
    benefits: [
      'Estímulo natural de colágeno',
      'Pele mais firme e espessa',
      'Melhora da textura e do aspecto da pele',
      'Tratamento da flacidez em mãos, abdômen e glúteos',
      'Mais contorno quando o objetivo é volume',
    ],
    care: [
      'Evite manipular ou massagear a área tratada pelo período orientado.',
      'Evite sol direto e bronzeadores por pelo menos 15 dias.',
      'Use protetor solar conforme orientação, principalmente nas áreas expostas.',
      'Evite calor excessivo, como banho quente e sauna, por 48 horas.',
      'Evite atividades físicas intensas conforme orientação profissional.',
      'Mantenha a pele limpa e hidratada.',
    ],
    contraindications: [
      'Gravidez',
      'Doenças autoimunes',
      'Distúrbios de coagulação',
      'Alergia a componentes do produto',
    ],
    faq: [
      {
        q: 'Quais regiões do corpo podem ser tratadas?',
        a: 'Na Dra. Skin, os protocolos corporais com bioestimuladores contemplam mãos, abdômen e glúteos. Outras regiões são avaliadas em consulta.',
      },
      {
        q: 'Bioestimulador dá volume?',
        a: 'Não é o objetivo principal. Ele estimula colágeno e melhora a firmeza e a qualidade da pele aos poucos. Para volume, usamos o ácido hialurônico próprio para o corpo.',
      },
      {
        q: 'Quando vejo o resultado?',
        a: 'Os resultados são graduais e costumam ser observados nas semanas seguintes. Pode ser indicada manutenção periódica.',
      },
      {
        q: 'O que pode acontecer depois?',
        a: 'Dor ou desconforto na aplicação, vermelhidão, inchaço, hematomas, endurecimento temporário e coceira ou calor passageiros.',
      },
    ],
    related: ['harmonizacao-glutea', 'bioestimuladores-de-colageno', 'radiofrequencia', 'hifu'],
    image: '/tratamentos/preenchedores-corporais.webp',
  },
  {
    slug: 'hiperidrose',
    article: 'a',
    name: 'Hiperidrose (suor excessivo)',
    category: 'corporal',
    metaTitle: 'Hiperidrose: Botox para suor em Santana | Dra. Skin',
    metaDescription:
      'Hiperidrose tratada com toxina botulínica (Botox) em Santana, São Paulo: suor excessivo nas axilas, mãos, pés, couro cabeludo e abaixo das mamas.',
    h1: 'Tratamento da hiperidrose em Santana',
    subtitle: 'Menos suor excessivo, mais leveza no dia a dia.',
    intro:
      'A hiperidrose é o suor excessivo, que pode aparecer nas axilas, nas mãos, nos pés, na cabeça e abaixo das mamas. Na Dra. Skin, em Santana, São Paulo, o tratamento é feito com toxina botulínica (Botox), aplicada nas áreas com excesso de suor.',
    about: [
      'A mesma toxina botulínica usada para suavizar linhas de expressão também trata a hiperidrose. Ela é aplicada por via injetável, em pequenos pontos distribuídos sobre a área que transpira em excesso.',
      'A ficha de hiperidrose da Dra. Samara Rocha mapeia as cinco regiões tratadas: axilas, região inframamária, palmas das mãos, plantas dos pés e couro cabeludo. Cada aplicação fica registrada, com o produto usado e as observações de retorno.',
      'O efeito da toxina é temporário. Por isso, o retorno e a reaplicação são planejados na consulta, sempre respeitando o intervalo indicado entre as aplicações.',
    ],
    indications: [
      'Suor excessivo nas axilas',
      'Suor excessivo nas mãos',
      'Suor excessivo nos pés',
      'Suor excessivo no couro cabeludo',
      'Suor excessivo na região abaixo das mamas',
    ],
    steps: [
      'Avaliação das áreas com suor excessivo e do histórico de saúde.',
      'Marcação da região a tratar no mapa da ficha.',
      'Aplicação da toxina botulínica em pequenos pontos.',
      'Orientações de cuidados e agendamento do retorno.',
    ],
    facts: {
      duration: '20 a 30 minutos',
      sessions: 'Reaplicação planejada no retorno',
      recovery: 'Imediata; evitar deitar e exercícios nas primeiras 4 horas',
      anesthesia: 'Definido na avaliação',
    },
    benefits: [
      'Redução do suor excessivo na área tratada',
      'Mais conforto no trabalho e na vida social',
      'Cinco regiões do corpo tratáveis',
      'Procedimento rápido, com retorno imediato à rotina',
    ],
    care: [
      'Evite deitar nas primeiras 4 horas após a aplicação.',
      'Evite exercícios físicos nas primeiras 4 horas.',
      'Respeite o intervalo indicado para a reaplicação.',
      'Informe qualquer desconforto à profissional.',
    ],
    contraindications: [
      'Gestação ou amamentação',
      'Alergia à toxina botulínica ou a componentes da fórmula',
      'Condições de saúde e medicamentos que a anamnese contraindique',
    ],
    faq: [
      {
        q: 'Botox funciona para suor excessivo?',
        a: 'Sim. A toxina botulínica é usada no tratamento da hiperidrose nas axilas, mãos, pés, couro cabeludo e região inframamária.',
      },
      {
        q: 'Quanto tempo dura a aplicação?',
        a: 'Entre 20 e 30 minutos, conforme as áreas tratadas.',
      },
      {
        q: 'Preciso de repouso?',
        a: 'Não. A volta à rotina é imediata. Só evite deitar e fazer exercícios nas primeiras 4 horas.',
      },
      {
        q: 'O efeito é definitivo?',
        a: 'Não. O efeito da toxina é temporário, e a reaplicação é planejada no retorno.',
      },
      {
        q: 'O que pode acontecer depois?',
        a: 'Inchaço, manchas roxas, dor, vermelhidão ou pequeno sangramento no local. Os riscos são explicados na avaliação.',
      },
    ],
    related: ['toxina-botulinica', 'clareamento-intimo-e-axilas', 'epilacao-a-laser'],
    image: '/tratamentos/hiperidrose.webp',
  },
  {
    slug: 'escleroterapia',
    article: 'a',
    name: 'Escleroterapia (vasinhos)',
    category: 'corporal',
    metaTitle: 'Escleroterapia para vasinhos em Santana | Dra. Skin',
    metaDescription:
      'Escleroterapia com glicose e luz pulsada para vasinhos em Santana, São Paulo. Tratamento estético de pequenos vasos aparentes nas pernas e no rosto.',
    h1: 'Escleroterapia para vasinhos em Santana',
    subtitle: 'Pernas e rosto livres dos vasinhos aparentes.',
    intro:
      'A escleroterapia trata os vasinhos (telangiectasias) e pequenos vasos aparentes, principalmente nas pernas. Na Dra. Skin, em Santana, São Paulo, ela é feita com glicose hipertônica e pode ser combinada à luz pulsada, que também trata vasinhos do rosto.',
    about: [
      'Na escleroterapia com glicose, a solução de glicose hipertônica é aplicada por injeção direto nos vasinhos dilatados. Ela provoca uma irritação controlada na parede do vaso, que se fecha e depois é reabsorvido pelo organismo.',
      'Na remoção de vasinhos com luz pulsada, feixes de luz de alta intensidade aquecem de forma seletiva os vasos dilatados, que coagulam e também são reabsorvidos. Essa técnica atende a face e as pernas.',
      'A Dra. Samara Rocha avalia cada vaso, escolhe a técnica e ajusta a concentração ou os parâmetros ao seu tipo de pele. A escleroterapia é estética: varizes de grande calibre e doenças vasculares profundas pedem avaliação médica especializada.',
      'Os resultados são progressivos e aparecem ao longo de semanas. É comum indicar sessões complementares para uma resposta estética melhor.',
    ],
    indications: [
      'Vasinhos nas pernas',
      'Pequenos vasos aparentes nos membros inferiores',
      'Vasinhos no rosto, com luz pulsada',
      'Quem deseja melhorar o aspecto estético da pele',
    ],
    steps: [
      'Avaliação dos vasos, do tipo de pele e do histórico de saúde.',
      'Escolha da técnica: glicose hipertônica, luz pulsada ou as duas.',
      'Aplicação da glicose nos vasinhos ou dos disparos de luz na área.',
      'Orientações de cuidados, incluindo meias de compressão quando indicado.',
    ],
    facts: {
      duration: 'Definido na avaliação',
      sessions: 'Múltiplas sessões costumam ser indicadas',
      recovery: 'Rotina leve; sem atividade física intensa por 24 a 48 horas',
      anesthesia: 'Definido na avaliação',
    },
    benefits: [
      'Redução dos vasinhos aparentes',
      'Pernas com aspecto mais uniforme',
      'Duas técnicas que podem ser combinadas',
      'Tratamento também para o rosto, com luz pulsada',
    ],
    care: [
      'Use meias de compressão, quando indicado, pelo período recomendado.',
      'Evite sol direto na área tratada por pelo menos 15 dias.',
      'Use protetor solar conforme a orientação.',
      'Evite atividades físicas intensas nas primeiras 24 a 48 horas.',
      'Não massageie nem manipule as áreas tratadas e as crostas.',
      'Evite calor excessivo, como banho quente e sauna, nos primeiros dias.',
    ],
    contraindications: [
      'Varizes de grande calibre ou doenças vasculares profundas',
      'Gestação ou amamentação',
      'Doenças do sistema circulatório, avaliadas na consulta',
      'Histórico de hematomas com facilidade, avaliado na consulta',
    ],
    faq: [
      {
        q: 'Como a escleroterapia seca os vasinhos?',
        a: 'A glicose hipertônica irrita de forma controlada a parede do vaso, que se fecha e é reabsorvido pelo organismo.',
      },
      {
        q: 'Qual a diferença para a luz pulsada?',
        a: 'A luz pulsada aquece os vasos dilatados com feixes de luz, sem agulha. Ela também trata vasinhos do rosto e pode ser combinada à escleroterapia.',
      },
      {
        q: 'Trata varizes?',
        a: 'Não. A escleroterapia estética é para vasinhos e pequenos vasos. Varizes de grande calibre precisam de avaliação médica especializada.',
      },
      {
        q: 'Quantas sessões são necessárias?',
        a: 'Os resultados são progressivos e é comum indicar mais de uma sessão. O número depende do calibre e da profundidade dos vasos.',
      },
      {
        q: 'O que pode acontecer depois?',
        a: 'Ardor no momento da aplicação, vermelhidão, inchaço, pequenos hematomas, crostas e escurecimento temporário sobre o trajeto do vaso.',
      },
    ],
    related: ['remocao-de-manchas', 'laser-rejuvenescimento', 'epilacao-a-laser'],
    image: '/tratamentos/escleroterapia.webp',
  },
  {
    slug: 'clareamento-intimo-e-axilas',
    article: 'o',
    name: 'Clareamento íntimo e de axilas',
    category: 'corporal',
    metaTitle: 'Clareamento íntimo e de axilas em Santana | Dra. Skin',
    metaDescription:
      'Clareamento íntimo e de axilas em Santana, São Paulo, com peelings, laser, luz pulsada e ativos tópicos para uniformizar o tom da pele de forma gradual.',
    h1: 'Clareamento íntimo e de axilas em Santana',
    subtitle: 'Tom mais uniforme e pele mais bonita nas áreas delicadas.',
    intro:
      'O clareamento dermatológico trata manchas escuras (hiperpigmentação) na região íntima e nas axilas. Na Dra. Skin, em Santana, São Paulo, ele combina peelings químicos, laser, luz pulsada e ativos tópicos para clarear de forma progressiva e uniformizar o tom da pele.',
    about: [
      'O protocolo é montado pela Dra. Samara Rocha a partir do tipo de mancha, do fototipo da pele e da área a tratar. Os recursos podem ser usados sozinhos ou em técnicas combinadas.',
      'Além do clareamento, o tratamento melhora a qualidade da pele. Os resultados variam conforme a pigmentação, a área, os hábitos de vida e a resposta de cada pele.',
      'O clareamento é progressivo e depende de seguir bem as orientações em casa, como evitar atrito e roupas apertadas. Pode ser indicada manutenção periódica.',
    ],
    indications: [
      'Escurecimento da região íntima',
      'Escurecimento das axilas',
      'Hiperpigmentação por atrito ou depilação',
      'Quem busca um tom de pele mais uniforme',
      'Melhora da qualidade da pele dessas áreas',
    ],
    steps: [
      'Avaliação da mancha, do fototipo e dos hábitos de depilação.',
      'Escolha dos recursos: peeling, laser, luz pulsada, ativos ou combinação.',
      'Aplicação na região íntima ou nas axilas.',
      'Orientações de cuidados em casa e plano de sessões.',
    ],
    facts: {
      duration: 'Definido na avaliação',
      sessions: 'Múltiplas sessões, com manutenção periódica',
      recovery: 'Rotina leve; sem calor excessivo por 48 horas',
      anesthesia: 'Definido na avaliação',
    },
    benefits: [
      'Clareamento progressivo das manchas',
      'Tom de pele mais uniforme',
      'Melhora da qualidade da pele',
      'Protocolo ajustado ao seu fototipo',
    ],
    care: [
      'Evite atrito excessivo e roupas apertadas na área tratada.',
      'Evite sol direto, quando aplicável, e siga a fotoproteção orientada.',
      'Não use métodos agressivos de depilação no período recomendado.',
      'Evite calor excessivo, como banho quente e sauna, por 48 horas.',
      'Não use produtos irritantes, ácidos ou perfumados sem orientação.',
      'Mantenha a pele limpa, hidratada e protegida.',
    ],
    contraindications: [
      'Doenças dermatológicas ativas na área',
      'Gestação ou amamentação',
      'Alterações hormonais, avaliadas na consulta',
      'Uso de medicamentos e tratamentos prévios, avaliados na consulta',
    ],
    faq: [
      {
        q: 'Quais recursos são usados no clareamento íntimo?',
        a: 'Peelings químicos, laser, luz pulsada, ativos tópicos ou uma combinação deles, escolhidos na avaliação.',
      },
      {
        q: 'Quantas sessões são necessárias?',
        a: 'Em geral são indicadas múltiplas sessões e manutenção periódica, conforme a resposta da sua pele.',
      },
      {
        q: 'O clareamento é total?',
        a: 'O clareamento é progressivo e o resultado varia conforme o tipo de pigmentação, o fototipo e os cuidados em casa.',
      },
      {
        q: 'Posso me depilar durante o tratamento?',
        a: 'Evite métodos de depilação agressivos no período recomendado. A Dra. Samara Rocha orienta a melhor opção para o seu caso.',
      },
      {
        q: 'O que pode acontecer depois?',
        a: 'Ardor ou sensação de calor, vermelhidão ou inchaço leve, descamação e escurecimento temporário da área antes do clareamento.',
      },
    ],
    related: ['remocao-de-manchas', 'epilacao-a-laser', 'black-peel', 'hiperidrose'],
    image: '/tratamentos/clareamento-intimo-e-axilas.webp',
  },
];
