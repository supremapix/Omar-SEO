import CaseVilaDItalia from '../src/pages/CaseVilaDItalia';
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { getAllRoutes } from "../src/config/routes";
import { getAllLocationSlugs, getLocationData } from "../src/data/locations";
import { COMMERCIAL_INTENTS_DATA } from "../src/data/commercialIntents";

import { PageFrame } from '../src/components/PageFrame';
import { FloatingActions } from '../src/components/FloatingActions';
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";

// Pages
import CaseSangelPurificadores from "../src/pages/CaseSangelPurificadores";
import Home from "../src/pages/Home";
import ServicesIndex from "../src/pages/ServicesIndex";
import ServicePage from "../src/pages/ServicePage";
import Sobre from "../src/pages/Sobre";
import Metodo from "../src/pages/Metodo";
import Blog from "../src/pages/Blog";
import BlogPostPage from "../src/pages/BlogPostPage";
import SeoGeoAio from "../src/pages/SeoGeoAio";
import SeoCompleto from "../src/pages/SeoCompleto";
import SeoLocal from "../src/pages/SeoLocal";
import GoogleMaps from "../src/pages/GoogleMaps";
import GeoIa from "../src/pages/GeoIa";
import SeoTecnico from "../src/pages/SeoTecnico";
import Resultados from "../src/pages/Resultados";
import CaseAdvogadosPlanosSaude from "../src/pages/CaseAdvogadosPlanosSaude";
import CaseShopcellCelulares from "../src/pages/CaseShopcellCelulares";
import CaseCarplusAiOverview from "../src/pages/CaseCarplusAiOverview";
import CaseEcoservyCortePoda from "../src/pages/CaseEcoservyCortePoda";
import CaseComfortDivisorasAiOverview from "../src/pages/CaseComfortDivisorasAiOverview";
import CaseKyDrywallAiOverview from "../src/pages/CaseKyDrywallAiOverview";
import CaseAlevinosCuritibaSeo from "../src/pages/CaseAlevinosCuritibaSeo";
import CaseOmegaRevestimentosSeoGeo from "../src/pages/CaseOmegaRevestimentosSeoGeo";
import CaseCasasPinheiraoAiSeo from "../src/pages/CaseCasasPinheiraoAiSeo";
import CaseMotofreteCentroSaoPauloSeo from "../src/pages/CaseMotofreteCentroSaoPauloSeo";
import CaseRvmPersianasFlorianopolisSeo from "../src/pages/CaseRvmPersianasFlorianopolisSeo";
import CaseConsultoraLooviSeo from "../src/pages/CaseConsultoraLooviSeo";
import CasePizzoGerenciamentoObrasSeo from "../src/pages/CasePizzoGerenciamentoObrasSeo";
import CasePvsDecoreAiSeo from "../src/pages/CasePvsDecoreAiSeo";
import CaseAlumimecEstruturasMetalicasSeo from "../src/pages/CaseAlumimecEstruturasMetalicasSeo";
import CaseABaratonaCacambasAiSeo from "../src/pages/CaseABaratonaCacambasAiSeo";
import CaseClientesTelhadosBarreirinhaAiSeo from "../src/pages/CaseClientesTelhadosBarreirinhaAiSeo";
import CaseLavanderiaInovataSeoOsasco from "../src/pages/CaseLavanderiaInovataSeoOsasco";
import CaseInstalacaoFrigorificaNavegantes from "../src/pages/CaseInstalacaoFrigorificaNavegantes";
import CasePersianasLagoaConceicaoSeo from "../src/pages/CasePersianasLagoaConceicaoSeo";
import SobreOmar from "../src/pages/SobreOmar";
import AuditoriaSeo from "../src/pages/AuditoriaSeo";
import Contato from "../src/pages/Contato";
import CommercialIntentPage from "../src/pages/CommercialIntentPage";
import LocationPage from "../src/pages/LocationPage";
import { NotFoundView } from "../src/pages/NotFound";

const DOMAIN = "https://www.omarseo.digital";

function getPageComponent(
  rawPath: string,
  locationSlugs: string[],
): React.ReactElement {
  const cleanPath = rawPath === "/" ? "" : rawPath.replace(/^\//, "");

  if (rawPath === "/resultados/pousada-vila-ditalia-penha-sc") return <CaseVilaDItalia />;
  if (rawPath === "/") return <Home />;
  if (rawPath === "/servicos") return <ServicesIndex />;
  if (cleanPath.startsWith("servicos/")) {
    const slug = cleanPath.replace(/^servicos\//, "");
    return <ServicePage slug={slug} />;
  }
  if (rawPath === "/sobre") return <Sobre />;
  if (rawPath === "/metodo") return <Metodo />;
  if (rawPath === "/blog") return <Blog />;
  if (cleanPath.startsWith("blog/")) {
    const slug = cleanPath.replace(/^blog\//, "");
    return (
      <BlogPostPage
        slug={slug}
        content={fs.readFileSync(
          path.resolve("src/content/blog", `${slug}.md`),
          "utf8",
        )}
      />
    );
  }
  if (rawPath === "/seo-geo-aio" || rawPath === "/como-ganhar-mercado")
    return <SeoGeoAio />;
  if (rawPath === "/seo") return <SeoCompleto />;
  if (rawPath === "/seo-local") return <SeoLocal />;
  if (rawPath === "/google-maps") return <GoogleMaps />;
  if (rawPath === "/geo-ia") return <GeoIa />;
  if (rawPath === "/seo-tecnico") return <SeoTecnico />;
  if (rawPath === "/resultados/sangel-purificadores-bebedouros-curitiba")
    return <CaseSangelPurificadores />;
  if (rawPath === "/resultados") return <Resultados />;
  if (rawPath === "/resultados/seo-advogados-planos-de-saude")
    return <CaseAdvogadosPlanosSaude />;
  if (rawPath === "/resultados/seo-celulares-curitiba-shopcell")
    return <CaseShopcellCelulares />;
  if (rawPath === "/resultados/carplus-google-ai-overview-pneus-curitiba")
    return <CaseCarplusAiOverview />;
  if (rawPath === "/resultados/seo-local-ecoservy-corte-e-poda-curitiba")
    return <CaseEcoservyCortePoda />;
  if (rawPath === "/resultados/comfort-divisorias-google-ia-curitiba")
    return <CaseComfortDivisorasAiOverview />;
  if (rawPath === "/resultados/ky-drywall-google-ia-curitiba")
    return <CaseKyDrywallAiOverview />;
  if (rawPath === "/resultados/seo-local-e-organico-alevinos-curitiba")
    return <CaseAlevinosCuritibaSeo />;
  if (rawPath === "/resultados/omega-revestimentos-acm-seo-geo-curitiba")
    return <CaseOmegaRevestimentosSeoGeo />;
  if (rawPath === "/resultados/casas-pinheirao-google-ia-seo")
    return <CaseCasasPinheiraoAiSeo />;
  if (rawPath === "/resultados/motofrete-centro-sao-paulo-seo")
    return <CaseMotofreteCentroSaoPauloSeo />;
  if (rawPath === "/resultados/rvm-persianas-florianopolis-seo")
    return <CaseRvmPersianasFlorianopolisSeo />;
  if (rawPath === "/resultados/consultora-loovi-google-seo")
    return <CaseConsultoraLooviSeo />;
  if (rawPath === "/resultados/pizzo-gerenciamento-obras-balneario-camboriu")
    return <CasePizzoGerenciamentoObrasSeo />;
  if (rawPath === "/resultados/pvs-decore-pisos-vinilicos-sao-jose-dos-pinhais")
    return <CasePvsDecoreAiSeo />;
  if (
    rawPath === "/resultados/alumimec-estruturas-metalicas-sao-jose-dos-pinhais"
  )
    return <CaseAlumimecEstruturasMetalicasSeo />;
  if (rawPath === "/resultados/a-baratona-cacambas-google-ia-curitiba")
    return <CaseABaratonaCacambasAiSeo />;
  if (
    rawPath === "/resultados/clientes-omar-seo-telhados-barreirinha-google-ia"
  )
    return <CaseClientesTelhadosBarreirinhaAiSeo />;
  if (rawPath === "/resultados/lavanderia-inovata-seo-google-maps-osasco")
    return <CaseLavanderiaInovataSeoOsasco />;
  if (
    rawPath === "/resultados/seo-instalacao-frigorifica-navegantes" ||
    rawPath === "/portfolio/seo-instalacao-frigorifica-navegantes"
  )
    return <CaseInstalacaoFrigorificaNavegantes />;
  if (
    rawPath ===
      "/resultados/seo-aio-persianas-lagoa-da-conceicao-florianopolis" ||
    rawPath === "/portfolio/seo-aio-persianas-lagoa-da-conceicao-florianopolis"
  )
    return <CasePersianasLagoaConceicaoSeo />;
  if (rawPath === "/omar-skafi") return <SobreOmar />;
  if (rawPath === "/auditoria-seo") return <AuditoriaSeo />;
  if (rawPath === "/contato") return <Contato />;

  if (COMMERCIAL_INTENTS_DATA[cleanPath]) {
    return <CommercialIntentPage />;
  }

  if (cleanPath.startsWith("seo-")) {
    const locSlug = cleanPath.replace(/^seo-/, "");
    if (locationSlugs.includes(locSlug)) {
      return <LocationPage />;
    }
  }

  return <NotFoundView />;
}

async function prerender() {
  const distDir = path.resolve("dist");
  const template = fs
    .readFileSync(path.join(distDir, "index.html"), "utf8")
    .replace(/<title>[\s\S]*?<\/title>/gi, "")
    .replace(
      /<meta name="(?:description|google-site-verification|msvalidate.01)"[^>]*>/gi,
      "",
    )
    .replace(/<link rel="canonical"[^>]*>/gi, "");
  const slugs = getAllLocationSlugs();
  const routes = getAllRoutes(slugs);
  for (const route of [...routes, { path: "/404" }]) {
    const context = {};
    const component =
      route.path === "/404" ? (
        <NotFoundView />
      ) : (
        getPageComponent(route.path, slugs)
      );
    let body = ReactDOMServer.renderToString(
      <HelmetProvider context={context}>
        <MemoryRouter initialEntries={[route.path]}>
          <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-slate-100">
            <Header />
            <main id="main-content" tabIndex={-1} className="flex-grow">
              <PageFrame>{component}</PageFrame>
            </main>
            <Footer /><FloatingActions />
          </div>
        </MemoryRouter>
      </HelmetProvider>,
    );
    // React 19 hoists Helmet metadata into the rendered string, not context.helmet.
    const metadata =
      /<title[^>]*>[\s\S]*?<\/title>|<meta\s[^>]*>|<link\s[^>]*>|<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi;
    const head = (body.match(metadata) || []).map(tag => tag.replace(/^<(\w+)/, '<$1 data-prerender="true"')).join("");
    body = body.replace(metadata, "");
    const html = template
      .replace("</head>", head + "</head>")
      .replace('<div id="root"></div>', '<div id="root">' + body + "</div>");
    const dest =
      route.path === "/404"
        ? path.join(distDir, "404.html")
        : path.join(distDir, route.path.slice(1), "index.html");
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, html);
  }
  console.log(
    "[Prerender] " +
      routes.length +
      " routes and 404, including component metadata and full article content.",
  );
}
prerender().catch((err) => {
  console.error(err);
  process.exit(1);
});
