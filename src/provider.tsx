import { HeroUIProvider } from "@heroui/system";
import { useHref, useNavigate } from "react-router-dom";

/**
 * Provedor de contexto que fornece o estado e as ações da aplicação para todos os seus filhos.
 * @param {{ children: React.ReactNode }} param0 Propriedades do provedor
 * @returns {JSX.Element} Provedor de contexto
 */
export function Provider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const navigate = useNavigate();

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      {children}
    </HeroUIProvider>
  );
}
