import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import ConstellationGrid from '../components/ui/constellation-grid';
import { BackgroundVideo } from '../components/BackgroundVideo';
import {
  BookOpen,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Sparkles,
  Tag,
  X,
  MessageCircle,
} from 'lucide-react';

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  author: string;
}

const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Como o Google AI Overviews Afeta o Tráfego Orgânico em Curitiba',
    slug: 'google-ai-overviews-curitiba',
    category: 'GEO & IA',
    date: '10 de Agosto de 2026',
    readTime: '6 min de leitura',
    author: 'Omar Skafi',
    excerpt:
      'Entenda como as respostas geradas por Inteligência Artificial no topo do Google mudaram o comportamento de busca em Curitiba e como preparar seu site para ser citado.',
    content: [
      'O lançamento e expansão do Google AI Overviews no Brasil transformaram a maneira como os usuários interagem com os resultados de busca. Em vez de clicarem imediatamente no primeiro link azul, muitos consumidores leem o resumo sintetizado pela inteligência artificial antes de tomar uma decisão.',
      'Para empresas em Curitiba e Região Metropolitana, essa mudança exige uma evolução estratégica: não basta apenas ranquear palavras-chave; é necessário estruturar o conhecimento da sua empresa com marcações JSON-LD e dados organizados em tabelas e respostas diretas para que a IA cite seu site como a fonte primária de autoridade.',
      'Implementar o protocolo GEO (Generative Engine Optimization) e manter arquivos llms.txt atualizados na raiz do domínio garante que seu negócio não perca tráfego, mas sim conquiste cliques altamente qualificados vindos dos painéis de inteligência artificial.',
    ],
  },
  {
    id: '2',
    title: 'Guia de SEO Local: Como Dominar o Google Maps Bairro a Bairro',
    slug: 'guia-seo-local-google-maps',
    category: 'SEO Local',
    date: '02 de Agosto de 2026',
    readTime: '8 min de leitura',
    author: 'Omar Skafi',
    excerpt:
      'Passo a passo prático para otimizar o Perfil da Empresa no Google, manter a consistência NAP e criar páginas de bairros de Curitiba sem duplicação de conteúdo.',
    content: [
      'A busca por serviços com intenção "perto de mim" ou direcionada por bairro (como "médico no Batel" ou "restaurante no Água Verde") é a principal geradora de chamadas telefônicas e visitas presenciais no comércio de Curitiba.',
      'A primeira regra do SEO local de alta performance é a consistência NAP (Name, Address, Phone). O nome da sua empresa, o endereço exato com CEP e o número de telefone devem ser rigorosamente idênticos em todos os diretórios da internet.',
      'Além do Perfil da Empresa no Google (GBM), a criação de landing pages autênticas por bairro e município da RMC amplia vertiginosamente o raio de alcance da sua marca nas pesquisas geolocalizadas.',
    ],
  },
  {
    id: '3',
    title: 'Por Que SPAs e React Precisam de Pré-Renderização Estática para SEO',
    slug: 'react-spa-prerender-seo-tecnico',
    category: 'SEO Técnico',
    date: '25 de Julho de 2026',
    readTime: '7 min de leitura',
    author: 'Omar Skafi',
    excerpt:
      'Aplicações modernas construídas com React, Vite ou Vue podem enfrentar sérios problemas de indexação se o Googlebot receber um HTML em branco. Veja a solução.',
    content: [
      'Frameworks JavaScript como React proporcionam uma experiência de navegação rápida e fluida para os usuários. No entanto, sem a devida configuração de Server-Side Rendering (SSR) ou pré-renderização estática (Prerendering), os robôs dos buscadores enxergam apenas uma div vazia no HTML inicial.',
      'Embora o Googlebot consiga executar JavaScript, esse processo ocorre em uma segunda onda de renderização que consome orçamento de crawl e pode atrasar em semanas a indexação de novas páginas.',
      'Ao aplicar scripts de pré-renderização estática no pipeline de build, seu site React entrega arquivos HTML completos e com metadados prontos para os crawlers tradicionais e robôs de IA, mantendo a agilidade da SPA para o visitante final.',
    ],
  },
  {
    id: '4',
    title: 'O Fim do FID e a Consolidação do INP nos Core Web Vitals',
    slug: 'core-web-vitals-inp-seo',
    category: 'Performance',
    date: '15 de Julho de 2026',
    readTime: '5 min de leitura',
    author: 'Omar Skafi',
    excerpt:
      'Entenda por que o Google substituiu o First Input Delay (FID) pelo Interaction to Next Paint (INP) e como essa métrica afeta a experiência móvel e os rankings.',
    content: [
      'Em março de 2024, o Google aposentou oficialmente a métrica FID e consolidou o INP (Interaction to Next Paint) como um dos três pilares oficiais do Core Web Vitals.',
      'Enquanto o antigo FID media apenas o tempo de espera do primeiro clique, o INP avalia a latência de todas as interações do usuário durante a navegação inteira pela página. Um site com scripts pesados no evento de clique terá notas baixas no INP.',
      'Otimizar manipuladores de eventos em JavaScript, reduzir tarefas longas na thread principal do navegador e aplicar CSS eficiente são os passos vitais para manter a nota verde do PageSpeed.',
    ],
  },
];

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'GEO & IA', 'SEO Local', 'SEO Técnico', 'Performance'];

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCategory = selectedCategory === 'Todos' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Blog', item: '/blog' },
  ];

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <EnhancedSEO
        title="Blog de SEO, GEO e Visibilidade Digital em Curitiba | Omar SEO"
        description="Artigos e tutoriais avançados sobre SEO técnico, SEO local, Google Maps, Core Web Vitals, Schema.org e GEO (Otimização para Inteligência Artificial)."
        canonical="/blog"
        breadcrumbs={breadcrumbs}
      />

      {/* Header */}
      <section className="relative p-8 sm:p-12 rounded-3xl bg-slate-950/80 border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.15)] overflow-hidden">
        <BackgroundVideo
          src="https://img.supremasite.com.br/seo-omar.mp4"
          opacity={0.40}
          overlayClassName="bg-gradient-to-b from-[#0a0a0f]/70 via-[#0a0a0f]/50 to-[#0a0a0f]/80"
        />
        <ConstellationGrid className="absolute inset-0 z-0 opacity-40 pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/90 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(34,211,238,0.3)]">
            <BookOpen size={14} className="text-cyan-400" />
            <span>Conhecimento Técnico Acionável</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            Blog de SEO, GEO & Inteligência Artificial
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Estratégias, análises de algoritmo e guias práticos escritos por Omar Skafi para orientar empresários em Curitiba.
          </p>
        </div>
      </section>

      {/* Search and Category Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#0f1118] border border-slate-800 rounded-2xl p-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-[0_0_12px_rgba(59,130,246,0.5)]'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar artigos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:border-blue-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            className="bg-[#0f1118] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 flex flex-col justify-between hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all group cursor-pointer"
            onClick={() => setSelectedArticle(article)}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="px-2.5 py-1 rounded-full bg-blue-950/80 border border-blue-800 text-cyan-400 font-bold text-[10px] uppercase tracking-wider">
                  {article.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} className="text-slate-400" />
                  <span>{article.readTime}</span>
                </span>
              </div>

              <h2 className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                {article.title}
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-bold text-slate-300">
                <User size={13} className="text-blue-400" />
                <span>{article.author}</span>
              </span>

              <button className="inline-flex items-center gap-1 text-cyan-400 font-bold group-hover:translate-x-1 transition-transform">
                <span>Ler Artigo</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Full Article Modal Reader */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-[#0f1118] border border-blue-500/40 rounded-3xl p-6 sm:p-10 max-w-3xl w-full my-8 space-y-6 relative shadow-[0_0_50px_rgba(59,130,246,0.25)] max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white cursor-pointer"
              aria-label="Fechar modal"
            >
              <X size={20} />
            </button>

            <div className="space-y-3 border-b border-slate-800 pb-4">
              <span className="px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                {selectedArticle.category}
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white pr-8">
                {selectedArticle.title}
              </h2>

              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <User size={13} className="text-blue-400" />
                  <span>{selectedArticle.author}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={13} className="text-blue-400" />
                  <span>{selectedArticle.date}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={13} className="text-blue-400" />
                  <span>{selectedArticle.readTime}</span>
                </span>
              </div>
            </div>

            <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
              {selectedArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                Gostou deste conteúdo? Agende uma análise do seu site com Omar Skafi.
              </div>

              <a
                href="https://wa.me/5541992721004"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-emerald-wa btn-shimmer px-5 py-2.5 text-xs font-bold flex items-center gap-2 shrink-0"
              >
                <MessageCircle size={15} />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
