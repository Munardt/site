import { DiscordIcon, GithubIcon, Logo } from "@/assets/icons";
import { ThemeSwitch } from "@/components/navbar/theme/theme-switch";
import { siteConfig } from "@/config/site";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import clsx from "clsx";
import { useEffect, useState } from "react";

import { NavigationDesktop } from "./navigation/navigation-desktop";
import { NavigationMobile } from "./navigation/navigation-mobile";

/**
 * Componente de navegação do site.
 *
 * Serve como barra de navegação principal do site e header sempre visível.
 * @returns {JSX.Element} Componente de navegação do site.
 */
export const Navbar = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <HeroUINavbar
      className={clsx(
        "top-0 z-50 bg-white/70 dark:bg-black/30",
        "backdrop-blur supports-[backdrop-filter]:bg-white/30",
        isScrolled ? "rounded-b-3xl" : "rounded-none",
        isScrolled
          ? "shadow-[0_12px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_24px_rgba(255,255,255,0.1)]"
          : "shadow-none"
      )}
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <Logo />
          </Link>
        </NavbarBrand>
        <NavigationDesktop />
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.discord} title="Discord">
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavigationMobile />
    </HeroUINavbar>
  );
};
