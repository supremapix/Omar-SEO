import React from "react";
import { Link, useLocation } from "react-router-dom";
import { EnhancedSEO } from "../components/EnhancedSEO";
import { ServiceFlow } from "../components/ServiceFlow";
import { PlainTerms } from "../components/PageFrame";
import { getLocationData } from "../data/locations";
export default function LocationPage() {
  const { pathname } = useLocation();
  const data = getLocationData(pathname.slice(1));
  return (
    <article className="reader-page wrap">
      <EnhancedSEO
        title={`SEO em ${data.name} | Consultoria Omar SEO`}
        description={data.shortDesc}
        canonical={pathname}
        breadcrumbs={[
          { name: "Início", item: "/" },
          { name: "SEO local", item: "/seo-local" },
          { name: data.name, item: pathname },
        ]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Consultoria de SEO em ${data.name}`,
            provider: { "@id": "https://www.omarseo.digital/#localbusiness" },
            areaServed: { "@type": "AdministrativeArea", name: data.name },
          },
        ]}
      />
      <header className="reader-header">
        <p className="eyebrow">ATENDIMENTO REGIONAL / {data.regionName}</p>
        <h1>
          SEO em {data.name}
          <br />
          <em>com informações claras para seus clientes.</em>
        </h1>
        <p className="reader-lead">{data.shortDesc}</p>
        <a className="solid-link" href="https://wa.me/5541992721004">
          Conversar sobre meu negócio ↗
        </a>
      </header>
      <section className="reader-fit">
        <h2>Para negócios que atendem esta região</h2>
        <p>
          SEO local ajuda a organizar informações de serviços, contato e
          atendimento. Esta página descreve um contexto de atuação; não
          representa um escritório ou endereço adicional da Omar SEO.
        </p>
        <p>
          Antes de propor mudanças, precisamos entender onde sua empresa
          realmente atende e quais serviços oferece.
        </p>
      </section>
      <PlainTerms />
      <ServiceFlow />
      <section className="reader-copy">
        <p className="eyebrow">CONTEXTO REGIONAL</p>
        <h2>O que observar em {data.name}</h2>
        <p>{data.fullDesc}</p>
        <h3>Contexto comercial apresentado</h3>
        <p>{data.commercialProfile}</p>
      </section>
      <section>
        <h2>Exemplos de perguntas e buscas</h2>
        <p>
          Os exemplos abaixo ajudam a discutir intenção de busca. Não
          representam volume de pesquisas, posição atual ou demanda comprovada.
        </p>
        <ul className="reader-searches">
          {data.typicalSearches.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ul>
      </section>
      <section className="reader-limits">
        <h2>O que pode ser trabalhado</h2>
        <p>
          Consistência dos dados de atendimento, páginas de serviços, navegação,
          clareza do conteúdo e Perfil da Empresa no Google, conforme a
          elegibilidade do negócio. A posição no mapa e as recomendações de IA
          não são garantidas.
        </p>
        <Link className="text-link" to="/servicos/seo-local">
          Entenda o serviço de SEO local →
        </Link>
      </section>
      <section className="reader-faq">
        <h2>Dúvidas sobre SEO em {data.name}</h2>
        {data.faqs.map((f) => (
          <details key={f.question}>
            <summary>{f.question}</summary>
            <p>{f.answer}</p>
          </details>
        ))}
      </section>
      {data.nearbySlugs.length > 0 && (
        <nav className="reader-related" aria-label="Outras regiões">
          <h2>Outras regiões no site</h2>
          {data.nearbySlugs.map((slug) => (
            <Link key={slug} to={"/seo-" + slug}>
              {getLocationData("seo-" + slug).name} →
            </Link>
          ))}
        </nav>
      )}
      <section className="reader-next">
        <p className="eyebrow">PRÓXIMO PASSO</p>
        <h2>Conte onde sua empresa atende.</h2>
        <p>
          Envie o site e descreva seus serviços. O diagnóstico deve partir da
          operação real, sem criar áreas de atendimento fictícias.
        </p>
        <Link className="solid-link" to="/contato">
          Falar com Omar ↗
        </Link>
        <Link className="text-link" to="/auditoria-seo">
          Conhecer a auditoria SEO →
        </Link>
      </section>
    </article>
  );
}
