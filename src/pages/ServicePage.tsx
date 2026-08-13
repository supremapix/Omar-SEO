import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import ConstellationGrid from '../components/ui/constellation-grid';
import { BackgroundVideo } from '../components/BackgroundVideo';
import { SERVICES_DATA, ServiceData } from '../data/servicesData';
import {
  MessageCircle,
  Zap,
  ChevronRight,
  HelpCircle,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ListOrdered,
  FileText,
  Sparkles,
} from 'lucide-react';
import { NotFoundView } from './NotFound';

interface ServicePageProps {
  slug?: string;
}

export default function ServicePage({ slug: propSlug }: ServicePageProps) {
  const params = useParams<{ slug: string }>();
  const currentSlug = propSlug || params.slug || '';
  const service: ServiceData | undefined = SERVICES_DATA[currentSlug];

  if (!service) {
    return <NotFoundView />;
  }

  const DOMAIN = 'https://omarseo.digital';
  const canonicalPath = `/servicos/${service.slug}`;

  // Build JSON-LD Service schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${DOMAIN}${canonicalPath}/#service`,
    name: service.name,
    serviceType: service.targetKeyword,
    description: service.heroSubtitle,
    provider: {
      '@type': 'ProfessionalService',
      name: 'Omar SEO — Omar Skafi',
      url: DOMAIN,
      telephone: '+5541987001004',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Av. Sete de Setembro, 2775 - 9º andar',
        addressLocality: 'Curitiba',
        addressRegion: 'PR',
        postalCode: '80230-010',
        addressCountry: 'BR',
      },
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Curitiba' },
      { '@type': 'AdministrativeArea', name: 'Região Metropolitana de Curitiba' },
      { '@type': 'AdministrativeArea', name: 'Paraná' },
    ],
  };

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Serviços', item: '/servicos' },
    { name: service.name, item: canonicalPath },
  ];

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <EnhancedSEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={canonicalPath}
        breadcrumbs={breadcrumbs}
        schema={[serviceSchema]}
      />

      {/* Hero Section */}
      <section className="relative p-8 sm:p-12 lg:p-16 rounded-3xl bg-slate-950/80 border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.15)] overflow-hidden">
        <BackgroundVideo
          src="https://img.supremasite.com.br/seo-omar.mp4"
          opacity={0.40}
          overlayClassName="bg-gradient-to-b from-[#0a0a0f]/75 via-[#0a0a0f]/55 to-[#0a0a0f]/85"
        />
        <ConstellationGrid className="absolute inset-0 z-0 opacity-40 pointer-events-none" />

        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/90 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.25)]">
            <Sparkles size={14} className="text-cyan-400 animate-pulse" />
            <span>{service.heroBadge}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight leading-tight">
            {service.heroTitle}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
            {service.heroSubtitle}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5541992721004"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-emerald-wa btn-shimmer w-full sm:w-auto px-6 py-3.5 text-sm font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              <span>Falar com Especialista</span>
            </a>

            <Link
              to="/auditoria-seo"
              className="btn-primary-gold btn-shimmer w-full sm:w-auto px-6 py-3.5 text-sm font-bold flex items-center justify-center gap-2"
            >
              <Zap size={18} className="fill-slate-950" />
              <span>Solicitar Análise Técnica</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Navigation Index */}
      <nav
        aria-label="Índice da página"
        className="bg-[#0f1118] border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-md"
      >
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-bold mb-3">
          <ListOrdered size={16} />
          <span>Índice de Navegação Nesta Página</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs sm:text-sm">
          {service.sections.map((sec, idx) => {
            const anchorId = `secao-${idx + 1}`;
            return (
              <a
                key={idx}
                href={`#${anchorId}`}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-transparent hover:border-slate-700"
              >
                <span className="text-blue-400 font-bold">{idx + 1}.</span>
                <span className="truncate">{sec.title}</span>
              </a>
            );
          })}
          <a
            href="#processo"
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-transparent hover:border-slate-700"
          >
            <span className="text-yellow-400 font-bold">P.</span>
            <span>Como Funciona / Processo</span>
          </a>
          <a
            href="#faq"
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-transparent hover:border-slate-700"
          >
            <span className="text-emerald-400 font-bold">F.</span>
            <span>Perguntas Frequentes (FAQ)</span>
          </a>
        </div>
      </nav>

      {/* Main Content Sections (min 150 words per section) */}
      <div className="space-y-12">
        {service.sections.map((sec, idx) => {
          const anchorId = `secao-${idx + 1}`;
          return (
            <section
              key={idx}
              id={anchorId}
              className="scroll-mt-28 bg-[#0d0f16] border border-slate-800/80 rounded-3xl p-6 sm:p-10 space-y-6 shadow-lg hover:border-blue-500/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-blue-950 text-blue-400 font-bold text-sm border border-blue-800/80 shrink-0">
                  0{idx + 1}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {sec.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {sec.subsections.map((sub, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-5 rounded-2xl bg-[#11141e] border border-slate-800/60 space-y-3 hover:border-slate-700 transition-colors"
                  >
                    <h3 className="text-base font-bold text-blue-300 flex items-start gap-2">
                      <ChevronRight size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{sub.subtitle}</span>
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {sub.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Comparative Table (if present) */}
      {service.comparativeTable && (
        <section className="bg-[#0f1118] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
              Diferenciais de Desempenho
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Veja por que nossa abordagem em {service.name} se destaca do mercado tradicional.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-300">
                  <th className="p-3 sm:p-4 font-bold text-white">Ponto de Otimização</th>
                  <th className="p-3 sm:p-4 font-bold text-slate-400">
                    {service.comparativeTable.headers[1]}
                  </th>
                  <th className="p-3 sm:p-4 font-bold text-cyan-400">
                    {service.comparativeTable.headers[2]}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                {service.comparativeTable.rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                    <td className="p-3 sm:p-4 font-bold text-white flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                      <span>{row.feature}</span>
                    </td>
                    <td className="p-3 sm:p-4 text-slate-400">{row.traditional}</td>
                    <td className="p-3 sm:p-4 font-semibold text-cyan-300 bg-cyan-950/20">
                      {row.omarSeo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Process / How it Works Section */}
      <section id="processo" className="scroll-mt-28 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-950/80 border border-yellow-500/40 text-yellow-300 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck size={14} />
            <span>Metodologia Comprovada</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Como Funciona o Processo de {service.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Etapas estruturadas do início ao topo das pesquisas no Google e mecanismos de IA.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.processSteps.map((step) => (
            <div
              key={step.number}
              className="bg-[#0f1118] border border-slate-800 rounded-2xl p-6 space-y-3 relative hover:border-yellow-500/40 transition-all group"
            >
              <div className="text-3xl font-black font-display text-yellow-400/30 group-hover:text-yellow-400 transition-colors">
                {step.number}
              </div>
              <h3 className="text-base font-bold text-white">{step.title}</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section (HTML details/summary - NO FAQPage JSON-LD) */}
      <section id="faq" className="scroll-mt-28 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-widest">
            <HelpCircle size={14} className="text-blue-400" />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Tire Suas Dúvidas Sobre {service.name}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {service.faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-[#0f1118] border border-slate-800 rounded-2xl p-4 sm:p-5 text-slate-200 transition-all [&[open]]:border-blue-500/40 [&[open]]:bg-[#111420]"
            >
              <summary className="flex items-center justify-between font-bold text-sm sm:text-base cursor-pointer list-none select-none text-white hover:text-blue-400 transition-colors">
                <span className="pr-4">{faq.question}</span>
                <span className="text-blue-400 font-bold transition-transform duration-200 group-open:rotate-180 shrink-0">
                  ↓
                </span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-950/80 via-[#0a0a0f] to-slate-950 border border-blue-500/40 shadow-[0_0_50px_rgba(59,130,246,0.2)] text-center space-y-6 overflow-hidden">
        <ConstellationGrid className="absolute inset-0 z-0 opacity-30 pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-4xl font-black font-display text-white">
            Pronto para Elevar o Nível do Seu Negócio com {service.name}?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm sm:text-base leading-relaxed">
            Fale diretamente com Omar Skafi e descubra a estratégia exata para posicionar sua empresa em Curitiba e no Brasil.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5541992721004"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-emerald-wa btn-shimmer w-full sm:w-auto px-6 py-3.5 text-sm font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              <span>Chamar no WhatsApp (41) 99272-1004</span>
            </a>
            <Link
              to="/contato"
              className="btn-primary-gold btn-shimmer w-full sm:w-auto px-6 py-3.5 text-sm font-bold flex items-center justify-center gap-2"
            >
              <span>Formulário de Contato</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
