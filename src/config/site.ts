export type SiteConfig = typeof siteConfig;

/** Configurações do site (navegação) */
export const siteConfig = {
  /** Itens do site (exibido na barra de navegação) */
  navItems: [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "Sobre",
      href: "#about",
    },
    {
      label: "Tecnologias",
      href: "#technologies",
    },
    // {
    //   label: "Projetos",
    //   href: "#projects",
    // },
    {
      label: "Contato",
      href: "#contact",
    },
  ],
  links: {
    github: "https://github.com/Munardt",
    discord: "https://discord.gg/enrxQYAagR",
  },
};
