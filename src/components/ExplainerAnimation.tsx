import React, { useEffect, useRef, useState } from "react";
export type DiagramTopic =
  | "technical"
  | "research"
  | "content"
  | "local"
  | "ai"
  | "measurement"
  | "conversion";
const topics: Record<
  DiagramTopic,
  { name: string; title: string; labels: string[]; captions: string[] }
> = {
  technical: {
    name: "SEO técnico",
    title: "Como o buscador encontra e interpreta uma página",
    labels: ["Links", "Rastreamento", "Interpretação", "Indexação"],
    captions: [
      "Um link permite descobrir uma URL. Páginas isoladas podem ser mais difíceis de encontrar.",
      "O robô solicita a página. Resposta HTTP e regras de acesso precisam permitir o rastreamento.",
      "O HTML entrega conteúdo, links e informações da página para interpretação.",
      "A página pode ser considerada para o índice. A decisão e o prazo pertencem ao buscador.",
    ],
  },
  research: {
    name: "Pesquisa e intenção",
    title: "Da pesquisa à necessidade de quem procura",
    labels: ["Consulta", "Intenção", "Agrupamento", "Página adequada"],
    captions: [
      "Começamos pela pergunta e pelo contexto da pessoa, sem presumir volume de buscas.",
      "Distinguimos aprender, comparar e contratar: consultas parecidas podem pedir respostas diferentes.",
      "Reunimos dúvidas relacionadas em um mesmo assunto, evitando páginas repetidas.",
      "A intenção orienta o formato e o próximo passo: guia, serviço ou contato.",
    ],
  },
  content: {
    name: "Conteúdo",
    title: "Como uma dúvida se transforma em uma resposta útil",
    labels: ["Dúvida", "Fontes", "Estrutura", "Leitura"],
    captions: [
      "Registramos o que o leitor precisa entender antes de decidir.",
      "Conferimos fontes e experiência disponível antes de escrever afirmações.",
      "Organizamos título, resposta direta, detalhes e links em HTML acessível.",
      "O leitor encontra contexto e próximo passo. Revisões mantêm a informação útil.",
    ],
  },
  local: {
    name: "Busca local",
    title: "Informações consistentes entre perfil, site e contato",
    labels: ["Negócio real", "Área atendida", "Consistência", "Contato"],
    captions: [
      "Partimos do nome, serviço e contato reais do negócio.",
      "A área de atendimento orienta o conteúdo; não criamos endereços ou unidades fictícias.",
      "Perfil e site devem comunicar as mesmas informações essenciais.",
      "A pessoa pode conferir o serviço e iniciar contato. A posição no mapa varia e não é garantida.",
    ],
  },
  ai: {
    name: "GEO e AIO",
    title: "Como fontes claras podem ajudar a compreensão por IA",
    labels: ["Pergunta", "Fontes", "Contexto", "Seleção independente"],
    captions: [
      "Uma pergunta pode exigir contexto, definições e evidências, além de uma palavra-chave.",
      "Conteúdo acessível, autoria identificada e fontes ajudam a tornar as informações verificáveis.",
      "Organizamos respostas contextualizadas e dados coerentes com o texto visível.",
      "O mecanismo decide quais fontes usar e citar. A ligação tracejada indica uma possibilidade, não uma promessa.",
    ],
  },
  measurement: {
    name: "Medição",
    title: "Um ciclo de observação, revisão e nova verificação",
    labels: ["Pergunta", "Dados disponíveis", "Análise", "Ajuste"],
    captions: [
      "Definimos o que queremos entender sobre o site e o atendimento.",
      "Consultamos dados disponíveis, como consultas, páginas e contatos, com acesso autorizado.",
      "Relacionamos sinais ao contexto; uma mudança isolada não comprova causalidade.",
      "Revisamos prioridades e voltamos a observar. O desenho não representa métricas ou resultados de clientes.",
    ],
  },
  conversion: {
    name: "Navegação e contato",
    title: "Como reduzir obstáculos entre a leitura e o contato",
    labels: ["Chegada", "Oferta clara", "Caminho simples", "Decisão"],
    captions: [
      "A página precisa corresponder ao que a pessoa esperava encontrar.",
      "Serviço, escopo e limites ajudam o leitor a avaliar se a oferta faz sentido.",
      "Navegação e formulário acessíveis reduzem dificuldades de uso.",
      "O visitante decide se deseja conversar. Melhorar a experiência não garante conversão.",
    ],
  },
};
function Paper({ x, y, lines = 3 }: { x: number; y: number; lines?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width="76" height="92" rx="5" />
      <path d="M12 18h38" />
      {Array.from({ length: lines }, (_, i) => (
        <path
          className="ink-line"
          key={i}
          d={`M12 ${36 + i * 14}h52`}
          style={{ animationDelay: `${i * 0.25}s` }}
        />
      ))}
    </g>
  );
}
function Drawing({ topic, phase }: { topic: DiagramTopic; phase: number }) {
  return (
    <svg viewBox="0 0 560 260" aria-hidden="true" focusable="false">
      <defs>
        <marker
          id={"arrow-" + topic}
          markerWidth="7"
          markerHeight="7"
          refX="6"
          refY="3.5"
          orient="auto"
        >
          <path d="M0 0L7 3.5L0 7" fill="#1748b4" stroke="none" />
        </marker>
      </defs>
      {topic === "technical" && (
        <>
          <path className="route-ink" d="M64 130H192M268 130H372M448 130H510" />
          <circle cx="64" cy="130" r="23" />
          <path d="M52 130h24m-12-12v24" />
          <g className={phase === 1 ? "scanner active-object" : "scanner"}>
            <rect x="172" y="80" width="110" height="105" rx="8" />
            <path d="M182 100h90M190 117h30m-30 20h63m-63 20h48" />
            <path className="scan-beam" d="M180 110h94" />
          </g>
          <Paper x={372} y={84} lines={phase >= 2 ? 3 : 1} />
          <path d="M500 88h35v90h-35m8-72h18m-18 18h18m-18 18h18m-18 18h18" />
          <circle
            className="travel-dot"
            r="7"
            cy="130"
            cx={phase === 0 ? 64 : phase === 1 ? 150 : phase === 2 ? 335 : 480}
          />
        </>
      )}
      {topic === "research" && (
        <>
          <path
            className="route-ink"
            d="M130 130L250 65M130 130H250M130 130L250 195M320 65L430 130M320 130H430M320 195L430 130"
          />
          <circle cx="85" cy="130" r="38" />
          <path d="M110 158l24 25M73 120q0-20 23-13q18 9-5 24v10m0 9v3" />
          {[65, 130, 195].map((y, i) => (
            <g
              key={y}
              className={phase === 1 || phase === 2 ? "active-object" : ""}
            >
              <rect x="250" y={y - 22} width="70" height="44" rx="22" />
              <path d={`M270 ${y}h30`} />
            </g>
          ))}
          <Paper x={430} y={84} lines={phase >= 3 ? 3 : 1} />
          <circle
            className="travel-dot"
            r="7"
            cx={phase < 2 ? 180 : 375}
            cy={phase === 1 ? 65 : 130}
          />
        </>
      )}
      {topic === "content" && (
        <>
          <path
            className="route-ink"
            d="M110 130H205M280 130H365M440 130H510"
          />
          <path d="M35 92h75v60H73l-20 18v-18H35zM52 110h40m-40 18h27" />
          <g className={phase === 1 ? "active-object" : ""}>
            <Paper x={195} y={67} lines={2} />
            <Paper x={210} y={87} lines={2} />
          </g>
          <Paper x={365} y={84} lines={phase >= 2 ? 4 : 1} />
          <circle cx="511" cy="112" r="15" />
          <path d="M485 166q0-34 26-34t26 34" />
          <path className="reading-mark" d="M374 120h55" />
          <circle
            className="travel-dot"
            r="7"
            cy="130"
            cx={phase === 0 ? 140 : phase === 1 ? 310 : phase === 2 ? 345 : 470}
          />
        </>
      )}
      {topic === "local" && (
        <>
          <path d="M25 70l90-25 75 25v135l-75-25-90 25zM115 45v135M25 130l165-25" />
          <g className={phase === 1 ? "pin-bounce" : ""}>
            <path d="M80 98a25 25 0 1 1 50 0q0 24-25 48q-25-24-25-48z" />
            <circle cx="105" cy="96" r="8" />
          </g>
          <path className="route-ink" d="M190 130H270M346 130H435" />
          <Paper x={270} y={84} lines={3} />
          <rect x="435" y="72" width="80" height="120" rx="12" />
          <path d="M449 95h50m-50 18h50m-50 18h32M453 157h43" />
          <circle
            className="travel-dot"
            r="7"
            cy="130"
            cx={phase < 2 ? 225 : 390}
          />
          <path
            className={
              phase === 2 ? "consistency active-object" : "consistency"
            }
            d="M281 148l9 9 20-23M447 144l9 9 20-23"
          />
        </>
      )}
      {topic === "ai" && (
        <>
          <path
            className="route-ink"
            d="M90 60L230 130M90 130H230M90 200L230 130M310 130H370"
          />
          <path strokeDasharray="6 7" d="M390 130H448" />
          {[60, 130, 200].map((y) => (
            <g key={y}>
              <circle cx="65" cy={y} r="24" />
              <path d={`M53 ${y - 5}h24m-24 10h18`} />
            </g>
          ))}
          <Paper x={230} y={84} lines={phase >= 2 ? 4 : 2} />
          <path d="M448 82h87v82h-49l-22 18v-18h-16zM460 104h62m-62 18h45m-45 18h54" />
          <circle
            className="travel-dot"
            r="7"
            cy="130"
            cx={phase < 2 ? 160 : 350}
          />
          <path
            className={phase === 3 ? "active-object" : ""}
            d="M477 202h30m-15-9v18"
          />
        </>
      )}
      {topic === "measurement" && (
        <>
          <path
            className="route-ink"
            markerEnd={"url(#arrow-" + topic + ")"}
            d="M140 75Q280 0 420 75M450 110Q490 190 400 215M365 225Q230 280 135 200M110 170Q70 120 120 95"
          />
          <Paper x={112} y={84} lines={3} />
          <g className={phase === 2 ? "active-object" : ""}>
            <circle cx="286" cy="125" r="44" />
            <path d="M316 157l29 29M265 110h40m-40 17h30m-30 17h20" />
          </g>
          <path d="M390 90h80v72h-80zM404 112h51m-51 17h32m-32 17h44" />
          <circle
            className="travel-dot"
            r="7"
            cx={phase === 0 ? 140 : phase === 1 ? 420 : phase === 2 ? 400 : 135}
            cy={phase < 2 ? 75 : 215}
          />
        </>
      )}
      {topic === "conversion" && (
        <>
          <path className="route-ink" d="M90 130H200M276 130H380M450 130H520" />
          <path d="M35 80h70v110H35zM47 98h45m-45 20h30m-30 20h37" />
          <Paper x={200} y={84} lines={3} />
          <rect x="380" y="92" width="70" height="76" rx="5" />
          <path d="M391 110h48m-48 16h48" />
          <rect
            className={phase >= 2 ? "active-object" : ""}
            x="392"
            y="141"
            width="46"
            height="16"
            rx="3"
          />
          <path d="M492 105h45v40h-19l-13 13v-13h-13z" />
          <circle
            className="travel-dot"
            r="7"
            cy="130"
            cx={phase === 0 ? 140 : phase === 1 ? 320 : phase === 2 ? 360 : 475}
          />
        </>
      )}
    </svg>
  );
}
export function ExplainerAnimation({
  initialTopic = "technical",
  showTopics = true,
}: {
  initialTopic?: DiagramTopic;
  showTopics?: boolean;
}) {
  const [topic, setTopic] = useState<DiagramTopic>(initialTopic),
    [phase, setPhase] = useState(0),
    [playing, setPlaying] = useState(true),
    [reduced, setReduced] = useState(true),
    [visible, setVisible] = useState(false);
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const m = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(m.matches);
    update();
    m.addEventListener("change", update);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );
    if (root.current) observer.observe(root.current);
    return () => {
      m.removeEventListener("change", update);
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    setTopic(initialTopic);
    setPhase(0);
  }, [initialTopic]);
  const running = playing && !reduced && visible;
  useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => setPhase((p) => (p + 1) % 4), 3200);
    return () => clearInterval(timer);
  }, [running, topic]);
  const data = topics[topic];
  return (
    <figure
      ref={root}
      className={`explainer-animation ${running ? "is-playing" : "is-paused"}`}
      data-topic={topic}
      data-phase={phase}
    >
      <div className="diagram-heading">
        <div>
          <p className="eyebrow">VEJA COMO FUNCIONA</p>
          <h3>{data.title}</h3>
        </div>
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          disabled={reduced}
          aria-label={playing ? "Pausar animação" : "Reproduzir animação"}
        >
          {reduced
            ? "Movimento reduzido"
            : playing
              ? "Pausar animação"
              : "Reproduzir animação"}
        </button>
      </div>
      {showTopics && (
        <div className="diagram-topics" aria-label="Assunto do desenho">
          {(Object.keys(topics) as DiagramTopic[]).map((key) => (
            <button
              type="button"
              key={key}
              aria-pressed={topic === key}
              onClick={() => {
                setTopic(key);
                setPhase(0);
              }}
            >
              {topics[key].name}
            </button>
          ))}
        </div>
      )}
      <div className="diagram-canvas">
        <Drawing topic={topic} phase={phase} />
      </div>
      <div className="diagram-stages" aria-label="Etapas do desenho">
        {data.labels.map((label, i) => (
          <button
            type="button"
            key={label}
            aria-pressed={phase === i}
            onClick={() => {
              setPhase(i);
              setPlaying(false);
            }}
          >
            <span>0{i + 1}</span>
            {label}
          </button>
        ))}
      </div>
      <figcaption>
        <strong>{data.labels[phase]}.</strong> {data.captions[phase]}
      </figcaption>
      <details className="diagram-transcript">
        <summary>Ler a explicação completa do desenho</summary>
        <ol>
          {data.captions.map((caption, i) => (
            <li key={caption}>
              <strong>{data.labels[i]}:</strong> {caption}
            </li>
          ))}
        </ol>
      </details>
      <p className="diagram-note">
        Esquema explicativo, sem dados de clientes ou promessa de resultado.
        Você pode pausar ou selecionar uma etapa.
      </p>
    </figure>
  );
}
