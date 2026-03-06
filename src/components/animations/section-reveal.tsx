import { JSX, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

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
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
