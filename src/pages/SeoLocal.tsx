import React from 'react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { MapPin, CheckCircle2, ArrowRight, Zap, Building2, Compass } from 'lucide-react';
import { CURITIBA_OFFICIAL_NEIGHBORHOODS, RMC_CITIES, slugify } from '../data/locations';

export default function SeoLocal() {
  const topNeighborhoods = CURITIBA_OFFICIAL_NEIGHBORHOODS.slice(0, 24);

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <EnhancedSEO
        title="SEO Local para Empresas em Curitiba e RMC | Omar SEO"
        description="Otimização de SEO local para atrair clientes da sua cidade e bairro quando buscarem pelos seus produtos e serviços."
        canonical="/seo-local"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'SEO Local', item: '/seo-local' },
        ]}
      />

      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-300 font-bold text-xs uppercase tracking-wider">
          <MapPin size={14} />
          <span>Visibilidade Geolocalizada Hiperfocada</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
          SEO Local para Conectar Sua Empresa aos Clientes do Seu Bairro
        </h1>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Atraia moradores e empresas localizadas no Batel, Água Verde, Centro, CIC, Santa Felicidade e em todas as regiões de Curitiba e municípios da Região Metropolitana.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          <h2 className="text-2xl font-bold font-display text-white">
            Por que o SEO Local é Decisivo para Faturar Mais em Curitiba?
          </h2>

          <p>
            Quando um consumidor pesquisa "médico perto de mim", "advogado no Batel" ou "manutenção industrial na CIC", o Google utiliza a localização do usuário para priorizar os resultados mais próximos e relevantes.
          </p>

          <p>
            Com a consultoria de SEO Local de Omar Skafi, sua empresa é estruturada tecnicamente para responder a essas pesquisas de alta intenção comercial, combinando o Perfil de Empresa do Google com landing pages de bairro otimizadas.
          </p>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <h3 className="text-lg font-bold font-display text-white flex items-center gap-2">
              <Building2 className="text-emerald-400" size={20} />
              <span>Bairros e Regiões com Maior Intenção em Curitiba</span>
            </h3>
            <p className="text-xs text-slate-400">
              Curitiba possui 75 bairros oficiais. Atuamos com clusters hiperfocados para abranger do Batel ao CIC, do Pinheirinho ao Bacacheri.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-5 bg-[#0f1118] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="p-3 rounded-2xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 inline-block">
            <Compass size={24} />
          </div>

          <h3 className="text-xl font-bold font-display text-white">
            Domine Seu Bairro no Google
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Agende uma análise geográfica da sua empresa e descubra quantos clientes em potencial estão pesquisando pelo seu serviço na sua região hoje.
          </p>

          <Link
            to="/auditoria-seo"
            className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all"
          >
            <span>ANALISAR MEU RAIO DE ATENDIMENTO</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Directory of Neighborhoods Grid */}
      <div className="pt-10 border-t border-slate-800/80 space-y-6">
        <h2 className="text-2xl font-bold font-display text-white text-center">
          Páginas de SEO Local para Bairros de Curitiba
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-xs">
          {topNeighborhoods.map((b) => {
            const slug = slugify(b);
            return (
              <Link
                key={b}
                to={`/seo-${slug}`}
                className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500 hover:text-emerald-400 transition-all font-semibold flex items-center justify-between group"
              >
                <span>SEO em {b}</span>
                <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            );
          })}
        </div>

        <div className="text-center pt-4">
          <p className="text-xs text-slate-400">
            *Atendemos todos os 75 bairros oficiais de Curitiba e cidades da RMC.
          </p>
        </div>
      </div>
    </div>
  );
}
