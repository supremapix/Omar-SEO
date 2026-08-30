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
  Shield,
  Layers,
  Sparkles,
} from 'lucide-react';

export default function CaseConsultoraLooviSeo() {
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://www.omarseo.digital/resultados/consultora-loovi-google-seo#article',
    headline: 'Case SEO: Consultora Loovi no Google | Omar SEO',
    description:
      'Evidência real de presença orgânica para uma consulta diretamente relacionada à atividade profissional e à marca pesquisada.',
    url: 'https://www.omarseo.digital/resultados/consultora-loovi-google-seo',
    mainEntityOfPage: 'https://www.omarseo.digital/resultados/consultora-loovi-google-seo',
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
        '@id': 'https://www.omarseo.digital/images/cases/case-consultora-loovi-google-organico.png#evidence1',
        url: 'https://www.omarseo.digital/images/cases/case-consultora-loovi-google-organico.png',
        contentUrl: 'https://www.omarseo.digital/images/cases/case-consultora-loovi-google-organico.png',
        caption: 'Captura real do Google registrando consultoraloovi.com.br para a consulta consultora loovi, com resultado associado à Consultora Barbara Duraes em Curitiba.',
        width: 1000,
        height: 580,
      },
    ],
  };

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12 text-slate-200">
      <EnhancedSEO
        title="Case SEO: Consultora Loovi no Google | Omar SEO"
        description="Evidência real de presença orgânica para uma consulta diretamente relacionada à atividade profissional e à marca pesquisada (consultoraloovi.com.br)."
        canonical="/resultados/consultora-loovi-google-seo"
        ogImage="https://www.omarseo.digital/images/cases/case-consultora-loovi-google-organico.png"
        ogType="article"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Resultados', item: '/resultados' },
          {
            name: 'Case #12 — Consultora Loovi',
            item: '/resultados/consultora-loovi-google-seo',
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
              <span>Case #12 — SEO Orgânico + Entidade Profissional</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-950/90 text-amber-400 border border-amber-800/80 text-xs font-extrabold tracking-wider uppercase flex items-center gap-1.5">
              <MapPin size={12} />
              <span>Curitiba / PR</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
            Case SEO: Consultora Loovi encontrada no Google
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Evidência real de presença orgânica para uma consulta diretamente relacionada à atividade profissional e à marca pesquisada.
          </p>
        </div>
      </header>

      {/* Factual Highlights Box (Quadro Factual - Regra 9) */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800/80 space-y-1">
          <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block">Empresa / Projeto</span>
          <span className="text-sm font-bold text-white block">Consultora Loovi</span>
          <span className="text-xs font-bold text-emerald-400 font-mono block">consultoraloovi.com.br</span>
        </div>
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800/80 space-y-1">
          <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block">Profissional Apresentada</span>
          <span className="text-sm font-bold text-yellow-300 flex items-center gap-1.5">
            <UserCheck size={14} />
            <span>Consultora Barbara Duraes</span>
          </span>
        </div>
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800/80 space-y-1">
          <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block">Consulta Documentada</span>
          <span className="text-base font-bold text-cyan-400 font-mono">“consultora loovi”</span>
        </div>
        <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800/80 space-y-1">
          <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block">Mercado &amp; Segmento</span>
          <span className="text-xs font-bold text-white block">Curitiba / PR</span>
          <span className="text-[11px] text-slate-400 block">Seguro Auto / Consultoria</span>
        </div>
      </section>

      {/* Destaque Visual & Evidência Original (Regras 1, 3, 4, 10, 11) */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
              <FileCheck className="text-emerald-400" size={24} />
              <span>Evidência Digital Documentada (consultoraloovi.com.br)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Captura original do Google Search registrando o posicionamento orgânico e a associação semântica de entidade profissional.
            </p>
          </div>
        </div>

        {/* EVIDÊNCIA CARD */}
        <div className="bg-slate-950 rounded-3xl p-5 sm:p-7 border-2 border-emerald-500/60 shadow-[0_0_40px_rgba(16,185,129,0.2)] space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-800">
            <div className="space-y-1">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800">
                RESULTADO DOCUMENTADO — BUSCA COMERCIAL
              </span>
              <h3 className="text-lg font-bold text-white font-mono">
                Pesquisa: “consultora loovi”
              </h3>
            </div>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950/90 px-3 py-1 rounded-full border border-emerald-800/80 flex items-center gap-1.5">
              <CheckCircle2 size={14} />
              <span>Resultado Orgânico Confirmado</span>
            </span>
          </div>

          <div className="relative group overflow-hidden rounded-2xl border border-slate-800 bg-white p-2">
            <img
              src="/images/cases/case-consultora-loovi-google-organico.png"
              alt="Consultora Loovi presente no Google para a pesquisa consultora loovi"
              className="w-full h-auto object-contain cursor-pointer group-hover:scale-[1.01] transition-transform duration-300 rounded-xl"
              onClick={() => setActiveLightboxImage('/images/cases/case-consultora-loovi-google-organico.png')}
            />
            <button
              onClick={() => setActiveLightboxImage('/images/cases/case-consultora-loovi-google-organico.png')}
              className="absolute bottom-4 right-4 bg-slate-950/90 hover:bg-emerald-950 text-emerald-400 border border-emerald-800/80 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity shadow-lg"
            >
              <Maximize2 size={14} />
              <span>Ampliar Captura de Comprovação</span>
            </button>
          </div>

          <p className="text-xs text-slate-300 italic text-center sm:text-left leading-relaxed">
            Captura real do Google registrando consultoraloovi.com.br para a consulta ‘consultora loovi’, com resultado associado à Consultora Barbara Duraes em Curitiba.
          </p>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
              <span className="font-bold text-emerald-400">Domínio Documentado:</span>
              <span className="font-mono text-slate-200">consultoraloovi.com.br (https://www.consultoraloovi.com.br)</span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
              <span className="font-bold text-emerald-400">Título Exibido no Snippet:</span>
              <span className="font-mono text-slate-200">“Seguro Auto Loovi em Curitiba | Consultora Barbara Duraes”</span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-bold text-emerald-400">Termos Destacados no Google:</span>
              <span className="font-mono text-slate-300 italic">
                “Seguro auto digital sem burocracia nem análise de perfil do condutor. 100% Tabela FIPE, guincho 24h em todo Brasil e atendimento com a executiva Bárbara ...”
              </span>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 italic">
            * A composição e as posições dos resultados podem variar conforme data, localização, dispositivo, personalização e atualizações do Google.
          </p>
        </div>
      </section>

      {/* Regra 4: Validação do Bloco Orgânico vs Patrocinado */}
      <section className="bg-slate-950/90 p-6 rounded-3xl border border-slate-800 space-y-3">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
          <ShieldAlert size={18} />
          <span>Validação de Classificação: Resultado Orgânico</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          A captura documenta a presença orgânica de <code>consultoraloovi.com.br</code> no Google para a consulta “consultora loovi”. Embora a interface exiba a indicação “Resultado Patrocinado” na parte superior do bloco de anúncios, o resultado referente à <strong>Consultora Barbara Duraes</strong> situa-se inequivocamente na área de resultados orgânicos não pagos da SERP.
        </p>
      </section>

      {/* Regra 5: Quando o consumidor procura pelo profissional associado à marca */}
      <section className="space-y-4 bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
          <UserCheck size={22} className="text-cyan-400" />
          <span>Quando o consumidor procura pelo profissional associado à marca</span>
        </h2>
        
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          A consulta pesquisada é <strong>“consultora loovi”</strong>. Esta busca combina dois núcleos conceituais distintos:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs my-3">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <span className="font-extrabold text-cyan-400 uppercase tracking-wider block">CONSULTORA</span>
            <span className="text-slate-300">Indica a busca por uma profissional / intermediária autorizada para atendimento direto.</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <span className="font-extrabold text-amber-400 uppercase tracking-wider block">LOOVI</span>
            <span className="text-slate-300">Indica a marca ou produto de seguro auto buscado pelo consumidor.</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Notadamente, a expressão digitada pelo usuário <strong>NÃO contém a palavra “Curitiba”</strong> nem o nome próprio <strong>“Barbara Duraes”</strong>. Mesmo assim, o resultado documentado na SERP associa diretamente a intenção de busca à página regionalizada: <em>“Seguro Auto Loovi em Curitiba | Consultora Barbara Duraes”</em>.
        </p>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
          Apresentamos este fato como evidência objetiva de associação semântica observada na SERP para buscas comerciais associadas a marcas e profissionais.
        </p>
      </section>

      {/* Regra 12 & 13: Entidade, SEO Semântico e Separação de Marcas */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
            Estruturação Semântica e Relações de Entidade
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Análise técnica de como páginas profissionais estruturam relações semânticas inteligíveis para os motores de busca.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <Layers size={18} />
              <span>1. Mapeamento de Relações de Entidade</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              O SEO moderno permite estruturar conexões claras entre a profissional (Barbara Duraes), sua atividade consultiva, o serviço oferecido (seguro auto digital) e a área de atendimento regional (Curitiba/PR).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <Shield size={18} />
              <span>2. Preservação e Separação de Entidades</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              É essencial destacar que <code>consultoraloovi.com.br</code> representa o canal profissional independente da Consultora Barbara Duraes. O trabalho de otimização respeita a separação entre a marca corporativa nacional e o canal de consultoria autorizado.
            </p>
          </div>
        </div>

        {/* Technical Relationships Diagram */}
        <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-3 text-xs">
          <h3 className="font-bold text-white text-sm">Relações Semânticas Mapeadas na Estrutura do Projeto</h3>
          <div className="flex flex-wrap gap-2 text-slate-300 font-mono">
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">Barbara Duraes → Consultora Loovi</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">Consultora Loovi → Seguro Auto Digital</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">Consultora Loovi → Curitiba / PR</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">consultoraloovi.com.br → Barbara Duraes</span>
          </div>
        </div>
      </section>

      {/* Regra 15: Experiência Multissetorial em Seguros e Serviços Financeiros */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
        <h2 className="text-lg sm:text-xl font-bold font-display text-white flex items-center gap-2">
          <Sparkles className="text-emerald-400" size={20} />
          <span>Experiência Comprovada em Mercados Competitivos</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Este case acrescenta mais um segmento ao conjunto de evidências práticas da <Link to="/metodo" className="text-cyan-400 underline font-semibold">metodologia Omar SEO 4D</Link>: o setor de <strong>seguros e serviços automotivos</strong>. Em vez de utilizar apenas alegações institucionais de experiência, a Omar SEO documenta factualmente a relação direta entre o mercado, a consulta pesquisada e a evidência comprovada na SERP.
        </p>
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
                Comprovação de Busca Orgânica — Consultora Loovi (Curitiba / PR)
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
              alt="Consultora Loovi presente no Google para a pesquisa consultora loovi"
              className="w-full h-auto rounded-xl border border-slate-800 max-h-[85vh] object-contain mx-auto bg-white p-2"
            />
          </div>
        </div>
      )}

      {/* Internal Navigation & Call to Action */}
      <footer className="pt-8 border-t border-slate-800 space-y-6">
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-950 border border-emerald-500/40 flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-lg sm:text-xl font-bold font-display text-white">
              Quer estruturar a visibilidade da sua empresa ou atividade profissional no Google?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Conheça a metodologia autoral Omar SEO 4D para posicionar seu projeto em buscas comerciais e de intenção de compra em Curitiba e em todo o Brasil.
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
