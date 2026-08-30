import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1180 580" width="1180" height="580" style="background:#ffffff; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <defs>
    <style>
      .g-blue { fill: #4285F4; }
      .g-red { fill: #EA4335; }
      .g-yellow { fill: #FBBC05; }
      .g-green { fill: #34A853; }
      .txt-main { fill: #202124; font-size: 14px; }
      .txt-bold { font-weight: 600; }
      .txt-gray { fill: #70757a; font-size: 13px; }
      .txt-blue { fill: #1a0dab; }
      .pill { fill: #ffffff; stroke: #dadce0; stroke-width: 1; rx: 16; }
      .star { fill: #fbbc04; }
    </style>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#000" flood-opacity="0.1"/>
    </filter>
  </defs>

  <!-- Google Header -->
  <g transform="translate(35, 25)">
    <!-- Google Logo -->
    <text x="0" y="32" font-size="34" font-weight="bold" font-family="'Product Sans', Arial, sans-serif" letter-spacing="-1">
      <tspan class="g-blue">G</tspan><tspan class="g-red">o</tspan><tspan class="g-yellow">o</tspan><tspan class="g-blue">g</tspan><tspan class="g-green">l</tspan><tspan class="g-red">e</tspan>
    </text>

    <!-- Search Input -->
    <g transform="translate(145, 0)">
      <rect x="0" y="0" width="810" height="46" rx="23" fill="#ffffff" stroke="#dfe1e5" stroke-width="1.5" filter="url(#shadow)"/>
      <text x="24" y="28" font-size="16" fill="#202124" font-family="Arial, sans-serif">corte e poda</text>
      
      <!-- Right Icons -->
      <g transform="translate(670, 13)">
        <!-- X icon -->
        <path d="M5 5L15 15M15 5L5 15" stroke="#70757a" stroke-width="2" stroke-linecap="round"/>
        <!-- Divider -->
        <line x1="28" y1="2" x2="28" y2="18" stroke="#dadce0" stroke-width="1"/>
        <!-- Keyboard -->
        <rect x="36" y="4" width="16" height="11" rx="2" fill="none" stroke="#70757a" stroke-width="1.5"/>
        <!-- Mic -->
        <path d="M64 4c-1.5 0-2.5 1-2.5 2.5v4c0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5v-4c0-1.5-1-2.5-2.5-2.5z" fill="#4285F4"/>
        <path d="M60 10.5c0 2 1.5 3.5 4 3.5s4-1.5 4-3.5" fill="none" stroke="#EA4335" stroke-width="1.5"/>
        <!-- Camera Lens -->
        <circle cx="82" cy="10" r="4" fill="none" stroke="#FBBC05" stroke-width="1.5"/>
        <!-- Search Magnifier -->
        <path d="M102 4a5 5 0 100 10 5 5 0 000-10zm7 11l-3.5-3.5" fill="none" stroke="#4285F4" stroke-width="2.5" stroke-linecap="round"/>
      </g>
    </g>
  </g>

  <!-- Navigation Bar -->
  <g transform="translate(180, 95)">
    <text x="0" y="20" font-size="14" fill="#70757a">Modo IA</text>
    <text x="75" y="20" font-size="14" fill="#202124" font-weight="bold">Tudo</text>
    <rect x="75" y="28" width="36" height="3" fill="#202124" rx="1.5"/>
    
    <text x="135" y="20" font-size="14" fill="#70757a">Imagens</text>
    <text x="210" y="20" font-size="14" fill="#70757a">Vídeos</text>
    <text x="280" y="20" font-size="14" fill="#70757a">Shopping</text>
    <text x="365" y="20" font-size="14" fill="#70757a">Notícias</text>
    <text x="440" y="20" font-size="14" fill="#70757a">Vídeos curtos</text>
    <text x="550" y="20" font-size="14" fill="#70757a">Mais ▾</text>
    <text x="630" y="20" font-size="14" fill="#70757a">Ferramentas ▾</text>
  </g>

  <!-- Filter Pills -->
  <g transform="translate(180, 140)">
    <rect x="0" y="0" width="140" height="32" class="pill"/>
    <text x="15" y="21" font-size="13" fill="#3c4043">Estimativas on-line</text>

    <rect x="150" y="0" width="120" height="32" class="pill"/>
    <text x="165" y="21" font-size="13" fill="#3c4043">Abertos agora</text>

    <rect x="280" y="0" width="125" height="32" class="pill"/>
    <text x="295" y="21" font-size="13" fill="#3c4043">Bem avaliados</text>
  </g>

  <!-- Location Indicator -->
  <g transform="translate(180, 198)">
    <path d="M2 10L10 3L18 10V17H13V12H7V17H2V10Z" fill="none" stroke="#70757a" stroke-width="1.5"/>
    <text x="26" y="14" font-size="13" font-weight="bold" fill="#202124">R. Irmão Gabriel Lourenço da Veiga - Cidade Industrial, Curitib...</text>
    <text x="440" y="14" font-size="13" fill="#1a0dab">· Escolher região</text>
    <circle cx="560" cy="10" r="1.5" fill="#70757a"/>
    <circle cx="560" cy="14" r="1.5" fill="#70757a"/>
    <circle cx="560" cy="18" r="1.5" fill="#70757a"/>
  </g>

  <!-- Section Title: Empresas -->
  <g transform="translate(180, 248)">
    <text x="0" y="24" font-size="26" font-weight="bold" fill="#202124" font-family="'Google Sans', Arial, sans-serif">Empresas</text>
  </g>

  <!-- Business Card 1: Ecoservy -->
  <g transform="translate(180, 295)">
    <!-- Title -->
    <text x="0" y="22" font-size="20" font-weight="bold" fill="#202124" font-family="'Google Sans', Arial, sans-serif">Corte e Poda Ecoservy | Jardinagem</text>

    <!-- Rating Line -->
    <g transform="translate(0, 42)">
      <text x="0" y="0" font-size="14" font-weight="bold" fill="#202124">5,0</text>
      <g transform="translate(24, -11)">
        <polygon points="6,0 7.8,4.2 12,4.5 8.7,7.3 9.7,11.5 6,9.1 2.3,11.5 3.3,7.3 0,4.5 4.2,4.2" class="star"/>
        <polygon points="20,0 21.8,4.2 26,4.5 22.7,7.3 23.7,11.5 20,9.1 16.3,11.5 17.3,7.3 14,4.5 18.2,4.2" class="star"/>
        <polygon points="34,0 35.8,4.2 40,4.5 36.7,7.3 37.7,11.5 34,9.1 30.3,11.5 31.3,7.3 28,4.5 32.2,4.2" class="star"/>
        <polygon points="48,0 49.8,4.2 54,4.5 50.7,7.3 51.7,11.5 48,9.1 44.3,11.5 45.3,7.3 42,4.5 46.2,4.2" class="star"/>
        <polygon points="62,0 63.8,4.2 68,4.5 64.7,7.3 65.7,11.5 62,9.1 58.3,11.5 59.3,7.3 56,4.5 60.2,4.2" class="star"/>
      </g>
      <text x="96" y="0" font-size="14" fill="#70757a">(7) · Serviço de jardinagem</text>
    </g>

    <!-- Snippet Line -->
    <text x="0" y="66" font-size="14" fill="#4d5156">Podas de Árvores e Jardinagem - R. Carlos Klemtz,...</text>

    <!-- Status Line -->
    <g transform="translate(0, 88)">
      <text x="0" y="0" font-size="14" font-weight="bold" fill="#188038">Aberto 24 horas</text>
      <text x="115" y="0" font-size="14" fill="#70757a">· (41) 98807-2886</text>
    </g>

    <!-- Action Buttons -->
    <g transform="translate(390, 15)">
      <!-- Site Button -->
      <g transform="translate(0, 0)">
        <circle cx="22" cy="22" r="22" fill="#ffffff" stroke="#dadce0" stroke-width="1"/>
        <circle cx="22" cy="22" r="10" fill="none" stroke="#1a73e8" stroke-width="1.8"/>
        <line x1="12" y1="22" x2="32" y2="22" stroke="#1a73e8" stroke-width="1.5"/>
        <path d="M22 12 C18 16, 18 28, 22 32 C26 28, 26 16, 22 12 Z" fill="none" stroke="#1a73e8" stroke-width="1.5"/>
        <text x="22" y="58" font-size="12" fill="#1a73e8" text-anchor="middle">Site</text>
      </g>

      <!-- Rotas Button -->
      <g transform="translate(70, 0)">
        <circle cx="22" cy="22" r="22" fill="#ffffff" stroke="#dadce0" stroke-width="1"/>
        <path d="M22 12 L28 26 L22 23 L16 26 Z" fill="#1a73e8"/>
        <text x="22" y="58" font-size="12" fill="#1a73e8" text-anchor="middle">Rotas</text>
      </g>
    </g>
  </g>

  <!-- Map Container (Right side) -->
  <g transform="translate(750, 275)">
    <rect x="0" y="0" width="380" height="260" rx="12" fill="#e8eaed" stroke="#dadce0" stroke-width="1"/>
    
    <!-- Green Areas -->
    <path d="M 20 20 Q 80 50, 120 20 T 220 40 L 250 100 L 180 140 Z" fill="#ceebd0" opacity="0.8"/>
    <path d="M 240 120 Q 300 150, 360 110 L 370 240 L 200 250 Z" fill="#cdeacb" opacity="0.7"/>

    <!-- Roads -->
    <path d="M 0 160 Q 150 140, 380 180" stroke="#ffffff" stroke-width="8" fill="none"/>
    <path d="M 0 160 Q 150 140, 380 180" stroke="#fcd34d" stroke-width="4" fill="none"/>

    <path d="M 120 0 Q 140 130, 160 260" stroke="#ffffff" stroke-width="6" fill="none"/>
    <path d="M 280 0 L 260 260" stroke="#ffffff" stroke-width="5" fill="none"/>

    <!-- Map Labels -->
    <text x="80" y="100" font-size="11" font-weight="bold" fill="#5f6368" letter-spacing="0.5">SÃO BRAZ</text>
    <text x="40" y="150" font-size="11" font-weight="bold" fill="#70757a">ORLEANS</text>
    <text x="300" y="100" font-size="11" font-weight="bold" fill="#5f6368" letter-spacing="0.5">MERCÊS</text>
    <text x="210" y="180" font-size="11" font-weight="bold" fill="#70757a">BARIGUI</text>
    <text x="320" y="230" font-size="11" font-weight="bold" fill="#70757a">BATEL</text>

    <!-- Highway Shield 376 -->
    <g transform="translate(100, 210)">
      <rect x="0" y="0" width="28" height="18" rx="4" fill="#ffffff" stroke="#70757a" stroke-width="1"/>
      <text x="14" y="13" font-size="10" font-weight="bold" fill="#3c4043" text-anchor="middle">376</text>
    </g>

    <!-- Red Pin Location -->
    <g transform="translate(160, 130)">
      <path d="M12 0 C5.4 0 0 5.4 0 12 C0 21 12 34 12 34 C12 34 24 21 24 12 C24 5.4 18.6 0 12 0 Z" fill="#ea4335" stroke="#ffffff" stroke-width="1.5"/>
      <circle cx="12" cy="11" r="4.5" fill="#ffffff"/>
    </g>
  </g>

  <!-- Partial Business Entry 2 -->
  <g transform="translate(180, 440)">
    <text x="0" y="20" font-size="20" font-weight="bold" fill="#202124" font-family="'Google Sans', Arial, sans-serif">Corte Exato Corte e Poda De Árvores Em Curitiba</text>
    <text x="0" y="40" font-size="14" font-weight="bold" fill="#202124">5,0 <tspan font-weight="normal" fill="#70757a">★★★★★ (12) · Serviço de jardinagem</tspan></text>
  </g>

  <!-- Red Annotation Arrows (from original screenshot) -->
  <!-- Arrow 1 (Left): pointing down-right from Google area to Ecoservy title -->
  <g opacity="0.85">
    <path d="M 65 100 L 165 310" stroke="#d9534f" stroke-width="5" stroke-linecap="round"/>
    <polygon points="172,322 154,312 168,300" fill="#d9534f"/>
  </g>

  <!-- Arrow 2 (Right): pointing down-left from header to Empresas -->
  <g opacity="0.85">
    <path d="M 880 215 L 530 265" stroke="#d9534f" stroke-width="5" stroke-linecap="round"/>
    <polygon points="518,267 534,257 532,274" fill="#d9534f"/>
  </g>
</svg>`;

async function main() {
  const targetDir = path.join(process.cwd(), 'public', 'images', 'cases');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const svgPath = path.join(targetDir, 'case-ecoservy-corte-e-poda-google-maps.svg');
  const pngPath = path.join(targetDir, 'case-ecoservy-corte-e-poda-google-maps.png');

  fs.writeFileSync(svgPath, svgContent, 'utf-8');
  console.log('Saved SVG to:', svgPath);

  await sharp(Buffer.from(svgContent))
    .png({ quality: 100 })
    .toFile(pngPath);

  console.log('Saved PNG to:', pngPath);
}

main().catch(console.error);
