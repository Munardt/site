import { useReducedMotion } from "motion/react";
import { JSX, useEffect, useRef } from "react";

import { SphereEngine } from "./sphere-engine";

import { useTheme } from "@/theme/theme-provider";

/**
 * Lê as cores da esfera dos tokens CSS do tema atual.
 * @returns {{ a1: string; a2: string; hi: string }} Cores da esfera
 */
function readColors() {
  const style = getComputedStyle(document.documentElement);

  return {
    a1: style.getPropertyValue("--sphere-a1"),
    a2: style.getPropertyValue("--sphere-a2"),
    hi: style.getPropertyValue("--sphere-hi"),
  };
}

/**
 * Esfera de partículas interativa do hero. Ocupa todo o elemento pai.
 *
 * Pausa quando sai da tela ou a aba fica oculta, se dispersa conforme o
 * usuário rola a página e fica parada quando o sistema pede menos movimento.
 * @returns {JSX.Element} Canvas da esfera
 */
export function ParticleSphere(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<SphereEngine | null>(null);
  const reducedMotion = useReducedMotion() ?? false;
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const engine = new SphereEngine(canvas, reducedMotion);
    let visible = true;

    engineRef.current = engine;
    engine.resize();
    engine.setColors(readColors(), theme === "light");

    const resizeObserver = new ResizeObserver(() => engine.resize());
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !document.hidden) engine.start();
      else engine.stop();
    });

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();

      engine.setPointer(event.clientX - rect.left, event.clientY - rect.top);
    };
    const onPointerLeave = () => engine.clearPointer();
    const onScroll = () => {
      engine.setScatter(window.scrollY / (canvas.clientHeight * 0.9));
    };
    const onVisibility = () => {
      if (document.hidden) engine.stop();
      else if (visible) engine.start();
    };

    resizeObserver.observe(canvas);
    intersectionObserver.observe(canvas);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    onScroll();

    return () => {
      engine.stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener(
        "pointerleave",
        onPointerLeave,
      );
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
      engineRef.current = null;
    };
  }, [reducedMotion]);

  useEffect(() => {
    engineRef.current?.setColors(readColors(), theme === "light");
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
