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
  MapPin,
} from 'lucide-react';

export default function CaseCarplusAiOverview() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'aio' | 'org' | 'maps'>('aio');

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://www.omarseo.digital/resultados/carplus-google-ai-overview-pneus-curitiba#article',
    headline: 'Carplus: relato de SEO local e conteúdo em Curitiba',
    description:
      'Relato do acervo Carplus sobre conteúdo, busca local e respostas de IA. As reconstruções visuais não comprovam posições ou menções atuais.',
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
        'Reconstrução visual do relato Carplus sobre buscas de pneus em Curitiba',
      width: 1180,
      height: 620,
    },
  };

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12 text-slate-200">
      <EnhancedSEO
        title="Carplus: relato de SEO local em Curitiba | Omar SEO"
        description="Relato do acervo Carplus sobre conteúdo, busca local e respostas de IA. As reconstruções visuais não comprovam posições ou menções atuais."
        canonical="/resultados/carplus-google-ai-overview-pneus-curitiba"
        ogImage="https://www.omarseo.digital/images/cases/case-carplus-google-ai-overview-pneus-curitiba.png"
        ogType="article"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Cases e Resultados', item: '/resultados' },
          {
            name: 'Case SEO+GEO+AIO Carplus',
            item: '/resultados/carplus-google-ai-overview-pneus-curitiba',
          },
        ]}
        schema={[articleSchema]}
      />
      <aside className="relative mx-auto max-w-7xl border border-slate-600 p-4 text-sm text-slate-200 leading-relaxed">Acervo do projeto: este relato pode incluir reconstruções gráficas de buscas. Ilustrações não comprovam menções atuais ou retorno financeiro. Solicite registros originais, consulta e data para avaliação.</aside>

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

        <div className="relative z-10 space-y-4 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <div className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-950/90 px-3 py-1 rounded-full border border-cyan-500/40">
              <Sparkles size={14} />
              <span>RELATO DO ACERVO</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-yellow-400 bg-yellow-950/80 px-3 py-1 rounded-full border border-yellow-800/60">
              <Cpu size={13} />
              <span>SEO + GEO + AIO</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight leading-tight">
            Carplus: SEO local e conteúdo sobre pneus em Curitiba
          </h1>

          <p className="text-sm sm:text-lg text-slate-300 max-w-3xl leading-relaxed mx-auto sm:mx-0">
            O relato publicado sobre a Carplus Centro Automotivo aborda a consulta <strong className="text-white italic">“pneus para carros elétricos em curitiba”</strong>, e apresenta reconstruções de buscas orgânicas, do bloco local e de respostas de IA. Essas ilustrações não substituem capturas originais com data e contexto.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-400 border-t border-slate-800/80">
            <span className="flex items-center gap-1.5 text-slate-300">
              <UserCheck size={14} className="text-cyan-400" />
              <span>
                Documentado por{' '}
                <Link to="/sobre" className="text-cyan-400 hover:underline font-semibold">
                  Omar Skafi
                </Link>
              </span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Building2 size={14} className="text-yellow-400" />
              <span>Curitiba — Portão / CIC</span>
            </span>
          </div>
        </div>
      </div>

      {/* Seção: O Poder da Tripla Presença */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
            <Bot size={22} />
          </div>
          <h3 className="text-lg font-bold text-white">GEO / AIO</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Citada como recomendação direta na Visão Geral criada por IA do Google (AI Overview), ganhando autoridade como especialista em elétricos.
          </p>
        </div>
        <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
            <MapPin size={22} />
          </div>
          <h3 className="text-lg font-bold text-white">SEO Local</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Posicionada no Top 3 do Google Maps (Local Pack) com indicação de que o site menciona explicitamente "carros elétricos".
          </p>
        </div>
        <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center text-yellow-400">
            <Search size={22} />
          </div>
          <h3 className="text-lg font-bold text-white">SEO Orgânico</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            #1 e #2 no resultado orgânico tradicional, capturando cliques de usuários que preferem os links clássicos do buscador.
          </p>
        </div>
      </section>

      {/* Captura de Evidência Factual com Abas */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
            <FileCheck size={20} className="text-emerald-400" />
            <span>Ilustração do relato publicado</span>
          </h2>
          
          <div className="flex p-1 bg-slate-950 border border-slate-800 rounded-xl">
            <button
              onClick={() => setActiveTab('aio')}
              className={`px-4 py-1.5 rounded-lg text-[10px] font-bold transition-all ${activeTab === 'aio' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
            >
              AI Overview (AIO)
            </button>
            <button
              onClick={() => setActiveTab('maps')}
              className={`px-4 py-1.5 rounded-lg text-[10px] font-bold transition-all ${activeTab === 'maps' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
            >
              Google Maps
            </button>
            <button
              onClick={() => setActiveTab('org')}
              className={`px-4 py-1.5 rounded-lg text-[10px] font-bold transition-all ${activeTab === 'org' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
            >
              Orgânico (SEO)
            </button>
          </div>
        </div>

        <div className="p-4 sm:p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-white group cursor-zoom-in" onClick={() => setIsLightboxOpen(true)}>
            <img
              src="/images/cases/case-carplus-google-ai-overview-pneus-curitiba.png"
              alt={`Carplus em ${activeTab.toUpperCase()} para pneus de carros elétricos`}
              className="w-full h-auto object-contain max-h-[550px]"
            />
            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="px-4 py-2 rounded-full bg-slate-950/80 text-white text-xs font-bold border border-slate-700 flex items-center gap-2">
                <Maximize2 size={14} className="text-cyan-400" />
                <span>Ampliar ilustração</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-slate-300 font-medium">
                {activeTab === 'aio' && "Sintetizado como autoridade para BYD, GWM e Volvo pela IA."}
                {activeTab === 'maps' && "Top ranking local com citação de relevância do site."}
                {activeTab === 'org' && "Exemplo de apresentação de títulos em uma busca orgânica."}
              </span>
            </div>
            <div className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">
              Consulta: pneus para carros eletricos em curitiba
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full bg-slate-900 border border-slate-700 rounded-3xl p-4 space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <Sparkles size={14} />
                <span>Ilustração do acervo ({activeTab.toUpperCase()})</span>
              </span>
              <button onClick={() => setIsLightboxOpen(false)} className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="bg-white rounded-xl p-2 border border-slate-700 overflow-auto max-h-[80vh] flex justify-center">
              <img
                src="/images/cases/case-carplus-google-ai-overview-pneus-curitiba.png"
                alt="Documentação Carplus"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Detalhes Técnicos do Projeto */}
      <section className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 space-y-6">
        <h2 className="text-xl font-bold font-display text-white">Engenharia Semântica Aplicada</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Desafio Comercial</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Posicionar a Carplus em um nicho emergente e altamente rentável: pneus para veículos elétricos (EV), competindo com grandes e-commerces e redes nacionais.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Estratégia SEO/GEO</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Criação de silos de conteúdo focados em marcas (BYD, GWM), marcação de dados estruturados Schema.org para serviços locais e otimização de E-E-A-T.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-blue-950/20 border border-blue-500/30">
          <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
            <Wrench size={16} className="text-blue-400" />
            <span>Diferencial de Execução Omar SEO</span>
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            A tripla presença não é sorte. É o resultado de um trabalho técnico que alinha o conteúdo visível no site com a camada oculta de código que os robôs da IA leem. Ao estruturar a Carplus como uma <strong className="text-white">"Entidade Especialista em Pneus EV"</strong>, o Google passou a recomendá-la em todas as suas interfaces.
          </p>
        </div>
      </section>

      {/* Relação entre Cases e Tipos de Intenção */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
        <h3 className="text-lg font-bold font-display text-white">
          Continue Explorando Resultados Reais
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
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
          </Link>

          <Link
            to="/resultados/comfort-divisorias-google-ia-curitiba"
            className="p-4 rounded-2xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                SEO + GEO
              </span>
              <ChevronRight size={14} className="text-slate-400 group-hover:text-emerald-400 transition-colors" />
            </div>
            <h4 className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
              Case #05 — Comfort
            </h4>
          </Link>
        </div>
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
