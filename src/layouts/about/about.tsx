import { JSX } from "react";

import { Logo } from "@/assets/icons";
import { SectionReveal } from "@/components/animations/section-reveal";
import { getAge, profile } from "@/data/profile";
import { useI18n } from "@/i18n/i18n-provider";

/**
 * Seção "Sobre": apresentação pessoal e alguns fatos rápidos.
 * @returns {JSX.Element} Seção sobre
 */
export default function AboutPage(): JSX.Element {
  const { t } = useI18n();
  const facts = [
    { label: t.about.facts.age, value: t.about.facts.ageValue(getAge()) },
    { label: t.about.facts.experience, value: t.about.facts.experienceValue },
    { label: t.about.facts.since, value: String(profile.brandSince) },
  ];

  return (
    <section
      aria-labelledby="about-title"
      className="container-page grid gap-12 py-20 sm:py-28 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-20"
      id="about"
    >
      <SectionReveal className="grid content-start gap-6">
        <span className="label flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-6 bg-a1" />
          {t.about.label}
        </span>
        <h2
          className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:text-5xl"
          id="about-title"
        >
          {t.about.title}
        </h2>
        <div className="grid max-w-[62ch] gap-5 text-base leading-relaxed text-muted sm:text-lg">
          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal className="self-end" delay={0.08}>
        <div className="relative overflow-hidden rounded-2xl border border-line bg-surface">
          <Logo
            aria-hidden="true"
            className="absolute -right-6 -top-6 text-a1/10"
            size={180}
          />
          <dl className="relative grid divide-y divide-line">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-baseline justify-between gap-4 p-6"
              >
                <dt className="label">{fact.label}</dt>
                <dd className="text-2xl font-semibold tabular-nums tracking-[-0.03em]">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </SectionReveal>
    </section>
  );
}
