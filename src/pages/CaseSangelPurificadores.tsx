import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  Target, 
  Search, 
  Cpu, 
  MapPin,
  ShieldCheck,
  TrendingUp,
  Zap,
  Globe,
  ChevronRight,
  Filter,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseSangelPurificadores() {
  const [activeTab, setActiveTab] = useState<'aio' | 'org' | 'maps'>('aio');

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://www.omarseo.digital/resultados/sangel-purificadores#article',
    'headline': 'Case Sangel: Domínio Total (SEO + GEO + AIO) para Purificadores e Bebedouros em Curitiba',
    'description': 'Como a Sangel Purificadores alcançou a tripla presença no Google, sendo recomendada pela IA e liderando buscas orgânicas e locais.',
    'image': 'https://bio.supremamidia.com.br/imagens/gestor-de-trafego-organico-em-curitiba.png',
    'author': {
      '@type': 'Person',
      'name': 'Omar Skafi',
      'url': 'https://www.omarseo.digital/sobre'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Omar SEO',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.omarseo.digital/logo.png'
      }
    },
    'datePublished': '2024-10-17',
    'dateModified': '2024-10-17'
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Helmet>
        <title>Case Sangel Purificadores: SEO, GEO e AIO em Curitiba | Omar SEO</title>
        <meta name="description" content="Confira como a Sangel Purificadores domina as buscas por purificadores e bebedouros em Curitiba através da estratégia de Tripla Presença (SEO, Maps e AI Overview)." />
        <link rel="canonical" href="https://www.omarseo.digital/resultados/sangel-purificadores" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      {/* Header/Hero */}
      <header className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(34,211,238,0.15),transparent_70%)]" />
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <Link 
            to="/resultados" 
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Voltar para Resultados
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  Case de Sucesso: Tripla Presença
                </span>
                <span className="flex items-center gap-1 text-slate-400 text-sm">
                  <Globe className="w-4 h-4" /> sangel.com.br
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Sangel: Domínio em <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">3 Superfícies</span> do Google
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                Estratégia completa de SEO, GEO e AIO para a busca <strong className="text-cyan-300">"Purificadores e bebedouros curitiba"</strong>, garantindo recomendação da IA, presença no Maps e liderança orgânica.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pb-2">
              <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl flex-1 min-w-[140px]">
                <div className="text-cyan-400 font-bold text-2xl mb-1">AIO</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold">AI Overview</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl flex-1 min-w-[140px]">
                <div className="text-cyan-400 font-bold text-2xl mb-1">GEO</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Google Maps</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl flex-1 min-w-[140px]">
                <div className="text-cyan-400 font-bold text-2xl mb-1">SEO</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Orgânico</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Strategy Section */}
            <section className="bg-slate-900/50 border border-slate-800/50 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-cyan-400" /> O Desafio e a Estratégia
              </h2>
              <div className="prose prose-invert max-w-none text-slate-400 space-y-4">
                <p>
                  A <strong>Sangel Purificadores</strong> atua em um mercado altamente competitivo em Curitiba, vendendo e mantendo marcas líderes como <strong>Europa, Soft Evereste e IBBL</strong>. O objetivo era não apenas estar no Google, mas ser a autoridade inquestionável quando alguém busca por purificação de água na região.
                </p>
                <p>
                  Implementamos o framework de <strong>Tripla Presença</strong>:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
                  <li className="flex items-start gap-3 bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>Otimização de Entidade:</strong> Alinhamento de dados (NAP) em todas as plataformas para que a IA reconheça a Sangel como a principal autoridade local.</span>
                  </li>
                  <li className="flex items-start gap-3 bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>Conteúdo Técnico SEO:</strong> Páginas de serviços específicas por marca e utilidade (residencial vs comercial).</span>
                  </li>
                  <li className="flex items-start gap-3 bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>SEO Local (GEO):</strong> Fortalecimento do Perfil da Empresa no Google focado em "bebedouros" e "manutenção".</span>
                  </li>
                  <li className="flex items-start gap-3 bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>Preparação para AIO:</strong> Estruturação de dados e FAQs para alimentar os novos algoritmos generativos do Google.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Evidence Section - Interactive Tabs */}
            <section className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-cyan-400" /> Evidências de Domínio
                </h2>
                
                <div className="inline-flex p-1 bg-slate-900 rounded-xl border border-slate-800">
                  <button 
                    onClick={() => setActiveTab('aio')}
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'aio' ? 'bg-cyan-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                  >
                    <Cpu className="w-4 h-4" /> AI Overview
                  </button>
                  <button 
                    onClick={() => setActiveTab('maps')}
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'maps' ? 'bg-cyan-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                  >
                    <MapPin className="w-4 h-4" /> Google Maps
                  </button>
                  <button 
                    onClick={() => setActiveTab('org')}
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'org' ? 'bg-cyan-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                  >
                    <Search className="w-4 h-4" /> Orgânico
                  </button>
                </div>
              </div>

              {/* Tab Content: AIO */}
              {activeTab === 'aio' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                    <div className="p-8 space-y-6">
                      <div className="flex items-center gap-4 text-cyan-400 mb-2">
                        <Zap className="w-6 h-6 fill-cyan-400" />
                        <span className="font-bold uppercase tracking-widest text-sm">Status: Recomendado por IA</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Domínio em AI Overview (SGE)</h3>
                      <p className="text-slate-400 leading-relaxed">
                        Para a busca <span className="text-white font-semibold">"Purificadores e bebedouros curitiba"</span>, o Google gera uma resposta generativa recomendando a Sangel como opção principal, detalhando o catálogo de marcas (Europa, Soft, Everest) e os serviços de instalação e manutenção.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6 pt-4">
                        <div className="bg-slate-950/80 rounded-2xl p-5 border border-cyan-500/20">
                          <h4 className="text-cyan-400 font-bold mb-3 flex items-center gap-2">
                            <Check className="w-4 h-4" /> Citação Direta
                          </h4>
                          <p className="text-sm text-slate-500">O robô do Google extrai informações específicas de manutenção de purificadores do site da Sangel, exibindo-as como "conhecimento factual".</p>
                        </div>
                        <div className="bg-slate-950/80 rounded-2xl p-5 border border-cyan-500/20">
                          <h4 className="text-cyan-400 font-bold mb-3 flex items-center gap-2">
                            <Check className="w-4 h-4" /> Visibilidade de Marcas
                          </h4>
                          <p className="text-sm text-slate-500">A IA associa a Sangel a marcas premium, reforçando a autoridade da empresa como revendedora autorizada e assistência técnica.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab Content: Maps */}
              {activeTab === 'maps' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                    <div className="p-8 space-y-6">
                      <div className="flex items-center gap-4 text-emerald-400 mb-2">
                        <MapPin className="w-6 h-6 fill-emerald-400" />
                        <span className="font-bold uppercase tracking-widest text-sm">Status: Local Pack Top 3</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Liderança em SEO Local (GEO)</h3>
                      <p className="text-slate-400 leading-relaxed">
                        A Sangel Purificadores aparece no <strong>Local Pack (Mapa)</strong> para buscas transacionais, capturando leads prontos para comprar ou agendar manutenção no momento exato da necessidade.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-slate-300">
                          <Check className="w-5 h-5 text-emerald-500" /> Presença constante no Top 3 do Mapa
                        </li>
                        <li className="flex items-center gap-3 text-slate-300">
                          <Check className="w-5 h-5 text-emerald-500" /> Otimização de categorias para bebedouros e purificadores
                        </li>
                        <li className="flex items-center gap-3 text-slate-300">
                          <Check className="w-5 h-5 text-emerald-500" /> Alta taxa de conversão via botão de "Ligar" e "Rota"
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab Content: Organic */}
              {activeTab === 'org' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                    <div className="p-8 space-y-6">
                      <div className="flex items-center gap-4 text-blue-400 mb-2">
                        <Search className="w-6 h-6" />
                        <span className="font-bold uppercase tracking-widest text-sm">Status: 1ª Página Orgânica</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">SEO Tradicional de Alta Performance</h3>
                      <p className="text-slate-400 leading-relaxed">
                        Além do mapa e da IA, o site institucional ocupa posições de destaque para termos informativos e de comparação de modelos, blindando a primeira página do Google contra concorrentes.
                      </p>
                      <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-xs font-bold uppercase text-slate-500">Keyword Principal</span>
                          <span className="text-xs font-bold uppercase text-cyan-400">Posição Atual</span>
                        </div>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center pb-2 border-b border-slate-800/50">
                            <span className="text-slate-300 text-sm">Purificadores Curitiba</span>
                            <span className="text-white font-bold bg-cyan-500/20 px-2 py-0.5 rounded text-xs">#1 - #3</span>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b border-slate-800/50">
                            <span className="text-slate-300 text-sm">Bebedouros de coluna em Curitiba</span>
                            <span className="text-white font-bold bg-cyan-500/20 px-2 py-0.5 rounded text-xs">#2</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-300 text-sm">Manutenção de purificador Soft</span>
                            <span className="text-white font-bold bg-cyan-500/20 px-2 py-0.5 rounded text-xs">#3</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-6">Resumo do Case</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Cliente</div>
                  <div className="text-white font-semibold">Sangel Purificadores</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Localização</div>
                  <div className="text-white font-semibold italic">Curitiba, PR</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Segmento</div>
                  <div className="text-white font-semibold">Purificadores, Bebedouros e Manutenção</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Keywords Foco</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-1 bg-slate-800 rounded text-[10px] text-slate-300 border border-slate-700">Purificadores Curitiba</span>
                    <span className="px-2 py-1 bg-slate-800 rounded text-[10px] text-slate-300 border border-slate-700">Bebedouros Curitiba</span>
                    <span className="px-2 py-1 bg-slate-800 rounded text-[10px] text-slate-300 border border-slate-700">Manutenção Soft</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800">
                  <div className="flex items-center gap-4 mb-4">
                    <TrendingUp className="w-8 h-8 text-cyan-400" />
                    <div>
                      <div className="text-2xl font-bold text-white">Tripla Presença</div>
                      <div className="text-xs text-slate-500">Conquistada em 2024</div>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://wa.me/5541999999999" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group"
                >
                  Diagnóstico Gratuito
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Results Metrics */}
        <section className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900/40 border border-slate-800/60 p-8 rounded-3xl text-center">
            <div className="text-4xl font-bold text-white mb-2">+40%</div>
            <p className="text-slate-500 text-sm">Aumento em pedidos de orçamento via site e mapa</p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800/60 p-8 rounded-3xl text-center">
            <div className="text-4xl font-bold text-white mb-2">Top 3</div>
            <p className="text-slate-500 text-sm">Posicionamento consistente para termos de alta conversão</p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800/60 p-8 rounded-3xl text-center">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <p className="text-slate-500 text-sm">Cobertura de marcas líderes no SEO técnico</p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-24 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Quer que sua empresa também domine a <span className="text-cyan-400 font-extrabold italic">Tripla Superfície</span> do Google?
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            O futuro da busca não é apenas links. É ser a entidade recomendada pelos novos assistentes de IA e dominar o cenário local.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/diagnostico" 
              className="w-full sm:w-auto px-10 py-5 bg-white text-slate-950 font-bold rounded-2xl hover:bg-cyan-50 transition-all text-lg shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
            >
              Começar Meu Plano SEO
            </Link>
            <Link 
              to="/blog" 
              className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all text-lg border border-slate-700"
            >
              Ver Outros Cases
            </Link>
          </div>
        </section>
      </main>

      {/* Footer is already part of Layout usually, but let's assume it's handled by App.tsx */}
    </div>
  );
}
