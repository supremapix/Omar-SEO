import React, { useState } from "react";
import { useLocation } from "react-router-dom";
const journeys = {
  technical: {
    title: "Como uma melhoria técnica chega ao site",
    symbols: ["URL", "Plano", "HTML", "Dados"],
    steps: [
      [
        "Diagnóstico",
        "Verificamos acesso às páginas, indexação, velocidade e experiência no celular.",
      ],
      [
        "Planejamento",
        "Ordenamos problemas por impacto, esforço e dependências de desenvolvimento.",
      ],
      [
        "Implementação",
        "Ajustamos código, links, metadados e conteúdo conforme o escopo definido.",
      ],
      [
        "Medição e ajustes",
        "Conferimos as mudanças e os dados disponíveis. O buscador decide se e quando indexar.",
      ],
    ],
  },
  local: {
    title: "Da informação local ao contato",
    symbols: ["Empresa", "Região", "Perfil", "Contato"],
    steps: [
      [
        "Diagnóstico",
        "Conferimos serviços, região atendida, contatos e informações do perfil local.",
      ],
      [
        "Planejamento",
        "Relacionamos dúvidas dos clientes aos serviços que a empresa realmente presta.",
      ],
      [
        "Implementação",
        "Organizamos páginas e informações consistentes do negócio, sem criar endereços fictícios.",
      ],
      [
        "Medição e ajustes",
        "Observamos cliques, rotas e contatos quando os dados estão disponíveis. Posição no mapa varia.",
      ],
    ],
  },
  content: {
    title: "Da pergunta do cliente à página útil",
    symbols: ["Pergunta", "Estrutura", "Resposta", "Leitura"],
    steps: [
      [
        "Diagnóstico",
        "Entendemos o que a pessoa procura e quais dúvidas o conteúdo ainda não responde.",
      ],
      [
        "Planejamento",
        "Definimos páginas, fontes e a ordem das informações para apoiar a decisão.",
      ],
      [
        "Implementação",
        "Publicamos respostas claras, autoria e links úteis em conteúdo acessível.",
      ],
      [
        "Medição e ajustes",
        "Revisamos consultas, visitas e dúvidas recebidas. Não há garantia de citação por IA.",
      ],
    ],
  },
  conversion: {
    title: "Da visita a uma conversa com contexto",
    symbols: ["Visita", "Caminho", "Página", "Contato"],
    steps: [
      [
        "Diagnóstico",
        "Identificamos dificuldades para compreender a oferta, navegar e entrar em contato.",
      ],
      [
        "Planejamento",
        "Escolhemos hipóteses e definimos como observar cada alteração.",
      ],
      [
        "Implementação",
        "Melhoramos hierarquia, formulários e chamadas para ação sem induzir decisões.",
      ],
      [
        "Medição e ajustes",
        "Avaliamos os contatos e sinais disponíveis; não inventamos taxas de conversão.",
      ],
    ],
  },
  strategy: {
    title: "Como o trabalho é organizado",
    symbols: ["Negócio", "Prioridades", "Execução", "Revisão"],
    steps: [
      [
        "Diagnóstico",
        "Entendemos o negócio, o site atual e o problema que precisa ser resolvido.",
      ],
      [
        "Planejamento",
        "Definimos entregas, prioridades e quem será responsável por cada ação.",
      ],
      [
        "Implementação",
        "Aplicamos melhorias técnicas e editoriais com verificação das mudanças.",
      ],
      [
        "Medição e ajustes",
        "Lemos os dados disponíveis e revisamos o plano. Resultados não são garantidos.",
      ],
    ],
  },
};
export function ServiceFlow() {
  const { pathname } = useLocation();
  const [active, setActive] = useState(0);
  const key = /local|maps|^\/seo-(?!geo|tecnico|para|vs|google)/.test(pathname)
    ? "local"
    : /tecnico|auditoria/.test(pathname)
      ? "technical"
      : /geo|aio|chatgpt|gemini|conteudo/.test(pathname)
        ? "content"
        : /cro|ecommerce/.test(pathname)
          ? "conversion"
          : "strategy";
  const flow = journeys[key];
  return (
    <section className="service-flow" aria-labelledby="flow-title">
      <p className="eyebrow">O PROCESSO, DESENHADO</p>
      <h2 id="flow-title">{flow.title}</h2>
      <p>
        Selecione uma etapa para acompanhar o caminho. As explicações permanecem
        disponíveis abaixo.
      </p>
      <div className="flow-drawing" aria-hidden="true">
        <div className="flow-track">
          <span style={{ width: `${(active / 3) * 100}%` }} />
        </div>
        {flow.symbols.map((label, i) => (
          <div
            key={label}
            className={i === active ? "flow-node current" : "flow-node"}
          >
            <span>0{i + 1}</span>
            <strong>{label}</strong>
          </div>
        ))}
      </div>
      <ol className="flow-steps">
        {flow.steps.map(([title, description], i) => (
          <li key={title} className={i === active ? "selected" : ""}>
            <button aria-pressed={i === active} onClick={() => setActive(i)}>
              <span>0{i + 1}</span>
              {title}
            </button>
            <p>{description}</p>
          </li>
        ))}
      </ol>
      <div className="flow-controls">
        <button
          onClick={() => setActive((i) => Math.max(0, i - 1))}
          disabled={active === 0}
        >
          ← Etapa anterior
        </button>
        <span aria-live="polite">Etapa {active + 1} de 4</span>
        <button
          onClick={() => setActive((i) => Math.min(3, i + 1))}
          disabled={active === 3}
        >
          Próxima etapa →
        </button>
      </div>
    </section>
  );
}
