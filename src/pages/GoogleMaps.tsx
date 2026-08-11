import React from 'react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import ConstellationGrid from '../components/ui/constellation-grid';
import { BackgroundVideo } from '../components/BackgroundVideo';
import { Map, CheckCircle2, ArrowRight, Zap, Star, PhoneCall } from 'lucide-react';

export default function GoogleMaps() {
  const steps = [
    'Otimização de Categorias Primárias e Secundárias Exatas',
    'Preenchimento de Produtos, Serviços e Atributos de Acessibilidade',
    'Estratégia de Aquisição e Resposta de Avaliações (Reviews)',
    'Publicação de Posts Periódicos e Atualização de Fotos',
    'Consistência NAP (Nome, Endereço e Telefone) na Web',
    'Injeção de Schema.org LocalBusiness no Site Conectado',
  ];

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <EnhancedSEO
        title="Otimização de Google Maps e Perfil da Empresa | Omar SEO"
        description="Posicione seu Perfil da Empresa no topo do Google Maps em Curitiba. Aumente chamadas, rotas e visitas locais."
        canonical="/google-maps"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Google Maps', item: '/google-maps' },
        ]}
      />

      {/* Header */}
      <div className="relative p-8 sm:p-12 rounded-3xl bg-slate-950/80 border border-yellow-500/30 shadow-[0_0_40px_rgba(250,204,21,0.15)] overflow-hidden">
        <BackgroundVideo
          src="https://img.supremasite.com.br/seo-omar.mp4"
          opacity={0.40}
          overlayClassName="bg-gradient-to-b from-[#0a0a0f]/70 via-[#0a0a0f]/50 to-[#0a0a0f]/80"
        />
        <ConstellationGrid className="absolute inset-0 z-0 opacity-40 pointer-events-none" />
        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-bold text-xs uppercase tracking-wider">
            <Map size={14} />
            <span>Pacote Local & Perfil da Empresa</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            Otimização do Perfil da Empresa no Google Maps em Curitiba
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Apareça no cobiçado Top 3 do Google Maps quando clientes locais buscarem pelo seu serviço no smartphone ou computador.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          <h2 className="text-2xl font-bold font-display text-white">
            Por que Focar no Google Maps?
          </h2>

          <p>
            O Google Maps (antigo Google Meu Negócio) é a porta de entrada mais direta para ligações no WhatsApp, solicitações de rota no Waze e visitas físicas para estabelecimentos comerciais em Curitiba.
          </p>

          <p>
            Entretanto, a maioria das empresas cadastra o perfil e esquece de otimizá-lo. Com as técnicas de engenharia do Omar SEO, ajustamos a relevância, a proximidade e a autoridade da sua ficha para superar os concorrentes do bairro.
          </p>

          <div className="pt-4 space-y-3">
            <h3 className="text-lg font-bold font-display text-white">
              Ações Executadas no Seu Perfil de Empresa:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {steps.map((item) => (
                <div key={item} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <Star size={16} className="text-yellow-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-5 bg-[#0f1118] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="p-3 rounded-2xl bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 inline-block">
            <PhoneCall size={24} />
          </div>

          <h3 className="text-xl font-bold font-display text-white">
            Quer Mais Ligações Vindas do Google Maps?
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Solicite um diagnóstico da sua ficha no Google Maps hoje mesmo e receba um plano de melhorias imediato.
          </p>

          <Link
            to="/auditoria-seo"
            className="btn-primary-gold btn-shimmer w-full py-3.5 px-4"
          >
            <span>Auditar Ficha Maps</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
