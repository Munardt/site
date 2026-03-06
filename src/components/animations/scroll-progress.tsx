import { JSX } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

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
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-indigo-200 via-fuchsia-500 to-violet-600"
      style={{ scaleX }}
    />
  );
}
