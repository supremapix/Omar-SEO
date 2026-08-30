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
  MapPin,
  TrendingUp,
  Award,
  Layers,
  History,
  CheckCircle2,
  Fish,
  Globe,
} from 'lucide-react';

export default function CaseAlevinosCuritibaSeo() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://www.omarseo.digital/resultados/seo-local-e-organico-alevinos-curitiba#article',
    headline: 'Case SEO: Alevinos Curitiba no Google (Local e Orgânico) | Omar SEO',
    description:
      'Evidência real de presença simultânea no bloco local (Google Maps) e nos resultados orgânicos para uma pesquisa de alta amplitude no segmento de piscicultura em Curitiba e Paraná.',
    url: 'https://www.omarseo.digital/resultados/seo-local-e-organico-alevinos-curitiba',
    mainEntityOfPage: 'https://www.omarseo.digital/resultados/seo-local-e-organico-alevinos-curitiba',
    inLanguage: 'pt-BR',
    author: {
      '@id': 'https://www.omarseo.digital/#person',
    },
    publisher: {
      '@id': 'https://www.omarseo.digital/#localbusiness',
    },
    image: {
      '@type': 'ImageObject',
      '@id': 'https://www.omarseo.digital/images/cases/case-alevinos-curitiba-google.png#primaryimage',
      url: 'https://www.omarseo.digital/images/cases/case-alevinos-curitiba-google.png',
      contentUrl: 'https://www.omarseo.digital/images/cases/case-alevinos-curitiba-google.png',
      caption:
        'Alevinos Curitiba no Google Maps e nos resultados orgânicos para a consulta alevinos',
      width: 1000,
      height: 800,
    },
  };

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12 text-slate-200">
      <EnhancedSEO
        title="Case SEO: Alevinos Curitiba no Google (Local e Orgânico) | Omar SEO"
        description="Evidência real de presença simultânea no bloco local (Google Maps) e nos resultados orgânicos para uma pesquisa de alta amplitude no segmento de piscicultura em Curitiba e Paraná."
        canonical="/resultados/seo-local-e-organico-alevinos-curitiba"
        ogImage="https://www.omarseo.digital/images/cases/case-alevinos-curitiba-google.png"
        ogType="article"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Cases e Resultados', item: '/resultados' },
          {
            name: 'Case Alevinos Curitiba (+12 Anos de Parceria)',
            item: '/resultados/seo-local-e-organico-alevinos-curitiba',
          },
        ]}
        schema={[articleSchema]}
      />

      {/* Voltar Link */}
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
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/90 px-3 py-1 rounded-full border border-emerald-500/40 shadow-sm">
              <Award size={14} />
              <span>+12 ANOS DE PARCERIA</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800/60">
              <MapPin size={13} />
              <span>SEO Local (Google Maps) + Orgânico</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight leading-tight">
            Case SEO Local + Orgânico: Alevinos Curitiba e a busca pela palavra-chave "alevinos"
          </h1>

          <p className="text-sm sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Evidência real de presença simultânea no bloco local (Google Maps) e nos resultados orgânicos para uma pesquisa de alta amplitude no segmento de piscicultura em Curitiba e Paraná.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400 border-t border-slate-800/80">
            <span className="flex items-center gap-1.5 text-slate-300">
              <UserCheck size={14} className="text-cyan-400" />
              <span>
                Projeto acompanhado por{' '}
                <Link to="/omar-skafi" className="text-cyan-400 hover:underline font-semibold">
                  Omar Skafi
                </Link>{' '}
                há mais de 12 anos —{' '}
                <Link to="/sobre" className="text-cyan-400 hover:underline font-semibold">
                  Omar SEO
                </Link>
              </span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Building2 size={14} className="text-emerald-400" />
              <span>Colombo / Curitiba e Região Metropolitana — PR</span>
            </span>
          </div>
        </div>
      </div>

      {/* Destaque Principal Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/80 via-slate-950 to-cyan-950/80 border border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.15)] space-y-3 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/90 px-3 py-1 rounded-full border border-emerald-800/60 inline-block">
            HISTÓRIA DE MAIS DE 12 ANOS
          </span>
          <h2 className="text-xl sm:text-2xl font-black font-display text-white">
            De estruturas alugadas à construção de autoridade digital própria
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Há mais de 12 anos acompanhamos a evolução digital da Alevinos Curitiba. No início do projeto, sua presença no Google dependia fortemente de estruturas alugadas e ativos de terceiros. Ao longo dos anos, o trabalho consolidou ativos digitais próprios, SEO Local e autoridade orgânica.
          </p>
        </div>

        <div className="bg-slate-900/90 p-4 rounded-2xl border border-emerald-500/40 text-left space-y-2 shrink-0 max-w-md">
          <div className="text-xs text-slate-400">
            <span className="font-bold text-cyan-400">Consulta de categoria:</span>{' '}
            <span className="font-mono text-yellow-300 font-bold">“alevinos”</span>
          </div>
          <div className="text-xs text-slate-400">
            <span className="font-bold text-emerald-400">Superfícies:</span>{' '}
            <span className="font-bold text-white">Bloco Local (Google Maps) + 1ª Página Orgânica</span>
          </div>
          <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800">
            <span className="text-slate-300">Segundo a própria empresa:</span>{' '}
            <span className="italic text-emerald-300 font-semibold">"Maior revendedor de alevinos do Brasil"</span>
          </div>
        </div>
      </div>

      {/* QUADRO FACTUAL DO CASE #07 */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-slate-800 space-y-6">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-4">
          <FileCheck className="text-emerald-400" size={20} />
          <h2 className="text-lg font-bold font-display text-white">
            Ficha Técnica Factual — Case #07
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
              Identificação do Case
            </span>
            <span className="text-sm font-bold text-emerald-400 font-mono">CASE #07</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
              Empresa
            </span>
            <span className="text-sm font-bold text-white">Alevinos Curitiba &amp; Peixes Vivos</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
              Segmento
            </span>
            <span className="text-sm font-bold text-slate-200">Piscicultura / Peixes Vivos</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
              Consulta Documentada
            </span>
            <span className="text-sm font-bold text-yellow-300 font-mono">
              alevinos
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
              Localização
            </span>
            <span className="text-sm font-bold text-slate-200">Colombo - PR / Curitiba e RMC</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
              Plataforma
            </span>
            <span className="text-sm font-bold text-slate-200">Google</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
              Superfície Documentada
            </span>
            <span className="text-sm font-bold text-cyan-400">Google Maps (Local) + Orgânico</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
              Tipo de Intenção
            </span>
            <span className="text-sm font-bold text-slate-200">
              Comercial + Local + Categoria Ampla
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
              Resultado Observado
            </span>
            <span className="text-sm font-bold text-emerald-400">
              Presença simultânea no Pacote Local e na 1ª Página Orgânica
            </span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#0f1118] border border-slate-800 text-xs text-slate-300 flex items-center justify-between gap-4">
          <span className="flex items-center gap-2">
            <ShieldAlert size={16} className="text-emerald-400 shrink-0" />
            <span>Evidência registrada via captura real de pesquisa no Google.</span>
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
            <Search className="text-emerald-400" size={20} />
            <span>Evidência Visual Documentada</span>
          </h2>
          <span className="text-xs text-slate-400 font-mono">Google Search &amp; Maps — Curitiba/PR</span>
        </div>

        <div className="p-3 bg-slate-950 rounded-3xl border border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.12)] space-y-3">
          <div className="relative group bg-white p-2 sm:p-4 rounded-2xl overflow-hidden cursor-pointer" onClick={() => setIsLightboxOpen(true)}>
            <img
              src="/images/cases/case-alevinos-curitiba-google.png"
              alt="Alevinos Curitiba no Google Maps e nos resultados orgânicos para a consulta alevinos"
              width={1000}
              height={800}
              className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="px-4 py-2 rounded-full bg-slate-900/90 text-emerald-400 text-xs font-bold flex items-center gap-2 border border-emerald-500/50 shadow-xl">
                <Maximize2 size={14} />
                <span>Clique para ampliar captura real</span>
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-400 italic px-2 text-center sm:text-left leading-relaxed">
            Captura real do Google mostrando a Alevinos Curitiba presente no bloco local (Google Maps) e no resultado orgânico para a pesquisa “alevinos”. Resultados de busca podem variar conforme localização, contexto e atualizações dos algoritmos do Google.
          </p>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center overflow-auto"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative max-w-5xl w-full bg-slate-900 rounded-2xl border border-emerald-500/50 p-2 sm:p-4 space-y-3 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 px-2">
              <span className="text-xs font-bold text-emerald-400 font-mono">
                Captura Real — Alevinos Curitiba no Google (Local + Orgânico)
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
              src="/images/cases/case-alevinos-curitiba-google.png"
              alt="Alevinos Curitiba no Google Maps e nos resultados orgânicos para a consulta alevinos"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* SEÇÃO 1: MAIS DE 12 ANOS ACOMPANHANDO A EVOLUÇÃO DIGITAL */}
      <div className="p-8 rounded-3xl bg-slate-950/90 border border-slate-800 space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest font-mono">
            <History size={16} />
            <span>HISTÓRIA DE PARCERIA E LONGEVIDADE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Mais de 12 anos acompanhando a evolução digital da Alevinos Curitiba
          </h2>
        </div>

        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>
            Este case não representa uma ação pontual ou uma campanha recente. Trata-se de uma relação de longo prazo, acompanhando a transformação e a consolidação da presença digital da Alevinos Curitiba no Google ao longo de mais de uma década.
          </p>

          <p className="p-4 rounded-2xl bg-[#0f1118] border border-slate-800 text-slate-200">
            Quando iniciamos o trabalho há mais de 12 anos, grande parte da estrutura utilizada para gerar presença no Google era alugada ou dependente de terceiros. Ao longo dos anos, o projeto evoluiu para a construção de ativos digitais próprios, fortalecimento da marca, presença local e desenvolvimento de autoridade orgânica.
          </p>
        </div>

        {/* LINHA NARRATIVA DE EVOLUÇÃO */}
        <div className="space-y-4 pt-4 border-t border-slate-800">
          <h3 className="text-lg font-bold text-white font-display">
            A jornada de evolução digital
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs">
            <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800 space-y-2 relative">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Etapa 1 — Início
              </span>
              <p className="text-slate-300 font-semibold">
                Presença digital dependente de estruturas alugadas e de terceiros.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block">
                Etapa 2 — Ativos Próprios
              </span>
              <p className="text-slate-300">
                Construção de website próprio, conteúdo semântico e entidade digital.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block">
                Etapa 3 — Autoridade
              </span>
              <p className="text-slate-300">
                Fortalecimento da associação semântica da marca ao produto "alevinos".
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-slate-800 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                Etapa 4 — Presença
              </span>
              <p className="text-slate-300">
                Marca e domínio próprio figurando em buscas diretas e regionais.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0a0a0f] border border-emerald-500/40 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                Etapa 5 — Atual
              </span>
              <p className="text-slate-200 font-semibold">
                Presença simultânea no Google Maps e na 1ª página orgânica para "alevinos".
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SEÇÃO 2: POSICIONAMENTO COMERCIAL DE MERCADO */}
      <div className="p-8 rounded-3xl bg-slate-950/90 border border-slate-800 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono block">
            POSICIONAMENTO DE MERCADO
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Liderança no segmento de piscicultura
          </h2>
        </div>

        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>
            Segundo informações fornecidas pela própria empresa, a <strong className="text-white">Alevinos Curitiba</strong> tornou-se o maior revendedor de alevinos do Brasil, fornecendo filhotes de peixes (mais de 20 espécies, como Dourado, Pintado Gaúcho, Lambari Gigante, Tilápia, entre outros) tanto para pequenos produtores quanto para grandes projetos de piscicultura.
          </p>

          <p>
            É importante esclarecer com transparência que o crescimento empresarial de uma organização envolve múltiplos fatores comerciais, operacionais, administrativos e de atendimento. O papel da estratégia de SEO Local e SEO Orgânico ao longo desses mais de 12 anos foi garantir a **visibilidade e a autoridade digital da empresa**, permitindo que clientes de todo o Estado e do país encontrem a marca exatamente no momento em que buscam por alevinos no Google.
          </p>
        </div>
      </div>

      {/* RELAÇÃO COM OUTROS CASES */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-950 via-cyan-950/40 to-slate-950 border border-cyan-500/40 space-y-4">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
          <Layers size={16} />
          <span>VEJA TAMBÉM OUTROS CASES DOCUMENTADOS</span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold font-display text-white">
          Presença local e autoridade orgânica em múltiplos segmentos
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
          <Link
            to="/resultados/seo-local-ecoservy-corte-e-poda-curitiba"
            className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-colors space-y-2 block group"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block">
              Case #04 — SEO Local Google Maps
            </span>
            <span className="font-bold text-white text-sm group-hover:text-cyan-300 transition-colors block">
              Ecoservy Corte e Poda em Curitiba
            </span>
            <span className="text-slate-400 text-[11px] block">
              Presença destacada no Google Maps para serviços locais de corte e poda de árvores.
            </span>
          </Link>

          <Link
            to="/resultados/ky-drywall-google-ia-curitiba"
            className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-colors space-y-2 block group"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block">
              Case #06 — Busca Generativa GEO / AIO
            </span>
            <span className="font-bold text-white text-sm group-hover:text-cyan-300 transition-colors block">
              KY Drywall &amp; Steel Frame na IA do Google
            </span>
            <span className="text-slate-400 text-[11px] block">
              Citação nominal na Visão geral criada por IA do Google para consultas comerciais.
            </span>
          </Link>
        </div>
      </div>

      {/* TECHNICAL DISCLAIMER */}
      <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-2 text-xs text-slate-400 leading-relaxed">
        <div className="flex items-center gap-2 font-bold text-slate-300">
          <ShieldAlert size={15} className="text-emerald-400" />
          <span>Aviso de Transparência e Isenção de Garantia Futura</span>
        </div>
        <p>
          Este case documenta uma resposta e posicionamento observados na busca do Google no momento da captura. Resultados de busca orgânica e local podem variar conforme localização geográfica, histórico, dispositivo, fatores de personalização e atualizações frequentes dos algoritmos do Google. A evidência não representa garantia de manutenção eterna de posições específicas.
        </p>
      </div>
    </div>
  );
}
