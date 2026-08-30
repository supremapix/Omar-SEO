import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface GeoLocation {
  placeName?: string;
  lat: number;
  lng: number;
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface EnhancedSEOProps {
  title: string;
  description: string;
  canonical?: string; // Path starting with '/' or full URL
  keywords?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  geo?: GeoLocation;
  breadcrumbs?: BreadcrumbItem[];
  schema?: Record<string, unknown>[];
}

const DOMAIN = 'https://omarseo.digital';

export function EnhancedSEO({
  title,
  description,
  canonical = '/',
  keywords = 'SEO Curitiba, Especialista em SEO, Google Maps Curitiba, GEO, Dados Estruturados, Omar Skafi, Consultoria SEO',
  ogImage = `${DOMAIN}/og-default.jpg`,
  ogType = 'website',
  geo = { placeName: 'Curitiba', lat: -25.4411, lng: -49.2731 },
  breadcrumbs,
  schema = [],
}: EnhancedSEOProps) {
  // Normalize canonical URL
  const canonicalUrl = canonical.startsWith('http')
    ? canonical
    : `${DOMAIN}${canonical.startsWith('/') ? '' : '/'}${canonical}`;

  // Official Business Schemas
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness'],
    '@id': `${DOMAIN}/#localbusiness`,
    name: 'Omar SEO — Omar Skafi | Especialista em SEO, GEO e Visibilidade Digital',
    legalName: 'OSKAFI WEB SITES LTDA ME',
    taxID: '15.083.543/0001-97',
    url: DOMAIN,
    logo: `${DOMAIN}/logo.png`,
    image: ogImage,
    description: 'Especialista em SEO técnico, SEO local, Google Maps, GEO e dados estruturados para empresas em Curitiba e todo o Brasil.',
    telephone: '+5541987001004',
    email: 'supremamidiabatel@gmail.com',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Sete de Setembro, 2775 - 9º andar',
      addressLocality: 'Curitiba',
      addressRegion: 'PR',
      postalCode: '80230-010',
      addressCountry: 'BR',
    },
    hasMap: 'https://share.google/j6UoHq8uuHfvwOfiW',
    founder: { '@id': `${DOMAIN}/#person` },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Curitiba' },
      { '@type': 'AdministrativeArea', name: 'Região Metropolitana de Curitiba' },
      { '@type': 'AdministrativeArea', name: 'Paraná' },
      { '@type': 'AdministrativeArea', name: 'Brasil' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://bio.supremamidia.com.br/',
      'https://supremasite.com.br',
      'https://share.google/j6UoHq8uuHfvwOfiW',
    ],
  };

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${DOMAIN}/#person`,
    name: 'Omar Skafi',
    jobTitle: 'Especialista em SEO, GEO e Visibilidade Digital',
    image: 'https://bio.supremamidia.com.br/imagens/gestor-de-trafego-organico-em-curitiba.png',
    worksFor: { '@id': `${DOMAIN}/#localbusiness` },
    knowsAbout: [
      'Search Engine Optimization (SEO)',
      'Generative Engine Optimization (GEO)',
      'AI Optimization (AIO)',
      'SEO Local',
      'Google Maps Marketing',
      'SEO Técnico',
      'Schema.org e JSON-LD',
    ],
    url: `${DOMAIN}/sobre`,
    sameAs: [
      'https://bio.supremamidia.com.br/',
      'https://supremasite.com.br',
      'https://share.google/j6UoHq8uuHfvwOfiW',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${DOMAIN}/#website`,
    url: DOMAIN,
    name: 'Omar SEO',
    description: 'Engenharia de Visibilidade Digital e SEO em Curitiba',
    publisher: { '@id': `${DOMAIN}/#localbusiness` },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${DOMAIN}/?s={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  // Breadcrumb schema if provided
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((b, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: b.name,
      item: b.item.startsWith('http') ? b.item : `${DOMAIN}${b.item}`,
    })),
  } : null;

  // Combine all schemas into an array
  const allSchemas = [
    localBusinessSchema,
    personSchema,
    websiteSchema,
    ...(breadcrumbSchema ? [breadcrumbSchema] : []),
    ...schema,
  ];

  return (
    <Helmet>
      {/* Search Console & Bing Verification */}
      <meta name="google-site-verification" content="1xGI66_tOTR5tAOU6YhKDITaVEb4BHCfg6w97BIoWao" />
      <meta name="msvalidate.01" content="1xGI66_tOTR5tAOU6YhKDITaVEb4BHCfg6w97BIoWao" />

      {/* Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* hreflang */}
      <link rel="alternate" hrefLang="pt-BR" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Geolocation */}
      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content="Curitiba - PR" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Omar SEO" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (JSON-LD) */}
      {allSchemas.map((s, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
