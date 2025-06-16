import { Button } from "@heroui/button";
import { useEffect, useState } from "react";

export default function HomePage(): JSX.Element {
  return (
    <section className="min-h-[95vh] flex flex-col justify-center items-center text-center px-6 relative">
      <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
        Olá, eu sou Gabriel Arthur Mundt
      </h1>
      <p className="mt-4 text-xl text-default-500 max-w-2xl">
        Desenvolvedor Front-End Pleno, com experiência em Angular, React, Azure
        e Docker.
      </p>
      <div className="mt-8 flex gap-4">
        <Button color="default" variant="shadow">
          Ver Projetos
        </Button>
        <Button color="secondary" variant="shadow">
          <a href="#contact">Entrar em Contato</a>
        </Button>
      </div>

      <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-indigo-950 to-purple-950"></div>
    </section>
  );
}
