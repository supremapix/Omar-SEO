import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import ConstellationGrid from '../components/ui/constellation-grid';
import { BackgroundVideo } from '../components/BackgroundVideo';
import {
  Smartphone,
  Search,
  FileCheck,
  Maximize2,
  X,
  UserCheck,
  Building2,
  ArrowLeft,
  ChevronRight,
  Sparkles,
  Layers,
  ShoppingBag,
  Scale,
  ShieldAlert,
} from 'lucide-react';

export default function CaseShopcellCelulares() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://www.omarseo.digital/resultados/seo-celulares-curitiba-shopcell#article',
    headline: 'Case SEO: Shopcell posicionada para “Celulares em Curitiba”',
    description:
      'Resultado orgânico documentado em uma busca comercial altamente competitiva do varejo de celulares em Curitiba.',
    url: 'https://www.omarseo.digital/resultados/seo-celulares-curitiba-shopcell',
    mainEntityOfPage: 'https://www.omarseo.digital/resultados/seo-celulares-curitiba-shopcell',
    inLanguage: 'pt-BR',
    author: {
      '@id': 'https://www.omarseo.digital/#person',
    },
    publisher: {
      '@id': 'https://www.omarseo.digital/#localbusiness',
    },
    image: {
      '@type': 'ImageObject',
      '@id': 'https://www.omarseo.digital/images/cases/case-shopcell-celulares-em-curitiba-google.png#primaryimage',
      url: 'https://www.omarseo.digital/images/cases/case-shopcell-celulares-em-curitiba-google.png',
      contentUrl: 'https://www.omarseo.digital/images/cases/case-shopcell-celulares-em-curitiba-google.png',
      caption:
        'Shopcell posicionada no Google para celulares em Curitiba',
      width: 1080,
      height: 390,
    },
  };

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12 text-slate-200">
      <EnhancedSEO
        title="Case SEO: Celulares em Curitiba | Shopcell + Omar SEO"
        description="Resultado orgânico documentado em uma busca comercial altamente competitiva do varejo de celulares em Curitiba."
        canonical="/resultados/seo-celulares-curitiba-shopcell"
        ogImage="https://www.omarseo.digital/images/cases/case-shopcell-celulares-em-curitiba-google.png"
        ogType="article"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Cases e Resultados', item: '/resultados' },
          {
            name: 'Case SEO Shopcell Celulares',
            item: '/resultados/seo-celulares-curitiba-shopcell',
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
      <div className="relative p-8 sm:p-12 rounded-3xl bg-slate-950/90 border border-cyan-500/30 shadow-[0_0_40px_rgba(34,211,238,0.15)] overflow-hidden">
        <BackgroundVideo
          src="https://img.supremasite.com.br/seo-omar.mp4"
          opacity={0.35}
          overlayClassName="bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/60 to-[#0a0a0f]/90"
        />
        <ConstellationGrid className="absolute inset-0 z-0 opacity-30 pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
            <Smartphone size={14} />
            <span>Celulares / Varejo Local</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight leading-tight">
            Case SEO: Shopcell posicionada para “Celulares em Curitiba”
          </h1>

          <p className="text-sm sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Resultado orgânico documentado em uma busca comercial altamente competitiva do varejo de celulares em Curitiba.
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
              <span>Curitiba — Centro</span>
            </span>
          </div>
        </div>
      </div>

      {/* Introdução Factual */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-widest">
          <Sparkles size={16} />
          <span>Introdução do Case</span>
        </div>
        <p className="text-sm sm:text-base leading-relaxed text-slate-200">
          Este case documenta a presença da loja <strong className="text-white font-semibold">Shopcell</strong> (domínio <code className="text-cyan-300 font-mono text-xs">celularescuritibashopcell.com.br</code>) posicionada organicamente no Google Search para a consulta comercial <strong className="text-yellow-300 font-semibold">“celulares em Curitiba”</strong>.
        </p>
        <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
          A presença registrada reflete o trabalho de estruturação semântica e SEO Local focado em capturar demandas comerciais no centro de Curitiba, aproximando consumidores em busca de aparelhos novos, lacrados e assistência especializada.
        </p>
      </section>

      {/* Seção de Resultado Documentado */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
          <FileCheck size={20} className="text-emerald-400" />
          <span>Bloco de Resultado Documentado</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Cliente / Entidade
            </span>
            <span className="text-base font-bold text-white">
              Shopcell
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Segmento
            </span>
            <span className="text-base font-bold text-cyan-300">
              Loja de celulares / Varejo Local
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Busca Documentada
            </span>
            <span className="text-base font-bold text-yellow-300 font-mono">
              celulares em Curitiba
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Localização
            </span>
            <span className="text-base font-bold text-white">
              Curitiba — Centro
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Mecanismo
            </span>
            <span className="text-base font-bold text-white">
              Google Search
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Resultado
            </span>
            <span className="text-base font-bold text-emerald-400">
              Presença orgânica documentada
            </span>
          </div>
        </div>
      </section>

      {/* Captura de Evidência Factual */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
            <Search size={20} className="text-yellow-400" />
            <span>Evidência Factual da SERP</span>
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
              src="/images/cases/case-shopcell-celulares-em-curitiba-google.png"
              alt="Shopcell posicionada no Google para celulares em Curitiba"
              width={1080}
              height={390}
              loading="lazy"
              className="w-full h-auto object-contain max-h-[420px] transition-transform duration-300 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-slate-950/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="px-3.5 py-1.5 rounded-full bg-slate-950/80 text-white text-xs font-bold border border-slate-700 flex items-center gap-1.5 shadow-xl">
                <Maximize2 size={13} className="text-cyan-400" />
                <span>Ampliar Captura Original</span>
              </span>
            </div>
          </div>

          <figcaption className="text-xs text-slate-400 leading-relaxed italic text-center px-2">
            Captura real do Google registrando a Shopcell para a pesquisa “celulares em Curitiba”. Resultados podem variar conforme data, localização, dispositivo e personalização.
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
                <Search size={14} />
                <span>Captura Original Registrada do Google</span>
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
                src="/images/cases/case-shopcell-celulares-em-curitiba-google.png"
                alt="Shopcell posicionada no Google para celulares em Curitiba"
                className="w-full h-auto object-contain"
              />
            </div>

            <p className="text-xs text-slate-400 text-center italic">
              Evidência documental fornecida pelo proprietário referente à consulta orgânica “celulares em Curitiba”.
            </p>
          </div>
        </div>
      )}

      {/* Contexto do Case */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
          <ShoppingBag size={20} className="text-cyan-400" />
          <span>SEO para um mercado de alta concorrência</span>
        </h2>
        <p className="text-sm leading-relaxed text-slate-300">
          Buscas relacionadas a celulares possuem forte intenção comercial, porque aproximam empresas de consumidores procurando lojas, aparelhos novos, modelos específicos e opções disponíveis imediatamente em sua região.
        </p>
        <p className="text-sm leading-relaxed text-slate-300">
          Este resultado demonstra a experiência prática do consultor <Link to="/sobre" className="text-cyan-300 hover:underline font-semibold">Omar Skafi (Omar SEO)</Link> trabalhando o posicionamento orgânico em um segmento de varejo local altamente competitivo na capital paranaense.
        </p>
      </section>

      {/* Análise da Intenção de Busca */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
          <Layers size={20} className="text-yellow-400" />
          <span>Análise da Intenção de Busca</span>
        </h2>

        <p className="text-sm text-slate-300 leading-relaxed">
          A consulta comercial <strong className="text-yellow-300">“celulares em Curitiba”</strong> combina com precisão três vetores semânticos fundamentais para o varejo físico:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
              1. Categoria Comercial
            </span>
            <span className="text-lg font-bold text-white font-mono block">
              celulares
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Define o produto e o nicho de varejo procurado pelo consumidor.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider block">
              2. Intenção Geográfica
            </span>
            <span className="text-lg font-bold text-white font-mono block">
              Curitiba
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Restringe os resultados à localização física e disponibilidade local.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
              3. Entidade Empresarial
            </span>
            <span className="text-lg font-bold text-white font-mono block">
              Shopcell
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Entidade empresarial associada pelo Google à solução de varejo no Centro.
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Essa articulação reflete a capacidade de estruturar projetos de SEO local alinhados exatamente à intenção comercial do usuário final.
        </p>
      </section>

      {/* Pilares Metodológicos de SEO para Varejo Local */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
          Pilares Metodológicos para SEO no Varejo Local
        </h2>

        <p className="text-sm text-slate-300 leading-relaxed">
          Em termos de metodologia geral, projetos de SEO Local para estabelecimentos comerciais e varejo de tecnologia envolvem o alinhamento de múltiplos fatores técnicos e semânticos:
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300 pt-2">
          <li className="p-3 rounded-xl bg-slate-950/60 stroke-cyan-500/30 border border-slate-800/80 flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
            <span>SEO Técnico e otimização de velocidade</span>
          </li>
          <li className="p-3 rounded-xl bg-slate-950/60 stroke-cyan-500/30 border border-slate-800/80 flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
            <span>Arquitetura semântica e hierarquia de headings</span>
          </li>
          <li className="p-3 rounded-xl bg-slate-950/60 stroke-cyan-500/30 border border-slate-800/80 flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
            <span>Páginas comerciais e landing pages locais</span>
          </li>
          <li className="p-3 rounded-xl bg-slate-950/60 stroke-cyan-500/30 border border-slate-800/80 flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <span>Integração com Perfil da Empresa no Google (Maps)</span>
          </li>
          <li className="p-3 rounded-xl bg-slate-950/60 stroke-cyan-500/30 border border-slate-800/80 flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
            <span>Marcação de dados estruturados Schema.org</span>
          </li>
          <li className="p-3 rounded-xl bg-slate-950/60 stroke-cyan-500/30 border border-slate-800/80 flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
            <span>Estratégias de GEO (Generative Engine Optimization)</span>
          </li>
        </ul>
      </section>

      {/* Relação entre Cases Factuais */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
        <h3 className="text-lg font-bold font-display text-white">
          Experiência Documentada em Múltiplas Intenções de Busca
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          A documentação de cases em áreas distintas comprova versatilidade estratégica em SEO:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link
            to="/resultados/seo-advogados-planos-de-saude"
            className="p-4 rounded-2xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-yellow-500/40 transition-all space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-400 bg-yellow-950/80 px-2.5 py-0.5 rounded border border-yellow-800/60">
                Case #01 — Advocacia
              </span>
              <ChevronRight size={14} className="text-slate-400 group-hover:text-yellow-400 transition-colors" />
            </div>
            <h4 className="text-sm font-bold text-white group-hover:text-yellow-300 transition-colors">
              Advocacia / Direito da Saúde
            </h4>
            <p className="text-xs text-slate-400">
              Serviço especializado de alta consideração e tomada de decisão fundamentada.
            </p>
          </Link>

          <div className="p-4 rounded-2xl bg-slate-900 border border-cyan-500/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800/60">
                Case #02 — Celulares (Página Atual)
              </span>
            </div>
            <h4 className="text-sm font-bold text-white">
              Varejo Local & Aparelhos
            </h4>
            <p className="text-xs text-slate-400">
              Varejo local, disponibilidade de estoque e busca comercial por região.
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
          Este case registra um resultado observado no Google no momento da captura. Posições orgânicas podem variar conforme localização, dispositivo, data, concorrência, personalização e atualizações do mecanismo de busca. Resultados anteriores não constituem garantia de posições futuras.
        </p>
      </section>

      {/* Footer Navigation CTA */}
      <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          to="/resultados"
          className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 text-xs font-bold flex items-center justify-center gap-2 w-full sm:w-auto transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Ver Todos os Cases e Resultados</span>
        </Link>

        <Link
          to="/contato"
          className="btn-primary-gold btn-shimmer px-6 py-3 text-xs font-bold flex items-center justify-center gap-2 w-full sm:w-auto"
        >
          <span>Solicitar Análise de SEO Local</span>
          <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  );
}
