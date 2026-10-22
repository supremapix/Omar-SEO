import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
const publicDir = path.resolve("public");
// Preserve the site's existing symbol verbatim. Do not invent a new monogram.
const svg = fs.readFileSync(path.join(publicDir, "brand/symbol.svg"));
fs.writeFileSync(path.join(publicDir, "favicon.svg"), svg);
const sizes: [string, number][] = [
  ["favicon-16x16.png", 16],
  ["favicon-32x32.png", 32],
  ["favicon-48x48.png", 48],
  ["apple-touch-icon.png", 180],
  ["android-chrome-192x192.png", 192],
  ["android-chrome-512x512.png", 512],
  ["mstile-150x150.png", 150],
];
for (const [name, size] of sizes)
  await sharp(svg).resize(size, size).png().toFile(path.join(publicDir, name));
// ICO directory with three independent PNG images (16, 32 and 48 pixels).
const frames = await Promise.all(
  [16, 32, 48].map((size) => sharp(svg).resize(size, size).png().toBuffer()),
);
const header = Buffer.alloc(6 + 16 * 3);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(3, 4);
let offset = header.length;
frames.forEach((frame, i) => {
  const at = 6 + i * 16;
  header[at] = [16, 32, 48][i];
  header[at + 1] = header[at];
  header.writeUInt16LE(1, at + 4);
  header.writeUInt16LE(32, at + 6);
  header.writeUInt32LE(frame.length, at + 8);
  header.writeUInt32LE(offset, at + 12);
  offset += frame.length;
});
fs.writeFileSync(
  path.join(publicDir, "favicon.ico"),
  Buffer.concat([header, ...frames]),
);
const manifest = {
  name: "Omar SEO",
  short_name: "Omar SEO",
  icons: [192, 512].map((size) => ({
    src: `/android-chrome-${size}x${size}.png`,
    sizes: `${size}x${size}`,
    type: "image/png",
    purpose: "any",
  })),
  theme_color: "#182b3b",
  background_color: "#f5f3ed",
  display: "standalone",
  start_url: "/",
};
for (const name of ["site.webmanifest", "manifest.webmanifest"])
  fs.writeFileSync(
    path.join(publicDir, name),
    JSON.stringify(manifest, null, 2),
  );
fs.writeFileSync(
  path.join(publicDir, "browserconfig.xml"),
  '<?xml version="1.0" encoding="UTF-8"?><browserconfig><msapplication><tile><square150x150logo src="/mstile-150x150.png"/><TileColor>#182b3b</TileColor></tile></msapplication></browserconfig>',
);
// Code-native editorial composition uses the existing symbol and wordmark.
const symbol = svg.toString("base64");
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#f5f3ed"/><rect x="900" width="300" height="630" fill="#182b3b"/><image href="data:image/svg+xml;base64,${symbol}" x="967" y="200" width="166" height="166"/><path d="M60 140H840M60 540H840" stroke="#a8b3bc"/><g font-family="Arial, sans-serif" fill="#182b3b"><text x="60" y="95" font-size="44" font-weight="900">OMAR <tspan fill="#2459c7">SEO</tspan></text><text x="60" y="208" font-size="15" letter-spacing="3">CONSULTORIA EM SEO E DESCOBERTA POR IA</text><text x="56" y="299" font-size="64" font-weight="600">Clareza para quem</text><text x="56" y="374" font-size="64" font-weight="600">procura.</text><text x="60" y="458" font-family="Georgia, serif" font-style="italic" fill="#1748b4" font-size="48">Estrutura para ser encontrado.</text><text x="60" y="585" font-size="20">Omar Skafi · Curitiba e atendimento remoto</text></g><text x="1050" y="570" text-anchor="middle" fill="#e4ebf1" font-family="Arial" font-size="17">omarseo.digital</text></svg>`;
await sharp(Buffer.from(og))
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(path.join(publicDir, "og-default.jpg"));
console.log(
  "Brand assets generated: ICO 16/32/48, PNGs, SVG, manifests, OG 1200x630.",
);
