import React, { useState } from 'react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import ConstellationGrid from '../components/ui/constellation-grid';
import { BackgroundVideo } from '../components/BackgroundVideo';
import { FileSearch, Zap, CheckCircle2, ArrowRight, ShieldCheck, Send, MessageCircle } from 'lucide-react';

export default function AuditoriaSeo() {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    site: '',
    whatsapp: '',
    cidade: 'Curitiba',
    bairro: '',
    mensagem: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Prepare WhatsApp message
    const text = `Olá Omar! Solicito a Auditoria SEO Gratuita para minha empresa:
*Nome:* ${formData.nome}
*Empresa:* ${formData.empresa}
*Site:* ${formData.site}
*WhatsApp:* ${formData.whatsapp}
*Cidade/Bairro:* ${formData.cidade} / ${formData.bairro}
*Detalhes:* ${formData.mensagem}`;

    const waUrl = `https://wa.me/5541992721004?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <EnhancedSEO
        title="Auditoria SEO Gratuita e Diagnóstico de Site | Omar SEO"
        description="Solicite uma análise técnica completa do seu site e descubra os gargalos que impedem sua empresa de aparecer no Google."
        canonical="/auditoria-seo"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Auditoria SEO', item: '/auditoria-seo' },
        ]}
      />

      {/* Header */}
      <div className="relative p-8 sm:p-12 rounded-3xl bg-slate-950/80 border border-yellow-500/30 shadow-[0_0_40px_rgba(250,204,21,0.15)] overflow-hidden">
        <BackgroundVideo
          src="https://img.supremasite.com.br/seo-omar.mp4"
          opacity={0.40}
          overlayClassName="bg-gradient-to-b from-[#0a0a0f]/70 via-[#0a0a0f]/50 to-[#0a0a0f]/80"
        />
        <ConstellationGrid className="absolute inset-0 z-0 opacity-40 pointer-events-none" />
        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-bold text-xs uppercase tracking-wider">
            <FileSearch size={14} />
            <span>Diagnóstico de Visibilidade Orgânica</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            Solicite Sua Auditoria SEO & Diagnóstico Gratuito
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Preencha os dados da sua empresa abaixo para receber uma análise técnica preliminar do seu site e Perfil de Empresa no Google Maps em Curitiba e região.
          </p>
        </div>
      </div>

      {/* Form & Value Prop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Form Card */}
        <div className="lg:col-span-7 bg-[#0f1118] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <h2 className="text-xl font-bold font-display text-white flex items-center gap-2">
            <Zap className="text-yellow-400" size={20} />
            <span>Formulário de Solicitação de Auditoria</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Silva"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-yellow-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Nome da Sua Empresa *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Clínica Odontológica Batel"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-yellow-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Endereço do Site (URL) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: www.minhaempresa.com.br"
                  value={formData.site}
                  onChange={(e) => setFormData({ ...formData, site: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-yellow-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  WhatsApp para Contato *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(41) 99999-9999"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-yellow-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Cidade
                </label>
                <input
                  type="text"
                  value={formData.cidade}
                  onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-yellow-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Bairro de Atendimento Principal
                </label>
                <input
                  type="text"
                  placeholder="Ex: Batel, Água Verde, CIC, Centro"
                  value={formData.bairro}
                  onChange={(e) => setFormData({ ...formData, bairro: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-yellow-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                Qual o Principal Problema Atual do Seu Site?
              </label>
              <textarea
                rows={3}
                placeholder="Ex: Meu site é novo e não aparece no Google; Não recebo ligações do Google Maps..."
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-yellow-400 focus:outline-none"
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

        {/* Benefits Sidebar */}
        <div className="lg:col-span-5 space-y-6 text-slate-300 text-sm">
          <h2 className="text-2xl font-bold font-display text-white">
            O Que Analisamos Na Sua Empresa:
          </h2>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-start gap-3">
              <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-white text-sm">Indexabilidade e Falhas de Código</h3>
                <p className="text-xs text-slate-400 mt-1">Verificamos se o Googlebot consegue ler suas páginas sem bloqueios.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-start gap-3">
              <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-white text-sm">Posicionamento no Google Maps</h3>
                <p className="text-xs text-slate-400 mt-1">Avaliamos a concorrência na sua região exata em Curitiba.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-start gap-3">
              <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-white text-sm">Estruturação em Dados Schema.org</h3>
                <p className="text-xs text-slate-400 mt-1">Auditamos se seu site possui códigos JSON-LD de LocalBusiness e Person.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
