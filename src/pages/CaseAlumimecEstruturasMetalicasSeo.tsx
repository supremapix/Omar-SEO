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
  Factory
} from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import ConstellationGrid from '../components/ui/constellation-grid';

export default function CaseAlumimecEstruturasMetalicasSeo() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Case Alumimec: Presença no Google para Estruturas Metálicas em São José dos Pinhais',
    description: 'Case real da Alumimec com presença documentada no Google orgânico e na busca local para intenção relacionada a estruturas para galpões em São José dos Pinhais.',
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
      '@id': 'https://www.omarseo.digital/resultados/alumimec-estruturas-metalicas-sao-jose-dos-pinhais',
    },
    image: [
      {
        '@type': 'ImageObject',
        contentUrl: 'https://www.omarseo.digital/images/cases/case-alumimec-estruturas-metalicas-sao-jose-dos-pinhais-google.png',
        caption: 'Alumimec no Google para estruturas de galpões em São José dos Pinhais',
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
        name: 'Case Alumimec: Estruturas Metálicas',
        item: 'https://www.omarseo.digital/resultados/alumimec-estruturas-metalicas-sao-jose-dos-pinhais',
      },
    ],
  };

  return (
    <>
      <EnhancedSEO
        title="Case Alumimec: SEO e Google Maps em São José dos Pinhais | Omar SEO"
        description="Case real da Alumimec com presença documentada no Google orgânico e na busca local para intenção relacionada a estruturas para galpões em São José dos Pinhais."
        canonical="https://www.omarseo.digital/resultados/alumimec-estruturas-metalicas-sao-jose-dos-pinhais"
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
            <span className="text-emerald-400 truncate">Case #15: Alumimec</span>
          </nav>

          {/* HERO SECTION */}
          <header className="space-y-6 border-b border-slate-800 pb-10">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-bold tracking-wide">
                CASE REAL #15
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                INDÚSTRIA & ESTRUTURAS METÁLICAS
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                SÃO JOSÉ DOS PINHAIS / PR
              </span>
              <span className="px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/40 text-sky-400 font-bold">
                GOOGLE ORGÂNICO + GOOGLE MAPS
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Case Alumimec: Presença no Google para Estruturas Metálicas em São José dos Pinhais
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-4xl leading-relaxed">
              Uma busca comercial, duas superfícies de descoberta. A captura registra a Alumimec tanto no resultado orgânico quanto na seção local apresentada pelo Google para uma intenção relacionada à contratação de estruturas para galpões em São José dos Pinhais.
            </p>

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
                <span>Evidência Documental Real (Google Search + Google Local)</span>
              </h2>
              <span className="text-xs text-slate-400 font-mono">
                Consulta: “quem faz estrutura para galpoes em sao jose dos pinhais?”
              </span>
            </div>

            <div className="relative group bg-slate-900 rounded-2xl p-2 sm:p-4 border border-emerald-500/30 overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.1)]">
              <div 
                onClick={() => setIsLightboxOpen(true)}
                className="cursor-pointer overflow-hidden rounded-xl bg-white relative"
              >
                <img
                  src="/images/cases/case-alumimec-estruturas-metalicas-sao-jose-dos-pinhais-google.png"
                  alt="Alumimec no Google para estruturas de galpões em São José dos Pinhais"
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
                Captura real do Google para a consulta ‘quem faz estrutura para galpoes em sao jose dos pinhais?’, registrando a Alumimec no resultado orgânico e na seção local apresentada pelo Google.
              </p>
            </div>
          </section>

          {/* QUADRO FACTUAL DO CASE */}
          <section className="bg-slate-900/80 rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Factory className="text-emerald-400" size={22} />
              <span>Quadro Factual do Case</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Empresa</span>
                <span className="text-sm font-bold text-white block">Alumimec Estruturas Metálicas</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Domínio</span>
                <a href="https://alumimec.com.br" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-emerald-400 hover:underline flex items-center gap-1">
                  <span>alumimec.com.br</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Segmento</span>
                <span className="text-sm font-bold text-white block">Estruturas Metálicas & Galpões</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Localidade</span>
                <span className="text-sm font-bold text-white block">São José dos Pinhais / PR</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-1">
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block font-bold">Consulta Documentada</span>
                <span className="text-xs font-mono text-slate-200 block">“quem faz estrutura para galpoes em sao jose dos pinhais?”</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-1">
                <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider block font-bold">Intenção de Busca</span>
                <span className="text-xs font-sans text-slate-200 block">Comercial / Contratação de Fornecedor Industrial</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-1">
                <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider block font-bold">Superfícies Identificadas</span>
                <span className="text-xs font-sans text-slate-200 block">1. Google Orgânico<br />2. Google Local / Seção “Locais” (Maps)</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-slate-300 leading-relaxed font-mono">
              <span className="font-bold text-emerald-400">Resultado Factual:</span> A captura registra o domínio <span className="text-white">alumimec.com.br</span> em destaque nos resultados orgânicos exibidos pelo Google para a consulta “quem faz estrutura para galpoes em sao jose dos pinhais?”. Na mesma consulta, a captura também registra a Alumimec entre os estabelecimentos apresentados pelo Google na seção “Locais”, demonstrando presença simultânea na busca orgânica e na experiência de descoberta local.
            </div>
          </section>

          {/* SEÇÃO: UMA BUSCA DE ALTA INTENÇÃO COMERCIAL */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Quando o cliente pergunta “quem faz”, a intenção já está próxima da contratação
            </h2>

            <div className="prose prose-invert max-w-none text-slate-300 space-y-4 text-base leading-relaxed">
              <p>
                A pesquisa <span className="font-mono text-emerald-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">“quem faz estrutura para galpoes em sao jose dos pinhais?”</span> não é uma consulta meramente informativa ou teórica. Trata-se de uma busca com altíssima qualificação comercial, onde o usuário possui uma necessidade prática e busca diretamente um fornecedor capacitado para a execução.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-4 not-prose">
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-xs font-mono font-bold text-emerald-400">“quem faz”</div>
                  <div className="text-xs text-slate-300">Procura direta por empresa, fabricante ou executores especializados.</div>
                </div>

                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-xs font-mono font-bold text-emerald-400">“estrutura para galpões”</div>
                  <div className="text-xs text-slate-300">Especificação exata do serviço e produto industrial buscado.</div>
                </div>

                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-xs font-mono font-bold text-emerald-400">“São José dos Pinhais”</div>
                  <div className="text-xs text-slate-300">Delimitação geográfica da execução do projeto industrial.</div>
                </div>

                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-xs font-mono font-bold text-emerald-400">Objetivo Final</div>
                  <div className="text-xs text-slate-300">Aproximação imediata entre intenção de pesquisa, fornecedor e contato comercial.</div>
                </div>
              </div>

              <p>
                Essa estrutura sintática conecta quatro vértices essenciais: <strong className="text-white">Necessidade + Serviço + Fornecedor + Localidade</strong>. Quando um potencial cliente executa uma consulta com essa especificidade, a presença destacada nas primeiras posições reduz radicalmente a fricção de descoberta.
              </p>
            </div>
          </section>

          {/* SEÇÃO: SEO LOCAL + GEO */}
          <section className="space-y-6 bg-slate-900/50 p-6 sm:p-8 rounded-2xl border border-slate-800">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Globe className="text-emerald-400" size={24} />
              <span>Da intenção de busca à autoridade geográfica</span>
            </h2>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                O SEO Local moderno exige que os mecanismos de busca compreendam a entidade empresarial e suas relações geográficas e de serviço com clareza matemática. As conexões estruturadas para o ecossistema da Alumimec incluem:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs not-prose">
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-emerald-300">
                  ALUMIMEC → Entidade Empresarial (Estruturas Metálicas)
                </div>
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-emerald-300">
                  ALUMIMEC → Fabricação e Montagem de Galpões Metálicos
                </div>
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-emerald-300">
                  ALUMIMEC → Relevância Comercial em São José dos Pinhais / PR
                </div>
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-emerald-300">
                  alumimec.com.br → Presença Digital Autoral e Estruturada
                </div>
              </div>

              <p className="pt-2">
                Neste contexto, a estratégia de <strong className="text-white">GEO (Generative Engine Optimization)</strong> e <strong className="text-white">SEO Local</strong> atua na organização semântica do código, estruturação de dados e autoridade de marca, permitindo que tanto o algoritmo tradicional do Google Search quanto a experiência de descoberta local associem a empresa à localidade pretendida.
              </p>

              {/* RESSALVA FACTUAL CRÍTICA */}
              <div className="p-4 bg-slate-950 rounded-xl border border-amber-500/30 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-400 font-mono">
                  <HelpCircle size={16} />
                  <span>Ressalva Factual de Documentação</span>
                </div>
                <p>
                  A captura apresentada neste case comprova especificamente a presença da Alumimec no <strong className="text-white">Google Search Orgânico</strong> e no <strong className="text-white">Google Local / Maps</strong> para a consulta fornecida. Esta evidência não é utilizada para alegar recomendação em respostas sintetizadas por inteligência artificial (como Google AI Overview, ChatGPT ou Gemini), pois o registro comprova as superfícies orgânica e local exibidas.
                </p>
              </div>
            </div>
          </section>

          {/* INTERNAL LINKING E AUTORIDADE */}
          <section className="border-t border-slate-800 pt-8 space-y-6">
            <h3 className="text-lg font-bold text-white">Explorar Soluções e Metodologias Relacionadas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-mono">
              <Link
                to="/servicos/seo-local"
                className="p-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-emerald-400 transition-all flex items-center justify-between group"
              >
                <span>Serviço: SEO Local & Google Maps</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-emerald-400" />
              </Link>

              <Link
                to="/servicos/geo-otimizacao-ia"
                className="p-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-emerald-400 transition-all flex items-center justify-between group"
              >
                <span>Serviço: GEO Otimização para IA</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-emerald-400" />
              </Link>

              <Link
                to="/dados-estruturados-schema"
                className="p-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-emerald-400 transition-all flex items-center justify-between group"
              >
                <span>Guia: Dados Estruturados Schema</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-emerald-400" />
              </Link>

              <Link
                to="/seo-curitiba-e-regiao"
                className="p-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-emerald-400 transition-all flex items-center justify-between group"
              >
                <span>SEO em Curitiba e Região</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-emerald-400" />
              </Link>

              <Link
                to="/metodo"
                className="p-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-emerald-400 transition-all flex items-center justify-between group"
              >
                <span>Método Omar SEO 4D</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-emerald-400" />
              </Link>

              <Link
                to="/sobre"
                className="p-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-emerald-400 transition-all flex items-center justify-between group"
              >
                <span>Sobre Omar Skafi</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-emerald-400" />
              </Link>
            </div>
          </section>

          {/* FOOTER CTA SECTION */}
          <footer className="bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-950 p-8 sm:p-10 rounded-2xl border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl font-bold text-white">Quer destacar sua empresa no Google e na busca local?</h3>
              <p className="text-sm text-slate-300 max-w-xl">
                Conheça como a estrutura semântica e a otimização geográfica transformam pesquisas de intenção comercial em oportunidades reais.
              </p>
            </div>
            <Link
              to="/resultados"
              className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg whitespace-nowrap flex items-center gap-2"
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
                  <span>Evidência Documental — Case #15: Alumimec</span>
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Consulta: “quem faz estrutura para galpoes em sao jose dos pinhais?”
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
                src="/images/cases/case-alumimec-estruturas-metalicas-sao-jose-dos-pinhais-google.png"
                alt="Alumimec no Google para estruturas de galpões em São José dos Pinhais (Evidência Completa)"
                className="w-full h-auto object-contain max-h-[75vh]"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 font-mono pt-1">
              <span>Google Search Orgânico + Google Local / Maps</span>
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
