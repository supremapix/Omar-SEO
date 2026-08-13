import React from 'react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import ConstellationGrid from '../components/ui/constellation-grid';
import { BackgroundVideo } from '../components/BackgroundVideo';
import {
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Workflow,
  Sparkles,
} from 'lucide-react';

export default function Metodo() {
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Metodologia', item: '/metodo' },
  ];

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <EnhancedSEO
        title="Metodologia Omar SEO 4D | Framework Autoral de Visibilidade Digital"
        description="Conheça o Framework Omar SEO 4D: Engenharia de Código, Semântica HTML/Schema, Autoridade de Domínio e Otimização para IA (GEO). Método autoral em Curitiba."
        canonical="/metodo"
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Header */}
      <section className="relative p-8 sm:p-12 lg:p-16 rounded-3xl bg-slate-950/80 border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.15)] overflow-hidden">
        <BackgroundVideo
          src="https://img.supremasite.com.br/seo-omar.mp4"
          opacity={0.40}
          overlayClassName="bg-gradient-to-b from-[#0a0a0f]/75 via-[#0a0a0f]/55 to-[#0a0a0f]/85"
        />
        <ConstellationGrid className="absolute inset-0 z-0 opacity-40 pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-950/90 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(34,211,238,0.3)] inline-flex items-center gap-2">
            <Sparkles size={14} className="text-cyan-400" />
            <span>Framework Autoral Exclusivo</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            Metodologia Omar SEO 4D
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Uma abordagem de engenharia em 4 dimensões que integra velocidade de código, semântica avançada, autoridade de mercado e preparação para Inteligência Artificial.
          </p>
        </div>
      </section>

      {/* 4 Pillars Grid */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Os 4 Pilares do Framework Omar SEO 4D
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Cada pilar desempenha um papel crítico no fortalecimento e ranqueamento do domínio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pillar 1 */}
          <div className="bg-[#0f1118] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 hover:border-blue-500/40 transition-all">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-blue-950 text-blue-400 border border-blue-800">
                <Code2 size={24} />
              </div>
              <span className="text-2xl font-black font-display text-blue-500/40">1D</span>
            </div>

            <h3 className="text-xl font-bold font-display text-white">
              Engenharia de Código & Performance
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Otimização profunda de infraestrutura e velocidade de carregamento. Zeramos falhas de Core Web Vitals (LCP, INP, CLS) e aplicamos pré-renderização estática para SPAs (React/Vite), garantindo que os crawlers recebam HTML limpo e instantâneo.
            </p>

            <ul className="space-y-2 pt-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                <span>Otimização de LCP, INP e CLS sem comprometer visual</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                <span>Pré-renderização de páginas em React e aplicações SPA</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#0f1118] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 hover:border-cyan-500/40 transition-all">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-cyan-950 text-cyan-400 border border-cyan-800">
                <Layers size={24} />
              </div>
              <span className="text-2xl font-black font-display text-cyan-500/40">2D</span>
            </div>

            <h3 className="text-xl font-bold font-display text-white">
              Arquitetura Semântica & Schema.org
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Estruturação rigorosa da gramática HTML5 e injeção de dados estruturados JSON-LD validados no Schema.org. Mapeamos entidades do seu negócio para que os motores de busca compreendam perfeitamente a hierarquia de serviços da empresa.
            </p>

            <ul className="space-y-2 pt-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                <span>Marcações JSON-LD de LocalBusiness, Service e Organization</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                <span>Canonicals absolutos e tags semânticas HTML5 puras</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#0f1118] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 hover:border-yellow-500/40 transition-all">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-yellow-950 text-yellow-400 border border-yellow-800">
                <ShieldCheck size={24} />
              </div>
              <span className="text-2xl font-black font-display text-yellow-500/40">3D</span>
            </div>

            <h3 className="text-xl font-bold font-display text-white">
              Autoridade de Mercado & Digital PR
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Desenvolvimento de ativos linkáveis, pesquisas proprietárias e relacionamento com imprensa e portais de referência. Fortalecemos o perfil de backlinks do seu domínio sem práticas nocivas de spam.
            </p>

            <ul className="space-y-2 pt-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-yellow-400 shrink-0" />
                <span>Backlinks contextuais em portais de alta reputação</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-yellow-400 shrink-0" />
                <span>Sinais de E-E-A-T e fortalecimento da entidade do autor</span>
              </li>
            </ul>
          </div>

          {/* Pillar 4 */}
          <div className="bg-[#0f1118] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 hover:border-emerald-500/40 transition-all">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-emerald-950 text-emerald-400 border border-emerald-800">
                <Cpu size={24} />
              </div>
              <span className="text-2xl font-black font-display text-emerald-500/40">4D</span>
            </div>

            <h3 className="text-xl font-bold font-display text-white">
              Generative Engine Optimization (GEO)
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Preparação de dados e arquivos de síntese (llms.txt) para leitura por robôs de Inteligência Artificial (ChatGPT, Gemini, Perplexity, Claude). Garantimos que sua empresa seja citada e recomendada nas respostas geradas por IA.
            </p>

            <ul className="space-y-2 pt-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>Arquivos llms.txt e llms-full.txt atualizados</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>Citação em resumos sintetizados do Google AI Overviews</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="bg-[#0d0f16] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-300 text-xs font-bold uppercase tracking-widest">
            <Workflow size={14} />
            <span>Fluxo de Execução</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Como Aplicamos o Framework no Seu Projeto
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-[#11141e] border border-slate-800 space-y-2">
            <div className="text-blue-400 font-bold text-xs uppercase">Passo 01</div>
            <h3 className="text-sm font-bold text-white">Diagnóstico 4D</h3>
            <p className="text-xs text-slate-400">Auditoria completa de código, backlinks e inteligência de mercado.</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#11141e] border border-slate-800 space-y-2">
            <div className="text-cyan-400 font-bold text-xs uppercase">Passo 02</div>
            <h3 className="text-sm font-bold text-white">Refatoração Técnica</h3>
            <p className="text-xs text-slate-400">Correção imediata de gargalos de velocidade, Schema e pré-renderização.</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#11141e] border border-slate-800 space-y-2">
            <div className="text-yellow-400 font-bold text-xs uppercase">Passo 03</div>
            <h3 className="text-sm font-bold text-white">Construção de Ativos</h3>
            <p className="text-xs text-slate-400">Desenvolvimento de páginas de serviços, conteúdo semântico e Digital PR.</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#11141e] border border-slate-800 space-y-2">
            <div className="text-emerald-400 font-bold text-xs uppercase">Passo 04</div>
            <h3 className="text-sm font-bold text-white">Expansão de GEO</h3>
            <p className="text-xs text-slate-400">Conexão com assistentes de IA e consolidação no topo das pesquisas.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-blue-500/30 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
          Quer Implementar o Framework Omar SEO 4D na Sua Empresa?
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
          Solicite um diagnóstico completo e receba o plano de ação personalizado para o seu negócio.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5541992721004"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-emerald-wa btn-shimmer px-6 py-3.5 text-sm font-bold flex items-center gap-2"
          >
            <MessageCircle size={18} />
            <span>Falar com Omar Skafi no WhatsApp</span>
          </a>
          <Link
            to="/auditoria-seo"
            className="btn-primary-gold btn-shimmer px-6 py-3.5 text-sm font-bold flex items-center gap-2"
          >
            <Zap size={18} className="fill-slate-950" />
            <span>Solicitar Análise Gratuita</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
