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
  MessageSquareText,
  DollarSign,
  Home,
} from 'lucide-react';

export default function CaseCasasPinheiraoAiSeo() {
  const [activeLightbox, setActiveLightbox] = useState<number | null>(null);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://www.omarseo.digital/resultados/casas-pinheirao-google-ia-seo#article',
    headline: 'Case GEO + SEO: Casas Pinheirão na IA do Google | Omar SEO',
    description:
      'Resultado documentado para uma consulta conversacional de alta intenção sobre empresas que constroem casas pré-fabricadas diretamente no terreno do cliente.',
    url: 'https://www.omarseo.digital/resultados/casas-pinheirao-google-ia-seo',
    mainEntityOfPage: 'https://www.omarseo.digital/resultados/casas-pinheirao-google-ia-seo',
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
        '@id': 'https://www.omarseo.digital/images/cases/casas-pinheirao-google-ai-overview.png#evidence1',
        url: 'https://www.omarseo.digital/images/cases/casas-pinheirao-google-ai-overview.png',
        contentUrl: 'https://www.omarseo.digital/images/cases/casas-pinheirao-google-ai-overview.png',
        caption:
          'Casas Pinheirão citada na Visão geral criada por IA do Google em busca sobre casas pré-fabricadas no terreno',
        width: 1000,
        height: 700,
      },
      {
        '@type': 'ImageObject',
        '@id': 'https://www.omarseo.digital/images/cases/casas-pinheirao-google-organico.png#evidence2',
        url: 'https://www.omarseo.digital/images/cases/casas-pinheirao-google-organico.png',
        contentUrl: 'https://www.omarseo.digital/images/cases/casas-pinheirao-google-organico.png',
        caption:
          'Casas Pinheirão presente nos resultados orgânicos para busca sobre construção de casa pré-fabricada no terreno',
        width: 1000,
        height: 680,
      },
    ],
  };

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12 text-slate-200">
      <EnhancedSEO
        title="Case GEO + SEO: Casas Pinheirão na IA do Google | Omar SEO"
        description="Resultado documentado para uma consulta conversacional de alta intenção sobre empresas que constroem casas pré-fabricadas diretamente no terreno do cliente."
        canonical="/resultados/casas-pinheirao-google-ia-seo"
        ogImage="https://www.omarseo.digital/images/cases/casas-pinheirao-google-ai-overview.png"
        ogType="article"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Resultados', item: '/resultados' },
          {
            name: 'Case #09 — Casas Pinheirão (IA + Orgânico)',
            item: '/resultados/casas-pinheirao-google-ia-seo',
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
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-950/90 px-3 py-1 rounded-full border border-cyan-500/40">
              CASE DOCUMENTADO #09 — SEO + GEO / AIO
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800/60">
              Presença Simultânea: IA + Orgânico
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
            Case GEO + SEO: Casas Pinheirão encontrada pela IA e busca orgânica do Google
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Resultado documentado para uma consulta conversacional de alta intenção sobre empresas que constroem casas pré-fabricadas diretamente no terreno do cliente.
          </p>
        </div>

        {/* Highlights Banner Card */}
        <div className="relative z-10 p-5 rounded-2xl bg-cyan-950/40 border border-cyan-500/50 space-y-3">
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-cyan-400">
            <Sparkles size={16} />
            <span>RESULTADO DOCUMENTADO — IA DO GOOGLE + BUSCA ORGÂNICA</span>
          </div>
          <p className="text-lg sm:text-xl font-bold text-white">
            Casas Pinheirão encontrada quando o consumidor descreve exatamente o que procura.
          </p>
          <div className="p-3 rounded-xl bg-slate-950/80 stroke-slate-800 font-mono text-xs sm:text-sm text-yellow-300 border border-slate-800">
            Consulta: <span className="font-semibold">“quem vende casas pre fabricadas meu terreno pelo menor preço?”</span>
          </div>
        </div>
      </header>

      {/* Quadro Factual (Resumo Factual do Case #09) */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-slate-800 space-y-6">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-cyan-400">
          <FileCheck size={18} />
          <h2>Ficha Técnica e Quadro Factual — Case #09</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-bold block uppercase tracking-wider text-[10px]">Identificação do Case</span>
            <span className="text-sm font-bold text-white">Case Documentado #09</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-bold block uppercase tracking-wider text-[10px]">Empresa Parceira</span>
            <span className="text-sm font-bold text-cyan-300">Casas Pinheirão</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-bold block uppercase tracking-wider text-[10px]">Segmento de Atuação</span>
            <span className="text-sm font-bold text-white">Casas Pré-Fabricadas / Construção Civil</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-bold block uppercase tracking-wider text-[10px]">Intenção Comercial</span>
            <span className="text-sm font-bold text-emerald-400">Encontrar empresa para construir no terreno do cliente</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1 md:col-span-2">
            <span className="text-slate-400 font-bold block uppercase tracking-wider text-[10px]">Consulta Registrada em Captura</span>
            <span className="text-sm font-mono font-bold text-yellow-300">"quem vende casas pre fabricadas meu terreno pelo menor preço?"</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-bold block uppercase tracking-wider text-[10px]">Região Contextualizada</span>
            <span className="text-sm font-bold text-white">Curitiba e Região Metropolitana</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-bold block uppercase tracking-wider text-[10px]">Plataforma de Busca</span>
            <span className="text-sm font-bold text-white">Google Search (Desktop)</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-bold block uppercase tracking-wider text-[10px]">Presença Generativa (IA)</span>
            <span className="text-sm font-bold text-emerald-400">Documentada na Visão geral criada por IA</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-bold block uppercase tracking-wider text-[10px]">Presença Orgânica</span>
            <span className="text-sm font-bold text-cyan-400">Documentada com múltiplos domínios nos resultados</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-bold block uppercase tracking-wider text-[10px]">Classificação da Estratégia</span>
            <span className="text-sm font-bold text-white">SEO + GEO / AIO (Generative Engine Optimization)</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-bold block uppercase tracking-wider text-[10px]">Fonte das Evidências</span>
            <span className="text-sm font-bold text-slate-300">Duas capturas reais fornecidas pelo proprietário</span>
          </div>
        </div>
      </section>

      {/* Galeria de Evidências — 2 Imagens Originais com Lightbox */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-cyan-500/50 space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800/60">
            <Search size={14} />
            <span>Evidências Factuais Documentadas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Galeria de Evidências Factuais — Case #09
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Abaixo estão registradas as duas capturas de tela reais fornecidas pelo proprietário, demonstrando a presença da Casas Pinheirão tanto na resposta sintetizada pela IA do Google quanto nos resultados orgânicos tradicionais para a mesma intenção de pesquisa.
          </p>
        </div>

        {/* Evidência 1: Visão Geral Criada por IA */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Bot className="text-cyan-400" size={20} />
              <span>Evidência 1 — Visão geral criada por IA (Google AI Overview)</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
              Captura #01
            </span>
          </div>

          <div className="bg-white p-2 rounded-2xl border border-slate-800 overflow-hidden relative group">
            <img
              src="/images/cases/casas-pinheirao-google-ai-overview.png"
              alt="Casas Pinheirão citada na Visão geral criada por IA do Google em busca sobre casas pré-fabricadas no terreno"
              width={1000}
              height={700}
              loading="lazy"
              className="w-full h-auto object-contain rounded-xl max-w-full"
            />
            <button
              onClick={() => setActiveLightbox(1)}
              className="absolute bottom-4 right-4 bg-slate-950/90 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 text-xs font-bold px-3 py-2 rounded-lg border border-cyan-500/50 transition-colors flex items-center gap-1.5 shadow-lg"
            >
              <Maximize2 size={14} />
              <span>Ampliar Evidência 1</span>
            </button>
          </div>

          <p className="text-xs text-slate-400 italic bg-slate-900/80 p-3 rounded-xl border border-slate-800">
            <strong>Legenda Evidência 1:</strong> Captura real mostrando a Casas Pinheirão citada na experiência generativa do Google para a consulta documentada “quem vende casas pre fabricadas meu terreno pelo menor preço?”.
          </p>
        </div>

        {/* Evidência 2: Resultados Orgânicos */}
        <div className="space-y-4 pt-6 border-t border-slate-800">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Globe className="text-cyan-400" size={20} />
              <span>Evidência 2 — Resultados Orgânicos do Google</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
              Captura #02
            </span>
          </div>

          <div className="bg-white p-2 rounded-2xl border border-slate-800 overflow-hidden relative group">
            <img
              src="/images/cases/casas-pinheirao-google-organico.png"
              alt="Casas Pinheirão presente nos resultados orgânicos para busca sobre construção de casa pré-fabricada no terreno"
              width={1000}
              height={680}
              loading="lazy"
              className="w-full h-auto object-contain rounded-xl max-w-full"
            />
            <button
              onClick={() => setActiveLightbox(2)}
              className="absolute bottom-4 right-4 bg-slate-950/90 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 text-xs font-bold px-3 py-2 rounded-lg border border-cyan-500/50 transition-colors flex items-center gap-1.5 shadow-lg"
            >
              <Maximize2 size={14} />
              <span>Ampliar Evidência 2</span>
            </button>
          </div>

          <p className="text-xs text-slate-400 italic bg-slate-900/80 p-3 rounded-xl border border-slate-800">
            <strong>Legenda Evidência 2:</strong> Captura real mostrando ativos relacionados à Casas Pinheirão (casaspinheirao.app.br e casaspinheirao.com.br) nos resultados orgânicos para a mesma intenção de pesquisa.
          </p>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightbox !== null && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full bg-slate-900 p-2 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center justify-between px-3 py-1">
              <span className="text-xs font-bold text-cyan-400">
                Evidência Factual #{activeLightbox} — Case Casas Pinheirão
              </span>
              <button
                onClick={() => setActiveLightbox(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <div className="overflow-auto max-h-[80vh] rounded-xl bg-white p-2">
              <img
                src={
                  activeLightbox === 1
                    ? '/images/cases/casas-pinheirao-google-ai-overview.png'
                    : '/images/cases/casas-pinheirao-google-organico.png'
                }
                alt={
                  activeLightbox === 1
                    ? 'Casas Pinheirão citada na Visão geral criada por IA do Google'
                    : 'Casas Pinheirão presente nos resultados orgânicos'
                }
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Seção Especial: Quando o cliente não pesquisa uma palavra-chave — ele descreve o problema */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-slate-800 space-y-6">
        <div className="space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-800/60 inline-block">
            EVOLUÇÃO DOS MECANISMOS DE BUSCA
          </span>
          <h2 className="text-xl sm:text-3xl font-bold font-display text-white">
            Quando o cliente não pesquisa uma palavra-chave — ele descreve o problema
          </h2>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Mecanismos modernos de busca evoluíram para além do modelo clássico de correspondência direta por palavras-chave isoladas. Hoje, consumidores utilizam linguagem natural e consultas conversacionais completas para explicar exatamente o que precisam.
          </p>
          <p>
            Em vez de digitar simplesmente uma palavra-chave curta como <span className="text-white font-mono bg-slate-900 px-2 py-0.5 rounded border border-slate-800">“casa pré-fabricada Curitiba”</span>, um potencial cliente em busca de um fornecedor para seu lote formula uma necessidade inteira em uma única frase:
          </p>
          <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-yellow-300 font-mono text-xs sm:text-sm font-bold">
            “quem vende casas pré-fabricadas para construir no meu terreno pelo menor preço?”
          </div>
          <p>
            Essa consulta reúne simultaneamente <strong>6 camadas semânticas distintas</strong> que o sistema de busca e a inteligência generativa precisam interpretar em conjunto:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-2">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-cyan-400 font-bold block">1. Descoberta de Fornecedor</span>
              <p className="text-slate-300">“quem vende” — busca por empresas fornecedoras ativas e qualificadas.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-cyan-400 font-bold block">2. Produto / Serviço</span>
              <p className="text-slate-300">“casas pré-fabricadas” — categoria técnica de edificação.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-cyan-400 font-bold block">3. Modalidade de Execução</span>
              <p className="text-slate-300">“no meu terreno” — construção direta na propriedade do cliente.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-cyan-400 font-bold block">4. Critério Comercial</span>
              <p className="text-slate-300">“pelo menor preço” — busca por opções competitivas e bom custo-benefício.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-cyan-400 font-bold block">5. Contexto Regional</span>
              <p className="text-slate-300">Atribuição regional automatizada para Curitiba e Região Metropolitana.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-cyan-400 font-bold block">6. Compreensão da Entidade</span>
              <p className="text-slate-300">Recuperação da Casas Pinheirão como entidade empresarial associada a essa solução.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Para Intenções, Não Somente Keywords */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-slate-800 space-y-6">
        <div className="space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800/60 inline-block">
            ARQUITETURA SEMÂNTICA MODERNA
          </span>
          <h2 className="text-xl sm:text-3xl font-bold font-display text-white">
            Da palavra-chave à intenção completa
          </h2>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Uma arquitetura semântica avançada não depende da simples repetição mecânica de uma palavra-chave em títulos. Ela constrói relações compreensíveis e conexões de significado entre os componentes do ecossistema da empresa:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs pt-1">
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <span className="text-cyan-400 font-bold block">Empresa &amp; Produto</span>
              <span className="text-slate-300 font-mono text-[11px]">Casas Pinheirão → Casas Pré-Fabricadas</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <span className="text-cyan-400 font-bold block">Serviço &amp; Modalidade</span>
              <span className="text-slate-300 font-mono text-[11px]">Construção → No Terreno do Cliente</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <span className="text-cyan-400 font-bold block">Contexto Territorial</span>
              <span className="text-slate-300 font-mono text-[11px]">Curitiba &amp; Região Metropolitana</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <span className="text-cyan-400 font-bold block">Resolução de Dúvidas</span>
              <span className="text-slate-300 font-mono text-[11px]">Preço, materiais, prazos e kits</span>
            </div>
          </div>

          <p>
            O Case Casas Pinheirão exemplifica factualmente como a estruturação da intenção completa permite que a marca seja identificada por algoritmos de busca e LLMs no momento em que a pergunta comercial do consumidor é formulada.
          </p>
        </div>
      </section>

      {/* Como o GEO / AIO Funciona na Prática */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-slate-800 space-y-6">
        <div className="space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-800/60 inline-block">
            MECANISMOS DE SÍNTESE GENERATIVA
          </span>
          <h2 className="text-xl sm:text-3xl font-bold font-display text-white">
            GEO e AIO na estruturação da marca para inteligência artificial
          </h2>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            O GEO (Generative Engine Optimization) e AIO (Artificial Intelligence Optimization) têm como objetivo aumentar a clareza e a consistência das informações empresariais que sistemas de busca e modelos de linguagem sintetizam.
          </p>
          <p>
            Diversos fatores técnicos e semânticos contribuem para a construção dessa autoridade e compreensão digital:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>SEO Técnico &amp; Performance:</strong> Crawlabilidade, renderização rápida e código limpo.</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Entity SEO &amp; Schema.org:</strong> Identificação formal da organização e seus produtos.</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Conteúdo Semântico de Resposta:</strong> Páginas que respondem a perguntas reais de contratação.</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
              <span><strong>Consistência Empresarial:</strong> Presença coerente em múltiplos domínios e canais institucionais.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ressalva Relevante e Transparência Factual */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-yellow-500/30 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-yellow-400">
          <ShieldAlert size={16} />
          <span>Esclarecimento Técnico e Transparência Editorial</span>
        </div>
        <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
          <p>
            <strong>Interpretação da expressão "menor preço" na consulta:</strong> A presença da expressão <em>“pelo menor preço”</em> na consulta pesquisada representa o critério comercial inserido pelo próprio consumidor na busca.
          </p>
          <p>
            A evidência documentada comprova que a Casas Pinheirão foi recuperada e citada na resposta do Google para uma consulta comercial que continha esse critério. Isso <strong>não constitui uma declaração ou endosso absoluto do Google</strong> afirmando que a empresa possui o menor preço do mercado, mas sim a comprovação factual de relevância e presença digital para essa intenção de compra.
          </p>
        </div>
      </section>

      {/* Cluster Interlinking e Call to Action */}
      <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-cyan-500/40 text-center space-y-6">
        <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
          Quer estruturar a presença da sua empresa para buscas por perguntas e IA?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Conheça os métodos do framework Omar SEO 4D para alinhar o código, a semântica e a autoridade da sua marca com o ecossistema moderno do Google.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link
            to="/contato"
            className="px-6 py-3 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs transition-colors shadow-lg"
          >
            Falar com Omar Skafi
          </Link>
          <Link
            to="/resultados"
            className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-cyan-400 text-xs font-bold border border-cyan-500/30 transition-colors"
          >
            Ver mais cases documentados
          </Link>
        </div>
      </section>
    </div>
  );
}
