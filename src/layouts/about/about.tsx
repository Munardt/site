import { useEffect, useState } from "react";

const calculateAge = () => {
  const birthDate = new Date("2002-08-19");
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const hasHadBirthday =
    today.getMonth() > 7 || (today.getMonth() === 7 && today.getDate() >= 19);
  if (!hasHadBirthday) age--;
  return age;
};

export default function AboutPage() {
  const [age, setAge] = useState(calculateAge());

  useEffect(() => {
    const interval = setInterval(
      () => {
        setAge(calculateAge());
      },
      1000 * 60 * 60 * 24
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-400 to-indigo-600 bg-clip-text text-transparent">
        Sobre Mim
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="space-y-4 text-default-600">
          <p>
            Tenho {age} anos, sou desenvolvedor Front-End com mais de 1 ano e
            meio de experiência em um sistema ERP criado do zero.
          </p>
          <p>
            Atuo com Angular no dia a dia, e estou me especializando em React.
            Tenho vivência com Azure App Services, Docker, GitHub Actions e
            versionamento automatizado com semantic-release.
          </p>
          <p>
            Também possuo experiência com .NET, SQL Server, deploys em Linux e
            rotinas de CI/CD.
          </p>
        </div>
        <div className="rounded-xl shadow-[0_0_20px_4px_rgba(255,255,255,0.1)] p-6 bg-default-100 dark:bg-default-50">
          <h3 className="text-xl font-semibold mb-2">Especializações:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Angular & React</li>
            <li>Azure App Services</li>
            <li>Docker + GitHub Actions</li>
            <li>.NET (C#), SQL Server</li>
            <li>CI/CD com semantic-release</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
