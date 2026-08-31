import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Sparkles, 
  Search, 
  MapPin, 
  ArrowRight, 
  Maximize2, 
  X, 
  ExternalLink,
  ShieldCheck,
  Cpu,
  Layers,
  Building2,
  HelpCircle
} from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import ConstellationGrid from '../components/ui/constellation-grid';

export default function CasePvsDecoreAiSeo() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Schema.org Estruturado Factual
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Case GEO: PVS Decore na IA do Google em São José dos Pinhais',
    description: 'Documentação factual do aparecimento da PVS Decore na Visão Geral criada por IA do Google para a consulta "quem instala Pisos vinilicos São José dos Pinhais?".',
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
        url: 'https://www.omarseo.digital/favicon.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.omarseo.digital/resultados/pvs-decore-pisos-vinilicos-sao-jose-dos-pinhais',
    },
    image: [
      {
        '@type': 'ImageObject',
        '@id': 'https://www.omarseo.digital/images/cases/case-pvs-decore-google-ia-pisos-vinilicos-sao-jose-dos-pinhais.png#evidence1',
        url: 'https://www.omarseo.digital/images/cases/case-pvs-decore-google-ia-pisos-vinilicos-sao-jose-dos-pinhais.png',
        contentUrl: 'https://www.omarseo.digital/images/cases/case-pvs-decore-google-ia-pisos-vinilicos-sao-jose-dos-pinhais.png',
        caption: 'Captura real da Visão Geral criada por IA do Google para uma consulta sobre instalação de pisos vinílicos em São José dos Pinhais, registrando a PVS Decore entre as empresas apresentadas.',
        width: 1000,
        height: 640,
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
        item: 'https://www.omarseo.digital/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Resultados & Cases',
        item: 'https://www.omarseo.digital/resultados',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Case PVS Decore — IA & GEO em São José dos Pinhais',
        item: 'https://www.omarseo.digital/resultados/pvs-decore-pisos-vinilicos-sao-jose-dos-pinhais',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      <EnhancedSEO
        title="Case PVS Decore: Pisos Vinílicos na IA do Google | Omar SEO"
        description="Case documentado GEO + SEO Local: PVS Decore apresentada na Visão Geral criada por IA do Google para a consulta sobre instalação de pisos vinílicos em São José dos Pinhais/PR."
        canonical="https://www.omarseo.digital/resultados/pvs-decore-pisos-vinilicos-sao-jose-dos-pinhais"
        schema={[articleSchema, breadcrumbSchema]}
      />

      {/* Grid de Fundo */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <ConstellationGrid />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 relative z-10">
        
        {/* NAVEGAÇÃO BREADCRUMB */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 font-mono">
          <Link to="/" className="hover:text-cyan-400 transition-colors">Início</Link>
          <span>/</span>
          <Link to="/resultados" className="hover:text-cyan-400 transition-colors">Resultados</Link>
          <span>/</span>
          <span className="text-slate-200">PVS Decore (São José dos Pinhais)</span>
        </nav>

        {/* HERO PRINCIPAL */}
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-3 py-1 rounded-full flex items-center gap-1.5">
              <ShieldCheck size={14} />
              Case Real #14 — GEO + SEO Local
            </span>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 border border-cyan-800/80 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Sparkles size={14} />
              Google AI Overview
            </span>
            <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 flex items-center gap-1">
              <MapPin size={12} className="text-red-400" />
              São José dos Pinhais / PR
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
            Case GEO: PVS Decore na IA do Google em São José dos Pinhais
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light">
            Quem instala pisos vinílicos em São José dos Pinhais? Uma pergunta conversacional com intenção de contratação local, respondida diretamente com a apresentação da <strong className="text-white font-semibold">PVS Decore</strong> na experiência de IA do Google.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#evidencia-original"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-[1.02]"
            >
              <span>Ver Evidência Original</span>
              <ArrowRight size={16} />
            </a>
            <Link
              to="/resultados"
              className="bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 px-5 py-3 rounded-xl font-semibold text-sm transition-colors"
            >
              Ver Todos os Cases
            </Link>
          </div>
        </header>

        {/* ESTRUTURA QUADRO FACTUAL */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800/80 space-y-1">
            <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block">Empresa</span>
            <span className="text-base font-bold text-white block">PVS Decore</span>
            <span className="text-xs text-slate-400 block">Pisos & Revestimentos</span>
          </div>

          <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800/80 space-y-1">
            <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block">Localização</span>
            <span className="text-base font-bold text-emerald-400 block">São José dos Pinhais / PR</span>
            <span className="text-xs text-slate-400 block">Região Metropolitana de Curitiba</span>
          </div>

          <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800/80 space-y-1">
            <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block">Consulta Documentada</span>
            <span className="text-xs font-bold text-yellow-300 font-mono block">“quem instala Pisos vinilicos São José dos Pinhais?”</span>
          </div>

          <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800/80 space-y-1">
            <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block">Superfície</span>
            <span className="text-base font-bold text-cyan-400 block">Visão Geral por IA</span>
            <span className="text-xs text-slate-400 block">Google AI Overview (AIO)</span>
          </div>
        </section>

        {/* EVIDÊNCIA DIGITAL DOCUMENTADA */}
        <section id="evidencia-original" className="space-y-6 pt-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-wider bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800">
                EVIDÊNCIA FACTUAL DOCUMENTADA
              </span>
            </div>
            <h2 className="text-2xl font-bold font-display text-white">
              Captura Real do Google (Visão Geral Criada por IA)
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Captura real fornecida pelo proprietário registrando a PVS Decore entre as empresas especializadas apresentadas na Visão Geral criada por IA do Google para uma consulta conversacional local.
            </p>
          </div>

          <div className="bg-slate-950 rounded-3xl p-5 sm:p-7 border-2 border-emerald-500/60 shadow-[0_0_40px_rgba(16,185,129,0.2)] space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-800">
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800">
                  INTENÇÃO CONVERSACIONAL DE SERVIÇO LOCAL
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white font-mono">
                  Pesquisa: “quem instala Pisos vinilicos São José dos Pinhais?”
                </h3>
              </div>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-950/90 px-3 py-1 rounded-full border border-emerald-800/80 flex items-center gap-1.5">
                <CheckCircle2 size={14} />
                <span>Empresa Apresentada na IA</span>
              </span>
            </div>

            <div className="relative group overflow-hidden rounded-2xl border border-slate-800 bg-white p-2">
              <img
                src="/images/cases/case-pvs-decore-google-ia-pisos-vinilicos-sao-jose-dos-pinhais.png"
                alt="PVS Decore apresentada pela IA do Google para quem instala pisos vinílicos em São José dos Pinhais"
                className="w-full h-auto object-contain cursor-pointer group-hover:scale-[1.01] transition-transform duration-300 rounded-xl"
                onClick={() => setIsLightboxOpen(true)}
              />
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="absolute bottom-4 right-4 bg-slate-950/90 hover:bg-emerald-950 text-emerald-400 border border-emerald-800/80 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity shadow-lg"
              >
                <Maximize2 size={14} />
                <span>Ampliar Captura Original</span>
              </button>
            </div>

            <p className="text-xs text-slate-300 italic text-center sm:text-left leading-relaxed">
              Captura real da Visão Geral criada por IA do Google para uma consulta sobre instalação de pisos vinílicos em São José dos Pinhais, registrando a PVS Decore entre as empresas apresentadas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
              <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/40 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-bold">
                  <Cpu size={16} />
                  <span>DESCOBERTA POR PERGUNTA NATURAL</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  A pesquisa realizada não menciona o nome da marca. O usuário pergunta diretamente <strong>“quem instala Pisos vinilicos São José dos Pinhais?”</strong>, e o motor generativo do Google recupera e apresenta a PVS Decore como resposta para a necessidade local.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/40 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Building2 size={16} />
                  <span>RELEVÂNCIA GEOGRÁFICA & ENTIDADE</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  A IA associa a PVS Decore ao segmento de <strong>pisos vinílicos e laminados</strong> na cidade de <strong>São José dos Pinhais</strong>, evidenciando a solidez da entidade empresarial e sua autoridade geográfica no Paraná.
                </p>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 italic pt-2 border-t border-slate-900">
              * Nota Factual: Resultados e respostas geradas por IA podem variar conforme data, localização, dispositivo, contexto da consulta e atualizações dos sistemas dos mecanismos de busca.
            </p>
          </div>
        </section>

        {/* UMA PERGUNTA COMERCIAL RESPONDIDA COM UMA EMPRESA */}
        <section className="bg-slate-900/60 rounded-3xl p-6 sm:p-8 border border-slate-800/80 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
              DIFERENÇA ESTRATÉGICA
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
              Uma pergunta comercial respondida com uma empresa
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            Este case demonstra uma diferença importante entre o SEO tradicional por palavras-chave isoladas e a descoberta de fornecedores através de Inteligência Artificial.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <h3 className="text-base font-bold text-slate-200 flex items-center gap-2">
                <Search size={18} className="text-yellow-400" />
                Busca por Palavra-Chave Tradicional
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                No modelo clássico, o usuário digita termos curtos como "pisos vinilicos sjp" e navega por uma lista de links azuis, analisando títulos e snippets individualmente para encontrar um fornecedor.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-emerald-500/40 space-y-3">
              <h3 className="text-base font-bold text-emerald-400 flex items-center gap-2">
                <Sparkles size={18} />
                Descoberta Generativa por IA (GEO)
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                O usuário formula uma pergunta completa sobre a necessidade: <em>“Quem instala...?”</em>. A experiência de IA compreende a semântica, cruza a necessidade de serviço com a localização e apresenta empresas qualificadas como resposta direta.
              </p>
            </div>
          </div>
        </section>

        {/* QUANDO A BUSCA DEIXA DE SER PALAVRA-CHAVE E VIRA UMA PERGUNTA */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
              OTIMIZAÇÃO PARA MECANISMOS GENERATIVOS
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
              Quando a busca deixa de ser uma palavra-chave e vira uma pergunta
            </h2>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
            <p className="text-sm text-slate-300 leading-relaxed">
              Nos mecanismos de busca modernos equipados com IA, os usuários não procuram apenas por nomes de produtos. Eles formulam necessidades completas no formato de perguntas:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-cyan-300">
                "Quem instala...?"
              </div>
              <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-cyan-300">
                "Qual empresa faz... em [cidade]?"
              </div>
              <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-cyan-300">
                "Quem é especialista em...?"
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Esse comportamento integra SEO tradicional com <strong>GEO (Generative Engine Optimization)</strong>, <strong>Entity SEO</strong> e <strong>SEO Local</strong>. A presença documentada da PVS Decore reflete a relevância da empresa no segmento de pisos e revestimentos em São José dos Pinhais.
            </p>
          </div>
        </section>

        {/* OUTROS CASES DE PRESENÇA EM BUSCAS COM IA */}
        <section className="space-y-6 pt-4 border-t border-slate-800/80">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-yellow-400 uppercase tracking-wider block">
                COMPROVAÇÃO MULTI-SEGMENTO
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
                Outros cases de presença em buscas com IA
              </h2>
            </div>
            <Link
              to="/resultados"
              className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
            >
              <span>Ver todos os 14 cases</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Case Pizzo */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-400 bg-yellow-950/80 px-2.5 py-0.5 rounded border border-yellow-800">
                  Case #13 — Engenharia
                </span>
                <span className="text-xs text-slate-400 font-mono">Balneário Camboriú / SC</span>
              </div>
              <h3 className="text-base font-bold text-white">Pizzo (Gerenciamento de Obras)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dupla presença documentada no resultado orgânico e na Visão Geral criada por IA do Google para "gerenciamento de obras em balneário camboriú".
              </p>
              <Link
                to="/resultados/pizzo-gerenciamento-obras-balneario-camboriu"
                className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 pt-1"
              >
                <span>Ver Case Pizzo</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Case Carplus */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800">
                  Case #08 — Automotivo
                </span>
                <span className="text-xs text-slate-400 font-mono">Curitiba / PR</span>
              </div>
              <h3 className="text-base font-bold text-white">Carplus (Oficina & Pneus)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Presença documentada no Google AI Overview para pesquisas de alta intenção comercial no setor automotivo e manutenção de veículos.
              </p>
              <Link
                to="/resultados/carplus-pneus-curitiba-google-ai-overview"
                className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 pt-1"
              >
                <span>Ver Case Carplus</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* FOOTER CALLOUT / NAVEGAÇÃO INTERNA */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/resultados"
            className="text-sm font-bold text-slate-300 hover:text-white flex items-center gap-2"
          >
            <span>← Voltar para a Central de Resultados</span>
          </Link>
          <Link
            to="/contato"
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-colors"
          >
            <span>Falar com Omar Skafi</span>
            <ExternalLink size={14} />
          </Link>
        </div>

      </div>

      {/* LIGHTBOX MODAL DA CAPTURA ORIGINAL */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute -top-12 right-0 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 p-2 rounded-xl text-xs font-bold flex items-center gap-1 transition-colors z-10"
            >
              <X size={18} />
              <span>Fechar</span>
            </button>
            <img
              src="/images/cases/case-pvs-decore-google-ia-pisos-vinilicos-sao-jose-dos-pinhais.png"
              alt="Captura de tela real do Google AI Overview para PVS Decore"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl border border-slate-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-xs text-slate-300 mt-3 text-center font-mono">
              Captura real fornecida pelo proprietário — PVS Decore na Visão Geral criada por IA do Google para "quem instala Pisos vinilicos São José dos Pinhais?"
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
