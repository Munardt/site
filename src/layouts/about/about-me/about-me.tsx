import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";

import { CalculateAge } from "../calculate/calculate-age";

/**
 * Componente que exibe uma breve apresentação do desenvolvedor.
 * @returns {JSX.Element} Um elemento JSX que representa o componente.
 */
export function AboutMe(): JSX.Element {
  const [age, setAge]: [number, Dispatch<SetStateAction<number>>] =
    useState(CalculateAge());

  useEffect(() => {
    setAge(CalculateAge());
  }, []);
  const [isFollowed, setIsFollowed] = React.useState(false);

  const ButtonRender = () => {
    if (isFollowed) {
      return (
        <Button
          className="bg-transparent text-foreground border-default-200"
          color="secondary"
          radius="full"
          size="sm"
          startContent={<RiVerifiedBadgeFill />}
          variant="bordered"
          onPress={() => setIsFollowed(!isFollowed)}
        >
          Deixar de seguir
        </Button>
      );
    } else {
      return (
        <Button
          color="secondary"
          radius="full"
          size="sm"
          startContent={<FaInstagram />}
          variant="shadow"
          onPress={() => setIsFollowed(!isFollowed)}
        >
          <a
            href="https://www.instagram.com/munardt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Seguir
          </a>
        </Button>
      );
    }
  };

  return (
    <section>
      <Card
        className={`
        relative p-6 rounded-2xl border backdrop-blur-md shadow-xl overflow-hidden
        transition-all duration-300 hover:scale-[1.01]

        bg-white/30 border-white/20 text-zinc-900
        shadow-[0_4px_30px_rgba(180,100,255,0.15)]

        dark:bg-zinc-900/40 dark:border-zinc-300/10 dark:text-white
        dark:shadow-[0_4px_30px_rgba(140,120,255,0.2)]
        min-h-[300px]
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
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                Gabriel Arthur Mundt
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                @munardt
              </h5>
            </div>
          </div>
          <ButtonRender />
        </CardHeader>
        <CardBody>
          <p className="p-0 text-sm leading-relaxed">
            Tenho {age} anos e atuo como Desenvolvedor Front-End Pleno, com mais
            de 1 ano e meio de experiência em um sistema ERP construído do zero.
            Especializado em Angular e cada vez mais envolvido com o ecossistema
            React, gosto de explorar o equilíbrio entre performance, design e
            experiência do usuário.
          </p>
        </CardBody>
      </Card>
    </section>
  );
}
