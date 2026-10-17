import clsx from "clsx";
import { JSX, useEffect, useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";

import { profile } from "@/data/profile";
import { useI18n } from "@/i18n/i18n-provider";

/**
 * Exibe o e-mail com um botão para copiá-lo.
 * @param {{ className?: string }} param0 Classe adicional
 * @returns {JSX.Element} Campo de e-mail com botão de copiar
 */
export function CopyEmail({ className }: { className?: string }): JSX.Element {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 1800);

    return () => clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      // Sem permissão de área de transferência: seleciona o texto
      const range = document.createRange();
      const node = document.getElementById("profile-email");

      if (node) {
        range.selectNodeContents(node);
        window.getSelection()?.removeAllRanges();
        window.getSelection()?.addRange(range);
      }
    }
  };

  return (
    <div
      className={clsx(
        "flex h-12 items-center gap-3 rounded-[4px] border border-line bg-bg/60 pl-4 pr-1.5 backdrop-blur-sm",
        className,
      )}
    >
      <span className="font-mono text-[13px] text-fg" id="profile-email">
        {profile.email}
      </span>
      <button
        aria-label={copied ? t.copy.copied : t.copy.copy}
        className={clsx(
          "grid h-9 w-9 place-items-center rounded-[3px] border border-line transition-colors",
          copied ? "text-a1" : "text-muted hover:text-fg",
        )}
        title={copied ? t.copy.copied : t.copy.copy}
        type="button"
        onClick={copy}
      >
        {copied ? <FiCheck size={15} /> : <FiCopy size={15} />}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? t.copy.copied : ""}
      </span>
    </div>
  );
}
