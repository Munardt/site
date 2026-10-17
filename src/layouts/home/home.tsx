import { motion, useReducedMotion } from "motion/react";
import { JSX } from "react";
import { FiArrowDown } from "react-icons/fi";

import { ParticleSphere } from "@/components/particle-sphere/particle-sphere";
import { CopyEmail } from "@/components/ui/copy-email";
import { useI18n } from "@/i18n/i18n-provider";

/**
 * Hero do site: esfera de partículas ao fundo, apresentação à esquerda e
 * contato rápido à direita.
 * @returns {JSX.Element} Seção hero
 */
export default function HomePage(): JSX.Element {
  const { t } = useI18n();
  const reduce = useReducedMotion();

  /**
   * Gera as props de entrada animada com atraso escalonado.
   * @param {number} index Ordem do elemento
   * @returns Props de animação do motion
   */
  const enter = (index: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: {
            delay: 0.15 + index * 0.08,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        };

  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
      id="top"
    >
      <ParticleSphere />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg to-transparent"
      />

      <div className="container-page relative z-10 flex flex-wrap items-end justify-between gap-x-10 gap-y-8 pb-12 pt-32 sm:pb-16">
        <div className="grid max-w-[780px] gap-5">
          <motion.span
            className="label flex items-center gap-2.5"
            {...enter(0)}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-a1 opacity-50 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-a1" />
            </span>
            {t.hero.eyebrow}
          </motion.span>
          <motion.h1
            className="text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-[4.1rem]"
            id="hero-title"
            {...enter(1)}
          >
            {t.hero.title}
          </motion.h1>
          <motion.p
            className="max-w-[46ch] text-base text-muted sm:text-lg"
            {...enter(2)}
          >
            {t.hero.subtitle}
          </motion.p>
        </div>

        <motion.div className="grid justify-items-start gap-3" {...enter(3)}>
          <span className="text-sm text-muted">{t.hero.note}</span>
          <div className="flex flex-wrap gap-3">
            <CopyEmail />
            <a
              className="group inline-flex h-12 items-center gap-4 rounded-[4px] bg-cta px-5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-cta-fg transition-transform hover:-translate-y-0.5"
              href="#projects"
            >
              {t.hero.cta}
              <FiArrowDown
                aria-hidden="true"
                className="transition-transform group-hover:translate-y-0.5"
                size={14}
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
