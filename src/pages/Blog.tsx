import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import ConstellationGrid from '../components/ui/constellation-grid';
import { BackgroundVideo } from '../components/BackgroundVideo';
import { blogPosts, BlogPostMeta } from '../data/blogPosts';
import {
  BookOpen,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Sparkles,
  Tag,
  MessageCircle,
} from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Estratégia', 'Fundamentos', 'Dúvidas frequentes', 'Tutoriais', 'GEO', 'Guia para iniciantes'];

  const filteredArticles = blogPosts.filter((art) => {
    const matchesCategory = selectedCategory === 'Todos' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Blog', item: '/blog' },
  ];

  // Schema.org Blog + ItemList + Breadcrumb
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog Omar SEO — SEO, GEO e AIO na prática',
    description: 'Artigos, tutoriais e análises avançadas sobre indexação, Core Web Vitals, Schema.org, SEO local e inteligência artificial escritas por Omar Skafi.',
    url: 'https://www.omarseo.digital/blog',
    inLanguage: 'pt-BR',
    author: {
      '@type': 'Person',
      name: 'Omar Skafi',
      jobTitle: 'Especialista em SEO, GEO e AIO',
      url: 'https://www.omarseo.digital/sobre',
    },
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: `https://www.omarseo.digital/blog/${post.slug}`,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      author: {
        '@type': 'Person',
        name: post.author,
      },
    })),
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: blogPosts.map((post, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      url: `https://www.omarseo.digital/blog/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 text-slate-200">
      <EnhancedSEO
        title="Blog Omar SEO — SEO, GEO e AIO na prática | Omar SEO"
        description="Artigos, tutoriais e análises avançadas sobre indexação, Core Web Vitals, Schema.org, SEO local e inteligência artificial escritas por Omar Skafi."
        canonical="/blog"
        breadcrumbs={breadcrumbs}
        schema={[blogSchema, itemListSchema]}
      />

      {/* Header */}
      <section className="relative p-8 sm:p-12 rounded-3xl bg-slate-950/80 border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.15)] overflow-hidden">
        <BackgroundVideo
          src="https://img.supremasite.com.br/seo-omar.mp4"
          opacity={0.40}
          overlayClassName="bg-gradient-to-b from-[#0a0a0f]/70 via-[#0a0a0f]/50 to-[#0a0a0f]/80"
        />
        <ConstellationGrid className="absolute inset-0 z-0 opacity-40 pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/90 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(34,211,238,0.3)]">
            <BookOpen size={14} className="text-cyan-400" />
            <span>SEO, GEO e AIO na prática</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            Blog Omar SEO — SEO, GEO e AIO na prática
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Estratégias, análises de algoritmos do Google, Bing e motores de IA escritas por Omar Skafi em Curitiba-PR.
          </p>
        </div>
      </section>

      {/* Search and Category Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#0f1118] border border-slate-800 rounded-2xl p-4 shadow-xl">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-[0_0_12px_rgba(59,130,246,0.5)]'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar artigos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((post) => (
          <article
            key={post.slug}
            className="p-6 rounded-3xl bg-[#0f1118] border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-[0_0_25px_rgba(34,211,238,0.1)]"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-[11px] font-bold uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-slate-400 text-xs flex items-center gap-1 font-mono">
                  <Clock size={12} className="text-cyan-400" />
                  <span>{post.readTime} min</span>
                </span>
              </div>

              <h2 className="text-lg font-bold font-display text-white group-hover:text-cyan-300 transition-colors leading-snug">
                <Link to={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                {post.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                <Calendar size={12} className="text-slate-400" />
                <span>{post.datePublished}</span>
              </span>

              <Link
                to={`/blog/${post.slug}`}
                className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
              >
                <span>Ler artigo</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="p-12 text-center rounded-3xl bg-[#0f1118] border border-slate-800 space-y-3">
          <p className="text-sm text-slate-400">Nenhum artigo encontrado para a busca ou categoria selecionada.</p>
          <button
            onClick={() => { setSelectedCategory('Todos'); setSearchQuery(''); }}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-500 transition-colors"
          >
            Limpar filtros
          </button>
        </div>
      )}

      {/* CTA Box */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-950 to-cyan-950 border border-cyan-500/40 shadow-[0_0_40px_rgba(34,211,238,0.15)] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 font-mono">
            DIAGNÓSTICO GRATUITO
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
            Quer saber onde sua empresa aparece no Google e nas IAs?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Fale diretamente com Omar Skafi e descubra o potencial de tráfego orgânico, local e generativo para o seu negócio.
          </p>
        </div>

        <a
          href="https://wa.me/5541992721004?text=Olá%20Omar,%20li%20os%20artigos%20do%20blog%20e%20gostaria%20de%20solicitar%20um%20diagnóstico%20SEO/GEO%20gratuito."
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs inline-flex items-center gap-2 shrink-0 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)]"
        >
          <MessageCircle size={16} />
          <span>Falar no WhatsApp (Diagnóstico Gratuito)</span>
        </a>
      </div>
    </div>
  );
}
