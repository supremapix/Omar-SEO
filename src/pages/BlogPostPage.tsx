import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import ConstellationGrid from '../components/ui/constellation-grid';
import { BackgroundVideo } from '../components/BackgroundVideo';
import { BLOG_POSTS } from '../data/blogData';
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  ArrowLeft,
  Share2,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  HelpCircle,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface BlogPostPageProps {
  slug?: string;
}

export default function BlogPostPage({ slug: propSlug }: BlogPostPageProps) {
  const { slug: routeSlug } = useParams<{ slug: string }>();
  const activeSlug = propSlug || routeSlug;

  const post = BLOG_POSTS.find((p) => p.slug === activeSlug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Blog', item: '/blog' },
    { name: post.title, item: `/blog/${post.slug}` },
  ];

  // Schema.org Article / BlogPosting (strictly valid according to Google Guidelines)
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.dateIso,
    dateModified: post.dateIso,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
      url: 'https://omarseo.digital/sobre',
      sameAs: [
        'https://bio.supremamidia.com.br/',
        'https://share.google/j6UoHq8uuHfvwOfiW',
      ],
    },
    publisher: {
      '@type': 'Organization',
      name: 'Omar SEO',
      url: 'https://omarseo.digital',
      logo: {
        '@type': 'ImageObject',
        url: 'https://img.supremasite.com.br/omar-seo-icon.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://omarseo.digital/blog/${post.slug}`,
    },
    articleSection: post.category,
    wordCount: 1200,
    inLanguage: 'pt-BR',
  };

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      <EnhancedSEO
        title={post.metaTitle}
        description={post.metaDescription}
        canonical={`/blog/${post.slug}`}
        breadcrumbs={breadcrumbs}
        schema={[articleSchema]}
      />

      {/* Back Button */}
      <div className="flex items-center justify-between">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Voltar para todos os artigos</span>
        </Link>

        <span className="px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800 text-cyan-400 text-xs font-bold uppercase tracking-wider">
          {post.category}
        </span>
      </div>

      {/* Hero Header */}
      <article className="space-y-8">
        <header className="relative p-8 sm:p-12 rounded-3xl bg-slate-950/80 border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.15)] overflow-hidden space-y-6">
          <BackgroundVideo
            src="https://img.supremasite.com.br/seo-omar.mp4"
            opacity={0.35}
            overlayClassName="bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/60 to-[#0a0a0f]/90"
          />
          <ConstellationGrid className="absolute inset-0 z-0 opacity-40 pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>

            {/* Author & Meta */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-bold text-white shadow-md">
                  OS
                </div>
                <div>
                  <span className="font-bold text-white block">{post.author.name}</span>
                  <span className="text-[11px] text-slate-400">{post.author.role}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-blue-400" />
                  <span>{post.date}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-blue-400" />
                  <span>{post.readTime}</span>
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Article Body Content */}
        <div className="bg-[#0f1118] border border-slate-800 rounded-3xl p-6 sm:p-12 space-y-8 text-slate-200 leading-relaxed font-sans text-base">
          {post.sections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-4">
              {section.heading && (
                <h2 className="text-xl sm:text-2xl font-bold font-display text-white pt-4 first:pt-0 border-t border-slate-800/60 first:border-0">
                  {section.heading}
                </h2>
              )}

              {section.subheading && (
                <h3 className="text-lg font-bold text-cyan-300">{section.subheading}</h3>
              )}

              {section.highlightBox && (
                <div className="p-5 rounded-2xl bg-blue-950/40 border border-blue-500/30 space-y-2 my-4">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                    <Sparkles size={16} />
                    <span>{section.highlightBox.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {section.highlightBox.description}
                  </p>
                </div>
              )}

              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {para}
                </p>
              ))}

              {section.bulletPoints && (
                <ul className="space-y-2 pl-2 my-3">
                  {section.bulletPoints.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.paragraphsAfter &&
                section.paragraphsAfter.map((para, paIdx) => (
                  <p key={`after-${paIdx}`} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {para}
                  </p>
                ))}

              {section.quote && (
                <blockquote className="border-l-4 border-cyan-400 pl-4 py-2 my-4 italic text-cyan-200 bg-blue-950/20 rounded-r-xl text-sm sm:text-base">
                  "{section.quote}"
                </blockquote>
              )}
            </div>
          ))}

          {/* Bottom Conversion Box */}
          <div className="pt-8 mt-8 border-t border-slate-800 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950/80 via-slate-900 to-[#0a0a0f] border border-blue-500/40 space-y-4 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Zap size={14} className="text-yellow-400" />
                <span>Precisa de Diagnóstico no Seu Domínio?</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Descubra por que o seu site não está performando no Google
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Agende uma auditoria técnica direta com Omar Skafi. Analisamos seu Search Console, robots.txt, sitemaps, velocidade e marcações Schema.org.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="https://wa.me/5541992721004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-emerald-wa btn-shimmer px-6 py-3 text-xs font-bold flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <MessageCircle size={16} />
                  <span>Falar com Omar no WhatsApp</span>
                </a>

                <Link
                  to="/servicos/auditoria-seo"
                  className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-blue-400 text-white text-xs font-bold transition-all w-full sm:w-auto text-center"
                >
                  Ver Auditoria SEO Técnica
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services Links */}
        {post.relatedServices && post.relatedServices.length > 0 && (
          <section className="space-y-4">
            <h3 className="text-lg font-bold font-display text-white flex items-center gap-2">
              <Sparkles size={16} className="text-cyan-400" />
              <span>Serviços Relacionados a Este Artigo</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {post.relatedServices.map((srv) => (
                <Link
                  key={srv.slug}
                  to={srv.slug}
                  className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {srv.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-[11px] font-bold text-blue-400 group-hover:text-cyan-300">
                    <span>Conhecer Serviço</span>
                    <ArrowRight size={12} />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}
