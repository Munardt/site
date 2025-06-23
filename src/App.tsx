import AboutPage from "@/layouts/about/about";
import ContactPage from "@/layouts/contact/contact";
import HomePage from "@/layouts/home/home";

import MainLayout from "./core/main-layout";
import { Provider } from "./provider";
import TechnologiesGrid from "@/layouts/technologies/technologies";

/**
 * O componente principal da aplicação.
 *
 * Este componente encapsula o layout principal da aplicação em um provedor de contexto,
 * que fornece o estado e as ações da aplicação para todos os seus filhos.
 *
 * O layout principal é uma pilha vertical de seções, cada uma representada por um componente separado.
 * As seções são:
 *
 * - `HomePage`: A página inicial da aplicação.
 * - `AboutPage`: A página "Sobre" da aplicação.
 * - `TechnologiesGrid`: Um grid de cards, cada um descrevendo uma tecnologia específica.
 * - `ProjectsPage`: A página de projetos da aplicação. (Atualmente desabilitada, aguardando
 *   a finalização da interface da página de projetos.)
 * - `ContactPage`: A página de contato da aplicação.
 */
function App() {
  return (
    <Provider>
      <MainLayout>
        <HomePage />
        <AboutPage />
        <TechnologiesGrid />
        <ContactPage />
      </MainLayout>
    </Provider>
  );
}

export default App;
