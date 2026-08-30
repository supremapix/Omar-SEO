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
  MapPin,
  CheckCircle2,
  Award,
  ExternalLink,
  Truck,
  Package,
  Clock,
  Navigation,
} from 'lucide-react';

export default function CaseMotofreteCentroSaoPauloSeo() {
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://www.omarseo.digital/resultados/motofrete-centro-sao-paulo-seo#article',
    headline: 'Case SEO: Motofrete no Centro de São Paulo & Rota SP → PR | Omar SEO',
    description:
      'Resultado orgânico documentado (#1 no Google) para pesquisas de serviços de motofrete de São Paulo para o Paraná e no Centro de São Paulo.',
    url: 'https://www.omarseo.digital/resultados/motofrete-centro-sao-paulo-seo',
    mainEntityOfPage: 'https://www.omarseo.digital/resultados/motofrete-centro-sao-paulo-seo',
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
        '@id': 'https://www.omarseo.digital/images/cases/case-motofrete-sp-para-parana-google.png#evidence1',
        url: 'https://www.omarseo.digital/images/cases/case-motofrete-sp-para-parana-google.png',
        contentUrl: 'https://www.omarseo.digital/images/cases/case-motofrete-sp-para-parana-google.png',
        caption: 'Resultado #1 no Google para a busca Frete moto de são paulo para o paraná',
        width: 1000,
        height: 700,
      },
      {
        '@type': 'ImageObject',
        '@id': 'https://www.omarseo.digital/images/cases/case-motofrete-centro-sao-paulo-google.png#evidence2',
        url: 'https://www.omarseo.digital/images/cases/case-motofrete-centro-sao-paulo-google.png',
        contentUrl: 'https://www.omarseo.digital/images/cases/case-motofrete-centro-sao-paulo-google.png',
        caption: 'Resultado orgânico do Motofrete para busca Motofrete Centro São Paulo no Google',
        width: 1000,
        height: 380,
      },
    ],
  };

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12 text-slate-200">
      <EnhancedSEO
        title="Case SEO: Motofrete no Centro de São Paulo | Omar SEO"
        description="Resultado orgânico documentado para uma pesquisa local diretamente relacionada ao serviço de motofrete/motoboy no Centro de São Paulo."
        canonical="/resultados/motofrete-centro-sao-paulo-seo"
        ogImage="https://www.omarseo.digital/images/cases/case-motofrete-centro-sao-paulo-google.png"
        ogType="article"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Resultados', item: '/resultados' },
          {
            name: 'Case #10 — Motofrete Centro de São Paulo',
            item: '/resultados/motofrete-centro-sao-paulo-seo',
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
      <header className="space-y-6 relative overflow-hidden rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-cyan-500/40 shadow-[0_0_50px_rgba(34,211,238,0.12)]">
        <BackgroundVideo src="https://img.supremasite.com.br/omar-seo.mp4" />
        <ConstellationGrid />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-cyan-950/90 text-cyan-400 border border-cyan-800/80 text-xs font-extrabold tracking-wider uppercase">
              Case #10 — SEO Orgânico + Local
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-950/90 text-emerald-400 border border-emerald-800/80 text-xs font-extrabold tracking-wider uppercase flex items-center gap-1.5">
              <MapPin size={12} />
              <span>São Paulo, SP</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
            Case SEO Local: Motofrete encontrado no Centro de São Paulo
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Resultado orgânico documentado para uma pesquisa local diretamente relacionada ao serviço de motofrete/motoboy no Centro de São Paulo.
          </p>
        </div>
      </header>

      {/* Factual Highlights Box */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800/80 space-y-1">
          <span className="text-xs text-slate-300 uppercase font-bold tracking-wider block">Consulta Documentada</span>
          <span className="text-base font-bold text-cyan-400 font-mono">“Motofrete centro São Paulo”</span>
        </div>
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800/80 space-y-1">
          <span className="text-xs text-slate-300 uppercase font-bold tracking-wider block">Superfície</span>
          <span className="text-base font-bold text-white flex items-center gap-1.5">
            <Globe size={16} className="text-cyan-400" />
            <span>Google Search</span>
          </span>
        </div>
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800/80 space-y-1">
          <span className="text-xs text-slate-300 uppercase font-bold tracking-wider block">Tipo de Intenção</span>
          <span className="text-base font-bold text-emerald-400">Serviço + Localização</span>
        </div>
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800/80 space-y-1">
          <span className="text-xs text-slate-300 uppercase font-bold tracking-wider block">Região Geográfica</span>
          <span className="text-base font-bold text-white flex items-center gap-1.5">
            <Navigation size={16} className="text-amber-400" />
            <span>Centro de São Paulo / SP</span>
          </span>
        </div>
      </section>

      {/* Main Evidence Cards */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
              <FileCheck className="text-emerald-400" size={24} />
              <span>Evidências Digitais Documentadas (#1 no Google)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Capturas reais do Google Search comprovando o excelente posicionamento orgânico em buscas comerciais de transporte e motofrete.
            </p>
          </div>
        </div>

        {/* EVIDÊNCIA 1: Imagem Real Anexada — Frete moto de SP para o PR (#1 NO GOOGLE) */}
        <div className="bg-slate-950 rounded-3xl p-5 sm:p-7 border-2 border-emerald-500/60 shadow-[0_0_40px_rgba(16,185,129,0.2)] space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-800">
            <div className="space-y-1">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800">
                EVIDÊNCIA #1 — 1º LUGAR ABSOLUTO NO GOOGLE (SP → PR)
              </span>
              <h3 className="text-lg font-bold text-white font-mono">
                Pesquisa: “Frete moto de são paulo para o paraná”
              </h3>
            </div>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950/90 px-3 py-1 rounded-full border border-emerald-800/80 flex items-center gap-1.5">
              <Award size={14} />
              <span>Topo Orgânico #1</span>
            </span>
          </div>

          <div className="relative group overflow-hidden rounded-2xl border border-slate-800 bg-white p-2">
            <img
              src="/images/cases/case-motofrete-sp-para-parana-google.png"
              alt="Comprovação de busca orgânica #1 no Google para Frete moto de são paulo para o paraná (MotoFrete Curitiba)"
              className="w-full h-auto object-contain cursor-pointer group-hover:scale-[1.01] transition-transform duration-300 rounded-xl"
              onClick={() => setActiveLightboxImage('/images/cases/case-motofrete-sp-para-parana-google.png')}
            />
            <button
              onClick={() => setActiveLightboxImage('/images/cases/case-motofrete-sp-para-parana-google.png')}
              className="absolute bottom-4 right-4 bg-slate-950/90 hover:bg-emerald-950 text-emerald-400 border border-emerald-800/80 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity shadow-lg"
            >
              <Maximize2 size={14} />
              <span>Ampliar Imagem de Comprovação</span>
            </button>
          </div>

          <p className="text-xs text-slate-300 italic text-center sm:text-left leading-relaxed">
            Comprovação real anexada: O projeto <strong>MotoFrete Curitiba</strong> aparece na <strong>1ª posição orgânica do Google</strong> para a pesquisa comercial interestadual “Frete moto de são paulo para o paraná”, desbancando grandes portais de frete e transportadoras nacionais (Zurcad, Camion, Fretebras).
          </p>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
              <span className="font-bold text-emerald-400">Domínio / Marca Posicionada:</span>
              <span className="font-mono text-slate-200">MotoFrete Curitiba (motofretecuritiba.com.br)</span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
              <span className="font-bold text-emerald-400">Título Exibido no Google:</span>
              <span className="font-mono text-slate-200">Serviços Moto Frete Curitiba - Moto Boy, HR, Van e Utilitários</span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-bold text-emerald-400">Snippet no Topo Orgânico:</span>
              <span className="font-mono text-slate-300 italic">
                “Serviços completos: Moto Boy Curitiba, Entregas HR, Van e Utilitários. Entregas 24h...”
              </span>
            </div>
          </div>
        </div>

        {/* EVIDÊNCIA 2: Motofrete Centro São Paulo */}
        <div className="bg-slate-950 rounded-3xl p-5 sm:p-6 border border-cyan-500/40 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-800">
            <div className="space-y-1">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800">
                EVIDÊNCIA #2 — BUSCA LOCAL EM SÃO PAULO
              </span>
              <h3 className="text-base font-bold text-white font-mono">
                Pesquisa: “Motofrete centro São Paulo”
              </h3>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            <img
              src="/images/cases/case-motofrete-centro-sao-paulo-google.png"
              alt="Resultado orgânico do Motofrete para busca Motofrete Centro São Paulo no Google"
              className="w-full h-auto object-cover cursor-pointer group-hover:scale-[1.01] transition-transform duration-300"
              onClick={() => setActiveLightboxImage('/images/cases/case-motofrete-centro-sao-paulo-google.png')}
            />
            <button
              onClick={() => setActiveLightboxImage('/images/cases/case-motofrete-centro-sao-paulo-google.png')}
              className="absolute bottom-3 right-3 bg-slate-950/90 hover:bg-cyan-950 text-cyan-400 border border-cyan-800/80 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity"
            >
              <Maximize2 size={14} />
              <span>Ampliar Imagem</span>
            </button>
          </div>

          <p className="text-xs text-slate-300 italic text-center sm:text-left leading-relaxed">
            Captura registrando presença orgânica do projeto Motofrete para a consulta “Motofrete centro São Paulo”.
          </p>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
              <span className="font-bold text-cyan-400">Domínio Apresentado:</span>
              <span className="font-mono text-slate-200">motofrete.servicosnobairro.com.br</span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-bold text-cyan-400">Título Exibido:</span>
              <span className="font-mono text-slate-200">Motoboy no Centro, São Paulo | Motofrete e Coletas</span>
            </div>
          </div>
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
                Comprovação de Busca Orgânica (#1 no Google) — Omar SEO
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
              alt="Comprovação de busca orgânica no Google"
              className="w-full h-auto rounded-xl border border-slate-800 max-h-[85vh] object-contain mx-auto bg-white p-2"
            />
          </div>
        </div>
      )}

      {/* Section: Serviço certo na localização certa */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-cyan-500/30 space-y-6">
        <div className="space-y-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-800/60 inline-block">
            Análise Estrutural da Consulta
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
            Serviço certo na localização certa
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            A consulta documentada é um exemplo clássico de busca comercial com altíssima intenção de contratação imediata, combinando explicitamente a modalidade do serviço, o bairro estratégico e a metrópole:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
              <Truck size={18} />
              <span>Motofrete</span>
            </div>
            <span className="text-xs text-slate-300 block font-mono">Tipo de Serviço</span>
            <p className="text-xs text-slate-300 leading-relaxed">
              Define a modalidade logística imediata desejada pelo usuário (coletas, entregas de documentos e pequenos volumes).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <MapPin size={18} />
              <span>Centro</span>
            </div>
            <span className="text-xs text-slate-300 block font-mono">Bairro / Região Geográfica</span>
            <p className="text-xs text-slate-300 leading-relaxed">
              Filtra a busca para a região central de São Paulo, onde a velocidade de deslocamento e proximidade são determinantes.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <Building2 size={18} />
              <span>São Paulo</span>
            </div>
            <span className="text-xs text-slate-300 block font-mono">Cidade / Metrópole</span>
            <p className="text-xs text-slate-300 leading-relaxed">
              Delimita a cidade e estabelece a precisão de geolocalização no maior mercado corporativo da América Latina.
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4">
          É uma intenção local e comercial, na qual o usuário procura um prestador relacionado ao serviço dentro de uma área geográfica específica. Para obter visibilidade orgânica nessa categoria de busca, o projeto precisa articular clareza semântica entre a oferta do serviço e o perímetro territorial de atendimento.
        </p>
      </section>

      {/* Section: Atuação Nacional & Experiência Fora de Curitiba */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-emerald-500/30 space-y-6">
        <div className="space-y-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800/60 inline-block">
            Alcance Nacional & Prova Factual
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
            Experiência técnica além de Curitiba
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Este case contribui para demonstrar factualmente que a metodologia de engenharia de visibilidade e SEO desenvolvida por Omar SEO é aplicável a mercados competitivos em todo o Brasil.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            Veja uma evidência real de projeto encontrado organicamente para uma consulta localizada no Centro de São Paulo. A presença orgânica na maior capital econômica do país ratifica a capacidade do framework técnico de posicionar páginas em mercados densos e altamente concorridos.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/consultoria-seo-brasil"
              className="text-xs font-bold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 bg-emerald-950/80 px-3.5 py-2 rounded-xl border border-emerald-800/60 transition-colors"
            >
              <span>Consultoria SEO Brasil</span>
              <ChevronRight size={14} />
            </Link>
            <Link
              to="/especialista-seo-brasil"
              className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5 bg-cyan-950/80 px-3.5 py-2 rounded-xl border border-cyan-800/60 transition-colors"
            >
              <span>Especialista SEO Brasil</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section: Relações Semânticas do Dominio */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
        <h2 className="text-lg sm:text-xl font-bold font-display text-white">
          Relações Semânticas e Conexões Térmicas do Case
        </h2>
        <p className="text-xs text-slate-300 leading-relaxed">
          A arquitetura semântica deste resultado consolida nós conceituais entre a oferta operacional de transporte rápido e o contexto geográfico da capital paulista:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-2">
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <span className="text-cyan-400 font-bold block">Motofrete</span>
            <span className="text-slate-300 text-[11px] font-mono">→ Motoboy / Entregas</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <span className="text-cyan-400 font-bold block">Motofrete</span>
            <span className="text-slate-300 text-[11px] font-mono">→ Coletas / Documentos</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <span className="text-cyan-400 font-bold block">Localização</span>
            <span className="text-slate-300 text-[11px] font-mono">→ Centro / São Paulo</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <span className="text-cyan-400 font-bold block">Omar SEO</span>
            <span className="text-slate-300 text-[11px] font-mono">→ SEO Local Nacional</span>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="p-6 rounded-2xl bg-amber-950/20 border border-amber-800/40 space-y-3">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
          <ShieldAlert size={16} />
          <span>Nota Factual de Transparência</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed font-mono">
          Este case registra um resultado observado na captura apresentada. Resultados orgânicos podem variar conforme localização, data, dispositivo, personalização, concorrência e atualizações do Google. O resultado documentado não representa garantia de posições futuras.
        </p>
      </section>

      {/* Footer Navigation CTA */}
      <footer className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <Link
          to="/resultados"
          className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Ver todos os 10 Cases no Hub de Resultados</span>
        </Link>
        <Link
          to="/contato"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-extrabold transition-colors shadow-lg shadow-cyan-500/20"
        >
          <span>Falar com Omar Skafi no WhatsApp</span>
          <ChevronRight size={14} />
        </Link>
      </footer>
    </div>
  );
}
