import { motion } from "framer-motion";
import clsx from "clsx";
import { DiscordIcon, GithubIcon, LinkedInIcon } from "@/assets/icons";

// Tipagem para cada tecnologia
interface Technology {
  name: string;
  icon: JSX.Element;
  glowColor: string; // tailwind color class, ex: "from-blue-500"
}

// Ícones de exemplo (substitua pelos seus reais)

const technologies: Technology[] = [
  {
    name: "React",
    icon: <DiscordIcon size={32} />,
    glowColor: "from-blue-500",
  },
  {
    name: "Vue",
    icon: <GithubIcon size={32} />,
    glowColor: "from-slate-950",
  },
  {
    name: "Node",
    icon: <LinkedInIcon size={32} />,
    glowColor: "from-blue-600",
  },
  // Adicione mais aqui
];

export default function TechnologiesGrid() {
  return (
    <section className="relative z-10 py-20 text-white">
      <h2 className="text-center text-3xl font-bold mb-12">
        Tecnologias que utilizo
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 px-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="relative group rounded-xl bg-zinc-900 p-5 flex items-center justify-center overflow-hidden shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div
              className={clsx(
                "absolute inset-0 blur-2xl opacity-0 scale-75 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100",
                `bg-gradient-to-br ${tech.glowColor} to-transparent`
              )}
            />
            <div className="relative z-10">{tech.icon}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
