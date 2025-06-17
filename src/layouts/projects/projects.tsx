export default function ProjectsPage() {
  return (
    <section className="px-6 py-20 relative" id="projects">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/10 via-pink-500/10 to-purple-500/10 blur-3xl opacity-30" />

      <h3 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-pink-400 to-indigo-600 bg-clip-text text-transparent">
        Projetos
      </h3>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="rounded-xl p-6 bg-default-100 dark:bg-default-50 shadow-[0_0_20px_rgba(0,0,0,0.05)] hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] transition-shadow">
          <h4 className="text-xl font-semibold text-gradient bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-2">
            Minha Etiqueta
          </h4>
          <p className="text-default-600 dark:text-default-400">
            Participei desde a criação da estrutura do front-end com Angular,
            até a integração com back-end em C#, configurações de deploy via
            Docker e automações de CI/CD com GitHub Actions.
          </p>
        </div>

        <div className="rounded-xl p-6 bg-default-100 dark:bg-default-50 shadow-[0_0_20px_rgba(0,0,0,0.05)] hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] transition-shadow">
          <h4 className="text-xl font-semibold text-gradient bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent mb-2">
            LA Balanças
          </h4>
          <p className="text-default-600 dark:text-default-400">
            Projeto de ERP para gestão de balanças rodoviárias, onde atuei
            principalmente na parte de front-end com Angular, integração com
            back-end em C# e automações de CI/CD com GitHub Actions.
          </p>
        </div>
      </div>
    </section>
  );
}
