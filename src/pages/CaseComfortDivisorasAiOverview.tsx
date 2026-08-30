import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import ConstellationGrid from '../components/ui/constellation-grid';
import { BackgroundVideo } from '../components/BackgroundVideo';
import {
  Search,
  FileCheck,
  Maximize2,
  X,
  UserCheck,
  Building2,
  ArrowLeft,
  ChevronRight,
  ShieldAlert,
  Globe,
  Bot,
  Sparkles,
  Layers,
  Cpu,
  BrainCircuit,
  MapPin,
} from 'lucide-react';

export default function CaseComfortDivisorasAiOverview() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://www.omarseo.digital/resultados/comfort-divisorias-google-ia-curitiba#article',
    headline: 'Case GEO: Comfort Divisórias na IA do Google | Omar SEO',
    description:
      'Resultado documentado mostrando a Comfort Divisórias presente tanto na experiência generativa quanto nos resultados orgânicos do Google para uma pesquisa comercial sobre divisórias Eucatex em Curitiba.',
    url: 'https://www.omarseo.digital/resultados/comfort-divisorias-google-ia-curitiba',
    mainEntityOfPage: 'https://www.omarseo.digital/resultados/comfort-divisorias-google-ia-curitiba',
    inLanguage: 'pt-BR',
    author: {
      '@id': 'https://www.omarseo.digital/#person',
    },
    publisher: {
      '@id': 'https://www.omarseo.digital/#localbusiness',
    },
    image: {
      '@type': 'ImageObject',
      '@id': 'https://www.omarseo.digital/images/cases/case-comfort-divisorias-eucatex-google-ai.png#primaryimage',
      url: 'https://www.omarseo.digital/images/cases/case-comfort-divisorias-eucatex-google-ai.png',
      contentUrl: 'https://www.omarseo.digital/images/cases/case-comfort-divisorias-eucatex-google-ai.png',
      caption:
        'Comfort Divisórias apresentada pela IA do Google para busca sobre empresa de divisórias Eucatex em Curitiba',
      width: 1180,
      height: 660,
    },
  };

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12 text-slate-200">
      <EnhancedSEO
        title="Case GEO: Comfort Divisórias na IA do Google | Omar SEO"
        description="Resultado documentado mostrando a Comfort Divisórias presente tanto na experiência generativa quanto nos resultados orgânicos do Google para uma pesquisa comercial sobre divisórias Eucatex em Curitiba."
        canonical="/resultados/comfort-divisorias-google-ia-curitiba"
        ogImage="https://www.omarseo.digital/images/cases/case-comfort-divisorias-eucatex-google-ai.png"
        ogType="article"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Cases e Resultados', item: '/resultados' },
          {
            name: 'Case Comfort Divisórias na IA do Google',
            item: '/resultados/comfort-divisorias-google-ia-curitiba',
          },
        ]}
        schema={[articleSchema]}
      />

      {/* Back Link */}
      <div>
        <Link
          to="/resultados"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors bg-cyan-950/60 border border-cyan-800/60 px-3.5 py-1.5 rounded-full"
        >
          <ArrowLeft size={14} />
          <span>Voltar para Cases e Resultados</span>
        </Link>
      </div>

      {/* Hero Header */}
      <div className="relative p-8 sm:p-12 rounded-3xl bg-slate-950/90 border border-cyan-500/40 shadow-[0_0_40px_rgba(34,211,238,0.15)] overflow-hidden">
        <BackgroundVideo
          src="https://img.supremasite.com.br/seo-omar.mp4"
          opacity={0.35}
          overlayClassName="bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/60 to-[#0a0a0f]/90"
        />
        <ConstellationGrid className="absolute inset-0 z-0 opacity-30 pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-950/90 px-3 py-1 rounded-full border border-cyan-500/40">
              <Bot size={14} />
              <span>SEO + GEO / AIO</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/60">
              <Sparkles size={13} fill="currentColor" />
              <span>Presença Generativa + Busca Orgânica</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight leading-tight">
            Case SEO + GEO: Comfort Divisórias apresentada pela IA do Google
          </h1>

          <p className="text-sm sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Resultado documentado mostrando a Comfort Divisórias presente tanto na experiência generativa quanto nos resultados orgânicos do Google para uma pesquisa comercial sobre divisórias Eucatex em Curitiba.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400 border-t border-slate-800/80">
            <span className="flex items-center gap-1.5 text-slate-300">
              <UserCheck size={14} className="text-cyan-400" />
              <span>
                Documentado por{' '}
                <Link to="/omar-skafi" className="text-cyan-400 hover:underline font-semibold">
                  Omar Skafi
                </Link>{' '}
                —{' '}
                <Link to="/sobre" className="text-cyan-400 hover:underline font-semibold">
                  Omar SEO
                </Link>
              </span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Building2 size={14} className="text-emerald-400" />
              <span>Curitiba e Região Metropolitana — PR</span>
            </span>
          </div>
        </div>
      </div>

      {/* Destaque Principal Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-cyan-950/80 via-slate-950 to-emerald-950/80 border border-cyan-500/50 shadow-[0_0_30px_rgba(34,211,238,0.15)] space-y-3 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <span className="text-xs font-black uppercase tracking-widest text-cyan-400 bg-cyan-950/90 px-3 py-1 rounded-full border border-cyan-800/60 inline-block">
            RESULTADO DOCUMENTADO
          </span>
          <h2 className="text-xl sm:text-2xl font-black font-display text-white">
            IA do Google + Busca Orgânica
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Uma mesma entidade presente em diferentes superfícies da pesquisa.
          </p>
        </div>
        <div className="shrink-0">
          <Link
            to="/geo-ia"
            className="btn-primary-gold px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2"
          >
            <span>Entenda o GEO</span>
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>

      {/* Bloco Factual / Card de Evidência */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
          <FileCheck size={20} className="text-cyan-400" />
          <span>Fatos do Resultado Documentado (Case #05)</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Cliente
            </span>
            <span className="text-base font-bold text-white">
              Comfort Divisórias
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Segmento
            </span>
            <span className="text-base font-bold text-cyan-300">
              Divisórias Eucatex / Divisórias corporativas
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Consulta Registrada
            </span>
            <span className="text-base font-bold text-yellow-300 font-mono text-xs sm:text-sm">
              “qual empresa divisorias eucatex em curitiba”
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Localização & Plataforma
            </span>
            <span className="text-base font-bold text-emerald-300">
              Curitiba, PR (Google)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-[#0f1118] border border-cyan-900/40 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block">
              Presença Generativa
            </span>
            <p className="text-sm font-bold text-white leading-snug">
              Documentada na “Visão geral criada por IA” do Google.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-emerald-900/40 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
              Presença Orgânica
            </span>
            <p className="text-sm font-bold text-white leading-snug">
              Documentada em resultado orgânico tradicional (comfortdivisorias.com.br).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-purple-900/40 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 block">
              Classificação Técnica
            </span>
            <p className="text-sm font-bold text-white leading-snug">
              SEO + GEO/AIO (Presença Factual em Busca Tradicional e Generativa).
            </p>
          </div>
        </div>
      </section>

      {/* Evidência Visual Original (Screenshot) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
            <Search size={20} className="text-cyan-400" />
            <span>Evidência Factual: Captura Real do Google</span>
          </h2>
          <span className="text-xs text-slate-400 font-mono hidden sm:inline">Captura Real Fornecida pelo Proprietário</span>
        </div>

        <div className="bg-slate-950 p-3 sm:p-5 rounded-3xl border border-slate-800 space-y-3 relative group">
          <div className="overflow-hidden rounded-2xl bg-white border border-slate-700 relative">
            <img
              src="/images/cases/case-comfort-divisorias-eucatex-google-ai.png"
              alt="Comfort Divisórias apresentada pela IA do Google para busca sobre empresa de divisórias Eucatex em Curitiba"
              width={1180}
              height={660}
              loading="eager"
              className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01] cursor-pointer"
              onClick={() => setIsLightboxOpen(true)}
            />

            <button
              onClick={() => setIsLightboxOpen(true)}
              className="absolute bottom-4 right-4 bg-slate-950/80 hover:bg-slate-900 text-cyan-400 px-3 py-2 rounded-xl text-xs font-bold border border-cyan-500/40 shadow-lg flex items-center gap-1.5 backdrop-blur-sm transition-all"
              aria-label="Ampliar imagem da captura"
            >
              <Maximize2 size={14} />
              <span className="hidden sm:inline">Ampliar Evidência</span>
            </button>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed italic bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
            Captura real do Google mostrando a Comfort Divisórias na Visão geral criada por IA e em resultado orgânico para a consulta documentada sobre empresas de divisórias Eucatex em Curitiba. Resultados podem variar ao longo do tempo.
          </p>
        </div>
      </section>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl p-2 sm:p-4">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 bg-slate-950/80 text-slate-300 hover:text-white p-2.5 rounded-full border border-slate-700 z-10 transition-colors"
              aria-label="Fechar ampliação"
            >
              <X size={20} />
            </button>
            <div className="max-h-[85vh] overflow-auto">
              <img
                src="/images/cases/case-comfort-divisorias-eucatex-google-ai.png"
                alt="Comfort Divisórias apresentada pela IA do Google para busca sobre empresa de divisórias Eucatex em Curitiba"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
            <p className="text-xs text-slate-400 p-3 text-center">
              Captura original fornecida registrando a resposta generativa (AI Overview) e o resultado orgânico no Google.
            </p>
          </div>
        </div>
      )}

      {/* Alegações Permitidas Factuais */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-cyan-500/30 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
          <Sparkles size={22} className="text-cyan-400" />
          <span>Fatos Comprovados pela Captura</span>
        </h2>

        <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            A Comfort Divisórias foi apresentada na Visão geral criada por IA do Google para uma pergunta comercial diretamente relacionada a empresas de divisórias Eucatex em Curitiba.
          </p>
          <p>
            Na mesma captura, a Comfort também possui presença em resultado orgânico relacionado à intenção pesquisada.
          </p>

          <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/50 text-cyan-200 text-xs font-semibold">
            Presença documentada em busca tradicional e generativa para a marca Comfort Divisórias no segmento de instalação de divisórias Eucatex em Curitiba e Região Metropolitana.
          </div>
        </div>
      </section>

      {/* Seção Educacional: Por que este case é relevante para GEO? */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-slate-800 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
          <BrainCircuit size={22} className="text-emerald-400" />
          <span>Por que este case é relevante para GEO?</span>
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Este resultado é particularmente relevante porque a pesquisa não é apenas uma palavra-chave genérica. O usuário formula uma pergunta natural e completa:
          </p>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 text-yellow-300 font-mono text-xs sm:text-sm">
            “qual empresa divisorias eucatex em curitiba”
          </div>

          <p>
            Nessa consulta, existe uma combinação precisa de:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
            <li className="p-3 rounded-xl bg-[#0f1118] border border-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span><strong className="text-white">Intenção comercial:</strong> busca por fornecedores para contratação.</span>
            </li>
            <li className="p-3 rounded-xl bg-[#0f1118] border border-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span><strong className="text-white">Categoria de serviço:</strong> fornecimento e instalação de divisórias.</span>
            </li>
            <li className="p-3 rounded-xl bg-[#0f1118] border border-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              <span><strong className="text-white">Produto / Material:</strong> divisórias Eucatex e divisórias corporativas.</span>
            </li>
            <li className="p-3 rounded-xl bg-[#0f1118] border border-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              <span><strong className="text-white">Localização geográfica:</strong> Curitiba e Região Metropolitana.</span>
            </li>
          </ul>

          <p>
            Trata-se de um pedido implícito de recomendação de empresa. Sistemas generativos de pesquisa (como a Visão Geral criada por IA do Google / AI Overview) precisam compreender a entidade da marca, seus serviços, sua abrangência geográfica e suas relações conceituais para formular respostas desse tipo.
          </p>

          <p>
            Neste registro, a <strong className="text-white">Comfort Divisórias</strong> aparece contextualizada dentro da resposta produzida pela experiência generativa do Google, funcionando como fonte e opção recomendada. Isso constitui evidência factual de visibilidade generativa (<Link to="/geo-ia" className="text-cyan-400 hover:underline">GEO - Generative Engine Optimization</Link>) para a consulta documentada.
          </p>
        </div>
      </section>

      {/* SEO + GEO Trabalhando Juntos */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-slate-800 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
          <Layers size={22} className="text-cyan-400" />
          <span>Da página orgânica à resposta generativa</span>
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            A própria captura demonstra que SEO tradicional e GEO/AIO não devem necessariamente ser tratados como estratégias isoladas. Na mesma pesquisa realizada no Google:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-cyan-800/60 space-y-1">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">Superfície Generativa (IA)</span>
              <p className="text-xs text-slate-200">
                Comfort Divisórias aparece sintetizada no bloco “Visão geral criada por IA” e listada nas fontes relacionadas.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-emerald-800/60 space-y-1">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">Superfície Orgânica (SERP)</span>
              <p className="text-xs text-slate-200">
                <code className="text-emerald-300 font-mono">comfortdivisorias.com.br</code> aparece indexado nos resultados orgânicos para divisórias Eucatex e Naval em Curitiba.
              </p>
            </div>
          </div>

          <p>
            Uma estrutura digital consistente que constrói autoridade para busca tradicional e generativa em ecossistemas de inteligência artificial pode envolver múltiplos pilares técnicos e estratégicos:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
            <div className="p-2.5 rounded-lg bg-[#0f1118] border border-slate-800 text-slate-300">
              • Conteúdo semanticamente claro
            </div>
            <div className="p-2.5 rounded-lg bg-[#0f1118] border border-slate-800 text-slate-300">
              • <Link to="/seo-tecnico" className="text-cyan-400 hover:underline">SEO técnico</Link> otimizado
            </div>
            <div className="p-2.5 rounded-lg bg-[#0f1118] border border-slate-800 text-slate-300">
              • Definição clara de entidades
            </div>
            <div className="p-2.5 rounded-lg bg-[#0f1118] border border-slate-800 text-slate-300">
              • Páginas focadas em serviços
            </div>
            <div className="p-2.5 rounded-lg bg-[#0f1118] border border-slate-800 text-slate-300">
              • Informações geográficas precisas
            </div>
            <div className="p-2.5 rounded-lg bg-[#0f1118] border border-slate-800 text-slate-300">
              • <Link to="/dados-estruturados-schema" className="text-cyan-400 hover:underline">Dados estruturados Schema</Link>
            </div>
            <div className="p-2.5 rounded-lg bg-[#0f1118] border border-slate-800 text-slate-300">
              • Arquitetura de links internos
            </div>
            <div className="p-2.5 rounded-lg bg-[#0f1118] border border-slate-800 text-slate-300">
              • Autoridade temática e tópica
            </div>
            <div className="p-2.5 rounded-lg bg-[#0f1118] border border-slate-800 text-slate-300">
              • <Link to="/seo-google-maps" className="text-cyan-400 hover:underline">SEO Local</Link> e Google Maps
            </div>
          </div>

          <p className="text-slate-400 text-xs">
            A estratégia técnica conduzida por <Link to="/omar-skafi" className="text-cyan-400 hover:underline font-semibold">Omar Skafi</Link> na consultoria de <Link to="/servicos/consultoria-seo" className="text-cyan-400 hover:underline font-semibold">Omar SEO</Link> atua no alinhamento de entidades de marca para que os algoritmos de busca tradicional e generativa compreendam com clareza quem a empresa é, o que ela oferece e qual área geográfica ela atende.
          </p>
        </div>
      </section>

      {/* Relacionamento de Cases nas 3 Superfícies */}
      <section className="space-y-4 pt-2">
        {/* RELAÇÃO COM O CASE KY DRYWALL (#06) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-950 via-cyan-950/40 to-slate-950 border border-cyan-500/40 space-y-4 mb-6">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Layers size={16} />
            <span>PADRÃO OBSERVADO EM CONSULTAS DE DESCOBERTA COMERCIAL</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold font-display text-white">
            Veja também: empresa de drywall encontrada na busca generativa do Google
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Assim como no segmento de divisórias Eucatex, a <strong className="text-white">KY Drywall &amp; Steel Frame (Case #06)</strong> é apresentada nominalmente na Visão geral criada por IA do Google para a consulta comercial <strong className="text-yellow-300 font-mono">“qual empresa drywall em curitiba”</strong>.
          </p>

          <div>
            <Link
              to="/resultados/ky-drywall-google-ia-curitiba"
              className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 bg-cyan-950/80 px-4 py-2 rounded-full border border-cyan-700/60 transition-all"
            >
              <span>Acessar Case #06 — KY Drywall na IA do Google</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800/60 inline-block">
            Outros Resultados Factuais
          </span>
          <h2 className="text-xl sm:text-2xl font-black font-display text-white">
            Navegue pelos Cases Documentados no Hub de Resultados
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            to="/resultados/seo-advogados-planos-de-saude"
            className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-yellow-500/50 transition-colors space-y-2 block group"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-400 block">Case #01 — SEO Orgânico</span>
            <h3 className="text-sm font-bold text-white group-hover:text-yellow-300 transition-colors">Advocacia Saúde no Topo</h3>
            <p className="text-xs text-slate-400">Consulta comercial jurídica em Curitiba nos links azuis tradicionais.</p>
          </Link>

          <Link
            to="/resultados/carplus-google-ai-overview-pneus-curitiba"
            className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 transition-colors space-y-2 block group"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block">Case #03 — GEO / AIO</span>
            <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">Carplus na IA do Google</h3>
            <p className="text-xs text-slate-400">Recomendação generativa de pneus e oficina mecânica em Curitiba.</p>
          </Link>

          <Link
            to="/resultados/seo-local-ecoservy-corte-e-poda-curitiba"
            className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/50 transition-colors space-y-2 block group"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">Case #04 — SEO Local</span>
            <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">Ecoservy Corte e Poda</h3>
            <p className="text-xs text-slate-400">Primeiro resultado empresarial no bloco local (Local Pack) do Google.</p>
          </Link>
        </div>
      </section>

      {/* Disclaimer Factual Obrigatório */}
      <section className="p-5 rounded-2xl bg-[#0d0f17] border border-amber-900/40 space-y-2">
        <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <ShieldAlert size={16} />
          <span>Nota de Transparência e Disclaimer Factual</span>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed">
          Este case registra resultados observados na captura apresentada. Resultados orgânicos e respostas geradas por IA podem variar conforme data, localização, dispositivo, contexto, personalização, fontes disponíveis e atualizações dos sistemas de busca. O registro não representa garantia de posições ou inclusão futura em respostas de inteligência artificial.
        </p>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-cyan-950/80 via-slate-950 to-emerald-950/80 rounded-3xl p-8 sm:p-12 border border-cyan-500/40 text-center space-y-6 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
        <div className="space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black font-display text-white">
            Quer posicionar sua empresa na IA do Google e nas buscas de Curitiba?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Diagnóstico de presença generativa (GEO/AIO), estrutura de entidades de marca e auditoria técnica com Omar Skafi.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/auditoria-seo"
            className="btn-primary-gold px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2"
          >
            <span>Solicitar Auditoria GEO & SEO</span>
            <ChevronRight size={16} />
          </Link>
          <Link
            to="/contato"
            className="px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider border border-slate-700 inline-flex items-center gap-2 transition-colors"
          >
            <span>Falar com Omar Skafi</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
