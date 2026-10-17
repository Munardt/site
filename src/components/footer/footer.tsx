import { JSX } from "react";
import { FiArrowUp } from "react-icons/fi";

import { profile } from "@/data/profile";
import { useI18n } from "@/i18n/i18n-provider";

/**
 * Rodapé do site.
 * @returns {JSX.Element} Rodapé do site.
 */
export default function Footer(): JSX.Element {
  const { t } = useI18n();

  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-wrap items-center justify-between gap-4 py-6 font-mono text-[11px] uppercase tracking-[0.12em] text-dim">
        <span>
          © {new Date().getFullYear()} {profile.name} · {profile.brand}
        </span>
        <div className="flex items-center gap-6">
          <a
            className="transition-colors hover:text-fg"
            href={profile.links.source}
            rel="noreferrer"
            target="_blank"
          >
            {t.footer.source}
          </a>
          <a
            className="flex items-center gap-1.5 transition-colors hover:text-fg"
            href="#top"
          >
            {t.footer.top}
            <FiArrowUp aria-hidden="true" size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
