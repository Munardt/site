import { IconType } from "react-icons/lib";

/** Interface para representar uma tecnologia */
export interface AboutTechnologiesInterface {
  /** Nome da tecnologia */
  name: string;

  /** Icone da tecnologia */
  icon: IconType;

  /** Cor do icone da tecnologia */
  iconColor: string;

  /** Cor do sombra da tecnologia */
  shadowColor: string;

  /** Cor do brilho da tecnologia */
  glowColor: string;

  /** Cor do tooltip da tecnologia */
  tooltipColor: string;

  /** Cor base do tooltip da tecnologia */
  baseTooltipColor: string;
}
