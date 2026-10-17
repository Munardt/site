import clsx from "clsx";
import { JSX } from "react";

import { locales, useI18n } from "@/i18n/i18n-provider";

/**
 * Seletor de idioma em formato de botões (PT, EN, ES).
 * @param {{ className?: string }} param0 Classe adicional
 * @returns {JSX.Element} Seletor de idioma
 */
export function LanguageSwitch({
  className,
}: {
  className?: string;
}): JSX.Element {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      aria-label={t.nav.language}
      className={clsx("flex items-center font-mono text-[11px]", className)}
      role="group"
    >
      {locales.map((option, index) => (
        <span key={option} className="flex items-center">
          {index > 0 && (
            <span aria-hidden="true" className="px-1 text-dim">
              /
            </span>
          )}
          <button
            aria-pressed={locale === option}
            className={clsx(
              "rounded px-1 py-1 uppercase tracking-[0.14em] transition-colors",
              locale === option ? "text-fg" : "text-dim hover:text-muted",
            )}
            lang={option}
            type="button"
            onClick={() => setLocale(option)}
          >
            {option}
          </button>
        </span>
      ))}
    </div>
  );
}
