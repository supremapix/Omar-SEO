import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1180 660" width="1180" height="660" style="background:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="1" stdDeviation="3" flood-color="#000" flood-opacity="0.1"/>
    </filter>
    <filter id="cardShadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#000" flood-opacity="0.08"/>
    </filter>
    <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ea4335"/>
      <stop offset="100%" stop-color="#c5221f"/>
    </linearGradient>
  </defs>

  <!-- Google Header -->
  <g transform="translate(30, 25)">
    <!-- Google Logo -->
    <path d="M22.5 10.8c0-.8-.1-1.5-.2-2.2H11.5v4.2h6.2c-.3 1.4-1.1 2.6-2.3 3.4v2.8h3.7c2.2-2 3.4-5 3.4-8.2z" fill="#4285F4"/>
    <path d="M11.5 22c3.1 0 5.7-1 7.6-2.8l-3.7-2.8c-1 1-2.4 1.5-3.9 1.5-3 0-5.5-2-6.4-4.8H1.2v3c1.9 3.8 5.8 6.1 10.3 6.1z" fill="#34A853"/>
    <path d="M5.1 13.1c-.2-.7-.3-1.4-.3-2.1s.1-1.4.3-2.1V5.9H1.2C.4 7.5 0 9.2 0 11s.4 3.5 1.2 5.1l3.9-3z" fill="#FBBC05"/>
    <path d="M11.5 4.4c1.7 0 3.2.6 4.4 1.7l3.3-3.3C17.2 1 14.6 0 11.5 0 7 0 3.1 2.3 1.2 6.1l3.9 3c.9-2.8 3.4-4.7 6.4-4.7z" fill="#EA4335"/>

    <!-- Search Box -->
    <rect x="110" y="-12" width="670" height="46" rx="23" fill="#ffffff" stroke="#e0e0e0" stroke-width="1" filter="url(#shadow)"/>
    <text x="140" y="17" font-size="15" fill="#202124" font-weight="400">qual empresa divisorias eucatex em curitiba</text>

    <!-- Search Box Icons -->
    <g transform="translate(670, 0)" fill="#70757a">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" transform="scale(0.8) translate(-10,-5)"/>
      <path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 5H5v-2h2v2zm0-3H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-3h-2v-2h2v2zm0-3h-2V8h2v2zm3 6h-2v-2h2v2zm0-3h-2v-2h2v2zm0-3h-2V8h2v2z" transform="scale(0.7) translate(30,-5)" fill="#70757a"/>
      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" transform="scale(0.7) translate(70,-5)" fill="#4285F4"/>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" transform="scale(0.7) translate(110,-5)" fill="#EA4335"/>
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" transform="scale(0.8) translate(125,-5)" fill="#4285F4"/>
    </g>
  </g>

  <!-- Navigation Tabs -->
  <g transform="translate(140, 85)" font-size="13" fill="#5f6368" font-weight="500">
    <text x="0" y="0">Modo IA</text>
    <text x="70" y="0" fill="#1a73e8" font-weight="700">Tudo</text>
    <line x1="68" y1="8" x2="106" y2="8" stroke="#1a73e8" stroke-width="3"/>
    <text x="125" y="0">Vagas de emprego</text>
    <text x="255" y="0">Shopping</text>
    <text x="330" y="0">Imagens</text>
    <text x="400" y="0">Vídeos curtos</text>
    <text x="495" y="0">Vídeos</text>
    <text x="555" y="0">Mais ▾</text>
    <text x="615" y="0">Ferramentas ▾</text>
  </g>
  <line x1="0" y1="98" x2="1180" y2="98" stroke="#ebebeb" stroke-width="1"/>

  <!-- Location Header -->
  <g transform="translate(140, 125)">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#70757a" transform="scale(0.7) translate(-5,-12)"/>
    <text x="18" y="0" font-size="13" font-weight="700" fill="#202124">Curitiba, PR</text>
    <text x="95" y="0" font-size="13" fill="#1a0dab">· Escolher região</text>
    <circle cx="210" cy="-4" r="2" fill="#70757a"/>
    <circle cx="210" cy="1" r="2" fill="#70757a"/>
    <circle cx="210" cy="6" r="2" fill="#70757a"/>
  </g>

  <!-- AI OVERVIEW SECTION -->
  <g transform="translate(140, 145)">
    <!-- AI Sparkles Header -->
    <g transform="translate(0, 0)">
      <path d="M12 23c0-6.075-4.925-11-11-11 6.075 0 11-4.925 11-11 0 6.075 4.925 11 11 11-6.075 0-11 4.925-11 11z" fill="#1a73e8" transform="scale(0.7)"/>
      <path d="M22 9c0-2.76-2.24-5-5-5 2.76 0 5-2.24 5-5 0 2.76 2.24 5 5 5-2.76 0-5 2.24-5 5z" fill="#4285F4" transform="scale(0.5) translate(28,-10)"/>
      <text x="28" y="13" font-size="14" font-weight="700" fill="#1a73e8">Visão geral criada por IA</text>
      <circle cx="185" cy="9" r="10" fill="#f1f3f4"/>
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" fill="#5f6368" transform="translate(178,2) scale(0.65)"/>
    </g>

    <!-- Paragraph 1 with Blue Highlight Box -->
    <g transform="translate(0, 32)">
      <rect x="0" y="0" width="510" height="38" rx="4" fill="#d2e3fc" opacity="0.85"/>
      <text x="8" y="16" font-size="13" font-weight="700" fill="#001d35">Várias empresas trabalham com a venda e instalação de divisórias Eucatex em</text>
      <text x="8" y="32" font-size="13" font-weight="700" fill="#001d35">Curitiba e região metropolitana .</text>
      <rect x="200" y="20" width="105" height="16" rx="8" fill="#e8eaed"/>
      <text x="208" y="31" font-size="10" fill="#3c4043" font-weight="600">D Comfort Divisórias +1</text>
    </g>

    <!-- Paragraph 2 -->
    <text x="0" y="92" font-size="13.5" fill="#202124">Aqui estão algumas das principais opções locais:</text>

    <!-- Bullet 1 (Redacted with red line as in real screenshot) -->
    <g transform="translate(0, 112)">
      <text x="0" y="12" font-size="13" fill="#202124">• </text>
      <rect x="14" y="2" width="130" height="14" fill="#1a73e8" opacity="0.2"/>
      <line x1="14" y1="9" x2="140" y2="9" stroke="#d93025" stroke-width="2.5"/>
      <text x="145" y="12" font-size="13" fill="#202124">: Localizada no bairro Mercês (Rua Padre Anchieta, 1150), atende</text>
      <text x="16" y="30" font-size="13" fill="#202124">Curitiba e região com linhas como Divilux e Naval. Contato: (41) 3335-2790 / (41)</text>
      <line x1="16" y1="46" x2="115" y2="46" stroke="#d93025" stroke-width="2.5"/>
      <text x="16" y="50" font-size="13" fill="#202124">99604-5297. </text>
      <circle cx="110" cy="46" r="6" fill="#1a0dab"/>
    </g>

    <!-- Bullet 2 (Comfort Divisórias - PROMINENT) -->
    <g transform="translate(0, 180)">
      <text x="0" y="12" font-size="13" fill="#202124">• </text>
      <text x="14" y="12" font-size="13.5" font-weight="700" fill="#1a0dab" stroke="#1a0dab" stroke-width="0.3">Comfort Divisórias</text>
      <text x="135" y="12" font-size="13" fill="#202124">: Atende Curitiba e São José dos Pinhais com foco em preço direto</text>
      <text x="16" y="30" font-size="13" fill="#202124">da fábrica e instalação rápida. Contato/WhatsApp: (41) 99141-1814.</text>
      <rect x="420" y="20" width="115" height="18" rx="9" fill="#e8eaed"/>
      <text x="428" y="32" font-size="10" fill="#3c4043" font-weight="600">D Comfort Divisórias</text>
    </g>

    <!-- Bullet 3 (Faded Decorart) -->
    <g transform="translate(0, 235)" opacity="0.35">
      <text x="0" y="12" font-size="13" fill="#202124">• Decorart Divisórias: Especializada em divisórias Eucatex, comerciais e drywall para</text>
    </g>

    <!-- Mostrar Mais Button -->
    <g transform="translate(0, 262)">
      <rect x="0" y="0" width="460" height="34" rx="17" fill="#ffffff" stroke="#dadce0" stroke-width="1"/>
      <text x="190" y="21" font-size="13" font-weight="600" fill="#1a73e8">Mostrar mais ▾</text>
    </g>

    <!-- RIGHT SIDE CARDS (AI Overview Sources) -->
    <g transform="translate(560, 0)">
      <!-- Side Card 1: Comfort Divisórias (Main Target) -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="250" height="108" rx="16" fill="#ffffff" stroke="#dadce0" stroke-width="1" filter="url(#cardShadow)"/>
        <circle cx="20" cy="20" r="8" fill="#202124"/>
        <text x="17" y="23" font-size="9" fill="#ffffff" font-weight="700">D</text>
        <text x="34" y="23" font-size="11" font-weight="600" fill="#202124">Comfort Divisórias</text>
        <circle cx="232" cy="18" r="1.5" fill="#70757a"/>
        <circle cx="232" cy="22" r="1.5" fill="#70757a"/>
        <circle cx="232" cy="26" r="1.5" fill="#70757a"/>

        <text x="14" y="44" font-size="12" font-weight="700" fill="#1a0dab">Divisórias Eucatex e Naval em</text>
        <text x="14" y="58" font-size="12" font-weight="700" fill="#1a0dab">Curitiba - Preço Direto da Fábrica |...</text>

        <text x="14" y="76" font-size="9.5" fill="#5f6368">• Company: Comfort Divisórias (São José dos</text>
        <text x="14" y="88" font-size="9.5" fill="#5f6368">Pinhais, PR) • Service Area: Curitiba, São...</text>

        <rect x="180" y="40" width="56" height="52" rx="6" fill="#e0e0e0"/>
        <rect x="182" y="42" width="52" height="48" rx="4" fill="#9e9e9e"/>
        <line x1="198" y1="42" x2="198" y2="90" stroke="#ffffff" stroke-width="1.5"/>
        <line x1="214" y1="42" x2="214" y2="90" stroke="#ffffff" stroke-width="1.5"/>
      </g>

      <!-- Side Card 2: Unika Divisórias -->
      <g transform="translate(0, 120)">
        <rect x="0" y="0" width="250" height="85" rx="16" fill="#ffffff" stroke="#dadce0" stroke-width="1" filter="url(#cardShadow)"/>
        <circle cx="20" cy="18" r="7" fill="#ea4335" opacity="0.8"/>
        <text x="34" y="21" font-size="10.5" font-weight="500" fill="#5f6368">Unika Divisórias</text>
        <circle cx="232" cy="16" r="1.5" fill="#70757a"/>
        <circle cx="232" cy="20" r="1.5" fill="#70757a"/>
        <circle cx="232" cy="24" r="1.5" fill="#70757a"/>

        <text x="14" y="40" font-size="11.5" font-weight="700" fill="#1a0dab">Divisória Eucatex no Boqueirão</text>

        <text x="14" y="56" font-size="9.5" fill="#5f6368">Divisória Eucatex no Boqueirão. A Unika</text>
        <text x="14" y="68" font-size="9.5" fill="#5f6368">Divisórias trabalha com Divisória Eucatex n...</text>

        <rect x="180" y="34" width="56" height="42" rx="6" fill="#e6c687"/>
      </g>
    </g>
  </g>

  <line x1="140" y1="465" x2="980" y2="465" stroke="#f1f3f4" stroke-width="1"/>

  <!-- ORGANIC SEARCH RESULT (BELOW AI OVERVIEW) -->
  <g transform="translate(140, 480)">
    <!-- Favicon & Domain Header -->
    <circle cx="12" cy="12" r="11" fill="#202124"/>
    <text x="8" y="16" font-size="11" fill="#ffffff" font-weight="800">D</text>

    <text x="32" y="11" font-size="13" font-weight="500" fill="#202124">Comfort Divisórias</text>
    <text x="32" y="26" font-size="11" fill="#4d5156">https://comfortdivisorias.com.br</text>
    <circle cx="205" cy="22" r="1.5" fill="#70757a"/>
    <circle cx="205" cy="26" r="1.5" fill="#70757a"/>
    <circle cx="205" cy="30" r="1.5" fill="#70757a"/>

    <!-- Organic Title -->
    <text x="0" y="52" font-size="18" font-weight="400" fill="#1a0dab">Comfort Divisórias: Divisórias Eucatex e Naval em Curitiba ...</text>

    <!-- Organic Snippet -->
    <text x="0" y="74" font-size="13" font-weight="700" fill="#4d5156">Comfort Divisórias</text>
    <text x="110" y="74" font-size="13" fill="#4d5156">- Especialistas em instalação de divisórias de Eucatex, Drywall, Naval e forros em</text>
    <text x="0" y="91" font-size="13" fill="#4d5156">Curitiba e São José dos Pinhais.</text>
  </g>

  <!-- ANNOTATION ARROWS (Matching exact red arrows in user screenshot) -->
  <path d="M 950,55 L 820,130" fill="none" stroke="url(#arrowGrad)" stroke-width="5" stroke-linecap="round"/>
  <polygon points="820,130 835,118 832,135" fill="#c5221f"/>

  <path d="M 460,205 L 680,205" fill="none" stroke="url(#arrowGrad)" stroke-width="4.5" stroke-linecap="round"/>
  <polygon points="680,205 668,198 668,212" fill="#c5221f"/>

  <path d="M 490,285 L 420,285" fill="none" stroke="url(#arrowGrad)" stroke-width="4.5" stroke-linecap="round"/>
  <polygon points="420,285 432,278 432,292" fill="#c5221f"/>

  <path d="M 50,70 L 160,250" fill="none" stroke="url(#arrowGrad)" stroke-width="5" stroke-linecap="round"/>
  <polygon points="160,250 148,238 162,238" fill="#c5221f"/>

  <path d="M 50,220 L 140,510" fill="none" stroke="url(#arrowGrad)" stroke-width="5" stroke-linecap="round"/>
  <polygon points="140,510 128,498 142,498" fill="#c5221f"/>

  <path d="M 920,580 L 680,580" fill="none" stroke="url(#arrowGrad)" stroke-width="5" stroke-linecap="round"/>
  <polygon points="680,580 695,572 695,588" fill="#c5221f"/>
</svg>`;

async function main() {
  const targetDir = path.join(process.cwd(), 'public', 'images', 'cases');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const svgPath = path.join(targetDir, 'case-comfort-divisorias-eucatex-google-ai.svg');
  const pngPath = path.join(targetDir, 'case-comfort-divisorias-eucatex-google-ai.png');

  fs.writeFileSync(svgPath, svgContent, 'utf-8');
  console.log('Saved SVG to:', svgPath);

  await sharp(Buffer.from(svgContent))
    .png({ quality: 100 })
    .toFile(pngPath);
  console.log('Saved PNG to:', pngPath);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
