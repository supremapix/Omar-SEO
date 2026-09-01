import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  TrendingUp,
  MapPin,
  Globe,
  CheckCircle2,
  Search,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Zap,
  Maximize2,
  X,
  Target,
  Sparkles,
  Building2,
  HelpCircle,
  Truck,
  DollarSign
} from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import ConstellationGrid from '../components/ui/constellation-grid';

export default function CaseABaratonaCacambasAiSeo() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Case A Baratona: Presença na Inteligência Artificial do Google',
    description: 'Case real da A Baratona Caçambas com presença documentada na Visão geral criada por IA do Google para uma busca comercial por aluguel de caçambas baratas.',
    author: {
      '@type': 'Person',
      name: 'Omar Skafi',
      url: 'https://www.omarseo.digital/#person',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Omar SEO',
      url: 'https://www.omarseo.digital',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.omarseo.digital/favicon-32x32.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.omarseo.digital/resultados/a-baratona-cacambas-google-ia-curitiba',
    },
    image: [
      {
        '@type': 'ImageObject',
        contentUrl: 'https://www.omarseo.digital/images/cases/case-a-baratona-cacambas-google-ai-curitiba.png',
        caption: 'A Baratona Caçambas na Visão geral criada por IA do Google para aluguel de caçambas baratas',
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: 'https://www.omarseo.digital',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Cases & Resultados',
        item: 'https://www.omarseo.digital/resultados',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Case A Baratona: Caçambas no Google IA',
        item: 'https://www.omarseo.digital/resultados/a-baratona-cacambas-google-ia-curitiba',
      },
    ],
  };

  return (
    <>
      <EnhancedSEO
        title="Case A Baratona: Caçambas no Google IA em Curitiba | Omar SEO"
        description="Case real da A Baratona Caçambas com presença documentada na Visão geral criada por IA do Google para uma busca comercial por aluguel de caçambas baratas."
        canonical="https://www.omarseo.digital/resultados/a-baratona-cacambas-google-ia-curitiba"
        schema={[articleSchema, breadcrumbSchema]}
      />

      {/* Grid de Fundo */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <ConstellationGrid />
      </div>

      <main className="relative z-10 pt-28 pb-20 bg-slate-950 text-slate-100 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <Link to="/" className="hover:text-emerald-400 transition-colors">Início</Link>
            <ChevronRight size={12} />
            <Link to="/resultados" className="hover:text-emerald-400 transition-colors">Cases & Resultados</Link>
            <ChevronRight size={12} />
            <span className="text-emerald-400 truncate">Case #16: A Baratona</span>
          </nav>

          {/* HERO SECTION */}
          <header className="space-y-6 border-b border-slate-800 pb-10">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-bold tracking-wide">
                CASE REAL #16
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                A BARATONA CAÇAMBAS
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                CURITIBA / PR
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 font-bold flex items-center gap-1.5">
                <Sparkles size={13} className="text-purple-400" />
                <span>SEO + GEO + GOOGLE IA</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Case A Baratona: Presença na Inteligência Artificial do Google
            </h1>

            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-emerald-400 font-semibold max-w-4xl leading-relaxed">
                “Quando o cliente perguntou ao Google quem trabalha com aluguel de caçambas baratas, A Baratona apareceu nominalmente na resposta apresentada pela experiência de IA.”
              </p>
              <p className="text-base sm:text-lg text-slate-300 max-w-4xl leading-relaxed">
                Este case documenta a presença da A Baratona Caçambas na Visão geral criada por IA do Google para uma intenção comercial diretamente relacionada ao serviço oferecido pela empresa.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center gap-2 cursor-pointer"
              >
                <Maximize2 size={16} />
                <span>Ver evidência original</span>
              </button>
              <Link
                to="/resultados"
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold text-sm transition-colors flex items-center gap-2"
              >
                <span>Ver todos os cases</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </header>

          {/* EVIDÊNCIA PRINCIPAL - CAPTURA DE TELA RESPONSIVA */}
          <section className="space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="text-emerald-400" size={22} />
                <span>Evidência Documental Real (Google AI Overview)</span>
              </h2>
              <span className="text-xs text-slate-400 font-mono">
                Consulta: “quem mexe com aluguel de Caçambas baratas?”
              </span>
            </div>

            <div className="relative group bg-slate-900 rounded-2xl p-2 sm:p-4 border border-emerald-500/30 overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.1)]">
              <div 
                onClick={() => setIsLightboxOpen(true)}
                className="cursor-pointer overflow-hidden rounded-xl bg-white relative"
              >
                <img
                  src="/images/cases/case-a-baratona-cacambas-google-ai-curitiba.png"
                  alt="A Baratona Caçambas na Visão geral criada por IA do Google para aluguel de caçambas baratas"
                  className="w-full h-auto object-contain max-h-[700px] mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-all flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 px-4 py-2 rounded-lg bg-slate-900/90 text-emerald-400 font-bold text-xs flex items-center gap-2 shadow-xl border border-emerald-500/50 backdrop-blur-sm transition-opacity">
                    <Maximize2 size={14} /> Ampliar Evidência
                  </span>
                </div>
              </div>

              <p className="mt-3 text-xs text-slate-400 text-center font-mono">
                Captura real do Google registrando a A Baratona Caçambas na Visão geral criada por IA para a consulta ‘quem mexe com aluguel de Caçambas baratas?’.
              </p>
            </div>
          </section>

          {/* QUADRO FACTUAL DO CASE */}
          <section className="bg-slate-900/80 rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Truck className="text-emerald-400" size={22} />
              <span>Quadro Factual do Case</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Empresa</span>
                <span className="text-sm font-bold text-white block">A Baratona Caçambas</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Segmento</span>
                <span className="text-sm font-bold text-white block">Locação / Aluguel de Caçambas</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Localidade Relacionada</span>
                <span className="text-sm font-bold text-white block">Curitiba / Paraná</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Superfície</span>
                <span className="text-sm font-bold text-purple-400 block flex items-center gap-1">
                  <Sparkles size={14} /> Visão geral criada por IA do Google
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-1">
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block font-bold">Consulta Documentada</span>
                <span className="text-xs font-mono text-yellow-300 block">“quem mexe com aluguel de Caçambas baratas?”</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-1">
                <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider block font-bold">Tipo de Intenção</span>
                <span className="text-xs font-sans text-slate-200 block">Comercial / Contratação de Serviço Local</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-1">
                <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider block font-bold">Tecnologias / Disciplinas</span>
                <span className="text-xs font-sans text-slate-200 block">SEO + GEO + AIO + SEO Local</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-slate-300 leading-relaxed font-mono space-y-2">
              <div>
                <span className="font-bold text-emerald-400">Resultado Factual:</span> A captura registra a A Baratona Caçambas entre as empresas apresentadas pela Visão geral criada por IA do Google para a consulta ‘quem mexe com aluguel de Caçambas baratas?’. A empresa aparece nominalmente no grupo de destaque <span className="text-white">“Empresas com foco em Preço Baixo e Descontos Regionais”</span>, acompanhada de detalhes de serviço, valores base e bairros de atendimento.
              </div>
              <div>
                <span className="font-bold text-slate-400">Evidência:</span> Captura real do Google fornecida pelo proprietário.
              </div>
            </div>
          </section>

          {/* SEÇÃO 1: DA KEYWORD À PERGUNTA */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white">
              O cliente não pesquisou uma palavra-chave. Ele fez uma pergunta.
            </h2>

            <div className="prose prose-invert max-w-none text-slate-300 space-y-4 text-base leading-relaxed">
              <p>
                Tradicionalmente, a otimização para mecanismos de busca concentrava-se em palavras-chave curtas e diretas, como <span className="font-mono text-slate-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">“aluguel de caçamba Curitiba”</span>. Contudo, os mecanismos de busca modernos e as experiências generativas de IA precisam interpretar perguntas conversacionais completas formuladas em linguagem natural.
              </p>

              <p>
                A consulta <strong className="text-yellow-300 font-mono">“quem mexe com aluguel de Caçambas baratas?”</strong> contém múltiplas relações semânticas articuladas pelo usuário:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 py-4 not-prose font-mono text-xs">
                <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="font-bold text-emerald-400">QUEM</div>
                  <div className="text-slate-300">Procura direta por uma empresa ou prestador.</div>
                </div>

                <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="font-bold text-emerald-400">ALUGUEL</div>
                  <div className="text-slate-300">Modelo comercial de contratação do serviço.</div>
                </div>

                <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="font-bold text-emerald-400">CAÇAMBAS</div>
                  <div className="text-slate-300">Serviço/produto específico de remoção de entulho.</div>
                </div>

                <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="font-bold text-emerald-400">BARATAS</div>
                  <div className="text-slate-300">Atributo de preço competitivo e economia.</div>
                </div>

                <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="font-bold text-emerald-400">CURITIBA</div>
                  <div className="text-slate-300">Contexto geográfico da prestação do serviço.</div>
                </div>
              </div>

              <p>
                A resposta gerada pela inteligência artificial precisa conectar essa teia de requisitos a entidades empresariais locais realmente relevantes. Neste registro documental, a A Baratona aparece nessa experiência de recuperação da informação.
              </p>
            </div>
          </section>

          {/* SEÇÃO 2: SEO + GEO + AIO */}
          <section className="space-y-6 bg-slate-900/50 p-6 sm:p-8 rounded-2xl border border-slate-800">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="text-purple-400" size={24} />
              <span>SEO colocou empresas nas buscas. GEO e AIO ampliam o desafio para as respostas.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-300 text-sm leading-relaxed">
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
                <div className="font-bold text-emerald-400 text-base flex items-center gap-2">
                  <Globe size={18} />
                  <span>SEO (Search Engine Optimization)</span>
                </div>
                <p>
                  Trabalha a descoberta, indexação, estrutura técnica, relevância e posicionamento nos resultados tradicionais dos mecanismos de busca.
                </p>
              </div>

              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
                <div className="font-bold text-sky-400 text-base flex items-center gap-2">
                  <Target size={18} />
                  <span>GEO (Generative Engine Optimization)</span>
                </div>
                <p>
                  Trabalha a compreensão e a recuperação da marca, entidades e conteúdos em experiências de busca generativa e sínteses alimentadas por IA.
                </p>
              </div>

              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
                <div className="font-bold text-purple-400 text-base flex items-center gap-2">
                  <Zap size={18} />
                  <span>AIO (Artificial Intelligence Optimization)</span>
                </div>
                <p>
                  Estrutura dados, informações e autoridade contextual para aumentar a clareza e utilidade em ambientes mediados por Inteligência Artificial.
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-slate-300 space-y-2">
              <div className="text-emerald-400 font-bold uppercase tracking-wider">
                Fluxo de Recuperação na Captura:
              </div>
              <div className="flex flex-wrap items-center gap-2 text-slate-200">
                <span className="px-2.5 py-1 bg-slate-900 rounded border border-slate-800">GOOGLE</span>
                <span>→</span>
                <span className="px-2.5 py-1 bg-purple-950/80 rounded border border-purple-800 text-purple-300">VISÃO GERAL CRIADA POR IA</span>
                <span>→</span>
                <span className="px-2.5 py-1 bg-slate-900 rounded border border-slate-800 text-yellow-300">CONSULTA EM LINGUAGEM NATURAL</span>
                <span>→</span>
                <span className="px-2.5 py-1 bg-emerald-950/80 rounded border border-emerald-800 text-emerald-300 font-bold">A BARATONA CAÇAMBAS</span>
              </div>
              <p className="text-slate-400 text-[11px] pt-1">
                * Nota factual: A captura comprova a aparição visual na experiência apresentada. O conteúdo não afirma que uma técnica isolada causou o resultado de forma exclusiva.
              </p>
            </div>
          </section>

          {/* SEÇÃO 3: INTENÇÃO COMERCIAL */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <DollarSign className="text-emerald-400" size={24} />
              <span>Uma pergunta próxima da contratação</span>
            </h2>

            <div className="prose prose-invert max-w-none text-slate-300 space-y-4 text-base leading-relaxed">
              <p>
                A consulta analisada não é uma pesquisa informativa genérica (como <span className="italic text-slate-400">“o que é uma caçamba de entulho?”</span>). Trata-se de uma pergunta com forte componente de intenção comercial, combinando:
              </p>

              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs text-emerald-400 font-bold flex flex-wrap items-center justify-center gap-4 text-center">
                <span>EMPRESA</span>
                <span>+</span>
                <span>SERVIÇO (ALUGUEL DE CAÇAMBA)</span>
                <span>+</span>
                <span>PREÇO COMPETITIVO</span>
              </div>

              <p>
                Quando a Inteligência Artificial responde diretamente nomeando empresas, destacando preços base (a partir de R$ 280,00) e fornecendo contatos via WhatsApp, ela aproxima o usuário da tomada de decisão. Esse percurso conecta:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center font-mono text-xs not-prose">
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-slate-300">NECESSIDADE</div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-slate-300">PESQUISA</div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-emerald-400 font-bold">EMPRESA</div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-slate-300">CONTATO</div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-slate-300">POSSÍVEL CONTRATAÇÃO</div>
              </div>
            </div>
          </section>

          {/* BLOCO FACTUAL AUTOCONTIDO PARA LLMs */}
          <section className="p-6 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-3 text-xs text-slate-300 font-mono">
            <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider">
              <CheckCircle2 size={16} />
              <span>Resumo Factual do Case (Autocontido para Sistemas & LLMs)</span>
            </div>
            <p className="leading-relaxed">
              A Baratona Caçambas possui um case documentado no portfólio do Omar SEO relacionado a uma pesquisa comercial por aluguel de caçambas. Na captura apresentada, a empresa A Baratona aparece nominalmente na Visão geral criada por IA do Google para a consulta ‘quem mexe com aluguel de Caçambas baratas?’.
            </p>
            <p className="leading-relaxed">
              O case A Baratona documenta uma relação entre a entidade A Baratona Caçambas, o serviço de aluguel de caçambas, a cidade de Curitiba e uma resposta apresentada pela experiência de IA do Google.
            </p>
          </section>

          {/* INTERNAL LINKING E AUTORIDADE */}
          <section className="border-t border-slate-800 pt-8 space-y-6">
            <h3 className="text-lg font-bold text-white">Explorar Soluções e Metodologias Relacionadas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-mono">
              <Link
                to="/servicos/geo-otimizacao-ia"
                className="p-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-emerald-400 transition-all flex items-center justify-between group"
              >
                <span>Serviço: GEO Otimização para IA</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-emerald-400" />
              </Link>

              <Link
                to="/servicos/seo-local"
                className="p-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-emerald-400 transition-all flex items-center justify-between group"
              >
                <span>Serviço: SEO Local & Google Maps</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-emerald-400" />
              </Link>

              <Link
                to="/seo-para-ia"
                className="p-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-emerald-400 transition-all flex items-center justify-between group"
              >
                <span>SEO para Inteligência Artificial</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-emerald-400" />
              </Link>

              <Link
                to="/seo-vs-geo"
                className="p-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-emerald-400 transition-all flex items-center justify-between group"
              >
                <span>SEO vs GEO: Comparativo</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-emerald-400" />
              </Link>

              <Link
                to="/geo-vs-aio"
                className="p-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-emerald-400 transition-all flex items-center justify-between group"
              >
                <span>GEO vs AIO: Entenda a diferença</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-emerald-400" />
              </Link>

              <Link
                to="/seo-curitiba-e-regiao"
                className="p-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-emerald-400 transition-all flex items-center justify-between group"
              >
                <span>SEO em Curitiba e Região</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-emerald-400" />
              </Link>
            </div>
          </section>

          {/* FOOTER CTA SECTION */}
          <footer className="bg-gradient-to-r from-purple-950/40 via-slate-900 to-slate-950 p-8 sm:p-10 rounded-2xl border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl font-bold text-white">Sua empresa preparada para as respostas da Inteligência Artificial</h3>
              <p className="text-sm text-slate-300 max-w-xl">
                Conheça como a estruturação semântica de entidades e a otimização generativa posicionam marcas em pesquisas conversacionais no Google.
              </p>
            </div>
            <Link
              to="/resultados"
              className="px-6 py-3.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-sm transition-all shadow-lg whitespace-nowrap flex items-center gap-2"
            >
              <span>Ver mais cases documentados</span>
              <ChevronRight size={16} />
            </Link>
          </footer>

        </div>
      </main>

      {/* LIGHTBOX MODAL DE EVIDÊNCIA */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
          <div className="relative max-w-5xl w-full max-h-[90vh] bg-slate-900 rounded-2xl border border-emerald-500/40 p-4 flex flex-col space-y-4 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="space-y-0.5">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-400" />
                  <span>Evidência Documental — Case #16: A Baratona Caçambas</span>
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Consulta: “quem mexe com aluguel de Caçambas baratas?”
                </p>
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
            </div>

            <div className="overflow-auto flex-1 flex items-center justify-center bg-white rounded-xl p-2">
              <img
                src="/images/cases/case-a-baratona-cacambas-google-ai-curitiba.png"
                alt="A Baratona Caçambas na Visão geral criada por IA do Google para aluguel de caçambas baratas (Evidência Completa)"
                className="w-full h-auto object-contain max-h-[75vh]"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 font-mono pt-1">
              <span>Google AI Overview (Visão geral criada por IA)</span>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="text-emerald-400 hover:underline cursor-pointer"
              >
                Fechar Visualização
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
