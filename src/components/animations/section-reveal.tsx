import { motion, useReducedMotion } from "motion/react";
import { JSX, ReactNode } from "react";

/** Propriedades do componente. */
type SectionRevealProps = {
  /** Conteúdo a ser revelado */
  children: ReactNode;

  /** Classe CSS adicional */
  className?: string;

  /** Delay de animação */
  delay?: number;
};

/**
 * Wrapper de animação para revelar conteúdo conforme entra na viewport.
 */
export function SectionReveal({
  children,
  className,
  delay = 0,
}: SectionRevealProps): JSX.Element {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.15 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
