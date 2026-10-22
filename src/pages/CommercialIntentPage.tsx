import React from "react";
import { Link, useLocation } from "react-router-dom";
import { EnhancedSEO } from "../components/EnhancedSEO";
import { ServiceFlow } from "../components/ServiceFlow";
import { PlainTerms } from "../components/PageFrame";
import { COMMERCIAL_INTENTS_DATA } from "../data/commercialIntents";
import { NotFoundView } from "./NotFound";
export default function CommercialIntentPage() {
  const { pathname } = useLocation();
  const data = COMMERCIAL_INTENTS_DATA[pathname.slice(1)];
  if (!data) return <NotFoundView />;
  return (
    <article className="reader-page wrap">
      <EnhancedSEO
        title={data.metaTitle}
        description={data.metaDescription}
        canonical={pathname}
        breadcrumbs={[
          { name: "Início", item: "/" },
          { name: data.h1, item: pathname },
        ]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: data.h1,
            description: data.subtitle,
            provider: { "@id": "https://www.omarseo.digital/#localbusiness" },
          },
        ]}
      />
      <header className="reader-header">
        <p className="eyebrow">ENTENDA ANTES DE CONTRATAR</p>
        <h1>{data.h1}</h1>
        <p className="reader-lead">{data.subtitle}</p>
        <a className="text-link" href="#entender">
          Veja o que isso significa para sua empresa ↓
        </a>
      </header>
      <nav className="reader-index" aria-label="Conteúdo da página">
        <a href="#entender">Entenda a proposta</a>
        <a href="#frentes">Frentes de trabalho</a>
        <a href="#duvidas">Perguntas frequentes</a>
        <Link to="/contato">Converse sobre seu projeto</Link>
      </nav>
      <section id="entender" className="reader-copy">
        <h2>O que considerar no seu negócio</h2>
        {data.contentParagraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>
      <PlainTerms />
      <ServiceFlow />
      <section id="frentes">
        <p className="eyebrow">ESCOPO A DEFINIR NO DIAGNÓSTICO</p>
        <h2>Frentes que podem fazer parte do trabalho</h2>
        <div className="reader-benefits">
          {data.keyBenefits.map((b, i) => (
            <div key={b.title}>
              <span className="section-number">0{i + 1}</span>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="reader-limits">
        <h2>Como avaliar uma proposta</h2>
        <p>
          Peça clareza sobre entregas, responsáveis e acompanhamento. Confirme o
          que será implementado no site e o que depende de sua equipe. Desconfie
          de garantias de primeiro lugar ou indicação por IA.
        </p>
        <Link className="text-link" to="/servicos/consultoria-seo">
          Conheça a consultoria de Omar Skafi →
        </Link>
      </section>
      <section id="duvidas" className="reader-faq">
        <h2>Perguntas frequentes</h2>
        {data.faqs.map((f) => (
          <details key={f.question}>
            <summary>{f.question}</summary>
            <p>{f.answer}</p>
          </details>
        ))}
      </section>
      <section className="reader-next">
        <p className="eyebrow">PRÓXIMO PASSO</p>
        <h2>Vamos entender seu cenário?</h2>
        <p>
          Compartilhe o endereço do site, seu serviço principal e a dificuldade
          que deseja resolver.
        </p>
        <a className="solid-link" href="https://wa.me/5541992721004">
          Conversar com Omar ↗
        </a>
        <Link className="text-link" to="/seo-geo-aio">
          Guia de SEO, GEO e AIO →
        </Link>
      </section>
    </article>
  );
}
