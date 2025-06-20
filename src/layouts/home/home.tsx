import { Button } from "@heroui/button";

/**
 * Componente de apresentação inicial do site. Famoso Hero Section.
 * @returns {JSX.Element} Um elemento JSX que representa o componente.
 */
export default function HomePage(): JSX.Element {
  return (
    <section
      className="min-h-[100vh] flex flex-col justify-center items-center text-center px-6 relative"
      id="home"
    >
      <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
        Olá, eu sou Gabriel Arthur Mundt
      </h1>

      <p className="mt-4 text-lg sm:text-xl text-default-500 max-w-2xl">
        Desenvolvedor Front-End Pleno com foco em performance, produtividade e
        experiências visuais marcantes. Especialista em Angular, React, Azure e
        Docker.
      </p>

      <p className="mt-2 text-default-400 max-w-xl text-sm sm:text-base">
        Crio interfaces modernas, responsivas e elegantes, combinando código
        limpo com atenção aos detalhes visuais para oferecer a melhor
        experiência ao usuário.
      </p>

      <div className="mt-8 flex gap-4">
        <Button color="default" variant="light">
          Ver Projetos
        </Button>
        <Button color="secondary" variant="shadow">
          <a href="#contact">Entrar em Contato</a>
        </Button>
      </div>

      <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-indigo-950 to-purple-950"></div>

      <div className="absolute top-[20%] left-[10%] w-40 h-40 bg-purple-700 rounded-full opacity-20 blur-2xl animate-pulse -z-10"></div>
      <div className="absolute bottom-[15%] right-[15%] w-60 h-60 bg-pink-500 rounded-full opacity-10 blur-3xl animate-pulse-slow -z-10"></div>
    </section>
  );
}
