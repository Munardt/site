import AboutPage from "@/layouts/about/about";
import ContactPage from "@/layouts/contact/contact";
import HomePage from "@/layouts/home/home";
import ProjectsPage from "@/layouts/projects/projects";

import MainLayout from "./core/layout/main-layout";
import { Provider } from "./provider";
import TechnologiesGrid from "@/layouts/technologies/technologies";

function App() {
  return (
    <Provider>
      <MainLayout>
        <HomePage />
        <AboutPage />
        <TechnologiesGrid />
        <ProjectsPage />
        <ContactPage />
      </MainLayout>
    </Provider>
  );
}

export default App;
