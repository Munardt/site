import { Fragment } from "react/jsx-runtime";
import { TechPlaceholderRow } from "./placeholder/tech-placeholder";
import { TechIconsRow } from "./icons/tech-icons";
import { AboutTechnologies } from "@/types/about-technologies";
import { Tooltip } from "@heroui/tooltip";
import { Button } from "@heroui/button";

// Estrutura de linhas intermediárias com número de ícones por linha
const gridStructure = [7, 9, 5];

/**
 * Componente principal da grid de tecnologias
 */
export default function TechnologiesGrid() {
  let iconIndex = 0;

  return (
    <section className="min-h-[100vh] relative z-10 py-20 bg-white dark:bg-black">
      <h1 className="text-4xl lg:text-5xl font-bold p-2 text-center bg-gradient-to-r from-emerald-600 to-indigo-700 bg-clip-text text-transparent dark:from-emerald-400 dark:to-indigo-700">
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
        {/* Grid superior (sombra de fundo) */}
        <TechPlaceholderRow keyPrefix="top-layer" />

        {/* Linhas de ícones com centragem e animações */}
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

        {/* Grid inferior (sombra de fundo) */}
        <TechPlaceholderRow keyPrefix="bottom-layer" />
      </div>
      <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-emerald-900 to-indigo-900" />

      <div className="absolute top-0 left-0 w-full h-40 -z-10">
        <div className="w-full h-full bg-gradient-to-b from-emerald-900/5 via-indigo-900/3 to-transparent blur-xl"></div>
      </div>
    </section>
  );
}
