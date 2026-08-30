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
  Blinds,
  Layers,
  Sparkles,
} from 'lucide-react';

export default function CaseRvmPersianasFlorianopolisSeo() {
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://www.omarseo.digital/resultados/rvm-persianas-florianopolis-seo#article',
    headline: 'Case SEO: RVM Persianas em Florianópolis & Barra da Lagoa (SC) | Omar SEO',
    description:
      'Resultado orgânico e local documentado para pesquisas comerciais de persianas sob medida em Florianópolis, Barra da Lagoa e Santa Catarina.',
    url: 'https://www.omarseo.digital/resultados/rvm-persianas-florianopolis-seo',
    mainEntityOfPage: 'https://www.omarseo.digital/resultados/rvm-persianas-florianopolis-seo',
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
        '@id': 'https://www.omarseo.digital/images/cases/case-rvm-persianas-lagoa-sc-google.png#evidence1',
        url: 'https://www.omarseo.digital/images/cases/case-rvm-persianas-lagoa-sc-google.png',
        contentUrl: 'https://www.omarseo.digital/images/cases/case-rvm-persianas-lagoa-sc-google.png',
        caption: 'Resultado orgânico e pacote local no Google para a busca persianas na lagoa sc (RVM Persianas)',
        width: 1000,
        height: 700,
      },
      {
        '@type': 'ImageObject',
        '@id': 'https://www.omarseo.digital/images/cases/case-rvm-persianas-florianopolis-google.png#evidence2',
        url: 'https://www.omarseo.digital/images/cases/case-rvm-persianas-florianopolis-google.png',
        contentUrl: 'https://www.omarseo.digital/images/cases/case-rvm-persianas-florianopolis-google.png',
        caption: 'Resultado orgânico do Google para persianas em florianópolis (RVM Persianas)',
        width: 1000,
        height: 450,
      },
    ],
  };

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12 text-slate-200">
      <EnhancedSEO
        title="Case SEO: RVM Persianas em Florianópolis e Lagoa da Conceição (SC) | Omar SEO"
        description="Presença orgânica e local documentada no Google para RVM Persianas em Florianópolis e Barra da Lagoa / Lagoa da Conceição (SC)."
        canonical="/resultados/rvm-persianas-florianopolis-seo"
        ogImage="https://www.omarseo.digital/images/cases/case-rvm-persianas-lagoa-sc-google.png"
        ogType="article"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Resultados', item: '/resultados' },
          {
            name: 'Case #11 — RVM Persianas (Florianópolis / SC)',
            item: '/resultados/rvm-persianas-florianopolis-seo',
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
              <span>Case #11 — SEO Local + Orgânico</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-950/90 text-amber-400 border border-amber-800/80 text-xs font-extrabold tracking-wider uppercase flex items-center gap-1.5">
              <MapPin size={12} />
              <span>Florianópolis &amp; Região / SC</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
            Case SEO &amp; Busca Local: RVM Persianas em Florianópolis e Lagoa (SC)
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Presença orgânica e geo-específica registrada no Google para pesquisas de persianas sob medida em Florianópolis, Barra da Lagoa, Lagoa da Conceição e Palhoça (Santa Catarina).
          </p>
        </div>
      </header>

      {/* Factual Highlights Box */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800/80 space-y-1">
          <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block">Consultas Comprovadas</span>
          <span className="text-sm font-bold text-yellow-300 font-mono block">“persianas na lagoa sc”</span>
          <span className="text-xs font-bold text-cyan-400 font-mono block">“persianas em florianópolis”</span>
        </div>
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800/80 space-y-1">
          <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block">Superfícies</span>
          <span className="text-base font-bold text-white flex items-center gap-1.5">
            <Globe size={16} className="text-emerald-400" />
            <span>Google Orgânico + Maps</span>
          </span>
        </div>
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800/80 space-y-1">
          <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block">Tipo de Intenção</span>
          <span className="text-base font-bold text-emerald-400">Comercial + Geo Bairros</span>
        </div>
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800/80 space-y-1">
          <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block">Localização Factual</span>
          <span className="text-base font-bold text-cyan-400">Florianópolis &amp; Palhoça / SC</span>
        </div>
      </section>

      {/* Main Evidence Cards */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
              <FileCheck className="text-emerald-400" size={24} />
              <span>Evidências Digitais Documentadas (RVM Persianas em SC)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Capturas reais do Google Search registrando o posicionamento orgânico e a visibilidade de bairro em Santa Catarina.
            </p>
          </div>
        </div>

        {/* EVIDÊNCIA 1: Persianas na Lagoa SC */}
        <div className="bg-slate-950 rounded-3xl p-5 sm:p-7 border-2 border-emerald-500/60 shadow-[0_0_40px_rgba(16,185,129,0.2)] space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-800">
            <div className="space-y-1">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800">
                EVIDÊNCIA #1 — BUSCA GEO-ESPECÍFICA (LAGOA SC)
              </span>
              <h3 className="text-lg font-bold text-white font-mono">
                Pesquisa: “persianas na lagoa sc”
              </h3>
            </div>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950/90 px-3 py-1 rounded-full border border-emerald-800/80 flex items-center gap-1.5">
              <CheckCircle2 size={14} />
              <span>Destaque Orgânico de Bairro</span>
            </span>
          </div>

          <div className="relative group overflow-hidden rounded-2xl border border-slate-800 bg-white p-2">
            <img
              src="/images/cases/case-rvm-persianas-lagoa-sc-google.png"
              alt="Comprovação real do Google para persianas na lagoa sc (RVM Persianas)"
              className="w-full h-auto object-contain cursor-pointer group-hover:scale-[1.01] transition-transform duration-300 rounded-xl"
              onClick={() => setActiveLightboxImage('/images/cases/case-rvm-persianas-lagoa-sc-google.png')}
            />
            <button
              onClick={() => setActiveLightboxImage('/images/cases/case-rvm-persianas-lagoa-sc-google.png')}
              className="absolute bottom-4 right-4 bg-slate-950/90 hover:bg-emerald-950 text-emerald-400 border border-emerald-800/80 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity shadow-lg"
            >
              <Maximize2 size={14} />
              <span>Ampliar Imagem de Comprovação</span>
            </button>
          </div>

          <p className="text-xs text-slate-300 italic text-center sm:text-left leading-relaxed">
            Comprovação real anexada: O projeto <strong>RVM Persianas</strong> (<code>rvmpersianas.com.br</code>) surge em destaque orgânico direto para a pesquisa regional <strong>“persianas na lagoa sc”</strong> com a página dedicada de Barra da Lagoa em Florianópolis.
          </p>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
              <span className="font-bold text-emerald-400">Domínio / Marca:</span>
              <span className="font-mono text-slate-200">RVM Persianas (rvmpersianas.com.br)</span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
              <span className="font-bold text-emerald-400">Título Orgânico Exibido:</span>
              <span className="font-mono text-slate-200">Persianas Sob Medida em Barra da Lagoa</span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-bold text-emerald-400">Snippet no Google:</span>
              <span className="font-mono text-slate-300 italic">
                “A RVM Persianas é especializada na fabricação e instalação de persianas sob medida no bairro Barra da Lagoa em Florianópolis...”
              </span>
            </div>
          </div>
        </div>

        {/* EVIDÊNCIA 2: Persianas em Florianópolis */}
        <div className="bg-slate-950 rounded-3xl p-5 sm:p-6 border border-cyan-500/40 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-800">
            <div className="space-y-1">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800">
                EVIDÊNCIA #2 — BUSCA DA CAPITAL (FLORIANÓPOLIS)
              </span>
              <h3 className="text-base font-bold text-white font-mono">
                Pesquisa: “persianas em florianópolis”
              </h3>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl border border-slate-800 bg-white p-2">
            <img
              src="/images/cases/case-rvm-persianas-florianopolis-google.png"
              alt="Resultado orgânico no Google para persianas em florianopolis (RVM Persianas)"
              className="w-full h-auto object-contain cursor-pointer group-hover:scale-[1.01] transition-transform duration-300 rounded-xl"
              onClick={() => setActiveLightboxImage('/images/cases/case-rvm-persianas-florianopolis-google.png')}
            />
            <button
              onClick={() => setActiveLightboxImage('/images/cases/case-rvm-persianas-florianopolis-google.png')}
              className="absolute bottom-4 right-4 bg-slate-950/90 hover:bg-cyan-950 text-cyan-400 border border-cyan-800/80 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity shadow-lg"
            >
              <Maximize2 size={14} />
              <span>Ampliar Imagem de Comprovação</span>
            </button>
          </div>

          <p className="text-xs text-slate-300 italic text-center sm:text-left leading-relaxed">
            Captura registrando a presença orgânica da <strong>RVM Persianas</strong> para a busca ampla da capital <strong>“persianas em florianópolis”</strong>, exibindo os valores por modelo (Rolô, Horizontal, Romana) diretamente no snippet de pesquisa.
          </p>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
              <span className="font-bold text-cyan-400">Domínio / URL:</span>
              <span className="font-mono text-slate-200">https://rvmpersianas.com.br</span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-bold text-cyan-400">Título Exibido:</span>
              <span className="font-mono text-slate-200">RVM Persianas | Persianas Sob Medida em Florianópolis e ...</span>
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
                Comprovação de Busca Orgânica — RVM Persianas (Florianópolis / SC)
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

      {/* Structured Technical Facts */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
            Quadro Factual do Case #11 (RVM Persianas)
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Análise objetiva dos elementos semânticos e da estratégia de SEO local aplicada a cortinas e persianas sob medida em Santa Catarina.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <Blinds size={18} />
              <span>1. Cluster Semântico de Produtos &amp; Modelos</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Diferenciação clara dos modelos de persiana (Rolô, Horizontal 50mm, Romana, Motorizadas e Cortinas) associados às especificações de cada tipo de ambiente (residencial, escritórios e sacadas).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
              <MapPin size={18} />
              <span>2. Regionalização por Bairros e Cidades de SC</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Criação de autoridade semântica por bairros estratégicos de Florianópolis (Barra da Lagoa, Lagoa da Conceição, Centro, Trindade) e cidades adjacentes como Palhoça e São José.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-yellow-400 font-bold text-sm">
              <Layers size={18} />
              <span>3. Dados Estruturados Schema.org LocalBusiness</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Uso de microdados <code>LocalBusiness</code> e <code>Product</code> definindo explicitamente área de atendimento (<code>areaServed</code>), faixas de preço por m² e especificações de atendimento em domicilio.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
              <Sparkles size={18} />
              <span>4. Otimização de Snippets com Preços por m²</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Apresentação direta das faixas de investimento por metro quadrado diretamente nos resultados do Google, atraindo cliques altamente qualificados com real intenção de compra.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Navigation & Call to Action */}
      <footer className="pt-8 border-t border-slate-800 space-y-6">
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-950 border border-emerald-500/40 flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-lg sm:text-xl font-bold font-display text-white">
              Quer posicionar sua empresa nos primeiros lugares do Google?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Conheça a metodologia autoral Omar SEO 4D para alavancar sua visibilidade orgânica e no Google Maps em Curitiba, Santa Catarina e em todo o Brasil.
            </p>
          </div>

          <Link
            to="/auditoria-seo"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-xs sm:text-sm inline-flex items-center gap-2 shrink-0 transition-all shadow-[0_0_25px_rgba(16,185,129,0.3)]"
          >
            <span>Solicitar Análise de SEO</span>
            <ChevronRight size={16} />
          </Link>
        </div>
      </footer>
    </div>
  );
}
