import React, { useState } from 'react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import ConstellationGrid from '../components/ui/constellation-grid';
import { MapPin, Phone, MessageCircle, Mail, ExternalLink, Clock, Send, Building } from 'lucide-react';

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', whatsapp: '', mensagem: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Mensagem via Site Omar SEO:
*Nome:* ${form.nome}
*E-mail:* ${form.email}
*WhatsApp:* ${form.whatsapp}
*Mensagem:* ${form.mensagem}`;

    window.open(`https://wa.me/5541992721004?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <EnhancedSEO
        title="Contato com Omar SEO | Atendimento Curitiba e RMC"
        description="Entre em contato direto com Omar Skafi pelo WhatsApp (41) 99272-1004 ou (41) 98700-1004 e agende seu diagnóstico."
        canonical="/contato"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Contato', item: '/contato' },
        ]}
      />

      {/* Header */}
      <div className="relative p-8 sm:p-12 rounded-3xl bg-slate-950/80 border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.15)] overflow-hidden">
        <ConstellationGrid className="absolute inset-0 z-0 opacity-40 pointer-events-none" />
        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            Fale Conosco — Omar SEO
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Atendimento consultivo e direto para empresários em Curitiba, Região Metropolitana e todo o Brasil.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Address Card */}
        <div className="lg:col-span-5 bg-[#0f1118] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold font-display text-white border-b border-slate-800 pb-3">
            Informações de Atendimento
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-bold">Endereço da Sede em Curitiba:</strong>
                <span>Av. Sete de Setembro, 2775 - 9º andar</span> <br />
                <span className="text-slate-400 text-xs">(acesso pelo elevador azul ou vermelho)</span> <br />
                <span>Batel / Rebouças, Curitiba - PR, CEP 80230-010</span> <br />
                <a
                  href="https://share.google/j6UoHq8uuHfvwOfiW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-yellow-400 hover:text-yellow-300 font-bold mt-2"
                >
                  <span>Abrir no Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Phone size={18} className="text-blue-400 shrink-0" />
              <div>
                <strong className="text-white block">Telefone Comercial:</strong>
                <a href="tel:+5541987001004" className="hover:text-white">
                  (41) 98700-1004
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <MessageCircle size={18} className="text-emerald-400 shrink-0" />
              <div>
                <strong className="text-white block">WhatsApp Direto Omar Skafi:</strong>
                <a
                  href="https://wa.me/5541992721004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-bold hover:underline"
                >
                  (41) 99272-1004
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Clock size={18} className="text-yellow-400 shrink-0" />
              <div>
                <strong className="text-white block">Horário de Atendimento:</strong>
                <span>Segunda a Sexta-feira, das 09h às 18h</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Mail size={18} className="text-blue-400 shrink-0" />
              <div>
                <strong className="text-white block">E-mail Comercial:</strong>
                <a href="mailto:supremamidiabatel@gmail.com" className="hover:text-white">
                  supremamidiabatel@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-[#0f1118] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold font-display text-white">
            Envie uma Mensagem Direta
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                Seu Nome
              </label>
              <input
                type="text"
                required
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-blue-400 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-blue-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-blue-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                Sua Mensagem ou Dúvida
              </label>
              <textarea
                rows={4}
                required
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-blue-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="btn-emerald-wa btn-shimmer w-full py-3.5 px-4 text-xs sm:text-sm"
            >
              <Send size={15} />
              <span>Enviar no WhatsApp</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
