export interface CommercialIntentData {
  slug: string;
  h1: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  contentParagraphs: string[];
  keyBenefits: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export const COMMERCIAL_INTENTS_DATA: Record<string, CommercialIntentData> = {
  'especialista-seo-curitiba': {
    slug: 'especialista-seo-curitiba',
    h1: 'Especialista em SEO em Curitiba',
    subtitle: 'Engenharia de Visibilidade Orgânica, SEO Técnico, Google Maps e Estruturação de Dados para Empresas.',
    metaTitle: 'Especialista em SEO em Curitiba | Omar SEO',
    metaDescription: 'Omar Skafi é Especialista em SEO em Curitiba. Otimização técnica, Google Maps e GEO para posicionar sua empresa nos primeiros resultados do Google.',
    contentParagraphs: [
      'Contratar um Especialista em SEO em Curitiba é a decisão estratégica mais rentável para empresas que desejam parar de depender exclusivamente de anúncios pagos e construir um ativo digital próprio e duradouro.',
      'Diferente de agências tradicionais que aplicam receitas genéricas, a atuação do especialista Omar Skafi é fundamentada na engenharia de dados e na compreensão profunda de como os algoritmos do Google e das Inteligências Artificiais leem, classificam e recomendam negócios em Curitiba e região.',
      'Nossa metodologia integra auditoria de SEO técnico, arquitetura da informação, estruturação com Schema.org, otimização no Perfil de Empresa do Google (Google Maps) e estratégias de GEO (Generative Engine Optimization) para respostas em ChatGPT, Gemini e Perplexity.'
    ],
    keyBenefits: [
      { title: 'Análise de Intenção de Busca', desc: 'Mapeamos exatamente quais termos seus potenciais clientes pesquisam em Curitiba antes de fechar negócio.' },
      { title: 'SEO On-Page e Semântica Avançada', desc: 'Otimização de títulos, metatags, cabeçalhos e vocabulário controlado para o algoritmo entender seu nicho.' },
      { title: 'Aceleração de Google Maps', desc: 'Apareça nas 3 primeiras posições do mapa local quando o cliente pesquisar serviços perto dele.' },
      { title: 'Preparo para LLMs e IAs', desc: 'Sua empresa estruturada para ser recomendada por assistentes virtuais de inteligência artificial.' }
    ],
    faqs: [
      { question: 'O que faz um Especialista em SEO em Curitiba?', answer: 'Um especialista analisa o código, o conteúdo e a autoridade da sua marca na web para garantir que o Google e as IAs recomendem sua empresa quando clientes buscarem pelos seus produtos e serviços.' },
      { question: 'Qual a diferença entre gestor de tráfego e especialista em SEO?', answer: 'O gestor de tráfego compra anúncios pagos (Google Ads e Meta Ads) que param de gerar cliques quando a verba acaba. O especialista em SEO constrói um posicionamento orgânico duradouro e sustentável.' },
      { question: 'Quanto custa a consultoria de um especialista em SEO em Curitiba?', answer: 'O investimento varia conforme o porte do site, a complexidade do segmento e a abrangência geográfica do projeto. Entre em contato para um diagnóstico personalizado.' }
    ]
  },
  'consultor-seo-curitiba': {
    slug: 'consultor-seo-curitiba',
    h1: 'Consultor de SEO em Curitiba',
    subtitle: 'Acompanhamento Estratégico e Direcionamento Técnico para Elevar o Faturamento Orgânico da sua Empresa.',
    metaTitle: 'Consultor de SEO em Curitiba | Estratégia de Visibilidade',
    metaDescription: 'Consultor de SEO em Curitiba. Diagnósticos detalhados, estratégias de crescimento e otimização para colocar sua empresa na frente da concorrência.',
    contentParagraphs: [
      'A consultoria de SEO em Curitiba conduzida por Omar Skafi oferece um olhar analítico e direto sobre os gargalos do seu site e do seu Perfil de Empresa no Google.',
      'Muitos empresários investem milhares de reais em novo design ou redes sociais, mas continuam invisíveis no momento em que o consumidor toma a decisão de compra no Google. O consultor de SEO identifica exatamente o que está impedindo a indexação e o ranqueamento.',
      'Trabalhamos lado a lado com sua equipe interna ou agência parceira, fornecendo relatórios técnicos acionáveis, priorização por impacto de receita e acompanhamento semanal de evolução.'
    ],
    keyBenefits: [
      { title: 'Diagnóstico Sem Rodeios', desc: 'Identificamos falhas de rastreabilidade, velocidade e relevância que travam seu crescimento.' },
      { title: 'Plano de Ação Priorizado', desc: 'Lista clara de tarefas divididas por esforço versus retorno comercial.' },
      { title: 'Otimização de Conversão (CRO)', desc: 'Não basta atrair o visitante, é preciso transformá-lo em contato comercial no WhatsApp.' },
      { title: 'Transferência de Conhecimento', desc: 'Capacitamos seu time para manter boas práticas na publicação de novos conteúdos.' }
    ],
    faqs: [
      { question: 'Como funciona a consultoria de SEO em Curitiba com Omar Skafi?', answer: 'Iniciamos com uma auditoria técnica profunda. Em seguida, desenhamos o plano de ação personalizado, realizamos as correções e fazemos reuniões periódicas para acompanhamento de resultados.' }
    ]
  },
  'seo-para-empresas': {
    slug: 'seo-para-empresas',
    h1: 'SEO Corporativo para Empresas em Curitiba',
    subtitle: 'Estratégias para Médias e Grandes Empresas B2B e B2C Dominarem as Buscas no Google.',
    metaTitle: 'SEO para Empresas e B2B em Curitiba | Omar SEO',
    metaDescription: 'SEO para empresas e mercado B2B em Curitiba. Posicione sua marca em termos de alta intenção comercial e alcance decisores de compras.',
    contentParagraphs: [
      'No mercado corporativo B2B e B2C, o ciclo de venda é mais longo e exige que sua empresa esteja presente em todas as etapas de pesquisa do comprador.',
      'O SEO para empresas vai além de buscas simples de vizinhança. Envolve a criação de clusters de conteúdo de alta autoridade, estruturação de especificações técnicas, catálogos e landing pages otimizadas para tomadores de decisão.',
      'Omar SEO desenvolve projetos customizados para indústrias, distribuidoras, escritórios de advocacia, clínicas e redes de serviços em Curitiba e todo o Brasil.'
    ],
    keyBenefits: [
      { title: 'Captura de Demanda B2B', desc: 'Atinja diretores e compradores no momento exato em que pesquisam por fornecedores corporativos.' },
      { title: 'Autoridade de Marca e E-E-A-T', desc: 'Consolide os pilares de Experiência, Especialidade, Autoridade e Confiabilidade exigidos pelo Google.' },
      { title: 'Proteção de Marca e Reputação', desc: 'Domine a primeira página do Google para o nome da sua empresa e suas principais marcas.' }
    ],
    faqs: [
      { question: 'Qual o retorno de investimento (ROI) de SEO para empresas?', answer: 'O SEO costuma apresentar o menor Custo de Aquisição de Clientes (CAC) no médio e longo prazo, gerando um fluxo previsível e contínuo de oportunidades qualificadas sem custos por clique.' }
    ]
  },
  'seo-google-maps': {
    slug: 'seo-google-maps',
    h1: 'Otimização de Google Maps em Curitiba',
    subtitle: 'Apareça nas Primeiras Posições do Google Perfil de Empresa e Receba Mais Ligações e Visitas.',
    metaTitle: 'Como Dominar o Google Maps em Curitiba | SEO Local',
    metaDescription: 'Especialista em Google Maps e Perfil da Empresa em Curitiba. Aumente sua visibilidade no pacote local do Google com Omar SEO.',
    contentParagraphs: [
      'O Google Maps é a ferramenta mais poderosa para negócios locais e prestadores de serviços em Curitiba. Quando alguém busca por um serviço "perto de mim", os três primeiros resultados do mapa recebem mais de 70% das interações.',
      'Nossa estratégia de SEO no Google Maps ajusta o Perfil da Empresa (antigo Google Meu Negócio) com precisão cirúrgica: categorias primárias e secundárias corretas, descrição otimizada, cadastro de produtos/serviços, e geolocalização exata.',
      'Também trabalhamos a consistência NAP (Name, Address, Phone) em toda a web para reforçar a confiança dos algoritmos na localização do seu negócio.'
    ],
    keyBenefits: [
      { title: 'Top 3 no Google Local Pack', desc: 'Destaque visual diretamente nos resultados de pesquisa com endereço, nota e botão de rota.' },
      { title: 'Gestão de Avaliações e Prova Social', desc: 'Estratégia para aumentar o número de avaliações 5 estrelas genuínas.' },
      { title: 'Atração Por Proximidade', desc: 'Capte clientes que estão fisicamente no seu bairro ou deslocando-se na região.' }
    ],
    faqs: [
      { question: 'Por que meu negócio não aparece no Google Maps mesmo estando cadastrado?', answer: 'Falta de otimização de categorias, inconsistência de endereço na web, ausência de sinais de engajamento e falta de relevância semântica são os principais fatores.' }
    ]
  },
  'seo-para-chatgpt': {
    slug: 'seo-para-chatgpt',
    h1: 'SEO e GEO para ChatGPT',
    subtitle: 'Estruturação de Dados e Entidades Digitais para sua Marca ser Citada nas Respostas do ChatGPT.',
    metaTitle: 'SEO e GEO para ChatGPT e Motores de IA | Omar SEO',
    metaDescription: 'Aprenda como preparar sua empresa para ser recomendada pelo ChatGPT e ferramentas de IA com estratégias de GEO e Schema.org com Omar SEO.',
    contentParagraphs: [
      'O comportamento de busca mudou. Milhões de usuários agora utilizam o ChatGPT para pedir recomendações diretas de empresas, ferramentas e especialistas.',
      'O GEO (Generative Engine Optimization) é a disciplina que organiza as informações da sua empresa na web para que os modelos LLM compreendam com clareza quem você é, o que faz e por que sua marca deve ser citada.',
      'Trabalhamos a citação de entidades, marcações Schema.org avançadas, arquivos llms.txt e autoridade cruzada em fontes confiáveis para preparar seu negócio para a era das buscas conversacionais.'
    ],
    keyBenefits: [
      { title: 'Citação de Entidades Digitais', desc: 'Mapeamos e vinculamos sua marca a conceitos e nichos reconhecidos pelas IAs.' },
      { title: 'Implementação de llms.txt', desc: 'Criamos arquivos de contexto padronizados para web crawlers de inteligência artificial.' },
      { title: 'Transparência e Honestidade', desc: 'Trabalhamos com metodologias reais de estruturação, sem promessas milagrosas ou ilusórias.' }
    ],
    faqs: [
      { question: 'É possível garantir que o ChatGPT recomende minha empresa?', answer: 'Não. Nenhuma agência ou profissional sério pode garantir inclusão ou posição em respostas de IA. O que fazemos é otimizar todos os sinais técnicos e semânticos para maximizar a probabilidade de citação.' }
    ]
  },
  'seo-para-gemini': {
    slug: 'seo-para-gemini',
    h1: 'SEO para Gemini e Google AI Overviews',
    subtitle: 'Posicione sua Empresa no Google AI Overviews e no Assistente Inteligente do Google.',
    metaTitle: 'SEO para Gemini e Google AI Overviews | Omar SEO',
    metaDescription: 'Otimização de SEO para o Google Gemini e resumos gerados por IA nas buscas. Destaque sua marca com Omar SEO.',
    contentParagraphs: [
      'Com a chegada do Google AI Overviews (SGE) e a integração profunda do Gemini ao buscador do Google, os resultados tradicionais dividem espaço com resumos gerados por IA no topo das pesquisas.',
      'Para aparecer nas fontes citadas nos blocos de IA do Google, seu site precisa oferecer respostas diretas, estruturação semântica em HTML5, dados estruturados ricos e autoridade comprovada no assunto.',
      'Omar SEO aplica as mais recentes diretrizes técnicas para garantir que o contéudo do seu site seja capturado e destacado nas visões gerais do Gemini.'
    ],
    keyBenefits: [
      { title: 'Respostas Estruturadas (Featured Snippets)', desc: 'Formatação adequada em tabelas, listas e parágrafos diretos para consumo da IA.' },
      { title: 'Marcação de Esquema Rápida', desc: 'Schema JSON-LD detalhado para indicar produtos, serviços, perguntas frequentes e autores.' },
      { title: 'Aumento de CTR Qualificado', desc: 'Visitantes vindos de citações no Gemini chegam com alta intenção de contratação.' }
    ],
    faqs: [
      { question: 'O que são os Google AI Overviews?', answer: 'São blocos de resumo sintético gerados por inteligência artificial que aparecem no topo dos resultados de busca do Google citando fontes de alta relevância.' }
    ]
  },
  'consultoria-seo': {
    slug: 'consultoria-seo',
    h1: 'Consultoria de SEO Profissional',
    subtitle: 'Engenharia de Visibilidade Digital e Estratégia de Crescimento Orgânico para sua Empresa.',
    metaTitle: 'Consultoria de SEO Profissional e Diagnóstico | Omar SEO',
    metaDescription: 'Consultoria de SEO com Omar Skafi. Estratégia completa de visibilidade, arquitetura de site e ranqueamento orgânico no Google.',
    contentParagraphs: [
      'A Consultoria de SEO Profissional é indicada para empresas que buscam um acompanhamento estratégico contínuo, com metas claras e relatórios transparentes.',
      'Desenvolvemos a estratégia do zero ou ajustamos o projeto atual da sua empresa, corrigindo falhas de código, melhorando a velocidade de carregamento (Core Web Vitals) e criando um calendário editorial focado em vendas.',
      'Entre em contato com Omar Skafi e descubra como transformar seu site em uma máquina constante de geração de contatos comerciais.'
    ],
    keyBenefits: [
      { title: 'Auditoria de Código e Performance', desc: 'Ajustes para deixar o site ultrarrápido e legível para os robôs do Google.' },
      { title: 'Estratégia de Palavras-Chave de Valor', desc: 'Foco nos termos que realmente trazem faturamento e novos clientes.' },
      { title: 'Acompanhamento Mensal de Evolução', desc: 'Relatórios claros de posições, impressões, cliques e conversões no WhatsApp.' }
    ],
    faqs: [
      { question: 'Qual a duração recomendada de uma consultoria de SEO?', answer: 'Recomendamos um ciclo contínuo de pelo menos 6 a 12 meses para consolidação de autoridade e resultados exponenciais.' }
    ]
  },
  'seo-local-curitiba': {
    slug: 'seo-local-curitiba',
    h1: 'SEO Local Curitiba: Guia Definitivo',
    subtitle: 'Como Fazer sua Empresa Ser Encontrada por Clientes nos Bairros e Região Metropolitana de Curitiba.',
    metaTitle: 'SEO Local Curitiba: Guia Definitivo | Omar SEO',
    metaDescription: 'Aprenda tudo sobre SEO Local em Curitiba. Dicas, estratégias de Google Maps e como atrair clientes da sua região com Omar SEO.',
    contentParagraphs: [
      'Curitiba é uma capital com 75 bairros oficiais e dezenas de regiões comerciais distintas, do Batel ao CIC, de Santa Felicidade ao Sítio Cercado.',
      'Para vender localmente, sua empresa precisa praticar SEO Local de verdade: conectando as buscas de cada bairro à sua localização física ou ao seu raio de atendimento.',
      'Combinamos técnicas de marcação geográfica em HTML, páginas de bairros hiperfocadas, Perfil de Empresa no Google e citações em diretórios locais para garantir domínio na sua área de atuação.'
    ],
    keyBenefits: [
      { title: 'Cobertura por Bairro e Região', desc: 'Seja encontrado quando o cliente pesquisar no Batel, Água Verde, Centro ou RMC.' },
      { title: 'Aumento de Chamadas e Mensagens', desc: 'Atração de clientes prontos para comprar ou agendar um serviço imediatamente.' },
      { title: 'Sinergia com Google Maps', desc: 'Presença fortificada tanto no buscador tradicional quanto no aplicativo de mapas.' }
    ],
    faqs: [
      { question: 'Minha empresa atende em toda Curitiba, preciso de SEO local?', answer: 'Com certeza! O SEO local ajuda a posicionar sua marca para buscas em bairros estratégicos onde há maior concentração dos seus clientes ideais.' }
    ]
  }
};
