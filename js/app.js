const BUDGET_MAX = 6000;
const RESEARCH_DATE = '29 de junho de 2026';

const INTERNATIONAL = [
  {
    id: 'punta-del-este',
    name: 'Punta del Este',
    country: 'Uruguai',
    summary: 'Praias sofisticadas, gastronomia e clima mais ameno no inverno. Destino premium da região.',
    estimatedCost: { min: 8500, max: 14000 },
    pros: ['Praias e pôr do sol', 'Gastronomia de alto nível', 'Clima mais ameno que serra BR'],
    cons: ['Requer passaporte válido', 'Câmbio e custos em dólar', 'Muito acima do orçamento de R$ 6 mil'],
    transport: 'Carro POA → Chuí → Punta (~700 km) ou ônibus internacional',
    references: {
      official: 'https://www.turismo.gub.uy/',
      instagram: 'https://www.instagram.com/visit_uruguay/',
      youtube: 'https://www.youtube.com/results?search_query=punta+del+este+viagem+casal'
    }
  },
  {
    id: 'bariloche',
    name: 'San Carlos de Bariloche',
    country: 'Argentina',
    summary: 'Suíça argentina: lagos, chocolate e montanhas. Inverno com neve, mas frio intenso para asma.',
    estimatedCost: { min: 9000, max: 16000 },
    pros: ['Paisagens de montanha únicas', 'Chocolatearias e fondue', 'Experiência internacional'],
    cons: ['Requer passaporte', 'Frio seco e altitude — risco para asma', 'Orçamento estoura facilmente', 'Câmbio argentino instável'],
    transport: 'Carro POA → Bariloche (~2.100 km) — viagem longa',
    references: {
      official: 'https://www.bariloche.gov.ar/',
      instagram: 'https://www.instagram.com/turismobariloche/',
      youtube: 'https://www.youtube.com/results?search_query=bariloche+inverno+casal'
    }
  }
];

function buildWorkationItinerary(eveningActivities, weekendActivity, arrivalNote, departureNote) {
  const days = [
    { date: 'Dom, 26/jul', label: 'Chegada', weekend: true, blocks: [
      { type: 'travel', time: 'Manhã–tarde', text: arrivalNote },
      { type: 'tour', time: '18h–20h', text: eveningActivities[0] },
      { type: 'dinner', time: '20h–22h', text: 'Jantar romântico de boas-vindas' }
    ]},
    { date: 'Seg, 27/jul', blocks: [
      { type: 'work', time: '08h–12h', text: 'Trabalho (home office no hotel)' },
      { type: 'work', time: '13h30–18h', text: 'Trabalho + pausas' },
      { type: 'tour', time: '18h–20h', text: eveningActivities[1] },
      { type: 'dinner', time: '20h–22h', text: 'Jantar a dois' }
    ]},
    { date: 'Ter, 28/jul', blocks: [
      { type: 'work', time: '08h–12h', text: 'Trabalho' },
      { type: 'work', time: '13h30–18h', text: 'Trabalho' },
      { type: 'tour', time: '18h–20h', text: eveningActivities[2] },
      { type: 'dinner', time: '20h–22h', text: 'Noite gastronômica' }
    ]},
    { date: 'Qua, 29/jul', blocks: [
      { type: 'work', time: '08h–12h', text: 'Trabalho' },
      { type: 'work', time: '13h30–18h', text: 'Trabalho' },
      { type: 'tour', time: '18h–20h', text: eveningActivities[3] },
      { type: 'dinner', time: '20h–22h', text: 'Jantar especial' }
    ]},
    { date: 'Qui, 30/jul', blocks: [
      { type: 'work', time: '08h–12h', text: 'Trabalho' },
      { type: 'work', time: '13h30–18h', text: 'Trabalho' },
      { type: 'tour', time: '18h–20h', text: eveningActivities[4] },
      { type: 'dinner', time: '20h–22h', text: 'Jantar com música ao vivo (indoor)' }
    ]},
    { date: 'Sex, 31/jul', blocks: [
      { type: 'work', time: '08h–12h', text: 'Trabalho (meio período se quiser)' },
      { type: 'work', time: '13h30–17h', text: 'Encerrar pendências da semana' },
      { type: 'tour', time: '17h–20h', text: eveningActivities[5] },
      { type: 'dinner', time: '20h–22h30', text: 'Jantar romântico de despedida da semana' }
    ]},
    { date: 'Sáb, 1/ago', label: 'Fim de semana', weekend: true, blocks: [
      { type: 'tour', time: '09h–12h', text: 'Manhã livre / café da manhã especial' },
      { type: 'tour', time: '14h–18h', text: weekendActivity },
      { type: 'dinner', time: '19h–22h', text: 'Jantar especial do fim de semana' }
    ]},
    { date: 'Dom, 2/ago', label: 'Retorno', weekend: true, blocks: [
      { type: 'travel', time: 'Manhã', text: departureNote },
      { type: 'travel', time: 'Tarde/noite', text: 'Viagem de retorno a Porto Alegre' }
    ]}
  ];
  return days;
}

const DESTINATIONS = [
  {
    id: 'sao-lourenco',
    name: 'São Lourenço',
    state: 'MG',
    topRank: 1,
    summary: 'Estância hidromineral na Serra da Mantiqueira com clima de montanha, fontes termais e centro charmoso.',
    whyMarjurie: 'Cidade aconchegante com cafés, fontes de água mineral e clima romântico de serra — parecido com Campos do Jordão, mas com custo mais acessível.',
    scores: { romance: 9, winter: 9, asthma: 8, workation: 8, budget: 9, travel: 6, nightlife: 6 },
    transport: {
      car: { distance: 1200, time: '16h', fuel: 1260, toll: 380, total: 1640 },
      bus: { time: '18h', pricePerPerson: 180, total: 720, note: 'Via BH ou Pouso Alegre — consultar Rotas' },
      plane: { time: '4h+conexão', pricePerPerson: 450, total: 900, note: 'Voo POA→Varginha + carro 1h30' }
    },
    costs: {
      economy: { transport: 'car', transportCost: 1640, lodging: 1260, food: 840, activities: 400, total: 4140 },
      balanced: { transport: 'bus', transportCost: 720, lodging: 1750, food: 980, activities: 600, total: 4050 },
      comfort: { transport: 'car', transportCost: 1640, lodging: 2450, food: 1200, activities: 800, total: 6090 }
    },
    recommendedTransport: 'car',
    withinBudget: true,
    hotels: [
      { name: 'Pousada do Ipê', price: 140, wifi: true, note: 'Boa custo-benefício, Wi-Fi' },
      { name: 'Pousada Montanhas do Sol', price: 195, wifi: true, note: 'Nota 9.2, ambiente romântico' },
      { name: 'Hotel Real São Lourenço', price: 144, wifi: true, note: 'Centro, prático para workation' }
    ],
    packages: ['Circuito das Águas MG', 'Ingresso Teleférico + Parque das Águas combo'],
    alerts: ['Frio à noite (5–12°C) — levar casaco', 'Umidade moderada — ok para asma com cuidado', 'Alta temporada julho — reservar cedo'],
    references: {
      official: 'https://www.saolourenco.mg.gov.br/turismo',
      instagram: 'https://www.instagram.com/explore/tags/saolourenco/',
      youtube: [
        { title: 'São Lourenço MG — guia completo', url: 'https://www.youtube.com/watch?v=Kj8xVqGqGqE' },
        { title: 'Circuito das Águas', url: 'https://www.youtube.com/results?search_query=sao+lourenco+mg+viagem+casal' }
      ],
      maps: 'https://maps.google.com/?q=São+Lourenço,MG'
    },
    eveningActivities: [
      'Check-in e passeio pelo centro histórico iluminado',
      'Parque das Águas (área coberta) ao entardecer',
      'Fontes de água mineral — Parque das Águas',
      'Teleférico ao pôr do sol (cabine fechada)',
      'Centro gastronômico — fondue ou fondue de chocolate',
      'Café colonial em ambiente aquecido'
    ],
    weekendActivity: 'Manhã no Parque das Águas + tarde em spa/termas indoor (Águas de São Lourenço)',
    arrivalNote: 'Viagem POA → São Lourenço de carro (~16h) — sair 26/jul cedo ou chegar 25/jul à noite',
    departureNote: 'Check-out e retorno a POA (~16h de viagem)'
  },
  {
    id: 'curitiba-morretes',
    name: 'Curitiba + Morretes',
    state: 'PR',
    topRank: 2,
    summary: 'Capital cultural com museus, gastronomia e o clássico passeio de trem à Serra do Mar.',
    whyMarjurie: 'Combina cidade moderna com o romantismo do trem histórico e barreado de Morretes — muita programação indoor.',
    scores: { romance: 7, winter: 7, asthma: 9, workation: 9, budget: 9, travel: 9, nightlife: 7 },
    transport: {
      car: { distance: 710, time: '9h', fuel: 750, toll: 320, total: 1070 },
      bus: { time: '10h', pricePerPerson: 160, total: 640, note: 'ClickBus / FlixBus a partir de R$ 94' },
      plane: { time: '1h15', pricePerPerson: 350, total: 700, note: 'Voos POA→CWB diretos' }
    },
    costs: {
      economy: { transport: 'bus', transportCost: 640, lodging: 1400, food: 800, activities: 500, total: 3340 },
      balanced: { transport: 'car', transportCost: 1070, lodging: 1750, food: 900, activities: 650, total: 4370 },
      comfort: { transport: 'plane', transportCost: 900, lodging: 2100, food: 1100, activities: 800, total: 5900 }
    },
    recommendedTransport: 'bus',
    withinBudget: true,
    hotels: [
      { name: 'Hotel Slaviero Curitiba', price: 180, wifi: true, note: 'Centro, mesa de trabalho' },
      { name: 'Pestana Curitiba', price: 280, wifi: true, note: 'Conforto e Wi-Fi premium' },
      { name: 'Radisson Curitiba', price: 220, wifi: true, note: 'Bairro Batel, cafés próximos' }
    ],
    packages: ['Trem Curitiba–Morretes + almoço barreado', 'City Tour Turismo Curitiba'],
    alerts: ['Frio e chuva frequente em julho', 'Ar urbano limpo — bom para asma', 'Trem: reservar com antecedência'],
    references: {
      official: 'https://www.visitcuritiba.com/',
      instagram: 'https://www.instagram.com/visitcuritiba/',
      youtube: [
        { title: 'Trem Curitiba Morretes', url: 'https://www.youtube.com/watch?v=0rGFvzvQnKk' },
        { title: 'Curitiba em 3 dias', url: 'https://www.youtube.com/results?search_query=curitiba+morretes+casal' }
      ],
      maps: 'https://maps.google.com/?q=Curitiba,PR'
    },
    eveningActivities: [
      'Check-in e jantar no Batel ou Água Verde',
      'Ópera de Arame iluminada (visita externa + café)',
      'Rua das Flores e Largo da Ordem à noite',
      'Jardim Botânico — estufa iluminada',
      'Torre Panorâmica ao entardecer',
      'Mercado Municipal — gastronomia'
    ],
    weekendActivity: 'Trem histórico Curitiba → Morretes (manhã) + barreado tradicional + retorno à tarde',
    arrivalNote: 'Ônibus POA → Curitiba (~10h) ou carro (~9h) — chegada à tarde',
    departureNote: 'Check-out e retorno a POA'
  },
  {
    id: 'pocos-de-caldas',
    name: 'Poços de Caldas',
    state: 'MG',
    topRank: 3,
    summary: 'Cidade elegante de arquitetura europeia, fontes termais e clima de serra na divisa MG/SP.',
    whyMarjurie: 'Arquitetura charmosa, fontes iluminadas à noite e clima romântico — muito fotogênico e aconchegante.',
    scores: { romance: 9, winter: 8, asthma: 8, workation: 8, budget: 8, travel: 6, nightlife: 6 },
    transport: {
      car: { distance: 1250, time: '17h', fuel: 1320, toll: 400, total: 1720 },
      bus: { time: '19h', pricePerPerson: 190, total: 760, note: 'Via Campinas ou BH' },
      plane: { time: '5h+', pricePerPerson: 500, total: 1000, note: 'POA→Campinas + carro 2h' }
    },
    costs: {
      economy: { transport: 'bus', transportCost: 760, lodging: 1330, food: 840, activities: 450, total: 3380 },
      balanced: { transport: 'car', transportCost: 1720, lodging: 1750, food: 980, activities: 600, total: 5050 },
      comfort: { transport: 'car', transportCost: 1720, lodging: 2450, food: 1200, activities: 750, total: 6120 }
    },
    recommendedTransport: 'bus',
    withinBudget: true,
    hotels: [
      { name: 'Hotel Metrópole', price: 190, wifi: true, note: 'Centro histórico' },
      { name: 'Pousada Poços de Caldas', price: 165, wifi: true, note: 'Ambiente familiar' },
      { name: 'Thermas All Inclusive', price: 350, wifi: true, note: 'Termas no hotel — ideal casal' }
    ],
    packages: ['Ingresso Thermas de Poços', 'City tour noturno fontes iluminadas'],
    alerts: ['Altitude ~1.200m — frio seco possível', 'Levar remédio para asma', 'Julho: Festival de Inverno'],
    references: {
      official: 'https://www.pocosdecaldas.mg.gov.br/turismo',
      instagram: 'https://www.instagram.com/explore/tags/pocosdecaldas/',
      youtube: [
        { title: 'Poços de Caldas guia', url: 'https://www.youtube.com/results?search_query=poços+de+caldas+viagem+casal' }
      ],
      maps: 'https://maps.google.com/?q=Poços+de+Caldas,MG'
    },
    eveningActivities: [
      'Check-in e passeio pelas fontes iluminadas do centro',
      'Christ the Redeemer local (Cristo) — vista noturna',
      'Fonte dos Amores ao entardecer',
      'Rua de restaurantes — jantar romântico',
      'Casarão do Café — degustação',
      'Lagoa Negó — volta ao redor (curta, se tempo permitir)'
    ],
    weekendActivity: 'Thermas de Poços (dia inteiro indoor) + spa para casal',
    arrivalNote: 'Viagem de ônibus ou carro — considerar pernoite na ida',
    departureNote: 'Retorno a POA'
  },
  {
    id: 'monte-verde',
    name: 'Monte Verde',
    state: 'MG',
    topRank: null,
    summary: 'Vila europeia na mantiqueira com clima frio, gastronomia e clima intimista de casal.',
    whyMarjurie: 'Parece Campos do Jordão em miniatura — fondue, clima de montanha e pousadas aconchegantes.',
    scores: { romance: 10, winter: 10, asthma: 6, workation: 6, budget: 5, travel: 5, nightlife: 5 },
    transport: {
      car: { distance: 1280, time: '17h', fuel: 1350, toll: 400, total: 1750 },
      bus: { time: '20h', pricePerPerson: 200, total: 800, note: 'POA→Extrema + táxi 30km' },
      plane: { time: '5h+', pricePerPerson: 480, total: 960, note: 'POA→Confins + carro 3h' }
    },
    costs: {
      economy: { transport: 'car', transportCost: 1750, lodging: 1750, food: 980, activities: 500, total: 4980 },
      balanced: { transport: 'car', transportCost: 1750, lodging: 2450, food: 1100, activities: 700, total: 6000 },
      comfort: { transport: 'car', transportCost: 1750, lodging: 3500, food: 1400, activities: 900, total: 7550 }
    },
    recommendedTransport: 'car',
    withinBudget: true,
    hotels: [
      { name: 'Pousada Villa Donn\'Anna', price: 250, wifi: true, note: 'Romântica, lareira' },
      { name: 'Chalé Monte Verde', price: 200, wifi: true, note: 'Estilo cabana' },
      { name: 'Pousada Suisse', price: 280, wifi: true, note: 'Temática suíça' }
    ],
    packages: ['City tour gastronômico Monte Verde'],
    alerts: ['Alta temporada julho — preços altos', 'Frio intenso e seco — cuidado com asma', 'Wi-Fi variável em pousadas — confirmar antes'],
    references: {
      official: 'https://www.monteverde.com.br/',
      instagram: 'https://www.instagram.com/explore/tags/monteverdemg/',
      youtube: [
        { title: 'Monte Verde MG inverno', url: 'https://www.youtube.com/results?search_query=monte+verde+mg+inverno+casal' }
      ],
      maps: 'https://maps.google.com/?q=Monte+Verde,MG'
    },
    eveningActivities: [
      'Check-in e fondue de boas-vindas',
      'Rua do Lago — lojas e chocolate',
      'Fondue restaurante suíço',
      'Taberna medieval (ambiente indoor)',
      'Café com lareira',
      'Noite de vinhos em wine bar'
    ],
    weekendActivity: 'Manhã em café colonial + tarde em spa/chocolate factory tour',
    arrivalNote: 'Carro recomendado — estrada serrana na chegada',
    departureNote: 'Retorno cedo por estrada'
  },
  {
    id: 'foz-do-iguacu',
    name: 'Foz do Iguaçu',
    state: 'PR',
    topRank: null,
    summary: 'Cataratas, Itaipu e experiências de natureza com boa infraestrutura hoteleira.',
    whyMarjurie: 'Passeio das Cataratas é inesquecível; muitos hotéis com spa e programação indoor à noite.',
    scores: { romance: 7, winter: 8, asthma: 7, workation: 8, budget: 7, travel: 9, nightlife: 6 },
    transport: {
      car: { distance: 700, time: '9h', fuel: 740, toll: 280, total: 1020 },
      bus: { time: '10h', pricePerPerson: 150, total: 600, note: 'Várias viações diárias' },
      plane: { time: '1h10', pricePerPerson: 550, total: 1100, note: 'Gol direto jul/2026 — alta temporada' }
    },
    costs: {
      economy: { transport: 'bus', transportCost: 600, lodging: 1260, food: 800, activities: 900, total: 3560 },
      balanced: { transport: 'car', transportCost: 1020, lodging: 1750, food: 900, activities: 1100, total: 4770 },
      comfort: { transport: 'plane', transportCost: 1300, lodging: 2100, food: 1100, activities: 1400, total: 5900 }
    },
    recommendedTransport: 'car',
    withinBudget: true,
    hotels: [
      { name: 'Hotel Belmond das Cataratas', price: 450, wifi: true, note: 'Dentro do parque — luxo' },
      { name: 'San Juan Tour', price: 180, wifi: true, note: 'Bom custo-benefício' },
      { name: 'Viale Cataratas', price: 220, wifi: true, note: 'Piscina aquecida' }
    ],
    packages: ['Ingresso Cataratas BR + Macuco Safari', 'Visita Itaipu Iluminada'],
    alerts: ['Umidade alta nas Cataratas — levar capa e inalador', 'Evitar trilha longa — preferir ônibus do parque', 'Sol forte mesmo no inverno'],
    references: {
      official: 'https://www.destino.foz.br/',
      instagram: 'https://www.instagram.com/fozdoiguacu/',
      youtube: [
        { title: 'Cataratas do Iguaçu', url: 'https://www.youtube.com/watch?v=9xcbLxdhFqs' },
        { title: 'Foz casal', url: 'https://www.youtube.com/results?search_query=foz+do+iguaçu+casal' }
      ],
      maps: 'https://maps.google.com/?q=Foz+do+Iguaçu,PR'
    },
    eveningActivities: [
      'Check-in e jantar no centro',
      'Marco das 3 Fronteiras show noturno',
      'Cassino iguazu (entretenimento indoor)',
      'Itaipu Iluminada (tour noturno)',
      'Restaurante com vista',
      'Compras no Paraguai (curta — duty free)'
    ],
    weekendActivity: 'Cataratas do Iguaçu (manhã cedo, ônibus do parque) + Bird Park à tarde',
    arrivalNote: 'Carro ou avião Gol direto (seg/sex jul/2026)',
    departureNote: 'Retorno POA'
  },
  {
    id: 'campos-do-jordao',
    name: 'Campos do Jordão',
    state: 'SP',
    topRank: null,
    summary: 'A "Suíça brasileira" — referência máxima em romantismo de inverno, porém cara em julho.',
    whyMarjurie: 'O destino dos sonhos para clima de montanha, fondue e arquitetura europeia — se couber no bolso.',
    scores: { romance: 10, winter: 10, asthma: 5, workation: 6, budget: 3, travel: 5, nightlife: 7 },
    transport: {
      car: { distance: 1315, time: '17h', fuel: 1380, toll: 450, total: 1830 },
      bus: { time: '20h', pricePerPerson: 220, total: 880, note: 'Via São Paulo' },
      plane: { time: '4h+', pricePerPerson: 550, total: 1100, note: 'POA→GRU + carro 2h30' }
    },
    costs: {
      economy: { transport: 'bus', transportCost: 880, lodging: 2100, food: 1100, activities: 600, total: 4680 },
      balanced: { transport: 'car', transportCost: 1830, lodging: 2800, food: 1200, activities: 800, total: 6630 },
      comfort: { transport: 'car', transportCost: 1830, lodging: 4200, food: 1500, activities: 1000, total: 8530 }
    },
    recommendedTransport: 'bus',
    withinBudget: false,
    hotels: [
      { name: 'Hotel Aspen', price: 300, wifi: true, note: 'Capivari — centro' },
      { name: 'Pousada Kaliman', price: 250, wifi: true, note: 'Tradicional' },
      { name: 'Botanique Hotel', price: 500, wifi: true, note: 'Boutique premium' }
    ],
    packages: ['Festival de Inverno (julho)', 'City tour Capivari'],
    alerts: ['ESTOURO DE ORÇAMENTO provável em julho', 'Frio seco intenso — risco para asma', 'Alta temporada — reserve com 60+ dias'],
    references: {
      official: 'https://www.camposdojordao.sp.gov.br/turismo',
      instagram: 'https://www.instagram.com/explore/tags/camposdojordao/',
      youtube: [
        { title: 'Campos do Jordão inverno', url: 'https://www.youtube.com/results?search_query=campos+do+jordão+inverno+casal' }
      ],
      maps: 'https://maps.google.com/?q=Campos+do+Jordão,SP'
    },
    eveningActivities: [
      'Check-in Capivari e fondue',
      'Vila Capivari — compras e chocolate',
      'Baden Baden cervejaria',
      'Fondue suíço',
      'Empório de café',
      'Palácio Boa Vista (se aberto)'
    ],
    weekendActivity: 'Teleférico + Ducha de Prata (evitar se asma ativa) ou spa no hotel',
    arrivalNote: 'Viagem longa — sair 25/jul ou 26 bem cedo',
    departureNote: 'Retorno — evitar estrada à noite na serra'
  },
  {
    id: 'ouro-preto-mariana',
    name: 'Ouro Preto + Mariana',
    state: 'MG',
    topRank: null,
    summary: 'Cidades históricas barrocas, museus e ladeiras — cultura e romantismo colonial.',
    whyMarjurie: 'Ruas de pedra, igrejas douradas e clima de viagem no tempo — muito romântico à noite.',
    scores: { romance: 9, winter: 7, asthma: 7, workation: 7, budget: 7, travel: 5, nightlife: 6 },
    transport: {
      car: { distance: 1350, time: '18h', fuel: 1420, toll: 420, total: 1840 },
      bus: { time: '20h', pricePerPerson: 210, total: 840, note: 'POA→BH + ônibus 2h' },
      plane: { time: '4h+', pricePerPerson: 480, total: 960, note: 'POA→CNF + carro 1h30' }
    },
    costs: {
      economy: { transport: 'bus', transportCost: 840, lodging: 1260, food: 800, activities: 400, total: 3300 },
      balanced: { transport: 'plane', transportCost: 1100, lodging: 1750, food: 900, activities: 550, total: 4300 },
      comfort: { transport: 'car', transportCost: 1840, lodging: 2450, food: 1100, activities: 700, total: 6090 }
    },
    recommendedTransport: 'plane',
    withinBudget: true,
    hotels: [
      { name: 'Pousada Minas Gerais', price: 180, wifi: true, note: 'Centro Ouro Preto' },
      { name: 'Hotel Solar do Rosário', price: 220, wifi: true, note: 'Vista para igrejas' },
      { name: 'Pousada Mariana', price: 160, wifi: true, note: 'Mariana — mais tranquilo' }
    ],
    packages: ['Circuito igrejas Ouro Preto', 'Mina da Passagem Mariana'],
    alerts: ['Ladeiras — caminhadas curtas apenas', 'Altitude e frio à noite', 'Wi-Fi ok na maioria das pousadas'],
    references: {
      official: 'https://www.ouropreto.com.br/',
      instagram: 'https://www.instagram.com/explore/tags/ouropreto/',
      youtube: [
        { title: 'Ouro Preto guia', url: 'https://www.youtube.com/results?search_query=ouro+preto+casal+viagem' }
      ],
      maps: 'https://maps.google.com/?q=Ouro+Preto,MG'
    },
    eveningActivities: [
      'Check-in e jantar em Ouro Preto',
      'Praça Tiradentes iluminada',
      'Museu da Inconfidência (se horário estender)',
      'Igreja São Francisco de Assis ao entardecer',
      'Mariana — Catedral da Sé',
      'Jantar com música colonial'
    ],
    weekendActivity: 'Mina da Passagem (Mariana) — tour indoor + museu',
    arrivalNote: 'Avião POA→Confins + transfer',
    departureNote: 'Retorno'
  },
  {
    id: 'tiradentes-sjdrei',
    name: 'Tiradentes + São João del Rei',
    state: 'MG',
    topRank: null,
    summary: 'Vila histórica charmosa com Maria Fumaça, gastronomia mineira e clima intimista.',
    whyMarjurie: 'Tiradentes é um dos destinos mais românticos de MG — rua de pedra, lamparinas e restaurantes aconchegantes.',
    scores: { romance: 10, winter: 8, asthma: 7, workation: 6, budget: 7, travel: 5, nightlife: 5 },
    transport: {
      car: { distance: 1320, time: '18h', fuel: 1390, toll: 410, total: 1800 },
      bus: { time: '20h', pricePerPerson: 205, total: 820, note: 'POA→BH + conexão' },
      plane: { time: '4h+', pricePerPerson: 480, total: 960, note: 'POA→CNF + carro 2h' }
    },
    costs: {
      economy: { transport: 'bus', transportCost: 820, lodging: 1540, food: 850, activities: 500, total: 3710 },
      balanced: { transport: 'plane', transportCost: 1100, lodging: 1960, food: 950, activities: 650, total: 4660 },
      comfort: { transport: 'car', transportCost: 1800, lodging: 2800, food: 1100, activities: 800, total: 6500 }
    },
    recommendedTransport: 'plane',
    withinBudget: true,
    hotels: [
      { name: 'Pousada dos Inconfidentes', price: 220, wifi: true, note: 'Centro Tiradentes' },
      { name: 'Solar da Ponte', price: 280, wifi: true, note: 'Premium romântico' },
      { name: 'Pousada São João', price: 180, wifi: true, note: 'São João del Rei' }
    ],
    packages: ['Maria Fumaça São João–Tiradentes', 'Festival de Cultura (se época)'],
    alerts: ['Wi-Fi pode ser instável — confirmar com pousada', 'Frio à noite', 'Maria Fumaça — reservar antes'],
    references: {
      official: 'https://www.tiradentes.mg.gov.br/turismo',
      instagram: 'https://www.instagram.com/explore/tags/tiradentes/',
      youtube: [
        { title: 'Tiradentes MG', url: 'https://www.youtube.com/results?search_query=tiradentes+mg+casal' }
      ],
      maps: 'https://maps.google.com/?q=Tiradentes,MG'
    },
    eveningActivities: [
      'Check-in e jantar em Tiradentes',
      'Rua do Largo das Forras à noite',
      'Degustação de cachaça artesanal',
      'Restaurante com fogão a lenha',
      'São João del Rei — centro histórico',
      'Sobremesa na praça'
    ],
    weekendActivity: 'Maria Fumaça (manhã) + almoço em Tiradentes + tarde livre',
    arrivalNote: 'Voo POA→Confins + carro alugado ou transfer',
    departureNote: 'Retorno'
  },
  {
    id: 'aguas-de-lindoia',
    name: 'Águas de Lindóia',
    state: 'SP',
    topRank: null,
    summary: 'Estância hidromineral no Circuito das Águas paulista, mais perto que Campos do Jordão.',
    whyMarjurie: 'Clima de spa, parque das águas e tranquilidade — bom para descansar a dois.',
    scores: { romance: 7, winter: 7, asthma: 8, workation: 7, budget: 8, travel: 7, nightlife: 4 },
    transport: {
      car: { distance: 1100, time: '15h', fuel: 1160, toll: 380, total: 1540 },
      bus: { time: '17h', pricePerPerson: 175, total: 700, note: 'Via Campinas' },
      plane: { time: '4h+', pricePerPerson: 500, total: 1000, note: 'POA→VCP + carro 1h' }
    },
    costs: {
      economy: { transport: 'bus', transportCost: 700, lodging: 1190, food: 750, activities: 350, total: 2990 },
      balanced: { transport: 'car', transportCost: 1540, lodging: 1540, food: 850, activities: 450, total: 4380 },
      comfort: { transport: 'car', transportCost: 1540, lodging: 2100, food: 1000, activities: 600, total: 5240 }
    },
    recommendedTransport: 'car',
    withinBudget: true,
    hotels: [
      { name: 'Hotel Lindóia', price: 170, wifi: true, note: 'Centro' },
      { name: 'Pousada das Águas', price: 150, wifi: true, note: 'Econômica' },
      { name: 'Thermas Resort', price: 320, wifi: true, note: 'All inclusive termas' }
    ],
    packages: ['Parque das Águas ingresso', 'Circuito Águas Paulista'],
    alerts: ['Cidade pequena — programação noturna limitada', 'Bom para relaxar', 'Umidade moderada'],
    references: {
      official: 'https://www.aguasdelindoia.sp.gov.br/',
      instagram: 'https://www.instagram.com/explore/tags/aguasdelindoia/',
      youtube: [
        { title: 'Águas de Lindóia', url: 'https://www.youtube.com/results?search_query=águas+de+lindóia+viagem' }
      ],
      maps: 'https://maps.google.com/?q=Águas+de+Lindóia,SP'
    },
    eveningActivities: [
      'Check-in e jantar leve',
      'Parque das Águas (área coberta)',
      'Fontes iluminadas',
      'Café da região',
      'Descanso no hotel — spa',
      'Jantar tranquilo'
    ],
    weekendActivity: 'Termas e parque aquático indoor (Thermas)',
    arrivalNote: 'Carro ou ônibus via Campinas',
    departureNote: 'Retorno POA'
  },
  {
    id: 'caldas-novas',
    name: 'Caldas Novas',
    state: 'GO',
    topRank: null,
    summary: 'Maior complexo hidrotermal do mundo — parques aquáticos aquecidos, ideal para inverno.',
    whyMarjurie: 'Água quentinha no inverno, parques cobertos e clima de resort — diversão sem esforço físico.',
    scores: { romance: 6, winter: 9, asthma: 9, workation: 7, budget: 6, travel: 4, nightlife: 5 },
    transport: {
      car: { distance: 1580, time: '20h', fuel: 1660, toll: 350, total: 2010 },
      bus: { time: '22h', pricePerPerson: 250, total: 1000, note: 'Viagem longa — 2 pernoites na estrada' },
      plane: { time: '3h+', pricePerPerson: 600, total: 1200, note: 'POA→GYN direto ou conexão' }
    },
    costs: {
      economy: { transport: 'plane', transportCost: 1400, lodging: 1400, food: 800, activities: 900, total: 4500 },
      balanced: { transport: 'plane', transportCost: 1400, lodging: 1960, food: 900, activities: 1100, total: 5360 },
      comfort: { transport: 'plane', transportCost: 1600, lodging: 2800, food: 1100, activities: 1400, total: 6900 }
    },
    recommendedTransport: 'plane',
    withinBudget: true,
    hotels: [
      { name: 'Rio Quente Resorts', price: 280, wifi: true, note: 'All inclusive parques' },
      { name: 'Piazza DiRoma', price: 220, wifi: true, note: 'Acesso a parques' },
      { name: 'Lagoa Quente Hotel', price: 180, wifi: true, note: 'Econômico' }
    ],
    packages: ['Ingresso Hot Park / diária parque', 'Combo Rio Quente'],
    alerts: ['Viagem de carro muito longa', 'Umidade alta nos parques — asma ok com cuidado', 'Resort pode ser barulhento — escolher hotel workation'],
    references: {
      official: 'https://www.caldasnovas.go.gov.br/turismo',
      instagram: 'https://www.instagram.com/explore/tags/caldasnovas/',
      youtube: [
        { title: 'Caldas Novas parques', url: 'https://www.youtube.com/results?search_query=caldas+novas+inverno' }
      ],
      maps: 'https://maps.google.com/?q=Caldas+Novas,GO'
    },
    eveningActivities: [
      'Check-in e jantar no hotel',
      'Parque aquático noturno (se disponível)',
      'Jantar no resort',
      'Spa e massagem para casal',
      'Descanso — preparar dia no parque',
      'Jantar temático do resort'
    ],
    weekendActivity: 'Dia inteiro no Hot Park ou Rio Quente (piscinas aquecidas)',
    arrivalNote: 'Voo POA→Goiânia + carro 2h30',
    departureNote: 'Retorno'
  }
];

// Build itineraries for each destination
DESTINATIONS.forEach(dest => {
  dest.itinerary = buildWorkationItinerary(
    dest.eveningActivities,
    dest.weekendActivity,
    dest.arrivalNote,
    dest.departureNote
  );
  dest.overallScore = Math.round(
    (dest.scores.romance * 2 + dest.scores.winter * 2 + dest.scores.asthma * 2 +
     dest.scores.workation * 2 + dest.scores.budget * 2 + dest.scores.travel + dest.scores.nightlife) / 13
  );
  delete dest.eveningActivities;
  delete dest.weekendActivity;
  delete dest.arrivalNote;
  delete dest.departureNote;
});

// --- State ---
let compareSelection = [];
let favorites = JSON.parse(localStorage.getItem('viagem-favorites') || '[]');
let activeFilters = {
  budget: 'all',
  transport: 'all',
  romance: 0,
  asthma: 0
};

// --- DOM refs (set on init) ---
let els = {};

function $(id) { return document.getElementById(id); }

function formatMoney(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
}

function getRecommendedCost(dest) {
  const tier = dest.withinBudget ? 'balanced' : 'economy';
  return dest.costs[tier];
}

function filterDestinations() {
  return DESTINATIONS.filter(dest => {
    const cost = getRecommendedCost(dest);
    if (activeFilters.budget === 'within' && cost.total > BUDGET_MAX) return false;
    if (activeFilters.budget === 'tight' && cost.total > 5000) return false;
    if (activeFilters.transport !== 'all' && dest.recommendedTransport !== activeFilters.transport) return false;
    if (activeFilters.romance > 0 && dest.scores.romance < activeFilters.romance) return false;
    if (activeFilters.asthma > 0 && dest.scores.asthma < activeFilters.asthma) return false;
    return true;
  });
}

function renderTop3() {
  const top = DESTINATIONS.filter(d => d.topRank).sort((a, b) => a.topRank - b.topRank);
  els.top3Grid.innerHTML = top.map(d => {
    const cost = getRecommendedCost(d);
    return `
      <article class="top3-card" data-rank="#${d.topRank}">
        <h3>${d.name} — ${d.state}</h3>
        <div class="score">Nota geral: ${d.overallScore}/10</div>
        <p>${d.whyMarjurie}</p>
        <p><strong>Custo estimado:</strong> ${formatMoney(cost.total)} (${cost.transport})</p>
        <button class="btn btn-primary" style="margin-top:0.75rem" data-action="detail" data-id="${d.id}">Ver roteiro completo</button>
      </article>
    `;
  }).join('');
}

function renderCostBars(dest) {
  const tiers = ['economy', 'balanced', 'comfort'];
  const maxCost = BUDGET_MAX * 1.2;
  return tiers.map(tier => {
    const c = dest.costs[tier];
    const pct = Math.min(100, (c.total / maxCost) * 100);
    const overClass = c.total > BUDGET_MAX ? ' style="opacity:0.85"' : '';
    return `
      <div class="cost-bar-row">
        <span>${tier === 'economy' ? 'Econ.' : tier === 'balanced' ? 'Equil.' : 'Confort.'}</span>
        <div class="cost-bar-track">
          <div class="cost-bar-fill ${c.transport}" style="width:${pct}%"${overClass}></div>
        </div>
        <span>${formatMoney(c.total)}</span>
      </div>
    `;
  }).join('');
}

function renderScoreBars(scores) {
  const labels = { romance: 'Romance', winter: 'Inverno', asthma: 'Asma', workation: 'Workation', budget: 'Orçamento' };
  return Object.entries(labels).map(([key, label]) => `
    <div class="score-row">
      <span>${label}</span>
      <div class="score-bar"><div class="score-fill" style="width:${scores[key] * 10}%"></div></div>
      <span>${scores[key]}</span>
    </div>
  `).join('');
}

function renderCard(dest) {
  const cost = getRecommendedCost(dest);
  const isFav = favorites.includes(dest.id);
  const isCompare = compareSelection.includes(dest.id);
  const budgetBadge = dest.withinBudget && cost.total <= BUDGET_MAX
    ? '<span class="badge badge-budget-ok">Dentro do orçamento</span>'
    : cost.total <= BUDGET_MAX
      ? '<span class="badge badge-budget-warn">Apertado</span>'
      : '<span class="badge badge-budget-over">Acima de R$ 6 mil</span>';

  return `
    <article class="dest-card ${isCompare ? 'selected-compare' : ''}" data-id="${dest.id}">
      <div class="dest-card-header">
        <h3>${dest.name}</h3>
        <span class="state">${dest.state} · Nota ${dest.overallScore}/10</span>
      </div>
      <div class="dest-card-body">
        <p class="dest-summary">${dest.summary}</p>
        <div class="badges">
          <span class="badge badge-workation">Workation</span>
          <span class="badge badge-indoor">Indoor+</span>
          ${budgetBadge}
          ${dest.topRank ? `<span class="badge badge-top">Top ${dest.topRank}</span>` : ''}
        </div>
        <div class="score-bars">${renderScoreBars(dest.scores)}</div>
        <div class="cost-highlight">
          <span>Custo recomendado</span>
          <strong>${formatMoney(cost.total)}</strong>
        </div>
        <div class="cost-chart">${renderCostBars(dest)}</div>
        <div class="dest-card-actions">
          <button class="btn btn-primary" data-action="detail" data-id="${dest.id}">Roteiro</button>
          <button class="btn btn-outline ${isCompare ? 'active' : ''}" data-action="compare" data-id="${dest.id}">Comparar</button>
          <button class="btn btn-secondary btn-fav ${isFav ? 'active' : ''}" data-action="fav" data-id="${dest.id}" title="Favorito">${isFav ? '♥' : '♡'}</button>
        </div>
      </div>
    </article>
  `;
}

function renderGrid() {
  const filtered = filterDestinations();
  if (filtered.length === 0) {
    els.destGrid.innerHTML = '<div class="empty-state">Nenhum destino corresponde aos filtros. Tente relaxar os critérios.</div>';
    return;
  }
  els.destGrid.innerHTML = filtered.map(renderCard).join('');
}

function renderFavoritesBar() {
  if (favorites.length === 0) {
    els.favoritesBar.classList.remove('visible');
    return;
  }
  const names = favorites.map(id => DESTINATIONS.find(d => d.id === id)?.name).filter(Boolean);
  els.favoritesBar.classList.add('visible');
  els.favoritesBar.innerHTML = `<strong>Favoritos:</strong> ${names.join(' · ')} <button class="btn btn-secondary" style="margin-left:1rem;font-size:0.8rem" data-action="clear-fav">Limpar</button>`;
}

function openModal(destId) {
  const dest = DESTINATIONS.find(d => d.id === destId);
  if (!dest) return;

  const cost = getRecommendedCost(dest);
  const timelineHtml = dest.itinerary.map(day => `
    <div class="timeline-day ${day.weekend ? 'weekend' : ''}">
      <div class="timeline-date">${day.date}${day.label ? ` — ${day.label}` : ''}</div>
      <div class="timeline-blocks">
        ${day.blocks.map(b => `
          <div class="timeline-block ${b.type}">
            <div class="block-type">${b.type === 'work' ? '💼 Trabalho' : b.type === 'tour' ? '🌙 Passeio' : b.type === 'dinner' ? '🍷 Jantar' : '🚗 Viagem'} · ${b.time}</div>
            ${b.text}
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  const transportHtml = `
    <table class="data-table">
      <thead><tr><th>Modalidade</th><th>Tempo</th><th>Custo (casal)</th><th>Obs.</th></tr></thead>
      <tbody>
        <tr><td>🚗 Carro</td><td>${dest.transport.car.time} ida</td><td>${formatMoney(dest.transport.car.total)}</td><td>${dest.transport.car.distance} km · combustível ${formatMoney(dest.transport.car.fuel)} + pedágio ${formatMoney(dest.transport.car.toll)}</td></tr>
        <tr><td>🚌 Ônibus</td><td>${dest.transport.bus.time}</td><td>${formatMoney(dest.transport.bus.total)}</td><td>${dest.transport.bus.note || ''}</td></tr>
        <tr><td>✈️ Avião</td><td>${dest.transport.plane.time}</td><td>${formatMoney(dest.transport.plane.total)}</td><td>${dest.transport.plane.note || ''}</td></tr>
      </tbody>
    </table>
  `;

  const hotelsHtml = `
    <table class="data-table">
      <thead><tr><th>Hotel/Pousada</th><th>Diária</th><th>Wi-Fi</th><th>Nota</th></tr></thead>
      <tbody>
        ${dest.hotels.map(h => `<tr><td>${h.name}</td><td>${formatMoney(h.price)}/noite</td><td>${h.wifi ? '✓' : '—'}</td><td>${h.note}</td></tr>`).join('')}
      </tbody>
    </table>
  `;

  const costsHtml = `
    <table class="data-table">
      <thead><tr><th>Cenário</th><th>Transporte</th><th>Hospedagem</th><th>Alimentação</th><th>Passeios</th><th>Total</th></tr></thead>
      <tbody>
        ${['economy', 'balanced', 'comfort'].map(t => {
          const c = dest.costs[t];
          const label = t === 'economy' ? 'Econômico' : t === 'balanced' ? 'Equilibrado' : 'Confortável';
          const rowClass = c.total > BUDGET_MAX ? ' style="color:var(--color-danger)"' : '';
          return `<tr${rowClass}><td>${label}</td><td>${formatMoney(c.transportCost)} (${c.transport})</td><td>${formatMoney(c.lodging)}</td><td>${formatMoney(c.food)}</td><td>${formatMoney(c.activities)}</td><td><strong>${formatMoney(c.total)}</strong></td></tr>`;
        }).join('')}
      </tbody>
    </table>
  `;

  const ytLinks = (dest.references.youtube || []).map(y =>
    typeof y === 'string'
      ? `<a class="link-item" href="${y}" target="_blank" rel="noopener"><span class="icon">▶</span> YouTube</a>`
      : `<a class="link-item" href="${y.url}" target="_blank" rel="noopener"><span class="icon">▶</span> ${y.title}</a>`
  ).join('');

  els.modalBody.innerHTML = `
    <p style="margin-bottom:1rem;color:var(--color-text-muted)"><em>${dest.whyMarjurie}</em></p>
    <div class="modal-section">
      <h3>Roteiro dia a dia (26/jul – 2/ago)</h3>
      <div class="timeline">${timelineHtml}</div>
    </div>
    <div class="modal-section">
      <h3>Transporte: carro vs ônibus vs avião</h3>
      ${transportHtml}
    </div>
    <div class="modal-section">
      <h3>Estimativa de custos (casal, 7 noites)</h3>
      ${costsHtml}
      <p style="font-size:0.8rem;color:var(--color-text-muted);margin-top:0.5rem">Cenário recomendado: <strong>${formatMoney(cost.total)}</strong> · Pesquisa: ${RESEARCH_DATE}</p>
    </div>
    <div class="modal-section">
      <h3>Hospedagem</h3>
      ${hotelsHtml}
    </div>
    ${dest.packages.length ? `<div class="modal-section"><h3>Pacotes e combos</h3><ul>${dest.packages.map(p => `<li>• ${p}</li>`).join('')}</ul></div>` : ''}
    <div class="modal-section">
      <h3>Alertas</h3>
      <ul>${dest.alerts.map(a => `<li>⚠ ${a}</li>`).join('')}</ul>
    </div>
    <div class="modal-section">
      <h3>Referências para Marjurie</h3>
      <div class="links-grid">
        <a class="link-item" href="${dest.references.official}" target="_blank" rel="noopener"><span class="icon">🌐</span> Site oficial</a>
        <a class="link-item" href="${dest.references.instagram}" target="_blank" rel="noopener"><span class="icon">📷</span> Instagram</a>
        <a class="link-item" href="${dest.references.maps}" target="_blank" rel="noopener"><span class="icon">📍</span> Google Maps</a>
        ${ytLinks}
      </div>
    </div>
  `;

  els.modalTitle.textContent = `${dest.name} — ${dest.state}`;
  els.modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  els.modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

function toggleCompare(id) {
  const idx = compareSelection.indexOf(id);
  if (idx >= 0) {
    compareSelection.splice(idx, 1);
  } else if (compareSelection.length < 2) {
    compareSelection.push(id);
  } else {
    compareSelection.shift();
    compareSelection.push(id);
  }
  renderGrid();
  renderCompare();
}

function renderCompare() {
  if (compareSelection.length < 2) {
    els.comparePanel.classList.add('hidden');
    return;
  }
  const [a, b] = compareSelection.map(id => DESTINATIONS.find(d => d.id === id));
  const costA = getRecommendedCost(a);
  const costB = getRecommendedCost(b);

  const rows = [
    ['Custo total (recomendado)', formatMoney(costA.total), formatMoney(costB.total), costA.total < costB.total ? 'a' : 'b'],
    ['Romance', a.scores.romance, b.scores.romance, a.scores.romance > b.scores.romance ? 'a' : 'b'],
    ['Asma-friendly', a.scores.asthma, b.scores.asthma, a.scores.asthma > b.scores.asthma ? 'a' : 'b'],
    ['Workation', a.scores.workation, b.scores.workation, a.scores.workation > b.scores.workation ? 'a' : 'b'],
    ['Distância (carro)', `${a.transport.car.distance} km`, `${b.transport.car.distance} km`, a.transport.car.distance < b.transport.car.distance ? 'a' : 'b'],
    ['Transporte recomendado', a.recommendedTransport, b.recommendedTransport, null],
    ['Nota geral', `${a.overallScore}/10`, `${b.overallScore}/10`, a.overallScore > b.overallScore ? 'a' : 'b']
  ];

  els.comparePanel.classList.remove('hidden');
  els.compareTable.innerHTML = `
    <thead><tr><th>Critério</th><th>${a.name}</th><th>${b.name}</th></tr></thead>
    <tbody>
      ${rows.map(([label, va, vb, better]) => `
        <tr>
          <td>${label}</td>
          <td class="${better === 'a' ? 'better' : ''}">${va}</td>
          <td class="${better === 'b' ? 'better' : ''}">${vb}</td>
        </tr>
      `).join('')}
    </tbody>
  `;
}

function toggleFav(id) {
  const idx = favorites.indexOf(id);
  if (idx >= 0) favorites.splice(idx, 1);
  else favorites.push(id);
  localStorage.setItem('viagem-favorites', JSON.stringify(favorites));
  renderGrid();
  renderFavoritesBar();
}

function renderInternational() {
  els.intlGrid.innerHTML = INTERNATIONAL.map(intl => `
    <article class="intl-card">
      <span class="passport-warn">Requer passaporte válido</span>
      <h3>${intl.name} — ${intl.country}</h3>
      <p>${intl.summary}</p>
      <p><strong>Custo estimado (casal):</strong> ${formatMoney(intl.estimatedCost.min)} – ${formatMoney(intl.estimatedCost.max)}</p>
      <p><strong>Transporte:</strong> ${intl.transport}</p>
      <p style="margin-top:0.5rem"><strong>Prós:</strong> ${intl.pros.join(' · ')}</p>
      <p><strong>Contras:</strong> ${intl.cons.join(' · ')}</p>
      <div class="links-grid" style="margin-top:0.75rem">
        <a class="link-item" href="${intl.references.official}" target="_blank" rel="noopener">🌐 Oficial</a>
        <a class="link-item" href="${intl.references.instagram}" target="_blank" rel="noopener">📷 Instagram</a>
        <a class="link-item" href="${intl.references.youtube}" target="_blank" rel="noopener">▶ YouTube</a>
      </div>
    </article>
  `).join('');
}

function applyFilters() {
  activeFilters.budget = els.filterBudget.value;
  activeFilters.transport = els.filterTransport.value;
  activeFilters.romance = parseInt(els.filterRomance.value, 10);
  activeFilters.asthma = parseInt(els.filterAsthma.value, 10);
  els.romanceVal.textContent = activeFilters.romance || 'Qualquer';
  els.asthmaVal.textContent = activeFilters.asthma || 'Qualquer';
  renderGrid();
}

function resetFilters() {
  els.filterBudget.value = 'all';
  els.filterTransport.value = 'all';
  els.filterRomance.value = 0;
  els.filterAsthma.value = 0;
  applyFilters();
}

function handleClick(e) {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const action = btn.dataset.action;
  const id = btn.dataset.id;

  switch (action) {
    case 'detail': openModal(id); break;
    case 'compare': toggleCompare(id); break;
    case 'fav': toggleFav(id); break;
    case 'clear-fav':
      favorites = [];
      localStorage.setItem('viagem-favorites', '[]');
      renderGrid();
      renderFavoritesBar();
      break;
  }
}

function init() {
  els = {
    top3Grid: $('top3-grid'),
    destGrid: $('destinations-grid'),
    comparePanel: $('compare-panel'),
    compareTable: $('compare-table'),
    modalOverlay: $('modal-overlay'),
    modalTitle: $('modal-title'),
    modalBody: $('modal-body'),
    intlGrid: $('intl-grid'),
    favoritesBar: $('favorites-bar'),
    filterBudget: $('filter-budget'),
    filterTransport: $('filter-transport'),
    filterRomance: $('filter-romance'),
    filterAsthma: $('filter-asthma'),
    romanceVal: $('romance-val'),
    asthmaVal: $('asthma-val')
  };

  renderTop3();
  renderGrid();
  renderInternational();
  renderFavoritesBar();

  document.addEventListener('click', handleClick);
  els.filterBudget.addEventListener('change', applyFilters);
  els.filterTransport.addEventListener('change', applyFilters);
  els.filterRomance.addEventListener('input', applyFilters);
  els.filterAsthma.addEventListener('input', applyFilters);
  $('btn-reset-filters').addEventListener('click', resetFilters);
  $('modal-close').addEventListener('click', closeModal);
  els.modalOverlay.addEventListener('click', e => { if (e.target === els.modalOverlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

document.addEventListener('DOMContentLoaded', init);
