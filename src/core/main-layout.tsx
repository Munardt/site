import { JSX, ReactNode } from "react";

import { ScrollProgress } from "@/components/animations/scroll-progress";
import Footer from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";

/**
 * Layout principal do site: barra de progresso, navegação, conteúdo e rodapé.
 * @param {{ children: ReactNode }} param0 Propriedades do layout
 * @returns {JSX.Element} Elemento JSX contendo o layout principal
 */
export default function MainLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <div className="relative flex min-h-screen flex-col">
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow" id="main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
