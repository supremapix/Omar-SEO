import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import ConstellationGrid from '../components/ui/constellation-grid';
import { BackgroundVideo } from '../components/BackgroundVideo';
import {
  Sparkles,
  Bot,
  Search,
  FileCheck,
  Maximize2,
  X,
  UserCheck,
  Building2,
  ArrowLeft,
  ChevronRight,
  Layers,
  Wrench,
  ShieldAlert,
  Cpu,
} from 'lucide-react';

export default function CaseCarplusAiOverview() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://www.omarseo.digital/resultados/carplus-google-ai-overview-pneus-curitiba#article',
    headline: 'Case GEO/AIO: Carplus apresentada pela IA do Google em Curitiba',
    description:
      'Resultado documentado mostrando a Carplus Centro Automotivo entre as opções apresentadas pela Visão geral criada por IA do Google em uma pesquisa relacionada a pneus e oficinas em Curitiba.',
    url: 'https://www.omarseo.digital/resultados/carplus-google-ai-overview-pneus-curitiba',
    mainEntityOfPage: 'https://www.omarseo.digital/resultados/carplus-google-ai-overview-pneus-curitiba',
    inLanguage: 'pt-BR',
    author: {
      '@id': 'https://www.omarseo.digital/#person',
    },
    publisher: {
      '@id': 'https://www.omarseo.digital/#localbusiness',
    },
    image: {
      '@type': 'ImageObject',
      '@id': 'https://www.omarseo.digital/images/cases/case-carplus-google-ai-overview-pneus-curitiba.png#primaryimage',
      url: 'https://www.omarseo.digital/images/cases/case-carplus-google-ai-overview-pneus-curitiba.png',
      contentUrl: 'https://www.omarseo.digital/images/cases/case-carplus-google-ai-overview-pneus-curitiba.png',
      caption:
        'Carplus Centro Automotivo apresentada na Visão geral criada por IA do Google em busca sobre pneus e oficinas em Curitiba',
      width: 1180,
      height: 620,
    },
  };

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12 text-slate-200">
      <EnhancedSEO
        title="Case GEO: Carplus na IA do Google em Curitiba | Omar SEO"
        description="Resultado documentado mostrando a Carplus Centro Automotivo entre as opções apresentadas pela Visão geral criada por IA do Google em uma pesquisa relacionada a pneus e oficinas em Curitiba."
        canonical="/resultados/carplus-google-ai-overview-pneus-curitiba"
        ogImage="https://www.omarseo.digital/images/cases/case-carplus-google-ai-overview-pneus-curitiba.png"
        ogType="article"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Cases e Resultados', item: '/resultados' },
          {
            name: 'Case GEO Carplus IA Google',
            item: '/resultados/carplus-google-ai-overview-pneus-curitiba',
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
              <span>RESULTADO DOCUMENTADO EM IA</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-yellow-400 bg-yellow-950/80 px-3 py-1 rounded-full border border-yellow-800/60">
              <Cpu size={13} />
              <span>GEO / AIO / Google AI Overview</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight leading-tight">
            Case GEO/AIO: Carplus apresentada pela IA do Google em Curitiba
          </h1>

          <p className="text-sm sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Resultado documentado mostrando a Carplus Centro Automotivo entre as opções apresentadas pela Visão geral criada por IA do Google em uma pesquisa relacionada a pneus e oficinas em Curitiba.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400 border-t border-slate-800/80">
            <span className="flex items-center gap-1.5 text-slate-300">
              <UserCheck size={14} className="text-cyan-400" />
              <span>
                Documentado por{' '}
                <Link to="/sobre" className="text-cyan-400 hover:underline font-semibold">
                  Omar Skafi — Omar SEO
                </Link>
              </span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Building2 size={14} className="text-yellow-400" />
              <span>Curitiba — Portão</span>
            </span>
          </div>
        </div>
      </div>

      {/* Bloco Principal de Resultado */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
          <FileCheck size={20} className="text-emerald-400" />
          <span>Bloco Principal de Resultado</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Cliente / Entidade
            </span>
            <span className="text-base font-bold text-white">
              Carplus
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Segmento
            </span>
            <span className="text-base font-bold text-cyan-300">
              Pneus / Centro Automotivo / Oficina
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Consulta Documentada
            </span>
            <span className="text-base font-bold text-yellow-300 font-mono">
              Oficinas dos Pneus Curitiba
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Localização
            </span>
            <span className="text-base font-bold text-white">
              Curitiba, PR
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Plataforma
            </span>
            <span className="text-base font-bold text-white">
              Google Search
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Superfície
            </span>
            <span className="text-base font-bold text-cyan-400">
              Visão geral criada por IA / AI Overview
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Domínio Associado
            </span>
            <span className="text-xs font-mono text-cyan-300 font-bold block pt-1">
              carpluspneuseoficina.com.br
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Resultado Documentado
            </span>
            <span className="text-xs font-bold text-emerald-400 block pt-1">
              Carplus apresentada entre as opções da IA
            </span>
          </div>
        </div>
      </section>

      {/* Captura de Evidência Factual */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
            <Search size={20} className="text-yellow-400" />
            <span>Evidência Factual em Resposta Generativa</span>
          </h2>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Maximize2 size={12} className="text-cyan-400" />
            <span>Clique para ampliar</span>
          </span>
        </div>

        {/* Image Container */}
        <div className="p-4 sm:p-6 rounded-3xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-all space-y-3">
          <div
            onClick={() => setIsLightboxOpen(true)}
            className="cursor-zoom-in relative rounded-2xl overflow-hidden border border-slate-800 bg-white group"
          >
            <img
              src="/images/cases/case-carplus-google-ai-overview-pneus-curitiba.png"
              alt="Carplus Centro Automotivo apresentada na Visão geral criada por IA do Google em busca sobre pneus e oficinas em Curitiba"
              width={1180}
              height={620}
              loading="lazy"
              className="w-full h-auto object-contain max-h-[520px] transition-transform duration-300 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-slate-950/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="px-3.5 py-1.5 rounded-full bg-slate-950/80 text-white text-xs font-bold border border-slate-700 flex items-center gap-1.5 shadow-xl">
                <Maximize2 size={13} className="text-cyan-400" />
                <span>Ampliar Captura Original</span>
              </span>
            </div>
          </div>

          <figcaption className="text-xs text-slate-400 leading-relaxed italic text-center px-2">
            Captura real do Google mostrando a Carplus Centro Automotivo entre as opções apresentadas pela Visão geral criada por IA para a consulta documentada. Respostas generativas e resultados podem mudar conforme data, localização, contexto e atualizações do Google.
          </figcaption>
        </div>
      </section>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-900 border border-slate-700 rounded-3xl p-4 sm:p-6 space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
                <Bot size={14} />
                <span>Captura Original Registrada do Google AI Overview</span>
              </span>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Fechar ampliação"
              >
                <X size={18} />
              </button>
            </div>

            <div className="bg-white rounded-xl p-2 border border-slate-700 overflow-auto max-h-[75vh] flex justify-center">
              <img
                src="/images/cases/case-carplus-google-ai-overview-pneus-curitiba.png"
                alt="Carplus Centro Automotivo apresentada na Visão geral criada por IA do Google em busca sobre pneus e oficinas em Curitiba"
                className="w-full h-auto object-contain"
              />
            </div>

            <p className="text-xs text-slate-400 text-center italic">
              Evidência documental fornecida pelo proprietário referente à consulta “Oficinas dos Pneus Curitiba”.
            </p>
          </div>
        </div>
      )}

      {/* Seção: Da busca tradicional à busca generativa */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-yellow-400 bg-yellow-950/80 px-3 py-1 rounded-full border border-yellow-800/60">
          <Sparkles size={14} />
          <span>Transformação da Busca</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
          Da busca tradicional à busca generativa
        </h2>

        <p className="text-sm leading-relaxed text-slate-300">
          Este case difere de um resultado orgânico tradicional em listas de links azuis. A captura demonstra que a entidade <strong className="text-white font-semibold">Carplus Centro Automotivo</strong> foi recuperada e apresentada diretamente dentro de uma resposta gerada pela experiência de IA do Google (AI Overview / Visão geral criada por IA).
        </p>
        <p className="text-sm leading-relaxed text-slate-300">
          Na consulta comercial e geográfica registrada (<code className="text-yellow-300 font-mono text-xs">“Oficinas dos Pneus Curitiba”</code>), a IA do Google sintetizou informações do segmento de lojas de pneus e centros automotivos, destacando o estabelecimento localizado no bairro Portão (Av. Presid. Arthur da Silva Bernardes, 1323) e seus principais serviços.
        </p>
      </section>

      {/* Seção: O que este resultado demonstra? */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
          <Cpu size={20} className="text-cyan-400" />
          <span>O que este resultado demonstra?</span>
        </h2>

        <p className="text-sm text-slate-300 leading-relaxed">
          A busca moderna evoluiu para além da listagem corrida de URLs. Mecanismos de busca agora sintetizam respostas diretas, apresentando empresas, entidades, produtos, serviços e fontes contextualizadas dentro de blocos generativos.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Neste registro específico, a <strong className="text-white font-semibold">Carplus Centro Automotivo</strong> foi sintetizada pelo Google como uma opção recomendada para venda de pneus e serviços de oficina mecânica em Curitiba. Isso constitui uma evidência concreta de <strong className="text-cyan-300 font-semibold">visibilidade da entidade dentro de uma experiência de busca generativa</strong>.
        </p>
      </section>

      {/* Seção: GEO e presença em mecanismos generativos */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
          <Layers size={20} className="text-yellow-400" />
          <span>GEO e presença em mecanismos generativos</span>
        </h2>

        <p className="text-sm text-slate-300 leading-relaxed">
          Estratégias de <strong className="text-white font-semibold">GEO (Generative Engine Optimization)</strong> e <strong className="text-white font-semibold">AIO (AI Optimization)</strong> buscam tornar empresas e conteúdos mais compreensíveis, estruturados, contextualizados, rastreáveis e associados corretamente a serviços e localidades como entidades digitais consistentes.
        </p>

        <div className="p-4 rounded-2xl bg-slate-950 border border-cyan-500/30 text-xs sm:text-sm text-slate-200 leading-relaxed italic">
          “O trabalho de SEO/GEO busca construir sinais que aumentem a compreensão e a elegibilidade da entidade em mecanismos tradicionais e generativos. Este case documenta uma situação em que a Carplus efetivamente apareceu em uma experiência de busca com IA.”
        </div>

        <div className="space-y-3 pt-2">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">
            Sinais que compõem a estrutura de GEO/AIO:
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
            <li className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
              <span>SEO Técnico e infraestrutura de alta velocidade</span>
            </li>
            <li className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
              <span>Entity SEO e associação clara com a categoria</span>
            </li>
            <li className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
              <span>Dados Estruturados Schema.org completos</span>
            </li>
            <li className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>Consistência de informações geográficas e SEO Local</span>
            </li>
            <li className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
              <span>Arquitetura semântica e páginas dedicadas de serviços</span>
            </li>
            <li className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
              <span>Conteúdo útil, explicativo e relevante para o usuário</span>
            </li>
          </ul>
        </div>

        <div className="pt-2">
          <Link
            to="/seo-geo-aio"
            className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 bg-cyan-950/80 px-4 py-2 rounded-full border border-cyan-800/80 transition-colors"
          >
            <Bot size={14} />
            <span>Saiba mais no Guia Completo de SEO + GEO + AIO</span>
            <ChevronRight size={14} />
          </Link>
        </div>
      </section>

      {/* Relação entre Cases e Tipos de Intenção */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
        <h3 className="text-lg font-bold font-display text-white">
          Três Superfícies e Intenções de Busca Documentadas
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          A documentação de resultados em diferentes superfícies do Google comprova amplitude de engenharia SEO/GEO:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <Link
            to="/resultados/seo-advogados-planos-de-saude"
            className="p-4 rounded-2xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-yellow-500/40 transition-all space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-400 bg-yellow-950/80 px-2 py-0.5 rounded border border-yellow-800/60">
                SEO Orgânico
              </span>
              <ChevronRight size={14} className="text-slate-400 group-hover:text-yellow-400 transition-colors" />
            </div>
            <h4 className="text-xs font-bold text-white group-hover:text-yellow-300 transition-colors">
              Case #01 — Advocacia
            </h4>
            <p className="text-[11px] text-slate-400">
              Primeira página para “advogados planos de saúde”.
            </p>
          </Link>

          <Link
            to="/resultados/seo-celulares-curitiba-shopcell"
            className="p-4 rounded-2xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500/40 transition-all space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60">
                Varejo Local
              </span>
              <ChevronRight size={14} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
            </div>
            <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
              Case #02 — Shopcell
            </h4>
            <p className="text-[11px] text-slate-400">
              Resultado orgânico para “celulares em Curitiba”.
            </p>
          </Link>

          <div className="p-4 rounded-2xl bg-slate-900 border border-cyan-500/50 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                GEO / AI Overview
              </span>
            </div>
            <h4 className="text-xs font-bold text-white">
              Case #03 — Carplus (Atual)
            </h4>
            <p className="text-[11px] text-slate-400">
              Apresentada na Visão geral criada por IA do Google.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer de Isenção de Responsabilidade */}
      <section className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800/80 text-slate-400 space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
          <ShieldAlert size={14} className="text-yellow-500" />
          <span>Aviso de Transparência</span>
        </div>
        <p className="text-xs leading-relaxed">
          Este case documenta uma resposta observada na experiência de busca do Google no momento da captura. Resultados e respostas geradas por IA podem variar conforme localização, data, contexto, personalização, fontes disponíveis e atualizações dos sistemas do Google. A evidência apresentada não constitui garantia de inclusão ou recomendação futura por mecanismos de busca ou inteligência artificial.
        </p>
      </section>

      {/* Footer Navigation CTA */}
      <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          to="/resultados"
          className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 text-xs font-bold flex items-center justify-center gap-2 w-full sm:w-auto transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Ver Todos os Cases em /resultados</span>
        </Link>

        <Link
          to="/contato"
          className="btn-primary-gold btn-shimmer px-6 py-3 text-xs font-bold flex items-center justify-center gap-2 w-full sm:w-auto"
        >
          <span>Solicitar Análise de SEO e GEO</span>
          <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  );
}
