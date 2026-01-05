import { Navbar } from "@/components/navbar/navbar";
import { ToastProvider } from "@heroui/toast";
import { JSX } from "react";

/**
 * Layout principal do site, que inclui a barra de navegação e o conteúdo principal.
 * @param {{ children: React.ReactNode; }} param0 Propriedades do layout
 * @returns {JSX.Element} Elemento JSX contendo o layout principal
 */
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <main className="flex-grow snap-y snap-mandatory">{children}</main>
      <ToastProvider placement="top-center" maxVisibleToasts={3} />
    </div>
  );
}
