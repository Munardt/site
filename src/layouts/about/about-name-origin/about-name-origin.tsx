import { AboutCard } from "../about-card/about-card";

/**
 * Componente que explica por que a Munardt existe.
 * @returns {JSX.Element} Um elemento JSX que representa o componente.
 */
export function AboutNameOrigin(): JSX.Element {
  return (
    <AboutCard title="Por que existe a Munardt">
      <p>
        A Munardt existe porque eu acredito que a tecnologia pode — e deve —
        simplificar a vida. Mas para isso, ela precisa ser feita com intenção.
        Com escuta. Com cuidado. Não adianta apenas saber programar. É preciso
        entender o problema de verdade.
      </p>
    </AboutCard>
  );
}
