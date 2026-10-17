import type { ProjectPreview as PreviewKind } from "@/data/projects";

import { useReducedMotion } from "motion/react";
import { JSX } from "react";
import { FiCheck, FiMail } from "react-icons/fi";

/*
 * Ilustrações dos cards de projeto. São decorativas (aria-hidden) e usam só
 * os tokens de cor, então acompanham o tema. Quando houver prints reais, dá
 * para trocá-las por <img> sem mudar o card.
 */

const soft = "bg-[color-mix(in_srgb,var(--fg)_8%,transparent)]";

/** Site da streamer: player ao vivo e chat com comandos. */
function StreamPreview(): JSX.Element {
  const chat = [
    ["w-10", "w-24"],
    ["w-14", "w-16"],
    ["w-8", "w-28"],
    ["w-12", "w-20"],
    ["w-10", "w-14"],
  ];

  return (
    <div className="grid h-full grid-cols-[1fr_34%] gap-2.5 p-3">
      <div className="relative overflow-hidden rounded-lg bg-[linear-gradient(135deg,color-mix(in_srgb,var(--a1)_45%,transparent),color-mix(in_srgb,var(--a2)_35%,transparent))]">
        <span className="absolute left-2.5 top-2.5 rounded-sm bg-a2 px-1.5 py-0.5 font-mono text-[9px] font-semibold tracking-[0.12em] text-cta-fg">
          LIVE
        </span>
        <span className="absolute right-2.5 top-2.5 font-mono text-[10px] text-fg/80">
          ● 1.284
        </span>
        <div className="absolute inset-x-3 bottom-3 flex h-8 items-end gap-[3px]">
          {Array.from({ length: 28 }).map((_, i) => (
            <span
              key={i}
              className="w-full rounded-[1px] bg-fg/50"
              style={{ height: `${25 + Math.abs(Math.sin(i * 1.7)) * 75}%` }}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 rounded-lg border border-line p-2.5">
        {chat.map(([name, text], i) => (
          <div key={i} className="flex gap-1.5">
            <span
              className={`h-1.5 ${name} rounded-full ${i % 2 ? "bg-a2/70" : "bg-a1/70"}`}
            />
            <span className={`h-1.5 ${text} max-w-full rounded-full ${soft}`} />
          </div>
        ))}
        <span className="mt-auto self-start rounded border border-a1/60 px-1.5 py-0.5 font-mono text-[10px] text-a1">
          !comandos
        </span>
      </div>
    </div>
  );
}

/** Automação: planilha gerada e enviada por e-mail. */
function SheetPreview(): JSX.Element {
  const filled = new Set([5, 9, 10, 14, 17, 18, 22]);

  return (
    <div className="relative h-full p-3">
      <div className="mb-2 flex items-center justify-between font-mono text-[10px] text-dim">
        <span>trocas_semana.xlsx</span>
        <span>A1:D6</span>
      </div>
      <div className="grid grid-cols-4 overflow-hidden rounded-md border border-line">
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className={`h-6 border-b border-r border-line ${
              i < 4
                ? "bg-surface-2"
                : filled.has(i)
                  ? "bg-a1/15"
                  : "bg-transparent"
            }`}
          >
            <span
              className={`m-2 block h-1.5 rounded-full ${i < 4 ? "w-1/2 bg-muted/50" : soft}`}
            />
          </span>
        ))}
      </div>
      <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-md border border-line bg-surface px-2.5 py-2 shadow-lg shadow-black/10">
        <FiMail className="text-a2" size={14} />
        <span className={`h-1.5 w-12 rounded-full ${soft}`} />
        <FiCheck className="text-a1" size={14} />
      </div>
    </div>
  );
}

/** ERP: quadro de produção e etiqueta com código de barras. */
function ErpPreview(): JSX.Element {
  const columns = [3, 2, 1];

  return (
    <div className="relative grid h-full grid-cols-3 gap-2 p-3">
      {columns.map((cards, c) => (
        <div
          key={c}
          className="flex flex-col gap-1.5 rounded-md bg-surface-2/70 p-1.5"
        >
          <span
            className={`mb-0.5 h-1.5 w-1/2 rounded-full ${c === 0 ? "bg-a1/70" : c === 1 ? "bg-a2/70" : "bg-muted/50"}`}
          />
          {Array.from({ length: cards }).map((_, i) => (
            <span
              key={i}
              className="block rounded border border-line bg-bg p-1.5"
            >
              <span className={`block h-1.5 w-4/5 rounded-full ${soft}`} />
              <span className={`mt-1 block h-1.5 w-1/2 rounded-full ${soft}`} />
            </span>
          ))}
        </div>
      ))}
      <div className="absolute bottom-3 right-3 w-24 rotate-[-4deg] rounded-sm border border-line bg-surface p-2 shadow-lg shadow-black/10">
        <span
          className="block h-7"
          style={{
            background:
              "repeating-linear-gradient(90deg, var(--fg) 0 1px, transparent 1px 3px, var(--fg) 3px 5px, transparent 5px 6px)",
          }}
        />
        <span className="mt-1 block font-mono text-[8px] tracking-[0.2em] text-muted">
          7891 0042
        </span>
      </div>
    </div>
  );
}

const TRACK =
  "M24 72 C22 34 58 22 92 30 L148 24 C176 21 188 42 170 56 L132 70 C114 77 120 93 142 96 L174 101 C192 105 186 126 164 126 L52 126 C28 126 25 104 24 72 Z";

/** Lights Out: traçado de circuito com um carro dando voltas. */
function TrackPreview(): JSX.Element {
  const reduce = useReducedMotion();

  return (
    <div className="flex h-full flex-col justify-center gap-2 p-4">
      <svg className="mx-auto h-[78%] w-auto" viewBox="0 0 200 140">
        <path
          d={TRACK}
          fill="none"
          id="lights-out-track"
          stroke="var(--line-strong)"
          strokeWidth="5"
        />
        <path
          d={TRACK}
          fill="none"
          stroke="var(--a2)"
          strokeDasharray="60 600"
          strokeLinecap="round"
          strokeWidth="2.5"
        >
          {!reduce && (
            <animate
              attributeName="stroke-dashoffset"
              dur="6s"
              from="660"
              repeatCount="indefinite"
              to="0"
            />
          )}
        </path>
        <line
          stroke="var(--fg)"
          strokeWidth="2"
          x1="18"
          x2="30"
          y1="72"
          y2="72"
        />
        <circle
          fill="var(--a1)"
          r="4.5"
          {...(reduce ? { cx: 24, cy: 72 } : {})}
        >
          {!reduce && (
            <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
              <mpath href="#lights-out-track" />
            </animateMotion>
          )}
        </circle>
      </svg>
      <div className="flex justify-between font-mono text-[10px] text-dim">
        <span>LAP 0/58</span>
        <span>S1 · S2 · S3</span>
      </div>
    </div>
  );
}

/** Projeto em ASP.NET MVC: trecho de controller. */
function CodePreview(): JSX.Element {
  const k = "text-a1";
  const ty = "text-a2";
  const m = "text-muted";

  return (
    <pre className="h-full overflow-hidden p-4 font-mono text-[11px] leading-[1.7] text-fg">
      <code>
        <span className={k}>public class</span>{" "}
        <span className={ty}>PedidoController</span> :{" "}
        <span className={ty}>Controller</span>
        {"\n{\n  "}
        <span className={m}>[HttpPost]</span>
        {"\n  "}
        <span className={k}>public</span>{" "}
        <span className={ty}>IActionResult</span> Finalizar(
        <span className={k}>int</span> id)
        {"\n  {\n    "}
        <span className={k}>var</span> pedido = _db.Pedidos.Find(id);
        {"\n    "}pedido.FinalizadoEm = <span className={ty}>DateTime</span>
        .Now;
        {"\n    "}_db.SaveChanges();
        {"\n    "}
        <span className={k}>return</span> RedirectToAction(
        <span className={m}>&quot;Index&quot;</span>);
        {"\n  }\n}"}
      </code>
    </pre>
  );
}

const previews: Record<PreviewKind, () => JSX.Element> = {
  stream: StreamPreview,
  sheet: SheetPreview,
  erp: ErpPreview,
  track: TrackPreview,
  code: CodePreview,
};

/**
 * Renderiza a ilustração de um projeto.
 * @param {{ kind: PreviewKind }} param0 Tipo de ilustração
 * @returns {JSX.Element} Ilustração
 */
export function ProjectPreview({ kind }: { kind: PreviewKind }): JSX.Element {
  const Preview = previews[kind];

  return (
    <div aria-hidden="true" className="h-full">
      <Preview />
    </div>
  );
}
