# Omar SEO

Site React/Vite com HTML pré-renderizado e publicação pelo projeto Vercel conectado ao branch main.

## Desenvolvimento e verificação

- `npm ci`
- `npm run lint` (TypeScript)
- `npm run build` (tipos, marca, sitemap, Vite e pré-render de todas as rotas)
- Defina `PORT=4318` e rode `npm start` para servir o build local, com 404 real.
- `AUDIT_URL=http://127.0.0.1:4318 npm run verify:site` verifica HTML, rotas, metadados, imagens, mobile e teclado. No PowerShell use `$env:AUDIT_URL='http://127.0.0.1:4318'`.
- `node scripts/accessibility.mjs` verifica contraste e regras WCAG A/AA nas páginas principais em 320/390/1440. Scripts de navegador usam Chrome instalado no Windows deste ambiente; adapte `executablePath` para outros ambientes.
- `node scripts/meta-check.mjs` verifica a troca de canonical/título na navegação interna.

Os relatórios e screenshots locais vão para `../qa`. Nunca envie formulários reais durante testes.

## Fontes e marca

O SVG `public/brand/symbol.svg` preserva o símbolo já publicado. `npm run favicons` gera ICO multiresolução real, PNGs, manifestos e OG 1200×630. O retrato foi preservado da URL de perfil usada pelo site, sem edição facial. Não criar novas credenciais ou métricas sem documentação.

`src/config/routes.ts` alimenta sitemap e pré-render. O conteúdo markdown de artigos deve existir em `src/content/blog`. `src/data/legacyBlogPosts.ts` preserva metadados de artigos anteriores. Regras de redirect e 404 de produção ficam em `vercel.json`.

Veja `AUDIT.md` para inventário, escopo e limites da revisão de outubro de 2026.

## Sistema visual e testes de cobertura

Todas as rotas usam PageFrame no cliente e no pré-render. O inventário está em ROUTE_INVENTORY.md. ServiceFlow explica processos com controles manuais e textos presentes no HTML; FloatingActions concentra contato e compartilhamento, sem componentes duplicados.

- `node scripts/verify-design.mjs`: cobertura das 168 rotas sem JS e axe em 23 exemplos. Use `AUDIT_WIDTH=320` para a menor tela.
- `node scripts/verify-matrix.mjs`: exemplos de todos os tipos principais em 320 e 1440 px.
- `node scripts/verify-interactions.mjs`: fluxo, compartilhamento, clipboard e teclado em três larguras.

Esses scripts usam `AUDIT_URL` ou o servidor local na porta 4318. As verificações não enviam mensagens nem formulários reais.
