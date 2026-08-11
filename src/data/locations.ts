export interface FAQItem {
  question: string;
  answer: string;
}

export interface LocationData {
  slug: string; // e.g. 'batel', 'sao-jose-dos-pinhais'
  name: string;
  type: 'neighborhood' | 'city' | 'cluster' | 'state';
  regionName: string; // e.g. 'Curitiba/PR', 'Região Metropolitana de Curitiba'
  lat: number;
  lng: number;
  postalCode?: string;
  shortDesc: string;
  fullDesc: string;
  commercialProfile: string;
  typicalSearches: string[];
  nearbySlugs: string[];
  faqs: FAQItem[];
}

export const CURITIBA_OFFICIAL_NEIGHBORHOODS: string[] = [
  'Abranches', 'Água Verde', 'Ahú', 'Alto Boqueirão', 'Alto da Glória', 'Alto da Rua XV',
  'Atuba', 'Augusta', 'Bacacheri', 'Bairro Alto', 'Barreirinha', 'Batel', 'Bigorrilho',
  'Boa Vista', 'Bom Retiro', 'Boqueirão', 'Butiatuvinha', 'Cabral', 'Cachoeira', 'Cajuru',
  'Campina do Siqueira', 'Campo Comprido', 'Campo de Santana', 'Capão Raso', 'Capão da Imbuia',
  'Cascatinha', 'Caximba', 'Centro', 'Centro Cívico', 'Cidade Industrial', 'Cristo Rei',
  'Fanny', 'Fazendinha', 'Ganchinho', 'Guabirotuba', 'Guaíra', 'Hauer', 'Hugo Lange',
  'Jardim Botânico', 'Jardim Social', 'Jardim das Américas', 'Juvevê', 'Lamenha Pequena',
  'Lindóia', 'Mercês', 'Mossunguê', 'Novo Mundo', 'Orleans', 'Parolin', 'Pilarzinho',
  'Pinheirinho', 'Portão', 'Prado Velho', 'Rebouças', 'Riviera', 'Santa Cândida',
  'Santa Felicidade', 'Santa Quitéria', 'Santo Inácio', 'Seminário', 'Sítio Cercado',
  'São Braz', 'São Francisco', 'São João', 'São Lourenço', 'São Miguel', 'Taboão',
  'Tarumã', 'Tatuquara', 'Tingui', 'Uberaba', 'Umbará', 'Vila Izabel', 'Vista Alegre', 'Xaxim'
];

export const RMC_CITIES: { name: string; slug: string; lat: number; lng: number }[] = [
  { name: 'São José dos Pinhais', slug: 'sao-jose-dos-pinhais', lat: -25.5348, lng: -49.2064 },
  { name: 'Pinhais', slug: 'pinhais', lat: -25.4435, lng: -49.1923 },
  { name: 'Colombo', slug: 'colombo', lat: -25.2917, lng: -49.2242 },
  { name: 'Araucária', slug: 'araucaria', lat: -25.5928, lng: -49.4086 },
  { name: 'Almirante Tamandaré', slug: 'almirante-tamandare', lat: -25.3225, lng: -49.3094 },
  { name: 'Campo Largo', slug: 'campo-largo', lat: -25.4594, lng: -49.5283 },
  { name: 'Campo Magro', slug: 'campo-magro', lat: -25.3686, lng: -49.4503 },
  { name: 'Fazenda Rio Grande', slug: 'fazenda-rio-grande', lat: -25.6603, lng: -49.3061 },
  { name: 'Quatro Barras', slug: 'quatro-barras', lat: -25.3658, lng: -49.0772 },
  { name: 'Campina Grande do Sul', slug: 'campina-grande-do-sul', lat: -25.3061, lng: -49.0567 },
  { name: 'Mandirituba', slug: 'mandirituba', lat: -25.7789, lng: -49.3272 },
  { name: 'Balsa Nova', slug: 'balsa-nova', lat: -25.5847, lng: -49.6364 },
  { name: 'Rio Branco do Sul', slug: 'rio-branco-do-sul', lat: -25.1906, lng: -49.3131 },
  { name: 'Itaperuçu', slug: 'itaperucu', lat: -25.2206, lng: -49.3486 },
  { name: 'Tijucas do Sul', slug: 'tijucas-do-sul', lat: -25.9281, lng: -49.0983 },
];

export const STATE_HUBS = [
  { name: 'Paraná', slug: 'parana', lat: -25.4284, lng: -49.2733 },
  { name: 'Santa Catarina', slug: 'santa-catarina', lat: -27.5954, lng: -48.5480 },
  { name: 'Rio Grande do Sul', slug: 'rio-grande-do-sul', lat: -30.0346, lng: -51.2177 },
];

// Map of curated details for key neighborhoods/cities, and fallback auto-generator for the rest
const CURATED_LOCATIONS: Record<string, Partial<LocationData>> = {
  'batel': {
    name: 'Batel',
    type: 'neighborhood',
    regionName: 'Curitiba / PR',
    lat: -25.4411,
    lng: -49.2789,
    shortDesc: 'Bairro nobre e polo comercial, médico e gastronômico de alta renda em Curitiba.',
    fullDesc: 'O Batel é um dos centros econômicos e empresariais mais influentes de Curitiba. Concentra escritórios de advocacia, clínicas médicas sofisticadas, restaurantes renomados e shoppings estratégicos. Empresas no Batel necessitam de posicionamento orgânico impecável para atrair um público altamente qualificado.',
    commercialProfile: 'Clínicas médicas, consultórios de dermatologia e cirurgia plástica, escritórios de advocacia, boutiques, restaurantes de alta gastronomia e agências corporativas.',
    typicalSearches: [
      'clínica médica no Batel Curitiba',
      'advogado societário Batel',
      'restaurante especializado Batel perto de mim',
      'agência de SEO no Batel Curitiba'
    ],
    nearbySlugs: ['agua-verde', 'bigorrilho', 'reboucas', 'centro', 'seminario'],
    faqs: [
      { question: 'Por que o SEO Local é essencial para empresas no Batel?', answer: 'No Batel a concorrência comercial é alta e os clientes procuram por serviços premium no Google e no Google Maps. Aparecer nas primeiras posições do Maps garante maior volume de agendamentos e ligações diretas.' },
      { question: 'Como destacar meu Perfil de Empresa no Google Maps no Batel?', answer: 'Através de otimização completa de categorias, cadastro preciso de serviços/produtos, gerenciamento ativo de avaliações e posts com relevância geográfica e semântica focada no Batel.' },
    ]
  },
  'agua-verde': {
    name: 'Água Verde',
    type: 'neighborhood',
    regionName: 'Curitiba / PR',
    lat: -25.4522,
    lng: -49.2798,
    shortDesc: 'Um dos bairros mais povoados e dinâmicos comercialmente de Curitiba.',
    fullDesc: 'O Água Verde combina forte adensamento residencial com avenidas comerciais vibrantes como a Av. República Argentina e Av. Iguaçu. Com grande diversidade de comércio, pet shops, consultórios e serviços locais, o SEO local é vital para direcionar clientes que moram ou trabalham no bairro.',
    commercialProfile: 'Escolas, academias, pet shops, clínicas veterinárias, consultórios odontológicos e lojas de serviços para o lar.',
    typicalSearches: [
      'veterinário 24h Água Verde',
      'academia de pilates Água Verde Curitiba',
      'dentista no Água Verde',
      'consultoria de SEO no Água Verde'
    ],
    nearbySlugs: ['batel', 'portao', 'vila-izabel', 'reboucas', 'centro'],
    faqs: [
      { question: 'Como atrair mais clientes locais no bairro Água Verde?', answer: 'Com SEO voltado para buscas de geolocalização e otimização do Google Maps para cobrir os eixos da República Argentina, Kennedy e Iguaçu.' },
    ]
  },
  'centro': {
    name: 'Centro',
    type: 'neighborhood',
    regionName: 'Curitiba / PR',
    lat: -25.4284,
    lng: -49.2733,
    shortDesc: 'Coração financeiro, administrativo e de serviços de Curitiba.',
    fullDesc: 'O Centro de Curitiba possui a maior densidade de serviços, cartórios, prédios comerciais e escritórios da capital. A disputa por palavras-chave com a intenção "no Centro" ou "Curitiba Centro" é intensa e exige arquitetura técnica sólida.',
    commercialProfile: 'Escritórios de contabilidade, advocacia, prestadores de serviços, comércio de atacado e varejo, cartórios e consultorias.',
    typicalSearches: ['escritório de contabilidade no Centro de Curitiba', 'advogado trabalhista Centro Curitiba', 'SEO local Centro Curitiba'],
    nearbySlugs: ['centro-civico', 'batel', 'reboucas', 'alto-da-gloria', 'juveve'],
    faqs: [
      { question: 'Como superar a concorrência de SEO no Centro de Curitiba?', answer: 'Focando em dados estruturados específicos, conteúdo de nicho com intenção de busca transacional e otimização de reputação no Perfil de Empresa do Google.' }
    ]
  },
  'cidade-industrial': {
    name: 'Cidade Industrial (CIC)',
    type: 'cluster',
    regionName: 'Curitiba / PR',
    lat: -25.5036,
    lng: -49.3364,
    shortDesc: 'O maior polo industrial, logístico e corporativo B2B do Paraná.',
    fullDesc: 'A Cidade Industrial de Curitiba (CIC) é um gigante econômico que abriga indústrias, galpões logísticos e empresas B2B. A CIC possui também diversos subnúcleos populacionais e imobiliários como Neoville, Vila Sandra, Vila Verde e Sabará. O SEO na CIC foca tanto na captação B2B corporativa quanto em comércios locais para seus milhares de moradores.',
    commercialProfile: 'Indústrias, distribuidoras, empresas de logística, metalúrgicas, empresas de automação e comércio nas vilas residentes.',
    typicalSearches: ['fornecedor industrial CIC Curitiba', 'empresa de logística na CIC', 'manutenção de máquinas industriais Curitiba CIC'],
    nearbySlugs: ['fazendinha', 'portao', 'pinheirinho', 'campo-comprido', 'araucaria'],
    faqs: [
      { question: 'Como funciona o SEO para empresas B2B na CIC Curitiba?', answer: 'Trabalhamos palavras-chave de intenção de compra corporativa, especificações técnicas, catálogo de produtos em Schema.org e otimização para tomadores de decisão em indústrias.' },
      { question: 'O que inclui a abrangência da CIC?', answer: 'A CIC possui sub-regiões e vilas conhecidas como Neoville, Vila Sandra, Vila Verde, Vitória Régia e Sabará. Nossa estratégia contempla a visibilidade tanto no nível B2B quanto para clientes do entorno.' }
    ]
  },
  'santa-felicidade': {
    name: 'Santa Felicidade',
    type: 'neighborhood',
    regionName: 'Curitiba / PR',
    lat: -25.4056,
    lng: -49.3314,
    shortDesc: 'Polo gastronômico, turístico e residencial nobre da zona oeste de Curitiba.',
    fullDesc: 'Santa Felicidade é famosa por sua tradição italiana, vasta rede gastronômica, vinícolas, móveis e serviços para residências de alto padrão. O SEO no bairro exige estratégias de atratividade para turistas e moradores locais.',
    commercialProfile: 'Restaurantes italianos, lojas de móveis sob medida, adegas, eventos, pousadas e serviços residenciais.',
    typicalSearches: ['restaurante italiano Santa Felicidade', 'móveis planejados Santa Felicidade', 'melhor almoço em Santa Felicidade'],
    nearbySlugs: ['sao-braz', 'butiatuvinha', 'merces', 'vista-alegre', 'orleans'],
    faqs: [
      { question: 'Como o Google Maps ajuda restaurantes em Santa Felicidade?', answer: 'Otimizando palavras-chave gastronômicas, fotos em alta resolução, cardápios atualizados e resposta ágil a avaliações para capturar turistas e moradores em busca de refeição.' }
    ]
  },
  'sao-jose-dos-pinhais': {
    name: 'São José dos Pinhais',
    type: 'city',
    regionName: 'Região Metropolitana de Curitiba',
    lat: -25.5348,
    lng: -49.2064,
    shortDesc: 'Segundo maior município da RMC, polo automotivo, logístico e aeroportuário.',
    fullDesc: 'São José dos Pinhais abriga o Aeroporto Internacional Afonso Pena e grandes montadoras automobilísticas. Uma cidade próspera com centro comercial pulsante e vasto setor industrial e de serviços.',
    commercialProfile: 'Logística, despachantes aeroportuários, hotéis, concessionárias, indústrias e comércio central.',
    typicalSearches: ['empresa de logística em São José dos Pinhais', 'hotel perto do aeroporto Afonso Pena', 'SEO em São José dos Pinhais'],
    nearbySlugs: ['boqueirao', 'uberaba', 'pinhais', 'fazenda-rio-grande'],
    faqs: [
      { question: 'Como captar clientes em São José dos Pinhais com SEO?', answer: 'Configurando o raio de atendimento do Google Maps, páginas dedicadas e otimização semântica focada na divisa com Curitiba e nas vias principais como a Av. das Torres.' }
    ]
  }
};

// Helper function to convert text to URL slug
export function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

// Get or auto-generate complete location data
export function getLocationData(slug: string): LocationData {
  const cleanSlug = slug.replace(/^seo-/, '');
  
  if (CURATED_LOCATIONS[cleanSlug]) {
    const curated = CURATED_LOCATIONS[cleanSlug];
    return {
      slug: cleanSlug,
      name: curated.name || cleanSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      type: curated.type || 'neighborhood',
      regionName: curated.regionName || 'Curitiba / PR',
      lat: curated.lat || -25.4284,
      lng: curated.lng || -49.2733,
      shortDesc: curated.shortDesc || `Serviços de SEO, Google Maps e visibilidade digital na região de ${cleanSlug}.`,
      fullDesc: curated.fullDesc || `Otimização de site, SEO Local e presença em motores de busca e inteligências artificiais para empresas situadas em ${cleanSlug}.`,
      commercialProfile: curated.commercialProfile || 'Comércio de vizinhança, prestadores de serviços, clínicas, escritórios e empreendimentos locais.',
      typicalSearches: curated.typicalSearches || [`empresa de SEO em ${cleanSlug}`, `consultoria SEO ${cleanSlug}`, `como aparecer no Google em ${cleanSlug}`],
      nearbySlugs: curated.nearbySlugs || ['batel', 'centro', 'agua-verde', 'portao'],
      faqs: curated.faqs || [
        {
          question: `Como posicionar minha empresa no Google na região de ${cleanSlug}?`,
          answer: `Através da combinação de SEO On-Page, dados estruturados Schema.org, otimização no Perfil de Empresa do Google (Google Maps) e estratégias de autoridade voltadas para a localidade.`
        },
        {
          question: `Quanto tempo leva para ver resultados de SEO em ${cleanSlug}?`,
          answer: `Ações no Google Maps e otimizações técnicas locais costumam apresentar avanço em visibilidade e cliques entre 30 e 90 dias após a implementação.`
        }
      ]
    };
  }

  // Check in RMC cities
  const rmcCity = RMC_CITIES.find(c => c.slug === cleanSlug);
  if (rmcCity) {
    return {
      slug: cleanSlug,
      name: rmcCity.name,
      type: 'city',
      regionName: 'Região Metropolitana de Curitiba',
      lat: rmcCity.lat,
      lng: rmcCity.lng,
      shortDesc: `Estratégia de SEO local, Google Maps e visibilidade digital para empresas em ${rmcCity.name}.`,
      fullDesc: `${rmcCity.name} é um importante município da Região Metropolitana de Curitiba. Nossa consultoria de SEO atende empresas locais que buscam dominar os resultados de pesquisa do Google e serem citadas em assistentes de IA na região.`,
      commercialProfile: 'Comércio regional, indústrias, prestadores de serviços, clínicas e estabelecimentos comerciais de médio e grande porte.',
      typicalSearches: [`especialista em SEO em ${rmcCity.name}`, `como colocar minha empresa no Google Maps em ${rmcCity.name}`, `consultoria de marketing e SEO ${rmcCity.name}`],
      nearbySlugs: ['sao-jose-dos-pinhais', 'pinhais', 'colombo', 'centro'],
      faqs: [
        {
          question: `Qual a importância do SEO Local para empresas em ${rmcCity.name}?`,
          answer: `O SEO Local garante que potenciais clientes em ${rmcCity.name} e arredores encontrem sua empresa no momento exato em que buscarem pelos seus produtos ou serviços.`
        }
      ]
    };
  }

  // Check state hubs
  const stateHub = STATE_HUBS.find(s => s.slug === cleanSlug);
  if (stateHub) {
    return {
      slug: cleanSlug,
      name: stateHub.name,
      type: 'state',
      regionName: 'Região Sul do Brasil',
      lat: stateHub.lat,
      lng: stateHub.lng,
      shortDesc: `Atendimento de SEO, GEO e Engenharia de Visibilidade Digital para empresas no estado de ${stateHub.name}.`,
      fullDesc: `Atendemos presencialmente e remotamente empresas do estado de ${stateHub.name} que necessitam de estratégias avançadas de SEO técnico, expansão orgânica nacional e preparação de ativos digitais para motores de inteligência artificial.`,
      commercialProfile: 'Empresas B2B, indústrias, redes de franquia, clínicas especializadas e e-commerces regionais.',
      typicalSearches: [`agência de SEO em ${stateHub.name}`, `consultor de SEO ${stateHub.name}`, `SEO para e-commerce ${stateHub.name}`],
      nearbySlugs: ['parana', 'santa-catarina', 'rio-grande-do-sul'],
      faqs: [
        {
          question: `Omar SEO atende empresas em todo o estado de ${stateHub.name}?`,
          answer: `Sim, prestamos consultoria completa de SEO e engenharia de dados estruturados com reuniões estratégicas online e acompanhamento contínuo de métricas.`
        }
      ]
    };
  }

  // Generic fallback for any other neighborhood in Curitiba
  const formattedName = cleanSlug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    slug: cleanSlug,
    name: formattedName,
    type: 'neighborhood',
    regionName: 'Curitiba / PR',
    lat: -25.4284,
    lng: -49.2733,
    shortDesc: `Especialista em SEO, Google Maps e visibilidade digital no bairro ${formattedName} em Curitiba.`,
    fullDesc: `Destaque sua marca no bairro ${formattedName} em Curitiba. Aumente o tráfego de clientes locais e garanta presença estratégica no Google, Maps e assistentes de inteligência artificial.`,
    commercialProfile: `Comércios e escritórios locais localizados no bairro ${formattedName} e entorno.`,
    typicalSearches: [`SEO no bairro ${formattedName}`, `como aparecer no Google Maps em ${formattedName}`, `divulgação de empresa no ${formattedName}`],
    nearbySlugs: ['batel', 'centro', 'agua-verde', 'portao', 'bigorrilho'],
    faqs: [
      {
        question: `Como otimizar a presença da minha empresa no bairro ${formattedName}?`,
        answer: `Combinamos otimização do Perfil de Empresa no Google Maps, palavras-chave geolocalizadas e dados estruturados Schema.org para atrair os moradores de ${formattedName}.`
      }
    ]
  };
}

// Generate full list of location slugs for routing and sitemap
export function getAllLocationSlugs(): string[] {
  const neighborhoodSlugs = CURITIBA_OFFICIAL_NEIGHBORHOODS.map(slugify);
  const citySlugs = RMC_CITIES.map(c => c.slug);
  const stateSlugs = STATE_HUBS.map(s => s.slug);
  
  // Return unique slugs
  return Array.from(new Set([...neighborhoodSlugs, ...citySlugs, ...stateSlugs]));
}
