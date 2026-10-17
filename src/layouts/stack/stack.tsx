import { CSSProperties, JSX } from "react";

import { SectionReveal } from "@/components/animations/section-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { stack } from "@/data/stack";
import { useI18n } from "@/i18n/i18n-provider";

/**
 * Tecnologias agrupadas por papel, com nome sempre visível. O ícone ganha a
 * cor da marca no hover.
 * @returns {JSX.Element} Seção de stack
 */
export default function StackPage(): JSX.Element {
  const { t } = useI18n();

  return (
    <section
      aria-labelledby="stack-title"
      className="container-page grid gap-12 py-20 sm:py-28"
      id="stack"
    >
      <SectionHeader
        id="stack-title"
        intro={t.stack.intro}
        label={t.stack.label}
        title={t.stack.title}
      />
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {stack.map((group, index) => (
          <SectionReveal
            key={group.id}
            className="flex flex-col gap-5 bg-surface p-6"
            delay={index * 0.05}
          >
            <h3 className="label">{t.stack.groups[group.id]}</h3>
            <ul className="grid gap-1">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="group flex items-center gap-3 rounded-lg px-2 py-2 -mx-2 transition-colors hover:bg-surface-2"
                  style={{ "--brand": item.color } as CSSProperties}
                >
                  <item.icon
                    aria-hidden="true"
                    className="shrink-0 text-muted transition-colors group-hover:text-[var(--brand)]"
                    size={18}
                  />
                  <span className="text-[15px]">{item.name}</span>
                </li>
              ))}
            </ul>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
