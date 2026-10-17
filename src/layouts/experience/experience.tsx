import clsx from "clsx";
import { JSX } from "react";

import { SectionReveal } from "@/components/animations/section-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { experiences } from "@/data/experience";
import { Locale, useI18n } from "@/i18n/i18n-provider";

const intlLocale: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en-US",
  es: "es",
};

/**
 * Formata uma data AAAA-MM como "mar. de 2026" (ou equivalente no idioma).
 * @param {string} value Data no formato AAAA-MM
 * @param {Locale} locale Idioma atual
 * @returns {string} Data formatada
 */
function formatMonth(value: string, locale: Locale): string {
  const [year, month] = value.split("-").map(Number);

  return new Intl.DateTimeFormat(intlLocale[locale], {
    month: "short",
    year: "numeric",
  }).format(new Date(year, month - 1, 1));
}

/**
 * Linha do tempo de experiências profissionais.
 * @returns {JSX.Element} Seção de experiência
 */
export default function ExperiencePage(): JSX.Element {
  const { t, locale } = useI18n();

  return (
    <section
      aria-labelledby="experience-title"
      className="container-page grid gap-12 py-20 sm:py-28"
      id="experience"
    >
      <SectionHeader
        id="experience-title"
        label={t.experience.label}
        title={t.experience.title}
      />
      <ol className="border-t border-line">
        {experiences.map((item, index) => {
          const text = t.experience.items[item.id];
          const current = !item.end;

          return (
            <li key={item.id} className="border-b border-line">
              <SectionReveal
                className="grid gap-4 py-8 md:grid-cols-[220px_minmax(0,1fr)] md:gap-10"
                delay={index * 0.06}
              >
                <div className="flex items-center gap-3 md:block">
                  <span className="font-mono text-[12px] uppercase tabular-nums tracking-[0.08em] text-muted">
                    {formatMonth(item.start, locale)} —{" "}
                    {item.end
                      ? formatMonth(item.end, locale)
                      : t.experience.present}
                  </span>
                  {current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-a1/50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-a1 md:mt-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-a1" />
                      {t.experience.current}
                    </span>
                  )}
                </div>
                <div className="grid gap-3">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3
                      className={clsx(
                        "text-2xl font-semibold tracking-[-0.03em] sm:text-3xl",
                        !current && "text-fg/90",
                      )}
                    >
                      {text.role}
                    </h3>
                    {item.url ? (
                      <a
                        className="text-lg text-a1 underline-offset-4 hover:underline"
                        href={item.url}
                        rel="noreferrer"
                        target="_blank"
                      >
                        @ {item.company}
                      </a>
                    ) : (
                      <span className="text-lg text-a1">@ {item.company}</span>
                    )}
                  </div>
                  <p className="max-w-[65ch] text-[15px] leading-relaxed text-muted">
                    {text.summary}
                  </p>
                  {item.tags.length > 0 && (
                    <ul className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-[4px] border border-line px-2 py-1 font-mono text-[11px] text-muted"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </SectionReveal>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
