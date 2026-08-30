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
  Bot,
  Sparkles,
  Layers,
  Cpu,
  BrainCircuit,
  MapPin,
  HelpCircle,
  CheckCircle2,
  Award,
  Clock,
  ExternalLink,
} from 'lucide-react';

export default function CaseOmegaRevestimentosSeoGeo() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://www.omarseo.digital/resultados/omega-revestimentos-acm-seo-geo-curitiba#article',
    headline: 'Case SEO + GEO: Ômega Revestimentos e ACM | Omar SEO',
    description:
      'Uma parceria de aproximadamente quatro anos com presença digital construída para um mercado competitivo de fachadas, revestimentos, ACM e estruturas em Curitiba.',
    url: 'https://www.omarseo.digital/resultados/omega-revestimentos-acm-seo-geo-curitiba',
    mainEntityOfPage: 'https://www.omarseo.digital/resultados/omega-revestimentos-acm-seo-geo-curitiba',
    inLanguage: 'pt-BR',
    author: {
      '@id': 'https://www.omarseo.digital/#person',
    },
    publisher: {
      '@id': 'https://www.omarseo.digital/#localbusiness',
    },
    image: {
      '@type': 'ImageObject',
      '@id': 'https://www.omarseo.digital/images/cases/case-omega-revestimentos-acm-google-ai-seo.png#primaryimage',
      url: 'https://www.omarseo.digital/images/cases/case-omega-revestimentos-acm-google-ai-seo.png',
      contentUrl: 'https://www.omarseo.digital/images/cases/case-omega-revestimentos-acm-google-ai-seo.png',
      caption:
        'Ômega Revestimentos presente no Google para qual empresa instala ACM em Curitiba',
      width: 1000,
      height: 1100,
    },
  };

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12 text-slate-200">
      <EnhancedSEO
        title="Case SEO + GEO: Ômega Revestimentos e ACM | Omar SEO"
        description="Uma parceria de aproximadamente quatro anos com presença digital construída para um mercado competitivo de fachadas, revestimentos, ACM e estruturas em Curitiba."
        canonical="/resultados/omega-revestimentos-acm-seo-geo-curitiba"
        ogImage="https://www.omarseo.digital/images/cases/case-omega-revestimentos-acm-google-ai-seo.png"
        ogType="article"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Cases e Resultados', item: '/resultados' },
          {
            name: 'Case Ômega Revestimentos SEO + GEO',
            item: '/resultados/omega-revestimentos-acm-seo-geo-curitiba',
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
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/90 px-3 py-1 rounded-full border border-emerald-500/40">
              <Clock size={14} />
              <span>+4 ANOS DE PARCERIA</span>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-950/90 px-3 py-1 rounded-full border border-cyan-500/40">
              <Bot size={14} />
              <span>SEO + GEO/AIO</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-300 bg-slate-900/80 px-2.5 py-0.5 rounded-full border border-slate-800">
              <span>Case Documentado #08</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
            Case SEO + GEO: Ômega Revestimentos em buscas por ACM
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl font-light leading-relaxed">
            Uma parceria de aproximadamente quatro anos com presença digital construída para um mercado competitivo de fachadas, revestimentos, ACM e estruturas.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-cyan-300">
            <span className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
              <Search size={14} className="text-cyan-400" />
              <span>Consulta: "qual empresa instala acm em curitiba"</span>
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
              <Building2 size={14} className="text-emerald-400" />
              <span>Cliente: Ômega Revestimentos</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Evidence Display Block */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-slate-800 space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800/60 inline-block mb-2">
              RESULTADO ATUAL DOCUMENTADO
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
              Evidência Real na Experiência de Busca do Google
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 pt-1">
              "qual empresa instala acm em curitiba" — Ômega Revestimentos presente na experiência de busca do Google e nos resultados orgânicos.
            </p>
          </div>

          <button
            onClick={() => setIsLightboxOpen(true)}
            className="px-4 py-2 rounded-xl bg-cyan-950/80 hover:bg-cyan-900/80 border border-cyan-800/60 text-cyan-300 text-xs font-bold inline-flex items-center gap-2 transition-all shrink-0"
          >
            <Maximize2 size={14} />
            <span>Ampliar Evidência</span>
          </button>
        </div>

        {/* Real Screenshot Container */}
        <div className="relative group rounded-2xl overflow-hidden border border-slate-800 bg-white p-2">
          <img
            src="/images/cases/case-omega-revestimentos-acm-google-ai-seo.png"
            alt="Ômega Revestimentos presente no Google para qual empresa instala ACM em Curitiba"
            width={1000}
            height={1100}
            className="w-full h-auto object-contain rounded-xl cursor-pointer transition-transform duration-300 group-hover:scale-[1.01]"
            onClick={() => setIsLightboxOpen(true)}
          />
          <div
            onClick={() => setIsLightboxOpen(true)}
            className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
          >
            <span className="px-4 py-2 rounded-full bg-slate-950/90 text-white font-bold text-xs inline-flex items-center gap-2 border border-slate-700 shadow-xl">
              <Maximize2 size={14} />
              Clique para Expandir Captura em Alta Resolução
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-400 italic bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80 leading-relaxed">
          <strong>Legenda:</strong> Captura real do Google registrando a Ômega Revestimentos em uma pesquisa comercial sobre empresas que instalam ACM em Curitiba, além da presença orgânica de seu domínio na mesma SERP. Resultados podem variar ao longo do tempo.
        </p>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute -top-12 right-0 p-2 text-slate-300 hover:text-white bg-slate-900 rounded-full border border-slate-700"
              aria-label="Fechar modal"
            >
              <X size={20} />
            </button>
            <img
              src="/images/cases/case-omega-revestimentos-acm-google-ai-seo.png"
              alt="Ômega Revestimentos presente no Google para qual empresa instala ACM em Curitiba"
              className="max-h-[82vh] w-auto object-contain rounded-xl border border-slate-800 bg-white"
            />
            <p className="text-xs text-slate-300 mt-3 text-center">
              Captura original de SERP comercial no Google para "qual empresa instala acm em curitiba"
            </p>
          </div>
        </div>
      )}

      {/* Quadro Factual Do Case */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-slate-800 space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <FileCheck className="text-cyan-400" size={20} />
          <h2 className="text-xl font-bold text-white font-display">
            Quadro Factual do Case #08
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-[#0f1118] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px] block">
              Cliente
            </span>
            <span className="text-sm font-bold text-white">Ômega Revestimentos</span>
          </div>

          <div className="p-4 rounded-xl bg-[#0f1118] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px] block">
              Segmento de Atuação
            </span>
            <span className="text-sm font-bold text-cyan-300">
              ACM / Fachadas / Revestimentos / Estruturas Metálicas
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#0f1118] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px] block">
              Tempo de Relacionamento
            </span>
            <span className="text-sm font-bold text-emerald-400">
              Aproximadamente 4 anos de parceria contínua
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#0f1118] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px] block">
              Consulta Registrada
            </span>
            <span className="text-sm font-bold text-yellow-300 font-mono">
              qual empresa instala acm em curitiba
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#0f1118] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px] block">
              Localização e Plataforma
            </span>
            <span className="text-sm font-bold text-slate-200">
              Curitiba, PR — Google Search
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#0f1118] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px] block">
              Tipos de Presença Documentados
            </span>
            <span className="text-sm font-bold text-slate-200">
              Resposta Sintetizada do Google + Resultado Orgânico (omegarevestimentos.com.br)
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#0f1118] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px] block">
              Classificação Metodológica
            </span>
            <span className="text-sm font-bold text-cyan-400">
              SEO Tradicional + GEO (Generative Engine Optimization) / AIO
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#0f1118] border border-slate-800/80 space-y-1">
            <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px] block">
              Fonte da Evidência
            </span>
            <span className="text-sm font-bold text-slate-300">
              Captura original fornecida pelo proprietário
            </span>
          </div>
        </div>
      </div>

      {/* Seção: 4 anos construindo e defendendo presença orgânica */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-slate-800 space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <Clock className="text-emerald-400" size={22} />
          <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
            4 anos construindo e defendendo presença orgânica
          </h2>
        </div>

        <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-light">
          <p>
            A relação com a Ômega Revestimentos não começou com esta captura. O projeto possui aproximadamente quatro anos de trabalho contínuo de SEO, acompanhando a evolução da presença digital da empresa em pesquisas relacionadas a ACM, fachadas, revestimentos e estruturas metálicas.
          </p>

          <p>
            Segundo o histórico acompanhado pelo proprietário, a Ômega Revestimentos mantém há aproximadamente quatro anos forte presença nas buscas estratégicas de seu segmento. Trata-se de uma empresa de destaque no segmento de ACM, fachadas e estruturas em Curitiba e Região Metropolitana, onde o trabalho de otimização tem como objetivo consolidar a autoridade do domínio e garantir que o website oficial seja encontrado no momento exato de intenção comercial do comprador B2B ou cliente corporativo.
          </p>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/30 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider">
              <ShieldAlert size={15} />
              <span>Contextualização Ética de Liderança nas Buscas</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              O termo "liderança nas buscas" é utilizado neste case para referir-se ao histórico consistente de posições privilegiadas nas consultas comerciais estrategicamente mapeadas e acompanhadas durante a parceria. Resultados em mecanismos de busca flutuam de acordo com atualizações de algoritmos, geolocalização e concorrência; portanto, a documentação reflete o trabalho contínuo de SEO de longo prazo e a presença sólida mantida pelo domínio.
            </p>
          </div>
        </div>
      </div>

      {/* Seção: Do SEO à Descoberta por IA */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-slate-800 space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <BrainCircuit className="text-cyan-400" size={22} />
          <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
            Do SEO à Descoberta por IA: A Evolução das Consultas "Qual Empresa..."
          </h2>
        </div>

        <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-light">
          <p>
            O mercado de buscas passou por uma transformação profunda. Durante anos, a otimização em motores de busca concentrou-se exclusivamente no ranking de palavras-chave diretas (ex: "fachadas acm curitiba"). Hoje, o comportamento do usuário inclui perguntas complexas de descoberta comercial, como <strong className="text-cyan-300 font-mono">"qual empresa instala acm em curitiba"</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-2">
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">1. "Qual Empresa"</span>
              <p className="text-xs text-slate-300">
                Demonstra intenção de descoberta e recomendação comercial direta de um fornecedor especializado.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">2. "Instala ACM"</span>
              <p className="text-xs text-slate-300">
                Especifica o serviço técnico exato de revestimento e execução de fachadas.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">3. "Em Curitiba"</span>
              <p className="text-xs text-slate-300">
                Estabelece o afunilamento geográfico para atendimento presencial e regional.
              </p>
            </div>
          </div>

          <p>
            A captura documental do Case #08 registra a Ômega Revestimentos presente simultaneamente na resposta apresentada pelo Google e no resultado orgânico tradicional do website <strong className="text-white font-mono">omegarevestimentos.com.br</strong>. Isso demonstra como a construção de autoridade semântica em SEO beneficia tanto a visibilidade orgânica clássica quanto a citação nas novas interfaces generativas do Google.
          </p>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 space-y-1">
            <strong className="text-slate-200 block">Observação Técnica de SEO & GEO:</strong>
            <p>
              Não afirmamos isoladamente qual fator individual fez o Google apresentar a empresa na resposta generativa. Entendemos que mecanismos de busca analisam um conjunto complexo de fatores — incluindo clareza arquitetural, dados estruturados Schema, sinais locais e relevância temática do domínio.
            </p>
          </div>
        </div>
      </div>

      {/* Cluster Editorial: Padrão "Qual Empresa..." */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-cyan-500/30 space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-800/60">
            <Sparkles size={12} />
            <span>Padrão Observado nos Cases Omar SEO</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
            Empresas encontradas em consultas do tipo "qual empresa..."
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Confira como o trabalho de SEO e GEO/AIO da Omar SEO posiciona empresas de diferentes segmentos técnicos em buscas comerciais formuladas como perguntas no Google em Curitiba:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {/* Case Comfort */}
          <Link
            to="/resultados/comfort-divisorias-google-ia-curitiba"
            className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all space-y-2 group block"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block">
              Case #05 — Comfort Divisórias
            </span>
            <h3 className="font-bold text-white text-sm group-hover:text-cyan-300 transition-colors">
              "qual empresa divisorias eucatex em curitiba"
            </h3>
            <p className="text-slate-400 text-[11px] font-mono">
              Citação na IA do Google + Resultado Orgânico
            </p>
            <span className="text-cyan-400 font-bold inline-flex items-center gap-1 text-[11px] pt-1">
              <span>Ver Case Comfort</span>
              <ChevronRight size={12} />
            </span>
          </Link>

          {/* Case KY Drywall */}
          <Link
            to="/resultados/ky-drywall-google-ia-curitiba"
            className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all space-y-2 group block"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block">
              Case #06 — KY Drywall
            </span>
            <h3 className="font-bold text-white text-sm group-hover:text-cyan-300 transition-colors">
              "qual empresa drywall em curitiba"
            </h3>
            <p className="text-slate-400 text-[11px] font-mono">
              Citação na IA do Google + Resultado Orgânico
            </p>
            <span className="text-cyan-400 font-bold inline-flex items-center gap-1 text-[11px] pt-1">
              <span>Ver Case KY Drywall</span>
              <ChevronRight size={12} />
            </span>
          </Link>

          {/* Case Ômega Revestimentos */}
          <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/60 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
              Case #08 — Ômega Revestimentos
            </span>
            <h3 className="font-bold text-white text-sm">
              "qual empresa instala acm em curitiba"
            </h3>
            <p className="text-slate-300 text-[11px] font-mono">
              Resposta do Google + Resultado Orgânico (+4 Anos)
            </p>
            <span className="text-emerald-400 font-bold text-[11px] inline-block pt-1">
              ★ Este Case (Documentado)
            </span>
          </div>
        </div>
      </div>

      {/* CTA Footer Section */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-950 via-cyan-950/60 to-slate-950 border border-cyan-500/40 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
          Quer posicionar sua empresa para a nova era das buscas no Google?
        </h2>
        <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Estruturamos a presença digital da sua empresa para mecanismos de busca tradicionais e para as novas experiências de descoberta baseadas em Inteligência Artificial.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contato"
            className="px-6 py-3 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold text-sm transition-all shadow-[0_0_25px_rgba(34,211,238,0.3)]"
          >
            Falar com Especialista em SEO e GEO
          </Link>
          <Link
            to="/resultados"
            className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-sm transition-all"
          >
            Ver Outros Cases Documentados
          </Link>
        </div>
      </div>
    </div>
  );
}
