import React from 'react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import ConstellationGrid from '../components/ui/constellation-grid';
import { BackgroundVideo } from '../components/BackgroundVideo';
import { SERVICES_DATA } from '../data/servicesData';
import {
  Search,
  FileSearch,
  Code,
  MapPin,
  ShoppingBag,
  Link2,
  TrendingUp,
  Cpu,
  ArrowRight,
  MessageCircle,
  Zap,
  CheckCircle2,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  'consultoria-seo': Search,
  'auditoria-seo': FileSearch,
  'setup-seo-tecnico': Code,
  'seo-local': MapPin,
  'seo-ecommerce': ShoppingBag,
  'link-building': Link2,
  'cro-otimizacao-conversao': TrendingUp,
  'geo-otimizacao-ia': Cpu,
};

export default function ServicesIndex() {
  const servicesList = Object.values(SERVICES_DATA);

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Serviços', item: '/servicos' },
  ];

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <EnhancedSEO
        title="Serviços de SEO e Visibilidade Digital em Curitiba | Omar SEO"
        description="Conheça nosso leque de serviços em SEO técnico, SEO local, Google Maps, E-commerce, Link Building, CRO e GEO (Otimização para Inteligência Artificial)."
        canonical="/servicos"
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Header */}
      <section className="relative p-8 sm:p-12 lg:p-16 rounded-3xl bg-slate-950/80 border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.15)] overflow-hidden">
        <BackgroundVideo
          src="https://img.supremasite.com.br/seo-omar.mp4"
          opacity={0.40}
          overlayClassName="bg-gradient-to-b from-[#0a0a0f]/75 via-[#0a0a0f]/55 to-[#0a0a0f]/85"
        />
        <ConstellationGrid className="absolute inset-0 z-0 opacity-40 pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-950/90 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(34,211,238,0.3)]">
            Soluções Completas de Visibilidade
          </span>

          <h1 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            Nossos Serviços de SEO & GEO em Curitiba
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Engenharia de tráfego orgânico, otimização técnica de código e preparação de presença digital para o Google e assistentes de Inteligência Artificial.
          </p>
        </div>
      </section>

      {/* Special Feature: SEO + GEO + AIO Presentation */}
      <section className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/90 via-slate-900/90 to-cyan-950/90 border border-cyan-500/40 shadow-[0_0_30px_rgba(34,211,238,0.2)] overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="px-3 py-1 rounded-full bg-cyan-400 text-slate-950 text-[10px] font-extrabold uppercase tracking-widest inline-block">
              🎬 4 Vídeos Explicativos
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-display text-white">
              Como Ganhar Mercado: SEO + GEO + AIO
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Entenda como unificamos o SEO tradicional, a otimização generativa para ChatGPT/Gemini e a arquitetura semântica para expandir seu market share com previsibilidade.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              to="/seo-geo-aio"
              className="btn-primary-gold btn-shimmer w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
            >
              <span>Assistir Apresentação</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href="/seo-geo-aio.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cyan-300 hover:text-white underline underline-offset-4 px-2 py-1"
            >
              Arquivo .html ↗
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid (8 Services) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {servicesList.map((service) => {
          const Icon = ICON_MAP[service.slug] || Search;
          return (
            <div
              key={service.slug}
              className="bg-[#0f1118] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5 flex flex-col justify-between hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-blue-950/80 text-cyan-400 border border-blue-800/80 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon size={24} />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-[10px] font-bold uppercase tracking-wider">
                    {service.heroBadge}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                  {service.name}
                </h2>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {service.heroSubtitle}
                </p>

                <div className="pt-2 space-y-1.5 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                    <span>Foco: {service.targetKeyword}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <Link
                  to={`/servicos/${service.slug}`}
                  className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-bold text-xs sm:text-sm hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all group-hover:translate-x-1"
                >
                  <span>Ver Detalhes do Serviço</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Conversion Banner */}
      <section className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-yellow-500/30 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
          Dúvida Sobre Qual Serviço Escolher?
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
          Entre em contato direto com Omar Skafi para um diagnóstico gratuito da situação do seu site no Google.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5541992721004"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-emerald-wa btn-shimmer px-6 py-3 text-sm font-bold flex items-center gap-2"
          >
            <MessageCircle size={18} />
            <span>Falar no WhatsApp</span>
          </a>
          <Link
            to="/auditoria-seo"
            className="btn-primary-gold btn-shimmer px-6 py-3 text-sm font-bold flex items-center gap-2"
          >
            <Zap size={18} className="fill-slate-950" />
            <span>Solicitar Auditoria Gratuita</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
