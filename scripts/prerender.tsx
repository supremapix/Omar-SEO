import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { getAllRoutes } from '../src/config/routes';
import { getAllLocationSlugs, getLocationData } from '../src/data/locations';
import { COMMERCIAL_INTENTS_DATA } from '../src/data/commercialIntents';

import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';

// Pages
import Home from '../src/pages/Home';
import ServicesIndex from '../src/pages/ServicesIndex';
import ServicePage from '../src/pages/ServicePage';
import Sobre from '../src/pages/Sobre';
import Metodo from '../src/pages/Metodo';
import Blog from '../src/pages/Blog';
import BlogPostPage from '../src/pages/BlogPostPage';
import SeoGeoAio from '../src/pages/SeoGeoAio';
import SeoCompleto from '../src/pages/SeoCompleto';
import SeoLocal from '../src/pages/SeoLocal';
import GoogleMaps from '../src/pages/GoogleMaps';
import GeoIa from '../src/pages/GeoIa';
import SeoTecnico from '../src/pages/SeoTecnico';
import Resultados from '../src/pages/Resultados';
import CaseAdvogadosPlanosSaude from '../src/pages/CaseAdvogadosPlanosSaude';
import CaseShopcellCelulares from '../src/pages/CaseShopcellCelulares';
import CaseCarplusAiOverview from '../src/pages/CaseCarplusAiOverview';
import CaseEcoservyCortePoda from '../src/pages/CaseEcoservyCortePoda';
import CaseComfortDivisorasAiOverview from '../src/pages/CaseComfortDivisorasAiOverview';
import CaseKyDrywallAiOverview from '../src/pages/CaseKyDrywallAiOverview';
import CaseAlevinosCuritibaSeo from '../src/pages/CaseAlevinosCuritibaSeo';
import CaseOmegaRevestimentosSeoGeo from '../src/pages/CaseOmegaRevestimentosSeoGeo';
import CaseCasasPinheiraoAiSeo from '../src/pages/CaseCasasPinheiraoAiSeo';
import CaseMotofreteCentroSaoPauloSeo from '../src/pages/CaseMotofreteCentroSaoPauloSeo';
import CaseRvmPersianasFlorianopolisSeo from '../src/pages/CaseRvmPersianasFlorianopolisSeo';
import CaseConsultoraLooviSeo from '../src/pages/CaseConsultoraLooviSeo';
import CasePizzoGerenciamentoObrasSeo from '../src/pages/CasePizzoGerenciamentoObrasSeo';
import CasePvsDecoreAiSeo from '../src/pages/CasePvsDecoreAiSeo';
import CaseAlumimecEstruturasMetalicasSeo from '../src/pages/CaseAlumimecEstruturasMetalicasSeo';
import CaseABaratonaCacambasAiSeo from '../src/pages/CaseABaratonaCacambasAiSeo';
import CaseClientesTelhadosBarreirinhaAiSeo from '../src/pages/CaseClientesTelhadosBarreirinhaAiSeo';
import CaseLavanderiaInovataSeoOsasco from '../src/pages/CaseLavanderiaInovataSeoOsasco';
import CaseInstalacaoFrigorificaNavegantes from '../src/pages/CaseInstalacaoFrigorificaNavegantes';
import CasePersianasLagoaConceicaoSeo from '../src/pages/CasePersianasLagoaConceicaoSeo';
import SobreOmar from '../src/pages/SobreOmar';
import AuditoriaSeo from '../src/pages/AuditoriaSeo';
import Contato from '../src/pages/Contato';
import CommercialIntentPage from '../src/pages/CommercialIntentPage';
import LocationPage from '../src/pages/LocationPage';
import { NotFoundView } from '../src/pages/NotFound';

const DOMAIN = 'https://www.omarseo.digital';

function getPageComponent(rawPath: string, locationSlugs: string[]): React.ReactElement {
  const cleanPath = rawPath === '/' ? '' : rawPath.replace(/^\//, '');

  if (rawPath === '/') return <Home />;
  if (rawPath === '/servicos') return <ServicesIndex />;
  if (cleanPath.startsWith('servicos/')) {
    const slug = cleanPath.replace(/^servicos\//, '');
    return <ServicePage slug={slug} />;
  }
  if (rawPath === '/sobre') return <Sobre />;
  if (rawPath === '/metodo') return <Metodo />;
  if (rawPath === '/blog') return <Blog />;
  if (cleanPath.startsWith('blog/')) {
    const slug = cleanPath.replace(/^blog\//, '');
    return <BlogPostPage slug={slug} />;
  }
  if (rawPath === '/seo-geo-aio' || rawPath === '/como-ganhar-mercado') return <SeoGeoAio />;
  if (rawPath === '/seo') return <SeoCompleto />;
  if (rawPath === '/seo-local') return <SeoLocal />;
  if (rawPath === '/google-maps') return <GoogleMaps />;
  if (rawPath === '/geo-ia') return <GeoIa />;
  if (rawPath === '/seo-tecnico') return <SeoTecnico />;
  if (rawPath === '/resultados') return <Resultados />;
  if (rawPath === '/resultados/seo-advogados-planos-de-saude') return <CaseAdvogadosPlanosSaude />;
  if (rawPath === '/resultados/seo-celulares-curitiba-shopcell') return <CaseShopcellCelulares />;
  if (rawPath === '/resultados/carplus-google-ai-overview-pneus-curitiba') return <CaseCarplusAiOverview />;
  if (rawPath === '/resultados/seo-local-ecoservy-corte-e-poda-curitiba') return <CaseEcoservyCortePoda />;
  if (rawPath === '/resultados/comfort-divisorias-google-ia-curitiba') return <CaseComfortDivisorasAiOverview />;
  if (rawPath === '/resultados/ky-drywall-google-ia-curitiba') return <CaseKyDrywallAiOverview />;
  if (rawPath === '/resultados/seo-local-e-organico-alevinos-curitiba') return <CaseAlevinosCuritibaSeo />;
  if (rawPath === '/resultados/omega-revestimentos-acm-seo-geo-curitiba') return <CaseOmegaRevestimentosSeoGeo />;
  if (rawPath === '/resultados/casas-pinheirao-google-ia-seo') return <CaseCasasPinheiraoAiSeo />;
  if (rawPath === '/resultados/motofrete-centro-sao-paulo-seo') return <CaseMotofreteCentroSaoPauloSeo />;
  if (rawPath === '/resultados/rvm-persianas-florianopolis-seo') return <CaseRvmPersianasFlorianopolisSeo />;
  if (rawPath === '/resultados/consultora-loovi-google-seo') return <CaseConsultoraLooviSeo />;
  if (rawPath === '/resultados/pizzo-gerenciamento-obras-balneario-camboriu') return <CasePizzoGerenciamentoObrasSeo />;
  if (rawPath === '/resultados/pvs-decore-pisos-vinilicos-sao-jose-dos-pinhais') return <CasePvsDecoreAiSeo />;
  if (rawPath === '/resultados/alumimec-estruturas-metalicas-sao-jose-dos-pinhais') return <CaseAlumimecEstruturasMetalicasSeo />;
  if (rawPath === '/resultados/a-baratona-cacambas-google-ia-curitiba') return <CaseABaratonaCacambasAiSeo />;
  if (rawPath === '/resultados/clientes-omar-seo-telhados-barreirinha-google-ia') return <CaseClientesTelhadosBarreirinhaAiSeo />;
  if (rawPath === '/resultados/lavanderia-inovata-seo-google-maps-osasco') return <CaseLavanderiaInovataSeoOsasco />;
  if (rawPath === '/resultados/seo-instalacao-frigorifica-navegantes' || rawPath === '/portfolio/seo-instalacao-frigorifica-navegantes') return <CaseInstalacaoFrigorificaNavegantes />;
  if (rawPath === '/resultados/seo-aio-persianas-lagoa-da-conceicao-florianopolis' || rawPath === '/portfolio/seo-aio-persianas-lagoa-da-conceicao-florianopolis') return <CasePersianasLagoaConceicaoSeo />;
  if (rawPath === '/omar-skafi') return <SobreOmar />;
  if (rawPath === '/auditoria-seo') return <AuditoriaSeo />;
  if (rawPath === '/contato') return <Contato />;

  if (COMMERCIAL_INTENTS_DATA[cleanPath]) {
    return <CommercialIntentPage />;
  }

  if (cleanPath.startsWith('seo-')) {
    const locSlug = cleanPath.replace(/^seo-/, '');
    if (locationSlugs.includes(locSlug)) {
      return <LocationPage />;
    }
  }

  return <NotFoundView />;
}

async function prerender() {
  const distDir = path.resolve(process.cwd(), 'dist');
  const templatePath = path.join(distDir, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.error(`[Prerender] Error: Template ${templatePath} does not exist. Run vite build first.`);
    return;
  }

  const baseHtmlTemplate = fs.readFileSync(templatePath, 'utf-8');
  const locationSlugs = getAllLocationSlugs();
  const routes = getAllRoutes(locationSlugs);

  console.log(`[Prerender] Pre-rendering ${routes.length} static HTML pages with full SSR body...`);

  let preRenderedCount = 0;

  for (const route of routes) {
    const rawPath = route.path;
    const cleanPath = rawPath === '/' ? '' : rawPath.replace(/^\//, '');
    const canonicalUrl = `${DOMAIN}${rawPath === '/' ? '' : rawPath}`;

    let pageTitle = route.title;
    let pageDesc = route.description;
    let placeName = 'Curitiba';
    let lat = -25.4411;
    let lng = -49.2731;
    let schemas: Record<string, unknown>[] = [];

    const isLocationRoute = (route.type === 'location' || route.type === 'state') && cleanPath.startsWith('seo-') && locationSlugs.includes(cleanPath.replace(/^seo-/, ''));

    if (isLocationRoute) {
      const locData = getLocationData(cleanPath);
      pageTitle = `SEO em ${locData.name} | Especialista em Google Maps e Busca - Omar SEO`;
      pageDesc = locData.shortDesc;
      placeName = locData.name;
      lat = locData.lat;
      lng = locData.lng;

      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `SEO e Visibilidade Digital em ${locData.name}`,
        description: locData.shortDesc,
        provider: { '@type': 'ProfessionalService', name: 'Omar SEO', url: DOMAIN },
        areaServed: { '@type': 'AdministrativeArea', name: `${locData.name}, Curitiba - PR` },
      });
    } else if (COMMERCIAL_INTENTS_DATA[cleanPath]) {
      const commData = COMMERCIAL_INTENTS_DATA[cleanPath];
      pageTitle = commData.metaTitle;
      pageDesc = commData.metaDescription;

      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: commData.h1,
        description: commData.subtitle,
        provider: { '@type': 'ProfessionalService', name: 'Omar SEO', url: DOMAIN },
      });
    }

    // Default LocalBusiness schema
    schemas.push({
      '@context': 'https://schema.org',
      '@type': ['ProfessionalService', 'LocalBusiness'],
      name: 'Omar SEO — Omar Skafi | Especialista em SEO, GEO e Visibilidade Digital',
      url: DOMAIN,
      telephone: '+5541987001004',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Av. Sete de Setembro, 2775 - 9º andar',
        addressLocality: 'Curitiba',
        addressRegion: 'PR',
        postalCode: '80230-010',
        addressCountry: 'BR',
      },
      geo: { '@type': 'GeoCoordinates', latitude: lat, longitude: lng },
    });

    const schemaTags = schemas
      .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
      .join('\n    ');

    const metaHead = `
    <title>${escapeXml(pageTitle)}</title>
    <meta name="description" content="${escapeXml(pageDesc)}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="geo.region" content="BR-PR" />
    <meta name="geo.placename" content="${escapeXml(placeName)}, Curitiba - PR" />
    <meta name="geo.position" content="${lat};${lng}" />
    <meta name="ICBM" content="${lat}, ${lng}" />
    <meta property="og:title" content="${escapeXml(pageTitle)}" />
    <meta property="og:description" content="${escapeXml(pageDesc)}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:site_name" content="Omar SEO" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeXml(pageTitle)}" />
    <meta name="twitter:description" content="${escapeXml(pageDesc)}" />
    ${schemaTags}
  `;

    // Render React Component to String
    const pageComponent = getPageComponent(rawPath, locationSlugs);
    const bodyContentHtml = ReactDOMServer.renderToString(
      <HelmetProvider>
        <MemoryRouter initialEntries={[rawPath]}>
          <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-slate-100">
            <Header />
            <main className="flex-grow">
              {pageComponent}
            </main>
            <Footer />
          </div>
        </MemoryRouter>
      </HelmetProvider>
    );

    let pageHtml = baseHtmlTemplate;

    // Clean placeholders
    pageHtml = pageHtml
      .replace(/<title>.*?<\/title>/gi, '')
      .replace(/<meta name="description".*?\/>/gi, '')
      .replace(/<link rel="canonical".*?\/>/gi, '');

    // Insert Head tags
    pageHtml = pageHtml.replace('</head>', `${metaHead}\n  </head>`);

    // Insert Body content into #root
    pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${bodyContentHtml}</div>`);

    // Output target path
    let targetFilePath = templatePath;
    if (rawPath !== '/') {
      const targetSubDir = path.join(distDir, cleanPath);
      if (!fs.existsSync(targetSubDir)) {
        fs.mkdirSync(targetSubDir, { recursive: true });
      }
      targetFilePath = path.join(targetSubDir, 'index.html');
    }

    fs.writeFileSync(targetFilePath, pageHtml, 'utf-8');
    preRenderedCount++;
  }

  // Also render a 404.html for static servers
  const notFoundHtml = ReactDOMServer.renderToString(
    <HelmetProvider>
      <MemoryRouter initialEntries={['/404']}>
        <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-slate-100">
          <Header />
          <main className="flex-grow">
            <NotFoundView />
          </main>
          <Footer />
        </div>
      </MemoryRouter>
    </HelmetProvider>
  );

  let notFoundPageHtml = baseHtmlTemplate
    .replace(/<title>.*?<\/title>/gi, '<title>404 — Página Não Encontrada | Omar SEO</title>')
    .replace(/<meta name="description".*?\/>/gi, '<meta name="description" content="A página solicitada não foi encontrada no servidor." />')
    .replace('<div id="root"></div>', `<div id="root">${notFoundHtml}</div>`);

  fs.writeFileSync(path.join(distDir, '404.html'), notFoundPageHtml, 'utf-8');

  // Copy public static files to dist
  const filesToCopy = ['robots.txt', 'llms.txt', 'llms-full.txt', '_redirects', 'manifest.webmanifest'];
  const publicDir = path.resolve(process.cwd(), 'public');

  for (const f of filesToCopy) {
    const src = path.join(publicDir, f);
    const dest = path.join(distDir, f);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
    }
  }

  console.log(`[Prerender] Successfully pre-rendered ${preRenderedCount} static HTML pages in dist/!`);
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

prerender().catch((err) => {
  console.error('[Prerender] Error during static pre-rendering:', err);
});
