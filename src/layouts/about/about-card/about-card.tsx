import { Card, CardBody, CardHeader } from "@heroui/card";

interface AboutCardProps {
  title: string;
  children: React.ReactNode;
}

export function AboutCard({ title, children }: AboutCardProps): JSX.Element {
  return (
    <Card
      className={`
        relative p-6 rounded-2xl border backdrop-blur-md shadow-xl overflow-hidden
        transition-all duration-300 hover:scale-[1.01]

        bg-white/30 border-white/20 text-zinc-900
        shadow-[0_4px_30px_rgba(180,100,255,0.15)]

        dark:bg-zinc-900/40 dark:border-zinc-300/10 dark:text-white
        dark:shadow-[0_4px_30px_rgba(140,120,255,0.2)]

        min-h-[275px]
      `}
    >
      {/* Glow suave de fundo */}
      <div
        className={`
          absolute inset-0 z-[-1] rounded-2xl
          bg-gradient-to-br
          from-indigo-300/20 via-fuchsia-400/10 to-purple-400/10
          dark:from-indigo-800/20 dark:via-purple-900/20 dark:to-fuchsia-900/20
          blur-2xl opacity-40
        `}
      />

      <CardHeader className="p-0 mb-4">
        <p className="text-xl font-semibold tracking-tight">{title}</p>
      </CardHeader>

      <CardBody>
        <p className="p-0 text-sm leading-relaxed">{children}</p>
      </CardBody>
    </Card>
  );
}
