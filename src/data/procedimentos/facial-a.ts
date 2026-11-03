import type { ProcedurePage } from './types';

/**
 * Páginas de procedimento faciais (bloco A).
 * Fontes: src/data/treatments.ts, FAQ de src/components/HomeClient.tsx e os termos
 * de consentimento e fichas revisados pela Dra. Samara Rocha (CRBM 67943).
 */
export const PROCEDURES_FACIAL_A: ProcedurePage[] = [
  {
    slug: 'harmonizacao-facial',
    article: 'a',
    name: 'Harmonização facial',
    category: 'facial',
    metaTitle: 'Harmonização facial em Santana, SP | Dra. Skin',
    metaDescription:
      'Harmonização facial em Santana, São Paulo, com a Dra. Samara Rocha. Ácido hialurônico e toxina botulínica para simetria, contorno e sustentação.',
    h1: 'Harmonização facial em Santana',
    subtitle: 'Simetria, sustentação e contornos que valorizam a sua beleza natural.',
    intro:
      'A harmonização facial é um conjunto de técnicas minimamente invasivas que equilibra os traços do rosto e define contornos como mento e mandíbula. É indicada para quem quer melhorar a proporção facial, repor o volume perdido com o tempo ou suavizar rugas e sulcos. Na Dra. Skin, em Santana, cada plano é desenhado sob medida pela Dra. Samara Rocha.',
    about: [
      'O tratamento combina diferentes técnicas injetáveis, de forma isolada ou associada, conforme a avaliação. Ele pode melhorar a simetria, restaurar volume em lábios, mandíbula, queixo, têmporas e maçãs do rosto, suavizar o sulco nasolabial e as linhas de marionete e tratar a flacidez e a perda de sustentação.',
      'Duas substâncias aprovadas pela ANVISA são a base do procedimento. O ácido hialurônico, reabsorvível e biocompatível, preenche e devolve volume. A toxina botulínica tipo A relaxa temporariamente a contração muscular, suaviza rugas dinâmicas e deixa a expressão mais descansada.',
      'A harmonização também pode atuar na dinâmica do rosto, como no sorriso gengival, e ajudar a prevenir rugas de expressão. A escolha da região, da técnica e da quantidade parte de uma análise individual do seu rosto, com foco em um resultado elegante e natural.',
    ],
    indications: [
      'Quem deseja melhorar a simetria e a proporção do rosto',
      'Perda de volume em maçãs do rosto, têmporas, queixo ou mandíbula',
      'Contorno de mandíbula e mento pouco definido',
      'Sulco nasolabial e linhas de marionete marcados',
      'Flacidez e perda de sustentação causadas pelo envelhecimento',
      'Rugas dinâmicas e sorriso gengival',
    ],
    steps: [
      'Avaliação facial minuciosa, com histórico de saúde e queixa principal',
      'Planejamento das regiões e das substâncias indicadas para o seu caso',
      'Leitura e assinatura do termo de consentimento, com riscos, benefícios e alternativas',
      'Aplicação com anestésico, conforme a técnica escolhida',
      'Orientações de cuidados e acompanhamento da evolução',
    ],
    facts: {
      duration: '60 a 90 minutos',
      sessions: 'Definido na avaliação',
      recovery: 'Imediata, com pequeno inchaço ou vermelhidão passageira',
      anesthesia: 'Anestésico tópico ou local, conforme a técnica',
    },
    benefits: [
      'Melhora da simetria facial',
      'Definição do maxilar e do contorno do rosto',
      'Sustentação das bochechas',
      'Rejuvenescimento global, com aparência natural',
      'Expressão mais descansada',
      'Mais autoestima',
    ],
    care: [
      'Informe antes da sessão todos os medicamentos em uso e reações a procedimentos anteriores',
      'Aplique compressas geladas nas primeiras 24 horas',
      'Não massageie a área tratada, a não ser por orientação da Dra. Samara',
      'Não use maquiagem nas primeiras 12 horas',
      'Evite exercícios físicos por 72 horas',
      'Durma com a cabeça elevada nos primeiros dias',
      'Evite sol, calor excessivo, sauna e frio intenso por 14 dias',
    ],
    contraindications: [
      'Gestação e amamentação',
      'Alergia conhecida a algum componente do produto',
      'Infecção ou herpes ativo na região a ser tratada',
      'Uso de anticoagulantes sem orientação médica',
      'Doenças autoimunes ou distúrbios de coagulação, que são avaliados na consulta',
    ],
    faq: [
      {
        q: 'Quanto tempo dura a harmonização facial?',
        a: 'Depende da substância. A toxina botulínica começa a agir entre 48 e 72 horas, atinge o pico em até 15 dias e dura em média de 3 a 6 meses. O ácido hialurônico tem efeito imediato e dura em média de 8 a 18 meses, conforme a área, o produto, o metabolismo e os cuidados.',
      },
      {
        q: 'O resultado fica artificial?',
        a: 'O foco da Dra. Samara é a naturalidade. O plano respeita a sua anatomia e a sua identidade, e cada região é escolhida para equilibrar o rosto, não para transformá-lo.',
      },
      {
        q: 'O procedimento dói?',
        a: 'A aplicação é feita com anestésico tópico ou local, conforme a técnica, para garantir o máximo de conforto durante a sessão.',
      },
      {
        q: 'Vou precisar de retoques?',
        a: 'Os resultados são temporários e variam de pessoa para pessoa. Em alguns casos, novas sessões ou ajustes são indicados para aperfeiçoar o resultado, sempre definidos no acompanhamento.',
      },
      {
        q: 'Qual a diferença entre harmonização e full face?',
        a: 'A harmonização pode tratar uma ou mais regiões específicas. O Full Face planeja o rosto inteiro em conjunto, combinando várias áreas em um plano único e registrado etapa por etapa.',
      },
    ],
    related: ['full-face', 'preenchimento-facial', 'toxina-botulinica', 'bioestimuladores-de-colageno'],
    image: '/card_harmonizacao.jpg',
  },
  {
    slug: 'full-face',
    article: 'o',
    name: 'Full face',
    category: 'facial',
    metaTitle: 'Full face em Santana, SP | Dra. Skin',
    metaDescription:
      'Full face em Santana, São Paulo: plano para o rosto inteiro com ácido hialurônico e toxina botulínica, feito sob medida pela Dra. Samara Rocha.',
    h1: 'Full face em Santana',
    subtitle: 'O rosto inteiro em um só plano, pensado em conjunto e executado com precisão.',
    intro:
      'O Full Face é o planejamento do rosto como um todo, em vez de tratar uma área isolada. A Dra. Samara Rocha avalia todas as regiões em conjunto e combina ácido hialurônico e toxina botulínica para devolver equilíbrio, sustentação e frescor. É indicado para quem percebe vários sinais ao mesmo tempo e quer um resultado harmônico.',
    about: [
      'A avaliação começa com uma anamnese completa: sua queixa principal, os objetivos do tratamento, os procedimentos que você já fez e hábitos como sono, alimentação, exposição ao sol e atividade física. Até o ambiente é preparado para você, com a sua música preferida na sala de atendimento.',
      'Com o ácido hialurônico, o plano pode incluir lábios, sulco nasogeniano, região malar, olheiras, mento, ângulo e contorno da mandíbula, pré-jowls, linha de marionete, têmporas e nariz. Com a toxina botulínica, os músculos da testa, da glabela, ao redor dos olhos, do nariz, da boca, do queixo, o masseter e o platisma.',
      'Cada região, o volume ou as unidades aplicadas e a data de cada etapa ficam registrados na sua ficha. Assim o acompanhamento é preciso a cada retorno, e qualquer ajuste no plano é conversado com você durante o tratamento.',
      'Aqui em Santana, o full face é a escolha de quem quer cuidar do rosto de forma estratégica, com a mesma profissional do início ao fim.',
    ],
    indications: [
      'Vários sinais de envelhecimento ao mesmo tempo',
      'Perda de volume e de sustentação em mais de uma região do rosto',
      'Rugas dinâmicas associadas a sulcos e flacidez',
      'Quem deseja um plano completo em vez de procedimentos isolados',
      'Quem quer equilibrar proporções do rosto inteiro',
    ],
    steps: [
      'Anamnese avançada, com objetivos, queixa principal e histórico de saúde',
      'Análise do rosto inteiro e definição das regiões prioritárias',
      'Plano de tratamento registrado em ficha, com as etapas combinadas',
      'Aplicação de ácido hialurônico e toxina botulínica conforme o plano',
      'Retornos de acompanhamento e registro de cada etapa',
    ],
    facts: {
      duration: 'Definido na avaliação',
      sessions: 'Definido na avaliação',
      recovery: 'Imediata, com pequeno inchaço ou vermelhidão passageira',
      anesthesia: 'Anestésico tópico ou local, conforme a técnica',
    },
    benefits: [
      'Resultado harmônico, com o rosto tratado em conjunto',
      'Reposição de volume e sustentação nas regiões que precisam',
      'Suavização de rugas de expressão',
      'Contornos mais definidos',
      'Acompanhamento preciso, com cada etapa registrada',
    ],
    care: [
      'Informe medicamentos em uso, alergias e procedimentos estéticos anteriores',
      'Aplique compressas geladas nas primeiras 24 horas',
      'Não massageie as áreas tratadas sem orientação',
      'Evite deitar ou praticar exercícios nas primeiras 4 horas após a toxina',
      'Evite exercícios físicos por 72 horas após o preenchimento',
      'Evite sol, calor excessivo, sauna e frio intenso por 14 dias',
      'Compareça aos retornos combinados no plano',
    ],
    contraindications: [
      'Gestação e amamentação',
      'Alergia conhecida a algum componente dos produtos',
      'Infecção ou herpes ativo nas regiões a tratar',
      'Uso de anticoagulantes sem orientação médica',
      'Doenças autoimunes ou distúrbios de coagulação, que são avaliados na consulta',
    ],
    faq: [
      {
        q: 'O Full Face é feito em uma única sessão?',
        a: 'Depende do plano. Algumas pacientes fazem tudo em um atendimento, outras em etapas. A Dra. Samara define o melhor caminho na avaliação e registra cada etapa na sua ficha.',
      },
      {
        q: 'Qual a diferença para a harmonização facial?',
        a: 'A harmonização pode focar em uma ou poucas regiões. O Full Face olha o rosto inteiro e cria um plano único, para que todas as áreas fiquem em equilíbrio.',
      },
      {
        q: 'Quanto tempo duram os resultados?',
        a: 'A toxina botulínica dura em média de 3 a 6 meses. O ácido hialurônico dura em média de 8 a 18 meses, conforme a área, o produto e o seu metabolismo.',
      },
      {
        q: 'O plano pode mudar durante o tratamento?',
        a: 'Sim. Se alguma alteração for indicada, ela é explicada e combinada com você durante os atendimentos.',
      },
      {
        q: 'Vou ficar com aspecto de procedimento?',
        a: 'A proposta é justamente o contrário: tratar o rosto em conjunto para um resultado natural, sem exagero em nenhuma área.',
      },
    ],
    related: ['harmonizacao-facial', 'preenchimento-facial', 'toxina-botulinica', 'bioestimuladores-de-colageno'],
    image: '/tratamentos/full-face.webp',
  },
  {
    slug: 'preenchimento-facial',
    article: 'o',
    name: 'Preenchimento facial',
    category: 'facial',
    metaTitle: 'Preenchimento facial em Santana, SP | Dra. Skin',
    metaDescription:
      'Preenchimento facial com ácido hialurônico em Santana, São Paulo. Suaviza sulcos e rugas estáticas e devolve volume, com efeito imediato. Dra. Skin.',
    h1: 'Preenchimento facial com ácido hialurônico',
    subtitle: 'Volume e contorno devolvidos com uma substância que o seu corpo já conhece.',
    intro:
      'O preenchimento facial aplica ácido hialurônico, substância já presente no organismo, para atenuar rugas estáticas e sulcos profundos e devolver volume ao rosto. O efeito é imediato e o procedimento é feito sob anestesia local. Na Dra. Skin, em Santana, as regiões são escolhidas pela Dra. Samara Rocha depois de uma avaliação individual.',
    about: [
      'O ácido hialurônico usado no preenchimento é biocompatível, reabsorvível e aprovado pela ANVISA. Por ser uma substância natural do organismo, não provoca reações imunológicas do tipo efeito vacina.',
      'As regiões mais tratadas são o sulco nasogeniano, a região malar, o mento, o ângulo e o contorno da mandíbula, os pré-jowls, a linha de marionete, as têmporas e o nariz. Cada uma recebe o produto e o volume adequados à sua anatomia.',
      'A duração média é de 8 a 18 meses e depende da área, do produto, do metabolismo e dos cuidados. Em pessoas com alterações da tireoide, a absorção pode ser mais rápida, por isso o histórico de saúde é sempre conversado na consulta.',
    ],
    indications: [
      'Sulcos profundos, como o nasogeniano e as linhas de marionete',
      'Rugas estáticas, presentes mesmo com o rosto em repouso',
      'Perda de volume nas maçãs do rosto ou nas têmporas',
      'Mento e mandíbula pouco projetados',
      'Quem busca uma harmonização facial com efeito imediato',
    ],
    steps: [
      'Avaliação da anatomia e definição das regiões a tratar',
      'Assinatura do termo de consentimento, com todas as dúvidas esclarecidas',
      'Higienização e anestesia local',
      'Aplicação do ácido hialurônico com técnica precisa',
      'Orientações de cuidados e retorno de avaliação',
    ],
    facts: {
      duration: 'Definido na avaliação',
      sessions: 'Definido na avaliação',
      recovery: 'Imediata, sem exercícios físicos por 72 horas',
      anesthesia: 'Anestesia local',
    },
    benefits: [
      'Efeito visível logo após a aplicação',
      'Suavização de sulcos e rugas estáticas',
      'Reposição de volume com aspecto natural',
      'Contornos do rosto mais definidos',
      'Substância biocompatível e reabsorvível',
    ],
    care: [
      'Informe antes medicamentos em uso e reações a procedimentos anteriores',
      'Aplique compressas geladas nas primeiras 24 horas',
      'Não massageie a área tratada, a não ser por orientação expressa',
      'Não use maquiagem nas primeiras 12 horas',
      'Evite exercícios físicos nas 72 horas seguintes',
      'Durma com a cabeça elevada para não comprimir a região',
      'Evite sol, calor excessivo, sauna e frio intenso por 14 dias',
    ],
    contraindications: [
      'Gestação e amamentação',
      'Alergia conhecida a algum componente do produto',
      'Infecção ou herpes ativo na região a ser tratada',
      'Uso de anticoagulantes sem orientação médica',
      'Distúrbios da tireoide, que pedem avaliação cuidadosa',
    ],
    faq: [
      {
        q: 'O resultado aparece na hora?',
        a: 'Sim. O ácido hialurônico tem efeito imediato. Um leve inchaço pode aparecer nos primeiros dias e regride sozinho.',
      },
      {
        q: 'Quanto tempo dura o preenchimento facial?',
        a: 'Em média de 8 a 18 meses, conforme a área tratada, o tipo de produto, o metabolismo e os cuidados adotados.',
      },
      {
        q: 'Posso corrigir algo logo depois?',
        a: 'Ajustes são avaliados no retorno. Nenhuma correção é feita nos 7 dias seguintes à aplicação, tempo necessário para o produto se acomodar.',
      },
      {
        q: 'O preenchimento pode ser desfeito?',
        a: 'O ácido hialurônico pode ser dissolvido com hialuronidase, quando há indicação. A Dra. Samara explica essa possibilidade na avaliação.',
      },
      {
        q: 'Dói?',
        a: 'O procedimento é feito sob anestesia local, o que deixa a aplicação confortável.',
      },
    ],
    related: ['preenchimento-labial', 'preenchimento-de-olheiras', 'hialuronidase', 'harmonizacao-facial'],
    image: '/tratamentos/preenchimento-facial.webp',
  },
  {
    slug: 'preenchimento-labial',
    article: 'o',
    name: 'Preenchimento labial',
    category: 'facial',
    metaTitle: 'Preenchimento labial em Santana, SP | Dra. Skin',
    metaDescription:
      'Preenchimento labial com ácido hialurônico em Santana, São Paulo. Volume, contorno e hidratação com naturalidade, planejados pela Dra. Samara Rocha.',
    h1: 'Preenchimento labial em Santana',
    subtitle: 'Volume, definição e hidratação com naturalidade.',
    intro:
      'O preenchimento labial aplica ácido hialurônico para devolver ou aumentar o volume dos lábios, redefinir o contorno, hidratar e corrigir assimetrias. É indicado para lábios finos, assimétricos ou desidratados. Na Dra. Skin, em Santana, cada lábio é planejado de forma individual.',
    about: [
      'O planejamento começa pelo seu objetivo: hidratação, volume natural ou volume mais evidente. A partir dele, a Dra. Samara analisa a altura do vermelhão superior e inferior, a proporção entre os dois lábios, o arco do cupido, a presença de assimetrias, rugas ou flacidez e se existe produto de aplicações anteriores fora do lugar.',
      'Quando o arco do cupido já é aparente, ele só precisa ser evidenciado. Quando não é, ele pode ser construído. Essa leitura detalhada é o que garante um contorno marcante sem perder a naturalidade.',
      'O produto é um preenchedor à base de ácido hialurônico, biocompatível, reabsorvível e aprovado pela ANVISA. O resultado não é permanente e dura em média de 6 a 18 meses, conforme a anatomia, a resposta do organismo e os cuidados.',
    ],
    indications: [
      'Lábios finos ou com pouco volume',
      'Lábios assimétricos',
      'Lábios desidratados',
      'Contorno pouco definido ou arco do cupido apagado',
      'Rugas finas ao redor da boca',
      'Desproporção entre lábio superior e inferior',
    ],
    steps: [
      'Avaliação dos lábios e definição do objetivo: hidratação, volume natural ou evidente',
      'Planejamento do contorno, do arco do cupido e da proporção',
      'Assinatura do termo de consentimento',
      'Aplicação precisa do ácido hialurônico',
      'Avaliação pós-procedimento e retoque, se necessário, após 15 a 30 dias',
    ],
    facts: {
      duration: '30 a 45 minutos',
      sessions: 'Uma sessão, com retoque após 15 a 30 dias se necessário',
      recovery: '2 a 3 dias para o inchaço leve regredir',
      anesthesia: 'Anestésico tópico ou local, conforme a técnica',
    },
    benefits: [
      'Lábios mais volumosos, na medida que você escolher',
      'Contorno definido',
      'Correção de assimetrias',
      'Suavização de rugas ao redor da boca',
      'Hidratação imediata',
    ],
    care: [
      'Não use anticoagulantes sem orientação médica nos dias anteriores',
      'Evite manipular ou comprimir os lábios após a aplicação',
      'Evite sol, calor e exercícios intensos por no mínimo 48 horas',
      'Não faça outros procedimentos estéticos na região por no mínimo 48 horas',
      'Compareça à avaliação pós-procedimento',
    ],
    contraindications: [
      'Gestação e amamentação',
      'Alergia conhecida a algum componente do produto',
      'Herpes ou infecção ativa nos lábios',
      'Uso de anticoagulantes sem orientação médica',
    ],
    faq: [
      {
        q: 'Vou ficar com a boca exagerada?',
        a: 'Não precisa. Você escolhe com a Dra. Samara entre hidratação, volume natural ou volume evidente, e o plano segue esse objetivo.',
      },
      {
        q: 'Quanto tempo dura o preenchimento labial?',
        a: 'Em média de 6 a 18 meses. A duração depende da anatomia dos lábios, da resposta do organismo, dos cuidados e da técnica.',
      },
      {
        q: 'Incha muito?',
        a: 'Um inchaço leve é esperado e regride totalmente em 2 a 3 dias. Vermelhidão, pequenos hematomas e um endurecimento temporário também podem acontecer.',
      },
      {
        q: 'Já fiz preenchimento antes. Posso fazer de novo?',
        a: 'Sim, após avaliação. A Dra. Samara verifica se há produto anterior fora do contorno do lábio e, se houver, indica o melhor caminho, que pode incluir a hialuronidase.',
      },
      {
        q: 'Quando posso fazer retoque?',
        a: 'O retoque, quando necessário, é feito entre 15 e 30 dias após a aplicação, na avaliação pós-procedimento.',
      },
    ],
    related: ['preenchimento-facial', 'hialuronidase', 'harmonizacao-facial', 'skinbooster'],
    image: '/labial.jpeg',
  },
  {
    slug: 'preenchimento-de-olheiras',
    article: 'o',
    name: 'Preenchimento de olheiras',
    category: 'facial',
    metaTitle: 'Preenchimento de olheiras em Santana, SP | Dra. Skin',
    metaDescription:
      'Preenchimento de olheiras com ácido hialurônico em Santana, São Paulo. Suaviza a profundidade sob os olhos e o aspecto de cansaço. Dra. Samara Rocha.',
    h1: 'Preenchimento de olheiras em Santana',
    subtitle: 'Um olhar mais descansado, com delicadeza na região mais fina do rosto.',
    intro:
      'O preenchimento de olheiras aplica ácido hialurônico de baixa densidade no sulco lacrimal para preencher a concavidade sob os olhos e suavizar a sombra escura. É indicado para olheiras estruturais profundas, os chamados olhos fundos, que dão aspecto de cansaço. Na Dra. Skin, em Santana, a aplicação é feita com técnica cuidadosa pela Dra. Samara Rocha.',
    about: [
      'Muitas olheiras não são só cor: são profundidade. Quando há uma depressão no sulco lacrimal, a luz cria uma sombra que o corretivo não esconde. O preenchimento nivela essa região e devolve leveza ao olhar.',
      'A pele da pálpebra é fina e delicada. Por isso o produto escolhido é um ácido hialurônico de baixa densidade, aplicado em pequenas quantidades e com precisão, o que também melhora a hidratação local.',
      'Na avaliação, a Dra. Samara verifica se a sua olheira tem o componente de profundidade que o preenchimento trata e indica o plano mais adequado para o seu caso.',
    ],
    indications: [
      'Olheiras profundas, com aspecto de olhos fundos',
      'Sombra escura causada pela concavidade sob os olhos',
      'Aparência de cansaço constante, mesmo descansada',
      'Transição marcada entre a pálpebra inferior e a bochecha',
    ],
    steps: [
      'Avaliação do tipo de olheira e da anatomia da região',
      'Assinatura do termo de consentimento',
      'Higienização e anestesia',
      'Aplicação de ácido hialurônico de baixa densidade no sulco lacrimal',
      'Orientações de cuidados e retorno de avaliação',
    ],
    facts: {
      duration: '30 minutos',
      sessions: 'Definido na avaliação',
      recovery: 'Imediata, com possibilidade de pequenos hematomas',
      anesthesia: 'Anestésico tópico ou local, conforme a técnica',
    },
    benefits: [
      'Suavização imediata do olhar cansado',
      'Nivelamento da profundidade da olheira',
      'Melhor hidratação da pele fina da pálpebra',
      'Aparência mais descansada e natural',
    ],
    care: [
      'Informe antes medicamentos em uso e reações a procedimentos anteriores',
      'Aplique compressas geladas nas primeiras 24 horas',
      'Não massageie a região, a não ser por orientação expressa',
      'Não use maquiagem nas primeiras 12 horas',
      'Evite exercícios físicos nas 72 horas seguintes',
      'Durma com a cabeça elevada nos primeiros dias',
      'Evite sol, calor excessivo e sauna por 14 dias',
    ],
    contraindications: [
      'Gestação e amamentação',
      'Alergia conhecida a algum componente do produto',
      'Infecção ativa na região dos olhos',
      'Uso de anticoagulantes sem orientação médica',
    ],
    faq: [
      {
        q: 'Toda olheira pode ser tratada com preenchimento?',
        a: 'O preenchimento é indicado para a olheira de profundidade, aquela causada pela concavidade sob os olhos. Na avaliação, a Dra. Samara identifica o seu tipo e explica o que faz sentido para você.',
      },
      {
        q: 'Fica roxo?',
        a: 'Pequenos hematomas podem aparecer, porque a pele da região é fina. Eles são passageiros, e as compressas geladas nas primeiras 24 horas ajudam.',
      },
      {
        q: 'Quando vejo o resultado?',
        a: 'A suavização do olhar cansado é imediata. Um leve inchaço pode aparecer nos primeiros dias.',
      },
      {
        q: 'Quanto tempo dura?',
        a: 'O ácido hialurônico é reabsorvido aos poucos pelo organismo. A duração varia conforme o produto, o metabolismo e os cuidados, e é conversada na avaliação.',
      },
    ],
    related: ['preenchimento-facial', 'skinbooster', 'hialuronidase', 'full-face'],
    image: '/olheiras.jpeg',
  },
  {
    slug: 'toxina-botulinica',
    article: 'a',
    name: 'Toxina botulínica (Botox)',
    category: 'facial',
    metaTitle: 'Botox em Santana, SP | Toxina botulínica | Dra. Skin',
    metaDescription:
      'Botox em Santana, São Paulo: toxina botulínica para suavizar rugas de expressão, prevenir marcas e tratar bruxismo e suor excessivo. Dra. Samara Rocha.',
    h1: 'Toxina botulínica (Botox) em Santana',
    subtitle: 'Prevenção e suavização de rugas e linhas de expressão.',
    intro:
      'A toxina botulínica, conhecida como Botox, relaxa temporariamente os músculos da expressão e suaviza rugas dinâmicas na testa, na glabela e nos pés de galinha. É indicada para prevenir marcas a partir dos 25 anos ou suavizar rugas já estabelecidas. Na Dra. Skin, em Santana, a aplicação é precisa e planejada para manter a sua expressão natural.',
    about: [
      'A toxina é obtida da bactéria Clostridium botulinum e, para uso estético, é aplicada de forma atenuada, por via injetável. Ela diminui a contração do músculo e assim impede o franzimento da pele que forma as linhas de expressão.',
      'Ela age nas rugas dinâmicas, que aparecem quando você se expressa. Não age nas rugas estáticas, presentes mesmo com o rosto em repouso; para essas, a Dra. Samara indica outras técnicas, como o preenchimento.',
      'Além da estética, a toxina é indicada para cefaleia tensional, disfunção temporomandibular, bruxismo, hipertrofia do masseter, sorriso gengival, sorriso assimétrico, correção do ângulo da boca e hiperidrose, o suor excessivo nas axilas, mãos, pés e cabeça.',
    ],
    indications: [
      'Rugas de expressão na testa, glabela e pés de galinha',
      'Prevenção de marcas a partir dos 25 anos',
      'Bruxismo, hipertrofia do masseter e disfunção temporomandibular',
      'Cefaleia tensional',
      'Sorriso gengival ou assimétrico',
      'Hiperidrose em axilas, mãos, pés e cabeça',
    ],
    steps: [
      'Avaliação da sua expressão e dos músculos envolvidos',
      'Definição dos pontos e das unidades para cada região',
      'Assinatura do termo de consentimento',
      'Aplicação precisa com agulha fina',
      'Orientações para as primeiras horas e retorno de avaliação',
    ],
    facts: {
      duration: '20 a 30 minutos',
      sessions: 'Reaplicação a cada 3 a 6 meses, conforme a avaliação',
      recovery: 'Imediata, sem deitar ou fazer exercícios nas primeiras 4 horas',
      anesthesia: 'Definido na avaliação',
    },
    benefits: [
      'Suavização das linhas de expressão',
      'Prevenção de rugas profundas e estáticas',
      'Aparência descansada e rejuvenescida',
      'Efeito lifting na cauda da sobrancelha',
      'Alívio do bruxismo e da tensão muscular, quando indicado',
    ],
    care: [
      'Não deite nas primeiras 4 horas após a aplicação',
      'Evite exercícios físicos nas primeiras 4 horas',
      'Não massageie nem pressione as áreas tratadas',
      'Siga rigorosamente as orientações da Dra. Samara e avise sobre qualquer desconforto',
      'Respeite o intervalo indicado entre as aplicações',
    ],
    contraindications: [
      'Gestação e amamentação',
      'Alergia conhecida a algum componente do produto',
      'Infecção ativa na região de aplicação',
    ],
    faq: [
      {
        q: 'Quando o Botox começa a fazer efeito?',
        a: 'O efeito começa entre 48 e 72 horas após a aplicação e atinge o pico em até 15 dias.',
      },
      {
        q: 'Quanto tempo dura?',
        a: 'Em média de 3 a 6 meses. Depois desse período, o músculo volta a ganhar força aos poucos e as linhas dinâmicas reaparecem.',
      },
      {
        q: 'Vou ficar com o rosto congelado?',
        a: 'A dose e os pontos são planejados para suavizar as rugas preservando a sua expressão. O objetivo é uma aparência descansada, não um rosto parado.',
      },
      {
        q: 'Por que é importante respeitar o intervalo entre aplicações?',
        a: 'Aplicações muito próximas podem favorecer o chamado efeito vacina, quando o tratamento perde efeito. Por isso a Dra. Samara indica o momento certo da reaplicação.',
      },
      {
        q: 'A toxina trata rugas que aparecem com o rosto parado?',
        a: 'Não. Ela age nas rugas dinâmicas. As rugas estáticas são tratadas com outras técnicas, como o preenchimento e os bioestimuladores.',
      },
    ],
    related: ['hiperidrose', 'harmonizacao-facial', 'full-face', 'preenchimento-facial'],
    image: '/card_facial_injectables.jpg',
  },
  {
    slug: 'bioestimuladores-de-colageno',
    article: 'os',
    name: 'Bioestimuladores de colágeno',
    category: 'facial',
    metaTitle: 'Bioestimuladores de colágeno em Santana | Dra. Skin',
    metaDescription:
      'Bioestimuladores de colágeno em Santana, São Paulo, para tratar a flacidez do rosto, pescoço, colo e mãos com firmeza natural e gradual. Dra. Skin.',
    h1: 'Bioestimuladores de colágeno em Santana',
    subtitle: 'Firmeza e sustentação construídas pela sua própria pele.',
    intro:
      'Os bioestimuladores de colágeno são substâncias injetáveis que estimulam a pele a produzir o próprio colágeno, de forma gradual. São indicados para tratar a flacidez do rosto e do corpo, incluindo pescoço, colo e mãos. Na Dra. Skin, em Santana, o plano de aplicação é individual e registrado sessão a sessão.',
    about: [
      'O colágeno é a principal proteína estrutural da pele, essencial para a firmeza, a elasticidade e a sustentação. Os bioestimuladores agem sobre os fibroblastos, as células responsáveis pela produção dessa proteína.',
      'A Dra. Samara trabalha com bioestimuladores de diferentes composições, como hidroxiapatita de cálcio, ácido poli-L-láctico e policaprolactona. A escolha depende da sua queixa, do grau de flacidez, da espessura da pele e da região: face, mandíbula, pescoço, submento ou corpo.',
      'Os efeitos aparecem de forma progressiva, geralmente ao longo de até seis meses, e a produção de colágeno continua por até 2 anos. O número de sessões varia de uma a três, com intervalo de aproximadamente 90 dias.',
    ],
    indications: [
      'Flacidez facial leve, moderada ou acentuada',
      'Perda de sustentação e de contorno',
      'Afinamento da pele',
      'Envelhecimento estrutural do rosto',
      'Flacidez no pescoço, colo, mãos e corpo',
      'Prevenção da flacidez',
    ],
    steps: [
      'Avaliação da queixa, do grau de flacidez e da espessura da pele',
      'Escolha do bioestimulador e da técnica, como leque, malha ou bolus profundo',
      'Assinatura do termo de consentimento',
      'Aplicação com cânula ou agulha nas regiões prioritárias',
      'Entrega das orientações impressas e retorno para a próxima sessão',
    ],
    facts: {
      duration: '45 minutos',
      sessions: '1 a 3 sessões, com intervalo de cerca de 90 dias',
      recovery: 'Imediata, com leve inchaço localizado por 24 horas',
      anesthesia: 'Definido na avaliação',
    },
    benefits: [
      'Tratamento da flacidez facial e corporal',
      'Recuperação de volume de forma natural',
      'Melhora da qualidade, da espessura e da textura da pele',
      'Resultado gradual, que acompanha o tempo da sua pele',
      'Efeito que continua a evoluir por meses',
    ],
    care: [
      'Siga as orientações impressas entregues após a sessão',
      'Faça a massagem na região conforme a orientação da Dra. Samara',
      'Avise a profissional se houver dor persistente ou secreção nos pontos de aplicação',
      'Hematomas e inchaço costumam regredir em cerca de uma semana',
      'Respeite o intervalo de cerca de 90 dias entre as sessões',
    ],
    contraindications: [
      'Gestação e amamentação',
      'Alergia conhecida a algum componente do produto',
      'Infecção ativa na região de aplicação',
      'Doenças autoimunes, que são avaliadas na consulta',
    ],
    faq: [
      {
        q: 'Quando vejo o resultado dos bioestimuladores?',
        a: 'O resultado é gradual. A melhora aparece ao longo de até seis meses após a aplicação, à medida que a pele produz colágeno novo.',
      },
      {
        q: 'Quantas sessões vou precisar?',
        a: 'De uma a três, com intervalo de aproximadamente 90 dias. O número depende do grau de flacidez e das necessidades da sua pele.',
      },
      {
        q: 'Por quanto tempo o efeito continua?',
        a: 'Os bioestimuladores continuam agindo na produção de colágeno por até 2 anos.',
      },
      {
        q: 'Posso tratar o pescoço e as mãos?',
        a: 'Sim. Os bioestimuladores tratam a flacidez do rosto e também do pescoço, colo, mãos e outras áreas do corpo.',
      },
      {
        q: 'Por que preciso massagear depois?',
        a: 'A massagem orientada ajuda a distribuir o produto e evita a formação de pequenos nódulos. A Dra. Samara explica como e por quanto tempo fazer.',
      },
    ],
    related: ['profhilo', 'skinbooster', 'fios-de-pdo', 'full-face'],
    image: '/bioestimuladores_final.jpg',
  },
  {
    slug: 'skinbooster',
    article: 'o',
    name: 'Skinbooster',
    category: 'facial',
    metaTitle: 'Skinbooster em Santana, SP | Dra. Skin',
    metaDescription:
      'Skinbooster em Santana, São Paulo: microinjeções de ácido hialurônico para hidratação profunda, viço e elasticidade do rosto, pescoço, colo e mãos.',
    h1: 'Skinbooster em Santana',
    subtitle: 'Hidratação profunda injetável, de dentro para fora.',
    intro:
      'O Skinbooster é a aplicação de microinjeções de ácido hialurônico de baixa reticulação na pele para promover hidratação profunda, elasticidade e viço. Não aumenta volume: melhora a qualidade da pele do rosto, pescoço, colo e mãos. Na Dra. Skin, em Santana, é a escolha para peles opacas e desidratadas.',
    about: [
      'O ácido hialurônico fluido, combinado com vitaminas e minerais, é depositado na derme e funciona como um reservatório de água profunda. O resultado é uma pele mais hidratada, luminosa e elástica.',
      'Como o objetivo é a qualidade da pele e não o volume, o skinbooster é uma ótima escolha para quem quer um aspecto saudável e descansado sem alterar os traços do rosto.',
      'A aplicação é feita com microinjeções, geralmente sob anestesia tópica. Os resultados são progressivos e naturais, observados entre 15 e 30 dias, e novas sessões podem ser indicadas para manter o efeito.',
    ],
    indications: [
      'Pele desidratada e opaca',
      'Pele sem viço',
      'Linhas finas causadas pelo ressecamento',
      'Perda de elasticidade',
      'Rosto, pescoço, colo e mãos',
    ],
    steps: [
      'Avaliação da pele e das áreas a tratar',
      'Assinatura do termo de consentimento',
      'Higienização e anestesia tópica',
      'Microinjeções de ácido hialurônico na derme',
      'Orientações de cuidados para os primeiros dias',
    ],
    facts: {
      duration: '30 a 40 minutos',
      sessions: 'Definido na avaliação, com sessões de manutenção',
      recovery: 'Imediata, com pequenos pontos vermelhos por até 24 horas',
      anesthesia: 'Anestesia tópica',
    },
    benefits: [
      'Hidratação profunda e duradoura',
      'Brilho e viço',
      'Suavização de linhas finas',
      'Melhora da elasticidade da pele',
      'Resultado natural, sem mudar os volumes do rosto',
    ],
    care: [
      'Informe alergias, doenças autoimunes, medicamentos e tratamentos estéticos anteriores',
      'Aplique compressas geladas nas primeiras 24 horas, conforme orientação',
      'Evite maquiagem, sol direto, banhos quentes e sauna por pelo menos 72 horas',
      'Não massageie nem pressione a área tratada',
      'Evite atividades físicas nas primeiras 48 horas',
      'Mantenha a pele limpa e hidratada com os produtos indicados',
      'Evite bebidas alcoólicas no dia da aplicação',
    ],
    contraindications: [
      'Gestação e amamentação',
      'Alergia conhecida a algum componente do produto',
      'Infecção ativa na região a ser tratada',
      'Doenças autoimunes, que são avaliadas na consulta',
    ],
    faq: [
      {
        q: 'Skinbooster dá volume?',
        a: 'Não. O Skinbooster melhora a hidratação, a elasticidade e o viço da pele, sem aumentar volume.',
      },
      {
        q: 'Quando vejo o resultado?',
        a: 'O resultado é progressivo e costuma ser observado entre 15 e 30 dias após a aplicação.',
      },
      {
        q: 'Fico com marcas?',
        a: 'Pequenos pontos vermelhos podem aparecer nos locais das microinjeções e costumam sumir em até 24 horas.',
      },
      {
        q: 'Qual a diferença entre skinbooster e Profhilo?',
        a: 'Os dois cuidam da qualidade da pele sem volumizar. O Skinbooster foca em hidratação profunda com microinjeções. O Profhilo é um biorremodelador que também estimula colágeno e elastina e trata a flacidez leve.',
      },
    ],
    related: ['profhilo', 'bioestimuladores-de-colageno', 'rejuvenescimento-facial', 'preenchimento-de-olheiras'],
    image: '/skinbooster_final.jpg',
  },
  {
    slug: 'profhilo',
    article: 'o',
    name: 'Profhilo',
    category: 'facial',
    metaTitle: 'Profhilo em Santana, SP | Dra. Skin',
    metaDescription:
      'Profhilo em Santana, São Paulo: biorremodelador de ácido hialurônico que hidrata, firma e trata a flacidez do rosto e pescoço sem volumizar. Dra. Skin.',
    h1: 'Profhilo em Santana',
    subtitle: 'Biorremodelação da pele para firmeza e viço, sem alterar os seus traços.',
    intro:
      'O Profhilo é um biorremodelador injetável de ácido hialurônico ultrapuro que promove hidratação profunda, estimula a bioestimulação do tecido e melhora a qualidade da pele. É indicado para quem quer tratar a flacidez do rosto e do pescoço sem mudar volumes. Na Dra. Skin, em Santana, é aplicado pela Dra. Samara Rocha.',
    about: [
      'O Profhilo combina ácido hialurônico de alta e baixa concentração, estabilizado por uma tecnologia específica, sem agentes químicos de ligação. Ele atua na reorganização da matriz dérmica e favorece firmeza, elasticidade e viço.',
      'Não é um preenchedor. A finalidade é estética e não inclui volumizar nem alterar contornos faciais, por isso o resultado é uma pele com mais tônus e hidratação, com os mesmos traços de sempre.',
      'Os resultados são progressivos e aparecem nas semanas seguintes. Eles variam conforme a pele, a idade, os hábitos de vida e a resposta do organismo, e a manutenção periódica é definida na avaliação.',
    ],
    indications: [
      'Flacidez no rosto e no pescoço',
      'Perda de firmeza e de elasticidade',
      'Pele com pouca hidratação e sem viço',
      'Quem quer melhorar a qualidade global da pele sem alterar volumes',
    ],
    steps: [
      'Avaliação da pele e do histórico de saúde',
      'Assinatura do termo de consentimento',
      'Higienização da área',
      'Aplicação em pontos específicos do rosto e do pescoço',
      'Orientações de cuidados e plano de manutenção',
    ],
    facts: {
      duration: '20 a 30 minutos',
      sessions: 'Definido na avaliação, com manutenção periódica',
      recovery: 'Imediata, com pequenas pápulas que somem em poucas horas',
      anesthesia: 'Definido na avaliação',
    },
    benefits: [
      'Combate à flacidez sem volumizar',
      'Hidratação em várias camadas da pele',
      'Melhora do tônus da pele',
      'Estímulo à produção de colágeno e elastina',
      'Pele mais firme, elástica e com viço',
    ],
    care: [
      'Informe medicamentos, doenças autoimunes, distúrbios de coagulação, gravidez e tratamentos anteriores',
      'Evite manipular ou massagear a área por 24 a 48 horas',
      'Evite sol direto e bronzeadores por pelo menos 7 dias',
      'Evite calor excessivo, banhos quentes e sauna por 48 horas',
      'Evite atividades físicas intensas no dia do procedimento',
      'Mantenha a pele limpa e hidratada conforme orientação',
      'Não faça outros procedimentos estéticos na área sem liberação',
    ],
    contraindications: [
      'Gestação e amamentação',
      'Alergia conhecida a algum componente do produto',
      'Infecção ativa na região a ser tratada',
      'Doenças autoimunes ou distúrbios de coagulação, que são avaliados na consulta',
    ],
    faq: [
      {
        q: 'O Profhilo muda o formato do rosto?',
        a: 'Não. Ele não volumiza nem altera contornos. O foco é a qualidade da pele: hidratação, firmeza e elasticidade.',
      },
      {
        q: 'Quando aparecem os resultados?',
        a: 'Os resultados são progressivos e geralmente observados nas semanas seguintes à aplicação.',
      },
      {
        q: 'As marcas da aplicação demoram para sair?',
        a: 'Pequenas pápulas aparecem nos pontos de aplicação e somem em poucas horas.',
      },
      {
        q: 'Preciso fazer manutenção?',
        a: 'Sim, a manutenção periódica costuma ser indicada. A frequência é definida pela Dra. Samara conforme a resposta da sua pele.',
      },
    ],
    related: ['skinbooster', 'bioestimuladores-de-colageno', 'fios-de-pdo', 'rejuvenescimento-facial'],
    image: '/Profhilo.jpeg',
  },
  {
    slug: 'fios-de-pdo',
    article: 'os',
    name: 'Fios de PDO',
    category: 'facial',
    metaTitle: 'Fios de PDO em Santana, SP | Dra. Skin',
    metaDescription:
      'Fios de PDO em Santana, São Paulo: estímulo de colágeno e reestruturação facial para mais firmeza e contornos definidos. Avaliação com a Dra. Samara Rocha.',
    h1: 'Fios de PDO em Santana',
    subtitle: 'Estímulo de colágeno e reestruturação facial com fios absorvíveis.',
    intro:
      'Os fios de PDO são fios de estímulo ao colágeno, de material biocompatível, que ajudam a reestruturar o rosto e a elevar os tecidos. São indicados para melhorar a firmeza da pele e redefinir contornos faciais. Na Dra. Skin, em Santana, o plano de aplicação é desenhado região por região.',
    about: [
      'Os fios são introduzidos no plano do tecido com agulha ou cânula, por via injetável, e podem exigir anestesia local. Eles favorecem a readequação dos tecidos do rosto e estimulam os fibroblastos a produzir colágeno.',
      'O material é biocompatível e não permanente. Os primeiros resultados dependem da produção de colágeno novo e costumam ser percebidos a partir de 30 dias, com resultado final em até 90 dias, quando é feita a reavaliação.',
      'A durabilidade varia com a resposta do organismo e com o estilo de vida. Tabagismo, sol em excesso, pouca água, atividade física exagerada, consumo frequente de álcool, falta de sono e mudanças frequentes de fuso horário podem reduzir a duração.',
    ],
    indications: [
      'Perda de firmeza da pele do rosto',
      'Contornos faciais pouco definidos',
      'Quem busca estímulo de colágeno e reestruturação facial',
      'Flacidez leve com desejo de elevação dos tecidos',
    ],
    steps: [
      'Avaliação e plano de aplicação com as regiões de cada lado do rosto',
      'Assinatura do termo de consentimento',
      'Anestesia local, quando necessária',
      'Introdução dos fios com agulha ou cânula',
      'Envio de fotos da evolução nas primeiras 24 horas e reavaliação entre 30 e 45 dias',
    ],
    facts: {
      duration: 'Definido na avaliação',
      sessions: 'Definido na avaliação, com reavaliação em 30 a 45 dias',
      recovery: 'Repouso de no mínimo 96 horas, sem manipular a região',
      anesthesia: 'Anestesia local, quando necessária',
    },
    benefits: [
      'Estímulo à produção de colágeno',
      'Mais firmeza da pele',
      'Contornos faciais redefinidos',
      'Reestruturação do rosto com material absorvível',
    ],
    care: [
      'Repouse por no mínimo 96 horas e não manipule a região tratada',
      'Envie fotos da evolução às 2, 4, 8, 16 e 24 horas, conforme orientado',
      'Procure a Dra. Samara imediatamente se notar mudança de cor da pele, dor intensa ou dormência',
      'Compareça à reavaliação entre 30 e 45 dias após a aplicação',
      'Evite tabagismo, sol em excesso e álcool para preservar o resultado',
      'Beba água: menos de dois litros por dia pode reduzir a duração',
    ],
    contraindications: [
      'Gestação e amamentação',
      'Distúrbio dismórfico',
      'Histórico de alergias',
    ],
    faq: [
      {
        q: 'Quando vejo o resultado dos fios de PDO?',
        a: 'Os primeiros resultados costumam aparecer a partir de 30 dias, com o resultado final estimado em até 90 dias, quando é feita a reavaliação.',
      },
      {
        q: 'Os fios ficam para sempre?',
        a: 'Não. O material é biocompatível e não permanente. Ele é absorvido pelo organismo enquanto estimula a produção de colágeno.',
      },
      {
        q: 'Incha depois?',
        a: 'O inchaço é comum e pode durar até 30 dias, em média. Pequenos hematomas e sensibilidade local também podem acontecer.',
      },
      {
        q: 'Por que o repouso é tão importante?',
        a: 'Nas primeiras 96 horas, os fios se acomodam nos tecidos. Não manipular a região nesse período protege o resultado.',
      },
      {
        q: 'O que pode diminuir a duração?',
        a: 'Tabagismo, sol em excesso, pouca ingestão de água, atividade física exagerada, álcool frequente, falta de sono e mudanças frequentes de fuso horário.',
      },
    ],
    related: ['bioestimuladores-de-colageno', 'profhilo', 'harmonizacao-facial', 'hifu'],
    image: '/tratamentos/fios-de-pdo.webp',
  },
];
