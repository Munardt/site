import { siteConfig } from "@/config/site";
import { Button } from "@heroui/button";
import { NavbarMenu, NavbarMenuItem } from "@heroui/navbar";
import { JSX } from "react";

/**
 * Função responsável por conter as opções de navegação do site para dispositivos mobile.
 * @returns {JSX.Element} Elemento JSX contendo o menu de navegação mobile.
 */
export function NavigationMobile(): JSX.Element {
  return (
    <NavbarMenu>
      <div className="mx-4 mt-2 flex flex-col gap-2">
        {siteConfig.navItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Button color="default" variant="light" size="lg">
              <a href={item.href}>{item.label}</a>
            </Button>
          </NavbarMenuItem>
        ))}
      </div>
    </NavbarMenu>
  );
}
