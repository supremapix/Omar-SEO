import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import ConstellationGrid from '../components/ui/constellation-grid';
import { BackgroundVideo } from '../components/BackgroundVideo';
import {
  MapPin,
  Search,
  FileCheck,
  Maximize2,
  X,
  UserCheck,
  Building2,
  ArrowLeft,
  ChevronRight,
  ShieldAlert,
  Star,
  Globe,
  Compass,
  Layers,
  Sparkles,
  Bot,
  ExternalLink,
} from 'lucide-react';

export default function CaseEcoservyCortePoda() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://www.omarseo.digital/resultados/seo-local-ecoservy-corte-e-poda-curitiba#article',
    headline: 'Case SEO Local: Ecoservy em destaque para “Corte e Poda” no Google',
    description:
      'Resultado documentado de visibilidade local da Ecoservy em Curitiba para uma pesquisa diretamente relacionada ao seu principal serviço no Google Maps e Local Pack.',
    url: 'https://www.omarseo.digital/resultados/seo-local-ecoservy-corte-e-poda-curitiba',
    mainEntityOfPage: 'https://www.omarseo.digital/resultados/seo-local-ecoservy-corte-e-poda-curitiba',
    inLanguage: 'pt-BR',
    author: {
      '@id': 'https://www.omarseo.digital/#person',
    },
    publisher: {
      '@id': 'https://www.omarseo.digital/#localbusiness',
    },
    image: {
      '@type': 'ImageObject',
      '@id': 'https://www.omarseo.digital/images/cases/case-ecoservy-corte-e-poda-google-maps.png#primaryimage',
      url: 'https://www.omarseo.digital/images/cases/case-ecoservy-corte-e-poda-google-maps.png',
      contentUrl: 'https://www.omarseo.digital/images/cases/case-ecoservy-corte-e-poda-google-maps.png',
      caption:
        'Ecoservy como primeiro resultado visível no Google Local para corte e poda em Curitiba',
      width: 1180,
      height: 580,
    },
  };

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12 text-slate-200">
      <EnhancedSEO
        title="Case SEO Local: Corte e Poda no Google Maps | Omar SEO"
        description="Resultado documentado do SEO Local da Ecoservy em Curitiba. Primeiro resultado empresarial visível no bloco local do Google para a busca 'corte e poda'."
        canonical="/resultados/seo-local-ecoservy-corte-e-poda-curitiba"
        ogImage="https://www.omarseo.digital/images/cases/case-ecoservy-corte-e-poda-google-maps.png"
        ogType="article"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Cases e Resultados', item: '/resultados' },
          {
            name: 'Case SEO Local Ecoservy Corte e Poda',
            item: '/resultados/seo-local-ecoservy-corte-e-poda-curitiba',
          },
        ]}
        schema={[articleSchema]}
      />

      {/* Back Link */}
      <div>
        <Link
          to="/resultados"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors bg-emerald-950/60 border border-emerald-800/60 px-3.5 py-1.5 rounded-full"
        >
          <ArrowLeft size={14} />
          <span>Voltar para Cases e Resultados</span>
        </Link>
      </div>

      {/* Hero Header */}
      <div className="relative p-8 sm:p-12 rounded-3xl bg-slate-950/90 border border-emerald-500/40 shadow-[0_0_40px_rgba(16,185,129,0.15)] overflow-hidden">
        <BackgroundVideo
          src="https://img.supremasite.com.br/seo-omar.mp4"
          opacity={0.35}
          overlayClassName="bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/60 to-[#0a0a0f]/90"
        />
        <ConstellationGrid className="absolute inset-0 z-0 opacity-30 pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/90 px-3 py-1 rounded-full border border-emerald-500/40">
              <MapPin size={14} />
              <span>SEO LOCAL / GOOGLE MAPS</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-yellow-400 bg-yellow-950/80 px-3 py-1 rounded-full border border-yellow-800/60">
              <Star size={13} fill="currentColor" />
              <span>Visibilidade no Bloco de Empresas</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight leading-tight">
            Case SEO Local: Ecoservy em destaque para “Corte e Poda” no Google
          </h1>

          <p className="text-sm sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Resultado documentado de visibilidade local da Ecoservy em Curitiba para uma pesquisa diretamente relacionada ao seu principal serviço.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400 border-t border-slate-800/80">
            <span className="flex items-center gap-1.5 text-slate-300">
              <UserCheck size={14} className="text-emerald-400" />
              <span>
                Documentado por{' '}
                <Link to="/sobre" className="text-emerald-400 hover:underline font-semibold">
                  Omar Skafi — Omar SEO
                </Link>
              </span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Building2 size={14} className="text-yellow-400" />
              <span>Curitiba — PR</span>
            </span>
          </div>
        </div>
      </div>

      {/* Bloco Principal de Resultado */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
          <FileCheck size={20} className="text-emerald-400" />
          <span>Fatos do Resultado Documentado</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Cliente / Entidade
            </span>
            <span className="text-base font-bold text-white">
              Corte e Poda Ecoservy | Jardinagem
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Segmento
            </span>
            <span className="text-base font-bold text-emerald-300">
              Corte e poda de árvores / Jardinagem
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Consulta Registrada
            </span>
            <span className="text-base font-bold text-yellow-300 font-mono">
              corte e poda
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Localização & Superfície
            </span>
            <span className="text-base font-bold text-cyan-300">
              Curitiba (Google Local / Maps)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-[#0f1118] border border-emerald-900/40 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
              Resultado Observado na Captura
            </span>
            <p className="text-sm font-bold text-white leading-snug">
              Primeiro resultado empresarial visível no bloco local (Local Pack) apresentado para a pesquisa “corte e poda”.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-yellow-900/40 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-400 block">
              Avaliação & Evidência
            </span>
            <p className="text-sm font-bold text-white leading-snug">
              5,0 ⭐ (7 avaliações) | Captura real do Google fornecida pelo proprietário.
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
          <span className="text-xs text-slate-400 font-mono hidden sm:inline">Sem Simulação ou Mockup</span>
        </div>

        <div className="bg-slate-950 p-3 sm:p-5 rounded-3xl border border-slate-800 space-y-3 relative group">
          <div className="overflow-hidden rounded-2xl bg-white border border-slate-700 relative">
            <img
              src="/images/cases/case-ecoservy-corte-e-poda-google-maps.png"
              alt="Ecoservy como primeiro resultado visível no Google Local para corte e poda em Curitiba"
              width={1180}
              height={580}
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
            Captura real da pesquisa “corte e poda” mostrando a Corte e Poda Ecoservy | Jardinagem como primeiro resultado empresarial visível no bloco local apresentado pelo Google. Resultados locais podem variar conforme localização, data, dispositivo e personalização.
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
                src="/images/cases/case-ecoservy-corte-e-poda-google-maps.png"
                alt="Ecoservy como primeiro resultado visível no Google Local para corte e poda em Curitiba"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
            <p className="text-xs text-slate-400 p-3 text-center">
              Captura original fornecida pelo cliente registrando o bloco de resultados locais do Google.
            </p>
          </div>
        </div>
      )}

      {/* SEO Local no momento da intenção */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-slate-800 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
          <MapPin size={22} className="text-emerald-400" />
          <span>SEO Local no momento da intenção</span>
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Consultas de pesquisa como <strong className="text-yellow-300 font-mono">“corte e poda”</strong> possuem um fortíssimo componente de intenção local. Quando um usuário realiza esse tipo de busca em Curitiba, ele não está procurando artigos teóricos sobre botânica ou manuais de jardinagem; ele busca um prestador qualificado e próximo capaz de executar o serviço em sua residência ou empresa.
          </p>
          <p>
            A presença destacada no <strong className="text-white">bloco de empresas do Google (Local Pack / Google Maps)</strong> posiciona o negócio diretamente no campo visual do consumidor no exato momento da tomada de decisão. Trata-se do alinhamento preciso entre intenção comercial imediata e relevância geográfica.
          </p>
          <p>
            Em serviços essenciais e de prestação imediata como poda de árvores, limpeza de terrenos e jardinagem, a visibilidade no mapa reduz o atrito de descoberta e aproxima a empresa de potenciais contratantes locais.
          </p>
        </div>
      </section>

      {/* Diferenciação das 3 Superfícies no Google */}
      <section className="space-y-6 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800/60 inline-block">
            Presença Orgânica Multissuperfície
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-display text-white">
            Três Superfícies de Descoberta no Google
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            A estratégia de SEO de Omar SEO atua em diferentes pontos de contato no ecossistema de buscas do Google.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Surface 1: SEO Orgânico */}
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-yellow-500/30 space-y-3 relative flex flex-col justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-yellow-400 bg-yellow-950/80 px-2.5 py-1 rounded-full border border-yellow-800/50">
                <Search size={13} />
                <span>1. SEO Orgânico</span>
              </div>
              <h3 className="text-lg font-bold text-white">Resultados Tradicionais (Links Azuis)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Posicionamento orgânico no topo do Google para consultas de alta consideração comercial e jurídica.
              </p>
              <div className="pt-2 text-xs space-y-1 font-mono text-slate-400">
                <p>• Case #01: Advogados Planos de Saúde</p>
                <p>• Case #02: Shopcell Celulares</p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-800/80">
              <Link to="/resultados/seo-advogados-planos-de-saude" className="text-xs font-bold text-yellow-400 hover:underline inline-flex items-center gap-1">
                <span>Ver Case Orgânico #01</span>
                <ChevronRight size={13} />
              </Link>
            </div>
          </div>

          {/* Surface 2: GEO / AIO */}
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-cyan-500/30 space-y-3 relative flex flex-col justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-800/50">
                <Bot size={13} />
                <span>2. GEO / AIO (IA)</span>
              </div>
              <h3 className="text-lg font-bold text-white">Google AI Overview (Respostas Generativas)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Recomendação de entidades e marcas pela inteligência artificial generativa sintetizada do Google.
              </p>
              <div className="pt-2 text-xs space-y-1 font-mono text-slate-400">
                <p>• Case #03: Carplus Pneus & Oficina</p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-800/80">
              <Link to="/resultados/carplus-google-ai-overview-pneus-curitiba" className="text-xs font-bold text-cyan-400 hover:underline inline-flex items-center gap-1">
                <span>Ver Case GEO/AIO #03</span>
                <ChevronRight size={13} />
              </Link>
            </div>
          </div>

          {/* Surface 3: SEO Local / Google Maps (THIS CASE) */}
          <div className="p-6 rounded-2xl bg-slate-950/90 border border-emerald-500/50 space-y-3 relative flex flex-col justify-between shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/90 px-2.5 py-1 rounded-full border border-emerald-800/60">
                <MapPin size={13} />
                <span>3. SEO Local / Maps</span>
              </div>
              <h3 className="text-lg font-bold text-white">Bloco de Empresas (Local Pack)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Primeiro resultado empresarial no bloco local para pesquisas de prestação de serviços diretos na cidade.
              </p>
              <div className="pt-2 text-xs space-y-1 font-mono text-emerald-300">
                <p>• Case #04: Ecoservy Corte e Poda</p>
                <p>• Case #07: Alevinos Curitiba (+12 Anos de Parceria)</p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-800/80">
              <Link
                to="/resultados/seo-local-e-organico-alevinos-curitiba"
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1"
              >
                <span>Conheça o Case #07 — Alevinos Curitiba (SEO Local + Orgânico)</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Autoridade Estratégica Omar SEO */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-slate-800 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
          <Layers size={22} className="text-cyan-400" />
          <span>Visão Estratégica: Presença Orgânica Além dos Links Tradicionais</span>
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            O SEO moderno não se limita a disputar espaço exclusivamente nos links azuis orgânicos tradicionais. Uma estratégia abrangente de visibilidade orgânica engloba diferentes pontos de contato no ecossistema do Google:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li><strong className="text-white">Busca Local & Google Maps:</strong> Para captura de demanda imediata por serviços geolocalizados em bairros e cidades.</li>
            <li><strong className="text-white">Resultados Orgânicos de Busca (SERP):</strong> Para atração de tráfego de alta consideração e pesquisas informacionais/comerciais.</li>
            <li><strong className="text-white">Experiências Generativas (GEO/AIO):</strong> Para citação e síntese de marca nas respostas em inteligência artificial.</li>
          </ul>
          <p>
            Omar SEO desenvolve metodologias focadas em fortalecer a autoridade semântica da entidade empresarial, otimizando sinais locais, estrutura técnica e consistência de dados em Curitiba e regiões competitivas.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-4 items-center justify-between">
          <Link
            to="/seo-google-maps"
            className="text-xs font-bold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5"
          >
            <span>Conheça a Consultoria em SEO Local e Google Maps</span>
            <ChevronRight size={14} />
          </Link>

          <Link
            to="/auditoria-seo"
            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5"
          >
            <span>Solicitar Diagnóstico SEO para seu Negócio Local</span>
            <ChevronRight size={14} />
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
          Este case documenta o resultado observado na captura apresentada. Resultados locais do Google podem variar conforme localização do usuário, proximidade, relevância, dispositivo, data, personalização, concorrência e alterações do mecanismo de busca. Resultados anteriores não constituem garantia de posições futuras.
        </p>
      </section>

      {/* CTA Final para Ação */}
      <section className="bg-gradient-to-r from-emerald-950/80 via-slate-950 to-cyan-950/80 rounded-3xl p-8 sm:p-12 border border-emerald-500/40 text-center space-y-6 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
        <div className="space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black font-display text-white">
            Quer destacar sua empresa no Google Local e Maps em Curitiba?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Diagnóstico de presença local, otimização de perfil de empresa e estratégia de busca técnica com Omar Skafi.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/auditoria-seo"
            className="btn-primary-gold px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2"
          >
            <span>Solicitar Auditoria Local</span>
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
