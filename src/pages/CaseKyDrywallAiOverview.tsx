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
} from 'lucide-react';

export default function CaseKyDrywallAiOverview() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://www.omarseo.digital/resultados/ky-drywall-google-ia-curitiba#article',
    headline: 'Case GEO: KY Drywall na IA do Google em Curitiba | Omar SEO',
    description:
      'Evidência real de presença da KY Drywall & Steel Frame na Visão geral criada por IA do Google para uma consulta comercial sobre empresas de drywall em Curitiba.',
    url: 'https://www.omarseo.digital/resultados/ky-drywall-google-ia-curitiba',
    mainEntityOfPage: 'https://www.omarseo.digital/resultados/ky-drywall-google-ia-curitiba',
    inLanguage: 'pt-BR',
    author: {
      '@id': 'https://www.omarseo.digital/#person',
    },
    publisher: {
      '@id': 'https://www.omarseo.digital/#localbusiness',
    },
    image: {
      '@type': 'ImageObject',
      '@id': 'https://www.omarseo.digital/images/cases/case-ky-drywall-google-ai-curitiba.png#primaryimage',
      url: 'https://www.omarseo.digital/images/cases/case-ky-drywall-google-ai-curitiba.png',
      contentUrl: 'https://www.omarseo.digital/images/cases/case-ky-drywall-google-ai-curitiba.png',
      caption:
        'KY Drywall citada na Visão geral criada por IA do Google para qual empresa drywall em Curitiba',
      width: 1180,
      height: 680,
    },
  };

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12 text-slate-200">
      <EnhancedSEO
        title="Case GEO: KY Drywall na IA do Google em Curitiba | Omar SEO"
        description="Evidência real de presença da KY Drywall & Steel Frame na Visão geral criada por IA do Google para uma consulta comercial sobre empresas de drywall em Curitiba."
        canonical="/resultados/ky-drywall-google-ia-curitiba"
        ogImage="https://www.omarseo.digital/images/cases/case-ky-drywall-google-ai-curitiba.png"
        ogType="article"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Cases e Resultados', item: '/resultados' },
          {
            name: 'Case KY Drywall na IA do Google',
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
              <span>GEO / AIO — CONSULTA DE DESCOBERTA COMERCIAL</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/60">
              <Sparkles size={13} fill="currentColor" />
              <span>Visão Geral Criada por IA</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight leading-tight">
            Case GEO/AIO: KY Drywall citada pela IA do Google em Curitiba
          </h1>

          <p className="text-sm sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Evidência real de presença da KY Drywall &amp; Steel Frame na Visão geral criada por IA do Google para uma consulta comercial sobre empresas de drywall em Curitiba.
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
            PRESENÇA DOCUMENTADA EM IA
          </span>
          <h2 className="text-xl sm:text-2xl font-black font-display text-white">
            Uma pergunta comercial respondida pela busca generativa
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Resultado documentado de presença de marca em uma resposta generativa para uma consulta comercial local.
          </p>
        </div>

        <div className="bg-slate-900/90 p-4 rounded-2xl border border-cyan-500/40 text-left space-y-2 shrink-0 max-w-md">
          <div className="text-xs text-slate-400">
            <span className="font-bold text-cyan-400">Pergunta do usuário:</span>{' '}
            <span className="font-mono text-yellow-300">“qual empresa drywall em curitiba”</span>
          </div>
          <div className="text-xs text-slate-400">
            <span className="font-bold text-emerald-400">Entidade citada:</span>{' '}
            <span className="font-bold text-white">KY Drywall &amp; Steel Frame</span>
          </div>
        </div>
      </div>

      {/* QUADRO FACTUAL DO CASE #06 */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-slate-800 space-y-6">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-4">
          <FileCheck className="text-cyan-400" size={20} />
          <h2 className="text-lg font-bold font-display text-white">
            Ficha Técnica Factual — Case #06
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
              Empresa
            </span>
            <span className="text-sm font-bold text-white">KY Drywall &amp; Steel Frame</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
              Segmento
            </span>
            <span className="text-sm font-bold text-slate-200">Drywall / Steel Frame</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
              Consulta Documentada
            </span>
            <span className="text-sm font-bold text-yellow-300 font-mono">
              qual empresa drywall em curitiba
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
              Localização
            </span>
            <span className="text-sm font-bold text-slate-200">Curitiba, PR</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
              Plataforma
            </span>
            <span className="text-sm font-bold text-slate-200">Google</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
              Superfície
            </span>
            <span className="text-sm font-bold text-cyan-400">Visão geral criada por IA</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
              Tipo de Intenção
            </span>
            <span className="text-sm font-bold text-slate-200">
              Comercial + Local + Descoberta de Empresa
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
              Resultado Observado
            </span>
            <span className="text-sm font-bold text-emerald-400">
              Empresa citada nominalmente na resposta generativa
            </span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#0f1118] border border-slate-800 text-xs text-slate-300 flex items-center justify-between gap-4">
          <span className="flex items-center gap-2">
            <ShieldAlert size={16} className="text-cyan-400 shrink-0" />
            <span>Evidência registrada via captura real fornecida pelo proprietário.</span>
          </span>
          <span className="text-[10px] font-mono text-slate-500 uppercase shrink-0">
            Origem: Captura Real Google
          </span>
        </div>
      </div>

      {/* EXIBIÇÃO DA CAPTURA ORIGINAL */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold font-display text-white flex items-center gap-2">
            <Search className="text-cyan-400" size={20} />
            <span>Evidência Visual Documentada</span>
          </h2>
          <span className="text-xs text-slate-400 font-mono">Google AI Overview — Curitiba/PR</span>
        </div>

        <div className="p-3 bg-slate-950 rounded-3xl border border-cyan-500/40 shadow-[0_0_30px_rgba(34,211,238,0.12)] space-y-3">
          <div className="relative group bg-white p-2 sm:p-4 rounded-2xl overflow-hidden cursor-pointer" onClick={() => setIsLightboxOpen(true)}>
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
                <span>Clique para ampliar captura real</span>
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-400 italic px-2 text-center sm:text-left leading-relaxed">
            Captura real do Google mostrando a KY Drywall &amp; Steel Frame citada na Visão geral criada por IA para a consulta “qual empresa drywall em Curitiba”. Respostas generativas podem variar conforme data, localização, contexto, fontes disponíveis e atualizações do Google.
          </p>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center overflow-auto"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative max-w-6xl w-full bg-slate-900 rounded-2xl border border-cyan-500/50 p-2 sm:p-4 space-y-3 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 px-2">
              <span className="text-xs font-bold text-cyan-400 font-mono">
                Captura Real — KY Drywall &amp; Steel Frame na IA do Google
              </span>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="Fechar ampliação"
              >
                <X size={18} />
              </button>
            </div>
            <img
              src="/images/cases/case-ky-drywall-google-ai-curitiba.png"
              alt="KY Drywall citada na Visão geral criada por IA do Google para qual empresa drywall em Curitiba"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* SEÇÃO 1: POR QUE ESTE CASE É IMPORTANTE */}
      <div className="p-8 rounded-3xl bg-slate-950/90 border border-slate-800 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono block">
            ANÁLISE DE INTENÇÃO DE BUSCA
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Da palavra-chave à pergunta sobre uma empresa
          </h2>
        </div>

        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>
            Esta consulta possui uma característica fundamental para o entendimento de SEO generativo (GEO/AIO). O usuário não pesquisou simplesmente o termo genérico <strong className="text-white font-mono">“drywall”</strong> ou <strong className="text-white font-mono">“placas de gesso”</strong>.
          </p>

          <p>
            Ele formulou uma pergunta em linguagem natural com clara intenção comercial e local:
          </p>

          <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-800/60 font-mono text-cyan-300 text-center sm:text-left text-base font-bold">
            “qual empresa drywall em curitiba”
          </div>

          <p>
            Essa estrutura de pesquisa expressa uma intenção direta de descoberta de uma empresa associada a:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
            <div className="p-3.5 rounded-xl bg-[#0a0a0f] border border-slate-800 space-y-1">
              <span className="text-slate-400 font-bold block">Produto / Serviço</span>
              <span className="text-white font-semibold">Drywall / Steel Frame</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0a0a0f] border border-slate-800 space-y-1">
              <span className="text-slate-400 font-bold block">Localização Explicita</span>
              <span className="text-white font-semibold">Curitiba, PR</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0a0a0f] border border-slate-800 space-y-1">
              <span className="text-slate-400 font-bold block">Formato de Decisão</span>
              <span className="text-white font-semibold">Pergunta de descoberta de empresa</span>
            </div>
          </div>

          <p>
            Na captura documentada, a experiência generativa do Google recupera e apresenta a <strong className="text-white">KY Drywall &amp; Steel Frame</strong> nominalmente dentro dessa resposta sintetizada. Esse é um exemplo concreto de visibilidade de entidade comercial em busca generativa.
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
              Quem é a empresa e qual a sua denominação comercial e razão social exatas.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-bold">
              <CheckCircle2 size={16} />
              <span>Especialidade e Catálogo (What)</span>
            </div>
            <p className="text-slate-300">
              O que ela oferece: produtos de drywall, perfis para steel frame, placas e acessórios.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-bold">
              <CheckCircle2 size={16} />
              <span>Geografia e Atuação (Where)</span>
            </div>
            <p className="text-slate-300">
              Onde atua: sede em Curitiba/PR (Cajuru/BR-277), com atendimento a bairros e região metropolitana.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-bold">
              <CheckCircle2 size={16} />
              <span>Sustentação de Fontes (Proof)</span>
            </div>
            <p className="text-slate-300">
              Quais páginas próprias, dados estruturados e citações externas corroboram e validam essas informações.
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
          <p className="text-[11px] text-slate-400 italic pt-1">
            Nota de responsabilidade técnica: Não se afirma que qualquer elemento isolado tenha causado individualmente a citação na resposta generativa, pois os algoritmos de IA do Google utilizam múltiplos fatores dinâmicos de síntese.
          </p>
        </div>
      </div>

      {/* RELAÇÃO COM O CASE COMFORT DIVISÓRIAS (#05) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-950 via-cyan-950/40 to-slate-950 border border-cyan-500/40 space-y-4">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
          <Layers size={16} />
          <span>PADRÃO OBSERVADO EM CONSULTAS DE DESCOBERTA COMERCIAL</span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold font-display text-white">
          Veja também: empresa de divisórias Eucatex apresentada pela IA do Google
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Assim como neste case de drywall, o <strong className="text-white">Case #05 (Comfort Divisórias)</strong> documenta a presença generativa para a consulta comercial <strong className="text-yellow-300 font-mono">“qual empresa divisorias eucatex em curitiba”</strong>. Ambos demonstram o mesmo formato de pesquisa de descoberta local.
        </p>

        <div>
          <Link
            to="/resultados/comfort-divisorias-google-ia-curitiba"
            className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 bg-cyan-950/80 px-4 py-2 rounded-full border border-cyan-700/60 transition-all"
          >
            <span>Acessar Case #05 — Comfort Divisórias (IA do Google)</span>
            <ChevronRight size={14} />
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
          Este case documenta uma resposta observada na experiência de busca do Google no momento da captura. Respostas geradas por IA podem variar conforme localização, data, contexto, dispositivo, fontes disponíveis, personalização e atualizações dos sistemas do Google. A evidência não representa garantia de inclusão futura em respostas generativas.
        </p>
      </div>
    </div>
  );
}
