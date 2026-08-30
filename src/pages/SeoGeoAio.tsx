import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import {
  Volume2,
  VolumeX,
  Play,
  ArrowRight,
  TrendingUp,
  Activity,
  DollarSign,
  ChevronDown,
  Sparkles,
  Bot,
} from 'lucide-react';

export default function SeoGeoAio() {
  const [activeChapter, setActiveChapter] = useState('capitulo-01');
  const [mutedStates, setMutedStates] = useState<{ [key: string]: boolean }>({
    'video-01': true,
    'video-02': true,
    'video-03': true,
    'video-04': true,
  });

  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  useEffect(() => {
    // Autoplay by visibility (>= 50%)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    (Object.values(videoRefs.current) as (HTMLVideoElement | null)[]).forEach((video) => {
      if (video) observer.observe(video);
    });

    // Scrollspy for chapter chips
    const chapterIds = ['capitulo-01', 'capitulo-02', 'capitulo-03', 'capitulo-04'];
    const chapterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveChapter(entry.target.id);
          }
        });
      },
      { threshold: 0.4, rootMargin: '-10% 0px -40% 0px' }
    );

    chapterIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) chapterObserver.observe(el);
    });

    return () => {
      observer.disconnect();
      chapterObserver.disconnect();
    };
  }, []);

  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleSound = (videoId: string) => {
    const video = videoRefs.current[videoId];
    if (video) {
      video.muted = !video.muted;
      setMutedStates((prev) => ({ ...prev, [videoId]: video.muted }));
    }
  };

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'SEO + GEO + AIO', item: '/seo-geo-aio' },
  ];

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: 'Capítulo 01: O problema — a busca mudou',
      description: 'Seu cliente busca em 3 lugares: no Google, nas IAs generativas e nas respostas automáticas por IA.',
      thumbnailUrl: 'https://img.supremasite.com.br/omar-seo-icon.png',
      uploadDate: '2026-08-14T08:00:00-03:00',
      contentUrl: 'https://img.supremasite.com.br/o-problema-a-busca-mudou.mp4',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: 'Capítulo 02: SEO — a base',
      description: 'SEO domina a busca tradicional: identificamos demanda existente, intenção comercial e oportunidades.',
      thumbnailUrl: 'https://img.supremasite.com.br/omar-seo-icon.png',
      uploadDate: '2026-08-14T08:00:00-03:00',
      contentUrl: 'https://img.supremasite.com.br/seo-a-base.mp4',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: 'Capítulo 03: GEO + AIO — a nova fronteira',
      description: 'GEO estrutura conteúdo para ser citado por ChatGPT, Gemini e Perplexity. AIO organiza dados e Schema.org.',
      thumbnailUrl: 'https://img.supremasite.com.br/omar-seo-icon.png',
      uploadDate: '2026-08-14T08:00:00-03:00',
      contentUrl: 'https://img.supremasite.com.br/geo%2Baio-a-nova-fronteira.mp4',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: 'Capítulo 04: Resultado — market share com previsibilidade',
      description: 'O resultado é participação de mercado orgânica crescendo em todos os canais com menor dependência de mídia paga.',
      thumbnailUrl: 'https://img.supremasite.com.br/omar-seo-icon.png',
      uploadDate: '2026-08-14T08:00:00-03:00',
      contentUrl: 'https://img.supremasite.com.br/resultado-market-share.mp4',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'O que é GEO (Generative Engine Optimization)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GEO é a disciplina que estrutura o conteúdo e os dados da sua empresa para ser citada e recomendada diretamente por modelos de Inteligência Artificial generativa, como ChatGPT, Google Gemini, Perplexity e Claude.',
          },
        },
        {
          '@type': 'Question',
          name: 'O que é AIO (AI Optimization)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AIO é a organização da arquitetura técnica, marcações Schema.org em JSON-LD, arquivos llms.txt e autoridade de domínio para que os sistemas e agentes autônomos de IA compreendam e confiem na sua entidade legal.',
          },
        },
        {
          '@type': 'Question',
          name: 'Qual a diferença entre SEO, GEO e AIO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'O SEO foca na busca orgânica tradicional no Google por palavras-chave. O GEO foca na citação e recomendação textual dentro das respostas de IAs generativas. O AIO garante a infraestrutura de dados e entidades semânticas para que os algoritmos de IA interpretem sua marca.',
          },
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F6FA] text-[#64748B] font-sans pt-24 pb-16">
      <EnhancedSEO
        title="SEO + GEO + AIO: Como Ganhar Market Share com Previsibilidade | Suprema"
        description="Descubra em 30 segundos como a combinação de busca tradicional, modelos generativos e otimização semântica expande o market share com previsibilidade."
        canonical="/seo-geo-aio"
        breadcrumbs={breadcrumbs}
        schema={schemas}
      />

      {/* 1. HERO */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 pt-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DBEAFE] text-[#2563EB] text-xs font-black uppercase tracking-widest">
          <Sparkles size={14} />
          <span>A NOVA ERA DA VISIBILIDADE DIGITAL</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-tight">
          Como Ganhar Mercado: <span className="text-[#2563EB]">SEO + GEO + AIO</span>
        </h1>

        <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed font-medium">
          Descubra em 30 segundos como a combinação de busca tradicional, modelos generativos e otimização semântica expande a participação de mercado da sua empresa com previsibilidade.
        </p>

        <div>
          <button
            onClick={() => scrollToChapter('capitulo-01')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm shadow-[0_4px_14px_rgba(37,99,235,0.35)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Assistir a explicação</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToChapter('capitulo-01')}
          className="inline-flex flex-col items-center gap-1 text-[#2563EB] text-xs font-bold uppercase tracking-wider animate-bounce pt-4 cursor-pointer"
        >
          <span>Rolar para assistir</span>
          <ChevronDown size={16} />
        </button>

        {/* STICKY CHIPS */}
        <div className="sticky top-20 z-40 pt-4">
          <nav className="inline-flex flex-wrap items-center justify-center gap-2 p-2 rounded-full bg-white/95 backdrop-blur-md border border-[#E2E8F0] shadow-md max-w-full">
            {[
              { id: 'capitulo-01', label: '01 O problema' },
              { id: 'capitulo-02', label: '02 SEO' },
              { id: 'capitulo-03', label: '03 GEO + AIO' },
              { id: 'capitulo-04', label: '04 Resultado' },
            ].map((chip) => (
              <button
                key={chip.id}
                onClick={() => scrollToChapter(chip.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeChapter === chip.id
                    ? 'bg-[#2563EB] text-white shadow-sm'
                    : 'text-[#64748B] hover:text-[#2563EB] hover:bg-[#DBEAFE]'
                }`}
              >
                {chip.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* 2. FOUR CHAPTERS */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 space-y-12 relative">
        {/* Vertical Dashed Line */}
        <div
          className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-[2px] -translate-x-1/2 z-0"
          style={{
            backgroundImage: 'linear-gradient(to bottom, #2563EB 50%, transparent 50%)',
            backgroundSize: '2px 16px',
          }}
        />

        {/* CAPÍTULO 01 */}
        <section id="capitulo-01" className="relative z-10 scroll-mt-28">
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E2E8F0] shadow-md grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative overflow-hidden">
            <span className="absolute -top-4 right-4 text-8xl font-black text-[#2563EB]/5 pointer-events-none select-none">
              01
            </span>

            {/* Video Left */}
            <div className="relative aspect-video rounded-xl bg-slate-950 overflow-hidden shadow-sm">
              <video
                ref={(el) => (videoRefs.current['video-01'] = el)}
                src="https://img.supremasite.com.br/o-problema-a-busca-mudou.mp4"
                muted={mutedStates['video-01']}
                playsInline
                loop
                preload="metadata"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => toggleSound('video-01')}
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold border border-white/20 flex items-center gap-1.5 hover:bg-[#2563EB]"
              >
                {mutedStates['video-01'] ? <VolumeX size={13} /> : <Volume2 size={13} />}
                <span>{mutedStates['video-01'] ? 'Ativar Som' : 'Mutar Som'}</span>
              </button>
            </div>

            {/* Text Right */}
            <div className="space-y-3">
              <span className="inline-flex px-3 py-1 rounded-full bg-[#DBEAFE] text-[#2563EB] text-[11px] font-black uppercase tracking-wider">
                Capítulo 01
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                O problema: a busca mudou
              </h2>
              <p className="text-base text-[#64748B] leading-relaxed">
                Seu cliente busca em 3 lugares: no Google, nas IAs generativas (ChatGPT, Gemini, Perplexity) e nas respostas automáticas por IA. Quem aparece só no Google já não captura toda a demanda.
              </p>
            </div>
          </div>
        </section>

        {/* CAPÍTULO 02 */}
        <section id="capitulo-02" className="relative z-10 scroll-mt-28">
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E2E8F0] shadow-md grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative overflow-hidden">
            <span className="absolute -top-4 right-4 text-8xl font-black text-[#2563EB]/5 pointer-events-none select-none">
              02
            </span>

            {/* Text Left (order 2 on lg, 2 on mobile) */}
            <div className="space-y-3 order-2 lg:order-1">
              <span className="inline-flex px-3 py-1 rounded-full bg-[#DBEAFE] text-[#2563EB] text-[11px] font-black uppercase tracking-wider">
                Capítulo 02
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                SEO: a base
              </h2>
              <p className="text-base text-[#64748B] leading-relaxed">
                SEO domina a busca tradicional: identificamos demanda existente, intenção comercial e oportunidades — gaps, baixa cobertura e quick wins — para transformar volume de busca em tráfego qualificado.
              </p>
            </div>

            {/* Video Right (order 1 on lg, 1 on mobile) */}
            <div className="relative aspect-video rounded-xl bg-slate-950 overflow-hidden shadow-sm order-1 lg:order-2">
              <video
                ref={(el) => (videoRefs.current['video-02'] = el)}
                src="https://img.supremasite.com.br/seo-a-base.mp4"
                muted={mutedStates['video-02']}
                playsInline
                loop
                preload="metadata"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => toggleSound('video-02')}
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold border border-white/20 flex items-center gap-1.5 hover:bg-[#2563EB]"
              >
                {mutedStates['video-02'] ? <VolumeX size={13} /> : <Volume2 size={13} />}
                <span>{mutedStates['video-02'] ? 'Ativar Som' : 'Mutar Som'}</span>
              </button>
            </div>
          </div>
        </section>

        {/* CAPÍTULO 03 */}
        <section id="capitulo-03" className="relative z-10 scroll-mt-28">
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E2E8F0] shadow-md grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative overflow-hidden">
            <span className="absolute -top-4 right-4 text-8xl font-black text-[#2563EB]/5 pointer-events-none select-none">
              03
            </span>

            {/* Video Left */}
            <div className="relative aspect-video rounded-xl bg-slate-950 overflow-hidden shadow-sm">
              <video
                ref={(el) => (videoRefs.current['video-03'] = el)}
                src="https://img.supremasite.com.br/geo%2Baio-a-nova-fronteira.mp4"
                muted={mutedStates['video-03']}
                playsInline
                loop
                preload="metadata"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => toggleSound('video-03')}
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold border border-white/20 flex items-center gap-1.5 hover:bg-[#2563EB]"
              >
                {mutedStates['video-03'] ? <VolumeX size={13} /> : <Volume2 size={13} />}
                <span>{mutedStates['video-03'] ? 'Ativar Som' : 'Mutar Som'}</span>
              </button>
            </div>

            {/* Text Right */}
            <div className="space-y-3">
              <span className="inline-flex px-3 py-1 rounded-full bg-[#DBEAFE] text-[#2563EB] text-[11px] font-black uppercase tracking-wider">
                Capítulo 03
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                GEO + AIO: a nova fronteira
              </h2>
              <p className="text-base text-[#64748B] leading-relaxed">
                GEO estrutura seu conteúdo para ser citado por ChatGPT, Gemini e Perplexity. AIO organiza dados, schema e autoridade para os sistemas de IA entenderem e confiarem na sua marca. Quem a IA cita, vende primeiro.
              </p>
            </div>
          </div>
        </section>

        {/* CAPÍTULO 04 */}
        <section id="capitulo-04" className="relative z-10 scroll-mt-28">
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E2E8F0] shadow-md grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative overflow-hidden">
            <span className="absolute -top-4 right-4 text-8xl font-black text-[#2563EB]/5 pointer-events-none select-none">
              04
            </span>

            {/* Text Left */}
            <div className="space-y-3 order-2 lg:order-1">
              <span className="inline-flex px-3 py-1 rounded-full bg-[#DBEAFE] text-[#2563EB] text-[11px] font-black uppercase tracking-wider">
                Capítulo 04
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                Resultado: market share com previsibilidade
              </h2>
              <p className="text-base text-[#64748B] leading-relaxed">
                O resultado é participação de mercado orgânica crescendo em todos os canais: mais visibilidade, tráfego qualificado, leads e receita — com previsibilidade, escala e menor dependência de mídia paga.
              </p>
            </div>

            {/* Video Right */}
            <div className="relative aspect-video rounded-xl bg-slate-950 overflow-hidden shadow-sm order-1 lg:order-2">
              <video
                ref={(el) => (videoRefs.current['video-04'] = el)}
                src="https://img.supremasite.com.br/resultado-market-share.mp4"
                muted={mutedStates['video-04']}
                playsInline
                loop
                preload="metadata"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => toggleSound('video-04')}
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold border border-white/20 flex items-center gap-1.5 hover:bg-[#2563EB]"
              >
                {mutedStates['video-04'] ? <VolumeX size={13} /> : <Volume2 size={13} />}
                <span>{mutedStates['video-04'] ? 'Ativar Som' : 'Mutar Som'}</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* 3. SEÇÃO-RESUMO (3 CARTÕES) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 my-16 space-y-8">
        <div className="text-center space-y-2">
          <span className="inline-flex px-3.5 py-1 rounded-full bg-[#DBEAFE] text-[#2563EB] text-xs font-black uppercase tracking-widest">
            VISÃO CONSOLIDADA
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A]">
            Três Pilares de Crescimento Sustentável
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center font-black">
              <Activity size={22} />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A]">Previsibilidade</h3>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Planejamento baseado em demanda real existente, inteligência de dados, intenção de compra e metas comerciais claras.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center font-black">
              <TrendingUp size={22} />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A]">Escala</h3>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Processos e conteúdo técnico que constroem ativos digitais duradouros, gerando clientes de forma contínua e cumulativa.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center font-black">
              <DollarSign size={22} />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A]">Menor dependência de mídia paga</h3>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Crescimento contínuo com custo marginal decrescente, reduzindo o CAC e blindando sua marca das altas dos leilões de anúncios.
            </p>
          </div>
        </div>
      </section>

      {/* EXEMPLOS DOCUMENTADOS DE PRESENÇA EM BUSCA GENERATIVA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 my-12 space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-bold border border-cyan-500/30">
            <Sparkles size={14} />
            <span>EVIDÊNCIAS DE MERCADO EM CURITIBA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
            Da busca por palavras-chave à descoberta de empresas por perguntas
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Estruturamos a presença digital para mecanismos de busca tradicionais e novas experiências de descoberta baseadas em IA. Confira exemplos reais documentados no Google para buscas comerciais formuladas como perguntas por clientes:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Comfort Divisórias */}
          <div className="bg-slate-950 rounded-2xl p-6 border border-cyan-500/40 space-y-4 flex flex-col justify-between hover:border-cyan-400 transition-colors">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800">
                Divisórias Eucatex
              </span>
              <h3 className="text-lg font-bold text-white">Comfort Divisórias</h3>
              <p className="text-xs text-slate-300 font-mono">
                “qual empresa divisorias eucatex em curitiba”
              </p>
            </div>
            <Link
              to="/resultados/comfort-divisorias-google-ia-curitiba"
              className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 pt-2 border-t border-slate-800"
            >
              <span>Ver Case Comfort (#05)</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Card 2: KY Drywall */}
          <div className="bg-slate-950 rounded-2xl p-6 border border-cyan-500/40 space-y-4 flex flex-col justify-between hover:border-cyan-400 transition-colors">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800">
                Drywall &amp; Steel Frame
              </span>
              <h3 className="text-lg font-bold text-white">KY Drywall &amp; Steel Frame</h3>
              <p className="text-xs text-slate-300 font-mono">
                “qual empresa drywall em curitiba”
              </p>
            </div>
            <Link
              to="/resultados/ky-drywall-google-ia-curitiba"
              className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 pt-2 border-t border-slate-800"
            >
              <span>Ver Case KY Drywall (#06)</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Card 3: Ômega Revestimentos */}
          <div className="bg-slate-950 rounded-2xl p-6 border border-cyan-500/40 space-y-4 flex flex-col justify-between hover:border-cyan-400 transition-colors">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800">
                ACM &amp; Fachadas (+4 Anos)
              </span>
              <h3 className="text-lg font-bold text-white">Ômega Revestimentos</h3>
              <p className="text-xs text-slate-300 font-mono">
                “qual empresa instala acm em curitiba”
              </p>
            </div>
            <Link
              to="/resultados/omega-revestimentos-acm-seo-geo-curitiba"
              className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 pt-2 border-t border-slate-800"
            >
              <span>Ver Case Ômega (#08)</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Card 4: Casas Pinheirão */}
          <div className="bg-slate-950 rounded-2xl p-6 border border-cyan-500/40 space-y-4 flex flex-col justify-between hover:border-cyan-400 transition-colors">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800">
                Casas Pré-Fabricadas (IA + Org)
              </span>
              <h3 className="text-lg font-bold text-white">Casas Pinheirão</h3>
              <p className="text-xs text-slate-300 font-mono">
                “quem vende casas pre fabricadas meu terreno...”
              </p>
            </div>
            <Link
              to="/resultados/casas-pinheirao-google-ia-seo"
              className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 pt-2 border-t border-slate-800"
            >
              <span>Ver Case Casas Pinheirão (#09)</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Card 5: Motofrete Centro SP */}
          <div className="bg-slate-950 rounded-2xl p-6 border border-emerald-500/40 space-y-4 flex flex-col justify-between hover:border-emerald-400 transition-colors">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800">
                SEO Local (São Paulo / SP)
              </span>
              <h3 className="text-lg font-bold text-white">Motofrete Centro SP</h3>
              <p className="text-xs text-slate-300 font-mono">
                “Motofrete centro São Paulo”
              </p>
            </div>
            <Link
              to="/resultados/motofrete-centro-sao-paulo-seo"
              className="text-xs font-bold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 pt-2 border-t border-slate-800"
            >
              <span>Ver Case Motofrete (#10)</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="text-center pt-2">
          <Link
            to="/resultados"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-cyan-400 hover:text-cyan-300 text-xs font-bold border border-cyan-500/30 transition-all"
          >
            <span>Ver todos os cases e evidências documentadas</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* 4. CTA FINAL */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 my-12">
        <div className="bg-[#2563EB] text-white rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-[0_20px_35px_-10px_rgba(37,99,235,0.4)]">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white max-w-2xl mx-auto">
            Pronto para capturar market share com previsibilidade?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Converse diretamente com nossos especialistas e receba um diagnóstico da presença orgânica e visibilidade da sua empresa.
          </p>
          <div>
            <a
              href="https://wa.me/5541992721004"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#2563EB] font-bold text-sm shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>Fale com um especialista</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 5. RODAPÉ MÍNIMO */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#64748B]">
        <div className="font-bold text-[#0F172A]">
          Suprema • Omar SEO
        </div>
        <Link to="/" className="font-bold text-[#2563EB] hover:underline">
          ← Voltar para a home
        </Link>
      </footer>
    </div>
  );
}
