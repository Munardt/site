import { AboutTechnologies } from "@/types/technologies";
import { Fragment } from "react/jsx-runtime";

import { TechIconsRow } from "./icons/tech-icons";
import { TechPlaceholderRow } from "./placeholder/tech-placeholder";
import { JSX } from "react";

/* Estrutura de linhas intermediárias com número de ícones por linha */
const gridStructure: number[] = [7, 9, 5];

/**
 * Componente que exibe uma grade de tecnologias e linguagens de programação.
 * A grade é composta por ícones de tecnologias organizados em linhas, com
 * placeholders no topo e na base. O componente também inclui uma seção de
 * introdução que descreve a experiência do desenvolvedor com as tecnologias
 * listadas.
 *
 * @returns {JSX.Element} O elemento JSX que representa a grade de tecnologias.
 */
export default function TechnologiesGrid(): JSX.Element {
  let iconIndex: number = 0;

  return (
    <section
      className="flex flex-col justify-center items-center min-h-[100vh] relative z-10 py-20 bg-transparent"
      id="technologies"
    >
      <h1 className="text-4xl lg:text-5xl font-bold p-2 text-center bg-gradient-to-r from-pink-600 to-violet-700 bg-clip-text text-transparent dark:from-pink-400 dark:to-violet-700">
        Tecnologias e Linguagens de Programação
      </h1>

      <p className="max-w-3xl p-10 mx-auto text-center text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        Essas são as principais tecnologias e linguagens com as quais já atuei
        em projetos reais. Tenho familiaridade com todo o ecossistema
        representado, incluindo frameworks, bibliotecas, ferramentas de
        versionamento, integração contínua e ambientes de desenvolvimento. Essa
        base sólida me permite atuar com eficiência no front-end! Já no back-end
        ainda estou desenvolvendo e aprimorando minhas habilidades.
      </p>

      <div className="space-y-6 px-10 max-w-8xl mx-auto">
        <TechPlaceholderRow keyPrefix="top-layer" />

        {gridStructure.map((iconsInLine, rowIdx) => {
          const rowIcons = AboutTechnologies.slice(
            iconIndex,
            iconIndex + iconsInLine
          );
          iconIndex += iconsInLine;
          return (
            <Fragment key={`fragment-${rowIdx}`}>
              <TechIconsRow rowIcons={rowIcons} rowIdx={rowIdx} />
            </Fragment>
          );
        })}

        <TechPlaceholderRow keyPrefix="bottom-layer" />
      </div>
      <div className="absolute inset-0 -z-10 blur-3xl opacity-25 bg-gradient-to-tr from-violet-950 to-indigo-900" />
    </section>
  );
}
