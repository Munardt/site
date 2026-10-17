import type { Dictionary } from "@/i18n/locales/pt";

export type ExperienceId = keyof Dictionary["experience"]["items"];

export type Experience = {
  id: ExperienceId;
  company: string;
  url?: string;

  /** Início no formato AAAA-MM. */
  start: string;

  /** Fim no formato AAAA-MM; ausente quando é o emprego atual. */
  end?: string;

  tags: string[];
};

/** Experiências da mais recente para a mais antiga. */
export const experiences: Experience[] = [
  {
    id: "senior",
    company: "Senior Sistemas",
    url: "https://www.senior.com.br",
    start: "2026-03",
    tags: ["Java", "PostgreSQL", "Redis", "Docker", "Argo CD", "Grafana"],
  },
  {
    id: "minhaEtiqueta",
    company: "Minha Etiqueta",
    url: "https://minhaetiqueta.com.br",
    start: "2023-10",
    end: "2026-03",
    tags: ["Angular", "C#", ".NET"],
  },
];
