export interface ServiceSection {
  title: string;
  subsections: {
    subtitle: string;
    text: string;
  }[];
}

export interface ServiceProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  name: string;
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  targetKeyword: string;
  metaTitle: string;
  metaDescription: string;
  sections: ServiceSection[];
  processSteps: ServiceProcessStep[];
  faqs: ServiceFAQ[];
  comparativeTable?: {
    headers: [string, string, string];
    rows: { feature: string; traditional: string; omarSeo: string }[];
  };
  schemaType: string;
}

export const SERVICES_DATA: Record<string, ServiceData> = {
  'consultoria-seo': {
    slug: 'consultoria-seo',
    name: 'Consultoria SEO',
    heroBadge: 'Consultoria Estratégica em Curitiba',
    heroTitle: 'Consultoria SEO em Curitiba: Estratégia de Alto Impacto para Vendas e Market Share',
    heroSubtitle:
      'Desenvolvemos planos estratégicos sob medida para empresas que buscam tráfego orgânico qualificado, atração contínua de clientes e consolidação de liderança nos motores de busca.',
    targetKeyword: 'consultoria seo curitiba',
    metaTitle: 'Consultoria SEO em Curitiba | Estratégia de Visibilidade e Vendas',
    metaDescription:
      'Consultoria SEO estratégica em Curitiba conduzida por Omar Skafi. Aumente o tráfego orgânico qualificado, conquiste clientes e ganhe market share no Google.',
    schemaType: 'ConsultingService',
    sections: [
      {
        title: 'Planejamento Estratégico Macro e Arquitetura de Visibilidade',
        subsections: [
          {
            subtitle: 'Mapeamento de Oportunidades de Alto VGV e Market Share',
            text: 'A nossa consultoria SEO em Curitiba não se limita a otimizar termos isolados. Realizamos uma imersão profunda no ecossistema do seu negócio para identificar gargalos de mercado, padrões de busca do seu cliente ideal e termos de alta intenção comercial. Mapeamos as lacunas deixadas pelos seus concorrentes diretos para criar uma arquitetura de conteúdo capaz de capturar demanda qualificada nos momentos decisivos da jornada de compra.',
          },
          {
            subtitle: 'Alinhamento com Objetivos de Negócio e ROI Orgânico',
            text: 'Convertemos objetivos de marketing em métricas concretas de vendas e faturamento. Cada recomendação técnica e estratégica é priorizada com base no retorno sobre o investimento (ROI). Não buscamos apenas visitas para o site; estruturamos uma estratégia focada em gerar oportunidades reais de negócio, contatos via WhatsApp, chamadas telefônicas e solicitações de orçamento para a sua equipe comercial.',
          },
        ],
      },
      {
        title: 'Integração com Equipes Internas e Governança SEO',
        subsections: [
          {
            subtitle: 'Capacitação de Times de Tecnologia, Conteúdo e Design',
            text: 'Trabalhamos em sintonia fina com os seus desenvolvedores, redatores e designers. Oferecemos orientações diretas, especificações técnicas detalhadas e treinamento contínuo para garantir que todas as novas atualizações do seu site já nasçam preparadas para os algoritmos do Google, evitando retrabalhos e gargalos de implementação.',
          },
          {
            subtitle: 'Sprints de Implementação Acionáveis e Gestão de Tarefas',
            text: 'Organizamos a consultoria em ciclos curtos de execução (sprints). Cada entrega conta com documentação técnica clara, priorização por impacto e acompanhamento direto de Omar Skafi. Isso garante que as recomendações saiam do papel rapidamente e comecem a gerar resultados nos primeiros meses de acompanhamento.',
          },
        ],
      },
      {
        title: 'Análise de Concorrência e Inteligência de Mercado',
        subsections: [
          {
            subtitle: 'Desconstrução do Perfil Semântico e de Autoridade dos Líderes',
            text: 'Auditamos os sites que atualmente ocupam as primeiras posições do Google no seu segmento em Curitiba e no Brasil. Analisamos a estrutura de links internos, a densidade semântica dos conteúdos, a velocidade de carregamento e o perfil de backlinks para construir uma estratégia superior e sustentável a longo prazo.',
          },
          {
            subtitle: 'Identificação de Gaps de Conteúdo e Nichos Não Explorados',
            text: 'Encontramos lacunas de intenção de busca que a sua concorrência ignorou. Ao responder com precisão às dúvidas específicas dos consumidores locais e nacionais, sua empresa ganha relevância imediata e estabelece autoridade incontestável no setor.',
          },
        ],
      },
      {
        title: 'Decisão Orientada por Dados e Atribuição Multicanal',
        subsections: [
          {
            subtitle: 'Métricas de Negócio em Vez de Métricas de Vaidade',
            text: 'Monitoramos dados que realmente importam: custo de aquisição de clientes (CAC) orgânico, taxa de conversão por página de entrada e volume de leads gerados. Descartamos relatórios confusos com centenas de páginas e focamos em dashboards claros e acionáveis.',
          },
          {
            subtitle: 'Acompanhamento Mensal com Omar Skafi',
            text: 'Todos os meses realizamos reuniões estratégicas para revisar o progresso, analisar o comportamento dos algoritmos e redefinir prioridades de acordo com a movimentação do mercado e as metas da sua empresa.',
          },
        ],
      },
    ],
    processSteps: [
      {
        number: '01',
        title: 'Onboarding & Alinhamento',
        description: 'Imersão no modelo de negócio, definição de metas de receita e acesso aos canais de análise (GA4, Google Search Console).',
      },
      {
        number: '02',
        title: 'Diagnóstico & Plano Diretor',
        description: 'Auditoria técnica completa e criação do roadmap estratégico priorizado para os próximos 6 a 12 meses.',
      },
      {
        number: '03',
        title: 'Execução & Co-pilotagem',
        description: 'Acompanhamento técnico diário com os times internos, otimização de código, criação de conteúdo e backlinks.',
      },
      {
        number: '04',
        title: 'Mensuração & Replanejamento',
        description: 'Análise contínua das conversões, refinamento das palavras-chave e expansão da cobertura de mercado.',
      },
    ],
    faqs: [
      {
        question: 'Qual é a diferença entre uma consultoria SEO e uma agência tradicional?',
        answer: 'A consultoria SEO do Omar SEO oferece atendimento direto e personalizado com o especialista responsável, sem intermediários ou atendentes juniores. Focamos em engenharia técnica de código, alinhamento direto com seus objetivos de receita e transferência de conhecimento para sua equipe.',
      },
      {
        question: 'Em quanto tempo é possível ver resultados na consultoria SEO?',
        answer: 'Ajustes técnicos críticos de indexação e velocidade podem gerar melhorias perceptíveis entre 30 e 60 dias. Resultados expressivos de ganho de posições e aumento orgânico consistente de receita costumam consolidar-se entre 3 e 6 meses de trabalho contínuo.',
      },
      {
        question: 'Minha empresa precisa ter uma equipe técnica para contratar a consultoria?',
        answer: 'Não necessariamente. Caso sua empresa não possua desenvolvedores internos, oferecemos a opção de implementação direta dos ajustes de código e arquitetura pelo próprio Omar Skafi.',
      },
      {
        question: 'Como é feito o acompanhamento das métricas de progresso?',
        answer: 'Disponibilizamos um painel em tempo real e realizamos reuniões mensais de alinhamento com foco em reuniões de vendas geradas, chamadas telefônicas, mensagens de WhatsApp e aumento no tráfego orgânico qualificado.',
      },
      {
        question: 'A consultoria atende apenas empresas de Curitiba?',
        answer: 'Nossa sede física está localizada em Curitiba/PR no bairro Batel, onde realizamos atendimentos presenciais e remotos. Atendemos empresas do Paraná, Santa Catarina, Rio Grande do Sul e todo o Brasil.',
      },
    ],
    comparativeTable: {
      headers: ['Aspecto Estratégico', 'Consultoria Genérica', 'Consultoria Omar SEO'],
      rows: [
        {
          feature: 'Atendimento',
          traditional: 'Atendentes comerciais e estagiários',
          omarSeo: 'Direto com Omar Skafi (Especialista com +12 anos)',
        },
        {
          feature: 'Foco da Estratégia',
          traditional: 'Métricas de vaidade (apenas impressões e cliques)',
          omarSeo: 'Geração de leads, contatos no WhatsApp e receita real',
        },
        {
          feature: 'Engenharia de Código',
          traditional: 'Apenas plugins básicos em WordPress',
          omarSeo: 'Auditoria e refatoração de código React, Vite, Schema e Core Web Vitals',
        },
      ],
    },
  },

  'auditoria-seo': {
    slug: 'auditoria-seo',
    name: 'Auditoria SEO Técnica',
    heroBadge: 'Raio-X Técnico e Diagnóstico',
    heroTitle: 'Auditoria SEO Técnica e Diagnóstico de Rastreabilidade em Curitiba',
    heroSubtitle:
      'Descubra os bloqueios invisíveis de código, problemas de indexação e falhas de arquitetura que impedem seu site de atingir o topo das pesquisas do Google.',
    targetKeyword: 'auditoria seo',
    metaTitle: 'Auditoria SEO Técnica Completa | Raio-X de Código e Indexação',
    metaDescription:
      'Auditoria SEO técnica profunda para identificar erros de indexação, velocidade, canibalização de URLs e Schema.org. Receba um relatório acionável.',
    schemaType: 'DiagnosticService',
    sections: [
      {
        title: 'Rastreabilidade, Indexação e Orçamento de Crawl (Crawl Budget)',
        subsections: [
          {
            subtitle: 'Identificação de Erros 40x, Redirecionamentos em Cadeia e Soft 404',
            text: 'Auditamos linha por linha a resposta dos seus servidores aos robôs do Google. Identificamos links quebrados, loops de redirecionamento 301/302 e erros de páginas não encontradas que desperdiçam a atenção do crawler e prejudicam o ranqueamento geral do domínio.',
          },
          {
            subtitle: 'Análise de Logs do Servidor e Comportamento dos Googlebots',
            text: 'Analisamos como os robôs de busca navegam pelo seu site. Garantimos que suas páginas mais lucrativas recebam a frequência de rastreamento adequada e que recursos irrelevantes sejam bloqueados corretamente via robots.txt.',
          },
        ],
      },
      {
        title: 'Diagnóstico de Arquitetura, Canibalização e Conteúdo Duplicado',
        subsections: [
          {
            subtitle: 'Auditoria de Títulos, H1, Meta Descriptions e Parametrização',
            text: 'Verificamos a integridade de todas as tags de cabeçalho do site. Eliminamos títulos duplicados, otimizamos metas estratégicas e corrigimos URLs parametrizadas sem canonicalização adequada.',
          },
          {
            subtitle: 'Resolução de Conflitos de Canibalização de Palavras-Chave',
            text: 'Identificamos quando duas ou mais páginas do seu site disputam a mesma palavra-chave no Google, dividindo a autoridade do seu domínio. Mapeamos as ações necessárias para consolidar o conteúdo e recuperar posições perdidas.',
          },
        ],
      },
      {
        title: 'Validação Semântica de Schema.org e Dados Estruturados',
        subsections: [
          {
            subtitle: 'Inspeção de Erros de Sintaxe em Marcadores JSON-LD',
            text: 'Testamos todas as marcações de dados estruturados em relação aos padrões oficiais do Schema.org e diretrizes atualizadas do Google. Corrigimos erros de propriedades ausentes em entidades corporativas, locais e de produtos.',
          },
          {
            subtitle: 'Mapeamento de Entidades e Conectividade no Knowledge Graph',
            text: 'Verificamos se o seu site transmite clareza sintática suficiente para ser compreendido não apenas pelo Googlebot tradicional, mas também pelos algoritmos de inteligência artificial (LLMs).',
          },
        ],
      },
      {
        title: 'Relatório Acionável Priorizado por Matriz de Impacto vs. Esforço',
        subsections: [
          {
            subtitle: 'Entregável Executivo e Guia Prático para Desenvolvedores',
            text: 'Entregamos um relatório claro e direto, dividido em tarefas urgentes, de médio prazo e oportunidades de otimização. Cada item traz a explicação do problema, o motivo da falha e o código de correção exato a ser aplicado.',
          },
          {
            subtitle: 'Reunião de Devolutiva Técnica com Omar Skafi',
            text: 'Apresentamos a auditoria pessoalmente ou via videoconferência para a sua equipe, tirando todas as dúvidas e garantindo o entendimento completo dos passos necessários.',
          },
        ],
      },
    ],
    processSteps: [
      {
        number: '01',
        title: 'Crawl Profundo & Coleta',
        description: 'Mapeamento completo do domínio com ferramentas proprietárias e análise de dados no Search Console e GA4.',
      },
      {
        number: '02',
        title: 'Inspeção Manual de Código',
        description: 'Análise técnica minuciosa de arquivos JS, CSS, cabeçalhos HTTP, tags canonicals e dados estruturados.',
      },
      {
        number: '03',
        title: 'Priorização & Matriz de Impacto',
        description: 'Organização dos achados em uma lista priorizada por grau de urgência e potencial de retorno sobre posições.',
      },
      {
        number: '04',
        title: 'Apresentação & Entregável',
        description: 'Devolutiva executiva com plano de ação pronto para ser executado pelos seus desenvolvedores.',
      },
    ],
    faqs: [
      {
        question: 'O que receberei ao final da auditoria SEO técnica?',
        answer: 'Você receberá um relatório executivo em PDF/Documento com o diagnóstico detalhado de todos os problemas encontrados, os impactos no ranqueamento e o guia passo a passo com trechos de código e orientações para correção.',
      },
      {
        question: 'Qual é o prazo para a entrega da auditoria SEO completa?',
        answer: 'O prazo padrão de entrega e apresentação da auditoria varia entre 5 e 10 dias úteis, dependendo do tamanho do site e da complexidade da estrutura de páginas.',
      },
      {
        question: 'A auditoria inclui a correção automática dos erros no site?',
        answer: 'A auditoria é um serviço de diagnóstico e planejamento. No entanto, oferecemos o serviço complementar de Setup SEO Técnico para realizar todas as correções diretamente no seu código.',
      },
      {
        question: 'Por que ferramentas gratuitas de auditoria automática não são suficientes?',
        answer: 'Ferramentas automáticas geram relatórios genéricos e muitas vezes apontam falsos positivos. A auditoria do Omar SEO combina varredura de dados com análise humana qualificada para identificar falhas reais de negócio.',
      },
      {
        question: 'Quais tipos de sites podem passar por essa auditoria?',
        answer: 'Auditamos sites institucionais, e-commerces, portais de notícias, blogs, aplicações em React/Vite/Next.js, sistemas em WordPress, VTEX, Shopify e plataformas proprietárias.',
      },
    ],
    comparativeTable: {
      headers: ['Item Analisado', 'Relatórios Gratuitos da Web', 'Auditoria Profunda Omar SEO'],
      rows: [
        {
          feature: 'Profundidade da Análise',
          traditional: 'Checagem superficial de tags básicas em 10 páginas',
          omarSeo: 'Varredura completa de todas as URLs, logs e código-fonte',
        },
        {
          feature: 'Orientação a Código',
          traditional: 'Alertas genéricos sem instrução de correção',
          omarSeo: 'Código e orientação exata para sua equipe de TI ou desenvolvedor',
        },
        {
          feature: 'Análise de IA & GEO',
          traditional: 'Ignora completamente IAs e dados estruturados',
          omarSeo: 'Validação total de Schema.org, JSON-LD e acessibilidade a LLMs',
        },
      ],
    },
  },

  'setup-seo-tecnico': {
    slug: 'setup-seo-tecnico',
    name: 'Setup SEO Técnico',
    heroBadge: 'Engenharia de Código e Performance',
    heroTitle: 'Setup SEO Técnico em Curitiba: Ajuste de Código, Performance e Core Web Vitals',
    heroSubtitle:
      'Transformamos a infraestrutura do seu site em uma máquina de velocidade e perfeita indexabilidade para o Google, Bing e motores de Inteligência Artificial.',
    targetKeyword: 'seo técnico / setup técnico',
    metaTitle: 'Setup SEO Técnico e Core Web Vitals | Engenharia de Código',
    metaDescription:
      'Implementação de setup técnico de SEO: otimização de Core Web Vitals (LCP, INP, CLS), pré-renderização de SPAs, Schema.org e performance de código.',
    schemaType: 'TechnicalService',
    sections: [
      {
        title: 'Otimização de Core Web Vitals (LCP, INP e CLS)',
        subsections: [
          {
            subtitle: 'Redução do Impacto de JavaScript e Imagens de Nova Geração',
            text: 'Otimizamos a entrega de mídias usando formatos modernos como WebP e AVIF com compressão sem perda visível. Reduzimos o peso dos arquivos JavaScript bloqueantes para acelerar drasticamente o tempo até a exibição do maior elemento da página (Largest Contentful Paint - LCP).',
          },
          {
            subtitle: 'Otimização de Interatividade (INP) e Estabilidade Visual (CLS)',
            text: 'Trabalhamos na otimização do evento Interaction to Next Paint (INP) para garantir que cada clique e interação do usuário tenha resposta instantânea. Reservamos dimensões estáticas para todos os elementos dinâmicos, zerando o deslocamento inesperado de layout (Cumulative Layout Shift - CLS).',
          },
        ],
      },
      {
        title: 'Arquitetura para SPAs, React e Renderização Server-Side',
        subsections: [
          {
            subtitle: 'Estratégia de Pré-renderização Estática e HTML Servido',
            text: 'Aplicações modernas em React e Vite muitas vezes enfrentam problemas de indexação porque o conteúdo depende da execução do JavaScript no navegador. Implementamos processos de pré-renderização estática que entregam código HTML limpo aos buscadores sem abrir mão da agilidade da SPA.',
          },
          {
            subtitle: 'Resolução de Gargalos em Frameworks Modernos',
            text: 'Configuramos adequadamente manipuladores de rotas, metadados dinâmicos por página e gerenciamento avançado de estado para garantir que cada página seja descoberta e ranqueada de forma independente pelos bots.',
          },
        ],
      },
      {
        title: 'Hierarquia Semântica HTML5 e Estruturação de Tags',
        subsections: [
          {
            subtitle: 'Uso Rigoroso de Tags Semânticas HTML5',
            text: 'Reestruturamos o código do seu site para utilizar tags como header, nav, main, article, section e footer de maneira gramaticalmente correta. Isso permite que os algoritmos compreendam a verdadeira relevância hierárquica de cada bloco de conteúdo.',
          },
          {
            subtitle: 'Gestão Rigorosa de Canonicals, Robots e Directivas de Crawl',
            text: 'Configuramos de forma impecável as tags rel="canonical" absolutas em cada URL, impedindo a duplicação acidental de conteúdo e orientando o Google sobre qual versão da página deve ser indexada.',
          },
        ],
      },
      {
        title: 'Segurança, Protocolos e Configurações de Servidor',
        subsections: [
          {
            subtitle: 'Ajustes de Cabeçalhos HTTP, Caching e Compressão',
            text: 'Ativamos políticas avançadas de armazenamento em cache no navegador e compressão Brotli/Gzip no servidor. Ajustamos cabeçalhos HTTP de segurança para proteger a integridade da sua marca.',
          },
          {
            subtitle: 'Geração Automatizada de Sitemaps XML e Robots.txt',
            text: 'Criamos e mantemos sitemaps dinâmicos atualizados automaticamente a cada nova publicação, além de um arquivo robots.txt rigorosamente otimizado para liberaração e priorização de conteúdos vitais.',
          },
        ],
      },
    ],
    processSteps: [
      {
        number: '01',
        title: 'Mapeamento do Stack Tecnológico',
        description: 'Análise do ambiente de hospedagem, servidores, linguagens e frameworks utlizados no projeto.',
      },
      {
        number: '02',
        title: 'Refatoração de Código & Imagens',
        description: 'Otimização direta de folhas de estilo, compressão de código e substituição de mídias por formatos leves.',
      },
      {
        number: '03',
        title: 'Implementação de Schema & Canonicals',
        description: 'Injeção de marcações JSON-LD validadas e padronização de todas as tags de controle de indexação.',
      },
      {
        number: '04',
        title: 'Validação nos Ferramentas Oficiais',
        description: 'Testes no PageSpeed Insights, Google Rich Results Test e aprovação total no Search Console.',
      },
    ],
    faqs: [
      {
        question: 'O que são Core Web Vitals e por que eles afetam meu site?',
        answer: 'Os Core Web Vitals são métricas oficiais do Google que medem a experiência do usuário em termos de velocidade de carregamento (LCP), interatividade rápida (INP) e estabilidade visual (CLS). Sites com métricas verdes têm prioridade no ranqueamento.',
      },
      {
        question: 'Sites feitos em React ou Single Page Application (SPA) conseguem ranquear no Google?',
        answer: 'Sim, desde que passem por um setup de pré-renderização estática ou Server-Side Rendering (SSR). Sem isso, o Googlebot pode falhar ao renderizar o JavaScript, resultando em páginas em branco na indexação.',
      },
      {
        question: 'Vocês mencionam o FID (First Input Delay)?',
        answer: 'Não. O FID foi oficialmente descontinuado pelo Google em março de 2024 e substituído pelo INP (Interaction to Next Paint). Nosso setup técnico segue 100% as diretrizes vigentes e atualizadas.',
      },
      {
        question: 'O setup técnico precisa ser refeito sempre que o site atualizar?',
        answer: 'Desenvolvemos uma estrutura limpa e automatizada. Uma vez implementado o setup básico, seu site manterá os padrões de velocidade e semântica para todas as novas páginas publicadas.',
      },
      {
        question: 'Vocês trabalham diretamente com quais linguagens e plataformas?',
        answer: 'Atuamos com React, Vite, Next.js, Node.js, HTML5/Tailwind, WordPress, WooCommerce, Shopify, VTEX e sistemas sob medida.',
      },
    ],
    comparativeTable: {
      headers: ['Métrica Técnica', 'Site Sem Setup Técnico', 'Site com Setup Omar SEO'],
      rows: [
        {
          feature: 'Nota no PageSpeed (Mobile)',
          traditional: 'Entre 20 e 50 (Sinal vermelho)',
          omarSeo: '90 a 100 (Sinal verde garantido)',
        },
        {
          feature: 'Interatividade (INP)',
          traditional: 'Lenta com atrasos superiores a 300ms',
          omarSeo: 'Resposta instantânea abaixo de 200ms',
        },
        {
          feature: 'Indexação de SPAs/React',
          traditional: 'Páginas em branco ou mal indexadas',
          omarSeo: 'HTML estático pré-renderizado entregue ao robô',
        },
      ],
    },
  },

  'seo-local': {
    slug: 'seo-local',
    name: 'SEO Local e Google Maps',
    heroBadge: 'Atração Local em Curitiba e RMC',
    heroTitle: 'SEO Local e Otimização do Google Maps em Curitiba e Região Metropolitana',
    heroSubtitle:
      'Conquiste os clientes do seu bairro e da sua cidade exatamente no momento em que buscam pelos seus serviços no Google e no Google Maps.',
    targetKeyword: 'seo local curitiba / google meu negócio',
    metaTitle: 'SEO Local em Curitiba e Google Maps | Atração por Bairros',
    metaDescription:
      'Domine o Google Maps e as buscas locais em Curitiba. Destaque sua empresa nos bairros Batel, Água Verde, Centro, Cabral e cidades da RMC.',
    schemaType: 'LocalBusinessService',
    sections: [
      {
        title: 'Otimização do Perfil da Empresa no Google (GBM/GBP)',
        subsections: [
          {
            subtitle: 'Preenchimento Categórico e Estruturação de Categorias',
            text: 'Configuramos estrategicamente a categoria principal e as secundárias do seu Perfil da Empresa no Google. Inserimos todos os atributos relevantes, horários de atendimento precisos, área de cobertura geográfica e descrição comercial otimizada com palavras-chave locais de alta conversão.',
          },
          {
            subtitle: 'Publicação de Atualizações e Galeria de Fotos Geolocalizadas',
            text: 'Estabelecemos um plano de postagens e upload frequente de fotos reais com dados de geolocalização e nomes de arquivos otimizados, sinalizando ativamente ao Google a relevância operacional da sua sede física.',
          },
        ],
      },
      {
        title: 'Engenharia de Citações Locais e Consistência NAP (Name, Address, Phone)',
        subsections: [
          {
            subtitle: 'Unificação de Dados nos Principais Diretórios e Mapeadores',
            text: 'Garantimos que o nome comercial, endereço exato com CEP e número de telefone da sua empresa estejam 100% padronizados em diretórios locais, guias comerciais e mapas como Apple Maps, Bing Places e Waze.',
          },
          {
            subtitle: 'Fortalecimento de Sinais Geográficos em Portais de Curitiba',
            text: 'Criamos conexões com portais de notícias e associações de bairro em Curitiba e municípios vizinhos, construindo uma teia de autoridade geográfica incontestável para o seu domínio.',
          },
        ],
      },
      {
        title: 'Páginas Específicas por Bairro e Cidades da Região Metropolitana',
        subsections: [
          {
            subtitle: 'Páginas Únicas para Bairros Estratégicos de Curitiba',
            text: 'Desenvolvemos páginas exclusivas para bairros como Batel, Água Verde, Bigorrilho, Cabral, Rebouças, Centro, Santa Felicidade e Cic, atendendo clientes que pesquisam por soluções perto de suas residências.',
          },
          {
            subtitle: 'Expansão de Cobertura para Cidades da RMC',
            text: 'Capturamos demandas em municípios altamente industrializados e dinâmicos da RMC, incluindo São José dos Pinhais, Colombo, Pinhais, Araucária, Campo Largo e Fazenda Rio Grande.',
          },
        ],
      },
      {
        title: 'Gestão Estratégica de Avaliações e Reputação Local',
        subsections: [
          {
            subtitle: 'Protocolo para Incentivo Ético de Avaliações 5 Estrelas',
            text: 'Orientamos sua equipe sobre como solicitar avaliações de clientes satisfeitos de forma automatizada, aumentando o volume de depoimentos reais e nota média no Google.',
          },
          {
            subtitle: 'Respostas Otimizadas com Palavras-Chave Locais',
            text: 'Respondemos a cada avaliação recebida utilizando variações semânticas dos seus serviços e regiões atendidas, convertendo interações de reputação em pontos extras de ranqueamento.',
          },
        ],
      },
    ],
    processSteps: [
      {
        number: '01',
        title: 'Auditoria NAP & Perfil',
        description: 'Verificação da consistência dos dados do seu endereço e perfil do Google em toda a web.',
      },
      {
        number: '02',
        title: 'Reestruturação do GBM',
        description: 'Otimização completa de categorias, produtos, fotos, descrição e links de agendamento.',
      },
      {
        number: '03',
        title: 'Criação de Páginas por Bairro',
        description: 'Desenvolvimento e publicação de landing pages locais únicas para bairros e cidades-chave.',
      },
      {
        number: '04',
        title: 'Conquista do Top 3 Map Pack',
        description: 'Monitoramento semanal de posições no mapa e atração direta de ligações e rotas.',
      },
    ],
    faqs: [
      {
        question: 'O que é o Google Map Pack e por que ele é importante?',
        answer: 'O Map Pack é o bloco com mapa e 3 empresas em destaque que aparece no topo das buscas locais do Google. Estar nesse grupo garante a maior parte dos cliques, ligações e solicitações de rotas de clientes locais.',
      },
      {
        question: 'Minha empresa precisa ter um endereço físico aberto ao público?',
        answer: 'Não necessariamente. Empresas que atendem na residência do cliente ou possuem áreas de prestação de serviço (como encanadores ou consultores) podem ser cadastradas como empresas de área de cobertura no Google.',
      },
      {
        question: 'Como funciona a criação de páginas por bairro em Curitiba?',
        answer: 'Criamos páginas com conteúdo 100% autêntico e relevante focado nos bairros de Curitiba (ex: Batel, Água Verde, Cabral), sem duplicação de texto, respeitando rigorosamente as diretrizes de qualidade do Google.',
      },
      {
        question: 'Como posso remover avaliações negativas falsas do meu Perfil no Google?',
        answer: 'Ajudamos sua empresa no processo formal de contestação e denúncia junto ao suporte do Google para contestações fundamentadas em violações de políticas oficiais.',
      },
      {
        question: 'Quanto tempo leva para subir posições no Google Maps em Curitiba?',
        answer: 'Melhorias de perfil e consistência de dados costumam gerar avanços relevantes no ranking local em prazos de 30 a 90 dias.',
      },
    ],
    comparativeTable: {
      headers: ['Estratégia Local', 'Ação Amadora', 'Estratégia Omar SEO'],
      rows: [
        {
          feature: 'Cadastro no Google',
          traditional: 'Incompleto e sem fotos geolocalizadas',
          omarSeo: '100% otimizado com categorias corretas e postagens contínuas',
        },
        {
          feature: 'Dados de Endereço (NAP)',
          traditional: 'Divergentes em múltiplos guias da internet',
          omarSeo: 'Consistência absoluta em todos os diretórios e mapeadores',
        },
        {
          feature: 'Páginas por Região',
          traditional: 'Nenhuma ou conteúdo duplicado em massa',
          omarSeo: 'Páginas autênticas para bairros de Curitiba e RMC',
        },
      ],
    },
  },

  'seo-ecommerce': {
    slug: 'seo-ecommerce',
    name: 'SEO para E-commerce',
    heroBadge: 'Escala Orgânica para Lojas Virtuais',
    heroTitle: 'SEO para E-commerce em Curitiba: Multiplique Suas Vendas Orgânicas',
    heroSubtitle:
      'Estratégias avançadas de arquitetura de categorias, marcação de produtos, performance e canal orgânico de vendas sem dependência exclusiva de anúncios pagos.',
    targetKeyword: 'seo para e-commerce',
    metaTitle: 'SEO para E-commerce e Lojas Virtuais | Vendas Orgânicas',
    metaDescription:
      'SEO especializado em e-commerce: otimização de categorias, Schema Product, faceted navigation e Google Merchant Center orgânico para multiplicar vendas.',
    schemaType: 'CommerceService',
    sections: [
      {
        title: 'Arquitetura de Categorias, Subcategorias e Filtros Facetados',
        subsections: [
          {
            subtitle: 'Tratamento de Paginação, Canonicalização de Filtros e URLs',
            text: 'Organizamos a taxonomia da sua loja virtual para evitar a criação infinita de URLs duplicadas geradas por filtros de cor, tamanho e marca. Aplicamos tags canonicals precisas e regras de noindex em filtros irrelevantes, preservando a autoridade de pesquisa do domínio.',
          },
          {
            subtitle: 'Mapeamento de Intenção Transacional em Long-Tail Keywords',
            text: 'Identificamos termos específicos de alta intenção de compra pesquisados por clientes qualificados, direcionando tráfego direto para páginas de categoria e produto prontas para conversão.',
          },
        ],
      },
      {
        title: 'Otimização Semântica de Páginas de Produto e Rich Snippets (Product Schema)',
        subsections: [
          {
            subtitle: 'Marcação JSON-LD de Preço, Estoque, Avaliações e Marca',
            text: 'Injetamos dados estruturados oficiais de Product no código de cada mercadoria. Isso faz com que seus produtos exibam estrelas de avaliação, preço atualizado e disponibilidade em estoque diretamente nos resultados de busca do Google.',
          },
          {
            subtitle: 'Copywriting de Produto Focado em Resolução de Dúvidas',
            text: 'Desenvolvemos descrições originais e detalhadas para seus itens de curva A, superando o conteúdo padrão fornecido pelos fabricantes e eliminando problemas de duplicação com concorrentes.',
          },
        ],
      },
      {
        title: 'Integração com Google Merchant Center Orgânico e Feeds',
        subsections: [
          {
            subtitle: 'Sincronização de Dados para Listagens Gratuitas do Google Shopping',
            text: 'Configuramos e otimizamos o feed XML/API de produtos para permitir que seus itens apareçam gratuitamente na aba "Shopping" do Google, ampliando o alcance da sua loja sem custo por clique.',
          },
          {
            subtitle: 'Otimização de Títulos e Atributos no Feed',
            text: 'Enriquecemos os atributos de marca, GTIN/EAN, gênero e material nos dados do feed, garantindo a exibição perfeita para pesquisas de intenção específica.',
          },
        ],
      },
      {
        title: 'Velocidade de Carregamento e Conversão no Checkout Orgânico',
        subsections: [
          {
            subtitle: 'Compressão e Carregamento Responsivo de Mídias',
            text: 'Aceleramos o carregamento das galerias de imagens de produto utilizando estratégias de carregamento diferido (lazy loading) e formatos modernos de imagem.',
          },
          {
            subtitle: 'Redução de Abandonos na Experiência Mobile',
            text: 'Simplificamos a navegação móvel da loja virtual, reduzindo pontos de atrito no botão de compra e na navegação até o carrinho.',
          },
        ],
      },
    ],
    processSteps: [
      {
        number: '01',
        title: 'Auditoria de Taxonomia',
        description: 'Análise detalhada de categorias, filtros, paginação e indexação da loja virtual.',
      },
      {
        number: '02',
        title: 'Injeção de Schema Product',
        description: 'Implementação de marcações JSON-LD para exibição de preço, estrelas e estoque nos resultados.',
      },
      {
        number: '03',
        title: 'Otimização do Feed Shopping',
        description: 'Integração com Google Merchant Center para exibição gratuita de produtos no Google Shopping.',
      },
      {
        number: '04',
        title: 'Escala de Vendas Orgânicas',
        description: 'Acompanhamento contínuo da receita e taxa de conversão originadas do canal orgânico.',
      },
    ],
    faqs: [
      {
        question: 'Por que descrições de produtos vindas do fornecedor prejudicam o e-commerce?',
        answer: 'Descrições idênticas fornecidas por fabricantes são publicadas em centenas de lojas virtuais ao mesmo tempo. O Google considera esse texto como conteúdo duplicado e prioriza sites com conteúdo original.',
      },
      {
        question: 'Como resolver o problema de milhares de páginas criadas por filtros de busca?',
        answer: 'Configuramos regras de faceted navigation no servidor ou via tags canonicals/robots, permitindo que apenas os filtros com volume real de busca sejam indexados pelo Google.',
      },
      {
        question: 'É possível aparecer de graça na aba Google Shopping?',
        answer: 'Sim! O Google oferece listagens orgânicas gratuitas na aba Shopping para lojas virtuais que mantêm um feed de produtos devidamente configurado e sem erros no Google Merchant Center.',
      },
      {
        question: 'Vocês atendem quais plataformas de e-commerce?',
        answer: 'Atendemos lojas em Shopify, VTEX, WooCommerce, Magento/Adobe Commerce, Nuvemshop, Tray, Loja Integrada e plataformas proprietárias.',
      },
      {
        question: 'Como medir o ROI do SEO em uma loja virtual?',
        answer: 'Configuramos o comércio eletrônico avançado no GA4 para medir exatamente quanto em reais foi faturado a partir de acessos orgânicos vindos das pesquisas no Google.',
      },
    ],
    comparativeTable: {
      headers: ['Ponto de Otimização', 'Loja Padrão Sem SEO', 'E-commerce Otimizado Omar SEO'],
      rows: [
        {
          feature: 'Listagem no Google',
          traditional: 'Apenas texto simples sem destaque',
          omarSeo: 'Rich Snippets com estrelas, preço e disponibilidade em estoque',
        },
        {
          feature: 'Navegação por Filtros',
          traditional: 'Milhares de URLs duplicadas gerando punição',
          omarSeo: 'URLs amigáveis e canonicalizadas estrategicamente',
        },
        {
          feature: 'Aba Google Shopping',
          traditional: 'Apenas anúncios pagos via Google Ads',
          omarSeo: 'Listagens orgânicas gratuitas ativas no Google Merchant',
        },
      ],
    },
  },

  'link-building': {
    slug: 'link-building',
    name: 'Link Building e Digital PR',
    heroBadge: 'Autoridade e Reputação de Marca',
    heroTitle: 'Link Building Profissional e Digital PR em Curitiba',
    heroSubtitle:
      'Construa autoridade de domínio real, menções de marca qualificadas e backlinks contextuais de portais de alta credibilidade.',
    targetKeyword: 'link building / autoridade de domínio',
    metaTitle: 'Link Building e Digital PR | Conquista de Autoridade de Domínio',
    metaDescription:
      'Estratégia ética de Link Building e Digital PR. Conquiste backlinks de alta autoridade, menções de marca e proteção contra atualizações do Google.',
    schemaType: 'PRService',
    sections: [
      {
        title: 'Criação de Ativos Linkáveis e Pesquisas Proprietárias',
        subsections: [
          {
            subtitle: 'Desenvolvimento de Estudos de Dados e Ferramentas Únicas',
            text: 'Desenvolvemos pesquisas inéditas, calculadoras interativas, infográficos e relatórios setoriais capazes de atrair backlinks espontâneos de veículos de imprensa, blogs especializados e portais de referência no Brasil.',
          },
          {
            subtitle: 'Atração Orgânica de Links Naturais e Contextuais',
            text: 'Em vez de comprar links em esquemas spammers que violam as diretrizes do Google, criamos motivos reais para que outros sites queiram citar a sua marca como fonte confiável de dados.',
          },
        ],
      },
      {
        title: 'Prospecção Ativa e Relacionamento com Imprensa e Portais do Nicho',
        subsections: [
          {
            subtitle: 'Digital PR e Conexão com Veículos de Comunicação',
            text: 'Relacionamo-nos com jornalistas, editores e influenciadores do seu setor em Curitiba, Paraná e no âmbito nacional, posicionando os porta-vozes da sua empresa como especialistas do mercado.',
          },
          {
            subtitle: 'Conquista de Menções Contextuais sem Práticas Nocivas',
            text: 'Garantimos que cada link conquistado esteja inserido dentro de conteúdos editorialmente relevantes e com textos-âncora naturais, construindo um perfil de autoridade defensável.',
          },
        ],
      },
      {
        title: 'Análise de Perfil de Backlinks e Proteção Contra Algoritmos',
        subsections: [
          {
            subtitle: 'Auditoria de Links Tóxicos e Gestão do Arquivo Disavow',
            text: 'Analisamos continuamente os backlinks que apontam para o seu site para identificar ataques de SEO negativo ou links de baixa qualidade. Caso necessário, submetemos a desavaliação formal junto ao Google.',
          },
          {
            subtitle: 'Distribuição Natural de Textos-Âncora e Diversidade de Domínios',
            text: 'Mantemos o equilíbrio saudável no perfil de links do seu domínio, mesclando textos-âncora institucionais, de palavra-chave exata, variações semânticas e URLs diretas.',
          },
        ],
      },
      {
        title: 'Co-ocorrência Semântica e Sinais de Confiança de Marca',
        subsections: [
          {
            subtitle: 'Menções de Marca sem Link como Sinal de Autoridade',
            text: 'O Google analisa menções do nome da sua empresa mesmo quando não há um hiperlink direto. Fortalecemos a presença da sua marca em fóruns, portais e mídias regionais.',
          },
          {
            subtitle: 'Consolidação de Entidade no Grafo de Conhecimento',
            text: 'Trabalhamos para conectar a sua marca aos principais conceitos do seu mercado no Google Knowledge Graph, elevando os sinais de E-E-A-T (Experiência, Expertise, Autoridade e Confiabilidade).',
          },
        ],
      },
    ],
    processSteps: [
      {
        number: '01',
        title: 'Auditoria de Perfil de Links',
        description: 'Análise completa dos backlinks atuais, avaliação de autoridade (DR/DA) e remoção de links nocivos.',
      },
      {
        number: '02',
        title: 'Criação do Ativo Linkável',
        description: 'Desenvolvimento do conteúdo ou estudo proprietário que servirá de âncora para a campanha de PR.',
      },
      {
        number: '03',
        title: 'Outreach & Conexão de Mídia',
        description: 'Apresentação estratégica do ativo para jornalistas, editores e portais influentes do setor.',
      },
      {
        number: '04',
        title: 'Mensuração de Autoridade',
        description: 'Acompanhamento do ganho de autoridade de domínio e impacto nas posições orgânicas do site.',
      },
    ],
    faqs: [
      {
        question: 'Comprar backlinks no Mercado Livre ou fóruns funciona?',
        answer: 'Não! A compra massiva de links de baixa qualidade em fazendas de links (link farms) é explicitamente proibida pelo Google e resulta em punições manuais ou desvalorização total do domínio pelo algoritmo SpamBrain.',
      },
      {
        question: 'O que é Digital PR e qual a relação com o SEO?',
        answer: 'Digital PR é a estratégia de relações públicas focada no ambiente digital. Ela gera cobertura de imprensa e menções em portais relevantes, trazendo backlinks valiosos e fortalecendo a autoridade da marca.',
      },
      {
        question: 'O que significa E-E-A-T nas diretrizes do Google?',
        answer: 'E-E-A-T significa Experience (Experiência), Expertise (Especialidade), Authoritativeness (Autoridade) e Trustworthiness (Confiabilidade). O Link Building ético é a principal ferramenta para comprovar a autoridade da sua empresa.',
      },
      {
        question: 'Quantos backlinks são necessários para colocar meu site em primeiro lugar?',
        answer: 'Qualidade supera quantidade. Um único backlink vindo de um grande portal de notícias ou universidade vale mais do que centenas de links em blogs irrelevantes.',
      },
      {
        question: 'Como garantir que os links conquistados não serão removidos?',
        answer: 'Trabalhamos com matérias editoriais legítimas e conteúdos de alto valor que permanecem publicados de forma permanente nas plataformas parceiras.',
      },
    ],
    comparativeTable: {
      headers: ['Prática de Links', 'Link Building Spam (Antigo)', 'Link Building & Digital PR Omar SEO'],
      rows: [
        {
          feature: 'Origem dos Links',
          traditional: 'Blogs abandonados e diretórios automáticos',
          omarSeo: 'Portais de notícias reais, blogs do setor e veículos de imprensa',
        },
        {
          feature: 'Risco de Punição',
          traditional: 'Altíssimo risco de queda brusca no Google',
          omarSeo: 'Zero risco de punição (Estratégia 100% White Hat)',
        },
        {
          feature: 'Impacto na Marca',
          traditional: 'Nenhum valor institucional além de métricas manipuladas',
          omarSeo: 'Geração de autoridade, tráfego direto de referência e reputação',
        },
      ],
    },
  },

  'cro-otimizacao-conversao': {
    slug: 'cro-otimizacao-conversao',
    name: 'CRO e Otimização de Conversão',
    heroBadge: 'Rendimento Máximo por Visitante',
    heroTitle: 'CRO e Otimização de Conversão em Curitiba: Transforme Visitantes em Vendas',
    heroSubtitle:
      'Aumente o faturamento e a captação de leads do seu site sem precisar gastar mais para atrair novos visitantes.',
    targetKeyword: 'cro / otimização de conversão',
    metaTitle: 'CRO e Otimização de Conversão | Aumente Suas Vendas Orgânicas',
    metaDescription:
      'CRO (Conversion Rate Optimization): elimine pontos de atrito, otimize páginas de destino e aumente a conversão em leads e vendas no seu site.',
    schemaType: 'OptimizationService',
    sections: [
      {
        title: 'Análise de Fricção e Comportamento do Usuário nas Landing Pages',
        subsections: [
          {
            subtitle: 'Mapeamento de Mapas de Calor (Heatmaps) e Gravações de Sessão',
            text: 'Analisamos exatamente onde os usuários clicam, até onde rolam a tela e em quais momentos hesitam antes de abandonar o seu site. Usamos dados comportamentais reais para identificar pontos de atrito na experiência de navegação.',
          },
          {
            subtitle: 'Identificação de Pontos de Abandono em Formulários e Botões',
            text: 'Auditamos todos os formulários de contato e checkout. Eliminamos campos desnecessários e aumentamos a clareza das chamadas para ação (CTAs), facilitando o envio de mensagens de solicitação de orçamento.',
          },
        ],
      },
      {
        title: 'Alinhamento Entre Intenção de Busca e Proposta de Valor',
        subsections: [
          {
            subtitle: 'Sincronização da Palavra-Chave Orgânica com o Título Principal',
            text: 'Garantimos que a promessa apresentada na pesquisa do Google seja imediatamente confirmada ao abrir a página de destino. O alinhamento perfeito entre a expectativa do usuário e o conteúdo reduz a taxa de rejeição e acelera a conversão.',
          },
          {
            subtitle: 'Clareza na Apresentação de Benefícios e Elementos de Prova Social',
            text: 'Aumentamos a persuasão do seu site inserindo depoimentos de clientes, selos de garantia, dados de experiência do profissional e casos de sucesso visíveis logo no primeiro dobra de tela.',
          },
        ],
      },
      {
        title: 'Testes A/B e Validação Científica de Hipóteses de Design',
        subsections: [
          {
            subtitle: 'Criação de Variações de Headings, CTAs e Layouts',
            text: 'Desenvolvemos versões alternativas para páginas estratégicas do site. Testamos diferentes abordagens de texto, cores de botões e disposição de elementos para identificar cientificamente qual versão gera mais faturamento.',
          },
          {
            subtitle: 'Execução sem Impacto na Velocidade de Carregamento',
            text: 'Implementamos experimentos de CRO utilizando técnicas leves de código que não desaceleram o tempo de carregamento da página nem prejudicam as métricas do Core Web Vitals.',
          },
        ],
      },
      {
        title: 'Rastreamento Avançado de Eventos e Atribuição de Conversão',
        subsections: [
          {
            subtitle: 'Configuração de Metas no Google Analytics 4 e GTM',
            text: 'Configuramos o rastreamento preciso de cada evento relevante: cliques no botão de WhatsApp, ligações telefônicas, envios de formulário e compras finalizadas.',
          },
          {
            subtitle: 'Mapeamento do Retorno Financeiro por Página de Entrada',
            text: 'Entregamos relatórios claros demonstrando exatamente quais páginas orgânicas trouxeram os clientes mais lucrativos para o seu negócio.',
          },
        ],
      },
    ],
    processSteps: [
      {
        number: '01',
        title: 'Diagnóstico de Fricção',
        description: 'Análise de dados no GA4, instalação de mapas de calor e identificação de gargalos de conversão.',
      },
      {
        number: '02',
        title: 'Formulação de Hipóteses',
        description: 'Elaboração de melhorias visuais e de copywriting focadas nos pontos de maior abandono.',
      },
      {
        number: '03',
        title: 'Implementação de Melhorias',
        description: 'Ajuste de textos, botões, formulários e prova social diretamente no código das páginas.',
      },
      {
        number: '04',
        title: 'Validação de Ganho de Receita',
        description: 'Mapeamento do aumento percentual da taxa de conversão e do faturamento gerado.',
      },
    ],
    faqs: [
      {
        question: 'O que é CRO e qual a diferença em relação ao SEO?',
        answer: 'O SEO foca em trazer mais visitantes qualificados das pesquisas do Google para o seu site. O CRO (Otimização da Taxa de Conversão) foca em transformar uma porcentagem maior desses visitantes em clientes pagantes.',
      },
      {
        question: 'Minha empresa precisa ter muito tráfego para aplicar o CRO?',
        answer: 'Não. Mesmo em sites com tráfego moderado, pequenas correções em formulários, botões de WhatsApp e prova social já geram aumento imediato no número de orçamentos recebidos.',
      },
      {
        question: 'O CRO afeta negativamente o posicionamento no Google?',
        answer: 'Pelo contrário! Páginas com melhor taxa de conversão e menor taxa de rejeição transmitem sinais positivos de utilidade para o algoritmo do Google, ajudando a subir posições.',
      },
      {
        question: 'Como saber se meu botão de WhatsApp está funcionando direito?',
        answer: 'Configuramos eventos personalizados via Google Tag Manager para rastrear cada clique no WhatsApp, gravando a origem exata da página que gerou aquele contato.',
      },
      {
        question: 'Quanto tempo dura um projeto de otimização de conversão?',
        answer: 'Ajustes imediatos de UX/UI podem ser feitos em poucos dias. Em projetos contínuos, realizamos ciclos mensais de testes para aumentar progressivamente o rendimento da plataforma.',
      },
    ],
    comparativeTable: {
      headers: ['Métrica de Desempenho', 'Site sem Ajuste de CRO', 'Site com CRO Omar SEO'],
      rows: [
        {
          feature: 'Taxa de Conversão Média',
          traditional: 'Abaixo de 0.8% dos visitantes convertem',
          omarSeo: 'Entre 2.5% e 5.0%+ de visitantes convertidos',
        },
        {
          feature: 'Formulários de Contato',
          traditional: 'Campos extensos com alta taxa de desistência',
          omarSeo: 'Formulários fluidos de alta resposta e clique direto no WhatsApp',
        },
        {
          feature: 'Aproveitamento de Tráfego',
          traditional: 'Necessidade de investir mais dinheiro em Ads',
          omarSeo: 'Mais vendas com exatamente o mesmo volume de acessos atuais',
        },
      ],
    },
  },

  'geo-otimizacao-ia': {
    slug: 'geo-otimizacao-ia',
    name: 'GEO e Otimização para IA',
    heroBadge: 'Presença em ChatGPT, Gemini e Claude',
    heroTitle: 'GEO (Generative Engine Optimization): Posicione Sua Marca na Era da Inteligência Artificial',
    heroSubtitle:
      'Prepare seu site para ser citado, recomendado e utilizado como fonte oficial de dados pelas respostas do ChatGPT, Google AI Overviews, Perplexity e Claude.',
    targetKeyword: 'geo / otimização para IA / AEO',
    metaTitle: 'GEO e Otimização para IA | ChatGPT, Gemini e Perplexity',
    metaDescription:
      'Generative Engine Optimization (GEO): prepare a sua empresa para ser citada pelo ChatGPT, Gemini, Perplexity e Claude com dados estruturados e arquitetura para IA.',
    schemaType: 'AIOptimizationService',
    sections: [
      {
        title: 'Estruturação de Entidades e Presença no Knowledge Graph',
        subsections: [
          {
            subtitle: 'Vinculação de Dados da Empresa com Fontes Globais de Autoridade',
            text: 'Conectamos a entidade da sua empresa aos grafos de conhecimento mantidos pelas grandes Big Techs. Injetamos dados estruturados Schema.org conectando sua marca, fundador, localização e produtos a fontes confiáveis de autoridade.',
          },
          {
            subtitle: 'Marcações JSON-LD Específicas para Consumo por LLMs',
            text: 'Desenvolvemos códigos JSON-LD contendo propriedades detalhadas sobre seus serviços. Isso garante que os modelos de linguagem (LLMs) leiam e compreendam seus diferenciais sem distorções de interpretação.',
          },
        ],
      },
      {
        title: 'Otimização de Conteúdo para Mencionamento Direto por IAs (AEO)',
        subsections: [
          {
            subtitle: 'Respostas Diretas, Sintéticas e Citáveis para AI Overviews',
            text: 'Estruturamos os textos do seu site em formatos diretos de pergunta e resposta, listas numeradas e tabelas de dados. Essa técnica facilita a extração de trechos exatos para os resumos de IA do Google (AI Overviews) e respostas do Perplexity.',
          },
          {
            subtitle: 'Uso de Estatísticas e Prova Técnica Incontestável',
            text: 'Inserimos dados numéricos, fontes de referência e metodologias proprietárias no conteúdo. Modelos de inteligência artificial priorizam a citação de fontes que fornecem dados empíricos e fundamentados.',
          },
        ],
      },
      {
        title: 'Liberação e Indexação para Crawlers de IA (GPTBot, ClaudeBot, PerplexityBot)',
        subsections: [
          {
            subtitle: 'Configuração dos Arquivos Robots.txt e Cabeçalhos HTTP',
            text: 'Garantimos que os robôs coletores das principais plataformas de IA (como GPTBot, OAI-SearchBot, ClaudeBot e PerplexityBot) tenham acesso livre e prioritário para ler o conteúdo do seu site.',
          },
          {
            subtitle: 'Criação dos Arquivos llms.txt e llms-full.txt na Raiz do Domínio',
            text: 'Geramos e mantemos atualizados os arquivos llms.txt e llms-full.txt na raiz do seu site, fornecendo um resumo perfeitamente indexado sobre a sua empresa para consumo por assistentes virtuais.',
          },
        ],
      },
      {
        title: 'Equilíbrio Entre Citação em IA e Conversão de Negócios',
        subsections: [
          {
            subtitle: 'Transformação de Respostas de IA em Visitas e Contatos',
            text: 'Desenvolvemos estratégias de marcação que incentivam o assistente de IA a citar a URL do seu site como fonte recomendada de contratação, gerando cliques qualificados de usuários prontos para comprar.',
          },
          {
            subtitle: 'Monitoramento Contínuo da Presença da Marca nas IAs',
            text: 'Testamos frequentemente prompts reais de consumidores do seu segmento no ChatGPT, Gemini, Claude e Perplexity para acompanhar a evolução da menção da sua marca.',
          },
        ],
      },
    ],
    processSteps: [
      {
        number: '01',
        title: 'Auditoria de Presença em IA',
        description: 'Testes de prompts em ChatGPT, Gemini e Perplexity para avaliar como a sua marca é citada atualmente.',
      },
      {
        number: '02',
        title: 'Estruturação de Entidade & JSON-LD',
        description: 'Injeção de marcações de entidade avançadas para vincular sua empresa aos Knowledge Graphs globais.',
      },
      {
        number: '03',
        title: 'Implementação llms.txt e Crawlers',
        description: 'Criação dos arquivos de síntese técnica para IA e liberação total dos robôs de leitura no robots.txt.',
      },
      {
        number: '04',
        title: 'Monitoramento de Citações',
        description: 'Acompanhamento periódico do aparecimento da sua marca nas respostas sintetizadas dos modelos de linguagem.',
      },
    ],
    faqs: [
      {
        question: 'O que é GEO (Generative Engine Optimization)?',
        answer: 'GEO é a evolução do SEO focada em otimizar sites e marcas para serem compreendidos, recomendados e citados como fontes oficiais de resposta pelos sistemas de Inteligência Artificial como ChatGPT, Gemini, Perplexity e Claude.',
      },
      {
        question: 'Qual a diferença entre o SEO tradicional e o GEO?',
        answer: 'O SEO tradicional foca em ranquear links em uma lista de resultados de busca. O GEO foca em estruturar o conhecimento da sua marca para que a inteligência artificial cite sua empresa como a melhor solução durante uma conversa com o usuário.',
      },
      {
        question: 'O que são os arquivos llms.txt e llms-full.txt?',
        answer: 'São arquivos padronizados inseridos na raiz do site que oferecem uma síntese limpa, sem ruídos de layout, sobre a empresa, seus serviços e contatos, otimizando a leitura por agentes e robôs de IA.',
      },
      {
        question: 'O Google AI Overviews vai acabar com as visitas nos sites?',
        answer: 'Não para sites com estratégias de GEO bem consolidadas. Sites que estruturam seus dados para IA tornam-se as fontes citadas com links diretamente dentro do painel do AI Overviews, recebendo acessos altamente qualificados.',
      },
      {
        question: 'Minha empresa precisa alterar todo o conteúdo do site para fazer GEO?',
        answer: 'Não. Realizamos ajustes de estruturação sintática, adição de dados JSON-LD e criação de blocos citáveis que convivem perfeitamente com o layout e o conteúdo comercial já existente.',
      },
    ],
    comparativeTable: {
      headers: ['Tecnologia de Busca', 'Site Tradicional (Apenas SEO)', 'Site Preparado para GEO (Omar SEO)'],
      rows: [
        {
          feature: 'Leitura por ChatGPT / Perplexity',
          traditional: 'Bloqueado no robots.txt ou mal compreendido',
          omarSeo: 'Acesso liberado aos crawlers de IA com resumo em llms.txt',
        },
        {
          feature: 'Google AI Overviews',
          traditional: 'Ignorado pelas sínteses geradas por IA',
          omarSeo: 'Citado como fonte oficial no cartão do AI Overviews',
        },
        {
          feature: 'Conectividade de Entidade',
          traditional: 'Apenas texto simples de HTML sem marcação',
          omarSeo: 'Vinculado ao Knowledge Graph com Schema JSON-LD completo',
        },
      ],
    },
  },
};
