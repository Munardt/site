import { siteConfig } from "@/config/site";
import { ScrollToElementWithEase } from "@/shared/functions/scroll-animation";
import { Button } from "@heroui/button";
import { NavbarItem } from "@heroui/navbar";
import { JSX } from "react";

/**
 * Função que renderiza o menu de navegação para dispositivos de desktop.
 * Contém as opções de navegação do site.
 * @returns {JSX.Element} Elemento JSX contendo o menu de navegação.
 */
export function NavigationDesktop(): JSX.Element {
  return (
    <div className="hidden lg:flex gap-4 justify-start ml-2">
      {siteConfig.navItems.map((option) => (
        <NavbarItem key={option.label}>
          <Button
            onPress={() => {
              const section = document.getElementById(
                option.href.replace("#", "")
              );
              if (section) ScrollToElementWithEase(section, 1000);
            }}
            className={`
                  text-default-800
                  dark:text-white
                  transition-all duration-300 ease-in-out
                  hover:bg-[#a855f7]/10 hover:shadow-[0_0_20px_4px_rgba(168,85,247,0.4)]
                `}
            color="secondary"
            variant="light"
          >
            {option.label}
          </Button>
        </NavbarItem>
      ))}
    </div>
  );
}
