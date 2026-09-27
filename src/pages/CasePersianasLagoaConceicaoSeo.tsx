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
  Wrench,
  Compass,
  Cpu,
  Bot,
  Layers,
  PhoneCall,
  Blinds,
  FileCheck,
} from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import ConstellationGrid from '../components/ui/constellation-grid';

export default function CasePersianasLagoaConceicaoSeo() {
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'SEO + GEO + AIO para Persianas Sob Medida em Lagoa da Conceição Florianópolis | Case OmarSEO',
    description:
      'Case de SEO, GEO e AIO para persianas sob medida em Lagoa da Conceição e Florianópolis SC, com presença orgânica e citação na Visão Geral criada por IA do Google.',
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
      '@id': 'https://www.omarseo.digital/resultados/seo-aio-persianas-lagoa-da-conceicao-florianopolis',
    },
    image: [
      {
        '@type': 'ImageObject',
        contentUrl:
          'https://www.omarseo.digital/images/portfolio/google-ai-overview-persianas-sob-medida-lagoa-da-conceicao.png',
        caption:
          'Google exibindo resultado e citação para persianas sob medida na Lagoa da Conceição Florianópolis na Visão Geral criada por IA',
      },
      {
        '@type': 'ImageObject',
        contentUrl: 'https://www.omarseo.digital/images/cases/case-rvm-persianas-lagoa-sc-google.png',
        caption: 'Resultado orgânico no Google para persianas na lagoa sc (RVM Persianas)',
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
        name: 'Case Persianas Lagoa da Conceição Florianópolis',
        item: 'https://www.omarseo.digital/resultados/seo-aio-persianas-lagoa-da-conceicao-florianopolis',
      },
    ],
  };

  return (
    <>
      <EnhancedSEO
        title="SEO para Persianas Sob Medida em Lagoa da Conceição Florianópolis | Case OmarSEO"
        description="Case de SEO, GEO e AIO para persianas sob medida em Lagoa da Conceição e Florianópolis SC, com presença orgânica e citação na Visão Geral criada por IA do Google."
        canonical="https://www.omarseo.digital/resultados/seo-aio-persianas-lagoa-da-conceicao-florianopolis"
        schema={[articleSchema, breadcrumbSchema]}
      />

      {/* Background Grid */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <ConstellationGrid />
      </div>

      <main className="relative z-10 pt-28 pb-20 bg-slate-950 text-slate-100 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 font-mono" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-blue-400 transition-colors">
              Início
            </Link>
            <ChevronRight size={12} />
            <Link to="/resultados" className="hover:text-blue-400 transition-colors">
              Cases &amp; Resultados
            </Link>
            <ChevronRight size={12} />
            <span className="text-slate-200">Case #20 • Persianas Sob Medida na Lagoa da Conceição (SC)</span>
          </nav>

          {/* Header Title Section */}
          <header className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center gap-1.5">
                <Sparkles size={13} />
                SEO + GEO + AIO
              </span>
              <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-1.5">
                <Bot size={13} />
                CITAÇÃO NA IA DO GOOGLE
              </span>
              <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                <Globe size={13} />
                RESULTADO ORGÂNICO + LOCAL
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              SEO + GEO + AIO para Persianas Sob Medida em Lagoa da Conceição Florianópolis SC
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-4xl leading-relaxed">
              Projeto alcançando presença no Google para uma busca comercial local altamente específica, incluindo resultado orgânico e citação de destaque na Visão Geral criada por IA do Google.
            </p>
          </header>

          {/* Project Details Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
            <div className="space-y-1">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">Site Trabalhado</span>
              <p className="text-sm font-bold text-slate-200 break-words font-mono">rvmpersianas.com.br</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">Segmento</span>
              <p className="text-sm font-semibold text-slate-200">Persianas Sob Medida &amp; Decoração</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">Região Atendida</span>
              <p className="text-sm font-semibold text-slate-200">Lagoa da Conceição, Florianópolis - SC</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">Busca Comprovada</span>
              <p className="text-sm font-bold text-blue-400 font-mono">
                "Persianas sob medida em Lagoa da Conceição, Florianópolis"
              </p>
            </div>
          </section>

          {/* Bloco de Impacto / Destaque Visual */}
          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950/40 via-slate-900 to-slate-900 border border-blue-500/30 space-y-4">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <FileCheck size={16} />
              <span>Evidência Observada nos Prints</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <span className="text-xs text-slate-400 font-mono uppercase">Consulta de Alta Intenção Comercial</span>
                <p className="text-xl sm:text-2xl font-black text-white font-mono bg-slate-950/80 px-4 py-2.5 rounded-xl border border-slate-800 inline-block">
                  "Persianas sob medida em Lagoa da Conceição, Florianópolis"
                </p>
              </div>
              <div className="space-y-2.5">
                <span className="text-xs text-slate-400 font-mono uppercase">Resultados Observados:</span>
                <ul className="space-y-1.5 text-sm text-slate-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>
                      <strong>Presença orgânica no Google</strong> com posicionamento por bairro e intenção local
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                    <span>
                      <strong>Presença e citação em resposta gerada por IA</strong> (Visão Geral criada por IA do Google)
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                    <span>
                      <strong>Intenção local Lagoa da Conceição / Florianópolis SC</strong> respondida com exatidão
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-purple-400 shrink-0" />
                    <span>
                      <strong>Serviço técnico altamente específico</strong> com modelos rolô, tela solar, blackout e horizontais
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* SEÇÃO DE PROVAS: RESULTADO NO GOOGLE                            */}
          {/* Desktop: duas imagens em composição editorial, mobile empilhado */}
          {/* ============================================================== */}
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono">
                  Documentação Visual
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Resultado no Google</h2>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                Clique nas capturas para ampliar em alta resolução
              </span>
            </div>

            {/* Grid Editorial: Print 1 (AI Overview) maior e Print 2 (Orgânico) complementar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* PRINT 1: Visão Geral Criada por IA (lg:col-span-7) */}
              <figure className="lg:col-span-7 space-y-3">
                <div
                  onClick={() =>
                    setActiveModalImage(
                      '/images/portfolio/google-ai-overview-persianas-sob-medida-lagoa-da-conceicao.png'
                    )
                  }
                  className="group relative rounded-2xl overflow-hidden border border-blue-500/30 bg-white shadow-xl cursor-pointer hover:border-blue-400 transition-all transform hover:-translate-y-0.5"
                >
                  <picture>
                    <source
                      srcSet="/images/portfolio/google-ai-overview-persianas-sob-medida-lagoa-da-conceicao.webp"
                      type="image/webp"
                    />
                    <img
                      src="/images/portfolio/google-ai-overview-persianas-sob-medida-lagoa-da-conceicao.png"
                      alt="Google exibindo resultado relacionado a persianas sob medida em Lagoa da Conceição na Visão Geral criada por IA"
                      width={1200}
                      height={840}
                      loading="eager"
                      decoding="async"
                      className="w-full h-auto object-contain block select-none"
                    />
                  </picture>

                  <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-all flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-lg bg-slate-900/90 text-white text-xs font-bold flex items-center gap-2 border border-slate-700 shadow-lg">
                      <Maximize2 size={14} />
                      Clique para ampliar print da IA
                    </span>
                  </div>
                </div>

                <figcaption className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans border-l-2 border-blue-500 pl-3">
                  <strong>Print 1:</strong> Presença do projeto na Visão Geral criada por IA do Google para a busca
                  "Persianas sob medida em Lagoa da Conceição, Florianópolis".
                </figcaption>
              </figure>

              {/* PRINT 2: Resultado Orgânico Regional (lg:col-span-5) */}
              <figure className="lg:col-span-5 space-y-3">
                <div
                  onClick={() => setActiveModalImage('/images/cases/case-rvm-persianas-lagoa-sc-google.png')}
                  className="group relative rounded-2xl overflow-hidden border border-emerald-500/30 bg-white shadow-xl cursor-pointer hover:border-emerald-400 transition-all transform hover:-translate-y-0.5"
                >
                  <img
                    src="/images/cases/case-rvm-persianas-lagoa-sc-google.png"
                    alt="Resultado orgânico no Google para persianas na lagoa sc (RVM Persianas)"
                    width={1000}
                    height={700}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-contain block select-none"
                  />

                  <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-all flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-lg bg-slate-900/90 text-white text-xs font-bold flex items-center gap-2 border border-slate-700 shadow-lg">
                      <Maximize2 size={14} />
                      Clique para ampliar print orgânico
                    </span>
                  </div>
                </div>

                <figcaption className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans border-l-2 border-emerald-500 pl-3">
                  <strong>Print 2:</strong> Resultado orgânico do projeto para a busca local de alta intenção comercial
                  em Lagoa da Conceição e Barra da Lagoa em Florianópolis SC.
                </figcaption>
              </figure>
            </div>
          </section>

          {/* ============================================================== */}
          {/* TEXTO DO CASE: DESAFIO, ESTRATÉGIA E RESULTADO                  */}
          {/* ============================================================== */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-6">
            {/* O Desafio */}
            <article className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                <Target size={20} />
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">O desafio</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Posicionar um fabricante e instalador de persianas sob medida para buscas locais em Florianópolis e Lagoa da Conceição SC, com conteúdo capaz de ser compreendido tanto pelo Google tradicional quanto por mecanismos de resposta baseados em inteligência artificial.
              </p>
            </article>

            {/* A Estratégia */}
            <article className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                <Layers size={20} />
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">A estratégia</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Aplicação de SEO técnico, SEO local e arquitetura semântica integrando GEO e AIO. Construção de conteúdo answer-first estruturado em entidades, serviços de persianas (rolô, blackout, tela solar screen, verticais e horizontais) e contexto geográfico detalhado de bairros de Florianópolis e leste da ilha, aliado a dados estruturados Schema.org, HTML indexável, linkagem interna coesa e otimização para consultas conversacionais de clientes residenciais e comerciais.
              </p>
            </article>

            {/* O Resultado */}
            <article className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                <CheckCircle2 size={20} />
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">O resultado</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                O projeto passou a aparecer para a busca "Persianas sob medida em Lagoa da Conceição, Florianópolis", com citação e recomendação na Visão Geral criada por IA do Google e presença orgânica consolidada, demonstrando que o conteúdo foi compreendido como referência relevante para a intenção local pesquisada.
              </p>
            </article>
          </section>

          {/* Conceito OmarSEO */}
          <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950/40 to-slate-900 border border-blue-500/20 text-center space-y-4">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono">
              Fundamento OmarSEO
            </span>
            <blockquote className="text-xl sm:text-2xl font-bold text-white max-w-3xl mx-auto leading-relaxed">
              "Não é apenas aparecer no Google. É estruturar conteúdo para que buscadores e mecanismos de IA entendam quem é a empresa, o que ela faz e onde atende."
            </blockquote>
            <p className="text-xs text-slate-400 font-mono">Omar Skafi • Especialista em SEO, GEO e AIO</p>
          </section>

          {/* CTA Section */}
          <section className="p-8 sm:p-12 rounded-3xl bg-blue-600 text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 space-y-3 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Quer que sua empresa também seja encontrada nas buscas e nas respostas das IAs?
              </h2>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                Estruturamos seu site, entidades semânticas e relevância geográfica para capturar pesquisas comerciais qualificadas no Google tradicional e nos novos resumos de inteligência artificial.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="https://wa.me/5541987001004"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-white text-blue-700 font-bold text-sm shadow-lg hover:bg-blue-50 transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <span>QUERO MELHORAR MINHA PRESENÇA DIGITAL</span>
                <ArrowRight size={16} />
              </a>
              <a
                href="tel:+5541987001004"
                className="px-6 py-3.5 rounded-xl bg-blue-700/80 hover:bg-blue-800 text-white font-bold text-sm border border-blue-400/40 transition-all inline-flex items-center gap-2"
              >
                <PhoneCall size={16} />
                <span>FALAR COM OMAR SEO</span>
              </a>
            </div>
          </section>

          {/* Links para outros cases e volta ao portfólio */}
          <div className="flex items-center justify-between border-t border-slate-800 pt-6 text-sm">
            <Link
              to="/resultados"
              className="text-slate-400 hover:text-white inline-flex items-center gap-2 font-mono text-xs"
            >
              <span>← Voltar para todos os cases do portfólio</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link
                to="/resultados/rvm-persianas-florianopolis-seo"
                className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2 font-mono text-xs"
              >
                <span>Ver Case #11 (RVM Persianas em Florianópolis) →</span>
              </Link>
              <Link
                to="/resultados/seo-instalacao-frigorifica-navegantes"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2 font-mono text-xs"
              >
                <span>Ver Case #19 (Instalação Frigorífica) →</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Lightbox / Modal */}
      {activeModalImage && (
        <div
          onClick={() => setActiveModalImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <div className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setActiveModalImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors p-2 text-sm font-mono flex items-center gap-1 cursor-pointer"
              aria-label="Fechar ampliação"
            >
              <X size={20} />
              <span>Fechar [ESC]</span>
            </button>
            <img
              src={activeModalImage}
              alt="Ampliação da prova visual no Google"
              className="max-h-[85vh] w-auto max-w-full object-contain rounded-xl border border-slate-700 shadow-2xl bg-white"
            />
          </div>
        </div>
      )}
    </>
  );
}
