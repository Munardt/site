import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CalculateAge } from "./calculate/calculate-age";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function AboutPage(): JSX.Element {
  const [age, setAge]: [number, Dispatch<SetStateAction<number>>] =
    useState(CalculateAge());

  useEffect(() => {
    setAge(CalculateAge());
  }, []);

  const aboutParagraphs = [
    `Tenho ${age} anos e atuo como Desenvolvedor Front-End Pleno, com mais de 1 ano e meio de experiência em um sistema ERP construído do zero. Especializado em Angular e cada vez mais envolvido com o ecossistema React, gosto de explorar o equilíbrio entre performance, design e experiência do usuário.`,
    `No meu dia a dia, trabalho com ferramentas como Docker, Azure App Services, GitHub Actions e semantic-release para garantir automações de qualidade em CI/CD. Também possuo experiência com .NET (C#), SQL Server e deploys em servidores Linux.`,
    `Este site é o espaço oficial da Munardt, um projeto pessoal que nasceu da vontade de unificar minhas criações, compartilhar ideias e documentar meu processo de aprendizado.`,
    `O nome Munardt surgiu da fusão dos sobrenomes Mundt e Arthur, refletindo minha identidade e visão técnica com uma marca única e pessoal.`,
    `A proposta da Munardt é simples: criar soluções com código limpo, usabilidade prática e design moderno — seja para empresas, produtos próprios ou projetos experimentais.`,
  ];

  return (
    <section
      id="about"
      className="relative min-h-[100vh] flex flex-col justify-center px-6 py-24 overflow-hidden"
    >
      {/* Fade topo integrando com Home */}
      <div className="absolute top-0 left-0 w-full h-40 -z-20">
        <div className="w-full h-full bg-gradient-to-b from-purple-950/5 via-purple-900/3 to-transparent blur-3xl"></div>
      </div>

      {/* Fade bottom integrando com TechPage */}
      <div className="absolute bottom-0 left-0 w-full h-40 -z-20">
        <div className="w-full h-full bg-gradient-to-t from-emerald-900/5 via-indigo-900/3 to-transparent blur-3xl"></div>
      </div>
      {/* 🌈 Título */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-indigo-600 bg-clip-text text-transparent"
      >
        Sobre Mim
      </motion.h2>

      {/* 🧩 Cards */}
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {aboutParagraphs.map((text, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group bg-default-100 dark:bg-default-800 p-6 sm:p-8 rounded-2xl shadow-lg border border-transparent hover:border-primary-500 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex gap-3 items-start">
              <FaArrowRight className="h-5 w-5 mt-1 text-primary-500 transition-transform group-hover:translate-x-1" />
              <p className="text-default-600 dark:text-default-200 text-base leading-relaxed">
                {text.includes("semantic-release") ? (
                  <>
                    No meu dia a dia, trabalho com ferramentas como Docker,
                    Azure App Services, GitHub Actions e{" "}
                    <code className="bg-default-200 dark:bg-default-700 px-1 py-0.5 rounded text-sm font-mono text-primary-600 dark:text-primary-400">
                      semantic-release
                    </code>{" "}
                    para garantir automações de qualidade em CI/CD...
                  </>
                ) : (
                  text
                )}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
