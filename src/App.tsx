import MainLayout from "./core/layout/main-layout";

import AboutPage from "@/layouts/about/about";
import ContactPage from "@/layouts/contact/contact";
import HomePage from "@/layouts/home/home";
import ProjectsPage from "@/layouts/projects/projects";

function App() {
  return (
    <MainLayout>
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
    </MainLayout>
  );
}

export default App;
