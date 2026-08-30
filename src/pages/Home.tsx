import React from 'react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { HeroAnimation } from '../components/HeroAnimation';
import { SeoGeoAioExplainer } from '../components/SeoGeoAioExplainer';
import { DiagnosticSection } from '../components/DiagnosticSection';
import { SectionDivider } from '../components/SectionDivider';
import { InternalLinkCluster } from '../components/InternalLinkCluster';
import ConstellationGrid from '../components/ui/constellation-grid';
import { BackgroundVideo } from '../components/BackgroundVideo';
import {
  Search,
  MapPin,
  Cpu,
  Code,
  CheckCircle,
  ArrowRight,
  Zap,
  TrendingUp,
  Award,
  Users,
  ShieldCheck,
  ChevronRight,
  HelpCircle,
  MessageCircle,
  Sparkles,
  Bot,
} from 'lucide-react';

export default function Home() {
  const pillarServices = [
    {
      title: 'SEO Completo & Semântico',
      href: '/seo',
      icon: Search,
      color: 'from-blue-600 to-indigo-600',
      desc: 'Análise de intenção de busca, pesquisa de palavras-chave comerciais, arquitetura de conteúdo e otimização on-page para ranquear no topo do Google.',
    },
    {
      title: 'SEO Local & Curitiba',
      href: '/seo-local',
      icon: MapPin,
      color: 'from-emerald-600 to-teal-600',
      desc: 'Dominância orgânica nos 75 bairros de Curitiba e cidades da Região Metropolitana. Atraia clientes exatamente onde sua empresa atua.',
    },
    {
      title: 'Google Maps & Perfil de Empresa',
      href: '/google-maps',
      icon: MapPin,
      color: 'from-yellow-500 to-amber-600',
      desc: 'Posicionamento no Top 3 do Google Maps (Local Pack), aumentando exponencialmente chamadas telefônicas, rotas e visitas presenciais.',
    },
    {
      title: 'GEO — Otimização para IAs',
      href: '/geo-ia',
      icon: Cpu,
      color: 'from-purple-600 to-violet-600',
      desc: 'Engenharia de dados e citação de marcas para garantir que seu negócio seja recomendado nas respostas do ChatGPT, Gemini, Claude e Perplexity.',
    },
    {
      title: 'SEO Técnico & Schema.org',
      href: '/seo-tecnico',
      icon: Code,
      color: 'from-cyan-600 to-blue-600',
      desc: 'Auditoria de código, Core Web Vitals, marcações de dados estruturados em JSON-LD, aceleração e garantia de indexação sem falhas.',
    },
    {
      title: 'Auditoria & Diagnóstico',
      href: '/auditoria-seo',
      icon: TrendingUp,
      color: 'from-rose-600 to-pink-600',
      desc: 'Análise detalhada do seu site atual, identificando por que seus concorrentes estão na frente e qual o caminho mais rápido para superá-los.',
    },
  ];

  const homeFaqs = [
    {
      question: 'Por que escolher Omar SEO em vez de uma agência tradicional?',
      answer: 'Omar SEO é uma consultoria hiperespecializada liderada diretamente por Omar Skafi. Enquanto agências tradicionais dividem sua atenção em redes sociais e artes, nós dedicamos 100% dos nossos esforços à engenharia de visibilidade, algoritmos do Google e estruturação de dados para IAs.',
    },
    {
      question: 'Como funciona o trabalho com dados estruturados (Schema.org)?',
      answer: 'Implementamos códigos JSON-LD específicos que explicam ao robô do Google exatamente quem é sua empresa, o endereço legal, o telefone, os serviços prestados, horários de funcionamento e avaliações. Isso facilita a conquista de Rich Snippets e presença em pesquisas locais.',
    },
    {
      question: 'Em quanto tempo vejo resultados de SEO em Curitiba?',
      answer: 'Ações no Google Maps e correções técnicas de SEO Local costumam gerar aumento em ligações e interações entre 30 e 90 dias. O SEO On-Page e a autoridade orgânica do site evoluem continuamente ao longo dos meses.',
    },
    {
      question: 'Omar SEO atende empresas fora de Curitiba?',
      answer: 'Sim! Atendemos presencialmente na Região Metropolitana de Curitiba e remotamente em todo o estado do Paraná, Santa Catarina, Rio Grande do Sul e demais estados do Brasil.',
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <EnhancedSEO
        title="Omar SEO | Especialista em SEO, Google, Maps e GEO para IA"
        description="Omar SEO: estratégia completa de SEO técnico, SEO local, Google Maps, GEO, conteúdo e dados estruturados para ampliar a visibilidade de empresas no Google e em mecanismos de IA."
        canonical="/"
      />

      {/* HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 lg:py-20 overflow-hidden">
        <BackgroundVideo
          src="https://img.supremasite.com.br/seo-omar.mp4"
          opacity={0.40}
          overlayClassName="bg-gradient-to-b from-[#0a0a0f]/70 via-[#0a0a0f]/50 to-[#0a0a0f]/80"
        />
        <ConstellationGrid className="absolute inset-0 z-0 opacity-30 pointer-events-none" />
        {/* Glow ambient background circles */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/80 text-blue-300 font-bold text-xs uppercase tracking-widest shadow-lg">
              <Zap size={14} className="text-yellow-400" />
              <span>Engenharia de Visibilidade Digital • Curitiba / PR</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-display text-white tracking-tight leading-[1.1]">
              SEO Completo para sua Empresa ser Encontrada no{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-yellow-400 bg-clip-text text-transparent">
                Google e nas Inteligências Artificiais
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg md:text-xl font-normal max-w-3xl mx-auto leading-relaxed">
              Estratégias de SEO, SEO Local, Google Maps, GEO e estruturação de dados para aumentar a presença da sua empresa no Google, ChatGPT, Gemini, Bing e outros mecanismos de descoberta.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/auditoria-seo"
                className="btn-primary-gold btn-shimmer w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm"
              >
                <Zap size={16} className="fill-slate-950" />
                <span>Auditar Empresa</span>
              </Link>

              <a
                href="https://wa.me/5541992721004"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-emerald-wa btn-shimmer w-full sm:w-auto px-5 py-3.5 text-xs sm:text-sm"
              >
                <MessageCircle size={16} />
                <span>Falar no WhatsApp</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* CENTRAL HERO ANIMATION */}
          <HeroAnimation />
        </div>
      </section>

      <SectionDivider color="cyan" />

      {/* DIAGNOSTIC SECTION (High Conversion) */}
      <DiagnosticSection />

      <SectionDivider color="cyan" />

      {/* SEO + GEO + AIO INTERACTIVE MOTION GRAPHICS SECTION */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-cyan-500/30 inline-flex items-center gap-1.5 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              <Sparkles size={13} className="text-cyan-400" />
              <span>A Nova Era da Visibilidade Digital</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white tracking-tight">
              Como Ganhar Mercado:{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-yellow-400 bg-clip-text text-transparent">
                SEO + GEO + AIO
              </span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Descubra em 30 segundos como a combinação de busca tradicional, modelos generativos e otimização semântica expande a participação de mercado da sua empresa com previsibilidade.
            </p>
          </div>

          {/* Interactive Motion Graphic Box */}
          <div className="max-w-5xl mx-auto space-y-6">
            <SeoGeoAioExplainer />

            {/* Direct Trigger to Dedicated Video Landing Page */}
            <div className="bg-gradient-to-r from-blue-950/80 via-slate-900/90 to-cyan-950/80 border border-cyan-500/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              <div className="space-y-2 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                  <Sparkles size={13} className="text-cyan-400" />
                  <span>Landing Page Dedicada com 4 Capítulos em Vídeo</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black font-display text-white">
                  Quer assistir à apresentação completa em vídeo?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  Acesse nossa página imersiva com 4 capítulos em vídeo, áudio explicativo e roteiro estratégico detalhado sobre SEO, GEO e AIO.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
                <Link
                  to="/seo-geo-aio"
                  className="btn-primary-gold btn-shimmer w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
                >
                  <span>Assistir Apresentação (4 Vídeos)</span>
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="/seo-geo-aio.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-cyan-300 underline underline-offset-4 py-1"
                >
                  Abrir versão standalone .html ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider color="blue" />

      {/* PILLARS OF SERVICES */}
      <section className="py-20 bg-[#0d0f14] relative border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-950/80 px-3 py-1 rounded border border-blue-800">
              Metodologia de Alta Performance
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white mt-3">
              Serviços de SEO e Estruturação
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Soluções sob medida para posicionar marcas de Curitiba e região no topo dos buscadores e assistentes virtuais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillarServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-slate-950/80 border border-slate-800/80 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-950/50 flex flex-col justify-between group"
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold font-display text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-900">
                    <Link
                      to={service.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 group-hover:translate-x-1 transition-all"
                    >
                      <span>Conhecer Estratégia</span>
                      <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AUTHORITY & ABOUT OMAR SECTION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <BackgroundVideo
          src="https://img.supremasite.com.br/omar-seo.mp4"
          opacity={0.35}
          overlayClassName="bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/65 to-[#0a0a0f]/85"
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/90 border border-cyan-400/50 text-cyan-300 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_15px_rgba(34,211,238,0.3)] backdrop-blur-md">
              <Award size={16} className="text-yellow-400 shrink-0" />
              <span className="font-bold text-cyan-200">Autoridade em SEO em Curitiba</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold font-display leading-tight sm:leading-snug tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-blue-300 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              A Ciência de Fazer Sua Empresa Ser Encontrada na Primeira Página
            </h2>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Com sede no Batel/Rebouças em Curitiba, Omar Skafi atua há mais de uma década na interseção entre tecnologia, arquitetura web e marketing de performance.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Com o respaldo estrutural da <strong className="text-white font-bold underline decoration-cyan-400 decoration-2">Suprema Sites Express (OSKAFI WEB SITES LTDA ME)</strong>, oferecemos um atendimento consultivo direto e sem intermediários, focado no faturamento real do seu negócio.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-xl backdrop-blur-md hover:border-cyan-500/50 transition-colors">
                <div className="text-2xl sm:text-3xl font-black font-display text-yellow-400 drop-shadow-sm">100%</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">SEO Técnico e Semântico Verdadeiro</div>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-xl backdrop-blur-md hover:border-cyan-500/50 transition-colors">
                <div className="text-2xl sm:text-3xl font-black font-display text-cyan-400 drop-shadow-sm">75+</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">Bairros de Curitiba Cobertos</div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/omar-skafi"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-yellow-400 hover:text-yellow-300 border-b-2 border-yellow-400/60 pb-1 transition-colors"
              >
                <span>Conheça a história e metodologia de Omar Skafi →</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-900/95 border border-blue-500/40 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-md relative z-10">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-6 flex items-center gap-2.5">
              <ShieldCheck className="text-blue-400 shrink-0" size={24} />
              <span>Garantias da Nossa Consultoria</span>
            </h3>

            <div className="space-y-4 text-sm sm:text-base">
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-slate-200 leading-relaxed">
                  <strong className="text-white font-bold">Sem Promessas Ilusórias:</strong> Não prometemos "posição nº 1 em 24h" porque o Google pune manipuladores. Prometemos trabalho técnico sério e contínuo.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-slate-200 leading-relaxed">
                  <strong className="text-white font-bold">Atendimento Direto:</strong> Reuniões de alinhamento diretamente com Omar Skafi para análise de relatórios.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-slate-200 leading-relaxed">
                  <strong className="text-white font-bold">Código Limpo e Válido:</strong> Respeitamos rigorosamente as diretrizes para webmasters do Google e os padrões Schema.org.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-slate-200 leading-relaxed">
                  <strong className="text-white font-bold">Relatórios Sem Jargões:</strong> Métricas focadas em chamadas telefônicas, cliques no WhatsApp, acessos orgânicos e leads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPETITIVE INDUSTRIES EXPERIENCE & DOCUMENTED CASES SECTION */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-950/90 via-slate-900 to-cyan-950/90 border border-yellow-500/40 shadow-[0_0_30px_rgba(250,204,21,0.12)] space-y-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="px-3 py-1 rounded-full bg-yellow-400 text-slate-950 text-[10px] font-black uppercase tracking-widest inline-block">
              Evidências Reais & Cases Documentados
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
              Resultados Reais Documentados no Google (SEO & GEO/IA)
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Demonstração factual da engenharia semântica, SEO Local e visibilidade em inteligência artificial do Google em Curitiba.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 pt-2">
            {/* Case 01 Card */}
            <div className="p-5 rounded-2xl bg-slate-950/90 border border-yellow-500/40 hover:border-yellow-400 transition-colors space-y-3 flex flex-col justify-between group">
              <div className="space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-yellow-400 bg-yellow-950/80 px-2.5 py-0.5 rounded border border-yellow-800/60 inline-block">
                  Advocacia / SEO Orgânico
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-yellow-300 transition-colors">
                  “advogados planos de saúde”
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Primeira página documentada no Google em consulta jurídica especializada de alta consideração.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80">
                <Link
                  to="/resultados/seo-advogados-planos-de-saude"
                  className="text-xs font-bold text-yellow-400 hover:text-yellow-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Ver Case Advocacia</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>

            {/* Case 02 Card */}
            <div className="p-5 rounded-2xl bg-slate-950/90 border border-cyan-500/40 hover:border-cyan-400 transition-colors space-y-3 flex flex-col justify-between group">
              <div className="space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800/60 inline-block">
                  Celulares / Varejo Local
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  “celulares em Curitiba”
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Shopcell posicionada organicamente no Google para a consulta comercial estratégica no Centro.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80">
                <Link
                  to="/resultados/seo-celulares-curitiba-shopcell"
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Ver Case Shopcell</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>

            {/* Case 03 Compact Card - Carplus AI Overview */}
            <div className="p-5 rounded-2xl bg-slate-950/90 border border-cyan-500/60 hover:border-cyan-300 transition-colors space-y-3 flex flex-col justify-between group shadow-[0_0_15px_rgba(34,211,238,0.15)]">
              <div className="space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800/60 inline-block">
                  GEO / Google AI Overview
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Carplus na IA do Google
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Apresentada na Visão geral criada por IA do Google em pesquisa sobre pneus e oficinas.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80">
                <Link
                  to="/resultados/carplus-google-ai-overview-pneus-curitiba"
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Ver Case Carplus</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>

            {/* Case 04 Compact Card - Ecoservy SEO Local */}
            <div className="p-5 rounded-2xl bg-slate-950/90 border border-emerald-500/60 hover:border-emerald-300 transition-colors space-y-3 flex flex-col justify-between group shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <div className="space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800/60 inline-block">
                  SEO Local / Google Maps
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                  Ecoservy — “corte e poda”
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Primeiro resultado empresarial visível no bloco local documentado na captura em Curitiba.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80">
                <Link
                  to="/resultados/seo-local-ecoservy-corte-e-poda-curitiba"
                  className="text-xs font-bold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Ver Case Ecoservy</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>

            {/* Case 05 Compact Card - Comfort Divisórias SEO + GEO */}
            <div className="p-5 rounded-2xl bg-slate-950/90 border border-cyan-500/60 hover:border-cyan-300 transition-colors space-y-3 flex flex-col justify-between group shadow-[0_0_15px_rgba(34,211,238,0.15)]">
              <div className="space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800/60 inline-block">
                  SEO + GEO / IA do Google
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Comfort Divisórias na IA
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Presente na resposta gerada pela IA e resultado orgânico para divisórias Eucatex em Curitiba.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80">
                <Link
                  to="/resultados/comfort-divisorias-google-ia-curitiba"
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Ver Case Comfort</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>

            {/* Case 06 Compact Card - KY Drywall GEO / AIO */}
            <div className="p-5 rounded-2xl bg-slate-950/90 border border-cyan-500/60 hover:border-cyan-300 transition-colors space-y-3 flex flex-col justify-between group shadow-[0_0_15px_rgba(34,211,238,0.15)] sm:col-span-2 lg:col-span-1">
              <div className="space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800/60 inline-block">
                  GEO / AIO Busca Generativa
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  KY Drywall na IA do Google
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-mono">
                  “qual empresa drywall em curitiba” — citada na resposta generativa.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80">
                <Link
                  to="/resultados/ky-drywall-google-ia-curitiba"
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Ver Case KY Drywall</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>

            {/* Case 07 Compact Card - Alevinos Curitiba (+12 Anos de Parceria) */}
            <div className="p-5 rounded-2xl bg-slate-950/90 border border-emerald-500/60 hover:border-emerald-300 transition-colors space-y-3 flex flex-col justify-between group shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60 inline-block">
                    +12 Anos de Parceria
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                    SEO Local + Orgânico
                  </span>
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                  Alevinos Curitiba no Google
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-mono">
                  “alevinos” — presente no Google Maps e na 1ª página orgânica.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80">
                <Link
                  to="/resultados/seo-local-e-organico-alevinos-curitiba"
                  className="text-xs font-bold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Ver Case Alevinos Curitiba</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>

            {/* Case 08 Compact Card - Ômega Revestimentos (+4 Anos) */}
            <div className="p-5 rounded-2xl bg-slate-950/90 border border-cyan-500/60 hover:border-cyan-300 transition-colors space-y-3 flex flex-col justify-between group shadow-[0_0_15px_rgba(34,211,238,0.15)]">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60 inline-block">
                    +4 Anos de Parceria
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                    SEO + GEO/AIO
                  </span>
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Ômega Revestimentos em ACM
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-mono">
                  “qual empresa instala acm em curitiba” — resposta do Google + orgânico.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80">
                <Link
                  to="/resultados/omega-revestimentos-acm-seo-geo-curitiba"
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Ver Case Ômega</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>

            {/* Case 09 Compact Card - Casas Pinheirão (IA + Orgânico) */}
            <div className="p-5 rounded-2xl bg-slate-950/90 border border-cyan-500/60 hover:border-cyan-300 transition-colors space-y-3 flex flex-col justify-between group shadow-[0_0_15px_rgba(34,211,238,0.15)]">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60 inline-block">
                    Case #09 — GEO + SEO
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                    IA + Orgânico
                  </span>
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Casas Pinheirão na IA do Google
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-mono">
                  “quem vende casas pre fabricadas meu terreno...” — citada na IA e no orgânico.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80">
                <Link
                  to="/resultados/casas-pinheirao-google-ia-seo"
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Ver Case Casas Pinheirão</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>

            {/* Case 10 Compact Card - Motofrete (Centro de São Paulo / SP) */}
            <div className="p-5 rounded-2xl bg-slate-950/90 border border-emerald-500/60 hover:border-emerald-300 transition-colors space-y-3 flex flex-col justify-between group shadow-[0_0_15px_rgba(16,185,129,0.15)] sm:col-span-2 lg:col-span-1">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60 inline-block">
                    Case #10 — SEO Local
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    São Paulo / SP
                  </span>
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                  Motofrete (#1 no Google)
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-mono">
                  “Frete moto de são paulo para o paraná” — 1º lugar orgânico.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80">
                <Link
                  to="/resultados/motofrete-centro-sao-paulo-seo"
                  className="text-xs font-bold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Ver Case Motofrete SP</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>

            {/* Case 11 - RVM Persianas (Florianópolis / SC) */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all space-y-3 flex flex-col justify-between group">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60 inline-block">
                    Case #11 — SEO Local + Orgânico
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    Florianópolis / SC
                  </span>
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                  RVM Persianas (Florianópolis &amp; Lagoa)
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-mono">
                  “persianas na lagoa sc” — destaque orgânico em Barra da Lagoa.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80">
                <Link
                  to="/resultados/rvm-persianas-florianopolis-seo"
                  className="text-xs font-bold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Ver Case RVM Persianas</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>

            {/* Case 12 - Consultora Loovi (Curitiba / PR) */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all space-y-3 flex flex-col justify-between group">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60 inline-block">
                    Case #12 — SEO Orgânico + Entidade
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    Curitiba / PR
                  </span>
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Consultora Loovi (Barbara Duraes)
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-mono">
                  “consultora loovi” — presença orgânica para atividade profissional.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80">
                <Link
                  to="/resultados/consultora-loovi-google-seo"
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Ver Case Consultora Loovi</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Consolidated Section: Seu cliente já não pesquisa apenas palavras. Ele pergunta. */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-cyan-500/40 space-y-4 text-left">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800/60 inline-block">
                Padrão em Buscas Comerciais Conversacionais e Locais
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Seu cliente já não pesquisa apenas palavras. Ele pergunta.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Veja empresas encontradas em consultas comerciais e experiências de busca com IA quando consumidores descrevem exatamente o que procuram:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="text-cyan-400 font-bold block">Comfort Divisórias</span>
                <p className="text-slate-300 font-mono text-[11px]">“qual empresa divisorias eucatex em curitiba”</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="text-cyan-400 font-bold block">KY Drywall</span>
                <p className="text-slate-300 font-mono text-[11px]">“qual empresa drywall em curitiba”</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="text-cyan-400 font-bold block">Ômega Revestimentos</span>
                <p className="text-slate-300 font-mono text-[11px]">“qual empresa instala acm em curitiba”</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="text-cyan-400 font-bold block">Casas Pinheirão</span>
                <p className="text-slate-300 font-mono text-[11px]">“quem vende casas pre fabricadas meu terreno...”</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="text-emerald-400 font-bold block">Motofrete (SP)</span>
                <p className="text-slate-300 font-mono text-[11px]">“Motofrete centro São Paulo”</p>
              </div>
            </div>

            <div className="pt-2 text-center md:text-right">
              <Link
                to="/resultados"
                className="px-5 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Ver resultados documentados</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>

          <div className="pt-2 text-center md:text-right">
            <Link
              to="/resultados"
              className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 text-xs font-bold inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Ver Todos os Cases & Métricas em /resultados</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider color="purple" />

      {/* INTERNAL SEO LINK CLUSTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InternalLinkCluster />
      </section>

      <SectionDivider color="amber" />

      {/* FAQ SECTION */}
      <section className="py-20 bg-[#0c0e14] border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-950/60 px-3 py-1 rounded border border-blue-800/60 mb-2">
              <HelpCircle size={14} />
              <span>Dúvidas Frequentes</span>
            </div>
            <h2 className="text-3xl font-black font-display text-white">
              Perguntas Frequentes sobre SEO
            </h2>
          </div>

          <div className="space-y-4">
            {homeFaqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                <h3 className="text-base font-bold text-white font-display mb-2 flex items-start gap-2">
                  <span className="text-blue-400">Q.</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
