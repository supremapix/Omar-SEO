import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import ConstellationGrid from '../components/ui/constellation-grid';
import { BackgroundVideo } from '../components/BackgroundVideo';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import {
  BookOpen,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Sparkles,
  Tag,
  Zap,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'SEO Técnico', 'SEO Local', 'GEO & IA', 'Performance'];

  const filteredArticles = BLOG_POSTS.filter((art) => {
    const matchesCategory = selectedCategory === 'Todos' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Blog', item: '/blog' },
  ];

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <EnhancedSEO
        title="Blog de SEO, GEO e Visibilidade Digital em Curitiba | Omar SEO"
        description="Artigos, tutoriais e análises avançadas sobre indexação, Core Web Vitals, Schema.org, SEO local e inteligência artificial escritas por Omar Skafi."
        canonical="/blog"
        breadcrumbs={breadcrumbs}
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
            <span>Conhecimento Técnico Acionável</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            Blog de SEO, GEO & Inteligência Artificial
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Estratégias, análises de algoritmos do Google e guias práticos de indexação escritos por Omar Skafi.
          </p>
        </div>
      </section>

      {/* Search and Category Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#0f1118] border border-slate-800 rounded-2xl p-4">
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
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:border-blue-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Featured Article Card (if present) */}
      {filteredArticles.find((a) => a.featured) && (
        <div className="relative">
          {(() => {
            const feat = filteredArticles.find((a) => a.featured)!;
            return (
              <Link
                to={`/blog/${feat.slug}`}
                className="block p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-950/60 via-slate-900/90 to-[#0f1118] border-2 border-blue-500/40 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] transition-all group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="space-y-4 max-w-3xl">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-extrabold text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                        <Zap size={12} className="text-yellow-400" />
                        <span>Artigo em Destaque</span>
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {feat.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black font-display text-white group-hover:text-cyan-300 transition-colors">
                      {feat.title}
                    </h2>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-2">
                      {feat.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-slate-400 pt-2">
                      <span className="flex items-center gap-1.5 font-bold text-slate-200">
                        <User size={14} className="text-cyan-400" />
                        <span>{feat.author.name}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-blue-400" />
                        <span>{feat.date}</span>
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 group-hover:bg-cyan-500 group-hover:text-slate-950 text-white font-bold text-xs transition-all shadow-lg">
                      <span>Ler Artigo Completo</span>
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })()}
        </div>
      )}

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredArticles
          .filter((art) => !art.featured || selectedCategory !== 'Todos' || searchQuery.length > 0)
          .map((article) => (
            <Link
              key={article.id}
              to={`/blog/${article.slug}`}
              className="bg-[#0f1118] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 flex flex-col justify-between hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="px-2.5 py-1 rounded-full bg-blue-950/80 border border-blue-800 text-cyan-400 font-bold text-[10px] uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} className="text-slate-400" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h2 className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                  {article.title}
                </h2>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-bold text-slate-300">
                  <User size={13} className="text-blue-400" />
                  <span>{article.author.name}</span>
                </span>

                <span className="inline-flex items-center gap-1 text-cyan-400 font-bold group-hover:translate-x-1 transition-transform">
                  <span>Ler Artigo</span>
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
