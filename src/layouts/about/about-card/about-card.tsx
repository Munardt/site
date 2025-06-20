// components/AboutPage/AboutCardHero.tsx
import { Card, CardHeader, CardFooter } from "@heroui/card";

interface AboutCardHeroProps {
  tag?: string;
  title: string;
  subtitle?: string;
  footer?: React.ReactNode;
  light?: boolean;
}

export function AboutCard({
  tag,
  title,
  subtitle,
  footer,
  light = false,
}: AboutCardHeroProps): JSX.Element {
  return (
    <Card isFooterBlurred={!!footer} className="w-full h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        {tag && (
          <p
            className={`text-tiny uppercase font-bold ${light ? "text-black/60" : "text-white/60"}`}
          >
            {tag}
          </p>
        )}
        <h4
          className={`${light ? "text-black" : "text-white"} font-medium text-lg`}
        >
          {title}
        </h4>
        {subtitle && (
          <p className={`${light ? "text-black/70" : "text-white/70"} text-sm`}>
            {subtitle}
          </p>
        )}
      </CardHeader>
      {footer && (
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}
