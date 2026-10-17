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

export type Theme = "dark" | "light";

const STORAGE_KEY = "theme";

type ThemeContextValue = {
  /** Tema atual. */
  theme: Theme;

  /** Alterna entre escuro e claro. */
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Provedor de tema. O tema inicial é aplicado por um script no `index.html`
 * antes do React carregar (evita o "piscar"); aqui só lemos e alteramos a
 * classe `light` do `<html>`.
 * @param {{ children: ReactNode }} param0 Propriedades do provedor
 * @returns {JSX.Element} Provedor de tema
 */
export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains("light") ? "light" : "dark",
  );

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignora: a escolha só não será lembrada
    }
  }, [theme]);

  // A classe é trocada antes do re-render para que componentes que leem os
  // tokens CSS em efeitos (como a esfera) já encontrem as cores novas.
  const toggleTheme = useCallback(() => {
    const next: Theme = document.documentElement.classList.contains("light")
      ? "dark"
      : "light";

    document.documentElement.classList.toggle("light", next === "light");
    setTheme(next);
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

/**
 * Acessa o tema atual.
 * @returns {ThemeContextValue} Tema e função para alternar
 */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error("useTheme precisa estar dentro de ThemeProvider");

  return context;
}
