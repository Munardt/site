// Número total de colunas na grid
const colsNumber = 18;

/**
 * Renderiza uma linha de placeholders (blocos visuais de fundo sem conteúdo)
 */
export function TechPlaceholderRow({ keyPrefix }: { keyPrefix: string }) {
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
