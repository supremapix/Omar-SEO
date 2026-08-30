export interface BlogSection {
  heading?: string;
  subheading?: string;
  paragraphs: string[];
  bulletPoints?: string[];
  paragraphsAfter?: string[];
  quote?: string;
  highlightBox?: {
    title: string;
    description: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: 'SEO Técnico' | 'SEO Local' | 'GEO & IA' | 'Performance' | 'Estratégia';
  date: string;
  dateIso: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  featured: boolean;
  sections: BlogSection[];
  relatedServices: {
    title: string;
    slug: string;
    description: string;
  }[];
  faq?: {
    question: string;
    answer: string;
  }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'por-que-site-nao-aparece-no-google',
    slug: 'por-que-site-nao-aparece-no-google',
    title: 'Por Que Seu Site Pode Existir no Google e Mesmo Assim Não Aparecer nas Buscas?',
    metaTitle: 'Por Que Meu Site Não Aparece no Google? Rastreamento e Indexação | Omar SEO',
    metaDescription: 'Descubra a diferença crucial entre rastreamento, indexação e posicionamento. Entenda por que sites no ar continuam invisíveis no Google e como resolver.',
    excerpt: 'Ter um site publicado na internet não significa automaticamente que ele aparecerá nas pesquisas do Google. Entenda a diferença vital entre rastreamento, indexação e posicionamento.',
    category: 'SEO Técnico',
    date: '14 de Agosto de 2026',
    dateIso: '2026-08-14T08:00:00-03:00',
    readTime: '6 min de leitura',
    featured: true,
    author: {
      name: 'Omar Skafi',
      role: 'Especialista em SEO, GEO e Engenharia Web',
      avatar: 'https://img.supremasite.com.br/omar-skafi.webp',
    },
    relatedServices: [
      {
        title: 'Auditoria SEO Técnica',
        slug: '/servicos/auditoria-seo',
        description: 'Diagnóstico detalhado de crawl budget, páginas indexadas e erros de Search Console.',
      },
      {
        title: 'Setup de SEO Técnico',
        slug: '/servicos/setup-seo-tecnico',
        description: 'Implementação de sitemaps XML, canonicals, Schema.org e renderização estática.',
      },
      {
        title: 'SEO Local em Curitiba',
        slug: '/servicos/seo-local',
        description: 'Criação de páginas regionais consistentes para bairros e cidades sem duplicação.',
      },
    ],
    sections: [
      {
        paragraphs: [
          'Ter um site publicado na internet não significa automaticamente que ele aparecerá quando alguém procurar seus produtos ou serviços no Google.',
          'Essa é uma das dúvidas mais comuns entre empresários: “Meu site está funcionando normalmente. Então por que não encontro minha empresa no Google?”',
          'A resposta passa por três processos importantes e distintos: rastreamento, indexação e posicionamento.',
          'Entender essa diferença ajuda a compreender por que algumas empresas conseguem conquistar visibilidade orgânica enquanto outras permanecem praticamente invisíveis nas buscas.',
        ],
        highlightBox: {
          title: 'Os 3 Pilares do Fluxo do Google',
          description: '1. Rastreamento (Descoberta) ➔ 2. Indexação (Compreensão e Armazenamento no Banco) ➔ 3. Posicionamento / Ranking (Decisão de Relevância na Busca).',
        },
      },
      {
        heading: 'Primeiro, o Google precisa encontrar seu site',
        paragraphs: [
          'Antes de mostrar uma página nos resultados, o Google precisa descobrir que ela existe.',
          'Isso normalmente acontece quando seus sistemas encontram links apontando para aquela página ou quando recebem informações por meio de recursos como o sitemap do site.',
          'O sitemap funciona como uma espécie de mapa das páginas que o proprietário considera importantes.',
          'Imagine uma empresa que possui páginas sobre:',
        ],
        bulletPoints: [
          'Criação de sites;',
          'SEO e otimização para buscas;',
          'Google Maps e Perfil da Empresa;',
          'Marketing digital e conversão;',
          'Serviços em Curitiba;',
          'Serviços em São Paulo.',
        ],
        paragraphsAfter: [
          'Se essas páginas estiverem corretamente organizadas e acessíveis aos mecanismos de busca, o Google terá mais facilidade para descobri-las.',
          'Encontrar uma página, entretanto, ainda não significa colocá-la nos resultados.',
        ],
      },
      {
        heading: 'Depois vem a indexação',
        paragraphs: [
          'Após encontrar uma página, o mecanismo de busca precisa analisar seu conteúdo e decidir se ela deve entrar em seu índice.',
          'Podemos pensar no índice como uma enorme biblioteca digital.',
          'O Google precisa compreender assuntos como:',
        ],
        bulletPoints: [
          'Sobre o que aquela página fala;',
          'Qual serviço está sendo apresentado;',
          'Para qual público o conteúdo é relevante;',
          'Qual empresa está por trás das informações (E-E-A-T);',
          'Se existe outra página muito parecida dentro ou fora do site;',
          'Se o conteúdo acrescenta informação útil e exclusiva;',
          'Quais localidades e bairros são atendidos.',
        ],
        paragraphsAfter: [
          'É justamente nessa etapa que muitos problemas de SEO aparecem.',
          'Um site pode possuir centenas de páginas publicadas e ainda assim ter apenas uma parcela delas efetivamente considerada relevante pelo mecanismo de busca.',
        ],
      },
      {
        heading: 'Ter muitas páginas não significa ter mais visibilidade',
        paragraphs: [
          'Existe uma ideia bastante comum de que criar centenas ou milhares de páginas automaticamente aumenta as possibilidades de aparecer no Google.',
          'Isso depende diretamente da qualidade e autenticidade dessas páginas.',
          'Considere uma empresa que atende diversas cidades e cria páginas como “Serviço em Curitiba”, “Serviço em Londrina”, “Serviço em Maringá” e “Serviço em Joinville”.',
          'A estratégia faz todo sentido quando cada página realmente ajuda a pessoa daquela região com fotos locais, endereço, bairros e casos reais. O problema surge quando centenas de páginas possuem exatamente o mesmo texto, substituindo apenas o nome da cidade.',
          'Nesse cenário de "doorway pages" ou conteúdo duplicado, o mecanismo de busca encontra pouco valor adicional entre uma página e outra e simplesmente deixa de indexá-las.',
          'Uma página local consistente precisa explicar de maneira verdadeira a relação da empresa com aquela região, os serviços disponíveis, a área atendida e outras informações que façam sentido para quem realizou aquela busca.',
        ],
        quote: 'Uma página local só indexa e posiciona se entregar contexto regional genuíno, e não apenas uma troca mecânica da palavra da cidade.',
      },
      {
        heading: 'Conteúdo precisa responder à intenção da pesquisa',
        paragraphs: [
          'Suponha que uma pessoa pesquise “empresa de SEO em Curitiba”. Ela provavelmente não está procurando uma explicação acadêmica sobre a história dos mecanismos de busca de 1998.',
          'Existe uma intenção comercial e local nessa pesquisa. A página adequada precisa facilitar respostas para perguntas naturais do usuário:',
        ],
        bulletPoints: [
          'O que essa empresa faz exatamente?',
          'Ela atende a minha cidade ou o meu bairro?',
          'Como funciona o serviço e o processo de trabalho?',
          'Em quais situações meu negócio precisa de SEO?',
          'Quanto tempo esse trabalho costuma levar?',
          'Como posso solicitar uma análise ou orçamento?',
        ],
        paragraphsAfter: [
          'Quando o conteúdo responde às dúvidas relacionadas ao assunto principal, cria-se um contexto semântico muito mais completo e persuasivo.',
        ],
      },
      {
        heading: 'O que significa conteúdo semântico?',
        paragraphs: [
          'Conteúdo semântico não consiste simplesmente em repetir uma palavra-chave muitas vezes (o velho keyword stuffing).',
          'Seu objetivo é desenvolver um assunto com contexto suficiente para que pessoas e sistemas de busca compreendam claramente seu significado e entidades conectadas.',
          'Uma página sobre SEO local, por exemplo, pode abordar naturalmente Google Maps, Perfil da Empresa no Google, localização física, avaliações, páginas regionais, relevância local e intenção de busca.',
          'Todos esses conceitos possuem relação entre si e constroem uma teia semântica sólida que transmite autoridade ao Google e aos assistentes de IA.',
        ],
      },
      {
        heading: 'A estrutura técnica também interfere nos bastidores',
        paragraphs: [
          'Existe ainda uma parte crítica que o visitante comum normalmente não percebe visualmente. Um site pode parecer perfeito no design e apresentar gravíssimas dificuldades técnicas para os robôs dos mecanismos de busca.',
          'Entre os elementos que precisam estar rigorosamente configurados estão:',
        ],
        bulletPoints: [
          'URLs limpas e amigáveis;',
          'Sitemap XML dinâmico e atualizado;',
          'Redirecionamentos 301 corretos sem loops;',
          'Tags canônicas (rel=canonical) consistentes;',
          'Títulos e meta tags descritivas;',
          'Hierarquia de títulos (H1, H2, H3) bem encadeada;',
          'Estrutura de links internos (Internal Linking Cluster);',
          'Dados estruturados Schema.org em JSON-LD;',
          'Velocidade e Core Web Vitals (LCP, INP, CLS);',
          'Renderização e entrega de HTML completo (SSR / Prerender).',
        ],
        paragraphsAfter: [
          'Um erro técnico pode enviar informações contraditórias. Por exemplo: o sitemap informa uma versão de uma página enquanto uma tag canônica aponta para outro endereço. Para o visitante tudo parece normal, mas para o Googlebot a página é desconsiderada.',
        ],
      },
      {
        heading: 'Seu site também precisa ser compreendido por outros sistemas (GEO & IA)',
        paragraphs: [
          'A forma como informações online são encontradas está evoluindo em ritmo acelerado.',
          'Além dos mecanismos tradicionais, milhares de tomadores de decisão fazem perguntas consultivas diretamente em ferramentas de IA como ChatGPT, Google Gemini, Perplexity e Claude.',
          'Isso aumenta a importância de apresentar informações claras e verificáveis sobre a empresa, seus serviços, sua localização geográfica, sua especialidade e as relações entre os diferentes conteúdos publicados.',
          'Não existe uma configuração mágica isolada. O caminho mais consistente continua passando por conteúdo acessível, dados Schema.org estruturados, boa arquitetura técnica, autoridade de marca e clareza sobre as entidades apresentadas no site.',
        ],
      },
      {
        heading: 'Como saber se o seu site tem problemas de indexação?',
        paragraphs: [
          'Uma auditoria de SEO técnica verifica a distância exata entre aquilo que a empresa publicou e aquilo que os mecanismos de busca conseguem efetivamente rastrear, interpretar e indexar.',
          'Entre os pontos analisados estão o sitemap.xml, robots.txt, canonicals, redirects, profundidade de links internos, conteúdo duplicado, páginas "thin content" e condições de renderização JavaScript.',
          'Ferramentas como o Google Search Console permitem acompanhar as páginas válidas e as páginas excluídas com motivos como "Rastreada, mas não indexada" ou "Descoberta, mas não rastreada".',
        ],
      },
      {
        heading: 'Aparecer no Google começa antes do ranking',
        paragraphs: [
          'Antes de discutir a disputa pela primeira posição, existe uma pergunta fundamental:',
          '“O Google consegue encontrar, acessar e compreender corretamente as páginas mais importantes do seu site?”',
          'Quando essa base está organizada, torna-se possível trabalhar conteúdo, autoridade, SEO local e estratégias de conversão com consistência e previsibilidade.',
          'No próximo conteúdo desta série, vamos aprofundar o que é SEO técnico e quais elementos trabalham nos bastidores de um site para garantir sua presença sustentável no topo.',
        ],
      },
    ],
  },
  {
    id: 'google-ai-overviews-curitiba',
    slug: 'google-ai-overviews-curitiba',
    title: 'Como o Google AI Overviews Afeta o Tráfego Orgânico em Curitiba',
    metaTitle: 'Google AI Overviews e o Tráfego em Curitiba | Omar SEO',
    metaDescription: 'Entenda como as respostas geradas por IA no topo do Google mudaram a busca orgânica em Curitiba e como preparar seu site.',
    excerpt: 'Entenda como as respostas geradas por Inteligência Artificial no topo do Google mudaram o comportamento de busca em Curitiba e como preparar seu site para ser citado.',
    category: 'GEO & IA',
    date: '10 de Agosto de 2026',
    dateIso: '2026-08-10T09:00:00-03:00',
    readTime: '6 min de leitura',
    featured: false,
    author: {
      name: 'Omar Skafi',
      role: 'Especialista em SEO, GEO e Engenharia Web',
      avatar: 'https://img.supremasite.com.br/omar-skafi.webp',
    },
    relatedServices: [
      {
        title: 'GEO — Otimização para IA',
        slug: '/servicos/geo-otimizacao-ia',
        description: 'Estratégia de inclusão e citações em ChatGPT, Gemini e AI Overviews.',
      },
      {
        title: 'Consultoria de SEO',
        slug: '/servicos/consultoria-seo',
        description: 'Planejamento estratégico para liderança no novo ecossistema de busca.',
      },
    ],
    sections: [
      {
        paragraphs: [
          'O lançamento e expansão do Google AI Overviews no Brasil transformaram a maneira como os usuários interagem com os resultados de busca. Em vez de clicarem imediatamente no primeiro link azul, muitos consumidores leem o resumo sintetizado pela inteligência artificial antes de tomar uma decisão.',
          'Para empresas em Curitiba e Região Metropolitana, essa mudança exige uma evolução estratégica: não basta apenas ranquear palavras-chave; é necessário estruturar o conhecimento da sua empresa com marcações JSON-LD e dados organizados em tabelas e respostas diretas para que a IA cite seu site como a fonte primária de autoridade.',
          'Implementar o protocolo GEO (Generative Engine Optimization) e manter arquivos llms.txt atualizados na raiz do domínio garante que seu negócio não perca tráfego, mas sim conquiste cliques altamente qualificados vindos dos painéis de inteligência artificial.',
        ],
      },
    ],
  },
  {
    id: 'guia-seo-local-google-maps',
    slug: 'guia-seo-local-google-maps',
    title: 'Guia de SEO Local: Como Dominar o Google Maps Bairro a Bairro',
    metaTitle: 'Guia de SEO Local no Google Maps em Curitiba | Omar SEO',
    metaDescription: 'Passo a passo prático para otimizar o Perfil da Empresa no Google e dominar o Local 3-Pack nos bairros de Curitiba.',
    excerpt: 'Passo a passo prático para otimizar o Perfil da Empresa no Google, manter a consistência NAP e criar páginas de bairros de Curitiba sem duplicação de conteúdo.',
    category: 'SEO Local',
    date: '02 de Agosto de 2026',
    dateIso: '2026-08-02T10:00:00-03:00',
    readTime: '8 min de leitura',
    featured: false,
    author: {
      name: 'Omar Skafi',
      role: 'Especialista em SEO, GEO e Engenharia Web',
      avatar: 'https://img.supremasite.com.br/omar-skafi.webp',
    },
    relatedServices: [
      {
        title: 'SEO Local em Curitiba',
        slug: '/servicos/seo-local',
        description: 'Domínio do Google Maps e expansão por bairros de Curitiba e RMC.',
      },
    ],
    sections: [
      {
        paragraphs: [
          'A busca por serviços com intenção "perto de mim" ou direcionada por bairro (como "médico no Batel" ou "restaurante no Água Verde") é a principal geradora de chamadas telefônicas e visitas presenciais no comércio de Curitiba.',
          'A primeira regra do SEO local de alta performance é a consistência NAP (Name, Address, Phone). O nome da sua empresa, o endereço exato com CEP e o número de telefone devem ser rigorosamente idênticos em todos os diretórios da internet.',
          'Além do Perfil da Empresa no Google (GBM), a criação de landing pages autênticas por bairro e município da RMC amplia vertiginosamente o raio de alcance da sua marca nas pesquisas geolocalizadas.',
        ],
      },
    ],
  },
  {
    id: 'react-spa-prerender-seo-tecnico',
    slug: 'react-spa-prerender-seo-tecnico',
    title: 'Por Que SPAs e React Precisam de Pré-Renderização Estática para SEO',
    metaTitle: 'React, SPAs e Pré-Renderização Estática para SEO | Omar SEO',
    metaDescription: 'Entenda por que aplicações React com Vite precisam de pré-renderização HTML para garantir 100% de indexação no Google.',
    excerpt: 'Aplicações modernas construídas com React, Vite ou Vue podem enfrentar sérios problemas de indexação se o Googlebot receber um HTML em branco. Veja a solução.',
    category: 'SEO Técnico',
    date: '25 de Julho de 2026',
    dateIso: '2026-07-25T11:00:00-03:00',
    readTime: '7 min de leitura',
    featured: false,
    author: {
      name: 'Omar Skafi',
      role: 'Especialista em SEO, GEO e Engenharia Web',
      avatar: 'https://img.supremasite.com.br/omar-skafi.webp',
    },
    relatedServices: [
      {
        title: 'Setup de SEO Técnico',
        slug: '/servicos/setup-seo-tecnico',
        description: 'Configuração de pipeline de build com pré-renderização estática e Schema.org.',
      },
    ],
    sections: [
      {
        paragraphs: [
          'Frameworks JavaScript como React proporcionam uma experiência de navegação rápida e fluida para os usuários. No entanto, sem a devida configuração de Server-Side Rendering (SSR) ou pré-renderização estática (Prerendering), os robôs dos buscadores enxergam apenas uma div vazia no HTML inicial.',
          'Embora o Googlebot consiga executar JavaScript, esse processo ocorre em uma segunda onda de renderização que consome orçamento de crawl e pode atrasar em semanas a indexação de novas páginas.',
          'Ao aplicar scripts de pré-renderização estática no pipeline de build, seu site React entrega arquivos HTML completos e com metadados prontos para os crawlers tradicionais e robôs de IA, mantendo a agilidade da SPA para o visitante final.',
        ],
      },
    ],
  },
  {
    id: 'core-web-vitals-inp-seo',
    slug: 'core-web-vitals-inp-seo',
    title: 'O Fim do FID e a Consolidação do INP nos Core Web Vitals',
    metaTitle: 'INP nos Core Web Vitals e Impacto no SEO | Omar SEO',
    metaDescription: 'Como otimizar a métrica Interaction to Next Paint (INP) e manter seu site no verde nas avaliações do Google PageSpeed.',
    excerpt: 'Entenda por que o Google substituiu o First Input Delay (FID) pelo Interaction to Next Paint (INP) e como essa métrica afeta a experiência móvel e os rankings.',
    category: 'Performance',
    date: '15 de Julho de 2026',
    dateIso: '2026-07-15T09:30:00-03:00',
    readTime: '5 min de leitura',
    featured: false,
    author: {
      name: 'Omar Skafi',
      role: 'Especialista em SEO, GEO e Engenharia Web',
      avatar: 'https://img.supremasite.com.br/omar-skafi.webp',
    },
    relatedServices: [
      {
        title: 'CRO & Performance',
        slug: '/servicos/cro-otimizacao-conversao',
        description: 'Otimização de velocidade de resposta e redução de atrito de navegação.',
      },
    ],
    sections: [
      {
        paragraphs: [
          'Em março de 2024, o Google aposentou oficialmente a métrica FID e consolidou o INP (Interaction to Next Paint) como um dos três pilares oficiais do Core Web Vitals.',
          'Enquanto o antigo FID media apenas o tempo de espera do primeiro clique, o INP avalia a latência de todas as interações do usuário durante a navegação inteira pela página. Um site com scripts pesados no evento de clique terá notas baixas no INP.',
          'Otimizar manipuladores de eventos em JavaScript, reduzir tarefas longas na thread principal do navegador e aplicar CSS eficiente são os passos vitais para manter a nota verde do PageSpeed.',
        ],
      },
    ],
  },
  {
    id: 'o-que-e-geo-generative-engine-optimization',
    slug: 'o-que-e-geo-generative-engine-optimization',
    title: 'O que é GEO (Generative Engine Optimization) e Como Funciona na Prática?',
    metaTitle: 'O que é GEO (Generative Engine Optimization)? | Omar SEO',
    metaDescription: 'Descubra como funciona o GEO (Generative Engine Optimization), a nova fronteira da otimização para ser citado por ChatGPT, Gemini e Perplexity.',
    excerpt: 'Entenda o conceito, os pilares e as técnicas de Generative Engine Optimization (GEO) para posicionar sua marca nas respostas sintetizadas por Inteligência Artificial.',
    category: 'GEO & IA',
    date: '28 de Agosto de 2026',
    dateIso: '2026-08-28T09:00:00-03:00',
    readTime: '7 min de leitura',
    featured: false,
    author: {
      name: 'Omar Skafi',
      role: 'Especialista em SEO, GEO e Engenharia Web',
      avatar: 'https://img.supremasite.com.br/omar-skafi.webp',
    },
    relatedServices: [
      {
        title: 'GEO — Otimização para IA',
        slug: '/servicos/geo-otimizacao-ia',
        description: 'Estratégia de inclusão e citações em ChatGPT, Gemini e AI Overviews.',
      },
      {
        title: 'Dados Estruturados Schema.org',
        slug: '/dados-estruturados-schema',
        description: 'Injeção de Schema JSON-LD encadeado para conexão com Knowledge Graph.',
      },
    ],
    sections: [
      {
        heading: 'A Revolução do Comportamento de Busca',
        paragraphs: [
          'A forma como a humanidade busca informações mudou radicalmente nos últimos anos. Embora o mecanismo tradicional de links no Google continue essencial, milhões de tomadores de decisão agora recorrem a assistentes conversacionais de Inteligência Artificial para tirar dúvidas e obter recomendações diretas.',
          'Nesse cenário surge o GEO (Generative Engine Optimization): o conjunto de práticas técnicas, semânticas e estruturais que garantem que os modelos de linguagem (LLMs) como GPT-4o, Gemini, Claude e Perplexity compreendam, confiem e citem sua empresa como fonte de autoridade.',
        ],
        highlightBox: {
          title: 'SEO Tradicional vs. GEO',
          description: 'O SEO foca em ranquear URLs em uma lista de resultados. O GEO foca em ensinar os modelos generativos a mencionarem sua marca como a melhor resposta para o usuário.',
        },
      },
      {
        heading: 'Os Pilares Fundamentais do GEO',
        paragraphs: [
          'Para que uma Inteligência Artificial cite seu site em uma resposta, ela precisa passar por três filtros de confiança:',
        ],
        bulletPoints: [
          '1. Acessibilidade Técnica: Os robôs coletores (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot) precisam ter acesso liberado e prioritário no robots.txt;',
          '2. Síntese Limpa: A presença de arquivos llms.txt na raiz do domínio facilita a absorção do contexto da marca sem ruídos de layout;',
          '3. Conectividade Semântica: A injeção de Schema.org em JSON-LD conecta a empresa, o autor, a localização e os serviços ao Knowledge Graph global;',
          '4. Prova Empírica: Conteúdos contendo estatísticas, metodologias proprietárias e dados verificáveis têm até 40% mais chances de citação.',
        ],
      },
    ],
  },
  {
    id: 'como-aparecer-no-chatgpt-e-gemini',
    slug: 'como-aparecer-no-chatgpt-e-gemini',
    title: 'Como Fazer Sua Empresa Ser Citada nas Respostas do ChatGPT e Google Gemini',
    metaTitle: 'Como Aparecer no ChatGPT e Google Gemini | Guia GEO | Omar SEO',
    metaDescription: 'Aprenda como estruturar seu site e marca para ser recomendado por assistentes de IA como ChatGPT, Gemini, Claude e Perplexity.',
    excerpt: 'Passo a passo prático sobre como otimizar seus ativos digitais com arquivos llms.txt, marcação de entidades e prova social para ser recomendado por IAs.',
    category: 'GEO & IA',
    date: '20 de Agosto de 2026',
    dateIso: '2026-08-20T10:00:00-03:00',
    readTime: '8 min de leitura',
    featured: false,
    author: {
      name: 'Omar Skafi',
      role: 'Especialista em SEO, GEO e Engenharia Web',
      avatar: 'https://img.supremasite.com.br/omar-skafi.webp',
    },
    relatedServices: [
      {
        title: 'SEO e GEO para ChatGPT',
        slug: '/seo-para-chatgpt',
        description: 'Estratégia de entidades digitais e marcação de Schema.org para o ChatGPT.',
      },
      {
        title: 'SEO para Gemini e AI Overviews',
        slug: '/seo-para-gemini',
        description: 'Destaque nos resumos gerados por IA no topo das buscas do Google.',
      },
    ],
    sections: [
      {
        heading: 'Por Que as IAs Recomendam Determinadas Marcas?',
        paragraphs: [
          'Quando um usuário digita no ChatGPT: "Qual é o melhor especialista em SEO em Curitiba?", o modelo não inventa uma resposta aleatória. Ele consulta sua base de treinamento e, no caso de modelos conectados à web em tempo real (como SearchGPT, Perplexity e Gemini), realiza buscas instantâneas.',
          'Ele seleciona empresas que possuem presenças consistentes, entidades claramente mapeadas em Schema.org, citações em portais confiáveis e uma sintaxe de dados organizada.',
        ],
      },
      {
        heading: 'Passo a Passo Prático para Preparar seu Site',
        paragraphs: [
          'Confira as ações prioritárias implementadas pela consultoria do Omar SEO:',
        ],
        bulletPoints: [
          'Criação dos arquivos /llms.txt e /llms-full.txt na raiz do servidor;',
          'Injeção do esquema ProfessionalService e Person com @id padronizado;',
          'Liberar crawlers no robots.txt (GPTBot, PerplexityBot, ClaudeBot);',
          'Criar blocos de Pergunta e Resposta direta (Q&A Schema) nos conteúdos principais;',
          'Manter dados cadastrais (NAP: Nome, Endereço e Telefone) idênticos em todas as plataformas da web.',
        ],
      },
    ],
  },
];

