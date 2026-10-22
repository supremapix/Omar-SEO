import React from "react";
import { Link } from "react-router-dom";
import { EnhancedSEO } from "../components/EnhancedSEO";

const services = [
  [
    "01",
    "Diagnóstico antes de investimento",
    "Auditoria de rastreamento, indexação, conteúdo e experiência. Um plano de prioridades para decidir o que corrigir primeiro.",
    "/auditoria-seo",
  ],
  [
    "02",
    "SEO que organiza o negócio",
    "Arquitetura, páginas de serviços e conteúdo que responde às dúvidas reais de quem está avaliando sua empresa.",
    "/seo",
  ],
  [
    "03",
    "Presença na sua região",
    "Informações consistentes no site e no Perfil da Empresa no Google. Serviços e áreas de atendimento descritos com precisão.",
    "/seo-local",
  ],
  [
    "04",
    "Conteúdo para a busca com IA",
    "Identidade clara, fontes e respostas úteis. A mesma base de qualidade que sustenta a busca também ajuda os sistemas a entender seu conteúdo.",
    "/geo-ia",
  ],
];
export default function Home() {
  return (
    <div className="editorial-home">
      <EnhancedSEO
        title="Omar SEO | Consultoria em SEO e descoberta por IA"
        description="Consultoria de Omar Skafi em SEO técnico, conteúdo, Google Maps e descoberta por IA. Diagnóstico, prioridades e acompanhamento em Curitiba e remotamente."
        canonical="/"
      />
      <section className="editorial-hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">OMAR SKAFI / CURITIBA · ATENDIMENTO REMOTO</p>
          <h1>
            Sua empresa tem
            <br />o que dizer.
            <br />
            <em>
              Vamos torná-la
              <br />
              mais fácil de encontrar.
            </em>
          </h1>
          <p className="hero-intro">
            SEO, conteúdo e presença local com direção. Para conectar o que sua
            empresa faz às perguntas de quem precisa dela — no Google e na busca
            com inteligência artificial.
          </p>
          <div className="editorial-actions">
            <Link className="solid-link" to="/auditoria-seo">
              Começar pelo diagnóstico <span>↗</span>
            </Link>
            <Link className="text-link" to="/metodo">
              Conheça o método →
            </Link>
          </div>
          <p className="hero-note">
            Trabalho consultivo. Prioridades claras. Sem promessa de posição.
          </p>
        </div>
        <aside className="hero-dossier">
          <div className="dossier-top">
            <span>BUSCA, COM CONTEXTO.</span>
            <span>01 / 03</span>
          </div>
          <div className="portrait-frame">
            <img
              src="/brand/omar-skafi.png"
              width="500"
              height="500"
              alt="Imagem de perfil de Omar Skafi utilizada pela consultoria"
              fetchPriority="high"
            />
          </div>
          <div className="dossier-caption">
            <div>
              <strong>Omar Skafi</strong>
              <span>Consultoria em SEO e visibilidade digital</span>
            </div>
            <Link to="/sobre" aria-label="Conheça Omar Skafi">
              ↗
            </Link>
          </div>
          <div className="dossier-foot">
            <span>O ponto de partida</span>
            <p>
              Entender o negócio.
              <br />
              Encontrar os obstáculos.
              <br />
              Definir o próximo passo.
            </p>
          </div>
        </aside>
      </section>
      <div className="expertise-strip">
        <div className="wrap">
          <span>SEO TÉCNICO</span>
          <span>CONTEÚDO ÚTIL</span>
          <span>GOOGLE MAPS</span>
          <span>BUSCA COM IA</span>
        </div>
      </div>
      <section className="wrap editorial-section">
        <div className="section-heading">
          <p className="eyebrow">01 / ONDE PODEMOS AJUDAR</p>
          <h2>
            Antes de buscar mais visitas,
            <br />
            <em>entenda o que precisa mudar.</em>
          </h2>
          <p>
            O escopo nasce do seu site, do mercado e da capacidade de execução
            da sua empresa.
          </p>
        </div>
        <div className="service-ledger">
          {services.map(([n, title, desc, url]) => (
            <Link to={url} key={n}>
              <span className="ledger-number">{n}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <span className="ledger-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="method-band">
        <div className="wrap method-grid">
          <div>
            <p className="eyebrow">02 / DA ANÁLISE À AÇÃO</p>
            <h2>
              Você precisa saber
              <br />o que está sendo feito.
              <br />
              <em>E por quê.</em>
            </h2>
            <Link className="text-link" to="/metodo">
              Veja como o trabalho é organizado →
            </Link>
          </div>
          <ol>
            {[
              [
                "Entender",
                "Objetivos, serviços, público, região e situação atual. O diagnóstico conecta problemas técnicos às necessidades do negócio.",
              ],
              [
                "Priorizar",
                "Um plano por impacto, esforço e dependências. Correções fundamentais antes de aumentar o volume de páginas.",
              ],
              [
                "Acompanhar",
                "Verificação das mudanças e leitura dos dados disponíveis. Impressões, cliques e contatos são analisados em seu contexto.",
              ],
            ].map(([t, d], i) => (
              <li key={t}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="wrap editorial-section evidence-grid">
        <div>
          <p className="eyebrow">03 / EVIDÊNCIA, COM LIMITES CLAROS</p>
          <h2>
            Explore o acervo.
            <br />
            <em>Entenda o contexto.</em>
          </h2>
          <p>
            O acervo reúne relatos e ilustrações publicados sobre projetos. Há
            reconstruções gráficas de resultados de busca; elas não substituem
            capturas originais verificáveis.
          </p>
          <p className="small-copy">
            Uma ilustração não comprova uma menção real, receita ou posição.
            Resultados de busca variam; um projeto não prevê o resultado de
            outro.
          </p>
          <Link className="solid-link" to="/resultados">
            Explorar os registros <span>↗</span>
          </Link>
        </div>
        <Link
          className="evidence-card"
          to="/resultados/carplus-google-ai-overview-pneus-curitiba"
        >
          <div className="evidence-image">
            <img
              src="/images/cases/case-carplus-google-ai-overview-pneus-curitiba.png"
              width="900"
              height="600"
              loading="lazy"
              alt="Ilustração de busca do acervo Carplus; não é comprovação independente de resultado"
            />
          </div>
          <div>
            <span>ILUSTRAÇÃO DO ACERVO / CARPLUS</span>
            <h3>Uma busca. O contexto de uma presença.</h3>
            <p>Consulte a documentação do case →</p>
          </div>
        </Link>
      </section>
      <section className="wrap editorial-section learning-grid">
        <div>
          <p className="eyebrow">SEO · GEO · AIO</p>
          <h2>
            A busca muda.
            <br />
            <em>Os fundamentos continuam.</em>
          </h2>
          <p>
            Conteúdo acessível, informação verificável e uma empresa
            identificável ajudam pessoas e sistemas a compreender o seu
            trabalho.
          </p>
          <Link className="text-link" to="/seo-geo-aio">
            Leia o guia de SEO e busca com IA →
          </Link>
        </div>
        <div className="home-questions">
          <details open>
            <summary>É possível garantir uma indicação por IA?</summary>
            <p>
              Não. A escolha das fontes depende de cada plataforma, consulta e
              contexto. O trabalho melhora a base técnica e editorial; não
              controla a resposta de um assistente.
            </p>
          </details>
          <details>
            <summary>Preciso de um arquivo especial para aparecer?</summary>
            <p>
              O Google informa que não exige arquivos de IA nem marcação
              especial para seus recursos de busca com IA. Uma página precisa
              estar indexada e elegível para exibição com snippet.
            </p>
            <a
              href="https://developers.google.com/search/docs/appearance/ai-features"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consulte a documentação do Google ↗
            </a>
          </details>
          <details>
            <summary>O que levar para a primeira conversa?</summary>
            <p>
              O endereço do site, seus principais serviços, regiões atendidas e
              o problema que deseja resolver. Dados de Search Console e métricas
              existentes ajudam quando estiverem disponíveis.
            </p>
          </details>
          <details>
            <summary>Em quanto tempo o SEO traz resultado?</summary>
            <p>
              Não há prazo único. Histórico, concorrência, qualidade do site e
              velocidade de implementação influenciam a evolução. O diagnóstico
              permite definir marcos de trabalho e acompanhamento.
            </p>
          </details>
        </div>
      </section>
      <section className="closing-note wrap">
        <p className="eyebrow">O PRÓXIMO PASSO</p>
        <h2>
          Vamos olhar para
          <br />
          <em>o seu negócio?</em>
        </h2>
        <p>
          Conte o que você faz e onde quer ser encontrado.
          <br />A conversa começa pelo que importa para sua empresa.
        </p>
        <a className="solid-link" href="https://wa.me/5541992721004">
          Conversar com Omar no WhatsApp <span>↗</span>
        </a>
      </section>
    </div>
  );
}
