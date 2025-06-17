import { AboutTechnologies } from "@/types/about-technologies";
import clsx from "clsx";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { CalculateAge } from "./calculate/calculate-age";

export default function AboutPage(): JSX.Element {
  const [age, setAge]: [number, Dispatch<SetStateAction<number>>] =
    useState(CalculateAge());

  useEffect(() => {
    setAge(CalculateAge());
  }, []);

  return (
    <section
      className="min-h-[100vh] flex flex-col justify-center px-6 relative overflow-hidden"
      id="about"
    >
      {/* Gradiente de fundo contínuo com o mesmo estilo do Hero */}
      <div className="absolute inset-100 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-indigo-950 to-purple-950" />

      {/* Bolhas tecnológicas com mesmo estilo do Hero */}
      <div className="absolute w-40 h-40 bg-red-600 rounded-full opacity-20 blur-2xl top-10 left-5 animate-pulse -z-10" />
      <div className="absolute w-36 h-36 bg-blue-400 rounded-full opacity-20 blur-2xl bottom-10 right-10 animate-pulse-slow -z-10" />
      <div className="absolute w-32 h-32 bg-sky-600 rounded-full opacity-20 blur-2xl top-[30%] right-[25%] animate-pulse-slow -z-10" />
      <div className="absolute w-28 h-28 bg-indigo-500 rounded-full opacity-20 blur-2xl bottom-[20%] left-[20%] animate-pulse -z-10" />

      <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-pink-400 to-indigo-600 bg-clip-text text-transparent">
        Sobre Mim
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-default-600">
        <div className="space-y-5 text-base sm:text-lg">
          <p>
            Tenho {age} anos e atuo como Desenvolvedor Front-End Pleno, com mais
            de 1 ano e meio de experiência em um sistema ERP criado do zero.
          </p>
          <p>
            Trabalho diariamente com Angular e estou me especializando em React.
            Também utilizo Docker, Azure App Services, GitHub Actions e
            semantic-release para automação de versionamento.
          </p>
          <p>
            Além disso, tenho experiência com .NET (C#), SQL Server, deploys em
            servidores Linux e rotinas de CI/CD.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {AboutTechnologies.map((tech) => (
            <div
              key={tech.name}
              className={clsx(
                "group bg-default-100 dark:bg-default-50 rounded-xl p-4 flex flex-col items-center justify-center transform transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl",
                tech.shadowColor && `hover:${tech.shadowColor}`
              )}
            >
              <div className="mb-2">
                {<tech.icon className={tech.iconColor} />}
              </div>
              <span className="text-sm font-medium text-center text-default-800">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
