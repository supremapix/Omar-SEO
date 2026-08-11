import React from 'react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { HeroAnimation } from '../components/HeroAnimation';
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
          opacity={0.25}
          overlayClassName="bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/60 to-[#0a0a0f]/90"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <BackgroundVideo
          src="https://img.supremasite.com.br/omar-seo.mp4"
          opacity={0.18}
          overlayClassName="bg-gradient-to-b from-[#0a0a0f]/90 via-[#0a0a0f]/80 to-[#0a0a0f]/95"
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800 text-blue-300 font-bold text-xs uppercase tracking-wider">
              <Award size={14} className="text-yellow-400" />
              <span>Autoridade em SEO em Curitiba</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black font-display text-white leading-tight">
              A Ciência de Fazer Sua Empresa Ser Encontrada na Primeira Página
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Com sede no Batel/Rebouças em Curitiba, Omar Skafi atua há mais de uma década na interseção entre tecnologia, arquitetura web e marketing de performance.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Com o respaldo estrutural da <strong className="text-white">Suprema Sites Express (OSKAFI WEB SITES LTDA ME)</strong>, oferecemos um atendimento consultivo direto e sem intermediários, focado no faturamento real do seu negócio.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-2xl font-black font-display text-yellow-400">100%</div>
                <div className="text-xs text-slate-400 mt-1">SEO Técnico e Semântico Verdadeiro</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-2xl font-black font-display text-blue-400">75+</div>
                <div className="text-xs text-slate-400 mt-1">Bairros de Curitiba Cobertos</div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/omar-skafi"
                className="inline-flex items-center gap-2 text-sm font-bold text-yellow-400 hover:text-yellow-300 border-b-2 border-yellow-400/50 pb-1"
              >
                <span>Conheça a história e metodologia de Omar Skafi →</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#0e1017] border border-slate-800 rounded-3xl p-8 shadow-2xl relative">
            <h3 className="text-xl font-bold font-display text-white mb-6 flex items-center gap-2">
              <ShieldCheck className="text-blue-400" />
              <span>Garantias da Nossa Consultoria</span>
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <CheckCircle size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-slate-300">
                  <strong className="text-white">Sem Promessas Ilusórias:</strong> Não prometemos "posição nº 1 em 24h" porque o Google pune manipuladores. Prometemos trabalho técnico sério e contínuo.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-slate-300">
                  <strong className="text-white">Atendimento Direto:</strong> Reuniões de alinhamento diretamente com Omar Skafi para análise de relatórios.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-slate-300">
                  <strong className="text-white">Código Limpo e Válido:</strong> Respeitamos rigorosamente as diretrizes para webmasters do Google e os padrões Schema.org.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-slate-300">
                  <strong className="text-white">Relatórios Sem Jargões:</strong> Métricas focadas em chamadas telefônicas, cliques no WhatsApp, acessos orgânicos e leads.
                </p>
              </div>
            </div>
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
