import { News, NewsType } from '@repo/types';

export const NewsMock: News[] = [
  {
    id: '4c28b43d-1a1f-409c-adc8-101afa60d713',
    title:
      'Economia do Brasil: Brasil fica atrás da Turquia e Índia, mas cresce mais que EUA e Europa',
    description:
      'O PIB do Brasil cresceu mais rápido que os EUA e a Europa, mas fica atrás da Turquia e Índia.',
    category: 'Economia',
    type: NewsType.MAIN,
    content:
      'O PIB do Brasil cresceu 3,2% em 2020, superando os Estados Unidos (2,3%) e a Europa (1,5%), mas ficando atrás da Turquia (5,8%) e Índia (7,2%). Apesar do crescimento, o Brasil ainda enfrenta desafios econômicos, como altas taxas de desemprego e inflação. O país também enfrenta a concorrência internacional, especialmente da China, que é um dos principais parceiros comerciais do Brasil. Ainda assim, o Brasil tem uma economia diversificada e uma população jovem, o que pode ser um fator positivo para o crescimento econômico no futuro.',
    publishDate: '2021-03-10',
    writer: 'João Silva',
    articleImageUrl:
      'https://www.bloomberg.com/content/dam/bloomberg/pt/articles/2021-03-10/brazil-economy-growth-rate-gdp-forecast.jpg',
  },
  {
    id: '49a8c3ec-594e-47cd-97b2-ae5c4b543597',
    title:
      "O Choque do Empobrecimento no Próspero Vale Gaúcho: 'Terra Que Valia Milhões Agora Não Vale Nada'",
    description:
      'Enchentes na região do Vale do Taquari levaram a perdas econômicas significativas e pobreza.',
    category: 'Meio Ambiente',
    type: NewsType.MAIN,
    content:
      'As enchentes que atingiram a região do Vale do Taquari, no Rio Grande do Sul, causaram enormes prejuízos econômicos e sociais. Muitos agricultores e moradores da região viram suas terras, antes avaliadas em milhões de reais, perderem completamente o valor. Agora, enfrentam a pobreza e a dificuldade de reconstruir suas vidas. A região é conhecida por sua riqueza agrícola e sua beleza natural, mas agora enfrenta um desafio sem precedentes. A falta de infraestrutura e a ineficácia do governo local contribuem para a situação.',
    publishDate: '2021-03-15',
    writer: 'Maria Oliveira',
    articleImageUrl:
      'https://www.aljazeera.com/mritems/images/2021/03/15/0f1f4f5f-4f5f-4f5f-4f5f-4f5f.jpg',
  },
  {
    id: '78805037-121e-49bb-86d5-db09c38a53bd',
    title:
      'D-Day: 80 Anos Atrás - 9 Coisas Que Você Provavelmente Não Sabia Sobre Este Evento Histórico da Segunda Guerra Mundial',
    description:
      'Visão geral histórica da invasão das forças aliadas na França durante a Segunda Guerra Mundial.',
    category: 'História',
    type: NewsType.MAIN,
    content:
      'A invasão das forças aliadas na França, conhecida como D-Day, ocorreu em 6 de junho de 1944. Foi um dos mais importantes eventos da Segunda Guerra Mundial, marcando o início do fim da ocupação alemã na França. A invasão foi planejada e executada com precisão, envolvendo mais de 156.000 soldados aliados. A batalha foi sangrenta e durou várias semanas, mas os aliados eventualmente conquistaram a costa francesa. O D-Day é lembrado como um dia histórico que mudou o curso da guerra.',
    publishDate: '2021-06-06',
    writer: 'João Silva',
    articleImageUrl:
      'https://www.history.com/.image/t_share/HT_h_9-things-you-probably-didnt-know-about-d-day.jpg',
  },
  {
    id: '8f8bff68-5fe1-4749-ab9c-1509612fb011',
    title:
      'Governo Federal de Lula Announces Billions of Reais in Federal Aid for Crisis-Stricken RS, Economists Say',
    description:
      'A resposta do governo brasileiro à crise no Rio Grande do Sul.',
    category: 'Política',
    type: NewsType.MAIN,
    content:
      'O presidente Lula anunciou que o governo federal vai fornecer bilhões de reais em ajuda federal para o estado do Rio Grande do Sul, que está enfrentando uma crise econômica e social. Os economistas dizem que a ajuda é necessária para evitar uma crise mais grave e para ajudar a reconstruir a economia do estado. No entanto, há críticas à medida, que alguns consideram como uma forma de evitar responsabilidade pelo governo federal.',
    publishDate: '2021-03-20',
    writer: 'Maria Oliveira',
    articleImageUrl:
      'https://www.bloomberg.com/content/dam/bloomberg/pt/articles/2021-03-20/brazil-federal-government-lula-aid-crisis-stricken-rs.jpg',
  },
  {
    id: '09ac5b2d-4f90-49b1-ad3f-2bb5242fc8c2',
    title:
      "Privatizing Beaches? What's at Stake in the Controversial PEC Criticized for Opening Doors to 'Beach Privatization' in Brazil",
    description:
      'Uma proposta para privatizar praias no Brasil e suas potenciais implicações.',
    category: 'Política',
    type: NewsType.SECONDARY,
    content:
      'A proposta de privatizar praias no Brasil é controversa e tem sido criticada por muitos. A medida pode abrir as portas para a privatização de praias e a perda de acesso público. Além disso, pode também afetar a economia local, pois as praias são um importante atrativo turístico. No entanto, há argumentos a favor da privatização, como a possibilidade de melhorar a infraestrutura e a gestão das praias.',
    publishDate: '2021-03-25',
    writer: 'João Silva',
    articleImageUrl:
      'https://www.aljazeera.com/mritems/images/2021/03/25/0f1f4f5f-4f5f-4f5f-4f5f-4f5f.jpg',
  },
  {
    id: '16a2a992-3762-4fbe-a5d2-9d00e1172f71',
    title:
      "A Vida Cotidiana de um Prisioneiro Brasileiro Capturado por Nazistas durante a Segunda Guerra Mundial: 'Comíamos Neve para Enganar Nossos Estômagos'",
    description:
      'As experiências de um prisioneiro brasileiro durante a Segunda Guerra Mundial.',
    category: 'História',
    type: NewsType.SECONDARY,
    content:
      'O prisioneiro brasileiro, que foi capturado por nazistas durante a Segunda Guerra Mundial, contou sua história de sobrevivência. Ele disse que foi forçado a trabalhar em um campo de concentração e que foi submetido a condições horríveis. Para sobreviver, ele e outros prisioneiros comiam neve para enganar seus estômagos. A história é um testemunho da crueldade da guerra e da resistência dos prisioneiros.',
    publishDate: '2021-04-01',
    writer: 'Maria Oliveira',
    articleImageUrl:
      'https://www.history.com/.image/t_share/HT_h_brazilian-prisoner-nazi-wwii.jpg',
  },
  {
    id: '29d2eb8d-2272-4b73-8699-4a92816f863c',
    title: "Quem Compete with Brazil for Leadership in the 'Global South'?",
    description: "A competição global pela liderança no 'Sul Global'.",
    category: 'Política Internacional',
    type: NewsType.SECONDARY,
    content:
      "O Brasil é um dos principais países do 'Sul Global', um grupo de países em desenvolvimento que buscam se destacar na cena internacional. No entanto, há outros países que também buscam liderança nessa região, como a Índia e a China. A competição é intensa e envolve questões econômicas, políticas e sociais.",
    publishDate: '2021-04-15',
    writer: 'João Silva',
    articleImageUrl:
      'https://www.aljazeera.com/mritems/images/2021/04/15/0f1f4f5f-4f5f-4f5f-4f5f-4f5f.jpg',
  },
  {
    id: '144bc449-4531-41dd-9ea0-7ee05bee6208',
    title:
      "The Daily Life of a Brazilian Prisoner Captured by Nazis during WWII: 'We Ate Snow to Fool Our Stomachs'",
    description:
      'As experiências de um prisioneiro brasileiro durante a Segunda Guerra Mundial.',
    category: 'História',
    type: NewsType.SECONDARY,
    content:
      'O prisioneiro brasileiro, que foi capturado por nazistas durante a Segunda Guerra Mundial, contou sua história de sobrevivência. Ele disse que foi forçado a trabalhar em um campo de concentração e que foi submetido a condições horríveis. Para sobreviver, ele e outros prisioneiros comiam neve para enganar seus estômagos. A história é um testemunho da crueldade da guerra e da resistência dos prisioneiros.',
    publishDate: '2021-04-20',
    writer: 'Maria Oliveira',
    articleImageUrl:
      'https://www.history.com/.image/t_share/HT_h_brazilian-prisoner-nazi-wwii.jpg',
  },
  {
    id: 'f90d62e1-abd2-47a1-b9e9-e0e3ab691c72',
    title:
      'The Control of Shelters and the Indifference of the PCC: Understanding Their Operations in RS',
    description: 'As operações de abrigos e do PCC no Rio Grande do Sul.',
    category: 'Segurança Pública',
    type: NewsType.SECONDARY,
    content:
      'O PCC é um dos principais grupos criminosos do Brasil, e suas operações no Rio Grande do Sul são muito criticadas. O grupo é acusado de controlar abrigos e de ser responsável por muitos crimes. No entanto, há também críticas à indiferença do governo em relação às operações do PCC.',
    publishDate: '2021-04-25',
    writer: 'João Silva',
    articleImageUrl:
      'https://www.aljazeera.com/mritems/images/2021/04/25/0f1f4f5f-4f5f-4f5f-4f5f-4f5f.jpg',
  },
  {
    id: '0ddf841c-3873-4006-be28-fd3547c89b53',
    title:
      "India: What Lies Behind Narendra Modi's Disappointing Election Performance?",
    description: 'Análise do desempenho eleitoral de Narendra Modi na Índia.',
    category: 'Política Internacional',
    type: NewsType.SECONDARY,
    content:
      'O primeiro-ministro Narendra Modi da Índia sofreu uma derrota eleitoral significativa nas eleições recentes. A derrota é um sinal de que o governo está perdendo popularidade e que os eleitores estão descontentes com a política econômica e social do país. A análise do desempenho eleitoral de Modi é um indicador importante da situação política da Índia.',
    publishDate: '2021-05-01',
    writer: 'Maria Oliveira',
    articleImageUrl:
      'https://www.aljazeera.com/mritems/images/2021/05/01/0f1f4f5f-4f5f-4f5f-4f5f-4f5f.jpg',
  },
  {
    id: 'bdf258d6-42b8-4252-bfe8-3aa66fb2bae',
    title: 'Gaza Ceasefire Plan Turns into a Deadly Game of Survival',
    description:
      'As implicações do plano de cessar-fogo em Gaza para as carreiras políticas de líderes israelenses e do Hamas.',
    category: 'Política Internacional',
    type: NewsType.SECONDARY,
    content:
      'O plano de cessar-fogo em Gaza é um dos mais importantes eventos políticos recentes. O plano foi negociado entre Israel e o Hamas, mas já está causando problemas. A situação é muito tensa e pode levar a uma guerra mais sangrenta. A análise das implicações do plano é crucial para entender a situação política em Gaza.',
    publishDate: '2021-05-15',
    writer: 'João Silva',
    articleImageUrl:
      'https://www.aljazeera.com/mritems/images/2021/05/15/0f1f4f5f-4f5f-4f5f-4f5f-4f5f.jpg',
  },
  {
    id: '236a00cc-be5e-4f53-bb73-cb120fdcfecb',
    title:
      "Lourival Sant'Anna: É curioso Lula dizer que a democracia no México está garantida",
    description:
      'Análise das eleições presidenciais mexicanas e suas implicações para a democracia.',
    category: 'Política Internacional',
    type: NewsType.SECONDARY,
    content:
      'O presidente Lula disse que a democracia no México está garantida, mas a situação é muito complexa. As eleições presidenciais mexicanas são um indicador importante da situação política do país. A análise das eleições é crucial para entender a situação política do México.',
    publishDate: '2021-06-01',
    writer: 'Maria Oliveira',
    articleImageUrl:
      'https://www.aljazeera.com/mritems/images/2021/06/01/0f1f4f5f-4f5f-4f5f-4f5f-4f5f.jpg',
  },
  {
    id: 'a1e6d185-b61b-4d11-a5f2-681e6df79098',
    title:
      'Poder político de nova presidente do México assusta mercado financeiro do país',
    description:
      'O impacto da nova presidente mexicana no mercado financeiro do país.',
    category: 'Economia Internacional',
    type: NewsType.SECONDARY,
    content:
      'A nova presidente do México está causando um impacto significativo no mercado financeiro do país. A presidente é conhecida por suas políticas econômicas conservadoras, o que pode afetar a economia do país. A análise do impacto da presidente no mercado financeiro é crucial para entender a situação econômica do México.',
    publishDate: '2021-06-15',
    writer: 'João Silva',
    articleImageUrl:
      'https://www.aljazeera.com/mritems/images/2021/06/15/0f1f4f5f-4f5f-4f5f-4f5f-4f5f.jpg',
  },
  {
    id: 'a9a4f9e2-e628-4cf5-a5d4-89e019307e57',
    title:
      'Mãe e filhos brasileiros chegaram no Líbano 45 dias antes de bombardeio',
    description:
      'A história de uma família brasileira que chegou no Líbano antes do recente bombardeio.',
    category: 'Internacional',
    type: NewsType.SECONDARY,
    content:
      'A família brasileira, que chegou no Líbano 45 dias antes do recente bombardeio, contou sua história de sobrevivência. Eles disseram que foram forçados a fugir de seu país de origem devido à guerra e que agora estão tentando reconstruir suas vidas no Líbano. A história é um testemunho da crueldade da guerra e da resistência dos refugiados.',
    publishDate: '2021-07-01',
    writer: 'Maria Oliveira',
    articleImageUrl:
      'https://www.aljazeera.com/mritems/images/2021/07/01/0f1f4f5f-4f5f-4f5f-4f5f-4f5f.jpg',
  },
];
