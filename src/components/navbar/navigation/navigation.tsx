import { siteConfig } from "@/config/site";
import { Button } from "@heroui/button";
import { NavbarItem } from "@heroui/navbar";

export function NavigationButtons() {
  return (
    <div className="hidden lg:flex gap-4 justify-start ml-2">
      {siteConfig.navItems.map((option) => (
        <NavbarItem key={option.label}>
          <Button
            className={`
                  text-default-800
                  dark:text-white
                  transition-all duration-300 ease-in-out
                  hover:bg-[#a855f7]/10 hover:shadow-[0_0_20px_4px_rgba(168,85,247,0.4)]
                `}
            color="secondary"
            variant="light"
          >
            <a href={option.href}>{option.label}</a>
          </Button>
        </NavbarItem>
      ))}
    </div>
  );
}
