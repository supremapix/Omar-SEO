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
  Building2,
  ArrowLeft,
  ChevronRight,
  ShieldAlert,
  Globe,
  MapPin,
  CheckCircle2,
  Award,
  ExternalLink,
  Shield,
  Layers,
  Sparkles,
  Cpu,
  Compass,
} from 'lucide-react';

export default function CasePizzoGerenciamentoObrasSeo() {
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://www.omarseo.digital/resultados/pizzo-gerenciamento-obras-balneario-camboriu#article',
    headline: 'Case Pizzo: SEO e Google IA em Balneário Camboriú | Omar SEO',
    description:
      'Uma mesma intenção comercial, duas superfícies de descoberta: presença documentada da Pizzo no resultado orgânico e entre as referências apresentadas pela experiência de IA do Google.',
    url: 'https://www.omarseo.digital/resultados/pizzo-gerenciamento-obras-balneario-camboriu',
    mainEntityOfPage: 'https://www.omarseo.digital/resultados/pizzo-gerenciamento-obras-balneario-camboriu',
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
        '@id': 'https://www.omarseo.digital/images/cases/case-pizzo-gerenciamento-obras-balneario-camboriu-google-ai.png#evidence1',
        url: 'https://www.omarseo.digital/images/cases/case-pizzo-gerenciamento-obras-balneario-camboriu-google-ai.png',
        contentUrl: 'https://www.omarseo.digital/images/cases/case-pizzo-gerenciamento-obras-balneario-camboriu-google-ai.png',
        caption: 'Captura real do Google para a consulta "gerenciamento de obras em Balneário Camboriú", registrando a Pizzo no resultado orgânico e na Visão Geral criada por IA.',
        width: 1000,
        height: 620,
      },
      {
        '@type': 'ImageObject',
        '@id': 'https://www.omarseo.digital/images/cases/case-pizzo-quanto-custa-gerenciar-obra-balneario-camboriu-google-ai.png#evidence2',
        url: 'https://www.omarseo.digital/images/cases/case-pizzo-quanto-custa-gerenciar-obra-balneario-camboriu-google-ai.png',
        contentUrl: 'https://www.omarseo.digital/images/cases/case-pizzo-quanto-custa-gerenciar-obra-balneario-camboriu-google-ai.png',
        caption: 'Captura real do Google para a consulta "Quanto Custa Gerenciar Obra em Balneário Camboriú?", registrando a Pizzo como fonte primária na Visão Geral por IA e no topo do resultado orgânico.',
        width: 1000,
        height: 640,
      },
    ],
  };

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12 text-slate-200">
      <EnhancedSEO
        title="Case Pizzo: SEO e Google IA em Balneário Camboriú | Omar SEO"
        description="Presença documentada da Pizzo (pizzoo.com.br) no resultado orgânico do Google e entre as fontes citadas na Visão Geral criada por IA para a consulta 'gerenciamento de obras em Balneário Camboriú'."
        canonical="/resultados/pizzo-gerenciamento-obras-balneario-camboriu"
        ogImage="https://www.omarseo.digital/images/cases/case-pizzo-gerenciamento-obras-balneario-camboriu-google-ai.png"
        ogType="article"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Resultados', item: '/resultados' },
          {
            name: 'Case #13 — Pizzo',
            item: '/resultados/pizzo-gerenciamento-obras-balneario-camboriu',
          },
        ]}
        schema={[articleSchema]}
      />

      {/* Navigation Breadcrumb / Back Button */}
      <div>
        <Link
          to="/resultados"
          className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors bg-cyan-950/60 px-3.5 py-1.5 rounded-full border border-cyan-800/60"
        >
          <ArrowLeft size={14} />
          <span>Voltar ao Hub de Resultados</span>
        </Link>
      </div>

      {/* Hero / Header Section */}
      <header className="space-y-6 relative overflow-hidden rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-emerald-500/40 shadow-[0_0_50px_rgba(16,185,129,0.12)]">
        <BackgroundVideo src="https://img.supremasite.com.br/omar-seo.mp4" />
        <ConstellationGrid />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-emerald-950/90 text-emerald-400 border border-emerald-800/80 text-xs font-extrabold tracking-wider uppercase flex items-center gap-1.5">
              <Award size={13} />
              <span>CASE REAL — PIZZO</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-cyan-950/90 text-cyan-400 border border-cyan-800/80 text-xs font-extrabold tracking-wider uppercase flex items-center gap-1.5">
              <Cpu size={12} />
              <span>SEO ORGÂNICO + GOOGLE IA</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-950/90 text-amber-400 border border-amber-800/80 text-xs font-extrabold tracking-wider uppercase flex items-center gap-1.5">
              <MapPin size={12} />
              <span>BALNEÁRIO CAMBORIÚ / SC</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
            Case Pizzo: Presença no Google e na Visão Geral por IA
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Uma mesma intenção comercial, duas superfícies de descoberta: presença documentada da Pizzo no resultado orgânico e entre as referências apresentadas pela experiência de IA do Google.
          </p>

          <div className="pt-2">
            <a
              href="#evidencia-original"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <span>Ver evidência original</span>
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </header>

      {/* Quadro Factual */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800/80 space-y-1">
          <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block">Empresa &amp; Domínio</span>
          <span className="text-sm font-bold text-white block">Pizzo</span>
          <span className="text-xs font-bold text-emerald-400 font-mono block">pizzoo.com.br</span>
        </div>
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800/80 space-y-1">
          <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block">Segmento &amp; Atuação</span>
          <span className="text-sm font-bold text-yellow-300 block">Engenharia / Obras</span>
          <span className="text-xs text-slate-300 block">Gerenciamento de Obras</span>
        </div>
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800/80 space-y-1">
          <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block">Consultas Documentadas</span>
          <span className="text-xs font-bold text-cyan-400 font-mono block">1. “gerenciamento de obras em balneário camboriú”</span>
          <span className="text-xs font-bold text-yellow-300 font-mono block">2. “Quanto Custa Gerenciar Obra em Balneário Camboriú?”</span>
        </div>
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800/80 space-y-1">
          <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block">Superfícies Identificadas</span>
          <span className="text-xs font-bold text-emerald-400 block">1. Google Search Orgânico</span>
          <span className="text-xs font-bold text-cyan-400 block">2. Visão Geral Criada por IA (AIO)</span>
        </div>
      </section>

      {/* Evidências Digitais Documentadas */}
      <section id="evidencia-original" className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
              <FileCheck className="text-emerald-400" size={24} />
              <span>Evidências Digitais Documentadas (pizzoo.com.br)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Capturas reais do Google registrando a dupla presença da Pizzo na Visão Geral criada por IA e no topo do resultado orgânico para consultas comerciais e transacionais.
            </p>
          </div>
        </div>

        {/* EVIDÊNCIA 1 CARD - Consulta Institucional/Comercial */}
        <div className="bg-slate-950 rounded-3xl p-5 sm:p-7 border-2 border-emerald-500/60 shadow-[0_0_40px_rgba(16,185,129,0.2)] space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-800">
            <div className="space-y-1">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800">
                EVIDÊNCIA #1 — BUSCA DE SERVIÇO LOCAL
              </span>
              <h3 className="text-lg font-bold text-white font-mono">
                Pesquisa: “gerenciamento de obras em balneário camboriú”
              </h3>
            </div>
            <span className="text-xs font-bold text-cyan-400 bg-cyan-950/90 px-3 py-1 rounded-full border border-cyan-800/80 flex items-center gap-1.5">
              <CheckCircle2 size={14} />
              <span>Google Orgânico + Google AI Overview</span>
            </span>
          </div>

          <div className="relative group overflow-hidden rounded-2xl border border-slate-800 bg-white p-2">
            <img
              src="/images/cases/case-pizzo-gerenciamento-obras-balneario-camboriu-google-ai.png"
              alt="Pizzo no Google e na Visão Geral por IA para gerenciamento de obras em Balneário Camboriú"
              className="w-full h-auto object-contain cursor-pointer group-hover:scale-[1.01] transition-transform duration-300 rounded-xl"
              onClick={() => setActiveLightboxImage('/images/cases/case-pizzo-gerenciamento-obras-balneario-camboriu-google-ai.png')}
            />
            <button
              onClick={() => setActiveLightboxImage('/images/cases/case-pizzo-gerenciamento-obras-balneario-camboriu-google-ai.png')}
              className="absolute bottom-4 right-4 bg-slate-950/90 hover:bg-emerald-950 text-emerald-400 border border-emerald-800/80 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity shadow-lg"
            >
              <Maximize2 size={14} />
              <span>Ampliar Captura #1</span>
            </button>
          </div>

          <p className="text-xs text-slate-300 italic text-center sm:text-left leading-relaxed">
            Captura real do Google para a consulta ‘gerenciamento de obras em Balneário Camboriú’, registrando a Pizzo no resultado orgânico e entre as referências apresentadas na Visão Geral criada por IA.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/40 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-bold">
                <Cpu size={16} />
                <span>EVIDÊNCIA A — Visão Geral Criada por IA</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                A captura registra a Pizzo entre as fontes apresentadas pela Visão Geral criada por IA do Google para a consulta “gerenciamento de obras em Balneário Camboriú”. Na área de referências visuais da IA, o domínio <code>www.pizzoo.com.br</code> é referenciado com o título <em>“Gerenciamento de Obras em Balneário Camboriú | Pizzo”</em>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/40 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <Globe size={16} />
                <span>EVIDÊNCIA B — Resultado Orgânico</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Na mesma pesquisa, o domínio <code>pizzoo.com.br</code> também possui presença orgânica documentada para a intenção “gerenciamento de obras em Balneário Camboriú”. O snippet associa a Pizzo a <strong>engenharia civil, reformas de alto luxo, planejamento físico-financeiro e fiscalização com ART/CREA-SC</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* EVIDÊNCIA 2 CARD - Consulta de Custo / Preço Transacional */}
        <div className="bg-slate-950 rounded-3xl p-5 sm:p-7 border-2 border-yellow-500/60 shadow-[0_0_40px_rgba(234,179,8,0.15)] space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-800">
            <div className="space-y-1">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-yellow-400 bg-yellow-950/80 px-2.5 py-0.5 rounded border border-yellow-800">
                EVIDÊNCIA #2 — BUSCA TRANSACIONAL / INTENÇÃO DE CUSTO
              </span>
              <h3 className="text-lg font-bold text-white font-mono">
                Pesquisa: “Quanto Custa Gerenciar Obra em Balneário Camboriú?”
              </h3>
            </div>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950/90 px-3 py-1 rounded-full border border-emerald-800/80 flex items-center gap-1.5">
              <CheckCircle2 size={14} />
              <span>Destaque Principal na IA + #1 Resultado Orgânico</span>
            </span>
          </div>

          <div className="relative group overflow-hidden rounded-2xl border border-slate-800 bg-white p-2">
            <img
              src="/images/cases/case-pizzo-quanto-custa-gerenciar-obra-balneario-camboriu-google-ai.png"
              alt="Pizzo na Visão Geral criada por IA e no topo do resultado orgânico para 'Quanto Custa Gerenciar Obra em Balneário Camboriú?'"
              className="w-full h-auto object-contain cursor-pointer group-hover:scale-[1.01] transition-transform duration-300 rounded-xl"
              onClick={() => setActiveLightboxImage('/images/cases/case-pizzo-quanto-custa-gerenciar-obra-balneario-camboriu-google-ai.png')}
            />
            <button
              onClick={() => setActiveLightboxImage('/images/cases/case-pizzo-quanto-custa-gerenciar-obra-balneario-camboriu-google-ai.png')}
              className="absolute bottom-4 right-4 bg-slate-950/90 hover:bg-yellow-950 text-yellow-400 border border-yellow-800/80 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity shadow-lg"
            >
              <Maximize2 size={14} />
              <span>Ampliar Captura #2</span>
            </button>
          </div>

          <p className="text-xs text-slate-300 italic text-center sm:text-left leading-relaxed">
            Captura real do Google para a consulta comercial de orçamento ‘Quanto Custa Gerenciar Obra em Balneário Camboriú?’, posicionando o artigo da Pizzo no topo dos cards de referência da IA e como primeiro resultado orgânico.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-yellow-500/40 space-y-2">
              <div className="flex items-center gap-2 text-yellow-400 font-bold">
                <Cpu size={16} />
                <span>FONTE DE REFERÊNCIA NA IA</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Quando o usuário pergunta o custo exato de gerenciamento de obras em Balneário Camboriú, o Google AI Overview sintetiza que os valores variam de 10% a 20% do custo total e destaca a Pizzo (<code>www.pizzoo.com.br</code>) no <strong>card principal do painel de IA</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/40 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <Globe size={16} />
                <span>PRIMEIRA POSIÇÃO ORGÂNICA</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Abaixo do painel de IA, o artigo do blog da Pizzo com a URL <code>https://www.pizzoo.com.br &gt; Blog</code> aparece na <strong>primeira posição orgânica</strong>, garantindo domínio completo da SERP para essa intenção de compra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Especial: Do resultado orgânico à busca com Inteligência Artificial */}
      <section className="space-y-4 bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
          <Sparkles size={22} className="text-emerald-400" />
          <span>Do resultado orgânico à busca com Inteligência Artificial</span>
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          O SEO moderno não se limita aos tradicionais links azuis. As experiências de busca atuais combinam múltiplos elementos em um ecossistema integrado:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs my-3">
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center font-bold text-slate-200">
            Resultados Orgânicos
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center font-bold text-slate-200">
            Mapas &amp; Local
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center font-bold text-slate-200">
            Respostas de IA (AIO)
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center font-bold text-slate-200">
            Fontes e Referências
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Neste case, a captura registra o domínio da Pizzo tanto no resultado orgânico quanto entre as referências apresentadas na experiência de IA do Google para a mesma intenção. Isso constitui uma evidência particularmente relevante para demonstrar trabalho envolvendo <strong>SEO orgânico + GEO (Generative Engine Optimization) + estruturação semântica</strong>.
        </p>
      </section>

      {/* Intenção de Busca: Uma busca de alta intenção comercial */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
            <Search className="text-cyan-400" size={24} />
            <span>Uma busca de alta intenção comercial</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Decomposição semântica da consulta pesquisada pelo consumidor no mercado imobiliário e de construção de Balneário Camboriú.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400 block">SERVIÇO</span>
            <span className="text-sm font-bold text-white block">Gerenciamento de Obras</span>
            <span className="text-slate-400 text-[11px] block">Fiscalização, planejamento e engenharia civil.</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 block">LOCALIDADE</span>
            <span className="text-sm font-bold text-white block">Balneário Camboriú / SC</span>
            <span className="text-slate-400 text-[11px] block">Mercado de alto padrão e m² valorizado.</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 block">INTENÇÃO</span>
            <span className="text-sm font-bold text-white block">Pesquisa Comercial / Contratação</span>
            <span className="text-slate-400 text-[11px] block">Busca direta por fornecedor qualificado.</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-400 block">SEGMENTO</span>
            <span className="text-sm font-bold text-white block">Engenharia &amp; Construção</span>
            <span className="text-slate-400 text-[11px] block">Reformas de luxo e acompanhamento técnico.</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2">
          <p className="leading-relaxed">
            Esta consulta aproxima quatro pilares essenciais da decisão de compra B2B e de alto padrão:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 font-mono font-bold text-emerald-400 pt-1">
            <span>SERVIÇO</span>
            <ChevronRight size={14} />
            <span>NECESSIDADE</span>
            <ChevronRight size={14} />
            <span>LOCALIDADE</span>
            <ChevronRight size={14} />
            <span>EMPRESA (PIZZO)</span>
          </div>
        </div>
      </section>

      {/* Relações de Entidade & LLM-Friendly Content */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
            Estruturação Semântica e Relações de Entidade
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Conexões conceituais mapeadas para compressão e indexação nos motores de busca e modelos de linguagem.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-4 text-xs">
          <h3 className="font-bold text-white text-sm flex items-center gap-2">
            <Layers className="text-cyan-400" size={18} />
            <span>Rede de Entidades Reconhecidas</span>
          </h3>
          <div className="flex flex-wrap gap-2 text-slate-300 font-mono">
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">Pizzo → gerenciamento de obras</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">Pizzo → engenharia</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">Pizzo → Balneário Camboriú</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">pizzoo.com.br → Pizzo</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">Case → SEO orgânico</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">Case → GEO</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">Case → Google AI Overview</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">Omar SEO → SEO + GEO</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 leading-relaxed space-y-2">
            <span className="font-bold text-emerald-400 block">Resumo Factual para Recuperação da Informação:</span>
            <p>
              A Pizzo possui um case documentado no portfólio do Omar SEO relacionado à consulta ‘gerenciamento de obras em Balneário Camboriú’. A captura apresentada no case registra <code>pizzoo.com.br</code> no resultado orgânico e entre as referências apresentadas pela Visão Geral criada por IA do Google para essa consulta.
            </p>
          </div>
        </div>
      </section>

      {/* Interlinking & Contextual Hubs */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
        <h2 className="text-lg sm:text-xl font-bold font-display text-white flex items-center gap-2">
          <Compass className="text-cyan-400" size={20} />
          <span>Explore Soluções de SEO e Otimização para IA</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Saiba como estruturar a presença da sua empresa no Google Search, Google Maps e nas novas superfícies de Inteligência Artificial:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-2">
          <Link
            to="/seo-para-ia"
            className="p-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 transition-all space-y-1 block"
          >
            <span className="font-bold text-cyan-400 block">SEO para Inteligência Artificial</span>
            <span className="text-slate-400 text-[11px] block">Otimização para respostas geradas por IA no Google e LLMs.</span>
          </Link>
          <Link
            to="/geo-vs-aio"
            className="p-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 transition-all space-y-1 block"
          >
            <span className="font-bold text-emerald-400 block">GEO vs AIO</span>
            <span className="text-slate-400 text-[11px] block">Entenda a evolução entre otimização generativa e AI Overviews.</span>
          </Link>
          <Link
            to="/servicos/geo-otimizacao-ia"
            className="p-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/50 transition-all space-y-1 block"
          >
            <span className="font-bold text-amber-400 block">Serviço de GEO + IA</span>
            <span className="text-slate-400 text-[11px] block">Implementação de autoridade temática e SEO semântico.</span>
          </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveLightboxImage(null)}
        >
          <div className="relative max-w-5xl w-full space-y-3" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between text-white">
              <span className="text-sm font-bold text-emerald-400">
                Comprovação Real — Pizzo no Google Orgânico e na Visão Geral por IA (Balneário Camboriú / SC)
              </span>
              <button
                onClick={() => setActiveLightboxImage(null)}
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <img
              src={activeLightboxImage}
              alt="Pizzo no Google e na Visão Geral por IA para gerenciamento de obras em Balneário Camboriú"
              className="w-full h-auto rounded-xl border border-slate-800 max-h-[85vh] object-contain mx-auto bg-white p-2"
            />
          </div>
        </div>
      )}

      {/* Footer CTA */}
      <footer className="pt-8 border-t border-slate-800 space-y-6">
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-950 border border-emerald-500/40 flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-lg sm:text-xl font-bold font-display text-white">
              Quer posicionar sua empresa de engenharia ou construção no Google e na IA?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Conheça a metodologia autoral Omar SEO 4D para posicionar seu projeto em buscas locais, orgânicas e em ferramentas de inteligência artificial.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/sobre"
              className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs inline-flex items-center gap-2 transition-colors"
            >
              <span>Sobre Omar Skafi</span>
            </Link>
            <Link
              to="/auditoria-seo"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-xs sm:text-sm inline-flex items-center gap-2 shrink-0 transition-all shadow-[0_0_25px_rgba(16,185,129,0.3)]"
            >
              <span>Solicitar Análise de SEO</span>
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
