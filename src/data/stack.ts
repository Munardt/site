import type { IconType } from "react-icons";
import type { Dictionary } from "@/i18n/locales/pt";

import { BiLogoVisualStudio } from "react-icons/bi";
import { DiDotnet, DiMsqlServer, DiVisualstudio } from "react-icons/di";
import { FaJava, FaSass } from "react-icons/fa";
import {
  SiAngular,
  SiArgo,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiGrafana,
  SiJasmine,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiRedis,
  SiSqlite,
  SiStryker,
  SiTailwindcss,
  SiTypescript,
  SiUbuntu,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";

export type StackGroupId = keyof Dictionary["stack"]["groups"];

export type StackItem = {
  name: string;
  icon: IconType;

  /** Cor da marca, exibida no hover. */
  color: string;
};

/** Tecnologias agrupadas por papel. */
export const stack: { id: StackGroupId; items: StackItem[] }[] = [
  {
    id: "frontend",
    items: [
      { name: "Angular", icon: SiAngular, color: "#dd0031" },
      { name: "React", icon: SiReact, color: "#58c4dc" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "JavaScript", icon: SiJavascript, color: "#f0db4f" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
      { name: "SCSS", icon: FaSass, color: "#cd6799" },
    ],
  },
  {
    id: "backend",
    items: [
      { name: "C#", icon: TbBrandCSharp, color: "#a179dc" },
      { name: "ASP.NET", icon: DiDotnet, color: "#7a5ad8" },
      { name: "Java", icon: FaJava, color: "#f89820" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
      { name: "SQL Server", icon: DiMsqlServer, color: "#e8473b" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4f8fd8" },
      { name: "Redis", icon: SiRedis, color: "#ff4438" },
      { name: "SQLite", icon: SiSqlite, color: "#4fa3d8" },
    ],
  },
  {
    id: "infra",
    items: [
      { name: "Docker", icon: SiDocker, color: "#1d91e6" },
      { name: "Azure", icon: VscAzure, color: "#0a8ae6" },
      { name: "Argo CD", icon: SiArgo, color: "#ef7b4d" },
      { name: "Grafana", icon: SiGrafana, color: "#f46800" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2f88ff" },
      { name: "Git", icon: SiGit, color: "#f05033" },
      { name: "Linux / Ubuntu", icon: SiUbuntu, color: "#e95420" },
    ],
  },
  {
    id: "quality",
    items: [
      { name: "Jasmine + Karma", icon: SiJasmine, color: "#9f62c6" },
      { name: "Stryker", icon: SiStryker, color: "#e74c3c" },
      { name: "Postman", icon: SiPostman, color: "#ff6c37" },
      { name: "VS Code", icon: BiLogoVisualStudio, color: "#2f9bf0" },
      { name: "Visual Studio", icon: DiVisualstudio, color: "#9b6fdc" },
    ],
  },
];
