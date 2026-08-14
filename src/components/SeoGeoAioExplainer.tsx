import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Search,
  Sparkles,
  Bot,
  TrendingUp,
  BarChart3,
  Quote,
  Network,
  CheckCircle2,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  MessageCircle,
} from 'lucide-react';

interface SeoGeoAioExplainerProps {
  className?: string;
  variant?: 'light-saas' | 'dark-integrated';
  defaultAutoPlay?: boolean;
}

const SCENE_DURATION = 7500; // 7.5 seconds per scene (total ~30s)

export function SeoGeoAioExplainer({
  className = '',
  variant = 'light-saas',
  defaultAutoPlay = true,
}: SeoGeoAioExplainerProps) {
  const [activeScene, setActiveScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(defaultAutoPlay);
  const [progress, setProgress] = useState(0);
  const [marketShareCount, setMarketShareCount] = useState(0);
  const progressIntervalRef = useRef<number | null>(null);

  const totalScenes = 4;

  const nextScene = useCallback(() => {
    setActiveScene((prev) => (prev + 1) % totalScenes);
    setProgress(0);
  }, [totalScenes]);

  const prevScene = useCallback(() => {
    setActiveScene((prev) => (prev - 1 + totalScenes) % totalScenes);
    setProgress(0);
  }, [totalScenes]);

  const goToScene = (index: number) => {
    setActiveScene(index);
    setProgress(0);
  };

  // Timer & Progress bar loop
  useEffect(() => {
    if (!isPlaying) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const stepTime = 50; // update progress every 50ms
    const stepIncrement = (stepTime / SCENE_DURATION) * 100;

    progressIntervalRef.current = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextScene();
          return 0;
        }
        return prev + stepIncrement;
      });
    }, stepTime);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, nextScene]);

  // Animated counter for Scene 4 (0 to 37%)
  useEffect(() => {
    if (activeScene === 3) {
      setMarketShareCount(0);
      let count = 0;
      const counterInterval = setInterval(() => {
        count += 1;
        if (count > 37) {
          setMarketShareCount(37);
          clearInterval(counterInterval);
        } else {
          setMarketShareCount(count);
        }
      }, 35);

      return () => clearInterval(counterInterval);
    }
  }, [activeScene]);

  // Circumference for Donut Chart (Radius = 40 => 2 * PI * 40 ≈ 251.32)
  const donutRadius = 40;
  const donutCircumference = 2 * Math.PI * donutRadius;
  const donutOffset =
    activeScene === 3
      ? donutCircumference - (marketShareCount / 100) * donutCircumference
      : donutCircumference;

  return (
    <div
      id="seo-geo-aio-explainer"
      className={`relative w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-700/60 bg-[#0c0e14] transition-all duration-300 ${className}`}
    >
      {/* Outer Browser/Infographic Header Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#131620] border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="hidden sm:inline-block text-slate-400 font-mono text-[11px] ml-2">
            omarseo.digital/framework-motion-graphics
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 bg-blue-950/90 px-2.5 py-0.5 rounded-full border border-blue-800/80 flex items-center gap-1.5">
            <Zap size={11} className="text-yellow-400" />
            <span>Infográfico Interativo • 30s</span>
          </span>
          <span className="text-slate-400 text-xs font-semibold">
            Cena {activeScene + 1} de {totalScenes}
          </span>
        </div>
      </div>

      {/* Top Scene Progress Bar */}
      <div className="w-full bg-slate-800/60 h-1.5 relative overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-yellow-400 transition-all duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Main SaaS Infographic Body */}
      <div className="p-4 sm:p-8 lg:p-10 bg-[#F4F6FA] text-slate-900 min-h-[480px] sm:min-h-[500px] flex flex-col justify-between relative select-none">
        {/* Animated Scene Content */}
        <AnimatePresence mode="wait">
          {/* ========================================================================= */}
          {/* CENA 1: O PROBLEMA — A BUSCA MUDOU */}
          {/* ========================================================================= */}
          {activeScene === 0 && (
            <motion.div
              key="scene-1"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="space-y-6 flex-1 flex flex-col justify-center"
            >
              {/* Header */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#DBEAFE] text-[#2563EB] font-extrabold text-[11px] tracking-widest uppercase">
                  COMO GANHAR MERCADO
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-display">
                  Seu cliente busca em 3 lugares diferentes
                </h3>
                <p className="text-[#64748B] text-sm sm:text-base font-medium max-w-2xl">
                  Quem aparece só no Google já não captura toda a demanda gerada diariamente.
                </p>
              </div>

              {/* 3 Interactive Discovery Hubs */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                {/* Hub 1: Google */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.35 }}
                  className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-md hover:shadow-lg transition-all flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-bl-full -z-0" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Search size={24} strokeWidth={2.2} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      Canal 01
                    </span>
                    <h4 className="text-lg font-bold text-[#0F172A] mt-1">Google Tradicional</h4>
                    <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                      Busca orgânica por palavras-chave com alta intenção de contratação imediata.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                    <span>Mecanismo</span>
                    <span className="font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      Google / SERP
                    </span>
                  </div>
                </motion.div>

                {/* Hub 2: Generative IAs */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.35 }}
                  className="bg-white rounded-2xl p-5 border-2 border-blue-200 shadow-md hover:shadow-lg transition-all flex flex-col justify-between group relative overflow-hidden ring-2 ring-blue-500/10"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100/50 rounded-bl-full -z-0" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[#2563EB] text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md shadow-blue-500/30">
                      <Sparkles size={24} strokeWidth={2.2} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      Canal 02 • Crescimento Rápido
                    </span>
                    <h4 className="text-lg font-bold text-[#0F172A] mt-1">IAs Generativas</h4>
                    <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                      ChatGPT, Gemini, Perplexity e Claude recomendando marcas por síntese semântica.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                    <span>Assistentes</span>
                    <span className="font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      LLMs / Chat
                    </span>
                  </div>
                </motion.div>

                {/* Hub 3: AI Overviews & Assistants */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.35 }}
                  className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-md hover:shadow-lg transition-all flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-bl-full -z-0" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Bot size={24} strokeWidth={2.2} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      Canal 03
                    </span>
                    <h4 className="text-lg font-bold text-[#0F172A] mt-1">Respostas por IA</h4>
                    <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                      Google AI Overviews e assistentes contextuais resumindo e citando autoridades.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                    <span>Visibilidade</span>
                    <span className="font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      AI Overviews
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Banner Callout */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-white/90 border border-blue-200 rounded-xl p-3.5 flex items-center justify-between text-xs text-[#0F172A]"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                  <span className="font-bold">Diagnóstico Atual:</span>
                  <span className="text-slate-600 hidden sm:inline">
                    Empresas que ignoram IAs perdem até 40% das consultas consultivas do funil.
                  </span>
                </div>
                <span className="font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded text-[11px]">
                  Multi-Channel Discovery
                </span>
              </motion.div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* CENA 2: PILAR 1 — SEO: A BASE */}
          {/* ========================================================================= */}
          {activeScene === 1 && (
            <motion.div
              key="scene-2"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="space-y-6 flex-1 flex flex-col justify-center"
            >
              {/* Header */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#DBEAFE] text-[#2563EB] font-extrabold text-[11px] tracking-widest uppercase">
                  PILAR 1 — SEO
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-display">
                  SEO: domine a busca tradicional
                </h3>
                <p className="text-[#64748B] text-sm sm:text-base font-medium max-w-2xl">
                  Capture a demanda qualificada com palavras-chave comerciais e arquitetura sólida.
                </p>
              </div>

              {/* Graphic + 3 Bullet Points */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-1">
                {/* Left Card: Growing Bar Chart */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.15, duration: 0.35 }}
                  className="lg:col-span-5 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-md space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-lg bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center">
                        <Search size={18} strokeWidth={2.5} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0F172A]">Crescimento Orgânico</h4>
                        <p className="text-[11px] text-[#64748B]">Volume de busca indexado</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      +184% YoY
                    </span>
                  </div>

                  {/* Animated Bar Chart */}
                  <div className="h-36 bg-slate-50 rounded-xl p-3 flex items-end justify-between gap-3 border border-slate-100">
                    {[
                      { month: 'Mês 1', height: '35%', val: '3.2k', active: false },
                      { month: 'Mês 2', height: '52%', val: '5.8k', active: false },
                      { month: 'Mês 3', height: '78%', val: '9.4k', active: false },
                      { month: 'Mês 4', height: '100%', val: '14.1k', active: true },
                    ].map((bar, idx) => (
                      <div key={bar.month} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                        <span className="text-[10px] font-bold font-mono text-slate-500">
                          {bar.val}
                        </span>
                        <motion.div
                          initial={{ height: '0%' }}
                          animate={{ height: bar.height }}
                          transition={{ delay: 0.2 + idx * 0.15, duration: 0.6, ease: 'backOut' }}
                          className={`w-full rounded-t-lg transition-colors ${
                            bar.active
                              ? 'bg-gradient-to-t from-[#2563EB] to-cyan-500 shadow-md shadow-blue-500/20'
                              : 'bg-blue-300 hover:bg-blue-400'
                          }`}
                        />
                        <span className="text-[10px] font-medium text-slate-500">{bar.month}</span>
                      </div>
                    ))}
                  </div>

                  {/* Keyword Chips */}
                  <div className="pt-1">
                    <span className="text-[11px] font-bold text-slate-500 block mb-2">
                      Exemplos de termos de alta conversão:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-semibold">
                        consultoria seo curitiba
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-semibold">
                        especialista em seo
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-semibold">
                        auditoria seo tecnica
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Right: 3 Cascading Bullet Points */}
                <div className="lg:col-span-7 space-y-3">
                  {[
                    {
                      title: 'Demanda existente: volume e tendência',
                      desc: 'Mapeamento das pesquisas ativas que o seu cliente ideal já realiza todos os dias no Google.',
                      delay: 0.2,
                    },
                    {
                      title: 'Intenção comercial: alta propensão de conversão',
                      desc: 'Foco em palavras-chave que trazem orçamentos reais e contratos fechados, e não apenas tráfego vaidoso.',
                      delay: 0.35,
                    },
                    {
                      title: 'Oportunidades: gaps, baixa cobertura e quick wins',
                      desc: 'Identificação de brechas deixadas pelos concorrentes em Curitiba para conquistar as primeiras posições.',
                      delay: 0.5,
                    },
                  ].map((bullet, idx) => (
                    <motion.div
                      key={bullet.title}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: bullet.delay, duration: 0.35 }}
                      className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex items-start gap-3.5 hover:border-blue-300 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        0{idx + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0F172A]">{bullet.title}</h4>
                        <p className="text-xs text-[#64748B] mt-1 leading-relaxed">{bullet.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* CENA 3: PILARES 2 & 3 — GEO + AIO: A NOVA FRONTEIRA */}
          {/* ========================================================================= */}
          {activeScene === 2 && (
            <motion.div
              key="scene-3"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="space-y-6 flex-1 flex flex-col justify-center"
            >
              {/* Header */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#DBEAFE] text-[#2563EB] font-extrabold text-[11px] tracking-widest uppercase">
                  PILARES 2 e 3 — GEO + AIO
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-display">
                  Seja a resposta que a IA recomenda
                </h3>
                <p className="text-[#64748B] text-sm sm:text-base font-medium max-w-2xl">
                  Prepare o ecossistema digital da sua marca para ser referenciado pelas IAs.
                </p>
              </div>

              {/* 2 Connected Cards */}
              <div className="relative pt-2">
                {/* SVG Animated Connector between cards (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                  <div className="bg-white p-2 rounded-full border border-blue-300 shadow-lg text-blue-600 flex items-center justify-center animate-pulse">
                    <Zap size={18} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Card 1: GEO */}
                  <motion.div
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.35 }}
                    className="bg-white rounded-2xl p-6 border-2 border-blue-200 shadow-md relative overflow-hidden"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center mb-4">
                      <Quote size={24} strokeWidth={2.2} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      Pilar 02
                    </span>
                    <h4 className="text-xl font-bold text-[#0F172A] mt-1">
                      GEO — Generative Engine Optimization
                    </h4>
                    <p className="text-sm text-[#64748B] mt-3 leading-relaxed">
                      Conteúdo e dados estruturados para sua empresa ser citada diretamente por ChatGPT, Gemini e Perplexity quando buscarem pelos seus serviços.
                    </p>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-600">
                      <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded">
                        Citação de Marca
                      </span>
                      <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded">
                        Fontes Primárias
                      </span>
                      <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded">
                        Perplexity Sources
                      </span>
                    </div>
                  </motion.div>

                  {/* Card 2: AIO */}
                  <motion.div
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35, duration: 0.35 }}
                    className="bg-white rounded-2xl p-6 border-2 border-blue-200 shadow-md relative overflow-hidden"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#2563EB] text-white flex items-center justify-center mb-4 shadow-md shadow-blue-500/30">
                      <Network size={24} strokeWidth={2.2} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      Pilar 03
                    </span>
                    <h4 className="text-xl font-bold text-[#0F172A] mt-1">
                      AIO — AI Optimization
                    </h4>
                    <p className="text-sm text-[#64748B] mt-3 leading-relaxed">
                      Dados em JSON-LD, arquitetura semântica Schema.org e autoridade de domínio para que os sistemas de IA compreendam e confiem na sua entidade legal.
                    </p>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-600">
                      <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded">
                        Schema.org JSON-LD
                      </span>
                      <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded">
                        Entidade Verificada
                      </span>
                      <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded">
                        E-E-A-T Sinais
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Bottom Quote Banner */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-4 shadow-md flex items-center justify-between flex-wrap gap-2"
              >
                <div className="flex items-center gap-2.5">
                  <Sparkles size={18} className="text-yellow-300" />
                  <span className="font-extrabold text-sm sm:text-base tracking-tight">
                    "Quem a IA cita, vende primeiro."
                  </span>
                </div>
                <span className="text-xs bg-white/20 px-3 py-1 rounded-full font-bold">
                  Vantagem Competitiva 2026
                </span>
              </motion.div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* CENA 4: O RESULTADO — MARKET SHARE COM PREVISIBILIDADE */}
          {/* ========================================================================= */}
          {activeScene === 3 && (
            <motion.div
              key="scene-4"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="space-y-6 flex-1 flex flex-col justify-center"
            >
              {/* Header */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#DBEAFE] text-[#2563EB] font-extrabold text-[11px] tracking-widest uppercase">
                  RESULTADO CONSOLIDADO
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-display">
                  Market share orgânico crescendo em todos os canais
                </h3>
                <p className="text-[#64748B] text-sm sm:text-base font-medium max-w-2xl">
                  Construção de um ativo próprio com previsibilidade, escala e conversões recorrentes.
                </p>
              </div>

              {/* Graphic (Donut) + 3 Outcomes */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-1">
                {/* Left Card: Animated SVG Donut Chart */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.15, duration: 0.35 }}
                  className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md flex flex-col items-center text-center space-y-4"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Projeção de Participação
                  </span>

                  {/* SVG Donut */}
                  <div className="relative w-36 h-36 flex items-center justify-center my-2">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      {/* Background track circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r={donutRadius}
                        stroke="#E2E8F0"
                        strokeWidth="12"
                        fill="transparent"
                      />
                      {/* Animated foreground stroke */}
                      <circle
                        cx="50"
                        cy="50"
                        r={donutRadius}
                        stroke="#2563EB"
                        strokeWidth="12"
                        fill="transparent"
                        strokeDasharray={donutCircumference}
                        strokeDashoffset={donutOffset}
                        strokeLinecap="round"
                        className="transition-all duration-75 ease-linear"
                      />
                    </svg>

                    {/* Donut Center Counter */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-black font-display text-[#0F172A]">
                        {marketShareCount}%
                      </span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                        Orgânico
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Média de crescimento de market share orgânico de clientes nos primeiros 6 meses de acompanhamento.
                  </p>
                </motion.div>

                {/* Right: 3 Value Props & Seals */}
                <div className="lg:col-span-7 space-y-3">
                  {[
                    {
                      title: 'Visibilidade Total',
                      desc: 'Presença garantida no Google Maps, nas primeiras posições orgânicas e nas respostas das IAs.',
                      delay: 0.2,
                    },
                    {
                      title: 'Tráfego Altamente Qualificado',
                      desc: 'Atração diária de potenciais clientes com intenção clara de compra e contratação de serviços.',
                      delay: 0.35,
                    },
                    {
                      title: 'Leads e Receita Previsível',
                      desc: 'Geração contínua de contatos sem a dependência exclusiva de gastar mais em anúncios pagos.',
                      delay: 0.5,
                    },
                  ].map((item) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: item.delay, duration: 0.35 }}
                      className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex items-start gap-3 hover:border-blue-300 transition-colors"
                    >
                      <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                        <CheckCircle2 size={18} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0F172A]">{item.title}</h4>
                        <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}

                  {/* 3 Seal Pills & CTA Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold">
                        ✓ Previsibilidade
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold">
                        ✓ Escala
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold">
                        ✓ Sem dependência de Ads
                      </span>
                    </div>

                    <a
                      href="https://wa.me/5541992721004"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
                    >
                      <MessageCircle size={15} />
                      <span>Fale com Omar Skafi</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Interactive Controls Bar */}
        <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between flex-wrap gap-4">
          {/* Navigation Dots */}
          <div className="flex items-center gap-2">
            {[0, 1, 2, 3].map((idx) => {
              const labels = ['1. A Busca Mudou', '2. SEO Base', '3. GEO + AIO', '4. Resultado'];
              const isActive = activeScene === idx;
              return (
                <button
                  key={idx}
                  onClick={() => goToScene(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                    isActive
                      ? 'w-8 bg-[#2563EB] ring-2 ring-blue-400/40'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  title={labels[idx]}
                  aria-label={labels[idx]}
                />
              );
            })}
          </div>

          {/* Controls: Play/Pause, Prev, Next */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevScene}
              className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-[#2563EB] hover:border-blue-300 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Cena Anterior"
              title="Cena Anterior"
            >
              <ChevronLeft size={16} />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3 h-8 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#2563EB] hover:border-blue-300 flex items-center gap-1.5 text-xs font-bold transition-colors shadow-sm"
              aria-label={isPlaying ? 'Pausar Animação' : 'Reproduzir Animação'}
            >
              {isPlaying ? (
                <>
                  <Pause size={14} className="text-blue-600" />
                  <span className="hidden sm:inline">Pausar</span>
                </>
              ) : (
                <>
                  <Play size={14} className="text-blue-600" />
                  <span className="hidden sm:inline">Continuar</span>
                </>
              )}
            </button>

            <button
              onClick={nextScene}
              className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-[#2563EB] hover:border-blue-300 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Próxima Cena"
              title="Próxima Cena"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
