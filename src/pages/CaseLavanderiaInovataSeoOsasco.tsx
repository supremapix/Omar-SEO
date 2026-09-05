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
  Compass,
  Cpu
} from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import ConstellationGrid from '../components/ui/constellation-grid';

export default function CaseLavanderiaInovataSeoOsasco() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Case Lavanderia Inovata: IA do Google, 1º Orgânico e Painel Local em Osasco',
    description: 'Case real da Lavanderia Inovata em Osasco/SP: captura documenta citação na Visão Geral criada por IA (AI Overview), 1º resultado orgânico visível e Painel Local no Google com nota 5,0 para “lavanderia profissional osasco”.',
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
        caption: 'Lavanderia Inovata citada na IA do Google, no primeiro resultado orgânico e no Painel Local para lavanderia profissional em Osasco',
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
        name: 'Case Lavanderia Inovata: IA, Google e Maps em Osasco',
        item: 'https://www.omarseo.digital/resultados/lavanderia-inovata-seo-google-maps-osasco',
      },
    ],
  };

  return (
    <>
      <EnhancedSEO
        title="Case Lavanderia Inovata: IA do Google, 1º Orgânico e Painel Local | Omar SEO"
        description="Case real da Lavanderia Inovata em Osasco/SP: captura documenta citação na Visão Geral criada por IA (AI Overview), 1º resultado orgânico visível e Painel Local no Google com nota 5,0 para “lavanderia profissional osasco”."
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
              <span className="px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 font-bold flex items-center gap-1">
                <Sparkles size={12} />
                <span>IA DO GOOGLE (AI OVERVIEW)</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-bold">
                1º ORGÂNICO + PAINEL LOCAL
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
              Case Lavanderia Inovata: IA do Google, 1º Orgânico e Painel Local em Osasco
            </h1>

            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950/50 via-slate-900 to-purple-950/40 border border-emerald-500/30 space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Cpu size={14} className="text-purple-400" />
                <span>Tríplice Destaque de Visibilidade Digital</span>
              </span>
              <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
                “Citada pela Inteligência Artificial do Google, no topo orgânico e no Painel Local.”
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Na pesquisa documentada por <strong className="text-yellow-300 font-mono">“lavanderia profissional osasco”</strong> (e <strong className="text-slate-200 font-mono">“lavanderia em osasco”</strong>), a Lavanderia Inovata é destacada como a primeira opção citada na <strong className="text-purple-300">Visão geral criada por IA (AI Overview)</strong>, ocupa o <strong className="text-emerald-400">1º resultado orgânico visível</strong> com seu site oficial e sobressai no <strong className="text-blue-300">Painel Local do Google com avaliação 5,0</strong>.
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
                Quadro Factual do Case #18
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
                <span className="text-slate-400 block text-[11px]">Lavanderia Profissional & Passadoria</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <span className="text-slate-500 uppercase block text-[10px]">Consulta Documentada</span>
                <span className="text-yellow-300 font-bold text-sm block">“lavanderia profissional osasco”</span>
                <span className="text-slate-400 block text-[11px]">Intenção Comercial Qualificada</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <span className="text-slate-500 uppercase block text-[10px]">Presença Tríplice</span>
                <span className="text-purple-300 font-bold text-sm block">1ª Citação na IA (AI Overview)</span>
                <span className="text-emerald-400 font-bold text-sm block">1º Orgânico + Painel Local (5,0 ★)</span>
              </div>
            </div>
          </section>

          {/* IMAGEM E EVIDÊNCIA FÍSICA */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Search className="text-purple-400" size={20} />
                <h2 className="text-xl font-bold text-white font-display">
                  Evidência Visual Documentada (Google IA + Search + Maps)
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
                  <source srcSet="/images/cases/case-lavanderia-inovata-google-osasco.svg" type="image/svg+xml" />
                  <img
                    src="/images/cases/case-lavanderia-inovata-google-osasco.png"
                    alt="Lavanderia Inovata citada na IA do Google, no primeiro resultado orgânico e no mapa para lavanderia profissional em Osasco"
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
                Captura real da pesquisa ‘lavanderia profissional osasco’, registrando a Lavanderia Inovata na Visão Geral criada por IA (AI Overview), no primeiro resultado orgânico visível e no Painel Local com nota 5,0.
              </p>
            </div>
          </section>

          {/* SEÇÃO 1: UMA INTENÇÃO LOCAL E PROFISSIONAL QUALIFICADA */}
          <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
                <Target size={16} />
                <span>Análise de Intenção de Busca &amp; GEO</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                “lavanderia profissional osasco”: Qualificação comercial de alto valor
              </h2>
            </div>

            <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Quando o consumidor pesquisa por <strong className="text-yellow-300 font-mono">“lavanderia profissional osasco”</strong>, ele expressa um nível refinado de exigência técnica. Ele busca o cuidado especializado para peças delicadas, edredons, ternos, vestidos ou serviço corporativo/delivery em Osasco.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-emerald-400 font-bold text-sm block">1. “lavanderia”</span>
                  <span className="text-slate-300 block">Especifica a necessidade essencial do serviço de lavagem, passadoria e higienização.</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-purple-300 font-bold text-sm block">2. “profissional”</span>
                  <span className="text-slate-300 block">Filtro de qualidade: busca estrutura empresarial qualificada, processo técnico confiável e atendimento diferenciado.</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-blue-400 font-bold text-sm block">3. “osasco”</span>
                  <span className="text-slate-300 block">Delimitação geográfica do município de atendimento na Região Metropolitana de São Paulo.</span>
                </div>
              </div>

              <p>
                A arquitetura semântica desenvolvida pelo <strong className="text-white">Omar SEO</strong> garante que tanto os robôs tradicionais do Google Search quanto os modelos generativos de IA reconheçam a <strong className="text-emerald-400">Lavanderia Inovata</strong> como a entidade de maior autoridade e relevância para essa consulta.
              </p>
            </div>
          </section>

          {/* SEÇÃO 2: SEO LOCAL + IA + GEO */}
          <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-purple-400 text-xs font-mono font-bold uppercase tracking-wider">
                <Compass size={16} />
                <span>Ecossistema Multicorpo de Visibilidade</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                A Tríplice Presença: IA, Orgânico e Painel Local
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-300 leading-relaxed">
              <div className="p-5 rounded-2xl bg-slate-950 border border-purple-500/30 space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2 font-display">
                  <Sparkles size={18} className="text-purple-400" />
                  <span>1. Citação na IA do Google</span>
                </h3>
                <p>
                  Na <strong className="text-purple-300">Visão geral criada por IA (AI Overview)</strong>, a Lavanderia Inovata surge como o primeiro card de fonte citada para a recomendação de lavanderias profissionais em Osasco.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2 font-display">
                  <CheckCircle2 size={18} className="text-emerald-400" />
                  <span>2. 1º Orgânico no Google</span>
                </h3>
                <p>
                  O domínio <strong className="text-slate-100">lavanderiainovata.com.br</strong> lidera o ranking orgânico com snippet otimizado citando lavagem de edredons, tênis, passadoria e serviço leva e traz (delivery).
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-blue-500/30 space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2 font-display">
                  <MapPin size={18} className="text-blue-400" />
                  <span>3. Painel Local e Maps</span>
                </h3>
                <p>
                  O perfil da <strong className="text-slate-100">Lavanderia Inovata</strong> ganha destaque lateral no Painel do Conhecimento, exibindo nota perfeita 5,0 com 45 avaliações reais e atalhos diretos para site e rotas.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 leading-relaxed space-y-2">
              <span className="font-bold text-slate-200 block uppercase font-mono">
                Conexões Semânticas da Entidade:
              </span>
              <p>
                <strong className="text-emerald-400">Lavanderia Inovata</strong> → Lavanderia Profissional | <strong className="text-purple-300">Google AI Overview</strong> → Fonte Recomendada | <strong className="text-blue-400">Osasco/SP</strong> → Entidade Geolocalizada | <strong className="text-yellow-300">Método Omar SEO</strong> → SEO + GEO + AIO + Google Maps.
              </p>
            </div>
          </section>

          {/* SEÇÃO 3: SOBRE A EVIDÊNCIA FACTUAL */}
          <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h2 className="text-xl font-bold font-display text-white flex items-center gap-2">
              <ShieldCheck className="text-blue-400" size={20} />
              <span>Transparência Factual &amp; Compromisso Técnico</span>
            </h2>
            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3">
              <p>
                Na captura documentada para a consulta ‘lavanderia profissional osasco’, a Lavanderia Inovata aparece simultaneamente na Visão Geral criada por IA do Google, no 1º lugar orgânico visível e no Painel Local de Empresa.
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
              “A Lavanderia Inovata possui o Case #18 documentado no portfólio do Omar SEO relacionado à consulta ‘lavanderia profissional osasco’ e ‘lavanderia em osasco’. Na captura apresentada, a Lavanderia Inovata é citada no card de recomendação da Visão geral criada por IA (AI Overview), surge como o primeiro resultado orgânico em lavanderiainovata.com.br e destaca-se no Painel Local do Google com avaliação 5,0 em Osasco/SP.”
            </p>
          </section>

          {/* LINK BUILDING INTERNO */}
          <footer className="pt-8 border-t border-slate-800 space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white font-display">
                  Quer posicionar sua empresa local no Google Search, Maps e nas IAs?
                </h3>
                <p className="text-xs text-slate-400">
                  Conheça o método de SEO Local e Otimização para Inteligência Artificial (GEO) da Omar SEO.
                </p>
              </div>
              <Link
                to="/servicos/seo-local"
                className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs inline-flex items-center gap-2 transition-colors whitespace-nowrap"
              >
                <span>Conhecer SEO Local + IA</span>
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
                <source srcSet="/images/cases/case-lavanderia-inovata-google-osasco.svg" type="image/svg+xml" />
                <img
                  src="/images/cases/case-lavanderia-inovata-google-osasco.png"
                  alt="Lavanderia Inovata citada na IA do Google, no primeiro resultado orgânico e no mapa para lavanderia profissional em Osasco"
                  className="w-full h-auto object-contain rounded-xl"
                />
              </picture>
            </div>

            <p className="text-xs font-mono text-slate-300 text-center">
              Captura real da pesquisa ‘lavanderia profissional osasco’, registrando a Lavanderia Inovata na Visão Geral criada por IA (AI Overview), no primeiro resultado orgânico visível e no Painel Local do Google.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
