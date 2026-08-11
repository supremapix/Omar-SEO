import React from 'react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { BackgroundVideo } from '../components/BackgroundVideo';
import { Home, ArrowLeft, Search } from 'lucide-react';

export function NotFoundView() {
  return (
    <div className="pt-32 pb-20 px-4 max-w-xl mx-auto text-center space-y-6 relative overflow-hidden">
      <BackgroundVideo
        src="https://img.supremasite.com.br/seo-omar.mp4"
        opacity={0.35}
        overlayClassName="bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/65 to-[#0a0a0f]/85"
      />
      <div className="relative z-10 space-y-6">
      <EnhancedSEO
        title="Página Não Encontrada (404) | Omar SEO"
        description="A página que você procura não foi encontrada. Volte para a página inicial da Omar SEO."
        canonical="/404"
      />

      <div className="p-4 rounded-full bg-blue-950/50 border border-blue-800 text-blue-400 inline-block">
        <Search size={40} />
      </div>

      <h1 className="text-4xl font-black font-display text-white">404 — Página Não Encontrada</h1>

      <p className="text-slate-300 text-sm leading-relaxed">
        O endereço digitado não existe ou foi atualizado em nossa estrutura. Navegue para uma das áreas principais abaixo:
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
        <Link
          to="/"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider"
        >
          <Home size={16} />
          <span>Ir para a Home</span>
        </Link>

        <Link
          to="/seo-local"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider"
        >
          <ArrowLeft size={16} />
          <span>Ver SEO Local</span>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default function NotFound() {
  return <NotFoundView />;
}
