import type { Dictionary } from "./locales/pt";

import {
  createContext,
  JSX,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import en from "./locales/en";
import es from "./locales/es";
import pt from "./locales/pt";

/** Idiomas suportados pelo site. */
export const locales = ["pt", "en", "es"] as const;

export type Locale = (typeof locales)[number];

const dictionaries: Record<Locale, Dictionary> = { pt, en, es };

/** Valor usado no atributo `lang` do documento. */
const htmlLang: Record<Locale, string> = { pt: "pt-BR", en: "en", es: "es" };

const STORAGE_KEY = "locale";

type I18nContextValue = {
  /** Idioma atual. */
  locale: Locale;

  /** Altera o idioma e lembra a escolha. */
  setLocale: (locale: Locale) => void;

  /** Textos do idioma atual. */
  t: Dictionary;
};

const I18nContext = createContext<I18nContextValue | null>(null);

/**
 * Descobre o idioma inicial: escolha salva, depois idioma do navegador,
 * e por fim português.
 * @returns {Locale} Idioma inicial
 */
function detectLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved && (locales as readonly string[]).includes(saved)) {
      return saved as Locale;
    }
  } catch {
    // localStorage indisponível (modo privado, por exemplo)
  }

  for (const language of navigator.languages ?? [navigator.language]) {
    const base = language.slice(0, 2).toLowerCase();

    if ((locales as readonly string[]).includes(base)) return base as Locale;
  }

  return "pt";
}

/**
 * Provedor de idioma. Mantém o idioma atual e sincroniza `lang`, título e
 * descrição do documento.
 * @param {{ children: ReactNode }} param0 Propriedades do provedor
 * @returns {JSX.Element} Provedor de idioma
 */
export function I18nProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [locale, setLocaleState] = useState<Locale>(detectLocale);
  const t = dictionaries[locale];

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignora: a escolha só não será lembrada
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = htmlLang[locale];
    document.title = t.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.meta.description);
  }, [locale, t]);

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

/**
 * Acessa o idioma atual e seus textos.
 * @returns {I18nContextValue} Idioma, textos e função para trocar de idioma
 */
export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext);

  if (!context) throw new Error("useI18n precisa estar dentro de I18nProvider");

  return context;
}
