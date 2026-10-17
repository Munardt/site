import { JSX } from "react";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

import { SectionReveal } from "@/components/animations/section-reveal";
import { CopyEmail } from "@/components/ui/copy-email";
import { profile } from "@/data/profile";
import { useI18n } from "@/i18n/i18n-provider";

const socials = [
  { label: "GitHub", href: profile.links.github, Icon: FaGithub },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: FaLinkedin },
  { label: "Instagram", href: profile.links.instagram, Icon: FaInstagram },
  { label: "Discord", href: profile.links.discord, Icon: FaDiscord },
];

/**
 * Seção de contato: chamada, e-mail com botão de copiar e redes sociais.
 * @returns {JSX.Element} Seção de contato
 */
export default function ContactPage(): JSX.Element {
  const { t } = useI18n();
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
    t.contact.mailSubject,
  )}&body=${encodeURIComponent(t.contact.mailBody)}`;

  return (
    <section
      aria-labelledby="contact-title"
      className="relative overflow-hidden border-t border-line"
      id="contact"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-1/2 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--a1)_22%,transparent),color-mix(in_srgb,var(--a2)_10%,transparent)_60%,transparent)] blur-2xl"
      />
      <SectionReveal className="container-page relative grid gap-10 py-20 sm:py-28">
        <div className="grid max-w-3xl gap-5">
          <span className="label flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-6 bg-a1" />
            {t.contact.label}
          </span>
          <h2
            className="text-5xl font-semibold tracking-[-0.05em] sm:text-7xl lg:text-8xl"
            id="contact-title"
          >
            {t.contact.title}
          </h2>
          <p className="max-w-[52ch] text-base text-muted sm:text-lg">
            {t.contact.text}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <CopyEmail />
          <a
            className="group inline-flex h-12 items-center gap-3 rounded-[4px] bg-cta px-5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-cta-fg transition-transform hover:-translate-y-0.5"
            href={mailto}
          >
            {t.contact.send}
            <FiArrowUpRight aria-hidden="true" size={14} />
          </a>
        </div>

        <ul className="flex flex-wrap gap-2">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                className="inline-flex items-center gap-2.5 rounded-full border border-line px-4 py-2.5 text-sm text-muted transition-colors hover:border-line-strong hover:text-fg"
                href={href}
                rel="noreferrer"
                target="_blank"
              >
                <Icon aria-hidden="true" size={15} />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </SectionReveal>
    </section>
  );
}
