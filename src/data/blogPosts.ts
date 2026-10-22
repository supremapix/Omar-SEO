import { legacyBlogPosts } from './legacyBlogPosts';
export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: number;
  keywords: string[];
  tldr: string;
  datePublished: string;
  dateModified: string;
  author: string;
  faq: BlogFaq[];
}

export const blogPosts: BlogPostMeta[] = [
 ...legacyBlogPosts,
 {slug:'seo-vs-sem-como-escolher',title:'SEO ou SEM: como escolher o trabalho para sua empresa',description:'Compare descoberta orgânica e anúncios de busca, responsabilidades, custos e critérios para contratar um especialista.',category:'Estratégia',readTime:5,keywords:['SEO versus SEM','especialista em SEM','SEO marketing'],tldr:'SEO melhora a descoberta orgânica. SEM pode incluir todo o marketing de busca, mas costuma ser usado para campanhas pagas. Defina o objetivo, as entregas e o orçamento antes de escolher.',datePublished:'2026-10-22',dateModified:'2026-10-22',author:'Omar Skafi',faq:[{question:'Pagar Google Ads melhora o ranking orgânico?',answer:'Anúncios e resultados orgânicos têm mecanismos distintos. Comprar mídia não compra posição orgânica.'},{question:'Quanto ganha um especialista em SEO?',answer:'Remuneração varia por senioridade, vínculo e região. Este guia trata da contratação de serviços; não apresenta estimativas salariais sem pesquisa específica.'}]},
  {
    slug: "por-que-contratar-especialista-seo-geo-aio",
    title: "Por que contratar um especialista em SEO, GEO e AIO em 2026?",
    description: "Entenda por que contratar um especialista em SEO, GEO e AIO: como ser encontrado no Google, no Bing e recomendado por ChatGPT, Gemini e Copilot.",
    category: "Estratégia",
    readTime: 9,
    keywords: ["especialista em SEO", "consultor SEO Curitiba", "GEO", "AIO", "otimização para IA", "contratar SEO"],
    tldr: "Contratar um especialista em SEO, GEO e AIO faz sentido quando sua empresa precisa ser encontrada em três lugares ao mesmo tempo: nos resultados orgânicos do Google e do Bing, nos resumos de IA (Google AI Overview e AI Mode) e nas respostas de assistentes como ChatGPT, Gemini, Perplexity e Copilot. Cada um usa sinais diferentes, e quem cuida só de um deles perde clientes nos outros dois.",
    datePublished: "2026-10-10",
    dateModified: "2026-10-10",
    author: "Omar Skafi",
    faq: [
      { question: "Qual a diferença entre um especialista em SEO e um especialista em GEO?", answer: "O especialista em SEO otimiza o site para aparecer nos resultados orgânicos do Google e do Bing. O especialista em GEO trabalha para que a marca seja citada nas respostas geradas por IAs como ChatGPT, Gemini, Perplexity e Copilot. Hoje os dois trabalhos se complementam e costumam ser feitos pelo mesmo profissional." },
      { question: "Vale a pena contratar SEO para pequena empresa?", answer: "Sim. Pequenas empresas locais costumam ter o melhor retorno, porque disputam buscas com intenção de compra na própria cidade, como “eletricista em Curitiba”, com concorrência menor que buscas nacionais." },
      { question: "Um especialista em SEO garante o primeiro lugar no Google?", answer: "Não. Nenhum profissional sério garante posição, porque o ranqueamento depende do algoritmo do Google. O que um especialista garante é a execução das boas práticas e a transparência nos resultados." },
      { question: "SEO ainda funciona com a inteligência artificial?", answer: "Funciona e ficou mais importante. AI Overview, ChatGPT e Copilot usam páginas bem indexadas e confiáveis como fonte. Uma base acessível e útil apoia a descoberta, sem garantir citações." }
    ]
  },
  {
    slug: "o-que-e-seo-geo-aio-diferencas",
    title: "O que é SEO, GEO e AIO? Diferenças explicadas de forma simples",
    description: "SEO, GEO e AIO explicados: o que cada sigla significa, como funcionam no Google, Bing, ChatGPT e Gemini e por que sua empresa precisa dos três.",
    category: "Fundamentos",
    readTime: 8,
    keywords: ["o que é SEO", "o que é GEO", "o que é AIO", "AEO", "otimização para motores generativos", "SEO para IA"],
    tldr: "SEO é a otimização para aparecer nos resultados orgânicos de buscadores como Google e Bing. GEO (Generative Engine Optimization) é a otimização para ser citado por IAs generativas como ChatGPT, Gemini, Perplexity e Copilot. AIO (AI Optimization) é a otimização para aparecer nos resumos de IA dentro dos buscadores, como o Google AI Overview. As três disciplinas compartilham a mesma base: um site técnico, conteúdo útil e uma marca confiável.",
    datePublished: "2026-10-10",
    dateModified: "2026-10-10",
    author: "Omar Skafi",
    faq: [
      { question: "GEO vai substituir o SEO?", answer: "Não. GEO depende do SEO, porque as IAs usam páginas indexadas e confiáveis como fonte. O que muda é que o SEO precisa ser pensado também para gerar citações, e não só cliques." },
      { question: "AIO e AEO são a mesma coisa?", answer: "Na prática, sim. Os dois termos descrevem a otimização de conteúdo para ser escolhido como resposta direta por sistemas de IA dentro dos buscadores, como o Google AI Overview." },
      { question: "O que é llms.txt?", answer: "É um arquivo de texto colocado na raiz do site que resume, em linguagem simples, quem é a empresa, o que ela oferece e quais são as páginas mais importantes. Ele facilita a leitura do site por modelos de linguagem." },
      { question: "Preciso fazer SEO no Bing também?", answer: "Sim. O Bing alimenta parte das respostas do Microsoft Copilot e é uma das fontes usadas pelo ChatGPT em buscas na web. Cadastrar o site no Bing Webmaster Tools é rápido e gratuito." }
    ]
  },
  {
    slug: "quanto-custa-seo-e-quanto-tempo-leva",
    title: "Quanto custa SEO e quanto tempo leva para dar resultado?",
    description: "Quanto custa contratar SEO no Brasil, o que influencia o preço e em quanto tempo os resultados aparecem no Google, no Maps e nas IAs.",
    category: "Dúvidas frequentes",
    readTime: 8,
    keywords: ["quanto custa SEO", "preço SEO", "SEO quanto tempo demora", "valor consultoria SEO", "SEO mensal"],
    tldr: "O preço de SEO varia conforme o tamanho do site, a concorrência do mercado, a abrangência geográfica (local, estadual ou nacional) e o escopo do trabalho (técnico, conteúdo, SEO local, GEO e AIO). Os primeiros sinais costumam aparecer em semanas, mas resultados consistentes de posição e de citações em IA geralmente levam de 3 a 6 meses, podendo passar de 12 meses em mercados muito competitivos.",
    datePublished: "2026-10-10",
    dateModified: "2026-10-10",
    author: "Omar Skafi",
    faq: [
      { question: "SEO é pagamento único ou mensal?", answer: "Pode ser os dois. Auditorias e criação de sites otimizados costumam ser projetos fechados. A manutenção de posições, a produção de conteúdo e o acompanhamento de IA funcionam melhor como serviço mensal." },
      { question: "Em quanto tempo meu site aparece no Google?", answer: "Um site novo bem configurado costuma ser indexado em dias ou poucas semanas após o envio do sitemap no Google Search Console. Aparecer nas primeiras posições para buscas competitivas leva mais tempo, geralmente meses." },
      { question: "Por que SEO demora?", answer: "Porque o Google precisa rastrear, entender e confiar no site. Confiança é construída com tempo, conteúdo útil, menções externas, avaliações e bom histórico de experiência do usuário." },
      { question: "Posso parar de fazer SEO depois que chegar ao topo?", answer: "Pode, mas a tendência é perder posições aos poucos, porque concorrentes continuam investindo e o algoritmo muda. Manter um trabalho básico contínuo é mais barato do que recuperar posições perdidas." }
    ]
  },
  {
    slug: "como-aparecer-no-google-ai-overview",
    title: "Como aparecer no Google AI Overview e no AI Mode: guia prático",
    description: "Passo a passo para sua empresa aparecer como fonte no Google AI Overview e no AI Mode: estrutura de conteúdo, schema, E-E-A-T e SEO local.",
    category: "Tutoriais",
    readTime: 10,
    keywords: ["como aparecer no AI Overview", "Google AI Overview", "AI Mode", "visão geral criada por IA", "otimização AI Overview"],
    tldr: "Para aparecer no Google AI Overview, a página precisa estar indexada, responder à pergunta de forma direta nas primeiras linhas, ter estrutura clara com listas e tabelas, usar dados estruturados e pertencer a uma marca confiável. O Google não oferece uma marcação especial para entrar no AI Overview: as mesmas boas práticas de SEO valem, com foco maior em clareza e utilidade.",
    datePublished: "2026-10-10",
    dateModified: "2026-10-10",
    author: "Omar Skafi",
    faq: [
      { question: "Existe uma tag para aparecer no AI Overview?", answer: "Não. O Google afirma que não há marcação especial. A página precisa estar indexada, ser elegível para snippet e ser útil para a pergunta do usuário." },
      { question: "O AI Overview diminui os cliques no meu site?", answer: "Em muitas buscas informativas, sim, porque o usuário recebe a resposta na própria página. Por outro lado, ser citado como fonte aumenta a visibilidade da marca e os cliques tendem a ser mais qualificados." },
      { question: "Dá para tirar meu site do AI Overview?", answer: "É possível limitar o uso do conteúdo com diretivas como nosnippet ou max-snippet, mas isso também afeta a exibição nos resultados normais. Para a maioria das empresas, não vale a pena." },
      { question: "Site feito com IA pode aparecer no AI Overview?", answer: "Pode, desde que seja tecnicamente bem feito, indexável, com conteúdo revisado, original e útil. A ferramenta usada para criar o site importa menos que a qualidade final." }
    ]
  },
  {
    slug: "como-ser-recomendado-pelo-chatgpt-gemini-copilot",
    title: "Como fazer sua empresa ser recomendada pelo ChatGPT, Gemini, Perplexity e Copilot",
    description: "Guia de GEO: como fazer sua empresa ser citada e recomendada por ChatGPT, Gemini, Perplexity, Copilot e Claude quando o cliente pergunta por um serviço.",
    category: "GEO",
    readTime: 10,
    keywords: ["aparecer no ChatGPT", "ser recomendado pelo ChatGPT", "GEO", "empresa no Gemini", "Perplexity", "Copilot", "otimização para LLM"],
    tldr: "Assistentes de IA recomendam empresas com base no que conseguem encontrar e confirmar na web: o site oficial, o Perfil da Empresa no Google, o índice do Bing, avaliações, diretórios, notícias e redes sociais. Para ser recomendado, sua empresa precisa estar indexada no Google e no Bing, ter informações consistentes em várias fontes, publicar conteúdo que responda perguntas de forma direta e oferecer arquivos legíveis por máquina, como schema e llms.txt.",
    datePublished: "2026-10-10",
    dateModified: "2026-10-10",
    author: "Omar Skafi",
    faq: [
      { question: "Dá para pagar para aparecer no ChatGPT?", answer: "Não existe um programa pago para ser recomendado nas respostas orgânicas do ChatGPT. A presença depende das fontes que o sistema encontra e considera confiáveis. Por isso o trabalho de GEO é orgânico." },
      { question: "Por que o ChatGPT recomenda meu concorrente e não a minha empresa?", answer: "Normalmente porque o concorrente tem mais menções consistentes na web, mais avaliações, páginas mais claras sobre os serviços ou melhor indexação no Bing e no Google." },
      { question: "Quanto tempo leva para o ChatGPT começar a citar minha empresa?", answer: "Em buscas com acesso à web, pode acontecer em semanas após a indexação de páginas relevantes. Para que a marca seja lembrada de forma consistente, o trabalho de autoridade costuma levar alguns meses." },
      { question: "Bloquear robôs de IA protege meu site?", answer: "Bloquear robôs de busca como OAI-SearchBot ou PerplexityBot impede que sua empresa seja citada nessas plataformas. Para negócios que querem clientes, geralmente é melhor permitir os robôs de busca." }
    ]
  },
  {
    slug: "perfil-da-empresa-no-google-tutorial-seo-local",
    title: "Perfil da Empresa no Google: tutorial completo de SEO local",
    description: "Tutorial passo a passo para criar e otimizar o Perfil da Empresa no Google (Google Meu Negócio) e aparecer no Google Maps, no AI Overview e nas buscas locais.",
    category: "Tutoriais",
    readTime: 10,
    keywords: ["Perfil da Empresa no Google", "Google Meu Negócio", "como aparecer no Google Maps", "SEO local", "otimizar Google Maps"],
    tldr: "O Perfil da Empresa no Google (antigo Google Meu Negócio) é a ferramenta gratuita que coloca sua empresa no Google Maps e nos resultados locais. Para ranquear bem, escolha a categoria principal correta, preencha todos os campos, mantenha nome, endereço e telefone idênticos ao site, publique fotos reais, peça avaliações constantemente e responda a todas elas. O Google define o ranking local por três fatores: relevância, distância e destaque.",
    datePublished: "2026-10-10",
    dateModified: "2026-10-10",
    author: "Omar Skafi",
    faq: [
      { question: "Google Meu Negócio e Perfil da Empresa no Google são a mesma coisa?", answer: "Sim. O Google Meu Negócio passou a se chamar Perfil da Empresa no Google, e a gestão é feita diretamente na Pesquisa Google, no Google Maps ou no painel do Google Business." },
      { question: "Posso ter perfil no Google sem endereço físico?", answer: "Sim. Empresas que atendem no local do cliente podem ocultar o endereço e configurar uma área de atendimento. O que não é permitido é usar endereço virtual ou coworking sem atendimento real para burlar as regras." },
      { question: "Quantas avaliações preciso para aparecer no Maps?", answer: "Não existe número mínimo. O importante é ter um fluxo constante de avaliações reais e mais recentes que as dos concorrentes, além de boa nota média." },
      { question: "Por que meu perfil foi suspenso?", answer: "As causas mais comuns são palavras-chave no nome, endereço inválido, várias contas para o mesmo negócio ou mudanças bruscas de dados. É possível pedir restabelecimento comprovando a operação real." }
    ]
  },
  {
    slug: "bing-webmaster-tools-indexnow-tutorial",
    title: "Bing Webmaster Tools e IndexNow: tutorial para aparecer no Bing, Copilot e ChatGPT",
    description: "Aprenda a cadastrar seu site no Bing Webmaster Tools, enviar o sitemap e ativar o IndexNow para indexação rápida no Bing, no Microsoft Copilot e em buscas de IA.",
    category: "Tutoriais",
    readTime: 8,
    keywords: ["Bing Webmaster Tools", "IndexNow", "SEO no Bing", "aparecer no Copilot", "indexar site no Bing"],
    tldr: "O Bing Webmaster Tools é a ferramenta gratuita da Microsoft para monitorar e indexar sites no Bing. Como o índice do Bing alimenta o Microsoft Copilot e é uma das fontes de busca usadas por outros assistentes, cadastrar o site, enviar o sitemap e ativar o IndexNow é uma das ações de GEO com melhor custo-benefício. O cadastro pode ser feito em minutos importando o site direto do Google Search Console.",
    datePublished: "2026-10-10",
    dateModified: "2026-10-10",
    author: "Omar Skafi",
    faq: [
      { question: "O IndexNow funciona no Google?", answer: "Até o momento, o Google não participa do IndexNow. Para o Google, use o sitemap e a Inspeção de URL no Google Search Console." },
      { question: "Preciso pagar para usar o Bing Webmaster Tools?", answer: "Não. A ferramenta é gratuita, assim como o IndexNow e o Bing Places for Business." },
      { question: "Quanto tempo o Bing leva para indexar uma página com IndexNow?", answer: "Com o IndexNow, o Bing é notificado imediatamente. O rastreamento costuma ocorrer rapidamente, mas a indexação final depende da qualidade e da relevância da página." },
      { question: "Estar no Bing garante aparecer no ChatGPT?", answer: "Não garante, mas aumenta as chances. O ChatGPT combina várias fontes e decide o que citar conforme a pergunta. Estar indexado e bem descrito em mais índices amplia a probabilidade de citação." }
    ]
  },
  {
    slug: "como-comecar-negocio-na-internet-checklist",
    title: "Como começar qualquer negócio na internet: checklist completo de presença digital",
    description: "Checklist passo a passo para iniciar qualquer negócio na internet do zero: domínio, site, Google, Bing, redes sociais, SEO, GEO e IA.",
    category: "Guia para iniciantes",
    readTime: 11,
    keywords: ["como começar um negócio na internet", "colocar empresa na internet", "presença digital", "criar site para empresa", "checklist negócio online"],
    tldr: "Para começar qualquer negócio na internet com o pé direito, siga esta ordem: defina nome e posicionamento, registre o domínio .com.br, crie um e-mail profissional, publique um site rápido e otimizado, cadastre o Perfil da Empresa no Google, configure Google Search Console e Bing Webmaster Tools, crie as redes sociais com dados consistentes, adicione dados estruturados e llms.txt, e passe a produzir conteúdo que responda dúvidas reais dos clientes.",
    datePublished: "2026-10-10",
    dateModified: "2026-10-10",
    author: "Omar Skafi",
    faq: [
      { question: "Qual o primeiro passo para colocar minha empresa na internet?", answer: "Definir nome e posicionamento, registrar o domínio e criar o Perfil da Empresa no Google. Com isso, a empresa já pode aparecer no Google Maps enquanto o site é desenvolvido." },
      { question: "Preciso de site se já tenho Instagram?", answer: "Sim. O Instagram não ranqueia bem no Google para buscas de serviço e você não controla o alcance. O site é o ativo que alimenta o Google, o Bing e as IAs com informações oficiais sobre o negócio." },
      { question: "Dá para começar um negócio online sem dinheiro?", answer: "É possível começar com custo baixo: o Perfil da Empresa no Google, o Search Console, o Bing Webmaster Tools e as redes sociais são gratuitos. O domínio tem custo anual baixo. O site profissional é o principal investimento." },
      { question: "Quanto tempo leva para um negócio novo aparecer no Google?", answer: "O Perfil da Empresa pode aparecer no Maps logo após a verificação. O site costuma ser indexado em dias ou semanas após o envio do sitemap. Boas posições para buscas competitivas levam alguns meses." }
    ]
  }
];
