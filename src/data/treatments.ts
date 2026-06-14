export interface Treatment {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  duration: string;
  recovery: string;
  benefits: string;
  idealCandidates: string;
  imageColor: string; // Used for a luxury gradient background on the card
}

export const TREATMENTS: Treatment[] = [
  {
    id: "harmonizacao-facial",
    name: "Harmonização Facial",
    subtitle: "Restauração da simetria, sustentação e contornos faciais",
    description: "Procedimento personalizado que combina diferentes técnicas injetáveis para equilibrar os traços do rosto e definir contornos como mento e mandíbula, valorizando a sua beleza natural.",
    duration: "60 a 90 minutos",
    recovery: "Imediato (pequeno inchaço ou vermelhidão passageira)",
    benefits: "Melhora da simetria, definição do maxilar, sustentação das bochechas, rejuvenescimento global e aumento da autoestima.",
    idealCandidates: "Pessoas que buscam melhorar a proporção facial, atenuar a perda de volume decorrente do envelhecimento ou definir contornos.",
    imageColor: "from-[#FCD6C5]/40 to-[#C69A86]/20"
  },
  {
    id: "preenchimento-labial",
    name: "Preenchimento Labial",
    subtitle: "Volume, definição e hidratação com naturalidade",
    description: "Aplicação precisa de ácido hialurônico para devolver ou aumentar o volume dos lábios, definir o contorno e proporcionar hidratação profunda.",
    duration: "30 a 45 minutos",
    recovery: "2 a 3 dias para regressão total do inchaço leve",
    benefits: "Lábios mais volumosos, contorno definido, simetria corrigida, suavização de rugas ao redor da boca e hidratação imediata.",
    idealCandidates: "Mulheres e pessoas com lábios finos, assimétricos ou desidratados que buscam um contorno marcante com aspect natural.",
    imageColor: "from-[#EDBEAC]/40 to-[#FCD6C5]/20"
  },
  {
    id: "toxina-botulinica",
    name: "Toxina Botulínica",
    subtitle: "Prevenção e suavização de rugas e linhas de expressão",
    description: "Aplicação precisa da toxina para suavizar linhas dinâmicas (testa, glabela e pés de galinha) ou para o tratamento de hiperidrose (suor excessivo nas axilas, mãos, pés e cabeça).",
    duration: "20 a 30 minutos",
    recovery: "Imediato (evitar deitar ou praticar exercícios nas primeiras 4 horas)",
    benefits: "Suavização de linhas de expressão, prevenção de rugas profundas estáticas, aparência descansada e rejuvenescida, efeito lifting na cauda da sobrancelha.",
    idealCandidates: "Indicado para prevenção de marcas de expressão a partir dos 25 anos ou para suavização de rugas já estabelecidas.",
    imageColor: "from-[#C69A86]/40 to-[#EDBEAC]/20"
  },
  {
    id: "bioestimuladores",
    name: "Bioestimuladores de Colágeno",
    subtitle: "Estímulo natural da firmeza e sustentação da pele",
    description: "Injeção de substâncias que estimulam a produção natural de colágeno de forma gradual. Excelente para tratar a flacidez facial e corporal, incluindo colo, pescoço e mãos.",
    duration: "45 minutos",
    recovery: "Imediato (leve inchaço localizado por 24h)",
    benefits: "Tratamento da flacidez facial e corporal, recuperação do volume de forma natural, melhora significativa da qualidade, espessura e textura da pele.",
    idealCandidates: "Pessoas com sinais de flacidez facial ou corporal, perda de firmeza na pele and perda de contorno decorrente do envelhecimento.",
    imageColor: "from-[#FCD6C5]/40 to-[#EDBEAC]/20"
  },
  {
    id: "skinbooster",
    name: "Skinbooster",
    subtitle: "Hidratação profunda injetável de dentro para fora",
    description: "Microinjeções de ácido hialurônico fluido combinado com vitaminas e minerais na derme, agindo como um potente reservatório de água profunda.",
    duration: "30 a 40 minutos",
    recovery: "Imediato (pequenos pontos vermelhos podem persistir por 24h)",
    benefits: "Super-hidratação de longa duração, brilho e viço instantâneos, suavização de linhas finas e melhora da elasticidade cutânea.",
    idealCandidates: "Pessoas com peles desidratadas, opacas, sem viço e com pequenas linhas finas causadas pelo ressecamento.",
    imageColor: "from-[#EDBEAC]/40 to-[#C69A86]/20"
  },
  {
    id: "profhilo",
    name: "Profhilo",
    subtitle: "Biorremodelador celular de alta tecnologia",
    description: "Tecnologia revolucionária de ácido hialurônico de alta e baixa concentração sem agentes químicos de ligação, que atua na regeneração e hidratação da matriz extracelular.",
    duration: "20 a 30 minutos",
    recovery: "Imediato (pequenas pápulas no local da aplicação somem em poucas horas)",
    benefits: "Combate à flacidez sem volumizar, hidratação multinível, melhora expressiva do tônus da pele e estímulo à produção de colágeno e elastina.",
    idealCandidates: "Mulheres e pessoas que buscam melhorar a qualidade global da pele, tratar a flacidez no rosto e pescoço sem alterar volumes faciais.",
    imageColor: "from-[#C69A86]/40 to-[#FCD6C5]/20"
  },
  {
    id: "laser-melasma",
    name: "Laser para Melasma",
    subtitle: "Clareamento seguro e preciso de manchas",
    description: "Uso de tecnologias de laser específicas que agem de maneira fotoacústica, quebrando o pigmento de melanina em partículas menores sem gerar calor excessivo, o que evita o efeito rebote.",
    duration: "30 a 45 minutos",
    recovery: "Imediato (pele levemente rosada por algumas horas)",
    benefits: "Clareamento progressivo do melasma, uniformização do tom da pele, redução de manchas solares e melhora na textura geral.",
    idealCandidates: "Pessoas que sofrem com manchas persistentes de melasma ou hiperpigmentação pós-inflamatória e buscam um tratamento seguro.",
    imageColor: "from-[#FCD6C5]/40 to-[#C69A86]/20"
  },
  {
    id: "laser-rejuvenescimento",
    name: "Laser Rejuvenescimento",
    subtitle: "Estímulo de colágeno, textura e redução de poros",
    description: "Tratamento tecnológico a laser focado em promover microlesões controladas nas camadas profundas da pele para induzir um processo de cicatrização que renova o colágeno.",
    duration: "30 a 45 minutos",
    recovery: "2 a 4 dias (leve descamação e vermelhidão controladas)",
    benefits: "Redução de rugas finas, fechamento de poros dilatados, melhora expressiva da textura, viço e clareamento de manchas superficiais.",
    idealCandidates: "Mulheres e pessoas com fotoenvelhecimento, poros abertos, linhas finas e perda da elasticidade da pele.",
    imageColor: "from-[#EDBEAC]/40 to-[#FCD6C5]/20"
  },
  {
    id: "criolipolise",
    name: "Criolipólise",
    subtitle: "Redução de gordura localizada por resfriamento controlado",
    description: "Tecnologia não invasiva que resfria as células de gordura a temperaturas negativas, causando a sua destruição (apoptose) e posterior eliminação natural pelo organismo.",
    duration: "60 minutos por área",
    recovery: "Imediato (área tratada pode ficar dormente ou avermelhada temporariamente)",
    benefits: "Redução de até 25% a 30% da gordura localizada na região tratada por sessão, sem necessidade de cortes ou repouso.",
    idealCandidates: "Pessoas próximas ao seu peso ideal que possuem depósitos de gordura localizada difíceis de perder com dieta e exercícios.",
    imageColor: "from-[#C69A86]/40 to-[#EDBEAC]/20"
  },
  {
    id: "tratamentos-capilares",
    name: "Tratamentos Capilares",
    subtitle: "Terapias capilares avançadas contra queda",
    description: "Associação de técnicas como microagulhamento capilar, aplicação de ativos específicos diretamente no couro cabeludo (Meso/Intradermoterapia) e fotobioestimulação para combater a calvície.",
    duration: "40 a 50 minutos",
    recovery: "Imediato",
    benefits: "Combate à queda de cabelo, fortalecimento do bulbo capilar, estímulo ao nascimento de novos fios e aumento da densidade capilar.",
    idealCandidates: "Homens e mulheres com queixa de queda capilar excessiva, afinamento dos fios ou estágios iniciais de alopecia.",
    imageColor: "from-[#FCD6C5]/40 to-[#EDBEAC]/20"
  },
  {
    id: "microagulhamento",
    name: "Microagulhamento",
    subtitle: "Indução de colágeno para cicatrizes e textura",
    description: "Procedimento realizado com microagulhas estéreis que abrem canais microscópicos na pele, permitindo a permeação profunda de ativos selecionados (Drug Delivery) e estimulando o colágeno.",
    duration: "45 minutos",
    recovery: "24h a 48h de vermelhidão moderada",
    benefits: "Suavização de cicatrizes de acne, redução de poros dilatados, melhora de rugas finas e clareamento de manchas superficiais.",
    idealCandidates: "Mulheres e pessoas com cicatrizes de acne, marcas de expressão ou textura irregular de pele.",
    imageColor: "from-[#EDBEAC]/40 to-[#C69A86]/20"
  },
  {
    id: "preenchimento-olheiras",
    name: "Preenchimento de Olheiras",
    subtitle: "Suavização de profundidade e redução de cansaço",
    description: "Aplicação cuidadosa de ácido hialurônico de baixa densidade no sulco lacrimal para preencher a concavidade sob os olhos, suavizando a sombra escura.",
    duration: "30 minutos",
    recovery: "Imediato (pequenos hematomas podem ocorrer)",
    benefits: "Suavização imediata do olhar cansado, nivelamento da profundidade da olheira e melhor hidratação da pele fina da pálpebra.",
    idealCandidates: "Pessoas com olheiras estruturais profundas ('olhos fundos') que causam aspecto de cansaço permanente.",
    imageColor: "from-[#C69A86]/40 to-[#FCD6C5]/20"
  },
  {
    id: "rejuvenescimento-facial",
    name: "Rejuvenescimento Facial",
    subtitle: "Protocolo integrado de rejuvenescimento global",
    description: "Combinação personalizada dos melhores tratamentos (como toxina, bioestimuladores e preenchimentos) planejados sob medida para restaurar a juventude celular e estrutural da pele.",
    duration: "Definido na avaliação",
    recovery: "Varia de acordo com os procedimentos escolhidos",
    benefits: "Harmonia facial restaurada, rejuvenescimento tridimensional da pele, suavização de rugas estáticas e dinâmicas e contornos joviais.",
    idealCandidates: "Pessoas com múltiplos sinais de envelhecimento facial que buscam um plano de tratamento estratégico e completo.",
    imageColor: "from-[#FCD6C5]/40 to-[#C69A86]/20"
  }
];
