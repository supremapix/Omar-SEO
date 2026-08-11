import React, { useState, useEffect } from 'react';
import {
  Building2,
  FileCode2,
  Search,
  MapPin,
  Bot,
  Sparkles,
  UserCheck,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export function HeroAnimation() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { name: 'Sua Empresa', icon: Building2, color: 'from-blue-500 to-indigo-600', glow: 'shadow-blue-500/50' },
    { name: 'Dados Estruturados', icon: FileCode2, color: 'from-cyan-500 to-blue-600', glow: 'shadow-cyan-500/50' },
    { name: 'Google Search', icon: Search, color: 'from-blue-600 to-sky-500', glow: 'shadow-sky-500/50' },
    { name: 'Google Maps', icon: MapPin, color: 'from-emerald-500 to-teal-600', glow: 'shadow-emerald-500/50' },
    { name: 'ChatGPT', icon: Bot, color: 'from-purple-500 to-violet-600', glow: 'shadow-purple-500/50' },
    { name: 'Gemini', icon: Sparkles, color: 'from-amber-500 to-yellow-500', glow: 'shadow-amber-500/50' },
    { name: 'Cliente Ideal', icon: UserCheck, color: 'from-emerald-400 to-green-500', glow: 'shadow-emerald-400/60' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1800);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-8">
      {/* Photo / Specialist Card */}
      <div className="lg:col-span-5 flex flex-col items-center">
        <div className="relative group w-full max-w-md">
          {/* Glowing Aura Background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-yellow-400 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-500 animate-pulse" />

          {/* Card Container */}
          <div className="relative bg-[#0d0f14] border border-slate-800 rounded-3xl p-6 shadow-2xl flex flex-col items-center text-center">
            {/* Image Placeholder with Professional Avatar Design */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-blue-500/40 shadow-2xl mb-4 bg-slate-900 flex items-center justify-center">
              <img
                src="https://bio.supremamidia.com.br/imagens/gestor-de-trafego-organico-em-curitiba.png"
                alt="Omar Skafi — Especialista em SEO e GEO em Curitiba"
                className="w-full h-full object-cover filter contrast-105"
                onError={(e) => {
                  // Fallback avatar if image fails
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-2">
                <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest bg-slate-950/80 px-3 py-1 rounded-full border border-blue-800/60">
                  Omar Skafi
                </span>
              </div>
            </div>

            <h3 className="text-xl font-bold font-display text-white">Omar Skafi</h3>
            <p className="text-xs text-blue-400 font-semibold mb-3">
              Especialista em SEO, GEO e Visibilidade Digital
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-medium text-slate-300 mb-4">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 flex items-center gap-1">
                <ShieldCheck size={12} className="text-blue-400" />
                12+ Anos
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 flex items-center gap-1">
                <Zap size={12} className="text-yellow-400" />
                Google & IAs
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                Curitiba - PR
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed italic border-t border-slate-800/80 pt-3">
              "Transformamos a arquitetura do seu site em uma linguagem clara para o Google, Maps e inteligências artificiais entenderem e recomendarem sua empresa."
            </p>
          </div>
        </div>
      </div>

      {/* Pipeline Network Diagram Animation */}
      <div className="lg:col-span-7 bg-[#0c0e13] border border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded border border-blue-800/60">
              Pipeline de Visibilidade
            </span>
            <h4 className="text-lg font-bold font-display text-white mt-1">
              Como Sua Empresa é Recomendada
            </h4>
          </div>
          <span className="text-xs text-slate-400 font-mono">Status: Ativo</span>
        </div>

        {/* Pipeline Nodes Flow */}
        <div className="space-y-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            const isPassed = activeStep > idx;

            return (
              <div
                key={step.name}
                className={`flex items-center justify-between p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? `bg-slate-900/90 border-blue-400 shadow-lg ${step.glow} translate-x-2`
                    : isPassed
                    ? 'bg-slate-950/80 border-slate-800 opacity-90'
                    : 'bg-slate-950/40 border-slate-900 opacity-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2.5 rounded-xl text-white bg-gradient-to-r ${step.color} shadow-md transition-transform ${
                      isActive ? 'scale-110' : ''
                    }`}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                      <span>{step.name}</span>
                      {isActive && (
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-blue-500 text-white animate-pulse">
                          PROCESSANDO...
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
                    Etapa 0{idx + 1}
                  </span>
                  <div
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      isActive ? 'bg-yellow-400 animate-ping' : isPassed ? 'bg-emerald-400' : 'bg-slate-800'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info of the pipeline */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Engenharia de Dados Conectada
          </span>
          <span className="text-blue-400 font-bold flex items-center gap-1">
            <span>Fluxo Automatizado</span>
            <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </div>
  );
}
