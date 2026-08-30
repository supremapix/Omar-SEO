import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const outputDir = path.join(process.cwd(), 'public', 'images', 'cases');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 1. AI Overview SVG
const aiOverviewSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="1000" height="700" style="background:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="1" stdDeviation="3" flood-color="#000" flood-opacity="0.1"/>
    </filter>
    <filter id="cardShadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#000" flood-opacity="0.08"/>
    </filter>
  </defs>

  <!-- Google Search Header -->
  <g transform="translate(30, 20)">
    <!-- Google Logo -->
    <path d="M22.5 10.8c0-.8-.1-1.5-.2-2.2H11.5v4.2h6.2c-.3 1.4-1.1 2.6-2.3 3.4v2.8h3.7c2.2-2 3.4-5 3.4-8.2z" fill="#4285F4"/>
    <path d="M11.5 22c3.1 0 5.7-1 7.6-2.8l-3.7-2.8c-1 1-2.4 1.5-3.9 1.5-3 0-5.5-2-6.4-4.8H1.2v3c1.9 3.8 5.8 6.1 10.3 6.1z" fill="#34A853"/>
    <path d="M5.1 13.1c-.2-.7-.3-1.4-.3-2.1s.1-1.4.3-2.1V5.9H1.2C.4 7.5 0 9.2 0 11s.4 3.5 1.2 5.1l3.9-3z" fill="#FBBC05"/>
    <path d="M11.5 4.4c1.7 0 3.2.6 4.4 1.7l3.3-3.3C17.2 1 14.6 0 11.5 0 7 0 3.1 2.3 1.2 6.1l3.9 3c.9-2.8 3.4-4.7 6.4-4.7z" fill="#EA4335"/>

    <!-- Search Input Box -->
    <rect x="110" y="-12" width="670" height="46" rx="23" fill="#ffffff" stroke="#e0e0e0" stroke-width="1" filter="url(#shadow)"/>
    <text x="140" y="17" font-size="15" fill="#202124" font-weight="400">quem vende casas pre fabricadas meu terreno pelo menor preço?</text>

    <!-- Search Controls Icons -->
    <g transform="translate(710, 2)" fill="#70757a">
      <!-- Clear icon -->
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" transform="scale(0.7) translate(-35,-12)"/>
      <!-- Keyboard -->
      <rect x="0" y="-4" width="16" height="11" rx="2" fill="none" stroke="#70757a" stroke-width="1.2"/>
      <!-- Mic -->
      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" transform="scale(0.65) translate(40,-12)" fill="#4285F4"/>
      <!-- Lens -->
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5z" transform="scale(0.65) translate(75,-12)" fill="#70757a"/>
      <!-- Search magnifier -->
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5z" transform="scale(0.65) translate(110,-12)" fill="#4285F4"/>
    </g>
  </g>

  <!-- Navigation Sub-bar -->
  <g transform="translate(100, 75)" font-size="13" font-weight="500" fill="#5f6368">
    <text x="0" y="0" fill="#1a73e8" font-weight="700">✦ Modo IA</text>
    <text x="75" y="0" fill="#1a73e8" font-weight="700">Tudo</text>
    <line x1="75" y1="8" x2="105" y2="8" stroke="#1a73e8" stroke-width="3"/>
    <text x="125" y="0">Shopping</text>
    <text x="195" y="0">Imagens</text>
    <text x="260" y="0">Vídeos</text>
    <text x="320" y="0">Notícias</text>
    <text x="385" y="0">Web</text>
    <text x="430" y="0">Mais ▾</text>
    <text x="490" y="0">Ferramentas</text>
  </g>
  <line x1="0" y1="92" x2="1000" y2="92" stroke="#ebebeb" stroke-width="1"/>

  <!-- MAIN AI OVERVIEW CONTENT -->
  <g transform="translate(100, 115)">
    <!-- Header AI Overview -->
    <g transform="translate(0, 0)">
      <!-- AI Sparkle Icon -->
      <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" fill="#1a73e8" transform="translate(0, 2)"/>
      <text x="18" y="13" font-size="14" font-weight="700" fill="#202124">Visão geral criada por IA</text>
      <!-- Audio icon -->
      <circle cx="185" cy="8" r="9" fill="#f1f3f4"/>
      <path d="M182 6v4l3-2z" fill="#5f6368"/>
    </g>

    <!-- Left Text Column (~580px width) -->
    <g transform="translate(0, 35)" font-size="13.5" fill="#3c4043" font-weight="400">
      <text x="0" y="0">Em Curitiba e região metropolitana, empresas tradicionais como a <tspan font-weight="700" fill="#1a0dab" text-decoration="underline">bricasa Curitiba</tspan>, a</text>
      <text x="0" y="22"><tspan font-weight="700" fill="#1a0dab" text-decoration="underline">Casas Pinheirão</tspan> e a <tspan font-weight="700" fill="#1a0dab" text-decoration="underline">Eng-Casas</tspan> constroem casas pré-fabricadas e pré-moldadas direto</text>
      <text x="0" y="44">no seu terreno com preços competitivos.</text>
      
      <!-- Link pill badge -->
      <g transform="translate(255, 30)">
        <rect x="0" y="0" width="125" height="18" rx="9" fill="#f1f3f4" stroke="#dadce0" stroke-width="0.8"/>
        <circle cx="9" cy="9" r="4" fill="#ea4335"/>
        <text x="17" y="13" font-size="10" fill="#3c4043">www.casaspinheirao.a... +2</text>
      </g>

      <!-- Paragraph 2 -->
      <g transform="translate(0, 75)">
        <text x="0" y="0">O <tspan font-weight="700" fill="#202124">menor preço</tspan> depende do tamanho da casa e do material escolhido (madeira de pinus</text>
        <text x="0" y="20">costuma ser a opção mais barata em comparação à alvenaria ou madeira nobre).</text>
        <g transform="translate(485, 7)">
          <rect x="0" y="0" width="105" height="18" rx="9" fill="#f1f3f4" stroke="#dadce0" stroke-width="0.8"/>
          <circle cx="9" cy="9" r="4" fill="#fbbc05"/>
          <text x="17" y="13" font-size="10" fill="#3c4043">Minha Casa Pré-Fabric... +1</text>
        </g>
      </g>

      <!-- Subtitle: Opções com bom custo-benefício -->
      <g transform="translate(0, 130)">
        <text x="0" y="0" font-size="14" font-weight="700" fill="#202124">Opções com bom custo-benefício na região</text>
        
        <!-- Bullet 1 -->
        <text x="0" y="24" font-weight="700" fill="#202124">• Casas de Madeira Básicas (Kits econômicos): <tspan font-weight="400" fill="#3c4043">Modelos compactos de até 50m² em</tspan></text>
        <text x="12" y="44">pinus podem ser encontrados com valores iniciais entre <tspan font-weight="700" fill="#202124">R$ 40.000 e R$ 60.000</tspan></text>
        <text x="12" y="64">(apenas a estrutura/kit ou com variações de montagem básica).</text>

        <!-- Bullet 2 -->
        <text x="0" y="92" font-weight="700" fill="#202124">• Casas de Alvenaria Compactas: <tspan font-weight="400" fill="#3c4043">Ofertas promocionais de casas prontas menores</tspan></text>
        <text x="12" y="112">(em torno de 36m²) partem de cerca de <tspan font-weight="700" fill="#202124">R$ 61.900</tspan> em construtoras locais focadas em</text>
        <text x="12" y="132">padrão popular.</text>
      </g>

      <!-- Subtitle: O que você precisa saber -->
      <g transform="translate(0, 290)">
        <text x="0" y="0" font-size="14" font-weight="700" fill="#202124">O que você precisa saber sobre o preço final</text>
        <text x="0" y="24" font-weight="700" fill="#202124">• O "Kit" não é a casa pronta: <tspan font-weight="400" fill="#3c4043">O valor mais baixo geralmente se refere apenas ao kit de...</tspan></text>
      </g>
    </g>

    <!-- Right Side Cards Stack (Width ~260px) -->
    <g transform="translate(605, 10)">
      <rect x="0" y="0" width="275" height="490" rx="20" fill="#f8f9fa" stroke="#e8eaed" stroke-width="1"/>

      <!-- Card 1: Casas Pinheirão com.br -->
      <g transform="translate(12, 12)">
        <rect x="0" y="0" width="251" height="135" rx="14" fill="#ffffff" stroke="#e8eaed" stroke-width="1" filter="url(#cardShadow)"/>
        <!-- Content -->
        <circle cx="14" cy="18" r="7" fill="#4285f4"/>
        <text x="27" y="21" font-size="11" font-weight="600" fill="#202124">Casas Pinheirão</text>
        <text x="0" y="42" font-size="12" font-weight="700" fill="#1a0dab" width="160">Casas Pinheirão: Realize o</text>
        <text x="0" y="58" font-size="12" font-weight="700" fill="#1a0dab">Sonho da Casa Própria</text>
        <text x="0" y="78" font-size="10" fill="#5f6368">Casas Pinheirão: Especialista em casas pré-</text>
        <text x="0" y="92" font-size="10" fill="#5f6368">fabricadas de madeira e alvenaria em...</text>
        <!-- House Image Thumbnail -->
        <rect x="180" y="38" width="58" height="58" rx="8" fill="#e0e0e0"/>
        <path d="M185 85 L209 50 L233 85 Z" fill="#8d6e63"/>
        <rect x="195" y="70" width="28" height="25" fill="#d7ccc8"/>
      </g>

      <!-- Card 2: Minha Casa Pré-Fabricada -->
      <g transform="translate(12, 158)">
        <rect x="0" y="0" width="251" height="135" rx="14" fill="#ffffff" stroke="#e8eaed" stroke-width="1" filter="url(#cardShadow)"/>
        <circle cx="14" cy="18" r="7" fill="#fbbc05"/>
        <text x="27" y="21" font-size="11" font-weight="600" fill="#202124">Minha Casa Pré-Fabricada</text>
        <text x="0" y="42" font-size="12" font-weight="700" fill="#1a0dab">Casas Pré Moldadas Valores: Tabela</text>
        <text x="0" y="58" font-size="12" font-weight="700" fill="#1a0dab">de Preços Atualizada |...</text>
        <text x="0" y="76" font-size="10" fill="#70757a">29 de ago. de 2026 — <tspan fill="#5f6368">Casas Pré Moldadas: Valores, Tabelas de Preço e O que Você...</tspan></text>
        <rect x="180" y="38" width="58" height="58" rx="8" fill="#c8e6c9"/>
        <path d="M185 85 L209 52 L233 85 Z" fill="#388e3c"/>
      </g>

      <!-- Card 3: casaspinheirao.app.br -->
      <g transform="translate(12, 304)">
        <rect x="0" y="0" width="251" height="130" rx="14" fill="#ffffff" stroke="#e8eaed" stroke-width="1" filter="url(#cardShadow)"/>
        <circle cx="14" cy="18" r="7" fill="#ff7043"/>
        <text x="27" y="21" font-size="11" font-weight="600" fill="#202124">www.casaspinheirao.app.br</text>
        <text x="0" y="42" font-size="12" font-weight="700" fill="#1a0dab">Construa sua Casa no Seu Terreno</text>
        <text x="0" y="58" font-size="12" font-weight="700" fill="#1a0dab">em Curitiba e Região</text>
        <text x="0" y="76" font-size="10" fill="#70757a">11 de ago. de 2026 — <tspan fill="#5f6368">Casas Pré-Fabricadas em Pinhais e Curitiba — Alvenaria e Madeir...</tspan></text>
        <rect x="180" y="38" width="58" height="58" rx="8" fill="#ffe0b2"/>
        <path d="M185 85 L209 55 L233 85 Z" fill="#f57c00"/>
      </g>

      <!-- Button Mostrar tudo -->
      <g transform="translate(12, 444)">
        <rect x="0" y="0" width="251" height="34" rx="17" fill="#e8eaed"/>
        <text x="92" y="21" font-size="12" font-weight="600" fill="#3c4043">Mostrar tudo</text>
      </g>
    </g>

    <!-- Red Arrow Annotations as present in user screenshot -->
    <!-- Arrow 1: From query to text cite -->
    <path d="M 430 -35 Q 380 -10 250 25" fill="none" stroke="#d93025" stroke-width="5" stroke-linecap="round"/>
    <path d="M 245 28 L 265 18 L 256 34 Z" fill="#d93025"/>

    <!-- Arrow 2: From query to top right card -->
    <path d="M 460 -35 Q 560 -15 620 20" fill="none" stroke="#d93025" stroke-width="5" stroke-linecap="round"/>
    <path d="M 625 24 L 610 10 L 612 28 Z" fill="#d93025"/>

    <!-- Arrow 3: From query down to bottom right card -->
    <path d="M 450 -35 Q 540 100 610 250" fill="none" stroke="#d93025" stroke-width="5" stroke-linecap="round"/>
    <path d="M 614 256 L 600 242 L 602 260 Z" fill="#d93025"/>
  </g>
</svg>`;

// 2. Organic Search SVG
const organicSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 680" width="1000" height="680" style="background:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="1" stdDeviation="3" flood-color="#000" flood-opacity="0.1"/>
    </filter>
  </defs>

  <!-- Google Search Header -->
  <g transform="translate(30, 20)">
    <!-- Google Logo -->
    <path d="M22.5 10.8c0-.8-.1-1.5-.2-2.2H11.5v4.2h6.2c-.3 1.4-1.1 2.6-2.3 3.4v2.8h3.7c2.2-2 3.4-5 3.4-8.2z" fill="#4285F4"/>
    <path d="M11.5 22c3.1 0 5.7-1 7.6-2.8l-3.7-2.8c-1 1-2.4 1.5-3.9 1.5-3 0-5.5-2-6.4-4.8H1.2v3c1.9 3.8 5.8 6.1 10.3 6.1z" fill="#34A853"/>
    <path d="M5.1 13.1c-.2-.7-.3-1.4-.3-2.1s.1-1.4.3-2.1V5.9H1.2C.4 7.5 0 9.2 0 11s.4 3.5 1.2 5.1l3.9-3z" fill="#FBBC05"/>
    <path d="M11.5 4.4c1.7 0 3.2.6 4.4 1.7l3.3-3.3C17.2 1 14.6 0 11.5 0 7 0 3.1 2.3 1.2 6.1l3.9 3c.9-2.8 3.4-4.7 6.4-4.7z" fill="#EA4335"/>

    <!-- Search Input Box -->
    <rect x="110" y="-12" width="670" height="46" rx="23" fill="#ffffff" stroke="#e0e0e0" stroke-width="1" filter="url(#shadow)"/>
    <text x="140" y="17" font-size="15" fill="#202124" font-weight="400">quem vende casas pre fabricadas meu terreno pelo menor preço?</text>

    <!-- Search Controls -->
    <g transform="translate(710, 2)" fill="#70757a">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" transform="scale(0.7) translate(-35,-12)"/>
      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" transform="scale(0.65) translate(40,-12)" fill="#4285F4"/>
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5z" transform="scale(0.65) translate(110,-12)" fill="#4285F4"/>
    </g>
  </g>
  <line x1="0" y1="80" x2="1000" y2="80" stroke="#ebebeb" stroke-width="1"/>

  <!-- ORGANIC RESULTS CONTAINER -->
  <g transform="translate(140, 110)">
    
    <!-- RESULT 1: casaspinheirao.app.br (HIGHLIGHTED) -->
    <g transform="translate(0, 0)">
      <!-- Favicon -->
      <circle cx="14" cy="14" r="12" fill="#ff7043"/>
      <path d="M8 14 C8 10, 12 8, 14 11 C16 8, 20 10, 20 14 C20 17, 14 20, 14 20 C14 20, 8 17, 8 14 Z" fill="#ffffff"/>
      <!-- Site info -->
      <text x="36" y="12" font-size="14" font-weight="500" fill="#202124">casaspinheirao.app.br</text>
      <text x="36" y="28" font-size="12" font-weight="400" fill="#4d5156">https://casaspinheirao.app.br</text>
      
      <!-- Title Link -->
      <text x="0" y="58" font-size="20" font-weight="600" fill="#681da8" text-decoration="underline">Construa sua Casa no Seu Terreno em Curitiba e Região</text>
      <!-- Snippet -->
      <text x="0" y="82" font-size="14" font-weight="700" fill="#4d5156">Referência em casas pré-fabricadas de alvenaria e madeira em toda a região metropolitana.</text>
      <text x="0" y="102" font-size="14" font-weight="400" fill="#4d5156">Construímos no seu terreno com agilidade, qualidade e o melhor custo- ...</text>

      <!-- Red Arrows pointing to Result 1 -->
      <!-- Small Arrow 1 to domain -->
      <path d="M 240 -15 L 210 10" stroke="#d93025" stroke-width="5" stroke-linecap="round"/>
      <path d="M 205 14 L 222 10 L 210 -2 Z" fill="#d93025"/>

      <!-- Large Arrow 2 to title snippet -->
      <path d="M 750 60 L 520 85" stroke="#d93025" stroke-width="8" stroke-linecap="round"/>
      <path d="M 508 86 L 532 72 L 535 95 Z" fill="#d93025"/>
    </g>

    <!-- RESULT 2: Minha Casa Pré-Fabricada -->
    <g transform="translate(0, 150)">
      <circle cx="14" cy="14" r="12" fill="#fbbc05"/>
      <text x="36" y="12" font-size="14" font-weight="500" fill="#202124">Minha Casa Pré-Fabricada</text>
      <text x="36" y="28" font-size="12" font-weight="400" fill="#4d5156">https://minhacasaprefabricada.com.br › BlogPost › slug...</text>
      <text x="0" y="58" font-size="20" font-weight="600" fill="#1a0dab" text-decoration="underline">Casas Pré-Fabricadas em Curitiba: Modelos e Preços 2026</text>
      <text x="0" y="82" font-size="14" font-weight="400" fill="#4d5156">Veja os melhores modelos de <tspan font-weight="700">casas pré-fabricadas</tspan> de madeira para Curitiba e região. Preços, entrega</text>
      <text x="0" y="102" font-size="14" font-weight="400" fill="#4d5156">e vantagens para o clima frio do Paraná.</text>
    </g>

    <!-- RESULT 3: Casas Paraná -->
    <g transform="translate(0, 300)">
      <rect x="2" y="2" width="24" height="24" rx="4" fill="#d32f2f"/>
      <text x="36" y="12" font-size="14" font-weight="500" fill="#202124">Casas Paraná</text>
      <text x="36" y="28" font-size="12" font-weight="400" fill="#4d5156">https://casasparana.com.br</text>
      <text x="0" y="58" font-size="20" font-weight="600" fill="#1a0dab" text-decoration="underline">Casas Paraná - Especializados em casas pré-fabricadas ...</text>
      <text x="0" y="82" font-size="14" font-weight="400" fill="#4d5156">Fundada em 1974 na cidade de Curitiba, a Casas Paraná é pioneira na fabricação de <tspan font-weight="700">casas pré-</tspan></text>
      <text x="0" y="102" font-size="14" font-weight="400" fill="#4d5156"><tspan font-weight="700">fabricadas</tspan> em madeira de lei e alvenaria modular. Com 50 anos de ...</text>
    </g>

    <!-- RESULT 4: Casas Pinheirão com.br (HIGHLIGHTED WITH RED ARROW) -->
    <g transform="translate(0, 450)">
      <circle cx="14" cy="14" r="12" fill="#1976d2"/>
      <text x="36" y="12" font-size="14" font-weight="500" fill="#202124">Casas Pinheirão</text>
      <text x="36" y="28" font-size="12" font-weight="400" fill="#4d5156">https://casaspinheirao.com.br</text>
      <text x="0" y="58" font-size="20" font-weight="600" fill="#681da8" text-decoration="underline">Casas Pinheirão: Realize o Sonho da Casa Própria</text>
      <text x="0" y="82" font-size="14" font-weight="400" fill="#4d5156">Casas Pinheirão: Especialista em <tspan font-weight="700">casas pré-fabricadas</tspan> de madeira e alvenaria em Curitiba e Região.</text>
      <text x="0" y="102" font-size="14" font-weight="400" fill="#4d5156">Mais de 20 anos de tradição e qualidade.</text>

      <!-- Large Red Arrow 3 pointing to Casas Pinheirão result -->
      <path d="M 750 70 L 530 110" stroke="#d93025" stroke-width="8" stroke-linecap="round"/>
      <path d="M 518 112 L 542 98 L 544 122 Z" fill="#d93025"/>
    </g>

  </g>
</svg>`;

async function main() {
  const file1Svg = path.join(outputDir, 'casas-pinheirao-google-ai-overview.svg');
  const file1Png = path.join(outputDir, 'casas-pinheirao-google-ai-overview.png');
  const file2Svg = path.join(outputDir, 'casas-pinheirao-google-organico.svg');
  const file2Png = path.join(outputDir, 'casas-pinheirao-google-organico.png');

  fs.writeFileSync(file1Svg, aiOverviewSvg, 'utf-8');
  fs.writeFileSync(file2Svg, organicSvg, 'utf-8');

  await sharp(Buffer.from(aiOverviewSvg))
    .png()
    .toFile(file1Png);

  await sharp(Buffer.from(organicSvg))
    .png()
    .toFile(file2Png);

  console.log('Successfully generated pinheirao images!');
}

main().catch(console.error);
