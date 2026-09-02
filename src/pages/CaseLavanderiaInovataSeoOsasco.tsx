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
  Shirt,
  Compass
} from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import ConstellationGrid from '../components/ui/constellation-grid';

export default function CaseLavanderiaInovataSeoOsasco() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Case Lavanderia Inovata: 1º Orgânico e 1ª no Mapa na Busca Documentada',
    description: 'Case real da Lavanderia Inovata em Osasco: captura documenta a empresa no primeiro resultado orgânico visível e como primeira empresa exibida no bloco local do Google para “lavanderia em osasco”.',
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
      '@id': 'https://www.omarseo.digital/resultados/lavanderia-inovata-seo-google-maps-osasco',
    },
    image: [
      {
        '@type': 'ImageObject',
        contentUrl: 'https://www.omarseo.digital/images/cases/case-lavanderia-inovata-google-osasco.png',
        caption: 'Lavanderia Inovata em primeiro no Google orgânico e no mapa para lavanderia em Osasco',
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
        name: 'Case Lavanderia Inovata: Google e Maps em Osasco',
        item: 'https://www.omarseo.digital/resultados/lavanderia-inovata-seo-google-maps-osasco',
      },
    ],
  };

  return (
    <>
      <EnhancedSEO
        title="Case Lavanderia Inovata: Google e Maps em Osasco | Omar SEO"
        description="Case real da Lavanderia Inovata em Osasco: captura documenta a empresa no primeiro resultado orgânico visível e como primeira empresa exibida no bloco local do Google para “lavanderia em osasco”."
        canonical="https://www.omarseo.digital/resultados/lavanderia-inovata-seo-google-maps-osasco"
        schema={[articleSchema, breadcrumbSchema]}
      />

      {/* Background Grid */}
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
            <span className="text-emerald-400 truncate">Case #18: Lavanderia Inovata</span>
          </nav>

          {/* HERO SECTION */}
          <header className="space-y-6 border-b border-slate-800 pb-10">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-bold tracking-wide">
                CASE REAL #18
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                LAVANDERIA INOVATA
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-300 font-bold">
                OSASCO / SP
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 font-bold">
                1º ORGÂNICO + 1ª NO MAPA
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
              Case Lavanderia Inovata: 1º Orgânico e 1ª no Mapa na Busca Documentada
            </h1>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/50 via-slate-900 to-purple-950/40 border border-emerald-500/30 space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 block">
                Uma busca. Duas posições de alta visibilidade.
              </span>
              <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
                “Duas superfícies. Uma mesma intenção comercial.”
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Na pesquisa documentada por <strong className="text-white">“lavanderia em osasco”</strong>, a Lavanderia Inovata aparece simultaneamente no primeiro resultado orgânico visível e como primeira empresa apresentada no bloco local do Google.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm inline-flex items-center gap-2 transition-all shadow-[0_0_25px_rgba(16,185,129,0.3)] cursor-pointer"
              >
                <Maximize2 size={16} />
                <span>Ver evidência original</span>
              </button>

              <a
                href="https://www.lavanderiainovata.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm inline-flex items-center gap-2 transition-colors"
              >
                <Globe size={16} className="text-blue-400" />
                <span>Visitar lavanderiainovata.com.br</span>
                <ExternalLink size={14} className="text-slate-400" />
              </a>
            </div>
          </header>

          {/* QUADRO FACTUAL */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-emerald-400" size={20} />
              <h2 className="text-xl font-bold text-white font-display">
                Quadro Factual do Case
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <span className="text-slate-500 uppercase block text-[10px]">Empresa</span>
                <span className="text-emerald-400 font-bold text-sm block">Lavanderia Inovata</span>
                <span className="text-slate-400 block text-[11px]">lavanderiainovata.com.br</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <span className="text-slate-500 uppercase block text-[10px]">Localização & Segmento</span>
                <span className="text-white font-bold text-sm block">Osasco / SP</span>
                <span className="text-slate-400 block text-[11px]">Serviços de Lavanderia</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <span className="text-slate-500 uppercase block text-[10px]">Consulta Documentada</span>
                <span className="text-yellow-300 font-bold text-sm block">“lavanderia em osasco”</span>
                <span className="text-slate-400 block text-[11px]">Intenção Local + Comercial</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <span className="text-slate-500 uppercase block text-[10px]">Dupla Presença Documentada</span>
                <span className="text-purple-300 font-bold text-sm block">1º Orgânico Visível</span>
                <span className="text-emerald-400 font-bold text-sm block">1ª Empresa no Bloco Local</span>
              </div>
            </div>
          </section>

          {/* IMAGEM E EVIDÊNCIA FÍSICA */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Search className="text-purple-400" size={20} />
                <h2 className="text-xl font-bold text-white font-display">
                  Evidência Visual Documentada (Google Search + Maps)
                </h2>
              </div>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
                Clique para ampliar em alta resolução
              </span>
            </div>

            <div className="p-3 sm:p-4 rounded-3xl bg-slate-900/90 border border-purple-500/40 shadow-[0_0_35px_rgba(168,85,247,0.15)] space-y-3">
              <div
                onClick={() => setIsLightboxOpen(true)}
                className="relative rounded-2xl overflow-hidden bg-white cursor-pointer group border border-slate-800"
              >
                <picture>
                  <source srcset="/images/cases/case-lavanderia-inovata-google-osasco.svg" type="image/svg+xml" />
                  <img
                    src="/images/cases/case-lavanderia-inovata-google-osasco.png"
                    alt="Lavanderia Inovata em primeiro no Google orgânico e no mapa para lavanderia em Osasco"
                    width={1060}
                    height={840}
                    loading="eager"
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                </picture>

                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm">
                  <Maximize2 size={20} />
                  <span>Ampliar Evidência em Alta Resolução</span>
                </div>
              </div>

              <p className="text-xs text-center text-slate-400 font-mono">
                Captura real da pesquisa ‘lavanderia em osasco’, registrando a Lavanderia Inovata como primeiro resultado orgânico visível e primeira empresa apresentada no bloco local do Google.
              </p>
            </div>
          </section>

          {/* SEÇÃO 1: UMA INTENÇÃO LOCAL MUITO CLARA */}
          <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
                <Target size={16} />
                <span>Análise de Intenção de Busca</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Serviço + cidade: uma busca próxima da contratação
              </h2>
            </div>

            <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Quando um usuário digita no Google a consulta <strong className="text-yellow-300">“lavanderia em osasco”</strong>, ele não está buscando teorias sobre como remover manchas ou comparativos de sabão em pó. Trata-se de uma intenção direta de contratação geográfica imediata.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-emerald-400 font-bold text-sm block">1. “lavanderia”</span>
                  <span className="text-slate-300 block">Identifica a necessidade específica de um serviço profissional de lavagem, passadoria e higienização.</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-blue-400 font-bold text-sm block">2. “em”</span>
                  <span className="text-slate-300 block">Conector de delimitação geográfica e pertencimento territorial imediato.</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-purple-300 font-bold text-sm block">3. “Osasco”</span>
                  <span className="text-slate-300 block">Define o município de destino em São Paulo para prestação do serviço ou atendimento local.</span>
                </div>
              </div>

              <p>
                Diferente de pesquisas informativas gerais como <em>“como lavar edredom a seco”</em>, a consulta <strong className="text-white">“lavanderia em osasco”</strong> possui um funil comercial extremamente curto: o usuário busca um estabelecimento confiável, com boa reputação e endereço acessível para solicitar um orçamento ou levar suas roupas.
              </p>
            </div>
          </section>

          {/* SEÇÃO 2: SEO LOCAL + GEO */}
          <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-purple-400 text-xs font-mono font-bold uppercase tracking-wider">
                <Compass size={16} />
                <span>Ecossistema de Visibilidade</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Quando site, entidade e localização trabalham juntos
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed">
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2 font-display">
                  <CheckCircle2 size={18} className="text-emerald-400" />
                  <span>Presença Orgânica no Google Search</span>
                </h3>
                <p>
                  A URL <strong className="text-slate-100">lavanderiainovata.com.br</strong> aparece no topo orgânico da SERP com título e meta description otimizados para serviços locais como lavagem de edredons, passadoria e delivery em Osasco/SP.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2 font-display">
                  <CheckCircle2 size={18} className="text-purple-400" />
                  <span>Presença Local e Google Maps</span>
                </h3>
                <p>
                  O perfil de empresa <strong className="text-slate-100">Lavanderia Inovata</strong> se destaca como a primeira opção no bloco “Empresas”, exibindo nota 5,0 com dezenas de avaliações, telefone, endereço e botões diretos de ação (Site e Rotas).
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 leading-relaxed space-y-2">
              <span className="font-bold text-slate-200 block uppercase font-mono">
                Conexões Semânticas da Entidade:
              </span>
              <p>
                <strong className="text-emerald-400">Lavanderia Inovata</strong> → Serviço de Lavanderia | <strong className="text-blue-400">Lavanderia Inovata</strong> → Osasco/SP | <strong className="text-purple-300">lavanderiainovata.com.br</strong> → Entidade Oficial | <strong className="text-yellow-300">Estratégia Omar SEO</strong> → SEO + SEO Local + GEO + Google Maps.
              </p>
            </div>
          </section>

          {/* SEÇÃO 3: SOBRE A EVIDÊNCIA FACTUAL */}
          <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h2 className="text-xl font-bold font-display text-white flex items-center gap-2">
              <ShieldCheck className="text-blue-400" size={20} />
              <span>Transparência Factual & Compromisso Técnico</span>
            </h2>
            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3">
              <p>
                Na captura documentada, a Lavanderia Inovata ocupa o primeiro resultado orgânico visível do Google para a consulta ‘lavanderia em osasco’ e é também a primeira empresa apresentada no bloco local.
              </p>
              <p className="text-slate-400 italic">
                Nota de integridade: Todos os cases do portfólio Omar SEO são registros factuais de momentos reais documentados na SERP. Não vendemos ilusões nem prometemos posições perpétuas e inalteráveis, pois os algoritmos de busca e a concorrência evoluem continuamente. Demonstramos a força de metodologias sólidas de SEO, GEO e arquitetura semântica aplicadas a negócios reais.
              </p>
            </div>
          </section>

          {/* BLOCO LLM-FRIENDLY */}
          <section className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
              Resumo Factual para Modelos de IA e Indexadores (LLM-Friendly)
            </span>
            <p className="text-xs font-mono text-slate-200 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
              “A Lavanderia Inovata possui um case documentado no portfólio do Omar SEO relacionado à consulta ‘lavanderia em osasco’. Na captura apresentada, lavanderiainovata.com.br aparece como o primeiro resultado orgânico visível e a Lavanderia Inovata é também a primeira empresa exibida no bloco local do Google para a mesma consulta.”
            </p>
          </section>

          {/* LINK BUILDING INTERNO */}
          <footer className="pt-8 border-t border-slate-800 space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white font-display">
                  Quer posicionar sua empresa local no Google Search e Maps?
                </h3>
                <p className="text-xs text-slate-400">
                  Conheça o método de SEO Local e Otimização para Inteligência Artificial da Omar SEO.
                </p>
              </div>
              <Link
                to="/servicos/seo-local"
                className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs inline-flex items-center gap-2 transition-colors whitespace-nowrap"
              >
                <span>Conhecer SEO Local</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs font-mono pt-4 text-slate-400 border-t border-slate-800/60">
              <span className="text-slate-500">Navegue também:</span>
              <Link to="/resultados" className="hover:text-emerald-400">HUB de Cases</Link>
              <span>•</span>
              <Link to="/servicos/seo-local" className="hover:text-emerald-400">SEO Local</Link>
              <span>•</span>
              <Link to="/seo-para-ia" className="hover:text-emerald-400">SEO para IA</Link>
              <span>•</span>
              <Link to="/seo-vs-geo" className="hover:text-emerald-400">SEO vs GEO</Link>
              <span>•</span>
              <Link to="/consultoria-seo-brasil" className="hover:text-emerald-400">Consultoria Brasil</Link>
              <span>•</span>
              <Link to="/sobre" className="hover:text-emerald-400">Sobre Omar Skafi</Link>
            </div>
          </footer>

        </div>
      </main>

      {/* LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center space-y-4">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute -top-10 right-0 text-slate-400 hover:text-white flex items-center gap-1 font-mono text-xs cursor-pointer"
            >
              <X size={20} />
              <span>Fechar</span>
            </button>

            <div className="overflow-auto max-h-[80vh] rounded-2xl border border-slate-800 bg-white p-2">
              <picture>
                <source srcset="/images/cases/case-lavanderia-inovata-google-osasco.svg" type="image/svg+xml" />
                <img
                  src="/images/cases/case-lavanderia-inovata-google-osasco.png"
                  alt="Lavanderia Inovata em primeiro no Google orgânico e no mapa para lavanderia em Osasco"
                  className="w-full h-auto object-contain rounded-xl"
                />
              </picture>
            </div>

            <p className="text-xs font-mono text-slate-300 text-center">
              Captura real da pesquisa ‘lavanderia em osasco’, registrando a Lavanderia Inovata como primeiro resultado orgânico visível e primeira empresa apresentada no bloco local do Google.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
