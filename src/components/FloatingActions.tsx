import React, { useState, useEffect } from 'react';
import {
  Share2,
  X,
  Copy,
  Check,
  Phone,
  MessageCircle,
  ArrowUp,
  MessageSquare,
} from 'lucide-react';

export function FloatingActions() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://omarseo.digital';
  const currentTitle = typeof document !== 'undefined' ? document.title : 'Omar SEO | Especialista em SEO em Curitiba';

  const shareText = `Estou indicando o melhor Especialista em SEO de Curitiba — Omar SEO: ${currentTitle} (${currentUrl})`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareLinks = [
    {
      name: 'WhatsApp',
      color: 'bg-emerald-600 hover:bg-emerald-500',
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`,
    },
    {
      name: 'Facebook',
      color: 'bg-blue-600 hover:bg-blue-500',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    },
    {
      name: 'X (Twitter)',
      color: 'bg-slate-800 hover:bg-slate-700',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`,
    },
    {
      name: 'Pinterest',
      color: 'bg-red-600 hover:bg-red-500',
      url: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}&media=${encodeURIComponent('https://omarseo.digital/og-default.jpg')}&description=${encodeURIComponent(currentTitle)}`,
    },
    {
      name: 'LinkedIn',
      color: 'bg-sky-700 hover:bg-sky-600',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
    },
    {
      name: 'Threads',
      color: 'bg-zinc-800 hover:bg-zinc-700',
      url: `https://www.threads.net/intent/post?text=${encodeURIComponent(shareText)}`,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* BOTTOM LEFT: Share Floating Button */}
      <div className="fixed bottom-3 left-3 sm:bottom-5 sm:left-5 z-40">
        <button
          onClick={() => setIsShareModalOpen(true)}
          className="relative group flex items-center gap-1.5 px-2.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-[#0d0f17]/90 text-blue-400 border border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:border-blue-400 hover:bg-blue-950/90 hover:text-white transition-all transform hover:scale-105 cursor-pointer backdrop-blur-md"
          title="Compartilhar esta página"
        >
          <Share2 size={15} className="animate-pulse text-blue-400 group-hover:text-white" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-200 group-hover:text-white">
            Indicar
          </span>
        </button>
      </div>

      {/* SHARE MODAL OVERLAY */}
      {isShareModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-[#111318] border border-blue-500/40 rounded-2xl max-w-md w-full p-6 shadow-[0_0_40px_rgba(59,130,246,0.25)] relative">
            {/* Close Button */}
            <button
              onClick={() => setIsShareModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-blue-950 text-blue-400 border border-blue-800 shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                <Share2 size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-white">Compartilhar Página</h3>
                <p className="text-xs text-slate-400">Recomende este conteúdo especializado</p>
              </div>
            </div>

            {/* Social Buttons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 my-5">
              {shareLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 p-2.5 sm:p-3 rounded-xl text-white font-bold text-xs transition-all ${item.color} shadow-md hover:scale-105`}
                >
                  <span>{item.name}</span>
                </a>
              ))}
            </div>

            {/* Copy Link Action */}
            <div className="pt-3 border-t border-slate-800">
              <button
                onClick={handleCopyLink}
                className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  copied
                    ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                    : 'bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                {copied ? (
                  <>
                    <Check size={16} />
                    <span>Link Copiado com Sucesso!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copiar Link e Recomendação</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BOTTOM RIGHT: Contact Actions & Scroll to Top */}
      <div className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-40 flex flex-col gap-2.5 items-end">
        {/* Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="p-2 sm:p-2.5 rounded-full bg-[#0d0f17]/90 text-slate-300 border border-blue-500/30 hover:bg-blue-600 hover:text-white hover:border-blue-400 transition-all shadow-[0_0_12px_rgba(59,130,246,0.3)] backdrop-blur-md transform hover:scale-110 cursor-pointer animate-in fade-in duration-200"
            title="Voltar ao Topo"
          >
            <ArrowUp size={16} />
          </button>
        )}

        {/* Ligar Agora Button */}
        <a
          href="tel:+5541987001004"
          className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] transition-all hover:scale-105"
        >
          <Phone size={14} className="animate-bounce" />
          <span>Ligar (41) 98700-1004</span>
        </a>

        {/* WhatsApp Main Floating Action - Ultra Compact on Mobile */}
        <a
          href="https://wa.me/5541987001004"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 text-white font-black text-[11px] sm:text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:shadow-[0_0_25px_rgba(16,185,129,0.7)] transition-all transform hover:scale-105 border border-emerald-400/40"
        >
          {/* Pulsing Green Indicator */}
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-200"></span>
          </span>

          <MessageSquare size={15} className="animate-pulse text-white shrink-0" />
          <span className="font-extrabold tracking-tight whitespace-nowrap">WhatsApp</span>
        </a>
      </div>
    </>
  );
}
