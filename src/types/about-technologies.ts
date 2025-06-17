import {
  SiAngular,
  SiReact,
  SiDocker,
  SiDotnet,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiTypescript,
} from "react-icons/si";
import { VscTerminalLinux, VscAzure } from "react-icons/vsc";
import { TbSql } from "react-icons/tb";
import { FaSass } from "react-icons/fa";

export const AboutTechnologies = [
  {
    name: "Angular",
    icon: SiAngular,
    iconColor: "text-red-600 text-4xl",
    shadowColor: "shadow-red-500/40",
  },
  {
    name: "React",
    icon: SiReact,
    iconColor: "text-sky-500 text-4xl",
    shadowColor: "shadow-sky-400/40",
  },
  {
    name: "Azure",
    icon: VscAzure,
    iconColor: "text-blue-500 text-4xl",
    shadowColor: "shadow-blue-500/40",
  },
  {
    name: "Docker + CI",
    icon: SiDocker,
    iconColor: "text-blue-500 text-4xl",
    shadowColor: "shadow-sky-600/40",
  },
  {
    name: ".NET",
    icon: SiDotnet,
    iconColor: "text-purple-500 text-4xl",
    shadowColor: "shadow-purple-500/40",
  },
  {
    name: "Linux",
    icon: VscTerminalLinux,
    iconColor: "text-slate-50 text-4xl",
    shadowColor: "shadow-slate-50/40",
  },
  {
    name: "SQL Server",
    icon: TbSql,
    iconColor: "text-amber-500 text-4xl",
    shadowColor: "shadow-amber-500/40",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    iconColor: "text-cyan-500 text-4xl",
    shadowColor: "shadow-cyan-500/40",
  },
  {
    name: "SCSS",
    icon: FaSass,
    iconColor: "text-pink-500 text-4xl",
    shadowColor: "shadow-pink-500/40",
  },
  {
    name: "Git",
    icon: SiGit,
    iconColor: "text-orange-600 text-4xl",
    shadowColor: "shadow-orange-600/40",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    iconColor: "text-gray-800 dark:text-white text-4xl",
    shadowColor: "shadow-gray-600/40",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    iconColor: "text-lime-500 text-4xl",
    shadowColor: "shadow-lime-500/40",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    iconColor: "text-blue-600 text-4xl",
    shadowColor: "shadow-blue-600/40",
  },
];
