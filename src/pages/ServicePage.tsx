import React from "react";
import { Link, useParams } from "react-router-dom";
import { EnhancedSEO } from "../components/EnhancedSEO";
import { ServiceFlow } from "../components/ServiceFlow";
import { PlainTerms } from "../components/PageFrame";
import { SERVICES_DATA } from "../data/servicesData";
import { NotFoundView } from "./NotFound";
const fit: Record<string, string> = {
  "consultoria-seo":
    "Para empresas que precisam organizar prioridades e decidir como investir no site.",
  "auditoria-seo":
    "Para quem precisa entender problemas de acesso, indexação, conteúdo ou experiência antes de implementar mudanças.",
  "setup-seo-tecnico":
    "Para sites que precisam corrigir a base técnica e verificar como as páginas chegam aos buscadores.",
  "seo-local":
    "Para negócios que atendem uma região definida e precisam explicar serviços, localização e formas de contato.",
  "seo-ecommerce":
    "Para lojas que precisam organizar categorias, produtos e a experiência de quem está comparando opções.",
  "link-building":
    "Para empresas que querem construir relações e referências editoriais legítimas, sem compra de links para manipular ranking.",
  "cro-otimizacao-conversao":
    "Para quem recebe visitas, mas precisa investigar dificuldades para entender a oferta ou entrar em contato.",
  "geo-otimizacao-ia":
    "Para empresas que precisam tornar suas informações claras e verificáveis na busca com inteligência artificial.",
};
export default function ServicePage({ slug }: { slug?: string }) {
  const params = useParams();
  const service = SERVICES_DATA[slug || params.slug || ""];
  if (!service) return <NotFoundView />;
  const canonical = "/servicos/" + service.slug;
  return (
    <article className="reader-page wrap">
      <EnhancedSEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={canonical}
        breadcrumbs={[
          { name: "Início", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: service.name, item: canonical },
        ]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.omarseo.digital" + canonical + "#service",
            name: service.name,
            description: service.heroSubtitle,
            provider: { "@id": "https://www.omarseo.digital/#localbusiness" },
          },
        ]}
      />
      <header className="reader-header">
        <p className="eyebrow">SERVIÇOS / OMAR SEO</p>
        <h1>
          {service.name}
          <br />
          <em>com um plano claro para sua empresa.</em>
        </h1>
        <p className="reader-lead">{service.heroSubtitle}</p>
        <div className="editorial-actions">
          <a className="solid-link" href="https://wa.me/5541992721004">
            Conversar sobre este serviço ↗
          </a>
          <a className="text-link" href="#entregas">
            Entender as entregas ↓
          </a>
        </div>
      </header>
      <section className="reader-fit">
        <h2>Para quem faz sentido</h2>
        <p>{fit[service.slug]}</p>
        <p>
          O escopo, os responsáveis pela implementação e os critérios de
          acompanhamento são definidos conforme o diagnóstico.
        </p>
      </section>
      <PlainTerms />
      <ServiceFlow />
      <nav className="reader-index" aria-label="Conteúdo do serviço">
        <strong>Nesta página</strong>
        <a href="#entregas">O que pode ser trabalhado</a>
        <a href="#processo">Como funciona</a>
        <a href="#faq">Dúvidas antes de contratar</a>
      </nav>
      <div id="entregas" className="reader-sections">
        <p className="eyebrow">ENTREGAS E ESCOPO</p>
        {service.sections.map((section, i) => (
          <section key={section.title} id={"secao-" + (i + 1)}>
            <div className="section-number">0{i + 1}</div>
            <div>
              <h2>{section.title}</h2>
              {section.subsections.map((sub) => (
                <div className="reader-subsection" key={sub.subtitle}>
                  <h3>{sub.subtitle}</h3>
                  <p>{sub.text}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      <section id="processo">
        <p className="eyebrow">DO PLANO À EXECUÇÃO</p>
        <h2>Como o trabalho avança</h2>
        <ol className="reader-process">
          {service.processSteps.map((step, i) => (
            <li key={step.title}>
              <span>0{i + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="reader-limits">
        <h2>O que um projeto pode e não pode prometer</h2>
        <p>
          Uma proposta deve especificar entregas, responsabilidades e
          acompanhamento. Ranking, prazo de indexação, vendas e citações por
          inteligência artificial dependem de fatores que a consultoria não
          controla.
        </p>
        <Link className="text-link" to="/resultados">
          Consulte os relatos e os limites do acervo →
        </Link>
      </section>
      <section id="faq" className="reader-faq">
        <h2>Dúvidas antes de contratar</h2>
        {service.faqs.map((f) => (
          <details key={f.question}>
            <summary>{f.question}</summary>
            <p>{f.answer}</p>
          </details>
        ))}
      </section>
      <section className="reader-next">
        <p className="eyebrow">PRÓXIMO PASSO</p>
        <h2>Conte o que seu site precisa resolver.</h2>
        <p>
          Envie o endereço do site, principais serviços e região de atendimento.
          Esses dados ajudam a começar uma conversa objetiva.
        </p>
        <Link className="solid-link" to="/contato">
          Falar com Omar ↗
        </Link>
        <Link className="text-link" to="/seo-geo-aio">
          Entender SEO e busca com IA →
        </Link>
      </section>
    </article>
  );
}
