import React from "react";
import { useLocation, Link } from "react-router-dom";
export function PageFrame({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  return (
    <div
      data-design="editorial-v2"
      className={
        pathname === "/" ? "editorial-page" : "editorial-page editorial-detail"
      }
    >
      {children}
    </div>
  );
}
export function PlainTerms() {
  return (
    <details className="plain-terms">
      <summary>SEO, GEO, AIO e LLM: o que essas siglas significam?</summary>
      <dl>
        <dt>SEO</dt>
        <dd>
          Melhorias no site para ajudar pessoas e buscadores a encontrar e
          compreender seu conteúdo.
        </dd>
        <dt>GEO e AIO</dt>
        <dd>
          Termos usados no mercado para otimização relacionada à busca e a
          respostas com inteligência artificial. Não são certificações nem
          garantia de indicação.
        </dd>
        <dt>LLM</dt>
        <dd>
          Modelo de linguagem usado em assistentes de IA. Uma resposta pode
          variar conforme a pergunta e as fontes disponíveis.
        </dd>
      </dl>
      <Link to="/seo-geo-aio">Entenda os fundamentos e os limites →</Link>
    </details>
  );
}
