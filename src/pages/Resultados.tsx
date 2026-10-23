import React from "react";
import { Link } from "react-router-dom";
import { EnhancedSEO } from "../components/EnhancedSEO";
import { PortfolioImage } from "../components/PortfolioImage";
import projects from "../data/portfolioImages.json";
export default function Resultados() {
  return (
    <article className="reader-page wrap portfolio-index">
      <EnhancedSEO
        title="Portfólio: evidências de busca SEO, GEO e AIO | Omar SEO"
        description="Capturas reais de busca, contexto e limites de verificação dos projetos Omar SEO. Consulte também os registros que ainda aguardam comprovação original."
        canonical="/resultados"
        ogImage="https://www.omarseo.digital/og-default.jpg"
      />
      <header className="reader-header">
        <p className="eyebrow">PORTFÓLIO / EVIDÊNCIAS E CONTEXTO</p>
        <h1>Como os projetos aparecem nas buscas</h1>
        <p className="reader-lead">
          Capturas reais, consulta identificada e explicação do que cada
          registro permite observar.
        </p>
        <p>
          Este portfólio separa resultados orgânicos, resultados locais e
          respostas de IA. Fotos de sites e reconstruções de telas não são
          usadas como comprovação.
        </p>
      </header>
      <section>
        <h2>Capturas disponíveis</h2>
        <p>
          A Sangel possui duas capturas originais no acervo. Os outros 21
          registros aguardam imagens de busca verificáveis. A data das capturas
          da Sangel não está confirmada.
        </p>
        {projects
          .filter((p) => p.evidence.length)
          .map((p) => (
            <div className="portfolio-feature" key={p.id}>
              <PortfolioImage src={p.image} />
              <div>
                <h3>{p.name}</h3>
                <p>Consulta: “{p.query}”.</p>
                <p>
                  Visão Geral por IA, resultados locais e link orgânico,
                  apresentados com rótulos separados.
                </p>
                <Link className="solid-link" to={p.route}>
                  Ver as duas capturas e o contexto
                </Link>
              </div>
            </div>
          ))}
      </section>
      <aside className="reader-limits">
        <h2>Uma captura é um registro, não uma garantia</h2>
        <p>
          A presença em uma busca não demonstra posição permanente, receita ou
          resultado futuro. Sem a imagem original, o projeto permanece
          identificado como pendente e não recebe alegações de visibilidade
          comprovada.
        </p>
      </aside>
      <section>
        <h2>Todos os projetos e o estado da comprovação</h2>
        <div className="portfolio-project-list">
          {projects.map((p) => (
            <section
              key={p.id}
              className="portfolio-project-summary"
              data-project-id={p.id}
            >
              <p className="eyebrow">
                {p.evidence.length
                  ? "CAPTURAS DISPONÍVEIS"
                  : "CAPTURA ORIGINAL PENDENTE"}
              </p>
              <h3>{p.name}</h3>
              <p>{p.subject}.</p>
              <p>
                <strong>
                  {p.evidence.length ? "Consulta visível" : "Tema do registro"}:
                </strong>{" "}
                {p.query}.
              </p>
              {!p.evidence.length && <p>{p.pendingReason}</p>}
              <Link className="text-link" to={p.route}>
                Consultar o registro de {p.name} →
              </Link>
            </section>
          ))}
        </div>
      </section>
      <section className="reader-next">
        <h2>Entenda o trabalho por trás da busca</h2>
        <Link className="solid-link" to="/seo-geo-aio">
          Ler o guia de SEO, GEO e AIO
        </Link>
        <Link className="text-link" to="/contato">
          Falar com Omar
        </Link>
      </section>
    </article>
  );
}
