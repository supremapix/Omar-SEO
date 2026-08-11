import React from 'react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { SectionDivider } from '../components/SectionDivider';
import { InternalLinkCluster } from '../components/InternalLinkCluster';
import ConstellationGrid from '../components/ui/constellation-grid';
import { Search, CheckCircle2, ArrowRight, Zap, Target, Layers } from 'lucide-react';

export default function SeoCompleto() {
  const features = [
    'Pesquisa Semântica de Palavras-Chave de Alta Intenção',
    'Otimização On-Page Completa (H1, H2, Title, Meta Tags)',
    'Arquitetura da Informação e Links Internos (Silo Structure)',
    'Injeção de Schema.org JSON-LD para Serviços e Produtos',
    'Ajustes de UX/UI para Aumento da Taxa de Conversão (CRO)',
    'Acompanhamento de Posições no Google Search Console',
  ];

  const faqs = [
    {
      question: 'O que contempla o serviço de SEO Completo com Omar SEO?',
      answer: 'Contempla auditoria técnica inicial, pesquisa de palavras-chave comerciais, otimização de conteúdo, reestruturação de tags HTML, marcação de dados estruturados e acompanhamento contínuo de resultados.',
    },
    {
      question: 'Por que a semântica é importante no SEO atual?',
      answer: 'O Google não lê apenas palavras isoladas. Ele utiliza modelos como RankBrain e BERT para entender o contexto, os sinônimos e a entidade comercial por trás da busca do usuário.',
    },
  ];

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <EnhancedSEO
        title="SEO Completo em Curitiba e Região | Omar SEO"
        description="Estratégia completa de SEO on-page, técnico, semântico e autoridade para destacar sua empresa nos motores de busca."
        canonical="/seo"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'SEO Completo', item: '/seo' },
        ]}
      />

      {/* Hero Header */}
      <div className="relative p-8 sm:p-12 rounded-3xl bg-slate-950/80 border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.15)] overflow-hidden">
        <ConstellationGrid className="absolute inset-0 z-0 opacity-40 pointer-events-none" />
        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800 text-blue-300 font-bold text-xs uppercase tracking-wider">
            <Search size={14} />
            <span>Estratégia Holística de Ranqueamento</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            SEO Completo para Sua Empresa Dominar as Pesquisas no Google
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Transformamos o seu site em uma estrutura altamente legível e relevante para os motores de busca, garantindo que potenciais clientes te encontrem no momento exato em que pesquisarem pelos seus produtos e serviços.
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          <h2 className="text-2xl font-bold font-display text-white">
            Como Funciona o Nosso Processo de SEO Completo
          </h2>

          <p>
            O SEO moderno exige uma abordagem integrada. Não basta apenas preencher palavras-chave no texto. É necessário alinhar a intenção de busca do usuário com a velocidade da página, a clareza do código HTML e a autoridade da marca na web.
          </p>

          <p>
            Nossa consultoria analisa profundamente o segmento do seu negócio em Curitiba e Região Metropolitana, identificando as lacunas deixadas pelos seus concorrentes e construindo uma arquitetura de conteúdo focada em conversão.
          </p>

          <div className="pt-4 space-y-3">
            <h3 className="text-lg font-bold font-display text-white">
              Pilares Fundamentais Incluídos:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((item) => (
                <div key={item} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Call to Action */}
        <div className="lg:col-span-5 bg-[#0f1118] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="p-3 rounded-2xl bg-blue-950/60 border border-blue-800/60 text-blue-400 inline-block">
            <Zap size={24} />
          </div>

          <h3 className="text-xl font-bold font-display text-white">
            Solicite uma Análise do Seu Site
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Descubra o que está travando o posicionamento do seu site no Google. Fazemos um diagnóstico do seu código e da sua concorrência sem compromisso.
          </p>

          <Link
            to="/auditoria-seo"
            className="btn-primary-gold btn-shimmer w-full py-3.5 px-4"
          >
            <Zap size={15} className="fill-slate-950" />
            <span>Auditar Site</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <SectionDivider color="blue" />

      {/* Internal SEO Link Cluster */}
      <InternalLinkCluster />

      <SectionDivider color="cyan" />

      {/* FAQs */}
      <div className="pt-8 border-t border-slate-800/80 max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-bold font-display text-white text-center mb-6">
          Perguntas Frequentes sobre SEO Completo
        </h2>
        {faqs.map((faq, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
            <h3 className="text-base font-bold text-white font-display mb-2">{faq.question}</h3>
            <p className="text-xs sm:text-sm text-slate-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
