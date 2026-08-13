export interface RouteConfig {
  path: string;
  title: string;
  description: string;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  type: 'main' | 'commercial' | 'location' | 'state';
}

export const MAIN_ROUTES: RouteConfig[] = [
  {
    path: '/',
    title: 'Omar SEO | Especialista em SEO, Google, Maps e GEO para IA',
    description: 'Omar SEO: estratégia completa de SEO técnico, SEO local, Google Maps, GEO, conteúdo e dados estruturados para ampliar a visibilidade de empresas no Google e em mecanismos de IA em Curitiba e região.',
    priority: 1.0,
    changefreq: 'daily',
    type: 'main',
  },
  {
    path: '/servicos',
    title: 'Serviços de SEO e Visibilidade Digital em Curitiba | Omar SEO',
    description: 'Conheça nosso leque de serviços em SEO técnico, SEO local, Google Maps, E-commerce, Link Building, CRO e GEO (Otimização para IA).',
    priority: 0.95,
    changefreq: 'weekly',
    type: 'main',
  },
  {
    path: '/servicos/consultoria-seo',
    title: 'Consultoria de SEO em Curitiba | Estratégia Orgânica B2B & B2C — Omar SEO',
    description: 'Consultoria de SEO estratégica com diagnóstico de mercado, arquitetura de informação e acompanhamento executivo para empresas em Curitiba.',
    priority: 0.9,
    changefreq: 'weekly',
    type: 'main',
  },
  {
    path: '/servicos/auditoria-seo',
    title: 'Auditoria SEO Técnica Completa em Curitiba | Omar SEO',
    description: 'Auditoria técnica minuciosa de indexação, Core Web Vitals, links quebrados e arquitetura de dados para o Google.',
    priority: 0.9,
    changefreq: 'weekly',
    type: 'main',
  },
  {
    path: '/servicos/setup-seo-tecnico',
    title: 'Setup de SEO Técnico & Performance para Web | Omar SEO',
    description: 'Implementação de SEO técnico de nível de engenharia: Schema.org, sitemaps dinâmicos, canonicals e pré-renderização estática.',
    priority: 0.9,
    changefreq: 'weekly',
    type: 'main',
  },
  {
    path: '/servicos/seo-local',
    title: 'SEO Local & Google Maps em Curitiba e RMC | Omar SEO',
    description: 'Posicione sua empresa no topo do Google Meu Negócio e atraia clientes nos bairros de Curitiba e cidades vizinhas.',
    priority: 0.9,
    changefreq: 'weekly',
    type: 'main',
  },
  {
    path: '/servicos/seo-ecommerce',
    title: 'SEO para E-commerce e Lojas Virtuais em Curitiba | Omar SEO',
    description: 'Otimização de lojas virtuais, arquitetura de categorias, dados estruturados de produtos e autoridade orgânica.',
    priority: 0.9,
    changefreq: 'weekly',
    type: 'main',
  },
  {
    path: '/servicos/link-building',
    title: 'Link Building & Digital PR de Alta Autoridade | Omar SEO',
    description: 'Aquisição de backlinks contextuais e reputação digital com técnicas éticas e focadas em transferência de autoridade.',
    priority: 0.9,
    changefreq: 'weekly',
    type: 'main',
  },
  {
    path: '/servicos/cro-otimizacao-conversao',
    title: 'CRO — Otimização da Taxa de Conversão em Curitiba | Omar SEO',
    description: 'Transforme tráfego orgânico em clientes pagantes com testes de fricção, copy persuasiva e fluxo de formulários.',
    priority: 0.9,
    changefreq: 'weekly',
    type: 'main',
  },
  {
    path: '/servicos/geo-otimizacao-ia',
    title: 'GEO — Otimização para Inteligência Artificial (ChatGPT/Gemini) | Omar SEO',
    description: 'Preparação do seu domínio e marca para ser citada nas respostas de ChatGPT, Gemini, Perplexity e Claude.',
    priority: 0.9,
    changefreq: 'weekly',
    type: 'main',
  },
  {
    path: '/sobre',
    title: 'Sobre Omar Skafi — Especialista em SEO, GEO e Visibilidade | Omar SEO',
    description: 'Conheça a trajetória de Omar Skafi, especialista em SEO técnico, SEO local e GEO em Curitiba com mais de 12 anos de atuação.',
    priority: 0.85,
    changefreq: 'monthly',
    type: 'main',
  },
  {
    path: '/metodo',
    title: 'Metodologia Omar SEO 4D | Framework Autoral de Visibilidade Digital',
    description: 'Conheça o Framework Omar SEO 4D: Engenharia de Código, Semântica HTML/Schema, Autoridade de Domínio e Otimização para IA (GEO).',
    priority: 0.85,
    changefreq: 'monthly',
    type: 'main',
  },
  {
    path: '/blog',
    title: 'Blog de SEO, GEO e Visibilidade Digital em Curitiba | Omar SEO',
    description: 'Artigos e tutoriais avançados sobre SEO técnico, SEO local, Google Maps, Core Web Vitals e inteligência artificial.',
    priority: 0.85,
    changefreq: 'weekly',
    type: 'main',
  },
  {
    path: '/seo',
    title: 'SEO Completo em Curitiba e Região | Omar SEO',
    description: 'Estratégia completa de SEO on-page, técnico, semântico e autoridade para destacar sua empresa nos motores de busca.',
    priority: 0.8,
    changefreq: 'weekly',
    type: 'main',
  },
  {
    path: '/google-maps',
    title: 'Otimização de Google Maps e Perfil da Empresa | Omar SEO',
    description: 'Posicione seu Perfil da Empresa no topo do Google Maps em Curitiba. Aumente chamadas, rotas e visitas locais.',
    priority: 0.8,
    changefreq: 'weekly',
    type: 'main',
  },
  {
    path: '/geo-ia',
    title: 'GEO (Generative Engine Optimization) para IAs | Omar SEO',
    description: 'Estratégias de GEO e dados estruturados para preparar a presença da sua marca para ChatGPT, Gemini, Perplexity e Claude.',
    priority: 0.8,
    changefreq: 'weekly',
    type: 'main',
  },
  {
    path: '/seo-tecnico',
    title: 'SEO Técnico, Schema.org e Performance Web | Omar SEO',
    description: 'Auditoria e ajuste técnico de velocidade, indexação, sitemaps, canonicals, Schema.org e renderização para o Google.',
    priority: 0.8,
    changefreq: 'weekly',
    type: 'main',
  },
  {
    path: '/resultados',
    title: 'Cases de Sucesso e Resultados de SEO | Omar SEO',
    description: 'Conheça relatórios, métricas de crescimento e projetos otimizados com a engenharia de visibilidade do Omar SEO.',
    priority: 0.8,
    changefreq: 'monthly',
    type: 'main',
  },
  {
    path: '/omar-skafi',
    title: 'Sobre Omar Skafi - Especialista em SEO e GEO | Omar SEO',
    description: 'Conheça Omar Skafi, especialista com sólida trajetória em SEO técnico, SEO local, Google Maps e GEO em Curitiba/PR.',
    priority: 0.8,
    changefreq: 'monthly',
    type: 'main',
  },
  {
    path: '/auditoria-seo',
    title: 'Auditoria SEO Gratuita e Diagnóstico de Site | Omar SEO',
    description: 'Solicite uma análise técnica completa do seu site e descubra os gargalos que impedem sua empresa de aparecer no Google.',
    priority: 0.9,
    changefreq: 'weekly',
    type: 'main',
  },
  {
    path: '/contato',
    title: 'Contato com Omar SEO | Atendimento Curitiba e RMC',
    description: 'Entre em contato direto com Omar Skafi pelo WhatsApp (41) 99272-1004 ou (41) 98700-1004 e agende seu diagnóstico.',
    priority: 0.85,
    changefreq: 'monthly',
    type: 'main',
  },
];

export const COMMERCIAL_ROUTES: RouteConfig[] = [
  {
    path: '/especialista-seo-curitiba',
    title: 'Especialista em SEO em Curitiba | Omar SEO',
    description: 'Contrate o melhor Especialista em SEO de Curitiba para posicionar sua empresa no topo das buscas do Google e mapas.',
    priority: 0.85,
    changefreq: 'weekly',
    type: 'commercial',
  },
  {
    path: '/consultor-seo-curitiba',
    title: 'Consultor de SEO em Curitiba | Estratégia de Visibilidade',
    description: 'Consultoria de SEO personalizada para empresas em Curitiba que buscam crescimento consistente em tráfego orgânico e vendas.',
    priority: 0.85,
    changefreq: 'weekly',
    type: 'commercial',
  },
  {
    path: '/seo-para-empresas',
    title: 'SEO para Empresas e B2B em Curitiba | Omar SEO',
    description: 'Estratégias de SEO corporativo para médias e grandes empresas dominarem termos de intenção de compra.',
    priority: 0.85,
    changefreq: 'weekly',
    type: 'commercial',
  },
  {
    path: '/seo-google-maps',
    title: 'Como Dominar o Google Maps em Curitiba | SEO Local',
    description: 'Técnicas avançadas de SEO no Perfil de Empresa do Google para se destacar na localização física e raio de atendimento.',
    priority: 0.85,
    changefreq: 'weekly',
    type: 'commercial',
  },
  {
    path: '/seo-para-chatgpt',
    title: 'SEO e GEO para ChatGPT e Motores de IA | Omar SEO',
    description: 'Saiba como estruturar sua marca e entidades digitais para ser citada nas respostas do ChatGPT e assistentes virtuais.',
    priority: 0.85,
    changefreq: 'weekly',
    type: 'commercial',
  },
  {
    path: '/seo-para-gemini',
    title: 'SEO para Gemini e Google AI Overviews | Omar SEO',
    description: 'Otimização voltada para as respostas geradas pelo Google Gemini e resumos com IA nas pesquisas.',
    priority: 0.85,
    changefreq: 'weekly',
    type: 'commercial',
  },
  {
    path: '/consultoria-seo',
    title: 'Consultoria de SEO Profissional e Diagnóstico | Omar SEO',
    description: 'Acompanhamento estratégico, auditorias periódicas e direcionamento técnico em SEO e visibilidade digital.',
    priority: 0.85,
    changefreq: 'weekly',
    type: 'commercial',
  },
  {
    path: '/seo-local-curitiba',
    title: 'SEO Local Curitiba: Guia Definitivo | Omar SEO',
    description: 'Aprenda como dominar o mercado local em Curitiba e bairros vizinhos atando SEO on-page com Google Perfil da Empresa.',
    priority: 0.85,
    changefreq: 'weekly',
    type: 'commercial',
  },
];

// Helper to assemble all routes including generated location routes
export function getAllRoutes(locationSlugs: string[]): RouteConfig[] {
  const locationRoutes: RouteConfig[] = locationSlugs.map((slug) => {
    const isState = slug.startsWith('parana') || slug.startsWith('santa-catarina') || slug.startsWith('rio-grande-do-sul');
    const formattedName = slug
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

    return {
      path: `/seo-${slug}`,
      title: `SEO em ${formattedName} | Especialista em SEO e Google Maps - Omar SEO`,
      description: `Estratégia de SEO local, Google Maps e visibilidade digital para empresas em ${formattedName}. Destaque sua marca na região com Omar SEO.`,
      priority: 0.7,
      changefreq: 'weekly',
      type: isState ? 'state' : 'location',
    };
  });

  return [...MAIN_ROUTES, ...COMMERCIAL_ROUTES, ...locationRoutes];
}
