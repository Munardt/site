import { JSX } from "react";

import { SectionReveal } from "@/components/animations/section-reveal";

type SectionHeaderProps = {
  /** Rótulo curto em fonte mono acima do título. */
  label: string;

  /** Título da seção. */
  title: string;

  /** Texto de apoio opcional. */
  intro?: string;

  /** Id do título, usado no `aria-labelledby` da seção. */
  id: string;
};

/**
 * Cabeçalho padrão das seções: rótulo, título e texto de apoio.
 * @param {SectionHeaderProps} props Propriedades do cabeçalho
 * @returns {JSX.Element} Cabeçalho da seção
 */
export function SectionHeader({
  label,
  title,
  intro,
  id,
}: SectionHeaderProps): JSX.Element {
  return (
    <SectionReveal className="grid max-w-2xl gap-4">
      <span className="label flex items-center gap-3">
        <span aria-hidden="true" className="h-px w-6 bg-a1" />
        {label}
      </span>
      <h2
        className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:text-5xl"
        id={id}
      >
        {title}
      </h2>
      {intro && <p className="text-base text-muted sm:text-lg">{intro}</p>}
    </SectionReveal>
  );
}
