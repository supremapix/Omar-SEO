import React from "react";
import projects from "../data/portfolioImages.json";
export function PortfolioImage(
  props: React.ImgHTMLAttributes<HTMLImageElement>,
) {
  const raw =
    typeof props.src === "string"
      ? props.src.replace("https://www.omarseo.digital", "").split("#")[0]
      : "";
  const project = (projects as Array<(typeof projects)[number] & {captureDate?:string}>).find(
    (p) => p.images.includes(raw) || p.image === raw,
  );
  if (!project) return <img {...props} />;
  return (
    <span className="portfolio-visual">
      <img
        src={project.image}
        srcSet={`${project.image.replace(".webp", "-600.webp")} 600w, ${project.image} 1200w`}
        sizes="(max-width:700px) 100vw, 900px"
        width="1200"
        height="900"
        loading={props.loading || "lazy"}
        decoding="async"
        alt={`${project.name}: ${project.captured ? "captura atual do site" : "representação editorial do projeto"}. ${project.subject}.`}
      />
      <span className="portfolio-caption">
        <strong>{project.name}</strong>
        <span>Tema do relato: {project.subject}.</span>
        <span>{project.sourceNote}</span>
        {project.captured && <span>Fonte: {project.url} — {project.captureDate || "22/10/2026"}.</span>}
      </span>
    </span>
  );
}
