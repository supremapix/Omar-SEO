import React from 'react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import ConstellationGrid from '../components/ui/constellation-grid';
import { BackgroundVideo } from '../components/BackgroundVideo';
import { Code, CheckCircle2, ArrowRight, Zap, Terminal, Server } from 'lucide-react';

export default function SeoTecnico() {
  const checklist = [
    'Marcações JSON-LD (LocalBusiness, Person, Service, FAQPage, Breadcrumbs)',
    'Ajustes de Canonical URLs Únicas por Página para Evitar Conteúdo Duplicado',
    'Otimização de Core Web Vitals (LCP, INP, CLS)',
    'Configuração Estruturada de robots.txt, sitemap.xml e llms.txt',
    'Garantia de Pre-rendering SSG para Renderização Limpa em HTML Estático',
    'Auditoria de Indexabilidade e Erros 404 no Google Search Console',
  ];

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <EnhancedSEO
        title="SEO Técnico, Schema.org e Performance Web | Omar SEO"
        description="Auditoria e ajuste técnico de velocidade, indexação, sitemaps, canonicals, Schema.org e renderização para o Google."
        canonical="/seo-tecnico"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'SEO Técnico', item: '/seo-tecnico' },
        ]}
      />

      {/* Header */}
      <div className="relative p-8 sm:p-12 rounded-3xl bg-slate-950/80 border border-cyan-500/30 shadow-[0_0_40px_rgba(34,211,238,0.15)] overflow-hidden">
        <BackgroundVideo
          src="https://img.supremasite.com.br/seo-omar.mp4"
          opacity={0.25}
          overlayClassName="bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/60 to-[#0a0a0f]/90"
        />
        <ConstellationGrid className="absolute inset-0 z-0 opacity-40 pointer-events-none" />
        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 font-bold text-xs uppercase tracking-wider">
            <Code size={14} />
            <span>Engenharia e Arquitetura Web</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            SEO Técnico: Código Limpo e Rastreabilidade Perfeita
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Sem uma base técnica sólida, o melhor conteúdo do mundo não consegue ranquear. Garantimos velocidade, renderização impecável e marcação de dados Schema.org.
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          <h2 className="text-2xl font-bold font-display text-white">
            A Infraestrutura que Garante a Leitura do Robô do Google
          </h2>

          <p>
            O robô do Google (Googlebot) consome tempo e recursos de servidor ao rastrear a web (Crawl Budget). Sites pesados, com erros de script, redirecionamentos em loop ou ausência de renderização HTML estática são penalizados na velocidade de indexação.
          </p>

          <p>
            Nossa auditoria técnica analisa linha por linha do seu código, ajustando cabeçalhos HTTP, canonicals, marcação semântica e arquivos de controle de rastreamento.
          </p>

          <div className="pt-4 space-y-3">
            <h3 className="text-lg font-bold font-display text-white">
              Itens da Nossa Otimização Técnica:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {checklist.map((item) => (
                <div key={item} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <Terminal size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-5 bg-[#0f1118] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="p-3 rounded-2xl bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 inline-block">
            <Server size={24} />
          </div>

          <h3 className="text-xl font-bold font-display text-white">
            Auditoria de Código Sem Custo
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Descubra se seu site tem falhas de canonical, lentidão no carregamento ou bloqueios no robots.txt.
          </p>

          <Link
            to="/auditoria-seo"
            className="btn-secondary-glass btn-shimmer w-full py-3.5 px-4"
          >
            <span>Auditar Código</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
