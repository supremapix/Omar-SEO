import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  MessageCircle,
  MapPin,
  Search,
  Map,
  Cpu,
  Code,
  FileSearch,
  Award,
  User,
  Zap,
} from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  const services = [
    { name: 'SEO Completo', href: '/seo', icon: Search, desc: 'Estratégia completa de visibilidade' },
    { name: 'SEO Local', href: '/seo-local', icon: MapPin, desc: 'Atração por bairros e cidades' },
    { name: 'Google Maps', href: '/google-maps', icon: Map, desc: 'Otimização do Perfil da Empresa' },
    { name: 'GEO para IA', href: '/geo-ia', icon: Cpu, desc: 'Presença em ChatGPT, Gemini e Claude' },
    { name: 'SEO Técnico', href: '/seo-tecnico', icon: Code, desc: 'Schema.org, performance e indexação' },
    { name: 'Auditoria SEO', href: '/auditoria-seo', icon: FileSearch, desc: 'Diagnóstico profundo de gargalos' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-blue-500/20 py-2.5 sm:py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-[#0a0a0f]/90 via-[#0a0a0f]/60 to-transparent py-3 sm:py-5'
      }`}
    >
      {/* Top Neon Light Line Sweep */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - Responsive for small/square displays */}
        <Link to="/" className="flex flex-col group min-w-0 shrink">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-xl sm:text-2xl lg:text-3xl font-black font-display tracking-tight text-white group-hover:text-blue-400 transition-colors drop-shadow-[0_0_12px_rgba(59,130,246,0.3)]">
              OMAR <span className="text-blue-500">SEO</span>
            </span>
            <span className="px-1.5 py-0.5 text-[9px] sm:text-[10px] uppercase tracking-widest font-bold bg-blue-950/90 text-cyan-300 border border-cyan-500/40 rounded shadow-[0_0_10px_rgba(34,211,238,0.3)] shrink-0">
              GEO & AI
            </span>
          </div>
          <span className="hidden sm:block text-[10px] sm:text-xs text-slate-400 font-medium tracking-wide truncate">
            Omar Skafi — Especialista em SEO, GEO e Visibilidade Digital
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-white py-2 transition-colors cursor-pointer"
              aria-expanded={isServicesOpen}
            >
              <span>Serviços</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-blue-400' : ''}`}
              />
            </button>

            {/* Dropdown Menu */}
            {isServicesOpen && (
              <div className="absolute top-full left-0 w-80 pt-2 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="bg-[#111318]/95 border border-blue-500/30 rounded-2xl p-3 shadow-[0_0_30px_rgba(59,130,246,0.25)] backdrop-blur-2xl">
                  {services.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition-all group border border-transparent hover:border-blue-500/30"
                      >
                        <div className="p-2 rounded-lg bg-blue-950/80 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                          <Icon size={18} />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-200 group-hover:text-white">
                            {item.name}
                          </div>
                          <div className="text-xs text-slate-400">{item.desc}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/resultados"
            className="text-sm font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Award size={16} className="text-yellow-400" />
            <span>Resultados</span>
          </Link>

          <Link
            to="/omar-skafi"
            className="text-sm font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <User size={16} className="text-cyan-400" />
            <span>Sobre Omar</span>
          </Link>

          <Link
            to="/contato"
            className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
          >
            Contato
          </Link>
        </nav>

        {/* CTA & Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/5541992721004"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-700/60 hover:bg-emerald-600 hover:text-white transition-all hover:scale-105 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            title="WhatsApp Direto Omar Skafi"
          >
            <MessageCircle size={18} />
          </a>

          <Link
            to="/auditoria-seo"
            className="btn-primary-gold btn-shimmer px-4 py-2"
          >
            <Zap size={14} className="fill-slate-950" />
            <span>Auditar Empresa</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-slate-900/90 border border-blue-500/30 text-slate-200 hover:text-white cursor-pointer shadow-[0_0_15px_rgba(59,130,246,0.2)]"
          aria-label="Abrir Menu"
        >
          {isMobileMenuOpen ? <X size={22} className="text-cyan-400" /> : <Menu size={22} className="text-blue-400" />}
        </button>
      </div>

      {/* Fullscreen Mobile Menu - Optimized for small and square displays */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-[#0a0a0f]/98 backdrop-blur-2xl z-50 flex flex-col justify-between p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200 border-t border-blue-500/30">
          {/* Subtle Ambient Neon Background Highlights */}
          <div className="absolute top-10 right-10 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-5 relative z-10">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-cyan-400 font-bold mb-2.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                <span>Serviços de Visibilidade Digital</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services.map((s) => {
                  const Icon = s.icon;
                  return (
                    <Link
                      key={s.href}
                      to={s.href}
                      className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 font-semibold text-xs sm:text-sm hover:border-cyan-500 hover:text-white transition-all shadow-sm active:scale-[0.98]"
                    >
                      <div className="p-1.5 rounded-lg bg-blue-950/80 text-cyan-400 border border-blue-800/80 shrink-0">
                        <Icon size={16} />
                      </div>
                      <span className="truncate">{s.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-slate-800/80 pt-3 space-y-2">
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                Acesso Rápido
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <Link
                  to="/resultados"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 font-bold hover:text-yellow-400 hover:border-yellow-500/40"
                >
                  Results
                </Link>
                <Link
                  to="/omar-skafi"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 font-bold hover:text-cyan-400 hover:border-cyan-500/40"
                >
                  Sobre
                </Link>
                <Link
                  to="/contato"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 font-bold hover:text-blue-400 hover:border-blue-500/40"
                >
                  Contato
                </Link>
              </div>
            </div>

            {/* Neon Border CTA Button */}
            <Link
              to="/auditoria-seo"
              className="btn-primary-gold btn-shimmer w-full py-2.5 px-4"
            >
              <Zap size={15} className="fill-slate-950" />
              <span>Auditar Empresa</span>
            </Link>
          </div>

          {/* Contact Details in Mobile Footer */}
          <div className="mt-6 border-t border-slate-800/80 pt-4 space-y-2 text-xs text-slate-300 relative z-10">
            <div className="font-bold text-white uppercase tracking-wider text-[10px] text-blue-400 flex items-center gap-1.5">
              <MapPin size={13} className="text-cyan-400 shrink-0" />
              <span>Av. Sete de Setembro, 2775 - 9º andar, Batel, Curitiba</span>
            </div>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="tel:+5541987001004"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-900 border border-slate-800 text-white font-bold text-xs"
              >
                <Phone size={13} className="text-blue-400" />
                <span>(41) 98700-1004</span>
              </a>
              <a
                href="https://wa.me/5541992721004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-950/80 text-emerald-300 font-bold text-xs border border-emerald-700/60 shadow-[0_0_10px_rgba(16,185,129,0.2)]"
              >
                <MessageCircle size={13} className="text-emerald-400" />
                <span>WhatsApp Omar</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
