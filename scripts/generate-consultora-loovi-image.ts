import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const outputDir = path.join(process.cwd(), 'public', 'images', 'cases');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 580" width="1000" height="580" style="background:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="1" stdDeviation="3" flood-color="#000" flood-opacity="0.12"/>
    </filter>
    <marker id="redArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#c0392b" />
    </marker>
  </defs>

  <!-- Google Header -->
  <g transform="translate(40, 25)">
    <!-- Google Logo -->
    <g transform="translate(0, 4)">
      <path d="M22.5 10.8c0-.8-.1-1.5-.2-2.2H11.5v4.2h6.2c-.3 1.4-1.1 2.6-2.3 3.4v2.8h3.7c2.2-2 3.4-5 3.4-8.2z" fill="#4285F4"/>
      <path d="M11.5 22c3.1 0 5.7-1 7.6-2.8l-3.7-2.8c-1 1-2.4 1.5-3.9 1.5-3 0-5.5-2-6.4-4.8H1.2v3c1.9 3.8 5.8 6.1 10.3 6.1z" fill="#34A853"/>
      <path d="M5.1 13.1c-.2-.7-.3-1.4-.3-2.1s.1-1.4.3-2.1V5.9H1.2C.4 7.5 0 9.2 0 11s.4 3.5 1.2 5.1l3.9-3z" fill="#FBBC05"/>
      <path d="M11.5 4.4c1.7 0 3.2.6 4.4 1.7l3.3-3.3C17.2 1 14.6 0 11.5 0 7 0 3.1 2.3 1.2 6.1l3.9 3c.9-2.8 3.4-4.7 6.4-4.7z" fill="#EA4335"/>
    </g>

    <!-- Search Input Box -->
    <rect x="100" y="-12" width="750" height="46" rx="23" fill="#ffffff" stroke="#dfe1e5" stroke-width="1" filter="url(#shadow)"/>
    <text x="125" y="17" font-size="16" fill="#202124">consultora loovi</text>

    <!-- Search Box Right Controls -->
    <g transform="translate(730, 0)">
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

  <!-- Divider Line -->
  <line x1="140" y1="88" x2="790" y2="88" stroke="#f1f3f4" stroke-width="1"/>

  <!-- Sponsored Section Header -->
  <g transform="translate(160, 115)">
    <text x="0" y="0" font-size="16" fill="#202124" font-weight="400">Resultado Patrocinado</text>
  </g>

  <!-- Hide Sponsored button -->
  <g transform="translate(290, 135)">
    <rect x="0" y="0" width="340" height="36" rx="18" fill="#f1f3f4"/>
    <text x="170" y="23" font-size="14" fill="#202124" font-weight="500" text-anchor="middle">Ocultar resultado patrocinado  ^</text>
  </g>

  <!-- Divider Line -->
  <line x1="160" y1="190" x2="760" y2="190" stroke="#f1f3f4" stroke-width="1"/>

  <!-- ORGANIC RESULT CARD: consultoraloovi.com.br -->
  <g transform="translate(160, 215)">
    <!-- Favicon: Globe in grey circle -->
    <circle cx="14" cy="14" r="14" fill="#e8f0fe"/>
    <circle cx="14" cy="14" r="10" fill="none" stroke="#1a73e8" stroke-width="1.5"/>
    <path d="M 4 14 L 24 14 M 14 4 A 12 12 0 0 1 14 24 A 12 12 0 0 1 14 4" fill="none" stroke="#1a73e8" stroke-width="1.2"/>

    <!-- Domain and URL -->
    <text x="38" y="12" font-size="14" fill="#202124" font-weight="400">consultoraloovi.com.br</text>
    <text x="38" y="28" font-size="12" fill="#4d5156">https://www.consultoraloovi.com.br</text>

    <!-- Title Link -->
    <text x="0" y="58" font-size="20" fill="#1b0dab" font-weight="400">Seguro Auto Loovi em Curitiba | Consultora Barbara Duraes</text>

    <!-- Three dots menu -->
    <g transform="translate(585, 45)" fill="#70757a">
      <circle cx="2" cy="2" r="1.5"/>
      <circle cx="2" cy="7" r="1.5"/>
      <circle cx="2" cy="12" r="1.5"/>
    </g>

    <!-- Snippet text -->
    <text x="0" y="82" font-size="14" fill="#4d5156">
      <tspan font-weight="700" fill="#202124">Seguro auto digital</tspan> <tspan font-weight="700" fill="#202124">sem burocracia nem análise de perfil do condutor</tspan>. 100% Tabela FIPE, guincho
    </text>
    <text x="0" y="102" font-size="14" fill="#4d5156">
      24h em todo Brasil e atendimento com a executiva Bárbara ...
    </text>
  </g>

  <!-- SECTION: As pessoas também perguntam (PAA) -->
  <g transform="translate(160, 360)">
    <text x="0" y="0" font-size="18" fill="#202124" font-weight="400">As pessoas também perguntam</text>

    <!-- PAA Item 1 -->
    <g transform="translate(0, 15)">
      <line x1="0" y1="0" x2="600" y2="0" stroke="#dadce0" stroke-width="1"/>
      <text x="0" y="24" font-size="14" fill="#202124">Quanto a Loovi paga de comissão?</text>
      <path d="M 580 18 L 586 24 L 592 18" stroke="#70757a" stroke-width="1.8" fill="none"/>
    </g>

    <!-- PAA Item 2 -->
    <g transform="translate(0, 55)">
      <line x1="0" y1="0" x2="600" y2="0" stroke="#dadce0" stroke-width="1"/>
      <text x="0" y="24" font-size="14" fill="#202124">Qual seguradora está por trás da Loovi?</text>
      <path d="M 580 18 L 586 24 L 592 18" stroke="#70757a" stroke-width="1.8" fill="none"/>
    </g>

    <!-- PAA Item 3 -->
    <g transform="translate(0, 95)">
      <line x1="0" y1="0" x2="600" y2="0" stroke="#dadce0" stroke-width="1"/>
      <text x="0" y="24" font-size="14" fill="#202124">A Loovi é confiável?</text>
      <path d="M 580 18 L 586 24 L 592 18" stroke="#70757a" stroke-width="1.8" fill="none"/>
    </g>

    <!-- PAA Item 4 -->
    <g transform="translate(0, 135)">
      <line x1="0" y1="0" x2="600" y2="0" stroke="#dadce0" stroke-width="1"/>
      <text x="0" y="24" font-size="14" fill="#202124">Quanto ganha um vendedor Loovi?</text>
      <path d="M 580 18 L 586 24 L 592 18" stroke="#70757a" stroke-width="1.8" fill="none"/>
      <line x1="0" y1="40" x2="600" y2="40" stroke="#dadce0" stroke-width="1"/>
    </g>
  </g>

  <!-- RED ANNOTATION ARROWS (Matching user screenshot) -->
  <!-- Arrow 1: Upper Left pointing to Favicon / URL -->
  <path d="M 60 115 L 155 220" stroke="#c0392b" stroke-width="5" fill="none" stroke-linecap="round" marker-end="url(#redArrow)"/>

  <!-- Arrow 2: Upper Right pointing to 3-dots menu -->
  <path d="M 905 160 L 760 260" stroke="#c0392b" stroke-width="5" fill="none" stroke-linecap="round" marker-end="url(#redArrow)"/>

</svg>`;

const svgPath = path.join(outputDir, 'case-consultora-loovi-google-organico.svg');
fs.writeFileSync(svgPath, svgContent);
console.log('Saved SVG:', svgPath);

const pngPath = path.join(outputDir, 'case-consultora-loovi-google-organico.png');
sharp(Buffer.from(svgContent))
  .png()
  .toFile(pngPath)
  .then(() => console.log('Saved PNG:', pngPath))
  .catch((err) => console.error('Error generating PNG:', err));
