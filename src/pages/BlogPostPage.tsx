import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { blogPosts } from '../data/blogPosts';
import { NotFoundView } from './NotFound';
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  ArrowLeft,
  HelpCircle,
  Zap,
  BookOpen,
  List,
  MessageCircle,
} from 'lucide-react';

interface BlogPostPageProps {
  slug?: string;
  content?: string;
}

export default function BlogPostPage({ slug: propSlug, content }: BlogPostPageProps) {
  const { slug: routeSlug } = useParams<{ slug: string }>();
  const activeSlug = propSlug || routeSlug;

  const post = blogPosts.find((p) => p.slug === activeSlug);

  if (!post) {
    return <NotFoundView />;
  }

  // Load markdown content supporting both Vite (import.meta.glob) and Node SSR (fs)
  let rawMarkdown = content || '';
  try {
    // @ts-ignore
    const globFiles = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default', eager: true });
    const key = `../content/blog/${post.slug}.md`;
    if (!rawMarkdown && globFiles[key]) {
      rawMarkdown = globFiles[key] as string;
    }
  } catch (e) {
    // Not Vite environment
  }

  if (!rawMarkdown) {
    rawMarkdown = `## Resposta rápida\n\n${post.tldr}\n\n*(Conteúdo completo em breve).*`;
  }

  // Extract H2 headings for Table of Contents
  const h2Matches = rawMarkdown.match(/^##\s+(.+)$/gm);
  const headings = h2Matches
    ? h2Matches.map((h) => h.replace(/^##\s+/, '').trim())
    : [];

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Blog', item: '/blog' },
    { name: post.title, item: `/blog/${post.slug}` },
  ];

  // Related posts (same category first, then others, max 3)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => {
      if (a.category === post.category && b.category !== post.category) return -1;
      if (b.category === post.category && a.category !== post.category) return 1;
      return 0;
    })
    .slice(0, 3);

  // Schema.org BlogPosting + FAQPage
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `https://www.omarseo.digital/blog/${post.slug}#article`,
    headline: post.title,
    description: post.description,
    url: `https://www.omarseo.digital/blog/${post.slug}`,
    mainEntityOfPage: `https://www.omarseo.digital/blog/${post.slug}`,
    inLanguage: 'pt-BR',
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: 'Especialista em SEO, GEO e AIO',
      url: 'https://www.omarseo.digital/omar-skafi',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Omar SEO',
      url: 'https://www.omarseo.digital/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://img.supremasite.com.br/omar-seo-icon.png',
      },
    },
    articleSection: post.category,
    keywords: post.keywords.join(', '),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12 text-slate-200">
      <EnhancedSEO
        title={`${post.title} | Omar SEO`}
        description={post.description}
        canonical={`/blog/${post.slug}`}
        breadcrumbs={breadcrumbs}
        schema={[blogPostingSchema, faqSchema]}
      />

      {/* Back Button & Category */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors bg-cyan-950/60 border border-cyan-800/60 px-3.5 py-1.5 rounded-full"
        >
          <ArrowLeft size={14} />
          <span>Voltar para o Blog</span>
        </Link>

        <span className="px-3 py-1 rounded-full bg-blue-950/85 border border-blue-800 text-cyan-300 text-xs font-bold uppercase tracking-wider">
          {post.category}
        </span>
      </div>

      {/* Article Header */}
      <header className="space-y-6">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
          <span className="flex items-center gap-1.5 text-slate-300">
            <User size={14} className="text-cyan-400" />
            <Link to="/omar-skafi" className="text-cyan-400 hover:underline font-semibold">
              {post.author}
            </Link>
            <span className="text-slate-500">— Especialista em SEO, GEO e AIO</span>
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <Calendar size={14} className="text-blue-400" />
            <span>Publicado em {post.datePublished}</span>
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <Clock size={14} className="text-emerald-400" />
            <span>{post.readTime} min de leitura</span>
          </span>
        </div>
      </header>

      {/* TL;DR Highlighted Box (Resposta rápida) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-cyan-950/85 via-slate-950 to-blue-950/85 border border-cyan-500/50 shadow-[0_0_35px_rgba(34,211,238,0.15)] space-y-3">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider font-mono">
          <Zap size={15} />
          <span>Resposta rápida / Resumo Direto (TL;DR)</span>
        </div>
        <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-medium">
          {post.tldr}
        </p>
      </div>

      {/* Table of Contents (Sumário) */}
      {headings.length > 0 && (
        <nav className="p-6 rounded-2xl bg-[#0f1118] border border-slate-800 space-y-3 shadow-md">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
            <List size={16} />
            <span>Índice do Artigo</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {headings.map((heading, idx) => {
              const slugId = heading.toLowerCase().replace(/[^\w]+/g, '-');
              return (
                <li key={idx}>
                  <a
                    href={`#${slugId}`}
                    className="text-slate-300 hover:text-cyan-300 transition-colors flex items-center gap-1.5 truncate"
                  >
                    <span className="text-cyan-500 font-mono">0{idx + 1}.</span>
                    <span className="truncate">{heading}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      {/* Markdown Body Content */}
      <article className="prose prose-invert prose-cyan max-w-none text-slate-300 leading-relaxed space-y-6 text-base">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h2: ({ node, children, ...props }) => {
              const text = String(children);
              const slugId = text.toLowerCase().replace(/[^\w]+/g, '-');
              return (
                <h2 id={slugId} className="text-xl sm:text-2xl font-bold font-display text-white mt-10 mb-4 pt-4 border-t border-slate-800/80" {...props}>
                  {children}
                </h2>
              );
            },
            h3: ({ node, children, ...props }) => {
              const text = String(children);
              const slugId = text.toLowerCase().replace(/[^\w]+/g, '-');
              return (
                <h3 id={slugId} className="text-lg sm:text-xl font-bold font-display text-cyan-300 mt-6 mb-3" {...props}>
                  {children}
                </h3>
              );
            },
            p: ({ node, ...props }) => <p className="mb-4 text-slate-300 leading-relaxed" {...props} />,
            ul: ({ node, ...props }) => <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-300" {...props} />,
            ol: ({ node, ...props }) => <ol className="list-decimal pl-6 space-y-2 mb-4 text-slate-300" {...props} />,
            li: ({ node, ...props }) => <li className="leading-relaxed text-slate-300" {...props} />,
            strong: ({ node, ...props }) => <strong className="font-bold text-white" {...props} />,
            table: ({ node, ...props }) => (
              <div className="overflow-x-auto my-6 border border-slate-800 rounded-2xl bg-[#0a0a0f]">
                <table className="w-full text-left text-xs sm:text-sm text-slate-200 border-collapse" {...props} />
              </div>
            ),
            th: ({ node, ...props }) => <th className="bg-slate-900 px-4 py-3 font-bold text-cyan-400 border-b border-slate-800" {...props} />,
            td: ({ node, ...props }) => <td className="px-4 py-3 border-b border-slate-800/80 text-slate-300" {...props} />,
            blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-cyan-500 pl-4 my-4 italic text-slate-400 bg-slate-950/60 py-2 rounded-r-xl" {...props} />,
          }}
        >
          {rawMarkdown}
        </ReactMarkdown>
      </article>

      {/* Perguntas Frequentes (FAQ) com Accordion (<details>/<summary>) */}
      {post.faq && post.faq.length > 0 && (
        <section className="p-6 sm:p-8 rounded-3xl bg-[#0f1118] border border-slate-800 space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-4">
            <HelpCircle className="text-cyan-400" size={22} />
            <h2 className="text-xl font-bold font-display text-white">
              Perguntas frequentes (FAQ)
            </h2>
          </div>

          <div className="space-y-3">
            {post.faq.map((item, index) => (
              <details
                key={index}
                className="group p-4 rounded-2xl bg-slate-950 border border-slate-800/80 open:border-cyan-500/50 transition-all cursor-pointer"
              >
                <summary className="font-bold text-white text-sm sm:text-base flex items-center justify-between gap-4 list-none">
                  <span>{item.question}</span>
                  <span className="text-cyan-400 group-open:rotate-180 transition-transform shrink-0 font-mono text-lg">
                    ↓
                  </span>
                </summary>
                <p className="text-xs sm:text-sm text-slate-300 pt-3 mt-3 border-t border-slate-800/80 leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Author Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center gap-6">
        <img
          src="https://bio.supremamidia.com.br/imagens/gestor-de-trafego-organico-em-curitiba.png"
          alt="Omar Skafi"
          className="w-20 h-20 rounded-2xl object-cover border-2 border-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.3)] shrink-0"
        />
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-base font-bold text-white">
            Escrito por Omar Skafi
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Especialista em SEO técnico, GEO (Generative Engine Optimization) e otimização para IA (AIO) em Curitiba-PR. Ajuda empresas a conquistarem visibilidade orgânica no Google, no Bing e nas respostas de assistentes como ChatGPT, Gemini e Copilot.
          </p>
          <div className="pt-1">
            <Link to="/omar-skafi" className="text-xs font-bold text-cyan-400 hover:underline">
              Conhecer trajetória profissional completa →
            </Link>
          </div>
        </div>
      </div>

      {/* CTA: Diagnóstico Gratuito */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-950 to-cyan-950 border border-cyan-500/40 shadow-[0_0_40px_rgba(34,211,238,0.15)] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 font-mono">
            CONSULTORIA E DIAGNÓSTICO
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
            Quer aplicar SEO e GEO no seu negócio?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            Fale diretamente com Omar Skafi pelo WhatsApp e solicite um diagnóstico gratuito de presença digital.
          </p>
        </div>

        <a
          href="https://wa.me/5541992721004?text=Olá%20Omar,%20li%20o%20artigo%20e%20gostaria%20de%20solicitar%20um%20diagnóstico%20SEO/GEO%20gratuito."
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs inline-flex items-center gap-2 shrink-0 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)]"
        >
          <MessageCircle size={16} />
          <span>Falar no WhatsApp (Diagnóstico Gratuito)</span>
        </a>
      </div>

      {/* Leia também (Related Posts) */}
      {relatedPosts.length > 0 && (
        <section className="space-y-6 pt-6 border-t border-slate-800">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold font-display text-white flex items-center gap-2">
              <BookOpen size={20} className="text-cyan-400" />
              <span>Leia também</span>
            </h3>
            <Link to="/blog" className="text-xs font-bold text-cyan-400 hover:underline">
              Ver todos os artigos →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rel) => (
              <article
                key={rel.slug}
                className="p-5 rounded-2xl bg-[#0f1118] border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-[10px] font-bold uppercase tracking-wider">
                    {rel.category}
                  </span>
                  <h4 className="text-base font-bold font-display text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    <Link to={`/blog/${rel.slug}`}>{rel.title}</Link>
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {rel.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono text-[11px]">{rel.readTime} min</span>
                  <Link
                    to={`/blog/${rel.slug}`}
                    className="text-cyan-400 font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Ler</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
