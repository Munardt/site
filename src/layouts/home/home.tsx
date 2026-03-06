import { SectionReveal } from "@/components/animations/section-reveal";
import { Button } from "@heroui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { JSX } from "react";

/**
 * Componente de apresentação inicial do site. Famoso Hero Section.
 * @returns {JSX.Element} Um elemento JSX que representa o componente.
 */
export default function HomePage(): JSX.Element {
  const { scrollY } = useScroll();
  const leftOrbY = useTransform(scrollY, [0, 600], [0, 120]);
  const rightOrbY = useTransform(scrollY, [0, 600], [0, -100]);

  return (
    <section
      className="min-h-[100vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
      id="home"
    >
      <SectionReveal className="max-w-4xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          Olá, eu sou Gabriel Arthur Mundt
        </h1>
      </SectionReveal>

      <SectionReveal className="max-w-2xl" delay={0.08}>
        <p className="mt-4 text-lg sm:text-xl text-default-600">
          Desenvolvedor Front-End Pleno com foco em performance, produtividade e
          experiências visuais marcantes. Especialista em Angular, React, Azure
          e Docker.
        </p>
      </SectionReveal>

      <SectionReveal className="max-w-xl" delay={0.14}>
        <p className="mt-2 text-default-600 text-sm sm:text-base">
          Crio interfaces modernas, responsivas e elegantes, combinando código
          limpo com atenção aos detalhes visuais para oferecer a melhor
          experiência ao usuário.
        </p>
      </SectionReveal>

      <SectionReveal className="mt-8 flex gap-4" delay={0.2}>
        <Button color="default" variant="light">
          <a href="#projects">Ver Projetos</a>
        </Button>
        <Button color="secondary" variant="shadow">
          <a href="#contact">Entrar em Contato</a>
        </Button>
      </SectionReveal>

      <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-indigo-950 to-purple-950" />

      <motion.div
        className="absolute top-[20%] left-[10%] w-40 h-40 bg-purple-700 rounded-full opacity-20 blur-2xl -z-10"
        style={{ y: leftOrbY }}
      />
      <motion.div
        className="absolute bottom-[15%] right-[15%] w-60 h-60 bg-pink-500 rounded-full opacity-10 blur-3xl -z-10"
        style={{ y: rightOrbY }}
      />
    </section>
  );
}
