import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { getLocationData } from '../data/locations';
import { MapPin, Building2, Search, ArrowRight, Zap, CheckCircle2, HelpCircle } from 'lucide-react';
import { NotFoundView } from './NotFound';
import { SectionDivider } from '../components/SectionDivider';
import { InternalLinkCluster } from '../components/InternalLinkCluster';
import ConstellationGrid from '../components/ui/constellation-grid';
import { BackgroundVideo } from '../components/BackgroundVideo';

export default function LocationPage() {
  const location = useLocation();
  const rawSlug = location.pathname.replace(/^\//, ''); // e.g. "seo-batel"

  if (!rawSlug.startsWith('seo-')) {
    return <NotFoundView />;
  }

  const locData = getLocationData(rawSlug);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `SEO e Visibilidade Digital em ${locData.name}`,
    description: locData.shortDesc,
    provider: {
      '@type': 'ProfessionalService',
      name: 'Omar SEO',
      url: 'https://omarseo.digital',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: `${locData.name}, ${locData.regionName}`,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: locData.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <EnhancedSEO
        title={`SEO em ${locData.name} | Especialista em Google Maps e Busca - Omar SEO`}
        description={`Estratégia de SEO local, Google Maps e visibilidade digital para empresas em ${locData.name}. Destaque sua marca na região com Omar SEO.`}
        canonical={`/${rawSlug}`}
        geo={{ placeName: locData.name, lat: locData.lat, lng: locData.lng }}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'SEO Local', item: '/seo-local' },
          { name: locData.name, item: `/${rawSlug}` },
        ]}
        schema={[serviceSchema, faqSchema]}
      />

      {/* Hero */}
      <div className="relative p-8 sm:p-12 rounded-3xl bg-slate-950/80 border border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.15)] overflow-hidden">
        <BackgroundVideo
          src="https://img.supremasite.com.br/seo-omar.mp4"
          opacity={0.40}
          overlayClassName="bg-gradient-to-b from-[#0a0a0f]/70 via-[#0a0a0f]/50 to-[#0a0a0f]/80"
        />
        <ConstellationGrid className="absolute inset-0 z-0 opacity-40 pointer-events-none" />
        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-300 font-bold text-xs uppercase tracking-wider">
            <MapPin size={14} />
            <span>{locData.regionName}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            SEO e Posicionamento no Google em {locData.name}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {locData.shortDesc}
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          <h2 className="text-2xl font-bold font-display text-white">
            Estratégia de SEO Geolocalizada para {locData.name}
          </h2>

          <p>{locData.fullDesc}</p>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Building2 className="text-emerald-400" size={16} />
              <span>Perfil Comercial Característico em {locData.name}</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">{locData.commercialProfile}</p>
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="text-base font-bold font-display text-white flex items-center gap-2">
              <Search className="text-blue-400" size={18} />
              <span>Exemplos de Buscas Locais no Google em {locData.name}:</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {locData.typicalSearches.map((s) => (
                <div key={s} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>"{s}"</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Call to Action */}
        <div className="lg:col-span-5 bg-[#0f1118] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="p-3 rounded-2xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 inline-block">
            <Zap size={24} />
          </div>

          <h3 className="text-xl font-bold font-display text-white">
            Apareça no Google em {locData.name}
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Agende uma análise geográfica gratuita da sua marca em <strong className="text-white">{locData.name}</strong> e entorno.
          </p>

          <a
            href="https://wa.me/5541992721004"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-emerald-wa btn-shimmer w-full py-3.5 px-4"
          >
            <span>Falar no WhatsApp</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>

      {/* Cluster Interlinking Nearby Locations */}
      {locData.nearbySlugs && locData.nearbySlugs.length > 0 && (
        <div className="pt-8 border-t border-slate-800/80 space-y-4">
          <h2 className="text-xl font-bold font-display text-white">
            Regiões e Bairros Vizinhos de {locData.name}:
          </h2>

          <div className="flex flex-wrap gap-2 text-xs">
            {locData.nearbySlugs.map((slug) => {
              const formattedName = slug
                .split('-')
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(' ');

              return (
                <Link
                  key={slug}
                  to={`/seo-${slug}`}
                  className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500 hover:text-emerald-400 transition-all font-semibold"
                >
                  SEO em {formattedName}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      <SectionDivider color="emerald" />

      {/* Internal SEO Link Cluster */}
      <InternalLinkCluster category="all" title={`Rede de SEO e Soluções para ${locData.name}`} />

      <SectionDivider color="cyan" />

      {/* Local FAQs */}
      {locData.faqs && locData.faqs.length > 0 && (
        <div className="pt-8 border-t border-slate-800/80 max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold font-display text-white text-center mb-6 flex items-center justify-center gap-2">
            <HelpCircle className="text-emerald-400" />
            <span>Perguntas Frequentes — SEO em {locData.name}</span>
          </h2>
          {locData.faqs.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <h3 className="text-base font-bold text-white font-display mb-2">{faq.question}</h3>
              <p className="text-xs sm:text-sm text-slate-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
