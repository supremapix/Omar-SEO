import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Search,
  Map,
  Cpu,
  Code,
  FileSearch,
  Award,
  User,
  Zap,
  ArrowRight,
  Compass,
} from 'lucide-react';
import { CURITIBA_OFFICIAL_NEIGHBORHOODS, slugify } from '../data/locations';

interface InternalLinkClusterProps {
  title?: string;
  subtitle?: string;
  category?: 'all' | 'services' | 'intents' | 'locations';
}

export function InternalLinkCluster({
  title = 'Explore Nossa Rede de Conteúdo & Soluções em SEO',
  subtitle = 'Conectamos estratégias de SEO Técnico, SEO Local por Bairros de Curitiba e Inteligência Artificial para alavancar seu posicionamento.',
  category = 'all',
}: InternalLinkClusterProps) {
  const topNeighborhoods = CURITIBA_OFFICIAL_NEIGHBORHOODS.slice(0, 16);

  const mainServices = [
    { name: 'SEO Completo', href: '/seo', icon: Search, badge: 'Estratégico' },
    { name: 'SEO Local Bairros', href: '/seo-local', icon: MapPin, badge: 'Geolocalizado' },
    { name: 'Google Maps Top 3', href: '/google-maps', icon: Map, badge: 'Perfil Empresa' },
    { name: 'GEO para IA', href: '/geo-ia', icon: Cpu, badge: 'ChatGPT & Gemini' },
    { name: 'SEO Técnico Code', href: '/seo-tecnico', icon: Code, badge: 'Schema.org' },
    { name: 'Diagnóstico & Auditoria', href: '/auditoria-seo', icon: FileSearch, badge: 'Gratuito' },
  ];

  const commercialIntents = [
    { name: 'Especialista SEO Curitiba', href: '/especialista-seo-curitiba' },
    { name: 'Consultor SEO Curitiba', href: '/consultor-seo-curitiba' },
    { name: 'SEO para Empresas', href: '/seo-para-empresas' },
    { name: 'SEO Google Maps', href: '/seo-google-maps' },
    { name: 'SEO para ChatGPT', href: '/seo-para-chatgpt' },
    { name: 'SEO para Gemini', href: '/seo-para-gemini' },
    { name: 'Consultoria SEO', href: '/consultoria-seo' },
    { name: 'SEO Local Curitiba', href: '/seo-local-curitiba' },
  ];

  return (
    <div className="my-12 p-6 sm:p-8 rounded-3xl bg-[#0e1017] border border-slate-800/90 shadow-2xl space-y-8 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/80 text-blue-300 font-bold text-[11px] uppercase tracking-wider">
          <Compass size={14} className="text-cyan-400" />
          <span>Arquitetura de Links & SEO Silo</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black font-display text-white">{title}</h2>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{subtitle}</p>
      </div>

      {/* Main Core Services Grid */}
      {(category === 'all' || category === 'services') && (
        <div className="space-y-3 relative z-10">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 border-b border-slate-800/80 pb-2">
            Páginas Principais de Serviços:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
            {mainServices.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.href}
                  to={s.href}
                  className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/80 hover:bg-slate-800/90 transition-all group flex flex-col justify-between space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <Icon size={16} className="text-blue-400 group-hover:text-cyan-300 transition-colors" />
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">
                      {s.badge}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">
                    {s.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Commercial Intent Direct Links */}
      {(category === 'all' || category === 'intents') && (
        <div className="space-y-3 relative z-10">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 border-b border-slate-800/80 pb-2">
            Landing Pages de Intenção Direta em Curitiba:
          </h3>
          <div className="flex flex-wrap gap-2 text-xs">
            {commercialIntents.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-yellow-400 hover:border-yellow-500/60 transition-all font-medium flex items-center gap-1.5 group"
              >
                <span>{item.name}</span>
                <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-yellow-400" />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Neighborhood Links Cluster */}
      {(category === 'all' || category === 'locations') && (
        <div className="space-y-3 relative z-10 pt-2 border-t border-slate-800/80">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
            <span>Principais Bairros Atendidos em Curitiba:</span>
            <Link to="/seo-local" className="text-[11px] text-blue-400 hover:underline">
              Ver todos os 75 bairros →
            </Link>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2 text-[11px]">
            {topNeighborhoods.map((b) => (
              <Link
                key={b}
                to={`/seo-${slugify(b)}`}
                className="p-2 rounded-xl bg-slate-950/80 border border-slate-800/80 text-slate-300 hover:border-emerald-500 hover:text-emerald-400 transition-all font-semibold text-center truncate"
                title={`SEO em ${b}`}
              >
                {b}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
