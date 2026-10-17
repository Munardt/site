import { motion, useScroll, useSpring } from "motion/react";
import { JSX } from "react";

/**
 * Barra fina com progresso de rolagem da página.
 */
export function ScrollProgress(): JSX.Element {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-a1 to-a2"
      style={{ scaleX }}
    />
  );
}
