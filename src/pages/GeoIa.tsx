import React from 'react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import ConstellationGrid from '../components/ui/constellation-grid';
import { BackgroundVideo } from '../components/BackgroundVideo';
import { Cpu, CheckCircle2, ArrowRight, Zap, ShieldAlert, FileText, Sparkles } from 'lucide-react';

export default function GeoIa() {
  const pillars = [
    'Marcação Semântica JSON-LD e Organização em Grafos de Conhecimento',
    'Criação de Arquivos Standardized llms.txt para Crawlers de Inteligência Artificial',
    'Construção de Entidades Digitais e Co-Ocorrência de Marca no Nicho',
    'Formatação de Conteúdo em Respostas Diretas e Tabelas para Consumo de LLMs',
    'Auditoria de Citação Semântica em Fontes Autorizadas',
    'Transparência Técnica sem Promessas Milagrosas de Ranqueamento em IA',
  ];

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <EnhancedSEO
        title="GEO (Generative Engine Optimization) para IAs | Omar SEO"
        description="Estratégias de GEO e dados estruturados para preparar a presença da sua marca para ChatGPT, Gemini, Perplexity e Claude."
        canonical="/geo-ia"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'GEO para IA', item: '/geo-ia' },
        ]}
      />

      {/* Header */}
      <div className="relative p-8 sm:p-12 rounded-3xl bg-slate-950/80 border border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.15)] overflow-hidden">
        <BackgroundVideo
          src="https://img.supremasite.com.br/seo-omar.mp4"
          opacity={0.25}
          overlayClassName="bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/60 to-[#0a0a0f]/90"
        />
        <ConstellationGrid className="absolute inset-0 z-0 opacity-40 pointer-events-none" />
        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-800 text-purple-300 font-bold text-xs uppercase tracking-wider">
            <Cpu size={14} />
            <span>Generative Engine Optimization</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            GEO: Prepare Sua Empresa para Ser Recomendada por Assistentes de IA
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Estruturação de dados avançada e citações digitais para alinhar a presença da sua marca com o funcionamento dos modelos de inteligência artificial como ChatGPT, Gemini, Perplexity e Claude.
          </p>
        </div>
      </div>

      {/* Honesty Banner */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-purple-500/30 flex flex-col md:flex-row items-start gap-4">
        <div className="p-3 rounded-xl bg-purple-950 text-purple-400 shrink-0">
          <ShieldAlert size={24} />
        </div>
        <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-bold block mb-1">
            Compromisso de Transparência e Honestidade Técnica:
          </strong>
          Nenhum profissional ou agência do mundo pode prometer ou garantir inclusão fixa ou primeira colocação em respostas de modelos de IA como ChatGPT ou Gemini. O trabalho de GEO consiste em organizar e estruturar os dados da sua empresa da maneira mais legível, precisa e confiável para que os robôs compreendam quem você é e tenham alto grau de confiança ao citar sua marca.
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          <h2 className="text-2xl font-bold font-display text-white">
            O Que É GEO (Generative Engine Optimization)?
          </h2>

          <p>
            O GEO é a evolução natural do SEO para a era dos assistentes de conversação. Enquanto o SEO tradicional se concentra em cliques e palavras-chave em buscadores de links, o GEO se dedica a tornar os dados da sua empresa inteligíveis para algoritmos de síntese.
          </p>

          <p>
            Implementamos arquivos <code className="text-yellow-400 font-mono">llms.txt</code>, organizamos schemas de entidades corporativas no padrão Schema.org e garantimos que informações cruciais (endereço, telefone, CNPJ, serviços prestados) fiquem livres de ambiguidades.
          </p>

          <div className="pt-4 space-y-3">
            <h3 className="text-lg font-bold font-display text-white">
              Estratégias de Estruturação GEO Implementadas:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pillars.map((item) => (
                <div key={item} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <Sparkles size={16} className="text-purple-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-5 bg-[#0f1118] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="p-3 rounded-2xl bg-purple-950/60 border border-purple-800/60 text-purple-400 inline-block">
            <FileText size={24} />
          </div>

          <h3 className="text-xl font-bold font-display text-white">
            Sua Empresa Pronta para a Era da IA
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Fale com Omar Skafi e descubra como estruturar os dados da sua marca para os novos ecossistemas de busca conversacional.
          </p>

          <Link
            to="/auditoria-seo"
            className="btn-primary-gold btn-shimmer w-full py-3.5 px-4"
          >
            <span>Diagnóstico GEO</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
