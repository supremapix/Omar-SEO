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

// Lazy Loaded Main Pages
const Home = lazy(() => import('./pages/Home'));
const SeoCompleto = lazy(() => import('./pages/SeoCompleto'));
const SeoLocal = lazy(() => import('./pages/SeoLocal'));
const GoogleMaps = lazy(() => import('./pages/GoogleMaps'));
const GeoIa = lazy(() => import('./pages/GeoIa'));
const SeoTecnico = lazy(() => import('./pages/SeoTecnico'));
const Resultados = lazy(() => import('./pages/Resultados'));
const SobreOmar = lazy(() => import('./pages/SobreOmar'));
const Sobre = lazy(() => import('./pages/Sobre'));
const Metodo = lazy(() => import('./pages/Metodo'));
const Blog = lazy(() => import('./pages/Blog'));
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

          {/* Core Service Pages */}
          <Route path="/seo" element={<SeoCompleto />} />
          <Route path="/seo-local" element={<SeoLocal />} />
          <Route path="/google-maps" element={<GoogleMaps />} />
          <Route path="/geo-ia" element={<GeoIa />} />
          <Route path="/seo-tecnico" element={<SeoTecnico />} />
          <Route path="/resultados" element={<Resultados />} />
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
