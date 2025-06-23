import { AboutCard } from "../about-card/about-card";

/**
 * Card sobre a Munardt
 * @returns {JSX.Element} Um elemento JSX que representa o card sobre a Munardt
 */
export function AboutMunardt(): JSX.Element {
  return (
    <AboutCard title="Sobre a Munardt">
      <p>
        A Munardt não nasceu de um plano de negócios. Nasceu de uma lembrança.
        Foi numa tarde qualquer, voltando de um parque aquático, no fim das
        férias de 2018, que o nome surgiu — quase como quem nomeia um sonho sem
        saber ainda o tamanho que ele pode ter.
      </p>
      <p>
        Eu, Gabriel Arthur, pensava apenas em criar um novo nick para os jogos
        online. Juntei Mundt, meu sobrenome, com Arthur, meu segundo nome. E
        nasceu Munardt. Só que o tempo passou… e aquele apelido cresceu comigo.
      </p>
      <p>
        Hoje, Munardt é mais do que um nome. É uma identidade. Um espaço onde
        minhas ideias, minha técnica e minha vontade de resolver problemas se
        encontram. Um lugar onde cada sistema criado tem uma razão para existir.
      </p>
    </AboutCard>
  );
}
