import { SectionReveal } from "@/components/animations/section-reveal";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { JSX } from "react";

/** Interface para representar um projeto. */
type Project = {
  /** Slug do projeto. */
  slug: string;

  /** Título do projeto. */
  title: string;

  /** Resumo do projeto. */
  summary: string;

  /** Tags de tecnologias utilizadas no projeto. */
  tags: string[];
};

/** Lista de projetos que eu desenvolvi e/ou participei. */
const projects: Project[] = [
  {
    slug: "https://minhaetiqueta.com.br",
    title: "ERP Minha Etiqueta",
    summary:
      "Sistema ERP para operação têxtil com fluxo de produção, RBAC, gerenciamento de pedidos e integração com impressoras térmicas e impressão de etiquetas.",
    tags: ["Angular", "C#", "ERP", "Produção"],
  },
  {
    slug: "https://github.com/Munardt/Projeto-Estoque-MVC",
    title: "Gestão de Estoque e Produção de Pedidos",
    summary:
      "A solução diminuiu retrabalho operacional e trouxe mais previsibilidade e detalhamento para o planejamento e fluxo de produção.",
    tags: ["Estoque", "Validação", "Produtividade", "Regra de Negócio"],
  },
];

/**
 * Componente de página de projetos.
 *
 * Mostra uma lista de projetos que eu desenvolvi e/ou participei,
 * com seus respectivos resumos e tags de tecnologias utilizadas.
 *
 * @returns {JSX.Element} Um elemento JSX que representa a página de projetos.
 */
export default function ProjectsPage(): JSX.Element {
  return (
    <section
      className="min-h-[100vh] px-4 sm:px-6 py-20 relative flex flex-col justify-center"
      id="projects"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/10 via-pink-500/10 to-purple-500/10 blur-3xl opacity-30" />

      <SectionReveal>
        <h3 className="text-4xl sm:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-pink-400 to-indigo-600 bg-clip-text text-transparent">
          Projetos
        </h3>
      </SectionReveal>

      <SectionReveal delay={0.06}>
        <p className="max-w-3xl mx-auto text-center text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Aqui estão concentrados o principais projetos que eu desenvolvi e/ou
          participei. Estou sempre buscando novos desafios para me desenvolver e
          aprimorar minhas habilidades.
        </p>
      </SectionReveal>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl w-full mx-auto">
        {projects.map((project, index) => (
          <SectionReveal key={project.slug} delay={0.08 + index * 0.06}>
            <a
              href={project.slug}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl p-6 border border-white/15 bg-zinc-900/40 backdrop-blur-md shadow-[0_6px_30px_rgba(140,120,255,0.15)] hover:shadow-[0_14px_45px_rgba(140,120,255,0.32)] transition-all duration-500 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/70"
            >
              <div className="flex items-start justify-between gap-3">
                <h4 className="text-xl font-semibold bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                  {project.title}
                </h4>
                <motion.span
                  className="text-fuchsia-400"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 12, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiArrowUpRight size={20} />
                </motion.span>
              </div>
              <p className="mt-3 text-default-600 dark:text-default-300 leading-relaxed">
                {project.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={`${project.slug}-${tag}`}
                    className="text-xs px-2.5 py-1 rounded-full border border-indigo-400  text-default-600 dark:text-default-500 bg-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
