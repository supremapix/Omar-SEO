import React from 'react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import ConstellationGrid from '../components/ui/constellation-grid';
import { BackgroundVideo } from '../components/BackgroundVideo';
import {
  Award,
  TrendingUp,
  MapPin,
  Eye,
  ArrowRight,
  Zap,
  CheckCircle2,
  Smartphone,
  Car,
  Wrench,
  Droplet,
  Building2,
  Layers,
  Home as HomeIcon,
  Blinds,
  Briefcase,
  ShieldAlert,
  Search,
  FileCheck,
  Check,
  AlertCircle,
  Scale,
  Sparkles,
  Bot,
  Cpu,
  Clock,
  ChevronRight,
  Shield,
  UserCheck,
} from 'lucide-react';

export default function Resultados() {
  const structuredCases = [
    {
      id: 'celulares',
      title: 'Assistência Técnica & Venda de Celulares',
      icon: Smartphone,
      segment: 'Tecnologia & Varejo Local',
      region: 'Curitiba (Batel, Centro e Bairros)',
      challenge: 'Alta densidade de concorrentes locais disputando buscas de emergência por reparo de telas, troca de baterias e venda de smartphones.',
      searchIntent: 'Transacional de alta urgência ("conserto de celular curitiba", "troca de tela iphone batel", "bateria samsung perto de mim").',
      strategy: 'Estruturação de micro-páginas por serviço e modelo de aparelho, implementação de Schema.org EmergencyService e Product, e otimização de Perfil da Empresa no Google.',
      result: 'Atuação orientada à captura de pesquisas de emergência e consolidação da presença orgânica local.',
      evidence: 'Evidência pendente de documentação',
      methodology: 'SEO Hiperlocal com sincronização entre área de cobertura no mapa (areaServed) e código estruturado no site.',
    },
    {
      id: 'pneus',
      title: 'Pneus & Auto Center Automotivo',
      icon: Car,
      segment: 'Auto Center & Peças Automotivas',
      region: 'Curitiba, São José dos Pinhais e CIC',
      challenge: 'Concorrência com e-commerces e redes varejistas em buscas com intenção imediata de troca de pneus por marca e medida.',
      searchIntent: 'Comercial e transacional de preço ("pneu 205/55 r16 curitiba", "auto center alinhamento e balanceamento sjp").',
      strategy: 'Criação de catálogos semânticos organizados por dimensão de pneu com marcação Schema.org Product e OfferCatalog, combinados a landing pages regionais.',
      result: 'Estruturação de catálogo semântico para buscas por especificações e medidas de alta demanda.',
      evidence: 'Evidência pendente de documentação',
      methodology: 'Modelagem semântica de produtos alinhada à arquitetura de informação focada no comportamento do motorista.',
    },
    {
      id: 'desentupidoras',
      title: 'Desentupidoras e Serviços 24 Horas',
      icon: Wrench,
      segment: 'Serviços de Urgência Residencial & Predial',
      region: 'Curitiba e Região Metropolitana',
      challenge: 'Custo por clique elevado em anúncios pagos e concorrência em pesquisas de emergência.',
      searchIntent: 'Urgência extrema ("desentupidora 24 horas curitiba", "desentupir esgoto emergência batel").',
      strategy: 'Páginas otimizadas para carregamento mobile ultrarrápido, presença de chamada direta e Schema.org EmergencyService por região.',
      result: 'Otimização focada em velocidade de carregamento e redução de fricção para conversão no celular em horários de pico.',
      evidence: 'Evidência pendente de documentação',
      methodology: 'Fricção zero no clique móvel e indexação geográfica direcionada à prontidão de atendimento.',
    },
    {
      id: 'encanadores',
      title: 'Encanadores & Caça-Vazamentos Hidráulicos',
      icon: Droplet,
      segment: 'Manutenção Hidráulica Especializada',
      region: 'Curitiba e Região Metropolitana',
      challenge: 'Dificuldade de diferenciação em meio a diretórios genéricos de prestadores de serviço.',
      searchIntent: 'Pesquisa técnica de solução ("caça vazamento não destrutivo curitiba", "encanador hidráulico urgente").',
      strategy: 'Demonstração em conteúdo das tecnologias de detecção utilizadas e criação de marcação Schema.org Service detalhada.',
      result: 'Estruturação de autoridade técnica e detalhamento de serviços de detecção não destrutiva.',
      evidence: 'Evidência pendente de documentação',
      methodology: 'Construção de sinais de E-E-A-T (Experiência, Expertise, Autoridade e Confiança) com conteúdo técnico.',
    },
    {
      id: 'construtoras',
      title: 'Construtoras & Obras Corporativas',
      icon: Building2,
      segment: 'Engenharia & Construção Civil B2B',
      region: 'Paraná, Curitiba e Polos Industriais',
      challenge: 'Ciclo de decisão longo e necessidade de alcançar gestores de infraestrutura B2B.',
      searchIntent: 'Ticket alto B2B ("construtora de galpões industriais curitiba", "reforma comercial predial").',
      strategy: 'SEO de Conteúdo Técnico de Engenharia, portfolios de obras documentados com especificações técnicas e Schema.org Organization.',
      result: 'Inbound SEO B2B direcionado a decisores corporativos e engenheiros de infraestrutura.',
      evidence: 'Evidência pendente de documentação',
      methodology: 'Engenharia de conteúdo B2B projetada para corresponder às exigências de cotações corporativas.',
    },
    {
      id: 'estruturas',
      title: 'Estruturas Metálicas & Coberturas Industriais',
      icon: Layers,
      segment: 'Indústria Metalúrgica & Engenharia Estrutural',
      region: 'Curitiba, RMC, Ponta Grossa e Paraná',
      challenge: 'Disputa contra fabricantes de estruturas em cotações industriais estaduais.',
      searchIntent: 'B2B Industrial ("fabricante de estrutura metálica para galpão", "cobertura metálica industrial paraná").',
      strategy: 'Otimização semântica por modalidade construtiva (mezaninos, galpões, coberturas) e clusters de páginas regionalizadas para polos industriais.',
      result: 'Arquitetura temática estruturada para captar demandas de engenharia estrutural no Paraná.',
      evidence: 'Evidência pendente de documentação',
      methodology: 'Engenharia semântica aplicada à terminologia industrial e especificações de comprador.',
    },
    {
      id: 'calhas',
      title: 'Fabricação & Instalação de Calhas e Rufos',
      icon: HomeIcon,
      segment: 'Instalação & Manutenção Residencial/Industrial',
      region: 'Curitiba e Cidades Vizinhas',
      challenge: 'Mercado pulverizado com forte busca local por orçamento e instalação sob medida.',
      searchIntent: 'Direta e comercial ("fábrica de calhas curitiba", "instalação de rufos sob medida").',
      strategy: 'SEO Local por bairro com especificações de materiais (alumínio, galvanizado, inox) e marcação Schema.org.',
      result: 'Presença e indexação geo-específica para atração de pedidos de orçamento sob medida.',
      evidence: 'Evidência pendente de documentação',
      methodology: 'Integração de SEO Local por regiões com perfis corporativos otimizados.',
    },
    {
      id: 'persianas',
      title: 'Persianas & Cortinas Sob Medida',
      icon: Blinds,
      segment: 'Decoração, Arquitetura & Automação',
      region: 'Curitiba (Batel, Cabral, Ecoville)',
      challenge: 'Disputa pelo público de alto padrão em bairros nobres e escritórios corporativos.',
      searchIntent: 'Comercial qualificada ("persianas motorizadas curitiba", "cortinas sob medida batel").',
      strategy: 'Otimização visual e semântica de modelos premium (rolo, romana, motorizadas) e Schema.org Product.',
      result: 'Apresentação semântica focada em especificações de arquitetura e automação residencial.',
      evidence: 'Evidência pendente de documentação',
      methodology: 'SEO focado na jornada do consumidor qualificado com apresentação estética relevante.',
    },
  ];

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <EnhancedSEO
        title="Cases e Resultados de SEO | Omar SEO — Experiência Prática"
        description="Confira casos reais e factual de SEO técnico, SEO Local e GEO conduzidos por Omar SEO em segmentos competitivos em Curitiba e no Brasil."
        canonical="/resultados"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Cases e Resultados', item: '/resultados' },
        ]}
      />

      {/* Header */}
      <div className="relative p-8 sm:p-12 lg:p-16 rounded-3xl bg-slate-950/80 border border-yellow-500/30 shadow-[0_0_40px_rgba(250,204,21,0.15)] overflow-hidden">
        <BackgroundVideo
          src="https://img.supremasite.com.br/seo-omar.mp4"
          opacity={0.40}
          overlayClassName="bg-gradient-to-b from-[#0a0a0f]/75 via-[#0a0a0f]/55 to-[#0a0a0f]/85"
        />
        <ConstellationGrid className="absolute inset-0 z-0 opacity-40 pointer-events-none" />
        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-bold text-xs uppercase tracking-wider">
            <Award size={14} />
            <span>Evidência, Técnica e Fatos</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            Cases e Resultados de SEO
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Demonstração factual da engenharia semântica de Omar SEO aplicada a mercados de alta competitividade em Curitiba, na RMC e no Brasil.
          </p>
        </div>
      </div>

      {/* Mandatory Ethics & Transparency Disclaimer Card */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-yellow-500/40 shadow-xl space-y-3">
        <div className="flex items-center gap-3 text-yellow-400 font-bold text-sm sm:text-base">
          <ShieldAlert size={22} className="shrink-0 text-yellow-400" />
          <h2>Aviso de Transparência e Isenção de Garantia Futura</h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white">Diferenciação Ética Fundamental:</strong> Os dados e metodologias descritos nesta página representam <strong className="text-yellow-300">resultados passados e conquistas factuais</strong> obtidas em projetos com otimização técnica. O Omar SEO <strong className="text-white">NÃO garante posições futuras no Google, Google Maps ou motores de IA</strong> para nenhum cliente, visto que os algoritmos de busca são de propriedade exclusiva de terceiros (Google, OpenAI, Anthropic, Microsoft) e sofrem constantes atualizações. Nosso compromisso é a aplicação rigorosa das melhores práticas de engenharia de código, Schema.org e SEO técnico recomendadas mundialmente.
        </p>
      </section>

      {/* Documented Cases Section */}
      <section className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded border border-emerald-800 inline-block">
            Evidência Factual Documentada
          </span>
          <h2 className="text-2xl sm:text-4xl font-black font-display text-white">
            Cases de Sucesso Factualmente Documentados
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Relatórios e capturas de tela reais fornecidas pelos proprietários, registrando presença orgânica e visibilidade em experiências generativas no Google.
          </p>
        </div>

        {/* SUB-SECTION 1: SEO — Resultados Orgânicos Documentados */}
        <div className="space-y-6">
          <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
              <Search className="text-yellow-400" size={22} />
              <span>SEO — Resultados Orgânicos Documentados</span>
            </h2>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">SERP Google Search</span>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {/* Featured Case #01 Block - Advocacia */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-yellow-500/50 shadow-[0_0_30px_rgba(250,204,21,0.12)] space-y-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-yellow-400 bg-yellow-950/80 px-3 py-1 rounded-full border border-yellow-500/30">
                    <Sparkles size={13} />
                    <span>Case Documentado #01 — Advocacia / Direito da Saúde</span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-bold font-display text-white pt-1">
                    Advocacia / Direito da Saúde — “Advogados Planos de Saúde”
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Primeira página do Google registrada em consulta jurídica especializada de alta consideração em Curitiba.
                  </p>
                </div>

                <Link
                  to="/resultados/seo-advogados-planos-de-saude"
                  className="btn-primary-gold btn-shimmer px-5 py-2.5 rounded-full font-bold text-xs inline-flex items-center gap-2 shrink-0"
                >
                  <span>Ver Case Completo</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Screenshot Thumbnail */}
                <div className="lg:col-span-6 bg-white p-2 rounded-2xl border border-slate-800 overflow-hidden group relative">
                  <Link to="/resultados/seo-advogados-planos-de-saude" className="block">
                    <img
                      src="/images/cases/case-seo-advogados-planos-de-saude-google.png"
                      alt="Captura real do Google para advogados planos de saude"
                      width={1045}
                      height={262}
                      loading="lazy"
                      className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </Link>
                </div>

                {/* Quick Metrics & Details */}
                <div className="lg:col-span-6 space-y-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Consulta de Pesquisa Registrada
                    </span>
                    <span className="text-sm font-bold text-yellow-300 font-mono">
                      advogados planos de saúde
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Perfil de Intenção
                    </span>
                    <span className="text-sm font-bold text-slate-200">
                      Serviço especializado de alta consideração (Decisão jurídica fundamentada)
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Presença Factual
                    </span>
                    <span className="text-sm font-bold text-emerald-400">
                      Primeira página do Google (Resultado Orgânico)
                    </span>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/resultados/seo-advogados-planos-de-saude"
                      className="text-cyan-400 hover:text-cyan-300 font-bold inline-flex items-center gap-1.5 text-xs"
                    >
                      <span>Acessar documentação detalhada do Case #01</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Case #02 Block - Shopcell */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-cyan-500/50 shadow-[0_0_30px_rgba(34,211,238,0.12)] space-y-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
                    <Smartphone size={13} />
                    <span>Case Documentado #02 — Celulares / Varejo Local</span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-bold font-display text-white pt-1">
                    Shopcell — “Celulares em Curitiba”
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Resultado orgânico documentado no Google para uma consulta comercial estratégica em Curitiba.
                  </p>
                </div>

                <Link
                  to="/resultados/seo-celulares-curitiba-shopcell"
                  className="px-5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs inline-flex items-center gap-2 shrink-0 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                >
                  <span>Ver Case Completo</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Screenshot Thumbnail */}
                <div className="lg:col-span-6 bg-white p-2 rounded-2xl border border-slate-800 overflow-hidden group relative">
                  <Link to="/resultados/seo-celulares-curitiba-shopcell" className="block">
                    <img
                      src="/images/cases/case-shopcell-celulares-em-curitiba-google.png"
                      alt="Shopcell posicionada no Google para celulares em Curitiba"
                      width={1080}
                      height={390}
                      loading="lazy"
                      className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </Link>
                </div>

                {/* Quick Metrics & Details */}
                <div className="lg:col-span-6 space-y-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Consulta de Pesquisa Registrada
                    </span>
                    <span className="text-sm font-bold text-yellow-300 font-mono">
                      celulares em Curitiba
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Perfil de Intenção
                    </span>
                    <span className="text-sm font-bold text-slate-200">
                      Varejo local e intenção comercial imediata por produtos no Centro
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Presença Factual
                    </span>
                    <span className="text-sm font-bold text-emerald-400">
                      Resultado orgânico documentado na página de buscas
                    </span>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/resultados/seo-celulares-curitiba-shopcell"
                      className="text-cyan-400 hover:text-cyan-300 font-bold inline-flex items-center gap-1.5 text-xs"
                    >
                      <span>Acessar documentação detalhada do Case #02</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SUB-SECTION 2: GEO/AIO — Resultados em Experiências Generativas */}
        <div className="space-y-6 pt-4">
          <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
              <Bot className="text-cyan-400" size={22} />
              <span>GEO/AIO — Resultados em Experiências Generativas</span>
            </h2>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">Google AI Overview (IA)</span>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {/* Case #03 Block - Carplus */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-cyan-500/60 shadow-[0_0_35px_rgba(34,211,238,0.15)] space-y-6 relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-950/90 px-3 py-1 rounded-full border border-cyan-500/40">
                    <Cpu size={13} />
                    <span>Case Documentado #03 — Carplus | Google AI Overview</span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-bold font-display text-white pt-1">
                    Carplus apresentada pela IA do Google em Curitiba
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Resposta sintetizada pelo Google AI Overview destacando a Carplus Centro Automotivo em consulta comercial sobre pneus e oficinas.
                  </p>
                </div>

                <Link
                  to="/resultados/carplus-google-ai-overview-pneus-curitiba"
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs inline-flex items-center gap-2 shrink-0 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                >
                  <span>Ver Evidência em IA</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Screenshot Thumbnail */}
                <div className="lg:col-span-6 bg-white p-2 rounded-2xl border border-slate-800 overflow-hidden group relative">
                  <Link to="/resultados/carplus-google-ai-overview-pneus-curitiba" className="block">
                    <img
                      src="/images/cases/case-carplus-google-ai-overview-pneus-curitiba.png"
                      alt="Carplus apresentada na Visão geral criada por IA do Google"
                      width={1180}
                      height={620}
                      loading="lazy"
                      className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </Link>
                </div>

                {/* Quick Metrics & Details */}
                <div className="lg:col-span-6 space-y-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Consulta Registrada
                    </span>
                    <span className="text-sm font-bold text-yellow-300 font-mono">
                      Oficinas dos Pneus Curitiba
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Localização
                    </span>
                    <span className="text-sm font-bold text-slate-200">
                      Curitiba, PR
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Superfície de Busca
                    </span>
                    <span className="text-sm font-bold text-cyan-400">
                      Visão geral criada por IA (Google AI Overview)
                    </span>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/resultados/carplus-google-ai-overview-pneus-curitiba"
                      className="text-cyan-400 hover:text-cyan-300 font-bold inline-flex items-center gap-1.5 text-xs"
                    >
                      <span>Acessar documentação completa do Case #03</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SUB-SECTION 3: SEO LOCAL / GOOGLE MAPS — Bloco de Empresas */}
        <div className="space-y-6 pt-4">
          <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
              <MapPin className="text-emerald-400" size={22} />
              <span>SEO LOCAL / GOOGLE MAPS — Bloco de Empresas</span>
            </h2>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">Local Pack / Google Business</span>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {/* Case #04 Block - Ecoservy */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-emerald-500/60 shadow-[0_0_35px_rgba(16,185,129,0.15)] space-y-6 relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/90 px-3 py-1 rounded-full border border-emerald-500/40">
                    <MapPin size={13} />
                    <span>Case Documentado #04 — Ecoservy | SEO Local</span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-bold font-display text-white pt-1">
                    Ecoservy — “Corte e Poda”
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Primeiro resultado empresarial visível no bloco local documentado na captura para a pesquisa “corte e poda” em Curitiba.
                  </p>
                </div>

                <Link
                  to="/resultados/seo-local-ecoservy-corte-e-poda-curitiba"
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-xs inline-flex items-center gap-2 shrink-0 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                >
                  <span>Ver Evidência</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Screenshot Thumbnail */}
                <div className="lg:col-span-6 bg-white p-2 rounded-2xl border border-slate-800 overflow-hidden group relative">
                  <Link to="/resultados/seo-local-ecoservy-corte-e-poda-curitiba" className="block">
                    <img
                      src="/images/cases/case-ecoservy-corte-e-poda-google-maps.png"
                      alt="Ecoservy como primeiro resultado visível no Google Local para corte e poda em Curitiba"
                      width={1180}
                      height={580}
                      loading="lazy"
                      className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </Link>
                </div>

                {/* Quick Metrics & Details */}
                <div className="lg:col-span-6 space-y-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Consulta Registrada
                    </span>
                    <span className="text-sm font-bold text-yellow-300 font-mono">
                      corte e poda
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Localização
                    </span>
                    <span className="text-sm font-bold text-slate-200">
                      Curitiba, PR
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Superfície de Busca
                    </span>
                    <span className="text-sm font-bold text-emerald-400">
                      Resultados locais do Google (Google Maps / Local Pack)
                    </span>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/resultados/seo-local-ecoservy-corte-e-poda-curitiba"
                      className="text-emerald-400 hover:text-emerald-300 font-bold inline-flex items-center gap-1.5 text-xs"
                    >
                      <span>Acessar documentação completa do Case #04</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Case #07 Block - Alevinos Curitiba (+12 Anos de Parceria) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-emerald-500/60 shadow-[0_0_35px_rgba(16,185,129,0.15)] space-y-6 relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/90 px-3 py-1 rounded-full border border-emerald-500/40">
                      <Award size={13} fill="currentColor" />
                      <span>+12 ANOS DE PARCERIA</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-800/60">
                      <span>Case Documentado #07 — Alevinos Curitiba</span>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-bold font-display text-white pt-1">
                    Alevinos Curitiba — SEO Local + Orgânico
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    De uma estrutura digital dependente de ativos alugados a uma presença própria consolidada no Google.
                  </p>
                </div>

                <Link
                  to="/resultados/seo-local-e-organico-alevinos-curitiba"
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-xs inline-flex items-center gap-2 shrink-0 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                >
                  <span>Conhecer a história e ver a evidência</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Screenshot Thumbnail */}
                <div className="lg:col-span-6 bg-white p-2 rounded-2xl border border-slate-800 overflow-hidden group relative">
                  <Link to="/resultados/seo-local-e-organico-alevinos-curitiba" className="block">
                    <img
                      src="/images/cases/case-alevinos-curitiba-google.png"
                      alt="Alevinos Curitiba presente no Google Maps e no resultado orgânico para a palavra-chave alevinos"
                      width={1000}
                      height={800}
                      loading="lazy"
                      className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </Link>
                </div>

                {/* Quick Metrics & Details */}
                <div className="lg:col-span-6 space-y-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Consulta Registrada
                    </span>
                    <span className="text-sm font-bold text-yellow-300 font-mono">
                      alevinos
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Histórico do Projeto
                    </span>
                    <span className="text-sm font-bold text-emerald-400">
                      Mais de 12 anos acompanhando a evolução digital
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Resultado Atual Documentado
                    </span>
                    <span className="text-sm font-bold text-slate-200">
                      Presença simultânea no Google Maps e na 1ª página orgânica
                    </span>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/resultados/seo-local-e-organico-alevinos-curitiba"
                      className="text-emerald-400 hover:text-emerald-300 font-bold inline-flex items-center gap-1.5 text-xs"
                    >
                      <span>Acessar documentação completa e história do Case #07</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SUB-SECTION 4: SEO + GEO/AIO — Presença Generativa + Busca Orgânica */}
        <div className="space-y-6 pt-4">
          <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
              <Sparkles className="text-cyan-400" size={22} />
              <span>SEO + GEO/AIO — Presença Generativa + Busca Orgânica</span>
            </h2>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">IA do Google + Busca Tradicional</span>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {/* Case #05 Block - Comfort Divisórias */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-cyan-500/60 shadow-[0_0_35px_rgba(34,211,238,0.15)] space-y-6 relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-950/90 px-3 py-1 rounded-full border border-cyan-500/40">
                    <Sparkles size={13} fill="currentColor" />
                    <span>Case Documentado #05 — Comfort Divisórias | SEO + GEO</span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-bold font-display text-white pt-1">
                    Comfort Divisórias na IA do Google & Busca Orgânica
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Presença documentada tanto na Visão geral criada por IA quanto nos resultados orgânicos para a consulta comercial sobre divisórias Eucatex em Curitiba.
                  </p>
                </div>

                <Link
                  to="/resultados/comfort-divisorias-google-ia-curitiba"
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-xs inline-flex items-center gap-2 shrink-0 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                >
                  <span>Ver Evidência</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Screenshot Thumbnail */}
                <div className="lg:col-span-6 bg-white p-2 rounded-2xl border border-slate-800 overflow-hidden group relative">
                  <Link to="/resultados/comfort-divisorias-google-ia-curitiba" className="block">
                    <img
                      src="/images/cases/case-comfort-divisorias-eucatex-google-ai.png"
                      alt="Comfort Divisórias na Visão geral criada por IA do Google para divisórias Eucatex em Curitiba"
                      width={1180}
                      height={660}
                      loading="lazy"
                      className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </Link>
                </div>

                {/* Quick Metrics & Details */}
                <div className="lg:col-span-6 space-y-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Consulta Registrada
                    </span>
                    <span className="text-sm font-bold text-yellow-300 font-mono">
                      qual empresa divisorias eucatex em curitiba
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Localização & Plataforma
                    </span>
                    <span className="text-sm font-bold text-slate-200">
                      Curitiba, PR (Google)
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Superfícies Documentadas
                    </span>
                    <span className="text-sm font-bold text-cyan-400">
                      Visão geral criada por IA + Resultado Orgânico
                    </span>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/resultados/comfort-divisorias-google-ia-curitiba"
                      className="text-cyan-400 hover:text-cyan-300 font-bold inline-flex items-center gap-1.5 text-xs"
                    >
                      <span>Acessar documentação completa do Case #05</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Case #06 Block - KY Drywall & Steel Frame */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-cyan-500/60 shadow-[0_0_35px_rgba(34,211,238,0.15)] space-y-6 relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-950/90 px-3 py-1 rounded-full border border-cyan-500/40">
                    <Sparkles size={13} fill="currentColor" />
                    <span>Case Documentado #06 — KY Drywall | GEO / AIO</span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-bold font-display text-white pt-1">
                    KY Drywall &amp; Steel Frame citada pela IA do Google
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Empresa citada nominalmente na Visão geral criada por IA do Google para a consulta comercial de descoberta sobre empresas de drywall em Curitiba.
                  </p>
                </div>

                <Link
                  to="/resultados/ky-drywall-google-ia-curitiba"
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-xs inline-flex items-center gap-2 shrink-0 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                >
                  <span>Ver Evidência</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Screenshot Thumbnail */}
                <div className="lg:col-span-6 bg-white p-2 rounded-2xl border border-slate-800 overflow-hidden group relative">
                  <Link to="/resultados/ky-drywall-google-ia-curitiba" className="block">
                    <img
                      src="/images/cases/case-ky-drywall-google-ai-curitiba.png"
                      alt="KY Drywall citada na Visão geral criada por IA do Google para qual empresa drywall em Curitiba"
                      width={1180}
                      height={680}
                      loading="lazy"
                      className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </Link>
                </div>

                {/* Quick Metrics & Details */}
                <div className="lg:col-span-6 space-y-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Consulta Registrada
                    </span>
                    <span className="text-sm font-bold text-yellow-300 font-mono">
                      qual empresa drywall em curitiba
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Localização &amp; Plataforma
                    </span>
                    <span className="text-sm font-bold text-slate-200">
                      Curitiba, PR (Google)
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Superfície Documentada
                    </span>
                    <span className="text-sm font-bold text-cyan-400">
                      Visão geral criada por IA (Google AI Overview)
                    </span>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/resultados/ky-drywall-google-ia-curitiba"
                      className="text-cyan-400 hover:text-cyan-300 font-bold inline-flex items-center gap-1.5 text-xs"
                    >
                      <span>Acessar documentação completa do Case #06</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Case #08 Block - Ômega Revestimentos (+4 Anos de Parceria) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-cyan-500/60 shadow-[0_0_35px_rgba(34,211,238,0.15)] space-y-6 relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/90 px-3 py-1 rounded-full border border-emerald-500/40">
                      <Clock size={13} />
                      <span>+4 ANOS DE PARCERIA</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-800/60">
                      <span>Case Documentado #08 — Ômega Revestimentos | SEO + GEO</span>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-bold font-display text-white pt-1">
                    Ômega Revestimentos na Resposta do Google &amp; Busca Orgânica
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Presença documentada tanto na experiência de busca do Google quanto nos resultados orgânicos para a consulta comercial sobre instalação de ACM em Curitiba.
                  </p>
                </div>

                <Link
                  to="/resultados/omega-revestimentos-acm-seo-geo-curitiba"
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-xs inline-flex items-center gap-2 shrink-0 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                >
                  <span>Ver Evidência</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Screenshot Thumbnail */}
                <div className="lg:col-span-6 bg-white p-2 rounded-2xl border border-slate-800 overflow-hidden group relative">
                  <Link to="/resultados/omega-revestimentos-acm-seo-geo-curitiba" className="block">
                    <img
                      src="/images/cases/case-omega-revestimentos-acm-google-ai-seo.png"
                      alt="Ômega Revestimentos presente no Google para qual empresa instala ACM em Curitiba"
                      width={1000}
                      height={1100}
                      loading="lazy"
                      className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </Link>
                </div>

                {/* Quick Metrics & Details */}
                <div className="lg:col-span-6 space-y-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Consulta Registrada
                    </span>
                    <span className="text-sm font-bold text-yellow-300 font-mono">
                      qual empresa instala acm em curitiba
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Histórico da Parceria
                    </span>
                    <span className="text-sm font-bold text-emerald-400">
                      Aproximadamente 4 anos construindo presença digital
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Superfícies Documentadas
                    </span>
                    <span className="text-sm font-bold text-cyan-400">
                      Resposta Sintetizada do Google + Resultado Orgânico (omegarevestimentos.com.br)
                    </span>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/resultados/omega-revestimentos-acm-seo-geo-curitiba"
                      className="text-cyan-400 hover:text-cyan-300 font-bold inline-flex items-center gap-1.5 text-xs"
                    >
                      <span>Acessar documentação completa do Case #08</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CASE 09: Casas Pinheirão */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-cyan-500/40 space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-800/60">
                      CASE #09 — SEO + GEO / AIO
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800/60">
                      Duas Evidências Reais
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    Casas Pinheirão — IA do Google + Busca Orgânica
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Presença simultânea documentada na Visão geral criada por IA e nos resultados orgânicos para consulta conversacional de alta intenção comercial.
                  </p>
                </div>

                <Link
                  to="/resultados/casas-pinheirao-google-ia-seo"
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-xs inline-flex items-center gap-2 shrink-0 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                >
                  <span>Ver Evidências (2 Capturas)</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Screenshot Thumbnails (2 Images) */}
                <div className="lg:col-span-6 grid grid-cols-2 gap-2">
                  <div className="bg-white p-1.5 rounded-xl border border-slate-800 overflow-hidden group">
                    <Link to="/resultados/casas-pinheirao-google-ia-seo" className="block">
                      <img
                        src="/images/cases/casas-pinheirao-google-ai-overview.png"
                        alt="Casas Pinheirão na Visão geral criada por IA"
                        width={1000}
                        height={700}
                        loading="lazy"
                        className="w-full h-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </Link>
                    <span className="text-[9px] text-slate-500 block text-center font-bold mt-1">Evidência #01 (IA)</span>
                  </div>
                  <div className="bg-white p-1.5 rounded-xl border border-slate-800 overflow-hidden group">
                    <Link to="/resultados/casas-pinheirao-google-ia-seo" className="block">
                      <img
                        src="/images/cases/casas-pinheirao-google-organico.png"
                        alt="Casas Pinheirão nos Resultados Orgânicos"
                        width={1000}
                        height={680}
                        loading="lazy"
                        className="w-full h-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </Link>
                    <span className="text-[9px] text-slate-500 block text-center font-bold mt-1">Evidência #02 (Orgânico)</span>
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-6 space-y-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Consulta Comercial Documentada
                    </span>
                    <span className="text-xs font-bold text-yellow-300 font-mono">
                      "quem vende casas pre fabricadas meu terreno pelo menor preço?"
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Diferencial da Pesquisa Conversacional
                    </span>
                    <span className="text-xs font-bold text-emerald-400">
                      O consumidor descreve a necessidade completa (produto + modalidade + terreno + critério)
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Ativos Encontrados
                    </span>
                    <span className="text-xs font-bold text-cyan-400">
                      Citação na resposta da IA + domínios casaspinheirao.app.br e casaspinheirao.com.br
                    </span>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/resultados/casas-pinheirao-google-ia-seo"
                      className="text-cyan-400 hover:text-cyan-300 font-bold inline-flex items-center gap-1.5 text-xs"
                    >
                      <span>Acessar documentação completa do Case #09</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* CASE 10: Motofrete / Logística - Centro de São Paulo */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-emerald-500/50 shadow-[0_0_35px_rgba(16,185,129,0.15)] space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800/60">
                        CASE #10 — SEO ORGÂNICO + LOCAL
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-800/60">
                        São Paulo / SP (Fora de Curitiba)
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                      Motofrete — Centro de São Paulo
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300">
                      Presença orgânica documentada para uma intenção local de serviço de motofrete/motoboy no Centro de São Paulo.
                    </p>
                  </div>

                  <Link
                    to="/resultados/motofrete-centro-sao-paulo-seo"
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-xs inline-flex items-center gap-2 shrink-0 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  >
                    <span>Ver Evidência</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Screenshot Thumbnail */}
                  <div className="lg:col-span-6 bg-white p-2 rounded-2xl border border-slate-800 overflow-hidden group relative">
                    <Link to="/resultados/motofrete-centro-sao-paulo-seo" className="block">
                      <img
                        src="/images/cases/case-motofrete-sp-para-parana-google.png"
                        alt="Comprovação de busca orgânica #1 no Google para Frete moto de são paulo para o paraná"
                        width={1000}
                        height={700}
                        loading="lazy"
                        className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </Link>
                    <span className="text-[9px] text-emerald-600 block text-center font-bold mt-1">
                      Comprovação Real #1 no Google — “Frete moto de são paulo para o paraná”
                    </span>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-6 space-y-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Pesquisa Comprovada (#1 no Google)
                      </span>
                      <span className="text-xs font-bold text-yellow-300 font-mono">
                        "Frete moto de são paulo para o paraná"
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Intenção & Região Geográfica
                      </span>
                      <span className="text-xs font-bold text-emerald-400">
                        Serviço Logístico Interestadual (SP → PR e Centro de SP)
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Posição Registrada
                      </span>
                      <span className="text-xs font-bold text-cyan-400">
                        1º Lugar Absoluto no Google desbancando grandes portais nacionais de frete
                      </span>
                    </div>

                    <div className="pt-2">
                      <Link
                        to="/resultados/motofrete-centro-sao-paulo-seo"
                        className="text-emerald-400 hover:text-emerald-300 font-bold inline-flex items-center gap-1.5 text-xs"
                      >
                        <span>Acessar documentação completa do Case #10</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Case #11 Block - RVM Persianas (Florianópolis / SC) */}
            <div className="pt-6 border-t border-slate-800/80">
              <div className="bg-[#0b0c10] border border-emerald-500/40 rounded-3xl p-6 sm:p-8 space-y-6 hover:border-emerald-500/70 transition-all shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-emerald-950/80 text-emerald-400 border border-emerald-800/80">
                      <Blinds size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/90 px-2.5 py-0.5 rounded border border-emerald-800">
                        Case #11 — SEO Local + Orgânico (Santa Catarina)
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
                        RVM Persianas: Persianas Sob Medida em Florianópolis &amp; Lagoa
                      </h3>
                    </div>
                  </div>
                  <Link
                    to="/resultados/rvm-persianas-florianopolis-seo"
                    className="px-4 py-2 rounded-full bg-emerald-950 hover:bg-emerald-900 text-emerald-400 border border-emerald-800 text-xs font-bold inline-flex items-center gap-2 transition-colors"
                  >
                    <span>Ver Case #11 Completo</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Visual Evidence Image */}
                  <div className="lg:col-span-6 bg-white p-2 rounded-2xl border border-slate-800 overflow-hidden group relative">
                    <Link to="/resultados/rvm-persianas-florianopolis-seo" className="block">
                      <img
                        src="/images/cases/case-rvm-persianas-lagoa-sc-google.png"
                        alt="Comprovação de busca orgânica no Google para persianas na lagoa sc (RVM Persianas)"
                        width={1000}
                        height={700}
                        loading="lazy"
                        className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </Link>
                    <span className="text-[9px] text-emerald-600 block text-center font-bold mt-1">
                      Comprovação Real no Google — “persianas na lagoa sc” (Barra da Lagoa / Florianópolis)
                    </span>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Pesquisa Comprovada (SC)
                      </span>
                      <span className="text-xs font-bold text-yellow-300 font-mono">
                        "persianas na lagoa sc" &amp; "persianas em florianópolis"
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Intenção &amp; Região Geográfica
                      </span>
                      <span className="text-xs font-bold text-emerald-400">
                        Persianas Sob Medida (Florianópolis, Barra da Lagoa, Palhoça / SC)
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Posição Registrada
                      </span>
                      <span className="text-xs font-bold text-cyan-400">
                        Destaque orgânico de bairro e presença no pacote local do Google
                      </span>
                    </div>

                    <div className="pt-2">
                      <Link
                        to="/resultados/rvm-persianas-florianopolis-seo"
                        className="text-emerald-400 hover:text-emerald-300 font-bold inline-flex items-center gap-1.5 text-xs"
                      >
                        <span>Acessar documentação completa do Case #11</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Case #12 Block - Consultora Loovi (Curitiba / PR) */}
            <div className="pt-6 border-t border-slate-800/80">
              <div className="bg-[#0b0c10] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 space-y-6 hover:border-cyan-500/70 transition-all shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-cyan-950/80 text-cyan-400 border border-cyan-800/80">
                      <Shield size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-950/90 px-2.5 py-0.5 rounded border border-cyan-800">
                        Case #12 — Seguro Auto / Profissional (Curitiba)
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
                        Consultora Loovi (Barbara Duraes)
                      </h3>
                    </div>
                  </div>
                  <Link
                    to="/resultados/consultora-loovi-google-seo"
                    className="px-4 py-2 rounded-full bg-cyan-950 hover:bg-cyan-900 text-cyan-400 border border-cyan-800 text-xs font-bold inline-flex items-center gap-2 transition-colors"
                  >
                    <span>Ver Evidência</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Visual Evidence Image */}
                  <div className="lg:col-span-6 bg-white p-2 rounded-2xl border border-slate-800 overflow-hidden group relative">
                    <Link to="/resultados/consultora-loovi-google-seo" className="block">
                      <img
                        src="/images/cases/case-consultora-loovi-google-organico.png"
                        alt="Consultora Loovi presente no Google para a pesquisa consultora loovi"
                        width={1000}
                        height={580}
                        loading="lazy"
                        className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </Link>
                    <span className="text-[9px] text-cyan-600 block text-center font-bold mt-1">
                      Comprovação Real no Google — “consultora loovi” (consultoraloovi.com.br)
                    </span>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Pesquisa Comprovada
                      </span>
                      <span className="text-xs font-bold text-yellow-300 font-mono">
                        "consultora loovi"
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Entidade &amp; Profissional Apresentada
                      </span>
                      <span className="text-xs font-bold text-emerald-400">
                        Consultora Barbara Duraes (Curitiba / PR)
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Destaque
                      </span>
                      <span className="text-xs font-bold text-cyan-400">
                        Presença orgânica documentada para uma intenção diretamente relacionada à atividade profissional.
                      </span>
                    </div>

                    <div className="pt-2">
                      <Link
                        to="/resultados/consultora-loovi-google-seo"
                        className="text-cyan-400 hover:text-cyan-300 font-bold inline-flex items-center gap-1.5 text-xs"
                      >
                        <span>Acessar documentação completa do Case #12</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Case #13 Block - Pizzo (Balneário Camboriú / SC) */}
            <div className="pt-6 border-t border-slate-800/80">
              <div className="bg-[#0b0c10] border border-emerald-500/50 rounded-3xl p-6 sm:p-8 space-y-6 hover:border-emerald-500/80 transition-all shadow-[0_0_35px_rgba(16,185,129,0.15)]">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-emerald-950/80 text-emerald-400 border border-emerald-800/80">
                      <Cpu size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/90 px-2.5 py-0.5 rounded border border-emerald-800">
                        Case #13 — Engenharia / Construção (Balneário Camboriú)
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
                        Pizzo (Gerenciamento de Obras)
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-cyan-950/90 text-cyan-400 border border-cyan-800/80 text-xs font-bold">
                      SEO Orgânico + Google IA
                    </span>
                    <Link
                      to="/resultados/pizzo-gerenciamento-obras-balneario-camboriu"
                      className="px-4 py-2 rounded-full bg-emerald-950 hover:bg-emerald-900 text-emerald-400 border border-emerald-800 text-xs font-bold inline-flex items-center gap-2 transition-colors"
                    >
                      <span>Ver Evidência</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Visual Evidence Image */}
                  <div className="lg:col-span-6 bg-white p-2 rounded-2xl border border-slate-800 overflow-hidden group relative">
                    <Link to="/resultados/pizzo-gerenciamento-obras-balneario-camboriu" className="block">
                      <img
                        src="/images/cases/case-pizzo-gerenciamento-obras-balneario-camboriu-google-ai.png"
                        alt="Pizzo no Google e na Visão Geral por IA para gerenciamento de obras em Balneário Camboriú"
                        width={1000}
                        height={620}
                        loading="lazy"
                        className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </Link>
                    <span className="text-[9px] text-emerald-600 block text-center font-bold mt-1">
                      Comprovação Real — Google Orgânico + Visão Geral por IA (pizzoo.com.br)
                    </span>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Consultas Documentadas
                      </span>
                      <span className="text-xs font-bold text-cyan-400 font-mono block">
                        1. "gerenciamento de obras em balneário camboriú"
                      </span>
                      <span className="text-xs font-bold text-yellow-300 font-mono block">
                        2. "Quanto Custa Gerenciar Obra em Balneário Camboriú?"
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Superfícies de Descoberta Identificadas
                      </span>
                      <span className="text-xs font-bold text-emerald-400 block">
                        1. Google Search Orgânico
                      </span>
                      <span className="text-xs font-bold text-cyan-400 block">
                        2. Visão Geral Criada por IA do Google
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Destaque Estratégico
                      </span>
                      <span className="text-xs font-bold text-white">
                        Presença documentada no resultado orgânico e entre as fontes citadas na IA para busca comercial de alto padrão.
                      </span>
                    </div>

                    <div className="pt-2">
                      <Link
                        to="/resultados/pizzo-gerenciamento-obras-balneario-camboriu"
                        className="text-emerald-400 hover:text-emerald-300 font-bold inline-flex items-center gap-1.5 text-xs"
                      >
                        <span>Acessar documentação completa do Case #13 (Pizzo)</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case #14 Block - PVS Decore (São José dos Pinhais / PR) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-emerald-500/60 shadow-[0_0_35px_rgba(16,185,129,0.15)] space-y-6 relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/90 px-2.5 py-0.5 rounded border border-emerald-800">
                      Case #14 — Pisos & Revestimentos (São José dos Pinhais)
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800/60">
                      GOOGLE IA • GEO • SEO LOCAL
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
                    PVS Decore na Visão Geral criada por IA do Google
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    A PVS Decore é apresentada na experiência de IA do Google para uma pergunta conversacional comercial sobre quem instala pisos vinílicos em São José dos Pinhais.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    to="/resultados/pvs-decore-pisos-vinilicos-sao-jose-dos-pinhais"
                    className="px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs inline-flex items-center gap-2 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  >
                    <span>Ver Evidência</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Visual Evidence Image */}
                <div className="lg:col-span-6 bg-white p-2 rounded-2xl border border-slate-800 overflow-hidden group relative">
                  <Link to="/resultados/pvs-decore-pisos-vinilicos-sao-jose-dos-pinhais" className="block">
                    <img
                      src="/images/cases/case-pvs-decore-google-ia-pisos-vinilicos-sao-jose-dos-pinhais.png"
                      alt="PVS Decore apresentada pela IA do Google para quem instala pisos vinílicos em São José dos Pinhais"
                      width={1000}
                      height={640}
                      loading="lazy"
                      className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </Link>
                  <span className="text-[9px] text-emerald-600 block text-center font-bold mt-1">
                    Captura Real da SERP — PVS Decore na Visão Geral criada por IA
                  </span>
                </div>

                {/* Details */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Consulta Original Registrada
                    </span>
                    <span className="text-xs font-bold text-yellow-300 font-mono block">
                      “quem instala Pisos vinilicos São José dos Pinhais?”
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Intenção Semântica & Cidade
                    </span>
                    <span className="text-xs font-bold text-emerald-400 block">
                      Descoberta de fornecedor de instalação / São José dos Pinhais, PR
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Resultado Factual
                    </span>
                    <span className="text-xs font-bold text-white">
                      PVS Decore apresentada entre as empresas recomendadas pela Visão Geral criada por IA do Google.
                    </span>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/resultados/pvs-decore-pisos-vinilicos-sao-jose-dos-pinhais"
                      className="text-emerald-400 hover:text-emerald-300 font-bold inline-flex items-center gap-1.5 text-xs"
                    >
                      <span>Acessar documentação completa do Case #14 (PVS Decore)</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Case #15 Block - Alumimec (São José dos Pinhais / PR) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-emerald-500/60 shadow-[0_0_35px_rgba(16,185,129,0.15)] space-y-6 relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/90 px-2.5 py-0.5 rounded border border-emerald-800">
                      Case #15 — Indústria / Estruturas Metálicas (São José dos Pinhais)
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-sky-400 bg-sky-950/80 px-2.5 py-0.5 rounded border border-sky-800/60">
                      SEO ORGÂNICO • SEO LOCAL • GOOGLE MAPS
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
                    Alumimec no Google Orgânico e no Google Maps em São José dos Pinhais
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Presença documentada no resultado orgânico e na busca local do Google para uma intenção comercial relacionada a estruturas para galpões.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    to="/resultados/alumimec-estruturas-metalicas-sao-jose-dos-pinhais"
                    className="px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs inline-flex items-center gap-2 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  >
                    <span>Ver Evidência</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Visual Evidence Image */}
                <div className="lg:col-span-6 bg-white p-2 rounded-2xl border border-slate-800 overflow-hidden group relative">
                  <Link to="/resultados/alumimec-estruturas-metalicas-sao-jose-dos-pinhais" className="block">
                    <img
                      src="/images/cases/case-alumimec-estruturas-metalicas-sao-jose-dos-pinhais-google.png"
                      alt="Alumimec no Google para estruturas de galpões em São José dos Pinhais"
                      width={1000}
                      height={640}
                      loading="lazy"
                      className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </Link>
                  <span className="text-[9px] text-emerald-600 block text-center font-bold mt-1">
                    Captura Real da SERP — Alumimec no Google Search e Seção Locais
                  </span>
                </div>

                {/* Details */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Consulta Original Registrada
                    </span>
                    <span className="text-xs font-bold text-yellow-300 font-mono block">
                      “quem faz estrutura para galpoes em sao jose dos pinhais?”
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Intenção Semântica & Cidade
                    </span>
                    <span className="text-xs font-bold text-emerald-400 block">
                      Contratação de fornecedor industrial / São José dos Pinhais, PR
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Resultado Factual Documentado
                    </span>
                    <span className="text-xs font-bold text-white">
                      Presença simultânea no resultado orgânico (#1) e na seção local do Google (“Locais” / Maps).
                    </span>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/resultados/alumimec-estruturas-metalicas-sao-jose-dos-pinhais"
                      className="text-emerald-400 hover:text-emerald-300 font-bold inline-flex items-center gap-1.5 text-xs"
                    >
                      <span>Acessar documentação completa do Case #15 (Alumimec)</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Case #16 Block - A Baratona Caçambas (Curitiba / PR) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-purple-500/60 shadow-[0_0_35px_rgba(168,85,247,0.15)] space-y-6 relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-300 bg-purple-950/90 px-2.5 py-0.5 rounded border border-purple-800">
                      Case #16 — Serviços Locais / Caçambas (Curitiba)
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400 bg-purple-950/80 px-2.5 py-0.5 rounded border border-purple-800/60 flex items-center gap-1">
                      <Sparkles size={11} />
                      <span>GOOGLE IA • GEO • AIO • SEO LOCAL</span>
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
                    A Baratona Caçambas na Visão Geral criada por IA do Google
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    A Baratona é nominalmente apresentada na experiência de IA do Google para uma pergunta comercial em linguagem natural sobre quem mexe com aluguel de caçambas baratas.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    to="/resultados/a-baratona-cacambas-google-ia-curitiba"
                    className="px-4 py-2 rounded-full bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-xs inline-flex items-center gap-2 transition-colors shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                  >
                    <span>Ver Evidência</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Visual Evidence Image */}
                <div className="lg:col-span-6 bg-white p-2 rounded-2xl border border-slate-800 overflow-hidden group relative">
                  <Link to="/resultados/a-baratona-cacambas-google-ia-curitiba" className="block">
                    <img
                      src="/images/cases/case-a-baratona-cacambas-google-ai-curitiba.png"
                      alt="A Baratona Caçambas na Visão geral criada por IA do Google para aluguel de caçambas baratas"
                      width={1000}
                      height={640}
                      loading="lazy"
                      className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </Link>
                  <span className="text-[9px] text-purple-600 block text-center font-bold mt-1">
                    Captura Real da SERP — A Baratona na Visão Geral criada por IA do Google
                  </span>
                </div>

                {/* Details */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Consulta Original Registrada
                    </span>
                    <span className="text-xs font-bold text-yellow-300 font-mono block">
                      “quem mexe com aluguel de Caçambas baratas?”
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Intenção Semântica & Cidade
                    </span>
                    <span className="text-xs font-bold text-purple-300 block">
                      Aluguel / Locação de Caçambas para Entulho / Curitiba, PR
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Resultado Factual Documentado
                    </span>
                    <span className="text-xs font-bold text-white">
                      Presença documentada na Visão geral criada por IA do Google para uma intenção comercial de aluguel de caçambas.
                    </span>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/resultados/a-baratona-cacambas-google-ia-curitiba"
                      className="text-purple-400 hover:text-purple-300 font-bold inline-flex items-center gap-1.5 text-xs"
                    >
                      <span>Acessar documentação completa do Case #16 (A Baratona)</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Case #17: Telhados Barreirinha - Ecossistema Multimarca */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-purple-500/40 shadow-[0_0_35px_rgba(168,85,247,0.15)] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-400 bg-purple-950/80 px-2.5 py-1 rounded-full border border-purple-800/60 inline-flex items-center gap-1">
                      <Sparkles size={11} />
                      <span>CASE REAL #17</span>
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800/60">
                      <span>SEO + GEO + INTELIGÊNCIA ARTIFICIAL</span>
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-2">
                    UMA BUSCA, MÚLTIPLOS CLIENTES
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Múltiplas empresas atendidas pelo Omar SEO documentadas dentro da mesma intenção comercial para conserto de telhados no bairro Barreirinha, em Curitiba.
                  </p>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <Link
                    to="/resultados/clientes-omar-seo-telhados-barreirinha-google-ia"
                    className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs inline-flex items-center gap-2 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  >
                    <span>Ver Case</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Visual Evidence Image */}
                <div className="lg:col-span-6 bg-white p-2 rounded-2xl border border-slate-800 overflow-hidden group relative">
                  <Link to="/resultados/clientes-omar-seo-telhados-barreirinha-google-ia" className="block">
                    <picture>
                      <source srcset="/images/cases/case-clientes-omar-seo-telhados-barreirinha-google-ia.svg" type="image/svg+xml" />
                      <img
                        src="/images/cases/case-clientes-omar-seo-telhados-barreirinha-google-ia.png"
                        alt="Clientes Omar SEO no Google e na Visão geral criada por IA para conserto de telhados no Barreirinha Curitiba"
                        width={1000}
                        height={840}
                        loading="lazy"
                        className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </picture>
                  </Link>
                  <span className="text-[9px] text-purple-600 block text-center font-bold mt-1">
                    Captura Real da SERP — Orgânico + Visão Geral Criada por IA no Google
                  </span>
                </div>

                {/* Details */}
                <div className="lg:col-span-6 space-y-3.5">
                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Consulta Original Documentada
                    </span>
                    <span className="text-xs font-bold text-yellow-300 font-mono block">
                      “Conserto de Telhados no Bairro Barreirinha”
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Localização &amp; Badges
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                      <span className="text-xs font-bold text-emerald-400">BARREIRINHA — CURITIBA / PR</span>
                      <div className="flex flex-wrap gap-1">
                        {['SEO', 'GEO', 'AIO', 'GOOGLE IA', 'SEO LOCAL'].map((badge) => (
                          <span key={badge} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[9px] font-mono text-slate-300">
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Destaque Factual do Case
                    </span>
                    <span className="text-xs font-bold text-white leading-relaxed block">
                      “Múltiplas empresas atendidas pelo Omar SEO documentadas dentro da mesma intenção comercial.”
                    </span>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/resultados/clientes-omar-seo-telhados-barreirinha-google-ia"
                      className="text-emerald-400 hover:text-emerald-300 font-bold inline-flex items-center gap-1.5 text-xs"
                    >
                      <span>Acessar documentação completa do Case #17</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Case #18: Lavanderia Inovata - Osasco / SP */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/40 shadow-[0_0_35px_rgba(16,185,129,0.15)] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800/60 inline-flex items-center gap-1">
                      <Sparkles size={11} />
                      <span>CASE REAL #18</span>
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded-full border border-blue-800/60">
                      <span>SERVIÇOS LOCAIS</span>
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-2">
                    LAVANDERIA INOVATA — 1º ORGÂNICO E 1ª NO MAPA
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Dupla presença documentada para a mesma intenção local: primeiro resultado orgânico visível e primeira empresa apresentada no bloco local.
                  </p>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <Link
                    to="/resultados/lavanderia-inovata-seo-google-maps-osasco"
                    className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs inline-flex items-center gap-2 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  >
                    <span>Ver Evidência</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Visual Evidence Image */}
                <div className="lg:col-span-6 bg-white p-2 rounded-2xl border border-slate-800 overflow-hidden group relative">
                  <Link to="/resultados/lavanderia-inovata-seo-google-maps-osasco" className="block">
                    <picture>
                      <source srcset="/images/cases/case-lavanderia-inovata-google-osasco.svg" type="image/svg+xml" />
                      <img
                        src="/images/cases/case-lavanderia-inovata-google-osasco.png"
                        alt="Lavanderia Inovata em primeiro no Google orgânico e no mapa para lavanderia em Osasco"
                        width={1060}
                        height={840}
                        loading="lazy"
                        className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </picture>
                  </Link>
                  <span className="text-[9px] text-slate-600 block text-center font-bold mt-1 font-mono">
                    Captura Real da SERP — 1º Orgânico Visível + 1ª no Bloco Local (Osasco / SP)
                  </span>
                </div>

                {/* Details */}
                <div className="lg:col-span-6 space-y-3.5">
                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Consulta Original Documentada
                    </span>
                    <span className="text-xs font-bold text-yellow-300 font-mono block">
                      “lavanderia em osasco”
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Localização &amp; Badges
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                      <span className="text-xs font-bold text-emerald-400">OSASCO / SP</span>
                      <div className="flex flex-wrap gap-1">
                        {['1º ORGÂNICO', '1ª NO MAPA', 'SEO LOCAL', 'GEO'].map((badge) => (
                          <span key={badge} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[9px] font-mono text-slate-300">
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0f1118] border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Destaque Factual do Case
                    </span>
                    <span className="text-xs font-bold text-white leading-relaxed block">
                      “Dupla presença documentada para a mesma intenção local: primeiro resultado orgânico visível e primeira empresa apresentada no bloco local.”
                    </span>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/resultados/lavanderia-inovata-seo-google-maps-osasco"
                      className="text-emerald-400 hover:text-emerald-300 font-bold inline-flex items-center gap-1.5 text-xs"
                    >
                      <span>Acessar documentação completa do Case #18</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seção Cluster: Quando a pesquisa vira uma pergunta */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-slate-800 space-y-6 mt-8">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-800/60">
                <Sparkles size={12} />
                <span>Empresas Encontradas nas Buscas com IA</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
                Evidências reais de clientes apresentados em experiências de busca com Inteligência Artificial
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Evidências reais de empresas parceiras que aparecem no Google quando clientes pesquisam utilizando perguntas conversacionais completas:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 text-xs">
              <Link
                to="/resultados/lavanderia-inovata-seo-google-maps-osasco"
                className="p-3.5 rounded-2xl bg-slate-900/90 border border-emerald-500/60 hover:border-emerald-400 transition-all space-y-2 group block"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                  Lavanderia Inovata (Osasco)
                </span>
                <p className="font-mono text-white text-[11px] font-bold group-hover:text-emerald-300 transition-colors">
                  "lavanderia em osasco"
                </p>
                <span className="text-emerald-400 font-bold inline-flex items-center gap-1 text-[10px] pt-1">
                  <span>Ver Case #18</span>
                  <ChevronRight size={12} />
                </span>
              </Link>

              <Link
                to="/resultados/clientes-omar-seo-telhados-barreirinha-google-ia"
                className="p-3.5 rounded-2xl bg-slate-900/90 border border-purple-500/60 hover:border-purple-400 transition-all space-y-2 group block"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 block">
                  Clientes Omar SEO (Telhados)
                </span>
                <p className="font-mono text-white text-[11px] font-bold group-hover:text-purple-300 transition-colors">
                  "Conserto de Telhados no Bairro Barreirinha"
                </p>
                <span className="text-purple-400 font-bold inline-flex items-center gap-1 text-[10px] pt-1">
                  <span>Ver Case #17</span>
                  <ChevronRight size={12} />
                </span>
              </Link>

              <Link
                to="/resultados/a-baratona-cacambas-google-ia-curitiba"
                className="p-3.5 rounded-2xl bg-slate-900/90 border border-purple-500/60 hover:border-purple-400 transition-all space-y-2 group block"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 block">
                  A Baratona Caçambas
                </span>
                <p className="font-mono text-white text-[11px] font-bold group-hover:text-purple-300 transition-colors">
                  "quem mexe com aluguel de Caçambas baratas?"
                </p>
                <span className="text-purple-400 font-bold inline-flex items-center gap-1 text-[10px] pt-1">
                  <span>Ver Case #16</span>
                  <ChevronRight size={12} />
                </span>
              </Link>

              <Link
                to="/resultados/alumimec-estruturas-metalicas-sao-jose-dos-pinhais"
                className="p-3.5 rounded-2xl bg-slate-900/90 border border-emerald-500/60 hover:border-emerald-400 transition-all space-y-2 group block"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                  Alumimec (SJP)
                </span>
                <p className="font-mono text-white text-[11px] font-bold group-hover:text-emerald-300 transition-colors">
                  "quem faz estrutura para galpoes..."
                </p>
                <span className="text-emerald-400 font-bold inline-flex items-center gap-1 text-[10px] pt-1">
                  <span>Ver Case #15</span>
                  <ChevronRight size={12} />
                </span>
              </Link>

              <Link
                to="/resultados/pvs-decore-pisos-vinilicos-sao-jose-dos-pinhais"
                className="p-3.5 rounded-2xl bg-slate-900/90 border border-emerald-500/60 hover:border-emerald-400 transition-all space-y-2 group block"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                  PVS Decore (SJP)
                </span>
                <p className="font-mono text-white text-[11px] font-bold group-hover:text-emerald-300 transition-colors">
                  "quem instala Pisos vinilicos..."
                </p>
                <span className="text-emerald-400 font-bold inline-flex items-center gap-1 text-[10px] pt-1">
                  <span>Ver Case #14</span>
                  <ChevronRight size={12} />
                </span>
              </Link>

              <Link
                to="/resultados/comfort-divisorias-google-ia-curitiba"
                className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all space-y-2 group block"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block">
                  Comfort Divisórias
                </span>
                <p className="font-mono text-white text-[11px] font-bold group-hover:text-cyan-300 transition-colors">
                  "qual empresa divisorias eucatex em curitiba"
                </p>
                <span className="text-cyan-400 font-bold inline-flex items-center gap-1 text-[10px] pt-1">
                  <span>Ver Case #05</span>
                  <ChevronRight size={12} />
                </span>
              </Link>

              <Link
                to="/resultados/ky-drywall-google-ia-curitiba"
                className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all space-y-2 group block"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block">
                  KY Drywall
                </span>
                <p className="font-mono text-white text-[11px] font-bold group-hover:text-cyan-300 transition-colors">
                  "qual empresa drywall em curitiba"
                </p>
                <span className="text-cyan-400 font-bold inline-flex items-center gap-1 text-[10px] pt-1">
                  <span>Ver Case #06</span>
                  <ChevronRight size={12} />
                </span>
              </Link>

              <Link
                to="/resultados/omega-revestimentos-acm-seo-geo-curitiba"
                className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all space-y-2 group block"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block">
                  Ômega Revestimentos
                </span>
                <p className="font-mono text-white text-[11px] font-bold group-hover:text-cyan-300 transition-colors">
                  "qual empresa instala acm em curitiba"
                </p>
                <span className="text-cyan-400 font-bold inline-flex items-center gap-1 text-[10px] pt-1">
                  <span>Ver Case #08</span>
                  <ChevronRight size={12} />
                </span>
              </Link>

              <Link
                to="/resultados/casas-pinheirao-google-ia-seo"
                className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all space-y-2 group block"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block">
                  Casas Pinheirão
                </span>
                <p className="font-mono text-white text-[11px] font-bold group-hover:text-cyan-300 transition-colors">
                  "quem vende casas pre fabricadas meu terreno..."
                </p>
                <span className="text-cyan-400 font-bold inline-flex items-center gap-1 text-[10px] pt-1">
                  <span>Ver Case #09</span>
                  <ChevronRight size={12} />
                </span>
              </Link>

              <Link
                to="/resultados/pizzo-gerenciamento-obras-balneario-camboriu"
                className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all space-y-2 group block"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                  Pizzo Engenharia
                </span>
                <p className="font-mono text-white text-[11px] font-bold group-hover:text-emerald-300 transition-colors">
                  "gerenciamento de obras em balneário camboriú"
                </p>
                <span className="text-emerald-400 font-bold inline-flex items-center gap-1 text-[10px] pt-1">
                  <span>Ver Case #13</span>
                  <ChevronRight size={12} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experiência em Mercados Competitivos Section */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded border border-cyan-800 inline-block">
            Experiência em Mercados Competitivos
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Histórico de Atuação por Segmento Comercial
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Metodologias e estratégias técnicas estruturadas pelo consultor nestes setores. Por transparência ética, resultados quantitativos específicos destes nichos permanecem classificados como <strong className="text-yellow-400 font-semibold">“Evidência pendente de documentação”</strong> até a inclusão dos relatórios comprobatórios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {structuredCases.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.id}
                className="p-6 sm:p-8 rounded-3xl bg-[#0f1118] border border-slate-800 hover:border-cyan-500/40 transition-all space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-3 border-b border-slate-800/80 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-blue-950 text-cyan-400 border border-cyan-500/30">
                        <Icon size={24} />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest block">
                          {c.segment}
                        </span>
                        <h3 className="text-lg font-bold font-display text-white mt-0.5">
                          {c.title}
                        </h3>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300">
                      {c.region}
                    </span>
                  </div>

                  {/* Fact Cards */}
                  <div className="space-y-3 text-xs leading-relaxed text-slate-300">
                    <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/60">
                      <strong className="text-cyan-400 block mb-1 uppercase tracking-wider text-[10px]">
                        Desafio Inicial:
                      </strong>
                      <span>{c.challenge}</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/60">
                      <strong className="text-yellow-400 block mb-1 uppercase tracking-wider text-[10px]">
                        Intenção de Busca Alvo:
                      </strong>
                      <span className="italic">{c.searchIntent}</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/60">
                      <strong className="text-emerald-400 block mb-1 uppercase tracking-wider text-[10px]">
                        Estratégia e Otimização Aplicada:
                      </strong>
                      <span>{c.strategy}</span>
                    </div>

                    <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-800/40">
                      <strong className="text-white block mb-1 uppercase tracking-wider text-[10px] flex items-center gap-1">
                        <TrendingUp size={13} className="text-emerald-400" />
                        <span>Resultado Factual Alcançado:</span>
                      </strong>
                      <span className="text-emerald-300 font-semibold">{c.result}</span>
                    </div>
                  </div>
                </div>

                {/* Evidence & Methodology Footer */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2 text-[11px] text-slate-400">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-300 flex items-center gap-1">
                      <FileCheck size={14} className="text-cyan-400" />
                      <span>Evidência:</span>
                    </span>
                    <span className="text-slate-300 text-right">{c.evidence}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-300 flex items-center gap-1">
                      <Zap size={14} className="text-yellow-400" />
                      <span>Metodologia:</span>
                    </span>
                    <span className="text-slate-300 text-right">{c.methodology}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 border border-blue-500/30 text-center space-y-5">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
          Quer Entender o Potencial Orgânico do Seu Negócio?
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Solicite um diagnóstico técnico gratuito com Omar Skafi e descubra os gargalos de visibilidade da sua empresa no Google e assistentes de IA.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            to="/auditoria-seo"
            className="btn-primary-gold btn-shimmer px-6 py-3.5 inline-flex items-center gap-2 font-bold text-xs sm:text-sm"
          >
            <Zap size={16} className="fill-slate-950" />
            <span>Solicitar Diagnóstico SEO Gratuito</span>
          </Link>
          <a
            href="https://wa.me/5541992721004"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-emerald-wa btn-shimmer px-6 py-3.5 inline-flex items-center gap-2 font-bold text-xs sm:text-sm"
          >
            <span>Falar no WhatsApp (41) 99272-1004</span>
          </a>
        </div>
      </div>
    </div>
  );
}

