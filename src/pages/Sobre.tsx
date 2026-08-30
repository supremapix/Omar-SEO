import React from 'react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import ConstellationGrid from '../components/ui/constellation-grid';
import { BackgroundVideo } from '../components/BackgroundVideo';
import {
  User,
  ShieldCheck,
  MapPin,
  Building,
  Globe,
  ExternalLink,
  Zap,
  CheckCircle2,
  Award,
  BookOpen,
  MessageCircle,
  Briefcase,
} from 'lucide-react';

export default function Sobre() {
  const DOMAIN = 'https://omarseo.digital';

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${DOMAIN}/#person`,
    name: 'Omar Skafi',
    jobTitle: 'Especialista em SEO, GEO e Visibilidade Digital',
    image: 'https://bio.supremamidia.com.br/imagens/gestor-de-trafego-organico-em-curitiba.png',
    worksFor: {
      '@type': 'Organization',
      name: 'OSKAFI WEB SITES LTDA ME (Suprema Sites Express)',
      url: 'https://supremasite.com.br',
    },
    url: `${DOMAIN}/sobre`,
    sameAs: ['https://bio.supremamidia.com.br/', 'https://supremasite.com.br'],
  };

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${DOMAIN}/sobre/#profile`,
    url: `${DOMAIN}/sobre`,
    name: 'Sobre Omar Skafi e Omar SEO',
    mainEntity: { '@id': `${DOMAIN}/#person` },
  };

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <EnhancedSEO
        title="Sobre Omar Skafi — Especialista em SEO, GEO e Visibilidade | Omar SEO"
        description="Conheça a trajetória de Omar Skafi, especialista em SEO técnico, SEO local e GEO em Curitiba. Mais de 12 anos de experiência em tráfego orgânico e código."
        canonical="/sobre"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Sobre Omar SEO', item: '/sobre' },
        ]}
        schema={[personSchema, profilePageSchema]}
      />

      {/* Header */}
      <section className="relative p-8 sm:p-12 lg:p-16 rounded-3xl bg-slate-950/80 border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.15)] overflow-hidden">
        <BackgroundVideo
          src="https://img.supremasite.com.br/seo-omar.mp4"
          opacity={0.40}
          overlayClassName="bg-gradient-to-b from-[#0a0a0f]/75 via-[#0a0a0f]/55 to-[#0a0a0f]/85"
        />
        <ConstellationGrid className="absolute inset-0 z-0 opacity-40 pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/90 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.25)]">
            <User size={14} className="text-cyan-400" />
            <span>Engenharia de Visibilidade Digital</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            Sobre Omar Skafi & Omar SEO
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Especialista em SEO técnico, SEO local, Google Maps e preparação de marcas para a Inteligência Artificial em Curitiba e todo o Brasil.
          </p>
        </div>
      </section>

      {/* Bio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="p-8 rounded-3xl bg-[#0f1118] border border-slate-800 shadow-2xl text-center space-y-5 w-full">
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-cyan-500/40 mx-auto shadow-[0_0_25px_rgba(34,211,238,0.3)] bg-slate-900">
              <img
                src="https://bio.supremamidia.com.br/imagens/gestor-de-trafego-organico-em-curitiba.png"
                alt="Omar Skafi Especialista em SEO e GEO"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display text-white">Omar Skafi</h2>
              <p className="text-xs text-cyan-400 font-bold mt-1">
                Especialista em SEO, GEO e Visibilidade Digital
              </p>
              <p className="text-xs text-slate-400 mt-2 flex items-center justify-center gap-1">
                <MapPin size={13} className="text-blue-400 shrink-0" />
                <span>Rebouças, Curitiba - PR</span>
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 space-y-2">
              <a
                href="https://bio.supremamidia.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-xl bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 font-bold text-xs hover:bg-yellow-400 hover:text-slate-950 transition-all"
              >
                <Globe size={14} />
                <span>Link da Bio Oficial</span>
                <ExternalLink size={12} />
              </a>

              <a
                href="https://wa.me/5541992721004"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-xl bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 font-bold text-xs hover:bg-emerald-600 hover:text-white transition-all"
              >
                <MessageCircle size={14} />
                <span>WhatsApp Direto (41) 99272-1004</span>
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-2">
              <Award size={16} />
              <span>Sinais de E-E-A-T e Credibilidade</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Sua Garantia de Expertise e Segurança Jurídica
            </h2>
          </div>

          <p>
            Com mais de 12 anos de experiência em otimização de mecanismos de busca e engenharia de software para a web, <strong className="text-white">Omar Skafi</strong> consolidou sua atuação unindo conhecimento técnico de código (React, Vite, Next, Schema.org, Core Web Vitals) com estratégia orgânica orientada a faturamento real.
          </p>

          <p>
            Sua operação é formalizada através da razão social <strong className="text-white">OSKAFI WEB SITES LTDA ME (CNPJ 15.083.543/0001-97)</strong>, também conhecida no mercado como <strong className="text-white">Suprema Sites Express</strong>. Isso assegura contrato formal, emissão de nota fiscal eletrônica e rigoroso alinhamento ético em todos os projetos.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs">
                <ShieldCheck size={16} />
                <span>Atuação 100% White Hat</span>
              </div>
              <p className="text-xs text-slate-400">
                Estratégias sustentáveis que respeitam integralmente as diretrizes oficiais de qualidade do Google.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-yellow-400 font-bold text-xs">
                <Briefcase size={16} />
                <span>Atendimento Presencial</span>
              </div>
              <p className="text-xs text-slate-400">
                Sede própria na Av. Sete de Setembro, 2775 - 9º andar no Rebouças em Curitiba.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pillars Section */}
      <section className="bg-[#0d0f16] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Pilares da Nossa Atuação
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            A filosofia que garante posições sustentáveis no topo dos motores de busca.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#11141e] border border-slate-800 space-y-3">
            <div className="p-2.5 w-fit rounded-xl bg-blue-950 text-blue-400 font-bold">
              01
            </div>
            <h3 className="text-base font-bold text-white">Engenharia e Código Limpo</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Otimização de velocidade, pré-renderização e eliminação de gargalos técnicos de infraestrutura.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#11141e] border border-slate-800 space-y-3">
            <div className="p-2.5 w-fit rounded-xl bg-cyan-950 text-cyan-400 font-bold">
              02
            </div>
            <h3 className="text-base font-bold text-white">Dados Estruturados e Semântica</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Marcações Schema.org avançadas em JSON-LD para que o Google e IAs compreendam sua empresa.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#11141e] border border-slate-800 space-y-3">
            <div className="p-2.5 w-fit rounded-xl bg-yellow-950 text-yellow-400 font-bold">
              03
            </div>
            <h3 className="text-base font-bold text-white">Foco em Vendas e ROI</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Posicionamento estratégico direcionado para termos de alta intenção comercial e geração de leads.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-blue-500/30 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
          Quer Agendar uma Reunião com Omar Skafi?
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
          Entre em contato direto pelo WhatsApp e solicite um diagnóstico da sua empresa.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5541992721004"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-emerald-wa btn-shimmer px-6 py-3.5 text-sm font-bold flex items-center gap-2"
          >
            <MessageCircle size={18} />
            <span>Falar no WhatsApp (41) 99272-1004</span>
          </a>
          <Link
            to="/contato"
            className="btn-primary-gold btn-shimmer px-6 py-3.5 text-sm font-bold flex items-center gap-2"
          >
            <span>Ver Informações de Contato</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
