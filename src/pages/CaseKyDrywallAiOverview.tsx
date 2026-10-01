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
  HelpCircle,
  CheckCircle2,
  Award,
  ExternalLink,
} from 'lucide-react';

export default function CaseKyDrywallAiOverview() {
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://www.omarseo.digital/resultados/ky-drywall-google-ia-curitiba#article',
    headline: 'Case GEO / AIO: KY Drywall & Steel Frame na IA do Google e Orgânico em Curitiba | Omar SEO',
    description:
      'Evidências reais documentadas da KY Drywall & Steel Frame na Visão geral criada por IA do Google e resultados orgânicos para as buscas "Estruturas em Steel Frame curitiba" e "qual empresa drywall em Curitiba".',
    url: 'https://www.omarseo.digital/resultados/ky-drywall-google-ia-curitiba',
    mainEntityOfPage: 'https://www.omarseo.digital/resultados/ky-drywall-google-ia-curitiba',
    inLanguage: 'pt-BR',
    author: {
      '@id': 'https://www.omarseo.digital/#person',
    },
    publisher: {
      '@id': 'https://www.omarseo.digital/#localbusiness',
    },
    image: [
      {
        '@type': 'ImageObject',
        '@id': 'https://www.omarseo.digital/images/cases/case-ky-drywall-estruturas-steel-frame-curitiba-google-ai.png#primaryimage',
        url: 'https://www.omarseo.digital/images/cases/case-ky-drywall-estruturas-steel-frame-curitiba-google-ai.png',
        contentUrl: 'https://www.omarseo.digital/images/cases/case-ky-drywall-estruturas-steel-frame-curitiba-google-ai.png',
        caption:
          'KY Drywall citada em primeiro destaque na Visão geral criada por IA do Google para Estruturas em Steel Frame curitiba',
        width: 1200,
        height: 780,
      },
      {
        '@type': 'ImageObject',
        '@id': 'https://www.omarseo.digital/images/cases/case-ky-drywall-estruturas-steel-frame-curitiba-organico.png#evidence2',
        url: 'https://www.omarseo.digital/images/cases/case-ky-drywall-estruturas-steel-frame-curitiba-organico.png',
        contentUrl: 'https://www.omarseo.digital/images/cases/case-ky-drywall-estruturas-steel-frame-curitiba-organico.png',
        caption:
          'KY Drywall no resultado orgânico e Visão Geral de IA do Google para Estruturas em Steel Frame Em curitiba',
        width: 1200,
        height: 680,
      },
      {
        '@type': 'ImageObject',
        '@id': 'https://www.omarseo.digital/images/cases/case-ky-drywall-google-ai-curitiba.png#evidence3',
        url: 'https://www.omarseo.digital/images/cases/case-ky-drywall-google-ai-curitiba.png',
        contentUrl: 'https://www.omarseo.digital/images/cases/case-ky-drywall-google-ai-curitiba.png',
        caption:
          'KY Drywall citada na Visão geral criada por IA do Google para qual empresa drywall em Curitiba',
        width: 1180,
        height: 680,
      },
    ],
  };

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12 text-slate-200">
      <EnhancedSEO
        title="Case GEO & AIO: KY Drywall e Steel Frame na IA do Google em Curitiba | Omar SEO"
        description="Evidências reais da KY Drywall & Steel Frame citada na Visão Geral criada por IA do Google e resultado orgânico para 'Estruturas em Steel Frame curitiba'."
        canonical="/resultados/ky-drywall-google-ia-curitiba"
        ogImage="https://www.omarseo.digital/images/cases/case-ky-drywall-estruturas-steel-frame-curitiba-google-ai.png"
        ogType="article"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Cases e Resultados', item: '/resultados' },
          {
            name: 'Case KY Drywall & Steel Frame na IA do Google',
            item: '/resultados/ky-drywall-google-ia-curitiba',
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
              <span>CASE #06 • GEO + AIO + ORGÂNICO</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/60">
              <Sparkles size={13} fill="currentColor" />
              <span>Visão Geral Criada por IA &amp; Orgânico</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight leading-tight">
            Case GEO/AIO: KY Drywall &amp; Steel Frame na IA do Google e Orgânico em Curitiba
          </h1>

          <p className="text-sm sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Evidências reais documentadas de presença da KY Drywall &amp; Steel Frame na Visão geral criada por IA do Google e no topo orgânico para pesquisas de alta intenção comercial como <strong>“Estruturas em Steel Frame curitiba”</strong> e <strong>“qual empresa drywall em curitiba”</strong>.
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
              <span>Curitiba e Região Metropolitana — PR (Sede no Cajuru / BR-277)</span>
            </span>
          </div>
        </div>
      </div>

      {/* Destaque Principal Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-cyan-950/80 via-slate-950 to-emerald-950/80 border border-cyan-500/50 shadow-[0_0_30px_rgba(34,211,238,0.15)] space-y-3 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <span className="text-xs font-black uppercase tracking-widest text-cyan-400 bg-cyan-950/90 px-3 py-1 rounded-full border border-cyan-800/60 inline-block">
            PRESENÇA DOCUMENTADA EM IA E ORGÂNICO
          </span>
          <h2 className="text-xl sm:text-2xl font-black font-display text-white">
            Estruturas em Steel Frame e Drywall em Curitiba
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Apresentada em primeiro lugar na Visão Geral criada por IA e classificada organicamente para consultas comerciais estratégicas de construção a seco.
          </p>
        </div>

        <div className="bg-slate-900/90 p-4 rounded-2xl border border-cyan-500/40 text-left space-y-2 shrink-0 max-w-md">
          <div className="text-xs text-slate-400">
            <span className="font-bold text-cyan-400">Consultas Comprovadas:</span>{' '}
            <div className="font-mono text-yellow-300 font-bold mt-0.5">
              • “Estruturas em Steel Frame curitiba”<br />
              • “qual empresa drywall em curitiba”
            </div>
          </div>
          <div className="text-xs text-slate-400">
            <span className="font-bold text-emerald-400">Entidade e Site:</span>{' '}
            <span className="font-bold text-white">KY Drywall Construções Steel Frame (kydrywall.com.br)</span>
          </div>
        </div>
      </div>

      {/* QUADRO FACTUAL DO CASE #06 */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-slate-800 space-y-6">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-4">
          <FileCheck className="text-cyan-400" size={20} />
          <h2 className="text-lg font-bold font-display text-white">
            Ficha Técnica Factual — Case #06 (KY Drywall &amp; Steel Frame)
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
              Identificação do Case
            </span>
            <span className="text-sm font-bold text-cyan-400 font-mono">CASE #06</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
              Empresa &amp; Domínio
            </span>
            <span className="text-sm font-bold text-white">KY Drywall (kydrywall.com.br)</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
              Segmento
            </span>
            <span className="text-sm font-bold text-slate-200">Light Steel Frame &amp; Drywall</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
              Buscas Comprovadas nos Prints
            </span>
            <div className="text-xs font-bold text-yellow-300 font-mono space-y-0.5">
              <div>“Estruturas em Steel Frame curitiba”</div>
              <div>“qual empresa drywall em curitiba”</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
              Localização Sede
            </span>
            <span className="text-sm font-bold text-slate-200">Cajuru (BR-277, 3641) — Curitiba, PR</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
              Superfícies Google
            </span>
            <span className="text-sm font-bold text-cyan-400">Visão Geral de IA + Orgânico</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
              Tipo de Intenção
            </span>
            <span className="text-sm font-bold text-slate-200">
              Comercial + Projetos &amp; Obras + Distribuição de Perfis
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
              Diferenciais Reconhecidos pela IA
            </span>
            <span className="text-xs font-bold text-emerald-400">
              +25 anos, Distribuidora Oficial Barbieri Z180, projetos e assessoria
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
              Resultados Observados
            </span>
            <span className="text-sm font-bold text-emerald-400">
              Citação em 1º lugar na IA e URL orgânica no snippet
            </span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#0f1118] border border-slate-800 text-xs text-slate-300 flex items-center justify-between gap-4">
          <span className="flex items-center gap-2">
            <ShieldAlert size={16} className="text-cyan-400 shrink-0" />
            <span>Evidências digitais registradas via capturas reais do Google Search em Curitiba/PR.</span>
          </span>
          <span className="text-[10px] font-mono text-slate-500 uppercase shrink-0">
            Origem: Capturas Reais Google
          </span>
        </div>
      </div>

      {/* SEÇÃO DE EVIDÊNCIAS VISUAIS (GALERIA EDITORIAL) */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono block">
              COMPROVAÇÕES VISUAIS
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
              <Search className="text-cyan-400" size={22} />
              <span>Evidências Documentadas no Google</span>
            </h2>
          </div>
          <span className="text-xs text-slate-400 font-mono hidden sm:inline">
            Clique em qualquer captura para ampliar
          </span>
        </div>

        {/* EVIDÊNCIA 1: Estruturas em Steel Frame Curitiba (AI Overview) */}
        <div className="p-4 sm:p-6 bg-slate-950 rounded-3xl border-2 border-cyan-500/50 shadow-[0_0_30px_rgba(34,211,238,0.15)] space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800 inline-block mb-1">
                EVIDÊNCIA #1 — BUSCA DE ALTA INTENÇÃO COMERCIAL (STEEL FRAME)
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white font-mono">
                Pesquisa: “Estruturas em Steel Frame curitiba”
              </h3>
            </div>
            <span className="text-xs font-bold text-cyan-300 bg-cyan-950/90 px-3 py-1 rounded-full border border-cyan-800/80 flex items-center gap-1.5">
              <Sparkles size={13} />
              <span>1º Destaque na Visão Geral de IA</span>
            </span>
          </div>

          <div
            className="relative group bg-white p-2 rounded-2xl overflow-hidden cursor-pointer"
            onClick={() =>
              setActiveLightboxImage('/images/cases/case-ky-drywall-estruturas-steel-frame-curitiba-google-ai.png')
            }
          >
            <picture>
              <source
                srcSet="/images/cases/case-ky-drywall-estruturas-steel-frame-curitiba-google-ai.webp"
                type="image/webp"
              />
              <img
                src="/images/cases/case-ky-drywall-estruturas-steel-frame-curitiba-google-ai.png"
                alt="KY Drywall citada em primeiro destaque na Visão geral criada por IA do Google para Estruturas em Steel Frame curitiba"
                width={1200}
                height={780}
                className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </picture>
            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="px-4 py-2 rounded-full bg-slate-900/90 text-cyan-400 text-xs font-bold flex items-center gap-2 border border-cyan-500/50 shadow-xl">
                <Maximize2 size={14} />
                <span>Clique para ampliar print da IA</span>
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5 text-xs text-slate-300 leading-relaxed">
            <p>
              <strong>Texto extraído da síntese de IA do Google:</strong> <em>“Empresas especializadas em projetos, execução de obras e fornecimento de materiais em <strong>Steel Frame</strong> em Curitiba incluem a <strong>KY Drywall</strong>...”</em>
            </p>
            <p className="text-slate-400">
              • <strong>KY Drywall Construções Steel Frame:</strong> Localizada no Cajuru (BR-277, 3641), atua com projetos, venda de perfis de aço galvanizado Barbieri Z180 e instalação completa para residências e comércios. Citação direta com link e card de visualização do site <code>www.kydrywall.com.br</code>.
            </p>
          </div>
        </div>

        {/* EVIDÊNCIA 2: Estruturas em Steel Frame Em curitiba (Orgânico + IA Detalhada) */}
        <div className="p-4 sm:p-6 bg-slate-950 rounded-3xl border-2 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.15)] space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800 inline-block mb-1">
                EVIDÊNCIA #2 — RESULTADO ORGÂNICO + IA EXPANDIDA (+25 ANOS)
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white font-mono">
                Pesquisa: “Estruturas em Steel Frame Em curitiba”
              </h3>
            </div>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950/90 px-3 py-1 rounded-full border border-emerald-800/80 flex items-center gap-1.5">
              <Globe size={13} />
              <span>Orgânico + IA Simultâneos</span>
            </span>
          </div>

          <div
            className="relative group bg-white p-2 rounded-2xl overflow-hidden cursor-pointer"
            onClick={() =>
              setActiveLightboxImage('/images/cases/case-ky-drywall-estruturas-steel-frame-curitiba-organico.png')
            }
          >
            <picture>
              <source
                srcSet="/images/cases/case-ky-drywall-estruturas-steel-frame-curitiba-organico.webp"
                type="image/webp"
              />
              <img
                src="/images/cases/case-ky-drywall-estruturas-steel-frame-curitiba-organico.png"
                alt="KY Drywall no resultado orgânico e Visão Geral de IA do Google para Estruturas em Steel Frame Em curitiba"
                width={1200}
                height={680}
                className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </picture>
            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="px-4 py-2 rounded-full bg-slate-900/90 text-emerald-400 text-xs font-bold flex items-center gap-2 border border-emerald-500/50 shadow-xl">
                <Maximize2 size={14} />
                <span>Clique para ampliar print orgânico + IA</span>
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5 text-xs text-slate-300 leading-relaxed">
            <p>
              <strong>Reconhecimento de Autoridade na IA:</strong> <em>“KY Drywall Construções Steel Frame (Cajuru, Curitiba): Destaca-se com mais de 25 anos de mercado, atuando como distribuidora oficial de perfis galvanizados Barbieri Z180, além de oferecer projetos, assessoria técnica completa e materiais para steel frame e drywall.”</em>
            </p>
            <p className="text-emerald-400 font-mono">
              <strong>Snippet Orgânico no Google:</strong> <code>https://www.kydrywall.com.br › steel-frame</code> — “Steel Frame - Construcao Inteligente | KY Drywall Curitiba: Sistema construtivo Steel Frame: obra 70% mais rapida, sustentavel e com projeto executivo detalhado...”
            </p>
          </div>
        </div>

        {/* EVIDÊNCIA 3: qual empresa drywall em curitiba */}
        <div className="p-4 sm:p-6 bg-slate-950 rounded-3xl border border-slate-800 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 bg-slate-900 px-2.5 py-0.5 rounded border border-slate-800 inline-block mb-1">
                EVIDÊNCIA #3 — CONSULTA CONVERSACIONAL DE DESCOBERTA (DRYWALL)
              </span>
              <h3 className="text-base font-bold text-white font-mono">
                Pesquisa: “qual empresa drywall em curitiba”
              </h3>
            </div>
          </div>

          <div
            className="relative group bg-white p-2 rounded-2xl overflow-hidden cursor-pointer"
            onClick={() =>
              setActiveLightboxImage('/images/cases/case-ky-drywall-google-ai-curitiba.png')
            }
          >
            <img
              src="/images/cases/case-ky-drywall-google-ai-curitiba.png"
              alt="KY Drywall citada na Visão geral criada por IA do Google para qual empresa drywall em Curitiba"
              width={1180}
              height={680}
              className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="px-4 py-2 rounded-full bg-slate-900/90 text-cyan-400 text-xs font-bold flex items-center gap-2 border border-cyan-500/50 shadow-xl">
                <Maximize2 size={14} />
                <span>Clique para ampliar captura</span>
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-400 italic px-2 text-center sm:text-left leading-relaxed">
            Captura mostrando a KY Drywall &amp; Steel Frame citada nominalmente na Visão geral criada por IA para a consulta “qual empresa drywall em Curitiba”.
          </p>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {activeLightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center overflow-auto"
          onClick={() => setActiveLightboxImage(null)}
        >
          <div
            className="relative max-w-6xl w-full bg-slate-900 rounded-2xl border border-cyan-500/50 p-2 sm:p-4 space-y-3 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 px-2">
              <span className="text-xs font-bold text-cyan-400 font-mono">
                Captura Real em Alta Resolução — KY Drywall &amp; Steel Frame no Google
              </span>
              <button
                onClick={() => setActiveLightboxImage(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                aria-label="Fechar ampliação"
              >
                <X size={18} />
              </button>
            </div>
            <img
              src={activeLightboxImage}
              alt="Comprovação real da KY Drywall no Google"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg bg-white"
            />
          </div>
        </div>
      )}

      {/* SEÇÃO 1: POR QUE ESTE CASE É IMPORTANTE */}
      <div className="p-8 rounded-3xl bg-slate-950/90 border border-slate-800 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono block">
            ANÁLISE DE INTENÇÃO DE BUSCA &amp; ENGENHARIA DE PROMPT
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Da palavra-chave à decisão de contratação de Steel Frame e Drywall
          </h2>
        </div>

        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>
            As buscas documentadas comprovam uma evolução decisiva no comportamento dos usuários e dos sistemas de busca do Google. O usuário moderno pesquisa em formatos diretos e conversacionais para contratações técnicas:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-800/60 font-mono text-cyan-300 text-sm font-bold">
              “Estruturas em Steel Frame curitiba”
            </div>
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 font-mono text-emerald-300 text-sm font-bold">
              “qual empresa drywall em curitiba”
            </div>
          </div>

          <p>
            Essas consultas expressam uma intenção transacional e de especificação técnica com alta exigência de autoridade de marca:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
            <div className="p-3.5 rounded-xl bg-[#0a0a0f] border border-slate-800 space-y-1">
              <span className="text-slate-400 font-bold block">Produto / Engenharia</span>
              <span className="text-white font-semibold">Light Steel Framing &amp; Drywall</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0a0a0f] border border-slate-800 space-y-1">
              <span className="text-slate-400 font-bold block">Geolocalização Exata</span>
              <span className="text-white font-semibold">Curitiba (Cajuru/BR-277) e RMC</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0a0a0f] border border-slate-800 space-y-1">
              <span className="text-slate-400 font-bold block">Critérios Sintetizados</span>
              <span className="text-white font-semibold">Distribuidora Barbieri Z180 +25 anos</span>
            </div>
          </div>

          <p>
            Nas capturas documentadas, o Google recupera e apresenta a <strong className="text-white">KY Drywall Construções Steel Frame</strong> nominalmente no primeiro item da Visão Geral criada por IA e na listagem orgânica direta. Esse é um exemplo concreto de como a estruturação semântica, dados de entidade e relevância regional consolidam visibilidade simultânea em IA generativa e buscas tradicionais.
          </p>
        </div>
      </div>

      {/* SEÇÃO 2: GEO / AIO — O QUE PROCURA ESTRUTURAR */}
      <div className="p-8 rounded-3xl bg-slate-950/90 border border-slate-800 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest font-mono block">
            ESTRUTURA TÉCNICA
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            O que GEO/AIO procura estruturar?
          </h2>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          De maneira técnica e responsável, estratégias de Generative Engine Optimization (GEO) e AI Overview Optimization (AIO) trabalham sinais digitais que auxiliam mecanismos de busca e sistemas generativos a compreender a identidade e a relevância de uma marca:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-bold">
              <CheckCircle2 size={16} />
              <span>Identidade de Entidade (Who)</span>
            </div>
            <p className="text-slate-300">
              Quem é a empresa: KY Drywall Construções Steel Frame, distribuidora e executora especializada com mais de 25 anos no mercado de construção a seco.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-bold">
              <CheckCircle2 size={16} />
              <span>Especialidade e Catálogo (What)</span>
            </div>
            <p className="text-slate-300">
              O que ela oferece: estruturas em Light Steel Frame, perfis galvanizados Barbieri Z180, placas de drywall, isolamentos térmicos/acústicos, projetos e assessoria técnica executiva.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-bold">
              <CheckCircle2 size={16} />
              <span>Geografia e Atuação (Where)</span>
            </div>
            <p className="text-slate-300">
              Onde atua: sede em Curitiba/PR na Rodovia BR-277 (Cajuru, 3641), com atendimento presencial, logística de entrega própria e cobertura para toda a Região Metropolitana e Paraná.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-bold">
              <CheckCircle2 size={16} />
              <span>Sustentação de Fontes (Proof)</span>
            </div>
            <p className="text-slate-300">
              Páginas de catálogo técnico (<code>kydrywall.com.br/steel-frame</code>), Schema.org LocalBusiness, certificação de distribuidora e consistência de NAP que validam os dados para o algoritmo de IA.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-3 text-xs text-slate-300">
          <h3 className="font-bold text-white text-sm">
            Pilares que participam dessa estruturação semântica:
          </h3>
          <div className="flex flex-wrap gap-2 text-slate-300">
            {[
              'SEO técnico',
              'Entity SEO',
              'Conteúdo semântico',
              'Dados estruturados (Schema.org)',
              'Arquitetura da informação',
              'SEO Local',
              'Consistência de NAP',
              'Páginas de produtos e serviços',
              'Autoridade temática',
              'Links e menções externas',
            ].map((pilar, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-200"
              >
                {pilar}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* RELAÇÃO COM OUTROS CASES */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-950 via-cyan-950/40 to-slate-950 border border-cyan-500/40 space-y-4">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
          <Layers size={16} />
          <span>CASES RELACIONADOS EM ENGENHARIA E CONSTRUÇÃO CIVIL</span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold font-display text-white">
          Veja outros cases de presença em IA do Google e busca orgânica
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link
            to="/resultados/comfort-divisorias-google-ia-curitiba"
            className="p-4 rounded-2xl bg-slate-900/90 border border-cyan-800/60 hover:border-cyan-500 transition-all group block space-y-1"
          >
            <span className="text-[10px] font-bold text-cyan-400 uppercase">Case #05 • Divisórias</span>
            <p className="text-white text-xs font-bold group-hover:text-cyan-300">Comfort Divisórias (IA do Google)</p>
            <span className="text-[11px] text-slate-400 font-mono">“qual empresa divisorias eucatex em curitiba”</span>
          </Link>

          <Link
            to="/resultados/alumimec-estruturas-metalicas-sao-jose-dos-pinhais"
            className="p-4 rounded-2xl bg-slate-900/90 border border-emerald-800/60 hover:border-emerald-500 transition-all group block space-y-1"
          >
            <span className="text-[10px] font-bold text-emerald-400 uppercase">Case #15 • Estruturas Metálicas</span>
            <p className="text-white text-xs font-bold group-hover:text-emerald-300">Alumimec Estruturas (São José dos Pinhais)</p>
            <span className="text-[11px] text-slate-400 font-mono">“quem faz estrutura para galpoes em sao jose dos pinhais”</span>
          </Link>
        </div>
      </div>

      {/* TECHNICAL DISCLAIMER */}
      <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-2 text-xs text-slate-400 leading-relaxed">
        <div className="flex items-center gap-2 font-bold text-slate-300">
          <ShieldAlert size={15} className="text-cyan-400" />
          <span>Aviso de Transparência e Isenção de Garantia Futura</span>
        </div>
        <p>
          Este case documenta respostas observadas na experiência de busca do Google no momento das capturas. Respostas geradas por IA podem variar conforme localização, data, contexto, dispositivo, fontes disponíveis, personalização e atualizações dos sistemas do Google. A evidência comprova o registro factual das respostas observadas.
        </p>
      </div>
    </div>
  );
}
