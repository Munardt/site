import type { Project, ProjectId } from "@/data/projects";

import clsx from "clsx";
import { JSX } from "react";
import { FiArrowUpRight, FiClock, FiGithub } from "react-icons/fi";

import { BrowserFrame } from "./browser-frame";
import { ProjectPreview } from "./project-previews";

import { SectionReveal } from "@/components/animations/section-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { getProjectScreenshot, projects } from "@/data/projects";
import { useI18n } from "@/i18n/i18n-provider";

/** Posição de cada projeto no bento (6 colunas no desktop, 2 no tablet). */
const layout: Record<ProjectId, string> = {
  priscilaneo: "md:col-span-2 lg:col-span-4",
  mrfTrocas: "lg:col-span-2",
  minhaEtiqueta: "lg:col-span-2",
  lightsOut: "lg:col-span-2",
  estoque: "lg:col-span-2",
};

/**
 * Card de projeto: janela com ilustração, selo de situação, textos e tags.
 * @param {{ project: Project }} param0 Projeto exibido
 * @returns {JSX.Element} Card do projeto
 */
function ProjectCard({ project }: { project: Project }): JSX.Element {
  const { t } = useI18n();
  const text = t.projects.items[project.id];
  const isLink = Boolean(project.url);
  const Wrapper = isLink ? "a" : "div";
  const action =
    project.status === "wip"
      ? { label: t.projects.actions.soon, Icon: FiClock }
      : project.status === "code"
        ? { label: t.projects.actions.code, Icon: FiGithub }
        : { label: t.projects.actions.site, Icon: FiArrowUpRight };

  return (
    <Wrapper
      className={clsx(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-[border-color,transform] duration-500",
        isLink && "hover:-translate-y-1 hover:border-line-strong",
      )}
      {...(isLink
        ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      <BrowserFrame
        address={project.address}
        screenshot={getProjectScreenshot(project.id)}
        screenshotAlt={t.projects.screenshotAlt(project.title)}
      >
        <ProjectPreview kind={project.preview} />
      </BrowserFrame>

      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="label flex items-center gap-2">
            <span
              className={clsx(
                "h-1.5 w-1.5 rounded-full",
                project.status === "live" && "bg-a1",
                project.status === "code" && "bg-muted",
                project.status === "wip" && "border border-a2",
              )}
            />
            {t.projects.status[project.status]}
          </span>
          <span className="font-mono text-[11px] tabular-nums text-dim">
            {project.year}
          </span>
        </div>

        <div className="grid gap-1">
          <h3 className="text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
            {project.title}
          </h3>
          <span className="text-sm text-a1">{text.kind}</span>
        </div>
        <p className="text-[15px] leading-relaxed text-muted">{text.summary}</p>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-2">
          <ul className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-[4px] border border-line px-2 py-1 font-mono text-[11px] text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
          <span
            className={clsx(
              "flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em]",
              isLink ? "text-fg" : "text-dim",
            )}
          >
            {action.label}
            <action.Icon
              aria-hidden="true"
              className={clsx(
                "transition-transform",
                isLink &&
                  "group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
              )}
              size={14}
            />
          </span>
        </div>
      </div>
    </Wrapper>
  );
}

/**
 * Seção de projetos em formato bento.
 * @returns {JSX.Element} Seção de projetos
 */
export default function ProjectsPage(): JSX.Element {
  const { t } = useI18n();

  return (
    <section
      aria-labelledby="projects-title"
      className="container-page grid gap-12 py-20 sm:py-28"
      id="projects"
    >
      <SectionHeader
        id="projects-title"
        intro={t.projects.intro}
        label={t.projects.label}
        title={t.projects.title}
      />
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
        {projects.map((project, index) => (
          <li key={project.id} className={layout[project.id]}>
            <SectionReveal className="h-full" delay={(index % 3) * 0.06}>
              <ProjectCard project={project} />
            </SectionReveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
