import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const outputDir = path.join(process.cwd(), 'public', 'images', 'cases');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 640" width="1000" height="640" style="background:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="1" stdDeviation="3" flood-color="#000" flood-opacity="0.12"/>
    </filter>
    <filter id="cardShadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#000" flood-opacity="0.08"/>
    </filter>
    <marker id="redArrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="9" markerHeight="9" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#d93025" />
    </marker>
  </defs>

  <!-- Google Header -->
  <g transform="translate(30, 20)">
    <!-- Google Logo -->
    <g transform="translate(0, 4)">
      <path d="M22.5 10.8c0-.8-.1-1.5-.2-2.2H11.5v4.2h6.2c-.3 1.4-1.1 2.6-2.3 3.4v2.8h3.7c2.2-2 3.4-5 3.4-8.2z" fill="#4285F4"/>
      <path d="M11.5 22c3.1 0 5.7-1 7.6-2.8l-3.7-2.8c-1 1-2.4 1.5-3.9 1.5-3 0-5.5-2-6.4-4.8H1.2v3c1.9 3.8 5.8 6.1 10.3 6.1z" fill="#34A853"/>
      <path d="M5.1 13.1c-.2-.7-.3-1.4-.3-2.1s.1-1.4.3-2.1V5.9H1.2C.4 7.5 0 9.2 0 11s.4 3.5 1.2 5.1l3.9-3z" fill="#FBBC05"/>
      <path d="M11.5 4.4c1.7 0 3.2.6 4.4 1.7l3.3-3.3C17.2 1 14.6 0 11.5 0 7 0 3.1 2.3 1.2 6.1l3.9 3c.9-2.8 3.4-4.7 6.4-4.7z" fill="#EA4335"/>
    </g>

    <!-- Search Input Box -->
    <rect x="95" y="-12" width="670" height="46" rx="23" fill="#ffffff" stroke="#dfe1e5" stroke-width="1" filter="url(#shadow)"/>
    <text x="120" y="17" font-size="15" fill="#202124" font-weight="400">quem instala Pisos vinilicos São José dos Pinhais?</text>

    <!-- Search Box Right Controls -->
    <g transform="translate(650, 0)">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#70757a" transform="translate(-40, -3) scale(0.8)"/>
      <line x1="-12" y1="-2" x2="-12" y2="22" stroke="#dadce0" stroke-width="1"/>
      <rect x="-3" y="1" width="18" height="14" rx="2" fill="none" stroke="#70757a" stroke-width="1.5"/>
      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" fill="#4285F4" transform="translate(20, -2) scale(0.8)"/>
      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" fill="#34A853" transform="translate(20, -2) scale(0.8)"/>
      <circle cx="58" cy="9" r="5" fill="none" stroke="#FBBC05" stroke-width="2"/>
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#4285F4" transform="translate(80, -4) scale(0.9)"/>
    </g>
  </g>

  <!-- Google Nav Tabs -->
  <g transform="translate(30, 80)">
    <text x="0" y="0" font-size="12" fill="#5f6368">Modo IA</text>
    <text x="60" y="0" font-size="12" fill="#1a73e8" font-weight="600">Tudo</text>
    <line x1="58" y1="6" x2="90" y2="6" stroke="#1a73e8" stroke-width="3"/>
    <text x="110" y="0" font-size="12" fill="#5f6368">Shopping</text>
    <text x="175" y="0" font-size="12" fill="#5f6368">Imagens</text>
    <text x="240" y="0" font-size="12" fill="#5f6368">Vídeos curtos</text>
    <text x="330" y="0" font-size="12" fill="#5f6368">Vídeos</text>
    <text x="385" y="0" font-size="12" fill="#5f6368">Notícias</text>
    <text x="445" y="0" font-size="12" fill="#5f6368">Mais ▾</text>
    <text x="500" y="0" font-size="12" fill="#5f6368">Ferramentas</text>
  </g>

  <!-- Location Indicator -->
  <g transform="translate(30, 115)">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#5f6368" transform="scale(0.75)"/>
    <text x="18" y="12" font-size="13" fill="#202124" font-weight="700">São José dos Pinhais, PR</text>
    <text x="175" y="12" font-size="13" fill="#1a73e8">· Escolher região</text>
    <circle cx="280" cy="8" r="1.5" fill="#70757a"/>
    <circle cx="280" cy="12" r="1.5" fill="#70757a"/>
    <circle cx="280" cy="16" r="1.5" fill="#70757a"/>
  </g>

  <!-- AI OVERVIEW HEADER -->
  <g transform="translate(30, 150)">
    <path d="M10 2L13 7L18 10L13 13L10 18L7 13L2 10L7 7Z" fill="#1a73e8"/>
    <text x="24" y="14" font-size="14" fill="#1a73e8" font-weight="600">Visão geral criada por IA</text>
    <circle cx="200" cy="10" r="10" fill="#e8f0fe"/>
    <path d="M197 7.5v5l3.5-2.5z" fill="#1a73e8"/>
  </g>

  <!-- AI ANSWER TEXT & BULLETS -->
  <g transform="translate(30, 195)">
    <!-- Highlight text -->
    <rect x="0" y="-12" width="290" height="20" fill="#d3e3fd" rx="2"/>
    <text x="2" y="2" font-size="14" fill="#041e49" font-weight="700">Várias empresas e profissionais especializados</text>
    <text x="295" y="2" font-size="14" fill="#202124">realizam a instalação de pisos vinílicos</text>
    <text x="0" y="24" font-size="14" fill="#202124">em São José dos Pinhais.</text>

    <!-- Subtitle: Empresas Especializadas -->
    <text x="0" y="65" font-size="18" fill="#202124" font-weight="600">Empresas Especializadas</text>

    <!-- Bullet 1: RS Pisos -->
    <g transform="translate(0, 90)">
      <circle cx="4" cy="6" r="2.5" fill="#202124"/>
      <text x="14" y="10" font-size="14" fill="#1a0dab" font-weight="500" text-decoration="underline">RS Pisos e Planejados</text>
      <text x="160" y="10" font-size="14" fill="#202124">: Oferece venda e instalação completa de pisos vinílicos e</text>
      <text x="14" y="28" font-size="14" fill="#202124">laminados, com atendimento na região e loja física na Rua Tenente Djalma Dutra, em</text>
      <text x="14" y="46" font-size="14" fill="#202124">São José dos Pinhais.</text>
    </g>

    <!-- Bullet 2: PVS DECORE -->
    <g transform="translate(0, 165)">
      <circle cx="4" cy="6" r="2.5" fill="#202124"/>
      <text x="14" y="10" font-size="14" fill="#1a0dab" font-weight="700" text-decoration="underline">PVS Decore</text>
      <text x="98" y="10" font-size="14" fill="#202124">: Conta com equipe própria de instalação treinada para atender</text>

      <!-- Hover / Reference Card for PVS Decore -->
      <g transform="translate(25, 25)">
        <rect x="0" y="0" width="310" height="85" rx="12" fill="#1e232a" stroke="#333b47" stroke-width="1" filter="url(#cardShadow)"/>
        
        <text x="16" y="32" font-size="13" fill="#ffffff" font-weight="600">Pisos Vinilicos e Laminados em São</text>
        <text x="16" y="48" font-size="13" fill="#ffffff" font-weight="600">José dos Pinhais</text>

        <!-- Storefront Image Thumbnail -->
        <rect x="225" y="12" width="70" height="60" rx="6" fill="#2c323d"/>
        <path d="M235 55 L250 35 L265 50 L275 42 L285 55 Z" fill="#555f70"/>
        <circle cx="275" cy="28" r="5" fill="#e2b04c"/>
      </g>
    </g>
  </g>

  <!-- RED ANNOTATION ARROWS (Matching user uploaded screenshot) -->
  <g>
    <line x1="120" y1="80" x2="80" y2="345" stroke="#d93025" stroke-width="4.5" stroke-linecap="round" marker-end="url(#redArrow)" />
    <line x1="290" y1="80" x2="110" y2="345" stroke="#d93025" stroke-width="4.5" stroke-linecap="round" marker-end="url(#redArrow)" />
  </g>
</svg>`;

async function main() {
  const svgPath = path.join(outputDir, 'case-pvs-decore-google-ia-pisos-vinilicos-sao-jose-dos-pinhais.svg');
  const pngPath = path.join(outputDir, 'case-pvs-decore-google-ia-pisos-vinilicos-sao-jose-dos-pinhais.png');

  fs.writeFileSync(svgPath, svgContent, 'utf-8');
  console.log(`Saved SVG: ${svgPath}`);

  await sharp(Buffer.from(svgContent))
    .png({ quality: 95 })
    .toFile(pngPath);

  console.log(`Saved PNG: ${pngPath}`);
}

main().catch(console.error);
