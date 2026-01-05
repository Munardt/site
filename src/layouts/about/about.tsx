import { AboutMunardt } from "@/layouts/about/about-munardt/about-munardt";
import { AboutMe } from "@/layouts/about/about-me/about-me";
import { AboutNameOrigin } from "@/layouts/about/about-name-origin/about-name-origin";
import { AboutPhilosophy } from "@/layouts/about/about-philosophy/about-philosophy";
import { JSX } from "react";

/**
 * Componente que representa a página de sobre mim.
 * Explica um pouco sobre mim e a Munardt, como eu acredito que ela pode — e deve — simplificar a vida, como nasceu, e como ela funciona.
 * @returns {JSX.Element} Um elemento JSX que representa o componente.
 */
export default function AboutPage(): JSX.Element {
  return (
    <section
      className="flex flex-col justify-center items-center min-h-[100vh] relative z-10 py-20 bg-transparent"
      id="about"
    >
      <h2 className="bg-clip-text text-4xl sm:text-5xl font-bold text-center text-shadow-lg/60 mb-12 bg-gradient-to-r from-pink-400 to-indigo-600 ">
        Um pouco sobre mim & Munardt
      </h2>

      <div className="grid grid-cols-12 grid-rows-2 gap-4 px-6 max-w-[1200px] mx-auto">
        <div className="col-span-12 sm:col-span-6 md:col-span-4">
          <AboutMe />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-8">
          <AboutMunardt />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-8">
          <AboutPhilosophy />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4">
          <AboutNameOrigin />
        </div>
      </div>
      <div className="absolute inset-0 -z-10 blur-3xl opacity-25 bg-gradient-to-tr from-indigo-950 to-purple-950" />
    </section>
  );
}
