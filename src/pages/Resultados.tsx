import React from 'react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import ConstellationGrid from '../components/ui/constellation-grid';
import { Award, TrendingUp, MapPin, Eye, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export default function Resultados() {
  const cases = [
    {
      title: 'Clínica Médica e Cirurgia no Batel',
      category: 'Saúde & Estética • Batel / Curitiba',
      metrics: [
        { label: 'Crescimento de Acessos Orgânicos', value: '+310%' },
        { label: 'Chamadas pelo Google Maps', value: '+185%' },
        { label: 'Posição em Buscas Principais', value: 'Top 3 Fixo' },
      ],
      desc: 'Reestruturação completa de dados Schema.org, otimização de categorias médicas no Google Maps e criação de páginas de tratamentos geolocalizadas.',
    },
    {
      title: 'Empresa de Automação Industrial na CIC',
      category: 'Indústria B2B • Cidade Industrial de Curitiba',
      metrics: [
        { label: 'Impressões no Google Search', value: '+450%' },
        { label: 'Leads Qualificados via Formulário', value: '+220%' },
        { label: 'Tempo Médio de Permanência', value: '3m 40s' },
      ],
      desc: 'Estratégia B2B focada em especificações técnicas, catálogo de peças em JSON-LD e conteúdo semântico para compradores industriais.',
    },
    {
      title: 'Escritório de Advocacia Corporativa no Centro',
      category: 'Serviços Jurídicos • Centro / Curitiba',
      metrics: [
        { label: 'Novos Agendamentos Mensais', value: '+140%' },
        { label: 'Avaliações 5 Estrelas no Google', value: '85+ Novas' },
        { label: 'Citação em Buscas de IA', value: 'Ativo' },
      ],
      desc: 'Fortalecimento dos pilares E-E-A-T do Google, autoridade do perfil no Google Maps e estruturação de artigos jurídicos de alta intenção comercial.',
    },
  ];

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <EnhancedSEO
        title="Cases de Sucesso e Resultados de SEO | Omar SEO"
        description="Conheça relatórios, métricas de crescimento e projetos otimizados com a engenharia de visibilidade do Omar SEO."
        canonical="/resultados"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Resultados', item: '/resultados' },
        ]}
      />

      {/* Header */}
      <div className="relative p-8 sm:p-12 rounded-3xl bg-slate-950/80 border border-yellow-500/30 shadow-[0_0_40px_rgba(250,204,21,0.15)] overflow-hidden">
        <ConstellationGrid className="absolute inset-0 z-0 opacity-40 pointer-events-none" />
        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-bold text-xs uppercase tracking-wider">
            <Award size={14} />
            <span>Métricas e Projetos Reais</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            Resultados Reais Obtidos com Engenharia de SEO
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Confira o impacto comercial gerado por nossas otimizações em empresas situadas no Batel, Centro, CIC e demais regiões de Curitiba.
          </p>
        </div>
      </div>

      {/* Cases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cases.map((c) => (
          <div key={c.title} className="p-6 rounded-3xl bg-slate-950 border border-slate-800 hover:border-yellow-500/40 transition-all flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[11px] font-bold text-yellow-400 uppercase tracking-wider block mb-2">
                {c.category}
              </span>
              <h3 className="text-xl font-bold font-display text-white">{c.title}</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">{c.desc}</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-900">
              {c.metrics.map((m) => (
                <div key={m.label} className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">{m.label}</span>
                  <span className="font-extrabold font-display text-emerald-400">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 to-blue-950 border border-slate-800 text-center space-y-4">
        <h2 className="text-2xl font-bold font-display text-white">
          Quer que Seu Projeto Seja o Nosso Próximo Case de Sucesso?
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          Solicite um diagnóstico completo sem custos e entenda qual o potencial de crescimento orgânico do seu negócio em Curitiba.
        </p>
        <Link
          to="/auditoria-seo"
          className="btn-primary-gold btn-shimmer px-6 py-3.5"
        >
          <Zap size={16} className="fill-slate-950" />
          <span>Diagnóstico Gratuito</span>
        </Link>
      </div>
    </div>
  );
}
