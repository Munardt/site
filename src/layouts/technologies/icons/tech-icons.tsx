import { AboutTechnologies } from "@/types/technologies";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Tooltip } from "@heroui/tooltip";
import { Button } from "@heroui/button";

/* Número total de colunas na grid */
const colsNumber: number = 18;

/**
 * Componente reutilizável para os blocos "fantasmas" da grid (sem conteúdo)
 */
const Ghost = ({ ...props }) => (
  <div
    {...props}
    className="aspect-square rounded-xl bg-neutral-400 dark:bg-zinc-800 opacity-20 z-10 ring-2 ring-inset ring-black/10 dark:ring-white/10"
  />
);

/**
 * Componente que renderiza uma linha de tecnologias com efeitos de
 * animação e hover. Utiliza a biblioteca Framer Motion para criar
 * efeitos de movimento e escalonamento.
 *
 * @param {typeof AboutTechnologies} rowIcons Array de objetos
 *   com dados de cada tecnologia (nome, cor de background, cor de
 *   gradiente, cor de texto, etc.).
 * @param {number} rowIdx Índice da linha na grid.
 *
 * @returns {JSX.Element} O componente JSX que representa a linha
 *   de tecnologias.
 */
export function TechIconsRow({
  rowIcons,
  rowIdx,
}: {
  rowIcons: typeof AboutTechnologies;
  rowIdx: number;
}) {
  const emptyCount: number = colsNumber - rowIcons.length;
  const emptyStart: number = Math.floor(emptyCount / 2);
  const emptyEnd: number = emptyCount - emptyStart;

  return (
    <div
      key={`row-${rowIdx}`}
      className="grid grid-cols-16 gap-4 w-full relative"
      style={{ gridTemplateColumns: `repeat(${colsNumber}, minmax(0, 1fr))` }}
    >
      <div className="absolute inset-0 rounded-xl pointer-events-none bg-gradient-radial from-transparent via-transparent to-black/10 dark:to-white/10 z-0" />

      {[
        ...Array.from({ length: emptyStart }).map((_, i) => (
          <Ghost key={`ghost-start-${rowIdx}-${i}`} />
        )),

        ...rowIcons.map((tech, index) => (
          <motion.div
            key={tech.name}
            className={clsx(
              "relative group rounded-xl aspect-square z-10",
              "bg-neutral-300 dark:bg-zinc-900 transition-colors duration-300",
              "flex items-center justify-center overflow-visible",
              "hover:-translate-y-1 hover:shadow-2xl transform transition-transform",
              "ring-1 ring-inset ring-black/20 dark:ring-white/20"
            )}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
          >
            <div
              className={clsx(
                "absolute -inset-2 blur-xl opacity-70 scale-100 pointer-events-none",
                `bg-gradient-to-br ${tech.shadowColor} to-transparent`
              )}
            />
            <div
              className={clsx(
                "absolute -inset-2 blur-2xl opacity-0 scale-75 transition-all duration-500",
                "group-hover:opacity-100 group-hover:scale-125",
                `bg-gradient-to-br ${tech.glowColor} to-transparent`
              )}
            />

            <Tooltip
              content={tech.name}
              delay={500}
              classNames={{
                base: `${tech.baseTooltipColor}`,
                content: `${tech.tooltipColor}`,
              }}
              showArrow={true}
            >
              <Button className="bg-transparent">
                <tech.icon className={clsx(tech.iconColor, "relative z-10")} />
              </Button>
            </Tooltip>
          </motion.div>
        )),

        ...Array.from({ length: emptyEnd }).map((_, i) => (
          <Ghost key={`ghost-end-${rowIdx}-${i}`} />
        )),
      ]}
    </div>
  );
}
