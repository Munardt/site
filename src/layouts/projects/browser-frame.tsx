import { JSX, ReactNode } from "react";

type BrowserFrameProps = {
  /** Texto da barra de endereço. */
  address: string;

  /** Print da página. Se informado, substitui `children`. */
  screenshot?: string;

  /** Texto alternativo do print. */
  screenshotAlt?: string;

  /** Conteúdo exibido quando não há print (ilustração). */
  children: ReactNode;
};

/**
 * Moldura de janela de navegador com barra de endereço. Com um print, a
 * página "rola" dentro da janela no hover; sem print, exibe a ilustração.
 * @param {BrowserFrameProps} props Propriedades da janela
 * @returns {JSX.Element} Janela de navegador
 */
export function BrowserFrame({
  address,
  screenshot,
  screenshotAlt = "",
  children,
}: BrowserFrameProps): JSX.Element {
  return (
    <div className="mx-3 mt-3 overflow-hidden rounded-xl border border-line bg-bg">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2.5">
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="ml-3 truncate font-mono text-[11px] text-dim">
          {address}
        </span>
      </div>
      <div className="relative h-56 overflow-hidden sm:h-60">
        {screenshot ? (
          <img
            alt={screenshotAlt}
            className="absolute inset-x-0 top-0 h-auto min-h-full w-full object-cover object-top transition-transform duration-[3s] ease-in-out group-hover:translate-y-[calc(-100%+14rem)] motion-reduce:transition-none sm:group-hover:translate-y-[calc(-100%+15rem)]"
            decoding="async"
            loading="lazy"
            src={screenshot}
          />
        ) : (
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
