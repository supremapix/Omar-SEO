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

// 1. Google AI Overview SVG (Estruturas em Steel Frame curitiba - Print 1)
const aiOverviewSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 780" width="1200" height="780" style="background:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="1" stdDeviation="3" flood-color="#000" flood-opacity="0.08"/>
    </filter>
    <filter id="cardShadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#000" flood-opacity="0.06"/>
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
    <text x="135" y="19" font-size="15" fill="#202124" font-weight="400">Estruturas em Steel Frame curitiba</text>

    <!-- Right Controls inside search box -->
    <g transform="translate(745, 2)">
      <!-- Close X -->
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#70757a" transform="translate(-35, -3) scale(0.75)"/>
      <line x1="-10" y1="-2" x2="-10" y2="22" stroke="#dadce0" stroke-width="1"/>
      <!-- Keyboard -->
      <rect x="0" y="2" width="17" height="13" rx="2" fill="none" stroke="#70757a" stroke-width="1.2"/>
      <!-- Mic -->
      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" fill="#4285F4" transform="translate(20, -2) scale(0.75)"/>
      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" fill="#34A853" transform="translate(20, -2) scale(0.75)"/>
      <!-- Camera Lens -->
      <circle cx="56" cy="10" r="4.5" fill="none" stroke="#FBBC05" stroke-width="1.8"/>
      <!-- Search Glass -->
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#4285F4" transform="translate(76, -4) scale(0.85)"/>
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

  <!-- Filter Pills -->
  <g transform="translate(150, 122)" font-size="12" fill="#3c4043">
    <rect x="0" y="-14" width="130" height="28" rx="14" fill="#ffffff" stroke="#dadce0" stroke-width="1"/>
    <text x="16" y="4">Estimativas on-line</text>

    <rect x="140" y="-14" width="105" height="28" rx="14" fill="#ffffff" stroke="#dadce0" stroke-width="1"/>
    <text x="156" y="4">Abertos agora</text>

    <rect x="255" y="-14" width="105" height="28" rx="14" fill="#ffffff" stroke="#dadce0" stroke-width="1"/>
    <text x="271" y="4">Bem avaliados</text>
  </g>

  <!-- Geolocation indicator -->
  <g transform="translate(150, 162)" font-size="13">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#5f6368" transform="scale(0.7) translate(-5,-13)"/>
    <text x="18" y="0" font-weight="700" fill="#202124">Curitiba, PR</text>
    <text x="105" y="0" fill="#1a0dab">· Escolher região</text>
  </g>

  <!-- ==================== GOOGLE AI OVERVIEW CONTAINER ==================== -->
  <g transform="translate(150, 188)">
    <!-- AI Header Sparkles -->
    <path d="M8 2l1.8 4.2L14 8l-4.2 1.8L8 14l-1.8-4.2L2 8l4.2-1.8z" fill="#4285F4"/>
    <path d="M14 12l.9 2.1L17 15l-2.1.9L14 18l-.9-2.1L11 15l2.1-.9z" fill="#A142F4"/>
    <text x="24" y="10" font-size="14" font-weight="600" fill="#202124">Visão geral criada por IA</text>
    <!-- Speaker icon -->
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" fill="#5f6368" transform="translate(195, -3) scale(0.75)"/>

    <!-- Left Content Box (AI Text) -->
    <g transform="translate(0, 32)">
      <text x="0" y="16" font-size="14" fill="#202124">
        Empresas especializadas em projetos, execução de obras e fornecimento de materiais em
      </text>
      <text x="0" y="38" font-size="14" fill="#202124">
        <tspan font-weight="700">Steel Frame</tspan> em Curitiba incluem a <tspan font-weight="700" fill="#1a0dab" text-decoration="underline">KY Drywall</tspan>, a <tspan font-weight="700" fill="#1a0dab" text-decoration="underline">AllClick</tspan> e a <tspan font-weight="700" fill="#1a0dab" text-decoration="underline">VB Construções</tspan>.
      </text>

      <!-- Subtitle: Principais Empresas e Fornecedores -->
      <text x="0" y="80" font-size="16" font-weight="700" fill="#202124">
        Principais Empresas e Fornecedores em Curitiba e Região
      </text>

      <!-- Bullet 1: KY DRYWALL (Highlighted Target) -->
      <g transform="translate(0, 105)">
        <circle cx="4" cy="6" r="2.5" fill="#202124"/>
        <text x="14" y="10" font-size="14" fill="#202124">
          <tspan font-weight="700">KY Drywall Construções Steel Frame</tspan>: Localizada no Cajuru (BR-277, 3641), atua com
        </text>
        <text x="14" y="30" font-size="14" fill="#202124">
          projetos, venda de perfis de aço galvanizado Barbieri Z180 e instalação completa para
        </text>
        <text x="14" y="50" font-size="14" fill="#202124">
          residências e comércios.
        </text>
        <!-- Source chip -->
        <rect x="180" y="38" width="135" height="18" rx="9" fill="#f1f3f4"/>
        <circle cx="190" cy="47" r="5" fill="#4285F4"/>
        <text x="200" y="51" font-size="10.5" fill="#3c4043">www.kydrywall.com.br +1</text>
      </g>

      <!-- Bullet 2: AllClick -->
      <g transform="translate(0, 185)">
        <circle cx="4" cy="6" r="2.5" fill="#202124"/>
        <text x="14" y="10" font-size="14" fill="#202124">
          <tspan font-weight="700">AllClick - Construção Industrializada em Light Steel Frame</tspan>: Situada no Batel, é
        </text>
        <text x="14" y="30" font-size="14" fill="#202124">
          focada em engenharia avançada, fabricação de painéis montados e estruturas
        </text>
        <text x="14" y="50" font-size="14" fill="#202124">
          customizadas que agilizam o tempo de obra.
        </text>
      </g>

      <!-- Bullet 3: VB Construções -->
      <g transform="translate(0, 260)">
        <circle cx="4" cy="6" r="2.5" fill="#202124"/>
        <text x="14" y="10" font-size="14" fill="#202124">
          <tspan font-weight="700">VB Construções</tspan>: Empresa do Grupo VB especializada em Light Steel Frame,
        </text>
        <text x="14" y="30" font-size="14" fill="#5f6368">
          oferecendo redução de prazos e custos estruturais na região...
        </text>
      </g>
    </g>

    <!-- Right Side Citation Cards -->
    <g transform="translate(680, 20)">
      <!-- Citation 1: KY Drywall -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="330" height="110" rx="12" fill="#ffffff" stroke="#dadce0" stroke-width="1" filter="url(#shadow)"/>
        <!-- Favicon -->
        <circle cx="24" cy="22" r="8" fill="#e8f0fe"/>
        <path d="M20 22h8M24 18v8" stroke="#1a73e8" stroke-width="1.5"/>
        <text x="38" y="25" font-size="12" fill="#5f6368">www.kydrywall.com.br</text>
        <text x="16" y="52" font-size="13.5" font-weight="700" fill="#1a0dab">Steel Frame - Construcao Inteligente |</text>
        <text x="16" y="70" font-size="13.5" font-weight="700" fill="#1a0dab">KY Drywall Curitiba</text>
        <text x="16" y="90" font-size="11" fill="#4d5156">* A Empresa. * Contato. ... Sistemas Construtivos...</text>
        <!-- Thumbnail image placeholder -->
        <rect x="260" y="42" width="55" height="48" rx="6" fill="#f1f3f4" stroke="#e0e0e0"/>
        <rect x="270" y="52" width="35" height="28" rx="3" fill="#fbbc04" opacity="0.7"/>
      </g>

      <!-- Citation 2: VB Construcoes -->
      <g transform="translate(0, 125)">
        <rect x="0" y="0" width="330" height="95" rx="12" fill="#ffffff" stroke="#dadce0" stroke-width="1" filter="url(#shadow)"/>
        <circle cx="24" cy="22" r="8" fill="#e6f4ea"/>
        <text x="20" y="26" font-size="10" font-weight="700" fill="#137333">VB</text>
        <text x="38" y="25" font-size="12" fill="#5f6368">VB Construções</text>
        <text x="16" y="52" font-size="13.5" font-weight="700" fill="#1a0dab">VB Construções - Steel Frame em Curitiba</text>
        <text x="16" y="72" font-size="11" fill="#4d5156">VB Construções (Grupo VB): - Origem: Vidraçaria...</text>
      </g>

      <!-- Citation 3: KY Drywall Google Local -->
      <g transform="translate(0, 235)">
        <rect x="0" y="0" width="330" height="85" rx="12" fill="#ffffff" stroke="#dadce0" stroke-width="1" filter="url(#shadow)"/>
        <path d="M22 14c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z" fill="#4285F4" transform="scale(0.5) translate(18, 18)"/>
        <text x="38" y="25" font-size="12" fill="#5f6368">Google</text>
        <text x="16" y="52" font-size="13.5" font-weight="700" fill="#1a0dab">KY Drywall Construções Steel Frame</text>
        <text x="16" y="70" font-size="11" fill="#4d5156">A empresa oferece serviços de venda de materiais...</text>
      </g>
    </g>
  </g>
</svg>`;

// 2. Google Organic + Expanded AI Overview SVG (Print 2)
const organicSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 680" width="1200" height="680" style="background:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <defs>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="110%">
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
    <rect x="110" y="-10" width="760" height="46" rx="23" fill="#ffffff" stroke="#dfe1e5" stroke-width="1.5" filter="url(#shadow2)"/>
    <text x="135" y="19" font-size="15" fill="#202124" font-weight="400">Estruturas em Steel Frame Em curitiba</text>

    <!-- Right Controls inside search box -->
    <g transform="translate(745, 2)">
      <!-- Close X -->
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#70757a" transform="translate(-35, -3) scale(0.75)"/>
      <!-- Modo IA pill button -->
      <rect x="0" y="-2" width="82" height="26" rx="13" fill="#f1f3f4"/>
      <text x="10" y="15" font-size="12" font-weight="600" fill="#1a73e8">Modo IA →</text>
    </g>
  </g>

  <!-- Top summary from AI Overview -->
  <g transform="translate(150, 95)">
    <text x="0" y="16" font-size="13.5" fill="#202124">
      As estruturas em <tspan font-weight="700">Steel Frame</tspan> (Light Steel Framing) em Curitiba e região <tspan fill="#1a0dab" background="#e8f0fe">utilizam perfis de</tspan>
    </text>
    <text x="0" y="36" font-size="13.5" fill="#202124">
      <tspan fill="#1a0dab">aço galvanizado leves para formar o esqueleto da construção a seco, substituindo a</tspan>
    </text>
    <text x="0" y="56" font-size="13.5" fill="#202124">
      <tspan fill="#1a0dab">alvenaria tradicional com rapidez, precisão milimétrica e menor geração de</tspan>
    </text>
    <text x="0" y="76" font-size="13.5" fill="#202124">
      <tspan fill="#1a0dab">resíduos</tspan>.
    </text>

    <!-- Bullet KY Drywall in AI Overview -->
    <text x="0" y="115" font-size="15" font-weight="700" fill="#202124">Principais Empresas e Fornecedores em Curitiba</text>
    
    <g transform="translate(0, 135)">
      <circle cx="4" cy="6" r="2.5" fill="#202124"/>
      <text x="14" y="10" font-size="13.5" fill="#202124">
        <tspan font-weight="700" fill="#1a0dab" text-decoration="underline">KY Drywall Construções Steel Frame</tspan> <tspan font-style="italic">(Cajuru, Curitiba)</tspan>: Destaca-se com mais de 25
      </text>
      <text x="14" y="30" font-size="13.5" fill="#202124">
        anos de mercado, atuando como distribuidora oficial de perfis galvanizados Barbieri
      </text>
      <text x="14" y="50" font-size="13.5" fill="#202124">
        Z180, além de oferecer projetos, assessoria técnica completa e materiais para steel
      </text>
      <text x="14" y="70" font-size="13.5" fill="#202124">
        frame e drywall.
      </text>
    </g>

    <!-- Mostrar mais pill -->
    <g transform="translate(0, 235)">
      <rect x="0" y="0" width="560" height="34" rx="17" fill="#ffffff" stroke="#dadce0" stroke-width="1"/>
      <text x="240" y="22" font-size="13" font-weight="600" fill="#1a73e8">Mostrar mais ∨</text>
    </g>

    <!-- Right citation card -->
    <g transform="translate(680, 0)">
      <rect x="0" y="0" width="330" height="105" rx="12" fill="#ffffff" stroke="#dadce0" stroke-width="1" filter="url(#shadow2)"/>
      <circle cx="24" cy="22" r="8" fill="#e8f0fe"/>
      <text x="38" y="25" font-size="12" fill="#5f6368">www.kydrywall.com.br</text>
      <text x="16" y="50" font-size="13" font-weight="700" fill="#1a0dab">Steel Frame - Construcao Inteligente |</text>
      <text x="16" y="66" font-size="13" font-weight="700" fill="#1a0dab">KY Drywall Curitiba</text>
      <text x="16" y="85" font-size="10.5" fill="#4d5156">* A Empresa. * Contato. ... Sistemas Construtivos...</text>
      <rect x="260" y="40" width="55" height="48" rx="6" fill="#f1f3f4"/>
      <rect x="270" y="50" width="35" height="28" rx="3" fill="#fbbc04" opacity="0.7"/>
    </g>
  </g>

  <!-- Divider line -->
  <line x1="150" y1="400" x2="1100" y2="400" stroke="#ebebeb" stroke-width="1"/>

  <!-- ==================== GOOGLE ORGANIC RESULT SNIPPET ==================== -->
  <g transform="translate(150, 420)">
    <!-- Site Icon & Breadcrumb URL -->
    <g transform="translate(0, 0)">
      <circle cx="14" cy="14" r="12" fill="#1a73e8"/>
      <path d="M14 6a8 8 0 100 16 8 8 0 000-16zm-1 14.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L10 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#ffffff" transform="translate(0,0) scale(1)"/>
      <text x="36" y="12" font-size="13" font-weight="600" fill="#202124">kydrywall.com.br</text>
      <text x="36" y="27" font-size="11" fill="#4d5156">https://www.kydrywall.com.br › steel-frame</text>
      <circle cx="270" cy="18" r="1.5" fill="#70757a"/>
      <circle cx="270" cy="23" r="1.5" fill="#70757a"/>
      <circle cx="270" cy="28" r="1.5" fill="#70757a"/>
    </g>

    <!-- Organic Title (Blue Link) -->
    <text x="0" y="65" font-size="20" font-weight="600" fill="#1a0dab" cursor="pointer">
      Steel Frame - Construcao Inteligente | KY Drywall Curitiba
    </text>

    <!-- Organic Snippet Description -->
    <text x="0" y="92" font-size="13.5" fill="#4d5156">
      Sistema construtivo <tspan font-weight="700" fill="#202124">Steel Frame</tspan>: obra 70% mais rapida, sustentavel e com projeto executivo detalhado.
    </text>
    <text x="0" y="112" font-size="13.5" fill="#4d5156">
      Assessoria tecnica especializada da KY Drywall em ...
    </text>
  </g>
</svg>`;

async function run() {
  console.log('Generating images for KY Drywall Steel Frame...');

  // 1. AI Overview images
  const aiSvgPath = path.join(casesDir, 'case-ky-drywall-estruturas-steel-frame-curitiba-google-ai.svg');
  fs.writeFileSync(aiSvgPath, aiOverviewSvg, 'utf-8');
  fs.writeFileSync(path.join(portfolioDir, 'google-ai-overview-kydrywall-estruturas-steel-frame-curitiba.svg'), aiOverviewSvg, 'utf-8');

  const aiPngCases = path.join(casesDir, 'case-ky-drywall-estruturas-steel-frame-curitiba-google-ai.png');
  const aiWebpCases = path.join(casesDir, 'case-ky-drywall-estruturas-steel-frame-curitiba-google-ai.webp');
  const aiPngPortfolio = path.join(portfolioDir, 'google-ai-overview-kydrywall-estruturas-steel-frame-curitiba.png');
  const aiWebpPortfolio = path.join(portfolioDir, 'google-ai-overview-kydrywall-estruturas-steel-frame-curitiba.webp');

  const aiBuffer = Buffer.from(aiOverviewSvg);
  await sharp(aiBuffer).png({ quality: 100 }).toFile(aiPngCases);
  await sharp(aiBuffer).webp({ quality: 95 }).toFile(aiWebpCases);
  fs.copyFileSync(aiPngCases, aiPngPortfolio);
  fs.copyFileSync(aiWebpCases, aiWebpPortfolio);

  // 2. Organic + AI Overview images
  const orgSvgPath = path.join(casesDir, 'case-ky-drywall-estruturas-steel-frame-curitiba-organico.svg');
  fs.writeFileSync(orgSvgPath, organicSvg, 'utf-8');
  fs.writeFileSync(path.join(portfolioDir, 'google-organico-kydrywall-estruturas-steel-frame-curitiba.svg'), organicSvg, 'utf-8');

  const orgPngCases = path.join(casesDir, 'case-ky-drywall-estruturas-steel-frame-curitiba-organico.png');
  const orgWebpCases = path.join(casesDir, 'case-ky-drywall-estruturas-steel-frame-curitiba-organico.webp');
  const orgPngPortfolio = path.join(portfolioDir, 'google-organico-kydrywall-estruturas-steel-frame-curitiba.png');
  const orgWebpPortfolio = path.join(portfolioDir, 'google-organico-kydrywall-estruturas-steel-frame-curitiba.webp');

  const orgBuffer = Buffer.from(organicSvg);
  await sharp(orgBuffer).png({ quality: 100 }).toFile(orgPngCases);
  await sharp(orgBuffer).webp({ quality: 95 }).toFile(orgWebpCases);
  fs.copyFileSync(orgPngCases, orgPngPortfolio);
  fs.copyFileSync(orgWebpCases, orgWebpPortfolio);

  console.log('KY Drywall Steel Frame images generated successfully in both portfolio and cases directories.');
}

run().catch((err) => {
  console.error('Error generating images:', err);
  process.exit(1);
});
