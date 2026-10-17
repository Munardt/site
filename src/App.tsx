import MainLayout from "./core/main-layout";

import AboutPage from "@/layouts/about/about";
import ContactPage from "@/layouts/contact/contact";
import ExperiencePage from "@/layouts/experience/experience";
import HomePage from "@/layouts/home/home";
import ProjectsPage from "@/layouts/projects/projects";
import StackPage from "@/layouts/stack/stack";
import { I18nProvider } from "@/i18n/i18n-provider";
import { ThemeProvider } from "@/theme/theme-provider";

/**
 * O componente principal da aplicação.
 *
 * Fornece tema e idioma para toda a página, que é uma pilha vertical de
 * seções: hero, projetos, experiência, stack, sobre e contato.
 */
function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <MainLayout>
          <HomePage />
          <ProjectsPage />
          <ExperiencePage />
          <StackPage />
          <AboutPage />
          <ContactPage />
        </MainLayout>
      </I18nProvider>
    </ThemeProvider>
  );
}

export default App;
