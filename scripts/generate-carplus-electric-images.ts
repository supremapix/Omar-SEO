import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const portfolioDir = path.join(process.cwd(), 'public', 'images', 'portfolio');
const casesDir = path.join(process.cwd(), 'public', 'images', 'cases');

if (!fs.existsSync(portfolioDir)) {
  fs.mkdirSync(portfolioDir, { recursive: true });
}
if (!fs.existsSync(casesDir)) {
  fs.mkdirSync(casesDir, { recursive: true });
}

const carplusSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 780" width="1200" height="780" style="background:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="1" stdDeviation="3" flood-color="#000" flood-opacity="0.08"/>
    </filter>
  </defs>

  <!-- Google Header & Search Bar -->
  <g transform="translate(40, 24)">
    <!-- Google Logo -->
    <path d="M22.5 10.8c0-.8-.1-1.5-.2-2.2H11.5v4.2h6.2c-.3 1.4-1.1 2.6-2.3 3.4v2.8h3.7c2.2-2 3.4-5 3.4-8.2z" fill="#4285F4"/>
    <path d="M11.5 22c3.1 0 5.7-1 7.6-2.8l-3.7-2.8c-1 1-2.4 1.5-3.9 1.5-3 0-5.5-2-6.4-4.8H1.2v3c1.9 3.8 5.8 6.1 10.3 6.1z" fill="#34A853"/>
    <path d="M5.1 13.1c-.2-.7-.3-1.4-.3-2.1s.1-1.4.3-2.1V5.9H1.2C.4 7.5 0 9.2 0 11s.4 3.5 1.2 5.1l3.9-3z" fill="#FBBC05"/>
    <path d="M11.5 4.4c1.7 0 3.2.6 4.4 1.7l3.3-3.3C17.2 1 14.6 0 11.5 0 7 0 3.1 2.3 1.2 6.1l3.9 3c.9-2.8 3.4-4.7 6.4-4.7z" fill="#EA4335"/>

    <!-- Search Input Box -->
    <rect x="110" y="-10" width="760" height="46" rx="23" fill="#ffffff" stroke="#dfe1e5" stroke-width="1.5" filter="url(#shadow)"/>
    <text x="135" y="19" font-size="15" fill="#202124" font-weight="400">pneus para carros eletricos em curitiba</text>

    <!-- Right Controls inside search box -->
    <g transform="translate(745, 2)">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#70757a" transform="translate(-35, -3) scale(0.75)"/>
      <line x1="-10" y1="-2" x2="-10" y2="22" stroke="#dadce0" stroke-width="1"/>
      <!-- Mic & Lens -->
      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" fill="#4285F4" transform="translate(20, -2) scale(0.75)"/>
      <circle cx="56" cy="10" r="4.5" fill="none" stroke="#FBBC05" stroke-width="1.8"/>
    </g>
  </g>

  <!-- Search Tabs -->
  <g transform="translate(150, 84)" font-size="13" fill="#5f6368" font-weight="500">
    <text x="0" y="0">Modo IA</text>
    <text x="65" y="0" fill="#1a73e8" font-weight="700">Tudo</text>
    <line x1="65" y1="8" x2="95" y2="8" stroke="#1a73e8" stroke-width="2.5"/>
    <text x="120" y="0">Shopping</text>
    <text x="195" y="0">Imagens</text>
    <text x="265" y="0">Vídeos</text>
    <text x="325" y="0">Vídeos curtos</text>
    <text x="420" y="0">Maps</text>
    <text x="470" y="0">Mais ▾</text>
    <text x="530" y="0">Ferramentas ▾</text>
  </g>
  <line x1="0" y1="98" x2="1200" y2="98" stroke="#ebebeb" stroke-width="1"/>

  <!-- ==================== GOOGLE AI OVERVIEW CONTAINER ==================== -->
  <g transform="translate(150, 120)">
    <!-- AI Header Sparkles -->
    <path d="M8 2l1.8 4.2L14 8l-4.2 1.8L8 14l-1.8-4.2L2 8l4.2-1.8z" fill="#4285F4"/>
    <path d="M14 12l.9 2.1L17 15l-2.1.9L14 18l-.9-2.1L11 15l2.1-.9z" fill="#A142F4"/>
    <text x="24" y="10" font-size="14" font-weight="600" fill="#202124">Visão geral criada por IA</text>
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" fill="#5f6368" transform="translate(195, -3) scale(0.75)"/>

    <!-- Left Content Box (AI Text) -->
    <g transform="translate(0, 32)">
      <text x="0" y="16" font-size="14" fill="#202124">
        Em Curitiba, você encontra pneus indicados para carros elétricos (que exigem maior
      </text>
      <text x="0" y="36" font-size="14" fill="#202124">
        reforço estrutural para o peso das baterias, menor nível de ruído e baixa resistência à
      </text>
      <text x="0" y="56" font-size="14" fill="#202124">
        rolagem) <tspan fill="#1a0dab" font-weight="600" background="#e8f0fe">em diversas lojas especializadas e centros automotivos</tspan>.
      </text>

      <!-- Subtitle: Onde encontrar em Curitiba -->
      <text x="0" y="96" font-size="16" font-weight="700" fill="#202124">
        Onde encontrar em Curitiba
      </text>

      <!-- Bullet 1: Carplus Portão (Highlighted Target) -->
      <g transform="translate(0, 120)">
        <circle cx="4" cy="6" r="2.5" fill="#202124"/>
        <text x="14" y="10" font-size="14" fill="#202124">
          <tspan font-weight="700" fill="#1a0dab" text-decoration="underline">Carplus Portão</tspan> (<tspan fill="#1a0dab" text-decoration="underline">Carplus Pneus</tspan>): Localizada na Av. Pres. Arthur Bernardes, 1323,
        </text>
        <text x="14" y="30" font-size="14" fill="#202124">
          Portão. É especializada em atender carros elétricos e híbridos (como BYD, GWM e
        </text>
        <text x="14" y="50" font-size="14" fill="#202124">
          Volvo), trabalhando com marcas como Pirelli e Continental, além de oferecer montagem
        </text>
        <text x="14" y="70" font-size="14" fill="#202124">
          inclusa e parcelamento. Contato: (41) 3082-7282.
        </text>
        <!-- Source chip -->
        <rect x="385" y="58" width="85" height="18" rx="9" fill="#f1f3f4"/>
        <circle cx="395" cy="67" r="5" fill="#ff5722"/>
        <text x="405" y="71" font-size="10.5" fill="#3c4043">Carplus Pneus +2</text>
      </g>
    </g>

    <!-- Right Side Citation Cards -->
    <g transform="translate(680, 10)">
      <!-- Citation 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="330" height="110" rx="12" fill="#ffffff" stroke="#dadce0" stroke-width="1" filter="url(#shadow)"/>
        <circle cx="24" cy="22" r="8" fill="#ff5722"/>
        <text x="20" y="26" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">C</text>
        <text x="38" y="25" font-size="12" fill="#5f6368">Carplus Pneus</text>
        <text x="16" y="52" font-size="13" font-weight="700" fill="#1a0dab">Pneus para Carro Elétrico em Curitiba |</text>
        <text x="16" y="70" font-size="13" font-weight="700" fill="#1a0dab">Menor Preço | Carplus</text>
        <text x="16" y="90" font-size="11" fill="#4d5156">Buscando pneus para seu BYD, GWM ou Volvo...</text>
        <!-- Thumbnail -->
        <rect x="260" y="42" width="55" height="48" rx="6" fill="#111111"/>
        <text x="287" y="72" font-size="12" fill="#ffcc00" font-weight="bold" text-anchor="middle">CP</text>
      </g>

      <!-- Citation 2 -->
      <g transform="translate(0, 125)">
        <rect x="0" y="0" width="330" height="110" rx="12" fill="#ffffff" stroke="#dadce0" stroke-width="1" filter="url(#shadow)"/>
        <circle cx="24" cy="22" r="8" fill="#ff5722"/>
        <text x="20" y="26" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">C</text>
        <text x="38" y="25" font-size="12" fill="#5f6368">Carplus Pneus</text>
        <text x="16" y="52" font-size="13" font-weight="700" fill="#1a0dab">Pneus, Auto Center e Oficina Mecânica</text>
        <text x="16" y="70" font-size="13" font-weight="700" fill="#1a0dab">em Curitiba | Carplus Portão</text>
        <text x="16" y="90" font-size="11" fill="#4d5156">Carplus Pneus: Auto center, oficina, e compra...</text>
        <rect x="260" y="42" width="55" height="48" rx="6" fill="#cccccc"/>
      </g>
    </g>
  </g>

  <!-- Divider line -->
  <line x1="150" y1="460" x2="1100" y2="460" stroke="#ebebeb" stroke-width="1"/>

  <!-- ==================== GOOGLE ORGANIC RESULT SNIPPET ==================== -->
  <g transform="translate(150, 485)">
    <!-- Site Icon & Breadcrumb URL -->
    <g transform="translate(0, 0)">
      <circle cx="14" cy="14" r="12" fill="#ff5722"/>
      <text x="14" y="18" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">C</text>
      <text x="36" y="12" font-size="13" font-weight="600" fill="#202124">Carplus Pneus</text>
      <text x="36" y="27" font-size="11" fill="#4d5156">https://www.carpluscwb.com.br › blog › pneus-para-car...</text>
    </g>

    <!-- Organic Title (Blue Link) -->
    <text x="0" y="65" font-size="20" font-weight="600" fill="#1a0dab" cursor="pointer">
      Pneus para Carro Elétrico em Curitiba | Menor Preço
    </text>

    <!-- Organic Snippet Description -->
    <text x="0" y="92" font-size="13.5" fill="#4d5156">
      Buscando <tspan font-weight="700" fill="#202124">pneus</tspan> para seu BYD, GWM ou Volvo em <tspan font-weight="700" fill="#202124">Curitiba</tspan>? Conheça a oficina especializada Carplus.
    </text>
    <text x="0" y="112" font-size="13.5" fill="#4d5156">
      Menor preço em Pirelli e Continental. Ligue (41) 3082-7282.
    </text>
  </g>
</svg>`;

async function run() {
  console.log('Generating images for Carplus Electric Tires...');

  const svgPath = path.join(casesDir, 'case-carplus-google-ai-overview-pneus-curitiba.svg');
  fs.writeFileSync(svgPath, carplusSvg, 'utf-8');
  fs.writeFileSync(path.join(portfolioDir, 'google-ai-overview-carplus-pneus-curitiba.svg'), carplusSvg, 'utf-8');

  const pngCases = path.join(casesDir, 'case-carplus-google-ai-overview-pneus-curitiba.png');
  const webpCases = path.join(casesDir, 'case-carplus-google-ai-overview-pneus-curitiba.webp');
  const pngPortfolio = path.join(portfolioDir, 'google-ai-overview-carplus-pneus-curitiba.png');
  const webpPortfolio = path.join(portfolioDir, 'google-ai-overview-carplus-pneus-curitiba.webp');

  const buffer = Buffer.from(carplusSvg);
  await sharp(buffer).png({ quality: 100 }).toFile(pngCases);
  await sharp(buffer).webp({ quality: 95 }).toFile(webpCases);
  fs.copyFileSync(pngCases, pngPortfolio);
  fs.copyFileSync(webpCases, webpPortfolio);

  console.log('Carplus electric tires images generated successfully.');
}

run().catch((err) => {
  console.error('Error generating Carplus images:', err);
  process.exit(1);
});
