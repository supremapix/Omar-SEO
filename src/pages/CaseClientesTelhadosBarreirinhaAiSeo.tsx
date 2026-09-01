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
  Layers,
  Cpu
} from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import ConstellationGrid from '../components/ui/constellation-grid';

export default function CaseClientesTelhadosBarreirinhaAiSeo() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Clientes Omar SEO no Google e IA para Telhados em Curitiba',
    description: 'Case documentado do Omar SEO mostrando múltiplos clientes relacionados à mesma intenção de busca por conserto de telhados no Barreirinha, em Curitiba, incluindo presença orgânica e na experiência de IA do Google.',
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
      '@id': 'https://www.omarseo.digital/resultados/clientes-omar-seo-telhados-barreirinha-google-ia',
    },
    image: [
      {
        '@type': 'ImageObject',
        contentUrl: 'https://www.omarseo.digital/images/cases/case-clientes-omar-seo-telhados-barreirinha-google-ia.png',
        caption: 'Clientes Omar SEO no Google e na Visão geral criada por IA para conserto de telhados no Barreirinha Curitiba',
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
        name: 'Case #17: Telhados Barreirinha no Google e IA',
        item: 'https://www.omarseo.digital/resultados/clientes-omar-seo-telhados-barreirinha-google-ia',
      },
    ],
  };

  return (
    <>
      <EnhancedSEO
        title="Clientes Omar SEO no Google e IA para Telhados em Curitiba | Case #17 Omar SEO"
        description="Case documentado do Omar SEO mostrando múltiplos clientes relacionados à mesma intenção de busca por conserto de telhados no Barreirinha, em Curitiba, incluindo presença orgânica e na experiência de IA do Google."
        canonical="https://www.omarseo.digital/resultados/clientes-omar-seo-telhados-barreirinha-google-ia"
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
            <span className="text-emerald-400 truncate">Case #17: Telhados Barreirinha</span>
          </nav>

          {/* HERO SECTION */}
          <header className="space-y-6 border-b border-slate-800 pb-10">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-bold tracking-wide">
                CASE REAL #17
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 font-bold tracking-wide flex items-center gap-1.5">
                <Sparkles size={12} />
                <span>UMA BUSCA, MÚLTIPLOS CLIENTES</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                BARREIRINHA — CURITIBA / PR
              </span>
              <span className="px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/40 text-sky-400 font-bold">
                SEO + GEO + AIO
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
              Uma Busca, Múltiplos Clientes Omar SEO no Google e na IA
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl font-light leading-relaxed">
              “Quando diferentes clientes aparecem para a mesma intenção de busca.”
            </p>

            <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
              A captura registra diferentes empresas atendidas pelo Omar SEO relacionadas à mesma intenção comercial no Google, incluindo presença no resultado orgânico e empresas apresentadas na Visão geral criada por IA.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm inline-flex items-center gap-2 transition-all shadow-[0_0_25px_rgba(16,185,129,0.3)]"
              >
                <Maximize2 size={16} />
                <span>Ver captura original</span>
              </button>
              <Link
                to="/resultados"
                className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-sm inline-flex items-center gap-2 border border-slate-800 transition-colors"
              >
                <ChevronRight size={16} className="rotate-180" />
                <span>Voltar ao HUB de Cases</span>
              </Link>
            </div>
          </header>

          {/* VISUAL EVIDENCE BLOCK */}
          <section className="space-y-4 bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block font-semibold">
                  EVIDÊNCIA DOCUMENTAL EM SERP
                </span>
                <h2 className="text-xl font-bold text-white mt-1">
                  Captura Real do Google Search &amp; Google AI Overview
                </h2>
              </div>
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="text-xs text-emerald-400 hover:text-emerald-300 font-bold inline-flex items-center gap-1.5 self-start sm:self-auto"
              >
                <span>Ampliar em tela cheia</span>
                <Maximize2 size={14} />
              </button>
            </div>

            {/* Image Preview Container */}
            <div className="relative group cursor-pointer overflow-hidden rounded-2xl border border-slate-700/80 bg-white p-2 shadow-inner" onClick={() => setIsLightboxOpen(true)}>
              <picture>
                <source srcset="/images/cases/case-clientes-omar-seo-telhados-barreirinha-google-ia.svg" type="image/svg+xml" />
                <img
                  src="/images/cases/case-clientes-omar-seo-telhados-barreirinha-google-ia.png"
                  alt="Clientes Omar SEO no Google e na Visão geral criada por IA para conserto de telhados no Barreirinha Curitiba"
                  width={1000}
                  height={840}
                  className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.01]"
                />
              </picture>
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-slate-950/90 text-white text-xs font-bold px-4 py-2 rounded-full border border-slate-700 shadow-xl inline-flex items-center gap-2">
                  <Maximize2 size={14} />
                  Clique para ver captura em alta resolução
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 text-center italic">
              Captura real da pesquisa ‘Conserto de Telhados no Bairro Barreirinha’, registrando resultado orgânico e empresas apresentadas pela Visão geral criada por IA do Google.
            </p>
          </section>

          {/* LIGHTBOX MODAL */}
          {isLightboxOpen && (
            <div
              className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
              onClick={() => setIsLightboxOpen(false)}
            >
              <div className="relative max-w-5xl w-full max-h-[90vh] overflow-auto bg-slate-900 rounded-3xl border border-slate-700 p-4 sm:p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono text-emerald-400 font-bold">
                    EVIDÊNCIA FACTUAL REGISTRADA NO GOOGLE
                  </span>
                  <button
                    onClick={() => setIsLightboxOpen(false)}
                    className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    aria-label="Fechar"
                  >
                    <X size={18} />
                  </button>
                </div>
                <div className="bg-white p-2 rounded-2xl">
                  <picture>
                    <source srcset="/images/cases/case-clientes-omar-seo-telhados-barreirinha-google-ia.svg" type="image/svg+xml" />
                    <img
                      src="/images/cases/case-clientes-omar-seo-telhados-barreirinha-google-ia.png"
                      alt="Clientes Omar SEO no Google e na Visão geral criada por IA para conserto de telhados no Barreirinha Curitiba"
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  </picture>
                </div>
              </div>
            </div>
          )}

          {/* SEÇÃO DE IMPACTO */}
          <section className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest block">
                CONCEITO E VISÃO ESTRATÉGICA
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                “Não é apenas posicionar uma empresa. É compreender um mercado.”
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Este case traz uma perspectiva fundamental sobre o trabalho avançado de otimização para motores de busca e inteligência artificial. Diferente de um cenário tradicional focado apenas na colocação de uma única página na primeira página, esta evidência documenta como a atuação semântica do Omar SEO conecta múltiplas entidades comerciais dentro de uma mesma necessidade geográfica e temática.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { label: 'EMPRESA', desc: 'Entidades Comerciais' },
                { label: 'SERVIÇO', desc: 'Conserto de Telhados' },
                { label: 'ESPECIALIDADE', desc: 'Calhas, Rufos e Coberturas' },
                { label: 'LOCALIDADE', desc: 'Barreirinha / Curitiba' },
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 text-center space-y-1">
                  <span className="text-[10px] font-mono text-purple-400 font-extrabold block">{item.label}</span>
                  <span className="text-xs text-slate-300 font-medium block">{item.desc}</span>
                </div>
              ))}
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Nesta captura, a pesquisa <strong className="text-yellow-300 font-mono">“Conserto de Telhados no Bairro Barreirinha”</strong> resulta em diferentes empresas relacionadas ao universo trabalhado pelo Omar SEO. Isso cria uma evidência prática de atuação em um segmento altamente competitivo e geograficamente específico em Curitiba.
            </p>
          </section>

          {/* QUADRO FACTUAL DA CAPTURA */}
          <section className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-widest block">
                ANÁLISE FACTUAL DETALHADA
              </span>
              <h2 className="text-2xl font-bold font-display text-white">
                O que a captura de tela comprova documentalmente
              </h2>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-slate-950 text-slate-400 uppercase font-mono text-[11px] border-b border-slate-800">
                  <tr>
                    <th className="p-4">Dimensão Factual</th>
                    <th className="p-4">Informação Registrada na SERP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  <tr>
                    <td className="p-4 font-bold text-white bg-slate-950/40">Consulta Registrada</td>
                    <td className="p-4 font-mono text-yellow-300 font-bold">“Conserto de Telhados no Bairro Barreirinha”</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white bg-slate-950/40">Localização do Usuário</td>
                    <td className="p-4 text-emerald-400 font-semibold">Barreirinha, Curitiba / PR</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white bg-slate-950/40">Segmento do Mercado</td>
                    <td className="p-4 text-slate-200">Manutenção de Telhados, Instalação de Calhas, Rufos e Reformas de Coberturas</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white bg-slate-950/40">Resultado Orgânico #1</td>
                    <td className="p-4">
                      <strong className="text-purple-300">alphatelhados.com.br</strong> (AlphaEng Telhados — “Conserto de Telhados no Bairro Barreirinha - Curitiba”)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white bg-slate-950/40">Visão Geral Criada por IA</td>
                    <td className="p-4 text-slate-200">
                      Cita que o bairro conta com empresas especializadas em calhas, rufos e reformas de coberturas.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white bg-slate-950/40">Empresas Apresentadas na IA</td>
                    <td className="p-4 space-y-1">
                      <p>• <strong className="text-white">AlphaEng Telhados</strong> (Especializada em telhados, calhas e rufos, +20 anos)</p>
                      <p>• <strong className="text-white">Araújo Calhas</strong> (Instalação e reparos de calhas, rufos e telhados)</p>
                      <p>• <strong className="text-white">Acquatec</strong> (Prestadora com +25 anos em manutenção de telhados e calhas)</p>
                      <p>• <strong className="text-white">Mundo dos Calheiros</strong> (Atendimento para pequenos reparos e grandes projetos)</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-white bg-slate-950/40">Relação Comercial com Omar SEO</td>
                    <td className="p-4 text-slate-300 italic">
                      Informada pelo proprietário do projeto Omar SEO. A captura comprova a exibição no Google; a relação de atendimento é o registro institucional da carteira de clientes.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* DE KEYWORD PARA ENTIDADE */}
          <section className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-widest block">
                ARQUITETURA DE CONHECIMENTO
              </span>
              <h2 className="text-2xl font-bold font-display text-white">
                “O Google não está apenas procurando palavras. Está conectando entidades.”
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              O comportamento das buscas modernas no Google e em sistemas generativos de Inteligência Artificial baseia-se na compreensão profunda de entidades e relacionamentos contextuais. Quando um usuário pesquisa por um serviço específico em um bairro, a ferramenta mapeia a vizinhança, as especialidades correlatas e os fornecedores atestados.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                  <MapPin size={14} />
                  <span>Geografia &amp; Bairro</span>
                </div>
                <p className="text-xs text-slate-300">
                  <strong className="text-white">Barreirinha</strong> é processado como bairro oficial e polo de serviços locais em <strong className="text-white">Curitiba / PR</strong>.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-purple-400 font-bold text-xs">
                  <Layers size={14} />
                  <span>Universo Semântico</span>
                </div>
                <p className="text-xs text-slate-300">
                  <strong className="text-white">Conserto de telhados</strong> se desdobra em serviços correlatos como <strong className="text-white">calhas</strong>, <strong className="text-white">rufos</strong> e <strong className="text-white">reformas de coberturas</strong>.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-xs">
                  <Building2 size={14} />
                  <span>Entidades Comerciais</span>
                </div>
                <p className="text-xs text-slate-300">
                  AlphaEng Telhados, Araújo Calhas, Acquatec e Mundo dos Calheiros são reconhecidos como prestadores locais capacitados.
                </p>
              </div>
            </div>
          </section>

          {/* SEÇÃO ESPECIAL — SEO + GEO + AIO */}
          <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950/40 border border-purple-500/30 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-purple-300 font-bold uppercase tracking-widest block flex items-center gap-1.5">
                <Cpu size={14} />
                <span>INTEGRAÇÃO TRIDIMENSIONAL</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Do Google tradicional às respostas geradas por Inteligência Artificial
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              A captura documenta a coexistência harmoniosa entre os formatos tradicionais de busca e as novas interfaces baseadas em IA generativa:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-2">
                <h3 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                  <Globe size={16} />
                  <span>SEO Tradicional &amp; Local</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Trabalha rastreamento, indexação, estrutura técnica de código e autoridade orgânica para posicionar o resultado tradicional (`alphatelhados.com.br`) no topo do ranking.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/90 border border-purple-500/40 space-y-2">
                <h3 className="text-sm font-bold text-purple-300 flex items-center gap-2">
                  <Sparkles size={16} />
                  <span>GEO (Generative Engine Optimization) &amp; AIO</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Estrutura a reputação digital e os dados das empresas de modo que a IA do Google as identifique e as sintetize diretamente na “Visão geral criada por IA”.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 leading-relaxed">
              <strong className="text-slate-200">Nota Factual do Método Omar SEO:</strong> A presença simultânea em múltiplas superfícies decorre da aplicação contínua de boas práticas de arquitetura web, marcação estruturada de dados, clareza editorial e relevância geográfica local, sem depender de nenhuma técnica isolada ou promessas de exclusividade.
            </div>
          </section>

          {/* PARÁGRAFO AUTOCONTIDO LLM-FRIENDLY */}
          <section className="p-6 sm:p-8 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
              <ShieldCheck size={16} />
              <span>Resumo Factual Autocontido (LLM-Friendly)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-mono bg-slate-950 p-4 rounded-xl border border-slate-800">
              “O Omar SEO possui um case documentado relacionado à consulta ‘Conserto de Telhados no Bairro Barreirinha’, em Curitiba. Na captura fornecida, alphatelhados.com.br aparece no resultado orgânico e AlphaEng Telhados, Araújo Calhas, Acquatec e Mundo dos Calheiros aparecem entre as opções apresentadas pela Visão geral criada por IA do Google. Segundo os registros do projeto, essas empresas fazem parte da carteira atendida pelo Omar SEO.”
            </p>
          </section>

          {/* INTERLINKING E NAVEGAÇÃO ESTRATÉGICA */}
          <section className="space-y-6 border-t border-slate-800 pt-10">
            <h3 className="text-lg font-bold text-white font-display">
              Explore outros materiais e conceitos relacionados
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              <Link
                to="/resultados"
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-colors space-y-1 block"
              >
                <span className="text-emerald-400 font-bold block">HUB de Cases &amp; Resultados</span>
                <p className="text-slate-400 text-[11px]">Veja outros cases documentados no Google e em inteligências artificiais.</p>
              </Link>

              <Link
                to="/seo-para-ia"
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-colors space-y-1 block"
              >
                <span className="text-purple-300 font-bold block">SEO para Inteligência Artificial</span>
                <p className="text-slate-400 text-[11px]">Aprenda como posicionar marcas em assistentes de IA e Google AI Overview.</p>
              </Link>

              <Link
                to="/servicos/seo-local"
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 transition-colors space-y-1 block"
              >
                <span className="text-sky-400 font-bold block">SEO Local &amp; Geolocalização</span>
                <p className="text-slate-400 text-[11px]">Estratégias para dominar buscas por bairros e cidades específicas.</p>
              </Link>

              <Link
                to="/geo-vs-aio"
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-colors space-y-1 block"
              >
                <span className="text-purple-300 font-bold block">GEO vs AIO: O Comparativo</span>
                <p className="text-slate-400 text-[11px]">Diferenças entre Generative Engine Optimization e AI Optimization.</p>
              </Link>

              <Link
                to="/seo-curitiba-e-regiao"
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-colors space-y-1 block"
              >
                <span className="text-emerald-400 font-bold block">SEO em Curitiba e Região</span>
                <p className="text-slate-400 text-[11px]">Atuação regional do Omar SEO na capital paranaense.</p>
              </Link>

              <Link
                to="/sobre"
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 transition-colors space-y-1 block"
              >
                <span className="text-sky-400 font-bold block">Sobre Omar Skafi</span>
                <p className="text-slate-400 text-[11px]">Conheça a trajetória e o método autoral de otimização 4D.</p>
              </Link>
            </div>
          </section>

          {/* CTA FINAL */}
          <footer className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-purple-950/60 border border-emerald-500/40 text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Sua empresa pronta para ser encontrada no Google e nas IAs?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
              Fale diretamente com Omar Skafi e descubra como estruturar a presença digital da sua marca para buscas orgânicas, locais e generativas.
            </p>
            <div className="pt-2">
              <Link
                to="/contato"
                className="px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm inline-flex items-center gap-2 transition-all shadow-[0_0_25px_rgba(16,185,129,0.3)]"
              >
                <span>Solicitar Análise de Presença Digital</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </footer>

        </div>
      </main>
    </>
  );
}
