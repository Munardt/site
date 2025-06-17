import { GithubIcon, LinkedInIcon } from "@/assets/icons";
import { ContactButton } from "@/interfaces/general/contact-buttons";

/** Constante com os botões de contato da seção de contato da Landing Page */
export const contactButtons: ContactButton[] = [
  {
    label: "GitHub",
    href: "https://github.com/munardt",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/munardt",
    icon: LinkedInIcon,
  },
];
