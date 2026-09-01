import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { COMMERCIAL_INTENTS_DATA } from './data/commercialIntents';
import { getAllLocationSlugs } from './data/locations';
import { SERVICES_DATA } from './data/servicesData';
import { BLOG_POSTS } from './data/blogData';

// Lazy Loaded Main Pages
const Home = lazy(() => import('./pages/Home'));
const SeoCompleto = lazy(() => import('./pages/SeoCompleto'));
const SeoLocal = lazy(() => import('./pages/SeoLocal'));
const GoogleMaps = lazy(() => import('./pages/GoogleMaps'));
const GeoIa = lazy(() => import('./pages/GeoIa'));
const SeoTecnico = lazy(() => import('./pages/SeoTecnico'));
const Resultados = lazy(() => import('./pages/Resultados'));
const CaseAdvogadosPlanosSaude = lazy(() => import('./pages/CaseAdvogadosPlanosSaude'));
const CaseShopcellCelulares = lazy(() => import('./pages/CaseShopcellCelulares'));
const CaseCarplusAiOverview = lazy(() => import('./pages/CaseCarplusAiOverview'));
const CaseEcoservyCortePoda = lazy(() => import('./pages/CaseEcoservyCortePoda'));
const CaseComfortDivisorasAiOverview = lazy(() => import('./pages/CaseComfortDivisorasAiOverview'));
const CaseKyDrywallAiOverview = lazy(() => import('./pages/CaseKyDrywallAiOverview'));
const CaseAlevinosCuritibaSeo = lazy(() => import('./pages/CaseAlevinosCuritibaSeo'));
const CaseOmegaRevestimentosSeoGeo = lazy(() => import('./pages/CaseOmegaRevestimentosSeoGeo'));
const CaseCasasPinheiraoAiSeo = lazy(() => import('./pages/CaseCasasPinheiraoAiSeo'));
const CaseMotofreteCentroSaoPauloSeo = lazy(() => import('./pages/CaseMotofreteCentroSaoPauloSeo'));
const CaseRvmPersianasFlorianopolisSeo = lazy(() => import('./pages/CaseRvmPersianasFlorianopolisSeo'));
const CaseConsultoraLooviSeo = lazy(() => import('./pages/CaseConsultoraLooviSeo'));
const CasePizzoGerenciamentoObrasSeo = lazy(() => import('./pages/CasePizzoGerenciamentoObrasSeo'));
const CasePvsDecoreAiSeo = lazy(() => import('./pages/CasePvsDecoreAiSeo'));
const CaseAlumimecEstruturasMetalicasSeo = lazy(() => import('./pages/CaseAlumimecEstruturasMetalicasSeo'));
const CaseABaratonaCacambasAiSeo = lazy(() => import('./pages/CaseABaratonaCacambasAiSeo'));
const SobreOmar = lazy(() => import('./pages/SobreOmar'));
const Sobre = lazy(() => import('./pages/Sobre'));
const Metodo = lazy(() => import('./pages/Metodo'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const SeoGeoAio = lazy(() => import('./pages/SeoGeoAio'));
const ServicesIndex = lazy(() => import('./pages/ServicesIndex'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const AuditoriaSeo = lazy(() => import('./pages/AuditoriaSeo'));
const Contato = lazy(() => import('./pages/Contato'));
const CommercialIntentPage = lazy(() => import('./pages/CommercialIntentPage'));
const LocationPage = lazy(() => import('./pages/LocationPage'));
const NotFoundView = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFoundView })));

// Scroll To Top component that triggers on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

// Loading Spinner for Suspense
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin shadow-[0_0_20px_rgba(59,130,246,0.6)]" />
        <span className="text-xs font-mono text-slate-400">OMAR SEO • Carregando...</span>
      </div>
    </div>
  );
}

// Animated Route Wrapper
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <Routes location={location}>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<ServicesIndex />} />
          <Route path="/servicos/:slug" element={<ServicePage />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/metodo" element={<Metodo />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/seo-geo-aio" element={<SeoGeoAio />} />
          <Route path="/como-ganhar-mercado" element={<SeoGeoAio />} />

          {/* Core Service Pages */}
          <Route path="/seo" element={<SeoCompleto />} />
          <Route path="/seo-local" element={<SeoLocal />} />
          <Route path="/google-maps" element={<GoogleMaps />} />
          <Route path="/geo-ia" element={<GeoIa />} />
          <Route path="/seo-tecnico" element={<SeoTecnico />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/resultados/seo-advogados-planos-de-saude" element={<CaseAdvogadosPlanosSaude />} />
          <Route path="/resultados/seo-celulares-curitiba-shopcell" element={<CaseShopcellCelulares />} />
          <Route path="/resultados/carplus-google-ai-overview-pneus-curitiba" element={<CaseCarplusAiOverview />} />
          <Route path="/resultados/seo-local-ecoservy-corte-e-poda-curitiba" element={<CaseEcoservyCortePoda />} />
          <Route path="/resultados/comfort-divisorias-google-ia-curitiba" element={<CaseComfortDivisorasAiOverview />} />
          <Route path="/resultados/ky-drywall-google-ia-curitiba" element={<CaseKyDrywallAiOverview />} />
          <Route path="/resultados/seo-local-e-organico-alevinos-curitiba" element={<CaseAlevinosCuritibaSeo />} />
          <Route path="/resultados/omega-revestimentos-acm-seo-geo-curitiba" element={<CaseOmegaRevestimentosSeoGeo />} />
          <Route path="/resultados/casas-pinheirao-google-ia-seo" element={<CaseCasasPinheiraoAiSeo />} />
          <Route path="/resultados/motofrete-centro-sao-paulo-seo" element={<CaseMotofreteCentroSaoPauloSeo />} />
          <Route path="/resultados/rvm-persianas-florianopolis-seo" element={<CaseRvmPersianasFlorianopolisSeo />} />
          <Route path="/resultados/consultora-loovi-google-seo" element={<CaseConsultoraLooviSeo />} />
          <Route path="/resultados/pizzo-gerenciamento-obras-balneario-camboriu" element={<CasePizzoGerenciamentoObrasSeo />} />
          <Route path="/resultados/pvs-decore-pisos-vinilicos-sao-jose-dos-pinhais" element={<CasePvsDecoreAiSeo />} />
          <Route path="/resultados/alumimec-estruturas-metalicas-sao-jose-dos-pinhais" element={<CaseAlumimecEstruturasMetalicasSeo />} />
          <Route path="/resultados/a-baratona-cacambas-google-ia-curitiba" element={<CaseABaratonaCacambasAiSeo />} />
          <Route path="/omar-skafi" element={<SobreOmar />} />
          <Route path="/auditoria-seo" element={<AuditoriaSeo />} />
          <Route path="/contato" element={<Contato />} />

          {/* Commercial Intent Direct Routes */}
          <Route path="/especialista-seo-curitiba" element={<CommercialIntentPage />} />
          <Route path="/consultor-seo-curitiba" element={<CommercialIntentPage />} />
          <Route path="/seo-para-empresas" element={<CommercialIntentPage />} />
          <Route path="/seo-google-maps" element={<CommercialIntentPage />} />
          <Route path="/seo-para-chatgpt" element={<CommercialIntentPage />} />
          <Route path="/seo-para-gemini" element={<CommercialIntentPage />} />
          <Route path="/consultoria-seo" element={<CommercialIntentPage />} />
          <Route path="/seo-local-curitiba" element={<CommercialIntentPage />} />
          <Route path="/consultoria-seo-brasil" element={<CommercialIntentPage />} />
          <Route path="/especialista-seo-brasil" element={<CommercialIntentPage />} />
          <Route path="/seo-curitiba-e-regiao" element={<CommercialIntentPage />} />
          <Route path="/seo-vs-geo" element={<CommercialIntentPage />} />
          <Route path="/geo-vs-aio" element={<CommercialIntentPage />} />
          <Route path="/seo-para-ia" element={<CommercialIntentPage />} />
          <Route path="/consultor-seo-ou-agencia" element={<CommercialIntentPage />} />
          <Route path="/dados-estruturados-schema" element={<CommercialIntentPage />} />

          {/* Catch-All Route with fallback verification */}
          <Route path="*" element={<CatchAllRouteHandler />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

// Fallback Route Handler enforcing dynamic route matching
function CatchAllRouteHandler() {
  const location = useLocation();
  const path = location.pathname.toLowerCase().replace(/\/$/, '') || '/';
  const cleanSlug = path.replace(/^\//, '');

  // Check /servicos/:slug
  if (cleanSlug.startsWith('servicos/')) {
    const serviceSlug = cleanSlug.replace(/^servicos\//, '');
    if (SERVICES_DATA[serviceSlug]) {
      return <ServicePage slug={serviceSlug} />;
    }
  }

  // Check /blog/:slug
  if (cleanSlug.startsWith('blog/')) {
    const blogSlug = cleanSlug.replace(/^blog\//, '');
    if (BLOG_POSTS.some((p) => p.slug === blogSlug)) {
      return <BlogPostPage slug={blogSlug} />;
    }
  }

  // Check Commercial Intent routes (e.g. /especialista-seo-curitiba)
  if (COMMERCIAL_INTENTS_DATA[cleanSlug]) {
    return <CommercialIntentPage />;
  }

  // Check Location routes (e.g. /seo-batel)
  if (cleanSlug.startsWith('seo-')) {
    const locSlug = cleanSlug.replace(/^seo-/, '');
    const allSlugs = getAllLocationSlugs();
    if (allSlugs.includes(locSlug) || locSlug.length > 2) {
      return <LocationPage />;
    }
  }

  return <NotFoundView />;
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-slate-100 selection:bg-blue-600 selection:text-white">
          <Header />

          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <AnimatedRoutes />
            </Suspense>
          </main>

          <Footer />
          <FloatingActions />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
