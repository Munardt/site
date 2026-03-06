import clsx from "clsx";
import { motion } from "framer-motion";
import { Tooltip } from "@heroui/tooltip";
import { TechnologiesInterface } from "@/interfaces/general/technologies";

/**
 * Componente reutilizável para o card de tecnologia com animação
 * e tooltip.
 *
 * @param {TechnologiesInterface} tech Objeto da tecnologia.
 * @param {string} tech.name Nome da tecnologia.
 * @param {IconType} tech.icon Icone da tecnologia.
 * @param {string} tech.iconColor Cor do icone da tecnologia.
 *
 */
export function TechIconCard({
  tech,
  index,
}: {
  tech: TechnologiesInterface;
  index: number;
}) {
  return (
    <motion.div
      className={clsx(
        "relative group rounded-xl aspect-square z-10",
        "bg-neutral-300/70 dark:bg-zinc-900/70 transition-colors duration-300",
        "flex items-center justify-center overflow-hidden",
        "hover:-translate-y-1 hover:shadow-2xl transform transition-transform",
        "ring-1 ring-inset ring-black/20 dark:ring-white/20",
      )}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ delay: index * 0.03, duration: 0.45 }}
    >
      <div
        className={clsx(
          "absolute -inset-2 blur-xl opacity-60 scale-100 pointer-events-none",
          `bg-gradient-to-br ${tech.shadowColor} to-transparent`,
        )}
      />
      <div
        className={clsx(
          "absolute -inset-2 blur-2xl opacity-0 scale-75 transition-all duration-500",
          "group-hover:opacity-100 group-hover:scale-125",
          `bg-gradient-to-br ${tech.glowColor} to-transparent`,
        )}
      />

      <Tooltip
        content={tech.name}
        delay={250}
        classNames={{
          base: `${tech.baseTooltipColor}`,
          content: `${tech.tooltipColor}`,
        }}
        showArrow={true}
      >
        <div className="w-full h-full flex items-center justify-center">
          <tech.icon className={clsx(tech.iconColor, "relative z-10")} />
        </div>
      </Tooltip>
    </motion.div>
  );
}
