const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 760" width="1000" height="760" style="background:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <defs>
    <filter id="shadow" x="-2%" y="-2%" width="104%" height="104%">
      <feDropShadow dx="0" dy="1" stdDeviation="3" flood-color="#000" flood-opacity="0.12"/>
    </filter>
    <filter id="cardShadow" x="-3%" y="-3%" width="106%" height="106%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#000" flood-opacity="0.08"/>
    </filter>
  </defs>

  <!-- Google Header & Search Input -->
  <g transform="translate(30, 20)">
    <!-- Google Logo -->
    <g transform="translate(0, 4)">
      <path d="M22.5 10.8c0-.8-.1-1.5-.2-2.2H11.5v4.2h6.2c-.3 1.4-1.1 2.6-2.3 3.4v2.8h3.7c2.2-2 3.4-5 3.4-8.2z" fill="#4285F4"/>
      <path d="M11.5 22c3.1 0 5.7-1 7.6-2.8l-3.7-2.8c-1 1-2.4 1.5-3.9 1.5-3 0-5.5-2-6.4-4.8H1.2v3c1.9 3.8 5.8 6.1 10.3 6.1z" fill="#34A853"/>
      <path d="M5.1 13.1c-.2-.7-.3-1.4-.3-2.1s.1-1.4.3-2.1V5.9H1.2C.4 7.5 0 9.2 0 11s.4 3.5 1.2 5.1l3.9-3z" fill="#FBBC05"/>
      <path d="M11.5 4.4c1.7 0 3.2.6 4.4 1.7l3.3-3.3C17.2 1 14.6 0 11.5 0 7 0 3.1 2.3 1.2 6.1l3.9 3c.9-2.8 3.4-4.7 6.4-4.7z" fill="#EA4335"/>
    </g>

    <!-- Search Input Box -->
    <rect x="110" y="-10" width="760" height="46" rx="23" fill="#ffffff" stroke="#dfe1e5" stroke-width="1.5" filter="url(#shadow)"/>
    <text x="135" y="19" font-size="15" fill="#202124" font-weight="400">quem faz estrutura para galpoes em sao jose dos pinhais?</text>

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

  <!-- Horizontal Divider Line -->
  <line x1="0" y1="80" x2="1000" y2="80" stroke="#ebebeb" stroke-width="1"/>

  <!-- Main Content Container -->
  <g transform="translate(140, 98)">

    <!-- EVIDÊNCIA A: RESULTADO ORGÂNICO #1 - ALUMIMEC -->
    <g transform="translate(0, 0)">
      <!-- Highlight Frame for Evidence -->
      <rect x="-10" y="-8" width="680" height="118" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="6,4"/>
      
      <g transform="translate(0, 4)">
        <!-- Favicon Globe -->
        <circle cx="10" cy="10" r="10" fill="#1a73e8"/>
        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-1 13.93A6.5 6.5 0 014.5 10h3.1a12.5 12.5 0 001.4 5.93zm-3.5-7.43A6.5 6.5 0 019 3.07V9H5.5zm4.5-5.93c.7 1.6 1.2 3.7 1.4 5.93H10V3.07zm0 7.43v5.93c-.7-1.6-1.2-3.7-1.4-5.93H10zm1.5 5.93A12.5 12.5 0 0014.5 10h-3zm0-7.43H14.5a6.5 6.5 0 01-3.5 5.93V9z" fill="#ffffff" transform="translate(0, 0) scale(0.9)"/>

        <!-- Breadcrumb Text -->
        <text x="30" y="8" font-size="13" font-weight="500" fill="#202124">Alumimec Estruturas Metálicas</text>
        <text x="30" y="24" font-size="12" fill="#4d5156">https://alumimec.com.br <tspan fill="#70757a">› Cidades › São José Dos Pinhais</tspan></text>
        <!-- 3 dots -->
        <circle cx="360" cy="20" r="1.5" fill="#70757a"/>
        <circle cx="360" cy="24" r="1.5" fill="#70757a"/>
        <circle cx="360" cy="28" r="1.5" fill="#70757a"/>

        <!-- Organic Title -->
        <text x="0" y="52" font-size="19" font-weight="600" fill="#1a0dab" style="cursor:pointer;">Estruturas Metálicas em São José Dos Pinhais | Alumimec</text>

        <!-- Snippet -->
        <text x="0" y="74" font-size="13.5" fill="#4d5156" width="640">
          <tspan x="0" dy="0">O desenvolvimento econômico em São José Dos Pinhais demanda espaços amplos e versáteis. A</tspan>
          <tspan x="0" dy="18">Alumimec é especialista na fabricação e montagem de galpões metálicos, ...</tspan>
        </text>
      </g>

      <!-- Badge Badge Evidência Orgânica -->
      <g transform="translate(480, -2)">
        <rect x="0" y="0" width="180" height="22" rx="4" fill="#15803d"/>
        <text x="90" y="15" font-size="10" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">EVIDÊNCIA #1: GOOGLE ORGÂNICO</text>
      </g>
    </g>

    <!-- RESULTADO ORGÂNICO #2 - AMPLA PRÉ-MOLDADOS -->
    <g transform="translate(0, 130)">
      <!-- Favicon Triangle -->
      <polygon points="10,2 2,18 18,18" fill="#2e7d32"/>
      <path d="M10 6L5 15h10z" fill="#a5d6a7"/>
      
      <!-- Breadcrumb -->
      <text x="30" y="8" font-size="13" font-weight="500" fill="#202124">Ampla Pré-moldados</text>
      <text x="30" y="24" font-size="12" fill="#4d5156">https://amplapremoldados.com.br <tspan fill="#70757a">› pre-moldado › pre-...</tspan></text>
      <circle cx="350" cy="20" r="1.5" fill="#70757a"/>
      <circle cx="350" cy="24" r="1.5" fill="#70757a"/>
      <circle cx="350" cy="28" r="1.5" fill="#70757a"/>

      <!-- Title -->
      <text x="0" y="52" font-size="19" font-weight="600" fill="#1a0dab">Pré-moldados em São José dos Pinhais - PR</text>

      <!-- Snippet -->
      <text x="0" y="74" font-size="13.5" fill="#4d5156">
        <tspan x="0" dy="0">A empresa fabrica e monta pilares, vigas, lajes, placas de fechamento e galpões completos, oferecendo</tspan>
        <tspan x="0" dy="18">soluções sob medida para cada tipo de construção. Seja ...</tspan>
      </text>
    </g>

    <!-- EVIDÊNCIA B: GOOGLE LOCAL / MAPS SECTION -->
    <g transform="translate(0, 255)">
      <!-- Section Title -->
      <text x="0" y="20" font-size="21" font-weight="500" fill="#202124">Locais</text>

      <!-- Map Graphic Canvas -->
      <g transform="translate(0, 32)">
        <rect x="0" y="0" width="670" height="230" rx="12" fill="#d0e7dc" stroke="#dadce0" stroke-width="1"/>
        
        <!-- Water / River Areas -->
        <path d="M 0 60 Q 180 40 350 80 T 670 50 L 670 0 L 0 0 Z" fill="#aadaff" opacity="0.8"/>
        <path d="M 400 120 Q 520 90 670 140 L 670 230 L 380 230 Z" fill="#bce2cf" opacity="0.6"/>

        <!-- Main Highways / Roads -->
        <path d="M 50 230 L 220 150 L 380 110 L 670 190" fill="none" stroke="#ffffff" stroke-width="6"/>
        <path d="M 50 230 L 220 150 L 380 110 L 670 190" fill="none" stroke="#fbc02d" stroke-width="3"/>

        <path d="M 320 0 L 360 80 L 410 160 L 450 230" fill="none" stroke="#ffffff" stroke-width="5"/>
        <path d="M 320 0 L 360 80 L 410 160 L 450 230" fill="none" stroke="#f57c00" stroke-width="2.5"/>

        <path d="M 120 0 L 200 120 L 280 230" fill="none" stroke="#ffffff" stroke-width="4"/>
        <path d="M 120 0 L 200 120 L 280 230" fill="none" stroke="#ffffff" stroke-dasharray="4,4" stroke-width="2"/>

        <!-- Highway Shields -->
        <rect x="220" y="80" width="36" height="18" rx="4" fill="#ffffff" stroke="#70757a" stroke-width="1"/>
        <text x="238" y="93" font-size="10" font-weight="bold" fill="#3c4043" text-anchor="middle">PR-423</text>

        <rect x="390" y="115" width="36" height="18" rx="4" fill="#ffffff" stroke="#70757a" stroke-width="1"/>
        <text x="408" y="128" font-size="10" font-weight="bold" fill="#3c4043" text-anchor="middle">116</text>

        <rect x="525" y="160" width="32" height="16" rx="4" fill="#ffffff" stroke="#70757a" stroke-width="1"/>
        <text x="541" y="172" font-size="9" font-weight="bold" fill="#3c4043" text-anchor="middle">376</text>

        <!-- City Labels -->
        <text x="140" y="45" font-size="11" font-weight="600" fill="#5f6368">São Luiz do Purunã</text>
        <text x="260" y="32" font-size="12" font-weight="600" fill="#3c4043">Campo Largo</text>
        <text x="180" y="180" font-size="11" fill="#5f6368">Balsa Nova</text>
        <text x="330" y="150" font-size="12" font-weight="bold" fill="#202124">Araucária</text>
        <text x="460" y="195" font-size="12" font-weight="bold" fill="#202124">Fazenda Rio Grande</text>

        <!-- Red Location Pins on Map -->
        <!-- Pin 1: Alumimec Pin (Highlighted) -->
        <g transform="translate(420, 30)">
          <path d="M 0 0 C -6 -12 -10 -16 -10 -22 C -10 -28 -5 -32 0 -32 C 5 -32 10 -28 10 -22 C 10 -16 6 -12 0 0 Z" fill="#ea4335" stroke="#ffffff" stroke-width="1"/>
          <circle cx="0" cy="-22" r="4" fill="#ffffff"/>
          <!-- Label -->
          <rect x="12" y="-32" width="165" height="20" rx="4" fill="#ffffff" stroke="#ea4335" stroke-width="1.5" filter="url(#shadow)"/>
          <text x="18" y="-18" font-size="10.5" font-weight="bold" fill="#202124">Alumimec Estruturas Metálicas</text>
        </g>

        <!-- Pin 2: Projepar -->
        <g transform="translate(490, 25)">
          <path d="M 0 0 C -5 -10 -8 -13 -8 -18 C -8 -23 -4 -26 0 -26 C 4 -26 8 -23 8 -18 C 8 -13 5 -10 0 0 Z" fill="#ea4335"/>
          <circle cx="0" cy="-18" r="3" fill="#ffffff"/>
          <text x="10" y="-14" font-size="10" font-weight="bold" fill="#3c4043">PROJEPAR ESTRUTURAS...</text>
        </g>

        <!-- Pin 3: Todosgalpoes -->
        <g transform="translate(485, 80)">
          <path d="M 0 0 C -5 -10 -8 -13 -8 -18 C -8 -23 -4 -26 0 -26 C 4 -26 8 -23 8 -18 C 8 -13 5 -10 0 0 Z" fill="#ea4335"/>
          <circle cx="0" cy="-18" r="3" fill="#ffffff"/>
          <text x="10" y="-14" font-size="10" font-weight="bold" fill="#3c4043">Todosgalpoes. Aluguel de Galpoes</text>
        </g>

        <!-- Pin 4: CBR Construcoes -->
        <g transform="translate(285, 180)">
          <path d="M 0 0 C -5 -10 -8 -13 -8 -18 C -8 -23 -4 -26 0 -26 C 4 -26 8 -23 8 -18 C 8 -13 5 -10 0 0 Z" fill="#ea4335"/>
          <circle cx="0" cy="-18" r="3" fill="#ffffff"/>
          <text x="10" y="-14" font-size="10" font-weight="bold" fill="#3c4043">CBR Construções - Galpões pré...</text>
        </g>

        <!-- Map Fullscreen Icon -->
        <g transform="translate(630, 15)">
          <rect x="0" y="0" width="28" height="28" rx="14" fill="#3c4043" opacity="0.8"/>
          <path d="M8 12h2v-2h2V8H8v4zm8-4h-2v2h-2v2h4V8zm-4 12h2v-2h2v-2h-4v4zm-4-4h2v2h2v2H8v-4z" fill="#ffffff"/>
        </g>
        <text x="655" y="222" font-size="9" fill="#5f6368" text-anchor="end">Dados do mapa ©2026 Google  Termos</text>
      </g>

      <!-- Local Business Card #1 (Alumimec) -->
      <g transform="translate(0, 275)">
        <!-- Highlight Box for Evidence B -->
        <rect x="-10" y="-8" width="680" height="135" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="6,4"/>
        
        <!-- Business Name -->
        <text x="0" y="16" font-size="16.5" font-weight="700" fill="#1a0dab">Alumimec Estruturas Metálicas | Galpões, Coberturas, Est...</text>
        
        <!-- Rating & Category -->
        <g transform="translate(0, 34)">
          <text x="0" y="0" font-size="13" font-weight="700" fill="#3c4043">5,0</text>
          <!-- Stars -->
          <g transform="translate(24, -10)">
            <text x="0" y="9" font-size="13" fill="#f97316">★★★★★</text>
          </g>
          <text x="82" y="0" font-size="13" fill="#70757a">(13) · Fabricante de estruturas metálicas</text>
        </g>

        <!-- Address -->
        <text x="0" y="54" font-size="13" fill="#4d5156">Condomínio Galeria Camboriu Center - R. Dep. Arnaldo Faivro Busato, 168...</text>

        <!-- Status -->
        <g transform="translate(0, 74)">
          <text x="0" y="0" font-size="13" font-weight="700" fill="#d93025">Fechado</text>
          <text x="52" y="0" font-size="13" fill="#4d5156">· Abre ter. às 08:00</text>
        </g>

        <!-- Quote Review -->
        <g transform="translate(0, 96)">
          <circle cx="8" cy="-4" r="7" fill="#8ab4f8"/>
          <path d="M8 -8 C6 -8 5 -6 5 -4 C5 -2 6 0 8 0 C10 0 11 -2 11 -4 C11 -6 10 -8 8 -8 Z M5 2 C3 2 0 3 0 5 L16 5 C16 3 13 2 11 2 Z" fill="#ffffff" transform="translate(0, 0) scale(0.6)"/>
          <text x="22" y="0" font-size="12.5" fill="#4d5156" font-style="italic">“A equipe da Alumimec foi pontual, atenciosa e muito profissional.”</text>
        </g>

        <!-- Action Buttons (Site / Rotas) -->
        <g transform="translate(540, 15)">
          <!-- Site Button -->
          <g transform="translate(0, 0)" style="cursor:pointer;">
            <circle cx="20" cy="20" r="18" fill="#ffffff" stroke="#dadce0" stroke-width="1" filter="url(#shadow)"/>
            <circle cx="20" cy="20" r="8" fill="none" stroke="#1a73e8" stroke-width="1.8"/>
            <line x1="12" y1="20" x2="28" y2="20" stroke="#1a73e8" stroke-width="1.5"/>
            <text x="20" y="48" font-size="11" font-weight="500" fill="#1a73e8" text-anchor="middle">Site</text>
          </g>

          <!-- Rotas Button -->
          <g transform="translate(55, 0)" style="cursor:pointer;">
            <circle cx="20" cy="20" r="18" fill="#ffffff" stroke="#dadce0" stroke-width="1" filter="url(#shadow)"/>
            <path d="M 15 25 L 15 17 L 22 17 L 22 13 L 27 18 L 22 23 L 22 19 L 17 19 L 17 25 Z" fill="#1a73e8"/>
            <text x="20" y="48" font-size="11" font-weight="500" fill="#1a73e8" text-anchor="middle">Rotas</text>
          </g>
        </g>

        <!-- Badge Evidência Local -->
        <g transform="translate(480, 108)">
          <rect x="0" y="0" width="180" height="22" rx="4" fill="#0284c7"/>
          <text x="90" y="15" font-size="10" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">EVIDÊNCIA #2: GOOGLE LOCAL / MAPS</text>
        </g>
      </g>
    </g>
  </g>
</svg>`;

const svgPath = path.join(__dirname, '../public/images/cases/case-alumimec-estruturas-metalicas-sao-jose-dos-pinhais-google.svg');
const pngPath = path.join(__dirname, '../public/images/cases/case-alumimec-estruturas-metalicas-sao-jose-dos-pinhais-google.png');

fs.writeFileSync(svgPath, svgContent, 'utf8');

sharp(Buffer.from(svgContent))
  .png()
  .toFile(pngPath)
  .then(() => {
    console.log('Successfully generated PNG and SVG image files for Case Alumimec!');
  })
  .catch(err => {
    console.error('Error rendering PNG:', err);
  });
