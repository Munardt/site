import type { Dictionary } from "@/i18n/locales/pt";

/** Seções exibidas na navegação, na ordem da página. */
export const navItems: { key: keyof Dictionary["nav"]; href: string }[] = [
  { key: "projects", href: "#projects" },
  { key: "experience", href: "#experience" },
  { key: "stack", href: "#stack" },
  { key: "about", href: "#about" },
];
