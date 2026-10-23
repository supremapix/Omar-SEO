import React from "react";
import projects from "../data/portfolioImages.json";
export function PortfolioImage(
  props: React.ImgHTMLAttributes<HTMLImageElement>,
) {
  const raw =
    typeof props.src === "string"
      ? props.src.replace("https://www.omarseo.digital", "").split("#")[0]
      : "";
  const project = projects.find(
    (p) => p.images.includes(raw) || p.image === raw,
  );
  if (!project) return <img {...props} />;
  const evidence =
    project.evidence.find((e) => e.src === raw) || project.evidence[0];
  if (!evidence)
    return (
      <span className="portfolio-pending">
        <strong>{project.name}</strong>
        <span>Captura original de busca pendente</span>
        <span>{project.pendingReason}</span>
      </span>
    );
  return (
    <span className="portfolio-visual">
      <img
        src={evidence.src}
        width={evidence.width}
        height={evidence.height}
        loading={props.loading || "lazy"}
        decoding="async"
        alt={evidence.alt}
      />
      <span className="portfolio-caption">
        <strong>{project.name}</strong>
        <span>{evidence.kind}</span>
        <span>Consulta visível: “{evidence.query}”.</span>
        <span>
          Captura do acervo. Data não confirmada; não representa a posição
          atual.
        </span>
      </span>
    </span>
  );
}
