import React from "react";
import { Link } from "react-router-dom";
import { EnhancedSEO } from "./EnhancedSEO";
import { PortfolioImage } from "./PortfolioImage";
import { PlainTerms } from "./PageFrame";
import projects from "../data/portfolioImages.json";

export function PortfolioCase({ id }: { id: string }) {
  const p = projects.find((p) => p.id === id)!;
  const available = p.evidence.length > 0;
  const description = available
    ? `${p.name}: registro da consulta ${p.query}. ${p.evidence.map(e=>e.kind).join('; ')}. Consulte o contexto e os limites.`
    : `${p.name}: tema de SEO e conteúdo no portfólio Omar SEO. A captura original de busca está pendente; não há comprovação de posição ou citação por IA nesta página.`;
  return (
    <article
      className="reader-page wrap portfolio-case"
      data-evidence-status={p.evidenceStatus}
    >
      <EnhancedSEO
        title={`${p.name}: ${available ? "capturas de busca" : "registro do projeto"} | Omar SEO`}
        description={description}
        canonical={p.route}
        ogImage="https://www.omarseo.digital/og-default.jpg"
        breadcrumbs={[
          { name: "Início", item: "/" },
          { name: "Portfólio", item: "/resultados" },
          { name: p.name, item: p.route },
        ]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: `${p.name}: registro de buscas`,
            description,
            url: "https://www.omarseo.digital" + p.route,
            author: {
              "@type": "Person",
              name: "Omar Skafi",
              url: "https://www.omarseo.digital/sobre",
            },
            ...(available
              ? {
                  image: p.evidence.map(
                    (e) => "https://www.omarseo.digital" + e.src,
                  ),
                }
              : {}),
          },
        ]}
      />
      <Link className="text-link" to="/resultados">
        ← Voltar ao portfólio
      </Link>
      <header className="reader-header">
        <p className="eyebrow">PORTFÓLIO / SEO, GEO E AIO</p>
        <h1>{p.name}</h1>
        <p className="reader-lead">{p.subject}.</p>
        <p>
          <strong>
            {available
              ? "Consulta visível nas capturas"
              : "Tema de consulta do registro"}
            :
          </strong>{" "}
          “{p.query}”.
        </p>
        <p>{p.intent}</p>
      </header>
      <section aria-labelledby="evidence-heading">
        <h2 id="evidence-heading">
          {available
            ? "Capturas reais da busca"
            : "Comprovação de busca pendente"}
        </h2>
        {available ? (
          <>
            <p>
              Os arquivos abaixo foram preservados como recebidos no acervo, sem
              redesenhar os resultados. A data da captura não está confirmada.
              A consulta visível é “{p.query}”.
            </p>
            {p.evidence.map((e, i) => (
              <figure className="search-evidence" key={e.src}>
                <h3>
                  {i + 1}. {e.kind}
                </h3>
                <PortfolioImage src={e.src} />
                <figcaption>
                  <p>{e.observation}</p>
                  <a
                    className="text-link"
                    href={e.src}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abrir captura {i + 1} em tamanho original (nova aba)
                  </a>
                </figcaption>
              </figure>
            ))}
          </>
        ) : (
          <>
            <PortfolioImage src={p.image} />
            <p>
              Esta página mantém o projeto e seu tema de conteúdo no portfólio.
              Enquanto a captura original não estiver disponível e conferida,
              não atribuímos posição, presença em mapas ou citação em respostas
              de IA a este registro.
            </p>
          </>
        )}
      </section>
      {id === "22" && (
        <section>
          <h2>O negócio e a intenção de busca</h2>
          <p>
            O site da Pousada Vila D’Itália informa hospedagem em Penha, Santa
            Catarina, com piscinas externa e coberta. Essa informação ajuda a
            contextualizar a consulta indicada pelo cliente; não comprova
            presença nos resultados da busca.
          </p>
          <p>
            Fotos das piscinas, localização, acomodações e canais de consulta de
            disponibilidade são informações úteis para o viajante. Não
            apresentamos esses pontos como entregas contratadas ou resultados
            medidos.
          </p>
        </section>
      )}
      <section className="reader-fit">
        <h2>Como interpretar SEO, GEO e AIO neste registro</h2>
        <dl className="evidence-definitions">
          <dt>SEO e resultados orgânicos</dt>
          <dd>
            O link de uma página na busca deve ser identificado separadamente de
            anúncios e listas locais.
          </dd>
          <dt>SEO local</dt>
          <dd>
            Uma lista de empresas locais dentro da Pesquisa não é, por si só,
            uma captura da interface do Google Maps.
          </dd>
          <dt>GEO e AIO</dt>
          <dd>
            São termos usados para o trabalho relacionado a respostas
            generativas. Uma menção na Visão Geral por IA deve ser comprovada na
            própria resposta; não equivale a presença em todos os assistentes.
          </dd>
        </dl>
        <p>
          {available
            ? p.evidenceSummary
            : "Neste caso, os temas de SEO, GEO e AIO não são apresentados como resultados já comprovados."}
        </p>
        <p>
          Segundo a{" "}
          <a
            href="https://developers.google.com/search/docs/appearance/ai-features?hl=pt-br"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentação do Google sobre recursos de IA
          </a>
          , as práticas de SEO continuam relevantes, sem requisitos técnicos
          adicionais para essas experiências. A exibição não é garantida.
        </p>
      </section>
      <aside className="reader-limits">
        <h2>O que não se pode concluir</h2>
        <p>
          Uma captura isolada não demonstra posição permanente, crescimento de
          tráfego, vendas, reservas ou retorno financeiro. Também não prova que
          uma ação específica causou o resultado. Consulta, localização, momento
          e personalização podem mudar a experiência.
        </p>
        <p>
          {available
            ? "As notas e avaliações visíveis pertencem ao registro da tela; não são apresentadas aqui como avaliações atuais nem como depoimentos sobre a Omar SEO."
            : "Faltam capturas originais com consulta, plataforma e contexto para avaliar a presença deste projeto nas buscas."}
        </p>
      </aside>
      <section>
        <h2>Fontes e responsável pelo registro</h2>
        <p>
          Organização editorial: <Link to="/sobre">Omar Skafi</Link>, Omar SEO.
        </p>
        {p.url && (
          <p>
            <a
              className="text-link"
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {id === "21"
                ? "Consultar domínio histórico do projeto (atualmente com outra marca)"
                : "Consultar o site associado ao projeto"}{" "}
              ↗
            </a>
          </p>
        )}
        <p>
          O endereço do site identifica a referência do projeto; não funciona
          como comprovação de resultado de busca.
        </p>
      </section>
      <PlainTerms />
      <section className="reader-next">
        <h2>Converse sobre o seu projeto</h2>
        <Link className="solid-link" to="/contato">
          Falar com Omar
        </Link>
        <Link className="text-link" to="/servicos/seo-local">
          Entender o serviço de SEO local
        </Link>
      </section>
    </article>
  );
}
