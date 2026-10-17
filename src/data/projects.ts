import type { Dictionary } from "@/i18n/locales/pt";

/** Identificador do projeto; os textos ficam em `projects.items` do i18n. */
export type ProjectId = keyof Dictionary["projects"]["items"];

/** Situação do projeto, usada no selo do card. */
export type ProjectStatus = "live" | "wip" | "code";

/** Ilustração exibida no topo do card. */
export type ProjectPreview = "stream" | "sheet" | "erp" | "track" | "code";

export type Project = {
  id: ProjectId;

  /** Nome do projeto (igual em todos os idiomas). */
  title: string;

  /** Link do site ou repositório. Sem link, o card não é clicável. */
  url?: string;

  /** Texto exibido na barra de endereço da janela. */
  address: string;

  status: ProjectStatus;
  year: string;
  tags: string[];
  preview: ProjectPreview;
};

/**
 * Prints dos projetos em `src/assets/projects/`, nomeados pelo id do projeto
 * (ex.: `priscilaneo.webp`). Quando existe um print, ele substitui a
 * ilustração do card.
 */
const screenshots = import.meta.glob<string>(
  "/src/assets/projects/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, import: "default" },
);

/**
 * Busca o print de um projeto, se houver.
 * @param {ProjectId} id Id do projeto
 * @returns {string | undefined} URL da imagem
 */
export function getProjectScreenshot(id: ProjectId): string | undefined {
  const entry = Object.entries(screenshots).find(
    ([path]) =>
      path
        .split("/")
        .pop()
        ?.replace(/\.\w+$/, "") === id,
  );

  return entry?.[1];
}

/** Projetos na ordem em que aparecem no bento. */
export const projects: Project[] = [
  {
    id: "priscilaneo",
    title: "PriscilaNeo",
    url: "https://www.priscilaneo.com/",
    address: "priscilaneo.com",
    status: "live",
    year: "2026",
    tags: ["React", "HeroUI", "Twitch API"],
    preview: "stream",
  },
  {
    id: "mrfTrocas",
    title: "MRF Trocas",
    url: "https://mrf-trocas.vercel.app/login",
    address: "mrf-trocas.vercel.app",
    status: "live",
    year: "2026",
    tags: ["React", "HeroUI", "Vercel"],
    preview: "sheet",
  },
  {
    id: "minhaEtiqueta",
    title: "ERP Minha Etiqueta",
    url: "https://minhaetiqueta.com.br",
    address: "minhaetiqueta.com.br",
    status: "live",
    year: "2023–2026",
    tags: ["Angular", "C#", ".NET"],
    preview: "erp",
  },
  {
    id: "lightsOut",
    title: "Lights Out",
    address: "lights-out",
    status: "wip",
    year: "2026",
    tags: ["React", "TypeScript", "3D"],
    preview: "track",
  },
  {
    id: "estoque",
    title: "Gestão de Estoque e PCP",
    url: "https://github.com/Munardt/Projeto-Estoque-MVC",
    address: "github.com/Munardt/Projeto-Estoque-MVC",
    status: "code",
    year: "2023",
    tags: ["C#", "ASP.NET MVC", "EF Core", "Docker"],
    preview: "code",
  },
];
