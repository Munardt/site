import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { JSX, useEffect, useState } from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

import { LanguageSwitch } from "./language-switch";
import { navItems } from "./nav-items";
import { ThemeToggle } from "./theme-toggle";

import { Logo } from "@/assets/icons";
import { profile } from "@/data/profile";
import { useI18n } from "@/i18n/i18n-provider";

const linkClass =
  "font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-fg";

/**
 * Barra de navegação fixa. Transparente sobre o hero e com fundo desfocado
 * depois que a página rola. No celular, abre um menu em tela cheia.
 * @returns {JSX.Element} Barra de navegação
 */
export function Navbar(): JSX.Element {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300",
        scrolled || open
          ? "border-line bg-bg/75 backdrop-blur-md"
          : "border-transparent",
      )}
    >
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-surface focus:px-3 focus:py-2"
        href="#main"
      >
        {t.nav.skip}
      </a>
      <nav className="container-page flex h-16 items-center justify-between gap-6">
        <a
          className="flex items-center gap-2.5 text-[15px] font-semibold tracking-[-0.02em]"
          href="#top"
          onClick={() => setOpen(false)}
        >
          <Logo aria-hidden="true" size={26} />
          {profile.name}
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.key}>
              <a className={linkClass} href={item.href}>
                {t.nav[item.key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitch className="hidden sm:flex" />
          <a
            aria-label="Discord"
            className="hidden h-9 w-9 place-items-center text-muted transition-colors hover:text-fg md:grid"
            href={profile.links.discord}
            rel="noreferrer"
            target="_blank"
          >
            <FaDiscord size={17} />
          </a>
          <a
            aria-label="GitHub"
            className="hidden h-9 w-9 place-items-center text-muted transition-colors hover:text-fg md:grid"
            href={profile.links.github}
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub size={17} />
          </a>
          <ThemeToggle />
          <a
            className="hidden rounded-[4px] border border-line-strong px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors hover:border-a1 hover:text-fg lg:inline-block"
            href="#contact"
          >
            {t.nav.contact}
          </a>
          <button
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="grid h-9 w-9 place-items-center text-fg lg:hidden"
            type="button"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-x-0 bottom-0 top-16 flex flex-col justify-between bg-bg px-5 pb-10 pt-6 sm:px-8 lg:hidden"
            exit={{ opacity: 0 }}
            id="mobile-menu"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="grid gap-1">
              {[...navItems, { key: "contact" as const, href: "#contact" }].map(
                (item, index) => (
                  <motion.li
                    key={item.key}
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 12 }}
                    transition={{ delay: 0.04 * index, duration: 0.3 }}
                  >
                    <a
                      className="block border-b border-line py-4 text-3xl font-semibold tracking-[-0.035em]"
                      href={item.href}
                      onClick={() => setOpen(false)}
                    >
                      {t.nav[item.key]}
                    </a>
                  </motion.li>
                ),
              )}
            </ul>
            <div className="flex items-center justify-between">
              <LanguageSwitch />
              <div className="flex gap-4 text-muted">
                <a
                  aria-label="Discord"
                  href={profile.links.discord}
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaDiscord size={20} />
                </a>
                <a
                  aria-label="GitHub"
                  href={profile.links.github}
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
