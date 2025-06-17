import { SiAngular, SiReact, SiDocker, SiDotnet } from "react-icons/si";
import { VscTerminalLinux, VscAzure } from "react-icons/vsc";

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
    name: ".NET / SQL",
    icon: SiDotnet,
    iconColor: "text-purple-500 text-4xl",
    shadowColor: "shadow-purple-500/40",
  },
  {
    name: "Linux",
    icon: VscTerminalLinux,
    iconColor: "text-yellow-600 text-4xl",
    shadowColor: "shadow-yellow-600/40",
  },
];
