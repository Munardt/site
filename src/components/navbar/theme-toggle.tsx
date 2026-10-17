import { JSX } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

import { useI18n } from "@/i18n/i18n-provider";
import { useTheme } from "@/theme/theme-provider";

/**
 * Botão que alterna entre tema escuro e claro.
 * @returns {JSX.Element} Botão de tema
 */
export function ThemeToggle(): JSX.Element {
  const { theme, toggleTheme } = useTheme();
  const { t } = useI18n();
  const label = theme === "light" ? t.nav.toDark : t.nav.toLight;

  return (
    <button
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:text-fg"
      title={label}
      type="button"
      onClick={toggleTheme}
    >
      {theme === "light" ? <FiMoon size={17} /> : <FiSun size={17} />}
    </button>
  );
}
