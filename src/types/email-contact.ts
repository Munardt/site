import { BudgetIcon, ContactIcon, ProposalIcon } from "@/assets/icons";
import { ContactButton } from "@/interfaces/general/contact-buttons";

/** Constante com os opções de contato da seção de eamail de contato da Landing Page */
export const EmailContactOptions: ContactButton[] = [
  {
    label: "Contatar",
    href: "mailto:munardt@hotmail.com?subject=Contato%20Munardt®&body=Olá%20Gabriel%20Arthur%20Mundt,%0A%0AEstou%20entrando%20em%20contato%20para%20conversarmos.%20Fique%20à%20vontade%20para%20responder%20assim%20que%20possível.%0A%0AObrigado!",
    icon: ContactIcon,
  },
  {
    label: "Propostas",
    href: "mailto:munardt@hotmail.com?subject=Proposta%20Profissional&body=Olá%20Gabriel%20Arthur%20Mundt,%0A%0ATenho%20uma%20proposta%20profissional%20que%20gostaria%20de%20discutir%20com%20você.%0A%0A-%20Tipo%20de%20parceria%2Fvaga%3A%0A-%20Empresa%20ou%20projeto%3A%0A-%20Detalhes%3A%0A%0AFico%20no%20aguardo%20do%20seu%20retorno.%0A%0AAbraços!",
    icon: ProposalIcon,
  },
  {
    label: "Orçamentos",
    href: "mailto:munardt@hotmail.com?subject=Orçamento%20de%20Serviços%20de%20Programação&body=Olá%20Gabriel%20Arthur%20Mundt,%0A%0AGostaria%20de%20solicitar%20um%20orçamento%20dos%20seus%20serviços%20como%20desenvolvedor%20de%20software.%0A%0ADescreva%20abaixo%20o%20que%20precisa%20ser%20feito%3A%0A%0A-%20Tipo%20de%20projeto%3A%0A-%20Prazos%3A%0A-%20Outras%20informações%3A%0A%0AObrigado!",
    icon: BudgetIcon,
  },
];
