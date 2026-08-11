import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMMERCIAL_INTENTS_DATA } from '../data/commercialIntents';
import { NotFoundView } from './NotFound';
import { SectionDivider } from '../components/SectionDivider';
import { InternalLinkCluster } from '../components/InternalLinkCluster';
import { CheckCircle2, ArrowRight, Zap, HelpCircle } from 'lucide-react';

export default function CommercialIntentPage() {
  const location = useLocation();
  const slug = location.pathname.replace(/^\//, '');

  const data = COMMERCIAL_INTENTS_DATA[slug];

  if (!data) {
    return <NotFoundView />;
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.h1,
    description: data.subtitle,
    provider: {
      '@type': 'ProfessionalService',
      name: 'Omar SEO',
      url: 'https://omarseo.digital',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Curitiba - PR',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((f) => ({
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
        title={data.metaTitle}
        description={data.metaDescription}
        canonical={`/${data.slug}`}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: data.h1, item: `/${data.slug}` },
        ]}
        schema={[serviceSchema, faqSchema]}
      />

      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800 text-blue-300 font-bold text-xs uppercase tracking-wider">
          <span>Intenção Comercial • Curitiba / PR</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
          {data.h1}
        </h1>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {data.subtitle}
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          {data.contentParagraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}

          {/* Benefits Grid */}
          <div className="pt-4 space-y-4">
            <h2 className="text-xl font-bold font-display text-white">
              Diferenciais da Nossa Metodologia
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.keyBenefits.map((benefit) => (
                <div key={benefit.title} className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                  <h3 className="text-sm font-bold text-white font-display flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>{benefit.title}</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Call to Action */}
        <div className="lg:col-span-5 bg-[#0f1118] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="p-3 rounded-2xl bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 inline-block">
            <Zap size={24} />
          </div>

          <h3 className="text-xl font-bold font-display text-white">
            Atendimento com Omar Skafi
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Agende um diagnóstico diretamente no WhatsApp e descubra como posicionar sua empresa para o termo <strong className="text-white">{data.h1}</strong> em Curitiba.
          </p>

          <a
            href="https://wa.me/5541992721004"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all"
          >
            <span>FALAR NO WHATSAPP AGORA</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <SectionDivider color="amber" />

      {/* Internal SEO Link Cluster */}
      <InternalLinkCluster />

      <SectionDivider color="blue" />

      {/* FAQs */}
      <div className="pt-8 border-t border-slate-800/80 max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-bold font-display text-white text-center mb-6 flex items-center justify-center gap-2">
          <HelpCircle className="text-blue-400" />
          <span>Perguntas Frequentes</span>
        </h2>
        {data.faqs.map((faq, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
            <h3 className="text-base font-bold text-white font-display mb-2">{faq.question}</h3>
            <p className="text-xs sm:text-sm text-slate-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
