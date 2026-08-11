import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  ExternalLink,
  Globe,
  Heart,
  CreditCard,
  Building,
} from 'lucide-react';

export function SupremaCredit() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-4 border-t border-slate-800/50 flex justify-center items-center">
      <div className="bg-slate-950/70 border border-slate-800/80 rounded-full px-6 py-2.5 shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]">
        <p className="text-slate-200 hover:text-white transition-colors duration-200 text-sm sm:text-base font-bold flex flex-wrap items-center justify-center gap-2">
          <span className="opacity-90">Desenvolvido com</span>
          <Heart size={14} className="text-red-500 animate-[pulse_1.5s_infinite] shrink-0 filter drop-shadow-[0_0_3px_rgba(239,68,68,0.7)]" />
          <span className="opacity-90">por</span>
          <a id="developer-suprema-link" href="https://supremasite.com.br" target="_blank" rel="noopener noreferrer"
             className="text-yellow-400 hover:text-yellow-300 transition-all font-black inline-flex items-center gap-2 cursor-pointer border-b border-dashed border-yellow-400/50 hover:border-yellow-300">
            Suprema Sites Express
            <img src="https://bio.supremamidia.com.br/imagens/gestor-de-trafego-organico-em-curitiba.png" alt="Suprema"
                 className="h-[18px] w-auto inline select-none shrink-0 filter drop-shadow-[0_0_2px_rgba(250,204,21,0.5)] transition-transform duration-300 hover:scale-110"
                 referrerPolicy="no-referrer" />
          </a>
        </p>
      </div>
    </div>
  );
}

export function Footer() {
  const topLocations = [
    { name: 'Batel', href: '/seo-batel' },
    { name: 'Água Verde', href: '/seo-agua-verde' },
    { name: 'Centro', href: '/seo-centro' },
    { name: 'Cidade Industrial (CIC)', href: '/seo-cidade-industrial' },
    { name: 'Santa Felicidade', href: '/seo-santa-felicidade' },
    { name: 'Bigorrilho', href: '/seo-bigorrilho' },
    { name: 'Portão', href: '/seo-portao' },
    { name: 'Pinheirinho', href: '/seo-pinheirinho' },
    { name: 'Sítio Cercado', href: '/seo-sitio-cercado' },
    { name: 'São José dos Pinhais', href: '/seo-sao-jose-dos-pinhais' },
    { name: 'Pinhais', href: '/seo-pinhais' },
    { name: 'Colombo', href: '/seo-colombo' },
  ];

  return (
    <footer className="bg-[#07080b] text-slate-300 border-t border-blue-500/30 pt-16 pb-12 relative overflow-hidden">
      {/* Top Neon Light Line Sweep */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80 animate-pulse shadow-[0_0_15px_rgba(34,211,238,0.8)]" />

      {/* Background ambient neon lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Specialist Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-black font-display text-white tracking-tight">
                OMAR <span className="text-blue-500">SEO</span>
              </span>
              <p className="text-xs text-blue-400 font-semibold mt-0.5">
                Engenharia de Visibilidade Digital
              </p>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              Especialista técnico em SEO, SEO Local, Google Maps, GEO (Generative Engine Optimization) e dados estruturados Schema.org para posicionar empresas no Google, ChatGPT, Gemini e Claude.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <a
                href="https://bio.supremamidia.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-yellow-400 hover:text-yellow-300 font-bold border-b border-yellow-400/40 pb-0.5 transition-colors"
              >
                <Globe size={14} />
                <span>Link da Bio & Bio Oficial</span>
                <ExternalLink size={12} />
              </a>
              <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1">
                <Building size={14} className="text-slate-400 shrink-0" />
                <span>Marca de OSKAFI WEB SITES LTDA ME</span>
              </div>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-display border-b border-slate-800 pb-2">
              Serviços de Visibilidade
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/seo" className="hover:text-blue-400 transition-colors">
                  SEO Completo On-Page & Off-Page
                </Link>
              </li>
              <li>
                <Link to="/seo-local" className="hover:text-blue-400 transition-colors">
                  SEO Local por Cidade e Bairro
                </Link>
              </li>
              <li>
                <Link to="/google-maps" className="hover:text-blue-400 transition-colors">
                  Otimização de Google Maps & Perfil
                </Link>
              </li>
              <li>
                <Link to="/geo-ia" className="hover:text-blue-400 transition-colors">
                  GEO para Motores de IA (ChatGPT/Gemini)
                </Link>
              </li>
              <li>
                <Link to="/seo-tecnico" className="hover:text-blue-400 transition-colors">
                  SEO Técnico, Schema.org & Performance
                </Link>
              </li>
              <li>
                <Link to="/auditoria-seo" className="hover:text-blue-400 transition-colors">
                  Auditoria SEO e Diagnóstico Gratuito
                </Link>
              </li>
              <li>
                <Link to="/resultados" className="hover:text-blue-400 transition-colors">
                  Cases de Sucesso & Relatórios
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Regions & Clusters */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-display border-b border-slate-800 pb-2">
              Bairros e Regiões
            </h3>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-[11px] text-slate-400">
              {topLocations.map((loc) => (
                <li key={loc.href}>
                  <Link to={loc.href} className="hover:text-blue-400 transition-colors">
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-1">
              <Link
                to="/seo-local-curitiba"
                className="text-xs text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1"
              >
                <span>Ver guia completo de todas as localidades →</span>
              </Link>
            </div>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-display border-b border-slate-800 pb-2">
              Sede e Contato
            </h3>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin size={16} className="text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Curitiba / PR</p>
                  <p className="text-slate-400 text-[11px]">
                    Av. Sete de Setembro, 2775 - 9º andar
                  </p>
                  <p className="text-slate-400 text-[11px]">
                    (acesso pelo elevador azul ou vermelho)
                  </p>
                  <p className="text-slate-400 text-[11px]">Batel/Rebouças, CEP 80230-010</p>
                  <a
                    href="https://share.google/j6UoHq8uuHfvwOfiW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 font-bold inline-flex items-center gap-1 mt-1 text-[11px]"
                  >
                    <span>Ver no Google Maps</span>
                    <ExternalLink size={10} />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={14} className="text-blue-400 shrink-0" />
                <a href="tel:+5541987001004" className="hover:text-white font-semibold">
                  (41) 98700-1004 (Comercial)
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle size={14} className="text-emerald-400 shrink-0" />
                <div>
                  <a
                    href="https://wa.me/5541992721004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-300 font-semibold text-emerald-400"
                  >
                    (41) 99272-1004 (WhatsApp Omar)
                  </a>
                  <p className="text-[10px] text-slate-400">Atendimento seg–sex, 9h às 18h</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={14} className="text-blue-400 shrink-0" />
                <a href="mailto:supremamidiabatel@gmail.com" className="hover:text-white">
                  supremamidiabatel@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Discrete PIX & Legal Data Box */}
        <div className="mt-8 p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Building size={16} className="text-slate-400 shrink-0" />
            <span>
              <strong className="text-slate-300">OSKAFI WEB SITES LTDA ME</strong> — CNPJ 15.083.543/0001-97
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard size={16} className="text-yellow-400 shrink-0" />
            <span>
              Chave Pix Oficial (E-mail): <strong className="text-yellow-300">supremapix@gmail.com</strong>
            </span>
          </div>
        </div>

        {/* Mandatory Developer Credit */}
        <SupremaCredit />
      </div>
    </footer>
  );
}
