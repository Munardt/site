import { SVGProps } from "react";

/** Tipo de propriedades de um SVG */
export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
