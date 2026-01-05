import { EmailIcon } from "@/assets/icons";
import { EmailToastPromise } from "@/shared/functions/email-toast-promise";
import { EmailContactOptions } from "@/types/email-contact";
import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { JSX } from "react";

/**
 * Componente de contato por e-mail.
 * Exibe um botão que, ao ser clicado, abre um menu suspenso com opções de contato por e-mail.
 * @returns {JSX.Element} Um elemento JSX que representa o componente.
 */
export function EmailContact(): JSX.Element {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          className="capitalize"
          color="secondary"
          startContent={<EmailIcon />}
          variant="shadow"
        >
          Email
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Dropdown Variants"
        color="secondary"
        variant="shadow"
      >
        {EmailContactOptions.map((option) => (
          <DropdownItem key={option.label} startContent={<option.icon />}>
            <a
              className="flex items-center gap-2 w-full"
              href={option.href}
              rel="noopener noreferrer"
              target="_blank"
              onClick={() =>
                EmailToastPromise(new Promise<void>((r) => setTimeout(r, 3000)))
              }
            >
              {option.label}
            </a>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
