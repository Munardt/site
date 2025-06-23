/* Número total de colunas na grid */
const colsNumber: number = 18;

/**
 * Componente que renderiza uma linha de placeholders para tecnologias em uma
 * grade com o mesmo espa amento que o TechIconsRow.
 *
 * @param {string} keyPrefix Prefixo para a chave única de cada placeholder.
 * @returns {JSX.Element} O componente da linha de placeholders.
 */
export function TechPlaceholderRow({
  keyPrefix,
}: {
  keyPrefix: string;
}): JSX.Element {
  return (
    <div
      className="grid grid-cols-16 gap-4 w-full"
      style={{ gridTemplateColumns: `repeat(${colsNumber}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: colsNumber }).map((_, i) => (
        <div
          key={`${keyPrefix}-${i}`}
          className="aspect-square rounded-xl bg-neutral-400 dark:bg-zinc-800 opacity-10 ring-2 ring-inset ring-black/10 dark:ring-white/10"
        />
      ))}
    </div>
  );
}
