# Omar SEO — lote editorial e técnico, 22/10/2026

## Evidências e escopo
- Base: bf0282e, clone isolado; nenhum arquivo de GF10 ou Cicarelli foi acessado.
- Sem AGENTS.md, .agents/skills ou CI versionados na base.
- Domínio: https://www.omarseo.digital. HTML e ETag iguais ao projeto https://omar-seo.vercel.app; GitHub reporta deploy Vercel success.
- Contatos existentes: WhatsApp 5541992721004; telefone 5541987001004. Preservados como funções distintas.
- Identidade preservada: símbolo SVG do favicon existente e assinatura tipográfica OMAR SEO do cabeçalho. Retrato existente obtido da URL usada em Sobre/Blog, sem alteração facial.

## Prioridades deste lote
1. Corrigir OG inexistente, ICO inválido, metadados divergentes entre SSR e cliente, corpo de artigos ausente em SSR, case Sangel fora do pré-render e 404.
2. Redesenhar home, navegação e rodapé com composição editorial, contraste, controles de 48px e leitura móvel. Remover vídeos decorativos e efeitos de constelação.
3. Explicar serviços, processo, evidência e limites da descoberta por IA. Guia central com fontes oficiais; não expandir páginas locais repetitivas.
4. Validar build/types, HTML de todas as rotas, assets, links, teclado e telas 320/390/desktop; publicar pelo vínculo GitHub/Vercel e verificar produção.

## Fontes editoriais
- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/appearance/structured-data/sd-policies

## Limites
Os cases existentes são registros publicados pelo site; capturas não comprovam causalidade, receita ou posição atual. Não foram criados depoimentos, certificações ou números de resultado. Páginas locais existentes exigem revisão editorial própria; não serão multiplicadas neste lote.

## Refinamento do inventário
- Duas peças editoriais: guia central /seo-geo-aio reescrito e novo /blog/seo-vs-sem-como-escolher. Especialista SEO, fundamentos, escolha de consultoria e SEM são tratados com links para serviços existentes. Nenhuma página de concorrente ou salário estimado foi criada.
- Inspeção encontrou reconstruções SVG de resultados (incluindo Carplus); home e acervo passam a explicar esse limite. Não há comprovação independente de posição atual.

## Entrega implementada
- Home, cabeçalho e rodapé editoriais; navegação móvel em details/summary, skip link, alvos de 48px, foco visível e reduced motion.
- Guia central SEO/IA reescrito; novo SEO versus SEM; artigo de recomendação por IA revisado; página de consultoria reescrita com entregas/limites. Sete artigos antigos recuperados da base existente, sem nova pesquisa ou novas alegações de resultado.
- Símbolo existente preservado em brand/symbol.svg. ICO real 16/32/48, PNGs 16/32/48, Apple180, Android192/512, manifest e OG1200x630.
- 168 rotas pré-renderizadas. Metadados e schema vêm dos componentes, conteúdo markdown completo no HTML. Handoff de metadados para React evita duplicidade após navegação.
- Rota SEO local adicionada ao inventário técnico; Sangel incluído no pré-render e canonical corrigido. Tipos de serviço corrigidos para Service. Removida SearchAction sem busca real.
- Redirects explícitos, canonical de host www, 404 HTTP, sitemap sem data de alteração artificial. npm ci fixa dependências no deploy Vercel.

## Validação local executada
- npm run lint / tsc --noEmit: passou; incluído também no build.
- npm run build: passou, 168 páginas + 404.
- scripts/verify.mjs: 168 HTMLs sem falhas de canonical/H1/JSON-LD/links internos; ICO com três entradas válidas; home320/390/1440 sem overflow, imagem faltante ou erro JS; menu, skip-link e teclado verificados.
- Conteúdo sem JS: home, guia SEO/IA, novo artigo, artigo legado e Sangel; URL inexistente retorna404.
- scripts/meta-check.mjs: um título e canonical, inclusive após navegação para /blog.
- scripts/accessibility.mjs: nenhuma violação detectada nas regras WCAG A/AA do axe em home, guia, consultoria e contato nas três larguras. Isso não equivale a certificação integral de acessibilidade.
- OG e ícone512 inspecionados visualmente; screenshots desktop/mobile inspecionados. Não foi medido Core Web Vitals de campo ou PageSpeed público.

## Pendências editoriais fora deste lote
- Revisão individual das páginas locais preexistentes (não foram multiplicadas), demais conteúdos legados e validação independente dos relatos de cases.
- Parte das imagens de cases é reconstrução SVG. Avisos foram adicionados ao acervo e aos cases; não se afirma comprovação de resultado atual.
- Sem acesso a dados privados Search Console/Analytics, não se comprova indexação, posição, geração de receita ou citações por LLMs.

## Ajuste identificado em produção
A opção cleanUrls da Vercel priorizava public/seo-geo-aio.html (legado) sobre seo-geo-aio/index.html. Removido o HTML legado e mantido redirect explícito da URL .html. Acrescentada verificação de colisão ao teste para evitar recorrência.

## Segundo lote: padrão visual em todas as páginas
- Inventário detalhado em ROUTE_INVENTORY.md: 168 rotas canônicas, mais a página 404. PageFrame aplica o sistema editorial compartilhado no cliente e no pré-render: cores, tipografia, hierarquia, cartões, formulários, cabeçalho, rodapé e links.
- Templates de serviços (8), intenções comerciais (16) e regiões (93) reorganizados por contexto do leitor, escopo, processo, perguntas e próximo passo. Conteúdo útil e URLs preservados. Não foram criadas novas páginas regionais; elas explicam que não representam escritórios adicionais.
- ServiceFlow em 10 templates: ServicePage, CommercialIntentPage, LocationPage, SeoCompleto, SeoLocal, GoogleMaps, GeoIa, SeoTecnico, AuditoriaSeo e Metodo. Cinco contextos (estratégia, técnico, local, conteúdo e conversão), quatro etapas, seleção/avanço manual, explicações no HTML, teclado e reduced motion. Sem reprodução automática ou números ilustrativos de resultado.
- FloatingActions único e global: WhatsApp publicado do Omar, seis destinos de compartilhamento e copiar link. Canonical/título/OG da página atual; imagem absoluta para Pinterest; diálogo nativo com Escape e retorno de foco; cópia só anuncia sucesso após confirmação, com seleção manual em caso de falha.
- Foram corrigidos contraste de etiquetas, quebra de conteúdo em telas estreitas e associação explícita dos campos aos rótulos. A animação genérica antiga deixou de ser renderizada em Método.
- Carplus: título, resumo e identificação de imagens ajustados para relato/ilustração do acervo, sem apresentar reconstrução como prova atual de ranking.

## Verificações do segundo lote
- Build e TypeScript passaram: 168 rotas + 404.
- verify-design.mjs verifica todas as rotas sem JS: HTTP, sistema visual, ausência dos antigos painéis escuros, overflow e ações globais; também executa axe em 23 páginas representativas a 390 px.
- verify-matrix.mjs: 28 cenários (14 páginas a 320/1440 px), sem overflow ou imagens quebradas.
- verify-interactions.mjs: 320/390/1440 px, avanço do fluxo, seis links codificados corretamente, Pinterest absoluto, cópia bem-sucedida e fallback de falha, Escape/foco e WhatsApp correto. Nenhuma publicação, mensagem ou formulário real enviado. Nenhuma violação axe encontrada no diálogo.
- Relatórios locais ficam em ../qa/v2. A inspeção automatizada e amostral não equivale a certificação de acessibilidade nem comprova Core Web Vitals de campo.

O novo padrão visual cobre todo o inventário. A pendência editorial mencionada no primeiro lote refere-se à checagem independente de alegações históricas e peculiaridades locais, não a páginas ainda com o tema antigo. Não há dados privados de Search Console/Analytics disponíveis para comprovar posicionamento ou citações por IA.
