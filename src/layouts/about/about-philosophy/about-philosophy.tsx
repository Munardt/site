import { AboutCard } from "../about-card/about-card";

/**
 * Componente que exibe a filosofia da Munardt.
 *
 * @returns {JSX.Element} Um elemento JSX que representa o componente.
 *
 * @description A filosofia da Munardt destaca a importância de projetos
 * personalizados, onde a tecnologia é adaptada à realidade dos clientes.
 * Priorizamos a honestidade, clareza e profundidade, visando criar sistemas
 * duradouros e automações que facilitem processos. Cada solução é pensada
 * para transformar e otimizar o fluxo de trabalho dos clientes, ouvindo
 * suas necessidades e integrando com suas soluções atuais.
 */
export function AboutPhilosophy(): JSX.Element {
  return (
    <AboutCard title="A filosofia">
      <p>
        Na Munardt, cada projeto é feito sob medida. Nada de fórmulas prontas,
        nada de copiar e colar soluções. Aqui, a ideia é adaptar a tecnologia à
        realidade de quem precisa dela — e não o contrário. Essa é a minha
        filosofia: Se é importante pra você, é prioridade pra mim. Com
        honestidade, clareza e profundidade. Cada sistema é pensado para durar.
        Cada automação, para facilitar. Seja para criar algo do zero, integrar
        com o que você já tem, ou simplesmente organizar melhor seu fluxo… a
        Munardt entra para somar. E facilitar. Sempre. Ouvir o cliente com
        atenção, enxergar além do briefing, pensar junto. Só assim a solução
        deixa de ser apenas código… e vira transformação.
      </p>
    </AboutCard>
  );
}
