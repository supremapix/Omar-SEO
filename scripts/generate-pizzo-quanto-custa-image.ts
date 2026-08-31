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
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#c0392b" />
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
    <text x="120" y="17" font-size="15" fill="#202124" font-weight="400">Quanto Custa Gerenciar Obra em Balneário Camboriú?</text>

    <!-- Search Box Right Controls -->
    <g transform="translate(650, 0)">
      <!-- Close X -->
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#70757a" transform="translate(-40, -3) scale(0.8)"/>
      <line x1="-12" y1="-2" x2="-12" y2="22" stroke="#dadce0" stroke-width="1"/>
      
      <!-- Keyboard icon -->
      <rect x="-3" y="1" width="18" height="14" rx="2" fill="none" stroke="#70757a" stroke-width="1.5"/>
      
      <!-- Mic icon -->
      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" fill="#4285F4" transform="translate(20, -2) scale(0.8)"/>
      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" fill="#34A853" transform="translate(20, -2) scale(0.8)"/>

      <!-- Camera Lens icon -->
      <circle cx="58" cy="9" r="5" fill="none" stroke="#FBBC05" stroke-width="2"/>
      
      <!-- Search Glass icon -->
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#4285F4" transform="translate(80, -4) scale(0.9)"/>
    </g>
  </g>

  <!-- Google Nav Tabs -->
  <g transform="translate(30, 80)">
    <text x="0" y="0" font-size="12" fill="#5f6368">Modo IA</text>
    <text x="60" y="0" font-size="12" fill="#1a73e8" font-weight="600">Tudo</text>
    <line x1="58" y1="6" x2="90" y2="6" stroke="#1a73e8" stroke-width="3"/>
    <text x="110" y="0" font-size="12" fill="#5f6368">Imagens</text>
    <text x="175" y="0" font-size="12" fill="#5f6368">Vídeos</text>
    <text x="230" y="0" font-size="12" fill="#5f6368">Shopping</text>
    <text x="300" y="0" font-size="12" fill="#5f6368">Notícias</text>
    <text x="365" y="0" font-size="12" fill="#5f6368">Vídeos curtos</text>
    <text x="455" y="0" font-size="12" fill="#5f6368">Mais ▾</text>
    <text x="520" y="0" font-size="12" fill="#5f6368">Ferramentas</text>
  </g>

  <!-- Divider Line -->
  <line x1="30" y1="95" x2="970" y2="95" stroke="#f1f3f4" stroke-width="1"/>

  <!-- AI OVERVIEW SECTION -->
  <g transform="translate(30, 115)">
    <!-- AI Overview Sparkle Icon + Title -->
    <path d="M10 2L13 7L18 10L13 13L10 18L7 13L2 10L7 7Z" fill="#1a73e8"/>
    <text x="24" y="14" font-size="14" fill="#1a73e8" font-weight="600">Visão geral criada por IA</text>
    
    <!-- Audio Icon -->
    <circle cx="210" cy="10" r="10" fill="#e8f0fe"/>
    <path d="M207 7.5v5l3.5-2.5z" fill="#1a73e8"/>

    <!-- Left Content Box of AI Overview -->
    <g transform="translate(0, 32)">
      <!-- Paragraph 1 with highlights -->
      <g transform="translate(0, 0)">
        <text x="0" y="0" font-size="13.5" fill="#202124">
          <tspan x="0" dy="0">O custo para gerenciar uma obra em Balneário Camboriú </tspan>
        </text>

        <!-- Highlight background block 1 -->
        <rect x="360" y="-12" width="205" height="18" fill="#d3e3fd" rx="2"/>
        <text x="362" y="0" font-size="13.5" fill="#041e49" font-weight="700">varia de 10% a 20% sobre o</text>

        <!-- Highlight background block 2 -->
        <rect x="0" y="8" width="245" height="18" fill="#d3e3fd" rx="2"/>
        <text x="2" y="22" font-size="13.5" fill="#041e49" font-weight="700">custo total da construção ou reforma</text>
        
        <text x="250" y="22" font-size="13.5" fill="#202124">, dependendo do escopo e do padrão do</text>
        <text x="0" y="44" font-size="13.5" fill="#202124">imóvel.</text>

        <!-- Source Tag 1 -->
        <g transform="translate(50, 31)">
          <rect x="0" y="0" width="165" height="18" rx="9" fill="#f1f3f4"/>
          <circle cx="9" cy="9" r="5" fill="#5f6368"/>
          <text x="18" y="13" font-size="10.5" fill="#5f6368">Legado Reforma e Constru...</text>
        </g>
      </g>

      <!-- Paragraph 2 -->
      <g transform="translate(0, 75)">
        <text x="0" y="0" font-size="13.5" fill="#202124">Para projetos de grande porte ou corporativos, o valor pode ser calculado por um</text>
        <text x="0" y="22" font-size="13.5" fill="#202124">percentual do Valor Geral de Venda ou de Obra (VGV), oscilando entre </text>
        
        <!-- Highlight 2 -->
        <rect x="445" y="8" width="62" height="18" fill="#d3e3fd" rx="2"/>
        <text x="448" y="22" font-size="13.5" fill="#041e49" font-weight="700">2% e 4%</text>
        
        <text x="510" y="22" font-size="13.5" fill="#202124"> para</text>
        <text x="0" y="44" font-size="13.5" fill="#202124">grandes empreendimentos.</text>

        <!-- Source Tag 2 (oHub) -->
        <g transform="translate(170, 31)">
          <rect x="0" y="0" width="60" height="18" rx="9" fill="#f1f3f4"/>
          <circle cx="9" cy="9" r="5" fill="#ff6600"/>
          <text x="18" y="13" font-size="10.5" fill="#5f6368">oHub</text>
        </g>
      </g>

      <!-- Modalidades de Cobrança Subtitle & Button -->
      <g transform="translate(0, 150)">
        <text x="0" y="0" font-size="16" fill="#70757a" font-weight="400">Modalidades de Cobrança</text>

        <rect x="50" y="25" width="470" height="36" rx="18" fill="#ffffff" stroke="#dadce0" stroke-width="1"/>
        <text x="285" y="48" font-size="13" fill="#1a73e8" font-weight="500" text-anchor="middle">Mostrar mais  ∨</text>
      </g>
    </g>

    <!-- Right Side Cards inside AI Overview -->
    <g transform="translate(630, 0)">
      <!-- AI CARD 1: www.pizzoo.com.br (TARGET CARD 1) -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="310" height="118" rx="16" fill="#ffffff" stroke="#e8eaed" stroke-width="1" filter="url(#cardShadow)"/>
        
        <!-- Favicon -->
        <circle cx="22" cy="22" r="10" fill="#f1f3f4"/>
        <circle cx="22" cy="22" r="6" fill="none" stroke="#70757a" stroke-width="1.2"/>
        <line x1="16" y1="22" x2="28" y2="22" stroke="#70757a" stroke-width="1.2"/>
        
        <text x="40" y="25" font-size="12" fill="#3c4043" font-weight="400">www.pizzoo.com.br</text>
        
        <!-- 3 dots -->
        <circle cx="292" cy="20" r="1.5" fill="#70757a"/>
        <circle cx="292" cy="24" r="1.5" fill="#70757a"/>
        <circle cx="292" cy="28" r="1.5" fill="#70757a"/>

        <!-- Title -->
        <text x="16" y="52" font-size="13" fill="#1a0dab" font-weight="500">
          <tspan x="16" dy="0">Quanto Custa Gerenciar Obra em Balneário</tspan>
          <tspan x="16" dy="16">Camboriú?</tspan>
        </text>

        <!-- Snippet text -->
        <text x="16" y="90" font-size="11" fill="#4d5156">
          <tspan x="16" dy="0">18 de ago. de 2026 — 1. O que Influencia o Valor do</tspan>
          <tspan x="16" dy="14">Gerenciamento de Obras em Balneário Camboriú? O cust...</tspan>
        </text>
      </g>

      <!-- AI CARD 2: oHub -->
      <g transform="translate(0, 128)">
        <rect x="0" y="0" width="310" height="110" rx="16" fill="#ffffff" stroke="#e8eaed" stroke-width="1" filter="url(#cardShadow)"/>
        
        <!-- Favicon oHub -->
        <circle cx="22" cy="22" r="10" fill="#ff6600"/>
        <text x="22" y="26" font-size="10" fill="#ffffff" text-anchor="middle" font-weight="bold">o</text>
        
        <text x="40" y="25" font-size="12" fill="#3c4043" font-weight="400">oHub</text>

        <!-- 3 dots -->
        <circle cx="292" cy="20" r="1.5" fill="#70757a"/>
        <circle cx="292" cy="24" r="1.5" fill="#70757a"/>
        <circle cx="292" cy="28" r="1.5" fill="#70757a"/>
        
        <!-- Title -->
        <text x="16" y="52" font-size="12.5" fill="#1a0dab" font-weight="500">
          <tspan x="16" dy="0">Quanto custa uma gerenciadora de obras no Brasil -</tspan>
          <tspan x="16" dy="16">oHub Base</tspan>
        </text>

        <!-- Snippet text -->
        <text x="16" y="90" font-size="10.5" fill="#4d5156">
          <tspan x="16" dy="0">7 de jul. de 2026 — Em obras entre R$ 5 e R$ 50 milhões,</tspan>
          <tspan x="16" dy="14">a gerenciadora é regra. O honorário oscila entre 2% e 4%...</tspan>
        </text>
      </g>
    </g>
  </g>

  <!-- ORGANIC SEARCH RESULT (pizzoo.com.br) -->
  <g transform="translate(30, 480)">
    <!-- Favicon -->
    <circle cx="16" cy="16" r="10" fill="#f1f3f4"/>
    <circle cx="16" cy="16" r="6" fill="none" stroke="#70757a" stroke-width="1.2"/>
    <line x1="10" y1="16" x2="22" y2="16" stroke="#70757a" stroke-width="1.2"/>
    
    <text x="36" y="14" font-size="13" fill="#202124" font-weight="400">pizzoo.com.br</text>
    <text x="36" y="28" font-size="11" fill="#4d5156">https://www.pizzoo.com.br › Blog</text>

    <!-- 3 dots -->
    <circle cx="560" cy="16" r="1.5" fill="#70757a"/>
    <circle cx="560" cy="20" r="1.5" fill="#70757a"/>
    <circle cx="560" cy="24" r="1.5" fill="#70757a"/>

    <!-- Organic Title (Blue Link) -->
    <text x="0" y="55" font-size="18" fill="#1a0dab" font-weight="400">Quanto Custa Gerenciar Obra em Balneário Camboriú?</text>

    <!-- Snippet text -->
    <text x="0" y="78" font-size="13" fill="#4d5156">
      <tspan x="0" dy="0">18 de ago. de 2026 — O custo de gerenciamento não é um valor genérico ou tabelado; ele reflete a</tspan>
      <tspan x="0" y="98">complexidade e os desafios específicos de cada projeto: Metragem ...</tspan>
    </text>
  </g>

  <!-- RED ANNOTATION ARROWS (Matching user image exact arrows) -->
  <!-- Arrow 1: From query/AI overview text to top right AI card (www.pizzoo.com.br) -->
  <path d="M 460 38 Q 540 80, 680 145" fill="none" stroke="#c0392b" stroke-width="5" stroke-linecap="round" marker-end="url(#redArrow)"/>
  
  <!-- Arrow 2: From query area curving down to Organic Result (pizzoo.com.br) -->
  <path d="M 410 40 Q 280 220, 160 520" fill="none" stroke="#c0392b" stroke-width="5" stroke-linecap="round" marker-end="url(#redArrow)"/>
</svg>`;

async function main() {
  const svgPath = path.join(outputDir, 'case-pizzo-quanto-custa-gerenciar-obra-balneario-camboriu-google-ai.svg');
  const pngPath = path.join(outputDir, 'case-pizzo-quanto-custa-gerenciar-obra-balneario-camboriu-google-ai.png');

  fs.writeFileSync(svgPath, svgContent, 'utf-8');
  console.log(`Saved SVG: ${svgPath}`);

  await sharp(Buffer.from(svgContent))
    .png({ quality: 95 })
    .toFile(pngPath);

  console.log(`Saved PNG: ${pngPath}`);
}

main().catch(console.error);
