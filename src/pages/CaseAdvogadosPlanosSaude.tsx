import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import ConstellationGrid from '../components/ui/constellation-grid';
import { BackgroundVideo } from '../components/BackgroundVideo';
import {
  Award,
  Search,
  CheckCircle2,
  ShieldAlert,
  FileCheck,
  Zap,
  ExternalLink,
  Scale,
  Maximize2,
  X,
  UserCheck,
  Building2,
  ArrowLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

export default function CaseAdvogadosPlanosSaude() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://www.omarseo.digital/resultados/seo-advogados-planos-de-saude#article',
    headline: 'Case SEO: Advogados de Planos de Saúde na Primeira Página do Google',
    description:
      'Documentação factual de presença orgânica na primeira página do Google para a busca advogados planos de saúde.',
    url: 'https://www.omarseo.digital/resultados/seo-advogados-planos-de-saude',
    mainEntityOfPage: 'https://www.omarseo.digital/resultados/seo-advogados-planos-de-saude',
    inLanguage: 'pt-BR',
    author: {
      '@id': 'https://www.omarseo.digital/#person',
    },
    publisher: {
      '@id': 'https://www.omarseo.digital/#localbusiness',
    },
    image: {
      '@type': 'ImageObject',
      '@id': 'https://www.omarseo.digital/images/cases/case-seo-advogados-planos-de-saude-google.png#primaryimage',
      url: 'https://www.omarseo.digital/images/cases/case-seo-advogados-planos-de-saude-google.png',
      contentUrl: 'https://www.omarseo.digital/images/cases/case-seo-advogados-planos-de-saude-google.png',
      caption:
        'Captura real de resultado orgânico observado no Google para a busca advogados planos de saúde',
      width: 1045,
      height: 262,
    },
  };

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12 text-slate-200">
      <EnhancedSEO
        title="Case SEO para Advogados de Planos de Saúde | Omar SEO"
        description="Case documentado de presença orgânica na primeira página do Google em consulta competitiva relacionada a advogados de planos de saúde em Curitiba."
        canonical="/resultados/seo-advogados-planos-de-saude"
        ogImage="https://www.omarseo.digital/images/cases/case-seo-advogados-planos-de-saude-google.png"
        ogType="article"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Cases e Resultados', item: '/resultados' },
          {
            name: 'Case SEO Advogados Planos de Saúde',
            item: '/resultados/seo-advogados-planos-de-saude',
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
      <div className="relative p-8 sm:p-12 rounded-3xl bg-slate-950/90 border border-yellow-500/30 shadow-[0_0_40px_rgba(250,204,21,0.15)] overflow-hidden">
        <BackgroundVideo
          src="https://img.supremasite.com.br/seo-omar.mp4"
          opacity={0.35}
          overlayClassName="bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/60 to-[#0a0a0f]/90"
        />
        <ConstellationGrid className="absolute inset-0 z-0 opacity-30 pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-yellow-400 bg-yellow-950/80 px-3 py-1 rounded-full border border-yellow-500/30">
            <Scale size={14} />
            <span>Advocacia / Direito da Saúde</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight leading-tight">
            Case SEO: Advogados de Planos de Saúde na Primeira Página do Google
          </h1>

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
              <span>Curitiba — PR</span>
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
          Este case documenta um resultado orgânico observado no Google para a busca{' '}
          <strong className="text-yellow-300 font-semibold">“advogados planos de saúde”</strong>. A captura real da página de resultados mostra uma página do domínio{' '}
          <strong className="text-white font-semibold">cicarelli.adv.br</strong> presente na primeira página, associada a advocacia especializada em planos de saúde em Curitiba.
        </p>
        <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
          O case é apresentado como demonstração de experiência prática em SEO para um segmento altamente competitivo, no qual escritórios de advocacia buscam posicionar seus serviços jurídicos para clientes em momentos de urgência ou necessidade legal.
        </p>
      </section>

      {/* Seção de Resultado Documentado */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
          <FileCheck size={20} className="text-emerald-400" />
          <span>Resultado Documentado</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Consulta de Busca
            </span>
            <span className="text-base font-bold text-yellow-300 font-mono">
              advogados planos de saúde
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Resultado Registrado
            </span>
            <span className="text-base font-bold text-emerald-400">
              Primeira página do Google
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Segmento de Atuação
            </span>
            <span className="text-base font-bold text-white">
              Advocacia / Direito da Saúde
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Localização no Resultado
            </span>
            <span className="text-base font-bold text-cyan-300">
              Curitiba / Paraná
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Mecanismo de Busca
            </span>
            <span className="text-base font-bold text-white">
              Google Search
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Tipo de Presença
            </span>
            <span className="text-base font-bold text-emerald-400">
              Resultado Orgânico
            </span>
          </div>
        </div>
      </section>

      {/* Seção Inserir a Captura Real */}
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
        <div className="p-4 sm:p-6 rounded-3xl bg-slate-950 border border-slate-800 hover:border-yellow-500/40 transition-all space-y-3">
          <div
            onClick={() => setIsLightboxOpen(true)}
            className="cursor-zoom-in relative rounded-2xl overflow-hidden border border-slate-800 bg-white group"
          >
            <img
              src="/images/cases/case-seo-advogados-planos-de-saude-google.png"
              alt="Resultado orgânico na primeira página do Google para advogados planos de saúde"
              width={1045}
              height={262}
              loading="lazy"
              className="w-full h-auto object-contain max-h-[380px] transition-transform duration-300 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-slate-950/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="px-3.5 py-1.5 rounded-full bg-slate-950/80 text-white text-xs font-bold border border-slate-700 flex items-center gap-1.5 shadow-xl">
                <Maximize2 size={13} className="text-yellow-400" />
                <span>Ampliar Captura Original</span>
              </span>
            </div>
          </div>

          <figcaption className="text-xs text-slate-400 leading-relaxed italic text-center px-2">
            Captura real de resultado orgânico observado no Google para a busca “advogados planos de saúde”. A posição pode variar conforme data, localização, dispositivo e personalização dos resultados.
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
              <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest flex items-center gap-1.5">
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

            <div className="bg-white rounded-xl p-2 overflow-auto max-h-[80vh]">
              <img
                src="/images/cases/case-seo-advogados-planos-de-saude-google.png"
                alt="Resultado orgânico na primeira página do Google para advogados planos de saúde"
                className="w-full h-auto min-w-[600px]"
              />
            </div>

            <p className="text-xs text-slate-400 text-center italic">
              Exibição em alta resolução do arquivo físico original sem edições ou filtros.
            </p>
          </div>
        </div>
      )}

      {/* Contextualização do Case */}
      <section className="space-y-4 p-6 sm:p-8 rounded-3xl bg-[#0f1118] border border-slate-800">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
          SEO em um Mercado de Alta Concorrência
        </h2>
        <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-slate-300">
          <p>
            Advocacia e Direito da Saúde são mercados nos quais existe intensa disputa por visibilidade orgânica. Potenciais clientes que realizam buscas como “advogados planos de saúde” geralmente enfrentam situações de urgência jurídica — tais como negativa de cobertura de exames, tratamentos de alto custo, cirurgias negadas ou reajustes abusivos em contratos de plano de saúde.
          </p>
          <p>
            Alcançar visibilidade na primeira página do Google para consultas de alta intenção comercial permite ao escritório conectar-se diretamente com potenciais clientes que já demonstram necessidade imediata de suporte especializado, reduzindo a dependência exclusiva de campanhas pagas contínuas.
          </p>
        </div>
      </section>

      {/* Estratégia de SEO */}
      <section className="space-y-4 p-6 sm:p-8 rounded-3xl bg-[#0f1118] border border-slate-800">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
          Estratégia de SEO
        </h2>
        <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
          Projetos de SEO voltados ao segmento jurídico e serviços especializados fundamentam-se em pilares metodológicos rigorosos para garantir que as páginas sejam corretamente interpretadas pelos algoritmos de busca e por assistentes de IA:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1">
            <strong className="text-cyan-400 font-bold block">1. SEO Técnico & Indexabilidade</strong>
            <span className="text-slate-300">Garantia de carregamento ágil, ausência de bloqueios em robots.txt e estrutura limpa de código.</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1">
            <strong className="text-cyan-400 font-bold block">2. Arquitetura Semântica</strong>
            <span className="text-slate-300">Hierarquia clara de cabeçalhos (H1, H2, H3) e organização temática de serviços.</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1">
            <strong className="text-cyan-400 font-bold block">3. Análise de Intenção de Busca</strong>
            <span className="text-slate-300">Alinhamento do conteúdo com a dúvida imediata do usuário que busca auxílio em Direito da Saúde.</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1">
            <strong className="text-cyan-400 font-bold block">4. Conteúdo Especializado & E-E-A-T</strong>
            <span className="text-slate-300">Demostração clara de experiência, expertise, autoridade e confiança técnica no setor.</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1">
            <strong className="text-cyan-400 font-bold block">5. SEO Local & Geolocalização</strong>
            <span className="text-slate-300">Associação do serviço à cidade de atuação (Curitiba), conectando a localização aos resultados de busca.</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1">
            <strong className="text-cyan-400 font-bold block">6. Dados Estruturados Schema.org</strong>
            <span className="text-slate-300">Marcação explícita de entidades para que motores de busca e IAs compreendam a especialidade.</span>
          </div>
        </div>
      </section>

      {/* Bloco de Evidência */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-cyan-500/40 shadow-lg space-y-4">
        <h3 className="text-lg font-bold font-display text-white flex items-center gap-2">
          <Zap size={18} className="text-yellow-400" />
          <span>Evidência</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-bold block uppercase tracking-wider text-[10px]">
              Consulta registrada
            </span>
            <span className="text-yellow-300 font-bold font-mono text-sm">
              “advogados planos de saúde”
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-bold block uppercase tracking-wider text-[10px]">
              Resultado observado
            </span>
            <span className="text-emerald-400 font-bold text-sm">
              Primeira página do Google
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-bold block uppercase tracking-wider text-[10px]">
              Tipo de Evidência
            </span>
            <span className="text-cyan-300 font-bold text-sm">
              Captura real da SERP
            </span>
          </div>
        </div>
      </section>

      {/* Aviso sobre Variação de Posições */}
      <section className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2 text-xs text-slate-400 leading-relaxed">
        <div className="flex items-center gap-2 text-yellow-400 font-bold">
          <ShieldAlert size={16} />
          <span>Aviso sobre Variação de Posições</span>
        </div>
        <p>
          Resultados de pesquisa podem variar conforme localização, dispositivo, data, concorrência, personalização e alterações dos mecanismos de busca. Este case documenta o resultado observado na captura apresentada e não representa garantia de posições futuras.
        </p>
      </section>

      {/* Autoria */}
      <section className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest block">
            Responsável Técnico
          </span>
          <h4 className="text-base font-bold text-white">
            Case documentado por Omar Skafi — Omar SEO
          </h4>
          <p className="text-xs text-slate-400">
            Especialista em SEO técnico, SEO local, Google Maps e GEO em Curitiba.
          </p>
        </div>

        <Link
          to="/sobre"
          className="px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5 shrink-0"
        >
          <span>Conhecer Trajetória</span>
          <ChevronRight size={14} />
        </Link>
      </section>

      {/* Contextual Links */}
      <section className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
        <Link
          to="/resultados"
          className="text-cyan-400 hover:text-cyan-300 font-bold inline-flex items-center gap-1"
        >
          <ArrowLeft size={14} />
          <span>Ver todos os resultados e cases</span>
        </Link>

        <div className="flex flex-wrap items-center gap-4 text-slate-400">
          <Link to="/servicos/consultoria-seo" className="hover:text-white transition-colors">
            Consultoria de SEO
          </Link>
          <span>•</span>
          <Link to="/servicos/seo-local" className="hover:text-white transition-colors">
            SEO Local Curitiba
          </Link>
          <span>•</span>
          <Link to="/auditoria-seo" className="hover:text-white transition-colors">
            Diagnóstico Gratuito
          </Link>
        </div>
      </section>
    </div>
  );
}
