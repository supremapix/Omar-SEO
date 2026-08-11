import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Zap, ArrowRight, ShieldAlert } from 'lucide-react';
import { BackgroundVideo } from './BackgroundVideo';

export function DiagnosticSection() {
  const diagnosticItems = [
    { title: 'SEO Técnico', desc: 'Rastreabilidade, sitemaps e arquitetura limpa' },
    { title: 'SEO Semântico', desc: 'Entidades e vocabulário relevante para a intenção' },
    { title: 'SEO Local', desc: 'Geolocalização em bairros e cidades de Curitiba' },
    { title: 'Google Maps', desc: 'Otimização do Perfil da Empresa e Top 3 do mapa' },
    { title: 'Schema / Dados Estruturados', desc: 'JSON-LD para marcas, serviços e FAQs' },
    { title: 'GEO / IA', desc: 'Estruturação para respostas no ChatGPT e Gemini' },
    { title: 'Conteúdo de Conversão', desc: 'Textos focados na tomada de decisão do cliente' },
    { title: 'Performance Web', desc: 'Carregamento ultrarrápido com Core Web Vitals' },
    { title: 'Indexação Garantida', desc: 'URLs validadas sem erros no Google Search Console' },
    { title: 'Autoridade & E-E-A-T', desc: 'Construção de sinais de confiança para o algoritmo' },
  ];

  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => (prev < diagnosticItems.length ? prev + 1 : prev));
    }, 400);
    return () => clearInterval(interval);
  }, [diagnosticItems.length]);

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0f1219] to-[#0a0a0f]">
      <BackgroundVideo
        src="https://img.supremasite.com.br/omar-seo.mp4"
        opacity={0.35}
        overlayClassName="bg-gradient-to-b from-[#0a0a0f]/80 via-[#0f1219]/65 to-[#0a0a0f]/80"
      />
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-bold text-xs uppercase tracking-wider mb-4">
            <ShieldAlert size={14} />
            <span>Diagnóstico do Seu Posicionamento</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight leading-tight">
            Seu site existe. <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-yellow-400 bg-clip-text text-transparent">
              Mas o Google entende sua empresa?
            </span>
          </h2>

          <p className="mt-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            SEO não começa colocando palavras-chave aleatórias em uma página. Começa fazendo mecanismos de busca entenderem quem é sua empresa, o que ela oferece, onde atende e para quais pesquisas ela é relevante.
          </p>
        </div>

        {/* Animated Diagnostic Checklist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {diagnosticItems.map((item, idx) => {
            const isRevealed = idx < visibleCount;
            return (
              <div
                key={item.title}
                className={`p-4 rounded-2xl border transition-all duration-500 flex flex-col justify-between ${
                  isRevealed
                    ? 'bg-slate-900/80 border-blue-500/40 shadow-lg shadow-blue-950/50 opacity-100 scale-100'
                    : 'bg-slate-950/40 border-slate-800/40 opacity-30 scale-95'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-slate-400">0{idx + 1}</span>
                    <CheckCircle2
                      size={20}
                      className={`transition-colors duration-300 ${
                        isRevealed ? 'text-emerald-400 fill-emerald-950/80' : 'text-slate-800'
                      }`}
                    />
                  </div>
                  <h3 className="text-sm font-bold text-white font-display">{item.title}</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-snug">{item.desc}</p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px]">
                  <span className={isRevealed ? 'text-emerald-400 font-bold' : 'text-slate-400'}>
                    {isRevealed ? 'Validado ✓' : 'Aguardando'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-blue-950/80 via-slate-900 to-indigo-950/80 border border-blue-500/30 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-left max-w-xl">
            <h3 className="text-xl font-bold font-display text-white">
              Quer saber a nota de visibilidade da sua empresa hoje?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Fazemos um diagnóstico técnico e de Google Maps gratuito para identificar seus principais concorrentes em Curitiba.
            </p>
          </div>

          <Link
            to="/auditoria-seo"
            className="btn-primary-gold btn-shimmer shrink-0 px-5 py-3"
          >
            <Zap size={16} className="fill-slate-950" />
            <span>Diagnóstico Gratuito</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
