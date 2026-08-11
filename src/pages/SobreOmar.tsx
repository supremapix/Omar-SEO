import React from 'react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import ConstellationGrid from '../components/ui/constellation-grid';
import { BackgroundVideo } from '../components/BackgroundVideo';
import { User, ShieldCheck, MapPin, Building, Globe, ExternalLink, Zap, CheckCircle2 } from 'lucide-react';

export default function SobreOmar() {
  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <EnhancedSEO
        title="Sobre Omar Skafi - Especialista em SEO e GEO | Omar SEO"
        description="Conheça Omar Skafi, especialista com sólida trajetória em SEO técnico, SEO local, Google Maps e GEO em Curitiba/PR."
        canonical="/omar-skafi"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Sobre Omar Skafi', item: '/omar-skafi' },
        ]}
      />

      {/* Header */}
      <div className="relative p-8 sm:p-12 rounded-3xl bg-slate-950/80 border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.15)] overflow-hidden">
        <BackgroundVideo
          src="https://img.supremasite.com.br/seo-omar.mp4"
          opacity={0.40}
          overlayClassName="bg-gradient-to-b from-[#0a0a0f]/70 via-[#0a0a0f]/50 to-[#0a0a0f]/80"
        />
        <ConstellationGrid className="absolute inset-0 z-0 opacity-40 pointer-events-none" />
        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800 text-blue-300 font-bold text-xs uppercase tracking-wider">
            <User size={14} />
            <span>Trajetória & Autoridade</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            Omar Skafi — Engenharia de Visibilidade Digital
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Especialista técnico em SEO, SEO Local, Google Maps e estruturação de dados Schema.org para posicionar empresas nos maiores ecossistemas de busca da web.
          </p>
        </div>
      </div>

      {/* Bio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl text-center space-y-4 w-full">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500/40 mx-auto shadow-xl bg-slate-900">
              <img
                src="https://bio.supremamidia.com.br/imagens/gestor-de-trafego-organico-em-curitiba.png"
                alt="Omar Skafi Especialista SEO"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-display text-white">Omar Skafi</h2>
              <p className="text-xs text-blue-400 font-semibold mt-1">
                Especialista em SEO, GEO e Visibilidade Digital
              </p>
              <p className="text-xs text-slate-400 mt-2 flex items-center justify-center gap-1">
                <MapPin size={12} className="text-blue-400" />
                <span>Batel / Rebouças, Curitiba - PR</span>
              </p>
            </div>

            <div className="pt-4 border-t border-slate-900">
              <a
                href="https://bio.supremamidia.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 font-bold text-xs hover:bg-yellow-400 hover:text-slate-950 transition-all"
              >
                <Globe size={14} />
                <span>Acessar Link da Bio Oficial</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          <h2 className="text-2xl font-bold font-display text-white">
            Atuação Técnica e Estrutura Empresarial
          </h2>

          <p>
            Omar Skafi construiu sua carreira com base em testes práticos, acompanhando a evolução dos algoritmos do Google desde a era do PageRank até as recentes atualizações baseadas em inteligência artificial e modelos neurais de linguagem.
          </p>

          <p>
            Sua atuação é respaldada pela <strong className="text-white">OSKAFI WEB SITES LTDA ME (Suprema Sites Express)</strong>, razão social legalmente constituída em Curitiba/PR (CNPJ 15.083.543/0001-97), o que garante total segurança jurídica, emissão de nota fiscal e profissionalismo em todos os contratos.
          </p>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Building size={18} className="text-blue-400" />
              <span>Infraestrutura da Sede</span>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Atendimento presencial com hora marcada na Av. Sete de Setembro, 2775 - 9º andar (acesso pelo elevador azul ou vermelho), entre o Batel e Rebouças, em Curitiba.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
