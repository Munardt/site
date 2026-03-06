import { AboutTechnologies } from "@/types/technologies";
import { TechIconCard } from "./icons/tech-icons";
import { SectionReveal } from "@/components/animations/section-reveal";
import { JSX } from "react";

/**
 * Componente que exibe uma grade responsiva de tecnologias e linguagens de
 * programação. Inclui uma seção de introdução que descreve a experiência do
 * desenvolvedor com as tecnologias listadas.
 *
 * @returns {JSX.Element} O elemento JSX que representa a grade de tecnologias.
 */
export default function TechnologiesGrid(): JSX.Element {
  return (
    <section
      className="flex flex-col justify-center items-center min-h-[100vh] relative z-10 py-20 bg-transparent px-4"
      id="technologies"
    >
      <SectionReveal>
        <h1 className="text-4xl lg:text-5xl font-bold p-2 text-center bg-gradient-to-r from-pink-600 to-violet-700 bg-clip-text text-transparent dark:from-pink-400 dark:to-violet-700">
          Tecnologias e Linguagens de Programação
        </h1>
      </SectionReveal>

      <SectionReveal delay={0.06}>
        <p className="max-w-3xl px-4 py-10 mx-auto text-center text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Essas são as principais tecnologias e linguagens com as quais já atuei
          em projetos reais. Tenho familiaridade com todo o ecossistema
          representado, incluindo frameworks, bibliotecas, ferramentas de
          versionamento, integração contínua e ambientes de desenvolvimento.
          Essa base sólida me permite atuar com eficiência no front-end! Já no
          back-end ainda estou desenvolvendo e aprimorando minhas habilidades.
        </p>
      </SectionReveal>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-3 sm:gap-4">
        {AboutTechnologies.map((tech, index) => (
          <TechIconCard key={tech.name} tech={tech} index={index} />
        ))}
      </div>
      <div className="absolute inset-0 -z-10 blur-3xl opacity-25 bg-gradient-to-tr from-violet-950 to-indigo-900" />
    </section>
  );
}
